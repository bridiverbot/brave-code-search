import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface AuthTimedOutDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare const AuthTimedOutDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class AuthTimedOutDialogElement extends AuthTimedOutDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    connectedCallback(): void;
    private onCloseButtonClick_;
    private getTitle_;
}
declare global {
    interface HTMLElementTagNameMap {
        'auth-timed-out-dialog': AuthTimedOutDialogElement;
    }
}
export {};
