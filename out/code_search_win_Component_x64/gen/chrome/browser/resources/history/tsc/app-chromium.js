// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/history_clusters/clusters.js';
import 'chrome://resources/cr_components/history_embeddings/filter_chips.js';
import 'chrome://resources/cr_components/history_embeddings/history_embeddings.js';
import 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import './history_embeddings_promo.js';
// 
import './history_cross_device_signin_promo.js';
import './history_sync_promo.js';
// 
import './history_list.js';
import './history_toolbar.js';
import './history_filter_chips.js';
import './query_manager.js';
import './router.js';
import './side_bar.js';
import './synced_device_manager.js';
import '/strings.m.js';
import { ColorChangeUpdater, COLORS_CSS_SELECTOR } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { HistoryResultType } from 'chrome://resources/cr_components/history/constants.js';
import { browserProxyFactory as foreignSessionBrowserProxyFactory } from 'chrome://resources/cr_components/history/foreign_sessions.mojom-webui.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { FindShortcutMixinLit } from 'chrome://resources/cr_elements/find_shortcut_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { hasKeyModifiers } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory as userEducationProxyFactory } from 'chrome://resources/mojo/components/user_education/webui/user_education.mojom-webui.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { HistoryPageViewHistogram, HistorySignInState, SyncState } from './constants.js';
import { convertDateToQueryValue } from './query_manager.js';
import { Page, TABBED_PAGES } from './router.js';
// Click/auxclick listeners to intercept any link clicks. If the link points
// to a chrome: or file: url, then calls into the browser to do the
// navigation.
function onDocumentClick(evt) {
    const e = evt;
    // Ignore buttons other than left and middle.
    if (e.button > 1 || e.defaultPrevented) {
        return;
    }
    const eventPath = e.composedPath();
    let anchor = null;
    if (eventPath) {
        for (const element of eventPath) {
            if (element.tagName === 'A' && element.href) {
                anchor = element;
                break;
            }
        }
    }
    // Fallback if Event.path is not available.
    let el = e.target;
    if (!anchor && el.nodeType === Node.ELEMENT_NODE &&
        el.webkitMatchesSelector('A, A *')) {
        while (el.tagName !== 'A') {
            el = el.parentElement;
        }
        anchor = el;
    }
    if (!anchor) {
        return;
    }
    if ((anchor.protocol === 'file:' || anchor.protocol === 'about:') &&
        (e.button === 0 || e.button === 1)) {
        BrowserProxyImpl.getInstance().navigateToUrl(anchor.href, anchor.target, e);
        e.preventDefault();
    }
}
const HistoryAppElementBase = HelpBubbleMixinLit(FindShortcutMixinLit(WebUiListenerMixinLit(CrLitElement)));
export class HistoryAppElement extends HistoryAppElementBase {
    static get is() {
        return 'history-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enableHistoryEmbeddings_: {
                type: Boolean,
                reflect: true,
            },
            // 
            unoPhase2FollowUpEnabled_: { type: Boolean },
            shouldShowHistorySyncPromo_: { type: Boolean },
            shouldShowHistoryCrossDeviceSigninPromo_: { type: Boolean },
            // 
            contentPage_: { type: String },
            tabsContentPage_: { type: String },
            // The id of the currently selected page.
            selectedPage_: { type: String },
            queryResult_: { type: Object },
            sessionList_: { type: Array },
            // Updated on synced-device-manager attach by chrome.sending
            // 'otherDevicesInitialized'.
            identityState_: { type: Object },
            pendingDelete_: { type: Boolean },
            queryState_: { type: Object },
            // True if the window is narrow enough for the page to have a drawer.
            hasDrawer_: { type: Boolean },
            footerInfo: { type: Object },
            historyClustersEnabled_: { type: Boolean },
            historyClustersVisible_: { type: Boolean },
            lastSelectedTab_: { type: Number },
            showHistoryClusters_: {
                type: Boolean,
                reflect: true,
            },
            showTabs_: { type: Boolean },
            // The index of the currently selected tab.
            selectedTab_: { type: Number },
            tabsIcons_: { type: Array },
            tabsNames_: { type: Array },
            scrollTarget_: { type: Object },
            queryStateAfterDate_: { type: Object },
            hasHistoryEmbeddingsResults_: {
                type: Boolean,
                reflect: true,
            },
            tabContentScrollOffset_: { type: Number },
            nonEmbeddingsResultClicked_: { type: Boolean },
            numCharsTypedInSearch_: { type: Number },
            historyEmbeddingsDisclaimerLinkClicked_: { type: Boolean },
            devices_: { type: Array },
            includeActorVisits_: { type: Boolean },
            includeUserVisits_: { type: Boolean },
            clientIds_: { type: Array },
            isGlicWebActuationAvailable_: { type: Boolean },
            isBrowsingHistoryFilterByDeviceEnabled_: { type: Boolean },
            isBrowsingHistoryFilterByTimePeriodEnabled_: { type: Boolean },
            timePeriodOptions_: { type: Array },
        };
    }
    #footerInfo_accessor_storage = {
        managed: loadTimeData.getBoolean('isManaged'),
        otherFormsOfHistory: false,
        geminiAppsActivity: loadTimeData.getBoolean('isGlicEnabled'),
    };
    get footerInfo() { return this.#footerInfo_accessor_storage; }
    set footerInfo(value) { this.#footerInfo_accessor_storage = value; }
    #enableHistoryEmbeddings__accessor_storage = loadTimeData.getBoolean('enableHistoryEmbeddings');
    get enableHistoryEmbeddings_() { return this.#enableHistoryEmbeddings__accessor_storage; }
    set enableHistoryEmbeddings_(value) { this.#enableHistoryEmbeddings__accessor_storage = value; }
    #unoPhase2FollowUpEnabled__accessor_storage = loadTimeData.getBoolean('unoPhase2FollowUp');
    // 
    get unoPhase2FollowUpEnabled_() { return this.#unoPhase2FollowUpEnabled__accessor_storage; }
    set unoPhase2FollowUpEnabled_(value) { this.#unoPhase2FollowUpEnabled__accessor_storage = value; }
    #shouldShowHistorySyncPromo__accessor_storage = false;
    get shouldShowHistorySyncPromo_() { return this.#shouldShowHistorySyncPromo__accessor_storage; }
    set shouldShowHistorySyncPromo_(value) { this.#shouldShowHistorySyncPromo__accessor_storage = value; }
    #shouldShowHistoryCrossDeviceSigninPromo__accessor_storage = false;
    get shouldShowHistoryCrossDeviceSigninPromo_() { return this.#shouldShowHistoryCrossDeviceSigninPromo__accessor_storage; }
    set shouldShowHistoryCrossDeviceSigninPromo_(value) { this.#shouldShowHistoryCrossDeviceSigninPromo__accessor_storage = value; }
    #hasDrawer__accessor_storage = false;
    // 
    get hasDrawer_() { return this.#hasDrawer__accessor_storage; }
    set hasDrawer_(value) { this.#hasDrawer__accessor_storage = value; }
    #historyClustersEnabled__accessor_storage = loadTimeData.getBoolean('isHistoryClustersEnabled');
    get historyClustersEnabled_() { return this.#historyClustersEnabled__accessor_storage; }
    set historyClustersEnabled_(value) { this.#historyClustersEnabled__accessor_storage = value; }
    #historyClustersVisible__accessor_storage = loadTimeData.getBoolean('isHistoryClustersVisible');
    get historyClustersVisible_() { return this.#historyClustersVisible__accessor_storage; }
    set historyClustersVisible_(value) { this.#historyClustersVisible__accessor_storage = value; }
    #identityState__accessor_storage = {
        signIn: HistorySignInState.SIGNED_OUT,
        tabsSync: SyncState.TURNED_OFF,
        historySync: SyncState.TURNED_OFF,
    };
    get identityState_() { return this.#identityState__accessor_storage; }
    set identityState_(value) { this.#identityState__accessor_storage = value; }
    #lastSelectedTab__accessor_storage = loadTimeData.getInteger('lastSelectedTab');
    get lastSelectedTab_() { return this.#lastSelectedTab__accessor_storage; }
    set lastSelectedTab_(value) { this.#lastSelectedTab__accessor_storage = value; }
    #contentPage__accessor_storage = Page.HISTORY;
    get contentPage_() { return this.#contentPage__accessor_storage; }
    set contentPage_(value) { this.#contentPage__accessor_storage = value; }
    #tabsContentPage__accessor_storage = Page.HISTORY;
    get tabsContentPage_() { return this.#tabsContentPage__accessor_storage; }
    set tabsContentPage_(value) { this.#tabsContentPage__accessor_storage = value; }
    #pendingDelete__accessor_storage = false;
    get pendingDelete_() { return this.#pendingDelete__accessor_storage; }
    set pendingDelete_(value) { this.#pendingDelete__accessor_storage = value; }
    #queryResult__accessor_storage = {
        info: null,
        value: [],
    };
    get queryResult_() { return this.#queryResult__accessor_storage; }
    set queryResult_(value) { this.#queryResult__accessor_storage = value; }
    #sessionList__accessor_storage = null;
    get sessionList_() { return this.#sessionList__accessor_storage; }
    set sessionList_(value) { this.#sessionList__accessor_storage = value; }
    #queryState__accessor_storage = {
        incremental: false,
        querying: false,
        searchTerm: '',
        after: null,
        includeUserVisits: true,
        includeActorVisits: true,
        clientIds: [],
    };
    get queryState_() { return this.#queryState__accessor_storage; }
    set queryState_(value) { this.#queryState__accessor_storage = value; }
    #selectedPage__accessor_storage = Page.HISTORY;
    get selectedPage_() { return this.#selectedPage__accessor_storage; }
    set selectedPage_(value) { this.#selectedPage__accessor_storage = value; }
    #selectedTab__accessor_storage = loadTimeData.getInteger('lastSelectedTab') || 0;
    get selectedTab_() { return this.#selectedTab__accessor_storage; }
    set selectedTab_(value) { this.#selectedTab__accessor_storage = value; }
    #showTabs__accessor_storage = false;
    get showTabs_() { return this.#showTabs__accessor_storage; }
    set showTabs_(value) { this.#showTabs__accessor_storage = value; }
    #showHistoryClusters__accessor_storage = false;
    get showHistoryClusters_() { return this.#showHistoryClusters__accessor_storage; }
    set showHistoryClusters_(value) { this.#showHistoryClusters__accessor_storage = value; }
    #tabsIcons__accessor_storage = [
        (document.documentElement.hasAttribute('webui-rounded-icons') ?
            'images/list.svg' :
            'images/list_old.svg'),
        (document.documentElement.hasAttribute('webui-rounded-icons') ?
            'chrome://resources/images/icon_journeys.svg' :
            'chrome://resources/images/icon_journeys_old.svg'),
    ];
    get tabsIcons_() { return this.#tabsIcons__accessor_storage; }
    set tabsIcons_(value) { this.#tabsIcons__accessor_storage = value; }
    #tabsNames__accessor_storage = [
        loadTimeData.getString('historyListTabLabel'),
        loadTimeData.getString('historyClustersTabLabel'),
    ];
    get tabsNames_() { return this.#tabsNames__accessor_storage; }
    set tabsNames_(value) { this.#tabsNames__accessor_storage = value; }
    #scrollTarget__accessor_storage = document.body;
    get scrollTarget_() { return this.#scrollTarget__accessor_storage; }
    set scrollTarget_(value) { this.#scrollTarget__accessor_storage = value; }
    #queryStateAfterDate__accessor_storage;
    get queryStateAfterDate_() { return this.#queryStateAfterDate__accessor_storage; }
    set queryStateAfterDate_(value) { this.#queryStateAfterDate__accessor_storage = value; }
    #hasHistoryEmbeddingsResults__accessor_storage = false;
    get hasHistoryEmbeddingsResults_() { return this.#hasHistoryEmbeddingsResults__accessor_storage; }
    set hasHistoryEmbeddingsResults_(value) { this.#hasHistoryEmbeddingsResults__accessor_storage = value; }
    #historyEmbeddingsDisclaimerLinkClicked__accessor_storage = false;
    get historyEmbeddingsDisclaimerLinkClicked_() { return this.#historyEmbeddingsDisclaimerLinkClicked__accessor_storage; }
    set historyEmbeddingsDisclaimerLinkClicked_(value) { this.#historyEmbeddingsDisclaimerLinkClicked__accessor_storage = value; }
    #tabContentScrollOffset__accessor_storage = 0;
    get tabContentScrollOffset_() { return this.#tabContentScrollOffset__accessor_storage; }
    set tabContentScrollOffset_(value) { this.#tabContentScrollOffset__accessor_storage = value; }
    #numCharsTypedInSearch__accessor_storage = 0;
    get numCharsTypedInSearch_() { return this.#numCharsTypedInSearch__accessor_storage; }
    set numCharsTypedInSearch_(value) { this.#numCharsTypedInSearch__accessor_storage = value; }
    #nonEmbeddingsResultClicked__accessor_storage = false;
    get nonEmbeddingsResultClicked_() { return this.#nonEmbeddingsResultClicked__accessor_storage; }
    set nonEmbeddingsResultClicked_(value) { this.#nonEmbeddingsResultClicked__accessor_storage = value; }
    #devices__accessor_storage = [];
    get devices_() { return this.#devices__accessor_storage; }
    set devices_(value) { this.#devices__accessor_storage = value; }
    #includeActorVisits__accessor_storage = true;
    get includeActorVisits_() { return this.#includeActorVisits__accessor_storage; }
    set includeActorVisits_(value) { this.#includeActorVisits__accessor_storage = value; }
    #includeUserVisits__accessor_storage = true;
    get includeUserVisits_() { return this.#includeUserVisits__accessor_storage; }
    set includeUserVisits_(value) { this.#includeUserVisits__accessor_storage = value; }
    #clientIds__accessor_storage = [];
    get clientIds_() { return this.#clientIds__accessor_storage; }
    set clientIds_(value) { this.#clientIds__accessor_storage = value; }
    #isGlicWebActuationAvailable__accessor_storage = loadTimeData.getBoolean('isGlicWebActuationAvailable');
    get isGlicWebActuationAvailable_() { return this.#isGlicWebActuationAvailable__accessor_storage; }
    set isGlicWebActuationAvailable_(value) { this.#isGlicWebActuationAvailable__accessor_storage = value; }
    #isBrowsingHistoryFilterByDeviceEnabled__accessor_storage = loadTimeData.getBoolean('isBrowsingHistoryFilterByDeviceEnabled');
    get isBrowsingHistoryFilterByDeviceEnabled_() { return this.#isBrowsingHistoryFilterByDeviceEnabled__accessor_storage; }
    set isBrowsingHistoryFilterByDeviceEnabled_(value) { this.#isBrowsingHistoryFilterByDeviceEnabled__accessor_storage = value; }
    #isBrowsingHistoryFilterByTimePeriodEnabled__accessor_storage = loadTimeData.getBoolean('isBrowsingHistoryFilterByTimePeriodEnabled');
    get isBrowsingHistoryFilterByTimePeriodEnabled_() { return this.#isBrowsingHistoryFilterByTimePeriodEnabled__accessor_storage; }
    set isBrowsingHistoryFilterByTimePeriodEnabled_(value) { this.#isBrowsingHistoryFilterByTimePeriodEnabled__accessor_storage = value; }
    #timePeriodOptions__accessor_storage = [];
    get timePeriodOptions_() { return this.#timePeriodOptions__accessor_storage; }
    set timePeriodOptions_(value) { this.#timePeriodOptions__accessor_storage = value; }
    callbackRouter_;
    foreignSessionCallbackRouter_;
    dataFromNativeBeforeInput_ = null;
    eventTracker_ = new EventTracker();
    historyClustersViewStartTime_ = null;
    historyEmbeddingsResizeObserver_ = null;
    lastRecordedSelectedPageHistogramValue_ = HistoryPageViewHistogram.END;
    onForeignSessionsChangedListenerId_ = null;
    onHasOtherFormsChangedListenerId_ = null;
    constructor() {
        super();
        this.callbackRouter_ = BrowserProxyImpl.getInstance().callbackRouter;
        this.foreignSessionCallbackRouter_ =
            foreignSessionBrowserProxyFactory.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        // 
        // 
        const enableWebuiRefresh2026 = loadTimeData.getString('webuiRefresh2026') !== '';
        if (enableWebuiRefresh2026) {
            this.addThemedColors_();
            ColorChangeUpdater.forDocument().start();
        }
        // 
        this.eventTracker_.add(document, 'click', onDocumentClick);
        this.eventTracker_.add(document, 'auxclick', onDocumentClick);
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
        this.eventTracker_.add(document, 'visibilitychange', this.onVisibilityChange_.bind(this));
        this.eventTracker_.add(document, 'record-history-link-click', this.onRecordHistoryLinkClick_.bind(this));
        this.addWebUiListener('history-identity-state-changed', (identityState) => this.onIdentityStateChanged_(identityState));
        this.onForeignSessionsChangedListenerId_ =
            this.foreignSessionCallbackRouter_.onForeignSessionsChanged.addListener((sessionList) => this.setForeignSessions_(sessionList));
        this.shadowRoot.querySelector('history-query-manager').initialize();
        foreignSessionBrowserProxyFactory.getInstance()
            .handler.getForeignSessions()
            .then(({ sessions }) => this.setForeignSessions_(sessions));
        BrowserProxyImpl.getInstance().getInitialIdentityState().then((identityState) => this.onIdentityStateChanged_(identityState));
        BrowserProxyImpl.getInstance().getSyncedDevicesForFiltering().then(({ devices }) => {
            this.devices_ = devices;
        });
        BrowserProxyImpl.getInstance().getTimePeriodOptions().then(({ options }) => {
            this.timePeriodOptions_ = options;
        });
        const mediaQuery = window.matchMedia('(max-width: 1023px)');
        this.hasDrawer_ = mediaQuery.matches;
        this.eventTracker_.add(mediaQuery, 'change', (e) => this.hasDrawer_ = e.matches);
        this.onHasOtherFormsChangedListenerId_ =
            this.callbackRouter_.onHasOtherFormsChanged.addListener((hasOtherForms) => this.onHasOtherFormsChanged_(hasOtherForms));
        // 
        BrowserProxyImpl.getInstance()
            .handler.shouldShowHistoryPageHistorySyncPromo()
            .then(({ shouldShow }) => this.handleShouldShowHistoryPageHistorySyncPromoChanged_(shouldShow));
        // 
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
        if (this.historyEmbeddingsResizeObserver_) {
            this.historyEmbeddingsResizeObserver_.disconnect();
            this.historyEmbeddingsResizeObserver_ = null;
        }
        if (this.onHasOtherFormsChangedListenerId_ !== null) {
            this.callbackRouter_.removeListener(this.onHasOtherFormsChangedListenerId_);
            this.onHasOtherFormsChangedListenerId_ = null;
        }
        if (this.onForeignSessionsChangedListenerId_ !== null) {
            this.foreignSessionCallbackRouter_.removeListener(this.onForeignSessionsChangedListenerId_);
            this.onForeignSessionsChangedListenerId_ = null;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('historyClustersEnabled_') ||
            changedPrivateProperties.has('historyClustersVisible_')) {
            this.showHistoryClusters_ =
                this.historyClustersEnabled_ && this.historyClustersVisible_;
        }
        if (changedPrivateProperties.has('showHistoryClusters_') ||
            changedPrivateProperties.has('enableHistoryEmbeddings_')) {
            this.showTabs_ =
                this.showHistoryClusters_ && !this.enableHistoryEmbeddings_;
        }
        if (changedPrivateProperties.has('selectedTab_')) {
            this.lastSelectedTab_ = this.selectedTab_;
            // Change in the currently selected tab requires change in the currently
            // selected page.
            if (!this.selectedPage_ || TABBED_PAGES.includes(this.selectedPage_)) {
                this.selectedPage_ = TABBED_PAGES[this.selectedTab_];
            }
        }
        if (changedPrivateProperties.has('queryState_')) {
            if (this.queryState_.after) {
                const afterDate = new Date(this.queryState_.after + 'T00:00:00');
                // This compute function listens for any subproperty changes on the
                // queryState_ so the `after` param may not have changed.
                if (this.queryStateAfterDate_?.getTime() !== afterDate.getTime()) {
                    this.queryStateAfterDate_ = afterDate;
                }
            }
            else {
                this.queryStateAfterDate_ = undefined;
            }
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener('cr-toolbar-menu-click', this.onCrToolbarMenuClick_);
        this.addEventListener('delete-selected', this.deleteSelected);
        this.addEventListener('open-selected', this.openSelected);
        this.addEventListener('history-checkbox-select', this.checkboxSelected);
        this.addEventListener('history-close-drawer', this.closeDrawer_);
        this.addEventListener('history-view-changed', this.historyViewChanged_);
        this.addEventListener('unselect-all', this.unselectAll);
        if (loadTimeData.getBoolean('maybeShowEmbeddingsIph')) {
            this.registerHelpBubble('kHistorySearchInputElementId', this.$.toolbar.searchField);
            // TODO(crbug.com/40075330): There might be a race condition if the call
            //    to show the help bubble comes immediately after registering the
            //    anchor.
            setTimeout(() => {
                userEducationProxyFactory.getInstance().handler.maybeShowFeaturePromo({ featureName: 'IPH_HistorySearch', key: null });
            }, 1000);
        }
    }
    getScrollTargetForTesting() {
        return this.scrollTarget_;
    }
    getShowResultsByGroup_() {
        return this.selectedPage_ === Page.HISTORY_CLUSTERS;
    }
    getShowHistoryList_() {
        return this.selectedPage_ === Page.HISTORY;
    }
    onShowResultsByGroupChanged_(e) {
        if (!this.selectedPage_) {
            return;
        }
        const showResultsByGroup = e.detail.value;
        if (showResultsByGroup) {
            this.selectedTab_ = TABBED_PAGES.indexOf(Page.HISTORY_CLUSTERS);
        }
        else {
            this.selectedTab_ = TABBED_PAGES.indexOf(Page.HISTORY);
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('selectedTab_')) {
            BrowserProxyImpl.getInstance().handler.setLastSelectedTab(this.selectedTab_);
        }
        if (changedPrivateProperties.has('selectedPage_')) {
            this.selectedPageChanged_(changedPrivateProperties.get('selectedPage_'));
        }
        if (changedPrivateProperties.has('hasDrawer_')) {
            this.hasDrawerChanged_();
        }
        if (changedPrivateProperties.has('enableHistoryEmbeddings_') &&
            this.enableHistoryEmbeddings_) {
            this.onHistoryEmbeddingsContainerShown_();
        }
    }
    historyClustersSelected_() {
        return this.selectedPage_ === Page.HISTORY_CLUSTERS &&
            this.showHistoryClusters_;
    }
    onFirstRender_() {
        // Focus the search field on load. Done here to ensure the history page
        // is rendered before we try to take focus.
        const searchField = this.$.toolbar.searchField;
        if (!searchField.narrow) {
            searchField.getSearchInput().focus();
        }
        if (loadTimeData.getBoolean('isCriticalActionsEnabled') &&
            this.showFilterChips_()) {
            const filterChipsEl = this.shadowRoot.querySelector('#historyFilterChips');
            if (filterChipsEl) {
                filterChipsEl.updateComplete.then(() => {
                    const chipEl = filterChipsEl.shadowRoot.querySelector('#actorVisitsChip');
                    if (chipEl) {
                        this.registerHelpBubble('HistoryUI::kHistoryGeminiFilterChipElementId', chipEl);
                        setTimeout(() => {
                            userEducationProxyFactory.getInstance()
                                .handler.maybeShowFeaturePromo({ featureName: 'IPH_CriticalActionFilterChip', key: null });
                        }, 1000);
                    }
                });
            }
        }
        requestIdleCallback(function () {
            document.fonts.load('bold 12px Roboto');
        });
    }
    onCrToolbarMenuClick_() {
        this.$.drawer.get().toggle();
    }
    /**
     * Listens for history-item being selected or deselected (through checkbox)
     * and changes the view of the top toolbar.
     */
    checkboxSelected() {
        this.$.toolbar.count = this.$.history.getSelectedItemCount();
    }
    selectOrUnselectAll() {
        this.$.history.selectOrUnselectAll();
        this.$.toolbar.count = this.$.history.getSelectedItemCount();
    }
    /**
     * Listens for call to cancel selection and loops through all items to set
     * checkbox to be unselected.
     */
    unselectAll() {
        this.$.history.unselectAllItems();
        this.$.toolbar.count = 0;
    }
    deleteSelected() {
        this.$.history.deleteSelectedWithPrompt();
    }
    openSelected() {
        this.$.history.openSelected();
    }
    onQueryFinished_(e) {
        this.queryResult_ = e.detail.result;
        this.$.history.historyResult(e.detail.result.info, e.detail.result.value);
        if (document.body.classList.contains('loading')) {
            document.body.classList.remove('loading');
            this.onFirstRender_();
            if (document.visibilityState === 'visible') {
                requestAnimationFrame(() => {
                    BrowserProxyImpl.getInstance().recordTime('HistoryPage.TimeToFirstVisibleContent', Math.round(performance.now()));
                });
            }
        }
    }
    onKeyDown_(e) {
        if ((e.key === 'Delete' || e.key === 'Backspace') && !hasKeyModifiers(e)) {
            this.onDeleteCommand_();
            return;
        }
        if (e.key === 'a' && !e.altKey && !e.shiftKey) {
            let hasTriggerModifier = e.ctrlKey && !e.metaKey;
            // 
            if (hasTriggerModifier && this.onSelectAllCommand_()) {
                e.preventDefault();
            }
        }
        if (e.key === 'Escape') {
            this.unselectAll();
            getAnnouncerInstance().announce(loadTimeData.getString('itemsUnselected'));
            e.preventDefault();
        }
    }
    onVisibilityChange_() {
        if (this.selectedPage_ !== Page.HISTORY_CLUSTERS) {
            return;
        }
        if (document.visibilityState === 'hidden') {
            this.recordHistoryClustersDuration_();
        }
        else if (document.visibilityState === 'visible' &&
            this.historyClustersViewStartTime_ === null) {
            // Restart the timer if the user switches back to the History tab.
            this.historyClustersViewStartTime_ = new Date();
        }
    }
    onRecordHistoryLinkClick_(e) {
        // All of the above code only applies to History search results, not the
        // zero-query state. Check queryResult_ instead of queryState_ to key on
        // actually displayed results rather than the latest user input, which may
        // not have finished loading yet.
        if (!this.queryResult_.info || !this.queryResult_.info.term) {
            return;
        }
        if (e.detail.resultType !== HistoryResultType.EMBEDDINGS) {
            this.nonEmbeddingsResultClicked_ = true;
        }
        const browserProxy = BrowserProxyImpl.getInstance();
        browserProxy.recordHistogram('History.SearchResultClicked.Type', e.detail.resultType, HistoryResultType.END);
        // MetricsHandler uses a 100 bucket limit, so the max index is 99.
        const boundary = 100;
        const clampedIndex = Math.min(e.detail.index, 99);
        browserProxy.recordHistogram('History.SearchResultClicked.Index', clampedIndex, boundary);
        switch (e.detail.resultType) {
            case HistoryResultType.TRADITIONAL:
                browserProxy.recordHistogram('History.SearchResultClicked.Index.Traditional', clampedIndex, boundary);
                break;
            case HistoryResultType.GROUPED:
                browserProxy.recordHistogram('History.SearchResultClicked.Index.Grouped', clampedIndex, boundary);
                break;
            case HistoryResultType.EMBEDDINGS:
                browserProxy.recordHistogram('History.SearchResultClicked.Index.Embeddings', clampedIndex, boundary);
                break;
            case HistoryResultType.END:
                break;
            default:
                assertNotReachedCase(e.detail.resultType);
        }
    }
    onDeleteCommand_() {
        if (this.$.toolbar.count === 0 || this.pendingDelete_) {
            return;
        }
        this.deleteSelected();
    }
    /**
     * @return Whether the command was actually triggered.
     */
    onSelectAllCommand_() {
        if (this.$.toolbar.searchField.isSearchFocused() ||
            this.syncedTabsSelected_() || this.historyClustersSelected_()) {
            return false;
        }
        this.selectOrUnselectAll();
        return true;
    }
    /**
     * @param sessionList Array of objects describing the sessions from other
     *     devices.
     */
    setForeignSessions_(sessionList) {
        this.sessionList_ = sessionList;
    }
    /**
     * Updates the sign-in state.
     */
    onIdentityStateChanged_(identityState) {
        this.identityState_ = identityState;
    }
    onHasOtherFormsChanged_(hasOtherForms) {
        this.footerInfo = Object.assign({}, this.footerInfo, { otherFormsOfHistory: hasOtherForms });
    }
    syncedTabsSelected_() {
        return this.selectedPage_ === Page.SYNCED_TABS;
    }
    /**
     * @return Whether a loading spinner should be shown (implies the
     *     backend is querying a new search term).
     */
    shouldShowSpinner_() {
        return this.queryState_.querying && !this.queryState_.incremental &&
            this.queryState_.searchTerm !== '';
    }
    updateContentPage_() {
        switch (this.selectedPage_) {
            case Page.SYNCED_TABS:
                this.contentPage_ = Page.SYNCED_TABS;
                break;
            default:
                this.contentPage_ = Page.HISTORY;
        }
    }
    updateTabsContentPage_() {
        this.tabsContentPage_ =
            (this.selectedPage_ === Page.HISTORY_CLUSTERS &&
                this.historyClustersEnabled_ && this.historyClustersVisible_) ?
                Page.HISTORY_CLUSTERS :
                Page.HISTORY;
    }
    selectedPageChanged_(oldPage) {
        this.updateContentPage_();
        this.updateTabsContentPage_();
        this.unselectAll();
        this.historyViewChanged_();
        this.maybeUpdateSelectedHistoryTab_();
        if (oldPage === Page.HISTORY_CLUSTERS &&
            this.selectedPage_ !== Page.HISTORY_CLUSTERS) {
            this.recordHistoryClustersDuration_();
        }
        if (this.selectedPage_ === Page.HISTORY_CLUSTERS) {
            this.historyClustersViewStartTime_ = new Date();
        }
    }
    onContentIronSelect_() {
        this.updateScrollTarget_();
    }
    onTabsContentIronSelect_() {
        this.updateScrollTarget_();
    }
    updateScrollTarget_() {
        const topLevelIronPages = this.$.content;
        const topLevelHistoryPage = this.$.tabsContainer;
        if (topLevelIronPages.selectedItem &&
            topLevelIronPages.selectedItem === topLevelHistoryPage) {
            this.scrollTarget_ = this.$.tabsScrollContainer;
            // Scroll target won't change as the scroll target for both Date and Group
            // view is this.$.tabsScrollContainer, which means history-list's
            // callbacks to fill the viewport do not get triggered automatically.
            this.$.history.fillCurrentViewport();
        }
        else {
            this.scrollTarget_ = topLevelIronPages.selectedItem;
        }
    }
    maybeUpdateSelectedHistoryTab_() {
        // Change in the currently selected page may require change in the currently
        // selected tab.
        if (TABBED_PAGES.includes(this.selectedPage_)) {
            this.selectedTab_ = TABBED_PAGES.indexOf(this.selectedPage_);
        }
    }
    historyViewChanged_() {
        this.recordHistoryPageView_();
    }
    // Records the history clusters page duration.
    recordHistoryClustersDuration_() {
        assert(this.historyClustersViewStartTime_ !== null);
        const duration = new Date().getTime() - this.historyClustersViewStartTime_.getTime();
        BrowserProxyImpl.getInstance().recordLongTime('History.Clusters.WebUISessionDuration', duration);
        this.historyClustersViewStartTime_ = null;
    }
    hasDrawerChanged_() {
        const drawer = this.$.drawer.getIfExists();
        if (!this.hasDrawer_ && drawer && drawer.open) {
            drawer.cancel();
        }
    }
    closeDrawer_() {
        const drawer = this.$.drawer.get();
        if (drawer && drawer.open) {
            drawer.close();
        }
    }
    recordHistoryPageView_() {
        let histogramValue = HistoryPageViewHistogram.END;
        switch (this.selectedPage_) {
            case Page.HISTORY_CLUSTERS:
                histogramValue = HistoryPageViewHistogram.JOURNEYS;
                break;
            case Page.SYNCED_TABS:
                histogramValue =
                    this.identityState_.signIn === HistorySignInState.SIGNED_IN &&
                        this.identityState_.tabsSync === SyncState.TURNED_ON ?
                        HistoryPageViewHistogram.SYNCED_TABS :
                        HistoryPageViewHistogram.SIGNIN_PROMO;
                break;
            default:
                histogramValue = HistoryPageViewHistogram.HISTORY;
                break;
        }
        // Avoid double-recording the same page consecutively.
        if (histogramValue === this.lastRecordedSelectedPageHistogramValue_) {
            return;
        }
        this.lastRecordedSelectedPageHistogramValue_ = histogramValue;
        BrowserProxyImpl.getInstance().recordHistogram('History.HistoryPageView', histogramValue, HistoryPageViewHistogram.END);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.$.toolbar.searchField.showAndFocus();
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.$.toolbar.searchField.isSearchFocused();
    }
    setHasDrawerForTesting(enabled) {
        this.hasDrawer_ = enabled;
    }
    // 
    // History sync promo is shown based on the following conditions:
    // 1. UNO phase 2 follow up feature flag is enabled.
    // 2. Should be shown based on user prefs (the promo was closed < 5 times)
    // 3. History sync is not disabled.
    // 4. User is not already signed in and syncing history.
    shouldShowHistoryPageHistorySyncPromo_() {
        return this.unoPhase2FollowUpEnabled_ && this.shouldShowHistorySyncPromo_ &&
            this.identityState_.historySync !== SyncState.DISABLED &&
            !(this.identityState_.signIn === HistorySignInState.SIGNED_IN &&
                this.identityState_.historySync === SyncState.TURNED_ON);
    }
    handleShouldShowHistoryPageHistorySyncPromoChanged_(shouldShowHistorySyncPromo) {
        this.shouldShowHistorySyncPromo_ = shouldShowHistorySyncPromo;
    }
    onShouldShowHistoryCrossDeviceSigninPromo_(e) {
        this.shouldShowHistoryCrossDeviceSigninPromo_ = e.detail.shouldShow;
    }
    // 
    shouldShowHistoryEmbeddings_() {
        if (!loadTimeData.getBoolean('enableHistoryEmbeddings')) {
            return false;
        }
        if (!this.queryState_.searchTerm) {
            return false;
        }
        return this.queryState_.searchTerm.split(' ')
            .filter(part => part.length > 0)
            .length >=
            loadTimeData.getInteger('historyEmbeddingsSearchMinimumWordCount');
    }
    onSelectedSuggestionChanged_(e) {
        let afterString = undefined;
        if (e.detail.value?.timeRangeStart) {
            afterString = convertDateToQueryValue(e.detail.value.timeRangeStart);
        }
        this.fire('change-query', {
            search: this.queryState_.searchTerm,
            after: afterString,
        });
    }
    onHistoryEmbeddingsDisclaimerLinkAuxclick_() {
        this.onHistoryEmbeddingsDisclaimerLinkClick_();
    }
    onHistoryEmbeddingsDisclaimerLinkClick_() {
        this.historyEmbeddingsDisclaimerLinkClicked_ = true;
    }
    onHistoryEmbeddingsItemMoreFromSiteClick_(e) {
        const historyEmbeddingsItem = e.detail;
        this.fire('change-query', { search: 'host:' + new URL(historyEmbeddingsItem.url).hostname });
    }
    onHistoryEmbeddingsItemRemoveItemClick_(e) {
        const historyEmbeddingsItem = e.detail;
        BrowserProxyImpl.getInstance().handler.removeVisits([{
                url: historyEmbeddingsItem.url,
                timestamps: [historyEmbeddingsItem.lastUrlVisitTimestamp],
            }]);
    }
    onHistoryEmbeddingsIsEmptyChanged_(e) {
        this.hasHistoryEmbeddingsResults_ = !e.detail.value;
    }
    onHistoryEmbeddingsContainerShown_() {
        assert(this.enableHistoryEmbeddings_);
        const historyEmbeddingsContainer = this.shadowRoot.querySelector('#historyEmbeddingsContainer');
        assert(historyEmbeddingsContainer);
        this.historyEmbeddingsResizeObserver_ = new ResizeObserver((entries) => {
            assert(entries.length === 1);
            this.tabContentScrollOffset_ = entries[0].contentRect.height;
        });
        this.historyEmbeddingsResizeObserver_.observe(historyEmbeddingsContainer);
    }
    onQueryStateChanged_(e) {
        this.nonEmbeddingsResultClicked_ = false;
        this.queryState_ = e.detail.value;
    }
    onSelectedPageChanged_(e) {
        this.selectedPage_ = e.detail.value;
    }
    onToolbarSearchTermNativeBeforeInput_(e) {
        // TODO(crbug.com/40673976): This needs to be cached on the `beforeinput`
        //   event since there is a bug where this data is not available in the
        //   native `input` event below.
        this.dataFromNativeBeforeInput_ = e.detail.e.data;
    }
    onToolbarSearchTermNativeInput_(e) {
        const insertedText = this.dataFromNativeBeforeInput_;
        this.dataFromNativeBeforeInput_ = null;
        if (e.detail.inputValue.length === 0) {
            // Input was entirely cleared (eg. backspace/delete was hit).
            this.numCharsTypedInSearch_ = 0;
        }
        else if (insertedText === e.detail.inputValue) {
            // If the inserted text matches exactly with the current value of the
            // input, that implies that the previous input value was cleared or
            // was empty to begin with. So, reset the num chars typed and count this
            // input event as 1 char typed.
            this.numCharsTypedInSearch_ = 1;
        }
        else {
            this.numCharsTypedInSearch_++;
        }
    }
    onToolbarSearchTermCleared_() {
        this.numCharsTypedInSearch_ = 0;
    }
    onListPendingDeleteChanged_(e) {
        this.pendingDelete_ = e.detail.value;
    }
    onTabsSelectedChanged_(e) {
        this.onSelectedTabChanged_(e);
    }
    onSelectedTabChanged_(e) {
        this.selectedTab_ = e.detail.value;
    }
    onHistoryClustersVisibleChanged_(e) {
        this.historyClustersVisible_ = e.detail.value;
    }
    onFilterChanged_(e) {
        this.includeUserVisits_ = e.detail.userVisits;
        this.includeActorVisits_ = e.detail.actorVisits;
        this.clientIds_ = e.detail.clientIds;
        this.fire('change-query', {
            search: this.queryState_.searchTerm,
            includeActorVisits: this.includeActorVisits_,
            includeUserVisits: this.includeUserVisits_,
            clientIds: this.clientIds_,
        });
    }
    showActorFilter_() {
        return this.isGlicWebActuationAvailable_;
    }
    showDeviceFilter_() {
        return this.isBrowsingHistoryFilterByDeviceEnabled_ &&
            this.devices_.length > 1;
    }
    showTimePeriodFilter_() {
        return this.isBrowsingHistoryFilterByTimePeriodEnabled_ &&
            this.timePeriodOptions_.length > 0;
    }
    showFilterChips_() {
        return (this.showActorFilter_() || this.showDeviceFilter_() ||
            this.showTimePeriodFilter_()) &&
            !this.getShowResultsByGroup_();
    }
    // TODO(crub.com/509908129): Add static stylesheet in history.html
    addThemedColors_() {
        assert(document.body.querySelector(COLORS_CSS_SELECTOR) === null);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'chrome://theme/colors.css?sets=ui,chrome';
        document.body.appendChild(link);
    }
}
customElements.define(HistoryAppElement.is, HistoryAppElement);
