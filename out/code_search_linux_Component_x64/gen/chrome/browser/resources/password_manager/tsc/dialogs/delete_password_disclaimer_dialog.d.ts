import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface DeletePasswordDisclaimerDialogElement {
    $: {
        dialog: CrDialogElement;
        delete: CrButtonElement;
        text: HTMLElement;
        link: HTMLElement;
    };
}
declare const DeletePasswordDisclaimerDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class DeletePasswordDisclaimerDialogElement extends DeletePasswordDisclaimerDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * The password that is being displayed.
         */
        origin: StringConstructor;
        actionUrl: StringConstructor;
    };
    origin: string;
    actionUrl: string;
    private passwordManager_;
    connectedCallback(): void;
    private onDeleteClick_;
    private onCancelClick_;
    private hasSecureChangePasswordUrl_;
    /**
     * Returns the delete password description with a linkified change password
     * URL. Requires the change password URL to be present and secure.
     */
    private getDescriptionHtml_;
    /**
     * Returns the delete password description as a plain text.
     * Used when the change password URL is not present or insecure.
     */
    private getDescriptionText_;
}
declare global {
    interface HTMLElementTagNameMap {
        'delete-password-disclaimer-dialog': DeletePasswordDisclaimerDialogElement;
    }
}
export {};
