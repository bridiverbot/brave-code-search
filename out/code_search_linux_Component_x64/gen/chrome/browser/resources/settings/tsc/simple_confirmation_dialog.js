// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-simple-confirmation-dialog' is a generic
 * component for confirming an action the user has taken, given them an
 * opportunity to cancel.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './simple_confirmation_dialog.html.js';
export class SettingsSimpleConfirmationDialogElement extends CrLitElement {
    static get is() {
        return 'settings-simple-confirmation-dialog';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            titleText: { type: String },
            bodyText: { type: String },
            confirmText: { type: String },
            noPrimaryButton: { type: Boolean },
        };
    }
    #titleText_accessor_storage = '';
    get titleText() { return this.#titleText_accessor_storage; }
    set titleText(value) { this.#titleText_accessor_storage = value; }
    #bodyText_accessor_storage = '';
    get bodyText() { return this.#bodyText_accessor_storage; }
    set bodyText(value) { this.#bodyText_accessor_storage = value; }
    #confirmText_accessor_storage = '';
    get confirmText() { return this.#confirmText_accessor_storage; }
    set confirmText(value) { this.#confirmText_accessor_storage = value; }
    #noPrimaryButton_accessor_storage = false;
    get noPrimaryButton() { return this.#noPrimaryButton_accessor_storage; }
    set noPrimaryButton(value) { this.#noPrimaryButton_accessor_storage = value; }
    /** @return Whether the user confirmed the dialog. */
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onConfirmClick_() {
        this.$.dialog.close();
    }
    getConfirmButtonCssClass_() {
        return this.noPrimaryButton ? '' : 'action-button';
    }
}
customElements.define(SettingsSimpleConfirmationDialogElement.is, SettingsSimpleConfirmationDialogElement);
