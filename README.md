# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that IU5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

In this step we'll build a static NodeJS web server to serve the content in ```/webapp``` folder.

We'll also need to change UI5 bootstrap link in ```/webapp/index.html``` to point to the CDN.

#### Modified Files in this step

-  :new: [```backend/index.js```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/01_configure_project_dependencies...02_simple_static_server#diff-88c27a1520c87d0681d9900173d92c57)
- :small_orange_diamond: [``` webapp/index.html```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/01_configure_project_dependencies...02_simple_static_server#diff-993d50876f35e232013fe86cdcef31f2)
- :small_orange_diamond: [```package.json```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/01_configure_project_dependencies...02_simple_static_server#diff-b9cfc7f2cdf78a7f4b91a753d10865a2)

[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/01_configure_project_dependencies...02_simple_static_server)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/03_frontend_typescript_configurations)
