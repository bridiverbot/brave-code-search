/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { assertNotReachedCase } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { BraveAccountBrowserProxyImpl, } from './brave_account_browser_proxy.js';
import { showError, showSuccess } from './brave_account_shared.js';
import { getHtml } from './brave_account_otp_dialog.html.js';
import { LoggedInVerificationIntent, LoggedOutVerificationIntent, VerificationIntentFieldTags, whichVerificationIntent, } from './brave_account.mojom-webui.js';
export class BraveAccountOtpDialogElement extends CrLitElement {
    static get is() {
        return 'brave-account-otp-dialog';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            intent: { type: Object },
            code: { type: String },
            isCodeValid: { type: Boolean },
            isConfirmingCode: { type: Boolean, state: true },
            isResendingConfirmationEmail: { type: Boolean, state: true },
        };
    }
    async onConfirmCodeButtonClicked() {
        if (this.isConfirmingCode)
            return;
        this.isConfirmingCode = true;
        switch (whichVerificationIntent(this.intent)) {
            case VerificationIntentFieldTags.LOGGED_OUT_INTENT: {
                const loggedOutIntent = this.intent.loggedOutIntent;
                switch (loggedOutIntent) {
                    case LoggedOutVerificationIntent.kRegistration:
                        await this.confirmRegistrationCode();
                        break;
                    case LoggedOutVerificationIntent.kResetPassword:
                        await this.confirmResetPasswordCode();
                        break;
                    default:
                        assertNotReachedCase(loggedOutIntent);
                }
                break;
            }
            case VerificationIntentFieldTags.LOGGED_IN_INTENT: {
                const loggedInIntent = this.intent.loggedInIntent;
                switch (loggedInIntent) {
                    case LoggedInVerificationIntent.kChangePassword:
                        await this.confirmChangePasswordCode();
                        break;
                    default:
                        assertNotReachedCase(loggedInIntent);
                }
                break;
            }
        }
        this.isConfirmingCode = false;
    }
    async confirmRegistrationCode() {
        try {
            await this.browserProxy.authentication.registerStep3(this.code);
        }
        catch (e) {
            showError('register', e);
        }
    }
    async confirmResetPasswordCode() {
        try {
            await this.browserProxy.authentication.resetPasswordStep2(this.code);
        }
        catch (e) {
            showError('resetPassword', e);
        }
    }
    async confirmChangePasswordCode() {
        try {
            await this.browserProxy.authentication.changePasswordStep2(this.code);
        }
        catch (e) {
            showError('changePassword', e);
        }
    }
    async onResendEmailCodeButtonClicked() {
        if (this.isResendingConfirmationEmail)
            return;
        this.isResendingConfirmationEmail = true;
        try {
            await this.browserProxy.authentication.resendVerificationEmail(this.intent);
            showSuccess('resendVerificationEmail');
        }
        catch (e) {
            showError('resendVerificationEmail', e);
        }
        this.isResendingConfirmationEmail = false;
    }
    browserProxy = BraveAccountBrowserProxyImpl.getInstance();
    #intent_accessor_storage;
    get intent() { return this.#intent_accessor_storage; }
    set intent(value) { this.#intent_accessor_storage = value; }
    #code_accessor_storage = '';
    get code() { return this.#code_accessor_storage; }
    set code(value) { this.#code_accessor_storage = value; }
    #isCodeValid_accessor_storage = false;
    get isCodeValid() { return this.#isCodeValid_accessor_storage; }
    set isCodeValid(value) { this.#isCodeValid_accessor_storage = value; }
    #isConfirmingCode_accessor_storage = false;
    get isConfirmingCode() { return this.#isConfirmingCode_accessor_storage; }
    set isConfirmingCode(value) { this.#isConfirmingCode_accessor_storage = value; }
    #isResendingConfirmationEmail_accessor_storage = false;
    get isResendingConfirmationEmail() { return this.#isResendingConfirmationEmail_accessor_storage; }
    set isResendingConfirmationEmail(value) { this.#isResendingConfirmationEmail_accessor_storage = value; }
}
customElements.define(BraveAccountOtpDialogElement.is, BraveAccountOtpDialogElement);
