/**
 * @fileoverview The 'certificate-confirmation-dialog' component is for showing
 * a dialog box that prompts the user to confirm or cancel an operation such as
 * deleting a certificate.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface CertificateConfirmationDialogElement {
    $: {
        dialog: CrDialogElement;
        ok: CrButtonElement;
        cancel: CrButtonElement;
    };
}
export declare class CertificateConfirmationDialogElement extends CrLitElement {
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
    wasConfirmed(): boolean;
    protected onOkClick_(): void;
    protected onCancelClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'certificate-confirmation-dialog': CertificateConfirmationDialogElement;
    }
}
