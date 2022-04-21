const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/resources/js/app.js',
    '/resources/css/img/',
    '/resources/css/style.css',
    '/vendors/css/grid.css',
    '/vendors/css/normalize.css',
    '/vendors/css/queries.css',
    '/vendors/js/jquery.js',
    'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap',
    'https://unpkg.com/aos@next/dist/aos.js',
    'https://unpkg.com/aos@next/dist/aos.css',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://unpkg.com/aos@next/dist/aos.js'
];

self.addEventListener('install', evt => {
    //console.log('service worker has been installed')
    evt.waitUntil(
         caches.open(staticCacheName).then(cache =>{
        console.log("Caching shell assets");
        cache.addAll(assets);
    }))
});


self.addEventListener('activate', evt => {
    //console.log('service worker has been activated')
})

self.addEventListener('fetch', evt =>{
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});