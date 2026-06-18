from __future__ import annotations

import json
from dataclasses import dataclass
from typing import Any


@dataclass(frozen=True)
class ReceiptItem:
    name: str
    translated_name: str
    category: str
    amount: float | None = None
    confidence: str = "medium"

    def to_dict(self) -> dict[str, Any]:
        return {
            "name": self.name,
            "translated_name": self.translated_name,
            "category": self.category,
            "amount": self.amount,
            "confidence": self.confidence,
        }


@dataclass(frozen=True)
class ReceiptCategorySummary:
    category: str
    estimated_amount: float | None
    note: str

    def to_dict(self) -> dict[str, Any]:
        return {
            "category": self.category,
            "estimated_amount": self.estimated_amount,
            "note": self.note,
        }


@dataclass(frozen=True)
class ReceiptAnalysis:
    store_name: str
    purchase_date: str
    currency: str
    total_amount: float | None
    tax_amount: float | None
    item_count: int | None
    items: list[ReceiptItem]
    category_summary: list[ReceiptCategorySummary]
    nutrition_signal: str
    spending_signal: str
    family_report_note: str
    voice_summary: str
    needs_more_photo: str | None = None
    confidence: str = "medium"

    def to_dict(self) -> dict[str, Any]:
        return {
            "store_name": self.store_name,
            "purchase_date": self.purchase_date,
            "currency": self.currency,
            "total_amount": self.total_amount,
            "tax_amount": self.tax_amount,
            "item_count": self.item_count,
            "items": [item.to_dict() for item in self.items],
            "category_summary": [category.to_dict() for category in self.category_summary],
            "nutrition_signal": self.nutrition_signal,
            "spending_signal": self.spending_signal,
            "family_report_note": self.family_report_note,
            "voice_summary": self.voice_summary,
            "needs_more_photo": self.needs_more_photo,
            "confidence": self.confidence,
        }


def parse_receipt_analysis(raw_text: str) -> ReceiptAnalysis:
    data = _load_json(raw_text)
    items = [_parse_item(item) for item in _list(data.get("items"))]
    category_summary = [_parse_category(item) for item in _list(data.get("category_summary"))]

    return ReceiptAnalysis(
        store_name=_clean(data.get("store_name"), "未知商店"),
        purchase_date=_clean(data.get("purchase_date"), "未知日期"),
        currency=_clean(data.get("currency"), "CAD"),
        total_amount=_amount(data.get("total_amount")),
        tax_amount=_amount(data.get("tax_amount")),
        item_count=_int(data.get("item_count")),
        items=items,
        category_summary=category_summary,
        nutrition_signal=_clean(data.get("nutrition_signal"), "这张小票还不足以判断家庭饮食结构。", 120),
        spending_signal=_clean(data.get("spending_signal"), "这张小票可以先用于记录本次支出。", 120),
        family_report_note=_clean(data.get("family_report_note"), "保存多张小票后，才能看月度趋势。", 120),
        voice_summary=_clean(data.get("voice_summary"), "这是一张购物小票，可以用来记录本次采购和花费。", 160),
        needs_more_photo=_optional(data.get("needs_more_photo")),
        confidence=_clean(data.get("confidence"), "medium"),
    )


def fallback_receipt_analysis(reason: str) -> ReceiptAnalysis:
    return ReceiptAnalysis(
        store_name="未知商店",
        purchase_date="未知日期",
        currency="CAD",
        total_amount=None,
        tax_amount=None,
        item_count=None,
        items=[],
        category_summary=[],
        nutrition_signal="这张小票看不清，还不能统计家庭饮食结构。",
        spending_signal="请再拍清楚一点，包含商品名称和总金额。",
        family_report_note="小票是月度饮食和支出报告的数据入口。",
        voice_summary="这张小票现在看不清，请重新拍一张完整清楚的小票。",
        needs_more_photo="完整小票，包含商品清单和总金额",
        confidence="low",
    )


def _parse_item(value: Any) -> ReceiptItem:
    if not isinstance(value, dict):
        value = {}
    return ReceiptItem(
        name=_clean(value.get("name"), "未知商品", 80),
        translated_name=_clean(value.get("translated_name"), "未知商品", 80),
        category=_clean(value.get("category"), "其他", 30),
        amount=_amount(value.get("amount")),
        confidence=_clean(value.get("confidence"), "medium", 20),
    )


def _parse_category(value: Any) -> ReceiptCategorySummary:
    if not isinstance(value, dict):
        value = {}
    return ReceiptCategorySummary(
        category=_clean(value.get("category"), "其他", 30),
        estimated_amount=_amount(value.get("estimated_amount")),
        note=_clean(value.get("note"), "本次采购记录。", 80),
    )


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
    text = " ".join(str(value).split())
    if not text:
        return default
    if len(text) <= limit:
        return text
    return text[: limit - 1] + "…"


def _optional(value: Any) -> str | None:
    if value is None:
        return None
    text = " ".join(str(value).split())
    return text if text else None


def _list(value: Any) -> list[Any]:
    return value if isinstance(value, list) else []


def _amount(value: Any) -> float | None:
    if value is None or value == "":
        return None
    try:
        return round(float(str(value).replace("$", "").replace(",", "").strip()), 2)
    except ValueError:
        return None


def _int(value: Any) -> int | None:
    if value is None or value == "":
        return None
    try:
        return int(float(str(value).strip()))
    except ValueError:
        return None
