import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv


load_dotenv()
for local_env_file in ("Famlens.env", "famlens.env"):
    if Path(local_env_file).exists():
        load_dotenv(local_env_file, override=False)


@dataclass(frozen=True)
class Settings:
    app_name: str = os.getenv("APP_NAME", "FamLens")
    wechat_token: str = os.getenv("WECHAT_TOKEN", "change-me")
    openai_api_key: str = os.getenv("OPENAI_API_KEY", "")
    ai_model: str = os.getenv("AI_MODEL", "gpt-4.1-mini")
    stt_model: str = os.getenv("STT_MODEL", "gpt-4o-mini-transcribe")
    tts_model: str = os.getenv("TTS_MODEL", "gpt-4o-mini-tts")
    tts_voice: str = os.getenv("TTS_VOICE", "coral")
    admin_username: str = os.getenv("ADMIN_USERNAME", "admin")
    admin_password: str = os.getenv("ADMIN_PASSWORD", "")
    request_timeout_seconds: float = float(os.getenv("REQUEST_TIMEOUT_SECONDS", "30"))
    profile_store_path: str = os.getenv("PROFILE_STORE_PATH", "data/profiles.json")
    family_record_store_path: str = os.getenv("FAMILY_RECORD_STORE_PATH", "data/family_records.json")
    event_log_path: str = os.getenv("EVENT_LOG_PATH", "data/events.jsonl")
    card_output_dir: str = os.getenv("CARD_OUTPUT_DIR", "data/cards")
    upload_output_dir: str = os.getenv("UPLOAD_OUTPUT_DIR", "data/uploads")
    public_base_url: str = os.getenv("PUBLIC_BASE_URL", "").rstrip("/")


settings = Settings()
