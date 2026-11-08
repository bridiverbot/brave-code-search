// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './settings_section.js';
import { getCss as getMdSelectLitCss } from 'chrome://resources/cr_elements/md_select_lit.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './pages_per_sheet_settings.html.js';
import { getCss as getPrintPreviewSharedCss } from './print_preview_shared.css.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewPagesPerSheetSettingsElementBase = SettingsMixin(SelectMixin(CrLitElement));
export class PrintPreviewPagesPerSheetSettingsElement extends PrintPreviewPagesPerSheetSettingsElementBase {
    static get is() {
        return 'print-preview-pages-per-sheet-settings';
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
        this.onPagesPerSheetSettingChange_(this.getSettingValue('pagesPerSheet'));
        this.addSettingObserver('pagesPerSheet.value', (newValue) => {
            this.onPagesPerSheetSettingChange_(newValue);
        });
    }
    /**
     * @param newValue The new value of the pages per sheet setting.
     */
    onPagesPerSheetSettingChange_(newValue) {
        this.selectedValue = newValue.toString();
    }
    onProcessSelectChange(value) {
        this.setSetting('pagesPerSheet', parseInt(value, 10));
    }
}
customElements.define(PrintPreviewPagesPerSheetSettingsElement.is, PrintPreviewPagesPerSheetSettingsElement);
