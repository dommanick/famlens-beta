from __future__ import annotations

import json
from dataclasses import dataclass, field
from typing import Any

from app.languages import normalize_output_language


@dataclass(frozen=True)
class ProductJudgement:
    verdict: str
    item_name: str
    category: str
    subtitle: str
    what_it_is: str
    how_to_use: str
    benefit: str
    warning: str
    storage: str
    voice_summary: str
    needs_more_photo: str | None = None
    confidence: str = "medium"

    def to_dict(self) -> dict[str, Any]:
        return {
            "verdict": self.verdict,
            "item_name": self.item_name,
            "category": self.category,
            "subtitle": self.subtitle,
            "what_it_is": self.what_it_is,
            "how_to_use": self.how_to_use,
            "benefit": self.benefit,
            "warning": self.warning,
            "storage": self.storage,
            "voice_summary": self.voice_summary,
            "needs_more_photo": self.needs_more_photo,
            "confidence": self.confidence,
        }


def parse_product_judgement(raw_text: str) -> ProductJudgement:
    data = _load_json(raw_text)

    return ProductJudgement(
        verdict=_clean(data.get("verdict"), "看情况"),
        item_name=_clean(data.get("item_name"), "这个商品"),
        category=_clean(data.get("category"), "其他商品"),
        subtitle=_clean(data.get("subtitle"), "先看清楚再买"),
        what_it_is=_clean(data.get("what_it_is"), "我还不能确定这是什么。"),
        how_to_use=_clean(data.get("how_to_use"), "请再拍一张包装背面或说明。"),
        benefit=_clean(data.get("benefit"), "看清用途后再决定。"),
        warning=_clean(data.get("warning"), "不要只看正面包装。"),
        storage=_clean(data.get("storage"), "按包装说明保存。"),
        voice_summary=_clean(data.get("voice_summary"), "这件商品我还不太确定，建议再拍一张背面。", 180),
        needs_more_photo=_optional(data.get("needs_more_photo")),
        confidence=_clean(data.get("confidence"), "medium"),
    )


def format_wechat_reply(judgement: ProductJudgement) -> str:
    lines = [
        f"{judgement.verdict}：{judgement.item_name}",
        "",
        f"这是什么：{judgement.what_it_is}",
        "",
        f"怎么用：{judgement.how_to_use}",
        "",
        f"有什么好：{judgement.benefit}",
        "",
        f"注意：{judgement.warning}",
    ]

    if judgement.storage:
        lines.extend(["", f"保存：{judgement.storage}"])

    if judgement.needs_more_photo:
        lines.extend(["", f"请补拍：{judgement.needs_more_photo}"])

    lines.extend(["", "你也可以直接问：这个怎么做？这个在哪里？"])
    return "\n".join(lines)


def format_product_reply(judgement: ProductJudgement, output_language: str | None = None) -> str:
    labels = _reply_labels(output_language)
    lines = [
        f"{judgement.verdict}: {judgement.item_name}",
        "",
        f"{labels['what']}: {judgement.what_it_is}",
        "",
        f"{labels['use']}: {judgement.how_to_use}",
        "",
        f"{labels['benefit']}: {judgement.benefit}",
        "",
        f"{labels['warning']}: {judgement.warning}",
    ]

    if judgement.storage:
        lines.extend(["", f"{labels['storage']}: {judgement.storage}"])

    if judgement.needs_more_photo:
        lines.extend(["", f"{labels['more_photo']}: {judgement.needs_more_photo}"])

    return "\n".join(lines)


def fallback_judgement(reason: str) -> ProductJudgement:
    return ProductJudgement(
        verdict="需要再看一张",
        item_name="这个商品",
        category="未知",
        subtitle="正面信息不够",
        what_it_is="我现在还不能确定这是什么。",
        how_to_use="请再拍包装背面、说明书或价签。",
        benefit="看清用途后，我再告诉你值不值得买。",
        warning="先别急着买，避免买错。",
        storage="按包装说明保存。",
        voice_summary="这件商品现在看不清，建议再拍包装背面或说明书。",
        needs_more_photo="包装背面、说明书、价签或条码",
        confidence="low",
    )


def _reply_labels(output_language: str | None) -> dict[str, str]:
    labels = {
        "zh-Hans": {
            "what": "这是什么",
            "use": "怎么用",
            "benefit": "有什么好",
            "warning": "注意",
            "storage": "保存",
            "more_photo": "请补拍",
        },
        "en": {
            "what": "What it is",
            "use": "How to use",
            "benefit": "Good for",
            "warning": "Watch out",
            "storage": "Storage",
            "more_photo": "Please photograph",
        },
        "es": {
            "what": "Qué es",
            "use": "Cómo usarlo",
            "benefit": "Para qué sirve",
            "warning": "Cuidado",
            "storage": "Guardar",
            "more_photo": "Toma otra foto",
        },
        "fr": {
            "what": "C'est quoi",
            "use": "Mode d'emploi",
            "benefit": "Utile pour",
            "warning": "Attention",
            "storage": "Conserver",
            "more_photo": "Photo à ajouter",
        },
        "ko": {
            "what": "무엇인가요",
            "use": "사용 방법",
            "benefit": "좋은 점",
            "warning": "주의",
            "storage": "보관",
            "more_photo": "추가 사진",
        },
        "ja": {
            "what": "これは何",
            "use": "使い方",
            "benefit": "よい点",
            "warning": "注意",
            "storage": "保存",
            "more_photo": "追加写真",
        },
        "vi": {
            "what": "Là gì",
            "use": "Cách dùng",
            "benefit": "Lợi ích",
            "warning": "Lưu ý",
            "storage": "Bảo quản",
            "more_photo": "Chụp thêm",
        },
        "hi": {
            "what": "यह क्या है",
            "use": "कैसे इस्तेमाल करें",
            "benefit": "किस काम का",
            "warning": "ध्यान रखें",
            "storage": "कैसे रखें",
            "more_photo": "एक और फोटो लें",
        },
    }
    return labels[normalize_output_language(output_language)]


def _load_json(raw_text: str) -> dict[str, Any]:
    text = raw_text.strip()
    if text.startswith("```"):
        text = text.strip("`")
        if text.startswith("json"):
            text = text[4:].strip()

    start = text.find("{")
    end = text.rfind("}")
    if start >= 0 and end > start:
        text = text[start : end + 1]

    data = json.loads(text)
    if not isinstance(data, dict):
        raise ValueError("Expected a JSON object.")
    return data


def _clean(value: Any, default: str, limit: int = 80) -> str:
    if value is None:
        return default
    text = str(value).strip()
    if not text:
        return default
    return _shorten(text, limit)


def _optional(value: Any) -> str | None:
    if value is None:
        return None
    text = str(value).strip()
    return _shorten(text) if text else None


def _shorten(text: str, limit: int = 80) -> str:
    text = " ".join(text.split())
    if len(text) <= limit:
        return text
    return text[: limit - 1] + "…"
