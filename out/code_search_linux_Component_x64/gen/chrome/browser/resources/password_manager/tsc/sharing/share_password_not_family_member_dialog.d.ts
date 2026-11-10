import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './metrics_utils.js';
import './share_password_dialog_header.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface SharePasswordNotFamilyMemberDialogElement {
    $: {
        description: HTMLElement;
        action: HTMLElement;
        header: HTMLElement;
    };
}
declare const SharePasswordNotFamilyMemberDialogElement_base: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class SharePasswordNotFamilyMemberDialogElement extends SharePasswordNotFamilyMemberDialogElement_base {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        dialogTitle: StringConstructor;
    };
    dialogTitle: string;
    private onDescriptionClick_;
    private onClickActionButton_;
}
declare global {
    interface HTMLElementTagNameMap {
        'share-password-not-family-member-dialog': SharePasswordNotFamilyMemberDialogElement;
    }
}
export {};
