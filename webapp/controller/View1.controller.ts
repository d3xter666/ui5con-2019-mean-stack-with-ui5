sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/Dialog",
    "sap/m/Text",
    "sap/m/Button",
], (
    Controller: sap.ui.core.mvc.Controller,
    Fragment: sap.ui.core.Fragment,
    Dialog: sap.m.Dialog,
    Text: sap.m.Text,
    Button: sap.m.Button) => {

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
        orderedFields?: object;
    }

    // @ts-ignore
    return Controller.extend("ui5con2019.controller.BaseController", {
        _dialog: null,

        onInit(): void {
            // TODO: Init hook
        },

        i18nFormatter(label: string): string {
            // @ts-ignore
            const resourceBundle: sap.base.i18n.ResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            return resourceBundle.getText(label);
        },

        handleNewItemPress(): void {
            const container: sap.m.VBox = this.getView().byId("gridLayout").getItems()[0].getContent();
            const data: IRecord[] = this._getRecords();
            const newRecord: IRecord = {id: this._generateId(data), avatar: "./assets/images/user.svg"};

            data.unshift(newRecord);
            this._updateRecords(data);

            this._replaceFragment(container, "UserEdit");
        },

        handleEditRecord(event: sap.ui.base.Event): void {
            const {container} = this._resolveEvent(event);

            this._replaceFragment(container, "UserEdit");
        },

        handleCancelEdit(event: sap.ui.base.Event): void {
            const {container} = this._resolveEvent(event);

            this._replaceFragment(container, "UserDisplay");
        },

        handleSaveRecord(event: sap.ui.base.Event): void {
            const {container} = this._resolveEvent(event);

            this._replaceFragment(container, "UserDisplay");
        },

        handleDeleteRecord(event: sap.ui.base.Event): void {
            const {recordId} = this._resolveEvent(event);
            const fnPress = () => {
                this._deleteRecord(recordId);
                fnClose();
            };
            const fnClose = () => {
                this._dialog.getButtons()[0].detachPress(fnPress);
                this._dialog.getButtons()[1].detachPress(fnClose);
                this._dialog.close();
            };

            if (!this._dialog) {
                // @ts-ignore
                this._dialog = new Dialog({
                    title: "{i18n>userInfoDeleteRecord}",
                    type: "Message",
                    // @ts-ignore
                    content: [new Text({text: "{i18n>userInfoDeleteConfirmation}"})],
                    buttons: [
                        // @ts-ignore
                        new Button({text: "{i18n>userInfoDelete}"}),
                        // @ts-ignore
                        new Button({text: "{i18n>userInfoCancel}"}),
                    ],
                });

                const container: sap.ui.core.Control = event.getSource() as sap.ui.core.Control;
                container.addDependent(this._dialog);
            }

            this._dialog.getButtons()[0].attachPress(fnPress);
            this._dialog.getButtons()[1].attachPress(fnClose);
            this._dialog.open();
        },

        _deleteRecord(recordId: number): void {
            const data: IRecord[] = this._getRecords();
            const indexToReplace = data.map((r: IRecord) => r.id).indexOf(recordId);

            if (indexToReplace > -1) {
                // @ts-ignore
                data.splice(indexToReplace, 1);
                this._updateRecords(data);
            }
        },

        _replaceFragment(source: sap.m.VBox, fragmentName: string): void {
            source.destroyItems();

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

        _getRecords(): IRecord[] {
            // @ts-ignore
            const model: sap.ui.model.json.JSONModel = this.getView().getModel();
            const data: IRecord[] = JSON.parse(model.getJSON()).records;

            return data;
        },

        // @ts-ignore
        _updateRecords(data: IRecord[]): ui5con2019.controller.BaseController {
            // @ts-ignore
            const model: sap.ui.model.json.JSONModel = this.getView().getModel();
            model.setData({records: data});

            return this;
        },

        _resolveEvent(event: sap.ui.base.Event): object {
            const sourceCtrl: sap.ui.core.Control = event.getSource() as sap.ui.core.Control;
            const container: sap.m.VBox = sourceCtrl.getParent().getParent() as sap.m.VBox;
            const recordId: number = this._extractId(container);

            return {container, recordId};
        },
    });
});
