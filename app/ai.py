from __future__ import annotations

import json
from typing import Any

import httpx

from app.config import settings
from app.languages import DEFAULT_OUTPUT_LANGUAGE, normalize_output_language, output_language_prompt_name
from app.product import ProductJudgement, fallback_judgement, parse_product_judgement
from app.prompts import SYSTEM_PROMPT, build_user_prompt
from app.receipt import ReceiptAnalysis, fallback_receipt_analysis, parse_receipt_analysis
from app.receipt_prompts import RECEIPT_SYSTEM_PROMPT, build_receipt_user_prompt


class AnalysisError(RuntimeError):
    pass


async def analyze_product_image(
    image_url: str,
    family_profile: str | None = None,
    output_language: str | None = None,
) -> ProductJudgement:
    text = await _analyze_image_with_prompts(
        image_url=image_url,
        system_prompt=SYSTEM_PROMPT,
        user_prompt=build_user_prompt(family_profile, output_language),
    )
    if not text:
        return fallback_judgement("AI response did not include text.")

    try:
        judgement = parse_product_judgement(text)
        return await _localize_product_judgement(judgement, output_language)
    except (ValueError, TypeError) as error:
        raise AnalysisError(f"Could not parse AI JSON: {error}") from error


async def localize_product_judgement(
    judgement: ProductJudgement,
    output_language: str | None,
) -> ProductJudgement:
    return await _localize_product_judgement(judgement, output_language, force=True)


async def analyze_receipt_image(
    image_url: str,
    family_profile: str | None = None,
    output_language: str | None = None,
) -> ReceiptAnalysis:
    text = await _analyze_image_with_prompts(
        image_url=image_url,
        system_prompt=RECEIPT_SYSTEM_PROMPT,
        user_prompt=build_receipt_user_prompt(family_profile, output_language),
    )
    if not text:
        return fallback_receipt_analysis("AI response did not include text.")

    try:
        receipt = parse_receipt_analysis(text)
        return await _localize_receipt_analysis(receipt, output_language)
    except (ValueError, TypeError) as error:
        raise AnalysisError(f"Could not parse receipt JSON: {error}") from error


async def localize_receipt_analysis(
    receipt: ReceiptAnalysis,
    output_language: str | None,
) -> ReceiptAnalysis:
    return await _localize_receipt_analysis(receipt, output_language, force=True)


async def chat_with_famlens(
    question: str,
    output_language: str | None = None,
    context: dict[str, Any] | None = None,
    history: list[dict[str, str]] | None = None,
) -> str:
    clean_question = " ".join(question.split())
    if not clean_question:
        raise AnalysisError("Question is empty.")

    payload = _chat_payload(clean_question, output_language, context or {}, history or [])
    text = await _post_responses(payload)
    return text or _chat_fallback_answer(output_language)


async def _analyze_image_with_prompts(image_url: str, system_prompt: str, user_prompt: str) -> str:
    payload = {
        "model": settings.ai_model,
        "input": [
            {
                "role": "system",
                "content": [{"type": "input_text", "text": system_prompt}],
            },
            {
                "role": "user",
                "content": [
                    {"type": "input_text", "text": user_prompt},
                    {"type": "input_image", "image_url": image_url},
                ],
            },
        ],
    }
    return await _post_responses(payload)


async def _localize_product_judgement(
    judgement: ProductJudgement,
    output_language: str | None,
    force: bool = False,
) -> ProductJudgement:
    language = normalize_output_language(output_language)
    if language == DEFAULT_OUTPUT_LANGUAGE and not force:
        return judgement

    payload = _localization_payload(
        data=judgement.to_dict(),
        target_language=output_language_prompt_name(language),
        field_notes=(
            "Translate/localize all user-facing values. Keep these JSON keys exactly: "
            "verdict, item_name, category, subtitle, what_it_is, how_to_use, benefit, "
            "warning, storage, voice_summary, needs_more_photo, confidence. "
            "Keep brand names, visible package text, numbers, units, and null values unchanged. "
            "Keep confidence as high, medium, or low."
        ),
    )
    text = await _post_responses(payload)
    if not text:
        return judgement
    try:
        return parse_product_judgement(text)
    except (ValueError, TypeError):
        return judgement


async def _localize_receipt_analysis(
    receipt: ReceiptAnalysis,
    output_language: str | None,
    force: bool = False,
) -> ReceiptAnalysis:
    language = normalize_output_language(output_language)
    if language == DEFAULT_OUTPUT_LANGUAGE and not force:
        return receipt

    payload = _localization_payload(
        data=receipt.to_dict(),
        target_language=output_language_prompt_name(language),
        field_notes=(
            "Translate/localize user-facing values while preserving the exact JSON structure. "
            "Do not translate store_name, purchase_date, currency, original item name, amounts, "
            "tax_amount, item_count, or confidence values. Localize translated_name, category, "
            "note, nutrition_signal, spending_signal, family_report_note, voice_summary, and "
            "needs_more_photo. Keep null values unchanged."
        ),
    )
    text = await _post_responses(payload)
    if not text:
        return receipt
    try:
        return parse_receipt_analysis(text)
    except (ValueError, TypeError):
        return receipt


def _localization_payload(
    data: dict[str, object],
    target_language: str,
    field_notes: str,
) -> dict[str, object]:
    return {
        "model": settings.ai_model,
        "input": [
            {
                "role": "system",
                "content": [
                    {
                        "type": "input_text",
                        "text": (
                            "You are FamLens's localization layer. Output JSON only. "
                            "Do not add Markdown, comments, or extra text."
                        ),
                    }
                ],
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "input_text",
                        "text": (
                            f"Target language: {target_language}.\n"
                            f"{field_notes}\n"
                            "Make the wording short, natural, warm, and easy for older adults to understand.\n"
                            "Input JSON:\n"
                            f"{json.dumps(data, ensure_ascii=False)}"
                        ),
                    }
                ],
            },
        ],
    }


