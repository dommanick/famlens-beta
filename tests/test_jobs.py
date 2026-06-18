import unittest

from app.jobs import AnalysisJobStore, format_latest_result


class JobTests(unittest.TestCase):
    def test_pending_result(self):
        store = AnalysisJobStore()
        store.mark_pending("user-1")

        reply = format_latest_result(store.latest("user-1"))

        self.assertIn("还在分析", reply)
        self.assertIn("结果", reply)

    def test_done_result_includes_card_url(self):
        store = AnalysisJobStore()
        store.mark_done("user-1", "可以买：韩国豆芽", "https://example.com/card.svg")

        reply = format_latest_result(store.latest("user-1"))

        self.assertIn("可以买：韩国豆芽", reply)
        self.assertIn("图文卡：https://example.com/card.svg", reply)

    def test_empty_result(self):
        self.assertIn("还没有看到", format_latest_result(None))


if __name__ == "__main__":
    unittest.main()
