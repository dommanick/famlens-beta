from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from threading import Lock


@dataclass(frozen=True)
class AnalysisJob:
    status: str
    message: str
    card_url: str | None = None
    updated_at: str = ""


class AnalysisJobStore:
    def __init__(self) -> None:
        self._jobs: dict[str, AnalysisJob] = {}
        self._lock = Lock()

    def mark_pending(self, user_id: str) -> None:
        self._set(
            user_id,
            AnalysisJob(
                status="pending",
                message="照片已收到，正在分析。",
                updated_at=_now(),
            ),
        )

    def mark_done(self, user_id: str, message: str, card_url: str | None) -> None:
        self._set(
            user_id,
            AnalysisJob(
                status="done",
                message=message,
                card_url=card_url,
                updated_at=_now(),
            ),
        )

    def mark_failed(self, user_id: str, message: str) -> None:
        self._set(
            user_id,
            AnalysisJob(
                status="failed",
                message=message,
                updated_at=_now(),
            ),
        )

    def latest(self, user_id: str) -> AnalysisJob | None:
        with self._lock:
            return self._jobs.get(user_id)

    def _set(self, user_id: str, job: AnalysisJob) -> None:
        with self._lock:
            self._jobs[user_id] = job


def format_latest_result(job: AnalysisJob | None) -> str:
    if job is None:
        return "我这里还没有看到你的照片结果。你可以先发一张商品照片。"
    if job.status == "pending":
        return "还在分析这张照片。\n\n请再等 10 秒，然后回复：结果"
    if job.status == "failed":
        return job.message
    if job.card_url:
        return f"{job.message.rstrip()}\n\n图文卡：{job.card_url}"
    return job.message


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()
