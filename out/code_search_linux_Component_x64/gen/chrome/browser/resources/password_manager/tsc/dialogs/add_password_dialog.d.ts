import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '/shared/settings/md_select.css.js';
import '../shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrTextareaElement } from 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * Represents different user interactions related to adding credential from the
 * settings. Should be kept in sync with
 * |metrics_util::AddCredentialFromSettingsUserInteractions|. These values are
 * persisted to logs. Entries should not be renumbered and numeric values should
 * never be reused.
 */
export declare enum AddCredentialFromSettingsUserInteractions {
    ADD_DIALOG_OPENED = 0,
    ADD_DIALOG_CLOSED = 1,
    CREDENTIAL_ADDED = 2,
    DUPLICATED_CREDENTIAL_ENTERED = 3,
    DUPLICATE_CREDENTIAL_VIEWED = 4,
    COUNT = 5
}
/**
 * Should be kept in sync with
 * |password_manager::metrics_util::PasswordNoteAction|.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export declare enum PasswordNoteAction {
    NOTE_ADDED_IN_ADD_DIALOG = 0,
    NOTE_ADDED_IN_EDIT_DIALOG = 1,
    NOTE_EDITED_IN_EDIT_DIALOG = 2,
    NOTE_REMOVED_IN_EDIT_DIALOG = 3,
    NOTE_NOT_CHANGED = 4,
    COUNT = 5
}
export declare function recordPasswordNoteAction(action: PasswordNoteAction): void;
export interface AddPasswordDialogElement {
    $: {
        addButton: CrButtonElement;
        dialog: CrDialogElement;
        noteInput: CrTextareaElement;
        passwordInput: CrInputElement;
        showPasswordButton: CrIconButtonElement;
        storePicker: HTMLSelectElement;
        usernameInput: CrInputElement;
        viewExistingPasswordLink: HTMLAnchorElement;
        websiteInput: CrInputElement;
    };
}
/**
 * When user enters more than or equal to 900 characters in the note field, a
 * footer will be displayed below the note to warn the user.
 */
export declare const PASSWORD_NOTE_WARNING_CHARACTER_COUNT = 900;
/**
 * When user enters more than 1000 characters, the note will become invalid and
 * save button will be disabled.
 */
export declare const PASSWORD_NOTE_MAX_CHARACTER_COUNT = 1000;
declare const AddPasswordDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../show_password_mixin.js").ShowPasswordMixinInterface) & (new (...args: any[]) => import("../user_utils_mixin.js").UserUtilMixinInterface);
export declare class AddPasswordDialogElement extends AddPasswordDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        website_: {
            type: StringConstructor;
            value: string;
        };
        username_: {
            type: StringConstructor;
            value: string;
        };
        password_: {
            type: StringConstructor;
            value: string;
        };
        note_: {
            type: StringConstructor;
            value: string;
        };
        urlCollection_: ObjectConstructor;
        usernamesBySignonRealm_: {
            type: ObjectConstructor;
            values: () => Map<any, any>;
        };
        /**
         * Error message if the website input is invalid.
         */
        websiteErrorMessage_: {
            type: StringConstructor;
            value: null;
        };
        usernameErrorMessage_: {
            type: StringConstructor;
            computed: string;
        };
        isPasswordInvalid_: {
            type: BooleanConstructor;
            value: boolean;
        };
        canAddPassword_: {
            type: BooleanConstructor;
            computed: string;
        };
        storeOptionAccountValue_: {
            type: StringConstructor;
            value: chrome.passwordsPrivate.PasswordStoreSet;
            readonly: boolean;
        };
        storeOptionDeviceValue_: {
            type: StringConstructor;
            value: chrome.passwordsPrivate.PasswordStoreSet;
            readonly: boolean;
        };
    };
    static get observers(): string[];
    private website_;
    private username_;
    private password_;
    private note_;
    private usernamesBySignonRealm_;
    private websiteErrorMessage_;
    private usernameErrorMessage_;
    private canAddPassword_;
    private isPasswordInvalid_;
    private urlCollection_;
    private readonly storeOptionAccountValue_;
    private readonly storeOptionDeviceValue_;
    private setSavedPasswordsListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateDefaultStore_;
    private closeDialog_;
    /**
     * Helper function that checks whether the entered url is valid.
     */
    private validateWebsite_;
    private onWebsiteInputBlur_;
    private isWebsiteInputInvalid_;
    private showWebsiteError_;
    private computeUsernameErrorMessage_;
    private doesUsernameExistAlready_;
    private onPasswordInput_;
    private isNoteInputInvalid_;
    private getFirstNoteFooter_;
    private getSecondNoteFooter_;
    private computeCanAddPassword_;
    private onAddClick_;
    private getViewExistingPasswordAriaDescription_;
    private onViewExistingPasswordClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'add-password-dialog': AddPasswordDialogElement;
    }
}
export {};
