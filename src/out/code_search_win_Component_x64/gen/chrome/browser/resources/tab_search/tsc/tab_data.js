// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { SplitTabLayout } from './tab_search.mojom-webui.js';
import { tabHasMediaAlerts } from './tab_search_utils.js';
import { TabAlertState } from './tabs.mojom-webui.js';
export var TabItemType;
(function (TabItemType) {
    TabItemType[TabItemType["OPEN_TAB"] = 1] = "OPEN_TAB";
    TabItemType[TabItemType["RECENTLY_CLOSED_TAB"] = 2] = "RECENTLY_CLOSED_TAB";
    TabItemType[TabItemType["RECENTLY_CLOSED_TAB_GROUP"] = 3] = "RECENTLY_CLOSED_TAB_GROUP";
    TabItemType[TabItemType["OPEN_SPLIT"] = 4] = "OPEN_SPLIT";
    TabItemType[TabItemType["RECENTLY_CLOSED_SPLIT"] = 5] = "RECENTLY_CLOSED_SPLIT";
})(TabItemType || (TabItemType = {}));
export class ItemData {
    inActiveWindow = false;
    type = TabItemType.OPEN_TAB;
    a11yTypeText = '';
    tabGroup;
    highlightRanges = {};
}
/**
 * TabData contains tabSearch.mojom.Tab and data derived from it.
 * It makes tabSearch.mojom.Tab immutable and works well for TypeScript type
 * checking.
 */
export class TabData extends ItemData {
    tab;
    hostname;
    constructor(tab, type, hostname) {
        super();
        this.tab = tab;
        this.type = type;
        this.hostname = hostname;
    }
}
export class TabGroupData extends ItemData {
    tabGroup;
    constructor(tabGroup) {
        super();
        this.tabGroup = tabGroup;
        this.type = TabItemType.RECENTLY_CLOSED_TAB_GROUP;
    }
}
export class SplitViewData extends ItemData {
    splitView;
    tabs;
    constructor(options) {
        super();
        if (!options.splitView && !options.tabs) {
            throw new Error('SplitViewData must be initialized with splitView or tabs.');
        }
        this.splitView = options.splitView;
        this.tabs = options.tabs;
        this.type = options.splitView ? TabItemType.RECENTLY_CLOSED_SPLIT :
            TabItemType.OPEN_SPLIT;
        this.a11yTypeText = loadTimeData.getString(options.splitView ? 'a11yRecentlyClosedSplitView' :
            'a11yOpenSplitView');
    }
    get title() {
        return 'Split View';
    }
    get sessionId() {
        return this.splitView ? this.splitView.sessionId : -1;
    }
    get splitId() {
        if (this.splitView) {
            return this.splitView.id;
        }
        return this.tabs[0].splitId ?? undefined;
    }
    get tabCount() {
        return this.splitView ? this.splitView.tabCount : 2;
    }
    get lastActiveElapsedText() {
        if (this.splitView) {
            return this.splitView.lastActiveElapsedText;
        }
        return this.tabs[0].lastActiveElapsedText;
    }
    get tabUrls() {
        if (this.splitView) {
            return this.splitView.tabUrls;
        }
        return [this.tabs[0].url, this.tabs[1].url];
    }
    get layout() {
        if (this.splitView) {
            return this.splitView.layout;
        }
        return this.tabs[0].splitLayout ?? SplitTabLayout.kSideBySide;
    }
}
/**
 * Converts a token to a string by combining the high and low values as strings
 * with a hashtag as the separator.
 */
