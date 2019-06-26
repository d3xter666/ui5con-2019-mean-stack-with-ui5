# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

In this step we'll do a self contained build with the UI5 Tooling.

Start by generating a UI5 tooling config with the following command:
```bash
ui5 init
```

**Note:** The command above should be executed in the root folder of the application.

We'd update package.json file in order to add build tasks.

Runs the UI5 build:
```bash
npm run frontend:ui5_build
```

Runs the TypeScript Linter, TypeScript Compiler and finally executes the UI5 Build: 
```bash
npm run frontend:build
```

Runs ```npm run frontend:build``` and then starts the backend. 
```bash
npm start
```



The last thing to modify is to change the static server to serve from ``/dist`` folder instead of ``/webapp``. UI5's Build puts all the assets under ``/dist``.

#### Modified Files in this step

- :small_orange_diamond: [``` package.json ```]()
- :small_orange_diamond: [``` backend/index.js ```]()
- :new: [``` ui5.yaml ```]()


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/10_integarate_frontend_with_backend...11_frontend_self_contained_ui5_build)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/12_pwa_manifest)
