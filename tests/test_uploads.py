import tempfile
import unittest
from io import BytesIO

from PIL import Image

from app.uploads import (
    NORMALIZED_IMAGE_MAX_EDGE,
    image_data_url,
    normalize_image_upload,
    save_uploaded_image,
    validate_image_upload,
)


class UploadTests(unittest.TestCase):
    def test_image_data_url(self):
        url = image_data_url(b"abc", "image/png")

        self.assertEqual(url, "data:image/png;base64,YWJj")

    def test_reject_non_image(self):
        with self.assertRaises(ValueError):
            validate_image_upload("text/plain", 10)

    def test_save_uploaded_image(self):
        with tempfile.TemporaryDirectory() as directory:
            path = save_uploaded_image(b"abc", "image/jpeg", directory)

            self.assertTrue(path.exists())
            self.assertEqual(path.suffix, ".jpg")

    def test_normalize_image_upload_uses_actual_image_bytes(self):
        source = BytesIO()
        Image.new("RGB", (16, 16), "#0f4f37").save(source, format="PNG")

        data, content_type = normalize_image_upload(source.getvalue(), "image/jpeg")

        self.assertEqual(content_type, "image/jpeg")
        self.assertTrue(data.startswith(b"\xff\xd8"))

    def test_normalize_image_upload_accepts_mislabeled_image_type(self):
        source = BytesIO()
        Image.new("RGB", (16, 16), "#245c8d").save(source, format="PNG")

        data, content_type = normalize_image_upload(source.getvalue(), "application/octet-stream")

        self.assertEqual(content_type, "image/jpeg")
        self.assertTrue(data.startswith(b"\xff\xd8"))

    def test_normalize_image_upload_resizes_large_images(self):
        source = BytesIO()
        Image.new("RGB", (3200, 2400), "#f5f1e8").save(source, format="JPEG")

        data, content_type = normalize_image_upload(source.getvalue(), "image/jpeg")

        self.assertEqual(content_type, "image/jpeg")
        with Image.open(BytesIO(data)) as image:
            self.assertLessEqual(max(image.size), NORMALIZED_IMAGE_MAX_EDGE)


if __name__ == "__main__":
    unittest.main()
