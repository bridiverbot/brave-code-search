import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface RemoveActorLoginPermissionDialogElement {
    $: {
        dialog: CrDialogElement;
        disconnect: CrButtonElement;
        text: HTMLElement;
    };
}
declare const RemoveActorLoginPermissionDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class RemoveActorLoginPermissionDialogElement extends RemoveActorLoginPermissionDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * The origin of the site.
         */
        origin: StringConstructor;
    };
    origin: string;
    connectedCallback(): void;
    private onDisconnectClick_;
    private onCancelClick_;
    /**
     * Returns the description for the dialog.
     */
    private getDescriptionText_;
}
declare global {
    interface HTMLElementTagNameMap {
        'remove-actor-login-permission-dialog': RemoveActorLoginPermissionDialogElement;
    }
}
export {};
