// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview 'settings-spell-check-page' is the settings page
 * for spell check settings.
 */

import 'chrome://resources/cr_elements/cr_button/cr_button.js';
// 
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';

import {PrefService} from '/shared/settings/prefs2/pref_service.js';
import {PrefServiceObserverMixinLit} from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
// 
import {I18nMixinLit} from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import {assert} from 'chrome://resources/js/assert.js';
import type {PropertyValues} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {CrLitElement} from 'chrome://resources/lit/v3_0/lit.rollup.js';

// 
import type {SettingsToggleButtonElement} from '../controls/settings_toggle_button.js';
import {routes} from '../route.js';
import {Router} from '../router.js';
import {SettingsViewMixinLit} from '../settings_page/settings_view_mixin_lit.js';

// 
import type {LanguageSettingsMetricsProxy} from './languages_settings_metrics_proxy.js';
import {LanguageSettingsActionType, LanguageSettingsMetricsProxyImpl} from './languages_settings_metrics_proxy.js';
import type {LanguageHelper, LanguagesModel, LanguageState, SpellCheckLanguageState} from './languages_types.js';
import {getCss} from './spell_check_page.css.js';
import {getHtml} from './spell_check_page.html.js';

export interface SettingsSpellCheckPageElement {
  $: {
    enableSpellcheckingToggle: SettingsToggleButtonElement,
    // 
    // 
    // 
  };
}

const SettingsSpellCheckPageElementBase = SettingsViewMixinLit(
    I18nMixinLit(PrefServiceObserverMixinLit(CrLitElement)));

export class SettingsSpellCheckPageElement extends
    SettingsSpellCheckPageElementBase {
  static get is() {
    return 'settings-spell-check-page';
  }

  static override get styles() {
    return getCss();
  }

  override render() {
    return getHtml.bind(this)();
  }

  static override get properties() {
    return {
      // 

      enableSpellcheckingPref_: {type: Object},
      useSpellingServicePref_: {type: Object},
      forcedDictionariesPref_: {type: Object},
      blockedDictionariesPref_: {type: Object},
    };
  }

  protected accessor enableSpellcheckingPref_:
      chrome.settingsPrivate.PrefObject<boolean>|undefined;
  protected accessor useSpellingServicePref_:
      chrome.settingsPrivate.PrefObject<boolean>|undefined;
  protected accessor forcedDictionariesPref_:
      chrome.settingsPrivate.PrefObject<string[]>|undefined;
  protected accessor blockedDictionariesPref_:
      chrome.settingsPrivate.PrefObject<string[]>|undefined;
  // 
  private languageSettingsMetricsProxy_: LanguageSettingsMetricsProxy =
      LanguageSettingsMetricsProxyImpl.getInstance();

  override connectedCallback() {
    super.connectedCallback();

    this.mirrorPrefs({
      'browser.enable_spellchecking': 'enableSpellcheckingPref_',
      'spellcheck.use_spelling_service': 'useSpellingServicePref_',
      'spellcheck.forced_dictionaries': 'forcedDictionariesPref_',
      'spellcheck.blocked_dictionaries': 'blockedDictionariesPref_',
    });

    // 
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    // 
  }

  override willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);

    // 
  }

  protected onEnableSpellcheckingToggleSettingsBooleanControlChange_(e: Event) {
    this.languageSettingsMetricsProxy_.recordSettingsMetric(
        (e.target as SettingsToggleButtonElement).checked ?
            LanguageSettingsActionType.ENABLE_SPELL_CHECK_GLOBALLY :
            LanguageSettingsActionType.DISABLE_SPELL_CHECK_GLOBALLY);
  }

  protected onSelectedSpellingServiceChange_() {
    assert(this.useSpellingServicePref_);
    this.languageSettingsMetricsProxy_.recordSettingsMetric(
        this.useSpellingServicePref_.value ?
            LanguageSettingsActionType.SELECT_ENHANCED_SPELL_CHECK :
            LanguageSettingsActionType.SELECT_BASIC_SPELL_CHECK);
  }

  //  expr="not is_macosx"

  protected isSpellCheckToggleDisabled_(): boolean {
    // 
    // 
    return false;
    // 
  }

  protected getSpellCheckSubLabel_(): string {
    // 
    return '';
  }

  // 

  // SettingsViewMixin implementation.
  override getAssociatedControlFor(childViewId: string): HTMLElement {
    assert(childViewId === 'editDictionary');
    const control =
        this.shadowRoot.querySelector<HTMLElement>('#spellCheckSubpageTrigger');
    assert(
        control,
        `Failed to find associated control for child '${childViewId}'`);
    return control;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'settings-spell-check-page': SettingsSpellCheckPageElement;
  }
}

customElements.define(
    SettingsSpellCheckPageElement.is, SettingsSpellCheckPageElement);
