from __future__ import annotations

from collections import Counter, defaultdict
from datetime import UTC, date, datetime, timedelta
from typing import Any

from app.events import Event, event_to_dict


APP_OPEN_EVENTS = {"client_app_open"}
NEW_HOUSEHOLD_EVENTS = {"identity_bootstrapped"}
PROFILE_EVENTS = {"web_profile_saved", "profile_saved", "profile_appended"}
PRODUCT_SCAN_EVENTS = {
    "web_image_analysis_succeeded",
    "image_analysis_succeeded",
    "client_product_record_saved",
    "server_product_record_saved",
}
PRODUCT_ANALYSIS_EVENTS = {"web_image_analysis_succeeded", "image_analysis_succeeded"}
RECEIPT_SCAN_EVENTS = {"web_receipt_analysis_succeeded"}
RECEIPT_RECORD_EVENTS = {"server_receipt_record_saved"}
CHAT_EVENTS = {"ai_chat_answered"}
RECORD_SAVE_EVENTS = {"server_product_record_saved", "server_receipt_record_saved", "client_product_record_saved"}
FAMILY_JOIN_EVENTS = {"identity_joined_household"}
FEEDBACK_EVENTS = {"feedback_received", "client_feedback_submitted"}
FAILED_EVENTS = {"image_analysis_failed", "ai_chat_failed", "web_image_analysis_failed", "web_receipt_analysis_failed"}


def build_admin_overview(events: list[Event], identity_summary: dict[str, int] | None = None) -> dict[str, Any]:
    identity_summary = identity_summary or {}
    now = datetime.now(UTC)
    today = now.date()
    last_7_days = today - timedelta(days=6)
    today_events = [event for event in events if _event_date(event) == today]
    last_7_events = [event for event in events if (_event_date(event) or date.min) >= last_7_days]

    product_analysis_events = [event for event in events if event.event_type in PRODUCT_ANALYSIS_EVENTS]
    receipt_scan_events = [event for event in events if event.event_type in RECEIPT_SCAN_EVENTS]
    record_save_events = [event for event in events if event.event_type in RECORD_SAVE_EVENTS]
    failed_events = [event for event in events if event.event_type in FAILED_EVENTS or event.event_type.endswith("_failed")]
    app_open_events = [event for event in events if event.event_type in APP_OPEN_EVENTS]
    profile_events = [event for event in events if event.event_type in PROFILE_EVENTS]
    ai_actions = len(product_analysis_events) + len(receipt_scan_events) + len([event for event in events if event.event_type in CHAT_EVENTS])

    return {
        "generated_at": now.isoformat(),
        "summary": _summary(
            events=events,
            today_events=today_events,
            last_7_events=last_7_events,
            app_open_events=app_open_events,
            product_analysis_events=product_analysis_events,
            receipt_scan_events=receipt_scan_events,
            record_save_events=record_save_events,
            failed_events=failed_events,
            profile_events=profile_events,
            identity_summary=identity_summary,
            ai_actions=ai_actions,
        ),
        "north_star": _north_star(events, identity_summary),
        "modules": _modules(events, identity_summary),
        "channels": _channel_performance(events),
        "families": _family_intelligence(events, identity_summary),
        "monetization": _monetization(events),
        "data_moat": _data_moat(events, identity_summary),
        "charts": {
            "language_distribution": _counter_items(_payload_counter(events, "output_language")),
            "category_distribution": _counter_items(_payload_counter(product_analysis_events + record_save_events, "category")),
            "verdict_distribution": _counter_items(_payload_counter(product_analysis_events + record_save_events, "verdict")),
            "event_trend": _event_trend(events),
            "channel_distribution": _counter_items(_channel_counter(events)),
        },
        "recent_events": [event_to_dict(event) for event in events[-45:]][::-1],
    }


