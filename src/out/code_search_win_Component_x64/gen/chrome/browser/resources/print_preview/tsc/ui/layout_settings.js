// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './settings_section.js';
import { getCss as getMdSelectLitCss } from 'chrome://resources/cr_elements/md_select_lit.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './layout_settings.html.js';
import { getCss as getPrintPreviewSharedCss } from './print_preview_shared.css.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewLayoutSettingsElementBase = SettingsMixin(SelectMixin(CrLitElement));
export class PrintPreviewLayoutSettingsElement extends PrintPreviewLayoutSettingsElementBase {
    static get is() {
        return 'print-preview-layout-settings';
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
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.onLayoutSettingChange_(this.getSettingValue('layout'));
        this.addSettingObserver('layout.value', (newValue) => {
            this.onLayoutSettingChange_(newValue);
        });
    }
    onLayoutSettingChange_(newValue) {
        this.selectedValue = newValue ? 'landscape' : 'portrait';
    }
    onProcessSelectChange(value) {
        this.setSetting('layout', value === 'landscape');
    }
}
customElements.define(PrintPreviewLayoutSettingsElement.is, PrintPreviewLayoutSettingsElement);
