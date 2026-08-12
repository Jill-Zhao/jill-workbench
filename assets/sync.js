/* ============================================================
   Jill 工作台 · 跨设备同步（免注册版）
   - 中转服务：textdb.dev，无需注册、无需 API key
   - 数据在离开浏览器前用同步码 AES-GCM 加密，服务端只存密文
   - 双向智能合并：客户按条目合并、饮食按日期合并，不会互相覆盖
   - 不填同步码时完全静默，纯本地模式
   ============================================================ */
(function(){
'use strict';

const API      = 'https://textdb.dev/api/data/';
const LS_CFG   = 'jill_sync_cfg_v2';    // { code }
const LS_BASE  = 'jill_sync_base_v2';   // 上次同步成功的快照
const LS_CRM   = 'jill_crm_v1';
const LS_FOOD  = 'jill_food_v1';
const LS_SET   = 'jill_settings_v1';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 去掉易混淆的 I O 0 1

const state = {
  cfg: null,
  status: '未开启',
  busy: false,
  applying: false,
  timer: null,
  aesKey: null,
  aesKeyFor: null,
  lastSync: 0
};

const hasCrypto = !!(typeof crypto !== 'undefined' && crypto.subtle && crypto.getRandomValues);

/* ---------------- 存取 ---------------- */
function loadJSON(k, d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } }
function saveJSON(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }

function getCfg(){ if(!state.cfg) state.cfg = loadJSON(LS_CFG, null); return state.cfg; }
function setCfg(c){ state.cfg = c; if(c) saveJSON(LS_CFG, c); else localStorage.removeItem(LS_CFG); }
function enabled(){ const c = getCfg(); return !!(c && c.code); }

/* ---------------- 编码工具 ---------------- */
const TE = new TextEncoder();
const TD = new TextDecoder();

function bufToB64(buf){
  const bytes = new Uint8Array(buf);
  let s = '';
  for(let i=0;i<bytes.length;i+=0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i+0x8000));
  return btoa(s);
}
function b64ToBuf(b64){
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++) out[i] = bin.charCodeAt(i);
  return out;
}
function hex(buf){
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}
// 无 Web Crypto 时的降级散列（仅用于生成远端 key，不用于加密）
function fallbackHash(str){
  let h1 = 0x811c9dc5, h2 = 0x1000193, h3 = 0x9e3779b9, h4 = 0x85ebca6b;
  for(let i=0;i<str.length;i++){
    const c = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619) >>> 0;
    h2 = Math.imul(h2 + c, 2654435761) >>> 0;
    h3 = ((h3 << 5) - h3 + c) >>> 0;
    h4 = Math.imul(h4 ^ (c + i), 2246822519) >>> 0;
  }
  return [h1,h2,h3,h4].map(x => x.toString(16).padStart(8,'0')).join('').repeat(2).slice(0,40);
}

