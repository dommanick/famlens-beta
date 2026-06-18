import unittest

from app.feedback import parse_feedback


class FeedbackTests(unittest.TestCase):
    def test_parse_feedback_keywords(self):
        self.assertEqual(parse_feedback("买了"), ("bought", "买了"))
        self.assertEqual(parse_feedback("不准"), ("inaccurate", "不准"))
        self.assertEqual(parse_feedback(" 看不懂 "), ("hard_to_understand", "看不懂"))
        self.assertIsNone(parse_feedback("这个怎么买"))


if __name__ == "__main__":
    unittest.main()

