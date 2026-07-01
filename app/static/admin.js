const kpiGrid = document.querySelector("#kpiGrid");
const moduleGrid = document.querySelector("#moduleGrid");
const languageChart = document.querySelector("#languageChart");
const categoryChart = document.querySelector("#categoryChart");
const channelChart = document.querySelector("#channelChart");
const eventList = document.querySelector("#eventList");
const generatedAt = document.querySelector("#generatedAt");
const refreshButton = document.querySelector("#refreshButton");
const northStarTitle = document.querySelector("#northStarTitle");
const northStarSubtitle = document.querySelector("#northStarSubtitle");
const northStarGrid = document.querySelector("#northStarGrid");
const channelTable = document.querySelector("#channelTable");
const commerceGrid = document.querySelector("#commerceGrid");
const dataMoat = document.querySelector("#dataMoat");
const familyPanel = document.querySelector("#familyPanel");

refreshButton.addEventListener("click", loadAdminOverview);

async function loadAdminOverview() {
  setLoading(true);
  try {
    const response = await fetch("/api/admin/overview");
    if (!response.ok) throw new Error("admin overview failed");
    const data = await response.json();
    renderOverview(data);
  } catch (error) {
    kpiGrid.innerHTML = `<div class="empty">后台数据暂时读取失败，请确认密码或稍后重试。</div>`;
  } finally {
    setLoading(false);
  }
}

function renderOverview(data) {
  const summary = data.summary || {};
  generatedAt.textContent = `更新 ${formatDateTime(data.generated_at)}`;
  renderNorthStar(data.north_star || {});
  renderKpis(summary);
  renderModules(data.modules || []);
  renderChannelTable(data.channels || []);
  renderCommerce(data.monetization || {});
  renderDataMoat(data.data_moat || {});
  renderFamilyPanel(data.families || {});
  renderBarChart(languageChart, data.charts?.language_distribution || [], "暂无语言数据");
  renderBarChart(categoryChart, data.charts?.category_distribution || [], "暂无品类数据");
  renderBarChart(channelChart, data.charts?.channel_distribution || [], "暂无渠道数据");
  renderEvents(data.recent_events || []);
}

function renderNorthStar(northStar) {
  northStarTitle.textContent = northStar.title || "让 AI 越来越懂一个家庭";
  northStarSubtitle.textContent = northStar.subtitle || "后台正在积累家庭购物记忆和商品理解数据。";
  northStarGrid.innerHTML = (northStar.metrics || [])
    .map((item) => {
      const value = item.format === "percent" ? formatPercent(item.value) : item.value;
      return `
        <article class="north-card">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(value ?? "--")}</strong>
          <small>${escapeHtml(item.note || "")}</small>
        </article>
      `;
    })
    .join("");
}

function renderKpis(summary) {
  const kpis = [
    ["今日活跃", summary.active_users_today || 0, "今天打开或使用过的家庭/设备"],
    ["7日活跃", summary.active_users_7d || 0, "最近 7 天活跃用户"],
    ["家庭数", summary.households || 0, "家庭级长期数据容器"],
    ["商品扫描", summary.product_scans || 0, "核心即时价值"],
    ["小票扫描", summary.receipt_scans || 0, "长期家庭数据入口"],
    ["保存记录", summary.records_saved || 0, "形成迁移成本"],
    ["扫描成功率", formatPercent(summary.scan_success_rate || 0), "成功扫描 / 成功与失败"],
    ["估算 AI 成本", formatMoney(summary.estimated_ai_cost || 0), "粗略运营成本"],
  ];
  kpiGrid.innerHTML = kpis
    .map(([label, value, note]) => {
      return `
        <article class="kpi-card">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
          <small>${escapeHtml(note)}</small>
        </article>
      `;
    })
    .join("");
}

