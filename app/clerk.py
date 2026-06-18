from __future__ import annotations

import re
from dataclasses import dataclass


@dataclass(frozen=True)
class ClerkPhrase:
    chinese: str
    english: str
    hint: str


COMMON_ITEMS = {
    "韩国豆芽": "Korean bean sprouts",
    "黄豆芽": "soybean sprouts",
    "豆芽": "bean sprouts",
    "空气炸锅": "air fryers",
    "低钠酱油": "low-sodium soy sauce",
    "酱油": "soy sauce",
    "洗衣液": "laundry detergent",
    "鸡蛋": "eggs",
    "牛奶": "milk",
    "豆腐": "tofu",
}


def parse_clerk_command(text: str) -> str | None:
    clean = text.strip().replace("：", ":")
    for prefix in ("问店员:", "问店员：", "帮我问:", "帮我问：", "给店员听:", "给店员听："):
        normalized_prefix = prefix.replace("：", ":")
        if clean.startswith(normalized_prefix):
            question = clean[len(normalized_prefix) :].strip()
            return question or None
    return None


def build_clerk_phrase(question: str) -> ClerkPhrase:
    clean = question.strip(" ？?。.")
    item = _extract_item(clean)
    english_item = _translate_item(item)

    if "哪里" in clean or "在哪" in clean:
        return ClerkPhrase(
            chinese=f"{item}在哪里？",
            english=f"Where can I find {english_item}?",
            hint="把这句英文给店员看，或播放给店员听。",
        )

    if "有没有" in clean or clean.startswith("有"):
        return ClerkPhrase(
            chinese=f"你们有{item}吗？",
            english=f"Do you have {english_item}?",
            hint="如果店员说 aisle，就是通道号。",
        )

    if "多少钱" in clean or "价格" in clean:
        return ClerkPhrase(
            chinese="这个多少钱？",
            english="How much is this?",
            hint="如果是会员价，店员可能会说 member price。",
        )

    if "退" in clean:
        return ClerkPhrase(
            chinese="这个不好用可以退吗？",
            english="Can I return this if it does not work?",
            hint="店员可能会让你保留 receipt，也就是小票。",
        )

    return ClerkPhrase(
        chinese=clean,
        english=f"Can you help me with {english_item}?",
        hint="这是通用求助句，可以给店员看。",
    )


def format_clerk_phrase(phrase: ClerkPhrase) -> str:
    return (
        "给店员看这句：\n\n"
        f"{phrase.english}\n\n"
        f"中文意思：{phrase.chinese}\n\n"
        f"提示：{phrase.hint}"
    )


def _extract_item(question: str) -> str:
    text = question
    text = re.sub(r"(请问|麻烦问一下|帮我问一下|帮我问|这个|这个东西)", "", text)
    text = re.sub(r"(在哪里|在哪儿|在哪|有没有|有吗|多少钱|价格多少|可以退吗|能退吗)", "", text)
    text = text.strip(" ？?。.")
    return text or "这个商品"


def _translate_item(item: str) -> str:
    for chinese, english in COMMON_ITEMS.items():
        if chinese in item:
            return english
    return item

