from __future__ import annotations

import os
import re
import subprocess
import sys
from dataclasses import dataclass

import httpx


GITHUB_API_BASE = "https://api.github.com"


@dataclass(frozen=True)
class Repository:
    owner: str
    name: str

    @property
    def full_name(self) -> str:
        return f"{self.owner}/{self.name}"


def _read_env_file(path: str) -> None:
    if not os.path.exists(path):
        return

    with open(path, "r", encoding="utf-8") as env_file:
        for raw_line in env_file:
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            key = key.strip()
            value = value.strip().strip("\"'")
            if key and key not in os.environ:
                os.environ[key] = value


def _repository_from_remote() -> Repository:
    remote = subprocess.check_output(["git", "remote", "get-url", "origin"], text=True).strip()
    patterns = [
        r"github\.com[:/](?P<owner>[^/]+)/(?P<repo>[^/.]+)(?:\.git)?$",
        r"github\.com/(?P<owner>[^/]+)/(?P<repo>[^/.]+)(?:\.git)?$",
    ]
    for pattern in patterns:
        match = re.search(pattern, remote)
        if match:
            return Repository(match.group("owner"), match.group("repo"))
    raise RuntimeError(f"Cannot parse GitHub repository from remote origin: {remote}")


def _repository() -> Repository:
    configured = os.getenv("GITHUB_REPOSITORY", "").strip()
    if configured and "/" in configured:
        owner, name = configured.split("/", 1)
        return Repository(owner, name)
    return _repository_from_remote()


def _client(token: str) -> httpx.Client:
    return httpx.Client(
        base_url=GITHUB_API_BASE,
        headers={
            "Accept": "application/vnd.github+json",
            "Authorization": f"Bearer {token}",
            "X-GitHub-Api-Version": "2022-11-28",
        },
        timeout=30,
    )


def _upsert_webhook(client: httpx.Client, repository: Repository, deploy_hook_url: str) -> str:
    hooks_response = client.get(f"/repos/{repository.full_name}/hooks")
    hooks_response.raise_for_status()

    payload = {
        "name": "web",
        "active": True,
        "events": ["push"],
        "config": {
            "url": deploy_hook_url,
            "content_type": "json",
            "insecure_ssl": "0",
        },
    }

    for hook in hooks_response.json():
        config = hook.get("config") or {}
        if config.get("url") == deploy_hook_url:
            hook_id = hook["id"]
            update_response = client.patch(f"/repos/{repository.full_name}/hooks/{hook_id}", json=payload)
            update_response.raise_for_status()
            return f"Updated existing GitHub webhook for {repository.full_name}."

    create_response = client.post(f"/repos/{repository.full_name}/hooks", json=payload)
    create_response.raise_for_status()
    return f"Created GitHub webhook for {repository.full_name}."


def main() -> int:
    _read_env_file("github.env")
    _read_env_file(".env")

    github_token = os.getenv("GITHUB_TOKEN", "").strip()
    deploy_hook_url = os.getenv("RENDER_DEPLOY_HOOK_URL", "").strip()

    if not github_token:
        print("Missing GITHUB_TOKEN. Put it in github.env or export it before running.", file=sys.stderr)
        return 1
    if not deploy_hook_url:
        print(
            "Missing RENDER_DEPLOY_HOOK_URL. Copy the Deploy Hook URL from Render Settings and export it before running.",
            file=sys.stderr,
        )
        return 1

    repository = _repository()
    try:
        with _client(github_token) as client:
            print(_upsert_webhook(client, repository, deploy_hook_url))
    except httpx.HTTPStatusError as error:
        print(f"GitHub webhook setup failed with HTTP {error.response.status_code}.", file=sys.stderr)
        print(error.response.text[:1000], file=sys.stderr)
        return 1
    except (httpx.HTTPError, RuntimeError, subprocess.CalledProcessError) as error:
        print(f"GitHub webhook setup failed: {error}", file=sys.stderr)
        return 1

    print("Next push to main should trigger Render automatically.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
