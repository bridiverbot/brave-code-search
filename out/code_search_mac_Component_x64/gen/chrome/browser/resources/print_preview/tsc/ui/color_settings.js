// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/md_select_lit.css.js';
import './print_preview_shared.css.js';
import './settings_section.js';
import { getCss as getMdSelectLitCss } from 'chrome://resources/cr_elements/md_select_lit.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './color_settings.html.js';
import { getCss as getPrintPreviewSharedCss } from './print_preview_shared.css.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewColorSettingsElementBase = SettingsMixin(SelectMixin(CrLitElement));
export class PrintPreviewColorSettingsElement extends PrintPreviewColorSettingsElementBase {
    static get is() {
        return 'print-preview-color-settings';
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
            managed_: { type: Boolean },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #managed__accessor_storage = false;
    get managed_() { return this.#managed__accessor_storage; }
    set managed_(value) { this.#managed__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('color.value', this.onColorSettingChange_.bind(this));
        this.onColorSettingChange_(this.getSettingValue('color'));
        this.addSettingObserver('color.setByGlobalPolicy', (value) => {
            this.managed_ = value;
        });
        this.managed_ = this.getSetting('color').setByGlobalPolicy;
    }
    onColorSettingChange_(newValue) {
        this.selectedValue = newValue ? 'color' : 'bw';
    }
    /**
     * @return Whether drop-down should be disabled.
     */
    computeDisabled_() {
        return this.disabled || this.managed_;
    }
    /** @param value The new select value. */
    onProcessSelectChange(value) {
        this.setSetting('color', value === 'color');
    }
}
customElements.define(PrintPreviewColorSettingsElement.is, PrintPreviewColorSettingsElement);
