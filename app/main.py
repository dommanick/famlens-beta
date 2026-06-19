from __future__ import annotations

import json
import base64
import binascii
import io
import secrets
from pathlib import Path
from urllib.parse import quote

from fastapi import BackgroundTasks, Depends, FastAPI, File, Form, HTTPException, Request, UploadFile, status
from fastapi.responses import FileResponse, PlainTextResponse, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, HttpUrl
import qrcode
import qrcode.image.svg

from app.admin import build_admin_overview
from app.ai import (
    AnalysisError,
    analyze_product_image,
    analyze_receipt_image,
    chat_with_famlens,
    localize_product_judgement,
    localize_receipt_analysis,
)
from app.cards import save_judgement_card
from app.clerk import build_clerk_phrase, format_clerk_phrase, parse_clerk_command
from app.config import settings
from app.events import EventLogger, event_to_dict
from app.feedback import feedback_help_text, parse_feedback
from app.jobs import AnalysisJobStore, format_latest_result
from app.languages import DEFAULT_OUTPUT_LANGUAGE, normalize_output_language
from app.product import format_product_reply, format_wechat_reply, parse_product_judgement
from app.profiles import ProfileStore, format_profile, parse_profile_command
from app.records import FamilyRecordStore
from app.receipt import parse_receipt_analysis
from app.transcription import TranscriptionError, transcribe_audio
from app.tts import SpeechError, synthesize_speech
from app.uploads import card_thumbnail_data_url, image_data_url, normalize_image_upload, save_uploaded_image
from app.wechat import help_text, is_valid_signature, parse_message, text_reply


app = FastAPI(title=f"{settings.app_name} AI Shopping Assistant")
static_dir = Path(__file__).parent / "static"
card_output_dir = Path(settings.card_output_dir)
upload_output_dir = Path(settings.upload_output_dir)
card_output_dir.mkdir(parents=True, exist_ok=True)
upload_output_dir.mkdir(parents=True, exist_ok=True)
app.mount("/cards", StaticFiles(directory=str(card_output_dir)), name="cards")
app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")

profile_store = ProfileStore(settings.profile_store_path)
family_record_store = FamilyRecordStore(settings.family_record_store_path)
event_logger = EventLogger(settings.event_log_path)
analysis_jobs = AnalysisJobStore()


class AnalyzeRequest(BaseModel):
    image_url: HttpUrl
    family_profile: str | None = None
    output_language: str | None = None


class DebugMessageRequest(BaseModel):
    user_id: str = "debug-user"
    text: str | None = None
    image_url: HttpUrl | None = None


class ClerkRequest(BaseModel):
    question: str


class SpeechRequest(BaseModel):
    text: str
    output_language: str | None = None


class ChatRequest(BaseModel):
    question: str
    output_language: str | None = None
    user_id: str = "web-user"
    context: dict[str, object] | None = None
    history: list[dict[str, str]] | None = None


class LocalizeProductRequest(BaseModel):
    judgement: dict[str, object]
    output_language: str | None = None
    card_image_data_url: str | None = None


class LocalizeReceiptRequest(BaseModel):
    receipt: dict[str, object]
    output_language: str | None = None


class ClientEventRequest(BaseModel):
    event_type: str
    payload: dict[str, object] | None = None
    user_id: str = "web-user"


class ProfileSetupRequest(BaseModel):
    user_id: str = "web-user"
    output_language: str | None = None
    members_text: str = ""


class ProductRecordRequest(BaseModel):
    user_id: str = "web-user"
    output_language: str | None = None
    judgement: dict[str, object]


class ReceiptRecordRequest(BaseModel):
    user_id: str = "web-user"
    output_language: str | None = None
    receipt: dict[str, object]


def is_loopback_request(request: Request) -> bool:
    host = request.client.host if request.client else ""
    return host in {"127.0.0.1", "::1", "localhost"}


def admin_auth_error() -> HTTPException:
    return HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Admin login required.",
        headers={"WWW-Authenticate": "Basic"},
    )


def parse_basic_auth(authorization: str | None) -> tuple[str, str] | None:
    if not authorization:
        return None

    scheme, _, token = authorization.partition(" ")
    if scheme.lower() != "basic" or not token:
        return None

    try:
        raw = base64.b64decode(token, validate=True)
    except (binascii.Error, ValueError):
        return None

    for encoding in ("utf-8", "latin-1"):
        try:
            decoded = raw.decode(encoding)
        except UnicodeDecodeError:
            continue
        username, separator, password = decoded.partition(":")
        if separator:
            return username, password
    return None


