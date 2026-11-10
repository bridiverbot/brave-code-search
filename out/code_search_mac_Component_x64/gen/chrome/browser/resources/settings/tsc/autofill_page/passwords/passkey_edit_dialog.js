// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'passkey-edit-dialog' is the dialog that allows showing or
 * editing a passkey.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './passkey_edit_dialog.css.js';
import { getHtml } from './passkey_edit_dialog.html.js';
const PasskeyEditDialogElementBase = I18nMixinLit(CrLitElement);
export class PasskeyEditDialogElement extends PasskeyEditDialogElementBase {
    static get is() {
        return 'passkey-edit-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            username: { type: String },
            relyingPartyId: { type: String },
            usernameInputErrorMessage_: { type: String },
            dialogFootnote_: { type: String },
            usernameInputInvalid_: { type: Boolean },
        };
    }
    #username_accessor_storage = '';
    get username() { return this.#username_accessor_storage; }
    set username(value) { this.#username_accessor_storage = value; }
    #relyingPartyId_accessor_storage = '';
    get relyingPartyId() { return this.#relyingPartyId_accessor_storage; }
    set relyingPartyId(value) { this.#relyingPartyId_accessor_storage = value; }
    #usernameInputInvalid__accessor_storage = false;
    get usernameInputInvalid_() { return this.#usernameInputInvalid__accessor_storage; }
    set usernameInputInvalid_(value) { this.#usernameInputInvalid__accessor_storage = value; }
    #usernameInputErrorMessage__accessor_storage = '';
    get usernameInputErrorMessage_() { return this.#usernameInputErrorMessage__accessor_storage; }
    set usernameInputErrorMessage_(value) { this.#usernameInputErrorMessage__accessor_storage = value; }
    #dialogFootnote__accessor_storage = '';
    get dialogFootnote_() { return this.#dialogFootnote__accessor_storage; }
    set dialogFootnote_(value) { this.#dialogFootnote__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('relyingPartyId')) {
            this.dialogFootnote_ =
                this.i18n('passkeyEditDialogFootnote', this.relyingPartyId);
        }
        if (changedProperties.has('username')) {
            this.usernameInputInvalid_ = this.computeUsernameInputInvalid_();
        }
    }
    onUsernameValueChanged_(e) {
        this.username = e.detail.value;
    }
    onSaveButtonClick_() {
        this.fire('saved-passkey-edited', this.username);
        this.close();
    }
    computeUsernameInputInvalid_() {
        if (this.username.length === 0) {
            this.usernameInputErrorMessage_ = this.i18n('passkeyLengthError');
            return true;
        }
        return false;
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    close() {
        this.$.dialog.close();
    }
}
customElements.define(PasskeyEditDialogElement.is, PasskeyEditDialogElement);
