# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Optional Step

This step is optional. If you don't have MognoDB installed on your system, you might skip it.

If you have a Docker instance running, you could build a MongoDB container with the following command:

```bash
docker run -d -p 27017:27017 --name ui5-mongodb mongo:3.4
```

## Steps

Here we would integrate MongoDB within the GraphQL server. That way we'll have a real percistency of the data.

For managing MongoDB queries we'll use Mongoose. It's an ORM layer on top of MongoDB native driver. It supports schemas and types.

The Mongoose schema is described in ``` backend/models/Records.js ```. As you could see it's similar to the GraphQL type that we defined earlier, but it's in JSON format.

There's also a simple script ``` backend/mock-data/import-data.js ``` which would import the mocked data defined in ``` backend/mock-data/data.js ```. That way it'd be easier to start exploring. Data gets imported automatically to MongoDB when you start the server. If you restart it, data won't be overwritten.

The real integration is within the ``` backend/graphql/resolvers/Record/index.js ```. As we saw earlier, there are the methods that would be called on GraphQL query. So, we're just proxying the call to the Mongoose and it writes to MongoDB.

When you finish this task, you could open [``http://localhost:8080/graphql``](http://localhost:8080/graphql) and play around. Try to restart the server and check that the data is actually saved.

#### Modified Files in this step

- :small_orange_diamond: [``` backend/index.js ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/08_backend_graphql...09_graphql_mongo_integration_OPTIONAL#diff-88c27a1520c87d0681d9900173d92c57)
- :small_orange_diamond: [``` backend/graphql/resolvers/Record/index.js ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/08_backend_graphql...09_graphql_mongo_integration_OPTIONAL#diff-07df6d57fc733795bb85dbab1fb3738d)
- :new: [``` backend/mock-data/import-data.js ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/08_backend_graphql...09_graphql_mongo_integration_OPTIONAL#diff-7fb506934c2ac9452e704aebbe77e90c)
- :new: [``` backend/models/Record.js ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/08_backend_graphql...09_graphql_mongo_integration_OPTIONAL#diff-be8cebb21875ac05d70f564e77a457ff)


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/08_backend_graphql...09_graphql_mongo_integration_OPTIONAL)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/10_integarate_frontend_with_backend)
