from __future__ import annotations

import hashlib
import time
import xml.etree.ElementTree as ET
from dataclasses import dataclass


@dataclass(frozen=True)
class WeChatMessage:
    to_user: str
    from_user: str
    create_time: int
    msg_type: str
    pic_url: str | None = None
    media_id: str | None = None
    content: str | None = None
    event: str | None = None


def is_valid_signature(token: str, signature: str, timestamp: str, nonce: str) -> bool:
    values = [token, timestamp, nonce]
    values.sort()
    digest = hashlib.sha1("".join(values).encode("utf-8")).hexdigest()
    return digest == signature


def parse_message(xml_body: bytes) -> WeChatMessage:
    root = ET.fromstring(xml_body)

    def text(tag: str, default: str = "") -> str:
        node = root.find(tag)
        return node.text if node is not None and node.text is not None else default

    return WeChatMessage(
        to_user=text("ToUserName"),
        from_user=text("FromUserName"),
        create_time=int(text("CreateTime", "0")),
        msg_type=text("MsgType"),
        pic_url=text("PicUrl") or None,
        media_id=text("MediaId") or None,
        content=text("Content") or None,
        event=text("Event") or None,
    )


def text_reply(to_user: str, from_user: str, content: str) -> str:
    now = int(time.time())
    safe_content = _cdata(content)
    return f"""<xml>
<ToUserName><![CDATA[{to_user}]]></ToUserName>
<FromUserName><![CDATA[{from_user}]]></FromUserName>
<CreateTime>{now}</CreateTime>
<MsgType><![CDATA[text]]></MsgType>
<Content><![CDATA[{safe_content}]]></Content>
</xml>"""


def help_text() -> str:
    return (
        "发一张超市商品、配料表、营养表或烹饪说明照片给我。\n\n"
        "我会帮你看：\n"
        "1. 这是什么\n"
        "2. 能不能买\n"
        "3. 怎么吃/怎么用\n"
        "4. 有什么好\n"
        "5. 要注意什么\n\n"
        "也可以发：\n"
        "问店员：韩国豆芽在哪里\n"
        "我会生成英文给店员看。\n\n"
        "扫完商品后，也可以回复：买了 / 没买 / 有用 / 不准。"
    )


def _cdata(value: str) -> str:
    return value.replace("]]>", "]]]]><![CDATA[>")