function renderModules(modules) {
  if (!modules.length) {
    moduleGrid.innerHTML = `<div class="empty">暂无模块数据。</div>`;
    return;
  }
  moduleGrid.innerHTML = modules
    .map((module) => {
      const metrics = module.metrics || [];
      const next = module.next || [];
      return `
        <article class="module-card module-${escapeHtml(module.key || "general")}">
          <div class="module-head">
            <div>
              <h3>${escapeHtml(module.title || "")}</h3>
              <p>${escapeHtml(module.description || "")}</p>
            </div>
            <span class="status-pill status-${escapeHtml(module.status || "planned")}">${escapeHtml(statusCopy(module.status))}</span>
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
    })
    .join("");
}

function renderChannelTable(channels) {
  if (!channels.length) {
    channelTable.innerHTML = `<tr><td colspan="7" class="table-empty">暂无渠道数据。推广链接带 utm_source 后会自动进入这里。</td></tr>`;
    return;
  }
  channelTable.innerHTML = channels
    .map((row) => {
      const scans = Number(row.product_scans || 0) + Number(row.receipt_scans || 0);
      return `
        <tr>
          <td><strong>${escapeHtml(row.channel)}</strong></td>
          <td>${escapeHtml(row.users || 0)}</td>
          <td>${escapeHtml(row.opens || 0)}</td>
          <td>${escapeHtml(scans)}</td>
          <td>${escapeHtml(row.records_saved || 0)}</td>
          <td>${escapeHtml(formatPercent(row.scan_conversion || 0))}</td>
          <td>${escapeHtml(row.top_campaign || "暂无")}</td>
        </tr>
      `;
    })
    .join("");
}

function renderCommerce(monetization) {
  const subscription = monetization.subscription || {};
  const advertising = monetization.advertising || {};
  commerceGrid.innerHTML = [renderCommerceCard("C 端订阅", subscription), renderCommerceCard("B 端广告与品牌合作", advertising)].join("");
}

function renderCommerceCard(title, data) {
  const signals = data.signals || [];
  const freePlan = data.free_plan || data.guardrails || [];
  const paidPlan = data.paid_plan || [];
  return `
    <article class="commerce-card">
      <div class="module-head">
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(data.positioning || "")}</p>
        </div>
        <span class="status-pill status-${escapeHtml(data.status || "reserved")}">${escapeHtml(statusCopy(data.status))}</span>
      </div>
      <div class="signal-grid">
        ${signals
          .map((item) => `<div><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></div>`)
          .join("")}
      </div>
      <div class="plan-columns">
        <div>
          <strong>${title.includes("订阅") ? "免费版" : "商业化原则"}</strong>
          ${freePlan.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
        ${
          paidPlan.length
            ? `<div><strong>付费版</strong>${paidPlan.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`
            : ""
        }
      </div>
    </article>
  `;
}

function renderDataMoat(data) {
  const metrics = data.metrics || [];
  const story = data.investment_story || [];
  dataMoat.innerHTML = `
    <div class="data-moat-head">
      <h3>${escapeHtml(data.headline || "数据资产正在积累。")}</h3>
    </div>
    <div class="data-moat-grid">
      ${metrics
        .map((item) => `<article><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong><small>${escapeHtml(item.note || "")}</small></article>`)
        .join("")}
    </div>
    <ol class="story-list">
      ${story.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ol>
  `;
}

function renderFamilyPanel(families) {
  const overview = families.overview || [];
  const topFamilies = families.top_families || [];
  const healthSignals = families.health_signals || [];
  familyPanel.innerHTML = `
    <div class="mini-stat-grid">
      ${overview.map((item) => `<div><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></div>`).join("")}
    </div>
    <h3 class="panel-subtitle">高记录家庭</h3>
    <div class="family-list">
      ${
        topFamilies.length
          ? topFamilies.map((item) => `<div><span>${escapeHtml(item.household_id)}</span><strong>${escapeHtml(item.records)}</strong></div>`).join("")
          : `<div class="empty small">暂无家庭记录。</div>`
      }
    </div>
    <h3 class="panel-subtitle">待结构化健康信号</h3>
    <div class="signal-list">
      ${healthSignals.map((item) => `<div><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.value)}</span></div>`).join("")}
    </div>
  `;
}

function renderBarChart(target, items, emptyText) {
  if (!items.length) {
    target.innerHTML = `<div class="empty small">${escapeHtml(emptyText)}</div>`;
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
    eventList.innerHTML = `<div class="empty small">暂无事件。用户端产生扫描、问答、分享后会显示在这里。</div>`;
    return;
  }
  eventList.innerHTML = events
    .map((event) => {
      const payload = event.payload || {};
      const detail = Object.entries(payload)
        .filter(([key]) => !["user_agent", "attribution"].includes(key))
        .slice(0, 4)
        .map(([key, value]) => `${key}: ${formatPayloadValue(value)}`)
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

function setLoading(isLoading) {
  refreshButton.disabled = isLoading;
  refreshButton.textContent = isLoading ? "刷新中" : "刷新数据";
}

function statusCopy(status) {
  const map = {
    active: "已接入",
    beta: "测试中",
    early: "早期",
    building: "建设中",
    reserved: "已预留",
    planned: "规划中",
  };
  return map[status] || status || "规划中";
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

function formatPayloadValue(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return JSON.stringify(value).slice(0, 80);
  return String(value).slice(0, 120);
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
