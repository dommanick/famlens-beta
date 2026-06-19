from __future__ import annotations

import json
import os
import tempfile
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path


@dataclass(frozen=True)
class FamilyProfile:
    user_id: str
    notes: str
    updated_at: str
    language: str = ""
    members_text: str = ""

    def to_prompt_context(self) -> str:
        members = self.members_text.strip()
        if members:
            return f"Family members and household basics:\n{members}"
        return self.notes.strip()


class ProfileStore:
    def __init__(self, path: str) -> None:
        self.path = Path(path)

    def get(self, user_id: str) -> FamilyProfile | None:
        data = self._read()
        raw = data.get(user_id)
        if not isinstance(raw, dict):
            return None
        notes = str(raw.get("notes", "")).strip()
        members_text = str(raw.get("members_text", "")).strip()
        language = str(raw.get("language", "")).strip()
        if not notes and not members_text and not language:
            return None
        return FamilyProfile(
            user_id=user_id,
            notes=notes,
            updated_at=str(raw.get("updated_at", "")),
            language=language,
            members_text=members_text,
        )

    def save(self, user_id: str, notes: str) -> FamilyProfile:
        clean_notes = _clean_notes(notes)
        if not clean_notes:
            raise ValueError("Family profile notes cannot be empty.")

        data = self._read()
        profile = FamilyProfile(
            user_id=user_id,
            notes=clean_notes,
            updated_at=datetime.now(UTC).isoformat(),
        )
        data[user_id] = {
            "notes": profile.notes,
            "updated_at": profile.updated_at,
        }
        self._write(data)
        return profile

    def save_family_setup(self, user_id: str, language: str, members_text: str) -> FamilyProfile:
        clean_members = _clean_notes(members_text)
        data = self._read()
        previous = data.get(user_id) if isinstance(data.get(user_id), dict) else {}
        notes = str(previous.get("notes", "")).strip() or clean_members
        profile = FamilyProfile(
            user_id=user_id,
            notes=notes,
            updated_at=datetime.now(UTC).isoformat(),
            language=language.strip(),
            members_text=clean_members,
        )
        data[user_id] = {
            **previous,
            "language": profile.language,
            "members_text": profile.members_text,
            "notes": profile.notes,
            "updated_at": profile.updated_at,
        }
        self._write(data)
        return profile

    def append(self, user_id: str, notes: str) -> FamilyProfile:
        existing = self.get(user_id)
        if existing is None:
            return self.save(user_id, notes)
        return self.save(user_id, f"{existing.notes}\n{_clean_notes(notes)}")

    def delete(self, user_id: str) -> bool:
        data = self._read()
        existed = user_id in data
        data.pop(user_id, None)
        self._write(data)
        return existed

    def migrate_user(self, source_user_id: str, target_user_id: str) -> bool:
        if source_user_id == target_user_id:
            return False
        data = self._read()
        source = data.get(source_user_id)
        if not isinstance(source, dict):
            return False
        target = data.get(target_user_id)
        if not isinstance(target, dict) or not (target.get("members_text") or target.get("notes") or target.get("language")):
            data[target_user_id] = {
                **source,
                "migrated_from": source_user_id,
                "updated_at": datetime.now(UTC).isoformat(),
            }
        data.pop(source_user_id, None)
        self._write(data)
        return True

    def _read(self) -> dict[str, dict[str, str]]:
        if not self.path.exists():
            return {}
        with self.path.open("r", encoding="utf-8") as file:
            data = json.load(file)
        if not isinstance(data, dict):
            return {}
        return data

    def _write(self, data: dict[str, dict[str, str]]) -> None:
        self.path.parent.mkdir(parents=True, exist_ok=True)
        fd, tmp_name = tempfile.mkstemp(
            dir=str(self.path.parent),
            prefix=f".{self.path.name}.",
            text=True,
        )
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as file:
                json.dump(data, file, ensure_ascii=False, indent=2, sort_keys=True)
                file.write("\n")
            os.replace(tmp_name, self.path)
        finally:
            if os.path.exists(tmp_name):
                os.unlink(tmp_name)


def _clean_notes(notes: str) -> str:
    lines = [line.strip() for line in notes.strip().splitlines()]
    return "\n".join(line for line in lines if line)


def format_profile(profile: FamilyProfile | None) -> str:
    if profile is None:
        return (
            "还没有家庭档案。\n\n"
            "你可以这样发：\n"
            "设置家庭：我血脂高；岳母高血压；孩子8岁；老婆读博士，用脑多。"
        )

    return (
        "【家庭档案】\n"
        f"{profile.notes}\n\n"
        "之后你发商品照片时，我会自动结合这些情况提醒糖、钠、脂肪、儿童营养等问题。"
    )


def parse_profile_command(text: str) -> tuple[str, str | None] | None:
    clean = text.strip()
    normalized = clean.replace("：", ":")
    lowered = normalized.lower()

    if lowered in {"家庭档案", "查看家庭档案", "查看家庭", "我的家庭", "profile"}:
        return ("show", None)

    if lowered in {"清除家庭档案", "删除家庭档案", "重置家庭档案", "clear profile"}:
        return ("clear", None)

    for prefix in ("设置家庭:", "家庭设置:", "家庭档案:", "保存家庭:", "set profile:"):
        if normalized.startswith(prefix):
            return ("save", normalized[len(prefix) :].strip())

    for prefix in ("补充家庭:", "补充档案:", "添加家庭:", "追加家庭:", "append profile:"):
        if normalized.startswith(prefix):
            return ("append", normalized[len(prefix) :].strip())

    return None
