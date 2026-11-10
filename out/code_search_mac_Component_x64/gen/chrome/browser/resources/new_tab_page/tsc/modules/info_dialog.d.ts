import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface InfoDialogElement {
    $: {
        closeButton: HTMLElement;
        dialog: CrDialogElement;
    };
}
/** Info dialog that can be populated with custom text via slotting. */
export declare class InfoDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showOnAttach: {
            type: BooleanConstructor;
        };
    };
    accessor showOnAttach: boolean;
    showModal(): void;
    protected onCloseClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-info-dialog': InfoDialogElement;
    }
}
