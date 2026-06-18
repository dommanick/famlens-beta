import tempfile
import unittest
from pathlib import Path

from app.events import EventLogger, event_to_dict


class EventTests(unittest.TestCase):
    def test_log_and_tail_events(self):
        with tempfile.TemporaryDirectory() as directory:
            logger = EventLogger(str(Path(directory) / "events.jsonl"))

            logger.log("profile_saved", "user-1", notes_chars=12)
            logger.log("feedback_received", "user-1", feedback="helpful")

            events = logger.tail(10)

            self.assertEqual(len(events), 2)
            self.assertEqual(events[0].event_type, "profile_saved")
            self.assertEqual(events[0].payload["notes_chars"], 12)
            self.assertEqual(events[1].payload["feedback"], "helpful")

    def test_event_to_dict(self):
        with tempfile.TemporaryDirectory() as directory:
            logger = EventLogger(str(Path(directory) / "events.jsonl"))
            event = logger.log("help_shown", "user-1", text="hello")

            data = event_to_dict(event)

            self.assertEqual(data["event_type"], "help_shown")
            self.assertEqual(data["user_id"], "user-1")
            self.assertEqual(data["payload"], {"text": "hello"})


if __name__ == "__main__":
    unittest.main()

