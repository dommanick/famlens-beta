import tempfile
import unittest
from pathlib import Path

from fastapi.testclient import TestClient

import app.main as main
from app.profiles import ProfileStore, format_profile, parse_profile_command


class ProfileTests(unittest.TestCase):
    def test_profile_store_save_append_delete(self):
        with tempfile.TemporaryDirectory() as directory:
            store = ProfileStore(str(Path(directory) / "profiles.json"))

            profile = store.save("user-1", "我血脂高\n\n孩子8岁")
            self.assertEqual(profile.notes, "我血脂高\n孩子8岁")
            saved = store.get("user-1")
            self.assertIsNotNone(saved)
            self.assertEqual(saved.notes, "我血脂高\n孩子8岁")

            profile = store.append("user-1", "岳母高血压")
            self.assertEqual(profile.notes, "我血脂高\n孩子8岁\n岳母高血压")

            self.assertTrue(store.delete("user-1"))
            self.assertIsNone(store.get("user-1"))

    def test_profile_store_saves_family_setup_with_language(self):
        with tempfile.TemporaryDirectory() as directory:
            store = ProfileStore(str(Path(directory) / "profiles.json"))

            profile = store.save_family_setup("user-1", "zh-Hans", "爸爸68岁\n孩子8岁")

            self.assertEqual(profile.language, "zh-Hans")
            self.assertEqual(profile.members_text, "爸爸68岁\n孩子8岁")
            self.assertIn("爸爸68岁", profile.to_prompt_context())

    def test_profile_store_keeps_language_only_setup(self):
        with tempfile.TemporaryDirectory() as directory:
            store = ProfileStore(str(Path(directory) / "profiles.json"))

            store.save_family_setup("user-1", "en", "")
            profile = store.get("user-1")

            self.assertIsNotNone(profile)
            self.assertEqual(profile.language, "en")
            self.assertEqual(profile.members_text, "")

    def test_parse_profile_command(self):
        self.assertEqual(parse_profile_command("家庭档案"), ("show", None))
        self.assertEqual(parse_profile_command("清除家庭档案"), ("clear", None))
        self.assertEqual(parse_profile_command("设置家庭：我血脂高"), ("save", "我血脂高"))
        self.assertEqual(parse_profile_command("补充家庭：孩子8岁"), ("append", "孩子8岁"))
        self.assertIsNone(parse_profile_command("hello"))

    def test_format_empty_profile(self):
        self.assertIn("还没有家庭档案", format_profile(None))


class ProfileApiTests(unittest.TestCase):
    def setUp(self) -> None:
        self.client = TestClient(main.app)
        self.directory = tempfile.TemporaryDirectory()
        self.old_store = main.profile_store
        main.profile_store = ProfileStore(str(Path(self.directory.name) / "profiles.json"))

    def tearDown(self) -> None:
        main.profile_store = self.old_store
        self.directory.cleanup()

    def test_save_and_get_web_profile(self):
        response = self.client.post(
            "/api/profile",
            json={
                "user_id": " beta.user ",
                "output_language": "zh-Hans",
            "members_text": "爸爸68岁\n孩子8岁",
            "recovery_contact": "child@example.com",
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["user_id"], "beta.user")
        self.assertEqual(response.json()["household_id"], "beta.user")
        self.assertEqual(response.json()["output_language"], "zh-Hans")

        response = self.client.get("/api/profile/beta.user")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["members_text"], "爸爸68岁\n孩子8岁")
        self.assertEqual(response.json()["output_language"], "zh-Hans")

    def test_unknown_profile_returns_empty_shell(self):
        response = self.client.get("/api/profile/missing-user")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["user_id"], "missing-user")
        self.assertIsNone(response.json()["members_text"])


if __name__ == "__main__":
    unittest.main()
