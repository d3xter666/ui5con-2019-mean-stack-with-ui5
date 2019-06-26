# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

Introduce a Service Worker.

The Service Worker would enable our application to cache certain resources. In this case, we'd cache all the static assets and the GraphQL request. This would make our application available offline, if the network goes down.

There are 3 Service Worker events which we'd use:
- ``install`` Caches all the static assets
- ``activate`` Invalidates the cache
- ``fetch`` Intercepts GraphQL requests and caches them. In case of network fail, serves from the cache.

#### Modified Files in this step


- :small_orange_diamond: [```webapp/index.html ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/12_pwa_manifest...13_pwa_service_worker#diff-993d50876f35e232013fe86cdcef31f2)
- :new: [``` webapp/offline/ui5-pwa.ts ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/12_pwa_manifest...13_pwa_service_worker#diff-7fe03adc6156e44535c578eacddf05f6)
- :new: [``` webapp/service-worker.ts ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/12_pwa_manifest...13_pwa_service_worker#diff-bc97ac5b88926d76d5512b2c18a07f30)


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/12_pwa_manifest...13_pwa_service_worker)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/14_pwa_make_app_installable)
