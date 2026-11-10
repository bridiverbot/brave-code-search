/**
 * @fileoverview 'address-remove-confirmation-dialog' is the dialog that allows
 * removing a saved address.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsAddressRemoveConfirmationDialogElement {
    $: {
        description: HTMLElement;
        cancel: HTMLElement;
        dialog: CrDialogElement;
        remove: HTMLElement;
    };
}
declare const SettingsAddressRemoveConfirmationDialogBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsAddressRemoveConfirmationDialogElement extends SettingsAddressRemoveConfirmationDialogBase {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        address: {
            type: ObjectConstructor;
        };
        accountInfo: {
            type: ObjectConstructor;
        };
    };
    accessor address: chrome.autofillPrivate.AddressEntry;
    accessor accountInfo: chrome.autofillPrivate.AccountInfo | undefined;
    wasConfirmed(): boolean;
    protected getConfirmationTitle_(): string;
    protected getConfirmationDescription_(): TrustedHTML;
    protected getRemoveButtonLabel_(): string;
    private isAccountHomeAddress_;
    private isAccountWorkAddress_;
    private isAccountNameEmailAddress_;
    protected onRemoveClick(): void;
    protected onCancelClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-address-remove-confirmation-dialog': SettingsAddressRemoveConfirmationDialogElement;
    }
}
export {};
