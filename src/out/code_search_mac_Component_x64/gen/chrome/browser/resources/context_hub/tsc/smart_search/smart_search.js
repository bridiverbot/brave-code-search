// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './smart_search_card.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { OpenWindowProxyImpl } from '//resources/js/open_window_proxy.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from '../context_hub.mojom-webui.js';
import { getCss } from './smart_search.css.js';
import { getHtml } from './smart_search.html.js';
const MAX_URLS_TO_OPEN = 10;
export class SmartSearchElement extends CrLitElement {
    static get is() {
        return 'smart-search';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            searchQuery_: { type: String },
            results_: { type: Array },
            selectedIds_: { type: Object },
            isSearching_: { type: Boolean },
            hasSearched_: { type: Boolean },
            smartSearchEnabled_: { type: Boolean },
        };
    }
    #searchQuery__accessor_storage = '';
    get searchQuery_() { return this.#searchQuery__accessor_storage; }
    set searchQuery_(value) { this.#searchQuery__accessor_storage = value; }
    #results__accessor_storage = [];
    get results_() { return this.#results__accessor_storage; }
    set results_(value) { this.#results__accessor_storage = value; }
    #selectedIds__accessor_storage = new Set();
    get selectedIds_() { return this.#selectedIds__accessor_storage; }
    set selectedIds_(value) { this.#selectedIds__accessor_storage = value; }
    #isSearching__accessor_storage = false;
    get isSearching_() { return this.#isSearching__accessor_storage; }
    set isSearching_(value) { this.#isSearching__accessor_storage = value; }
    #hasSearched__accessor_storage = false;
    get hasSearched_() { return this.#hasSearched__accessor_storage; }
    set hasSearched_(value) { this.#hasSearched__accessor_storage = value; }
    #smartSearchEnabled__accessor_storage = loadTimeData.getBoolean('kSmartSearch');
    get smartSearchEnabled_() { return this.#smartSearchEnabled__accessor_storage; }
    set smartSearchEnabled_(value) { this.#smartSearchEnabled__accessor_storage = value; }
    getFilteredResults_() {
        return this.results_;
    }
    onSearchInputKeydown_(e) {
        if (e.key === 'Enter') {
            this.executeSearch_();
        }
    }
    onSearchInput_(e) {
        const input = e.target;
        this.searchQuery_ = input.value;
    }
    onSearchClick_() {
        this.executeSearch_();
    }
    async executeSearch_() {
        if (!this.smartSearchEnabled_) {
            return;
        }
        const query = this.searchQuery_.trim();
        if (!query) {
            return;
        }
        this.isSearching_ = true;
        this.hasSearched_ = true;
        this.selectedIds_ = new Set();
        this.results_ = [];
        try {
            const { results } = await browserProxyFactory.getInstance().handler.executeSmartSearch(query);
            if (results) {
                const mappedResults = [];
                results.forEach((item, index) => {
                    const refs = item.sourceReferences || [];
                    refs.forEach((ref, refIndex) => {
                        if (!ref.drive) {
                            return;
                        }
                        const title = ref.drive.name;
                        const url = ref.drive.url;
                        if (!title || !url) {
                            return;
                        }
                        mappedResults.push({
                            id: `${index}-${refIndex}`,
                            title,
                            url,
                            snippet: item.description,
                        });
                    });
                });
                this.results_ = mappedResults;
            }
        }
        catch (e) {
            console.error('Smart search error:', e);
            this.results_ = [];
        }
        finally {
            this.isSearching_ = false;
        }
    }
    isAllSelected_() {
        const filtered = this.getFilteredResults_();
        return filtered.length > 0 &&
            filtered.every(item => this.selectedIds_.has(item.id));
    }
    isSomeSelected_() {
        if (this.selectedIds_.size === 0) {
            return false;
        }
        const filtered = this.getFilteredResults_();
        const filteredSelected = filtered.filter(item => this.selectedIds_.has(item.id));
        return filteredSelected.length > 0 &&
            filteredSelected.length < filtered.length;
    }
    onSelectAllChange_(e) {
        const checkbox = e.target;
        if (checkbox.checked) {
            this.selectedIds_ =
                new Set(this.getFilteredResults_().map(item => item.id));
        }
        else {
            this.selectedIds_ = new Set();
        }
    }
    onCardSelectionChange_(e) {
        const { id, selected } = e.detail;
        if (selected) {
            this.selectedIds_.add(id);
        }
        else {
            this.selectedIds_.delete(id);
        }
        this.selectedIds_ = new Set(this.selectedIds_);
    }
    // Only web pages are openable, matching the browser-side filter in
    // `PageHandler::OpenUrlsInTabGroup()`. This also covers the `window.open`
    // fallback, which would otherwise bypass that filter.
    isValidUrl_(urlStr) {
        if (!urlStr) {
            return false;
        }
        try {
            const { protocol } = new URL(urlStr);
            return protocol === 'https:' || protocol === 'http:';
        }
        catch {
            return false;
        }
    }
    async onOpenSelectedClick_() {
        const urls = this.results_.filter(r => this.selectedIds_.has(r.id))
            .map(r => r.url)
            .filter(url => this.isValidUrl_(url));
        if (urls.length === 0) {
            return;
        }
        if (this.smartSearchEnabled_) {
            try {
                // TODO(crbug.com/552048073): Generate a shorter tab group name in the
                // search response instead of using the raw query when the query is
                // long.
                const { success } = await browserProxyFactory.getInstance().handler.openUrlsInTabGroup(this.searchQuery_.trim(), urls);
                if (success) {
                    return;
                }
            }
            catch (e) {
                // Fallback if backend method call fails or is not supported.
                console.error('Failed to open tabs in group:', e);
            }
        }
        // Fallback: open capped URLs in new tabs. Note that opening multiple tabs
        // via window.open is best-effort and may be throttled by popup blockers.
        for (const url of urls.slice(0, MAX_URLS_TO_OPEN)) {
            OpenWindowProxyImpl.getInstance().openUrl(url);
        }
    }
}
customElements.define(SmartSearchElement.is, SmartSearchElement);
