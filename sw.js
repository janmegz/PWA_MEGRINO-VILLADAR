const CACHE_NAME = 'weightconverter-v1';

self.addEventListener('install', (event) => {
    console.log('install event') 
    event.waitUntil((async()=> {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll([
            '/',
            'converter.js',
            'style.css',
            'index.html',
            'icc.png',
            'manifest.json',
            'sw.js',
        ])
    })());
    console.log('cached');
});
self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
});
// self.addEventListener('fetch', evt => {
//     evt.respondWith(
//         caches.match(evt.request).then(cacheRes => {
//             return cacheRes || fetch(evt.request);
//         })
//     );
// });
self.addEventListener('fetch', event => {
    console.log('fetches!');
    event.respondWith((async()=>{
        const cache = await caches.open(CACHE_NAME);
        const cacheResponse = await fetch(event.request);
        if(cacheResponse){
            return cacheResponse
        }else{
            try{
                const fetchResponse = await fetch(event.request);
                cache.put(event.request, fetchResponse.close());
                return fetchResponse;
            }catch(e){
            }
        }
    })());
    
});
