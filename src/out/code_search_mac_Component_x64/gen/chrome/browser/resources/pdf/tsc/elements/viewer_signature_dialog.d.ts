import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ViewerSignatureDialogElement {
    $: {
        clear: CrButtonElement;
        close: CrIconButtonElement;
        create: CrButtonElement;
        dialog: CrDialogElement;
    };
}
export declare class ViewerSignatureDialogElement extends CrLitElement {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected onCloseClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-signature-dialog': ViewerSignatureDialogElement;
    }
}
