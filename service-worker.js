const CACHE_NAME = 'site-cache-v1747312297';
const ASSETS = [
    './',
    './index.html',
    './global.css',
    './index.css',
    './loadHeaderFooter.js',
    './manifest.json',
    './favicon.ico',
    './favicon-192x192.png',
    './favicon-512x512.png',
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())    // <- activate right away
    );
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(k => k !== CACHE_NAME)
                    .map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())     // <- take control of pages
    );
});


self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(cached => cached || fetch(event.request))
    );
});
