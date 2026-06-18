from __future__ import annotations

import html
import re
import uuid
from pathlib import Path

from app.languages import normalize_output_language
from app.product import ProductJudgement


CARD_LABELS = {
    "zh-Hans": {
        "what": "这是什么",
        "use": "怎么用",
        "benefit": "有什么好",
        "warning": "注意",
        "storage": "保存",
    },
    "en": {
        "what": "What it is",
        "use": "How to use",
        "benefit": "Good for",
        "warning": "Watch out",
        "storage": "Storage",
    },
    "es": {
        "what": "Qué es",
        "use": "Cómo usarlo",
        "benefit": "Para qué sirve",
        "warning": "Cuidado",
        "storage": "Guardar",
    },
    "fr": {
        "what": "C'est quoi",
        "use": "Mode d'emploi",
        "benefit": "Utile pour",
        "warning": "Attention",
        "storage": "Conserver",
    },
    "ko": {
        "what": "무엇인가요",
        "use": "사용 방법",
        "benefit": "좋은 점",
        "warning": "주의",
        "storage": "보관",
    },
    "ja": {
        "what": "これは何",
        "use": "使い方",
        "benefit": "よい点",
        "warning": "注意",
        "storage": "保存",
    },
    "vi": {
        "what": "Là gì",
        "use": "Cách dùng",
        "benefit": "Lợi ích",
        "warning": "Lưu ý",
        "storage": "Bảo quản",
    },
    "hi": {
        "what": "यह क्या है",
        "use": "कैसे इस्तेमाल करें",
        "benefit": "किस काम का",
        "warning": "ध्यान रखें",
        "storage": "कैसे रखें",
    },
}


def save_judgement_card(
    judgement: ProductJudgement,
    output_dir: str,
    output_language: str | None = None,
    product_image_data_url: str | None = None,
) -> Path:
    directory = Path(output_dir)
    directory.mkdir(parents=True, exist_ok=True)
    filename = f"{_slug(judgement.item_name)}-{uuid.uuid4().hex[:8]}.svg"
    path = directory / filename
    path.write_text(
        render_judgement_card_svg(judgement, output_language, product_image_data_url),
        encoding="utf-8",
    )
    return path


def render_judgement_card_svg(
    judgement: ProductJudgement,
    output_language: str | None = None,
    product_image_data_url: str | None = None,
) -> str:
    labels = CARD_LABELS[normalize_output_language(output_language)]
    theme = _theme(judgement.verdict)
    has_photo = bool(product_image_data_url)
    title_lines = _wrap(judgement.item_name, 6 if has_photo else 10, 2)
    subtitle_lines = _wrap(judgement.subtitle, 11 if has_photo else 20, 2)
    headline_y = _headline_y(len(title_lines), has_photo)
    subtitle_y = 316 if has_photo else 302
    title_class = "headline compact-headline" if has_photo else "headline"
    title_svg = "\n".join(
        f'<text x="110" y="{headline_y + i * 56}" class="font {title_class}">{_e(line)}</text>'
        for i, line in enumerate(title_lines)
    )
    subtitle_svg = "\n".join(
        f'<text x="112" y="{subtitle_y + i * 36}" class="font subhead">{_e(line)}</text>'
        for i, line in enumerate(subtitle_lines)
    )
    footer_lines = _wrap(judgement.storage, 24, 2)
    footer_svg = "\n".join(
        f'<text x="172" y="{1254 + i * 36}" class="font footer">{_e(line)}</text>'
        for i, line in enumerate(footer_lines)
    )
    product_photo_svg = _product_photo_svg(product_image_data_url) if product_image_data_url else ""
    product_photo_defs = _product_photo_defs() if product_image_data_url else ""

    return f"""<svg width="900" height="1400" viewBox="0 0 900 1400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .font {{ font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif; }}
      .headline {{ font-size: 58px; font-weight: 850; fill: #122033; }}
      .compact-headline {{ font-size: 52px; }}
      .subhead {{ font-size: 30px; font-weight: 720; fill: #475569; }}
      .label {{ font-size: 28px; font-weight: 850; fill: #ffffff; }}
      .card-title {{ font-size: 32px; font-weight: 850; fill: #0f172a; }}
      .card-text {{ font-size: 30px; font-weight: 720; fill: #1f2937; }}
      .small {{ font-size: 26px; font-weight: 650; fill: #64748b; }}
      .footer-label {{ font-size: 27px; font-weight: 850; fill: #334155; }}
      .footer {{ font-size: 27px; font-weight: 720; fill: #334155; }}
    </style>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.12"/>
    </filter>
    <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{theme['hero_start']}"/>
      <stop offset="1" stop-color="{theme['hero_end']}"/>
    </linearGradient>
    {product_photo_defs}
  </defs>

  <rect width="900" height="1400" fill="#eef2f7"/>
  <rect x="42" y="36" width="816" height="1328" rx="42" fill="#ffffff" filter="url(#shadow)"/>

  <rect x="74" y="68" width="752" height="292" rx="34" fill="url(#heroBg)"/>
  <rect x="110" y="104" width="176" height="58" rx="29" fill="{theme['badge']}"/>
  <text x="198" y="143" text-anchor="middle" class="font label">{_e(judgement.verdict)}</text>
  {title_svg}
  {subtitle_svg}
  {product_photo_svg}

  {_icon_panel(74, 392, "#f8fafc", "#e2e8f0", labels["what"], judgement.what_it_is, "info")}
  {_icon_panel(74, 594, "#ecfdf5", "#bbf7d0", labels["use"], judgement.how_to_use, "use")}
  {_icon_panel(74, 796, "#f0fdf4", "#bbf7d0", labels["benefit"], judgement.benefit, "benefit")}
  {_icon_panel(74, 998, "#fff7ed", "#fed7aa", labels["warning"], judgement.warning, "warn")}

  <rect x="74" y="1220" width="752" height="112" rx="28" fill="#eef2ff"/>
  <text x="116" y="1254" class="font footer-label">{_e(labels["storage"])}</text>
  {footer_svg}
</svg>
"""


