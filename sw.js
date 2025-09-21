// Service Worker for caching static assets
const CACHE_NAME = 'lemayian-portfolio-v1';
const urlsToCache = [
  '/',
  '/styles/style.min.css',
  '/styles/form.css',
  '/styles/animations.css',
  '/styles/advanced-animations.css',
  '/scripts/performance.js',
  '/scripts/accessibility.js',
  '/scripts/animations.js',
  '/scripts/live-chat.js',
  '/scripts/analytics.js',
  '/index.js',
  '/images/Portrait1.jpg',
  '/images/Isaac_Lemayian.jpg'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