def _summary(
    *,
    events: list[Event],
    today_events: list[Event],
    last_7_events: list[Event],
    app_open_events: list[Event],
    product_analysis_events: list[Event],
    receipt_scan_events: list[Event],
    record_save_events: list[Event],
    failed_events: list[Event],
    profile_events: list[Event],
    identity_summary: dict[str, int],
    ai_actions: int,
) -> dict[str, Any]:
    active_users = {event.user_id for event in events if event.user_id}
    users_today = {event.user_id for event in today_events if event.user_id}
    users_last_7 = {event.user_id for event in last_7_events if event.user_id}
    returning_users = _returning_users(app_open_events)
    new_households = sum(
        1
        for event in events
        if event.event_type in NEW_HOUSEHOLD_EVENTS and event.payload.get("is_new_household") is True
    )
    scan_success_base = len(product_analysis_events) + len(receipt_scan_events)
    scan_failure_base = scan_success_base + len(failed_events)

    return {
        "total_events": len(events),
        "today_events": len(today_events),
        "active_users": len(active_users),
        "active_users_today": len(users_today),
        "active_users_7d": len(users_last_7),
        "returning_users": len(returning_users),
        "new_households": new_households,
        "households": identity_summary.get("households", 0),
        "devices": identity_summary.get("devices", 0),
        "recovery_contacts": identity_summary.get("recovery_contacts", 0),
        "product_scans": len(product_analysis_events),
        "receipt_scans": len(receipt_scan_events),
        "records_saved": len(record_save_events),
        "family_profiles": len(profile_events),
        "ai_chats": sum(1 for event in events if event.event_type in CHAT_EVENTS),
        "failed_events": len(failed_events),
        "scan_success_rate": _ratio(scan_success_base, scan_failure_base),
        "failure_rate": _ratio(len(failed_events), ai_actions + len(failed_events)),
        "estimated_ai_cost": round(ai_actions * 0.012, 2),
    }


def _north_star(events: list[Event], identity_summary: dict[str, int]) -> dict[str, Any]:
    households = max(identity_summary.get("households", 0), 1)
    saved_records = sum(1 for event in events if event.event_type in RECORD_SAVE_EVENTS)
    profile_count = sum(1 for event in events if event.event_type in PROFILE_EVENTS)
    receipt_count = sum(1 for event in events if event.event_type in RECEIPT_RECORD_EVENTS or event.event_type in RECEIPT_SCAN_EVENTS)
    channel_count = len(_channel_counter(events))
    return {
        "title": "让 AI 越来越懂一个家庭",
        "subtitle": "北极星指标不是一次翻译，而是每个家庭留下可复用的购物记忆。",
        "metrics": [
            {"label": "家庭购物记忆密度", "value": round(saved_records / households, 2), "note": "每个家庭平均沉淀记录"},
            {"label": "家庭画像覆盖", "value": _ratio(profile_count, households), "format": "percent", "note": "完成家庭基础信息的比例"},
            {"label": "小票数据入口", "value": receipt_count, "note": "能支撑月度报告和价格记忆"},
            {"label": "渠道可归因数", "value": channel_count, "note": "海报、社群、转介绍等渠道"},
        ],
    }


