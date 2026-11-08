// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'personalization-options' contains several toggles related to
 * personalizations.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '../controls/settings_toggle_button.js';
import '../people_page/signout_dialog.js';
// 
import '../relaunch_confirmation_dialog.js';
// 
// 
// 
import '//resources/cr_elements/cr_toast/cr_toast.js';
// 
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SignedInState, StatusAction, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { PrivacyPageBrowserProxyImpl } from '/shared/settings/privacy_page/privacy_page_browser_proxy.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { loadTimeData } from '../i18n_setup.js';
import { pageVisibility } from '../page_visibility.js';
import { RelaunchMixinLit, RestartType } from '../relaunch_mixin_lit.js';
import { getCss } from './personalization_options.css.js';
import { getHtml } from './personalization_options.html.js';
const SettingsPersonalizationOptionsElementBase = HelpBubbleMixinLit(RelaunchMixinLit(WebUiListenerMixinLit(I18nMixinLit(PrefServiceObserverMixinLit(CrLitElement)))));
// browser_element_identifiers constants
const ANONYMIZED_URL_COLLECTION_ID = 'kAnonymizedUrlCollectionPersonalizationSettingId';
export class SettingsPersonalizationOptionsElement extends SettingsPersonalizationOptionsElementBase {
    static get is() {
        return 'settings-personalization-options';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            syncStatus: { type: Object },
            // 
            metricsReporting_: { type: Object },
            showRestart_: { type: Boolean },
            // 
            showSearchAggregatorSuggest_: { type: Boolean },
            showSignoutDialog_: { type: Boolean },
            shouldUseMetricsConsentRestructure_: { type: Boolean },
            syncFirstSetupInProgress_: { type: Boolean },
            // 
            signinAvailable_: { type: Boolean },
            chromeSigninUserChoiceInfo_: { type: Object },
            // 
            spellCheckDictionariesPref_: { type: Object },
        };
    }
    #syncStatus_accessor_storage = { statusAction: StatusAction.NO_ACTION };
    get syncStatus() { return this.#syncStatus_accessor_storage; }
    set syncStatus(value) { this.#syncStatus_accessor_storage = value; }
    #metricsReporting__accessor_storage;
    // 
    get metricsReporting_() { return this.#metricsReporting__accessor_storage; }
    set metricsReporting_(value) { this.#metricsReporting__accessor_storage = value; }
    #showRestart__accessor_storage = false;
    get showRestart_() { return this.#showRestart__accessor_storage; }
    set showRestart_(value) { this.#showRestart__accessor_storage = value; }
    #showSearchAggregatorSuggest__accessor_storage = loadTimeData.getBoolean('showSearchAggregatorSuggest');
    // 
    get showSearchAggregatorSuggest_() { return this.#showSearchAggregatorSuggest__accessor_storage; }
    set showSearchAggregatorSuggest_(value) { this.#showSearchAggregatorSuggest__accessor_storage = value; }
    #showSignoutDialog__accessor_storage = false;
    get showSignoutDialog_() { return this.#showSignoutDialog__accessor_storage; }
    set showSignoutDialog_(value) { this.#showSignoutDialog__accessor_storage = value; }
    #syncFirstSetupInProgress__accessor_storage = false;
    get syncFirstSetupInProgress_() { return this.#syncFirstSetupInProgress__accessor_storage; }
    set syncFirstSetupInProgress_(value) { this.#syncFirstSetupInProgress__accessor_storage = value; }
    #shouldUseMetricsConsentRestructure__accessor_storage = loadTimeData.getBoolean('shouldUseMetricsConsentRestructure');
    get shouldUseMetricsConsentRestructure_() { return this.#shouldUseMetricsConsentRestructure__accessor_storage; }
    set shouldUseMetricsConsentRestructure_(value) { this.#shouldUseMetricsConsentRestructure__accessor_storage = value; }
    #signinAvailable__accessor_storage = loadTimeData.getBoolean('signinAvailable');
    // 
    get signinAvailable_() { return this.#signinAvailable__accessor_storage; }
    set signinAvailable_(value) { this.#signinAvailable__accessor_storage = value; }
    #chromeSigninUserChoiceInfo__accessor_storage;
    get chromeSigninUserChoiceInfo_() { return this.#chromeSigninUserChoiceInfo__accessor_storage; }
    set chromeSigninUserChoiceInfo_(value) { this.#chromeSigninUserChoiceInfo__accessor_storage = value; }
    #spellCheckDictionariesPref__accessor_storage;
    // 
    get spellCheckDictionariesPref_() { return this.#spellCheckDictionariesPref__accessor_storage; }
    set spellCheckDictionariesPref_(value) { this.#spellCheckDictionariesPref__accessor_storage = value; }
    browserProxy_ = PrivacyPageBrowserProxyImpl.getInstance();
    syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('spellcheck.dictionaries', 'spellCheckDictionariesPref_');
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('syncStatus')) {
            this.syncFirstSetupInProgress_ = this.computeSyncFirstSetupInProgress_();
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        // 
        const setMetricsReporting = (metricsReporting) => this.setMetricsReporting_(metricsReporting);
        this.addWebUiListener('metrics-reporting-change', setMetricsReporting);
        this.browserProxy_.getMetricsReporting().then(setMetricsReporting);
        // 
        // 
        // 
    }
    computeSyncFirstSetupInProgress_() {
        return !!this.syncStatus.firstSetupInProgress;
    }
    showPriceEmailNotificationsToggle_() {
        if (!loadTimeData.getBoolean('changePriceEmailNotificationsEnabled')) {
            return false;
        }
        // Only show the toggle when the user signed in.
        if (loadTimeData.getBoolean('replaceSyncPromosWithSignInPromos') &&
            this.syncStatus.signedInState === SignedInState.SIGNED_IN) {
            return true;
        }
        return this.syncStatus.signedInState === SignedInState.SYNCING;
    }
    getPriceEmailNotificationsPrefDesc_() {
        const username = this.syncStatus.signedInUsername || '';
        return loadTimeData.getStringF('priceEmailNotificationsPrefDesc', username);
    }
    // 
    onMetricsReportingChange_(e) {
        const target = e.target;
        this.browserProxy_.setMetricsReportingEnabled(target.checked);
    }
    setMetricsReporting_(metricsReporting) {
        const hadPrevious = this.metricsReporting_ !== undefined;
        this.metricsReporting_ = metricsReporting;
        // TODO(dbeam): remember whether metrics reporting was enabled when Chrome
        // started.
        if (metricsReporting.managed) {
            this.showRestart_ = false;
        }
        else if (hadPrevious) {
            this.showRestart_ = true;
        }
    }
    // 
    showSearchSuggestToggle_() {
        if (pageVisibility?.privacy === undefined) {
            // pageVisibility isn't defined in non-Guest profiles
            // (crbug.com/40211731).
            return true;
        }
        return pageVisibility.privacy.searchPrediction;
    }
    // 
    // <!-- _google_chrome -->
    onSignoutDialogClose_() {
        if (this.shadowRoot
            .querySelector('settings-signout-dialog').wasConfirmed()) {
            // 
        }
        this.showSignoutDialog_ = false;
    }
    // 
    // 
    onRestartClick_(e) {
        e.stopPropagation();
        this.performRestart(RestartType.RESTART);
    }
}
customElements.define(SettingsPersonalizationOptionsElement.is, SettingsPersonalizationOptionsElement);
