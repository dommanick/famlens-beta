from __future__ import annotations

DEFAULT_OUTPUT_LANGUAGE = "en"

SUPPORTED_OUTPUT_LANGUAGES: dict[str, dict[str, str]] = {
    "zh-Hans": {"label": "中文", "prompt_name": "Simplified Chinese"},
    "en": {"label": "English", "prompt_name": "English"},
    "es": {"label": "Español", "prompt_name": "Spanish"},
    "fr": {"label": "Français", "prompt_name": "French"},
    "ko": {"label": "한국어", "prompt_name": "Korean"},
    "ja": {"label": "日本語", "prompt_name": "Japanese"},
    "vi": {"label": "Tiếng Việt", "prompt_name": "Vietnamese"},
    "hi": {"label": "हिन्दी", "prompt_name": "Hindi"},
}


def normalize_output_language(value: str | None) -> str:
    if not value:
        return DEFAULT_OUTPUT_LANGUAGE
    return value if value in SUPPORTED_OUTPUT_LANGUAGES else DEFAULT_OUTPUT_LANGUAGE


def output_language_prompt_name(value: str | None) -> str:
    code = normalize_output_language(value)
    return SUPPORTED_OUTPUT_LANGUAGES[code]["prompt_name"]
