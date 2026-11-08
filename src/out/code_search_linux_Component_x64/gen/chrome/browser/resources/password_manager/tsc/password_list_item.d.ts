import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import './site_favicon.js';
import './searchable_label.js';
import './shared_style.css.js';
import './dialogs/move_passwords_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface PasswordListItemElement {
    $: {
        displayedName: HTMLElement;
        numberOfAccounts: HTMLElement;
        seePasswordDetails: HTMLElement;
    };
}
declare const PasswordListItemElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class PasswordListItemElement extends PasswordListItemElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        item: {
            type: ObjectConstructor;
            observer: string;
        };
        isAccountStoreUser: BooleanConstructor;
        first: BooleanConstructor;
        searchTerm: StringConstructor;
        showMovePasswordDialog_: BooleanConstructor;
        /**
         * The number of accounts in a group as a formatted string.
         */
        numberOfAccounts_: StringConstructor;
        tooltipText_: StringConstructor;
        deviceOnlyCredentialsAccessibilityLabelText_: StringConstructor;
    };
    item: chrome.passwordsPrivate.CredentialGroup;
    isAccountStoreUser: boolean;
    first: boolean;
    searchTerm: string;
    private numberOfAccounts_;
    private tooltipText_;
    private deviceOnlyCredentialsAccessibilityLabelText_;
    private showMovePasswordDialog_;
    private getElementClass_;
    ready(): void;
    focus(): void;
    private onRowClick_;
    private onItemChanged_;
    private showNumberOfAccounts_;
    private getTitle_;
    private getCredentialsOnDevice_;
    private hasOnlyOneDeviceCredential_;
    private hasUploadablePasswords_;
    private onMovePasswordDialogClose_;
    private onUploadButtonClick_;
    private getAriaLabel_;
    protected getCloudUploadIcon_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'password-list-item': PasswordListItemElement;
    }
}
export {};
