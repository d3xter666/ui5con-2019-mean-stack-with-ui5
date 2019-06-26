# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps


In this step we'll build our GraphQL server on top of NodeJS + Express.
When you finish it, you'll have running GrpahQL server available at: [`` http://localhost:8080/graphql ``](http://localhost:8080/graphql).

Now the server would be responsible for the GraphQL requests as well as serving the static content (02_simple_static_server step).

GraphQL comes with a built-in Web Client. When you're ready with this step, you could explore it at [`` http://localhost:8080/graphql ``](http://localhost:8080/graphql)

**Note:** This is just the GraphQL server and it's still not integrated with any percistency storage. In the next step (which is optional, if you don't have MongoDB installed on your system), we'll integrate GraphQL with MongoDB.

Although GraphQL is still not integrated with MongoDB, you would get results when do a query. This is because the ``resolver`` is made to use a mocked json file. It's (almost) the same json that we used in the frontend. 

#### GraphQL

There are several interesting points when we're exploring GraphQL: types, resolvers and the mapping between them.

##### GraphQL Types

All GraphQL structures and queries have types and should be described somewhere. In out project, it's handled in ``` backend/graphql/types/Record/index.js ```.

What's interesting here is that we have the structure of a type "Record" and all the queries that we could do with it.

There are several types of queries in GraphQL and we'll use ``Query`` and ``Mutation`` in our project.

The ``Query`` query fetches records from GraphQL. You could think of it as a way of getting data.

``Mutation`` queries are meant to be used for data modifications.

##### GraphQL Resolvers

The resolvers in our project are located in ``` backend/graphql/resolvers/Record/index.js ```.

You could easily see that resolvers mimic the structure defined in types. In other words, we have the following type defintion:

```
...
  type Mutation {
    addRecord(id: Int, avatar: String, title: String, first_name: String, last_name: String, job_title: String, email: String, company: String, department: String, languages: [String], university: String, self_decription: String, skills: [String]): Record
...
```

on which we could execute the following query (mutation)

```
mutation{
  addRecord(id: 32, first_name:"John", last_name:"Doe") {
    id, first_name
  }
}
```

GraphQL would call for you ``Mutation.addRecord()`` method from ``` backend/graphql/resolvers/Record/index.js ```.
The ``args`` parameter would be a JSON object with the data provided in the query ``{id: 32, first_name:"John", last_name:"Doe"}``

You might be wondering why we provide some field names within the curly braces. That's how we request from GraphQL certain fields.
This is one of the greatest benefits on using GraphQL over REST- you could manage the valume of data returned. This functionality comes out of the box.
So, in the query above we'll add a Record and the response would return Record's ``id`` and ``first_name`` fields.


#### Download the assets

- [``backend/mock-data/data.js ``]()

#### Modified Files in this step

- :small_orange_diamond: [``` backend/index.js ```]()
- :new: [``` backend/graphql/index.js ```]()
- :new: [``` backend/graphql/types/index.js ```]()
- :new: [``` backend/graphql/types/Record/index.js ```]()
- :new: [``` backend/graphql/resolvers/index.js ```]()
- :new: [``` backend/graphql/resolvers/Record/index.js ```]()


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/07_frontend_CRUD_mocked...08_backend_graphql)

---
- [Next Step](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/tree/09_graphql_mongo_integration_OPTIONAL)