def _icon_panel(x: int, y: int, fill: str, stroke: str, title: str, body: str, icon: str) -> str:
    body_lines = _wrap(body, 18, 2)
    body_svg = "\n".join(
        f'<text x="{x + 144}" y="{y + 112 + i * 42}" class="font card-text">{_e(line)}</text>'
        for i, line in enumerate(body_lines)
    )
    return f"""
  <rect x="{x}" y="{y}" width="752" height="178" rx="28" fill="{fill}" stroke="{stroke}" stroke-width="3"/>
  <circle cx="{x + 74}" cy="{y + 86}" r="42" fill="#ffffff"/>
  {_icon_svg(x + 74, y + 86, icon)}
  <text x="{x + 144}" y="{y + 58}" class="font card-title">{_e(title)}</text>
  {body_svg}
"""


def _headline_y(line_count: int, has_photo: bool) -> int:
    if has_photo:
        return 224 if line_count == 1 else 212
    return 210 if line_count == 1 else 178


def _product_photo_defs() -> str:
    return '<clipPath id="productPhotoClip"><rect x="604" y="102" width="188" height="188" rx="24"/></clipPath>'


def _product_photo_svg(product_image_data_url: str) -> str:
    return f"""
  <rect x="592" y="90" width="212" height="212" rx="30" fill="#ffffff" opacity="0.94"/>
  <image href="{_e(product_image_data_url)}" x="604" y="102" width="188" height="188" preserveAspectRatio="xMidYMid slice" clip-path="url(#productPhotoClip)"/>
  <rect x="604" y="102" width="188" height="188" rx="24" fill="none" stroke="#ffffff" stroke-width="8"/>
"""


