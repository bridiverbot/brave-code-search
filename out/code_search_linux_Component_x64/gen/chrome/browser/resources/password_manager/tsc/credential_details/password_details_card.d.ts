import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import '../cr_input_style.css.js';
import '../shared_style.css.js';
import './credential_details_card.css.js';
import './credential_field.js';
import './credential_note.js';
import '../dialogs/edit_password_dialog.js';
import '../dialogs/multi_store_delete_password_dialog.js';
import '../sharing/share_password_flow.js';
import '../sharing/metrics_utils.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { PasswordsMovedEvent, ValueCopiedEvent } from '../password_manager_app.js';
import { PasswordViewPageInteractions } from '../password_manager_proxy.js';
import { MoveToAccountStoreTrigger } from '../sharing/metrics_utils.js';
import type { CredentialFieldElement } from './credential_field.js';
import type { CredentialNoteElement } from './credential_note.js';
export declare const PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID = "PasswordManagerUI::kSharePasswordElementId";
export type PasswordRemovedEvent = CustomEvent<{
    removedFromStores: chrome.passwordsPrivate.PasswordStoreSet;
}>;
declare global {
    interface HTMLElementEventMap {
        'password-removed': PasswordRemovedEvent;
        'passwords-moved': PasswordsMovedEvent;
        'value-copied': ValueCopiedEvent;
    }
}
export interface PasswordDetailsCardElement {
    $: {
        copyPasswordButton: CrIconButtonElement;
        deleteButton: CrButtonElement;
        domainLabel: HTMLElement;
        editButton: CrButtonElement;
        passwordValue: CrInputElement;
        noteValue: CredentialNoteElement;
        showMore: HTMLAnchorElement;
        showPasswordButton: CrIconButtonElement;
        usernameValue: CredentialFieldElement;
        shareButton: CrButtonElement;
        shareButtonContainer: HTMLElement;
    };
}
declare const PasswordDetailsCardElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../show_password_mixin.js").ShowPasswordMixinInterface) & (new (...args: any[]) => import("../user_utils_mixin.js").UserUtilMixinInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface);
export declare class PasswordDetailsCardElement extends PasswordDetailsCardElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        password: {
            type: ObjectConstructor;
            observer: string;
        };
        groupName: StringConstructor;
        iconUrl: StringConstructor;
        movePasswordsSubtitle: {
            type: StringConstructor;
            computed: string;
        };
        shouldRegisterSharingPromo: {
            type: BooleanConstructor;
            value: boolean;
        };
        interactionsEnum_: {
            type: ObjectConstructor;
            value: typeof PasswordViewPageInteractions;
        };
        showEditPasswordDialog_: {
            type: BooleanConstructor;
            value: boolean;
        };
        showDeletePasswordDialog_: {
            type: BooleanConstructor;
            value: boolean;
        };
        showShareButton_: {
            type: BooleanConstructor;
            value: boolean;
        };
        passwordSharingDisabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
        showShareFlow_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isUsingAccountStore: {
            type: BooleanConstructor;
            value: boolean;
        };
        trigger_: {
            type: ObjectConstructor;
            value: () => MoveToAccountStoreTrigger;
        };
    };
    static get observers(): string[];
    password: chrome.passwordsPrivate.PasswordUiEntry;
    groupName: string;
    iconUrl: string;
    movePasswordsSubtitle: string;
    isUsingAccountStore: boolean;
    shouldRegisterSharingPromo: boolean;
    private showEditPasswordDialog_;
    private passwordSharingDisabled_;
    private showDeletePasswordDialog_;
    private showShareFlow_;
    private showShareButton_;
    private trigger_;
    connectedCallback(): void;
    private isFederated_;
    private getPasswordLabel_;
    private getPasswordValue_;
    private getPasswordType_;
    private onCopyPasswordClick_;
    private onShowPasswordClick_;
    private onDeleteClick_;
    private showToast_;
    private onEditClicked_;
    private onEditPasswordDialogClosed_;
    private onDeletePasswordDialogClosed_;
    private onShareButtonClick_;
    private onShareFlowDone_;
    private extendAuthValidity_;
    private getDomainLabel_;
    private computeMovePasswordsSubtitle_;
    private computeShowShareButton_;
    private getCredentialTypeString_;
    private getAriaLabelForPasswordCard_;
    private getAriaLabelForEditButton_;
    private getAriaLabelForDeleteButton_;
    private getAriaLabelForShareButton_;
    private onMovePasswordClicked_;
    private showMovePasswordEntry_;
    private onPasswordChanged_;
    private maybeRegisterSharingHelpBubble_;
    protected getCloudUploadIcon_(): string;
    private showCompromiseWarning_;
    private onChangePasswordClicked_;
    private onCheckupLinkClicked_;
}
declare global {
    interface HTMLElementTagNameMap {
        'password-details-card': PasswordDetailsCardElement;
    }
}
export {};
