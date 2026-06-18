from __future__ import annotations

from collections import Counter, defaultdict
from datetime import UTC, datetime
from typing import Any

from app.events import Event, event_to_dict


PRODUCT_SCAN_EVENTS = {"web_image_analysis_succeeded", "image_analysis_succeeded"}
RECEIPT_SCAN_EVENTS = {"web_receipt_analysis_succeeded"}
CHAT_EVENTS = {"ai_chat_answered"}
FAILED_EVENTS = {"image_analysis_failed", "ai_chat_failed", "web_image_analysis_failed", "web_receipt_analysis_failed"}


def build_admin_overview(events: list[Event]) -> dict[str, Any]:
    today = datetime.now(UTC).date()
    today_events = [_event for _event in events if _event_date(_event) == today]
    product_events = [_event for _event in events if _event.event_type in PRODUCT_SCAN_EVENTS]
    receipt_events = [_event for _event in events if _event.event_type in RECEIPT_SCAN_EVENTS]
    chat_events = [_event for _event in events if _event.event_type in CHAT_EVENTS]
    failed_events = [_event for _event in events if _event.event_type in FAILED_EVENTS or _event.event_type.endswith("_failed")]
    total_ai_actions = len(product_events) + len(receipt_events) + len(chat_events)

    return {
        "generated_at": datetime.now(UTC).isoformat(),
        "summary": {
            "total_events": len(events),
            "today_events": len(today_events),
            "active_users": len({event.user_id for event in events if event.user_id}),
            "product_scans": len(product_events),
            "receipt_scans": len(receipt_events),
            "ai_chats": len(chat_events),
            "failed_events": len(failed_events),
            "failure_rate": _ratio(len(failed_events), total_ai_actions + len(failed_events)),
        },
        "modules": {
            "user_management": _user_management(events),
            "data_analysis": _data_analysis(events),
            "finance": _finance(receipt_events, total_ai_actions),
            "product_management": _product_management(product_events, failed_events),
            "marketing": _marketing(events),
            "big_data": _big_data(events),
        },
        "charts": {
            "language_distribution": _counter_items(_payload_counter(events, "output_language")),
            "category_distribution": _counter_items(_payload_counter(product_events, "category")),
            "verdict_distribution": _counter_items(_payload_counter(product_events, "verdict")),
            "event_trend": _event_trend(events),
        },
        "recent_events": [event_to_dict(event) for event in events[-30:]][::-1],
    }


def _user_management(events: list[Event]) -> dict[str, Any]:
    users = {event.user_id for event in events if event.user_id}
    profile_events = [event for event in events if event.event_type in {"profile_saved", "profile_appended"}]
    feedback_events = [event for event in events if event.event_type in {"feedback_received", "client_feedback_submitted"}]
    return {
        "title": "用户与家庭",
        "status": "beta",
        "total_users": len(users),
        "family_profiles": len(profile_events),
        "feedback_count": len(feedback_events),
        "next_capabilities": ["登录账号", "家庭成员绑定", "老人端/子女端权限", "家庭健康档案云同步"],
    }


def _data_analysis(events: list[Event]) -> dict[str, Any]:
    product_scans = sum(1 for event in events if event.event_type in PRODUCT_SCAN_EVENTS)
    receipt_scans = sum(1 for event in events if event.event_type in RECEIPT_SCAN_EVENTS)
    chat_count = sum(1 for event in events if event.event_type in CHAT_EVENTS)
    return {
        "title": "数据分析",
        "status": "active",
        "product_scans": product_scans,
        "receipt_scans": receipt_scans,
        "ai_chats": chat_count,
        "top_languages": _counter_items(_payload_counter(events, "output_language"), limit=5),
        "next_capabilities": ["留存分析", "扫描成功率分层", "用户路径漏斗", "品类趋势"],
    }


