from __future__ import annotations

import httpx

from app.config import settings
from app.languages import normalize_output_language, output_language_prompt_name


class SpeechError(RuntimeError):
    pass


async def synthesize_speech(text: str, output_language: str | None = None) -> bytes:
    clean_text = " ".join(text.split())
    if not clean_text:
        raise SpeechError("Speech text is empty.")
    if not settings.openai_api_key:
        raise SpeechError("OPENAI_API_KEY is not configured.")

    language = normalize_output_language(output_language)
    payload = {
        "model": settings.tts_model,
        "voice": settings.tts_voice,
        "input": clean_text[:1200],
        "instructions": _speech_instructions(language),
        "response_format": "mp3",
    }
    headers = {
        "Authorization": f"Bearer {settings.openai_api_key}",
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient(timeout=settings.request_timeout_seconds) as client:
        response = await client.post(
            "https://api.openai.com/v1/audio/speech",
            headers=headers,
            json=payload,
        )

    if response.status_code >= 400:
        raise SpeechError(f"Speech request failed: {response.status_code} {response.text[:500]}")

    return response.content


def _speech_instructions(output_language: str) -> str:
    target = output_language_prompt_name(output_language)
    return (
        f"Speak in {target}. Use a warm, patient, natural voice for an older adult in a supermarket. "
        "Sound like a caring family member, not a robot. Keep a calm pace, with clear pauses after key warnings."
    )
