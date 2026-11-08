import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './metrics_utils.js';
import './share_password_dialog_header.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface SharePasswordErrorDialogElement {
    $: {
        dialog: CrDialogElement;
        header: HTMLElement;
        description: HTMLElement;
        cancel: HTMLElement;
        tryAgain: HTMLElement;
    };
}
declare const SharePasswordErrorDialogElement_base: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class SharePasswordErrorDialogElement extends SharePasswordErrorDialogElement_base {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    private onClickCancel_;
    private onClickTryAgain_;
}
declare global {
    interface HTMLElementTagNameMap {
        'share-password-error-dialog': SharePasswordErrorDialogElement;
    }
}
export {};