def _icon_svg(cx: int, cy: int, icon: str) -> str:
    if icon == "warn":
        return f"""
  <path d="M{cx} {cy - 40} L{cx + 43} {cy + 36} H{cx - 43} Z" fill="#f97316"/>
  <rect x="{cx - 4}" y="{cy - 10}" width="8" height="27" rx="4" fill="#fff7ed"/>
  <circle cx="{cx}" cy="{cy + 26}" r="5" fill="#fff7ed"/>
"""
    if icon == "benefit":
        return f"""
  <path d="M{cx - 31} {cy + 4} C{cx - 26} {cy - 40} {cx + 22} {cy - 50} {cx + 38} {cy - 26} C{cx + 25} {cy + 20} {cx - 16} {cy + 34} {cx - 31} {cy + 4}Z" fill="#16a34a"/>
  <path d="M{cx - 20} {cy + 8} C{cx - 2} {cy - 10} {cx + 15} {cy - 20} {cx + 34} {cy - 27}" stroke="#bbf7d0" stroke-width="6" fill="none" stroke-linecap="round"/>
"""
    if icon == "use":
        return f"""
  <path d="M{cx - 30} {cy + 4} H{cx + 30} L{cx + 22} {cy + 36} H{cx - 22} Z" fill="#16a34a"/>
  <path d="M{cx - 22} {cy - 8} H{cx + 22}" stroke="#16a34a" stroke-width="9" stroke-linecap="round"/>
  <path d="M{cx - 16} {cy - 22} C{cx - 28} {cy - 42} {cx - 4} {cy - 46} {cx - 16} {cy - 64}" stroke="#86efac" stroke-width="7" fill="none" stroke-linecap="round"/>
  <path d="M{cx + 12} {cy - 22} C{cx} {cy - 42} {cx + 24} {cy - 46} {cx + 12} {cy - 64}" stroke="#86efac" stroke-width="7" fill="none" stroke-linecap="round"/>
"""
    return f"""
  <circle cx="{cx}" cy="{cy}" r="34" fill="#2563eb"/>
  <text x="{cx}" y="{cy + 13}" text-anchor="middle" class="font label" style="font-size:42px;">?</text>
"""


def _theme(verdict: str) -> dict[str, str]:
    normalized = verdict.lower()
    negative_markers = (
        "不",
        "别",
        "avoid",
        "not recommended",
        "do not",
        "don't",
        "no comprar",
        "éviter",
        "pas recommandé",
        "비추천",
        "避け",
        "không nên",
        "न खरीदें",
        "सुझाव नहीं",
    )
    caution_markers = (
        "需要",
        "看情况",
        "容易",
        "depends",
        "check",
        "need",
        "caution",
        "careful",
        "depende",
        "attention",
        "확인",
        "주의",
        "確認",
        "注意",
        "cần",
        "ध्यान",
        "जांच",
        "देखें",
    )
    if any(marker in normalized for marker in negative_markers):
        return {"badge": "#dc2626", "hero_start": "#fee2e2", "hero_end": "#fff7ed"}
    if any(marker in normalized for marker in caution_markers):
        return {"badge": "#f97316", "hero_start": "#ffedd5", "hero_end": "#f8fafc"}
    return {"badge": "#16a34a", "hero_start": "#dcfce7", "hero_end": "#eff6ff"}


def _wrap(text: str, width: float, max_lines: int) -> list[str]:
    clean = " ".join(str(text).split())
    if not clean:
        return [""]
    lines: list[str] = []
    current = ""
    current_width = 0.0
    for token in _text_tokens(clean):
        token_width = _display_width(token)
        if current and current_width + token_width > width:
            lines.append(current.rstrip())
            current = token.lstrip()
            current_width = _display_width(current)
            continue
        current += token
        current_width += token_width
    if current:
        lines.append(current.rstrip())
    if len(lines) > max_lines:
        lines = lines[:max_lines]
        lines[-1] = lines[-1].rstrip("，。；、 ") + "…"
    return lines


def _text_tokens(text: str) -> list[str]:
    # Keep English words together, but allow Chinese text to wrap character by character.
    return re.findall(r"[A-Za-z0-9%./:+-]+(?:\s+)?|\s+|.", text)


def _display_width(text: str) -> float:
    width = 0.0
    for char in text:
        if char.isspace():
            width += 0.35
        elif ord(char) < 128:
            width += 0.58
        else:
            width += 1.0
    return width


def _slug(text: str) -> str:
    slug = re.sub(r"[^a-zA-Z0-9\u4e00-\u9fff]+", "-", text).strip("-")
    return slug[:32] or "card"


def _e(text: str) -> str:
    return html.escape(str(text), quote=False)
