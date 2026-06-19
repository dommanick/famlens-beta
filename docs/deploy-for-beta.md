# Deploy FamLens For Closed Beta

目标：拿到一个稳定 HTTPS 链接，发给 50-100 个真实家庭使用。

## 1. 发布前先改两个配置

`Famlens.env` 里的后台密码必须换成至少 12 位：

```bash
ADMIN_USERNAME=admin
ADMIN_PASSWORD=replace-with-a-strong-12-char-password
```

`.env` 里的旧 `PUBLIC_BASE_URL` 如果是临时 tunnel 地址，先不要继续使用。正式部署后再填部署平台给你的 HTTPS 地址。

## 2. 推到 GitHub

创建一个私有 GitHub 仓库，比如：

```text
famlens-beta
```

确认这些文件不会被提交：

```text
.env
Famlens.env
*.env.rtf
data/events.jsonl
data/profiles.json
data/cards/
data/uploads/
```

然后把代码推到 GitHub。

## 3. Render 部署步骤

1. 打开 Render。
2. New -> Web Service。
3. 连接 GitHub 仓库 `famlens-beta`。
4. Environment 选择 Docker。
5. Health Check Path 填：

```text
/health
```

6. 添加环境变量：

```bash
APP_NAME=FamLens
OPENAI_API_KEY=你的新OpenAI Key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=至少12位的后台密码
AI_MODEL=gpt-4.1-mini
TTS_MODEL=gpt-4o-mini-tts
TTS_VOICE=coral
REQUEST_TIMEOUT_SECONDS=30
PROFILE_STORE_PATH=data/profiles.json
EVENT_LOG_PATH=data/events.jsonl
CARD_OUTPUT_DIR=data/cards
UPLOAD_OUTPUT_DIR=data/uploads
```

7. 第一次部署完成后，Render 会给你一个地址，例如：

```text
https://famlens.onrender.com
```

8. 回到环境变量，补上：

```bash
PUBLIC_BASE_URL=https://famlens.onrender.com
```

9. Redeploy。

## 3.1. 建议打开自动部署

当前 Render 如果是 `Manual Deploy` 模式，GitHub 推送后不会自动上线。项目里已经加了 GitHub Actions 工作流模板：

```text
docs/render-deploy.workflow.yml
```

推荐在 GitHub 仓库里添加这个 Repository secret：

```text
RENDER_DEPLOY_HOOK_URL=Render 的 Deploy Hook URL
```

添加后，以后推送到 `main` 会自动触发 Render 部署。详细步骤见：

```text
docs/render-auto-deploy.md
```

## 4. 发布后检查

打开：

```text
https://famlens.onrender.com/health
https://famlens.onrender.com/
https://famlens.onrender.com/admin
```

必须确认：

- `/health` 显示 `{"status":"ok"}`
- 用户端能上传商品图
- 用户端能扫小票
- AI 对话能回答
- 语音能播放
- `/admin` 需要用户名和密码
- 后台能看到扫描事件

## 5. 发给内测用户

用户只需要这一个链接：

```text
https://famlens.onrender.com/
```

可以通过微信、WhatsApp、LINE、短信、邮件发给他们。建议同时发一段说明：

```text
这是 FamLens 内测版。请用手机打开链接。
你可以拍商品、扫小票、继续问 AI。
请真实使用 7 天：每次去超市拍 2-5 个商品，买完后扫一下小票。
```

## 6. 你自己看后台

后台地址：

```text
https://famlens.onrender.com/admin
```

你每天看：

- 商品扫描量
- 小票扫描量
- AI 追问量
- 失败率
- 语言分布
- 品类分布
- 用户是否保存/分享卡片

## 7. 当前不能做的事

第一版内测不是 App Store 正式 App，也不是微信小程序。它是 PWA/H5：

- 用户通过链接打开。
- 可以添加到手机主屏幕。
- 适合快速验证真实需求。
- 等验证留存和付费意愿后，再做原生 App。
