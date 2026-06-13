const CACHE = "word-repeater-v1";
const FILES = ["/Word-Repeater-/", "/Word-Repeater-/index.html", "/Word-Repeater-/manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
