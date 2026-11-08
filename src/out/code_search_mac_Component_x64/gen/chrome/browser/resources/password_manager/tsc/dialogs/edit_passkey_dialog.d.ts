import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface EditPasskeyDialogElement {
    $: {
        cancelButton: CrButtonElement;
        dialog: CrDialogElement;
        saveButton: CrButtonElement;
        usernameInput: CrInputElement;
        displayNameInput: CrInputElement;
    };
}
declare const EditPasskeyDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class EditPasskeyDialogElement extends EditPasskeyDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        passkey: ObjectConstructor;
        username_: StringConstructor;
        displayName_: StringConstructor;
    };
    passkey: chrome.passwordsPrivate.PasswordUiEntry;
    private username_;
    private displayName_;
    ready(): void;
    private onCancel_;
    private onEditClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'edit-passkey-dialog': EditPasskeyDialogElement;
    }
}
export {};
