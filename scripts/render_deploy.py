from __future__ import annotations

import argparse
import os
import sys

import httpx


RENDER_API_BASE = "https://api.render.com/v1"


def trigger_deploy_hook(deploy_hook_url: str) -> str:
    response = httpx.post(deploy_hook_url, timeout=30)
    response.raise_for_status()
    return f"Deploy hook accepted with HTTP {response.status_code}."


def trigger_render_api(api_key: str, service_id: str, commit_id: str | None, clear_cache: bool) -> str:
    payload: dict[str, str] = {"clearCache": "clear" if clear_cache else "do_not_clear"}
    if commit_id:
        payload["commitId"] = commit_id

    response = httpx.post(
        f"{RENDER_API_BASE}/services/{service_id}/deploys",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        json=payload,
        timeout=30,
    )
    response.raise_for_status()
    return f"Render API accepted deploy with HTTP {response.status_code}."


def main() -> int:
    parser = argparse.ArgumentParser(description="Trigger a Render deploy for FamLens.")
    parser.add_argument("--commit", default=os.getenv("RENDER_COMMIT_ID") or os.getenv("GITHUB_SHA"))
    parser.add_argument("--clear-cache", action="store_true", default=os.getenv("RENDER_CLEAR_CACHE") == "1")
    args = parser.parse_args()

    deploy_hook_url = os.getenv("RENDER_DEPLOY_HOOK_URL", "").strip()
    api_key = os.getenv("RENDER_API_KEY", "").strip()
    service_id = os.getenv("RENDER_SERVICE_ID", "").strip()

    try:
        if deploy_hook_url:
            print(trigger_deploy_hook(deploy_hook_url))
            return 0

        if api_key and service_id:
            print(trigger_render_api(api_key, service_id, args.commit, args.clear_cache))
            return 0

        print(
            "No Render deployment credential configured. "
            "Set RENDER_DEPLOY_HOOK_URL, or set both RENDER_API_KEY and RENDER_SERVICE_ID."
        )
        return 0
    except httpx.HTTPStatusError as error:
        print(f"Render deploy request failed with HTTP {error.response.status_code}.", file=sys.stderr)
        print(error.response.text[:1000], file=sys.stderr)
        return 1
    except httpx.HTTPError as error:
        print(f"Render deploy request failed: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
