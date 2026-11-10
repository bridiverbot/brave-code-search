import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ExtensionsPackDialogAlertElement {
    $: {
        dialog: CrDialogElement;
    };
}
export declare class ExtensionsPackDialogAlertElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        model: {
            type: ObjectConstructor;
        };
        cancelLabel_: {
            type: StringConstructor;
        };
        confirmLabel_: {
            type: StringConstructor;
        };
        title_: {
            type: StringConstructor;
        };
    };
    accessor model: chrome.developerPrivate.PackDirectoryResponse;
    protected accessor cancelLabel_: string | null;
    /** This needs to be initialized to trigger data-binding. */
    protected accessor confirmLabel_: string | null;
    protected accessor title_: string;
    get returnValue(): string;
    firstUpdated(): void;
    protected getCancelButtonClass_(): string;
    protected onCancelClick_(): void;
    protected onConfirmClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-pack-dialog-alert': ExtensionsPackDialogAlertElement;
    }
}
