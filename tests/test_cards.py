import tempfile
import unittest

from app.cards import _theme, render_judgement_card_svg, save_judgement_card
from app.product import ProductJudgement


class CardTests(unittest.TestCase):
    def test_render_card_svg_contains_core_fields(self):
        judgement = _judgement()

        svg = render_judgement_card_svg(judgement)

        self.assertIn("<svg", svg)
        self.assertIn("韩国黄豆芽", svg)
        self.assertIn("洗干净，焯水后凉拌", svg)
        self.assertIn("有一点蛋白和纤维", svg)

    def test_render_card_svg_uses_language_labels(self):
        judgement = _judgement()

        svg = render_judgement_card_svg(judgement, "en")

        self.assertIn("What it is", svg)
        self.assertIn("How to use", svg)

    def test_render_card_svg_uses_hindi_labels(self):
        judgement = _judgement()

        svg = render_judgement_card_svg(judgement, "hi")

        self.assertIn("यह क्या है", svg)
        self.assertIn("कैसे इस्तेमाल करें", svg)

    def test_render_card_svg_embeds_product_image(self):
        judgement = _judgement()

        svg = render_judgement_card_svg(judgement, product_image_data_url="data:image/jpeg;base64,abc")

        self.assertIn("<image", svg)
        self.assertIn("data:image/jpeg;base64,abc", svg)
        self.assertIn("productPhotoClip", svg)

    def test_save_card(self):
        with tempfile.TemporaryDirectory() as directory:
            path = save_judgement_card(_judgement(), directory)

            self.assertTrue(path.exists())
            self.assertEqual(path.suffix, ".svg")

    def test_theme_understands_english_negative_verdict(self):
        theme = _theme("Not recommended")

        self.assertEqual(theme["badge"], "#dc2626")


def _judgement() -> ProductJudgement:
    return ProductJudgement(
        verdict="可以买",
        item_name="韩国黄豆芽",
        category="生鲜",
        subtitle="适合凉拌和煮汤",
        what_it_is="这是黄豆芽，不是绿豆芽",
        how_to_use="洗干净，焯水后凉拌",
        benefit="有一点蛋白和纤维",
        warning="最好煮熟再吃",
        storage="放冰箱，2-3天吃完",
        voice_summary="这个是韩国黄豆芽，可以买。洗干净焯水后凉拌，也可以煮汤。",
        confidence="high",
    )


if __name__ == "__main__":
    unittest.main()
