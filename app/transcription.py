from __future__ import annotations

import httpx

from app.config import settings
from app.languages import normalize_output_language


class TranscriptionError(RuntimeError):
    pass


LANGUAGE_CODES = {
    "zh-Hans": "zh",
    "en": "en",
    "es": "es",
    "fr": "fr",
    "ko": "ko",
    "ja": "ja",
    "vi": "vi",
    "hi": "hi",
}


async def transcribe_audio(data: bytes, content_type: str, output_language: str | None = None) -> str:
    if not data:
        raise TranscriptionError("Audio is empty.")
    if not settings.openai_api_key:
        raise TranscriptionError("OPENAI_API_KEY is not configured.")

    language = normalize_output_language(output_language)
    files = {
        "file": (_audio_filename(content_type), data, content_type or "application/octet-stream"),
    }
    form = {
        "model": settings.stt_model,
        "response_format": "json",
        "language": LANGUAGE_CODES.get(language, "zh"),
        "prompt": "This is a short shopping assistant question from an older adult. Keep the transcript natural.",
    }
    headers = {"Authorization": f"Bearer {settings.openai_api_key}"}

    async with httpx.AsyncClient(timeout=settings.request_timeout_seconds) as client:
        response = await client.post(
            "https://api.openai.com/v1/audio/transcriptions",
            headers=headers,
            data=form,
            files=files,
        )

    if response.status_code >= 400:
        raise TranscriptionError(f"Transcription request failed: {response.status_code} {response.text[:500]}")

    try:
        payload = response.json()
    except ValueError as error:
        raise TranscriptionError("Transcription response was not JSON.") from error

    text = " ".join(str(payload.get("text", "")).split())
    if not text:
        raise TranscriptionError("Transcription response did not include text.")
    return text


def _audio_filename(content_type: str) -> str:
    if "mp4" in content_type or "aac" in content_type:
        return "question.m4a"
    if "mpeg" in content_type or "mp3" in content_type:
        return "question.mp3"
    if "wav" in content_type:
        return "question.wav"
    if "ogg" in content_type:
        return "question.ogg"
    return "question.webm"
