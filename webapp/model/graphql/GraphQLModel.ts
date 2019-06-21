sap.ui.define(["sap/ui/model/json/JSONModel"], (JSONModel) => {
    "use strict";

    const GraphQLModel = JSONModel.extend("ui5con2019.model.graphql.GraphQLModel", {});

    GraphQLModel.prototype.query = function(url: string, query: string, updateModel: boolean = true): Promise<any> {
        return fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({query}),
        })
            .then((response: Response) => response.json(), (err: any) => {
                this.fireRequestFailed(err);

                throw new Error(err);
            })
            .then((response: any) => {
                const data = response.data;

                if (updateModel) {
                    this.setData(data);
                }
                this.fireRequestCompleted();

                return data;
            });
    };

    return GraphQLModel;
});
