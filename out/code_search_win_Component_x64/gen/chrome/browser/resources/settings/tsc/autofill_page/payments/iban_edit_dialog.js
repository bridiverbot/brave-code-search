// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-iban-edit-dialog' is the dialog that allows
 * editing or creating an IBAN entry.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '../../i18n_setup.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './iban_edit_dialog.css.js';
import { getHtml } from './iban_edit_dialog.html.js';
import { PaymentsManagerImpl } from './payments_manager_proxy.js';
/**
 * Enum of possible states for the iban. An iban is valid if it has the correct
 * structure, matches the length for its country code, and passes a checksum.
 * Otherwise, it is invalid and we may show an error to the user in cases where
 * we are certain they have entered an invalid iban (i.e. vs still typing).
 */
var IbanValidationState;
(function (IbanValidationState) {
    IbanValidationState["VALID"] = "valid";
    IbanValidationState["INVALID_NO_ERROR"] = "invalid-no-error";
    IbanValidationState["INVALID_WITH_ERROR"] = "invalid-with-error";
})(IbanValidationState || (IbanValidationState = {}));
const SettingsIbanEditDialogElementBase = I18nMixinLit(CrLitElement);
export class SettingsIbanEditDialogElement extends SettingsIbanEditDialogElementBase {
    static get is() {
        return 'settings-iban-edit-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The IBAN being added or edited. Null means add a new IBAN, otherwise,
             * edit the existing IBAN.
             */
            iban: { type: Object },
            /**
             * The actual title that's used for this dialog. Will be context sensitive
             * based on which type of IBAN method is being viewed, and if it is being
             * created or edited.
             */
            title_: { type: String },
            /**
             * Backing data for inputs in the dialog, each bound to the corresponding
             * HTML elements.
             *
             * Note that value_ is unsanitized; code should instead use
             * `sanitizedIban_`.
             */
            value_: { type: String },
            nickname_: { type: String },
            /**
             * A sanitized version of `value_` with whitespace trimmed.
             */
            sanitizedIban_: { type: String },
            /** Whether the current iban field is invalid. */
            ibanValidationState_: { type: String },
        };
    }
    #iban_accessor_storage = null;
    get iban() { return this.#iban_accessor_storage; }
    set iban(value) { this.#iban_accessor_storage = value; }
    #title__accessor_storage = '';
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    #value__accessor_storage = '';
    get value_() { return this.#value__accessor_storage; }
    set value_(value) { this.#value__accessor_storage = value; }
    #nickname__accessor_storage = '';
    get nickname_() { return this.#nickname__accessor_storage; }
    set nickname_(value) { this.#nickname__accessor_storage = value; }
    #sanitizedIban__accessor_storage = '';
    get sanitizedIban_() { return this.#sanitizedIban__accessor_storage; }
    set sanitizedIban_(value) { this.#sanitizedIban__accessor_storage = value; }
    #ibanValidationState__accessor_storage = IbanValidationState.INVALID_NO_ERROR;
    get ibanValidationState_() { return this.#ibanValidationState__accessor_storage; }
    set ibanValidationState_(value) { this.#ibanValidationState__accessor_storage = value; }
    paymentsManager_ = PaymentsManagerImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        if (this.iban) {
            // Save IBAN button is by default enabled in 'EDIT' mode as IBAN value is
            // pre-populated.
            this.value_ = this.iban.value || '';
            this.nickname_ = this.iban.nickname || '';
            this.title_ = this.i18n('editIbanTitle');
            this.ibanValidationState_ = IbanValidationState.VALID;
        }
        else {
            this.title_ = this.i18n('addIbanTitle');
            // Save IBAN button is disabled in 'ADD' mode as IBAN value is empty.
            this.ibanValidationState_ = IbanValidationState.INVALID_NO_ERROR;
        }
        this.$.dialog.showModal();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('value_')) {
            this.sanitizedIban_ = this.sanitizeIban_(this.value_);
        }
        if (changedPrivateProperties.has('sanitizedIban_')) {
            this.onSanitizedIbanChanged_();
        }
    }
    /** Closes the dialog. */
    close() {
        this.$.dialog.close();
    }
    onValueChanged_(e) {
        this.value_ = e.detail.value;
    }
    onNicknameValueChanged_(e) {
        this.nickname_ = e.detail.value;
    }
    /**
     * Handler for clicking the 'cancel' button. Should just dismiss the dialog.
     */
    onCancelButtonClick_() {
        this.$.dialog.cancel();
    }
    /**
     * Handler for clicking the save button.
     */
    onIbanSaveButtonClick_() {
        const iban = {
            guid: this.iban?.guid,
            value: this.sanitizedIban_,
            nickname: this.nickname_ ? this.nickname_.trim() : '',
        };
        this.fire('save-iban', iban);
        this.close();
    }
    async onSanitizedIbanChanged_() {
        this.ibanValidationState_ =
            await this.computeIbanValidationState_(/*isBlur=*/ false);
    }
    async onIbanInputBlur_(event) {
        assert(event.type === 'blur');
        this.ibanValidationState_ =
            await this.computeIbanValidationState_(/*isBlur=*/ true);
    }
    isIbanValid_() {
        return this.ibanValidationState_ === IbanValidationState.VALID;
    }
    showErrorForIban_() {
        return this.ibanValidationState_ === IbanValidationState.INVALID_WITH_ERROR;
    }
    sanitizeIban_(value) {
        return value ? value.replace(/\s/g, '') : '';
    }
    async computeIbanValidationState_(isBlur) {
        const isValid = await this.isValidIban();
        if (isValid) {
            return IbanValidationState.VALID;
        }
        // We do not want to show an 'invalid iban' error to users if they have not
        // yet finished typing the iban, but unfortunately different countries can
        // have different iban lengths so we do not know when the user might be
        // finished.
        //
        // In order to minimize false-positive errors, we only show an error if the
        // user has entered at least 24 characters (the average IBAN length), or if
        // they unfocus the IBAN input (which implies they are finished entering
        // their IBAN).
        return (this.sanitizedIban_.length >= 24 || isBlur) ?
            IbanValidationState.INVALID_WITH_ERROR :
            IbanValidationState.INVALID_NO_ERROR;
    }
    async isValidIban() {
        if (!this.sanitizedIban_) {
            return false;
        }
        return this.paymentsManager_.isValidIban(this.sanitizedIban_);
    }
    /**
     * @return nickname character length.
     */
    computeNicknameCharCount_() {
        return (this.nickname_ || '').length;
    }
}
customElements.define(SettingsIbanEditDialogElement.is, SettingsIbanEditDialogElement);
