# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

Make app installable.

In this step we'll see how we could install our application. Along with a proper caching, this could make our application fully functional even online.

We'll adjust the View by adding a button which would be hidden by default. In the controller we'd subscribe to ``beforeinstallprompt`` event, which is fired only when the application is not installed. This would allow us to get the install prompt and enable the install button at the top right corner.

#### Modified Files in this step


- :small_orange_diamond: [```webapp/controller/View1.controller.ts ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/13_pwa_service_worker...14_pwa_make_app_installable#diff-3844c0d509dc360fa3e6fa72c04a8c43)
- :small_orange_diamond: [```webapp/service-worker.ts ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/13_pwa_service_worker...14_pwa_make_app_installable#diff-bc97ac5b88926d76d5512b2c18a07f30)
- :small_orange_diamond: [```webapp/view/View1.view.xml ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/13_pwa_service_worker...14_pwa_make_app_installable#diff-7d16669b9b015ff9210f8b6c920cc927)


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/13_pwa_service_worker...14_pwa_make_app_installable)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/15_BONUS_Dockerize_the_app)
