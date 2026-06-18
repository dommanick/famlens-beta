import unittest

from app.clerk import build_clerk_phrase, format_clerk_phrase, parse_clerk_command


class ClerkTests(unittest.TestCase):
    def test_parse_clerk_command(self):
        self.assertEqual(parse_clerk_command("问店员：韩国豆芽在哪里"), "韩国豆芽在哪里")
        self.assertIsNone(parse_clerk_command("韩国豆芽在哪里"))

    def test_build_where_phrase(self):
        phrase = build_clerk_phrase("韩国豆芽在哪里")

        self.assertEqual(phrase.english, "Where can I find Korean bean sprouts?")
        self.assertIn("韩国豆芽", phrase.chinese)

    def test_format_clerk_phrase(self):
        phrase = build_clerk_phrase("空气炸锅在哪里")
        reply = format_clerk_phrase(phrase)

        self.assertIn("Where can I find air fryers?", reply)
        self.assertIn("给店员看", reply)


if __name__ == "__main__":
    unittest.main()

