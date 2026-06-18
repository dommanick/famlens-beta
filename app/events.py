from __future__ import annotations

import json
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any


@dataclass(frozen=True)
class Event:
    event_type: str
    user_id: str
    payload: dict[str, Any]
    created_at: str


class EventLogger:
    def __init__(self, path: str) -> None:
        self.path = Path(path)

    def log(self, event_type: str, user_id: str, **payload: Any) -> Event:
        event = Event(
            event_type=event_type,
            user_id=user_id,
            payload=payload,
            created_at=datetime.now(UTC).isoformat(),
        )
        self.path.parent.mkdir(parents=True, exist_ok=True)
        with self.path.open("a", encoding="utf-8") as file:
            file.write(json.dumps(_event_to_dict(event), ensure_ascii=False, sort_keys=True))
            file.write("\n")
        return event

    def tail(self, limit: int = 50) -> list[Event]:
        return self.read(limit=limit)

    def read(self, limit: int | None = None) -> list[Event]:
        if not self.path.exists():
            return []

        lines = self.path.read_text(encoding="utf-8").splitlines()
        if limit is not None:
            lines = lines[-limit:]

        events: list[Event] = []
        for line in lines:
            try:
                raw = json.loads(line)
            except json.JSONDecodeError:
                continue
            events.append(
                Event(
                    event_type=str(raw.get("event_type", "")),
                    user_id=str(raw.get("user_id", "")),
                    payload=raw.get("payload") if isinstance(raw.get("payload"), dict) else {},
                    created_at=str(raw.get("created_at", "")),
                )
            )
        return events


def _event_to_dict(event: Event) -> dict[str, Any]:
    return {
        "created_at": event.created_at,
        "event_type": event.event_type,
        "payload": event.payload,
        "user_id": event.user_id,
    }


def event_to_dict(event: Event) -> dict[str, Any]:
    return _event_to_dict(event)
