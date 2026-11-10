import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './metrics_utils.js';
import './share_password_dialog_header.js';
import './share_password_recipient.js';
import '../shared_style.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface SharePasswordFamilyPickerDialogElement {
    $: {
        header: HTMLElement;
        description: HTMLElement;
        action: HTMLButtonElement;
        cancel: HTMLElement;
        avatar: HTMLImageElement;
        viewFamily: HTMLAnchorElement;
        footerDescription: HTMLElement;
    };
}
declare const SharePasswordFamilyPickerDialogElement_base: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../user_utils_mixin.js").UserUtilMixinInterface);
export declare class SharePasswordFamilyPickerDialogElement extends SharePasswordFamilyPickerDialogElement_base {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        dialogTitle: StringConstructor;
        members: {
            type: ArrayConstructor;
            value: never[];
        };
        selectedRecipients: {
            type: ArrayConstructor;
            value: never[];
            reflectToAttribute: boolean;
            notify: boolean;
        };
        eligibleRecipients_: {
            type: ArrayConstructor;
            computed: string;
        };
        ineligibleRecipients_: {
            type: ArrayConstructor;
            computed: string;
        };
    };
    dialogTitle: string;
    members: chrome.passwordsPrivate.RecipientInfo[];
    selectedRecipients: chrome.passwordsPrivate.RecipientInfo[];
    private eligibleRecipients_;
    private ineligibleRecipients_;
    ready(): void;
    private computeEligible_;
    private computeIneligible_;
    private recipientSelected_;
    private shouldPreselectFirstEntry_;
    private onViewFamilyClick_;
    private onClickCancel_;
    private onClickShare_;
}
declare global {
    interface HTMLElementTagNameMap {
        'share-password-family-picker-dialog': SharePasswordFamilyPickerDialogElement;
    }
}
export {};
