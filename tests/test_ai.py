import json
import unittest

from app import ai


class AILatencyTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.original_post_responses = ai._post_responses

    async def asyncTearDown(self):
        ai._post_responses = self.original_post_responses

    async def test_product_analysis_does_not_make_extra_localization_call(self):
        calls = []

        async def fake_post_responses(payload):
            calls.append(payload)
            return json.dumps(
                {
                    "verdict": "Good",
                    "item_name": "Rolled gauze",
                    "category": "First aid",
                    "subtitle": "Protects small wounds",
                    "what_it_is": "A small flexible rolled gauze.",
                    "how_to_use": "Wrap it over a cleaned minor wound.",
                    "benefit": "Helps keep dressing in place.",
                    "warning": "Ask a professional for deep wounds.",
                    "storage": "Keep dry.",
                    "voice_summary": "This is small rolled gauze for minor wound dressing.",
                    "needs_more_photo": None,
                    "confidence": "high",
                }
            )

        ai._post_responses = fake_post_responses

        result = await ai.analyze_product_image("data:image/jpeg;base64,abc", output_language="en")

        self.assertEqual(result.item_name, "Rolled gauze")
        self.assertEqual(len(calls), 1)

    async def test_receipt_analysis_does_not_make_extra_localization_call(self):
        calls = []

        async def fake_post_responses(payload):
            calls.append(payload)
            return json.dumps(
                {
                    "store_name": "Safeway",
                    "purchase_date": "2026-06-16",
                    "currency": "CAD",
                    "total_amount": 16.48,
                    "tax_amount": 0,
                    "item_count": 2,
                    "items": [
                        {
                            "name": "Ambrosia",
                            "translated_name": "Ambrosia apples",
                            "category": "Fruit",
                            "amount": 8.99,
                            "confidence": "high",
                        }
                    ],
                    "category_summary": [
                        {"category": "Fruit", "estimated_amount": 8.99, "note": "Fresh produce purchase."}
                    ],
                    "nutrition_signal": "This receipt is mostly fruit.",
                    "spending_signal": "Small grocery purchase.",
                    "family_report_note": "Save more receipts for monthly trends.",
                    "voice_summary": "This is a small grocery receipt.",
                    "needs_more_photo": None,
                    "confidence": "high",
                }
            )

        ai._post_responses = fake_post_responses

        result = await ai.analyze_receipt_image("data:image/jpeg;base64,abc", output_language="en")

        self.assertEqual(result.store_name, "Safeway")
        self.assertEqual(len(calls), 1)


if __name__ == "__main__":
    unittest.main()
