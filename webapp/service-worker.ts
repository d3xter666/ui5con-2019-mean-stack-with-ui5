const FILES_TO_CACHE: string[] = [
    // Local static resources
    "/",
    // "/index.html",
    "./assets/images/avatar.svg",
    "./assets/images/graduation.svg",
    "./assets/images/logo.svg",
    "./assets/images/manager.svg",
    "./assets/images/manager_1.svg",
    "./assets/images/user.svg",
    "./assets/images/woman.svg",
    "./offline/ui5-pwa.js",
    "./offline/manifest.json",
    "./css/style.css",
    "./manifest.json",

    // Local App: Production
    // "./Component-preload.js",

    // Local App: Development
    "./model/user-meta.json",
    "./model/config.json",
    "./model/models.js",
    "./i18n/i18n.properties",
    "./i18n/i18n_en_US.properties",
    "./Component.js",
    "./libs/ui5con/model/graphql/GraphQLModel.js",
    "./view/View1.view.xml",
    "./controller/View1.controller.js",
    "./view/fragments/UserInfo.fragment.xml",
    "./view/fragments/UserDisplay.fragment.xml",
    "./view/fragments/UserEdit.fragment.xml",


    // UI5 resources
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap-ui-core.js",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/core/library-preload.js",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/core/messagebundle_en_US.properties",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/core/themes/sap_fiori_3/library.css",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap-ui-version.json",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Regular.woff2",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/layout/library-preload.js",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/m/library-preload.js",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/f/library-preload.js",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/layout/messagebundle_en_US.properties",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/f/messagebundle_en_US.properties",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/m/messagebundle_en_US.properties",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/layout/themes/sap_fiori_3/library.css",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/m/themes/sap_fiori_3/library.css",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/f/themes/sap_fiori_3/library.css",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/core/themes/sap_fiori_3/library-parameters.json",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/layout/themes/sap_fiori_3/library-parameters.json",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/m/themes/sap_fiori_3/library-parameters.json",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/f/themes/sap_fiori_3/library-parameters.json",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/core/themes/base/fonts/SAP-icons.woff2",
    "https://sapui5.hana.ondemand.com/1.65.3/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Bold.woff2",
];
const STATIC_CACHE: string = "ui5con-static-cache-v1";
const DATA_CACHE: string = "ui5con-data-cache-v1";

self.addEventListener("install", (event: Event) => {
    // @ts-ignore
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => cache.addAll(FILES_TO_CACHE)),
    );
});

self.addEventListener("activate", (event: Event) => {
    // @ts-ignore
    event.waitUntil(self.clients.claim());

    const cacheWhitelist: string[] = [STATIC_CACHE];

    // @ts-ignore
    event.waitUntil(
        // @ts-ignore
        caches.keys().then((cacheNames: string[]) => Promise.all(
            cacheNames.map((cacheName: string) => {
                if (cacheWhitelist.indexOf(cacheName) === -1) {
                    return caches.delete(cacheName);
                }
            }),
        )),
    );
});

addEventListener("fetch", (event: Event) => {
    // Data cache
    // @ts-ignore
    if (event.request.method === "POST" && event.request.url.indexOf("/graphql")) {

        // @ts-ignore
        event.respondWith(
            caches.open(DATA_CACHE).then((cache: Cache) => {
                // @ts-ignore
                return fetch(event.request)
                    .then((response: Response) => {
                        // If the response was good, clone it and store it in the cache.
                        if (response.status === 200) {
                            // @ts-ignore
                            cache.put(event.request.url, response.clone());
                        }
                        return response;

                    })
                    // Network request failed, try to get it from the cache.
                    // @ts-ignore
                    .catch(() => cache.match(event.request, {ignoreMethod: true, ignoreVary: true}));
            }));

        return;
    }

    // Static assets caching
    // @ts-ignore
    event.respondWith(
        caches.open(STATIC_CACHE).then((cache: Cache) => {
            // @ts-ignore
            return cache.match(event.request).then((response: Response) => {
                // @ts-ignore
                return response || fetch(event.request);
            });
        }),
    );
});
