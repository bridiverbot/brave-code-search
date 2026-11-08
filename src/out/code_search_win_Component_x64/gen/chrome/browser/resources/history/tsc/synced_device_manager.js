// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import './synced_device_card.js';
import '/strings.m.js';
import { browserProxyFactory } from 'chrome://resources/cr_components/history/foreign_sessions.mojom-webui.js';
import { AccessPoint } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { FocusGrid } from 'chrome://resources/js/focus_grid.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { HistorySignInState, SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram, SyncState } from './constants.js';
import { getCss } from './synced_device_manager.css.js';
import { getHtml } from './synced_device_manager.html.js';
const HistorySyncedDeviceManagerElementBase = WebUiListenerMixinLit(CrLitElement);
export class HistorySyncedDeviceManagerElement extends HistorySyncedDeviceManagerElementBase {
    static get is() {
        return 'history-synced-device-manager';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            sessionList: { type: Array },
            searchTerm: { type: String },
            /**
             * An array of synced devices with synced tab data.
             */
            syncedDevices_: { type: Array },
            historyIdentityState_: { type: Object },
            guestSession_: { type: Boolean },
            signInAllowed_: { type: Boolean },
            fetchingSyncedTabs_: { type: Boolean },
            hasSeenForeignData_: { type: Boolean },
            /**
             * The session ID referring to the currently active action menu.
             */
            actionMenuModel_: { type: String },
            replaceSyncPromosWithSignInPromos_: { type: Boolean },
            // 
            accountInfo_: { type: Object },
            // 
        };
    }
    focusGrid_ = null;
    focusGridUpdateTimeout_ = null;
    #syncedDevices__accessor_storage = [];
    get syncedDevices_() { return this.#syncedDevices__accessor_storage; }
    set syncedDevices_(value) { this.#syncedDevices__accessor_storage = value; }
    #hasSeenForeignData__accessor_storage = false;
    get hasSeenForeignData_() { return this.#hasSeenForeignData__accessor_storage; }
    set hasSeenForeignData_(value) { this.#hasSeenForeignData__accessor_storage = value; }
    #fetchingSyncedTabs__accessor_storage = false;
    get fetchingSyncedTabs_() { return this.#fetchingSyncedTabs__accessor_storage; }
    set fetchingSyncedTabs_(value) { this.#fetchingSyncedTabs__accessor_storage = value; }
    #actionMenuModel__accessor_storage = null;
    get actionMenuModel_() { return this.#actionMenuModel__accessor_storage; }
    set actionMenuModel_(value) { this.#actionMenuModel__accessor_storage = value; }
    #guestSession__accessor_storage = loadTimeData.getBoolean('isGuestSession');
    get guestSession_() { return this.#guestSession__accessor_storage; }
    set guestSession_(value) { this.#guestSession__accessor_storage = value; }
    #signInAllowed__accessor_storage = loadTimeData.getBoolean('isSignInAllowed');
    get signInAllowed_() { return this.#signInAllowed__accessor_storage; }
    set signInAllowed_(value) { this.#signInAllowed__accessor_storage = value; }
    #replaceSyncPromosWithSignInPromos__accessor_storage = loadTimeData.getBoolean('replaceSyncPromosWithSignInPromos');
    get replaceSyncPromosWithSignInPromos_() { return this.#replaceSyncPromosWithSignInPromos__accessor_storage; }
    set replaceSyncPromosWithSignInPromos_(value) { this.#replaceSyncPromosWithSignInPromos__accessor_storage = value; }
    signinPausedImpressionRecorded_ = false;
    #accountInfo__accessor_storage = null;
    // 
    get accountInfo_() { return this.#accountInfo__accessor_storage; }
    set accountInfo_(value) { this.#accountInfo__accessor_storage = value; }
    onAccountInfoDataReceivedListenerId_ = null;
    #historyIdentityState__accessor_storage = {
        signIn: HistorySignInState.SIGNED_OUT,
        tabsSync: SyncState.TURNED_OFF,
        historySync: SyncState.TURNED_OFF,
    };
    // 
    get historyIdentityState_() { return this.#historyIdentityState__accessor_storage; }
    set historyIdentityState_(value) { this.#historyIdentityState__accessor_storage = value; }
    #searchTerm_accessor_storage = '';
    get searchTerm() { return this.#searchTerm_accessor_storage; }
    set searchTerm(value) { this.#searchTerm_accessor_storage = value; }
    #sessionList_accessor_storage = null;
    get sessionList() { return this.#sessionList_accessor_storage; }
    set sessionList(value) { this.#sessionList_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.focusGrid_ = new FocusGrid();
        // Update the sign in state.
        BrowserProxyImpl.getInstance().otherDevicesInitialized();
        BrowserProxyImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.INITIALIZED, SyncedTabsHistogram.LIMIT);
        BrowserProxyImpl.getInstance().getInitialIdentityState().then((identityState) => {
            this.historyIdentityState_ = identityState;
        });
        this.addWebUiListener('history-identity-state-changed', (identityState) => this.historyIdentityState_ =
            identityState);
        // 
        this.onAccountInfoDataReceivedListenerId_ =
            BrowserProxyImpl.getInstance()
                .callbackRouter.sendAccountInfo.addListener(this.handleAccountInfoChanged_.bind(this));
        BrowserProxyImpl.getInstance().handler.requestAccountInfo().then(({ accountInfo }) => this.handleAccountInfoChanged_(accountInfo));
        // 
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.focusGrid_.destroy();
        // 
        if (this.onAccountInfoDataReceivedListenerId_ !== null) {
            BrowserProxyImpl.getInstance().callbackRouter.removeListener(this.onAccountInfoDataReceivedListenerId_);
            this.onAccountInfoDataReceivedListenerId_ = null;
        }
        // 
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('sessionList')) {
            this.updateSyncedDevices_();
        }
        if (changedProperties.has('searchTerm')) {
            this.searchTermChanged_();
        }
        if (changedPrivateProperties.has('historyIdentityState_')) {
            this.onIdentityStateChanged_((changedPrivateProperties.get('historyIdentityState_') || null));
        }
    }
    firstUpdated() {
        this.addEventListener('synced-device-card-open-menu', this.onOpenMenu_);
        this.addEventListener('update-focus-grid', this.updateFocusGrid_);
    }
    configureSignInForTest(data) {
        this.signInAllowed_ = data.signInAllowed;
        this.guestSession_ = data.guestSession;
    }
    createInternalDevice_(session) {
        let tabs = [];
        const separatorIndexes = [];
        for (let i = 0; i < session.windows.length; i++) {
            const windowId = session.windows[i].sessionId;
            const newTabs = session.windows[i].tabs;
            if (newTabs.length === 0) {
                continue;
            }
            newTabs.forEach(function (tab) {
                tab.windowId = windowId;
            });
            let windowAdded = false;
            if (!this.searchTerm) {
                // Add all the tabs if there is no search term.
                tabs = tabs.concat(newTabs);
                windowAdded = true;
            }
            else {
                const searchText = this.searchTerm.toLowerCase();
                for (let j = 0; j < newTabs.length; j++) {
                    const tab = newTabs[j];
                    if (tab.title.toLowerCase().indexOf(searchText) !== -1) {
                        tabs.push(tab);
                        windowAdded = true;
                    }
                }
            }
            if (windowAdded && i !== session.windows.length - 1) {
                separatorIndexes.push(tabs.length - 1);
            }
        }
        return {
            device: session.name,
            lastUpdateTime: '– ' + session.modifiedTime,
            opened: true,
            separatorIndexes: separatorIndexes,
            timestamp: session.timestamp,
            tabs: tabs,
            tag: session.tag,
        };
    }
    onTurnOnSyncClick_() {
        BrowserProxyImpl.getInstance().startTurnOnSyncFlow();
    }
    // 
    onTurnOnHistorySyncClick_() {
        BrowserProxyImpl.getInstance().handler.turnOnHistorySync(AccessPoint.kRecentTabs);
    }
    handleAccountInfoChanged_(accountInfo) {
        this.accountInfo_ = accountInfo;
    }
    // 
    onOpenMenu_(e) {
        this.actionMenuModel_ = e.detail.tag;
        this.$.menu.get().showAt(e.detail.target);
        BrowserProxyImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.SHOW_SESSION_MENU, SyncedTabsHistogram.LIMIT);
    }
    onOpenAllClick_() {
        const menu = this.$.menu.getIfExists();
        assert(menu);
        BrowserProxyImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.OPEN_ALL, SyncedTabsHistogram.LIMIT);
        assert(this.actionMenuModel_);
        browserProxyFactory.getInstance().handler.openForeignSessionAllTabs(this.actionMenuModel_);
        this.actionMenuModel_ = null;
        menu.close();
    }
    updateFocusGrid_() {
        if (!this.focusGrid_) {
            return;
        }
        this.focusGrid_.destroy();
        if (this.focusGridUpdateTimeout_) {
            clearTimeout(this.focusGridUpdateTimeout_);
        }
        this.focusGridUpdateTimeout_ = setTimeout(() => {
            const cards = this.shadowRoot.querySelectorAll('history-synced-device-card');
            Array.from(cards)
                .reduce((prev, cur) => prev.concat(cur.createFocusRows()), [])
                .forEach((row) => {
                this.focusGrid_.addRow(row);
            });
            this.focusGrid_.ensureRowActive(1);
            this.focusGridUpdateTimeout_ = null;
        });
    }
    onDeleteSessionClick_() {
        const menu = this.$.menu.getIfExists();
        assert(menu);
        BrowserProxyImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.HIDE_FOR_NOW, SyncedTabsHistogram.LIMIT);
        assert(this.actionMenuModel_);
        browserProxyFactory.getInstance().handler.deleteForeignSession(this.actionMenuModel_);
        this.actionMenuModel_ = null;
        menu.close();
    }
    clearSyncedDevicesForTest() {
        this.clearDisplayedSyncedDevices_();
    }
    clearDisplayedSyncedDevices_() {
        this.syncedDevices_ = [];
    }
    isSignInState_(state) {
        return this.historyIdentityState_.signIn === state;
    }
    shouldShowHistorySyncOptIn_() {
        return this.replaceSyncPromosWithSignInPromos_ &&
            !this.isTabsSyncDisabled_() &&
            !(this.isSignInState_(HistorySignInState.SIGNED_IN) &&
                this.isTabsSyncTurnedOn_());
    }
    isTabsSyncTurnedOn_() {
        return this.historyIdentityState_.tabsSync === SyncState.TURNED_ON;
    }
    isTabsSyncDisabled_() {
        return this.historyIdentityState_.tabsSync === SyncState.DISABLED;
    }
    /**
     * Decide whether or not should display no synced tabs message.
     */
    showNoSyncedMessage_() {
        if (this.guestSession_ || this.isTabsSyncDisabled_()) {
            return true;
        }
        return this.isSignInState_(HistorySignInState.SIGNED_IN) &&
            this.isTabsSyncTurnedOn_() && this.syncedDevices_.length === 0;
    }
    /**
     * Shows the signin guide when the user is not signed in, signin is allowed
     * and not in a guest session.
     */
    showSignInGuide_() {
        const show = this.isSignInState_(HistorySignInState.SIGNED_OUT) &&
            !this.guestSession_ && this.signInAllowed_;
        if (show) {
            BrowserProxyImpl.getInstance().recordAction('Signin_Impression_FromRecentTabs');
        }
        return show;
    }
    /**
     * Decide what message should be displayed when user is logged in and there
     * are no synced tabs.
     */
    noSyncedTabsMessage_() {
        let stringName = this.fetchingSyncedTabs_ ? 'loading' : 'noSyncedResults';
        if (this.searchTerm !== '') {
            stringName = 'noSearchResults';
        }
        return loadTimeData.getString(stringName);
    }
    /**
     * Replaces the currently displayed synced tabs with |sessionList|. It is
     * common for only a single session within the list to have changed, We try to
     * avoid doing extra work in this case. The logic could be more intelligent
     * about updating individual tabs rather than replacing whole sessions, but
     * this approach seems to have acceptable performance.
     */
    updateSyncedDevices_() {
        // If the session list is null, the fetching is not done yet (otherwise it
        // would be an empty array)
        if (this.sessionList === null) {
            return;
        }
        this.fetchingSyncedTabs_ = false;
        if (this.sessionList.length > 0 && !this.hasSeenForeignData_) {
            this.hasSeenForeignData_ = true;
            BrowserProxyImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.HAS_FOREIGN_DATA, SyncedTabsHistogram.LIMIT);
        }
        const devices = [];
        this.sessionList.forEach((session) => {
            const device = this.createInternalDevice_(session);
            if (device.tabs.length !== 0) {
                devices.push(device);
            }
        });
        this.syncedDevices_ = devices;
    }
    /**
     * Get called when user's sign in state changes, this will affect UI of synced
     * tabs page. Sign in promo gets displayed when user is signed out, and
     * different messages are shown when there are no synced tabs.
     */
    onIdentityStateChanged_(previous) {
        this.maybeRecordSigninPendingOffered_();
        if (previous === null) {
            return;
        }
        this.fire('history-view-changed');
        if (this.replaceSyncPromosWithSignInPromos_) {
            // User signed out, syncing without tabs, or disabled sync in general =>
            // clear synced device list.
            if (this.isSignInState_(HistorySignInState.SIGNED_OUT) ||
                this.isTabsSyncDisabled_()) {
                this.clearDisplayedSyncedDevices_();
                this.sessionList = null;
                return;
            }
        }
        else if (this.isSignInState_(HistorySignInState.SIGNED_OUT)) {
            // // User signed out, clear synced device list and show the sign in promo.
            // this.clearDisplayedSyncedDevices_();
            // this.sessionList = null;
            // return;
        }
        // If the session list is null, the fetching is not done yet. Set
        // fetchingSyncedTabs_ to true to show the loading message when querying.
        if (this.sessionList === null) {
            this.fetchingSyncedTabs_ = true;
        }
        this.updateSyncedDevices_();
    }
    maybeRecordSigninPendingOffered_() {
        if (!this.replaceSyncPromosWithSignInPromos_) {
            return;
        }
        // Reset the flag if the state changes away from SIGNED_IN_PAUSED.
        if (!this.isSignInState_(HistorySignInState.SIGN_IN_PENDING)) {
            this.signinPausedImpressionRecorded_ = false;
            return;
        }
        // Don't record twice.
        if (this.signinPausedImpressionRecorded_) {
            return;
        }
        BrowserProxyImpl.getInstance().recordSigninPendingOffered(AccessPoint.kRecentTabs);
        this.signinPausedImpressionRecorded_ = true;
    }
    searchTermChanged_() {
        this.clearDisplayedSyncedDevices_();
        this.updateSyncedDevices_();
    }
    onCardOpenedChanged_(e) {
        const currentTarget = e.currentTarget;
        const index = Number(currentTarget.dataset['index']);
        const device = this.syncedDevices_[index];
        device.opened = e.detail.value;
        this.requestUpdate();
    }
}
customElements.define(HistorySyncedDeviceManagerElement.is, HistorySyncedDeviceManagerElement);
