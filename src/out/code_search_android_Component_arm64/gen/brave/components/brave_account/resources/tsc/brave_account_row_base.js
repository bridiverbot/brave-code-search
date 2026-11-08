/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { DialogMode } from './brave_account.mojom-webui.js';
import { showError, showSuccess } from './brave_account_shared.js';
// Declared as a one-element array because preprocessing keeps exactly one
// entry: two gated `export const`s of the same name would not lint.
export const ROW_BUTTON_SIZE = [
    // 
    // 
    'medium',
    // 
][0];
// Shared by the logged-out and logged-in rows, which differ only in their
// verification intent type (`Intent`) and how it is tagged into a
// `VerificationIntent` (logged-out vs logged-in). `Intent` is the bare
// per-state intent enum carried by `state.verification`.
export class BraveAccountRowBaseElement extends CrLitElement {
    static get properties() {
        return {
            browserProxy: { type: Object },
            isResendingConfirmationEmail: { type: Boolean, state: true },
            state: { type: Object },
        };
    }
    #browserProxy_accessor_storage;
    get browserProxy() { return this.#browserProxy_accessor_storage; }
    set browserProxy(value) { this.#browserProxy_accessor_storage = value; }
    #isResendingConfirmationEmail_accessor_storage = false;
    get isResendingConfirmationEmail() { return this.#isResendingConfirmationEmail_accessor_storage; }
    set isResendingConfirmationEmail(value) { this.#isResendingConfirmationEmail_accessor_storage = value; }
    #state_accessor_storage;
    // `& object` is only here to satisfy the @webui-eslint/lit-property-accessor
    // lint rule, which expects Object reactive properties to be typed as objects.
    // The actual shape of `state` is defined by the `State` constraint above.
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    // The pending-verification description ends with a sentence that wraps its
    // `resend` link text in `<a>` tags, so that the link text is translated in
    // context rather than as a standalone message. The tags are only used to
    // locate the link text - they are never parsed as HTML.
    getVerificationDescription() {
        const [beforeLink, linkLabel, afterLink] = loadTimeData
            .getString("SETTINGS_BRAVE_ACCOUNT_VERIFICATION_ROW_DESCRIPTION_3" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_VERIFICATION_ROW_DESCRIPTION_3 */)
            .split(/<a>|<\/a>/);
        return {
            beforeLink: [
                this.verificationIntentDescription,
                loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_VERIFICATION_ROW_DESCRIPTION_2" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_VERIFICATION_ROW_DESCRIPTION_2 */),
                beforeLink,
            ].join(' '),
            linkLabel,
            afterLink,
        };
    }
    async onResendConfirmationEmailLinkClicked() {
        if (this.isResendingConfirmationEmail)
            return;
        this.isResendingConfirmationEmail = true;
        assert(this.state.verification);
        try {
            await this.browserProxy.authentication.resendVerificationEmail(this.makeVerificationIntent(this.state.verification.intent));
            showSuccess('resendVerificationEmail', { durationMs: 30000 });
        }
        catch (e) {
            showError('resendVerificationEmail', e, { durationMs: 30000 });
        }
        this.isResendingConfirmationEmail = false;
    }
    onCancelVerificationButtonClicked() {
        assert(this.state.verification);
        this.browserProxy.authentication.cancelVerification(this.makeVerificationIntent(this.state.verification.intent));
    }
    openDialogInDefaultMode() {
        this.openDialog(DialogMode.kDefault);
    }
    openDialogInAccountDeletionMode() {
        this.openDialog(DialogMode.kAccountDeletion);
    }
    // Where the flows are opened is the host's decision: brave://settings opens a
    // dialog over the page, mobile presents them over the page serving the rows.
    // Either way the browser does it, so both go through the same call.
    openDialog(dialogMode) {
        this.browserProxy.dialogOpener.openDialog(dialogMode);
    }
}
