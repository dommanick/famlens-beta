import unittest

from app.transcription import LANGUAGE_CODES, _audio_filename


class TranscriptionHelperTests(unittest.TestCase):
    def test_audio_filename_matches_common_mobile_formats(self) -> None:
        self.assertEqual(_audio_filename("audio/webm;codecs=opus"), "question.webm")
        self.assertEqual(_audio_filename("audio/mp4"), "question.m4a")
        self.assertEqual(_audio_filename("audio/aac"), "question.m4a")
        self.assertEqual(_audio_filename("audio/wav"), "question.wav")

    def test_language_codes_include_beta_languages(self) -> None:
        self.assertEqual(LANGUAGE_CODES["zh-Hans"], "zh")
        self.assertEqual(LANGUAGE_CODES["hi"], "hi")
        self.assertEqual(LANGUAGE_CODES["vi"], "vi")


if __name__ == "__main__":
    unittest.main()
