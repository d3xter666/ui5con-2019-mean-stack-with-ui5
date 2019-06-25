sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "ui5con2019/model/models",
], (UIComponent: sap.ui.core.UIComponent,
    // @ts-ignore
    Device: sap.ui.Device,
    // @ts-ignore
    models: ui5con2019.model.models) => {
    "use strict";

    // @ts-ignore
    return UIComponent.extend("ui5con2019.Component", {

        metadata: {
            manifest: "json",
        },

        /**
         * The component is initialized by UI5 automatically during the
         * startup of the app and calls the init method once.
         * @public
         * @override
         */
        init(): void {
            // call the base component's init function
            // @ts-ignore
            UIComponent.prototype.init.apply(this, arguments);

            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
        },
    });
});
