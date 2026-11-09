import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import '../cr_input_style.css.js';
import '../shared_style.css.js';
import './credential_details_card.css.js';
import './credential_field.js';
import './credential_note.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { ValueCopiedEvent } from '../password_manager_app.js';
import { PasswordViewPageInteractions } from '../password_manager_proxy.js';
import type { CredentialFieldElement } from './credential_field.js';
import type { CredentialNoteElement } from './credential_note.js';
export type BackupPasswordRemovedEvent = CustomEvent<{}>;
declare global {
    interface HTMLElementEventMap {
        'value-copied': ValueCopiedEvent;
        'backup-password-removed': BackupPasswordRemovedEvent;
    }
}
export interface BackupPasswordDetailsCardElement {
    $: {
        copyPasswordButton: CrIconButtonElement;
        deleteButton: CrButtonElement;
        domainLabel: HTMLElement;
        passwordValue: CrInputElement;
        noteValue: CredentialNoteElement;
        showMore: HTMLAnchorElement;
        showPasswordButton: CrIconButtonElement;
        usernameValue: CredentialFieldElement;
    };
}
declare const BackupPasswordDetailsCardElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../show_password_mixin.js").ShowPasswordMixinInterface);
export declare class BackupPasswordDetailsCardElement extends BackupPasswordDetailsCardElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        password: {
            type: ObjectConstructor;
            observer: string;
        };
        interactionsEnum_: {
            type: ObjectConstructor;
            value: typeof PasswordViewPageInteractions;
        };
    };
    password: chrome.passwordsPrivate.PasswordUiEntry;
    private getNoteValue_;
    private onCopyPasswordClick_;
    private onShowPasswordClick_;
    private onDeleteClick_;
    private getDomainLabel_;
    private showToast_;
    private getCredentialTypeString_;
    private getAriaLabelForBackupPasswordCard_;
    private getAriaLabelForDeleteButton_;
    private onPasswordChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'backup-password-details-card': BackupPasswordDetailsCardElement;
    }
}
export {};