def constant_time_text_equals(left: str, right: str) -> bool:
    return secrets.compare_digest(left.encode("utf-8"), right.encode("utf-8"))


def require_admin_access(request: Request) -> bool:
    if not settings.admin_password:
        if is_loopback_request(request):
            return True
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Admin is disabled until ADMIN_PASSWORD is configured.",
        )

    credentials = parse_basic_auth(request.headers.get("authorization"))
    if credentials is None:
        raise admin_auth_error()

    username, password = credentials
    username_ok = constant_time_text_equals(username, settings.admin_username)
    password_ok = constant_time_text_equals(password, settings.admin_password)
    if not (username_ok and password_ok):
        raise admin_auth_error()

    return True


@app.get("/")
async def web_app() -> FileResponse:
    return FileResponse(static_dir / "index.html")


@app.get("/invite")
async def invite_page() -> FileResponse:
    return FileResponse(static_dir / "invite.html")


@app.get("/manifest.json")
@app.get("/site.webmanifest")
async def web_manifest() -> FileResponse:
    return FileResponse(static_dir / "manifest.webmanifest", media_type="application/manifest+json")


@app.get("/api/invite/qr.svg")
async def invite_qr(request: Request) -> Response:
    base_url = settings.public_base_url or str(request.base_url).rstrip("/")
    invite_url = f"{base_url.rstrip('/')}/"
    image_factory = qrcode.image.svg.SvgPathImage
    qr = qrcode.make(invite_url, image_factory=image_factory)
    output = io.BytesIO()
    qr.save(output)
    return Response(
        output.getvalue(),
        media_type="image/svg+xml",
        headers={"Cache-Control": "no-store"},
    )


@app.get("/admin")
async def admin_app(_: bool = Depends(require_admin_access)) -> FileResponse:
    return FileResponse(static_dir / "admin.html")


@app.get("/privacy")
async def privacy_page() -> FileResponse:
    return FileResponse(static_dir / "privacy.html")


@app.get("/terms")
async def terms_page() -> FileResponse:
    return FileResponse(static_dir / "terms.html")


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/admin/overview")
async def admin_overview(
    request: Request,
    limit: int = 5000,
    _: bool = Depends(require_admin_access),
) -> dict[str, object]:
    safe_limit = min(max(limit, 1), 20000)
    return build_admin_overview(event_logger.read(limit=safe_limit))


@app.post("/api/events/client")
async def client_event(payload: ClientEventRequest) -> dict[str, str]:
    event_type = payload.event_type.strip().lower().replace(" ", "_")
    if not event_type.startswith("client_"):
        event_type = f"client_{event_type}"
    event_logger.log(event_type[:80], clean_user_id(payload.user_id), **(payload.payload or {}))
    return {"status": "ok"}


@app.get("/api/profile/{user_id}")
async def get_profile(user_id: str) -> dict[str, str | None]:
    clean_id = clean_user_id(user_id)
    profile = profile_store.get(clean_id)
    if profile is None:
        return {
            "user_id": clean_id,
            "output_language": None,
            "members_text": None,
            "updated_at": None,
        }
    return {
        "user_id": clean_id,
        "output_language": profile.language or None,
        "members_text": profile.members_text or profile.notes,
        "updated_at": profile.updated_at,
    }


@app.post("/api/profile")
async def save_profile(payload: ProfileSetupRequest) -> dict[str, str | None]:
    clean_id = clean_user_id(payload.user_id)
    language = normalize_output_language(payload.output_language)
    profile = profile_store.save_family_setup(clean_id, language, payload.members_text)
    event_logger.log(
        "web_profile_saved",
        clean_id,
        output_language=language,
        members_chars=len(profile.members_text),
    )
    return {
        "user_id": clean_id,
        "output_language": profile.language,
        "members_text": profile.members_text,
        "updated_at": profile.updated_at,
    }


@app.get("/api/records/{user_id}")
async def get_family_records(user_id: str) -> dict[str, object]:
    clean_id = clean_user_id(user_id)
    return family_record_store.get_user_records(clean_id)


