const OFFLINE_VERSION = 4.6;
BASE_CACHE_FILES = ["/assets/brand/favicon/android-chrome-192x192.png", "/scss/style.min.css", "/assets/brand/favicon/favicon-16x16.png", "/assets/brand/favicon/favicon-32x32.png"], CACHE_NAME = "offline_4.8", OFFLINE_URL = "/offline/";
self.addEventListener("install", e => {
    e.waitUntil((async() => {
        const e = await caches.open(CACHE_NAME);
        await e.add(new Request("/offline/", {
            cache: "reload"
        })), e.addAll(BASE_CACHE_FILES)
    })())
}), self.addEventListener("activate", e => {
    e.waitUntil((async() => {
        "navigationPreload" in self.registration && await self.registration.navigationPreload.enable()
    })()), self.clients.claim()
}), self.addEventListener("fetch", e => {
    "navigate" === e.request.mode && e.respondWith((async() => {
        try {
            const a = await e.preloadResponse;
            return a || await fetch(e.request)
        } catch (e) {
            console.log("Fetch failed; returning offline page instead.", e);
            const a = await caches.open(CACHE_NAME);
            return await a.match("/offline/")
        }
    })())
});