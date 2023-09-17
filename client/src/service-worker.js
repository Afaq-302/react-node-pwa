const staticCacheName = 'static-site-v1';
const dynamicCache = 'site-dynamic-v1';

const assets = [
    '/',
    '/app.js',
    '/favicon.ico',
    '/index.html',
    '/fallback.html',
    '/sw.js',
    '/manifest.json',
    '/static/js/main.fcf05910.js',
    '/static/js/bundle.js',
    '/static/css/main.8e48ab8f.css',
    '/icon-192x192.png',
    '/icon-256x256.png',
    '/icon-384x384.png',
    '/icon-512x512.png'
]

//Install service worker
self.addEventListener('install', event => {
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
    event.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys)
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCache)
                .map(key => caches.delete(key))
            )//
        })
    )
})
//Fetch events
self.addEventListener("fetch", event => {
    // console.log("Fetch event", event);
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache => {

                })
            })
        })
    )
});


// self.addEventListener('online', event => {
//     // When the user is online, you can notify them
//     self.registration.showNotification('You are now online');
// });

// self.addEventListener('offline', event => {
//     // When the user is offline, you can notify them
//     self.registration.showNotification('You are now offline');
// });