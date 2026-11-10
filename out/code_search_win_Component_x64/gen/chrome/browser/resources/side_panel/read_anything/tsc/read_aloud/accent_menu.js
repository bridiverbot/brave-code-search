// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import './language_toast.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { getNewIndex, isArrow } from '../shared/keyboard_util.js';
import { getCss } from './accent_menu.css.js';
import { getHtml } from './accent_menu.html.js';
import { getDisplayName, isLanguageSearchMatch, sortLanguagesByDisplayName } from './language_display.js';
import { AVAILABLE_GOOGLE_TTS_LOCALES, getNotificationFor } from './voice_language_conversions.js';
import { VoiceNotificationManager } from './voice_notification_manager.js';
const AccentMenuElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class AccentMenuElement extends AccentMenuElementBase {
    static get is() {
        return 'accent-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            availableVoices: { type: Array },
            enabledLangs: { type: Array },
            localeToDisplayName: { type: Object },
            selectedLang: { type: String },
            languageSearchValue_: { type: String },
            currentNotifications_: { type: Object },
            availableLanguages_: { type: Array },
            focusedIndex_: { type: Number },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.notificationManager_.addListener(this);
        this.notificationManager_.addListener(this.getToast_());
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.notificationManager_.removeListener(this);
        const toast = this.getToast_();
        if (toast) {
            this.notificationManager_.removeListener(toast);
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        const languagesChanged = changedProperties.has('selectedLang') ||
            changedProperties.has('availableVoices') ||
            changedProperties.has('enabledLangs') ||
            changedProperties.has('localeToDisplayName') ||
            changedPrivateProperties.has('languageSearchValue_');
        if (languagesChanged ||
            changedPrivateProperties.has('currentNotifications_')) {
            this.availableLanguages_ = this.computeAvailableLanguages_();
            if (languagesChanged || this.focusedIndex_ < 0 ||
                this.focusedIndex_ >= this.availableLanguages_.length) {
                const selectedIndex = this.availableLanguages_.findIndex(item => item.selected);
                this.focusedIndex_ = selectedIndex !== -1 ? selectedIndex : 0;
            }
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
    #focusedIndex__accessor_storage = 0;
    get focusedIndex_() { return this.#focusedIndex__accessor_storage; }
    set focusedIndex_(value) { this.#focusedIndex__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    localesOfLangPackVoices = AVAILABLE_GOOGLE_TTS_LOCALES;
    #currentNotifications__accessor_storage = {};
    // The current notifications that should be used in the accent menu.
    get currentNotifications_() { return this.#currentNotifications__accessor_storage; }
    set currentNotifications_(value) { this.#currentNotifications__accessor_storage = value; }
    notificationManager_ = VoiceNotificationManager.getInstance();
    onClose_() {
        this.notificationManager_.removeListener(this);
        this.notificationManager_.removeListener(this.getToast_());
        this.$.accentMenu.close();
    }
    onClearSearchClick_() {
        this.languageSearchValue_ = '';
        this.$.searchField.focus();
    }
    onLanguageSelectClick_(e) {
        const target = e.currentTarget;
        const index = Number.parseInt(target.dataset['index'] || '', 10);
        const item = this.availableLanguages_[index];
        if (!item) {
            return;
        }
        this.fire(ToolbarEvent.LANGUAGE_SELECTED, { language: item.languageCode });
    }
    getItemAriaChecked_(item) {
        return item.selected ?? false;
    }
    getTabIndex_(index) {
        return index === this.focusedIndex_ ? 0 : -1;
    }
    getToast_() {
        const toast = this.$.accentMenu.querySelector('language-toast');
        assert(toast, 'no accent menu toast!');
        return toast;
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
        sortLanguagesByDisplayName(availableLangs, this.localeToDisplayName);
        return availableLangs
            .filter(lang => isLanguageSearchMatch(lang, this.languageSearchValue_, this.localeToDisplayName))
            .map(lang => ({
            readableLanguage: getDisplayName(lang, this.localeToDisplayName),
            languageCode: lang,
            notification: getNotificationFor(lang, this.currentNotifications_),
            selected: lang.toLowerCase() === selectedLangLowerCase,
        }));
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
        if (isArrow(e.key)) {
            const buttons = Array.from(this.$.accentMenu.querySelectorAll('.dropdown-item'));
            if (!buttons.includes(e.target)) {
                return;
            }
            e.preventDefault();
            const newIndex = getNewIndex(e.key, e.target, buttons);
            this.focusedIndex_ = newIndex;
            buttons.forEach((btn, idx) => {
                btn.tabIndex = idx === newIndex ? 0 : -1;
            });
            buttons[newIndex].focus();
            return;
        }
        if (e.key !== 'Tab' || e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }
        const closeButton = this.$.accentMenu.shadowRoot.querySelector('#close');
        const firstFocusable = closeButton ?? this.$.searchField;
        const clearButton = this.$.accentMenu.querySelector('#clearLanguageSearch');
        const lastFocusable = this.$.accentMenu.querySelector('.dropdown-item[tabindex="0"]') ??
            clearButton ?? this.$.searchField;
        const activeElement = this.shadowRoot.activeElement;
        if (e.shiftKey) {
            if (activeElement === firstFocusable ||
                activeElement === this.$.accentMenu) {
                e.preventDefault();
                lastFocusable.focus();
            }
        }
        else if (activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
        }
    }
}
customElements.define(AccentMenuElement.is, AccentMenuElement);
