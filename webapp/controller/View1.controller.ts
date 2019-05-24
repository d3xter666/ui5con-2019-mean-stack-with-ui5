sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
], (Controller, JSONModel) => {
    "use strict";


    return Controller.extend("ui5con2019.controller.BaseController", {
        onChange() {
            const oModel = this.getView().getModel("zzz");

            oModel.loadData("/api/v2/zzz", oModel.getData(), true, "POST");
        },
    });
});
