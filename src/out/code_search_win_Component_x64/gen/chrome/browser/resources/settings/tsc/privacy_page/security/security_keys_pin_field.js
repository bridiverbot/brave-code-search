// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-security-keys-pin-field' is a component for entering
 * a security key PIN.
 */
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../../i18n_setup.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './security_keys_pin_field.css.js';
import { getHtml } from './security_keys_pin_field.html.js';
const SettingsSecurityKeysPinFieldElementBase = I18nMixinLit(CrLitElement);
export class SettingsSecurityKeysPinFieldElement extends SettingsSecurityKeysPinFieldElementBase {
    static get is() {
        return 'settings-security-keys-pin-field';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            minPinLength: { type: Number },
            error_: { type: String },
            value_: { type: String },
            inputVisible_: { type: Boolean },
        };
    }
    #minPinLength_accessor_storage = 4;
    get minPinLength() { return this.#minPinLength_accessor_storage; }
    set minPinLength(value) { this.#minPinLength_accessor_storage = value; }
    #error__accessor_storage = '';
    get error_() { return this.#error__accessor_storage; }
    set error_(value) { this.#error__accessor_storage = value; }
    #value__accessor_storage = '';
    get value_() { return this.#value__accessor_storage; }
    set value_(value) { this.#value__accessor_storage = value; }
    #inputVisible__accessor_storage = false;
    get inputVisible_() { return this.#inputVisible__accessor_storage; }
    set inputVisible_(value) { this.#inputVisible__accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('error_')) {
            this.errorChanged_();
        }
    }
    /** Focuses the PIN input field. */
    focus() {
        this.$.pin.focus();
    }
    /**
     * Validates the PIN and sets the validation error if it is not valid.
     * @return True iff the PIN is valid.
     */
    validate_() {
        const error = this.isValidPin_(this.value_);
        if (error !== '') {
            this.error_ = error;
            return false;
        }
        return true;
    }
    /**
     * Attempts submission of the PIN by invoking |submitFunc|. Updates the UI
     * to show an error if the PIN was incorrect.
     * @return A Promise that resolves if the PIN was correct, else rejects.
     */
    trySubmit(submitFunc) {
        if (!this.validate_()) {
            this.focus();
            return Promise.reject();
        }
        return submitFunc(this.value_).then(retries => {
            if (retries !== null) {
                this.showIncorrectPinError_(retries);
                this.focus();
                return Promise.reject();
            }
            return;
        });
    }
    /**
     * Sets the validation error to indicate the PIN was incorrect.
     * @param retries The number of retries remaining.
     */
    showIncorrectPinError_(retries) {
        // Warn the user if the number of retries is getting low.
        let error;
        if (1 < retries && retries <= 3) {
            error =
                this.i18n('securityKeysPINIncorrectRetriesPl', retries.toString());
        }
        else if (retries === 1) {
            error = this.i18n('securityKeysPINIncorrectRetriesSin');
        }
        else {
            error = this.i18n('securityKeysPINIncorrect');
        }
        this.error_ = error;
    }
    onPinValueChanged_(e) {
        this.value_ = e.detail.value;
    }
    onPinInput_() {
        // Typing in the PIN box after an error makes the error message
        // disappear.
        this.error_ = '';
    }
    /**
     * Helper function to detect when an error string is empty.
     * @return True iff |s| is non-empty.
     */
    isNonEmpty_() {
        return this.error_ !== '';
    }
    /**
     * @return The PIN-input element type.
     */
    inputType_() {
        return this.inputVisible_ ? 'text' : 'password';
    }
    /**
     * @return The class (and thus icon) to be displayed.
     */
    showButtonClass_() {
        return 'icon-visibility' + (this.inputVisible_ ? '-off' : '');
    }
    /**
     * @return The tooltip for the icon.
     */
    showButtonTitle_() {
        return this.i18n(this.inputVisible_ ? 'securityKeysHidePINs' : 'securityKeysShowPINs');
    }
    /**
     * onClick handler for the show/hide icon.
     */
    onShowButtonClick_() {
        this.inputVisible_ = !this.inputVisible_;
    }
    /**
     * @param pin A candidate PIN.
     * @return An error string or else '' to indicate validity.
     */
    isValidPin_(pin) {
        // The UTF-8 encoding of the PIN must be between minPinLength
        // and 63 bytes, and the final byte cannot be zero.
        const utf8Encoded = new TextEncoder().encode(pin);
        if (utf8Encoded.length < this.minPinLength) {
            return this.i18n('securityKeysPINTooShort');
        }
        if (utf8Encoded.length > 63 ||
            // If the PIN somehow has a NUL at the end then it's invalid, but this
            // is so obscure that we don't try to message it. Rather we just say
            // that it's too long because trimming the final character is the best
            // response by the user.
            utf8Encoded[utf8Encoded.length - 1] === 0) {
            return this.i18n('securityKeysPINTooLong');
        }
        // A PIN must contain at least minPinLength code-points. Javascript strings
        // are UCS-2 and the |length| property counts UCS-2 elements, not
        // code-points. (For example, '\u{1f6b4}'.length === 2, but it's a single
        // code-point.) Therefore, iterate over the string (which does yield
        // codepoints) and check that four or more were seen.
        let length = 0;
        for (const _codepoint of pin) {
            length++;
        }
        if (length < this.minPinLength) {
            return this.i18n('securityKeysPINTooShort');
        }
        return '';
    }
    errorChanged_() {
        // Make screen readers announce changes to the PIN validation error
        // label.
        getAnnouncerInstance().announce(this.error_);
    }
}
customElements.define(SettingsSecurityKeysPinFieldElement.is, SettingsSecurityKeysPinFieldElement);
