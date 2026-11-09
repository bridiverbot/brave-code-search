// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import './settings_section.js';
import '/strings.m.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './other_options_settings.css.js';
import { getHtml } from './other_options_settings.html.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewOtherOptionsSettingsElementBase = SettingsMixin(I18nMixinLit(CrLitElement));
export class PrintPreviewOtherOptionsSettingsElement extends PrintPreviewOtherOptionsSettingsElementBase {
    static get is() {
        return 'print-preview-other-options-settings';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
            options_: { type: Array },
            /**
             * The index of the checkbox that should display the "Options" title.
             */
            firstIndex_: { type: Number },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #options__accessor_storage = [
        { name: 'headerFooter', label: 'optionHeaderFooter' },
        { name: 'cssBackground', label: 'optionBackgroundColorsAndImages' },
        { name: 'rasterize', label: 'optionRasterize' },
        { name: 'selectionOnly', label: 'optionSelectionOnly' },
    ];
    get options_() { return this.#options__accessor_storage; }
    set options_(value) { this.#options__accessor_storage = value; }
    #firstIndex__accessor_storage = 0;
    get firstIndex_() { return this.#firstIndex__accessor_storage; }
    set firstIndex_(value) { this.#firstIndex__accessor_storage = value; }
    timeouts_ = new Map();
    previousValues_ = new Map();
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('headerFooter.*', this.onHeaderFooterSettingChange_.bind(this));
        this.onHeaderFooterSettingChange_();
        this.addSettingObserver('cssBackground.*', this.onCssBackgroundSettingChange_.bind(this));
        this.onCssBackgroundSettingChange_();
        this.addSettingObserver('rasterize.*', this.onRasterizeSettingChange_.bind(this));
        this.onRasterizeSettingChange_();
        this.addSettingObserver('selectionOnly.*', this.onSelectionOnlySettingChange_.bind(this));
        this.onSelectionOnlySettingChange_();
    }
    /**
     * @param settingName The name of the setting to updated.
     * @param newValue The new value for the setting.
     */
    updateSettingWithTimeout_(settingName, newValue) {
        const timeout = this.timeouts_.get(settingName);
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        this.timeouts_.set(settingName, setTimeout(() => {
            this.timeouts_.delete(settingName);
            if (this.previousValues_.get(settingName) === newValue) {
                return;
            }
            this.previousValues_.set(settingName, newValue);
            this.setSetting(settingName, newValue);
            // For tests only
            this.fire('update-checkbox-setting', settingName);
        }, 200));
    }
    /**
     * @param index The index of the option to update.
     */
    updateOptionFromSetting_(index) {
        const setting = this.getSetting(this.options_[index].name);
        const option = this.options_[index];
        option.available = setting.available;
        option.value = setting.value;
        option.managed = setting.setByGlobalPolicy;
        this.requestUpdate();
        // Update first index
        const availableOptions = this.options_.filter(option => !!option.available);
        if (availableOptions.length > 0) {
            this.firstIndex_ = this.options_.indexOf(availableOptions[0]);
        }
    }
    /**
     * @param managed Whether the setting is managed by policy.
     * @return Whether the checkbox should be disabled.
     */
    getDisabled_(managed) {
        return managed || this.disabled;
    }
    onHeaderFooterSettingChange_() {
        this.updateOptionFromSetting_(0);
    }
    onCssBackgroundSettingChange_() {
        this.updateOptionFromSetting_(1);
    }
    onRasterizeSettingChange_() {
        this.updateOptionFromSetting_(2);
    }
    onSelectionOnlySettingChange_() {
        this.updateOptionFromSetting_(3);
    }
    /**
     * @param e Contains the checkbox item that was checked.
     */
    onChange_(e) {
        const index = Number.parseInt(e.target.dataset['index'], 10);
        const name = this.options_[index].name;
        this.updateSettingWithTimeout_(name, this.shadowRoot.querySelector(`#${name}`).checked);
    }
    /**
     * @param index The index of the settings section.
     * @return Class string containing 'first-visible' if the settings
     *     section is the first visible.
     */
    getClass_(index) {
        return index === this.firstIndex_ ? 'first-visible' : '';
    }
}
customElements.define(PrintPreviewOtherOptionsSettingsElement.is, PrintPreviewOtherOptionsSettingsElement);
