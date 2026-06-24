from __future__ import annotations

import json
import os
import tempfile
from collections import defaultdict
from datetime import UTC, datetime
from pathlib import Path
from typing import Any


PRODUCT_LIMIT = 80
RECEIPT_LIMIT = 120


class FamilyRecordStore:
    def __init__(self, path: str) -> None:
        self.path = Path(path)

    def get_user_records(self, user_id: str) -> dict[str, Any]:
        user = self._user_bucket(user_id)
        products = _list(user.get("products"))[:PRODUCT_LIMIT]
        receipts = _list(user.get("receipts"))[:RECEIPT_LIMIT]
        return {
            "user_id": user_id,
            "products": products,
            "receipts": receipts,
            "monthly_report": self.monthly_report(user_id, products=products, receipts=receipts),
        }

    def save_product(self, user_id: str, judgement: dict[str, Any], output_language: str) -> dict[str, Any]:
        data = self._read()
        user = data.setdefault(user_id, {"products": [], "receipts": []})
        products = _list(user.get("products"))
        record = _product_record(judgement, output_language)
        user["products"] = _upsert(records=products, record=record, limit=PRODUCT_LIMIT)
        data[user_id] = user
        self._write(data)
        return record

    def save_receipt(self, user_id: str, receipt: dict[str, Any], output_language: str) -> dict[str, Any]:
        data = self._read()
        user = data.setdefault(user_id, {"products": [], "receipts": []})
        receipts = _list(user.get("receipts"))
        record = _receipt_record(receipt, output_language)
        user["receipts"] = _upsert(records=receipts, record=record, limit=RECEIPT_LIMIT)
        data[user_id] = user
        self._write(data)
        return record

    def clear(self, user_id: str) -> bool:
        data = self._read()
        existed = user_id in data
        data.pop(user_id, None)
        self._write(data)
        return existed

    def migrate_user(self, source_user_id: str, target_user_id: str) -> bool:
        if source_user_id == target_user_id:
            return False
        data = self._read()
        source = data.get(source_user_id)
        if not isinstance(source, dict):
            return False
        target = data.setdefault(target_user_id, {"products": [], "receipts": []})
        target["products"] = _merge_records(_list(target.get("products")), _list(source.get("products")), PRODUCT_LIMIT)
        target["receipts"] = _merge_records(_list(target.get("receipts")), _list(source.get("receipts")), RECEIPT_LIMIT)
        data[target_user_id] = target
        data.pop(source_user_id, None)
        self._write(data)
        return True

    def monthly_report(
        self,
        user_id: str,
        products: list[dict[str, Any]] | None = None,
        receipts: list[dict[str, Any]] | None = None,
    ) -> dict[str, Any]:
        if products is None or receipts is None:
            user = self._user_bucket(user_id)
            products = _list(user.get("products"))[:PRODUCT_LIMIT]
            receipts = _list(user.get("receipts"))[:RECEIPT_LIMIT]

        month = datetime.now(UTC).strftime("%Y-%m")
        month_products = [item for item in products if str(item.get("created_at", "")).startswith(month)]
        month_receipts = [item for item in receipts if str(item.get("created_at", "")).startswith(month)]
        currency = _first_text(month_receipts, "currency") or "CAD"
        total_spend = round(sum(_number(item.get("total_amount")) for item in month_receipts), 2)
        category_totals = _category_totals(month_receipts)
        top_categories = [
            {"category": category, "estimated_amount": round(amount, 2)}
            for category, amount in sorted(category_totals.items(), key=lambda item: item[1], reverse=True)[:6]
        ]

        return {
            "month": month,
            "currency": currency,
            "total_spend": total_spend,
            "receipt_count": len(month_receipts),
            "product_count": len(month_products),
            "top_categories": top_categories,
            "nutrition_signals": _recent_texts(month_receipts, "nutrition_signal", 3),
            "spending_signals": _recent_texts(month_receipts, "spending_signal", 3),
            "family_report_notes": _recent_texts(month_receipts, "family_report_note", 3),
            "recent_products": month_products[:5],
            "recent_receipts": month_receipts[:5],
        }

    def _user_bucket(self, user_id: str) -> dict[str, Any]:
        raw = self._read().get(user_id)
        if not isinstance(raw, dict):
            return {"products": [], "receipts": []}
        return raw

    def _read(self) -> dict[str, Any]:
        if not self.path.exists():
            return {}
        with self.path.open("r", encoding="utf-8") as file:
            data = json.load(file)
        if not isinstance(data, dict):
            return {}
        return data

    def _write(self, data: dict[str, Any]) -> None:
        self.path.parent.mkdir(parents=True, exist_ok=True)
        fd, tmp_name = tempfile.mkstemp(
            dir=str(self.path.parent),
            prefix=f".{self.path.name}.",
            text=True,
        )
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as file:
                json.dump(data, file, ensure_ascii=False, indent=2, sort_keys=True)
                file.write("\n")
            os.replace(tmp_name, self.path)
        finally:
            if os.path.exists(tmp_name):
                os.unlink(tmp_name)


