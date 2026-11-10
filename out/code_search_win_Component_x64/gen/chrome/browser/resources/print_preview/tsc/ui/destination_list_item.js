// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './icons.html.js';
import '/strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { removeHighlights, stripDiacritics } from 'chrome://resources/js/search_highlight_utils.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './destination_list_item.css.js';
import { getHtml } from './destination_list_item.html.js';
import { updateHighlights } from './highlight_utils.js';
export class PrintPreviewDestinationListItemElement extends CrLitElement {
    static get is() {
        return 'print-preview-destination-list-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            destination: { type: Object },
            searchQuery: { type: Object },
            searchHint_: { type: String },
        };
    }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #searchQuery_accessor_storage = null;
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #searchHint__accessor_storage = '';
    get searchHint_() { return this.#searchHint__accessor_storage; }
    set searchHint_(value) { this.#searchHint__accessor_storage = value; }
    highlights_ = [];
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('destination') ||
            changedProperties.has('searchQuery')) {
            this.updateSearchHint_();
        }
    }
    firstUpdated() {
        this.addEventListener('focus', this.onFocus_.bind(this));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('destination')) {
            this.onDestinationPropertiesChange_();
        }
        if (changedProperties.has('destination') ||
            changedProperties.has('searchQuery')) {
            removeHighlights(this.highlights_);
            this.highlights_ = updateHighlights(this, this.searchQuery, new Map());
        }
    }
    onDestinationPropertiesChange_() {
        if (this.destination === null) {
            return;
        }
        this.title = this.destination.displayName;
        if (this.destination.isExtension) {
            const icon = this.shadowRoot.querySelector('.extension-icon');
            assert(icon);
            icon.style.backgroundImage = 'image-set(' +
                'url(chrome://extension-icon/' + this.destination.extensionId +
                '/24/1) 1x,' +
                'url(chrome://extension-icon/' + this.destination.extensionId +
                '/48/1) 2x)';
        }
    }
    updateSearchHint_() {
        if (this.destination === null) {
            return;
        }
        const matches = !this.searchQuery ?
            [] :
            this.destination.extraPropertiesToMatch.filter(p => stripDiacritics(p).match(this.searchQuery));
        this.searchHint_ = matches.length === 0 ?
            (this.destination.extraPropertiesToMatch.find(p => !!p) || '') :
            matches.join(' ');
    }
    getExtensionPrinterTooltip_() {
        assert(this.destination);
        if (!this.destination.isExtension) {
            return '';
        }
        return loadTimeData.getStringF('extensionDestinationIconTooltip', this.destination.extensionName);
    }
    onFocus_() {
        if (!this.destination || !this.destination.isExtension) {
            return;
        }
        const icon = this.shadowRoot.querySelector('.extension-icon');
        assert(!!icon);
        icon.focus();
    }
}
customElements.define(PrintPreviewDestinationListItemElement.is, PrintPreviewDestinationListItemElement);
