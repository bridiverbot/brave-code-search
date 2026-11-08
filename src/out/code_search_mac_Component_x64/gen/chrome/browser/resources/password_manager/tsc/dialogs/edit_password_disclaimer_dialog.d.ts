import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface EditPasswordDisclaimerDialogElement {
    $: {
        dialog: CrDialogElement;
        edit: CrButtonElement;
    };
}
declare const EditPasswordDisclaimerDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class EditPasswordDisclaimerDialogElement extends EditPasswordDisclaimerDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * The website origin that is being displayed.
         */
        origin: StringConstructor;
    };
    origin: string;
    connectedCallback(): void;
    private onEditClick_;
    private onCancel_;
    private getDisclaimerTitle_;
    private getDisclaimerDescription_;
}
declare global {
    interface HTMLElementTagNameMap {
        'edit-password-disclaimer-dialog': EditPasswordDisclaimerDialogElement;
    }
}
export {};