def _modules(events: list[Event], identity_summary: dict[str, int]) -> list[dict[str, Any]]:
    product_scans = [event for event in events if event.event_type in PRODUCT_ANALYSIS_EVENTS]
    receipt_scans = [event for event in events if event.event_type in RECEIPT_SCAN_EVENTS]
    record_saves = [event for event in events if event.event_type in RECORD_SAVE_EVENTS]
    app_opens = [event for event in events if event.event_type in APP_OPEN_EVENTS]
    feedback = [event for event in events if event.event_type in FEEDBACK_EVENTS]
    failed = [event for event in events if event.event_type in FAILED_EVENTS or event.event_type.endswith("_failed")]
    high_value_categories = _payload_counter(product_scans + record_saves, "category")

    return [
        {
            "key": "operations",
            "title": "运营驾驶舱",
            "status": "active",
            "description": "追踪访问、扫描、保存、失败率和渠道表现，用于每日运营。",
            "metrics": [
                {"label": "App 打开", "value": len(app_opens)},
                {"label": "商品扫描", "value": len(product_scans)},
                {"label": "小票扫描", "value": len(receipt_scans)},
                {"label": "失败事件", "value": len(failed)},
            ],
            "next": ["小时级趋势", "留存 Cohort", "扫描耗时分布"],
        },
        {
            "key": "family",
            "title": "用户与家庭管理",
            "status": "active",
            "description": "以家庭为核心管理用户，而不是孤立账号，支撑家庭共享和长期画像。",
            "metrics": [
                {"label": "家庭数", "value": identity_summary.get("households", 0)},
                {"label": "绑定设备", "value": identity_summary.get("devices", 0)},
                {"label": "家庭档案", "value": sum(1 for event in events if event.event_type in PROFILE_EVENTS)},
                {"label": "加入家庭", "value": sum(1 for event in events if event.event_type in FAMILY_JOIN_EVENTS)},
            ],
            "next": ["账号登录", "家庭角色权限", "子女端提醒", "家庭健康标签"],
        },
        {
            "key": "scan_records",
            "title": "扫描记录中心",
            "status": "active",
            "description": "沉淀商品、小票、价格和健康提醒，这是区别于通用大模型的第一层数据资产。",
            "metrics": [
                {"label": "保存记录", "value": len(record_saves)},
                {"label": "商品品类", "value": len(high_value_categories)},
                {"label": "常见语言", "value": _top_value(_payload_counter(events, "output_language"))},
                {"label": "常见判断", "value": _top_value(_payload_counter(product_scans + record_saves, "verdict"))},
            ],
            "next": ["价格历史", "复购提醒", "商品知识库", "家庭购物时间线"],
        },
        {
            "key": "ai_personalization",
            "title": "AI 个性化",
            "status": "early",
            "description": "让 AI 基于家庭成员、语言、历史购买和反馈做更贴近家庭的回答。",
            "metrics": [
                {"label": "AI 追问", "value": sum(1 for event in events if event.event_type in CHAT_EVENTS)},
                {"label": "反馈数", "value": len(feedback)},
                {"label": "家庭档案覆盖", "value": _format_percent(_ratio(sum(1 for event in events if event.event_type in PROFILE_EVENTS), max(identity_summary.get("households", 1), 1)))},
            ],
            "next": ["家庭专属提示词", "品类模板", "回答满意度训练", "多语言语音策略"],
        },
        {
            "key": "subscription",
            "title": "付费订阅",
            "status": "reserved",
            "description": "面向 C 端家庭版订阅，未来承载月度报告、无限历史、价格提醒和家庭共享。",
            "metrics": [
                {"label": "免费用户", "value": identity_summary.get("households", 0)},
                {"label": "试用用户", "value": 0},
                {"label": "付费家庭", "value": 0},
                {"label": "预估 AI 成本", "value": f"${round((len(product_scans)+len(receipt_scans))*0.012, 2)}"},
            ],
            "next": ["套餐配置", "支付渠道", "权益开关", "退款和优惠码"],
        },
        {
            "key": "ads",
            "title": "广告与品牌合作",
            "status": "reserved",
            "description": "未来支持品牌、商家、优惠券、返现和赞助推荐，但前台先不展示广告。",
            "metrics": [
                {"label": "可合作品类", "value": len(high_value_categories)},
                {"label": "高频品类", "value": _top_value(high_value_categories)},
                {"label": "优惠券曝光", "value": 0},
                {"label": "广告收入", "value": "$0.00"},
            ],
            "next": ["品牌库", "优惠券库", "推荐规则", "点击转化归因"],
        },
        {
            "key": "data_moat",
            "title": "数据资产",
            "status": "building",
            "description": "投资人视角看 FamLens 的壁垒：家庭级海外购物数据和跨语言商品理解。",
            "metrics": [
                {"label": "累计事件", "value": len(events)},
                {"label": "家庭记录", "value": len(record_saves)},
                {"label": "语言覆盖", "value": len(_payload_counter(events, "output_language"))},
                {"label": "品类覆盖", "value": len(high_value_categories)},
            ],
            "next": ["数据质量评分", "国家/地区图谱", "健康信号趋势", "品牌需求洞察"],
        },
    ]


