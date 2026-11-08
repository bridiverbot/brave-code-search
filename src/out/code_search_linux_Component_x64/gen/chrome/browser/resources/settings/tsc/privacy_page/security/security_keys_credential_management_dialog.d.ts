/**
 * @fileoverview 'settings-security-keys-credential-management-dialog' is a
 * dialog for viewing and erasing credentials stored on a security key.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../../site_favicon.js';
import '../../i18n_setup.js';
import './security_keys_pin_field.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Credential } from './security_keys_browser_proxy.js';
import type { SettingsSecurityKeysPinFieldElement } from './security_keys_pin_field.js';
export declare enum CredentialManagementDialogPage {
    INITIAL = "initial",
    PIN_PROMPT = "pinPrompt",
    PIN_ERROR = "pinError",
    CREDENTIALS = "credentials",
    EDIT = "edit",
    ERROR = "error",
    CONFIRM = "confirm"
}
export interface SettingsSecurityKeysCredentialManagementDialogElement {
    $: {
        cancelButton: CrButtonElement;
        confirm: HTMLElement;
        confirmButton: CrButtonElement;
        container: HTMLElement;
        dialog: CrDialogElement;
        displayNameInput: CrInputElement;
        edit: HTMLElement;
        error: HTMLElement;
        pin: SettingsSecurityKeysPinFieldElement;
        pinError: HTMLElement;
        userNameInput: CrInputElement;
    };
}
declare const SettingsSecurityKeysCredentialManagementDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsSecurityKeysCredentialManagementDialogElement extends SettingsSecurityKeysCredentialManagementDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The ID of the element currently shown in the dialog.
         */
        dialogPage_: {
            type: StringConstructor;
        };
        dialogTitle_: {
            type: StringConstructor;
        };
        /**
         * The list of credentials displayed in the dialog.
         */
        credentials_: {
            type: ArrayConstructor;
        };
        /**
         * The message displayed on the "error" dialog page.
         */
        errorMsg_: {
            type: StringConstructor;
        };
        cancelButtonVisible_: {
            type: BooleanConstructor;
        };
        closeButtonVisible_: {
            type: BooleanConstructor;
        };
        confirmButtonDisabled_: {
            type: BooleanConstructor;
        };
        confirmButtonLabel_: {
            type: StringConstructor;
        };
        confirmButtonVisible_: {
            type: BooleanConstructor;
        };
        confirmMsg_: {
            type: StringConstructor;
        };
        displayNameInputError_: {
            type: StringConstructor;
        };
        editButtonVisible_: {
            type: BooleanConstructor;
        };
        minPinLength_: {
            type: NumberConstructor;
        };
        newDisplayName_: {
            type: StringConstructor;
        };
        newUsername_: {
            type: StringConstructor;
        };
        userNameInputError_: {
            type: StringConstructor;
        };
    };
    protected accessor dialogPage_: CredentialManagementDialogPage;
    protected accessor dialogTitle_: string;
    protected accessor credentials_: Credential[];
    protected accessor errorMsg_: string;
    protected accessor cancelButtonVisible_: boolean;
    protected accessor closeButtonVisible_: boolean;
    protected accessor confirmButtonDisabled_: boolean;
    protected accessor confirmButtonLabel_: string;
    protected accessor confirmButtonVisible_: boolean;
    protected accessor confirmMsg_: string;
    protected accessor displayNameInputError_: string;
    protected accessor editButtonVisible_: boolean;
    protected accessor minPinLength_: number;
    protected accessor newDisplayName_: string;
    protected accessor newUsername_: string;
    protected accessor userNameInputError_: string;
    private browserProxy_;
    private credentialIdToDelete_;
    private editingCredential_;
    private showSetPINButton_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onPinError_;
    private onError_;
    private submitPin_;
    private onCredentials_;
    private updateDialogPageState_;
    protected onConfirmButtonClick_(): void;
    protected onCancelButtonClick_(): void;
    protected onDialogClose_(): void;
    protected onCloseButtonClick_(): void;
    protected isEmpty_(str: string | null): boolean;
    protected onIronSelect_(e: Event): void;
    protected onDeleteButtonClick_(e: Event): void;
    private deleteCredential_;
    private validateInput_;
    protected onUpdateButtonClick_(e: Event): void;
    protected onNewDisplayNameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onNewUsernameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    private updateUserInformation_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-security-keys-credential-management-dialog': SettingsSecurityKeysCredentialManagementDialogElement;
    }
}
export type SecurityKeysCredentialManagementDialogElement = SettingsSecurityKeysCredentialManagementDialogElement;
export {};
