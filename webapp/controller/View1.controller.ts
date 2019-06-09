sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "ui5con2019/libs/ui5con/model/graphql/GraphQLModel",
], (
    Controller: sap.ui.core.mvc.Controller,
    Fragment: sap.ui.core.Fragment,
    // @ts-ignore
    GraphQLModel: ui5con2019.libs.ui5con.model.graphql.GraphQLModel) => {

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
            this._loadRecords();
        },

        handleFilterPress(): void {
            this._loadRecords();
        },

        handleNewItemPress(): void {
            const container: sap.m.VBox = this.getView().byId("gridLayout").getItems()[0].getContent();
            const data: IRecord[] = this._getRecords();
            const newRecord: IRecord = {id: this._generateId(data)};

            data.unshift(newRecord);
            this._updateRecords(data);
            this._dataCache[newRecord.id] = JSON.parse(JSON.stringify(newRecord));

            this._persistData(newRecord, "A");
            this._replaceFragment(container, "UserEdit");
        },

        handleEditRecord(event: sap.ui.base.Event): void {
            const {container, recordId} = this._resolveEvent(event);
            const data: IRecord = this._extractData(recordId);

            // Copy object the ES5 way
            this._dataCache[recordId] = JSON.parse(JSON.stringify(data));

            this._replaceFragment(container, "UserEdit");
        },

        handleCancelEdit(event: sap.ui.base.Event): void {
            const {container, recordId} = this._resolveEvent(event);
            const data: IRecord[] = this._getRecords();
            const recordToRestore: IRecord = this._dataCache[recordId];
            const indexToReplace = data.map((r: IRecord) => r.id).indexOf(recordId);

            if (indexToReplace > -1 && recordToRestore) {
                data.splice(indexToReplace, 1, recordToRestore);
                this._updateRecords(data);
            }

            this._replaceFragment(container, "UserDisplay");
        },

        handleSaveRecord(event: sap.ui.base.Event): void {
            const {container, recordId} = this._resolveEvent(event);
            const data: IRecord = this._extractData(recordId);

            this._persistData(data, "U");
            this._replaceFragment(container, "UserDisplay");
        },

        handleDeleteRecord(event: sap.ui.base.Event): void {
            const {recordId} = this._resolveEvent(event);
            const data: IRecord[] = this._getRecords();
            const indexToReplace = data.map((r: IRecord) => r.id).indexOf(recordId);

            if (indexToReplace > -1) {
                // @ts-ignore
                const removedRecord: IRecord = data.splice(indexToReplace, 1);
                this._updateRecords(data);
                this._persistData(removedRecord, "D");
            }
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
            let id: number = -1;
            const hiddenEl: sap.ui.core.Control = container.getItems()[0];
            let invisibleText: sap.ui.core.InvisibleText;

            if (hiddenEl.isA("sap.ui.core.InvisibleText")) {
                invisibleText = hiddenEl as sap.ui.core.InvisibleText;
                id = parseInt(invisibleText.getText(), 10);
            }

            return id;
        },

        _extractData(recordId: number): IRecord {
            const data: IRecord[] = this._getRecords();
            const record: IRecord = data.filter((curRecord: IRecord) => curRecord.id === recordId)[0];

            return record || null;
        },

        _getRecords(): IRecord[] {
            // @ts-ignore
            const model: ui5con2019.libs.ui5con.model.graphql.GraphQLModel = this.getView().getModel();
            const data: IRecord[] = JSON.parse(model.getJSON()).records;

            return data;
        },

        // @ts-ignore
        _updateRecords(data: IRecord[]): ui5con2019.controller.BaseController {
            // @ts-ignore
            const model: ui5con2019.libs.ui5con.model.graphql.GraphQLModel = this.getView().getModel();
            model.setData({records: data});

            return this;
        },

        _loadRecords(): void {
            const page: sap.m.Page = this.getView().byId("hrSystemPage");
            // @ts-ignore
            const model: ui5con2019.libs.ui5con.model.graphql.GraphQLModel = this.getView().getModel();
            const config: sap.ui.model.json.JSONModel = this.getView().getModel("config");
            const {visibleFields} = JSON.parse(config.getJSON());
            const fieldsToRequest: string[] = ["id", "avatar"].concat(visibleFields);
            const request = `{ records{ ${fieldsToRequest} } }`;

            page.setBusy(true);

            model.query("/graphql", request).then(() => page.setBusy(false));
        },

        _resolveEvent(event: sap.ui.base.Event): object {
            const sourceCtrl: sap.ui.core.Control = event.getSource() as sap.ui.core.Control;
            const container: sap.m.VBox = sourceCtrl.getParent().getParent() as sap.m.VBox;
            const recordId: number = this._extractId(container);

            return {container, recordId};
        },

        _persistData(data: IRecord, action?: string): void {
            // @ts-ignore
            const model: ui5con2019.libs.ui5con.model.graphql.GraphQLModel = this.getView().getModel();
            const fields = Object.keys(data);
            const stringifiedData = fields
                .map((fieldName) => fieldName + ": " + JSON.stringify(data[fieldName])).join(", ");

            let mutation;
            switch (action) {
                case "D":
                    mutation = "deleteRecord";
                    break;
                case "U":
                    mutation = "editRecord";
                    break;
                default:
                    mutation = "addRecord";
                    break;
            }

            const query = `mutation { ${mutation}(${stringifiedData}) { ${fields} } }`;

            model.query("/graphql", query, false);
        },
    });
});
