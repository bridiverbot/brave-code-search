import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../cr_input_style.css.js';
import '../shared_style.css.js';
import './credential_details_card.css.js';
import './credential_field.js';
import '../dialogs/edit_passkey_dialog.js';
import '../dialogs/delete_passkey_dialog.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordViewPageInteractions } from '../password_manager_proxy.js';
import type { CredentialFieldElement } from './credential_field.js';
export interface PasskeyDetailsCardElement {
    $: {
        deleteButton: CrButtonElement;
        domainLabel: HTMLElement;
        editButton: CrButtonElement;
        showMore: HTMLAnchorElement;
        usernameValue: CredentialFieldElement;
        displayNameValue: CredentialFieldElement;
        infoLabelContent: HTMLElement;
    };
}
declare const PasskeyDetailsCardElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../user_utils_mixin.js").UserUtilMixinInterface);
export declare class PasskeyDetailsCardElement extends PasskeyDetailsCardElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        passkey: ObjectConstructor;
        interactionsEnum_: {
            type: ObjectConstructor;
            value: typeof PasswordViewPageInteractions;
        };
        showEditPasskeyDialog_: BooleanConstructor;
        showDeletePasskeyDialog_: BooleanConstructor;
    };
    passkey: chrome.passwordsPrivate.PasswordUiEntry;
    private showEditPasskeyDialog_;
    private showDeletePasskeyDialog_;
    private getUsernameValue_;
    private getDisplayNameValue_;
    private onDeleteClick_;
    private onDeletePasskeyDialogClosed_;
    private onEditClicked_;
    private onEditPasskeyDialogClosed_;
    private getAriaLabelForPasswordCard_;
    private getAriaLabelForEditButton_;
    private getAriaLabelForDeleteButton_;
    private getInfoLabelText_;
    protected getPasskeyIcon_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'passkey-details-card': PasskeyDetailsCardElement;
    }
}
export {};
