const kpiGrid = document.querySelector("#kpiGrid");
const moduleGrid = document.querySelector("#moduleGrid");
const languageChart = document.querySelector("#languageChart");
const categoryChart = document.querySelector("#categoryChart");
const eventList = document.querySelector("#eventList");
const generatedAt = document.querySelector("#generatedAt");
const refreshButton = document.querySelector("#refreshButton");

const moduleOrder = [
  "user_management",
  "data_analysis",
  "finance",
  "product_management",
  "marketing",
  "big_data",
];

refreshButton.addEventListener("click", loadAdminOverview);

async function loadAdminOverview() {
  refreshButton.disabled = true;
  refreshButton.textContent = "刷新中";
  try {
    const response = await fetch("/api/admin/overview");
    if (!response.ok) throw new Error("admin overview failed");
    const data = await response.json();
    renderOverview(data);
  } catch (error) {
    kpiGrid.innerHTML = `<div class="empty">后台数据暂时读取失败，请稍后重试。</div>`;
  } finally {
    refreshButton.disabled = false;
    refreshButton.textContent = "刷新数据";
  }
}

function renderOverview(data) {
  const summary = data.summary || {};
  generatedAt.textContent = formatDateTime(data.generated_at);
  renderKpis(summary);
  renderModules(data.modules || {});
  renderBarChart(languageChart, data.charts?.language_distribution || [], "暂无语言数据");
  renderBarChart(categoryChart, data.charts?.category_distribution || [], "暂无品类数据");
  renderEvents(data.recent_events || []);
}

function renderKpis(summary) {
  const kpis = [
    ["今日事件", summary.today_events || 0, "观察使用活跃度"],
    ["商品扫描", summary.product_scans || 0, "核心拍商品链路"],
    ["小票扫描", summary.receipt_scans || 0, "家庭记录数据入口"],
    ["AI 追问", summary.ai_chats || 0, "开放问题需求"],
    ["活跃用户", summary.active_users || 0, "当前按 user_id 粗略统计"],
    ["失败率", formatPercent(summary.failure_rate || 0), "识别和 AI 失败事件"],
  ];
  kpiGrid.innerHTML = kpis
    .map(([label, value, note]) => {
      return `<article class="kpi-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(note)}</small></article>`;
    })
    .join("");
}

function renderModules(modules) {
  moduleGrid.innerHTML = moduleOrder
    .map((key) => renderModuleCard(key, modules[key] || {}))
    .join("");
}

function renderModuleCard(key, module) {
  const metrics = moduleMetrics(key, module);
  const next = module.next_capabilities || module.future_ai_caregiver || [];
  return `
    <article class="module-card">
      <div class="module-head">
        <h2>${escapeHtml(module.title || key)}</h2>
        <span class="status-pill">${escapeHtml(module.status || "planned")}</span>
      </div>
      <div class="metric-list">
        ${metrics
          .map((item) => `<div class="metric-row"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></div>`)
          .join("")}
      </div>
      <div class="next-list">
        ${next.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </article>
  `;
}

function moduleMetrics(key, module) {
  if (key === "user_management") {
    return [
      { label: "用户数", value: module.total_users || 0 },
      { label: "家庭档案事件", value: module.family_profiles || 0 },
      { label: "反馈数", value: module.feedback_count || 0 },
    ];
  }
  if (key === "data_analysis") {
    return [
      { label: "商品扫描", value: module.product_scans || 0 },
      { label: "小票扫描", value: module.receipt_scans || 0 },
      { label: "AI 追问", value: module.ai_chats || 0 },
    ];
  }
  if (key === "finance") {
    return [
      { label: "已记录小票金额", value: formatMoney(module.tracked_receipt_amount || 0) },
      { label: "平均小票金额", value: formatMoney(module.average_receipt_amount || 0) },
      { label: "估算 AI 成本", value: formatMoney(module.estimated_ai_cost || 0) },
    ];
  }
  if (key === "product_management") {
    return [
      { label: "成功商品分析", value: module.analysis_quality?.success_count || 0 },
      { label: "失败事件", value: module.analysis_quality?.failure_count || 0 },
      { label: "失败率", value: formatPercent(module.analysis_quality?.failure_rate || 0) },
    ];
  }
  if (key === "marketing") {
    return [
      { label: "分享给家人", value: module.share_actions || 0 },
      { label: "保存图文卡", value: module.save_card_actions || 0 },
      { label: "渠道数", value: module.channels?.length || 0 },
    ];
  }
  if (key === "big_data") {
    return (module.signals || []).map((item) => ({ label: item.label, value: item.value }));
  }
  return [{ label: "状态", value: module.status || "planned" }];
}

function renderBarChart(target, items, emptyText) {
  if (!items.length) {
    target.innerHTML = `<div class="empty">${escapeHtml(emptyText)}</div>`;
    return;
  }
  const max = Math.max(...items.map((item) => Number(item.value) || 0), 1);
  target.innerHTML = items
    .map((item) => {
      const value = Number(item.value) || 0;
      const width = Math.max(4, Math.round((value / max) * 100));
      return `
        <div class="bar-row">
          <div class="bar-label"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(value)}</strong></div>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
        </div>
      `;
    })
    .join("");
}

function renderEvents(events) {
  if (!events.length) {
    eventList.innerHTML = `<div class="empty">暂无事件。用户端产生扫描、问答、分享后会显示在这里。</div>`;
    return;
  }
  eventList.innerHTML = events
    .map((event) => {
      const payload = event.payload || {};
      const detail = Object.entries(payload)
        .slice(0, 3)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" · ");
      return `
        <article class="event-card">
          <strong>${escapeHtml(event.event_type || "")}</strong>
          <span>${escapeHtml(event.user_id || "unknown")} · ${escapeHtml(formatDateTime(event.created_at))}</span>
          <span>${escapeHtml(detail || "no payload")}</span>
        </article>
      `;
    })
    .join("");
}

function formatMoney(value) {
  const number = Number(value);
  return `$${Number.isFinite(number) ? number.toFixed(2) : "0.00"}`;
}

function formatPercent(value) {
  const number = Number(value);
  return `${Math.round((Number.isFinite(number) ? number : 0) * 1000) / 10}%`;
}

function formatDateTime(value) {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

loadAdminOverview();