export function tokenToString(token) {
    return `${token.high.toString()}#${token.low.toString()}`;
}
export function tokenEquals(a, b) {
    return a.high === b.high && a.low === b.low;
}
function titleAndAlertAriaLabel(tabData) {
    const tabTitle = tabData.tab.title;
    if (tabData.type === TabItemType.OPEN_TAB &&
        tabHasMediaAlerts(tabData.tab)) {
        // GetTabAlertStatesForContents adds alert indicators in the order of their
        // priority. Only relevant media alerts are sent over mojo so the first
        // element in alertStates will be the highest priority media alert to
        // display.
        const alert = tabData.tab.alertStates[0];
        switch (alert) {
            case TabAlertState.kMediaRecording:
                return loadTimeData.getStringF('mediaRecording', tabTitle);
            case TabAlertState.kAudioRecording:
                return loadTimeData.getStringF('audioRecording', tabTitle);
            case TabAlertState.kVideoRecording:
                return loadTimeData.getStringF('videoRecording', tabTitle);
            case TabAlertState.kAudioPlaying:
                return loadTimeData.getStringF('audioPlaying', tabTitle);
            case TabAlertState.kAudioMuting:
                return loadTimeData.getStringF('audioMuting', tabTitle);
            default:
                return tabTitle;
        }
    }
    return tabTitle;
}
export function ariaLabel(itemData) {
    if (itemData instanceof TabGroupData &&
        itemData.type === TabItemType.RECENTLY_CLOSED_TAB_GROUP) {
        const tabGroup = itemData.tabGroup;
        const tabCountText = loadTimeData.getStringF(tabGroup.tabCount === 1 ? 'oneTab' : 'tabCount', tabGroup.tabCount);
        return `${tabGroup.title} ${tabCountText} ${tabGroup.lastActiveElapsedText} ${itemData.a11yTypeText}`;
    }
    if (itemData instanceof SplitViewData) {
        const hostnames = itemData.tabUrls.slice(0, 2).map(url => getDisplayHostnameForUrl(new URL(normalizeURL(url))));
        const lastActive = itemData.lastActiveElapsedText;
        const lastActivePart = lastActive ? `, ${lastActive}` : '';
        return `${loadTimeData.getString('a11ySplitView')}, ${hostnames[0]}, ${hostnames[1]}${lastActivePart}. ${itemData.a11yTypeText}`;
    }
    if (itemData instanceof TabData) {
        const tabData = itemData;
        const groupTitleOrEmpty = tabData.tabGroup ? tabData.tabGroup.title : '';
        const titleAndAlerts = titleAndAlertAriaLabel(tabData);
        return `${titleAndAlerts} ${groupTitleOrEmpty} ${tabData.hostname} ${tabData.tab.lastActiveElapsedText} ${tabData.a11yTypeText}`;
    }
    throw new Error('Invalid data provided.');
}
export function normalizeURL(url) {
    // When a navigation is cancelled before completion, the tab's URL can be
    // empty, which leads to errors when attempting to construct a URL object with
    // it. To handle this, we substitute any empty URL with 'about:blank'. This is
    // consistent with how the Omnibox handles empty URLs.
    return url || 'about:blank';
}
export function getDisplayHostnameForUrl(url) {
    if (url.protocol === 'blob:') {
        return loadTimeData.getString('blobUrlSource');
    }
    else if (url.protocol === 'file:') {
        return loadTimeData.getString('fileUrlSource');
    }
    else if (url.protocol === 'about:' && url.pathname === 'blank') {
        return 'about:blank';
    }
    else if (url.protocol === 'view-source:') {
        return loadTimeData.getString('viewSourceSource');
    }
    else {
        return url.hostname;
    }
}
export function getTitle(data) {
    if (data.type === TabItemType.RECENTLY_CLOSED_TAB_GROUP) {
        return undefined;
    }
    if (data instanceof SplitViewData) {
        if (data.tabs) {
            // Returns "Split View" followed by the joined titles of both sub-tabs to
            // allow search matching against either "Split View" or either tab's
            // title.
            return `${data.title} ${data.tabs[0].title} ${data.tabs[1].title}`;
        }
        return data.title;
    }
    return data.tab.title;
}
export function getHostname(data) {
    if (data.type === TabItemType.RECENTLY_CLOSED_TAB_GROUP) {
        return undefined;
    }
    if (data instanceof SplitViewData) {
        // Returns the joined display hostnames of both sub-tabs to allow search
        // matching against either tab's URL/domain.
        return data.tabUrls
            .map(url => {
            try {
                return getDisplayHostnameForUrl(new URL(normalizeURL(url)));
            }
            catch (e) {
                return 'about:blank';
            }
        })
            .join(' ');
    }
    return data.hostname;
}
export function getTabGroupTitle(data) {
    return data.tabGroup?.title;
}
