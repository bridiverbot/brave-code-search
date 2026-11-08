// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The 'certificate-confirmation-dialog' component is for showing
 * a dialog box that prompts the user to confirm or cancel an operation such as
 * deleting a certificate.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './certificate_confirmation_dialog.html.js';
export class CertificateConfirmationDialogElement extends CrLitElement {
    static get is() {
        return 'certificate-confirmation-dialog';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dialogTitle: { type: String },
            dialogMessage: { type: String },
        };
    }
    #dialogTitle_accessor_storage = '';
    get dialogTitle() { return this.#dialogTitle_accessor_storage; }
    set dialogTitle(value) { this.#dialogTitle_accessor_storage = value; }
    #dialogMessage_accessor_storage = '';
    get dialogMessage() { return this.#dialogMessage_accessor_storage; }
    set dialogMessage(value) { this.#dialogMessage_accessor_storage = value; }
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    onOkClick_() {
        this.$.dialog.close();
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
}
customElements.define(CertificateConfirmationDialogElement.is, CertificateConfirmationDialogElement);
