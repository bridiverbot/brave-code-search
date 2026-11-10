// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import { assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './pii_selection.css.js';
import { getHtml } from './pii_selection.html.js';
import { SupportToolPageMixinLit } from './support_tool_page_mixin_lit.js';
// Names of the radio buttons which allow the user to choose to keep or remove
// their PII data.
export var PiiRadioButtons;
(function (PiiRadioButtons) {
    PiiRadioButtons["INCLUDE_ALL"] = "include-all";
    PiiRadioButtons["INCLUDE_NONE"] = "include-none";
    PiiRadioButtons["INCLUDE_SOME"] = "include-some";
})(PiiRadioButtons || (PiiRadioButtons = {}));
const PiiSelectionElementBase = SupportToolPageMixinLit(CrLitElement);
export class PiiSelectionElement extends PiiSelectionElementBase {
    static get is() {
        return 'pii-selection';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectAll_: { type: Boolean },
            detectedPiiItems_: { type: Array },
            selectedRadioButton_: { type: String },
            showPIISelection_: { type: Boolean },
        };
    }
    #selectAll__accessor_storage = true;
    get selectAll_() { return this.#selectAll__accessor_storage; }
    set selectAll_(value) { this.#selectAll__accessor_storage = value; }
    #detectedPiiItems__accessor_storage = [];
    get detectedPiiItems_() { return this.#detectedPiiItems__accessor_storage; }
    set detectedPiiItems_(value) { this.#detectedPiiItems__accessor_storage = value; }
    #selectedRadioButton__accessor_storage = PiiRadioButtons.INCLUDE_ALL;
    get selectedRadioButton_() { return this.#selectedRadioButton__accessor_storage; }
    set selectedRadioButton_(value) { this.#selectedRadioButton__accessor_storage = value; }
    #showPIISelection__accessor_storage = false;
    get showPIISelection_() { return this.#showPIISelection__accessor_storage; }
    set showPIISelection_(value) { this.#showPIISelection__accessor_storage = value; }
    browserProxy_ = BrowserProxyImpl.getInstance();
    updateDetectedPiiItems(items) {
        items.forEach((item) => {
            item.expandDetails = false;
        });
        this.detectedPiiItems_ = [...items];
    }
    onCancelClick_() {
        this.browserProxy_.cancelDataCollection();
    }
    onExportClick_() {
        this.browserProxy_.startDataExport(this.detectedPiiItems_);
    }
    // Sets this.selectAll_ and updates this.detectedPiiItems_ contents
    // accordingly.
    setSelectAll_(selectAll) {
        this.selectAll_ = selectAll;
        // We won't be showing PII selection checkboxes when this.selectAll_ is set.
        this.showPIISelection_ = false;
        // Update this.detectedPiiItems_ to reflect the selection choice.
        this.detectedPiiItems_ =
            this.detectedPiiItems_.map(item => ({ ...item, keep: this.selectAll_ }));
    }
    onSelectedRadioButtonSelectedChanged_(event) {
        this.selectedRadioButton_ = event.detail.value;
        switch (this.selectedRadioButton_) {
            case PiiRadioButtons.INCLUDE_ALL:
                this.setSelectAll_(true);
                break;
            case PiiRadioButtons.INCLUDE_NONE:
                this.setSelectAll_(false);
                break;
            case PiiRadioButtons.INCLUDE_SOME:
                this.showPIISelection_ = true;
                break;
            default:
                assertNotReachedCase(this.selectedRadioButton_);
        }
    }
    showDisclaimer_() {
        return this.selectedRadioButton_ === PiiRadioButtons.INCLUDE_NONE;
    }
    getPiiItemAriaLabel_(item) {
        return 'More info for ' + item.piiTypeDescription + ' ' + item.count;
    }
    onPiiExpandedChanged_(e) {
        const index = Number(e.target.dataset['index']);
        this.detectedPiiItems_[index].expandDetails = e.detail.value;
        this.requestUpdate();
    }
    onPiiCheckedChanged_(e) {
        const index = Number(e.target.dataset['index']);
        this.detectedPiiItems_[index].keep = e.detail.value;
        this.requestUpdate();
    }
}
customElements.define(PiiSelectionElement.is, PiiSelectionElement);
