/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { BraveAccountBrowserProxyImpl, } from './brave_account_browser_proxy.js';
import { getCss } from './brave_account_deletion_dialog.css.js';
import { getHtml } from './brave_account_deletion_dialog.html.js';
import { showError } from './brave_account_shared.js';
export class BraveAccountDeletionDialogElement extends CrLitElement {
    static get is() {
        return 'brave-account-deletion-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            confirmation: { type: String, state: true },
            isSubmitting: { type: Boolean, state: true },
        };
    }
    // Takes the keyword as a placeholder, so the label cannot go out of sync
    // with the word `onInput` compares against.
    getConfirmationLabel() {
        return loadTimeData.getStringF("BRAVE_ACCOUNT_DELETION_CONFIRMATION_LABEL" /* BraveAccountStrings.BRAVE_ACCOUNT_DELETION_CONFIRMATION_LABEL */, this.confirmationKeyword);
    }
    onInput(detail) {
        this.confirmation = detail.value.trim();
    }
    isConfirmed() {
        return this.confirmation === this.confirmationKeyword;
    }
    // An empty field is not an error yet - it is the starting state.
    hasError() {
        return this.confirmation.length !== 0 && !this.isConfirmed();
    }
    async onDeleteAccountButtonClicked() {
        if (this.isSubmitting)
            return;
        this.isSubmitting = true;
        try {
            await this.browserProxy.authentication.deleteAccount();
        }
        catch (e) {
            // Reset only on failure: on success the account leaves the logged-in
            // state and the page closes, so re-enabling would briefly offer a
            // second deletion mid-teardown.
            showError('deleteAccount', e);
            this.isSubmitting = false;
        }
    }
    browserProxy = BraveAccountBrowserProxyImpl.getInstance();
    confirmationKeyword = loadTimeData.getString("BRAVE_ACCOUNT_DELETION_CONFIRMATION_KEYWORD" /* BraveAccountStrings.BRAVE_ACCOUNT_DELETION_CONFIRMATION_KEYWORD */);
    #confirmation_accessor_storage = '';
    get confirmation() { return this.#confirmation_accessor_storage; }
    set confirmation(value) { this.#confirmation_accessor_storage = value; }
    #isSubmitting_accessor_storage = false;
    get isSubmitting() { return this.#isSubmitting_accessor_storage; }
    set isSubmitting(value) { this.#isSubmitting_accessor_storage = value; }
}
customElements.define(BraveAccountDeletionDialogElement.is, BraveAccountDeletionDialogElement);
