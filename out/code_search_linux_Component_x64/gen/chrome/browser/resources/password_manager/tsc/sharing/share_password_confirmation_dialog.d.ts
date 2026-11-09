import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './metrics_utils.js';
import './share_password_dialog_header.js';
import './share_password_group_avatar.js';
import '../site_favicon.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface SharePasswordConfirmationDialogElement {
    $: {
        animation: HTMLElement;
        header: HTMLElement;
        cancel: HTMLElement;
        done: HTMLElement;
        dialog: CrDialogElement;
        senderAvatar: HTMLImageElement;
        recipientAvatar: HTMLElement;
        description: HTMLElement;
        footerDescription: HTMLElement;
    };
}
declare enum ConfirmationDialogStage {
    LOADING = 0,
    CANCELED = 1,
    SUCCESS = 2
}
declare const SharePasswordConfirmationDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../user_utils_mixin.js").UserUtilMixinInterface);
export declare class SharePasswordConfirmationDialogElement extends SharePasswordConfirmationDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        dialogStage_: {
            type: NumberConstructor;
            value: ConfirmationDialogStage;
            observer: string;
        };
        password: ObjectConstructor;
        passwordName: StringConstructor;
        iconUrl: StringConstructor;
        recipients: {
            type: ArrayConstructor;
            value: never[];
        };
        dialogStageEnum_: {
            type: ObjectConstructor;
            value: typeof ConfirmationDialogStage;
            readOnly: boolean;
        };
    };
    password: chrome.passwordsPrivate.PasswordUiEntry;
    passwordName: string;
    iconUrl: string;
    recipients: chrome.passwordsPrivate.RecipientInfo[];
    private dialogStage_;
    private passwordManager_;
    ready(): void;
    private isStage_;
    private stateChange_;
    private getDialogTitle_;
    private getSuccessDescription_;
    private hasSecureChangePasswordUrl_;
    private getFooterDescription_;
    private onFooterClick_;
    private onClickDone_;
    private onClickCancel_;
}
declare global {
    interface HTMLElementTagNameMap {
        'share-password-confirmation-dialog': SharePasswordConfirmationDialogElement;
    }
}
export {};
