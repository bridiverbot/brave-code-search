// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './advanced_settings_dialog.js';
import './settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './advanced_options_settings.css.js';
import { getHtml } from './advanced_options_settings.html.js';
class PrintPreviewAdvancedOptionsSettingsElement extends CrLitElement {
    static get is() {
        return 'print-preview-advanced-options-settings';
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
            destination: { type: Object },
            showAdvancedDialog_: { type: Boolean },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #showAdvancedDialog__accessor_storage = false;
    get showAdvancedDialog_() { return this.#showAdvancedDialog__accessor_storage; }
    set showAdvancedDialog_(value) { this.#showAdvancedDialog__accessor_storage = value; }
    onButtonClick_() {
        this.showAdvancedDialog_ = true;
    }
    onDialogClose_() {
        this.showAdvancedDialog_ = false;
        this.$.button.focus();
    }
}
customElements.define(PrintPreviewAdvancedOptionsSettingsElement.is, PrintPreviewAdvancedOptionsSettingsElement);