def _product_record(judgement: dict[str, Any], output_language: str) -> dict[str, Any]:
    item_name = _text(judgement.get("item_name"), "Unknown product", 100)
    created_at = datetime.now(UTC).isoformat()
    return {
        "id": _record_id("product", item_name),
        "created_at": created_at,
        "output_language": output_language,
        "item_name": item_name,
        "category": _text(judgement.get("category"), "", 60),
        "verdict": _text(judgement.get("verdict"), "", 60),
        "subtitle": _text(judgement.get("subtitle"), "", 120),
        "warning": _text(judgement.get("warning"), "", 220),
        "what_it_is": _text(judgement.get("what_it_is"), "", 260),
        "how_to_use": _text(judgement.get("how_to_use"), "", 260),
        "benefit": _text(judgement.get("benefit"), "", 260),
        "storage": _text(judgement.get("storage"), "", 220),
        "voice_summary": _text(judgement.get("voice_summary"), "", 260),
    }


def _receipt_record(receipt: dict[str, Any], output_language: str) -> dict[str, Any]:
    key = "|".join(
        [
            _text(receipt.get("store_name"), "Unknown store", 80),
            _text(receipt.get("purchase_date"), "", 40),
            str(receipt.get("total_amount") or ""),
        ]
    )
    created_at = datetime.now(UTC).isoformat()
    return {
        "id": _record_id("receipt", key),
        "created_at": created_at,
        "output_language": output_language,
        "store_name": _text(receipt.get("store_name"), "Unknown store", 80),
        "purchase_date": _text(receipt.get("purchase_date"), "", 40),
        "currency": _text(receipt.get("currency"), "CAD", 12),
        "total_amount": _nullable_number(receipt.get("total_amount")),
        "tax_amount": _nullable_number(receipt.get("tax_amount")),
        "item_count": _nullable_int(receipt.get("item_count")),
        "nutrition_signal": _text(receipt.get("nutrition_signal"), "", 220),
        "spending_signal": _text(receipt.get("spending_signal"), "", 220),
        "family_report_note": _text(receipt.get("family_report_note"), "", 220),
        "items": [_receipt_item(item) for item in _list(receipt.get("items"))[:24]],
        "category_summary": [_category_item(item) for item in _list(receipt.get("category_summary"))[:10]],
    }


def _receipt_item(item: Any) -> dict[str, Any]:
    if not isinstance(item, dict):
        item = {}
    return {
        "name": _text(item.get("name"), "Unknown item", 100),
        "translated_name": _text(item.get("translated_name"), "", 100),
        "category": _text(item.get("category"), "Other", 60),
        "amount": _nullable_number(item.get("amount")),
    }


def _category_item(item: Any) -> dict[str, Any]:
    if not isinstance(item, dict):
        item = {}
    return {
        "category": _text(item.get("category"), "Other", 60),
        "estimated_amount": _nullable_number(item.get("estimated_amount")),
        "note": _text(item.get("note"), "", 160),
    }


def _category_totals(receipts: list[dict[str, Any]]) -> dict[str, float]:
    totals: dict[str, float] = defaultdict(float)
    for receipt in receipts:
        categories = _list(receipt.get("category_summary"))
        for item in categories:
            if not isinstance(item, dict):
                continue
            category = _text(item.get("category"), "Other", 60)
            amount = _number(item.get("estimated_amount"))
            if amount:
                totals[category] += amount
        if categories:
            continue
        for item in _list(receipt.get("items")):
            if not isinstance(item, dict):
                continue
            totals[_text(item.get("category"), "Other", 60)] += _number(item.get("amount"))
    return dict(totals)


def _upsert(records: list[dict[str, Any]], record: dict[str, Any], limit: int) -> list[dict[str, Any]]:
    return [record, *[item for item in records if item.get("id") != record["id"]]][:limit]


def _merge_records(target: list[dict[str, Any]], source: list[dict[str, Any]], limit: int) -> list[dict[str, Any]]:
    merged: dict[str, dict[str, Any]] = {}
    for record in [*source, *target]:
        if not isinstance(record, dict):
            continue
        record_id = str(record.get("id") or _record_id("legacy", str(record)))
        merged[record_id] = record
    return sorted(merged.values(), key=lambda item: str(item.get("created_at", "")), reverse=True)[:limit]


def _record_id(record_type: str, key: str) -> str:
    day = datetime.now(UTC).strftime("%Y-%m-%d")
    clean_key = "".join(char.lower() if char.isalnum() else "-" for char in key.strip())[:90].strip("-")
    return f"{record_type}:{day}:{clean_key or 'unknown'}"


def _text(value: Any, default: str, limit: int) -> str:
    text = " ".join(str(value or "").split())
    if not text:
        text = default
    return text[:limit]


def _list(value: Any) -> list[Any]:
    return value if isinstance(value, list) else []


def _nullable_number(value: Any) -> float | None:
    if value is None or value == "":
        return None
    return round(_number(value), 2)


def _number(value: Any) -> float:
    try:
        return float(str(value).replace("$", "").replace(",", "").strip())
    except ValueError:
        return 0.0


def _nullable_int(value: Any) -> int | None:
    if value is None or value == "":
        return None
    try:
        return int(float(str(value).strip()))
    except ValueError:
        return None


def _first_text(records: list[dict[str, Any]], key: str) -> str:
    for record in records:
        value = str(record.get(key) or "").strip()
        if value:
            return value
    return ""


def _recent_texts(records: list[dict[str, Any]], key: str, limit: int) -> list[str]:
    texts: list[str] = []
    for record in records:
        text = str(record.get(key) or "").strip()
        if text and text not in texts:
            texts.append(text)
        if len(texts) >= limit:
            break
    return texts
