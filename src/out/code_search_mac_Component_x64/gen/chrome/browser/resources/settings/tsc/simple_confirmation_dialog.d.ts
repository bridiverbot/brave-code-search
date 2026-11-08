/**
 * @fileoverview 'settings-simple-confirmation-dialog' is a generic
 * component for confirming an action the user has taken, given them an
 * opportunity to cancel.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsSimpleConfirmationDialogElement {
    $: {
        dialog: CrDialogElement;
        cancel: HTMLElement;
        confirm: HTMLElement;
    };
}
export type SimpleConfirmationDialogElement = SettingsSimpleConfirmationDialogElement;
export declare class SettingsSimpleConfirmationDialogElement extends CrLitElement {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        titleText: {
            type: StringConstructor;
        };
        bodyText: {
            type: StringConstructor;
        };
        confirmText: {
            type: StringConstructor;
        };
        noPrimaryButton: {
            type: BooleanConstructor;
        };
    };
    accessor titleText: string;
    accessor bodyText: string;
    accessor confirmText: string;
    accessor noPrimaryButton: boolean;
    /** @return Whether the user confirmed the dialog. */
    wasConfirmed(): boolean;
    protected onCancelClick_(): void;
    protected onConfirmClick_(): void;
    protected getConfirmButtonCssClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-simple-confirmation-dialog': SettingsSimpleConfirmationDialogElement;
    }
}
