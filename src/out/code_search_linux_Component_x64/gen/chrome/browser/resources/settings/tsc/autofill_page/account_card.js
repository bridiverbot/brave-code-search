// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-account-card' component is a card that shows the user's account
 * name and picture with optional controls.
 * It's a slimmed down copy of
 * chrome/browser/resources/settings/people_page/people_page.ts
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import '../controls/settings_toggle_button.js';
// 
import '../people_page/sync_account_control.js';
// 
import '../icons.html.js';
import { SignedInState, StatusAction, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { getImage } from 'chrome://resources/js/icon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
// clang-format off
// 
// clang-format on
import { getCss } from './account_card.css.js';
import { getHtml } from './account_card.html.js';
const SettingsAccountCardElementBase = WebUiListenerMixinLit(CrLitElement);
export class SettingsAccountCardElement extends SettingsAccountCardElementBase {
    static get is() {
        return 'settings-account-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * This flag is used to conditionally show a set of new sign-in UIs to the
             * profiles that have been migrated to be consistent with the web
             * sign-ins.
             */
            signinAllowed_: { type: Boolean },
            /**
             * The current sync status, supplied by SyncBrowserProxy.
             */
            syncStatus: { type: Object },
            // 
            /**
             * Stored accounts to the system, supplied by SyncBrowserProxy.
             */
            storedAccounts: { type: Array },
            primaryAccountName_: { type: String },
            primaryAccountEmail_: { type: String },
            primaryAccountIconUrl_: { type: String },
            // 
            // 
        };
    }
    #signinAllowed__accessor_storage = loadTimeData.getBoolean('signinAllowed');
    get signinAllowed_() { return this.#signinAllowed__accessor_storage; }
    set signinAllowed_(value) { this.#signinAllowed__accessor_storage = value; }
    #syncStatus_accessor_storage = null;
    get syncStatus() { return this.#syncStatus_accessor_storage; }
    set syncStatus(value) { this.#syncStatus_accessor_storage = value; }
    #storedAccounts_accessor_storage = null;
    // 
    get storedAccounts() { return this.#storedAccounts_accessor_storage; }
    set storedAccounts(value) { this.#storedAccounts_accessor_storage = value; }
    #primaryAccountName__accessor_storage = '';
    get primaryAccountName_() { return this.#primaryAccountName__accessor_storage; }
    set primaryAccountName_(value) { this.#primaryAccountName__accessor_storage = value; }
    #primaryAccountEmail__accessor_storage = '';
    get primaryAccountEmail_() { return this.#primaryAccountEmail__accessor_storage; }
    set primaryAccountEmail_(value) { this.#primaryAccountEmail__accessor_storage = value; }
    #primaryAccountIconUrl__accessor_storage = '';
    get primaryAccountIconUrl_() { return this.#primaryAccountIconUrl__accessor_storage; }
    set primaryAccountIconUrl_(value) { this.#primaryAccountIconUrl__accessor_storage = value; }
    // 
    // 
    syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        // 
        this.syncBrowserProxy_.getSyncStatus().then(this.handleSyncStatus_.bind(this));
        this.addWebUiListener('sync-status-changed', this.handleSyncStatus_.bind(this));
        // 
        this.syncBrowserProxy_.getStoredAccounts().then(this.handleStoredAccounts_.bind(this));
        this.addWebUiListener('stored-accounts-updated', this.handleStoredAccounts_.bind(this));
        // 
    }
    // 
    /**
     * Handler for when the sync state is pushed from the browser.
     */
    handleSyncStatus_(syncStatus) {
        // 
        // 
        // Sign-in impressions should be recorded only if the sign-in promo is
        // shown. They should be recorder only once, the first time
        // |this.syncStatus| is set.
        // With `ReplaceSyncPromosWithSignInPromos`, this is not a sign in promo, so
        // we should not record.
        const shouldRecordSigninImpression = !this.syncStatus && syncStatus &&
            this.signinAllowed_ && !this.isSyncing_();
        this.syncStatus = syncStatus;
        if (shouldRecordSigninImpression && !this.shouldShowSyncAccountControl_()) {
            // SyncAccountControl records the impressions user actions.
            chrome.metricsPrivate.recordUserAction('Signin_Impression_FromSettings');
        }
        // 
    }
    // 
    onAccountClick_() {
        Router.getInstance().navigateTo(routes.ACCOUNT);
    }
    shouldLinkToAccountSettingsPage_() {
        return !!this.syncStatus &&
            this.syncStatus.signedInState === SignedInState.SIGNED_IN;
    }
    shouldShowSyncAccountControl_() {
        if (!this.syncStatus) {
            return false;
        }
        return !!this.syncStatus.syncSystemEnabled && this.signinAllowed_ &&
            !this.shouldLinkToAccountSettingsPage_();
    }
    handleStoredAccounts_(accounts) {
        this.storedAccounts = accounts;
        // The user might not have any GAIA accounts (e.g. signed out). In this case
        // the link row to the account settings page does not exist, so there's
        // nothing to do.
        if (accounts.length === 0) {
            return;
        }
        this.primaryAccountName_ = accounts[0].fullName;
        this.primaryAccountEmail_ = accounts[0].email;
        this.primaryAccountIconUrl_ = accounts[0].avatarImage;
    }
    getAccountRowSubtitle_() {
        if (!!this.syncStatus && !!this.syncStatus.statusText &&
            this.syncStatus.statusAction === StatusAction.ENTER_PASSPHRASE) {
            return loadTimeData.substituteString(this.syncStatus.statusText, this.primaryAccountEmail_);
        }
        return this.primaryAccountEmail_;
    }
    // 
    /**
     * @return A CSS image-set for multiple scale factors.
     */
    getIconImageSet_(iconUrl) {
        if (!iconUrl) {
            return '';
        }
        return getImage(iconUrl);
    }
    isSyncing_() {
        return !!this.syncStatus &&
            this.syncStatus.signedInState === SignedInState.SYNCING;
    }
}
customElements.define(SettingsAccountCardElement.is, SettingsAccountCardElement);
