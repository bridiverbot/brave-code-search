/**
 * @fileoverview 'settings-gmail-otp-disclaimer-dialog' is the dialog that is
 * shown when turning on Gmail OTP filling requires smart features in Gmail to
 * be enabled.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsGmailOtpDisclaimerDialogElement {
    $: {
        confirmButton: CrButtonElement;
        dialog: CrDialogElement;
    };
}
export declare class SettingsGmailOtpDisclaimerDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected onConfirmButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-gmail-otp-disclaimer-dialog': SettingsGmailOtpDisclaimerDialogElement;
    }
}