@app.post("/api/records/product")
async def save_product_record(payload: ProductRecordRequest) -> dict[str, object]:
    clean_id = clean_user_id(payload.user_id)
    language = normalize_output_language(payload.output_language)
    record = family_record_store.save_product(clean_id, payload.judgement, language)
    report = family_record_store.monthly_report(clean_id)
    event_logger.log(
        "server_product_record_saved",
        clean_id,
        output_language=language,
        category=record.get("category"),
        verdict=record.get("verdict"),
    )
    return {"user_id": clean_id, "record": record, "monthly_report": report}


@app.post("/api/records/receipt")
async def save_receipt_record(payload: ReceiptRecordRequest) -> dict[str, object]:
    clean_id = clean_user_id(payload.user_id)
    language = normalize_output_language(payload.output_language)
    record = family_record_store.save_receipt(clean_id, payload.receipt, language)
    report = family_record_store.monthly_report(clean_id)
    event_logger.log(
        "server_receipt_record_saved",
        clean_id,
        output_language=language,
        store_name=record.get("store_name"),
        total_amount=record.get("total_amount"),
    )
    return {"user_id": clean_id, "record": record, "monthly_report": report}


@app.delete("/api/records/{user_id}")
async def clear_family_records(user_id: str) -> dict[str, object]:
    clean_id = clean_user_id(user_id)
    cleared = family_record_store.clear(clean_id)
    event_logger.log("server_family_records_cleared", clean_id, cleared=cleared)
    return {
        "user_id": clean_id,
        "cleared": cleared,
        "products": [],
        "receipts": [],
        "monthly_report": family_record_store.monthly_report(clean_id),
    }


@app.post("/api/analyze-upload")
async def analyze_upload(
    image: UploadFile = File(...),
    family_profile: str | None = Form(default=None),
    output_language: str | None = Form(default=None),
    user_id: str = Form(default="web-user"),
) -> dict[str, object]:
    content_type = image.content_type or ""
    data = await image.read()
    language = normalize_output_language(output_language)
    try:
        data, content_type = normalize_image_upload(data, content_type)
        saved_image = save_uploaded_image(data, content_type, settings.upload_output_dir)
        card_image_data_url = card_thumbnail_data_url(data, content_type)
        judgement = await analyze_product_image(image_data_url(data, content_type), family_profile, language)
    except ValueError as error:
        event_logger.log("web_image_analysis_failed", clean_user_id(user_id), output_language=language, error=str(error))
        raise HTTPException(status_code=400, detail=str(error)) from error
    except AnalysisError as error:
        event_logger.log("web_image_analysis_failed", clean_user_id(user_id), output_language=language, error=str(error))
        raise HTTPException(status_code=502, detail=str(error)) from error
    card_path = save_judgement_card(judgement, settings.card_output_dir, language, card_image_data_url)
    card_svg = card_path.read_text(encoding="utf-8")
    reply = format_product_reply(judgement, language)
    event_logger.log(
        "web_image_analysis_succeeded",
        clean_user_id(user_id),
        image_path=str(saved_image),
        card_path=str(card_path),
        category=judgement.category,
        verdict=judgement.verdict,
        output_language=language,
    )
    clean_id = clean_user_id(user_id)
    product_record = family_record_store.save_product(clean_id, judgement.to_dict(), language)
    return {
        "reply": reply,
        "judgement": judgement.to_dict(),
        "output_language": language,
        "voice_summary": judgement.voice_summary,
        "card_svg": card_svg,
        "card_url": public_card_url(card_path),
        "card_image_data_url": card_image_data_url,
        "record": product_record,
        "monthly_report": family_record_store.monthly_report(clean_id),
    }


