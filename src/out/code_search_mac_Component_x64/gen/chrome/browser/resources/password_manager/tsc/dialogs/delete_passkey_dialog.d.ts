import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface DeletePasskeyDialogElement {
    $: {
        cancelButton: CrButtonElement;
        dialog: CrDialogElement;
        deleteButton: CrButtonElement;
    };
}
declare const DeletePasskeyDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class DeletePasskeyDialogElement extends DeletePasskeyDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        passkey: ObjectConstructor;
    };
    passkey: chrome.passwordsPrivate.PasswordUiEntry;
    ready(): void;
    private onCancel_;
    private onDelete_;
    private getDescriptionHtml_;
}
declare global {
    interface HTMLElementTagNameMap {
        'delete-passkey-dialog': DeletePasskeyDialogElement;
    }
}
export {};
