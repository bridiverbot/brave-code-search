/**
 * @fileoverview 'passkey-edit-dialog' is the dialog that allows showing or
 * editing a passkey.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface PasskeyEditDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare const PasskeyEditDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export type SavedPasskeyEditedEvent = CustomEvent<string>;
declare global {
    interface HTMLElementEventMap {
        'saved-passkey-edited': SavedPasskeyEditedEvent;
    }
}
export declare class PasskeyEditDialogElement extends PasskeyEditDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        username: {
            type: StringConstructor;
        };
        relyingPartyId: {
            type: StringConstructor;
        };
        usernameInputErrorMessage_: {
            type: StringConstructor;
        };
        dialogFootnote_: {
            type: StringConstructor;
        };
        usernameInputInvalid_: {
            type: BooleanConstructor;
        };
    };
    accessor username: string;
    accessor relyingPartyId: string;
    protected accessor usernameInputInvalid_: boolean;
    protected accessor usernameInputErrorMessage_: string;
    protected accessor dialogFootnote_: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onUsernameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSaveButtonClick_(): void;
    private computeUsernameInputInvalid_;
    protected onCancelClick_(): void;
    close(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'passkey-edit-dialog': PasskeyEditDialogElement;
    }
}
export {};
