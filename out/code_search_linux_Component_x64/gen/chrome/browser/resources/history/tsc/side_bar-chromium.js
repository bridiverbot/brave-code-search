// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_icons.html.js';
import './shared_vars.css.js';
import '/strings.m.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { Page, TABBED_PAGES } from './router.js';
import { getCss } from './side_bar.css.js';
import { getHtml } from './side_bar.html.js';
export class HistorySideBarElement extends CrLitElement {
    static get is() {
        return 'history-side-bar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            footerInfo: { type: Object },
            historyClustersEnabled: { type: Boolean },
            historyClustersVisible: {
                type: Boolean,
                notify: true,
            },
            /* The id of the currently selected page. */
            selectedPage: {
                type: String,
                notify: true,
            },
            /* The index of the currently selected tab. */
            selectedTab: {
                type: Number,
                notify: true,
            },
            guestSession_: { type: Boolean },
            /**
             * Used to display notices for profile sign-in status and managed status.
             */
            showFooter_: { type: Boolean },
            /**
             * Used to display Google Account section in the footer. This section
             * contains links to Google My Activity and/or Gemini Apps Activity.
             *
             * When this property is true, `showFooter_` property should also be true.
             */
            showGoogleAccountFooter_: { type: Boolean },
            /**
             * Mutually exclusive flags that determine which message to show in the
             * Google Account footer:
             *   - message with Google My Activity (GMA) link
             *   - message with Gemini Apps Activity (GAA) link
             *   - message with both Google My Activity (GMA) and
             *     Gemini Apps Activity (GAA) links.
             *
             * At most one of these can be true.
             */
            showGMAOnly_: { type: Boolean },
            showGAAOnly_: { type: Boolean },
            showGMAAndGAA_: { type: Boolean },
            showHistoryClusters_: { type: Boolean },
        };
    }
    #footerInfo_accessor_storage = {
        managed: false,
        otherFormsOfHistory: false,
        geminiAppsActivity: false,
    };
    get footerInfo() { return this.#footerInfo_accessor_storage; }
    set footerInfo(value) { this.#footerInfo_accessor_storage = value; }
    #historyClustersEnabled_accessor_storage = false;
    get historyClustersEnabled() { return this.#historyClustersEnabled_accessor_storage; }
    set historyClustersEnabled(value) { this.#historyClustersEnabled_accessor_storage = value; }
    #historyClustersVisible_accessor_storage = false;
    get historyClustersVisible() { return this.#historyClustersVisible_accessor_storage; }
    set historyClustersVisible(value) { this.#historyClustersVisible_accessor_storage = value; }
    #selectedPage_accessor_storage = '';
    get selectedPage() { return this.#selectedPage_accessor_storage; }
    set selectedPage(value) { this.#selectedPage_accessor_storage = value; }
    #selectedTab_accessor_storage = -1;
    get selectedTab() { return this.#selectedTab_accessor_storage; }
    set selectedTab(value) { this.#selectedTab_accessor_storage = value; }
    #guestSession__accessor_storage = loadTimeData.getBoolean('isGuestSession');
    get guestSession_() { return this.#guestSession__accessor_storage; }
    set guestSession_(value) { this.#guestSession__accessor_storage = value; }
    #showFooter__accessor_storage = false;
    get showFooter_() { return this.#showFooter__accessor_storage; }
    set showFooter_(value) { this.#showFooter__accessor_storage = value; }
    #showGoogleAccountFooter__accessor_storage = false;
    get showGoogleAccountFooter_() { return this.#showGoogleAccountFooter__accessor_storage; }
    set showGoogleAccountFooter_(value) { this.#showGoogleAccountFooter__accessor_storage = value; }
    #showGMAOnly__accessor_storage = false;
    get showGMAOnly_() { return this.#showGMAOnly__accessor_storage; }
    set showGMAOnly_(value) { this.#showGMAOnly__accessor_storage = value; }
    #showGAAOnly__accessor_storage = false;
    get showGAAOnly_() { return this.#showGAAOnly__accessor_storage; }
    set showGAAOnly_(value) { this.#showGAAOnly__accessor_storage = value; }
    #showGMAAndGAA__accessor_storage = false;
    get showGMAAndGAA_() { return this.#showGMAAndGAA__accessor_storage; }
    set showGMAAndGAA_(value) { this.#showGMAAndGAA__accessor_storage = value; }
    #showHistoryClusters__accessor_storage = false;
    get showHistoryClusters_() { return this.#showHistoryClusters__accessor_storage; }
    set showHistoryClusters_(value) { this.#showHistoryClusters__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', e => this.onKeydown_(e));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('footerInfo')) {
            this.updateFooterVisibility();
        }
        if (changedProperties.has('historyClustersEnabled') ||
            changedProperties.has('historyClustersVisible')) {
            this.showHistoryClusters_ =
                this.historyClustersEnabled && this.historyClustersVisible;
        }
    }
    updateFooterVisibility() {
        // At most one of these values can be true.
        this.showGMAOnly_ = false;
        this.showGAAOnly_ = false;
        this.showGMAAndGAA_ = false;
        if (this.footerInfo.otherFormsOfHistory &&
            this.footerInfo.geminiAppsActivity) {
            this.showGMAAndGAA_ = true;
        }
        else if (this.footerInfo.otherFormsOfHistory) {
            this.showGMAOnly_ = true;
        }
        else if (this.footerInfo.geminiAppsActivity) {
            this.showGAAOnly_ = true;
        }
        this.showGoogleAccountFooter_ =
            this.showGMAAndGAA_ || this.showGMAOnly_ || this.showGAAOnly_;
        this.showFooter_ = this.footerInfo.managed || this.showGoogleAccountFooter_;
    }
    onGoogleAccountFooterClick_(e) {
        if (e.target.tagName !== 'A') {
            // Do nothing if a link is not clicked.
            return;
        }
        e.preventDefault();
        // Proxy URL navigation to fix CI failures in
        // `js_code_coverage_browser_tests`. The tests fail because Chrome attempts
        // to open real URLs.
        const browserProxy = BrowserProxyImpl.getInstance();
        switch (e.target.id) {
            case 'footerGoogleMyActivityLink':
                browserProxy.recordAction('SideBarFooterGoogleMyActivityClick');
                browserProxy.navigateToUrl(loadTimeData.getString('sidebarFooterGMALink'), '_blank', e);
                break;
            case 'footerGeminiAppsActivityLink':
                browserProxy.recordAction('SideBarFooterGeminiAppsActivityClick');
                browserProxy.navigateToUrl(loadTimeData.getString('sidebarFooterGAALink'), '_blank', e);
                break;
            default:
                break;
        }
    }
    onKeydown_(e) {
        if (e.key === ' ') {
            e.composedPath()[0].click();
        }
    }
    onMenuIronActivate_() {
        this.fire('history-close-drawer');
    }
    onSelectorSelectedChanged_(e) {
        this.selectedPage = e.detail.value;
    }
    /**
     * Relocates the user to the clear browsing data section of the settings page.
     */
    onClearBrowsingDataClick_(e) {
        const browserProxy = BrowserProxyImpl.getInstance();
        browserProxy.recordAction('InitClearBrowsingData');
        browserProxy.handler.openClearBrowsingDataDialog();
        e.preventDefault();
    }
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately.
     */
    onItemClick_(e) {
        e.preventDefault();
    }
    /**
     * @returns The url to navigate to when the history menu item is clicked. It
     *     reflects the currently selected tab.
     */
    getHistoryItemHref_() {
        return this.showHistoryClusters_ &&
            TABBED_PAGES[this.selectedTab] === Page.HISTORY_CLUSTERS ?
            '/' + Page.HISTORY_CLUSTERS :
            '/';
    }
    /**
     * @returns The path that determines if the history menu item is selected. It
     *     reflects the currently selected tab.
     */
    getHistoryItemPath_() {
        return this.showHistoryClusters_ &&
            TABBED_PAGES[this.selectedTab] === Page.HISTORY_CLUSTERS ?
            Page.HISTORY_CLUSTERS :
            Page.HISTORY;
    }
}
customElements.define(HistorySideBarElement.is, HistorySideBarElement);
