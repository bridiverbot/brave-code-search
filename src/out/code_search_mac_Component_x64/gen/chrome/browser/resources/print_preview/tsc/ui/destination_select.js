// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/js/util.js';
import './icons.html.js';
import './settings_section.js';
import '/strings.m.js';
import { IconsetMap } from 'chrome://resources/cr_elements/cr_icon/iconset_map.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PDF_DESTINATION_KEY } from '../data/destination.js';
import { getSelectDropdownBackground } from '../print_preview_utils.js';
import { getCss } from './destination_select.css.js';
import { getHtml } from './destination_select.html.js';
import { SelectMixin } from './select_mixin.js';
const PrintPreviewDestinationSelectElementBase = SelectMixin(CrLitElement);
export class PrintPreviewDestinationSelectElement extends PrintPreviewDestinationSelectElementBase {
    static get is() {
        return 'print-preview-destination-select';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dark: { type: Boolean },
            destination: { type: Object },
            disabled: { type: Boolean },
            loaded: { type: Boolean },
            noDestinations: { type: Boolean },
            pdfPrinterDisabled: { type: Boolean },
            recentDestinationList: { type: Array },
            pdfDestinationKey_: { type: String },
        };
    }
    #dark_accessor_storage = false;
    get dark() { return this.#dark_accessor_storage; }
    set dark(value) { this.#dark_accessor_storage = value; }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #loaded_accessor_storage = false;
    get loaded() { return this.#loaded_accessor_storage; }
    set loaded(value) { this.#loaded_accessor_storage = value; }
    #noDestinations_accessor_storage = false;
    get noDestinations() { return this.#noDestinations_accessor_storage; }
    set noDestinations(value) { this.#noDestinations_accessor_storage = value; }
    #pdfPrinterDisabled_accessor_storage = false;
    get pdfPrinterDisabled() { return this.#pdfPrinterDisabled_accessor_storage; }
    set pdfPrinterDisabled(value) { this.#pdfPrinterDisabled_accessor_storage = value; }
    #recentDestinationList_accessor_storage = [];
    get recentDestinationList() { return this.#recentDestinationList_accessor_storage; }
    set recentDestinationList(value) { this.#recentDestinationList_accessor_storage = value; }
    #pdfDestinationKey__accessor_storage = PDF_DESTINATION_KEY;
    get pdfDestinationKey_() { return this.#pdfDestinationKey__accessor_storage; }
    set pdfDestinationKey_(value) { this.#pdfDestinationKey__accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('noDestinations') ||
            changedProperties.has('recentDestinationList') ||
            changedProperties.has('selectedValue')) {
            this.$.select.value =
                this.noDestinations ? 'noDestinations' : this.selectedValue;
        }
    }
    focus() {
        this.$.select.focus();
    }
    /** Sets the select to the current value of |destination|. */
    updateDestination() {
        this.selectedValue = this.destination?.key || '';
    }
    /**
     * Returns the iconset and icon for the selected printer. If printer details
     * have not yet been retrieved from the backend, attempts to return an
     * appropriate icon early based on the printer's sticky information.
     * @return The iconset and icon for the current selection.
     */
    getDestinationIcon_() {
        if (!this.selectedValue) {
            return '';
        }
        // If the destination matches the selected value, pull the icon from the
        // destination.
        if (this.destination && this.destination.key === this.selectedValue) {
            return this.destination.icon;
        }
        // Check for the Save as PDF id first.
        if (this.selectedValue === PDF_DESTINATION_KEY) {
            return 'cr:draft-filled';
        }
        // Otherwise, must be in the recent list.
        const recent = this.recentDestinationList.find(d => {
            return d.key === this.selectedValue;
        });
        if (recent && recent.icon) {
            return recent.icon;
        }
        // The key/recent destinations don't have information about what icon to
        // use, so just return the generic print icon for now. It will be updated
        // when the destination is set.
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'print-preview:print-filled' :
            'print-preview:print-old';
    }
    /**
     * @return An inline svg corresponding to the icon for the current
     *     destination and the image for the dropdown arrow.
     */
    getBackgroundImages_() {
        const icon = this.getDestinationIcon_();
        if (!icon) {
            return '';
        }
        let iconSetAndIcon = null;
        if (this.noDestinations) {
            iconSetAndIcon = ['cr', 'error'];
        }
        iconSetAndIcon = iconSetAndIcon || icon.split(':');
        const iconset = IconsetMap.getInstance().get(iconSetAndIcon[0]);
        assert(iconset);
        return getSelectDropdownBackground(iconset, iconSetAndIcon[1], this);
    }
    onProcessSelectChange(value) {
        this.fire('selected-option-change', value);
    }
    /**
     * Return the options currently visible to the user for testing purposes.
     */
    getVisibleItemsForTest() {
        return this.shadowRoot.querySelectorAll('option:not([hidden])');
    }
    isSelected_(destinationKey) {
        return this.selectedValue === destinationKey;
    }
}
customElements.define(PrintPreviewDestinationSelectElement.is, PrintPreviewDestinationSelectElement);
