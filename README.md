# FamLens

AI shopping assistant for immigrant families. The first closed-beta version is an App-first H5 / PWA product: users take a photo of a product, receipt, price tag, or instruction label, then see a large visual judgement card, voice summary, practical instructions, and follow-up AI chat in the same page.

WeChat, LINE, WhatsApp, Telegram, and similar tools are treated as sharing or acquisition channels. They are not the core product experience.

## Current Product Shape

- Client app: `http://127.0.0.1:8000/`
- Operations backend: `http://127.0.0.1:8000/admin`
- Product photo analysis: what it is, whether to buy, how to use, benefits, warnings, storage, and a visual card.
- Receipt analysis: store, date, total, item list, category summary, family nutrition structure, and spending signals.
- Family record: product and receipt results are saved locally in the browser for the household view.
- AI follow-up chat: users can ask extra questions after the structured card.
- Voice output: OpenAI TTS when configured, with browser speech fallback.
- Languages: Simplified Chinese, English, Spanish, French, Korean, Japanese, Vietnamese, and Hindi.

## Why App First

The WeChat official account flow was useful for learning platform limits, but it is not good enough for the target experience:

- It forces a chat workflow when the user needs a tool workflow.
- Image/card links can be blocked or require extra permissions.
- Elderly users should not need to type prompts or open multiple links.
- Receipts, family records, reports, payments, and subscriptions need a persistent app surface.

The current PWA keeps the future native app structure: camera, voice, history, family reports, AI chat, and operations data.

## Local Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

Edit `.env`:

```bash
APP_NAME=FamLens
OPENAI_API_KEY=your_openai_api_key
AI_MODEL=gpt-4.1-mini
TTS_MODEL=gpt-4o-mini-tts
TTS_VOICE=coral
ADMIN_USERNAME=admin
ADMIN_PASSWORD=choose_a_strong_password_before_public_testing
REQUEST_TIMEOUT_SECONDS=30
PROFILE_STORE_PATH=data/profiles.json
EVENT_LOG_PATH=data/events.jsonl
CARD_OUTPUT_DIR=data/cards
UPLOAD_OUTPUT_DIR=data/uploads
PUBLIC_BASE_URL=https://your-public-domain
```

Run locally:

```bash
uvicorn app.main:app --reload --port 8000
```

Open:

```text
http://127.0.0.1:8000/
```

Local `/admin` is accessible without a password for convenience. Once exposed to the public internet, set `ADMIN_PASSWORD`; otherwise the admin backend is disabled.

## Mobile Testing

For same-Wi-Fi phone testing:

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Find the Mac LAN IP, then open this on the phone:

```text
http://YOUR_MAC_IP:8000/
```

For realistic PWA testing, use HTTPS through a tunnel or deployment. iOS and Android install-to-home-screen behavior is more reliable on HTTPS.

## Deployment

The repo includes:

- `Dockerfile` for container deployment.
- `render.yaml` as a Render-style deployment example.
- `scripts/preflight.py` for a before-beta readiness check.
- `docs/beta-launch-plan.md` for the 50-100 household closed beta workflow.
- `docs/deploy-for-beta.md` for step-by-step external deployment.

Minimum production environment variables:

```bash
OPENAI_API_KEY=...
ADMIN_PASSWORD=...
PUBLIC_BASE_URL=https://your-public-domain
```

Before sending the link to testers:

1. Rotate any API key that has ever been pasted into chat or shared outside the server.
2. Set `ADMIN_PASSWORD`.
3. Confirm `/health` returns `{"status":"ok"}`.
4. Open `/` on a real phone and upload one product image and one receipt image.
5. Open `/admin` and confirm the events are visible after login.

Run the beta readiness check:

```bash
PYTHONPATH=. python scripts/preflight.py
```

For the exact rollout steps, see:

- [docs/deploy-for-beta.md](docs/deploy-for-beta.md)
- [docs/beta-launch-plan.md](docs/beta-launch-plan.md)

For product/UI iteration workflow, see:

- [docs/product-workflow.md](docs/product-workflow.md)

## Operations Backend

The admin page currently tracks:

- Product scans
- Receipt scans
- AI follow-up chats
- Share/save actions
- Failure rate
- Language distribution
- Product category distribution
- Receipt spending total
- Recent events

Planned production modules:

- User management
- Data analysis
- Finance and subscription management
- Product/content management
- Marketing and referral tracking
- Large-scale household nutrition and spending analytics

## Internal Test Plan

Use a 14-day closed beta with 20-50 families.

Daily user tasks:

1. Scan 2-5 real supermarket products.
2. Scan every grocery receipt.
3. Ask at least one follow-up question through AI chat.
4. Save or share one useful card with a family member.

Weekly review:

- Which categories are scanned most often?
- Which images fail and why?
- Do users understand the card without further explanation?
- Do they use voice output?
- Do family members care about the receipt and monthly spending view?
- What premium feature would they actually pay for?

Core validation metric:

```text
Does one household use FamLens repeatedly without being reminded?
```

## Development Validation

```bash
PYTHONPATH=. python -m unittest discover -s tests
```

Health check:

```bash
curl http://localhost:8000/health
```

Receipt upload test:

```bash
curl -X POST http://localhost:8000/api/analyze-receipt-upload \
  -F "image=@/path/to/receipt.jpg" \
  -F "output_language=en" \
  -F "family_profile=Four-person household; grandparents buy groceries for the whole family; prefer low sugar and low sodium."
```
