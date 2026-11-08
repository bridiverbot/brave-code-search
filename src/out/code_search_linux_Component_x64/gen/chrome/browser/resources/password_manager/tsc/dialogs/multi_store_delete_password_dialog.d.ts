/**
 * @fileoverview MultiStoreDeletePasswordDialog is a dialog for choosing which
 * copies of a duplicated password to remove. A duplicated password is one that
 * is stored both on the device and in the account.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface MultiStoreDeletePasswordDialogElement {
    $: {
        dialog: CrDialogElement;
        removeButton: CrButtonElement;
        removeFromAccountCheckbox: CrCheckboxElement;
        removeFromDeviceCheckbox: CrCheckboxElement;
    };
}
declare const MultiStoreDeletePasswordDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../user_utils_mixin.js").UserUtilMixinInterface);
export declare class MultiStoreDeletePasswordDialogElement extends MultiStoreDeletePasswordDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * The password whose copies are to be removed.
         */
        duplicatedPassword: ObjectConstructor;
        removeFromAccountChecked_: {
            type: BooleanConstructor;
            value: boolean;
        };
        removeFromDeviceChecked_: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    duplicatedPassword: chrome.passwordsPrivate.PasswordUiEntry;
    private removeFromAccountChecked_;
    private removeFromDeviceChecked_;
    connectedCallback(): void;
    private onRemoveButtonClick_;
    private onCancelButtonClick_;
    private shouldDisableRemoveButton_;
    private getDialogBodyMessage_;
}
declare global {
    interface HTMLElementTagNameMap {
        'multi-store-delete-password-dialog': MultiStoreDeletePasswordDialogElement;
    }
}
export {};
