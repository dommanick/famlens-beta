from __future__ import annotations

import os
import subprocess
import sys
from pathlib import Path

import httpx


ROOT = Path(__file__).resolve().parents[1]


def load_env_file(path: Path) -> dict[str, str]:
    values: dict[str, str] = {}
    if not path.exists():
        return values
    for line in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        clean = line.strip()
        if not clean or clean.startswith("#") or "=" not in clean:
            continue
        key, value = clean.split("=", 1)
        values[key.strip()] = value.strip().strip('"').strip("'")
    return values


def merged_env() -> dict[str, str]:
    values = dict(os.environ)
    for filename in (".env", "Famlens.env", "famlens.env"):
        values.update(load_env_file(ROOT / filename))
    return values


def check(name: str, ok: bool, detail: str) -> bool:
    status = "OK" if ok else "FAIL"
    print(f"[{status}] {name}: {detail}")
    return ok


def run_tests() -> bool:
    result = subprocess.run(
        [sys.executable, "-m", "unittest", "discover", "-s", "tests"],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    if result.returncode == 0:
        print("[OK] tests: unittest suite passed")
        return True
    print("[FAIL] tests: unittest suite failed")
    print(result.stdout)
    print(result.stderr)
    return False


def public_health_is_reachable(base_url: str) -> tuple[bool, str]:
    if not base_url.startswith("https://"):
        return False, base_url or "missing; set to the deployed HTTPS URL"
    try:
        response = httpx.get(f"{base_url.rstrip('/')}/health", timeout=8, follow_redirects=True)
        if response.status_code == 200:
            return True, f"{base_url.rstrip('/')}/health returned 200"
        return False, f"{base_url.rstrip('/')}/health returned {response.status_code}"
    except (httpx.HTTPError, TimeoutError, OSError) as error:
        return False, f"{base_url.rstrip('/')}/health unreachable: {error}"


def main() -> int:
    env = merged_env()
    checks: list[bool] = []

    openai_key = env.get("OPENAI_API_KEY", "")
    admin_password = env.get("ADMIN_PASSWORD", "")
    public_base_url = env.get("PUBLIC_BASE_URL", "")

    checks.append(check("OPENAI_API_KEY", len(openai_key) >= 80, "configured" if openai_key else "missing"))
    checks.append(
        check(
            "ADMIN_PASSWORD",
            len(admin_password) >= 12,
            "configured with 12+ chars" if len(admin_password) >= 12 else "use 12+ chars before public beta",
        )
    )
    public_ok, public_detail = public_health_is_reachable(public_base_url)
    checks.append(check("PUBLIC_BASE_URL", public_ok, public_detail))

    default_folders = {
        "CARD_OUTPUT_DIR": "data/cards",
        "UPLOAD_OUTPUT_DIR": "data/uploads",
    }
    for folder_key, default_folder in default_folders.items():
        folder = ROOT / env.get(folder_key, default_folder)
        folder.mkdir(parents=True, exist_ok=True)
        checks.append(check(folder_key, folder.exists() and folder.is_dir(), str(folder)))

    checks.append(run_tests())

    if all(checks):
        print("\nFamLens is ready for a small public beta deployment.")
        return 0

    print("\nFix the FAIL items before sending the link to external testers.")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
