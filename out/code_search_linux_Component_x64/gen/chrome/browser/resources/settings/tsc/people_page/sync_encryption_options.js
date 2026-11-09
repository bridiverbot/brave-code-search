// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
// 
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { getCss } from './sync_encryption_options.css.js';
import { getHtml } from './sync_encryption_options.html.js';
/**
 * Names of the radio buttons which allow the user to choose their encryption
 * mechanism.
 */
var RadioButtonNames;
(function (RadioButtonNames) {
    RadioButtonNames["ENCRYPT_WITH_GOOGLE"] = "encrypt-with-google";
    RadioButtonNames["ENCRYPT_WITH_PASSPHRASE"] = "encrypt-with-passphrase";
})(RadioButtonNames || (RadioButtonNames = {}));
export class SettingsSyncEncryptionOptionsElement extends CrLitElement {
    static get is() {
        return 'settings-sync-encryption-options';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            syncPrefs: { type: Object },
            syncStatus: { type: Object },
            existingPassphraseLabel: { type: String },
            /**
             * Whether the "create passphrase" inputs should be shown. These inputs
             * give the user the opportunity to use a custom passphrase instead of
             * authenticating with their Google credentials.
             */
            creatingNewPassphrase_: { type: Boolean },
            /**
             * The passphrase input field value.
             */
            passphrase_: { type: String },
            /**
             * The passphrase confirmation input field value.
             */
            confirmation_: { type: String },
            disableEncryptionOptions_: { type: Boolean },
        };
    }
    #syncPrefs_accessor_storage = null;
    get syncPrefs() { return this.#syncPrefs_accessor_storage; }
    set syncPrefs(value) { this.#syncPrefs_accessor_storage = value; }
    #syncStatus_accessor_storage = null;
    get syncStatus() { return this.#syncStatus_accessor_storage; }
    set syncStatus(value) { this.#syncStatus_accessor_storage = value; }
    #existingPassphraseLabel_accessor_storage = '';
    get existingPassphraseLabel() { return this.#existingPassphraseLabel_accessor_storage; }
    set existingPassphraseLabel(value) { this.#existingPassphraseLabel_accessor_storage = value; }
    #creatingNewPassphrase__accessor_storage = false;
    get creatingNewPassphrase_() { return this.#creatingNewPassphrase__accessor_storage; }
    set creatingNewPassphrase_(value) { this.#creatingNewPassphrase__accessor_storage = value; }
    #passphrase__accessor_storage = '';
    get passphrase_() { return this.#passphrase__accessor_storage; }
    set passphrase_(value) { this.#passphrase__accessor_storage = value; }
    #confirmation__accessor_storage = '';
    get confirmation_() { return this.#confirmation__accessor_storage; }
    set confirmation_(value) { this.#confirmation__accessor_storage = value; }
    #disableEncryptionOptions__accessor_storage = false;
    get disableEncryptionOptions_() { return this.#disableEncryptionOptions__accessor_storage; }
    set disableEncryptionOptions_(value) { this.#disableEncryptionOptions__accessor_storage = value; }
    /**
     * Whether there's a setEncryptionPassphrase() call pending response, in
     * which case the component should wait before making a new call.
     */
    isSettingEncryptionPassphrase_ = false;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('syncPrefs') ||
            changedProperties.has('syncStatus')) {
            this.disableEncryptionOptions_ = this.computeDisableEncryptionOptions_();
            if (this.disableEncryptionOptions_) {
                this.creatingNewPassphrase_ = false;
            }
        }
    }
    // 
    /**
     * Whether we should disable the radio buttons that allow choosing the
     * encryption options for Sync.
     * We disable the buttons if:
     * (a) full data encryption is enabled, or,
     * (b) full data encryption is not allowed (so far, only applies to
     * supervised accounts), or,
     * (c) current encryption keys are missing, or,
     * (d) the user is a supervised account.
     */
    computeDisableEncryptionOptions_() {
        return !!((this.syncPrefs &&
            (this.syncPrefs.encryptAllData ||
                !this.syncPrefs.customPassphraseAllowed ||
                this.syncPrefs.trustedVaultKeysRequired)) ||
            (this.syncStatus && this.syncStatus.supervisedUser));
    }
    onPassphraseValueChanged_(e) {
        this.passphrase_ = e.detail.value;
    }
    onConfirmationValueChanged_(e) {
        this.confirmation_ = e.detail.value;
    }
    /**
     * @return Whether the passphrase save button should be enabled.
     */
    isSaveNewPassphraseEnabled_() {
        return this.passphrase_ !== '' && this.confirmation_ !== '';
    }
    onNewPassphraseInputKeypress_(e) {
        if (e.type === 'keypress' && e.key !== 'Enter') {
            return;
        }
        this.saveNewPassphrase_();
    }
    onSaveNewPassphraseClick_() {
        this.saveNewPassphrase_();
    }
    /**
     * Sends the newly created custom sync passphrase to the browser.
     */
    saveNewPassphrase_() {
        assert(this.creatingNewPassphrase_);
        chrome.metricsPrivate.recordUserAction('Sync_SaveNewPassphraseClicked');
        if (this.isSettingEncryptionPassphrase_) {
            return;
        }
        // If a new password has been entered but it is invalid, do not send the
        // sync state to the API.
        if (!this.validateCreatedPassphrases_()) {
            return;
        }
        this.isSettingEncryptionPassphrase_ = true;
        SyncBrowserProxyImpl.getInstance()
            .setEncryptionPassphrase(this.passphrase_)
            .then(successfullySet => {
            // TODO(crbug.com/40725814): Rename the event, there is no change if
            // |successfullySet| is false. It should also mention 'encryption
            // passphrase' in its name.
            this.fire('passphrase-changed', { didChange: successfullySet });
            this.isSettingEncryptionPassphrase_ = false;
        });
    }
    onEncryptionRadioSelectedChanged_(event) {
        this.creatingNewPassphrase_ =
            event.detail.value === RadioButtonNames.ENCRYPT_WITH_PASSPHRASE;
    }
    /**
     * Computed binding returning the selected encryption radio button.
     */
    selectedEncryptionRadio_() {
        return this.syncPrefs?.encryptAllData || this.creatingNewPassphrase_ ?
            RadioButtonNames.ENCRYPT_WITH_PASSPHRASE :
            RadioButtonNames.ENCRYPT_WITH_GOOGLE;
    }
    /**
     * Checks the supplied passphrases to ensure that they are not empty and that
     * they match each other. Additionally, displays error UI if they are invalid.
     * @return Whether the check was successful (i.e., that the passphrases were
     *     valid).
     */
    validateCreatedPassphrases_() {
        const emptyPassphrase = !this.passphrase_;
        const mismatchedPassphrase = this.passphrase_ !== this.confirmation_;
        const passphraseInput = this.shadowRoot.querySelector('#passphraseInput');
        if (passphraseInput) {
            passphraseInput.invalid = emptyPassphrase;
        }
        const passphraseConfirmationInput = this.shadowRoot.querySelector('#passphraseConfirmationInput');
        if (passphraseConfirmationInput) {
            passphraseConfirmationInput.invalid =
                !emptyPassphrase && mismatchedPassphrase;
        }
        return !emptyPassphrase && !mismatchedPassphrase;
    }
    onLearnMoreClick_(event) {
        if (event.target.tagName === 'A') {
            // Stop the propagation of events, so that clicking on links inside
            // checkboxes or radio buttons won't change the value.
            event.stopPropagation();
        }
    }
}
customElements.define(SettingsSyncEncryptionOptionsElement.is, SettingsSyncEncryptionOptionsElement);
