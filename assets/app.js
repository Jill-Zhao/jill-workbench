/* ============================================================
   Jill 的工作台 — 应用逻辑
   数据存在浏览器 localStorage，记得定期用侧边栏「备份」导出
   ============================================================ */
(function(){
'use strict';

/* ---------------- 常量 ---------------- */
const STAGES = ['待建联','初步接触','需求沟通','方案报价','商务谈判','已签约','暂时搁置'];
const KEY_CRM  = 'jill_crm_v1';
const KEY_FOOD = 'jill_food_v1';
const KEY_SET  = 'jill_settings_v1';
const KEY_XHS  = 'jill_xhs_v1';

const PAGE_INFO = {
  intel : ['行业情报','每日海外榜单与热点，挑能用的看'],
  policy: ['媒体政策','Meta / Google / TikTok 广告规则变动，合规就是聊单切口'],
  leads : ['出海线索池','中国公司在海外的表现，这里全是潜在客户'],
  crm   : ['我的客户','建联进度、卡点和跟进建议'],
  xhs   : ['小红书选题','每天 10:00 推送，帮你把内容做起来获客'],
  food  : ['今日饮食','记一笔，我帮你算热量']
};

/* ---------------- 工具 ---------------- */
const $  = (s,r)=> (r||document).querySelector(s);
const $$ = (s,r)=> Array.from((r||document).querySelectorAll(s));
const esc = s => String(s==null?'':s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);

function load(key, fallback){
  try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch(e){ return fallback; }
}
function save(key, val){
  try{ localStorage.setItem(key, JSON.stringify(val)); }
  catch(e){ toast('保存失败，浏览器存储可能已满'); }
}
function ymd(d){
  const x = d instanceof Date ? d : new Date(d);
  return x.getFullYear() + '-' + String(x.getMonth()+1).padStart(2,'0') + '-' + String(x.getDate()).padStart(2,'0');
}
function daysBetween(a,b){
  return Math.round((new Date(b+'T00:00:00') - new Date(a+'T00:00:00')) / 86400000);
}
let toastTimer;
function toast(msg){
  const t = $('#toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2400);
}
function copyText(text){
  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(text).then(()=>toast('已复制，粘贴给 Mochi 就行')).catch(()=>fallbackCopy(text));
  } else fallbackCopy(text);
}
function fallbackCopy(text){
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:-9999px';
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); toast('已复制，粘贴给 Mochi 就行'); }
  catch(e){ toast('复制失败，请手动选中复制'); }
  document.body.removeChild(ta);
}

/* ---------------- 状态 ---------------- */
let CRM      = load(KEY_CRM, []);
let FOOD     = load(KEY_FOOD, {});
let SETTINGS = load(KEY_SET, { goal: 1500 });
let curCat   = 'game';
let curPlat  = 'all';
let curImp   = 'all';
let curViol  = 'all';
let curStageFilter = '';
let curXCat   = 'all';
let foodDate = ymd(new Date());
let pickedFood = null;
let editingId  = null;
let logId      = null;
let XHS_MATERIALS = load(KEY_XHS, []);
let pendingXhsFile = null;

/* ============================================================
   导航
   ============================================================ */
function switchView(v){
  $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  $$('.view').forEach(s => s.classList.toggle('active', s.id === 'view-' + v));
  $('#pageTitle').textContent = PAGE_INFO[v][0];
  $('#pageSub').textContent   = PAGE_INFO[v][1];
  window.scrollTo(0,0);
  $('.main').scrollTop = 0;
}
$$('.nav-item').forEach(b => b.addEventListener('click', ()=> switchView(b.dataset.view)));

/* ============================================================
   模块一：行业情报
   ============================================================ */
function renderPulse(){
  $('#pulseGrid').innerHTML = (INTEL.marketPulse||[]).map(p => `
    <div class="pulse">
      <div class="pulse-label">${esc(p.label)}</div>
      <div class="pulse-value">${esc(p.value)}</div>
      <div class="pulse-note">${esc(p.note)}</div>
    </div>`).join('');
}

function renderRankings(){
  const list = (INTEL.appRankings && INTEL.appRankings[curCat]) || [];
  if(!list.length){ $('#rankList').innerHTML = '<div class="empty"><p>这个品类今天暂无数据。</p></div>'; return; }
  $('#rankList').innerHTML = list.map(a => `
    <div class="card">
      <div class="card-top">
        <div class="card-name">${esc(a.name)}</div>
        ${a.isChinese ? '<span class="tag tag-cn">中国出海</span>' : '<span class="tag tag-soft">海外厂商</span>'}
      </div>
      <div class="card-meta">
        <span>🏢 ${esc(a.publisher)}</span>
        <span>📍 ${esc(a.markets)}</span>
      </div>
      <div class="card-perf">${esc(a.performance)}</div>
      <div class="card-comment"><b>怎么用：</b>${esc(a.comment)}</div>
      ${a.source ? `<div class="card-src"><a href="${esc(a.source)}" target="_blank" rel="noopener">🔗 信息来源（点击核实）</a></div>` : ''}
    </div>`).join('');
}

function renderEvents(){
  $('#eventList').innerHTML = (INTEL.hotEvents||[]).map(e => `
    <div class="tl-item">
      <div class="tl-date">${esc(e.date)}</div>
      <div class="tl-title">${esc(e.title)}</div>
      <div class="tl-sum">${esc(e.summary)}</div>
      <div class="tl-biz">${esc(e.bizValue)}</div>
      ${e.source ? `<div class="tl-src"><a href="${esc(e.source)}" target="_blank" rel="noopener">🔗 信息来源（点击核实）</a></div>` : ''}
    </div>`).join('');
}

/* 广告服务商侧小道消息 */
function renderAgencyIntel(){
  const list = INTEL.agencyIntel || [];
  const box = $('#agencyIntelList');
  if(!box) return;
  if(!list.length){ box.innerHTML = '<div class="empty"><p>暂无渠道侧小道消息。</p></div>'; return; }
  box.innerHTML = list.map(a => `
    <div class="card agency-card">
      <div class="pol-head">
        <span class="tag tag-whisper">小道消息</span>
        <span class="pol-title">${esc(a.title)}</span>
        ${a.date ? `<span class="tag tag-soft">${esc(a.date)}</span>` : ''}
      </div>
      <div class="pol-detail">${esc(a.summary)}</div>
      <div class="pol-biz"><strong>商务视角：</strong>${esc(a.bizValue)}</div>
      ${a.source ? `<div class="card-src"><a href="${esc(a.source)}" target="_blank" rel="noopener">🔗 信息来源（点击核实）</a></div>` : ''}
    </div>`).join('');
}