@app.post("/api/analyze-receipt-upload")
async def analyze_receipt_upload(
    image: UploadFile = File(...),
    family_profile: str | None = Form(default=None),
    output_language: str | None = Form(default=None),
    user_id: str = Form(default="web-user"),
) -> dict[str, object]:
    content_type = image.content_type or ""
    data = await image.read()
    language = normalize_output_language(output_language)
    try:
        data, content_type = normalize_image_upload(data, content_type)
        saved_image = save_uploaded_image(data, content_type, settings.upload_output_dir)
        receipt = await analyze_receipt_image(image_data_url(data, content_type), family_profile, language)
    except ValueError as error:
        event_logger.log("web_receipt_analysis_failed", clean_user_id(user_id), output_language=language, error=str(error))
        raise HTTPException(status_code=400, detail=str(error)) from error
    except AnalysisError as error:
        event_logger.log("web_receipt_analysis_failed", clean_user_id(user_id), output_language=language, error=str(error))
        raise HTTPException(status_code=502, detail=str(error)) from error

    event_logger.log(
        "web_receipt_analysis_succeeded",
        clean_user_id(user_id),
        image_path=str(saved_image),
        store_name=receipt.store_name,
        total_amount=receipt.total_amount,
        item_count=receipt.item_count,
        output_language=language,
    )
    clean_id = clean_user_id(user_id)
    receipt_record = family_record_store.save_receipt(clean_id, receipt.to_dict(), language)
    return {
        "receipt": receipt.to_dict(),
        "output_language": language,
        "voice_summary": receipt.voice_summary,
        "record": receipt_record,
        "monthly_report": family_record_store.monthly_report(clean_id),
    }


@app.post("/api/localize-product")
async def localize_product(payload: LocalizeProductRequest) -> dict[str, object]:
    language = normalize_output_language(payload.output_language)
    try:
        source = parse_product_judgement(json.dumps(payload.judgement, ensure_ascii=False))
        judgement = await localize_product_judgement(source, language)
    except (ValueError, TypeError) as error:
        raise HTTPException(status_code=400, detail=f"Invalid judgement payload: {error}") from error
    except AnalysisError as error:
        raise HTTPException(status_code=502, detail=str(error)) from error

    card_path = save_judgement_card(
        judgement,
        settings.card_output_dir,
        language,
        payload.card_image_data_url,
    )
    card_svg = card_path.read_text(encoding="utf-8")
    return {
        "reply": format_product_reply(judgement, language),
        "judgement": judgement.to_dict(),
        "output_language": language,
        "voice_summary": judgement.voice_summary,
        "card_svg": card_svg,
        "card_url": public_card_url(card_path),
        "card_image_data_url": payload.card_image_data_url,
    }


@app.post("/api/localize-receipt")
async def localize_receipt(payload: LocalizeReceiptRequest) -> dict[str, object]:
    language = normalize_output_language(payload.output_language)
    try:
        source = parse_receipt_analysis(json.dumps(payload.receipt, ensure_ascii=False))
        receipt = await localize_receipt_analysis(source, language)
    except (ValueError, TypeError) as error:
        raise HTTPException(status_code=400, detail=f"Invalid receipt payload: {error}") from error
    except AnalysisError as error:
        raise HTTPException(status_code=502, detail=str(error)) from error

    return {
        "receipt": receipt.to_dict(),
        "output_language": language,
        "voice_summary": receipt.voice_summary,
    }


@app.post("/api/speech")
async def speech(payload: SpeechRequest) -> Response:
    language = normalize_output_language(payload.output_language)
    try:
        audio = await synthesize_speech(payload.text, language)
    except SpeechError as error:
        raise HTTPException(status_code=502, detail=str(error)) from error
    return Response(content=audio, media_type="audio/mpeg")


@app.post("/api/transcribe")
async def transcribe(
    audio: UploadFile = File(...),
    output_language: str = Form(DEFAULT_OUTPUT_LANGUAGE),
    user_id: str = Form("web-user"),
) -> dict[str, object]:
    language = normalize_output_language(output_language)
    content_type = audio.content_type or "application/octet-stream"
    if not content_type.startswith("audio/") and content_type != "application/octet-stream":
        raise HTTPException(status_code=400, detail="Please upload an audio file.")

    data = await audio.read()
    if not data:
        raise HTTPException(status_code=400, detail="Audio is empty.")
    if len(data) > 8 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="Audio is too large.")

    clean_id = clean_user_id(user_id)
    try:
        text = await transcribe_audio(data, content_type, language)
    except TranscriptionError as error:
        event_logger.log("voice_transcription_failed", clean_id, output_language=language, error=str(error))
        raise HTTPException(status_code=502, detail=str(error)) from error

    event_logger.log("voice_transcription_succeeded", clean_id, output_language=language, text_chars=len(text))
    return {"text": text, "output_language": language}


