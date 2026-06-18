import unittest

from app.ai import _chat_payload


class ChatTests(unittest.TestCase):
    def test_chat_payload_uses_target_language_and_context(self) -> None:
        payload = _chat_payload(
            question="Can my father use this?",
            output_language="hi",
            context={
                "type": "product",
                "judgement": {
                    "item_name": "Systane eye drops",
                    "warning": "Ask a pharmacist if symptoms continue.",
                },
                "ignored": "do not include",
            },
            history=[{"role": "user", "text": "What is it?"}],
        )

        prompt = payload["input"][1]["content"][0]["text"]

        self.assertIn("Hindi", payload["input"][0]["content"][0]["text"])
        self.assertIn("Systane eye drops", prompt)
        self.assertIn("Can my father use this?", prompt)
        self.assertNotIn("do not include", prompt)

    def test_chat_payload_trims_history(self) -> None:
        history = [{"role": "user", "text": f"message {index}"} for index in range(10)]

        payload = _chat_payload("latest", "en", {}, history)
        prompt = payload["input"][1]["content"][0]["text"]

        self.assertNotIn("message 3", prompt)
        self.assertIn("message 4", prompt)
        self.assertIn("message 9", prompt)


if __name__ == "__main__":
    unittest.main()