def _channel_performance(events: list[Event]) -> list[dict[str, Any]]:
    grouped: dict[str, dict[str, Any]] = {}
    for event in events:
        channel = _event_channel(event)
        row = grouped.setdefault(
            channel,
            {
                "channel": channel,
                "opens": 0,
                "product_scans": 0,
                "receipt_scans": 0,
                "records_saved": 0,
                "profiles": 0,
                "users": set(),
                "campaigns": Counter(),
            },
        )
        row["users"].add(event.user_id)
        campaign = str(event.payload.get("utm_campaign") or event.payload.get("campaign") or "")
        if campaign:
            row["campaigns"][campaign] += 1
        if event.event_type in APP_OPEN_EVENTS:
            row["opens"] += 1
        if event.event_type in PRODUCT_ANALYSIS_EVENTS:
            row["product_scans"] += 1
        if event.event_type in RECEIPT_SCAN_EVENTS:
            row["receipt_scans"] += 1
        if event.event_type in RECORD_SAVE_EVENTS:
            row["records_saved"] += 1
        if event.event_type in PROFILE_EVENTS:
            row["profiles"] += 1

    rows = []
    for row in grouped.values():
        users = len(row.pop("users"))
        campaigns = row.pop("campaigns")
        rows.append(
            {
                **row,
                "users": users,
                "top_campaign": _top_value(campaigns),
                "scan_conversion": _ratio(row["product_scans"] + row["receipt_scans"], row["opens"]),
                "record_conversion": _ratio(row["records_saved"], row["opens"]),
            }
        )
    return sorted(rows, key=lambda item: (item["opens"], item["product_scans"], item["records_saved"]), reverse=True)[:12]


def _family_intelligence(events: list[Event], identity_summary: dict[str, int]) -> dict[str, Any]:
    product_records = [event for event in events if event.event_type in {"server_product_record_saved", "client_product_record_saved"}]
    receipt_records = [event for event in events if event.event_type in RECEIPT_RECORD_EVENTS]
    family_counts: Counter[str] = Counter(event.user_id for event in product_records + receipt_records if event.user_id)
    top_families = [
        {"household_id": household_id, "records": count}
        for household_id, count in family_counts.most_common(8)
    ]
    return {
        "overview": [
            {"label": "家庭总数", "value": identity_summary.get("households", 0)},
            {"label": "有记录家庭", "value": len(family_counts)},
            {"label": "商品记录", "value": len(product_records)},
            {"label": "小票记录", "value": len(receipt_records)},
        ],
        "top_families": top_families,
        "health_signals": [
            {"label": "高盐/高糖/高脂提醒", "value": "待从商品卡结构化字段接入"},
            {"label": "儿童/老人/慢病匹配", "value": "待从家庭成员标签接入"},
            {"label": "月度饮食趋势", "value": "依赖小票持续记录"},
        ],
    }


def _monetization(events: list[Event]) -> dict[str, Any]:
    scans = sum(1 for event in events if event.event_type in PRODUCT_ANALYSIS_EVENTS or event.event_type in RECEIPT_SCAN_EVENTS)
    records = sum(1 for event in events if event.event_type in RECORD_SAVE_EVENTS)
    categories = _payload_counter(events, "category")
    return {
        "subscription": {
            "status": "reserved",
            "positioning": "家庭高级版：长期记录、月度报告、价格提醒、家庭共享、无限历史。",
            "free_plan": ["商品解释", "小票基础识别", "少量历史记录", "基础语音播报"],
            "paid_plan": ["月度家庭报告", "价格记忆提醒", "多成员健康提醒", "无限历史", "家庭共享"],
            "signals": [
                {"label": "可转化扫描", "value": scans},
                {"label": "已保存记录", "value": records},
                {"label": "付费触发点", "value": "月度报告 / 价格提醒 / 家庭共享"},
            ],
        },
        "advertising": {
            "status": "reserved",
            "positioning": "B 端商业化：品牌合作、优惠券、返现、替代品推荐。",
            "guardrails": ["推荐必须标注赞助", "不能牺牲健康提醒可信度", "老人端广告密度要低"],
            "signals": [
                {"label": "品类覆盖", "value": len(categories)},
                {"label": "高频品类", "value": _top_value(categories)},
                {"label": "未来广告库存", "value": "商品卡 / 小票后 / 月报"},
            ],
        },
    }


