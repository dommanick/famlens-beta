const CACHE_NAME = "famlens-shell-v53";
const SHELL_ASSETS = [
  "/",
  "/static/styles.css",
  "/static/app.js",
  "/static/family-health-snapshot-sample.html",
  "/static/manifest.webmanifest",
  "/manifest.json",
  "/site.webmanifest",
  "/static/icon.svg",
  "/static/logo-mark.svg",
  "/static/logo-lockup.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  event.respondWith(
    fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      return response;
    }).catch(() => {
      return caches.match(request).then((cached) => cached || caches.match("/"));
    })
  );
});
