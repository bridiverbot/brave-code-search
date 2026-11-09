/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { assert, assertNotReached } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { BraveAccountBrowserProxyImpl, } from './brave_account_browser_proxy.js';
import { getHtml } from './brave_account_credentials_dialog.html.js';
import { LoggedInVerificationIntent, LoggedOutVerificationIntent, VerificationIntentFieldTags, whichVerificationIntent, } from './brave_account.mojom-webui.js';
import { showError } from './brave_account_shared.js';
// @ts-expect-error: no type definitions are generated for opaque_ke.bundle.js
import { Registration } from 'chrome://resources/brave/opaque_ke.bundle.js';
export class BraveAccountCredentialsDialogElement extends CrLitElement {
    static get is() {
        return 'brave-account-credentials-dialog';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            email: { type: String },
            isCapsLockOn: { type: Boolean },
            isEmailValid: { type: Boolean },
            isPasswordStrongEnough: { type: Boolean },
            isPasswordValid: { type: Boolean },
            isSubmitting: { type: Boolean, state: true },
            password: { type: String },
            passwordConfirmation: { type: String },
            verification: { type: Object },
        };
    }
    // The reason this happens here (rather than in BraveAccountService) is that
    // both `registration.start()` and `registration.finish()` invoke the OPAQUE
    // protocol in our WASM (compiled from Rust), and so the flow must run in the
    // renderer to manage the transient cryptographic state — the service only
    // transports the two server round trips. We'll revisit handling this
    // through Mojo in C++ if that proves practical.
    async onSubmitButtonClicked() {
        if (this.isSubmitting)
            return;
        this.isSubmitting = true;
        if (!this.verification) {
            await this.register();
        }
        else {
            switch (whichVerificationIntent(this.verification.intent)) {
                case VerificationIntentFieldTags.LOGGED_OUT_INTENT: {
                    const intent = this.verification.intent.loggedOutIntent;
                    switch (intent) {
                        case LoggedOutVerificationIntent.kResetPassword:
                            await this.resetPassword();
                            break;
                        default:
                            // kRegistration never arrives with a verification - that's the
                            // registration path above, which has no verification at all.
                            assertNotReached(`Unexpected intent: ${intent}!`);
                    }
                    break;
                }
                case VerificationIntentFieldTags.LOGGED_IN_INTENT: {
                    const intent = this.verification.intent.loggedInIntent;
                    switch (intent) {
                        case LoggedInVerificationIntent.kChangePassword:
                            await this.changePassword();
                            break;
                        default:
                            assertNotReached(`Unexpected intent: ${intent}!`);
                    }
                    break;
                }
            }
        }
        this.isSubmitting = false;
    }
    async register() {
        try {
            const blindedMessage = this.registration.start(this.password);
            const { encryptedVerificationToken, serializedResponse } = await this.browserProxy.authentication.registerStep1(this.getEmail(), blindedMessage);
            const serializedRecord = this.registration.finish(serializedResponse, this.password, this.getEmail());
            await this.browserProxy.authentication.registerStep2(encryptedVerificationToken, serializedRecord);
        }
        catch (e) {
            showError('register', e);
        }
    }
    async resetPassword() {
        try {
            const blindedMessage = this.registration.start(this.password);
            const { serializedResponse } = await this.browserProxy.authentication.resetPasswordStep3(blindedMessage);
            const serializedRecord = this.registration.finish(serializedResponse, this.password, this.getEmail());
            await this.browserProxy.authentication.resetPasswordStep4(serializedRecord, this.getEmail());
        }
        catch (e) {
            showError('resetPassword', e);
        }
    }
    async changePassword() {
        try {
            const blindedMessage = this.registration.start(this.password);
            const { serializedResponse } = await this.browserProxy.authentication.changePasswordStep3(blindedMessage);
            const serializedRecord = this.registration.finish(serializedResponse, this.password, this.getEmail());
            await this.browserProxy.authentication.changePasswordStep4(serializedRecord);
        }
        catch (e) {
            showError('changePassword', e);
        }
    }
    getEmail() {
        const email = this.verification?.verifiedEmail ?? this.email;
        assert(email);
        return email;
    }
    isChangePassword() {
        return (this.verification !== undefined
            && whichVerificationIntent(this.verification.intent)
                === VerificationIntentFieldTags.LOGGED_IN_INTENT
            && this.verification.intent.loggedInIntent
                === LoggedInVerificationIntent.kChangePassword);
    }
    browserProxy = BraveAccountBrowserProxyImpl.getInstance();
    #email_accessor_storage = '';
    get email() { return this.#email_accessor_storage; }
    set email(value) { this.#email_accessor_storage = value; }
    #isCapsLockOn_accessor_storage = false;
    get isCapsLockOn() { return this.#isCapsLockOn_accessor_storage; }
    set isCapsLockOn(value) { this.#isCapsLockOn_accessor_storage = value; }
    #isEmailValid_accessor_storage = false;
    get isEmailValid() { return this.#isEmailValid_accessor_storage; }
    set isEmailValid(value) { this.#isEmailValid_accessor_storage = value; }
    #isPasswordStrongEnough_accessor_storage = false;
    get isPasswordStrongEnough() { return this.#isPasswordStrongEnough_accessor_storage; }
    set isPasswordStrongEnough(value) { this.#isPasswordStrongEnough_accessor_storage = value; }
    #isPasswordValid_accessor_storage = false;
    get isPasswordValid() { return this.#isPasswordValid_accessor_storage; }
    set isPasswordValid(value) { this.#isPasswordValid_accessor_storage = value; }
    #isSubmitting_accessor_storage = false;
    get isSubmitting() { return this.#isSubmitting_accessor_storage; }
    set isSubmitting(value) { this.#isSubmitting_accessor_storage = value; }
    #password_accessor_storage = '';
    get password() { return this.#password_accessor_storage; }
    set password(value) { this.#password_accessor_storage = value; }
    #passwordConfirmation_accessor_storage = '';
    get passwordConfirmation() { return this.#passwordConfirmation_accessor_storage; }
    set passwordConfirmation(value) { this.#passwordConfirmation_accessor_storage = value; }
    #verification_accessor_storage = undefined;
    // The pending verification (tagged intent + verified email), or `undefined`
    // during registration. Drives the password reset/change dispatch
    // and the dialog's title/description/button text.
    get verification() { return this.#verification_accessor_storage; }
    set verification(value) { this.#verification_accessor_storage = value; }
    registration = new Registration();
}
customElements.define(BraveAccountCredentialsDialogElement.is, BraveAccountCredentialsDialogElement);
