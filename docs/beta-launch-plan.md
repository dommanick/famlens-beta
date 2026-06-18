# FamLens Closed Beta Launch Plan

目标不是继续做本地功能测试，而是让 50-100 个真实家庭小范围使用第一版产品。

## 你给用户什么

给用户一个 HTTPS 链接：

```text
https://your-famlens-domain/
```

用户打开后直接看到 FamLens，不需要安装微信插件，不需要关注公众号，不需要回复关键词。手机上可以用浏览器打开，也可以添加到主屏幕当作轻量 App。

## 推荐发布方式

### 方式 A：Render / Railway / Fly / VPS 正式部署

适合 50-100 人真实内测。

你需要准备：

- 一个 GitHub 仓库
- 一个部署平台账号，Render / Railway / Fly / VPS 都可以
- 新的 OpenAI API Key
- 后台密码 `ADMIN_PASSWORD`

部署后设置环境变量：

```bash
OPENAI_API_KEY=...
ADMIN_USERNAME=admin
ADMIN_PASSWORD=至少12位的强密码
PUBLIC_BASE_URL=https://your-famlens-domain
AI_MODEL=gpt-4.1-mini
TTS_MODEL=gpt-4o-mini-tts
TTS_VOICE=coral
```

部署完成后打开：

```text
https://your-famlens-domain/
https://your-famlens-domain/admin
```

### 方式 B：临时隧道

只适合 1-5 人临时看一眼，不适合 50-100 人连续使用。

问题：

- 你的电脑必须一直开着
- 链接可能变
- 上传和 AI 分析速度不稳定
- 不能代表真实产品体验

## 给内测用户的使用说明

可以直接复制给用户：

```text
这是 FamLens 的第一版内测链接：
https://your-famlens-domain/

请用手机打开。你可以做三件事：
1. 拍商品：看这是什么、怎么用、有什么要注意。
2. 扫小票：记录家里买了什么、花了多少钱。
3. 继续问 AI：如果卡片没讲清楚，可以继续问。

希望你真实使用 7 天，每次去超市时拍 2-5 个商品，买完后扫一下小票。
```

## 你每天看什么

后台：

```text
https://your-famlens-domain/admin
```

重点看：

- 有多少商品扫描
- 有多少小票扫描
- 图片失败率
- 用户使用哪些语言
- 哪些品类最常被拍
- 是否有人使用 AI 追问
- 是否有人保存卡片或发给家人

## 第一批用户怎么选

建议 50-100 人分三组：

- 20-30 个华人家庭：验证我们最初的核心人群。
- 10-20 个印度 / 越南 / 韩国 / 日本移民家庭：验证国际化语言和场景。
- 10-20 个子女用户：看他们是否关心家庭小票、饮食结构和支出报告。

## 内测成功标准

不是“用户说好”，而是看行为：

- 同一个家庭 7 天内使用 3 次以上。
- 至少 30% 的家庭扫过小票。
- 至少 20% 的结果后面发生 AI 追问。
- 图片失败率低于 20%。
- 用户愿意把链接发给家人。

## 内测前必须确认

运行：

```bash
PYTHONPATH=. python scripts/preflight.py
```

全部 OK 后再发外部链接。