/* ---------------- 密钥派生 ---------------- */
async function remoteKey(code){
  if(!hasCrypto) return 'jw' + fallbackHash('jill-workbench-remote|' + code);
  const d = await crypto.subtle.digest('SHA-256', TE.encode('jill-workbench-remote|' + code));
  return 'jw' + hex(d).slice(0, 40);
}
async function aesKey(code){
  if(state.aesKey && state.aesKeyFor === code) return state.aesKey;
  const base = await crypto.subtle.importKey('raw', TE.encode(code), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey(
    { name:'PBKDF2', salt: TE.encode('jill-workbench-salt-v2'), iterations: 100000, hash:'SHA-256' },
    base, { name:'AES-GCM', length:256 }, false, ['encrypt','decrypt']
  );
  state.aesKey = key; state.aesKeyFor = code;
  return key;
}

/* ---------------- 信封打包 / 解包 ---------------- */
async function pack(payload, code){
  const json = JSON.stringify(payload);
  if(!hasCrypto){
    return JSON.stringify({ app:'jill-workbench', v:2, enc:'none', data: payload, updatedAt: payload.updatedAt });
  }
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await aesKey(code);
  const ct = await crypto.subtle.encrypt({ name:'AES-GCM', iv }, key, TE.encode(json));
  return JSON.stringify({
    app:'jill-workbench', v:2, enc:'aes',
    iv: bufToB64(iv), data: bufToB64(ct), updatedAt: payload.updatedAt
  });
}
async function unpack(text, code){
  if(!text || !text.trim()) return null;
  let env;
  try{ env = JSON.parse(text); }catch(e){ throw new Error('云端数据格式异常'); }
  if(!env || env.app !== 'jill-workbench') throw new Error('云端数据不属于本工作台');
  if(env.enc === 'none') return env.data || null;
  if(env.enc === 'aes'){
    if(!hasCrypto) throw new Error('当前浏览器不支持解密，请换 Chrome / Edge / Safari');
    try{
      const key = await aesKey(code);
      const pt = await crypto.subtle.decrypt(
        { name:'AES-GCM', iv: b64ToBuf(env.iv) }, key, b64ToBuf(env.data)
      );
      return JSON.parse(TD.decode(pt));
    }catch(e){ throw new Error('同步码不正确，无法解密云端数据'); }
  }
  throw new Error('未知的加密方式');
}

/* ---------------- 网络 ---------------- */
async function remoteGet(code){
  const url = API + await remoteKey(code);
  let res;
  try{ res = await fetch(url, { method:'GET', cache:'no-store' }); }
  catch(e){ throw new Error('连不上同步服务，检查一下网络'); }
  if(!res.ok) throw new Error('读取失败（' + res.status + '）');
  return await res.text();
}
async function remotePut(code, body){
  const url = API + await remoteKey(code);
  let res;
  try{
    res = await fetch(url, { method:'POST', headers:{ 'Content-Type':'text/plain' }, body });
  }catch(e){ throw new Error('连不上同步服务，检查一下网络'); }
  if(!res.ok) throw new Error('上传失败（' + res.status + '）');
  return true;
}

/* ---------------- 本地状态打标 ---------------- */
function emptyState(){
  return { crm:[], crmMeta:{}, crmTomb:{}, food:{}, foodMeta:{}, settings:{goal:1500}, settingsMeta:0, updatedAt:0 };
}
function readBase(){ return loadJSON(LS_BASE, emptyState()); }

function stampLocal(){
  const base = readBase();
  const crm      = loadJSON(LS_CRM, []);
  const food     = loadJSON(LS_FOOD, {});
  const settings = loadJSON(LS_SET, { goal:1500 });
  const t = Date.now();

  const crmMeta = Object.assign({}, base.crmMeta || {});
  const crmTomb = Object.assign({}, base.crmTomb || {});
  const basePrev = {};
  (base.crm || []).forEach(c => { if(c && c.id) basePrev[c.id] = c; });

  const alive = new Set();
  crm.forEach(c => {
    if(!c || !c.id) return;
    alive.add(c.id);
    const prev = basePrev[c.id];
    if(!prev || JSON.stringify(prev) !== JSON.stringify(c)) crmMeta[c.id] = t;
    else if(!crmMeta[c.id]) crmMeta[c.id] = t;
    if(crmTomb[c.id]) delete crmTomb[c.id];   // 本地又有了 → 撤销墓碑
  });
  Object.keys(basePrev).forEach(id => {
    if(!alive.has(id)){ crmTomb[id] = t; delete crmMeta[id]; }  // 本地删掉了 → 立墓碑
  });

  const foodMeta = Object.assign({}, base.foodMeta || {});
  Object.keys(food).forEach(d => {
    const prev = (base.food || {})[d];
    if(!prev || JSON.stringify(prev) !== JSON.stringify(food[d])) foodMeta[d] = t;
    else if(!foodMeta[d]) foodMeta[d] = t;
  });

  let settingsMeta = base.settingsMeta || 0;
  if(JSON.stringify(base.settings || {}) !== JSON.stringify(settings) || !settingsMeta) settingsMeta = t;

  return { crm, crmMeta, crmTomb, food, foodMeta, settings, settingsMeta, updatedAt: t };
}

/* ---------------- 合并 ---------------- */
function mergeStates(a, b){
  a = a || emptyState(); b = b || emptyState();

  // 墓碑：取更晚的删除时间
  const tomb = {};
  [a,b].forEach(s => Object.entries(s.crmTomb || {}).forEach(([id,ts]) => {
    tomb[id] = Math.max(tomb[id] || 0, ts || 0);
  }));

  // 客户：按 id 取修改时间更新的一条
  const byId = {}, meta = {};
  [a,b].forEach(s => {
    (s.crm || []).forEach(c => {
      if(!c || !c.id) return;
      const ts = (s.crmMeta || {})[c.id] || s.updatedAt || 0;
      if(byId[c.id] === undefined || ts > meta[c.id]){ byId[c.id] = c; meta[c.id] = ts; }
    });
  });
  // 墓碑晚于修改 → 真删；修改晚于墓碑 → 复活
  Object.keys(tomb).forEach(id => {
    if(byId[id] !== undefined){
      if(tomb[id] >= (meta[id] || 0)){ delete byId[id]; delete meta[id]; }
      else delete tomb[id];
    }
  });

  // 顺序：以较新的一方为主，另一方独有的追加在后
  const primary   = (a.updatedAt || 0) >= (b.updatedAt || 0) ? a : b;
  const secondary = primary === a ? b : a;
  const list = [], seen = new Set();
  [primary, secondary].forEach(s => (s.crm || []).forEach(c => {
    if(c && c.id && byId[c.id] !== undefined && !seen.has(c.id)){ list.push(byId[c.id]); seen.add(c.id); }
  }));

  // 饮食：按日期取更新的一份
  const food = {}, fmeta = {};
  [a,b].forEach(s => Object.entries(s.food || {}).forEach(([d, arr]) => {
    const ts = (s.foodMeta || {})[d] || s.updatedAt || 0;
    if(food[d] === undefined || ts > fmeta[d]){ food[d] = arr; fmeta[d] = ts; }
  }));

  const useA = (a.settingsMeta || 0) >= (b.settingsMeta || 0);
  return {
    crm: list, crmMeta: meta, crmTomb: tomb,
    food, foodMeta: fmeta,
    settings: (useA ? a.settings : b.settings) || { goal:1500 },
    settingsMeta: Math.max(a.settingsMeta || 0, b.settingsMeta || 0),
    updatedAt: Math.max(a.updatedAt || 0, b.updatedAt || 0)
  };
}

/* ---------------- 落盘 ---------------- */
function applyState(s){
  state.applying = true;
  try{
    saveJSON(LS_CRM,  s.crm      || []);
    saveJSON(LS_FOOD, s.food     || {});
    saveJSON(LS_SET,  s.settings || { goal:1500 });
    saveJSON(LS_BASE, s);
  } finally { state.applying = false; }
  if(window.JILL_APP && typeof window.JILL_APP.refresh === 'function'){
    try{ window.JILL_APP.refresh(); }catch(e){}
  }
}

/* ---------------- 核心：一次完整同步 ----------------
   多次调用会排队串行执行，不会互相顶掉（手动点「立即同步」时尤其重要）*/
let chain = Promise.resolve(false);
function sync(opts){
  chain = chain.then(() => doSync(opts), () => doSync(opts));
  return chain;
}

async function doSync(opts){
  opts = opts || {};
  if(!enabled()){ setStatus('未开启'); return false; }
  state.busy = true;
  setStatus('同步中');
  const code = getCfg().code;
  try{
    const local = stampLocal();
    let cloud = null;
    const raw = await remoteGet(code);
    if(raw && raw.trim()) cloud = await unpack(raw, code);

    const merged = cloud ? mergeStates(local, cloud) : local;
    applyState(merged);

    // 云端和合并结果不一致才上传，省流量
    const needPush = !cloud || JSON.stringify(stripTs(cloud)) !== JSON.stringify(stripTs(merged));
    if(needPush) await remotePut(code, await pack(merged, code));

    state.lastSync = Date.now();
    setStatus('已同步 · ' + timeLabel(state.lastSync));
    if(opts.toast) toast(cloud ? '已和云端合并' : '已上传到云端');
    return true;
  }catch(e){
    setStatus('失败：' + (e && e.message ? e.message : '未知错误'));
    if(opts.toast) toast('同步失败：' + (e && e.message ? e.message : ''));
    return false;
  }finally{ state.busy = false; }
}
function stripTs(s){
  return { crm: s.crm || [], food: s.food || {}, settings: s.settings || {}, crmTomb: s.crmTomb || {} };
}
function schedule(){
  if(!enabled()) return;
  clearTimeout(state.timer);
  state.timer = setTimeout(() => sync().catch(()=>{}), 2500);
}

/* ---------------- 状态显示 ---------------- */
function timeLabel(ts){
  const d = new Date(ts);
  return String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
}
function setStatus(text){
  state.status = text;
  const el = document.getElementById('syncStatusText');
  const dot = document.getElementById('syncStatusDot');
  const badge = document.getElementById('topbarSyncIcon');
  if(el) el.textContent = text;
  if(dot){
    dot.className = 'sync-dot';
    if(text.indexOf('已同步') === 0) dot.classList.add('on');
    else if(text.indexOf('失败') === 0 || text === '未开启') dot.classList.add('off');
    else if(text === '同步中') dot.classList.add('warn');
  }
  if(badge) badge.style.opacity = enabled() ? '1' : '0.45';
}
function toast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ---------------- 生成同步码 ---------------- */
function genCode(){
  const bytes = hasCrypto ? crypto.getRandomValues(new Uint8Array(12))
                          : Array.from({length:12}, () => Math.floor(Math.random()*256));
  let s = '';
  for(let i=0;i<12;i++) s += ALPHABET[bytes[i] % ALPHABET.length];
  return 'MOCHI-' + s.slice(0,4) + '-' + s.slice(4,8) + '-' + s.slice(8,12);
}

/* ---------------- 监听本地改动 ---------------- */
const rawSetItem = localStorage.setItem;
localStorage.setItem = function(key, value){
  rawSetItem.call(this, key, value);
  if(!state.applying && (key === LS_CRM || key === LS_FOOD || key === LS_SET)) schedule();
};

/* ---------------- UI ---------------- */
function buildUI(){
  const tr = document.querySelector('.topbar-right');
  if(tr && !document.getElementById('btnOpenSync')){
    const btn = document.createElement('button');
    btn.id = 'btnOpenSync';
    btn.className = 'btn-ghost btn-icon';
    btn.title = '跨设备同步';
    btn.innerHTML = '<span id="topbarSyncIcon">☁️</span>';
    btn.style.marginLeft = '8px';
    btn.addEventListener('click', openModal);
    tr.appendChild(btn);
  }
  const foot = document.querySelector('.sidebar-foot');
  if(foot && !document.getElementById('sidebarSyncBtn')){
    const b = document.createElement('button');
    b.id = 'sidebarSyncBtn';
    b.className = 'btn-ghost btn-sm';
    b.innerHTML = '☁️ 跨设备同步';
    b.addEventListener('click', openModal);
    foot.appendChild(b);
  }

  if(document.getElementById('syncModal')) return;
  const m = document.createElement('div');
  m.className = 'modal'; m.id = 'syncModal';
  m.innerHTML =
    '<div class="modal-card" style="max-width:540px">' +
      '<div class="modal-head"><h3>☁️ 跨设备同步</h3><button class="modal-x" data-close>×</button></div>' +
      '<div class="modal-body">' +
        '<p class="tip">用一个「同步码」把电脑和手机连起来。客户、饮食、设置会自动互通。<b>不需要注册任何账号</b>，数据上传前已用同步码加密，服务器看不到内容。</p>' +

        '<label class="fld full"><span>同步码</span>' +
          '<input class="input" id="syncCode" placeholder="第一次用请点下面「生成新同步码」" autocomplete="off" spellcheck="false"></label>' +

        '<div class="sync-row">' +
          '<button class="btn-ghost btn-sm" id="btnGenCode">🎲 生成新同步码</button>' +
          '<button class="btn-ghost btn-sm" id="btnCopyCode">📋 复制同步码</button>' +
        '</div>' +

        '<div class="sync-status"><span class="sync-dot" id="syncStatusDot"></span><span id="syncStatusText">未开启</span></div>' +

        '<div class="sync-row">' +
          '<button class="btn-primary" id="btnSyncNow">开启并同步</button>' +
          '<button class="btn-danger" id="btnSyncOff" style="display:none">关闭同步</button>' +
        '</div>' +

        '<p class="tip warn"><b>怎么在手机上用：</b>在电脑上点「生成新同步码」→ 点「复制同步码」→ 微信发给自己 → 手机打开工作台网页 → 点云朵图标 → 粘贴同一个同步码 → 开启并同步。两边就通了。</p>' +
        '<p class="tip">同步码就是你的钥匙，弄丢了云端数据就打不开了。建议存到微信收藏或备忘录里。另外每周点一次侧边栏「备份 / 恢复数据 → 导出」，留一份本地备份最保险。</p>' +
      '</div>' +
      '<div class="modal-foot"><div class="spacer"></div><button class="btn-ghost" data-close>关闭</button></div>' +
    '</div>';
  document.body.appendChild(m);

  m.addEventListener('click', e => { if(e.target === m) m.classList.remove('show'); });
  m.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => m.classList.remove('show')));

  document.getElementById('btnGenCode').addEventListener('click', () => {
    document.getElementById('syncCode').value = genCode();
    toast('已生成，记得点「复制同步码」发给自己');
  });
  document.getElementById('btnCopyCode').addEventListener('click', async () => {
    const v = document.getElementById('syncCode').value.trim();
    if(!v){ toast('先生成一个同步码'); return; }
    try{ await navigator.clipboard.writeText(v); toast('已复制，微信发给自己就能在手机上用'); }
    catch(e){
      const i = document.getElementById('syncCode');
      i.select(); i.setSelectionRange(0, 99999);
      try{ document.execCommand('copy'); toast('已复制'); }catch(_){ toast('复制失败，请手动长按选中'); }
    }
  });
  document.getElementById('btnSyncNow').addEventListener('click', async () => {
    const code = document.getElementById('syncCode').value.trim().toUpperCase();
    if(code.length < 6){ toast('同步码太短，点「生成新同步码」'); return; }
    setCfg({ code });
    state.aesKey = null; state.aesKeyFor = null;
    await sync({ toast:true });
    refreshModal();
  });
  document.getElementById('btnSyncOff').addEventListener('click', () => {
    if(!confirm('关闭后本机不再自动同步，本地数据会保留。确定吗？')) return;
    setCfg(null);
    localStorage.removeItem(LS_BASE);
    state.aesKey = null; state.aesKeyFor = null;
    setStatus('未开启');
    refreshModal();
    toast('已关闭同步');
  });

  window.addEventListener('online',  () => { if(enabled()) sync().catch(()=>{}); });
  window.addEventListener('offline', () => setStatus('失败：设备已离线'));
  document.addEventListener('visibilitychange', () => {
    if(!document.hidden && enabled() && Date.now() - state.lastSync > 20000) sync().catch(()=>{});
  });
}

