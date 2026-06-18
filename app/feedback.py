from __future__ import annotations


FEEDBACK_KEYWORDS = {
    "买了": "bought",
    "没买": "not_bought",
    "有用": "helpful",
    "没用": "not_helpful",
    "不准": "inaccurate",
    "太复杂": "too_complex",
    "看不懂": "hard_to_understand",
}


def parse_feedback(text: str) -> tuple[str, str] | None:
    clean = text.strip()
    if clean in FEEDBACK_KEYWORDS:
        return (FEEDBACK_KEYWORDS[clean], clean)
    return None


def feedback_help_text() -> str:
    return "收到反馈，感谢。你也可以继续发商品照片，或回复“家庭档案”查看当前设置。"

