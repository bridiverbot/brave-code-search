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
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
// 
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { LanguageSettingsActionType, LanguageSettingsMetricsProxyImpl } from './languages_settings_metrics_proxy.js';
import { getCss } from './spell_check_page.css.js';
import { getHtml } from './spell_check_page.html.js';
const SettingsSpellCheckPageElementBase = SettingsViewMixinLit(I18nMixinLit(PrefServiceObserverMixinLit(CrLitElement)));
export class SettingsSpellCheckPageElement extends SettingsSpellCheckPageElementBase {
    static get is() {
        return 'settings-spell-check-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // 
            enableSpellcheckingPref_: { type: Object },
            useSpellingServicePref_: { type: Object },
            forcedDictionariesPref_: { type: Object },
            blockedDictionariesPref_: { type: Object },
        };
    }
    #enableSpellcheckingPref__accessor_storage;
    get enableSpellcheckingPref_() { return this.#enableSpellcheckingPref__accessor_storage; }
    set enableSpellcheckingPref_(value) { this.#enableSpellcheckingPref__accessor_storage = value; }
    #useSpellingServicePref__accessor_storage;
    get useSpellingServicePref_() { return this.#useSpellingServicePref__accessor_storage; }
    set useSpellingServicePref_(value) { this.#useSpellingServicePref__accessor_storage = value; }
    #forcedDictionariesPref__accessor_storage;
    get forcedDictionariesPref_() { return this.#forcedDictionariesPref__accessor_storage; }
    set forcedDictionariesPref_(value) { this.#forcedDictionariesPref__accessor_storage = value; }
    #blockedDictionariesPref__accessor_storage;
    get blockedDictionariesPref_() { return this.#blockedDictionariesPref__accessor_storage; }
    set blockedDictionariesPref_(value) { this.#blockedDictionariesPref__accessor_storage = value; }
    // 
    languageSettingsMetricsProxy_ = LanguageSettingsMetricsProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'browser.enable_spellchecking': 'enableSpellcheckingPref_',
            'spellcheck.use_spelling_service': 'useSpellingServicePref_',
            'spellcheck.forced_dictionaries': 'forcedDictionariesPref_',
            'spellcheck.blocked_dictionaries': 'blockedDictionariesPref_',
        });
        // 
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // 
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        // 
    }
    onEnableSpellcheckingToggleSettingsBooleanControlChange_(e) {
        this.languageSettingsMetricsProxy_.recordSettingsMetric(e.target.checked ?
            LanguageSettingsActionType.ENABLE_SPELL_CHECK_GLOBALLY :
            LanguageSettingsActionType.DISABLE_SPELL_CHECK_GLOBALLY);
    }
    onSelectedSpellingServiceChange_() {
        assert(this.useSpellingServicePref_);
        this.languageSettingsMetricsProxy_.recordSettingsMetric(this.useSpellingServicePref_.value ?
            LanguageSettingsActionType.SELECT_ENHANCED_SPELL_CHECK :
            LanguageSettingsActionType.SELECT_BASIC_SPELL_CHECK);
    }
    //  expr="not is_macosx"
    isSpellCheckToggleDisabled_() {
        // 
        // 
        return false;
        // 
    }
    getSpellCheckSubLabel_() {
        // 
        return '';
    }
    // 
    // SettingsViewMixin implementation.
    getAssociatedControlFor(childViewId) {
        assert(childViewId === 'editDictionary');
        const control = this.shadowRoot.querySelector('#spellCheckSubpageTrigger');
        assert(control, `Failed to find associated control for child '${childViewId}'`);
        return control;
    }
}
customElements.define(SettingsSpellCheckPageElement.is, SettingsSpellCheckPageElement);
