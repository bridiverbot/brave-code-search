import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface DisconnectCloudAuthenticatorDialogElement {
    $: {
        cancelButton: CrButtonElement;
        confirmButton: CrButtonElement;
        dialog: CrDialogElement;
    };
}
declare const DisconnectCloudAuthenticatorDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class DisconnectCloudAuthenticatorDialogElement extends DisconnectCloudAuthenticatorDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {};
    ready(): void;
    private onCancel_;
    private onConfirm_;
    private onDisconnectCloudAuthenticatorResponse_;
}
declare global {
    interface HTMLElementTagNameMap {
        'disconnect-cloud-authenticator-dialog': DisconnectCloudAuthenticatorDialogElement;
    }
}
export {};
