import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface FullDataResetElement {
    $: {
        confirmationDialogTitle: HTMLElement;
        deleteAllButton: CrButtonElement;
        cancelButton: CrButtonElement;
        confirmButton: CrButtonElement;
        dialog: CrDialogElement;
        successToast: CrToastElement;
    };
}
declare const FullDataResetElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class FullDataResetElement extends FullDataResetElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        isSyncingPasswords: {
            type: BooleanConstructor;
            value: boolean;
        };
        isAccountStoreUser: {
            type: BooleanConstructor;
            value: boolean;
        };
        passwordsCount_: {
            type: StringConstructor;
            value: string;
        };
        passkeysCount_: {
            type: StringConstructor;
            value: string;
        };
        passwordsCountDetails_: {
            type: StringConstructor;
            value: string;
        };
        passkeysCountDetails_: {
            type: StringConstructor;
            value: string;
        };
    };
    isSyncingPasswords: boolean;
    isAccountStoreUser: boolean;
    private passwordsCount_;
    private passkeysCount_;
    private passwordsCountDetails_;
    private passkeysCountDetails_;
    private updateCounters_;
    private getFormattedCountString;
    private getFormattedSiteDetails;
    private onDeleteAllClick_;
    private onCancel_;
    private onConfirm_;
    private showToastWithResult_;
    private getConfirmationDialogTitle_;
    private getAriaDescription_;
    protected getWarningIcon_(): string;
    protected getPasskeyIcon_(): string;
    protected getPasswordIcon_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'full-data-reset': FullDataResetElement;
    }
}
export {};
