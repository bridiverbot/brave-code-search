// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './settings_section.js';
import '/strings.m.js';
import './settings_select.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './dpi_settings.css.js';
import { getHtml } from './dpi_settings.html.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewDpiSettingsElementBase = SettingsMixin(CrLitElement);
export class PrintPreviewDpiSettingsElement extends PrintPreviewDpiSettingsElementBase {
    static get is() {
        return 'print-preview-dpi-settings';
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
            disabled: { type: Boolean },
            capabilityWithLabels_: { type: Object },
        };
    }
    #capability_accessor_storage = null;
    get capability() { return this.#capability_accessor_storage; }
    set capability(value) { this.#capability_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #capabilityWithLabels__accessor_storage = null;
    get capabilityWithLabels_() { return this.#capabilityWithLabels__accessor_storage; }
    set capabilityWithLabels_(value) { this.#capabilityWithLabels__accessor_storage = value; }
    lastSelectedValue_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('dpi.*', () => this.onDpiSettingChange_());
        this.onDpiSettingChange_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('capability')) {
            this.capabilityWithLabels_ = this.computeCapabilityWithLabels_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('capabilityWithLabels_')) {
            this.onDpiSettingChange_();
        }
    }
    /**
     * Adds default labels for each option.
     */
    computeCapabilityWithLabels_() {
        if (!this.capability) {
            return null;
        }
        const result = structuredClone(this.capability);
        for (const dpiOption of result.option) {
            const hDpi = dpiOption.horizontal_dpi || 0;
            const vDpi = dpiOption.vertical_dpi || 0;
            if (hDpi > 0 && vDpi > 0 && hDpi !== vDpi) {
                dpiOption.name = loadTimeData.getStringF('nonIsotropicDpiItemLabel', hDpi.toLocaleString(), vDpi.toLocaleString());
            }
            else {
                dpiOption.name = loadTimeData.getStringF('dpiItemLabel', (hDpi || vDpi).toLocaleString());
            }
        }
        return result;
    }
    onDpiSettingChange_() {
        if (this.capabilityWithLabels_ === null) {
            return;
        }
        const dpiValue = this.getSettingValue('dpi');
        for (const option of this.capabilityWithLabels_.option) {
            const dpiOption = option;
            if (dpiValue.horizontal_dpi === dpiOption.horizontal_dpi &&
                dpiValue.vertical_dpi === dpiOption.vertical_dpi &&
                dpiValue.vendor_id === dpiOption.vendor_id) {
                this.shadowRoot.querySelector('print-preview-settings-select')
                    .selectValue(JSON.stringify(option));
                this.lastSelectedValue_ = dpiValue;
                return;
            }
        }
        // If the sticky settings are not compatible with the initially selected
        // printer, reset this setting to the printer default. Only do this when
        // the setting changes, as occurs for sticky settings, and not for a printer
        // change which can also trigger this observer. The model is responsible for
        // setting a compatible media size value after printer changes.
        if (dpiValue !== this.lastSelectedValue_) {
            const defaultOption = this.capabilityWithLabels_.option.find(o => !!o.is_default) ||
                this.capabilityWithLabels_.option[0];
            this.setSetting('dpi', defaultOption, /*noSticky=*/ true);
        }
    }
}
customElements.define(PrintPreviewDpiSettingsElement.is, PrintPreviewDpiSettingsElement);
