// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './number_settings_section.js';
import './settings_section.js';
import { getCss as getMdSelectLitCss } from 'chrome://resources/cr_elements/md_select_lit.css.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ScalingType } from '../data/scaling.js';
import { getCss as getPrintPreviewSharedCss } from './print_preview_shared.css.js';
import { getHtml } from './scaling_settings.html.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
/*
 * Fit to page and fit to paper options will only be displayed for PDF
 * documents. If the custom option is selected, an additional input field will
 * appear to enter the custom scale factor.
 */
const PrintPreviewScalingSettingsElementBase = SettingsMixin(SelectMixin(CrLitElement));
export class PrintPreviewScalingSettingsElement extends PrintPreviewScalingSettingsElementBase {
    static get is() {
        return 'print-preview-scaling-settings';
    }
    static get styles() {
        return [
            getPrintPreviewSharedCss(),
            getMdSelectLitCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
            isPdf: { type: Boolean },
            currentValue_: { type: String },
            customSelected_: { type: Boolean },
            scalingTypeValue_: { type: Number },
            scalingTypePdfValue_: { type: Number },
            inputValid_: { type: Boolean },
            dropdownDisabled_: { type: Boolean },
            settingKey_: { type: String },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #isPdf_accessor_storage = false;
    get isPdf() { return this.#isPdf_accessor_storage; }
    set isPdf(value) { this.#isPdf_accessor_storage = value; }
    #currentValue__accessor_storage = '';
    get currentValue_() { return this.#currentValue__accessor_storage; }
    set currentValue_(value) { this.#currentValue__accessor_storage = value; }
    #customSelected__accessor_storage = false;
    get customSelected_() { return this.#customSelected__accessor_storage; }
    set customSelected_(value) { this.#customSelected__accessor_storage = value; }
    #dropdownDisabled__accessor_storage = false;
    get dropdownDisabled_() { return this.#dropdownDisabled__accessor_storage; }
    set dropdownDisabled_(value) { this.#dropdownDisabled__accessor_storage = value; }
    #inputValid__accessor_storage = false;
    get inputValid_() { return this.#inputValid__accessor_storage; }
    set inputValid_(value) { this.#inputValid__accessor_storage = value; }
    #settingKey__accessor_storage = 'scalingType';
    get settingKey_() { return this.#settingKey__accessor_storage; }
    set settingKey_(value) { this.#settingKey__accessor_storage = value; }
    #scalingTypeValue__accessor_storage = ScalingType.DEFAULT;
    get scalingTypeValue_() { return this.#scalingTypeValue__accessor_storage; }
    set scalingTypeValue_(value) { this.#scalingTypeValue__accessor_storage = value; }
    #scalingTypePdfValue__accessor_storage = ScalingType.DEFAULT;
    get scalingTypePdfValue_() { return this.#scalingTypePdfValue__accessor_storage; }
    set scalingTypePdfValue_(value) { this.#scalingTypePdfValue__accessor_storage = value; }
    lastValidScaling_ = '';
    /**
     * Whether the custom scaling setting has been set to true, but the custom
     * input has not yet been expanded. Used to determine whether changes in the
     * dropdown are due to user input or sticky settings.
     */
    customScalingSettingSet_ = false;
    /**
     * Whether the user has selected custom scaling in the dropdown, but the
     * custom input has not yet been expanded. Used to determine whether to
     * auto-focus the custom input.
     */
    userSelectedCustomScaling_ = false;
    /**
     * Whether the Finch flag `alignPdfDefaultPrintSettingsWithHTML` is on.
     */
    alignPdfDefaultPrintSettingsWithHTML_ = loadTimeData.getBoolean('alignPdfDefaultPrintSettingsWithHTML');
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('scaling.value', this.onScalingSettingChanged_.bind(this));
        this.onScalingSettingChanged_();
        this.addSettingObserver('scalingType.*', () => {
            this.scalingTypeValue_ = this.getSettingValue('scalingType');
        });
        this.addSettingObserver('scalingTypePdf.*', () => {
            this.scalingTypePdfValue_ = this.getSettingValue('scalingTypePdf');
        });
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('isPdf')) {
            this.settingKey_ = this.isPdf ? 'scalingTypePdf' : 'scalingType';
        }
        if (changedPrivateProperties.has('settingKey_') ||
            changedPrivateProperties.has('scalingTypeValue_') ||
            changedPrivateProperties.has('scalingTypePdfValue_')) {
            this.customSelected_ = this.computeCustomSelected_();
            this.onScalingTypeSettingChanged_();
        }
        if (changedProperties.has('disabled') ||
            changedPrivateProperties.has('inputValid_')) {
            this.dropdownDisabled_ = this.disabled && this.inputValid_;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('inputValid_') ||
            changedPrivateProperties.has('currentValue_')) {
            this.onInputFieldChanged_();
        }
    }
    onProcessSelectChange(value) {
        const isCustom = value === ScalingType.CUSTOM.toString();
        if (isCustom && !this.customScalingSettingSet_) {
            this.userSelectedCustomScaling_ = true;
        }
        else {
            this.customScalingSettingSet_ = false;
        }
        const valueAsNumber = parseInt(value, 10);
        if (isCustom || value === ScalingType.DEFAULT.toString()) {
            this.setSetting('scalingType', valueAsNumber);
        }
        if (this.isPdf ||
            this.getSetting('scalingTypePdf').value === ScalingType.DEFAULT ||
            this.getSetting('scalingTypePdf').value === ScalingType.CUSTOM) {
            this.setSetting('scalingTypePdf', valueAsNumber);
        }
        if (isCustom) {
            this.setSetting('scaling', this.currentValue_);
        }
    }
    updateScalingToValid_() {
        if (!this.getSetting('scaling').valid) {
            this.currentValue_ = this.lastValidScaling_;
        }
        else {
            this.lastValidScaling_ = this.currentValue_;
        }
    }
    /**
     * Updates the input string when scaling setting is set.
     */
    onScalingSettingChanged_() {
        const value = this.getSetting('scaling').value;
        this.lastValidScaling_ = value;
        this.currentValue_ = value;
    }
    onScalingTypeSettingChanged_() {
        if (!this.settingKey_) {
            return;
        }
        const value = this.getSettingValue(this.settingKey_);
        if (value !== ScalingType.CUSTOM) {
            this.updateScalingToValid_();
        }
        else {
            this.customScalingSettingSet_ = true;
        }
        this.selectedValue = value.toString();
    }
    /**
     * Updates scaling settings based on the validity and current value of the
     * scaling input.
     */
    onInputFieldChanged_() {
        this.setSettingValid('scaling', this.inputValid_);
        if (this.currentValue_ !== undefined && this.currentValue_ !== '' &&
            this.inputValid_ &&
            this.currentValue_ !== this.getSettingValue('scaling')) {
            this.setSetting('scaling', this.currentValue_);
        }
    }
    /**
     * @return Whether the input should be disabled.
     */
    inputDisabled_() {
        return !this.customSelected_ || this.dropdownDisabled_;
    }
    /**
     * @return Whether the custom scaling option is selected.
     */
    computeCustomSelected_() {
        return !!this.settingKey_ &&
            this.getSettingValue(this.settingKey_) === ScalingType.CUSTOM;
    }
    onTransitionend_() {
        if (this.customSelected_ && this.userSelectedCustomScaling_) {
            this.shadowRoot.querySelector('print-preview-number-settings-section')
                .getInput()
                .focus();
        }
        this.customScalingSettingSet_ = false;
        this.userSelectedCustomScaling_ = false;
    }
    onCurrentValueChanged_(e) {
        this.currentValue_ = e.detail.value;
    }
    onInputValidChanged_(e) {
        this.inputValid_ = e.detail.value;
    }
    isSelected_(value) {
        return this.selectedValue === value.toString();
    }
    /**
     * @return Whether the actual size option should be enabled.
     */
    computeOptionActualSizeEnabled_() {
        return this.isPdf && this.alignPdfDefaultPrintSettingsWithHTML_;
    }
}
customElements.define(PrintPreviewScalingSettingsElement.is, PrintPreviewScalingSettingsElement);
