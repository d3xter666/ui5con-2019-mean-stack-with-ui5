# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that IU5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

In this step we'd setup the needed tooling to start coding in TypeScript.

There are several external tools we'd be using:
- [TypeScript](https://www.typescriptlang.org/#download-links)
- [TSLint](https://github.com/palantir/tslint)
- [@openui5/ts-types](https://www.npmjs.com/package/@openui5/ts-types)


##### TypeScript

In our case we've enhanced the TypeScript CLI with a Grunt task, so we'd have that hot/live reloading when certain ``.ts`` file gets modified.
In general the ```grunt-ts``` package wraps TypeScript's CLI and adds some features on top of it.

##### TSLint

This is a static code analysis tool for TypeScript. It gets "automatically" configured by the typescript definitions.
Of course, it could be adjusted to suit your needs.

##### @openui5/ts-types

These are the TS Type definitions for UI5. They provide type information of the internal UI5 classes and structures.

**Note:** Package version should correspond to the UI5 version up to the minor segment. For example, if you need to use type definitions and your application depends on UI5 version ``1.65.6``, then the ``@openui5/ts-types`` package could be ``1.65.*`` 


#### Modified Files in this step

-  :new: [```tslint.json```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/02_simple_static_server...03_frontend_typescript_configurations#diff-ace19bd0c04529e685320269e3c05de9)
-  :new: [```tsconfig.json```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/02_simple_static_server...03_frontend_typescript_configurations#diff-e5e546dd2eb0351f813d63d1b39dbc48)
- :small_orange_diamond: [``` Gruntfile.js```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/02_simple_static_server...03_frontend_typescript_configurations#diff-35b4a816e0441e6a375cd925af50752c)
- :small_orange_diamond: [```package.json```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/02_simple_static_server...03_frontend_typescript_configurations#diff-b9cfc7f2cdf78a7f4b91a753d10865a2)

[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/02_simple_static_server...03_frontend_typescript_configurations)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/04_frontend_switch_to_typescript)
