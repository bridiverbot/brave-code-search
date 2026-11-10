// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getStringForCurrentLocale } from '../print_preview_utils.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
import { getCss } from './settings_select.css.js';
import { getHtml } from './settings_select.html.js';
const PrintPreviewSettingsSelectElementBase = SettingsMixin(SelectMixin(CrLitElement));
export class PrintPreviewSettingsSelectElement extends PrintPreviewSettingsSelectElementBase {
    static get is() {
        return 'print-preview-settings-select';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ariaLabel: { type: String },
            capability: { type: Object },
            settingName: { type: String },
            disabled: { type: Boolean },
        };
    }
    #ariaLabel_accessor_storage = '';
    get ariaLabel() { return this.#ariaLabel_accessor_storage; }
    set ariaLabel(value) { this.#ariaLabel_accessor_storage = value; }
    #capability_accessor_storage = null;
    get capability() { return this.#capability_accessor_storage; }
    set capability(value) { this.#capability_accessor_storage = value; }
    #settingName_accessor_storage = 'dpi';
    get settingName() { return this.#settingName_accessor_storage; }
    set settingName(value) { this.#settingName_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    /**
     * @param option Option to check.
     * @return Whether the option is selected.
     */
    isSelected_(option) {
        return this.getValue_(option) === this.selectedValue ||
            (!!option.is_default && this.selectedValue === '');
    }
    selectValue(value) {
        this.selectedValue = value;
    }
    /**
     * @param option Option to get the value for.
     * @return Value for the option.
     */
    getValue_(option) {
        return JSON.stringify(option);
    }
    /**
     * @param option Option to get the display name for.
     * @return Display name for the option.
     */
    getDisplayName_(option) {
        let displayName = option.custom_display_name;
        if (!displayName && option.custom_display_name_localized) {
            displayName =
                getStringForCurrentLocale(option.custom_display_name_localized);
        }
        return displayName || option.name || '';
    }
    onProcessSelectChange(value) {
        let newValue = null;
        try {
            newValue = JSON.parse(value);
        }
        catch (e) {
            assertNotReached();
        }
        if (value !== JSON.stringify(this.getSettingValue(this.settingName))) {
            this.setSetting(this.settingName, newValue);
        }
    }
}
customElements.define(PrintPreviewSettingsSelectElement.is, PrintPreviewSettingsSelectElement);
