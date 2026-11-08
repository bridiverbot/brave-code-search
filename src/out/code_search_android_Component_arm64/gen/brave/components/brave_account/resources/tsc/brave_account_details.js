/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { loadTimeData } from '//resources/js/load_time_data.js';
import { showError } from './brave_account_shared.js';
import { BraveAccountRowBaseElement } from './brave_account_row_base.js';
import { getCss } from './brave_account_details.css.js';
import { getHtml } from './brave_account_details.html.js';
import { TextTruncator } from './brave_account_text_truncator.js';
export class BraveAccountDetailsElement extends BraveAccountRowBaseElement {
    static get is() {
        return 'brave-account-details';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ...super.properties,
            truncatedEmail: { type: String, state: true },
        };
    }
    #truncatedEmail_accessor_storage = '';
    get truncatedEmail() { return this.#truncatedEmail_accessor_storage; }
    set truncatedEmail(value) { this.#truncatedEmail_accessor_storage = value; }
    isChangingPassword = false;
    truncator = new TextTruncator((text) => {
        this.truncatedEmail = text;
    });
    makeVerificationIntent(intent) {
        return { loggedInIntent: intent };
    }
    get verificationIntentDescription() {
        return loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_CHANGE_PASSWORD_ROW_DESCRIPTION_1" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_CHANGE_PASSWORD_ROW_DESCRIPTION_1 */);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.truncator.disconnect();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('state')) {
            // Verification markup replaces `#email` while a password change is
            // awaiting verification.
            const element = this.shadowRoot?.querySelector('#email');
            if (element) {
                this.truncator.observe(element, this.state.email);
            }
            else {
                this.truncator.disconnect();
            }
        }
    }
    onLogOutButtonClicked() {
        this.browserProxy.authentication.logOut();
    }
    async onChangePasswordButtonClicked() {
        if (this.isChangingPassword)
            return;
        this.isChangingPassword = true;
        try {
            await this.browserProxy.authentication.changePasswordStep1(this.state.email);
            this.openDialogInDefaultMode();
        }
        catch (e) {
            showError('changePassword', e, {
                title: loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_CHANGE_PASSWORD_ERROR_TITLE" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_CHANGE_PASSWORD_ERROR_TITLE */),
                durationMs: 30000,
            });
        }
        this.isChangingPassword = false;
    }
}
customElements.define(BraveAccountDetailsElement.is, BraveAccountDetailsElement);
