# Render Auto Deploy

这个项目已经预留了自动部署入口。目标是以后推送到 GitHub `main` 后，不需要再手动进入 Render 点 `Manual Deploy`。

## 推荐方式：GitHub Webhook -> Render Deploy Hook

1. 打开 Render 服务 `famlens-beta`。
2. 进入 Settings，找到 Deploy Hook。
3. 复制 Hook URL。
4. 在本地临时设置这个 Hook URL：

```bash
export RENDER_DEPLOY_HOOK_URL="Render 给你的 Deploy Hook URL"
```

5. 运行配置脚本：

```bash
python scripts/configure_github_render_webhook.py
```

这个脚本会用 `github.env` 里的 `GITHUB_TOKEN`，在 GitHub 仓库 `famlens-beta` 里创建一个 push webhook。以后只要推送到 GitHub，GitHub 会直接请求 Render Deploy Hook，不需要再进入 Render 后台点手动部署。

这个方式不依赖 GitHub Actions，所以不需要 GitHub token 拥有 `workflow` 权限。

## 可选方式：GitHub Actions

如果后续 GitHub token 增加了 `workflow` 权限，也可以使用 Actions 工作流。模板保留在：

```text
docs/render-deploy.workflow.yml
```

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
