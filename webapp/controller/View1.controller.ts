sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "ui5con/model/graphql/GraphQLModel",
], (
    Controller: sap.ui.core.mvc.Controller,
    Fragment: sap.ui.core.Fragment,
    // @ts-ignore
    GraphQLModel: ui5con.model.graphql.GraphQLModel) => {
    "use strict";

    // @ts-ignore
    return Controller.extend("ui5con2019.controller.BaseController", {
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
            let aData: object[];
            let oNewRecord: object = {meta: {editable: true}};
            const oModel: sap.ui.model.json.JSONModel = this.getView().getModel();
            const {visibleFields} = this.getView().getModel("config").getData();

            // Go trough available keys and init
            oNewRecord = visibleFields.reduce((acc: object, fieldName: string) => {
                acc[fieldName] = "";
                return acc;
            }, oNewRecord);

            aData = JSON.parse(oModel.getJSON());
            // Create new container in "editable mode"
            aData.push(oNewRecord);
            oModel.setData(aData);
        },

        handleItemEdit(): void {
            // ToDo: Make a copy of the data
            // ToDo: enter edit mode
        },

        // _getFormFragment: function (sFragmentName) {
        //     var oFormFragment = this._formFragments[sFragmentName];
        //
        //     if (oFormFragment) {
        //         return oFormFragment;
        //     }
        //
        //     oFormFragment = sap.ui.xmlfragment(this.getView().getId(), "sap.ui.layout.sample.SimpleForm354." + sFragmentName);
        //
        //     this._formFragments[sFragmentName] = oFormFragment;
        //     return this._formFragments[sFragmentName];
        // },

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
