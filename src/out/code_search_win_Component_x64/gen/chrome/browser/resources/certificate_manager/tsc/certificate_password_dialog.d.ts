/**
 * @fileoverview The 'certificate-password-dialog' component is for showing
 * a dialog box that prompts the user to enter a password to decrypt a file
 * during client certificate import.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from '//resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface CertificatePasswordDialogElement {
    $: {
        dialog: CrDialogElement;
        password: CrInputElement;
        ok: CrButtonElement;
        cancel: CrButtonElement;
    };
}
export declare class CertificatePasswordDialogElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    wasConfirmed(): boolean;
    value(): string | null;
    protected onOkClick_(): void;
    protected onCancelClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'certificate-password-dialog': CertificatePasswordDialogElement;
    }
}
