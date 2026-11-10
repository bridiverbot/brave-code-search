import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../shared_style.css.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface TrustedVaultErrorDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
export declare class TrustedVaultErrorDialogElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    private onCancelButtonClick_;
    private onVerifyButtonClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'trusted-vault-error-dialog': TrustedVaultErrorDialogElement;
    }
}
