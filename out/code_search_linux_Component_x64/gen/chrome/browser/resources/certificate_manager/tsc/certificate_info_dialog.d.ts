/**
 * @fileoverview The 'certificate-info-dialog' component is for showing
 * a dialog box that displays informational or error messages to the user.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface CertificateInfoDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
export declare class CertificateInfoDialogElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dialogTitle: {
            type: StringConstructor;
        };
        dialogMessage: {
            type: StringConstructor;
        };
    };
    accessor dialogTitle: string;
    accessor dialogMessage: string;
    protected onOkClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'certificate-info-dialog': CertificateInfoDialogElement;
    }
}
