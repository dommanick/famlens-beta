# Render Auto Deploy

这个项目已经预留了自动部署入口。目标是以后推送到 GitHub `main` 后，不需要再手动进入 Render 点 `Manual Deploy`。

## 推荐方式：Deploy Hook

1. 打开 Render 服务 `famlens-beta`。
2. 进入 Settings，找到 Deploy Hook。
3. 复制 Hook URL。
4. 打开 GitHub 仓库 `famlens-beta`。
5. 进入 Settings -> Secrets and variables -> Actions。
6. 新增 Repository secret：

```text
RENDER_DEPLOY_HOOK_URL=Render 给你的 Deploy Hook URL
```

以后推送到 `main` 时，GitHub Actions 会自动调用这个 Hook。

当前仓库已经启用 GitHub Actions 工作流：

```text
.github/workflows/render-deploy.yml
```

它来自项目里保留的模板：

```text
docs/render-deploy.workflow.yml
```

如果 GitHub 里没有配置 Render secret，工作流会明确失败并提示需要配置部署凭证，避免误以为已经上线。

## 备用方式：Render API

如果不用 Deploy Hook，也可以新增两个 GitHub Repository secrets：

```text
RENDER_API_KEY=Render API Key
RENDER_SERVICE_ID=srv-d8pqff6gvqtc739el39g
```

脚本会调用 Render API：

```text
POST https://api.render.com/v1/services/{serviceId}/deploys
```

## 本地手动触发

如果你把 Deploy Hook 放到本地环境变量里，也可以在本地触发：

```bash
RENDER_DEPLOY_HOOK_URL="https://api.render.com/deploy/..." python scripts/render_deploy.py
```

如果用 API Key：

```bash
RENDER_API_KEY="..." RENDER_SERVICE_ID="srv-d8pqff6gvqtc739el39g" python scripts/render_deploy.py
```

## 线上验证

部署完成后检查：

```text
https://app.daiguangdiqiu.com/health
https://app.daiguangdiqiu.com/static/sw.js
https://app.daiguangdiqiu.com/api/records/deploy-check
```

`sw.js` 应该显示最新缓存版本，`/api/records/deploy-check` 不应再返回 404。
