import unittest

from app.product import format_wechat_reply, parse_product_judgement


class ProductTests(unittest.TestCase):
    def test_parse_product_judgement_json(self):
        judgement = parse_product_judgement(
            """
            {
              "verdict": "可以买",
              "item_name": "韩国黄豆芽",
              "category": "生鲜",
              "subtitle": "适合凉拌和煮汤",
              "what_it_is": "这是黄豆芽，不是绿豆芽",
              "how_to_use": "洗干净，焯水后凉拌",
              "benefit": "有一点蛋白和纤维",
              "warning": "最好煮熟再吃",
              "storage": "放冰箱，2-3天吃完",
              "voice_summary": "这个是韩国黄豆芽，可以买。洗干净焯水后凉拌，也可以煮汤。",
              "needs_more_photo": null,
              "confidence": "high"
            }
            """
        )

        self.assertEqual(judgement.verdict, "可以买")
        self.assertEqual(judgement.item_name, "韩国黄豆芽")
        self.assertIsNone(judgement.needs_more_photo)

    def test_format_wechat_reply(self):
        judgement = parse_product_judgement(
            '{"verdict":"可以买","item_name":"韩国黄豆芽","category":"生鲜","subtitle":"适合凉拌","what_it_is":"这是黄豆芽","how_to_use":"焯水凉拌","benefit":"有一点蛋白","warning":"煮熟吃","storage":"放冰箱","voice_summary":"可以买","needs_more_photo":null,"confidence":"high"}'
        )

        reply = format_wechat_reply(judgement)

        self.assertIn("可以买：韩国黄豆芽", reply)
        self.assertIn("怎么用：焯水凉拌", reply)


if __name__ == "__main__":
    unittest.main()

