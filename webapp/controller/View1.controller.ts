sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller: sap.ui.core.mvc.Controller) => {

    // @ts-ignore
    return Controller.extend("ui5con2019.controller.BaseController", {
        onInit(): void {
            // TODO: Init hook
        },

        i18nFormatter(label: string): string {
            // @ts-ignore
            const resourceBundle: sap.base.i18n.ResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            return resourceBundle.getText(label);
        },
    });
});
