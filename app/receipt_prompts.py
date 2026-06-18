from app.languages import output_language_prompt_name


RECEIPT_SYSTEM_PROMPT = """
你是 FamLens 的小票分析助手，服务海外移民家庭。

用户拍的是超市、药房或日用品店小票。你的目标不是做普通 OCR，而是为后续家庭饮食结构和月度支出报告打基础。

必须输出 JSON，不要输出 Markdown，不要输出额外解释。

重要规则：
- 默认使用简体中文，短句，适合家庭成员看懂；如果用户选择了目标语言，所有面向用户阅读的文字字段必须使用目标语言。
- 不要把“购买记录”说成“实际摄入”。只能说“从购买记录看”。
- 商品名看不清时不要编造，用“看不清商品”。
- 金额看不清时用 null。
- 小票可能有银行卡、授权码等隐私信息，不要复述卡号、授权号、交易号。
- 如果小票只拍到一部分，要在 needs_more_photo 里要求补拍完整小票。
- 分类要服务家庭报告，优先用：蔬菜水果、肉蛋海鲜、奶制品、主食粮油、零食甜饮、调料酱料、保健药房、个护日用、清洁用品、婴儿用品、其他。
""".strip()


RECEIPT_USER_PROMPT = """
请分析这张小票，输出 JSON object，字段必须完整：

{
  "store_name": "商店名，看不清写未知商店",
  "purchase_date": "购买日期，看不清写未知日期",
  "currency": "CAD/USD/其他，看不清默认 CAD",
  "total_amount": 16.48,
  "tax_amount": 0.0,
  "item_count": 2,
  "items": [
    {
      "name": "小票原始商品名",
      "translated_name": "中文商品名",
      "category": "蔬菜水果/肉蛋海鲜/奶制品/主食粮油/零食甜饮/调料酱料/保健药房/个护日用/清洁用品/婴儿用品/其他",
      "amount": 7.49,
      "confidence": "high/medium/low"
    }
  ],
  "category_summary": [
    {
      "category": "蔬菜水果",
      "estimated_amount": 8.99,
      "note": "这次有水果类采购"
    }
  ],
  "nutrition_signal": "从这张小票看，对家庭饮食结构有什么提示，不能夸大",
  "spending_signal": "这次花费结构和金额提示",
  "family_report_note": "这张小票对月度家庭报告有什么价值",
  "voice_summary": "15-25秒语音摘要，适合读给家里人听",
  "needs_more_photo": "如果需要补拍，写完整小票/上半部分/下半部分/更清楚金额；否则 null",
  "confidence": "high/medium/low"
}

如果这不是小票，仍然输出这个结构，但 confidence 用 low，needs_more_photo 写“请拍完整购物小票”。
""".strip()


def build_receipt_user_prompt(
    family_profile: str | None = None,
    output_language: str | None = None,
) -> str:
    target_language = output_language_prompt_name(output_language)
    language_instruction = f"""
本次用户选择的输出语言是：{target_language}。
非常重要：JSON 里所有给用户看的自然语言内容都必须使用 {target_language}。
上面的中文规则和 JSON 示例只是字段说明，不代表输出语言。
除非目标语言是 Simplified Chinese，否则不要输出中文短句；商店名、商品名原文、数字和单位可以保留。
""".strip()

    final_language_guard = f"""
最终检查：请只输出 JSON。所有字段值必须面向 {target_language} 用户阅读。
需要跟随目标语言的字段包括 translated_name、category、note、nutrition_signal、spending_signal、family_report_note、voice_summary、needs_more_photo。
不要把中文示例分类（如“蔬菜水果/肉蛋海鲜/个护日用”）原样输出，除非目标语言是 Simplified Chinese。
""".strip()

    if not family_profile:
        return f"{language_instruction}\n\n{RECEIPT_USER_PROMPT}\n\n{final_language_guard}"

    return f"""
{language_instruction}

已知家庭提醒，只作为报告分析背景，不要做医疗诊断：
{family_profile}

{RECEIPT_USER_PROMPT}

{final_language_guard}
""".strip()
