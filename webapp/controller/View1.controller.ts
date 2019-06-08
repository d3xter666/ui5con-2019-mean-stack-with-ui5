sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "ui5con/model/graphql/GraphQLModel",
], (
    Controller: sap.ui.core.mvc.Controller,
    Fragment: sap.ui.core.Fragment,
    // @ts-ignore
    GraphQLModel: ui5con.model.graphql.GraphQLModel) => {

    interface IRecord {
        id: number;
        avatar?: string;
        title?: string;
        first_name?: string;
        last_name?: string;
        job_title?: string;
        email?: string;
        company?: string;
        department?: string;
        languages?: string[];
        university?: string;
        self_decription?: string;
        skills?: string[];
    }

    // @ts-ignore
    return Controller.extend("ui5con2019.controller.BaseController", {
        _fragmentsCache: [],
        _dataCache: {},

        onInit(): void {
            this._loadAddNewItem();
        },

        _loadAddNewItem(): void {

//             const request = `{
//     record(id: 5){
//       id, first_name, last_name, email
//     }
// }`;
//             let oModel: object;
//             oModel = new GraphQLModel();
//
//             this.getView().setModel(oModel)
//
//             // @ts-ignore
//             oModel.query("http://localhost:4000/graphql", request).then((data) => {
//                 console.log("zzzz", data);
//             });
        },

        handleNewItemPress(): void {
            let data: object[];
            const oModel: sap.ui.model.json.JSONModel = this.getView().getModel();

            data = JSON.parse(oModel.getJSON());

            const newRecord: IRecord = {id: this._generateId(data)};
            data.unshift(newRecord);
            oModel.setData(data);

            const container: sap.m.VBox = this.getView().byId("gridLayout").getItems()[0].getContent();
            this._replaceFragment(container, "UserEdit");
        },

        handleEditRecord(event: sap.ui.base.Event): void {
            const sourceCtrl: sap.ui.core.Control = event.getSource() as sap.ui.core.Control;
            const container: sap.m.VBox = sourceCtrl.getParent().getParent() as sap.m.VBox;
            const recordId: number = this._extractId(container);
            const data: IRecord = this._extractData(recordId);

            // Copy object the ES5 way
            this._dataCache[recordId] = JSON.parse(JSON.stringify(data));

            this._replaceFragment(container, "UserEdit");
        },

        handleCancelEdit(event: sap.ui.base.Event): void {
            const sourceCtrl: sap.ui.core.Control = event.getSource() as sap.ui.core.Control;
            const container: sap.m.VBox = sourceCtrl.getParent().getParent() as sap.m.VBox;
            const recordId: number = this._extractId(container);
            const recordToRestore: IRecord = this._dataCache[recordId];
            const oModel: sap.ui.model.json.JSONModel = this.getView().getModel();
            const data: IRecord[] = JSON.parse(oModel.getJSON());
            const indexToReplace = data.map((r: IRecord) => r.id).indexOf(recordId);

            if (indexToReplace > -1 && recordToRestore) {
                data.splice(indexToReplace, 1, recordToRestore);
                oModel.setData(data);
            }

            this._replaceFragment(container, "UserDisplay");
        },

        handleSaveRecord(event: sap.ui.base.Event): void {
            const sourceCtrl: sap.ui.core.Control = event.getSource() as sap.ui.core.Control;
            const container: sap.m.VBox = sourceCtrl.getParent().getParent() as sap.m.VBox;
            const recordId: number = this._extractId(container);
            const data: IRecord = this._extractData(recordId);

            this._persistData(data);

            this._replaceFragment(container, "UserDisplay");
        },

        handleDeleteRecord(event: sap.ui.base.Event): void {
            const sourceCtrl: sap.ui.core.Control = event.getSource() as sap.ui.core.Control;
            const container: sap.m.VBox = sourceCtrl.getParent().getParent() as sap.m.VBox;
            const recordId: number = this._extractId(container);
            const oModel: sap.ui.model.json.JSONModel = this.getView().getModel();
            const data: IRecord[] = JSON.parse(oModel.getJSON());
            const indexToReplace = data.map((r: IRecord) => r.id).indexOf(recordId);

            if (indexToReplace > -1) {
                data.splice(indexToReplace, 1);
                oModel.setData(data);
            }

            this._persistData(data, "D");
        },

        _replaceFragment(source: sap.m.VBox, fragmentName: string): void {
            source.removeAllItems();

            // @ts-ignore
            return Fragment.load({
                controller: this,
                id: this.getView().getId(),
                name: "ui5con2019.view.fragments." + fragmentName,
                type: "XML",
            }).then((controls: sap.ui.core.Control[]) => {
                controls.forEach((ctrl: sap.ui.core.Control) => source.addItem(ctrl));
            });
        },

        _generateId(data: object[]): number {
            const sortedIds: number[] = data
                .map((record: IRecord) => record.id)
                .sort((a: number, b: number) => {
                    return a >= b ? -1 : 1;
                });

            return sortedIds[0] + 1;
        },

        _extractId(container: sap.m.VBox): number {
            let id = -1;
            const hiddenEl: sap.ui.core.Control = container.getItems()[0];
            let invisibleText: sap.ui.core.InvisibleText;

            if (hiddenEl.isA("sap.ui.core.InvisibleText")) {
                invisibleText = hiddenEl as sap.ui.core.InvisibleText;
                id = parseInt(invisibleText.getText(), 10);
            }

            return id;
        },

        _extractData(recordId: number): IRecord {
            const oModel: sap.ui.model.json.JSONModel = this.getView().getModel();
            const data = JSON.parse(oModel.getJSON());
            const record: IRecord = data.filter((curRecord: IRecord) => curRecord.id === recordId)[0];

            return record || null;
        },

        _persistData(data: object, action?: string): void {
            // TODO: Do a GRAPHQL request
        },
    });
});
