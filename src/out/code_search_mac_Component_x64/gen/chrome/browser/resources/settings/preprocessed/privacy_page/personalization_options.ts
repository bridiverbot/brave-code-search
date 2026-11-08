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

import type {CrToastElement} from '//resources/cr_elements/cr_toast/cr_toast.js';
import type {CrToggleElement} from '//resources/cr_elements/cr_toggle/cr_toggle.js';
// 
import {I18nMixinLit} from '//resources/cr_elements/i18n_mixin_lit.js';
import {WebUiListenerMixinLit} from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import {assert} from '//resources/js/assert.js';
import {CrLitElement} from '//resources/lit/v3_0/lit.rollup.js';
import type {PropertyValues} from '//resources/lit/v3_0/lit.rollup.js';
import type {ChromeSigninUserChoiceInfo, SyncBrowserProxy, SyncStatus} from '/shared/settings/people_page/sync_browser_proxy.js';
import {ChromeSigninUserChoice, SignedInState, StatusAction, SyncBrowserProxyImpl} from '/shared/settings/people_page/sync_browser_proxy.js';
import {PrefService} from '/shared/settings/prefs2/pref_service.js';
import {PrefServiceObserverMixinLit} from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import type {MetricsReporting, PrivacyPageBrowserProxy} from '/shared/settings/privacy_page/privacy_page_browser_proxy.js';
import {PrivacyPageBrowserProxyImpl} from '/shared/settings/privacy_page/privacy_page_browser_proxy.js';
import {HelpBubbleMixinLit} from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
// 

import type {SettingsToggleButtonElement} from '../controls/settings_toggle_button.js';
import {loadTimeData} from '../i18n_setup.js';
import {pageVisibility} from '../page_visibility.js';
import type {PrivacyPageVisibility} from '../page_visibility.js';
import type {SettingsSignoutDialogElement} from '../people_page/signout_dialog.js';
import {RelaunchMixinLit, RestartType} from '../relaunch_mixin_lit.js';

import {getCss} from './personalization_options.css.js';
import {getHtml} from './personalization_options.html.js';

export interface SettingsPersonalizationOptionsElement {
  $: {
    // 
    // 
  };
}

const SettingsPersonalizationOptionsElementBase =
    HelpBubbleMixinLit(RelaunchMixinLit(WebUiListenerMixinLit(
        I18nMixinLit(PrefServiceObserverMixinLit(CrLitElement)))));

// browser_element_identifiers constants
const ANONYMIZED_URL_COLLECTION_ID =
    'kAnonymizedUrlCollectionPersonalizationSettingId';

export type PersonalizationOptionsElement =
    SettingsPersonalizationOptionsElement;

export class SettingsPersonalizationOptionsElement extends
    SettingsPersonalizationOptionsElementBase {
  static get is() {
    return 'settings-personalization-options';
  }

  static override get styles() {
    return getCss();
  }

  override render() {
    return getHtml.bind(this)();
  }

  static override get properties() {
    return {
      syncStatus: {type: Object},

      // 
      metricsReporting_: {type: Object},

      showRestart_: {type: Boolean},
      // 

      showSearchAggregatorSuggest_: {type: Boolean},

      showSignoutDialog_: {type: Boolean},

      shouldUseMetricsConsentRestructure_: {type: Boolean},

      syncFirstSetupInProgress_: {type: Boolean},

      // 
      signinAvailable_: {type: Boolean},

      chromeSigninUserChoiceInfo_: {type: Object},
      // 

      spellCheckDictionariesPref_: {type: Object},
    };
  }

  accessor syncStatus: SyncStatus = {statusAction: StatusAction.NO_ACTION};

  // 
  protected accessor metricsReporting_: MetricsReporting|undefined;
  protected accessor showRestart_: boolean = false;
  // 

  protected accessor showSearchAggregatorSuggest_: boolean =
      loadTimeData.getBoolean('showSearchAggregatorSuggest');

  protected accessor showSignoutDialog_: boolean = false;
  protected accessor syncFirstSetupInProgress_: boolean = false;
  protected accessor shouldUseMetricsConsentRestructure_: boolean =
      loadTimeData.getBoolean('shouldUseMetricsConsentRestructure');

  // 
  protected accessor signinAvailable_: boolean =
      loadTimeData.getBoolean('signinAvailable');

  protected accessor chromeSigninUserChoiceInfo_: ChromeSigninUserChoiceInfo|
      undefined;
  // 

  protected accessor spellCheckDictionariesPref_:
      chrome.settingsPrivate.PrefObject<string[]>|undefined;

  private browserProxy_: PrivacyPageBrowserProxy =
      PrivacyPageBrowserProxyImpl.getInstance();

  private syncBrowserProxy_: SyncBrowserProxy =
      SyncBrowserProxyImpl.getInstance();

  override connectedCallback() {
    super.connectedCallback();

    this.mirrorPref('spellcheck.dictionaries', 'spellCheckDictionariesPref_');
  }

  override willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);

    if (changedProperties.has('syncStatus')) {
      this.syncFirstSetupInProgress_ = this.computeSyncFirstSetupInProgress_();
    }
  }

  override firstUpdated(changedProperties: PropertyValues<this>) {
    super.firstUpdated(changedProperties);

    // 
    const setMetricsReporting = (metricsReporting: MetricsReporting) =>
        this.setMetricsReporting_(metricsReporting);
    this.addWebUiListener('metrics-reporting-change', setMetricsReporting);
    this.browserProxy_.getMetricsReporting().then(setMetricsReporting);
    // 

    // 

    // 
  }

  private computeSyncFirstSetupInProgress_(): boolean {
    return !!this.syncStatus.firstSetupInProgress;
  }

  protected showPriceEmailNotificationsToggle_(): boolean {
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

  protected getPriceEmailNotificationsPrefDesc_(): string {
    const username = this.syncStatus.signedInUsername || '';
    return loadTimeData.getStringF('priceEmailNotificationsPrefDesc', username);
  }

  // 
  protected onMetricsReportingChange_(e: Event) {
    const target = e.target as CrToggleElement;
    this.browserProxy_.setMetricsReportingEnabled(target.checked);
  }

  private setMetricsReporting_(metricsReporting: MetricsReporting) {
    const hadPrevious = this.metricsReporting_ !== undefined;
    this.metricsReporting_ = metricsReporting;

    // TODO(dbeam): remember whether metrics reporting was enabled when Chrome
    // started.
    if (metricsReporting.managed) {
      this.showRestart_ = false;
    } else if (hadPrevious) {
      this.showRestart_ = true;
    }
  }
  // 

  protected showSearchSuggestToggle_(): boolean {
    if (pageVisibility?.privacy === undefined) {
      // pageVisibility isn't defined in non-Guest profiles
      // (crbug.com/40211731).
      return true;
    }
    return (pageVisibility.privacy as PrivacyPageVisibility).searchPrediction;
  }

  // 

  // <!-- _google_chrome -->

  protected onSignoutDialogClose_() {
    if (this.shadowRoot
            .querySelector<SettingsSignoutDialogElement>(
                'settings-signout-dialog')!.wasConfirmed()) {
      // 
    }
    this.showSignoutDialog_ = false;
  }

  // 

  // 
  protected onRestartClick_(e: Event) {
    e.stopPropagation();
    this.performRestart(RestartType.RESTART);
  }
  // 

  // 
}

declare global {
  interface HTMLElementTagNameMap {
    'settings-personalization-options': SettingsPersonalizationOptionsElement;
  }
}

customElements.define(
    SettingsPersonalizationOptionsElement.is,
    SettingsPersonalizationOptionsElement);
