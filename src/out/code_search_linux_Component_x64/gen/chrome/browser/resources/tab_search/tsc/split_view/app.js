// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import '../tab_search_item.js';
import '../selectable_lazy_list.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getDisplayHostnameForUrl, normalizeURL, TabData, TabItemType } from '../tab_data.js';
import { TabSearchApiProxyImpl } from '../tab_search_api_proxy.js';
import { tabHasMediaAlerts } from '../tab_search_utils.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
export class SplitNewTabPageAppElement extends CrLitElement {
    static get is() {
        return 'split-new-tab-page-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            allEligibleTabs_: { type: Array },
            minViewportHeight_: { type: Number },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #allEligibleTabs__accessor_storage = [];
    get allEligibleTabs_() { return this.#allEligibleTabs__accessor_storage; }
    set allEligibleTabs_(value) { this.#allEligibleTabs__accessor_storage = value; }
    #minViewportHeight__accessor_storage = 0;
    get minViewportHeight_() { return this.#minViewportHeight__accessor_storage; }
    set minViewportHeight_(value) { this.#minViewportHeight__accessor_storage = value; }
    title_ = '';
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    apiProxy_ = TabSearchApiProxyImpl.getInstance();
    initialFocusPromise_ = null;
    listenerIds_ = [];
    visibilityChangedListener_;
    get initialFocusPromiseForTesting() {
        return this.initialFocusPromise_;
    }
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
        this.visibilityChangedListener_ = () => {
            if (document.visibilityState === 'visible') {
                this.apiProxy_.getProfileData().then(({ profileData }) => {
                    this.onTabsChanged_(profileData);
                });
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.apiProxy_.getIsSplit().then(({ isSplit }) => {
            if (!isSplit) {
                this.redirectToNtp_();
            }
        });
        const callbackRouter = this.apiProxy_.getCallbackRouter();
        this.listenerIds_.push(callbackRouter.tabsChanged.addListener(this.onTabsChanged_.bind(this)), callbackRouter.tabUpdated.addListener(this.onTabUpdated_.bind(this)), callbackRouter.tabsRemoved.addListener(this.onTabsRemoved_.bind(this)), callbackRouter.tabUnsplit.addListener(this.redirectToNtp_.bind(this)), callbackRouter.hostWindowChanged.addListener(this.hostWindowChanged_.bind(this)));
        this.apiProxy_.getProfileData().then(({ profileData }) => {
            this.onTabsChanged_(profileData);
        });
        document.addEventListener('visibilitychange', this.visibilityChangedListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.apiProxy_.getCallbackRouter().removeListener(id));
        this.listenerIds_ = [];
        document.removeEventListener('visibilitychange', this.visibilityChangedListener_);
    }
    onCloseClick_() {
        this.apiProxy_.closeWebUiTab();
    }
    onCloseButtonFocus_() {
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.show();
    }
    onCloseButtonBlur_() {
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.hide();
    }
    onTabClick_(e) {
        const target = e.currentTarget;
        this.apiProxy_.replaceActiveSplitTab(target.data.tab.tabId);
    }
    onTabFocus_(e) {
        // Ensure that when a TabSearchItem receives focus, it becomes the selected
        // item in the list.
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        this.$.splitTabsList.setSelected(index);
    }
    onTabFocusout_(_) {
        // Ensure that when a TabSearchItem loses focus, it resets the selected
        // item.
        this.$.splitTabsList.resetSelected();
    }
    onTabKeydown_(e) {
        if (e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        this.onTabClick_(e);
    }
    onTabsChanged_(profileData) {
        const hostWindow = profileData.windows.find(({ isHostWindow }) => isHostWindow);
        this.allEligibleTabs_ =
            hostWindow?.tabs?.filter(tab => !tab.visible && !tab.split)
                .map(tab => this.getTabData_(tab, true, TabItemType.OPEN_TAB)) ||
                [];
        this.sortTabs_();
        if (!this.initialFocusPromise_) {
            this.initialFocusPromise_ = this.focusFirstTab_();
        }
        this.updateComplete.then(() => {
            this.updateViewportHeight_(profileData);
        });
    }
    async focusFirstTab_() {
        await this.updateComplete;
        await this.$.splitTabsList.updateComplete;
        if (!this.isConnected || this.allEligibleTabs_.length === 0) {
            return;
        }
        // setSelected(0) ensures the first item is rendered by the underlying
        // cr-lazy-list before we attempt to query and focus it.
        await this.$.splitTabsList.setSelected(0);
        const firstItem = this.shadowRoot.querySelector('tab-search-item');
        if (firstItem) {
            firstItem.focus();
        }
    }
    onTabUpdated_(tabUpdateInfo) {
        const { tab, inActiveWindow, inHostWindow } = tabUpdateInfo;
        if (!inHostWindow) {
            return;
        }
        const tabData = this.getTabData_(tab, inActiveWindow, TabItemType.OPEN_TAB);
        const tabIndex = this.allEligibleTabs_.findIndex(el => el.tab.tabId === tab.tabId);
        if (tabIndex >= 0) {
            this.allEligibleTabs_[tabIndex] = tabData;
        }
        else {
            this.allEligibleTabs_.push(tabData);
        }
        this.allEligibleTabs_ = this.allEligibleTabs_.filter(tab => !tab.tab.visible && !tab.tab.split);
        this.sortTabs_();
    }
    onTabsRemoved_(tabsRemovedInfo) {
        if (this.allEligibleTabs_.length === 0) {
            return;
        }
        const ids = new Set(tabsRemovedInfo.tabIds);
        this.allEligibleTabs_ =
            this.allEligibleTabs_.filter(tab => !ids.has(tab.tab.tabId));
        this.sortTabs_();
    }
    sortTabs_() {
        // If no tabs are eligible for selection, redirect to the regular NTP.
        if (this.allEligibleTabs_.length === 0) {
            this.redirectToNtp_();
        }
        this.allEligibleTabs_.sort((a, b) => {
            const tabA = a.tab;
            const tabB = b.tab;
            // Move tabs with media alerts to the top of the list.
            if (tabHasMediaAlerts(tabA) && !tabHasMediaAlerts(tabB)) {
                return -1;
            }
            else if (!tabHasMediaAlerts(tabA) && tabHasMediaAlerts(tabB)) {
                return 1;
            }
            return (tabB.lastActiveTimeTicks && tabA.lastActiveTimeTicks) ?
                Number(tabB.lastActiveTimeTicks.internalValue -
                    tabA.lastActiveTimeTicks.internalValue) :
                0;
        });
        this.title_ = this.allEligibleTabs_.length === 0 ?
            loadTimeData.getString('splitViewEmptyTitle') :
            loadTimeData.getString('splitViewTitle');
    }
    getTabData_(tab, inActiveWindow, type) {
        const displayUrl = getDisplayHostnameForUrl(new URL(normalizeURL(tab.url)));
        const tabData = new TabData(tab, type, displayUrl);
        if (type === TabItemType.OPEN_TAB) {
            tabData.inActiveWindow = inActiveWindow;
        }
        tabData.a11yTypeText = loadTimeData.getString('a11yOpenTab');
        return tabData;
    }
    redirectToNtp_() {
        this.apiProxy_.redirectToNtp();
    }
    hostWindowChanged_() {
        this.apiProxy_.getProfileData().then(({ profileData }) => {
            this.onTabsChanged_(profileData);
        });
    }
    updateViewportHeight_(profileData) {
        const hostWindow = profileData.windows.find(({ isHostWindow }) => isHostWindow);
        this.minViewportHeight_ =
            hostWindow ? hostWindow.height - this.$.header.offsetHeight : 0;
    }
}
customElements.define(SplitNewTabPageAppElement.is, SplitNewTabPageAppElement);
