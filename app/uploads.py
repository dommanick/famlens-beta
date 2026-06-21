from __future__ import annotations

import base64
import re
import uuid
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageOps, UnidentifiedImageError
from pillow_heif import register_heif_opener


register_heif_opener()

MAX_UPLOAD_BYTES = 8 * 1024 * 1024
ALLOWED_IMAGE_TYPES = {"image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"}
NORMALIZED_IMAGE_TYPE = "image/jpeg"
CARD_THUMBNAIL_SIZE = (640, 640)
NORMALIZED_IMAGE_MAX_EDGE = 2048


def validate_image_upload(content_type: str | None, size: int) -> None:
    if content_type not in ALLOWED_IMAGE_TYPES:
        raise ValueError("只支持 JPG、PNG、WebP 或 HEIC 图片。")
    validate_upload_size(size)


def validate_upload_size(size: int) -> None:
    if size > MAX_UPLOAD_BYTES:
        raise ValueError("图片太大了，请换一张 8MB 以内的照片。")


def save_uploaded_image(data: bytes, content_type: str, output_dir: str) -> Path:
    validate_image_upload(content_type, len(data))
    directory = Path(output_dir)
    directory.mkdir(parents=True, exist_ok=True)
    suffix = _suffix_for_content_type(content_type)
    path = directory / f"upload-{uuid.uuid4().hex[:12]}{suffix}"
    path.write_bytes(data)
    return path


def image_data_url(data: bytes, content_type: str) -> str:
    validate_image_upload(content_type, len(data))
    encoded = base64.b64encode(data).decode("ascii")
    return f"data:{content_type};base64,{encoded}"


def card_thumbnail_data_url(data: bytes, content_type: str) -> str:
    validate_image_upload(content_type, len(data))
    try:
        with Image.open(BytesIO(data)) as image:
            thumbnail = ImageOps.exif_transpose(image).convert("RGB")
            thumbnail.thumbnail(CARD_THUMBNAIL_SIZE)
            output = BytesIO()
            thumbnail.save(output, format="JPEG", quality=78, optimize=True)
            thumbnail_data = output.getvalue()
    except (UnidentifiedImageError, OSError) as error:
        raise ValueError("这张图片无法生成图文卡缩略图，请换一张照片。") from error
    return image_data_url(thumbnail_data, NORMALIZED_IMAGE_TYPE)


def normalize_image_upload(data: bytes, content_type: str | None) -> tuple[bytes, str]:
    validate_upload_size(len(data))
    try:
        with Image.open(BytesIO(data)) as image:
            normalized = ImageOps.exif_transpose(image)
            if normalized.mode not in {"RGB", "L"}:
                normalized = normalized.convert("RGB")
            elif normalized.mode == "L":
                normalized = normalized.convert("RGB")

            if max(normalized.size) > NORMALIZED_IMAGE_MAX_EDGE:
                normalized.thumbnail((NORMALIZED_IMAGE_MAX_EDGE, NORMALIZED_IMAGE_MAX_EDGE))

            output = BytesIO()
            normalized.save(output, format="JPEG", quality=84, optimize=True)
            normalized_data = output.getvalue()
    except (UnidentifiedImageError, OSError) as error:
        raise ValueError("这张图片格式不标准，请换一张照片或截图后再上传。") from error

    validate_image_upload(NORMALIZED_IMAGE_TYPE, len(normalized_data))
    return normalized_data, NORMALIZED_IMAGE_TYPE


def _suffix_for_content_type(content_type: str) -> str:
    clean = re.sub(r"[^a-z0-9/+.-]", "", content_type.lower())
    return {
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/webp": ".webp",
        "image/heic": ".heic",
        "image/heif": ".heif",
    }.get(clean, ".img")
