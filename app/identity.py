from __future__ import annotations

import json
import os
import secrets
import tempfile
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any


@dataclass(frozen=True)
class HouseholdIdentity:
    device_id: str
    household_id: str
    family_code: str
    language: str
    plan: str
    recovery_contact: str
    is_new_household: bool

    def to_dict(self) -> dict[str, str | bool]:
        return {
            "device_id": self.device_id,
            "household_id": self.household_id,
            "family_code": self.family_code,
            "language": self.language,
            "plan": self.plan,
            "recovery_contact": self.recovery_contact,
            "is_new_household": self.is_new_household,
        }


class IdentityStore:
    def __init__(self, path: str) -> None:
        self.path = Path(path)

    def bootstrap_device(self, device_id: str, language: str) -> HouseholdIdentity:
        clean_device_id = _clean_id(device_id, "device")
        clean_language = (language or "en").strip()[:24]
        now = datetime.now(UTC).isoformat()
        data = self._read()
        devices = _dict(data.setdefault("devices", {}))
        households = _dict(data.setdefault("households", {}))
        device = _dict(devices.get(clean_device_id))
        is_new_household = False

        household_id = str(device.get("household_id") or "")
        if not household_id or household_id not in households:
            household_id = _new_household_id()
            family_code = _new_family_code(households)
            households[household_id] = {
                "household_id": household_id,
                "family_code": family_code,
                "created_at": now,
                "updated_at": now,
                "language": clean_language,
                "plan": "free",
                "recovery_contact": "",
                "linked_accounts": [],
            }
            is_new_household = True

        household = _dict(households.get(household_id))
        household["updated_at"] = now
        if clean_language:
            household["language"] = clean_language
        household.setdefault("plan", "free")
        household.setdefault("recovery_contact", "")
        household.setdefault("family_code", _new_family_code(households))
        household.setdefault("linked_accounts", [])
        households[household_id] = household

        devices[clean_device_id] = {
            **device,
            "device_id": clean_device_id,
            "household_id": household_id,
            "last_seen_at": now,
            "created_at": device.get("created_at") or now,
            "language": clean_language,
        }

        data["devices"] = devices
        data["households"] = households
        self._write(data)

        return HouseholdIdentity(
            device_id=clean_device_id,
            household_id=household_id,
            family_code=str(household.get("family_code") or ""),
            language=str(household.get("language") or clean_language),
            plan=str(household.get("plan") or "free"),
            recovery_contact=str(household.get("recovery_contact") or ""),
            is_new_household=is_new_household,
        )

    def save_recovery_contact(self, household_id: str, contact: str) -> HouseholdIdentity | None:
        clean_household_id = _clean_id(household_id, "hh")
        clean_contact = " ".join(str(contact or "").strip().split())[:160]
        data = self._read()
        households = _dict(data.setdefault("households", {}))
        household = households.get(clean_household_id)
        if not isinstance(household, dict):
            return None

        household["recovery_contact"] = clean_contact
        household["updated_at"] = datetime.now(UTC).isoformat()
        households[clean_household_id] = household
        data["households"] = households
        self._write(data)

        device_id = _first_device_for_household(_dict(data.get("devices")), clean_household_id)
        return HouseholdIdentity(
            device_id=device_id,
            household_id=clean_household_id,
            family_code=str(household.get("family_code") or ""),
            language=str(household.get("language") or ""),
            plan=str(household.get("plan") or "free"),
            recovery_contact=clean_contact,
            is_new_household=False,
        )

    def join_device_by_family_code(
        self,
        device_id: str,
        family_code: str,
        language: str,
    ) -> tuple[HouseholdIdentity, str] | None:
        clean_device_id = _clean_id(device_id, "device")
        clean_code = _clean_family_code(family_code)
        if not clean_code:
            return None

        clean_language = (language or "en").strip()[:24]
        now = datetime.now(UTC).isoformat()
        data = self._read()
        devices = _dict(data.setdefault("devices", {}))
        households = _dict(data.setdefault("households", {}))
        target_household_id = ""
        target_household: dict[str, Any] | None = None

        for household_id, household in households.items():
            if not isinstance(household, dict):
                continue
            if _clean_family_code(str(household.get("family_code") or "")) == clean_code:
                target_household_id = str(household_id)
                target_household = household
                break

        if not target_household_id or target_household is None:
            return None

        device = _dict(devices.get(clean_device_id))
        previous_household_id = str(device.get("household_id") or "")
        target_household["updated_at"] = now
        target_household.setdefault("plan", "free")
        target_household.setdefault("recovery_contact", "")
        target_household.setdefault("family_code", clean_code)
        target_household.setdefault("linked_accounts", [])
        if clean_language and not target_household.get("language"):
            target_household["language"] = clean_language
        households[target_household_id] = target_household

        devices[clean_device_id] = {
            **device,
            "device_id": clean_device_id,
            "household_id": target_household_id,
            "last_seen_at": now,
            "created_at": device.get("created_at") or now,
            "language": clean_language,
        }

        data["devices"] = devices
        data["households"] = households
        self._write(data)

        return (
            HouseholdIdentity(
                device_id=clean_device_id,
                household_id=target_household_id,
                family_code=str(target_household.get("family_code") or clean_code),
                language=str(target_household.get("language") or clean_language),
                plan=str(target_household.get("plan") or "free"),
                recovery_contact=str(target_household.get("recovery_contact") or ""),
                is_new_household=False,
            ),
            previous_household_id,
        )

    def get_household(self, household_id: str) -> dict[str, Any] | None:
        household = _dict(self._read().get("households")).get(_clean_id(household_id, "hh"))
        return household if isinstance(household, dict) else None

    def overview(self) -> dict[str, int]:
        data = self._read()
        devices = _dict(data.get("devices"))
        households = _dict(data.get("households"))
        linked_accounts = 0
        contacts = 0
        for household in households.values():
            if not isinstance(household, dict):
                continue
            linked_accounts += len(household.get("linked_accounts") or [])
            if household.get("recovery_contact"):
                contacts += 1
        return {
            "households": len(households),
            "devices": len(devices),
            "recovery_contacts": contacts,
            "linked_accounts": linked_accounts,
        }

    def _read(self) -> dict[str, Any]:
        if not self.path.exists():
            return {"devices": {}, "households": {}}
        with self.path.open("r", encoding="utf-8") as file:
            data = json.load(file)
        if not isinstance(data, dict):
            return {"devices": {}, "households": {}}
        data.setdefault("devices", {})
        data.setdefault("households", {})
        return data

    def _write(self, data: dict[str, Any]) -> None:
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


def _clean_id(value: str, fallback_prefix: str) -> str:
    clean = "".join(char for char in str(value or "").strip() if char.isalnum() or char in {"-", "_", "."})
    if clean:
        return clean[:120]
    return f"{fallback_prefix}-{secrets.token_hex(8)}"


def _new_household_id() -> str:
    return f"hh-{secrets.token_urlsafe(12).replace('_', '').replace('-', '')[:16]}"


def _new_family_code(households: dict[str, Any]) -> str:
    existing = {
        str(household.get("family_code"))
        for household in households.values()
        if isinstance(household, dict) and household.get("family_code")
    }
    while True:
        code = secrets.token_hex(3).upper()
        if code not in existing:
            return code


def _clean_family_code(value: str) -> str:
    return "".join(char for char in str(value or "").upper() if char.isalnum())[:12]


def _first_device_for_household(devices: dict[str, Any], household_id: str) -> str:
    for device_id, device in devices.items():
        if isinstance(device, dict) and device.get("household_id") == household_id:
            return str(device_id)
    return ""


def _dict(value: Any) -> dict[str, Any]:
    return value if isinstance(value, dict) else {}
