// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-security-keys-set-pin-dialog' is a dialog for
 * setting and changing security key PINs.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '../../i18n_setup.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SecurityKeysPinBrowserProxyImpl } from './security_keys_browser_proxy.js';
import { getCss } from './security_keys_set_pin_dialog.css.js';
import { getHtml } from './security_keys_set_pin_dialog.html.js';
export var SetPinDialogPage;
(function (SetPinDialogPage) {
    SetPinDialogPage["INITIAL"] = "initial";
    SetPinDialogPage["NO_PIN_SUPPORT"] = "noPINSupport";
    SetPinDialogPage["REINSERT"] = "reinsert";
    SetPinDialogPage["LOCKED"] = "locked";
    SetPinDialogPage["ERROR"] = "error";
    SetPinDialogPage["PIN_PROMPT"] = "pinPrompt";
    SetPinDialogPage["SUCCESS"] = "success";
})(SetPinDialogPage || (SetPinDialogPage = {}));
const SettingsSecurityKeysSetPinDialogElementBase = I18nMixinLit(CrLitElement);
export class SettingsSecurityKeysSetPinDialogElement extends SettingsSecurityKeysSetPinDialogElementBase {
    static get is() {
        return 'settings-security-keys-set-pin-dialog';
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
             * Whether the dialog is in a state where the Set PIN button should be
             * enabled.
             */
            setPINButtonValid_: { type: Boolean },
            /**
             * The value of the new PIN textbox.
             */
            newPIN_: { type: String },
            confirmPIN_: { type: String },
            currentPIN_: { type: String },
            /**
             * The minimum length for the currently set PIN.
             */
            currentMinPinLength_: { type: Number },
            /**
             * The minimum length to set a new PIN.
             */
            newMinPinLength_: { type: Number },
            /**
             * The number of PIN attempts remaining.
             */
            retries_: { type: Number },
            /**
             * A CTAP error code when we don't recognise the specific error.
             */
            errorCode_: { type: Number },
            /**
             * Whether an entry for the current PIN should be displayed. (If no PIN
             * has been set then it won't be shown.)
             */
            showCurrentEntry_: { type: Boolean },
            /**
             * Error string to display under the current PIN entry, or empty.
             */
            currentPINError_: { type: String },
            /**
             * Error string to display under the new PIN entry, or empty.
             */
            newPINError_: { type: String },
            /**
             * Error string to display under the confirmation PIN entry, or empty.
             */
            confirmPINError_: { type: String },
            /**
             * Whether the dialog process has completed, successfully or otherwise.
             */
            complete_: { type: Boolean },
            /**
             * The id of an element on the page that is currently shown.
             */
            shown_: { type: String },
            /**
             * Whether the contents of the PIN entries are visible, or are displayed
             * like passwords.
             */
            pinsVisible_: { type: Boolean },
            title_: { type: String },
            newPINDialogDescription_: { type: String },
        };
    }
    #setPINButtonValid__accessor_storage = false;
    get setPINButtonValid_() { return this.#setPINButtonValid__accessor_storage; }
    set setPINButtonValid_(value) { this.#setPINButtonValid__accessor_storage = value; }
    #newPIN__accessor_storage = '';
    get newPIN_() { return this.#newPIN__accessor_storage; }
    set newPIN_(value) { this.#newPIN__accessor_storage = value; }
    #confirmPIN__accessor_storage = '';
    get confirmPIN_() { return this.#confirmPIN__accessor_storage; }
    set confirmPIN_(value) { this.#confirmPIN__accessor_storage = value; }
    #currentPIN__accessor_storage = '';
    get currentPIN_() { return this.#currentPIN__accessor_storage; }
    set currentPIN_(value) { this.#currentPIN__accessor_storage = value; }
    #currentMinPinLength__accessor_storage = undefined;
    get currentMinPinLength_() { return this.#currentMinPinLength__accessor_storage; }
    set currentMinPinLength_(value) { this.#currentMinPinLength__accessor_storage = value; }
    #newMinPinLength__accessor_storage = undefined;
    get newMinPinLength_() { return this.#newMinPinLength__accessor_storage; }
    set newMinPinLength_(value) { this.#newMinPinLength__accessor_storage = value; }
    #retries__accessor_storage = undefined;
    get retries_() { return this.#retries__accessor_storage; }
    set retries_(value) { this.#retries__accessor_storage = value; }
    #errorCode__accessor_storage = undefined;
    get errorCode_() { return this.#errorCode__accessor_storage; }
    set errorCode_(value) { this.#errorCode__accessor_storage = value; }
    #showCurrentEntry__accessor_storage = false;
    get showCurrentEntry_() { return this.#showCurrentEntry__accessor_storage; }
    set showCurrentEntry_(value) { this.#showCurrentEntry__accessor_storage = value; }
    #currentPINError__accessor_storage = '';
    get currentPINError_() { return this.#currentPINError__accessor_storage; }
    set currentPINError_(value) { this.#currentPINError__accessor_storage = value; }
    #newPINError__accessor_storage = '';
    get newPINError_() { return this.#newPINError__accessor_storage; }
    set newPINError_(value) { this.#newPINError__accessor_storage = value; }
    #confirmPINError__accessor_storage = '';
    get confirmPINError_() { return this.#confirmPINError__accessor_storage; }
    set confirmPINError_(value) { this.#confirmPINError__accessor_storage = value; }
    #complete__accessor_storage = false;
    get complete_() { return this.#complete__accessor_storage; }
    set complete_(value) { this.#complete__accessor_storage = value; }
    #shown__accessor_storage = SetPinDialogPage.INITIAL;
    get shown_() { return this.#shown__accessor_storage; }
    set shown_(value) { this.#shown__accessor_storage = value; }
    #pinsVisible__accessor_storage = false;
    get pinsVisible_() { return this.#pinsVisible__accessor_storage; }
    set pinsVisible_(value) { this.#pinsVisible__accessor_storage = value; }
    #title__accessor_storage = '';
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    #newPINDialogDescription__accessor_storage = '';
    get newPINDialogDescription_() { return this.#newPINDialogDescription__accessor_storage; }
    set newPINDialogDescription_(value) { this.#newPINDialogDescription__accessor_storage = value; }
    browserProxy_ = SecurityKeysPinBrowserProxyImpl.getInstance();
    connectedCallback() {
        this.title_ = this.i18n('securityKeysSetPINInitialTitle');
        super.connectedCallback();
        this.$.dialog.showModal();
        this.browserProxy_.startSetPin().then(({ done, error, currentMinPinLength, newMinPinLength, retries }) => {
            if (done) {
                // Operation is complete. error is a CTAP error code. See
                // https://fidoalliance.org/specs/fido-v2.0-rd-20180702/fido-client-to-authenticator-protocol-v2.0-rd-20180702.html#error-responses
                if (error === 1 /* INVALID_COMMAND */) {
                    this.shown_ = SetPinDialogPage.NO_PIN_SUPPORT;
                    this.finish_();
                }
                else if (error === 52 /* temporarily locked */) {
                    this.shown_ = SetPinDialogPage.REINSERT;
                    this.finish_();
                }
                else if (error === 50 /* locked */) {
                    this.shown_ = SetPinDialogPage.LOCKED;
                    this.finish_();
                }
                else {
                    this.errorCode_ = error;
                    this.shown_ = SetPinDialogPage.ERROR;
                    this.finish_();
                }
            }
            else if (retries === 0) {
                // A device can also signal that it is locked by returning zero
                // retries.
                this.shown_ = SetPinDialogPage.LOCKED;
                this.finish_();
            }
            else {
                this.setPINButtonValid_ = true;
                this.currentMinPinLength_ = currentMinPinLength;
                this.newMinPinLength_ = newMinPinLength;
                this.retries_ = retries;
                // retries_ may be null to indicate that there is currently no PIN
                // set.
                let focusTarget;
                if (this.retries_ === null) {
                    this.showCurrentEntry_ = false;
                    focusTarget = this.$.newPIN;
                    this.title_ = this.i18n('securityKeysSetPINCreateTitle');
                }
                else {
                    this.showCurrentEntry_ = true;
                    focusTarget = this.$.currentPIN;
                    this.title_ = this.i18n('securityKeysSetPINChangeTitle');
                }
                this.shown_ = SetPinDialogPage.PIN_PROMPT;
                // Focus cannot be set directly from within a backend callback.
                window.setTimeout(function () {
                    focusTarget.focus();
                }, 0);
                this.fire('ui-ready'); // for test synchronization.
            }
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('newMinPinLength_')) {
            this.newMinPinLengthChanged_();
        }
    }
    onDialogClose_() {
        this.$.dialog.close();
        this.finish_();
    }
    onCloseButtonClick_() {
        this.onDialogClose_();
    }
    finish_() {
        if (this.complete_) {
            return;
        }
        this.complete_ = true;
        // Setting |complete_| to true hides the |pinSubmitNew| button while it
        // has focus, which in turn causes the browser to move focus to the <body>
        // element, which in turn prevents subsequent "Enter" keystrokes to be
        // handled by cr-dialog itself. Re-focusing manually fixes this.
        this.$.dialog.focus();
        this.browserProxy_.close();
    }
    onIronSelect_(e) {
        // Prevent this event from bubbling since it is unnecessarily triggering
        // the listener within settings-animated-pages.
        e.stopPropagation();
    }
    onCurrentPinValueChanged_(e) {
        this.currentPIN_ = e.detail.value;
    }
    onNewPinValueChanged_(e) {
        this.newPIN_ = e.detail.value;
    }
    onConfirmPinValueChanged_(e) {
        this.confirmPIN_ = e.detail.value;
    }
    onCurrentPinInput_() {
        // Typing in the current PIN box after an error makes the error message
        // disappear.
        this.currentPINError_ = '';
    }
    onNewPinInput_() {
        // Typing in the new PIN box after an error makes the error message
        // disappear.
        this.newPINError_ = '';
    }
    onConfirmPinInput_() {
        // Typing in the confirm PIN box after an error makes the error message
        // disappear.
        this.confirmPINError_ = '';
    }
    /**
      @param pin A candidate PIN.
      @return An error string or else '' to indicate validity.
    */
    isValidPin_(pin, minLength) {
        // The UTF-8 encoding of the PIN must be between minLength and 63 bytes, and
        // the final byte cannot be zero.
        const utf8Encoded = new TextEncoder().encode(pin);
        if (utf8Encoded.length < minLength) {
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
        // A PIN must contain at least four code-points. Javascript strings are
        // UCS-2 and the |length| property counts UCS-2 elements, not code-points.
        // (For example, '\u{1f6b4}'.length === 2, but it's a single code-point.)
        // Therefore, iterate over the string (which does yield codepoints) and
        // check that |minLength| or more were seen.
        let length = 0;
        for (const _codepoint of pin) {
            length++;
        }
        if (length < minLength) {
            return this.i18n('securityKeysPINTooShort');
        }
        return '';
    }
    /**
     * @param retries The number of PIN attempts remaining.
     * @return The message to show under the text box.
     */
    mismatchError_(retries) {
        // Warn the user if the number of retries is getting low.
        if (1 < retries && retries <= 3) {
            return this.i18n('securityKeysPINIncorrectRetriesPl', retries.toString());
        }
        if (retries === 1) {
            return this.i18n('securityKeysPINIncorrectRetriesSin');
        }
        return this.i18n('securityKeysPINIncorrect');
    }
    /**
     * Called to set focus from inside a callback.
     */
    focusOn_(focusTarget) {
        // Focus cannot be set directly from within a backend callback. Also,
        // directly focusing |currentPIN| doesn't always seem to work(!). Thus
        // focus something else first, which is a hack that seems to solve the
        // problem.
        let preFocusTarget = this.$.newPIN;
        if (preFocusTarget === focusTarget) {
            preFocusTarget = this.$.currentPIN;
        }
        window.setTimeout(function () {
            preFocusTarget.focus();
            focusTarget.focus();
        }, 0);
    }
    /**
     * Called when the Set PIN button is activated.
     */
    onPinSubmitClick_() {
        if (this.showCurrentEntry_) {
            this.currentPINError_ =
                this.isValidPin_(this.currentPIN_, this.currentMinPinLength_);
            if (this.currentPINError_ !== '') {
                this.focusOn_(this.$.currentPIN);
                this.fire('ui-ready'); // for test synchronization.
                return;
            }
        }
        this.newPINError_ = this.isValidPin_(this.newPIN_, this.newMinPinLength_);
        if (this.newPINError_ !== '') {
            this.focusOn_(this.$.newPIN);
            this.fire('ui-ready'); // for test synchronization.
            return;
        }
        if (this.newPIN_ !== this.confirmPIN_) {
            this.confirmPINError_ = this.i18n('securityKeysPINMismatch');
            this.focusOn_(this.$.confirmPIN);
            this.fire('ui-ready'); // for test synchronization.
            return;
        }
        if (this.newPIN_ === this.currentPIN_) {
            this.newPINError_ = this.i18n('securityKeysSamePINAsCurrent');
            this.focusOn_(this.$.newPIN);
            this.fire('ui-ready'); // for test synchronization.
            return;
        }
        this.setPINButtonValid_ = false;
        this.browserProxy_.setPin(this.currentPIN_, this.newPIN_).then(response => {
            const error = response.error;
            // This call always completes the process so response.done is always
            // true. error is a CTAP2 error code. See
            // https://fidoalliance.org/specs/fido-v2.0-rd-20180702/fido-client-to-authenticator-protocol-v2.0-rd-20180702.html#error-responses
            if (error === 0 /* SUCCESS */) {
                this.shown_ = SetPinDialogPage.SUCCESS;
                this.finish_();
            }
            else if (error === 52 /* temporarily locked */) {
                this.shown_ = SetPinDialogPage.REINSERT;
                this.finish_();
            }
            else if (error === 50 /* locked */) {
                this.shown_ = SetPinDialogPage.LOCKED;
                this.finish_();
            }
            else if (error === 49 /* PIN_INVALID */) {
                this.retries_--;
                this.currentPINError_ = this.mismatchError_(this.retries_);
                this.setPINButtonValid_ = true;
                this.focusOn_(this.$.currentPIN);
                this.fire('ui-ready'); // for test synchronization.
            }
            else {
                // Unknown error.
                this.errorCode_ = error;
                this.shown_ = SetPinDialogPage.ERROR;
                this.finish_();
            }
        });
    }
    /**
     * onClick handler for the show/hide icon.
     */
    onShowPinsClick_() {
        this.pinsVisible_ = !this.pinsVisible_;
    }
    /**
     * Helper function to detect when an error string is empty.
     */
    isNonEmpty_(s) {
        return s !== '';
    }
    /**
     * Called to set the error string when |errorCode_| is set.
     */
    pinFailed_() {
        if (this.errorCode_ === undefined || this.errorCode_ === null) {
            return '';
        }
        return this.i18n('securityKeysPINError', this.errorCode_.toString());
    }
    /**
     * @return The class of the Ok / Cancel button.
     */
    maybeActionButton_() {
        return this.complete_ ? 'action-button' : 'cancel-button';
    }
    /**
     * @return The label of the Ok / Cancel button.
     */
    closeText_() {
        return this.i18n(this.complete_ ? 'ok' : 'cancel');
    }
    newMinPinLengthChanged_() {
        if (this.newMinPinLength_ === undefined || this.newMinPinLength_ === null) {
            return;
        }
        PluralStringProxyImpl.getInstance()
            .getPluralString('securityKeysNewPIN', this.newMinPinLength_)
            .then(string => this.newPINDialogDescription_ = string);
    }
    /**
     * @return The class (and thus icon) to be displayed.
     */
    showPinsClass_() {
        return 'icon-visibility' + (this.pinsVisible_ ? '-off' : '');
    }
    /**
     * @return The tooltip for the icon.
     */
    showPinsTitle_() {
        return this.i18n(this.pinsVisible_ ? 'securityKeysHidePINs' : 'securityKeysShowPINs');
    }
    /**
     * @return The PIN-input element type.
     */
    inputType_() {
        return this.pinsVisible_ ? 'text' : 'password';
    }
}
customElements.define(SettingsSecurityKeysSetPinDialogElement.is, SettingsSecurityKeysSetPinDialogElement);
