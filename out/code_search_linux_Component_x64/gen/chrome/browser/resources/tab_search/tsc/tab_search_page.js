// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { TabSearchPageElement } from './tab_search_page-chromium.js';
import { setSemanticOpenTabsContext } from '/tab_group_shared/search.js';
import { TabData } from './tab_data.js';
import { BraveTabSearchApiProxyImpl } from './tab_search_api_proxy.js';
// Augments the substring-filtered open-tab list with on-device semantic
// matches from `searchTabsByContent`. A monotonic token discards stale
// responses when the user types faster than the on-device ranker completes.
// Results land via a side channel in our `search()` chromium_src override
// so no patching of upstream's `updateFilteredTabs_` is needed.
class BraveTabSearchPageElement extends TabSearchPageElement {
    static get is() {
        return 'brave-tab-search-page';
    }
    semanticSearchToken_ = 0;
    semanticTabIdsByQuery_ = new Map();
    constructor() {
        super();
        setSemanticOpenTabsContext({
            getOpenTabsRecords: () => this.getOpenTabs_(),
            getSemanticExtras: (query, matched) => this.getSemanticExtras_(query, matched),
        });
    }
    disconnectedCallback() {
        setSemanticOpenTabsContext(null);
        super.disconnectedCallback();
    }
    onSearchTermInput() {
        super.onSearchTermInput();
        const searchText = this.searchText_;
        if (!searchText) {
            return;
        }
        const token = ++this.semanticSearchToken_;
        const proxy = BraveTabSearchApiProxyImpl.getInstance();
        void proxy.searchTabsByContent(searchText).then(({ tabIds }) => {
            if (token !== this.semanticSearchToken_) {
                return;
            }
            this.semanticTabIdsByQuery_.set(searchText, new Set(tabIds));
            this
                .updateFilteredTabs_();
        });
    }
    getOpenTabs_() {
        return this.openTabs_;
    }
    // Picks the open tabs `searchTabsByContent` matched that upstream's
    // substring filter dropped, skipping any already in `matched`.
    getSemanticExtras_(query, matched) {
        const tabIds = this.semanticTabIdsByQuery_.get(query);
        if (!tabIds || tabIds.size === 0) {
            return [];
        }
        const present = new Set();
        for (const item of matched) {
            if (item instanceof TabData) {
                present.add(item.tab.tabId);
            }
        }
        const extras = [];
        for (const item of this.getOpenTabs_()) {
            if (item instanceof TabData && tabIds.has(item.tab.tabId) &&
                !present.has(item.tab.tabId)) {
                extras.push(item);
            }
        }
        return extras;
    }
}
customElements.define(BraveTabSearchPageElement.is, BraveTabSearchPageElement);
export * from './tab_search_page-chromium.js';
