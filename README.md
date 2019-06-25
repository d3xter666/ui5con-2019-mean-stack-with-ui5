# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

Here we'll build a basic page with the new  [sap.f.GridContainer](https://sapui5.hana.ondemand.com/#/api/sap.f.GridContainer) layout and would put a simple [sap.f.Card](https://sapui5.hana.ondemand.com/#/api/sap.f.Card) in it.

At the top of the page there would be some controls which we'll use later (when we integrate backend with the frontend) to filter the results.

There's also a simple [config](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/04_1_switch_to_typescript...05_frontend_main_view#diff-d342f56f7c37b869624cd6d9a66cb2dd) file which holds filters' default selections and values. 

#### Modified Files in this step

- :small_orange_diamond: [```webapp/controller/View1.controller.ts```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/04_1_switch_to_typescript...05_frontend_main_view#diff-3844c0d509dc360fa3e6fa72c04a8c43)
- :small_orange_diamond: [``` webapp/i18n/i18n.properties ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/04_1_switch_to_typescript...05_frontend_main_view#diff-e42b9708d5f54a64844854bda1f17af2)
- :new: [``` webapp/i18n/i18n_en_US.properties ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/04_1_switch_to_typescript...05_frontend_main_view#diff-7ab87daa4022aaa11e930b8ca9393acf)
- :small_orange_diamond: [``` webapp/manifest.json ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/04_1_switch_to_typescript...05_frontend_main_view#diff-b1bdec94bfccfdfade7639fdc328fd97)
- :new: [``` webapp/model/config.json ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/04_1_switch_to_typescript...05_frontend_main_view#diff-d342f56f7c37b869624cd6d9a66cb2dd)
- :small_orange_diamond: [``` webapp/view/View1.view.xml ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/04_1_switch_to_typescript...05_frontend_main_view#diff-7d16669b9b015ff9210f8b6c920cc927)
- :new: [``` webapp/view/fragments/UserInfo.fragment.xml ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/04_1_switch_to_typescript...05_frontend_main_view#diff-9de42b413dbbbdd5539130da9eb94c95)


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/04_1_switch_to_typescript...05_frontend_main_view)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/06_frontend_mock_data)