def _chat_payload(
    question: str,
    output_language: str | None,
    context: dict[str, Any],
    history: list[dict[str, str]],
) -> dict[str, object]:
    language = normalize_output_language(output_language)
    target_language = output_language_prompt_name(language)
    safe_history = [
        {
            "role": "assistant" if item.get("role") == "assistant" else "user",
            "text": " ".join(str(item.get("text", "")).split())[:500],
        }
        for item in history[-6:]
        if str(item.get("text", "")).strip()
    ]

    return {
        "model": settings.ai_model,
        "input": [
            {
                "role": "system",
                "content": [{"type": "input_text", "text": _chat_system_prompt(target_language)}],
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "input_text",
                        "text": (
                            f"Target language: {target_language}.\n"
                            "Answer the user's latest question using the current shopping context when useful.\n"
                            "Keep the answer short, practical, and easy for older adults. Prefer 2-5 short bullets.\n"
                            "If the question is medical, safety-critical, legal, or requires a professional, say what is safe to do now and suggest asking a qualified professional.\n"
                            "Current context JSON:\n"
                            f"{json.dumps(_compact_context(context), ensure_ascii=False)}\n"
                            "Recent chat JSON:\n"
                            f"{json.dumps(safe_history, ensure_ascii=False)}\n"
                            f"Latest user question: {question}"
                        ),
                    }
                ],
            },
        ],
    }


def _chat_system_prompt(target_language: str) -> str:
    return (
        "You are FamLens's shopping assistant for immigrant families and older adults. "
        f"Always answer in {target_language}. "
        "You help explain products, labels, receipts, usage, nutrition, household safety, and simple store communication. "
        "Do not invent package facts that are not in the provided context; clearly say when more photos are needed. "
        "Use warm, direct, plain wording. Avoid long paragraphs. "
        "For supplements, medicines, eye drops, wound care, baby products, allergies, chronic disease, or interactions, do not diagnose or replace a clinician."
    )


def _compact_context(context: dict[str, Any]) -> dict[str, Any]:
    allowed_top = {"type", "output_language", "judgement", "receipt"}
    compact = {key: value for key, value in context.items() if key in allowed_top}
    if "judgement" in compact and isinstance(compact["judgement"], dict):
        compact["judgement"] = _trim_dict(compact["judgement"], 12)
    if "receipt" in compact and isinstance(compact["receipt"], dict):
        receipt = _trim_dict(compact["receipt"], 12)
        if isinstance(receipt.get("items"), list):
            receipt["items"] = receipt["items"][:12]
        if isinstance(receipt.get("category_summary"), list):
            receipt["category_summary"] = receipt["category_summary"][:8]
        compact["receipt"] = receipt
    return compact


def _trim_dict(data: dict[str, Any], max_keys: int) -> dict[str, Any]:
    trimmed: dict[str, Any] = {}
    for index, (key, value) in enumerate(data.items()):
        if index >= max_keys:
            break
        if isinstance(value, str):
            trimmed[key] = value[:700]
        else:
            trimmed[key] = value
    return trimmed


def _chat_fallback_answer(output_language: str | None) -> str:
    language = normalize_output_language(output_language)
    fallbacks = {
        "zh-Hans": "我现在没有拿到足够信息。请再问一句，或补拍商品背面、说明文字、小票清单。",
        "en": "I do not have enough information yet. Please ask again, or add a clearer photo of the label, instructions, or receipt.",
        "es": "Todavía no tengo suficiente información. Pregunta de nuevo o sube una foto más clara.",
        "fr": "Je n'ai pas encore assez d'information. Posez la question autrement ou ajoutez une photo plus nette.",
        "ko": "아직 정보가 부족합니다. 다시 질문하거나 라벨, 설명, 영수증 사진을 더 선명하게 올려 주세요.",
        "ja": "まだ情報が足りません。もう一度質問するか、ラベルや説明、レシートをより鮮明に撮ってください。",
        "vi": "Tôi chưa có đủ thông tin. Hãy hỏi lại hoặc thêm ảnh nhãn, hướng dẫn hay hóa đơn rõ hơn.",
        "hi": "अभी जानकारी पर्याप्त नहीं है। कृपया फिर से पूछें या लेबल, निर्देश या रसीद की साफ फोटो जोड़ें।",
    }
    return fallbacks[language]


async def _post_responses(payload: dict[str, object]) -> str:
    if not settings.openai_api_key:
        raise AnalysisError("OPENAI_API_KEY is not configured.")

    headers = {
        "Authorization": f"Bearer {settings.openai_api_key}",
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient(timeout=settings.request_timeout_seconds) as client:
        response = await client.post(
            "https://api.openai.com/v1/responses",
            headers=headers,
            json=payload,
        )

    if response.status_code >= 400:
        raise AnalysisError(f"AI request failed: {response.status_code} {response.text[:500]}")

    data = response.json()
    text = data.get("output_text")
    if isinstance(text, str) and text.strip():
        return text

    chunks: list[str] = []
    for item in data.get("output", []):
        for content in item.get("content", []):
            if content.get("type") in {"output_text", "text"} and content.get("text"):
                chunks.append(content["text"])

    if not chunks:
        return ""

    return "\n".join(chunks).strip()
