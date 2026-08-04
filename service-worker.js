/* Jill 工作台 Service Worker */
const CACHE = 'jill-v2';
const SHELL = [
  './',
  './Jill的工作台.html',
  './assets/style.css',
  './assets/app.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './manifest.webmanifest'
];
// 每天会变的「数据文件」走 network-first，离线才回缓存
const DATA = [
  './data/intel.js',
  './data/xiaohongshu.js',
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

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const path = url.pathname;

  // 跨域/非 GET 直接放行
  if (e.request.method !== 'GET' || !url.origin.includes(self.location.origin)) {
    return;
  }

  // 数据文件：网络优先
  if (DATA.some(d => path.endsWith(d.replace('./', '')))) {
    e.respondWith(fetch(e.request).then(r => {
      const clone = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return r;
    }).catch(() => caches.match(e.request)));
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
