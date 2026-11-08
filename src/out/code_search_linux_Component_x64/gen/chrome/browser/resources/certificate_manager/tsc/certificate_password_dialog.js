// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The 'certificate-password-dialog' component is for showing
 * a dialog box that prompts the user to enter a password to decrypt a file
 * during client certificate import.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './certificate_password_dialog.html.js';
export class CertificatePasswordDialogElement extends CrLitElement {
    static get is() {
        return 'certificate-password-dialog';
    }
    render() {
        return getHtml.bind(this)();
    }
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    value() {
        return this.wasConfirmed() ? this.$.password.value : null;
    }
    onOkClick_() {
        this.$.dialog.close();
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
}
customElements.define(CertificatePasswordDialogElement.is, CertificatePasswordDialogElement);
