// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './tab_search.mojom-webui.js';
// LINT.IfChange(TabSearchRecentlyClosedItemOpenAction)
/**
 * These values are persisted to logs and should not be renumbered or reused.
 * See tools/metrics/histograms/metadata/tab/enums.xml.
 */
export var RecentlyClosedItemOpenAction;
(function (RecentlyClosedItemOpenAction) {
    RecentlyClosedItemOpenAction[RecentlyClosedItemOpenAction["WITHOUT_SEARCH"] = 0] = "WITHOUT_SEARCH";
    RecentlyClosedItemOpenAction[RecentlyClosedItemOpenAction["WITH_SEARCH"] = 1] = "WITH_SEARCH";
    RecentlyClosedItemOpenAction[RecentlyClosedItemOpenAction["COUNT"] = 2] = "COUNT";
})(RecentlyClosedItemOpenAction || (RecentlyClosedItemOpenAction = {}));
export class TabSearchApiProxyImpl {
    callbackRouter = new PageCallbackRouter();
    handler = new PageHandlerRemote();
    constructor() {
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    closeTab(tabId) {
        this.handler.closeTab(tabId);
    }
    closeTabs(tabIds) {
        this.handler.closeTabs(tabIds);
    }
    closeWebUiTab() {
        this.handler.closeWebUiTab();
    }
    getProfileData() {
        return this.handler.getProfileData();
    }
    getIsSplit() {
        return this.handler.getIsSplit();
    }
    openRecentlyClosedEntry(id, withSearch, isTab) {
        chrome.metricsPrivate.recordEnumerationValue(isTab ? 'Tabs.TabSearch.WebUI.RecentlyClosedTabOpenAction' :
            'Tabs.TabSearch.WebUI.RecentlyClosedGroupOpenAction', withSearch ? RecentlyClosedItemOpenAction.WITH_SEARCH :
            RecentlyClosedItemOpenAction.WITHOUT_SEARCH, RecentlyClosedItemOpenAction.COUNT);
        this.handler.openRecentlyClosedEntry(id);
    }
    switchToTab(info) {
        this.handler.switchToTab(info);
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    replaceActiveSplitTab(replacementSplitTabId) {
        this.handler.replaceActiveSplitTab(replacementSplitTabId);
    }
    saveRecentlyClosedExpandedPref(expanded) {
        this.handler.saveRecentlyClosedExpandedPref(expanded);
    }
    maybeShowUi() {
        this.handler.maybeShowUI();
    }
    redirectToNtp() {
        window.location.replace(loadTimeData.getString('newTabPageUrl'));
    }
    static getInstance() {
        return instance || (instance = new TabSearchApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
