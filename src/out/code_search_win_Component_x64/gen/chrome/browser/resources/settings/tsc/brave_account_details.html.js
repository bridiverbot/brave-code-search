/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { assert } from '//resources/js/assert.js';
import { html } from '//resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { ROW_BUTTON_SIZE } from './brave_account_row_base.js';
import { LoggedInVerificationIntent } from './brave_account.mojom-webui.js';
export function getHtml() {
    // Logged-in verification is always a password change - there is no other
    // `LoggedInVerificationIntent` - so the verification markup branches only on
    // `verifiedEmail`.
    assert(!this.state.verification
        || this.state.verification.intent
            === LoggedInVerificationIntent.kChangePassword);
    // On desktop the heading is provided by the enclosing brave://settings
    // section.
    return html `${this.state.verification
        ? html ` <div class="first-row">
          
            <leo-icon name="social-brave-release-favicon-fullheight-color">
            </leo-icon>
          
          <div class="title-and-description">
            <div class="title">
              ${loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_VERIFICATION_ROW_TITLE" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_VERIFICATION_ROW_TITLE */)}
            </div>
            <div class="description">
              ${this.state.verification.verifiedEmail
            ? html `${loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_CHANGE_PASSWORD_VERIFIED_ROW_DESCRIPTION" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_CHANGE_PASSWORD_VERIFIED_ROW_DESCRIPTION */)}`
            : html `${this.getVerificationDescription().beforeLink}
                    
                      <leo-link
                        @click=${this.onResendConfirmationEmailLinkClicked}
                      >
                    
                    ${this.getVerificationDescription().linkLabel}
                    
                      </leo-link>
                    
                    ${this.getVerificationDescription().afterLink}`}
            </div>
          </div>
        </div>
        <div class="second-row">
          <leo-button

            kind="plain"


            size=${ROW_BUTTON_SIZE}
            @click=${this.openDialogInDefaultMode}
          >
            ${loadTimeData.getString(this.state.verification.verifiedEmail
            ? "SETTINGS_BRAVE_ACCOUNT_SET_NEW_PASSWORD_BUTTON_LABEL" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_SET_NEW_PASSWORD_BUTTON_LABEL */ : "SETTINGS_BRAVE_ACCOUNT_ENTER_VERIFICATION_CODE_BUTTON_LABEL" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_ENTER_VERIFICATION_CODE_BUTTON_LABEL */)}
          </leo-button>

          <leo-button
            kind="plain"
            size=${ROW_BUTTON_SIZE}
            class="cancel-verification-button"
            @click=${this.onCancelVerificationButtonClicked}
          >
            ${loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_CANCEL_CHANGE_PASSWORD_BUTTON_LABEL" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_CANCEL_CHANGE_PASSWORD_BUTTON_LABEL */)}
          </leo-button>
        </div>`
        : html `
        <div class="details">
          <div class="detail">
            <div class="label">
              ${loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_EMAIL_ADDRESS_LABEL" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_EMAIL_ADDRESS_LABEL */)}
            </div>
            <leo-input
              id="email"
              disabled
              .value=${this.truncatedEmail}
            ></leo-input>
          </div>
          <div class="detail">
            <div class="label">
              ${loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_PASSWORD_LABEL" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_PASSWORD_LABEL */)}
            </div>
            <leo-button
              kind="outline"
              size="small"
              @click=${this.onChangePasswordButtonClicked}
            >
              ${loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_CHANGE_BUTTON_LABEL" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_CHANGE_BUTTON_LABEL */)}
            </leo-button>
          </div>
          <div class="account-actions">
            <leo-button
              kind="plain"
              size=${ROW_BUTTON_SIZE}
              @click=${this.onLogOutButtonClicked}
            >
              <leo-icon
                slot="icon-before"
                name="outside"
              ></leo-icon>
              ${loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_LOG_OUT_BUTTON_LABEL" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_LOG_OUT_BUTTON_LABEL */)}
            </leo-button>
            <leo-button
              kind="plain"
              size=${ROW_BUTTON_SIZE}
              class="delete-account-button"
              @click=${this.openDialogInAccountDeletionMode}
            >
              <leo-icon
                slot="icon-before"
                name="trash"
              ></leo-icon>
              ${loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_DELETE_ACCOUNT_BUTTON_LABEL" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_DELETE_ACCOUNT_BUTTON_LABEL */)}
            </leo-button>
          </div>
        </div>`}`;
}
