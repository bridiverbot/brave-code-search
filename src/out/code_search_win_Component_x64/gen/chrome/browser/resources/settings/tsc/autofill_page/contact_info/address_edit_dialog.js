// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'address-edit-dialog' is the dialog that allows editing a saved
 * address.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CountryDetailManagerProxyImpl } from '../country_detail_manager_proxy.js';
import { getCss } from './address_edit_dialog.css.js';
import { getHtml } from './address_edit_dialog.html.js';
import * as uiComponents from './address_edit_dialog_components.js';
const AddressRecordType = chrome.autofillPrivate.AddressRecordType;
const FieldType = chrome.autofillPrivate.FieldType;
const SettingsAddressEditDialogElementBase = I18nMixinLit(CrLitElement);
export class SettingsAddressEditDialogElement extends SettingsAddressEditDialogElementBase {
    static get is() {
        return 'settings-address-edit-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            address: { type: Object },
            accountInfo: { type: Object },
            title_: { type: String },
            validationError_: { type: String },
            countries_: { type: Array },
            /**
             * Updates the address wrapper.
             */
            countryCode_: { type: String },
            components_: { type: Array },
            canSave_: { type: Boolean },
            isAccountAddress_: { type: Boolean },
            accountAddressRecordTypeNotice_: { type: String },
        };
    }
    #address_accessor_storage = { fields: [] };
    get address() { return this.#address_accessor_storage; }
    set address(value) { this.#address_accessor_storage = value; }
    #accountInfo_accessor_storage;
    get accountInfo() { return this.#accountInfo_accessor_storage; }
    set accountInfo(value) { this.#accountInfo_accessor_storage = value; }
    #title__accessor_storage = '';
    /**
     * Original address is a snapshot of the address made at initialization,
     * it is a referce for soft (or "dont make it worse") validation, which
     * basically means skipping validation for fields that are already invalid.
     */
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    #validationError__accessor_storage;
    get validationError_() { return this.#validationError__accessor_storage; }
    set validationError_(value) { this.#validationError__accessor_storage = value; }
    #countries__accessor_storage = [];
    get countries_() { return this.#countries__accessor_storage; }
    set countries_(value) { this.#countries__accessor_storage = value; }
    #countryCode__accessor_storage = '';
    get countryCode_() { return this.#countryCode__accessor_storage; }
    set countryCode_(value) { this.#countryCode__accessor_storage = value; }
    #components__accessor_storage = [];
    get components_() { return this.#components__accessor_storage; }
    set components_(value) { this.#components__accessor_storage = value; }
    #canSave__accessor_storage = false;
    get canSave_() { return this.#canSave__accessor_storage; }
    set canSave_(value) { this.#canSave__accessor_storage = value; }
    #isAccountAddress__accessor_storage = false;
    get isAccountAddress_() { return this.#isAccountAddress__accessor_storage; }
    set isAccountAddress_(value) { this.#isAccountAddress__accessor_storage = value; }
    #accountAddressRecordTypeNotice__accessor_storage = '';
    get accountAddressRecordTypeNotice_() { return this.#accountAddressRecordTypeNotice__accessor_storage; }
    set accountAddressRecordTypeNotice_(value) { this.#accountAddressRecordTypeNotice__accessor_storage = value; }
    addressFields_ = new Map();
    originalAddressFields_;
    countryDetailManager_ = CountryDetailManagerProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        assert(this.address);
        for (const entry of this.address.fields) {
            this.addressFields_.set(entry.type, entry.value);
        }
        const forAccountStorage = !!this.address.guid &&
            this.address.metadata !== undefined &&
            this.address.metadata.recordType === AddressRecordType.ACCOUNT;
        this.countryDetailManager_.getCountryList(forAccountStorage)
            .then(countryList => {
            this.countries_ = countryList;
            const isEditingExistingAddress = !!this.address.guid;
            this.title_ = this.i18n(isEditingExistingAddress ? 'editAddressTitle' :
                'addAddressTitle');
            this.originalAddressFields_ = isEditingExistingAddress ?
                new Map(this.addressFields_) :
                undefined;
            queueMicrotask(() => {
                const countryField = this.addressFields_.get(FieldType.ADDRESS_HOME_COUNTRY);
                if (!countryField) {
                    assert(countryList.length > 0);
                    // If the address is completely empty, the dialog is creating a
                    // new address. The first address in the country list is what we
                    // suspect the user's country is.
                    this.addressFields_.set(FieldType.ADDRESS_HOME_COUNTRY, countryList[0].countryCode);
                }
                this.countryCode_ =
                    this.addressFields_.get(FieldType.ADDRESS_HOME_COUNTRY) || '';
            });
        });
        // Open is called on the dialog after the address wrapper has been
        // updated.
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('address') ||
            changedProperties.has('accountInfo')) {
            this.isAccountAddress_ = this.isAddressStoredInAccount_();
            this.accountAddressRecordTypeNotice_ =
                this.getAccountAddressRecordTypeNotice_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('countries_')) {
            this.$.country.value = this.countryCode_;
        }
        if (changedPrivateProperties.has('countryCode_') &&
            changedPrivateProperties.get('countryCode_') !== undefined) {
            this.onCountryCodeChanged_();
        }
    }
    /**
     * Updates the wrapper that represents this address in the country's format.
     */
    async updateAddressComponents_() {
        // Default to the last country used if no country code is provided.
        const countryCode = this.countryCode_ || this.countries_[0].countryCode;
        const format = await this.countryDetailManager_.getAddressFormat(countryCode);
        this.address.languageCode = format.languageCode;
        // TODO(crbug.com/40253382): validation is performed for addresses
        // from the user account only now, this flag should be removed when it
        // becomes the only type of addresses
        const skipValidation = !this.isAccountAddress_;
        const components = format.components.map((componentRow, rowIndex) => {
            return componentRow.row.map((component, columnIndex) => {
                return new uiComponents.AddressComponentUi(this.addressFields_, this.originalAddressFields_, component.field, component.fieldName, this.notifyComponentValidity_.bind(this, rowIndex, columnIndex), component.isLongField ? 'long' : '', component.field === FieldType.ADDRESS_HOME_STREET_ADDRESS, skipValidation, component.isRequired);
            });
        });
        // Phone and email do not come in the address format as fields, but
        // should be editable and saveable in the resulting address.
        const contactsRowIndex = components.length;
        components.push([
            new uiComponents.AddressComponentUi(this.addressFields_, this.originalAddressFields_, FieldType.PHONE_HOME_WHOLE_NUMBER, this.i18n('addressPhone'), this.notifyComponentValidity_.bind(this, contactsRowIndex, 0), 'last-row'),
            new uiComponents.AddressComponentUi(this.addressFields_, this.originalAddressFields_, FieldType.EMAIL_ADDRESS, this.i18n('addressEmail'), this.notifyComponentValidity_.bind(this, contactsRowIndex, 1), 'long last-row'),
        ]);
        this.components_ = components;
        // Wait for dom update before resize and savability updates.
        await this.updateComplete;
        await this.updateCanSave_();
        this.fire('on-update-address-wrapper'); // For easier testing.
        if (!this.$.dialog.open) {
            this.$.dialog.showModal();
        }
    }
    /**
     * Determines whether component with specified validation property
     * should be rendered as invalid in the template.
     */
    isVisuallyInvalid_(isValidatable, isValid) {
        return isValidatable && !isValid;
    }
    /**
     * Makes component's potentially invalid state visible, it makes
     * the component validatable and notifies the template engine.
     * The component is addressed by row/col to leverage notifications.
     */
    notifyComponentValidity_(row, col) {
        this.components_[row][col].makeValidatable();
        this.requestUpdate();
        this.updateCanSave_();
    }
    /**
     * Notifies all components validity (see notifyComponentValidity_()).
     */
    notifyValidity_() {
        this.components_.forEach((row, i) => {
            row.forEach((_col, j) => this.notifyComponentValidity_(i, j));
        });
    }
    async updateCanSave_() {
        this.validationError_ = '';
        if ((!this.countryCode_ && this.hasAnyValue_()) ||
            (this.countryCode_ &&
                (!this.hasInvalidComponent_() ||
                    this.hasUncoveredInvalidComponent_()))) {
            this.canSave_ = true;
            await this.updateComplete;
            this.fire('on-update-can-save'); // For easier testing.
            return;
        }
        if (this.isAccountAddress_) {
            const nInvalid = this.countInvalidComponent_();
            if (nInvalid === 1) {
                this.validationError_ = this.i18n('editAddressRequiredFieldError');
            }
            else if (nInvalid > 1) {
                this.validationError_ = this.i18n('editAddressRequiredFieldsError');
            }
        }
        this.canSave_ = false;
        await this.updateComplete;
        this.fire('on-update-can-save'); // For easier testing.
    }
    onValueChanged_(e) {
        const target = e.currentTarget;
        const row = Number(target.dataset['row']);
        const column = Number(target.dataset['column']);
        const component = this.components_[row][column];
        assert(component);
        component.value = e.detail.value;
    }
    getCode_(country) {
        return country.countryCode || 'SPACER';
    }
    getName_(country) {
        return country.name || '------';
    }
    isDivision_(country) {
        return !country.countryCode;
    }
    getPhoneNumberInputClass_(fieldType) {
        if (fieldType ===
            chrome.autofillPrivate.FieldType.PHONE_HOME_WHOLE_NUMBER) {
            return 'phone-number-input';
        }
        return '';
    }
    isAddressStoredInAccount_() {
        if (this.address.guid) {
            return this.address.metadata !== undefined &&
                this.address.metadata.recordType === AddressRecordType.ACCOUNT;
        }
        return !!this.accountInfo?.isEligibleForAddressAccountStorage;
    }
    getAccountAddressRecordTypeNotice_() {
        if (this.accountInfo) {
            return this.i18n(this.address.guid ? 'editAccountAddressRecordTypeNotice' :
                'newAccountAddressRecordTypeNotice', this.accountInfo.email);
        }
        return '';
    }
    /**
     * Tells whether at least one address component (except country)
     * has a non empty value.
     */
    hasAnyValue_() {
        return this.components_.flat().some(component => component.hasValue);
    }
    /**
     * Tells whether at least one address component (except country) is not valid.
     */
    hasInvalidComponent_() {
        return this.countInvalidComponent_() > 0;
    }
    /**
     * Counts how many invalid address componets (except country) are in the form.
     */
    countInvalidComponent_() {
        return this.components_.flat()
            .filter(component => !component.isValid)
            .length;
    }
    /**
     * Tells whether at least one address component (except country)
     * is not valid and is not validatable also, i.e. its invalid state is
     * not visible to the user.
     */
    hasUncoveredInvalidComponent_() {
        return this.components_.flat().some(component => !component.isValid && !component.isValidatable);
    }
    onCancelClick_() {
        chrome.metricsPrivate.recordBoolean('Autofill.Settings.EditAddress', 
        /*confirmed=*/ false);
        this.$.dialog.cancel();
    }
    /**
     * Handler for tapping the save button.
     */
    onSaveButtonClick_() {
        this.notifyValidity_();
        this.updateCanSave_();
        if (!this.canSave_) {
            return;
        }
        this.address.fields = [];
        this.addressFields_.forEach((value, key, _map) => {
            this.address.fields.push({ type: key, value: value });
        });
        chrome.metricsPrivate.recordBoolean('Autofill.Settings.EditAddress', 
        /*confirmed=*/ true);
        this.fire('save-address', this.address);
        this.$.dialog.close();
    }
    onCountryCodeChanged_() {
        this.updateAddressComponents_();
    }
    /**
     * Syncs the country code back to the address and rebuilds the address
     * components for the new location.
     */
    onCountryCodeSelectChange_() {
        this.addressFields_.set(FieldType.ADDRESS_HOME_COUNTRY, this.$.country.value);
        this.countryCode_ = this.$.country.value;
    }
}
customElements.define(SettingsAddressEditDialogElement.is, SettingsAddressEditDialogElement);
