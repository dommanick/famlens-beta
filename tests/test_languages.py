import unittest

from app.languages import normalize_output_language, output_language_prompt_name
from app.prompts import build_user_prompt
from app.receipt_prompts import build_receipt_user_prompt
from app.tts import _speech_instructions


class LanguageTests(unittest.TestCase):
    def test_normalize_supported_language(self) -> None:
        self.assertEqual(normalize_output_language("es"), "es")
        self.assertEqual(output_language_prompt_name("fr"), "French")
        self.assertEqual(normalize_output_language("hi"), "hi")
        self.assertEqual(output_language_prompt_name("hi"), "Hindi")

    def test_normalize_unknown_language_to_default(self) -> None:
        self.assertEqual(normalize_output_language("pirate"), "en")
        self.assertEqual(output_language_prompt_name(None), "English")

    def test_product_prompt_reinforces_target_language(self) -> None:
        prompt = build_user_prompt(output_language="en")

        self.assertIn("English", prompt)
        self.assertIn("不要把中文示例词", prompt)

    def test_receipt_prompt_reinforces_target_language(self) -> None:
        prompt = build_receipt_user_prompt(output_language="es")

        self.assertIn("Spanish", prompt)
        self.assertIn("不要把中文示例分类", prompt)

    def test_speech_instructions_use_selected_language(self) -> None:
        instructions = _speech_instructions("fr")

        self.assertIn("French", instructions)
        self.assertIn("warm", instructions)

    def test_speech_instructions_support_hindi(self) -> None:
        instructions = _speech_instructions("hi")

        self.assertIn("Hindi", instructions)


if __name__ == "__main__":
    unittest.main()
