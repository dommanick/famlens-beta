import tempfile
import unittest
from pathlib import Path

from fastapi.testclient import TestClient

import app.main as main
from app.records import FamilyRecordStore


class FamilyRecordStoreTests(unittest.TestCase):
    def test_store_saves_receipts_and_builds_monthly_report(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            store = FamilyRecordStore(str(Path(directory) / "records.json"))

            receipt = store.save_receipt(
                "user-1",
                {
                    "store_name": "Safeway",
                    "purchase_date": "2026-06-16",
                    "currency": "CAD",
                    "total_amount": 16.48,
                    "item_count": 2,
                    "nutrition_signal": "Fruit purchase is good, but add vegetables.",
                    "spending_signal": "Small grocery trip.",
                    "family_report_note": "Useful for monthly diet tracking.",
                    "category_summary": [
                        {"category": "Fruit", "estimated_amount": 8.99, "note": "Apples"},
                        {"category": "Snack", "estimated_amount": 7.49, "note": "Candy"},
                    ],
                },
                "en",
            )

            self.assertEqual(receipt["store_name"], "Safeway")
            records = store.get_user_records("user-1")
            report = records["monthly_report"]

            self.assertEqual(records["receipts"][0]["store_name"], "Safeway")
            self.assertEqual(report["receipt_count"], 1)
            self.assertAlmostEqual(report["total_spend"], 16.48)
            self.assertEqual(report["top_categories"][0]["category"], "Fruit")
            self.assertIn("Fruit purchase", report["nutrition_signals"][0])

    def test_store_clear_removes_user_records(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            store = FamilyRecordStore(str(Path(directory) / "records.json"))
            store.save_product("user-1", {"item_name": "Olive oil", "category": "Food"}, "en")

            self.assertTrue(store.clear("user-1"))
            self.assertEqual(store.get_user_records("user-1")["products"], [])


class FamilyRecordApiTests(unittest.TestCase):
    def setUp(self) -> None:
        self.client = TestClient(main.app)
        self.directory = tempfile.TemporaryDirectory()
        self.old_store = main.family_record_store
        main.family_record_store = FamilyRecordStore(str(Path(self.directory.name) / "records.json"))

    def tearDown(self) -> None:
        main.family_record_store = self.old_store
        self.directory.cleanup()

    def test_save_get_and_clear_records(self) -> None:
        product_response = self.client.post(
            "/api/records/product",
            json={
                "user_id": " beta.user ",
                "output_language": "en",
                "judgement": {
                    "item_name": "Band-Aid flexible rolled gauze",
                    "category": "First aid",
                    "verdict": "Useful",
                },
            },
        )
        self.assertEqual(product_response.status_code, 200)
        self.assertEqual(product_response.json()["record"]["item_name"], "Band-Aid flexible rolled gauze")

        receipt_response = self.client.post(
            "/api/records/receipt",
            json={
                "user_id": "beta.user",
                "output_language": "en",
                "receipt": {
                    "store_name": "Safeway",
                    "currency": "CAD",
                    "total_amount": 22.5,
                    "item_count": 3,
                    "category_summary": [{"category": "Vegetables", "estimated_amount": 12.0}],
                },
            },
        )
        self.assertEqual(receipt_response.status_code, 200)

        records_response = self.client.get("/api/records/beta.user")
        self.assertEqual(records_response.status_code, 200)
        records = records_response.json()
        self.assertEqual(len(records["products"]), 1)
        self.assertEqual(len(records["receipts"]), 1)
        self.assertEqual(records["monthly_report"]["top_categories"][0]["category"], "Vegetables")

        clear_response = self.client.delete("/api/records/beta.user")
        self.assertEqual(clear_response.status_code, 200)
        self.assertEqual(clear_response.json()["products"], [])


if __name__ == "__main__":
    unittest.main()
