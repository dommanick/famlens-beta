import unittest

from fastapi.testclient import TestClient

import app.main as main


class AdminAuthTests(unittest.TestCase):
    def setUp(self) -> None:
        self.client = TestClient(main.app)
        self.old_username = main.settings.admin_username
        self.old_password = main.settings.admin_password
        object.__setattr__(main.settings, "admin_username", "admin")
        object.__setattr__(main.settings, "admin_password", "secret-test-password")

    def tearDown(self) -> None:
        object.__setattr__(main.settings, "admin_username", self.old_username)
        object.__setattr__(main.settings, "admin_password", self.old_password)

    def test_admin_requires_login_when_password_is_configured(self) -> None:
        response = self.client.get("/admin")

        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.headers["www-authenticate"], "Basic")

    def test_admin_accepts_valid_login(self) -> None:
        response = self.client.get("/api/admin/overview", auth=("admin", "secret-test-password"))

        self.assertEqual(response.status_code, 200)
        self.assertIn("summary", response.json())

    def test_admin_accepts_unicode_password(self) -> None:
        object.__setattr__(main.settings, "admin_password", "安全-secret-123")

        response = self.client.get("/api/admin/overview", auth=("admin", "安全-secret-123"))

        self.assertEqual(response.status_code, 200)
        self.assertIn("summary", response.json())

    def test_admin_rejects_wrong_login(self) -> None:
        response = self.client.get("/api/admin/overview", auth=("admin", "wrong"))

        self.assertEqual(response.status_code, 401)


if __name__ == "__main__":
    unittest.main()