function refreshModal(){
  const c = getCfg();
  const input = document.getElementById('syncCode');
  const off = document.getElementById('btnSyncOff');
  const now = document.getElementById('btnSyncNow');
  if(!input) return;
  if(c && c.code){
    input.value = c.code;
    if(off) off.style.display = '';
    if(now) now.textContent = '立即同步';
  }else{
    if(off) off.style.display = 'none';
    if(now) now.textContent = '开启并同步';
  }
}
function openModal(){
  refreshModal();
  document.getElementById('syncModal').classList.add('show');
}

/* ---------------- 线索池「共享排除桶」 ----------------
   用途：Jill 在页面里把某公司标记为「不再推送」后，前端立刻写进这个
   共享桶；每日自动化生成新线索前会来读它，保证被排除的公司不会在
   第二天又被推回来。
   注意：这是一个固定、公开的 textdb.dev 键，数据只是「产品|公司」字符串
   （非敏感），故用明文存储，省去加解密，自动化用 node 直接 fetch 即可。 */
const LEAD_EXCL_URL = 'https://textdb.dev/api/data/jill-workbench-lead-exclude-9f3a';

async function pushLeadExclude(key){
  if(!key) return false;
  try{
    let arr = [];
    try{
      const t = await fetch(LEAD_EXCL_URL, { cache:'no-store' }).then(r => r.ok ? r.text() : '');
      if(t && t.trim()){ const p = JSON.parse(t); if(Array.isArray(p)) arr = p; }
    }catch(e){ /* 读不到就当空 */ }
    if(!arr.includes(key)){
      arr.push(key);
      await fetch(LEAD_EXCL_URL, { method:'POST', headers:{ 'Content-Type':'text/plain' }, body: JSON.stringify(arr) });
    }
    return true;
  }catch(e){ return false; }
}
async function pullLeadExclude(){
  try{
    const t = await fetch(LEAD_EXCL_URL, { cache:'no-store' }).then(r => r.ok ? r.text() : '');
    if(!t || !t.trim()) return [];
    const a = JSON.parse(t);
    return Array.isArray(a) ? a : [];
  }catch(e){ return []; }
}

/* ---------------- 对外 API ---------------- */
window.JILL_SYNC = {
  sync, enabled, genCode, pushLeadExclude, pullLeadExclude,
  status: () => state.status,
  getCode: () => (getCfg() || {}).code || null
};

/* ---------------- 启动 ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildUI();
  if(enabled()){ setStatus('同步中'); sync().catch(()=>{}); }
  else setStatus('未开启');
});

})();
