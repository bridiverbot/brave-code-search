// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../print_preview_utils.js';
import './destination_list.js';
import './print_preview_search_box.js';
import '/strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DestinationStoreEventType } from '../data/destination_store.js';
import { NativeLayerImpl } from '../native_layer.js';
import { getCss } from './destination_dialog.css.js';
import { getHtml } from './destination_dialog.html.js';
export class PrintPreviewDestinationDialogElement extends CrLitElement {
    static get is() {
        return 'print-preview-destination-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            destinationStore: { type: Object },
            loadingDestinations_: { type: Boolean },
            searchQuery_: { type: Object },
        };
    }
    #destinationStore_accessor_storage = null;
    get destinationStore() { return this.#destinationStore_accessor_storage; }
    set destinationStore(value) { this.#destinationStore_accessor_storage = value; }
    #loadingDestinations__accessor_storage = false;
    get loadingDestinations_() { return this.#loadingDestinations__accessor_storage; }
    set loadingDestinations_(value) { this.#loadingDestinations__accessor_storage = value; }
    #searchQuery__accessor_storage = null;
    get searchQuery_() { return this.#searchQuery__accessor_storage; }
    set searchQuery_(value) { this.#searchQuery__accessor_storage = value; }
    tracker_ = new EventTracker();
    initialized_ = false;
    disconnectedCallback() {
        super.disconnectedCallback();
        this.tracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('destinationStore')) {
            this.onDestinationStoreSet_();
        }
    }
    firstUpdated() {
        this.addEventListener('keydown', (e) => this.onKeydown_(e));
    }
    onKeydown_(e) {
        e.stopPropagation();
        const searchInput = this.$.searchBox.getSearchInput();
        if (e.key === 'Escape' &&
            (e.composedPath()[0] !== searchInput || !searchInput.value.trim())) {
            this.$.dialog.cancel();
            e.preventDefault();
        }
    }
    onDestinationStoreSet_() {
        assert(!this.initialized_);
        assert(this.destinationStore);
        this.tracker_.add(this.destinationStore, DestinationStoreEventType.DESTINATIONS_INSERTED, this.updateDestinations_.bind(this));
        this.tracker_.add(this.destinationStore, DestinationStoreEventType.DESTINATION_SEARCH_DONE, this.updateDestinations_.bind(this));
        this.initialized_ = true;
    }
    updateDestinations_() {
        if (!this.destinationStore || !this.initialized_) {
            return;
        }
        this.$.printList.destinations = this.destinationStore.destinations();
        this.loadingDestinations_ =
            this.destinationStore.isPrintDestinationSearchInProgress;
    }
    onClose_() {
        if (this.searchQuery_) {
            this.$.searchBox.setValue('');
        }
    }
    onCancelButtonClick_() {
        this.$.dialog.cancel();
    }
    /**
     * @param e Event containing the selected destination.
     */
    onDestinationSelected_(e) {
        this.selectDestination_(e.detail);
    }
    selectDestination_(destination) {
        assert(this.destinationStore);
        this.destinationStore.selectDestination(destination);
        this.$.dialog.close();
    }
    show() {
        this.$.dialog.showModal();
        const loading = !this.destinationStore ||
            this.destinationStore.isPrintDestinationSearchInProgress;
        if (!loading) {
            // All destinations have already loaded.
            this.updateDestinations_();
        }
        this.loadingDestinations_ = loading;
    }
    /** @return Whether the dialog is open. */
    isOpen() {
        return this.$.dialog.hasAttribute('open');
    }
    onManageButtonClick_() {
        NativeLayerImpl.getInstance().managePrinters();
    }
    onSearchQueryChanged_(e) {
        this.searchQuery_ = e.detail.value;
    }
}
customElements.define(PrintPreviewDestinationDialogElement.is, PrintPreviewDestinationDialogElement);
