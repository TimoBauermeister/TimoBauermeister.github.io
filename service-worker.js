const CACHE_NAME = 'site-cache-v2';
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

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cached => cached || fetch(event.request))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );
});
