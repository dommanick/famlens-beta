import unittest

from app.main import clean_user_id
from fastapi.testclient import TestClient
import app.main as main


class MainHelperTests(unittest.TestCase):
    def test_clean_user_id_keeps_safe_characters(self) -> None:
        self.assertEqual(clean_user_id(" beta.user-1_2 "), "beta.user-1_2")

    def test_clean_user_id_falls_back_when_empty(self) -> None:
        self.assertEqual(clean_user_id("!!!"), "web-user")


class InvitePageTests(unittest.TestCase):
    def setUp(self) -> None:
        self.client = TestClient(main.app)

    def test_invite_page_loads(self) -> None:
        response = self.client.get("/invite")

        self.assertEqual(response.status_code, 200)
        self.assertIn("FamLens", response.text)

    def test_invite_qr_loads_as_svg(self) -> None:
        response = self.client.get("/api/invite/qr.svg")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.headers["content-type"], "image/svg+xml")
        self.assertIn("<svg", response.text)


if __name__ == "__main__":
    unittest.main()
