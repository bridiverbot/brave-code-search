import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ViewerPasswordDialogElement {
    $: {
        dialog: CrDialogElement;
        password: CrInputElement;
        submit: CrButtonElement;
    };
}
export declare class ViewerPasswordDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        invalid: {
            type: BooleanConstructor;
        };
    };
    accessor invalid: boolean;
    close(): void;
    deny(): void;
    protected onSubmitClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-password-dialog': ViewerPasswordDialogElement;
    }
}
