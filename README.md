# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

Start making our UI5 App a Progressive Web App.

We'll need to define a manifest file. Inside it's just some metadata  like icons, name, colors etc.
As iOS devices do not fully support PWA manifests, we'll need to alter the ``` webapp/index.js ``` by adding several meta tags.

When you're done with that step, you could see if the manifest got defined properly by opening Chrome DevTools, Application tab and Manifest on the left.  

#### Modified Files in this step

- :new: [``` offline/manifest.json ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/11_frontend_self_contained_ui5_build...12_pwa_manifest#diff-cdc8677e38471d6b02d1b3e4181e3029)
- :small_orange_diamond: [``` webapp/index.js ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/11_frontend_self_contained_ui5_build...12_pwa_manifest#diff-993d50876f35e232013fe86cdcef31f2)


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/11_frontend_self_contained_ui5_build...12_pwa_manifest)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/13_pwa_service_worker)
