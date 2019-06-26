# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

In this step we'll slightly make a transition from plain JS to TypeScript.

As TypeScript is a superset of JavaScript, it's perfectly fine to start by changing all JS files extensions from ``.js`` to ``.ts``.

**Task:** Rename all ``.js`` files to ``.ts``

If you run TSLint checks ```npm run frontend:tslint``` it'd fail.

But if you try to compile the files ``npm run frontend:ts_compile``, the compilation would finish successfully. And the result would be exactly the same files, but with ``.js`` extension.

Because we switched to TypeScript, we won't need ``.js`` files to be tracked by Git. They would be just a result of the build. So, we'd add few lines, ignoring files with ``.js`` extension in our project.

#### Modified Files in this step

- :small_orange_diamond: [```.gitignore```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/03_frontend_typescript_configurations...04_frontend_switch_to_typescript#diff-a084b794bc0759e7a6b77810e01874f2)
- :x: [```webapp/Component.js```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/03_frontend_typescript_configurations...04_frontend_switch_to_typescript#diff-277e8143a585951bea531be6a6f5bc6c)
- :new: [```webapp/Component.ts```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/03_frontend_typescript_configurations...04_frontend_switch_to_typescript#diff-bb94977854ee0b590bc7d86c5a8a718d)

- :x: [``` webapp/controller/View1.controller.js ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/03_frontend_typescript_configurations...04_frontend_switch_to_typescript#diff-20200b8df03d11b32f8beb841a234b4b)
- :new: [``` webapp/controller/View1.controller.ts ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/03_frontend_typescript_configurations...04_frontend_switch_to_typescript#diff-3844c0d509dc360fa3e6fa72c04a8c43)

- :x: [``` webapp/model/models.js ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/03_frontend_typescript_configurations...04_frontend_switch_to_typescript#diff-fd5660de3aecee8c5e28d76a9cf8842c)
- :new: [``` webapp/model/models.ts ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/03_frontend_typescript_configurations...04_frontend_switch_to_typescript#diff-dc797b2b3f470fec76fd96e2f85c9fe5)


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/03_frontend_typescript_configurations...04_frontend_switch_to_typescript)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/04_1_switch_to_typescript)
