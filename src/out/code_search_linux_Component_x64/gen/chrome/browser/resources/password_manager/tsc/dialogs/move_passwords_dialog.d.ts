import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../shared_style.css.js';
import '../user_utils_mixin.js';
import './password_preview_item.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface MovePasswordsDialogElement {
    $: {
        acceptButton: CrButtonElement;
        accountEmail: HTMLElement;
        dialog: CrDialogElement;
    };
}
declare const MovePasswordsDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../user_utils_mixin.js").UserUtilMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface);
export declare class MovePasswordsDialogElement extends MovePasswordsDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Passwords group displayed in the UI.
         */
        passwords: {
            type: ArrayConstructor;
            value: () => never[];
            observer: string;
        };
        url: {
            type: StringConstructor;
        };
        hasOnlyOneDeviceCredential: {
            type: BooleanConstructor;
            value: boolean;
        };
        selectedPasswordIds_: {
            type: ArrayConstructor;
            value: () => never[];
        };
        descriptionString: {
            type: StringConstructor;
        };
        passwordsTitle: {
            type: StringConstructor;
        };
        trigger_: {
            type: ObjectConstructor;
            computed: string;
        };
    };
    passwords: chrome.passwordsPrivate.PasswordUiEntry[];
    private url;
    hasOnlyOneDeviceCredential: boolean;
    private selectedPasswordIds_;
    descriptionString: string;
    passwordsTitle: string;
    private trigger_;
    connectedCallback(): void;
    private onCancelClick_;
    private onAcceptButtonClick_;
    private updateDescriptionString_;
    private updatePasswordsTitle_;
    private onPasswordsChanged_;
    private onPasswordPreviewItemChange_;
    private computeTrigger_;
}
declare global {
    interface HTMLElementTagNameMap {
        'move-passwords-dialog': MovePasswordsDialogElement;
    }
}
export {};
