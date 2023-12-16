const CACHE_NAME = 'burn-data-bi-v2';
const urlsToCache = [
  '/',
  'index.html',
  'styles.css',
  'script.js',
  'manifest.json',
  'icon.png',
  'dashboards.png',
  'eu.jpeg',
  'https://i.ibb.co/M1vsdLt/LEo.png',
  'https://i.ibb.co/SVShyz4/aucelio.png',
  // Adicione outros recursos que você deseja cache aqui
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
