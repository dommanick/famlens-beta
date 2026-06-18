# App-first Roadmap

FamLens 的长期形态是独立 App，不是聊天机器人，也不是中文小程序工具。

## Why App-first

- 产品能力已经超过聊天：拍照、语音、判断卡、小票、历史记录、家庭报告、订阅都需要稳定界面。
- 国际化品牌更适合独立 App：中文只是语言版本，不是产品身份。
- 移民家庭跨国家分布，不能被微信、LINE、WhatsApp 或 Telegram 单个平台锁住。
- 家庭会员、月度报告和异常提醒需要持续账户关系，App 比聊天入口更自然。

## Why Not Native App Immediately

第一阶段仍然用 H5 / PWA，因为它能更快验证：

- 老人或家庭采购者是否愿意拍照。
- 单次判断卡是否足够好懂。
- 小票和月度报告是否有付费价值。
- 子女是否愿意为家庭洞察付费。

如果直接做原生 App，容易过早消耗在商店审核、下载转化、权限弹窗和多端维护上。

## Phases

### Phase 1: PWA Prototype

- 品牌：FamLens。
- 核心动作：拍商品 / 小票。
- 核心输出：大字判断卡、语音摘要、问店员英文。
- 商业验证：家庭报告 mock、付费意愿访谈、使用频次。

### Phase 2: Lightweight Mobile App

- 建议技术：React Native / Expo 或 Flutter。
- 保留同一套后端 API。
- 增加原生相机、相册、推送、登录、家庭账号、历史记录。
- 支持中文界面，同时保持英文品牌和国际化视觉。

### Phase 3: Family Intelligence

- 小票长期记录。
- 家庭饮食结构报告。
- 家庭超市支出报告。
- 月度变化和异常提醒。
- 子女协同和家庭会员。

### Phase 4: Channel Expansion

- 微信：华人入口、分享、客服。
- LINE：日本、台湾、泰国等入口。
- Zalo：越南入口。
- WhatsApp：分享、邀请、提醒。
- Telegram：特定地区入口和轻应用。

通讯工具只负责分发和召回，核心体验仍在 FamLens App / Web App 内。

## Product Boundary

FamLens 不应该被做成“更强的翻译器”。它应该是：

> An AI grocery and household nutrition assistant for immigrant families.

产品目标是帮助家庭主要采购者看懂商品、安排家庭饮食、记录家庭消费，并让家人一起理解长期采购结构。
