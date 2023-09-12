const staticCacheName = 'static-site'
const assets = [
    '/',
    '/app.js',
    '/favicon.icon',
    '/index.html',
    '/sw.js',
    '/manifest.json',
    '/static/js/main.fcf05910.js',
    '/static/css/main.8e48ab8f.css',
    '/static/js/bundle.js',
    '/icon-192x192.png',
    '/icon-256x256.png',
    '/icon-384x384.png',
    '/icon-512x512.png'
]


//Install service worker
self.addEventListener('install', event => {
    // console.log('Service worker installed!')s
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('Caching shell assets');
            cache.addAll(assets)
        })
    )
});

//Activate event
self.addEventListener("activate", event => {
    // console.log("Service worker has been activated!")
})

//Fetch events
self.addEventListener("fetch", event => {
    // console.log("Fetch event", event);
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request)
        })
    )

})