@app.post("/api/chat")
async def chat(payload: ChatRequest) -> dict[str, object]:
    language = normalize_output_language(payload.output_language)
    user_id = clean_user_id(payload.user_id)
    try:
        answer = await chat_with_famlens(
            question=payload.question,
            output_language=language,
            context=payload.context,
            history=payload.history,
        )
    except AnalysisError as error:
        event_logger.log("ai_chat_failed", user_id, output_language=language, error=str(error))
        raise HTTPException(status_code=502, detail=str(error)) from error
    event_logger.log(
        "ai_chat_answered",
        user_id,
        output_language=language,
        question_chars=len(payload.question),
        answer_chars=len(answer),
        context_type=(payload.context or {}).get("type"),
    )
    return {"answer": answer, "output_language": language}


@app.get("/wechat", response_class=PlainTextResponse)
async def verify_wechat(signature: str, timestamp: str, nonce: str, echostr: str) -> str:
    if not is_valid_signature(settings.wechat_token, signature, timestamp, nonce):
        raise HTTPException(status_code=403, detail="Invalid WeChat signature")
    return echostr


@app.post("/wechat", response_class=PlainTextResponse)
async def receive_wechat(
    request: Request,
    background_tasks: BackgroundTasks,
    signature: str,
    timestamp: str,
    nonce: str,
) -> str:
    if not is_valid_signature(settings.wechat_token, signature, timestamp, nonce):
        raise HTTPException(status_code=403, detail="Invalid WeChat signature")

    body = await request.body()
    message = parse_message(body)

    if message.msg_type == "text":
        content = handle_text_message(message.from_user, message.content or "")
        return text_reply(
            to_user=message.from_user,
            from_user=message.to_user,
            content=content,
        )

    if message.msg_type == "event":
        event_logger.log("wechat_event", message.from_user, event=message.event)
        return text_reply(
            to_user=message.from_user,
            from_user=message.to_user,
            content=welcome_text() if message.event == "subscribe" else help_text(),
        )

    if message.msg_type != "image" or not message.pic_url:
        event_logger.log("unsupported_message", message.from_user, msg_type=message.msg_type)
        return text_reply(
            to_user=message.from_user,
            from_user=message.to_user,
            content=help_text(),
        )

    profile = profile_store.get(message.from_user)
    profile_context = profile.to_prompt_context() if profile is not None else None
    analysis_jobs.mark_pending(message.from_user)
    event_logger.log(
        "image_analysis_queued",
        message.from_user,
        has_profile=profile_context is not None,
        image_url=message.pic_url,
    )
    background_tasks.add_task(
        analyze_image_in_background,
        message.from_user,
        message.pic_url,
        profile_context,
    )
    analysis = "照片收到了，我正在看。\n\n大约 10-20 秒后，回复：结果\n\n我会告诉你这是什么、能不能买、怎么用、注意什么。"
    return text_reply(
        to_user=message.from_user,
        from_user=message.to_user,
        content=analysis,
    )


@app.post("/debug/analyze")
async def debug_analyze(payload: AnalyzeRequest) -> dict[str, object]:
    language = normalize_output_language(payload.output_language)
    judgement = await analyze_product_image(str(payload.image_url), payload.family_profile, language)
    card_path = save_judgement_card(judgement, settings.card_output_dir, language)
    return {
        "reply": format_product_reply(judgement, language),
        "output_language": language,
        "card_path": str(card_path.resolve()),
        "card_url": public_card_url(card_path),
        "judgement": judgement.to_dict(),
    }


@app.post("/debug/message")
async def debug_message(payload: DebugMessageRequest) -> dict[str, str]:
    if payload.text is not None:
        return {"reply": handle_text_message(payload.user_id, payload.text)}

    if payload.image_url is not None:
        profile = profile_store.get(payload.user_id)
        profile_context = profile.to_prompt_context() if profile is not None else None
        judgement = await analyze_product_image(str(payload.image_url), profile_context)
        card_path = save_judgement_card(judgement, settings.card_output_dir)
        return {
            "reply": format_product_reply(judgement),
            "card_path": str(card_path.resolve()),
            "card_url": public_card_url(card_path),
        }

    raise HTTPException(status_code=400, detail="Provide text or image_url.")


@app.get("/debug/profile/{user_id}")
async def debug_profile(user_id: str) -> dict[str, str | None]:
    profile = profile_store.get(user_id)
    if profile is None:
        return {"user_id": user_id, "notes": None, "updated_at": None}
    return {
        "user_id": user_id,
        "notes": profile.notes,
        "updated_at": profile.updated_at,
    }


