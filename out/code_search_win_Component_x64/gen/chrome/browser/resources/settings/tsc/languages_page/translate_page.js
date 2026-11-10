// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-translate-page' is the settings page
 * translate settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './add_languages_dialog.js';
import './languages.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../settings_page/settings_section.js';
import { getCss as getCrSharedStyleCss } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getMdSelectLitCss } from '//resources/cr_elements/md_select_lit.css.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSettingsSharedCss } from '../settings_shared_lit.css.js';
import { getLanguageHelperInstance } from './languages.js';
import { LanguageSettingsActionType, LanguageSettingsMetricsProxyImpl } from './languages_settings_metrics_proxy.js';
import { convertLanguageCodeForChrome, getFullName, isTranslateBaseLanguage } from './languages_util.js';
import { getHtml } from './translate_page.html.js';
const SettingsTranslatePageElementBase = PrefServiceObserverMixinLit(I18nMixinLit(CrLitElement));
export class SettingsTranslatePageElement extends SettingsTranslatePageElementBase {
    static get is() {
        return 'settings-translate-page';
    }
    static get styles() {
        return [
            getCrSharedStyleCss(),
            getSettingsSharedCss(),
            getMdSelectLitCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            supportedLanguages_: { type: Array },
            translateTarget_: { type: String },
            alwaysTranslateLanguages_: { type: Array },
            neverTranslateLanguages_: { type: Array },
            showAddAlwaysTranslateDialog_: { type: Boolean },
            showAddNeverTranslateDialog_: { type: Boolean },
            addLanguagesDialogLanguages_: { type: Array },
            translateEnabledPref_: { type: Object },
        };
    }
    #supportedLanguages__accessor_storage = [];
    get supportedLanguages_() { return this.#supportedLanguages__accessor_storage; }
    set supportedLanguages_(value) { this.#supportedLanguages__accessor_storage = value; }
    #translateTarget__accessor_storage = '';
    get translateTarget_() { return this.#translateTarget__accessor_storage; }
    set translateTarget_(value) { this.#translateTarget__accessor_storage = value; }
    #alwaysTranslateLanguages__accessor_storage = [];
    get alwaysTranslateLanguages_() { return this.#alwaysTranslateLanguages__accessor_storage; }
    set alwaysTranslateLanguages_(value) { this.#alwaysTranslateLanguages__accessor_storage = value; }
    #neverTranslateLanguages__accessor_storage = [];
    get neverTranslateLanguages_() { return this.#neverTranslateLanguages__accessor_storage; }
    set neverTranslateLanguages_(value) { this.#neverTranslateLanguages__accessor_storage = value; }
    #translateEnabledPref__accessor_storage;
    get translateEnabledPref_() { return this.#translateEnabledPref__accessor_storage; }
    set translateEnabledPref_(value) { this.#translateEnabledPref__accessor_storage = value; }
    #showAddAlwaysTranslateDialog__accessor_storage = false;
    get showAddAlwaysTranslateDialog_() { return this.#showAddAlwaysTranslateDialog__accessor_storage; }
    set showAddAlwaysTranslateDialog_(value) { this.#showAddAlwaysTranslateDialog__accessor_storage = value; }
    #showAddNeverTranslateDialog__accessor_storage = false;
    get showAddNeverTranslateDialog_() { return this.#showAddNeverTranslateDialog__accessor_storage; }
    set showAddNeverTranslateDialog_(value) { this.#showAddNeverTranslateDialog__accessor_storage = value; }
    #addLanguagesDialogLanguages__accessor_storage = [];
    get addLanguagesDialogLanguages_() { return this.#addLanguagesDialogLanguages__accessor_storage; }
    set addLanguagesDialogLanguages_(value) { this.#addLanguagesDialogLanguages__accessor_storage = value; }
    languageHelper_;
    boundOnLanguagesChanged_ = null;
    languageSettingsMetricsProxy_ = LanguageSettingsMetricsProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'translate.enabled': 'translateEnabledPref_',
        });
        this.languageHelper_ = getLanguageHelperInstance();
        this.boundOnLanguagesChanged_ = (e) => {
            this.onLanguagesChanged_(e.detail);
        };
        this.languageHelper_.addEventListener('languages-changed', this.boundOnLanguagesChanged_);
        if (this.languageHelper_.languages) {
            this.onLanguagesChanged_(this.languageHelper_.languages);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.boundOnLanguagesChanged_) {
            this.languageHelper_.removeEventListener('languages-changed', this.boundOnLanguagesChanged_);
            this.boundOnLanguagesChanged_ = null;
        }
    }
    onLanguagesChanged_(languages) {
        this.supportedLanguages_ = languages.supported;
        this.translateTarget_ = languages.translateTarget;
        this.alwaysTranslateLanguages_ = languages.alwaysTranslate;
        this.neverTranslateLanguages_ = languages.neverTranslate;
    }
    onTargetLanguageChange_() {
        this.languageHelper_.setTranslateTargetLanguage(this.shadowRoot.querySelector('#targetLanguage').value);
        this.languageSettingsMetricsProxy_.recordSettingsMetric(LanguageSettingsActionType.CHANGE_TRANSLATE_TARGET);
    }
    /**
     * Helper function to get the text to display in the target language drop down
     * list. Returns the display name in the current UI language and the native
     * name of the language.
     */
    getTargetLanguageDisplayOption_(item) {
        return getFullName(item);
    }
    /**
     * Checks if a Chrome language code is equal to the translate language code.
     * Used in the translate language selector. If the item matches the translate
     * target language, it will set that item as selected.
     */
    translateLanguageEqual_(chromeItemCode, translateTarget) {
        return !!translateTarget &&
            chromeItemCode === convertLanguageCodeForChrome(translateTarget);
    }
    /**
     * A function used for sorting languages alphabetically by display name.
     */
    alphabeticalSort_(first, second) {
        return first.displayName.localeCompare(second.displayName);
    }
    /**
     * A filter function to return true if language is not undefined and has a
     * displayName.
     */
    hasDisplayName_(language) {
        return !!language && !!language.displayName;
    }
    /**
     * Stamps and opens the Add Languages dialog, registering a listener to
     * disable the dialog's dom-if again on close.
     */
    onAddAlwaysTranslateLanguagesClick_(e) {
        e.preventDefault();
        const translatableLanguages = this.getTranslatableLanguages_();
        this.addLanguagesDialogLanguages_ = translatableLanguages.filter(language => !this.alwaysTranslateLanguages_.includes(language));
        this.showAddAlwaysTranslateDialog_ = true;
    }
    onAlwaysTranslateDialogClose_() {
        this.showAddAlwaysTranslateDialog_ = false;
        this.addLanguagesDialogLanguages_ = [];
        const toFocus = this.shadowRoot.querySelector('#addAlwaysTranslate');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    /**
     * Helper function fired by the add dialog's on-languages-added event. Adds
     * selected languages to the always-translate languages list.
     */
    onAlwaysTranslateLanguagesAdded_(e) {
        const languagesToAdd = e.detail;
        languagesToAdd.forEach(languageCode => {
            this.languageHelper_.setLanguageAlwaysTranslateState(languageCode, true);
            this.languageSettingsMetricsProxy_.recordSettingsMetric(LanguageSettingsActionType.ADD_TO_ALWAYS_TRANSLATE);
        });
    }
    /**
     * Removes a language from the always translate languages list.
     */
    onRemoveAlwaysTranslateLanguageClick_(e) {
        const target = e.currentTarget;
        const languageCode = target.dataset['code'];
        this.languageHelper_.setLanguageAlwaysTranslateState(languageCode, false);
        this.languageSettingsMetricsProxy_.recordSettingsMetric(LanguageSettingsActionType.REMOVE_FROM_ALWAYS_TRANSLATE);
    }
    /**
     * Stamps and opens the Add Languages dialog, registering a listener to
     * disable the dialog's dom-if again on close.
     */
    onAddNeverTranslateLanguagesClick_(e) {
        e.preventDefault();
        const translatableLanguages = this.getTranslatableLanguages_();
        this.addLanguagesDialogLanguages_ = translatableLanguages.filter(language => !this.neverTranslateLanguages_.includes(language));
        this.showAddNeverTranslateDialog_ = true;
    }
    onNeverTranslateDialogClose_() {
        this.showAddNeverTranslateDialog_ = false;
        this.addLanguagesDialogLanguages_ = [];
        const toFocus = this.shadowRoot.querySelector('#addNeverTranslate');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    /**
     * Removes a language from the never translate languages list.
     */
    onNeverTranslateLanguagesAdded_(e) {
        const languagesToAdd = e.detail;
        languagesToAdd.forEach(languageCode => {
            this.languageHelper_.disableTranslateLanguage(languageCode);
            this.languageSettingsMetricsProxy_.recordSettingsMetric(LanguageSettingsActionType.ADD_TO_NEVER_TRANSLATE);
        });
    }
    /**
     * Removes a language from the never translate languages list.
     */
    onRemoveNeverTranslateLanguageClick_(e) {
        const target = e.currentTarget;
        const languageCode = target.dataset['code'];
        this.languageHelper_.enableTranslateLanguage(languageCode);
        this.languageSettingsMetricsProxy_.recordSettingsMetric(LanguageSettingsActionType.REMOVE_FROM_NEVER_TRANSLATE);
    }
    onOfferTranslateOtherLanguagesSettingsBooleanControlChange_(e) {
        this.languageSettingsMetricsProxy_.recordSettingsMetric(e.target.checked ?
            LanguageSettingsActionType.ENABLE_TRANSLATE_GLOBALLY :
            LanguageSettingsActionType.DISABLE_TRANSLATE_GLOBALLY);
    }
    /**
     * @return Whether the list has any items.
     */
    hasSome_(list) {
        return !!list?.length;
    }
    /**
     * @return Whether the delete button for never translate languages should be
     *     disabled.
     */
    shouldDisableDeleteNeverTranslateLanguage_() {
        return this.neverTranslateLanguages_.length === 1;
    }
    getSupportedLanguages_() {
        return this.supportedLanguages_.filter(language => this.isTranslateSupported_(language));
    }
    getAlwaysTranslateLanguages_() {
        return this.alwaysTranslateLanguages_
            .filter(lang => this.hasDisplayName_(lang))
            .slice()
            .sort(this.alphabeticalSort_);
    }
    getNeverTranslateLanguages_() {
        return this.neverTranslateLanguages_
            .filter(lang => this.hasDisplayName_(lang))
            .slice()
            .sort(this.alphabeticalSort_);
    }
    /**
     * Gets the list of languages that chrome can translate
     */
    getTranslatableLanguages_() {
        return this.supportedLanguages_.filter(language => {
            return this.isTranslateSupported_(language);
        });
    }
    /**
     * Filters only for translate supported languages
     */
    isTranslateSupported_(language) {
        return isTranslateBaseLanguage(language);
    }
}
customElements.define(SettingsTranslatePageElement.is, SettingsTranslatePageElement);
