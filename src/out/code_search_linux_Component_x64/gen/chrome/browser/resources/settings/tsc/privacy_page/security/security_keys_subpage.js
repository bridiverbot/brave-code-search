// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'security-keys-subpage' is a settings subpage
 * containing operations on security keys.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../../settings_page/settings_subpage.js';
import './security_keys_credential_management_dialog.js';
import './security_keys_bio_enroll_dialog.js';
import './security_keys_set_pin_dialog.js';
import './security_keys_reset_dialog.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
import { SettingsViewMixinLit } from '../../settings_page/settings_view_mixin_lit.js';
import { getCss as getSettingsSharedCss } from '../../settings_shared_lit.css.js';
import { getHtml } from './security_keys_subpage.html.js';
const SecurityKeysSubpageElementBase = SettingsViewMixinLit(CrLitElement);
export class SecurityKeysSubpageElement extends SecurityKeysSubpageElementBase {
    static get is() {
        return 'security-keys-subpage';
    }
    static get styles() {
        return [
            getSettingsSharedCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enableBioEnrollment_: { type: Boolean },
            showSetPINDialog_: { type: Boolean },
            showCredentialManagementDialog_: { type: Boolean },
            showResetDialog_: { type: Boolean },
            showBioEnrollDialog_: { type: Boolean },
        };
    }
    #enableBioEnrollment__accessor_storage = loadTimeData.getBoolean('enableSecurityKeysBioEnrollment');
    get enableBioEnrollment_() { return this.#enableBioEnrollment__accessor_storage; }
    set enableBioEnrollment_(value) { this.#enableBioEnrollment__accessor_storage = value; }
    #showSetPINDialog__accessor_storage = false;
    get showSetPINDialog_() { return this.#showSetPINDialog__accessor_storage; }
    set showSetPINDialog_(value) { this.#showSetPINDialog__accessor_storage = value; }
    #showCredentialManagementDialog__accessor_storage = false;
    get showCredentialManagementDialog_() { return this.#showCredentialManagementDialog__accessor_storage; }
    set showCredentialManagementDialog_(value) { this.#showCredentialManagementDialog__accessor_storage = value; }
    #showResetDialog__accessor_storage = false;
    get showResetDialog_() { return this.#showResetDialog__accessor_storage; }
    set showResetDialog_(value) { this.#showResetDialog__accessor_storage = value; }
    #showBioEnrollDialog__accessor_storage = false;
    get showBioEnrollDialog_() { return this.#showBioEnrollDialog__accessor_storage; }
    set showBioEnrollDialog_(value) { this.#showBioEnrollDialog__accessor_storage = value; }
    onSetPinClick_() {
        this.showSetPINDialog_ = true;
    }
    onSetPinDialogClose_() {
        this.showSetPINDialog_ = false;
        focusWithoutInk(this.$.setPINButton);
    }
    onCredentialManagementClick_() {
        this.showCredentialManagementDialog_ = true;
    }
    onCredentialManagementSetPin_() {
        this.onSetPinClick_();
    }
    onCredentialManagementDialogClose_() {
        this.showCredentialManagementDialog_ = false;
        const toFocus = this.shadowRoot.querySelector('#credentialManagementButton');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    onResetClick_() {
        this.showResetDialog_ = true;
    }
    onResetDialogClose_() {
        this.showResetDialog_ = false;
        focusWithoutInk(this.$.resetButton);
    }
    onBioEnrollClick_() {
        this.showBioEnrollDialog_ = true;
    }
    onBioEnrollSetPin_() {
        this.onSetPinClick_();
    }
    onBioEnrollDialogClose_() {
        this.showBioEnrollDialog_ = false;
        const toFocus = this.shadowRoot.querySelector('#bioEnrollButton');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SecurityKeysSubpageElement.is, SecurityKeysSubpageElement);