@app.get("/debug/events")
async def debug_events(limit: int = 50) -> dict[str, object]:
    safe_limit = min(max(limit, 1), 200)
    events = [event_to_dict(event) for event in event_logger.tail(safe_limit)]
    return {"events": events}


@app.post("/debug/clerk")
async def debug_clerk(payload: ClerkRequest) -> dict[str, str]:
    phrase = build_clerk_phrase(payload.question)
    return {
        "reply": format_clerk_phrase(phrase),
        "chinese": phrase.chinese,
        "english": phrase.english,
        "hint": phrase.hint,
    }


def handle_text_message(user_id: str, content: str) -> str:
    if content.strip() in {"结果", "查看结果", "看结果", "分析结果", "最新结果"}:
        event_logger.log("latest_result_requested", user_id)
        return format_latest_result(analysis_jobs.latest(user_id))

    clerk_question = parse_clerk_command(content)
    if clerk_question is not None:
        phrase = build_clerk_phrase(clerk_question)
        event_logger.log("clerk_phrase_requested", user_id, question=clerk_question)
        return format_clerk_phrase(phrase)

    feedback = parse_feedback(content)
    if feedback is not None:
        feedback_value, raw_text = feedback
        event_logger.log("feedback_received", user_id, feedback=feedback_value, text=raw_text)
        return feedback_help_text()

    command = parse_profile_command(content)
    if command is None:
        event_logger.log("help_shown", user_id, text=content.strip()[:200])
        return help_text()

    action, notes = command
    if action == "show":
        event_logger.log("profile_shown", user_id)
        return format_profile(profile_store.get(user_id))

    if action == "clear":
        profile_store.delete(user_id)
        event_logger.log("profile_cleared", user_id)
        return "家庭档案已清除。之后我会按普通家庭视角分析商品。"

    if not notes:
        return "我没看到具体家庭情况。可以这样发：\n设置家庭：我血脂高；岳母高血压；孩子8岁。"

    if action == "save":
        profile = profile_store.save(user_id, notes)
        event_logger.log("profile_saved", user_id, notes_chars=len(profile.notes))
        return "已保存。\n\n" + format_profile(profile)

    if action == "append":
        profile = profile_store.append(user_id, notes)
        event_logger.log("profile_appended", user_id, notes_chars=len(profile.notes))
        return "已补充。\n\n" + format_profile(profile)

    return help_text()


def public_card_url(card_path: Path) -> str:
    filename = quote(card_path.name)
    if settings.public_base_url:
        return f"{settings.public_base_url}/cards/{filename}"
    return f"/cards/{filename}"


def clean_user_id(user_id: str) -> str:
    clean = "".join(char for char in str(user_id or "").strip() if char.isalnum() or char in {"-", "_", "."})
    return (clean or "web-user")[:120]


def append_card_link(reply: str, card_url: str) -> str:
    return f"{reply.rstrip()}\n\n图文卡：{card_url}"


def welcome_text() -> str:
    return (
        "欢迎使用超市购物助手。\n\n"
        "你可以直接发商品照片，我帮你看：这是什么、能不能买、怎么用、注意什么。\n\n"
        "也可以发：问店员：韩国豆芽在哪里"
    )


async def analyze_image_in_background(
    user_id: str,
    image_url: str,
    profile_context: str | None,
) -> None:
    try:
        event_logger.log(
            "image_analysis_requested",
            user_id,
            has_profile=profile_context is not None,
            image_url=image_url,
        )
        judgement = await analyze_product_image(image_url, profile_context)
        card_path = save_judgement_card(judgement, settings.card_output_dir)
        analysis = format_wechat_reply(judgement)
        card_url = public_card_url(card_path)
        analysis_jobs.mark_done(user_id, analysis, card_url if card_url.startswith("http") else None)
        event_logger.log(
            "image_analysis_succeeded",
            user_id,
            has_profile=profile_context is not None,
            response_chars=len(analysis),
            card_path=str(card_path),
        )
    except AnalysisError as error:
        event_logger.log("image_analysis_failed", user_id, error=str(error))
        analysis_jobs.mark_failed(
            user_id,
            "这张图我暂时没分析成功。\n\n"
            "你可以再拍清楚一点，尽量包含商品正面、配料表、营养表或烹饪说明。",
        )
