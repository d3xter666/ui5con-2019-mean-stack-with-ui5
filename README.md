# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

In this step we'll enhance our application by providing content to the ``sap.f.Card``.

We'll also use a mocked data (a json file) to display some information in the card.

The information in the mocked json would allow us to bind to the GridContainer and reveal more than one card.

#### Download the assets

- [``webapp/assets/images/avatar.svg``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/assets/images/avatar.svg)
- [`` webapp/assets/images/graduation.svg ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/assets/images/graduation.svg)
- [`` webapp/assets/images/logo-big.png ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/assets/images/logo-big.png)
- [`` webapp/assets/images/logo-small.png ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/assets/images/logo-small.png)
- [`` webapp/assets/images/logo.svg ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/assets/images/logo.svg)
- [`` webapp/assets/images/manager.svg ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/assets/images/manager.svg)
- [`` webapp/assets/images/manager_1.svg ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/assets/images/manager_1.svg)
- [`` webapp/assets/images/user.svg ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/assets/images/user.svg)
- [`` webapp/assets/images/woman.svg ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/assets/images/woman.svg)
- [`` webapp/model/data/mock-data.json ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/model/data/mock-data.json)
- [`` webapp/model/user-meta.json ``](https://raw.githubusercontent.com/d3xter666/ui5con-2019-mean-stack-with-ui5/00c6135372ef0247233d9aa5d1fa06ef04a84c38/webapp/model/user-meta.json)

#### Modified Files in this step

- :small_orange_diamond: [```webapp/manifest.json```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/05_frontend_main_view...06_frontend_mock_data#diff-b1bdec94bfccfdfade7639fdc328fd97)
- :small_orange_diamond: [``` webapp/view/View1.view.xml ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/05_frontend_main_view...06_frontend_mock_data#diff-7d16669b9b015ff9210f8b6c920cc927)
- :new: [``` webapp/view/fragments/UserDisplay.fragment.xml ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/05_frontend_main_view...06_frontend_mock_data#diff-8273dda6b30a149d8fb9c570b063c686)
- :small_orange_diamond: [``` webapp/view/fragments/UserInfo.fragment.xml ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/05_frontend_main_view...06_frontend_mock_data#diff-9de42b413dbbbdd5539130da9eb94c95)


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/05_frontend_main_view...06_frontend_mock_data)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/07_frontend_CRUD_mocked)
