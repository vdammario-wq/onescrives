// Service worker voor OneScrIVES
// Verhoog CACHE_VERSIE bij elke nieuwe release zodat gebruikers de update krijgen.
const CACHE_VERSIE = 'onescrives-v1';

const TE_CACHEN = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installeren: bestanden in de cache zetten
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSIE).then(cache => cache.addAll(TE_CACHEN))
  );
  self.skipWaiting();
});

// Activeren: oude caches opruimen
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(namen =>
      Promise.all(
        namen.filter(naam => naam !== CACHE_VERSIE)
             .map(naam => caches.delete(naam))
      )
    )
  );
  self.clients.claim();
});

// Ophalen: eerst netwerk, val terug op cache (network-first)
// Zo zien gebruikers altijd de nieuwste versie als ze online zijn,
// en blijft de app werken zonder internet.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(respons => {
        const kopie = respons.clone();
        caches.open(CACHE_VERSIE).then(cache => cache.put(event.request, kopie));
        return respons;
      })
      .catch(() => caches.match(event.request).then(r => r || caches.match('./index.html')))
  );
});
