// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-edit-dictionary-page' is a sub-page for editing
 * the "dictionary" of custom words used for spell check.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../settings_page/settings_subpage.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getCss } from './edit_dictionary_page.css.js';
import { getHtml } from './edit_dictionary_page.html.js';
import { LanguagesBrowserProxyImpl } from './languages_browser_proxy.js';
// Max valid word size defined in
// https://cs.chromium.org/chromium/src/components/spellcheck/common/spellcheck_common.h?l=28
const MAX_CUSTOM_DICTIONARY_WORD_BYTES = 99;
const SettingsEditDictionaryPageElementBase = PrefServiceObserverMixinLit(SettingsViewMixinLit(CrLitElement));
export class SettingsEditDictionaryPageElement extends SettingsEditDictionaryPageElementBase {
    static get is() {
        return 'settings-edit-dictionary-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enableSpellcheckingPref_: { type: Object },
            newWordValue_: { type: String },
            words_: { type: Array },
            hasWords_: { type: Boolean },
        };
    }
    #enableSpellcheckingPref__accessor_storage;
    get enableSpellcheckingPref_() { return this.#enableSpellcheckingPref__accessor_storage; }
    set enableSpellcheckingPref_(value) { this.#enableSpellcheckingPref__accessor_storage = value; }
    #newWordValue__accessor_storage = '';
    get newWordValue_() { return this.#newWordValue__accessor_storage; }
    set newWordValue_(value) { this.#newWordValue__accessor_storage = value; }
    #words__accessor_storage = [];
    get words_() { return this.#words__accessor_storage; }
    set words_(value) { this.#words__accessor_storage = value; }
    #hasWords__accessor_storage = false;
    get hasWords_() { return this.#hasWords__accessor_storage; }
    set hasWords_(value) { this.#hasWords__accessor_storage = value; }
    languageSettingsPrivate_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'browser.enable_spellchecking': 'enableSpellcheckingPref_',
        });
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.languageSettingsPrivate_ =
            LanguagesBrowserProxyImpl.getInstance().getLanguageSettingsPrivate();
        this.languageSettingsPrivate_.getSpellcheckWords().then(words => {
            this.hasWords_ = words.length > 0;
            this.words_ = words;
        });
        this.languageSettingsPrivate_.onCustomDictionaryChanged.addListener(this.onCustomDictionaryChanged_.bind(this));
    }
    /**
     * Adds the word in the new-word input to the dictionary.
     */
    addWordFromInput_() {
        // Spaces are allowed, but removing leading and trailing whitespace.
        const word = this.getTrimmedNewWord_();
        this.newWordValue_ = '';
        if (word) {
            this.languageSettingsPrivate_.addSpellcheckWord(word);
        }
    }
    /**
     * Check if the field is empty or invalid.
     */
    disableAddButton_() {
        return this.getTrimmedNewWord_().length === 0 || this.isWordInvalid_();
    }
    getErrorMessage_() {
        if (this.newWordIsTooLong_()) {
            return loadTimeData.getString('addDictionaryWordLengthError');
        }
        if (this.newWordAlreadyAdded_()) {
            return loadTimeData.getString('addDictionaryWordDuplicateError');
        }
        return '';
    }
    getTrimmedNewWord_() {
        return this.newWordValue_.trim();
    }
    /**
     * If the word is invalid, returns true (or a message if one is provided).
     * Otherwise returns false.
     */
    isWordInvalid_() {
        return this.newWordAlreadyAdded_() || this.newWordIsTooLong_();
    }
    newWordAlreadyAdded_() {
        return this.words_.includes(this.getTrimmedNewWord_());
    }
    newWordIsTooLong_() {
        return this.getTrimmedNewWord_().length > MAX_CUSTOM_DICTIONARY_WORD_BYTES;
    }
    /**
     * Handles tapping on the Add Word button.
     */
    onAddWordClick_() {
        this.addWordFromInput_();
        this.$.newWord.focus();
    }
    onNewWordValueChanged_(e) {
        this.newWordValue_ = e.detail.value;
    }
    /**
     * Handles updates to the word list. Additions are unshifted to the top
     * of the list so that users can see them easily.
     */
    async onCustomDictionaryChanged_(added, removed) {
        const wasEmpty = this.words_.length === 0;
        for (const word of removed) {
            const index = this.words_.indexOf(word);
            if (index !== -1) {
                this.words_.splice(index, 1);
            }
        }
        if (this.words_.length === 0 && added.length === 0 && !wasEmpty) {
            this.hasWords_ = false;
        }
        if (wasEmpty && added.length > 0) {
            this.hasWords_ = true;
        }
        for (const word of added) {
            if (!this.words_.includes(word)) {
                this.words_.unshift(word);
            }
        }
        this.requestUpdate();
        if (removed.length > 0) {
            await this.updateComplete;
            const focused = this.shadowRoot.querySelector('.list-item:focus-within');
            if (!focused) {
                const toFocus = this.shadowRoot.querySelector('.list-item:last-of-type cr-icon-button');
                toFocus?.focus();
            }
        }
    }
    /**
     * Handles Enter and Escape key presses for the new-word input.
     */
    onNewWordKeydown_(e) {
        if (e.key === 'Enter' && !this.disableAddButton_()) {
            this.addWordFromInput_();
        }
        else if (e.key === 'Escape') {
            e.target.value = '';
        }
    }
    /**
     * Handles tapping on a "Remove word" icon button.
     */
    onRemoveWordClick_(e) {
        const target = e.currentTarget;
        const item = target.dataset['item'];
        this.languageSettingsPrivate_.removeSpellcheckWord(item);
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsEditDictionaryPageElement.is, SettingsEditDictionaryPageElement);
