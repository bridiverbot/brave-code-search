// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../organizer_zero_state.js';
import { assert } from '//resources/js/assert.js';
import { html } from '//resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { browserProxyFactory } from '../tab_search.mojom-webui.js';
import { compareTimeDescending, getHostnameOrUrl, getSplitViewPrefixIcon, getTabCountText, tokenToString } from './tab_delegate_utils.js';
function isTabGroup(item) {
    return 'color' in item;
}
function isSplitView(item) {
    return 'tabUrls' in item;
}
export class RecentTabsDelegate {
    browserProxy_ = browserProxyFactory.getInstance();
    client_;
    listenerIds_ = [];
    tabs_ = [];
    tabGroups_ = [];
    splitViews_ = [];
    items_ = [];
    init(sectionClient) {
        this.client_ = sectionClient;
        const callbackRouter = this.browserProxy_.callbackRouter;
        this.listenerIds_.push(callbackRouter.tabsChanged.addListener((profileData) => {
            this.onTabsChanged_(profileData);
        }), callbackRouter.tabsRemoved.addListener((tabsRemovedInfo) => {
            this.onTabsRemoved_(tabsRemovedInfo);
        }));
    }
    getId() {
        return 'recently-closed';
    }
    getHeader() {
        return loadTimeData.getString('recentlyClosed');
    }
    async getItems() {
        await this.updateItems_();
        return this.items_.map(item => this.toSectionItem_(item));
    }
    getZeroState() {
        return html `<organizer-zero-state>
      ${loadTimeData.getString('noRecentlyClosedTabs')}
    </organizer-zero-state>`;
    }
    onItemClick(item) {
        const data = item.data;
        assert(data);
        const id = isTabGroup(data) || isSplitView(data) ? data.sessionId : data.tabId;
        this.browserProxy_.handler.openRecentlyClosedEntry(id);
    }
    async updateItems_() {
        const { profileData } = await this.browserProxy_.handler.getProfileData();
        this.tabs_ = profileData.recentlyClosedTabs;
        this.tabGroups_ = profileData.recentlyClosedTabGroups;
        this.splitViews_ = profileData.recentlyClosedSplitViews;
        this.items_ = this.extractAndSortItems_();
    }
    notifyClient_() {
        this.client_?.onItemsChanged(this.items_.map(item => this.toSectionItem_(item)));
    }
    onTabsChanged_(profileData) {
        this.tabs_ = profileData.recentlyClosedTabs;
        this.tabGroups_ = profileData.recentlyClosedTabGroups;
        this.splitViews_ = profileData.recentlyClosedSplitViews;
        this.items_ = this.extractAndSortItems_();
        this.notifyClient_();
    }
    onTabsRemoved_(tabsRemovedInfo) {
        if (tabsRemovedInfo.recentlyClosedTabs.length === 0) {
            return;
        }
        const newTabIds = new Set(tabsRemovedInfo.recentlyClosedTabs.map(t => t.tabId));
        this.tabs_ = [
            ...tabsRemovedInfo.recentlyClosedTabs,
            ...this.tabs_.filter(t => !newTabIds.has(t.tabId)),
        ];
        this.items_ = this.extractAndSortItems_();
        this.notifyClient_();
    }
    extractAndSortItems_() {
        const groupIds = new Set(this.tabGroups_.map(group => tokenToString(group.id)));
        const splitViewIds = new Set(this.splitViews_.map(split => tokenToString(split.id)));
        const filteredTabs = this.tabs_.filter(tab => (!tab.groupId || !groupIds.has(tokenToString(tab.groupId))) &&
            (!tab.splitId || !splitViewIds.has(tokenToString(tab.splitId))));
        const allItems = [...filteredTabs, ...this.tabGroups_, ...this.splitViews_];
        return this.sortItems_(allItems);
    }
    sortItems_(items) {
        items.sort((a, b) => compareTimeDescending(a.lastActiveTime, b.lastActiveTime));
        return items;
    }
    toSectionItem_(item) {
        if (isTabGroup(item)) {
            return this.tabGroupToSectionItem_(item);
        }
        if (isSplitView(item)) {
            return this.splitViewToSectionItem_(item);
        }
        return this.tabToSectionItem_(item);
    }
    tabToSectionItem_(tab) {
        return {
            title: [tab.title],
            description: tab.lastActiveElapsedText ?
                [{ text: tab.lastActiveElapsedText, matchable: false }] :
                [],
            extraSearchTerms: [getHostnameOrUrl(tab.url)],
            prefixIcon: {
                url: tab.url,
            },
            data: tab,
        };
    }
    splitViewToSectionItem_(splitView) {
        const description = [];
        if (splitView.lastActiveElapsedText) {
            description.push({
                text: splitView.lastActiveElapsedText,
                matchable: false,
            });
        }
        description.push({ text: splitView.tabTitles[0] }, { text: splitView.tabTitles[1] });
        return {
            title: [loadTimeData.getString('splitView')],
            description,
            extraSearchTerms: splitView.tabUrls.map(url => getHostnameOrUrl(url)),
            prefixIcon: getSplitViewPrefixIcon([splitView.tabUrls[0], splitView.tabUrls[1]], splitView.layout),
            data: splitView,
        };
    }
    tabGroupToSectionItem_(tabGroup) {
        const title = tabGroup.title || getTabCountText(tabGroup.tabCount);
        return {
            title: [title],
            description: tabGroup.lastActiveElapsedText ?
                [{ text: tabGroup.lastActiveElapsedText, matchable: false }] :
                [],
            data: tabGroup,
        };
    }
}
