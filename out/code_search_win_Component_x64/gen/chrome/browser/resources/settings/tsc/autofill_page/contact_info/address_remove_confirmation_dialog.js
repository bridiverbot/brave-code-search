// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'address-remove-confirmation-dialog' is the dialog that allows
 * removing a saved address.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
import { getHtml } from './address_remove_confirmation_dialog.html.js';
const SettingsAddressRemoveConfirmationDialogBase = I18nMixinLit(CrLitElement);
export class SettingsAddressRemoveConfirmationDialogElement extends SettingsAddressRemoveConfirmationDialogBase {
    static get is() {
        return 'settings-address-remove-confirmation-dialog';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            address: { type: Object },
            accountInfo: { type: Object },
        };
    }
    #address_accessor_storage = { fields: [] };
    get address() { return this.#address_accessor_storage; }
    set address(value) { this.#address_accessor_storage = value; }
    #accountInfo_accessor_storage;
    get accountInfo() { return this.#accountInfo_accessor_storage; }
    set accountInfo(value) { this.#accountInfo_accessor_storage = value; }
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    getConfirmationTitle_() {
        if (this.isAccountHomeAddress_()) {
            return this.i18n('removeHomeAddressConfirmationTitle');
        }
        if (this.isAccountWorkAddress_()) {
            return this.i18n('removeWorkAddressConfirmationTitle');
        }
        return this.isAccountNameEmailAddress_() ?
            this.i18n('removeNameEmailAddressConfirmationTitle') :
            this.i18n('removeAddressConfirmationTitle');
    }
    getConfirmationDescription_() {
        const isAccountAddress = this.address?.metadata?.recordType ===
            chrome.autofillPrivate.AddressRecordType.ACCOUNT;
        if (isAccountAddress) {
            return sanitizeInnerHtml(this.i18n('deleteAccountAddressRecordTypeNotice', this.accountInfo?.email || ''));
        }
        if (this.isAccountHomeAddress_()) {
            return sanitizeInnerHtml(loadTimeData.getStringF('deleteHomeAddressNotice', loadTimeData.getString('googleAccountHomeAddressUrl'), this.accountInfo?.email || ''));
        }
        if (this.isAccountWorkAddress_()) {
            return sanitizeInnerHtml(loadTimeData.getStringF('deleteWorkAddressNotice', loadTimeData.getString('googleAccountWorkAddressUrl'), this.accountInfo?.email || ''));
        }
        if (this.isAccountNameEmailAddress_()) {
            return sanitizeInnerHtml(loadTimeData.getStringF('deleteNameEmailAddressNotice', loadTimeData.getString('googleAccountNameEmailAddressEditUrl'), this.accountInfo?.email || ''));
        }
        const isSyncEnabled = !!this.accountInfo?.isSyncEnabledForAutofillProfiles;
        return sanitizeInnerHtml(this.i18n(isSyncEnabled ? 'removeSyncAddressConfirmationDescription' :
            'removeLocalAddressConfirmationDescription'));
    }
    getRemoveButtonLabel_() {
        return this.isAccountHomeAddress_() || this.isAccountWorkAddress_() ||
            this.isAccountNameEmailAddress_() ?
            this.i18n('removeAddressFromChrome') :
            this.i18n('removeAddress');
    }
    isAccountHomeAddress_() {
        return this.address?.metadata?.recordType ===
            chrome.autofillPrivate.AddressRecordType.ACCOUNT_HOME;
    }
    isAccountWorkAddress_() {
        return this.address?.metadata?.recordType ===
            chrome.autofillPrivate.AddressRecordType.ACCOUNT_WORK;
    }
    isAccountNameEmailAddress_() {
        return this.address?.metadata?.recordType ===
            chrome.autofillPrivate.AddressRecordType.ACCOUNT_NAME_EMAIL;
    }
    onRemoveClick() {
        this.$.dialog.close();
    }
    onCancelClick() {
        this.$.dialog.cancel();
    }
}
customElements.define(SettingsAddressRemoveConfirmationDialogElement.is, SettingsAddressRemoveConfirmationDialogElement);
