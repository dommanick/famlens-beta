from __future__ import annotations

import os
import subprocess
import sys

import httpx


def _git_config(key: str) -> str:
    result = subprocess.run(["git", "config", "--get", key], text=True, capture_output=True, check=False)
    return result.stdout.strip()


def _deploy_hook_url() -> str:
    return os.getenv("RENDER_DEPLOY_HOOK_URL", "").strip() or _git_config("famlens.renderDeployHook")


def _push_to_main() -> None:
    subprocess.run(["git", "push", "origin", "HEAD:main"], check=True)


def _trigger_render(deploy_hook_url: str) -> None:
    response = httpx.post(deploy_hook_url, timeout=30)
    response.raise_for_status()
    print(f"Render deploy hook accepted with HTTP {response.status_code}.")


def main() -> int:
    deploy_hook_url = _deploy_hook_url()
    if not deploy_hook_url:
        print(
            "Missing Render deploy hook. Set RENDER_DEPLOY_HOOK_URL or git config famlens.renderDeployHook.",
            file=sys.stderr,
        )
        return 1

    try:
        _push_to_main()
        _trigger_render(deploy_hook_url)
    except subprocess.CalledProcessError as error:
        print(f"Git push failed with exit code {error.returncode}. Render deploy was not triggered.", file=sys.stderr)
        return error.returncode or 1
    except httpx.HTTPStatusError as error:
        print(f"Render deploy hook failed with HTTP {error.response.status_code}.", file=sys.stderr)
        print(error.response.text[:1000], file=sys.stderr)
        return 1
    except httpx.HTTPError as error:
        print(f"Render deploy hook failed: {error}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
