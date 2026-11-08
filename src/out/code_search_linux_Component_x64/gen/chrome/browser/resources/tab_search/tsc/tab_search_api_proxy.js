// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { TabSearchApiProxyImpl } from './tab_search_api_proxy-chromium.js';
export class BraveTabSearchApiProxyImpl extends TabSearchApiProxyImpl {
    // Shadow the parent's `getInstance` with a `BraveTabSearchApiProxy`-typed
    // return so callers using the Brave class name get the extended interface
    // without an `as` cast.
    static getInstance() {
        return braveInstance || (braveInstance = new BraveTabSearchApiProxyImpl());
    }
    getSuggestedTopics() {
        return this.handler.getSuggestedTopics();
    }
    getFocusTabs(topic) {
        return this.handler.getFocusTabs(topic);
    }
    undoFocusTabs() {
        return this.handler.undoFocusTabs();
    }
    openLeoGoPremiumPage() {
        this.handler.openLeoGoPremiumPage();
    }
    openLearnMorePage() {
        this.handler.openLearnMorePage();
    }
    setTabFocusEnabled() {
        this.handler.setTabFocusEnabled();
    }
    getTabFocusShowFRE() {
        return this.handler.getTabFocusShowFRE();
    }
    searchTabsByContent(query) {
        return this.handler.searchTabsByContent(query);
    }
}
let braveInstance = null;
// Re-point upstream's static `getInstance` so callers that only know the
// `TabSearchApiProxyImpl` class name also receive the Brave singleton.
TabSearchApiProxyImpl.getInstance = BraveTabSearchApiProxyImpl.getInstance;
export * from './tab_search_api_proxy-chromium.js';
