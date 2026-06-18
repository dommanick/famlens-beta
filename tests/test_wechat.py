import hashlib
import unittest

from app.wechat import is_valid_signature, parse_message, text_reply


class WeChatTests(unittest.TestCase):
    def test_signature_validation(self):
        token = "token"
        timestamp = "123"
        nonce = "abc"
        signature = hashlib.sha1("".join(sorted([token, timestamp, nonce])).encode()).hexdigest()

        self.assertTrue(is_valid_signature(token, signature, timestamp, nonce))
        self.assertFalse(is_valid_signature(token, "bad", timestamp, nonce))

    def test_parse_image_message(self):
        xml = b"""
        <xml>
          <ToUserName><![CDATA[gh_test]]></ToUserName>
          <FromUserName><![CDATA[user_openid]]></FromUserName>
          <CreateTime>1710000000</CreateTime>
          <MsgType><![CDATA[image]]></MsgType>
          <PicUrl><![CDATA[https://example.com/image.jpg]]></PicUrl>
          <MediaId><![CDATA[media123]]></MediaId>
        </xml>
        """

        message = parse_message(xml)

        self.assertEqual(message.to_user, "gh_test")
        self.assertEqual(message.from_user, "user_openid")
        self.assertEqual(message.msg_type, "image")
        self.assertEqual(message.pic_url, "https://example.com/image.jpg")
        self.assertEqual(message.media_id, "media123")

    def test_parse_subscribe_event(self):
        xml = b"""
        <xml>
          <ToUserName><![CDATA[gh_test]]></ToUserName>
          <FromUserName><![CDATA[user_openid]]></FromUserName>
          <CreateTime>1710000000</CreateTime>
          <MsgType><![CDATA[event]]></MsgType>
          <Event><![CDATA[subscribe]]></Event>
        </xml>
        """

        message = parse_message(xml)

        self.assertEqual(message.msg_type, "event")
        self.assertEqual(message.event, "subscribe")

    def test_text_reply_uses_wechat_xml_shape(self):
        reply = text_reply("user", "bot", "你好")

        self.assertIn("<ToUserName><![CDATA[user]]></ToUserName>", reply)
        self.assertIn("<FromUserName><![CDATA[bot]]></FromUserName>", reply)
        self.assertIn("<MsgType><![CDATA[text]]></MsgType>", reply)
        self.assertIn("<Content><![CDATA[你好]]></Content>", reply)


if __name__ == "__main__":
    unittest.main()
