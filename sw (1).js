// Service worker mínim, només perquè l'app compleixi els requisits d'instal·lable.
// No cacheja dades: totes les peticions van sempre a la xarxa (les dades reals
// venen sempre de Google Sheets i han de ser fresques).
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request).catch(() => new Response("Sense connexió", { status: 503 })));
});
