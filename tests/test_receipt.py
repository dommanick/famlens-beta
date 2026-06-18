import unittest

from app.receipt import fallback_receipt_analysis, parse_receipt_analysis


class ReceiptAnalysisTests(unittest.TestCase):
    def test_parse_receipt_analysis(self) -> None:
        raw = """
        ```json
        {
          "store_name": "Safeway",
          "purchase_date": "06/16/2026",
          "currency": "CAD",
          "total_amount": "$16.48",
          "tax_amount": "0.00",
          "item_count": 2,
          "items": [
            {
              "name": "Wht Liq Honey Bear",
              "translated_name": "液体蜂蜜",
              "category": "调料酱料",
              "amount": "7.49",
              "confidence": "medium"
            },
            {
              "name": "Ambrosia",
              "translated_name": "苹果",
              "category": "蔬菜水果",
              "amount": 8.99,
              "confidence": "high"
            }
          ],
          "category_summary": [
            {
              "category": "蔬菜水果",
              "estimated_amount": 8.99,
              "note": "这次有水果类采购"
            }
          ],
          "nutrition_signal": "从这张小票看，有水果，也有甜味食品。",
          "spending_signal": "本次总额不高，主要是水果和蜂蜜。",
          "family_report_note": "可进入本月家庭采购记录。",
          "voice_summary": "这张小票来自 Safeway，总共两件商品。",
          "needs_more_photo": null,
          "confidence": "high"
        }
        ```
        """

        receipt = parse_receipt_analysis(raw)

        self.assertEqual(receipt.store_name, "Safeway")
        self.assertEqual(receipt.currency, "CAD")
        self.assertEqual(receipt.total_amount, 16.48)
        self.assertEqual(receipt.tax_amount, 0.0)
        self.assertEqual(receipt.item_count, 2)
        self.assertEqual(len(receipt.items), 2)
        self.assertEqual(receipt.items[0].translated_name, "液体蜂蜜")
        self.assertEqual(receipt.items[1].category, "蔬菜水果")
        self.assertEqual(receipt.category_summary[0].estimated_amount, 8.99)
        self.assertIsNone(receipt.needs_more_photo)

    def test_fallback_receipt_analysis(self) -> None:
        receipt = fallback_receipt_analysis("blurred")

        self.assertEqual(receipt.confidence, "low")
        self.assertEqual(receipt.store_name, "未知商店")
        self.assertEqual(receipt.items, [])
        self.assertIsNotNone(receipt.needs_more_photo)


if __name__ == "__main__":
    unittest.main()
