import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './dialogs/edit_password_dialog.js';
import './dialogs/delete_password_disclaimer_dialog.js';
import './dialogs/edit_password_disclaimer_dialog.js';
import './site_favicon.js';
import './shared_style.css.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordAutomaticChangeState } from './password_manager.mojom-webui.js';
import type { ShowPasswordMixinInterface } from './show_password_mixin.js';
export interface CheckupListItemElement extends ShowPasswordMixinInterface {
    $: {
        shownUrl: HTMLElement;
        username: HTMLElement;
        insecurePassword: HTMLInputElement;
        more: CrIconButtonElement;
    };
}
declare const CheckupListItemElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => ShowPasswordMixinInterface);
export declare class CheckupListItemElement extends CheckupListItemElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        item: ObjectConstructor;
        group: ObjectConstructor;
        first: BooleanConstructor;
        showDetails: BooleanConstructor;
        showAlreadyChanged: BooleanConstructor;
        showEditPasswordDialog_: BooleanConstructor;
        showEditPasswordDisclaimer_: BooleanConstructor;
        showDeletePasswordDialog_: BooleanConstructor;
        passwordChangeState: {
            type: NumberConstructor;
            value: PasswordAutomaticChangeState;
            observer: string;
        };
        isCancelDisabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    item: chrome.passwordsPrivate.PasswordUiEntry;
    group: chrome.passwordsPrivate.CredentialGroup;
    first: boolean;
    showDetails: boolean;
    showAlreadyChanged: boolean;
    passwordChangeState: PasswordAutomaticChangeState;
    private isCancelDisabled_;
    private showEditPasswordDialog_;
    private showEditPasswordDisclaimer_;
    private showDeletePasswordDialog_;
    private getPasswordValue_;
    private getCompromiseDescription_;
    private onMoreClick_;
    showHidePassword(): void;
    showEditDialog(): void;
    showDeleteDialog(): void;
    private onChangePasswordClick_;
    private onAutoChangePasswordClick_;
    private onPasswordChangeStateChanged_;
    private onOpenInNewClick_;
    private onCancelAutoChangeClick_;
    private onAlreadyChangedClick_;
    private onEditPasswordDialogClosed_;
    private onEditPasswordClick_;
    private onEditDisclaimerClosed_;
    private onDeletePasswordDialogClosed_;
    private onDeletePasswordClick_;
    private getGroupName_;
    private getGroupIcon_;
    private getChangeButtonAriaLabel_;
    private getAutoChangeButtonAriaLabel_;
    private getMoreButtonAriaLabel_;
    private getOpenInNewButtonAriaLabel_;
    private isAutoChangePasswordIdle_;
    private hideCancelButton_;
    private shouldShowOpenInNew_;
    private getAutoChangePasswordIcon_;
    private getAutoChangePasswordButtonText_;
    protected getArrowSelectorSparkIcon_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'checkup-list-item': CheckupListItemElement;
    }
}
export {};
