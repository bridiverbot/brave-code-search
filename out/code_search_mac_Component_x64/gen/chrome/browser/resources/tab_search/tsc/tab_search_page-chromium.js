// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './selectable_lazy_list.js';
import '/strings.m.js';
import './tab_search_group_item.js';
import './tab_search_item.js';
import './tab_search_split_item.js';
import './title_item.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { search } from '/tab_group_shared/search.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { CrSearchFieldMixinLit } from 'chrome://resources/cr_elements/cr_search_field/cr_search_field_mixin_lit.js';
import { assert, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { MetricsReporterImpl } from 'chrome://resources/js/metrics_reporter/metrics_reporter.js';
import { listenOnce } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { NO_SELECTION, selectorNavigationKeys } from './selectable_lazy_list.js';
import { ariaLabel, getDisplayHostnameForUrl, getHostname, getTabGroupTitle, getTitle, normalizeURL, SplitViewData, TabData, TabGroupData, TabItemType, tokenEquals, tokenToString } from './tab_data.js';
import { TabSearchApiProxyImpl } from './tab_search_api_proxy.js';
import { getCss } from './tab_search_page.css.js';
import { getHtml } from './tab_search_page.html.js';
import { tabHasMediaAlerts } from './tab_search_utils.js';
import { TitleItem } from './title_item.js';
// The minimum number of list items we allow viewing regardless of browser
// height. Includes a half row that hints to the user the capability to scroll.
const MINIMUM_AVAILABLE_HEIGHT_LIST_ITEM_COUNT = 5.5;
// A maximum limit for search queries, to prevent  errors like
// "SyntaxError: Invalid regular expression: ..."
export const SEARCH_QUERY_MAX_LENGTH = 400;
const TabSearchSearchFieldBase = CrSearchFieldMixinLit(CrLitElement);
// LINT.IfChange(TabSearchTabSwitchAction)
/**
 * These values are persisted to logs and should not be renumbered or reused.
 * See tools/metrics/histograms/metadata/tab/enums.xml.
 */
export var TabSwitchAction;
(function (TabSwitchAction) {
    TabSwitchAction[TabSwitchAction["WITHOUT_SEARCH"] = 0] = "WITHOUT_SEARCH";
    TabSwitchAction[TabSwitchAction["WITH_SEARCH"] = 1] = "WITH_SEARCH";
    TabSwitchAction[TabSwitchAction["COUNT"] = 2] = "COUNT";
})(TabSwitchAction || (TabSwitchAction = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/tab/enums.xml:TabSearchTabSwitchAction)
// LINT.IfChange(TabSearchUserAction)
/**
 * These values are persisted to logs and should not be renumbered or reused.
 * See tools/metrics/histograms/metadata/tab/enums.xml.
 */
export var TabSearchUserAction;
(function (TabSearchUserAction) {
    TabSearchUserAction[TabSearchUserAction["IN_FILTERED_LIST_OPEN_RECENTLY_CLOSED"] = 0] = "IN_FILTERED_LIST_OPEN_RECENTLY_CLOSED";
    TabSearchUserAction[TabSearchUserAction["IN_FILTERED_LIST_SWITCHED_TAB"] = 1] = "IN_FILTERED_LIST_SWITCHED_TAB";
    TabSearchUserAction[TabSearchUserAction["IN_FILTERED_LIST_CLOSED_TAB"] = 2] = "IN_FILTERED_LIST_CLOSED_TAB";
    TabSearchUserAction[TabSearchUserAction["IN_UNFILTERED_LIST_OPEN_RECENTLY_CLOSED"] = 3] = "IN_UNFILTERED_LIST_OPEN_RECENTLY_CLOSED";
    TabSearchUserAction[TabSearchUserAction["IN_UNFILTERED_LIST_SWITCHED_TAB"] = 4] = "IN_UNFILTERED_LIST_SWITCHED_TAB";
    TabSearchUserAction[TabSearchUserAction["IN_UNFILTERED_LIST_CLOSED_TAB"] = 5] = "IN_UNFILTERED_LIST_CLOSED_TAB";
    TabSearchUserAction[TabSearchUserAction["IN_FILTERED_LIST_SWITCHED_OTHER_WINDOW_TAB"] = 6] = "IN_FILTERED_LIST_SWITCHED_OTHER_WINDOW_TAB";
    TabSearchUserAction[TabSearchUserAction["IN_UNFILTERED_LIST_SWITCHED_OTHER_WINDOW_TAB"] = 7] = "IN_UNFILTERED_LIST_SWITCHED_OTHER_WINDOW_TAB";
})(TabSearchUserAction || (TabSearchUserAction = {}));
export class TabSearchPageElement extends TabSearchSearchFieldBase {
    static get is() {
        return 'tab-search-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // Text that describes the resulting tabs currently present in the list.
            searchResultText_: { type: String },
            availableHeight: { type: Number },
            shortcut_: { type: String },
            searchText_: { type: String },
            filteredItems_: { type: Array },
            listMaxHeight_: { type: Number },
            listItemSize_: { type: Number },
            searchQueryMaxLength_: { type: Number },
            activeDescendantEnabled_: { type: Boolean },
            /**
             * Options for search. Controls how heavily weighted fields are relative
             * to each other in the scoring via field weights.
             */
            searchOptions_: { type: Object },
            recentlyClosedDefaultItemDisplayCount_: { type: Number },
            activeSelectionId_: { type: String },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #availableHeight_accessor_storage;
    get availableHeight() { return this.#availableHeight_accessor_storage; }
    set availableHeight(value) { this.#availableHeight_accessor_storage = value; }
    #searchText__accessor_storage = '';
    get searchText_() { return this.#searchText__accessor_storage; }
    set searchText_(value) { this.#searchText__accessor_storage = value; }
    #listMaxHeight__accessor_storage;
    get listMaxHeight_() { return this.#listMaxHeight__accessor_storage; }
    set listMaxHeight_(value) { this.#listMaxHeight__accessor_storage = value; }
    #listItemSize__accessor_storage;
    get listItemSize_() { return this.#listItemSize__accessor_storage; }
    set listItemSize_(value) { this.#listItemSize__accessor_storage = value; }
    #searchQueryMaxLength__accessor_storage = SEARCH_QUERY_MAX_LENGTH;
    get searchQueryMaxLength_() { return this.#searchQueryMaxLength__accessor_storage; }
    set searchQueryMaxLength_(value) { this.#searchQueryMaxLength__accessor_storage = value; }
    #activeDescendantEnabled__accessor_storage = false;
    get activeDescendantEnabled_() { return this.#activeDescendantEnabled__accessor_storage; }
    set activeDescendantEnabled_(value) { this.#activeDescendantEnabled__accessor_storage = value; }
    #filteredItems__accessor_storage = [];
    get filteredItems_() { return this.#filteredItems__accessor_storage; }
    set filteredItems_(value) { this.#filteredItems__accessor_storage = value; }
    #searchOptions__accessor_storage = {
        includeScore: true,
        includeMatches: true,
        ignoreLocation: false,
        threshold: 0.0,
        distance: 200,
        keys: [
            {
                name: 'tab.title',
                getter: getTitle,
                weight: 2,
            },
            {
                name: 'hostname',
                getter: getHostname,
                weight: 1,
            },
            {
                name: 'tabGroup.title',
                getter: getTabGroupTitle,
                weight: 1.5,
            },
        ],
    };
    get searchOptions_() { return this.#searchOptions__accessor_storage; }
    set searchOptions_(value) { this.#searchOptions__accessor_storage = value; }
    #recentlyClosedDefaultItemDisplayCount__accessor_storage = loadTimeData.getValue('recentlyClosedDefaultItemDisplayCount');
    get recentlyClosedDefaultItemDisplayCount_() { return this.#recentlyClosedDefaultItemDisplayCount__accessor_storage; }
    set recentlyClosedDefaultItemDisplayCount_(value) { this.#recentlyClosedDefaultItemDisplayCount__accessor_storage = value; }
    #searchResultText__accessor_storage = '';
    get searchResultText_() { return this.#searchResultText__accessor_storage; }
    set searchResultText_(value) { this.#searchResultText__accessor_storage = value; }
    #activeSelectionId__accessor_storage;
    get activeSelectionId_() { return this.#activeSelectionId__accessor_storage; }
    set activeSelectionId_(value) { this.#activeSelectionId__accessor_storage = value; }
    #shortcut__accessor_storage = loadTimeData.getString('shortcutText');
    get shortcut_() { return this.#shortcut__accessor_storage; }
    set shortcut_(value) { this.#shortcut__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    autofocus = false;
    apiProxy_ = TabSearchApiProxyImpl.getInstance();
    metricsReporter_ = null;
    listenerIds_ = [];
    tabGroupsMap_ = new Map();
    recentlyClosedTabGroups_ = [];
    openTabs_ = [];
    recentlyClosedTabs_ = [];
    windowShownTimestamp_ = Date.now();
    mediaTabsTitleItem_;
    openTabsTitleItem_;
    recentlyClosedTitleItem_;
    filteredOpenTabsCount_ = 0;
    filteredOpenHeaderIndices_ = [];
    initiallySelectedIndex_ = NO_SELECTION;
    documentVisibilityChangedListener_;
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
        this.documentVisibilityChangedListener_ = () => {
            if (document.visibilityState === 'visible') {
                this.windowShownTimestamp_ = Date.now();
                this.activeDescendantEnabled_ = false;
                if (loadTimeData.getBoolean('tabSearchPerformanceImprovements')) {
                    listenOnce(this.$.tabsList, 'viewport-filled', () => this.apiProxy_.maybeShowUi());
                    this.updateFilteredTabs_();
                }
                else {
                    this.updateTabs_();
                }
            }
            else {
                this.onDocumentHidden_();
            }
        };
        this.mediaTabsTitleItem_ =
            new TitleItem(loadTimeData.getString('mediaTabs'));
        this.openTabsTitleItem_ = new TitleItem(loadTimeData.getString('openTabs'));
        this.recentlyClosedTitleItem_ = new TitleItem(loadTimeData.getString('recentlyClosed'), true /*expandable*/, true /*expanded*/);
    }
    get metricsReporter() {
        if (!this.metricsReporter_) {
            this.metricsReporter_ = MetricsReporterImpl.getInstance();
        }
        return this.metricsReporter_;
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('visibilitychange', this.documentVisibilityChangedListener_);
        const callbackRouter = this.apiProxy_.getCallbackRouter();
        this.listenerIds_.push(callbackRouter.tabsChanged.addListener(this.tabsChanged_.bind(this)), callbackRouter.tabUpdated.addListener(this.onTabUpdated_.bind(this)), callbackRouter.tabsRemoved.addListener(this.onTabsRemoved_.bind(this)));
        // If added in a visible state update current tabs.
        if (document.visibilityState === 'visible') {
            this.updateTabs_();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.apiProxy_.getCallbackRouter().removeListener(id));
        document.removeEventListener('visibilitychange', this.documentVisibilityChangedListener_);
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.listItemSize_ = this.getStylePropertyPixelValue_('--mwb-item-height');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('availableHeight')) {
            assert(this.availableHeight !== undefined);
            /**
             * Calculate the list's available height by subtracting the height used by
             * the search and feedback fields.
             */
            this.listMaxHeight_ = Math.max(this.availableHeight - this.$.searchField.offsetHeight -
                this.$.divider.offsetHeight, Math.round(MINIMUM_AVAILABLE_HEIGHT_LIST_ITEM_COUNT *
                this.getStylePropertyPixelValue_('--mwb-item-height')));
        }
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    /**
     * Do not schedule the timer from CrSearchFieldMixin to make search more
     * responsive.
     */
    onSearchTermInput() {
        this.activeDescendantEnabled_ = false;
        this.hasSearchText = this.getSearchInput().value !== '';
        this.searchText_ = this.getSearchInput().value;
        // Reset the selected item whenever a search query is provided.
        // updateFilteredTabs_ will set the correct tab index for initial selection.
        const tabsList = this.$.tabsList;
        tabsList.resetSelected();
        this.updateFilteredTabs_();
        // http://crbug.com/40072096: Dispatch the search event to update the
        // internal value to make CrSearchFieldMixin function correctly.
        this.getSearchInput().dispatchEvent(new CustomEvent('search', { composed: true, detail: this.searchText_ }));
    }
    /**
     * @param name A property whose value is specified in pixels.
     */
    getStylePropertyPixelValue_(name) {
        const pxValue = getComputedStyle(this).getPropertyValue(name);
        assert(pxValue);
        return Number.parseInt(pxValue.trim().slice(0, -2), 10);
    }
    onDocumentHidden_() {
        this.filteredItems_ = [];
        this.setValue('');
        this.$.searchInput.focus();
    }
    updateTabs_() {
        const isMarkOverlap = this.metricsReporter.hasLocalMark('TabListDataReceived');
        chrome.metricsPrivate.recordBoolean('Tabs.TabSearch.WebUI.TabListDataReceived2.IsOverlap', isMarkOverlap);
        if (!isMarkOverlap) {
            this.metricsReporter.mark('TabListDataReceived');
        }
        this.apiProxy_.getProfileData().then(({ profileData }) => {
            this.metricsReporter.measure('TabListDataReceived')
                .then(e => this.metricsReporter.umaReportTime('Tabs.TabSearch.WebUI.TabListDataReceived2', e))
                .then(() => this.metricsReporter.clearMark('TabListDataReceived'))
                // Ignore silently if mark 'TabListDataReceived' is missing.
                .catch(() => { });
            // In rare cases there is no browser window. I suspect this happens during
            // browser shutdown. Don't show Tab Search when this happens.
            if (!profileData.windows) {
                console.warn('Tab Search: no browser window.');
                return;
            }
            // The selectable-list produces viewport-filled events whenever a data
            // or scroll position change triggers the viewport fill logic.
            listenOnce(this.$.tabsList, 'viewport-filled', () => this.apiProxy_.maybeShowUi());
            this.tabsChanged_(profileData);
        });
    }
    onTabUpdated_(tabUpdateInfo) {
        const { tab, inActiveWindow } = tabUpdateInfo;
        const tabData = this.tabData_(tab, inActiveWindow, TabItemType.OPEN_TAB, this.tabGroupsMap_);
        // Replace the tab with the same tabId and trigger rerender.
        let foundTab = false;
        for (let i = 0; i < this.openTabs_.length && !foundTab; ++i) {
            const item = this.openTabs_[i];
            if (item instanceof TabData && item.tab.tabId === tab.tabId) {
                this.openTabs_[i] = tabData;
                this.updateFilteredTabs_();
                foundTab = true;
            }
            else if (item instanceof SplitViewData && item.tabs) {
                const tabIndex = item.tabs.findIndex(t => t.tabId === tab.tabId);
                if (tabIndex !== -1) {
                    const tabs = [item.tabs[0], item.tabs[1]];
                    tabs[tabIndex] = tab;
                    const newSplitViewData = new SplitViewData({ tabs });
                    newSplitViewData.inActiveWindow = item.inActiveWindow;
                    this.updateSplitViewTabGroup_(newSplitViewData, this.tabGroupsMap_);
                    this.openTabs_[i] = newSplitViewData;
                    this.updateFilteredTabs_();
                    foundTab = true;
                }
            }
        }
        // If the updated tab's id is not found in the existing open tabs, add it
        // to the list.
        if (!foundTab) {
            this.openTabs_.push(tabData);
            this.updateFilteredTabs_();
        }
        // Check if we need to group any tabs into a new SplitViewData locally.
        if (tab.splitId) {
            const matchingIndices = [];
            for (let i = 0; i < this.openTabs_.length; ++i) {
                const item = this.openTabs_[i];
                if (item instanceof TabData && item.tab.splitId &&
                    tokenEquals(item.tab.splitId, tab.splitId)) {
                    matchingIndices.push(i);
                }
            }
            if (matchingIndices.length === 2) {
                const splitViewData = new SplitViewData({
                    tabs: [
                        this.openTabs_[matchingIndices[0]].tab,
                        this.openTabs_[matchingIndices[1]].tab,
                    ],
                });
                const idx0 = matchingIndices[0];
                const idx1 = matchingIndices[1];
                splitViewData.inActiveWindow = this.openTabs_[idx0].inActiveWindow;
                this.updateSplitViewTabGroup_(splitViewData, this.tabGroupsMap_);
                this.openTabs_[idx0] = splitViewData;
                this.openTabs_.splice(idx1, 1);
                this.updateFilteredTabs_();
            }
        }
        this.metricsReporter.measure('TabUpdated')
            .then(e => this.metricsReporter.umaReportTime('Tabs.TabSearch.Mojo.TabUpdated', e))
            .then(() => this.metricsReporter.clearMark('TabUpdated'))
            // Ignore silently if mark 'TabUpdated' is missing.
            .catch(() => { });
    }
    onTabsRemoved_(tabsRemovedInfo) {
        if (this.openTabs_.length === 0) {
            return;
        }
        const ids = new Set(tabsRemovedInfo.tabIds);
        // Splicing in descending index order to avoid affecting preceding indices
        // that are to be removed.
        for (let i = this.openTabs_.length - 1; i >= 0; i--) {
            const item = this.openTabs_[i];
            if (item instanceof TabData && ids.has(item.tab.tabId)) {
                this.openTabs_.splice(i, 1);
            }
            else if (item instanceof SplitViewData && item.tabs) {
                const tab0Closed = ids.has(item.tabs[0].tabId);
                const tab1Closed = ids.has(item.tabs[1].tabId);
                if (tab0Closed && tab1Closed) {
                    // Both tabs in split closed, remove entire row.
                    this.openTabs_.splice(i, 1);
                }
                else if (tab0Closed || tab1Closed) {
                    // One tab closed. Convert the remaining tab into standard TabData.
                    const survivingTab = tab0Closed ? item.tabs[1] : item.tabs[0];
                    const tabData = this.tabData_(survivingTab, item.inActiveWindow, TabItemType.OPEN_TAB, this.tabGroupsMap_);
                    this.openTabs_[i] = tabData;
                }
            }
        }
        tabsRemovedInfo.recentlyClosedTabs.forEach(tab => {
            this.recentlyClosedTabs_.unshift(this.tabData_(tab, false, TabItemType.RECENTLY_CLOSED_TAB, this.tabGroupsMap_));
        });
        this.updateFilteredTabs_();
    }
    itemIndexToTabIndex_(itemIndex) {
        // Note: the array being searched has length at most 3.
        const numPreviousHeaders = this.filteredOpenHeaderIndices_.findLastIndex(idx => idx < itemIndex) +
            1;
        return itemIndex - numPreviousHeaders;
    }
    getSelectedTabIndex() {
        return this.itemIndexToTabIndex_(this.$.tabsList.selected);
    }
    getA11ySearchResultText_() {
        // TODO(romanarora): Screen readers' list item number announcement will
        // not match as it counts the title items too. Investigate how to
        // programmatically control announcements to avoid this.
        const itemCount = this.selectableItemCount_();
        let text;
        if (this.searchText_.length > 0) {
            text = loadTimeData.getStringF(itemCount === 1 ? 'a11yFoundTabFor' : 'a11yFoundTabsFor', itemCount, this.searchText_);
        }
        else {
            text = loadTimeData.getStringF(itemCount === 1 ? 'a11yFoundTab' : 'a11yFoundTabs', itemCount);
        }
        return text;
    }
    /**
     * @return The number of selectable list items, excludes non
     *     selectable items such as section title items.
     */
    selectableItemCount_() {
        return this.filteredItems_.reduce((acc, item) => {
            return acc + (item instanceof TitleItem ? 0 : 1);
        }, 0);
    }
    /**
     * @return The last selectable list item, excludes non
     *     selectable items such as section title items.
     */
    lastSelectableIndex_() {
        return this.filteredItems_.findLastIndex(item => !(item instanceof TitleItem)) ||
            -1;
    }
    onItemClick_(e) {
        const target = e.currentTarget;
        const tabItem = target.data;
        const tabIndex = this.itemIndexToTabIndex_(Number(target.dataset['index']));
        this.tabItemAction_(tabItem, tabIndex);
    }
    recordMetricsForAction(action, tabIndex) {
        const withSearch = !!this.searchText_;
        if (action === 'SwitchTab' || action === 'SwitchTabOtherWindow') {
            chrome.metricsPrivate.recordEnumerationValue('Tabs.TabSearch.WebUI.TabSwitchAction', withSearch ? TabSwitchAction.WITH_SEARCH :
                TabSwitchAction.WITHOUT_SEARCH, TabSwitchAction.COUNT);
        }
        switch (action) {
            case 'OpenRecentlyClosedEntry':
                chrome.metricsPrivate.recordEnumerationValue('Tabs.TabSearch.WebUI.Action', withSearch ?
                    TabSearchUserAction.IN_FILTERED_LIST_OPEN_RECENTLY_CLOSED :
                    TabSearchUserAction.IN_UNFILTERED_LIST_OPEN_RECENTLY_CLOSED, 8);
                break;
            case 'SwitchTab':
                chrome.metricsPrivate.recordEnumerationValue('Tabs.TabSearch.WebUI.Action', withSearch ? TabSearchUserAction.IN_FILTERED_LIST_SWITCHED_TAB :
                    TabSearchUserAction.IN_UNFILTERED_LIST_SWITCHED_TAB, 8);
                break;
            case 'SwitchTabOtherWindow':
                chrome.metricsPrivate.recordEnumerationValue('Tabs.TabSearch.WebUI.Action', withSearch ?
                    TabSearchUserAction.IN_FILTERED_LIST_SWITCHED_OTHER_WINDOW_TAB :
                    TabSearchUserAction
                        .IN_UNFILTERED_LIST_SWITCHED_OTHER_WINDOW_TAB, 8);
                break;
            case 'CloseTab':
                chrome.metricsPrivate.recordEnumerationValue('Tabs.TabSearch.WebUI.Action', withSearch ? TabSearchUserAction.IN_FILTERED_LIST_CLOSED_TAB :
                    TabSearchUserAction.IN_UNFILTERED_LIST_CLOSED_TAB, 8);
                break;
            default:
                assertNotReachedCase(action);
        }
        if (action === 'SwitchTabOtherWindow') {
            action = 'SwitchTab';
        }
        chrome.metricsPrivate.recordSmallCount(withSearch ? `Tabs.TabSearch.WebUI.IndexOf${action}InFilteredList` :
            `Tabs.TabSearch.WebUI.IndexOf${action}InUnfilteredList`, tabIndex);
    }
    /**
     * Trigger the click/press action associated with the given Tab item type.
     */
    tabItemAction_(itemData, tabIndex) {
        const state = this.searchText_ ? 'Filtered' : 'Unfiltered';
        let action;
        switch (itemData.type) {
            case TabItemType.OPEN_TAB:
                const isMarkOverlap = this.metricsReporter.hasLocalMark('SwitchToTab');
                chrome.metricsPrivate.recordBoolean('Tabs.TabSearch.Mojo.SwitchToTab.IsOverlap', isMarkOverlap);
                if (!isMarkOverlap) {
                    this.metricsReporter.mark('SwitchToTab');
                }
                this.recordMetricsForAction(itemData.inActiveWindow ? 'SwitchTab' : 'SwitchTabOtherWindow', tabIndex);
                this.apiProxy_.switchToTab({ tabId: itemData.tab.tabId });
                action = 'SwitchTab';
                break;
            case TabItemType.OPEN_SPLIT:
                this.recordMetricsForAction(itemData.inActiveWindow ? 'SwitchTab' : 'SwitchTabOtherWindow', tabIndex);
                this.apiProxy_.switchToTab({
                    tabId: itemData.tabs[0].tabId,
                });
                action = 'SwitchTab';
                break;
            case TabItemType.RECENTLY_CLOSED_TAB:
                this.recordMetricsForAction('OpenRecentlyClosedEntry', tabIndex - this.filteredOpenTabsCount_);
                this.apiProxy_.openRecentlyClosedEntry(itemData.tab.tabId, !!this.searchText_, true);
                action = 'OpenRecentlyClosedEntry';
                break;
            case TabItemType.RECENTLY_CLOSED_TAB_GROUP:
                this.recordMetricsForAction('OpenRecentlyClosedEntry', tabIndex - this.filteredOpenTabsCount_);
                this.apiProxy_.openRecentlyClosedEntry((itemData.tabGroup).sessionId, !!this.searchText_, false);
                action = 'OpenRecentlyClosedEntry';
                break;
            case TabItemType.RECENTLY_CLOSED_SPLIT:
                this.recordMetricsForAction('OpenRecentlyClosedEntry', tabIndex - this.filteredOpenTabsCount_);
                this.apiProxy_.openRecentlyClosedEntry(itemData.sessionId, !!this.searchText_, false);
                action = 'OpenRecentlyClosedEntry';
                break;
            default:
                throw new Error('ItemData is of invalid type.');
        }
        chrome.metricsPrivate.recordTime(`Tabs.TabSearch.WebUI.TimeTo${action}In${state}List`, Math.round(Date.now() - this.windowShownTimestamp_));
    }
    onItemClose_(e) {
        performance.mark('tab_search:close_tab:metric_begin');
        const target = e.currentTarget;
        const tabItem = target.data;
        const tabIndex = this.itemIndexToTabIndex_(Number(target.dataset['index']));
        this.recordMetricsForAction('CloseTab', tabIndex);
        if (tabItem instanceof SplitViewData && tabItem.tabs) {
            this.apiProxy_.closeTabs([tabItem.tabs[0].tabId, tabItem.tabs[1].tabId]);
            this.announceA11y_(loadTimeData.getString('a11ySplitViewClosed'));
        }
        else if (tabItem instanceof TabData) {
            this.apiProxy_.closeTab(tabItem.tab.tabId);
            this.announceA11y_(loadTimeData.getString('a11yTabClosed'));
        }
        listenOnce(this.$.tabsList, 'rendered-items-changed', () => {
            performance.mark('tab_search:close_tab:metric_end');
        });
    }
    onItemKeydown_(e) {
        if (e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        const target = e.currentTarget;
        const itemData = target.data;
        const tabIndex = this.itemIndexToTabIndex_(Number(target.dataset['index']));
        this.tabItemAction_(itemData, tabIndex);
    }
    tabsChanged_(profileData) {
        this.tabGroupsMap_ = profileData.tabGroups.reduce((map, tabGroup) => {
            map.set(tokenToString(tabGroup.id), tabGroup);
            return map;
        }, new Map());
        const openTabsList = [];
        for (const window of profileData.windows) {
            const splitTabsMap = new Map();
            const nonSplitTabs = [];
            for (const tab of window.tabs) {
                if (tab.splitId) {
                    const splitIdStr = tokenToString(tab.splitId);
                    if (!splitTabsMap.has(splitIdStr)) {
                        splitTabsMap.set(splitIdStr, []);
                    }
                    splitTabsMap.get(splitIdStr).push(tab);
                }
                else {
                    nonSplitTabs.push(tab);
                }
            }
            for (const [_, tabs] of splitTabsMap) {
                if (tabs.length === 2) {
                    const splitViewData = new SplitViewData({
                        tabs: [tabs[0], tabs[1]],
                    });
                    splitViewData.inActiveWindow = window.active;
                    this.updateSplitViewTabGroup_(splitViewData, this.tabGroupsMap_);
                    openTabsList.push(splitViewData);
                }
                else {
                    for (const tab of tabs) {
                        nonSplitTabs.push(tab);
                    }
                }
            }
            for (const tab of nonSplitTabs) {
                openTabsList.push(this.tabData_(tab, window.active, TabItemType.OPEN_TAB, this.tabGroupsMap_));
            }
        }
        this.openTabs_ = openTabsList;
        const recentlyClosedSplitViews = (profileData.recentlyClosedSplitViews || []).map(splitView => {
            const splitViewData = new SplitViewData({ splitView });
            this.updateSplitViewTabGroup_(splitViewData, this.tabGroupsMap_);
            return splitViewData;
        });
        const recentlyClosedTabsFiltered = profileData.recentlyClosedTabs.filter(tab => !tab.splitId);
        this.recentlyClosedTabs_ = [
            ...recentlyClosedTabsFiltered.map(tab => this.tabData_(tab, false, TabItemType.RECENTLY_CLOSED_TAB, this.tabGroupsMap_)),
            ...recentlyClosedSplitViews,
        ];
        this.recentlyClosedTabGroups_ =
            profileData.recentlyClosedTabGroups.map(tabGroup => {
                const tabGroupData = new TabGroupData(tabGroup);
                tabGroupData.a11yTypeText =
                    loadTimeData.getString('a11yRecentlyClosedTabGroup');
                return tabGroupData;
            });
        this.recentlyClosedTitleItem_.expanded =
            profileData.recentlyClosedSectionExpanded;
        this.$.tabsList.expandedList = profileData.recentlyClosedSectionExpanded;
        this.updateFilteredTabs_();
    }
    getAriaActivedescendant_() {
        if (this.activeDescendantEnabled_) {
            return this.activeSelectionId_;
        }
        return undefined;
    }
    onItemFocus_(e) {
        // Ensure that when a TabSearchItem receives focus, it becomes the selected
        // item in the list.
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        this.$.tabsList.setSelected(index);
    }
    getTitleItemFromTitle_(title) {
        const item = [
            this.mediaTabsTitleItem_,
            this.openTabsTitleItem_,
            this.recentlyClosedTitleItem_,
        ].find(item => item.title === title);
        assert(item);
        return item;
    }
    async onTitleExpandedChanged_(e) {
        // Instead of relying on two-way binding to update the `expanded` property,
        // we update the value directly as the `expanded-changed` event takes place
        // before a two way bound property update and we need the TitleItem
        // instance to reflect the updated state prior to calling the
        // updateFilteredTabs_ function.
        const expanded = e.detail.value;
        const target = e.currentTarget;
        const title = target.dataset['title'];
        const index = Number(target.dataset['index']);
        assert(title);
        const titleItem = this.getTitleItemFromTitle_(title);
        if (titleItem.expanded === expanded) {
            return;
        }
        titleItem.expanded = expanded;
        this.apiProxy_.saveRecentlyClosedExpandedPref(expanded);
        this.$.tabsList.toggleAttribute('expanded-list', expanded);
        e.stopPropagation();
        await this.updateFilteredTabs_();
        // If a section's title item is the last visible element in the list and the
        // list's height is at its maximum, it will not be evident to the user that
        // on expanding the section there are now section tab items available. By
        // ensuring the first element of the section is visible, we can avoid this
        // confusion.
        if (expanded) {
            this.$.tabsList.scrollIndexIntoView(index + 1);
        }
    }
    /**
     * Handles key events when the search field has focus.
     */
    onSearchKeydown_(e) {
        // In the event the search field has focus and the first item in the list is
        // selected and we receive a Shift+Tab navigation event, ensure All DOM
        // items are available so that the focus can transfer to the last item in
        // the list.
        if (e.shiftKey && e.key === 'Tab' && this.getSelectedTabIndex() === 0) {
            this.$.tabsList.ensureAllDomItemsAvailable();
            return;
        }
        // Do not interfere with the search field's management of text selection
        // that relies on the Shift key.
        if (e.shiftKey) {
            return;
        }
        if (this.$.tabsList.selected === -1) {
            // No tabs matching the search text criteria.
            return;
        }
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            this.activeDescendantEnabled_ = false;
        }
        // 
        const lowerKey = e.key.toLowerCase();
        if (e.ctrlKey && (lowerKey === 'n' || lowerKey === 'p')) {
            const mappedKey = lowerKey === 'n' ? 'ArrowDown' : 'ArrowUp';
            this.activeDescendantEnabled_ = true;
            this.$.tabsList.navigate(mappedKey);
            e.stopPropagation();
            e.preventDefault();
            return;
        }
        // 
        if (selectorNavigationKeys.includes(e.key)) {
            this.activeDescendantEnabled_ = true;
            this.$.tabsList.navigate(e.key);
            e.stopPropagation();
            e.preventDefault();
        }
        else if (e.key === 'Enter') {
            if (this.$.tabsList.selectedItem) {
                const itemData = this.$.tabsList.selectedItem
                    .data;
                this.tabItemAction_(itemData, this.getSelectedTabIndex());
            }
            e.stopPropagation();
        }
    }
    announceA11y_(text) {
        getAnnouncerInstance().announce(text);
    }
    ariaLabel_(tabData) {
        return ariaLabel(tabData);
    }
    tabData_(tab, inActiveWindow, type, tabGroupsMap) {
        const tabData = new TabData(tab, type, getDisplayHostnameForUrl(new URL(normalizeURL(tab.url))));
        if (tab.groupId) {
            tabData.tabGroup = tabGroupsMap.get(tokenToString(tab.groupId));
        }
        if (type === TabItemType.OPEN_TAB) {
            tabData.inActiveWindow = inActiveWindow;
        }
        tabData.a11yTypeText = loadTimeData.getString(type === TabItemType.OPEN_TAB ? 'a11yOpenTab' :
            'a11yRecentlyClosedTab');
        return tabData;
    }
    updateSplitViewTabGroup_(splitViewData, tabGroupsMap) {
        let groupId = null;
        if (splitViewData.tabs) {
            groupId = splitViewData.tabs[0].groupId || splitViewData.tabs[1].groupId;
        }
        else if (splitViewData.splitView) {
            groupId = splitViewData.splitView.groupId;
        }
        if (groupId) {
            splitViewData.tabGroup = tabGroupsMap.get(tokenToString(groupId));
        }
        else {
            splitViewData.tabGroup = undefined;
        }
    }
    getRecentlyClosedItemLastActiveTime_(itemData) {
        if (itemData instanceof SplitViewData &&
            itemData.type === TabItemType.RECENTLY_CLOSED_SPLIT) {
            return itemData.splitView.lastActiveTime;
        }
        if (itemData.type === TabItemType.RECENTLY_CLOSED_TAB &&
            itemData instanceof TabData) {
            return itemData.tab.lastActiveTime;
        }
        if (itemData.type === TabItemType.RECENTLY_CLOSED_TAB_GROUP &&
            itemData instanceof TabGroupData) {
            return (itemData.tabGroup).lastActiveTime;
        }
        throw new Error('ItemData provided is invalid.');
    }
    async updateFilteredTabs_() {
        const updateStartTime = Date.now();
        this.openTabs_.sort((a, b) => {
            const tabA = (a instanceof TabData ? a.tab : a.tabs[0]);
            const tabB = (b instanceof TabData ? b.tab : b.tabs[0]);
            // Move the visible tab(s) to the bottom of the list
            // because it's not likely users want to click on it.
            if (a.inActiveWindow && tabA.visible) {
                return 1;
            }
            if (b.inActiveWindow && tabB.visible) {
                return -1;
            }
            return (tabB.lastActiveTimeTicks && tabA.lastActiveTimeTicks) ?
                Number(tabB.lastActiveTimeTicks.internalValue -
                    tabA.lastActiveTimeTicks.internalValue) :
                0;
        });
        let mediaTabs = [];
        // Audio & Video section will not be added when search criteria is applied.
        // Show media tabs in Open Tabs.
        if (this.searchText_.length === 0) {
            mediaTabs = this.openTabs_.filter(tabData => {
                if (tabData instanceof TabData) {
                    return tabHasMediaAlerts(tabData.tab);
                }
                if (tabData instanceof SplitViewData && tabData.tabs) {
                    return tabHasMediaAlerts(tabData.tabs[0]) ||
                        tabHasMediaAlerts(tabData.tabs[1]);
                }
                return false;
            });
        }
        const filteredMediaTabs = await search(this.searchText_, mediaTabs, this.searchOptions_);
        let filteredOpenTabs = await search(this.searchText_, this.openTabs_, this.searchOptions_);
        // The MRU tab that is not the active tab is either the first tab in the
        // Audio and Video section (if it exists) or the first tab in the Open Tabs
        // section.
        if (filteredOpenTabs.length > 0) {
            const firstTab = filteredOpenTabs[0];
            const isMedia = firstTab instanceof TabData ?
                tabHasMediaAlerts(firstTab.tab) :
                (firstTab instanceof SplitViewData && firstTab.tabs ?
                    (tabHasMediaAlerts(firstTab.tabs[0]) ||
                        tabHasMediaAlerts(firstTab.tabs[1])) :
                    false);
            this.initiallySelectedIndex_ =
                (isMedia || filteredMediaTabs.length === 0) ?
                    1 :
                    filteredMediaTabs.length + 2;
        }
        if (this.searchText_.length === 0) {
            filteredOpenTabs = filteredOpenTabs.filter(tabData => {
                if (tabData instanceof TabData) {
                    return !tabHasMediaAlerts(tabData.tab);
                }
                if (tabData instanceof SplitViewData && tabData.tabs) {
                    return !(tabHasMediaAlerts(tabData.tabs[0]) ||
                        tabHasMediaAlerts(tabData.tabs[1]));
                }
                return true;
            });
        }
        this.filteredOpenTabsCount_ =
            filteredOpenTabs.length + filteredMediaTabs.length;
        const recentlyClosedItems = [...this.recentlyClosedTabs_, ...this.recentlyClosedTabGroups_];
        recentlyClosedItems.sort((a, b) => {
            const aTime = this.getRecentlyClosedItemLastActiveTime_(a);
            const bTime = this.getRecentlyClosedItemLastActiveTime_(b);
            return (bTime && aTime) ?
                Number(bTime.internalValue - aTime.internalValue) :
                0;
        });
        let filteredRecentlyClosedItems = await search(this.searchText_, recentlyClosedItems, this.searchOptions_);
        // Limit the number of recently closed items to the default display count
        // when no search text has been specified. Filter out recently closed tabs
        // that belong to a recently closed tab group by default.
        const recentlyClosedTabGroupIds = this.recentlyClosedTabGroups_.reduce((acc, tabGroupData) => acc.concat(tabGroupData.tabGroup.id), []);
        if (!this.searchText_.length) {
            filteredRecentlyClosedItems =
                filteredRecentlyClosedItems
                    .filter(recentlyClosedItem => {
                    if (recentlyClosedItem instanceof TabGroupData) {
                        return true;
                    }
                    if (recentlyClosedItem instanceof SplitViewData) {
                        return true;
                    }
                    const recentlyClosedTab = recentlyClosedItem.tab;
                    return (!recentlyClosedTab.groupId ||
                        !recentlyClosedTabGroupIds.some(groupId => tokenEquals(groupId, recentlyClosedTab.groupId)));
                })
                    .slice(0, this.recentlyClosedDefaultItemDisplayCount_);
        }
        this.filteredOpenHeaderIndices_ = [];
        let numItems = 0;
        [filteredMediaTabs, filteredOpenTabs, filteredRecentlyClosedItems].forEach(list => {
            if (list.length > 0) {
                this.filteredOpenHeaderIndices_.push(numItems);
                numItems += list.length + 1;
            }
        });
        this.filteredItems_ =
            [
                [this.mediaTabsTitleItem_, filteredMediaTabs],
                [this.openTabsTitleItem_, filteredOpenTabs],
                [this.recentlyClosedTitleItem_, filteredRecentlyClosedItems],
            ]
                .reduce((acc, [sectionTitle, sectionItems]) => {
                if (sectionItems.length !== 0) {
                    acc.push(sectionTitle);
                    if (!sectionTitle.expandable ||
                        sectionTitle.expandable && sectionTitle.expanded) {
                        acc.push(...sectionItems);
                    }
                }
                return acc;
            }, []);
        this.searchResultText_ = this.getA11ySearchResultText_();
        // If there was no previously selected index, set the selected index to be
        // the tab index specified for initial selection; else retain the currently
        // selected index. If the list shrunk above the selected index, select the
        // last index in the list. If there are no matching results, set the
        // selected index value to none.
        await this.updateComplete;
        const tabsList = this.$.tabsList;
        await tabsList.updateComplete;
        // Only update the selection after the tab list has a chance to render
        // the newly filtered list.
        let selectedIndex = this.$.tabsList.selected;
        if (selectedIndex === NO_SELECTION) {
            selectedIndex = this.initiallySelectedIndex_;
        }
        tabsList.setSelected(Math.min(Math.max(selectedIndex, 0), this.lastSelectableIndex_()));
        chrome.metricsPrivate.recordTime('Tabs.TabSearch.WebUI.SearchUpdateDuration', Math.round(Date.now() - updateStartTime));
    }
    onSelectedChange_(e) {
        const itemData = e.detail.item ? e.detail.item.data : null;
        this.activeSelectionId_ = (itemData && itemData instanceof TabData) ?
            itemData.tab.tabId.toString() :
            undefined;
    }
    isTitleItem_(item) {
        return item instanceof TitleItem;
    }
    isTabData_(item) {
        return item instanceof TabData;
    }
    isTabGroupData_(item) {
        return item instanceof TabGroupData;
    }
    isSplitViewData_(item) {
        return item instanceof SplitViewData;
    }
}
customElements.define(TabSearchPageElement.is, TabSearchPageElement);
