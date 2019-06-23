sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
], (JSONModel: sap.ui.model.json.JSONModel,
    // @ts-ignore
    Device: sap.ui.Device) => {
    "use strict";

    return {
        createDeviceModel(): sap.ui.model.json.JSONModel {
            // @ts-ignore
            const oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
    };
});
