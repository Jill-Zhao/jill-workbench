/* Jill 工作台 Service Worker */
const CACHE = 'jill-v4';
// 纯静态壳资源：缓存优先（升级时改 CACHE 名即可强制刷新）
const SHELL = [
  './assets/style.css',
  './assets/app.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './manifest.webmanifest'
];
// 每天会变的数据文件：网络优先，离线才回缓存
const DATA = [
  './data/intel.js',
  './data/xiaohongshu.js',
  './data/lead-history.js',
  './data/lead-exclude.js',
  './data/food-db.js'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

function isHTML(req) {
  return req.mode === 'navigate' ||
    new URL(req.url).pathname.endsWith('.html') ||
    new URL(req.url).pathname.endsWith('/jill-workbench/') ||
    new URL(req.url).pathname.endsWith('/jill-workbench');
}

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // 跨域/非 GET 直接放行
  if (e.request.method !== 'GET' || !url.origin.includes(self.location.origin)) {
    return;
  }
  const path = url.pathname;

  // HTML 页面（含根路径）：永远网络优先，防止菜单/结构不更新
  if (isHTML(e.request)) {
    e.respondWith(
      fetch(e.request).then(r => {
        const clone = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return r;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // 数据文件：网络优先
  if (DATA.some(d => path.endsWith(d.replace('./', '')))) {
    e.respondWith(
      fetch(e.request).then(r => {
        const clone = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return r;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // 壳资源：缓存优先
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).then(r => {
        const clone = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return r;
      })
    )
  );
});
