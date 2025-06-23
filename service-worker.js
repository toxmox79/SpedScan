
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Netzwerk immer bevorzugen
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
