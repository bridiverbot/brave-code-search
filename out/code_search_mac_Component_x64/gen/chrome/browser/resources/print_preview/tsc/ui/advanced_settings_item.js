// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { assert } from 'chrome://resources/js/assert.js';
import { stripDiacritics } from 'chrome://resources/js/search_highlight_utils.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { VendorCapabilityType, VendorCapabilityValueType } from '../data/cdd.js';
import { getStringForCurrentLocale } from '../print_preview_utils.js';
import { getCss } from './advanced_settings_item.css.js';
import { getHtml } from './advanced_settings_item.html.js';
import { updateHighlights } from './highlight_utils.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewAdvancedSettingsItemElementBase = SettingsMixin(CrLitElement);
export class PrintPreviewAdvancedSettingsItemElement extends PrintPreviewAdvancedSettingsItemElementBase {
    static get is() {
        return 'print-preview-advanced-settings-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            capability: { type: Object },
            currentValue_: { type: String },
        };
    }
    #capability_accessor_storage = { id: '', type: VendorCapabilityType.UNKNOWN };
    get capability() { return this.#capability_accessor_storage; }
    set capability(value) { this.#capability_accessor_storage = value; }
    #currentValue__accessor_storage = '';
    get currentValue_() { return this.#currentValue__accessor_storage; }
    set currentValue_(value) { this.#currentValue__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('vendorItems.value', () => this.updateFromSettings_());
        this.updateFromSettings_();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('capability')) {
            this.updateFromSettings_();
        }
    }
    updateFromSettings_() {
        const settings = this.getSetting('vendorItems').value;
        // The settings may not have a property with the id if they were populated
        // from sticky settings from a different destination or if the
        // destination's capabilities changed since the sticky settings were
        // generated.
        if (!settings.hasOwnProperty(this.capability.id)) {
            return;
        }
        const value = settings[this.capability.id];
        if (this.isCapabilityTypeSelect_()) {
            // Ignore a value that can't be selected.
            if (this.hasOptionWithValue_(value)) {
                this.currentValue_ = value;
            }
        }
        else {
            this.currentValue_ = value;
            this.shadowRoot.querySelector('cr-input').value = this.currentValue_;
        }
    }
    /**
     * @return The display name for the setting.
     */
    getDisplayName_(item) {
        let displayName = item.display_name;
        if (!displayName && item.display_name_localized) {
            displayName = getStringForCurrentLocale(item.display_name_localized);
        }
        return displayName || '';
    }
    /**
     * @return Whether the capability represented by this item is of type select.
     */
    isCapabilityTypeSelect_() {
        return this.capability.type === VendorCapabilityType.SELECT;
    }
    /**
     * @return Whether the capability represented by this item is of type
     *     checkbox.
     */
    isCapabilityTypeCheckbox_() {
        return this.capability.type === VendorCapabilityType.TYPED_VALUE &&
            this.capability.typed_value_cap.value_type ===
                VendorCapabilityValueType.BOOLEAN;
    }
    /**
     * @return Whether the capability represented by this item is of type input.
     */
    isCapabilityTypeInput_() {
        return !this.isCapabilityTypeSelect_() && !this.isCapabilityTypeCheckbox_();
    }
    /**
     * @return Whether the checkbox setting is checked.
     */
    isChecked_() {
        return this.currentValue_ === 'true';
    }
    /**
     * @param option The option for a select capability.
     * @return Whether the option is selected.
     */
    isOptionSelected_(option) {
        return this.currentValue_ === undefined ?
            !!option.is_default :
            option.value === this.currentValue_;
    }
    /**
     * @return The placeholder value for the capability's text input.
     */
    getCapabilityPlaceholder_() {
        if (this.capability.type === VendorCapabilityType.TYPED_VALUE &&
            this.capability.typed_value_cap.default !== undefined) {
            return this.capability.typed_value_cap.default || '';
        }
        if (this.capability.type === VendorCapabilityType.RANGE &&
            this.capability.range_cap.default !== undefined) {
            return this.capability.range_cap.default || '';
        }
        return '';
    }
    hasOptionWithValue_(value) {
        assert(this.isCapabilityTypeSelect_());
        return !!this.capability.select_cap.option &&
            this.capability.select_cap.option.some(option => option.value === value);
    }
    /**
     * @param query The current search query.
     * @return Whether the item has a match for the query.
     */
    hasMatch(query) {
        if (!query) {
            return true;
        }
        const strippedCapabilityName = stripDiacritics(this.getDisplayName_(this.capability));
        if (strippedCapabilityName.match(query)) {
            return true;
        }
        if (!this.isCapabilityTypeSelect_()) {
            return false;
        }
        for (const option of this.capability.select_cap.option) {
            const strippedOptionName = stripDiacritics(this.getDisplayName_(option));
            if (strippedOptionName.match(query)) {
                return true;
            }
        }
        return false;
    }
    onSelectChange_(e) {
        this.onUserInput_(e);
    }
    onUserInput_(e) {
        this.currentValue_ = e.target.value;
    }
    onCheckboxChange_(e) {
        this.currentValue_ =
            e.target.checked ? 'true' : 'false';
    }
    /**
     * @return The current value of the setting, or the empty string if it is not
     *     set.
     */
    getCurrentValue() {
        return this.currentValue_ || '';
    }
    /**
     * Only used in tests.
     * @param value A value to set the setting to.
     */
    setCurrentValueForTest(value) {
        this.currentValue_ = value;
    }
    /**
     * @return The highlight wrappers and that were created.
     */
    updateHighlighting(query, bubbles) {
        return updateHighlights(this, query, bubbles);
    }
}
customElements.define(PrintPreviewAdvancedSettingsItemElement.is, PrintPreviewAdvancedSettingsItemElement);
