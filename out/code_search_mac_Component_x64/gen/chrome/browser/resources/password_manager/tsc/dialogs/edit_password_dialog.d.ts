import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './add_password_dialog.js';
import '../shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrTextareaElement } from 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface EditPasswordDialogElement {
    $: {
        cancelButton: CrButtonElement;
        dialog: CrDialogElement;
        passwordInput: CrInputElement;
        passwordNote: CrTextareaElement;
        saveButton: CrButtonElement;
        showPasswordButton: CrIconButtonElement;
        usernameInput: CrInputElement;
        viewExistingPasswordLink: HTMLAnchorElement;
    };
}
declare const EditPasswordDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../show_password_mixin.js").ShowPasswordMixinInterface);
export declare class EditPasswordDialogElement extends EditPasswordDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        credential: ObjectConstructor;
        showRedirect: {
            type: BooleanConstructor;
            value: boolean;
        };
        username_: StringConstructor;
        password_: StringConstructor;
        note_: {
            type: StringConstructor;
            value: string;
        };
        conflictingUsernames_: {
            type: ObjectConstructor;
            values: () => Map<any, any>;
        };
        usernameErrorMessage_: {
            type: StringConstructor;
            computed: string;
        };
        canEditPassword_: {
            type: BooleanConstructor;
            computed: string;
        };
    };
    credential: chrome.passwordsPrivate.PasswordUiEntry;
    showRedirect: boolean;
    private username_;
    private password_;
    private note_;
    private conflictingUsernames_;
    private usernameErrorMessage_;
    private canEditPassword_;
    private setSavedPasswordsListener_;
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private computeUsernameErrorMessage_;
    private doesUsernameExistAlready_;
    private onCancel_;
    private getFootnote_;
    private showRedirect_;
    private getViewExistingPasswordAriaDescription_;
    private onViewExistingPasswordClick_;
    private isNoteInputInvalid_;
    private getFirstNoteFooter_;
    private getSecondNoteFooter_;
    private computeCanEditPassword_;
    private onEditClick_;
    private recordPasswordNoteMetrics;
}
declare global {
    interface HTMLElementTagNameMap {
        'edit-password-dialog': EditPasswordDialogElement;
    }
}
export {};
