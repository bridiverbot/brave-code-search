import '../settings_shared.css.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { BraveSyncBrowserProxy } from './brave_sync_browser_proxy.js';
/**
 * @fileoverview
 * 'settings-brave-sync-delete-account-dialog' contains the dialog for
 * displaying a warning message and confirm further action or cancel.
 * It is used for confirmation of permanently delete account.
 */
declare const SettingsBraveSyncDeleteAccountDialogElementBase: {
    new (): PolymerElement & I18nMixinInterface;
};
export declare class SettingsBraveSyncCodeDialogElement extends SettingsBraveSyncDeleteAccountDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * When true current dialog is displayed
         */
        doingDeleteAccount: {
            type: BooleanConstructor;
            notify: boolean;
        };
        /**
         * String representing error of account deletion if any present
         */
        deleteAccountError: {
            type: StringConstructor;
            value: string;
            notify: boolean;
        };
        /**
         * Flag indicating that right now delete account was sent, but response
         * is not yet received. Used to hide controls.
         */
        deleteIsInProgress: {
            type: BooleanConstructor;
            value: boolean;
            notify: boolean;
        };
    };
    private deleteAccountError;
    private deleteIsInProgress;
    private doingDeleteAccount;
    syncBrowserProxy_: BraveSyncBrowserProxy;
    handleDeleteAccount_(): Promise<void>;
    handleCancel_(): void;
}
export {};
