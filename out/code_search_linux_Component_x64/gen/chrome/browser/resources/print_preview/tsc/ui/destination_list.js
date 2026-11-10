// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import './destination_list_item.js';
import '/strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './destination_list.css.js';
import { getHtml } from './destination_list.html.js';
const DESTINATION_ITEM_HEIGHT = 32;
export class PrintPreviewDestinationListElement extends CrLitElement {
    static get is() {
        return 'print-preview-destination-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            destinations: { type: Array },
            searchQuery: { type: Object },
            loadingDestinations: { type: Boolean },
            matchingDestinations_: { type: Array },
            hasDestinations_: { type: Boolean },
            throbberHidden_: { type: Boolean },
            hideList_: { type: Boolean },
        };
    }
    #destinations_accessor_storage = [];
    get destinations() { return this.#destinations_accessor_storage; }
    set destinations(value) { this.#destinations_accessor_storage = value; }
    #searchQuery_accessor_storage = null;
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #loadingDestinations_accessor_storage = false;
    get loadingDestinations() { return this.#loadingDestinations_accessor_storage; }
    set loadingDestinations(value) { this.#loadingDestinations_accessor_storage = value; }
    #matchingDestinations__accessor_storage = [];
    get matchingDestinations_() { return this.#matchingDestinations__accessor_storage; }
    set matchingDestinations_(value) { this.#matchingDestinations__accessor_storage = value; }
    #hasDestinations__accessor_storage = true;
    get hasDestinations_() { return this.#hasDestinations__accessor_storage; }
    set hasDestinations_(value) { this.#hasDestinations__accessor_storage = value; }
    #throbberHidden__accessor_storage = false;
    get throbberHidden_() { return this.#throbberHidden__accessor_storage; }
    set throbberHidden_(value) { this.#throbberHidden__accessor_storage = value; }
    #hideList__accessor_storage = false;
    get hideList_() { return this.#hideList__accessor_storage; }
    set hideList_(value) { this.#hideList__accessor_storage = value; }
    boundUpdateHeight_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.boundUpdateHeight_ = () => this.updateHeight_();
        window.addEventListener('resize', this.boundUpdateHeight_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.boundUpdateHeight_);
        this.boundUpdateHeight_ = null;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('destinations') ||
            changedProperties.has('searchQuery') ||
            changedProperties.has('loadingDestinations')) {
            this.updateMatchingDestinations_();
        }
    }
    updateHeight_(numDestinations) {
        const count = numDestinations === undefined ?
            this.matchingDestinations_.length :
            numDestinations;
        const maxDisplayedItems = this.offsetHeight / DESTINATION_ITEM_HEIGHT;
        const isListFullHeight = maxDisplayedItems <= count;
        // Update the throbber and "No destinations" message.
        this.hasDestinations_ = count > 0 || this.loadingDestinations;
        this.throbberHidden_ =
            !this.loadingDestinations || isListFullHeight || !this.hasDestinations_;
        this.hideList_ = count === 0;
        if (this.hideList_) {
            return;
        }
        const listHeight = isListFullHeight ? this.offsetHeight : count * DESTINATION_ITEM_HEIGHT;
        this.$.list.style.height = listHeight > DESTINATION_ITEM_HEIGHT ?
            `${listHeight}px` :
            `${DESTINATION_ITEM_HEIGHT}px`;
    }
    updateMatchingDestinations_() {
        if (this.destinations === undefined) {
            return;
        }
        const matchingDestinations = this.searchQuery ?
            this.destinations.filter(d => d.matches(this.searchQuery)) :
            this.destinations.slice();
        // Update the height before updating the list.
        this.updateHeight_(matchingDestinations.length);
        this.matchingDestinations_ = matchingDestinations;
    }
    onKeydown_(e) {
        if (e.key === 'Enter') {
            this.onDestinationClick_(e);
            e.stopPropagation();
            e.preventDefault();
        }
    }
    /**
     * @param e Event containing the destination that was selected.
     */
    onDestinationClick_(e) {
        if (e.composedPath()[0].tagName === 'A') {
            return;
        }
        const listItem = e.target;
        assert(listItem.destination);
        this.fire('destination-selected', listItem.destination);
    }
    /**
     * Returns a 1-based index for aria-rowindex.
     */
    getAriaRowindex_(index) {
        return index + 1;
    }
}
customElements.define(PrintPreviewDestinationListElement.is, PrintPreviewDestinationListElement);
