sap.ui.define(["sap/ui/model/Model"], (Model) => {
    "use strict";

    const GraphQLModel = Model.extend("ui5con.model.graphql.GraphQLModel", {});

    GraphQLModel.prototype.query = function(url: string, query: string): Promise<any> {
        return fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({query}),
        })
            .then((data: any) => {
                this.oData = data;

                this.fireRequestCompleted();

                return data;
            }, (err) => {
                this.fireRequestFailed(err);

                throw new Error(err);
            });
    };

    GraphQLModel.prototype.getData = function(): any {
        return this.oData;
    };

    // @ts-ignore
    GraphQLModel.prototype.setData = function(data: any): ui5con.model.graphql.GraphQLModel {
        this.oData = data;

        return this;
    };

    // tslint:disable-next-line:no-unused-expression
    new GraphQLModel();


    return GraphQLModel;
});
