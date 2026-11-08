// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-gmail-otp-disclaimer-dialog' is the dialog that is
 * shown when turning on Gmail OTP filling requires smart features in Gmail to
 * be enabled.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './gmail_otp_disclaimer_dialog.css.js';
import { getHtml } from './gmail_otp_disclaimer_dialog.html.js';
export class SettingsGmailOtpDisclaimerDialogElement extends CrLitElement {
    static get is() {
        return 'settings-gmail-otp-disclaimer-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    onConfirmButtonClick_() {
        this.$.dialog.close();
    }
}
customElements.define(SettingsGmailOtpDisclaimerDialogElement.is, SettingsGmailOtpDisclaimerDialogElement);
