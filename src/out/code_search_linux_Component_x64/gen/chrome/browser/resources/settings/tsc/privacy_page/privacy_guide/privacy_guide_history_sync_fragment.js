// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'privacy-guide-history-sync-fragment' is the fragment in a privacy guide
 * card that contains the history sync setting and its description.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../../controls/settings_toggle_button.js';
import '../../icons.html.js';
import { SignedInState, SyncBrowserProxyImpl, syncPrefsIndividualDataTypes } from '/shared/settings/people_page/sync_browser_proxy.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { MetricsBrowserProxyImpl, PrivacyGuideSettingsStates, PrivacyGuideStepsEligibleAndReached } from '../../metrics_browser_proxy.js';
import { routes } from '../../route.js';
import { RouteObserverMixinLit, Router } from '../../router.js';
import { PrivacyGuideStep } from './constants.js';
import { getCss as getPrivacyGuideFragmentSharedCss } from './privacy_guide_fragment_shared_lit.css.js';
import { getHtml } from './privacy_guide_history_sync_fragment.html.js';
const HISTORY_SYNC_VIRTUAL_PREF_KEY = 'synthetic.settings.privacy_guide.history_sync';
const PrivacyGuideHistorySyncFragmentElementBase = RouteObserverMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement)));
export class PrivacyGuideHistorySyncFragmentElement extends PrivacyGuideHistorySyncFragmentElementBase {
    static get is() {
        return 'privacy-guide-history-sync-fragment';
    }
    static get styles() {
        return [
            getPrivacyGuideFragmentSharedCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            syncStatus_: { type: Object },
        };
    }
    syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    syncPrefs_;
    /*
     * |null| indicates that the value is currently unknown and that it will be
     * set with the next sync prefs update.
     */
    syncAllCache_ = null;
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    startStateHistorySyncOn_;
    /*
     * This is needed as the nature of SyncPrefs means there is a chance they are
     * not actually initialized before view-enter-start, so the pref value is read
     * when the page fires its on-load update/initialization of SyncPrefs.
     */
    firstSyncPrefUpdate_ = true;
    #syncStatus__accessor_storage = null;
    get syncStatus_() { return this.#syncStatus__accessor_storage; }
    set syncStatus_(value) { this.#syncStatus__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        this.addEventListener('view-exit-finish', this.onViewExitFinish_);
        this.addWebUiListener('sync-status-changed', (syncStatus) => this.onSyncStatusChanged_(syncStatus));
        Promise
            .all([
            this.syncBrowserProxy_.getSyncStatus(),
            PrefService.getInstance().whenInitialized(),
        ])
            .then(([syncStatus]) => this.onSyncStatusChanged_(syncStatus));
        this.addWebUiListener('sync-prefs-changed', (syncPrefs) => this.onSyncPrefsChange_(syncPrefs));
        this.syncBrowserProxy_.sendSyncPrefsChanged();
    }
    focus() {
        // The fragment element is focused when it becomes visible. Move the focus
        // to the fragment header, so that the newly shown content of the fragment
        // is downwards from the focus position. This allows users of screen readers
        // to continue navigating the screen reader position downwards through the
        // newly visible content.
        this.shadowRoot.querySelector('[focus-element]').focus();
    }
    onViewEnterStart_() {
        this.metricsBrowserProxy_
            .recordPrivacyGuideStepsEligibleAndReachedHistogram(PrivacyGuideStepsEligibleAndReached.HISTORY_SYNC_REACHED);
    }
    onViewExitFinish_() {
        const endStateHistorySyncOn = this.syncPrefs_.typedUrlsSynced;
        let state = null;
        if (this.startStateHistorySyncOn_) {
            state = endStateHistorySyncOn ?
                PrivacyGuideSettingsStates.HISTORY_SYNC_ON_TO_ON :
                PrivacyGuideSettingsStates.HISTORY_SYNC_ON_TO_OFF;
        }
        else {
            state = endStateHistorySyncOn ?
                PrivacyGuideSettingsStates.HISTORY_SYNC_OFF_TO_ON :
                PrivacyGuideSettingsStates.HISTORY_SYNC_OFF_TO_OFF;
        }
        this.metricsBrowserProxy_.recordPrivacyGuideSettingsStatesHistogram(state);
        this.firstSyncPrefUpdate_ = true;
    }
    currentRouteChanged(newRoute) {
        if (newRoute === routes.PRIVACY_GUIDE &&
            Router.getInstance().getQueryParameters().get('step') ===
                PrivacyGuideStep.HISTORY_SYNC) {
            // Sync all should not be re-enabled via the history sync card if there
            // was a navigation since caching sync all.
            this.syncAllCache_ = null;
        }
    }
    onSyncStatusChanged_(syncStatus) {
        this.syncStatus_ = syncStatus;
        this.updateHistorySyncVirtualPrefValue_();
    }
    onSyncPrefsChange_(syncPrefs) {
        this.syncPrefs_ = syncPrefs;
        if (this.syncAllCache_ === null) {
            this.syncAllCache_ = this.syncPrefs_.syncAllDataTypes;
        }
        if (this.firstSyncPrefUpdate_) {
            this.startStateHistorySyncOn_ = this.syncPrefs_.typedUrlsSynced;
            this.firstSyncPrefUpdate_ = false;
        }
        this.updateHistorySyncVirtualPrefValue_();
    }
    updateHistorySyncVirtualPrefValue_() {
        if (!this.syncPrefs_) {
            return;
        }
        let val;
        if (!this.syncStatus_ ||
            this.syncStatus_.signedInState === SignedInState.SIGNED_IN) {
            val = this.syncPrefs_.typedUrlsSynced || this.syncPrefs_.tabsSynced ||
                this.syncPrefs_.savedTabGroupsSynced;
        }
        else {
            val = this.syncPrefs_.syncAllDataTypes || this.syncPrefs_.typedUrlsSynced;
        }
        PrefService.getInstance().setPrefValue(HISTORY_SYNC_VIRTUAL_PREF_KEY, val);
    }
    onToggleChange_() {
        const checked = this.$.historyToggle.checked;
        if (!this.syncStatus_ ||
            this.syncStatus_.signedInState === SignedInState.SIGNED_IN) {
            this.syncPrefs_.tabsSynced = checked;
            this.syncPrefs_.savedTabGroupsSynced = checked;
        }
        this.syncPrefs_.typedUrlsSynced = checked;
        this.syncPrefs_.syncAllDataTypes = this.shouldSyncAllBeOn_();
        this.syncBrowserProxy_.setSyncDatatypes(this.syncPrefs_);
        if (this.syncPrefs_.typedUrlsSynced) {
            this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.ChangeHistorySyncOn');
        }
        else {
            this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.ChangeHistorySyncOff');
        }
    }
    /**
     * If sync all was on when the user reached the history sync card, then
     * disabling and re-enabling history sync while on the card should also
     * re-enable sync all in case all other sync datatypes are also still on.
     */
    shouldSyncAllBeOn_() {
        if (!this.syncAllCache_) {
            return false;
        }
        for (const datatype of syncPrefsIndividualDataTypes) {
            if (this.syncPrefs_[datatype]) {
                continue;
            }
            if (datatype === 'wifiConfigurationsSynced' &&
                !this.syncPrefs_.wifiConfigurationsRegistered) {
                // Non-CrOS: |wifiConfigurationsRegistered| is false.
                // CrOS: If |wifiConfigurationsRegistered| is false then
                // |wifiConfigurationsSynced| is not shown in the advanced sync
                // controls UI. Hence it being false doesn't prevent re-enabling
                // sync all.
                continue;
            }
            return false;
        }
        return true;
    }
    /**
     * The header for the history sync card. It changes depending on whether the
     * user is signed in.
     */
    getHistorySyncCardHeader_() {
        if (this.syncStatus_ &&
            this.syncStatus_.signedInState === SignedInState.SIGNED_IN) {
            return this.i18n('privacyGuideHistoryAndTabsSyncCardHeader');
        }
        return this.i18n('privacyGuideHistorySyncCardHeader');
    }
    /**
     * The label for the history sync toggle. It changes depending on whether the
     * user is signed in.
     */
    getHistorySyncToggleLabel_() {
        if (this.syncStatus_ &&
            this.syncStatus_.signedInState === SignedInState.SIGNED_IN) {
            return this.i18n('privacyGuideHistoryAndTabsSyncSettingLabel');
        }
        return this.i18n('privacyGuideHistorySyncSettingLabel');
    }
    /**
     * The first line of the feature description. It changes depending on whether
     * the user is signed in.
     */
    getHistorySyncFeatureDescription1_() {
        if (this.syncStatus_ &&
            this.syncStatus_.signedInState === SignedInState.SIGNED_IN) {
            return this.i18n('privacyGuideHistoryAndTabsSyncFeatureDescription1');
        }
        return this.i18n('privacyGuideHistorySyncFeatureDescription1');
    }
}
customElements.define(PrivacyGuideHistorySyncFragmentElement.is, PrivacyGuideHistorySyncFragmentElement);