$$('#catTabs .tab').forEach(t => t.addEventListener('click', ()=>{
  $$('#catTabs .tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  curCat = t.dataset.cat;
  renderRankings();
}));

/* ============================================================
   模块一·五：小红书选题（由「小红书行业选题」自动化每日推送）
   ============================================================ */
function renderXHS(){
  const box = $('#xhsTopicList');
  if(!box) return;
  const X = window.XHS || {};
  $('#xhsUpdated').textContent = (X.updatedAt || '').slice(5) || '—';

  const topics = X.topics || [];
  let view = topics.map((t,i) => ({ t, i }));
  if(curXCat !== 'all') view = view.filter(o => (o.t.forClient || '').indexOf(curXCat) >= 0);

  box.innerHTML = view.length ? view.map(o => `
    <div class="card">
      <div class="pol-head">
        <span class="tag tag-brand">选题</span>
        <span class="pol-title">${esc(o.t.angle)}</span>
        ${o.t.forClient ? `<span class="tag tag-soft">${esc(o.t.forClient)}</span>` : ''}
      </div>
      <div class="card-comment"><b>为什么能火：</b>${esc(o.t.hot || '')}</div>
      ${o.t.format ? `<div class="card-meta" style="margin-top:8px"><span>📐 形式：${esc(o.t.format)}</span></div>` : ''}
      ${o.t.note ? `<div class="card-comment" style="margin-top:6px;color:var(--txt-3)"><b>写的时候：</b>${esc(o.t.note)}</div>` : ''}
      ${o.t.source && o.t.source !== '暂无' ? `<div class="card-src"><a href="${esc(o.t.source)}" target="_blank" rel="noopener">🔗 参考来源</a></div>` : ''}
      <div class="xhs-topic-actions">
        <button class="btn-ghost" data-xgen="${o.i}">🤖 让 Mochi 生成图文</button>
      </div>
    </div>`).join('')
    : (topics.length ? '<div class="empty"><p>这个品类今天没有选题。</p></div>'
                     : '<div class="empty"><p>今天还没有推送选题。自动化每天 10:00 生成，稍后再来看。</p></div>');

  $$('[data-xgen]', box).forEach(b => b.addEventListener('click', ()=>{
    const t = (window.XHS.topics || [])[+b.dataset.xgen];
    if(t) copyText(buildXhsPrompt(t));
  }));

  // 素材库
  const matBox = $('#xhsMatList');
  matBox.innerHTML = XHS_MATERIALS.length ? XHS_MATERIALS.map(m => `
    <div class="material-item">
      <div class="mi-main">
        <div class="mi-name">${esc(m.name)}</div>
        ${m.note ? `<div class="mi-note">${esc(m.note)}</div>` : ''}
        ${m.file ? `<div class="mi-file">📎 ${esc(m.file)}</div>` : ''}
      </div>
      <span class="mi-del" data-md="${m.id}" title="删除">×</span>
    </div>`).join('')
    : '<div class="empty" style="padding:22px 10px"><p style="font-size:12.5px">还没有素材。把你的案例、白皮书、PPT 传上来，二创时更有料。</p></div>';

  $$('[data-md]', matBox).forEach(el => el.addEventListener('click', ()=>{
    XHS_MATERIALS = XHS_MATERIALS.filter(m => m.id !== el.dataset.md);
    save(KEY_XHS, XHS_MATERIALS); renderXHS(); toast('已删除素材');
  }));
}

$$('#xhsTabs .tab').forEach(t => t.addEventListener('click', ()=>{
  $$('#xhsTabs .tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active'); curXCat = t.dataset.xcat; renderXHS();
}));

$('#btnAddMat').addEventListener('click', ()=>{
  const name = $('#xhsMatName').value.trim();
  if(!name){ toast('先填素材名称'); $('#xhsMatName').focus(); return; }
  XHS_MATERIALS.unshift({ id: uid(), name, note: $('#xhsMatNote').value.trim(), file: pendingXhsFile, addedAt: ymd(new Date()) });
  save(KEY_XHS, XHS_MATERIALS);
  $('#xhsMatName').value = ''; $('#xhsMatNote').value = ''; pendingXhsFile = null; $('#xhsMatFile').value = '';
  renderXHS(); toast('素材已加入素材库');
});
$('#xhsMatFile').addEventListener('change', e =>{
  const f = e.target.files && e.target.files[0];
  if(!f) return;
  pendingXhsFile = f.name;
  if(!$('#xhsMatName').value.trim()) $('#xhsMatName').value = f.name;
  $('#xhsMatNote').focus();
});

function buildXhsPrompt(t){
  const mats = XHS_MATERIALS;
  const matSec = mats.length
    ? '\n\n【我上传的素材，可用来二创】\n' + mats.map(m => '- ' + m.name + (m.note ? '：' + m.note : '')).join('\n')
    : '';
  return `我要发一条小红书来获客（我是易点天下出海广告商务，目标客户是国内想出海的互联网 / 游戏 / 金融公司）。请基于下面这个选题，帮我生成一篇可直接发的图文内容（含标题、正文、配图建议、话题标签 #）。

【选题角度】${t.angle}
【适合客户类型】${t.forClient || '全品类'}
【形式】${t.format || '图文'}
【为什么这个方向能火】${t.hot || ''}
【写作提示】${t.note || ''}${matSec}

要求：
1. 站在「中小企业客户视角」，说他们关心的痛点和干货，别硬广
2. 标题带痛点或反常识 + 具体数字 + 利益点
3. 正文 300–500 字，结尾加一句获客钩子（如「需要海外投放方案，私信我」）
4. 给出 3–5 张图的配图建议
5. 最后给 5 个相关话题标签`;
}

$('#btnAskXhsAll').addEventListener('click', ()=>{
  const topics = (window.XHS && window.XHS.topics) || [];
  if(!topics.length){ toast('今天还没有选题'); return; }
  const list = topics.map((t,i) => `${i+1}. ${t.angle}【${t.forClient || '全品类'}】`).join('\n');
  const mats = XHS_MATERIALS;
  const matSec = mats.length ? '\n\n【可用素材】\n' + mats.map(m => '- ' + m.name + (m.note ? '：' + m.note : '')).join('\n') : '';
  copyText(`帮我为今天的小红书选题批量生成图文内容（我是易点天下出海广告商务，目标客户是国内想出海的互联网 / 游戏 / 金融公司）。每条都按「标题 + 正文 + 配图建议 + 话题标签」输出，站在中小企业客户视角，结尾带获客钩子。

【今日选题】
${list}${matSec}`);
});

/* ============================================================
   模块二：媒体政策
   ============================================================ */
function platClass(p){
  return p === 'Meta' ? 'tag-meta' : p === 'Google' ? 'tag-google' : 'tag-tiktok';
}
function impClass(i){
  return i === '高' ? 'tag-hi' : i === '中' ? 'tag-mid' : 'tag-lo';
}
function renderPolicies(){
  let list = INTEL.policies || [];
  if(curPlat !== 'all') list = list.filter(p => p.platform === curPlat);
  if(curImp  !== 'all') list = list.filter(p => p.impact === curImp);
  if(curViol !== 'all') list = list.filter(p => (p.categories||[]).some(c => c.indexOf(curViol) >= 0));

  const today = ymd(new Date());
  $('#policyList').innerHTML = list.length ? list.map(p => {
    let cd = '';
    if(/^\d{4}-\d{2}-\d{2}$/.test(p.date)){
      const d = daysBetween(today, p.date);
      if(d > 0 && d <= 90) cd = `<span class="countdown">还有 ${d} 天生效</span>`;
    }
    const cats = (p.categories||[]).map(c => `<span class="tag tag-soft">${esc(c)}</span>`).join('');
    return `
    <div class="card">
      <div class="pol-head">
        <span class="tag ${platClass(p.platform)}">${esc(p.platform)}</span>
        <span class="pol-title">${esc(p.title)}</span>
        <span class="tag ${impClass(p.impact)}">${esc(p.impact)}影响</span>
        ${cd}
      </div>
      <div class="card-meta"><span>🗓 ${esc(p.date)}</span>${cats}</div>
      <div class="pol-detail">${esc(p.detail)}</div>
      <div class="pol-biz"><strong>商务视角：</strong>${esc(p.bizValue)}</div>
    </div>`;
  }).join('') : '<div class="empty"><p>没有符合条件的政策。</p></div>';

  // 侧边栏高影响提醒
  const hi = (INTEL.policies||[]).filter(p => p.impact === '高').length;
  const b = $('#badgePolicy');
  if(hi){ b.textContent = hi; b.classList.add('show','alert'); }
}
$$('#platTabs .tab').forEach(t => t.addEventListener('click', ()=>{
  $$('#platTabs .tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active'); curPlat = t.dataset.plat; renderPolicies();
}));
$$('#impactTabs .tab').forEach(t => t.addEventListener('click', ()=>{
  $$('#impactTabs .tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active'); curImp = t.dataset.imp; renderPolicies();
}));
$$('#violTabs .tab').forEach(t => t.addEventListener('click', ()=>{
  $$('#violTabs .tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active'); curViol = t.dataset.viol; renderPolicies();
}));

/* ============================================================
   模块三：出海线索池
   ============================================================ */
function renderLeads(){
  const q = ($('#leadSearch').value || '').trim().toLowerCase();
  // 易点天下是 Jill 自家公司，已合作的客户不进线索池（避免重复跟进）
  let list = (INTEL.chinaGoingGlobal || []).filter(r => !(r.agency || '').includes('易点天下'));
  if(q) list = list.filter(r =>
    (r.product+r.company+r.category+r.markets+(r.hq||'')+(r.website||'')+(r.contact||'')+(r.agency||'')).toLowerCase().includes(q));

  const existing = new Set(CRM.map(c => c.company));
  const tb = $('#leadTable tbody');
  tb.innerHTML = list.length ? list.map((r,i) => {
    const added = existing.has(r.company);
    return `<tr>
      <td class="td-prod">${esc(r.product)}</td>
      <td class="td-comp">${esc(r.company)}</td>
      <td class="td-mkt">${esc(r.hq||'—')}</td>
      <td class="td-mkt">${esc(r.category)}</td>
      <td class="td-mkt">${esc(r.markets)}</td>
      <td class="td-rev">${esc(r.revenue)}</td>
      <td class="td-recent">${esc(r.recent)}</td>
      <td class="td-web">${r.website ? `<a href="${esc(r.website)}" target="_blank" rel="noopener">🌐 官网</a>` : '<span class="muted">暂无</span>'}</td>
      <td class="td-contact">${esc(r.contact || '暂无公开数据')}</td>
      <td class="td-agency">${esc(r.agency || '—')}</td>
      <td>${ added
        ? '<span class="mini-btn done">✓ 已在客户</span>'
        : `<button class="mini-btn" data-lead="${i}">+ 加为客户</button>` }</td>
    </tr>`;
  }).join('') : '<tr><td colspan="11" style="text-align:center;padding:40px;color:#9aa1ad">没找到匹配的公司</td></tr>';

  $$('[data-lead]', tb).forEach(btn => btn.addEventListener('click', ()=>{
    const r = list[+btn.dataset.lead];
    CRM.unshift({
      id: uid(), company: r.company, product: r.product,
      category: mapCat(r.category), market: r.markets,
      contact:'', title:'', phone:'',
      stage:'待建联', next:'', budget:'',
      blocker:'', note:`来自线索池 · ${r.revenue}｜${r.recent}`,
      advice:'', logs:[], created: ymd(new Date())
    });
    save(KEY_CRM, CRM);
    renderLeads(); renderCRM();
    toast(`已把「${r.company}」加进客户列表`);
  }));
}
function mapCat(c){
  if(/游戏|SLG|RPG|解谜|休闲|竞技|二次元|女性向/.test(c)) return '游戏';
  if(/金融|支付|钱包|信贷/.test(c)) return '金融';
  if(/AI/.test(c)) return 'AI 应用';
  if(/教育/.test(c)) return '教育';
  if(/电商/.test(c)) return '电商';
  if(/工具/.test(c)) return '工具';
  return '其他';
}
$('#leadSearch').addEventListener('input', renderLeads);

/* ============================================================
   模块四：客户 CRM
   ============================================================ */
function fillStageSelects(){
  const opts = STAGES.map(s => `<option value="${s}">${s}</option>`).join('');
  $('#fStage').innerHTML = opts;
  $('#logStage').innerHTML = opts;
  $('#crmStageFilter').innerHTML = '<option value="">全部阶段</option>' + opts;
}

function renderStageBar(){
  const counts = {};
  STAGES.forEach(s => counts[s] = 0);
  CRM.forEach(c => { if(counts[c.stage] !== undefined) counts[c.stage]++; });
  $('#stageBar').innerHTML = STAGES.map(s => `
    <div class="stage-cell ${curStageFilter===s?'on':''}" data-stage="${s}">
      <div class="stage-num">${counts[s]}</div>
      <div class="stage-lbl">${s}</div>
    </div>`).join('');
  $$('.stage-cell').forEach(el => el.addEventListener('click', ()=>{
    curStageFilter = (curStageFilter === el.dataset.stage) ? '' : el.dataset.stage;
    $('#crmStageFilter').value = curStageFilter;
    renderCRM();
  }));
}

function nextChip(next){
  if(!next) return '';
  const d = daysBetween(ymd(new Date()), next);
  if(d < 0)  return `<span class="next-chip od">已逾期 ${-d} 天</span>`;
  if(d === 0) return `<span class="next-chip od">今天要跟进</span>`;
  if(d <= 3) return `<span class="next-chip sn">${d} 天后跟进</span>`;
  return `<span class="next-chip ok">${next}</span>`;
}

function renderCRM(){
  renderStageBar();
  const q = ($('#crmSearch').value || '').trim().toLowerCase();
  let list = CRM.slice();
  if(curStageFilter) list = list.filter(c => c.stage === curStageFilter);
  if(q) list = list.filter(c =>
    (c.company+c.product+c.contact+c.market+c.note).toLowerCase().includes(q));

  // 排序：逾期 > 快到期 > 其他
  list.sort((a,b)=>{
    const da = a.next ? daysBetween(ymd(new Date()), a.next) : 9999;
    const db = b.next ? daysBetween(ymd(new Date()), b.next) : 9999;
    return da - db;
  });

  $('#crmEmpty').style.display = CRM.length ? 'none' : 'block';
  $('#crmList').innerHTML = list.map(c => {
    const d = c.next ? daysBetween(ymd(new Date()), c.next) : null;
    const cls = d === null ? '' : d < 0 ? 'overdue' : d <= 3 ? 'soon' : '';
    const logs = (c.logs||[]).slice(-3).reverse().map(l =>
      `<div class="crm-log"><span class="lt">${esc(l.date)}</span><span>${esc(l.text)}</span></div>`).join('');
    return `
    <div class="crm-card ${cls}">
      <div class="crm-head">
        <div>
          <div class="crm-name">${esc(c.company)}</div>
          <div class="crm-prod">${esc(c.product||'—')} · ${esc(c.category||'')}</div>
        </div>
        <span class="tag tag-brand">${esc(c.stage)}</span>
      </div>
      ${c.contact ? `<div class="crm-row"><span class="k">联系人</span><span class="v">${esc(c.contact)}${c.title?' · '+esc(c.title):''}${c.phone?'　'+esc(c.phone):''}</span></div>`:''}
      ${c.market  ? `<div class="crm-row"><span class="k">市场</span><span class="v">${esc(c.market)}</span></div>`:''}
      ${c.budget  ? `<div class="crm-row"><span class="k">预算</span><span class="v">${esc(c.budget)}</span></div>`:''}
      <div class="crm-row"><span class="k">下次跟进</span><span class="v">${c.next ? nextChip(c.next) : '<span style="color:#9aa1ad">未设置</span>'}</span></div>
      ${c.blocker ? `<div class="crm-blocker">${esc(c.blocker)}</div>`:''}
      ${c.advice  ? `<div class="crm-advice">${esc(c.advice)}</div>`:''}
      ${logs ? `<div class="crm-logs">${logs}</div>`:''}
      <div class="crm-actions">
        <button class="btn-ghost" data-log="${c.id}">＋ 跟进</button>
        <button class="btn-ghost" data-ask="${c.id}">🎯 要建议</button>
        <button class="btn-ghost" data-edit="${c.id}">编辑</button>
      </div>
    </div>`;
  }).join('');

  $$('[data-edit]').forEach(b => b.addEventListener('click', ()=> openClient(b.dataset.edit)));
  $$('[data-log]').forEach(b => b.addEventListener('click', ()=> openLog(b.dataset.log)));
  $$('[data-ask]').forEach(b => b.addEventListener('click', ()=> askAdvice(b.dataset.ask)));

  const due = CRM.filter(c => c.next && daysBetween(ymd(new Date()), c.next) <= 0).length;
  const b = $('#badgeCrm');
  if(due){ b.textContent = due; b.classList.add('show','alert'); }
  else b.classList.remove('show');
}

function openClient(id){
  editingId = id || null;
  const c = id ? CRM.find(x => x.id === id) : null;
  $('#clientModalTitle').textContent = c ? '编辑客户' : '新增客户';
  $('#fCompany').value = c?.company || '';
  $('#fProduct').value = c?.product || '';
  $('#fCategory').value= c?.category|| '游戏';
  $('#fMarket').value  = c?.market  || '';
  $('#fContact').value = c?.contact || '';
  $('#fTitle').value   = c?.title   || '';
  $('#fPhone').value   = c?.phone   || '';
  $('#fStage').value   = c?.stage   || '待建联';
  $('#fNext').value    = c?.next    || '';
  $('#fBudget').value  = c?.budget  || '';
  $('#fBlocker').value = c?.blocker || '';
  $('#fNote').value    = c?.note    || '';
  $('#fAdvice').value  = c?.advice  || '';
  $('#btnDeleteClient').style.display = c ? 'block' : 'none';
  $('#clientModal').classList.add('show');
}

$('#btnAddClient').addEventListener('click', ()=> openClient(null));

$('#btnSaveClient').addEventListener('click', ()=>{
  const company = $('#fCompany').value.trim();
  if(!company){ toast('公司名称不能为空'); $('#fCompany').focus(); return; }
  const data = {
    company, product:$('#fProduct').value.trim(), category:$('#fCategory').value,
    market:$('#fMarket').value.trim(), contact:$('#fContact').value.trim(),
    title:$('#fTitle').value.trim(), phone:$('#fPhone').value.trim(),
    stage:$('#fStage').value, next:$('#fNext').value, budget:$('#fBudget').value.trim(),
    blocker:$('#fBlocker').value.trim(), note:$('#fNote').value.trim(),
    advice:$('#fAdvice').value.trim()
  };
  if(editingId){
    const c = CRM.find(x => x.id === editingId);
    Object.assign(c, data);
  } else {
    CRM.unshift(Object.assign({ id:uid(), logs:[], created: ymd(new Date()) }, data));
  }
  save(KEY_CRM, CRM);
  $('#clientModal').classList.remove('show');
  renderCRM(); renderLeads();
  toast('已保存');
});

$('#btnDeleteClient').addEventListener('click', ()=>{
  const c = CRM.find(x => x.id === editingId);
  if(!c) return;
  if(!confirm(`确定删除客户「${c.company}」？跟进记录也会一起删掉，且无法恢复。`)) return;
  CRM = CRM.filter(x => x.id !== editingId);
  save(KEY_CRM, CRM);
  $('#clientModal').classList.remove('show');
  renderCRM(); renderLeads();
  toast('已删除');
});

/* --- 跟进记录 --- */
function openLog(id){
  logId = id;
  const c = CRM.find(x => x.id === id);
  $('#logCompany').textContent = c.company;
  $('#logText').value = '';
  $('#logStage').value = c.stage;
  $('#logNext').value = c.next || '';
  $('#logModal').classList.add('show');
  setTimeout(()=> $('#logText').focus(), 60);
}
$('#btnSaveLog').addEventListener('click', ()=>{
  const c = CRM.find(x => x.id === logId);
  const text = $('#logText').value.trim();
  if(!text){ toast('写点内容再保存'); return; }
  c.logs = c.logs || [];
  c.logs.push({ date: ymd(new Date()), text });
  c.stage = $('#logStage').value;
  c.next  = $('#logNext').value;
  save(KEY_CRM, CRM);
  $('#logModal').classList.remove('show');
  renderCRM();
  toast('跟进记录已保存');
});

/* --- 生成给 Mochi 的分析请求 --- */
function buildPrompt(c){
  return `帮我以出海广告商务的视角分析这个客户，我是易点天下的商务，卖的是海外广告投放与变现服务。

【客户档案】
公司：${c.company}
主推产品：${c.product || '未填'}
品类：${c.category || '未填'}
目标市场：${c.market || '未填'}
联系人：${c.contact || '未填'}${c.title ? '（' + c.title + '）' : ''}
当前阶段：${c.stage}
预估预算：${c.budget || '未知'}
当前卡点：${c.blocker || '暂无'}
我的备注：${c.note || '无'}
历史跟进：${(c.logs||[]).map(l => l.date + ' ' + l.text).join('；') || '暂无'}

【我要什么】
1. 这家公司和这款产品目前在海外的真实处境（体量、市场、竞争位置），有公开数据请带上
2. 他们现在最可能痛的是什么（买量成本、素材、合规、变现效率、新市场拓展…）
3. 针对我现在的卡点，下一步具体该怎么推，给我 2-3 个可执行动作
4. 下次沟通的开场话术，要具体到能直接发出去的程度
5. 有没有近期的行业事件或政策，可以当作我这次触达的由头`;
}
function askAdvice(id){
  const c = CRM.find(x => x.id === id);
  copyText(buildPrompt(c));
}
$('#btnGenPrompt').addEventListener('click', ()=>{
  copyText(buildPrompt({
    company:$('#fCompany').value.trim() || '（未填公司名）',
    product:$('#fProduct').value.trim(), category:$('#fCategory').value,
    market:$('#fMarket').value.trim(), contact:$('#fContact').value.trim(),
    title:$('#fTitle').value.trim(), stage:$('#fStage').value,
    budget:$('#fBudget').value.trim(), blocker:$('#fBlocker').value.trim(),
    note:$('#fNote').value.trim(),
    logs: editingId ? (CRM.find(x=>x.id===editingId)?.logs || []) : []
  }));
});

$('#crmSearch').addEventListener('input', renderCRM);
$('#crmStageFilter').addEventListener('change', e =>{
  curStageFilter = e.target.value; renderCRM();
});

/* ============================================================
   模块五：饮食记录
   ============================================================ */
function todayList(){ return FOOD[foodDate] || []; }

function renderFood(){
  $('#foodDate').value = foodDate;
  $('#goalInput').value = SETTINGS.goal;

  const list = todayList();
  let kcal=0, p=0, f=0, c=0;
  list.forEach(i => { kcal+=i.kcal; p+=i.p||0; f+=i.f||0; c+=i.c||0; });
  kcal = Math.round(kcal);

  // 环形进度
  const goal = SETTINGS.goal || 1500;
  const pct  = Math.min(kcal / goal, 1);
  const ring = $('#ringFg');
  ring.style.strokeDashoffset = 327 * (1 - pct);
  ring.style.stroke = kcal > goal ? 'var(--up)' : kcal > goal*0.85 ? 'var(--warn)' : 'var(--brand)';
  $('#kcalNum').textContent = kcal;

  const left = goal - kcal;
  $('#kcalLeft').textContent = left >= 0 ? left + ' kcal' : '超出 ' + (-left) + ' kcal';
  $('#kcalLeft').style.color = left >= 0 ? 'var(--ok)' : 'var(--up)';

  // 三大营养素（参考：蛋白 goal*0.25/4，脂肪 goal*0.25/9，碳水 goal*0.5/4）
  const tP = goal*0.25/4, tF = goal*0.25/9, tC = goal*0.5/4;
  $('#mProtein').textContent = Math.round(p) + ' g';
  $('#mFat').textContent     = Math.round(f) + ' g';
  $('#mCarb').textContent    = Math.round(c) + ' g';
  $('#barP').style.width = Math.min(p/tP*100,100) + '%';
  $('#barF').style.width = Math.min(f/tF*100,100) + '%';
  $('#barC').style.width = Math.min(c/tC*100,100) + '%';

  // 分餐显示
  const meals = ['早餐','午餐','晚餐','加餐'];
  $('#mealGroups').innerHTML = meals.map(m => {
    const items = list.filter(i => i.meal === m);
    if(!items.length) return '';
    const sum = Math.round(items.reduce((s,i)=>s+i.kcal,0));
    return `
    <div class="meal-group">
      <div class="meal-head"><span class="meal-name">${m}</span><span class="meal-kcal">${sum} kcal</span></div>
      ${items.map(i => `
        <div class="food-item">
          <div class="fi-left">
            <span class="fi-name">${esc(i.name)}</span>
            <span class="fi-sub">${esc(i.desc)}</span>
          </div>
          <div class="fi-right">
            <span class="fi-kcal">${Math.round(i.kcal)} kcal</span>
            <button class="fi-del" data-del="${i.id}" title="删除">×</button>
          </div>
        </div>`).join('')}
    </div>`;
  }).join('') || '<div class="empty"><div class="empty-ico">🥗</div><p>今天还没记录。在上面输入食物名，选中后填份量就行。</p></div>';

  $$('[data-del]').forEach(b => b.addEventListener('click', ()=>{
    FOOD[foodDate] = todayList().filter(i => i.id !== b.dataset.del);
    if(!FOOD[foodDate].length) delete FOOD[foodDate];
    save(KEY_FOOD, FOOD); renderFood();
  }));

  renderWeek();
}

function renderWeek(){
  const days = [];
  const base = new Date(foodDate + 'T00:00:00');
  for(let i=6;i>=0;i--){
    const d = new Date(base); d.setDate(d.getDate()-i);
    const k = ymd(d);
    const sum = (FOOD[k]||[]).reduce((s,x)=>s+x.kcal,0);
    days.push({ key:k, label:['日','一','二','三','四','五','六'][d.getDay()], kcal:Math.round(sum) });
  }
  const max = Math.max(SETTINGS.goal, ...days.map(d=>d.kcal), 1);
  $('#weekBars').innerHTML = days.map(d => {
    const h = Math.max(d.kcal/max*100, 2);
    const cls = d.key === foodDate ? 'today' : d.kcal > SETTINGS.goal ? 'over' : '';
    return `<div class="wb" title="${d.key}：${d.kcal} kcal">
      <div class="wb-col ${cls}" style="height:${h}%"></div>
      <div class="wb-lbl">${d.label}</div>
    </div>`;
  }).join('');
}

/* --- 食物搜索联想 --- */
let acIndex = -1;
function renderAC(items){
  const box = $('#acList');
  if(!items.length){ box.classList.remove('show'); return; }
  acIndex = -1;
  box.innerHTML = items.map((f,i) => `
    <div class="ac-item" data-ac="${i}">
      <span><span class="ac-name">${esc(f.n)}</span><span class="ac-cat">${esc(f.cat)}</span></span>
      <span class="ac-kcal">${f.k} kcal/100g</span>
    </div>`).join('');
  box.classList.add('show');
  $$('[data-ac]', box).forEach(el => el.addEventListener('click', ()=> pickFood(items[+el.dataset.ac])));
}
function pickFood(f){
  pickedFood = f;
  $('#foodSearch').value = f.n;
  $('#acList').classList.remove('show');
  $('#foodUnit').innerHTML = `<option value="unit">${f.u}（约${f.g}g）</option><option value="g">克</option>`;
  $('#foodAmt').value = 1;
  $('#foodAmt').focus();
  $('#foodAmt').select();
}
$('#foodSearch').addEventListener('input', e =>{
  const q = e.target.value.trim().toLowerCase();
  pickedFood = null;
  if(!q){ $('#acList').classList.remove('show'); return; }
  const hits = FOOD_DB.filter(f => f.n.toLowerCase().includes(q) || f.cat.includes(q)).slice(0,12);
  renderAC(hits);
});
$('#foodSearch').addEventListener('keydown', e =>{
  const items = $$('.ac-item');
  if(!items.length) return;
  if(e.key === 'ArrowDown'){ e.preventDefault(); acIndex = Math.min(acIndex+1, items.length-1); }
  else if(e.key === 'ArrowUp'){ e.preventDefault(); acIndex = Math.max(acIndex-1, 0); }
  else if(e.key === 'Enter'){ e.preventDefault(); if(acIndex >= 0) items[acIndex].click(); return; }
  else return;
  items.forEach((el,i) => el.classList.toggle('sel', i === acIndex));
  items[acIndex].scrollIntoView({block:'nearest'});
});
document.addEventListener('click', e =>{
  if(!e.target.closest('.autocomplete')) $('#acList').classList.remove('show');
});

$('#btnAddFood').addEventListener('click', ()=>{
  if(!pickedFood){ toast('先从下拉列表里选中一个食物'); $('#foodSearch').focus(); return; }
  const amt = parseFloat($('#foodAmt').value);
  if(!amt || amt <= 0){ toast('填一下份量'); $('#foodAmt').focus(); return; }
  const isUnit = $('#foodUnit').value === 'unit';
  const grams = isUnit ? amt * pickedFood.g : amt;
  const r = grams / 100;
  const item = {
    id: uid(), meal: $('#foodMeal').value, name: pickedFood.n,
    desc: isUnit ? `${amt} ${pickedFood.u}（约 ${Math.round(grams)} g）` : `${Math.round(grams)} g`,
    kcal: pickedFood.k * r, p: pickedFood.p * r, f: pickedFood.f * r, c: pickedFood.c * r
  };
  FOOD[foodDate] = todayList().concat(item);
  save(KEY_FOOD, FOOD);
  $('#foodSearch').value = ''; $('#foodAmt').value = ''; pickedFood = null;
  $('#foodUnit').innerHTML = '<option value="unit">份</option><option value="g">克</option>';
  renderFood();
  toast(`记下了：${item.name} ${Math.round(item.kcal)} kcal`);
});

$('#btnCustomFood').addEventListener('click', ()=>{
  $('#cfName').value=''; $('#cfKcal').value=''; $('#cfP').value=''; $('#cfF').value=''; $('#cfC').value='';
  $('#cfMeal').value = $('#foodMeal').value;
  $('#customFoodModal').classList.add('show');
  setTimeout(()=> $('#cfName').focus(), 60);
});
$('#btnSaveCustomFood').addEventListener('click', ()=>{
  const name = $('#cfName').value.trim();
  const kcal = parseFloat($('#cfKcal').value);
  if(!name){ toast('填个名字'); return; }
  if(!kcal || kcal < 0){ toast('填一下大概热量'); return; }
  FOOD[foodDate] = todayList().concat({
    id: uid(), meal: $('#cfMeal').value, name, desc: '手动记录',
    kcal, p: parseFloat($('#cfP').value)||0, f: parseFloat($('#cfF').value)||0, c: parseFloat($('#cfC').value)||0
  });
  save(KEY_FOOD, FOOD);
  $('#customFoodModal').classList.remove('show');
  renderFood(); toast('已添加');
});

$('#foodDate').addEventListener('change', e =>{ foodDate = e.target.value; renderFood(); });
$('#foodPrev').addEventListener('click', ()=> shiftDate(-1));
$('#foodNext').addEventListener('click', ()=> shiftDate(1));
function shiftDate(n){
  const d = new Date(foodDate + 'T00:00:00');
  d.setDate(d.getDate() + n);
  foodDate = ymd(d); renderFood();
}
$('#goalInput').addEventListener('change', e =>{
  SETTINGS.goal = parseInt(e.target.value) || 1500;
  save(KEY_SET, SETTINGS); renderFood();
});

$('#btnAskFood').addEventListener('click', ()=>{
  const list = todayList();
  if(!list.length){ toast('今天还没记录呢'); return; }
  const byMeal = {};
  list.forEach(i => { (byMeal[i.meal] = byMeal[i.meal] || []).push(`${i.name} ${i.desc} ${Math.round(i.kcal)}kcal`); });
  const total = Math.round(list.reduce((s,i)=>s+i.kcal,0));
  const p = Math.round(list.reduce((s,i)=>s+(i.p||0),0));
  const f = Math.round(list.reduce((s,i)=>s+(i.f||0),0));
  const c = Math.round(list.reduce((s,i)=>s+(i.c||0),0));
  const txt = `帮我点评一下今天的饮食（${foodDate}），我的每日热量目标是 ${SETTINGS.goal} kcal。

${Object.keys(byMeal).map(m => `${m}：\n  ` + byMeal[m].join('\n  ')).join('\n')}

合计：${total} kcal｜蛋白质 ${p}g｜脂肪 ${f}g｜碳水 ${c}g

请告诉我：1) 今天吃得怎么样 2) 营养结构有什么问题 3) 明天可以怎么调整，给具体的替换建议`;
  copyText(txt);
});

/* ============================================================
   备份 / 恢复
   ============================================================ */
$('#btnBackup').addEventListener('click', ()=> $('#backupModal').classList.add('show'));
$('#btnExport').addEventListener('click', ()=>{
  const blob = new Blob([JSON.stringify({
    version:1, exportedAt:new Date().toISOString(),
    crm:CRM, food:FOOD, settings:SETTINGS
  }, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Jill工作台备份_${ymd(new Date())}.json`;
  a.click();
  setTimeout(()=> URL.revokeObjectURL(a.href), 1000);
  toast('备份文件已下载，建议存到「备份」文件夹');
});
$('#importFile').addEventListener('change', e =>{
  const file = e.target.files[0];
  if(!file) return;
  if(!confirm('导入会覆盖当前所有客户与饮食记录，确定继续？')){ e.target.value=''; return; }
  const fr = new FileReader();
  fr.onload = ()=>{
    try{
      const d = JSON.parse(fr.result);
      if(d.crm) { CRM = d.crm; save(KEY_CRM, CRM); }
      if(d.food){ FOOD = d.food; save(KEY_FOOD, FOOD); }
      if(d.settings){ SETTINGS = d.settings; save(KEY_SET, SETTINGS); }
      renderCRM(); renderLeads(); renderFood();
      $('#backupModal').classList.remove('show');
      toast('数据已恢复');
    }catch(err){ toast('文件格式不对，导入失败'); }
    e.target.value = '';
  };
  fr.readAsText(file);
});

/* ============================================================
   弹窗关闭
   ============================================================ */
$$('[data-close]').forEach(b => b.addEventListener('click', ()=>
  b.closest('.modal').classList.remove('show')));
$$('.modal').forEach(m => m.addEventListener('click', e =>{
  if(e.target === m) m.classList.remove('show');
}));
/* ============================================================
   今日饮食 · 图片识别（按钮 + 手动兜底）
   ============================================================ */
let photoItems = [];
function ensureVisionSettings(){
  if(typeof SETTINGS.visionUrl === 'string') return;
  SETTINGS.visionUrl  = '';
  SETTINGS.visionKey  = '';
  SETTINGS.visionModel = 'gpt-4o-mini';
}
function setupPhoto(){
  ensureVisionSettings();
  const fileInput = $('#foodPhoto');
  const btn = $('#btnPhoto');
  if(!fileInput || !btn) return;
  btn.addEventListener('click', ()=> fileInput.click());
  fileInput.addEventListener('change', e =>{
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => openPhotoModal(reader.result);
    reader.readAsDataURL(file);
    fileInput.value = '';
  });
}
function openPhotoModal(dataUrl){
  const modal = $('#photoModal');
  if(!modal) return;
  photoItems = [];
  $('#photoPreview').src = dataUrl;
  $('#photoFoodList').innerHTML = '';
  $('#photoStatus').textContent = '';
  modal.classList.add('show');
  if(!SETTINGS.visionKey || !SETTINGS.visionUrl){
    $('#photoStatus').textContent = '未配置识别接口，已为你打开手动填写（设置里填 Key 后可启用自动识别）';
    setTimeout(()=>{ modal.classList.remove('show'); $('#btnCustomFood').click(); }, 900);
    return;
  }
  $('#photoStatus').textContent = '识别中…';
  recognizeFood(dataUrl).then(items =>{
    photoItems = items || [];
    if(!photoItems.length){
      $('#photoStatus').textContent = '没识别到明确食物，换个角度或手动添加吧';
      return;
    }
    $('#photoStatus').textContent = `识别到 ${photoItems.length} 样，确认份量后加入：`;
    $('#photoFoodList').innerHTML = photoItems.map((it,i)=>{
      const hit = matchFoodDb(it.name);
      const g = it.grams || (hit ? hit.g : 100);
      const kcal = hit ? Math.round(hit.k * g/100) : Math.round(it.kcal||0);
      return `<div class="pf-item">
        <div class="pf-name">${esc(it.name)} ${hit?`<span class="pf-tag">库匹配</span>`:`<span class="pf-tag warn">估算</span>`}</div>
        <div class="pf-row">
          <input class="input tiny" type="number" min="0" step="0.5" value="${g}" data-g="${i}"> <span>克</span>
          <span class="pf-kcal" id="pfk${i}">≈ ${kcal} kcal</span>
        </div>
        <input type="hidden" id="pfn${i}" value="${esc(it.name)}">
        <input type="hidden" id="pfh${i}" value="${hit?esc(hit.n):''}">
      </div>`;
    }).join('');
    $('#photoFoodList').querySelectorAll('input[data-g]').forEach(inp=>{
      inp.addEventListener('input', ()=>{
        const i = +inp.dataset.g;
        const hitName = $('#pfh'+i).value;
        const hit = hitName ? FOOD_DB.find(f=>f.n===hitName) : null;
        const kcal = hit ? Math.round(hit.k * (parseFloat(inp.value)||0)/100) : (photoItems[i].kcal||0);
        $('#pfk'+i).textContent = '≈ ' + Math.round(kcal) + ' kcal';
      });
    });
  }).catch(err=>{
    $('#photoStatus').textContent = '识别失败：' + (err && err.message ? err.message : '网络或接口问题');
  });
}
function matchFoodDb(name){
  if(!name) return null;
  const n = name.toLowerCase();
  let hit = FOOD_DB.find(f => f.n.toLowerCase() === n);
  if(hit) return hit;
  hit = FOOD_DB.find(f => n.indexOf(f.n.toLowerCase())>=0 || f.n.toLowerCase().indexOf(n)>=0);
  return hit || null;
}
async function recognizeFood(dataUrl){
  const resp = await fetch(SETTINGS.visionUrl, {
    method:'POST',
    headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer '+SETTINGS.visionKey },
    body: JSON.stringify({
      model: SETTINGS.visionModel || 'gpt-4o-mini',
      messages:[{ role:'user', content:[
        { type:'text', text:'请识别图片中的食物，返回 JSON 数组，每项含 name(中文食物名)、grams(估算克数)、kcal(估算热量)。只返回 JSON，不要多余解释。' },
        { type:'image_url', image_url:{ url: dataUrl } }
      ]}]
    })
  });
  if(!resp.ok) throw new Error('HTTP '+resp.status);
  const data = await resp.json();
  const text = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
  const m = text.match(/\[[\s\S]*\]/);
  return m ? JSON.parse(m[0]) : [];
}
function setupVisionSettings(){
  const btn = $('#btnVisionSettings');
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    ensureVisionSettings();
    $('#vsUrl').value  = SETTINGS.visionUrl || '';
    $('#vsKey').value  = SETTINGS.visionKey || '';
    $('#vsModel').value= SETTINGS.visionModel || 'gpt-4o-mini';
    $('#visionModal').classList.add('show');
  });
  $('#btnSaveVision').addEventListener('click', ()=>{
    SETTINGS.visionUrl   = $('#vsUrl').value.trim();
    SETTINGS.visionKey   = $('#vsKey').value.trim();
    SETTINGS.visionModel = $('#vsModel').value.trim() || 'gpt-4o-mini';
    save(KEY_SET, SETTINGS);
    $('#visionModal').classList.remove('show');
    toast(SETTINGS.visionKey ? '识别接口已保存，上传图片即可自动识别' : '已清空，图片识别将退回手动');
  });
  $('#btnAddPhotoFood').addEventListener('click', ()=>{
    const items = $$('.pf-item', $('#photoFoodList'));
    let added = 0;
    items.forEach((el)=>{
      const i = +$('input[data-g]', el).dataset.g;
      const name = $('#pfn'+i).value;
      const hitName = $('#pfh'+i).value;
      const grams = parseFloat($('input[data-g]', el).value) || 0;
      if(!name || !grams) return;
      const hit = hitName ? FOOD_DB.find(f=>f.n===hitName) : null;
      let item;
      if(hit){
        const r = grams/100;
        item = { id: uid(), meal:$('#foodMeal').value, name:hit.n, desc:grams+' g',
          kcal:hit.k*r, p:hit.p*r, f:hit.f*r, c:hit.c*r };
      } else {
        item = { id: uid(), meal:$('#foodMeal').value, name, desc:'图片估算 '+grams+' g',
          kcal: Math.round(photoItems[i] ? (photoItems[i].kcal||0) : 0), p:0, f:0, c:0 };
      }
      FOOD[foodDate] = todayList().concat(item); added++;
    });
    if(added){ save(KEY_FOOD, FOOD); renderFood(); }
    $('#photoModal').classList.remove('show');
    toast(added ? `已加入 ${added} 样食物` : '没有可加入的食物');
  });
}

document.addEventListener('keydown', e =>{
  if(e.key === 'Escape') $$('.modal.show').forEach(m => m.classList.remove('show'));
});

/* ============================================================
   启动
   ============================================================ */
function init(){
  const now = new Date();
  const wd = ['周日','周一','周二','周三','周四','周五','周六'][now.getDay()];
  $('#todayStr').textContent = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${wd}`;
  $('#updatedAt').textContent = (INTEL.updatedAt || '').slice(5) || '—';

  fillStageSelects();
  renderPulse(); renderRankings(); renderEvents(); renderAgencyIntel();
  renderPolicies(); renderLeads(); renderCRM();
  renderXHS();
  renderFood();
  setupPhoto(); setupVisionSettings();

  // 逾期跟进提醒
  const due = CRM.filter(c => c.next && daysBetween(ymd(new Date()), c.next) <= 0);
  if(due.length) setTimeout(()=> toast(`有 ${due.length} 位客户今天该跟进了`), 800);
}
init();

/* 给云同步模块用：数据从云端合并下来后，重新读取并刷新界面 */
window.JILL_APP = {
  refresh(){
    CRM      = load(KEY_CRM, []);
    FOOD     = load(KEY_FOOD, {});
    SETTINGS = load(KEY_SET, { goal: 1500 });
    XHS_MATERIALS = load(KEY_XHS, []);
    renderLeads(); renderCRM(); renderFood(); renderAgencyIntel(); renderXHS();
  }
};

})();
