self.addEventListener('install', event => {
  console.log('Service Worker: تم التثبيت');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker: تم التفعيل');
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
