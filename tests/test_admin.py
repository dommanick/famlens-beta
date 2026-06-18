import unittest

from app.admin import build_admin_overview
from app.events import Event


class AdminOverviewTests(unittest.TestCase):
    def test_build_admin_overview_from_events(self) -> None:
        events = [
            Event(
                event_type="web_image_analysis_succeeded",
                user_id="web-user",
                created_at="2026-06-18T01:00:00+00:00",
                payload={"category": "急救用品", "verdict": "可以买", "output_language": "zh-Hans"},
            ),
            Event(
                event_type="web_receipt_analysis_succeeded",
                user_id="web-user",
                created_at="2026-06-18T01:01:00+00:00",
                payload={"total_amount": 16.48, "output_language": "zh-Hans"},
            ),
            Event(
                event_type="ai_chat_answered",
                user_id="web-user",
                created_at="2026-06-18T01:02:00+00:00",
                payload={"output_language": "zh-Hans"},
            ),
            Event(
                event_type="client_share_family",
                user_id="web-user",
                created_at="2026-06-18T01:03:00+00:00",
                payload={"mode": "product"},
            ),
            Event(
                event_type="client_feedback_submitted",
                user_id="beta-user-1",
                created_at="2026-06-18T01:04:00+00:00",
                payload={"feedback": "helpful"},
            ),
        ]

        overview = build_admin_overview(events)

        self.assertEqual(overview["summary"]["product_scans"], 1)
        self.assertEqual(overview["summary"]["receipt_scans"], 1)
        self.assertEqual(overview["summary"]["ai_chats"], 1)
        self.assertEqual(overview["modules"]["finance"]["tracked_receipt_amount"], 16.48)
        self.assertEqual(overview["modules"]["marketing"]["share_actions"], 1)
        self.assertEqual(overview["modules"]["user_management"]["feedback_count"], 1)
        self.assertEqual(overview["charts"]["category_distribution"][0]["label"], "急救用品")

    def test_build_admin_overview_handles_empty_events(self) -> None:
        overview = build_admin_overview([])

        self.assertEqual(overview["summary"]["total_events"], 0)
        self.assertEqual(overview["summary"]["failure_rate"], 0)
        self.assertEqual(overview["modules"]["finance"]["tracked_receipt_amount"], 0)


if __name__ == "__main__":
    unittest.main()
