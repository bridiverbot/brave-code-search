/**
 * @fileoverview Element which shows and controls password sharing dialogs.
 */
import './share_password_family_picker_dialog.js';
import './share_password_loading_dialog.js';
import './share_password_error_dialog.js';
import './share_password_no_other_family_members_dialog.js';
import './share_password_not_family_member_dialog.js';
import './share_password_confirmation_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export declare enum ShareFlowState {
    NO_DIALOG = 0,
    FETCHING = 1,
    ERROR = 2,
    NO_OTHER_MEMBERS = 3,
    NOT_FAMILY_MEMBER = 4,
    FAMILY_PICKER = 5,
    CONFIRMATION = 6
}
declare const SharePasswordFlowElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class SharePasswordFlowElement extends SharePasswordFlowElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        passwordName: StringConstructor;
        iconUrl: StringConstructor;
        password: ObjectConstructor;
        flowState: {
            type: NumberConstructor;
            lalue: ShareFlowState;
        };
        fetchResults_: {
            type: ObjectConstructor;
            value: null;
        };
        recipients_: {
            type: ArrayConstructor;
            value: never[];
        };
        flowStateEnum_: {
            type: ObjectConstructor;
            value: typeof ShareFlowState;
            readOnly: boolean;
        };
    };
    passwordName: string;
    iconUrl: string;
    password: chrome.passwordsPrivate.PasswordUiEntry;
    flowState: ShareFlowState;
    private recipients_;
    private fetchResults_;
    private passwordManager_;
    connectedCallback(): void;
    private startSharing_;
    private isState_;
    private getShareDialogTitle_;
    private onDialogClose_;
    private onStartShare_;
}
declare global {
    interface HTMLElementTagNameMap {
        'share-password-flow': SharePasswordFlowElement;
    }
}
export {};