def _data_moat(events: list[Event], identity_summary: dict[str, int]) -> dict[str, Any]:
    users = {event.user_id for event in events if event.user_id}
    languages = _payload_counter(events, "output_language")
    categories = _payload_counter(events, "category")
    channels = _channel_counter(events)
    records = [event for event in events if event.event_type in RECORD_SAVE_EVENTS]
    receipt_amounts = [_float(event.payload.get("total_amount")) for event in events if event.event_type in RECEIPT_RECORD_EVENTS or event.event_type in RECEIPT_SCAN_EVENTS]
    receipt_amounts = [amount for amount in receipt_amounts if amount is not None]
    return {
        "headline": "数据越多，FamLens 越不像一次性翻译工具。",
        "metrics": [
            {"label": "家庭身份", "value": identity_summary.get("households", 0), "note": "家庭级长期数据容器"},
            {"label": "匿名用户", "value": len(users), "note": "早期活跃规模"},
            {"label": "购物记录", "value": len(records), "note": "形成迁移成本"},
            {"label": "语言覆盖", "value": len(languages), "note": "国际化扩展基础"},
            {"label": "商品品类", "value": len(categories), "note": "知识库训练方向"},
            {"label": "渠道来源", "value": len(channels), "note": "增长可复制性"},
            {"label": "小票金额", "value": round(sum(receipt_amounts), 2), "note": "家庭消费分析入口"},
        ],
        "investment_story": [
            "从海外购物解释切入，解决移民和游客的即时痛点。",
            "用商品和小票记录沉淀家庭购物记忆，形成复用和迁移成本。",
            "通过家庭画像和历史数据，让 AI 回答从通用变成个性化。",
            "当品类和渠道规模扩大后，形成品牌合作、优惠券和返现的 B 端空间。",
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


def _channel_counter(events: list[Event]) -> Counter[str]:
    counter: Counter[str] = Counter()
    for event in events:
        counter[_event_channel(event)] += 1
    return counter


def _event_channel(event: Event) -> str:
    payload = event.payload or {}
    attribution = payload.get("attribution") if isinstance(payload.get("attribution"), dict) else {}
    source = (
        payload.get("utm_source")
        or attribution.get("utm_source")
        or payload.get("source")
        or attribution.get("source")
        or ""
    )
    medium = payload.get("utm_medium") or attribution.get("utm_medium") or ""
    if source:
        return f"{source} / {medium or 'direct'}"
    if event.event_type.startswith("wechat_") or "wechat" in event.event_type:
        return "wechat / organic"
    if event.event_type.startswith("client_"):
        return "web_app / direct"
    if event.event_type.startswith("web_"):
        return "web / direct"
    return "unknown / direct"


def _counter_items(counter: Counter[str], limit: int = 8) -> list[dict[str, Any]]:
    return [{"label": label, "value": value} for label, value in counter.most_common(limit)]


def _event_trend(events: list[Event]) -> list[dict[str, Any]]:
    grouped: dict[str, int] = defaultdict(int)
    for event in events:
        event_date = _event_date(event)
        if event_date is None:
            continue
        grouped[event_date.isoformat()] += 1
    return [{"label": label, "value": grouped[label]} for label in sorted(grouped)[-14:]]


def _returning_users(app_open_events: list[Event]) -> set[str]:
    user_days: dict[str, set[str]] = defaultdict(set)
    for event in app_open_events:
        event_date = _event_date(event)
        if event.user_id and event_date:
            user_days[event.user_id].add(event_date.isoformat())
    return {user_id for user_id, days in user_days.items() if len(days) >= 2}


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


def _top_value(counter: Counter[str]) -> str:
    if not counter:
        return "暂无数据"
    label, count = counter.most_common(1)[0]
    return f"{label} ({count})"


def _format_percent(value: float) -> str:
    return f"{round(value * 1000) / 10}%"
