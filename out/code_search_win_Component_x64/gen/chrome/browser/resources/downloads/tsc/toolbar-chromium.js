// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/js/util.js';
import '/strings.m.js';
import { getToastManager } from 'chrome://resources/cr_elements/cr_toast/cr_toast_manager.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from './downloads.mojom-webui.js';
import { SearchService } from './search_service.js';
import { getCss } from './toolbar.css.js';
import { getHtml } from './toolbar.html.js';
export class DownloadsToolbarElement extends CrLitElement {
    static get is() {
        return 'downloads-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            hasClearableDownloads: { type: Boolean },
            items: { type: Array },
            spinnerActive: { type: Boolean },
        };
    }
    browserProxy_ = browserProxyFactory.getInstance();
    #hasClearableDownloads_accessor_storage = false;
    get hasClearableDownloads() { return this.#hasClearableDownloads_accessor_storage; }
    set hasClearableDownloads(value) { this.#hasClearableDownloads_accessor_storage = value; }
    #spinnerActive_accessor_storage = false;
    get spinnerActive() { return this.#spinnerActive_accessor_storage; }
    set spinnerActive(value) { this.#spinnerActive_accessor_storage = value; }
    #items_accessor_storage = [];
    get items() { return this.#items_accessor_storage; }
    set items(value) { this.#items_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('hasClearableDownloads')) {
            this.updateClearAll_();
        }
    }
    /** @return Whether removal can be undone. */
    canUndo() {
        return !this.isSearchFocused();
    }
    /** @return Whether "Clear all" should be allowed. */
    canClearAll() {
        return this.getSearchText().length === 0 && this.hasClearableDownloads;
    }
    /** @return The full text being searched. */
    getSearchText() {
        return this.$.toolbar.getSearchField().getValue();
    }
    focusOnSearchInput() {
        this.$.toolbar.getSearchField().showAndFocus();
    }
    isSearchFocused() {
        return this.$.toolbar.getSearchField().isSearchFocused();
    }
    onClearAllClick_(e) {
        assert(this.canClearAll());
        this.browserProxy_.handler.clearAll();
        const canUndo = this.items.some(data => !data.isDangerous && !data.isInsecure);
        getToastManager().show(loadTimeData.getString('toastClearedAll'), 
        /* hideSlotted= */ !canUndo);
        // Stop propagating a click to the document to remove toast.
        e.stopPropagation();
        e.preventDefault();
    }
    onSearchChanged_(event) {
        const searchService = SearchService.getInstance();
        if (searchService.search(event.detail)) {
            this.spinnerActive = searchService.isSearching();
            this.fire('spinner-active-changed', { value: this.spinnerActive });
        }
        this.updateClearAll_();
    }
    updateClearAll_() {
        this.$.clearAll.hidden = !this.canClearAll();
    }
}
customElements.define(DownloadsToolbarElement.is, DownloadsToolbarElement);
