const FILES_TO_CACHE = [
	"./index.html"
  ],
  CACHE_NAME = "static-cache" + new Date().getTime();
  CACHE_CONTAINING_ERROR_MESSAGES = "offline-static-cache"

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
		return cache.addAll(FILES_TO_CACHE);
		})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim());

	const cacheWhitelist = [CACHE_NAME];

	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
			cacheNames.map(cacheName => {
				if (cacheWhitelist.indexOf(cacheName) === -1) {
				return caches.delete(cacheName);
				}
			})
			);
		})
	);
});

addEventListener('fetch', function(event) {
	event.respondWith(
	  caches.match(event.request)
		.then(function(response) {
		  if (response) {
			return response;     // if valid response is found in cache return it
		  } else {
			return fetch(event.request)     //fetch from internet
			  .then(function(res) {
				return caches.open(CACHE_NAME)
				  .then(function(cache) {
					cache.put(event.request.url, res.clone());    //save the response for future
					return res;   // return the fetched data
				  })
			  })
			  .catch(function(err) {       // fallback mechanism
				return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
				  .then(function(cache) {
					return cache.match("../offline/offline.html");
				  });
			  });
		  }
		})
	);
});
