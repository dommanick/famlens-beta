import tempfile
import unittest
from pathlib import Path

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

    def test_parse_profile_command(self):
        self.assertEqual(parse_profile_command("家庭档案"), ("show", None))
        self.assertEqual(parse_profile_command("清除家庭档案"), ("clear", None))
        self.assertEqual(parse_profile_command("设置家庭：我血脂高"), ("save", "我血脂高"))
        self.assertEqual(parse_profile_command("补充家庭：孩子8岁"), ("append", "孩子8岁"))
        self.assertIsNone(parse_profile_command("hello"))

    def test_format_empty_profile(self):
        self.assertIn("还没有家庭档案", format_profile(None))


if __name__ == "__main__":
    unittest.main()