def _finance(receipt_events: list[Event], total_ai_actions: int) -> dict[str, Any]:
    amounts = [_float(event.payload.get("total_amount")) for event in receipt_events]
    amounts = [amount for amount in amounts if amount is not None]
    estimated_ai_cost = round(total_ai_actions * 0.012, 2)
    return {
        "title": "财务管理",
        "status": "estimated",
        "tracked_receipt_amount": round(sum(amounts), 2),
        "average_receipt_amount": round(sum(amounts) / len(amounts), 2) if amounts else 0,
        "estimated_ai_cost": estimated_ai_cost,
        "gross_margin_watch": "需要接入真实 token 成本、订阅收入和支付渠道后计算",
        "next_capabilities": ["订阅收入", "家庭套餐", "AI 成本核算", "退款与优惠码"],
    }


def _product_management(product_events: list[Event], failed_events: list[Event]) -> dict[str, Any]:
    categories = _payload_counter(product_events, "category")
    verdicts = _payload_counter(product_events, "verdict")
    total = len(product_events) + len(failed_events)
    return {
        "title": "产品管理",
        "status": "active",
        "top_categories": _counter_items(categories, limit=6),
        "verdicts": _counter_items(verdicts, limit=6),
        "analysis_quality": {
            "success_count": len(product_events),
            "failure_count": len(failed_events),
            "failure_rate": _ratio(len(failed_events), total),
        },
        "next_capabilities": ["品类模板配置", "提示词版本管理", "高风险品类审核", "推荐内容库"],
    }


def _marketing(events: list[Event]) -> dict[str, Any]:
    web_events = sum(1 for event in events if event.event_type.startswith("web_") or event.user_id == "web-user")
    wechat_events = sum(1 for event in events if event.event_type.startswith("wechat_") or "wechat" in event.event_type)
    client_events = [event for event in events if event.event_type.startswith("client_")]
    return {
        "title": "营销增长",
        "status": "beta",
        "channels": [
            {"label": "Web / PWA", "value": web_events},
            {"label": "WeChat", "value": wechat_events},
            {"label": "Client actions", "value": len(client_events)},
        ],
        "share_actions": sum(1 for event in client_events if event.event_type == "client_share_family"),
        "save_card_actions": sum(1 for event in client_events if event.event_type == "client_save_card"),
        "next_capabilities": ["邀请家庭成员", "推荐码", "转介绍漏斗", "内容活动分析"],
    }


def _big_data(events: list[Event]) -> dict[str, Any]:
    category_counter = _payload_counter(events, "category")
    language_counter = _payload_counter(events, "output_language")
    receipt_total = sum(1 for event in events if event.event_type in RECEIPT_SCAN_EVENTS)
    return {
        "title": "大数据洞察",
        "status": "early",
        "signals": [
            _top_signal("高频品类", category_counter),
            _top_signal("主要语言", language_counter),
            {"label": "小票数据密度", "value": f"{receipt_total} 张小票"},
        ],
        "future_ai_caregiver": [
            "家庭饮食结构月报",
            "老人采购预算异常提醒",
            "高盐高糖高脂采购趋势",
            "跨国家庭生活需求图谱",
        ],
    }


def _payload_counter(events: list[Event], key: str) -> Counter[str]:
    counter: Counter[str] = Counter()
    for event in events:
        value = event.payload.get(key)
        if value is None or value == "":
            continue
        counter[str(value)] += 1
    return counter


def _counter_items(counter: Counter[str], limit: int = 8) -> list[dict[str, Any]]:
    return [{"label": label, "value": value} for label, value in counter.most_common(limit)]


def _event_trend(events: list[Event]) -> list[dict[str, Any]]:
    grouped: dict[str, int] = defaultdict(int)
    for event in events:
        date = _event_date(event)
        if date is None:
            continue
        grouped[date.isoformat()] += 1
    return [{"label": label, "value": grouped[label]} for label in sorted(grouped)[-14:]]


def _event_date(event: Event):
    try:
        return datetime.fromisoformat(event.created_at.replace("Z", "+00:00")).date()
    except ValueError:
        return None


def _ratio(numerator: int, denominator: int) -> float:
    if denominator <= 0:
        return 0
    return round(numerator / denominator, 4)


def _float(value: Any) -> float | None:
    if value is None or value == "":
        return None
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def _top_signal(label: str, counter: Counter[str]) -> dict[str, Any]:
    if not counter:
        return {"label": label, "value": "暂无数据"}
    top, count = counter.most_common(1)[0]
    return {"label": label, "value": f"{top} ({count})"}
