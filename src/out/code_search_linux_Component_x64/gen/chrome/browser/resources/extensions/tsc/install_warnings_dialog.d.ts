import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
interface ExtensionsInstallWarningsDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare class ExtensionsInstallWarningsDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        installWarnings: {
            type: ArrayConstructor;
        };
    };
    accessor installWarnings: string[];
    protected onOkClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-install-warnings-dialog': ExtensionsInstallWarningsDialogElement;
    }
}
export type InstallWarningsDialogElement = ExtensionsInstallWarningsDialogElement;
export {};
