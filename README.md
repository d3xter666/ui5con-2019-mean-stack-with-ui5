# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

In this step we'll integrate frontend with the backend.

As we'll hit the backend via GraphQL queries, we'll need to build a fronetend GraphQL client. in therms of UI5, it would be a GraphQL model.
The interesting part here is that we don't need to build it from scratch, but enhance the JSONModel with a new method ``query``.

And it's simple as that!

The ``query`` method would use browser's ``fetch`` API, so we could later (when making our app a PWA) cache the requests. There are also some details, like CORS enablement and that GraphQL works over ``POST``.

We'd need to alter the App's controller, so all the changes that we're doing on the screen, would be sent to the backend.

There would be also a slight (but very interesting) modification over the ``` webapp/view/fragments/UserDisplay.fragment.xml ``` which would allow us to display only the fields that we requested from GraphQL.

When done with that step, open the application at [`` http://localhost:8080/ ``](http://localhost:8080/), open browser's DevTools Network tab and start investigating the ``/graphql`` ``POST`` query.

As all the buttons across the app are fully functional, try different configurations and again inspect the Network in DevTools.   
   

#### Modified Files in this step

- :small_orange_diamond: [``` webapp/controller/View1.controller.ts ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/09_graphql_mongo_integration_OPTIONAL...10_integarate_frontend_with_backend#diff-3844c0d509dc360fa3e6fa72c04a8c43)
- :small_orange_diamond: [``` webapp/view/View1.view.xml ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/09_graphql_mongo_integration_OPTIONAL...10_integarate_frontend_with_backend#diff-7d16669b9b015ff9210f8b6c920cc927)
- :small_orange_diamond: [``` webapp/view/fragments/UserDisplay.fragment.xml ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/09_graphql_mongo_integration_OPTIONAL...10_integarate_frontend_with_backend#diff-8273dda6b30a149d8fb9c570b063c686)
- :small_orange_diamond: [``` webapp/manifest.json ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/09_graphql_mongo_integration_OPTIONAL...10_integarate_frontend_with_backend#diff-b1bdec94bfccfdfade7639fdc328fd97)
- :new: [``` webapp/model/graphql/GraphQLModel.ts ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/09_graphql_mongo_integration_OPTIONAL...10_integarate_frontend_with_backend#diff-0c01e89dd502c35381b4b85d7e73ee90)


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/09_graphql_mongo_integration_OPTIONAL...10_integarate_frontend_with_backend)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/11_frontend_self_contained_ui5_build)
