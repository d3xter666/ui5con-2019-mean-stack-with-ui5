sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
], (Controller, Fragment) => {
    "use strict";

    return Controller.extend("ui5con2019.controller.BaseController", {
        onInit(): void {
            this._loadAddNewItem();
        },

        _loadAddNewItem(): void {
            Fragment.load({
                controller: this,
                id: this.getView().getId(),
                name: "ui5con2019.view.fragments.NewUserInfo",
                type: "XML",
            }).then((oNewUserFragment) => {
                const oGrid: sap.ui.layout.cssgrid.CSSGrid = this.getView().byId("gridLayout");

                oGrid.insertItem(oNewUserFragment, 0);
            });
        },

        handleNewItemPress(): void {
            let aData: object[];
            const oModel: sap.ui.model.json.JSONModel = this.getView().getModel();

            aData = JSON.parse(oModel.getJSON());
            // Create new container in "editable mode"
            aData.push({meta: {editable: true}});
            oModel.setData(aData);
        },

        handleItemEdit(): void {
            // ToDo: Make a copy of the data
            // ToDo: enter edit mode
        },

        handleItemCancel(): void {
            // ToDo: Restore data
        },

        handleItemSave(): void {
            // ToDo: Persist data (send backend request)
        },

        handleItemDelete(): void {
            // ToDo: remove item from models array and save
        },

        onChange() {
            const oModel = this.getView().getModel("zzz");

            oModel.loadData("/api/v2/zzz", oModel.getData(), true, "POST");
        },
    });
});
