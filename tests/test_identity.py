import tempfile
import unittest
from pathlib import Path

from fastapi.testclient import TestClient

import app.main as main
from app.identity import IdentityStore
from app.profiles import ProfileStore
from app.records import FamilyRecordStore


class IdentityStoreTests(unittest.TestCase):
    def test_bootstrap_device_returns_stable_household(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            store = IdentityStore(str(Path(directory) / "identities.json"))

            first = store.bootstrap_device("device-1", "en")
            second = store.bootstrap_device("device-1", "zh-Hans")

            self.assertTrue(first.household_id.startswith("hh-"))
            self.assertEqual(first.household_id, second.household_id)
            self.assertEqual(second.language, "zh-Hans")
            self.assertEqual(store.overview()["households"], 1)
            self.assertEqual(store.overview()["devices"], 1)

    def test_recovery_contact_is_saved_for_household(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            store = IdentityStore(str(Path(directory) / "identities.json"))
            identity = store.bootstrap_device("device-1", "en")

            saved = store.save_recovery_contact(identity.household_id, " parent@example.com ")

            self.assertIsNotNone(saved)
            self.assertEqual(saved.recovery_contact, "parent@example.com")
            self.assertEqual(store.overview()["recovery_contacts"], 1)


class IdentityApiTests(unittest.TestCase):
    def setUp(self) -> None:
        self.client = TestClient(main.app)
        self.directory = tempfile.TemporaryDirectory()
        self.old_identity_store = main.identity_store
        self.old_profile_store = main.profile_store
        self.old_record_store = main.family_record_store
        root = Path(self.directory.name)
        main.identity_store = IdentityStore(str(root / "identities.json"))
        main.profile_store = ProfileStore(str(root / "profiles.json"))
        main.family_record_store = FamilyRecordStore(str(root / "records.json"))

    def tearDown(self) -> None:
        main.identity_store = self.old_identity_store
        main.profile_store = self.old_profile_store
        main.family_record_store = self.old_record_store
        self.directory.cleanup()

    def test_bootstrap_migrates_device_profile_and_records_to_household(self) -> None:
        main.profile_store.save_family_setup("device-abc", "en", "father 68")
        main.family_record_store.save_product("device-abc", {"item_name": "Olive oil"}, "en")

        response = self.client.post(
            "/api/identity/bootstrap",
            json={"device_id": "device-abc", "output_language": "en"},
        )

        self.assertEqual(response.status_code, 200)
        household_id = response.json()["household_id"]
        self.assertTrue(response.json()["migrated_profile"])
        self.assertTrue(response.json()["migrated_records"])
        self.assertIsNone(main.profile_store.get("device-abc"))
        self.assertEqual(main.profile_store.get(household_id).members_text, "father 68")
        self.assertEqual(main.family_record_store.get_user_records(household_id)["products"][0]["item_name"], "Olive oil")


if __name__ == "__main__":
    unittest.main()
