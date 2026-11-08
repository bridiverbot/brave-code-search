// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import './language_toast.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { getCss } from './language_menu.css.js';
import { getHtml } from './language_menu.html.js';
import { AVAILABLE_GOOGLE_TTS_LOCALES, getVoicePackConvertedLangIfExists, NotificationType } from './voice_language_conversions.js';
import { VoiceNotificationManager } from './voice_notification_manager.js';
// Returns whether `substring` is a non-case-sensitive substring of `value`
function isSubstring(value, substring) {
    return value.toLowerCase().includes(substring.toLowerCase());
}
const LanguageMenuElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class LanguageMenuElement extends LanguageMenuElementBase {
    static get is() {
        return 'language-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enabledLangs: { type: Array },
            availableVoices: { type: Array },
            localeToDisplayName: { type: Object },
            selectedLang: { type: String },
            languageSearchValue_: { type: String },
            currentNotifications_: { type: Object },
            availableLanguages_: { type: Array },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.notificationManager_.addListener(this);
        this.notificationManager_.addListener(this.getToast_());
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('selectedLang') ||
            changedProperties.has('localeToDisplayName') ||
            changedPrivateProperties.has('currentNotifications_') ||
            changedPrivateProperties.has('languageSearchValue_')) {
            this.availableLanguages_ = this.computeAvailableLanguages_();
        }
    }
    notify(type, language) {
        if (!language) {
            return;
        }
        this.currentNotifications_ = {
            ...this.currentNotifications_,
            [language]: type,
        };
    }
    #selectedLang_accessor_storage = '';
    get selectedLang() { return this.#selectedLang_accessor_storage; }
    set selectedLang(value) { this.#selectedLang_accessor_storage = value; }
    #localeToDisplayName_accessor_storage = {};
    get localeToDisplayName() { return this.#localeToDisplayName_accessor_storage; }
    set localeToDisplayName(value) { this.#localeToDisplayName_accessor_storage = value; }
    #enabledLangs_accessor_storage = [];
    get enabledLangs() { return this.#enabledLangs_accessor_storage; }
    set enabledLangs(value) { this.#enabledLangs_accessor_storage = value; }
    #availableVoices_accessor_storage = [];
    get availableVoices() { return this.#availableVoices_accessor_storage; }
    set availableVoices(value) { this.#availableVoices_accessor_storage = value; }
    #languageSearchValue__accessor_storage = '';
    get languageSearchValue_() { return this.#languageSearchValue__accessor_storage; }
    set languageSearchValue_(value) { this.#languageSearchValue__accessor_storage = value; }
    #availableLanguages__accessor_storage = [];
    get availableLanguages_() { return this.#availableLanguages__accessor_storage; }
    set availableLanguages_(value) { this.#availableLanguages__accessor_storage = value; }
    // Use this variable instead of AVAILABLE_GOOGLE_TTS_LOCALES
    // directly to better aid in testing.
    localesOfLangPackVoices = this.getSupportedNaturalVoiceDownloadLocales();
    #currentNotifications__accessor_storage = {};
    // The current notifications that should be used in the language menu.
    get currentNotifications_() { return this.#currentNotifications__accessor_storage; }
    set currentNotifications_(value) { this.#currentNotifications__accessor_storage = value; }
    notificationManager_ = VoiceNotificationManager.getInstance();
    onClose_() {
        this.notificationManager_.removeListener(this);
        this.notificationManager_.removeListener(this.getToast_());
        this.$.languageMenu.close();
    }
    onClearSearchClick_() {
        this.languageSearchValue_ = '';
        this.$.searchField.focus();
    }
    onToggleChange_(e) {
        const index = Number.parseInt(e.currentTarget.dataset['index']);
        const language = this.availableLanguages_[index].languageCode;
        this.fire(ToolbarEvent.LANGUAGE_TOGGLE, { language });
    }
    getToast_() {
        const toast = this.$.languageMenu.querySelector('language-toast');
        assert(toast, 'no language menu toast!');
        return toast;
    }
    getDisplayName(lang) {
        const langLower = lang.toLowerCase();
        return this.localeToDisplayName[langLower] || langLower;
    }
    getNormalizedDisplayName(lang) {
        const displayName = this.getDisplayName(lang);
        return displayName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    getSupportedNaturalVoiceDownloadLocales() {
        return AVAILABLE_GOOGLE_TTS_LOCALES;
    }
    computeAvailableLanguages_() {
        if (!this.availableVoices) {
            return [];
        }
        const selectedLangLowerCase = this.selectedLang.toLowerCase();
        const availableLangs = [...new Set([
                ...this.localesOfLangPackVoices,
                ...this.availableVoices.map(({ lang }) => lang.toLowerCase()),
            ])];
        // Sort the list of languages alphabetically by display name.
        availableLangs.sort((lang1, lang2) => {
            return this.getDisplayName(lang1).localeCompare(this.getDisplayName(lang2));
        });
        return availableLangs
            .filter(lang => this.isLanguageSearchMatch(lang, this.languageSearchValue_))
            .map(lang => ({
            readableLanguage: this.getDisplayName(lang),
            checked: this.enabledLangs.includes(lang),
            languageCode: lang,
            notification: this.getNotificationFor(lang),
            disabled: this.enabledLangs.includes(lang) &&
                (lang.toLowerCase() === selectedLangLowerCase),
        }));
    }
    // Check whether the search term matches the readable lang (e.g.
    // 'ras' will match 'Portugues (Brasil)'), if it matches
    // the language code (e.g. 'pt-br' matches 'Portugues (Brasil)'), or if it
    // matches without accents (e.g. 'portugues' matches 'portugués').
    isLanguageSearchMatch(lang, languageSearchValue) {
        const isDisplayNameMatch = isSubstring(
        /* value= */ this.getDisplayName(lang), 
        /* substring= */ languageSearchValue);
        const isLanguageCodeMatch = isSubstring(
        /* value= */ lang, 
        /* substring= */ languageSearchValue);
        // Compare the search term to the language name without
        // accents.
        const isNormalizedDisplayNameMatch = isSubstring(
        /* value= */ this.getNormalizedDisplayName(lang), 
        /* substring= */ languageSearchValue);
        return isDisplayNameMatch || isLanguageCodeMatch ||
            isNormalizedDisplayNameMatch;
    }
    getNotificationFor(lang) {
        const voicePackLanguage = getVoicePackConvertedLangIfExists(lang);
        const notification = this.currentNotifications_[voicePackLanguage];
        if (notification === undefined) {
            return { isError: false };
        }
        switch (notification) {
            case NotificationType.DOWNLOADING:
                return { isError: false, text: 'readingModeLanguageMenuDownloading' };
            case NotificationType.NO_INTERNET:
                return { isError: true, text: 'readingModeLanguageMenuNoInternet' };
            case NotificationType.GENERIC_ERROR:
                return { isError: true, text: 'languageMenuDownloadFailed' };
            case NotificationType.NO_SPACE_HQ:
                return { isError: true, text: 'allocationErrorHighQuality' };
            case NotificationType.NO_SPACE:
                return { isError: true, text: 'allocationError' };
            case NotificationType.DOWNLOADED:
            case NotificationType.GOOGLE_VOICES_UNAVAILABLE:
            // TODO (crbug.com/396436665) Show inline error message
            case NotificationType.NONE:
                return { isError: false };
            default:
                // This ensures the switch statement is exhaustive
                return notification;
        }
    }
    searchHasLanguages() {
        // We should only show the "No results" string when there are no available
        // languages and there is a valid search term.
        return (this.availableLanguages_.length > 0) ||
            (!this.languageSearchValue_) ||
            (this.languageSearchValue_.trim().length === 0);
    }
    onLanguageSearchValueChanged_(e) {
        this.languageSearchValue_ = e.detail.value;
    }
    onKeydown_(e) {
        e.stopPropagation();
    }
}
customElements.define(LanguageMenuElement.is, LanguageMenuElement);
