// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { AccessPoint } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { HistorySignInState, SyncState } from './constants.js';
import { getCss } from './history_sync_promo.css.js';
import { getHtml } from './history_sync_promo.html.js';
const HistorySyncPromoElementBase = WebUiListenerMixinLit(CrLitElement);
export class HistorySyncPromoElement extends HistorySyncPromoElementBase {
    static get is() {
        return 'history-sync-promo';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            shown_: { type: Boolean },
            historyIdentityState_: { type: Object },
            accountInfo_: { type: Object },
        };
    }
    #shown__accessor_storage = true;
    get shown_() { return this.#shown__accessor_storage; }
    set shown_(value) { this.#shown__accessor_storage = value; }
    #accountInfo__accessor_storage = null;
    get accountInfo_() { return this.#accountInfo__accessor_storage; }
    set accountInfo_(value) { this.#accountInfo__accessor_storage = value; }
    callbackRouter_;
    onAccountInfoDataReceivedListenerId_ = null;
    signinPausedImpressionRecorded_ = false;
    #historyIdentityState__accessor_storage = {
        signIn: HistorySignInState.SIGNED_OUT,
        tabsSync: SyncState.TURNED_OFF,
        historySync: SyncState.TURNED_OFF,
    };
    get historyIdentityState_() { return this.#historyIdentityState__accessor_storage; }
    set historyIdentityState_(value) { this.#historyIdentityState__accessor_storage = value; }
    constructor() {
        super();
        this.callbackRouter_ = BrowserProxyImpl.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        BrowserProxyImpl.getInstance().getInitialIdentityState().then((identityState) => {
            this.updateHistoryIdentityState_(identityState);
        });
        this.addWebUiListener('history-identity-state-changed', (identityState) => {
            this.updateHistoryIdentityState_(identityState);
        });
        this.onAccountInfoDataReceivedListenerId_ =
            this.callbackRouter_.sendAccountInfo.addListener(this.handleAccountInfoChanged_.bind(this));
        BrowserProxyImpl.getInstance().handler.requestAccountInfo().then(({ accountInfo }) => this.handleAccountInfoChanged_(accountInfo));
        BrowserProxyImpl.getInstance()
            .handler.incrementHistoryPageHistorySyncPromoShownCount();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.onAccountInfoDataReceivedListenerId_ !== null) {
            this.callbackRouter_.removeListener(this.onAccountInfoDataReceivedListenerId_);
            this.onAccountInfoDataReceivedListenerId_ = null;
        }
    }
    handleAccountInfoChanged_(accountInfo) {
        this.accountInfo_ = accountInfo;
    }
    updateHistoryIdentityState_(identityState) {
        this.historyIdentityState_ = identityState;
        this.maybeRecordSigninPendingOffered_();
    }
    maybeRecordSigninPendingOffered_() {
        // Reset the flag if the state changes away from SIGN_IN_PENDING.
        if (!this.isSignInState_(HistorySignInState.SIGN_IN_PENDING)) {
            this.signinPausedImpressionRecorded_ = false;
            return;
        }
        // Don't record if the promo is not shown or was already recorded.
        if (!this.shown_ || this.signinPausedImpressionRecorded_) {
            return;
        }
        BrowserProxyImpl.getInstance().recordSigninPendingOffered(AccessPoint.kHistoryPage);
        this.signinPausedImpressionRecorded_ = true;
    }
    onCloseClick_() {
        this.shown_ = false;
        BrowserProxyImpl.getInstance()
            .handler.recordHistoryPageHistorySyncPromoDismissed();
    }
    isSignInState_(state) {
        return this.historyIdentityState_.signIn === state;
    }
    isHistorySyncTurnedOn_() {
        return this.historyIdentityState_.historySync === SyncState.TURNED_ON;
    }
    onTurnOnHistorySyncClick_() {
        BrowserProxyImpl.getInstance().handler.turnOnHistorySync(AccessPoint.kHistoryPage);
    }
}
customElements.define(HistorySyncPromoElement.is, HistorySyncPromoElement);
