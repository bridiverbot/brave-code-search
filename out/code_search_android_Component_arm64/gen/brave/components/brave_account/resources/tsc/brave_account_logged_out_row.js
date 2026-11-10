/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { LoggedOutVerificationIntent, } from './brave_account.mojom-webui.js';
import { BraveAccountRowBaseElement } from './brave_account_row_base.js';
import { getCss } from './brave_account_row_common.css.js';
import { getHtml } from './brave_account_logged_out_row.html.js';
export class BraveAccountLoggedOutRowElement extends BraveAccountRowBaseElement {
    static get is() {
        return 'brave-account-logged-out-row';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    makeVerificationIntent(intent) {
        return { loggedOutIntent: intent };
    }
    get verificationIntentDescription() {
        assert(this.state.verification);
        return loadTimeData.getString(this.state.verification.intent
            === LoggedOutVerificationIntent.kResetPassword
            ? "SETTINGS_BRAVE_ACCOUNT_RESET_PASSWORD_ROW_DESCRIPTION_1" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_RESET_PASSWORD_ROW_DESCRIPTION_1 */ : "SETTINGS_BRAVE_ACCOUNT_VERIFICATION_ROW_DESCRIPTION_1" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_VERIFICATION_ROW_DESCRIPTION_1 */);
    }
}
customElements.define(BraveAccountLoggedOutRowElement.is, BraveAccountLoggedOutRowElement);
