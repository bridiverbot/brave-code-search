// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-add-languages-dialog' is a dialog for enabling
 * languages.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import { FindShortcutMixinLit } from 'chrome://resources/cr_elements/find_shortcut_mixin_lit.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './add_languages_dialog.css.js';
import { getHtml } from './add_languages_dialog.html.js';
import { getFullName } from './languages_util.js';
const SettingsAddLanguagesDialogElementBase = FindShortcutMixinLit(I18nMixinLit(CrLitElement));
export class SettingsAddLanguagesDialogElement extends SettingsAddLanguagesDialogElementBase {
    static get is() {
        return 'settings-add-languages-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            languages: { type: Array },
            languagesToAdd_: { type: Object },
            disableActionButton_: { type: Boolean },
            filterValue_: { type: String },
        };
    }
    #languages_accessor_storage = [];
    get languages() { return this.#languages_accessor_storage; }
    set languages(value) { this.#languages_accessor_storage = value; }
    #languagesToAdd__accessor_storage = new Set();
    get languagesToAdd_() { return this.#languagesToAdd__accessor_storage; }
    set languagesToAdd_(value) { this.#languagesToAdd__accessor_storage = value; }
    #disableActionButton__accessor_storage = true;
    get disableActionButton_() { return this.#disableActionButton__accessor_storage; }
    set disableActionButton_(value) { this.#disableActionButton__accessor_storage = value; }
    #filterValue__accessor_storage = '';
    get filterValue_() { return this.#filterValue__accessor_storage; }
    set filterValue_(value) { this.#filterValue__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(_modalContextOpen) {
        // Assumes this is the only open modal.
        const searchInput = this.$.search.getSearchInput();
        searchInput.scrollIntoViewIfNeeded();
        if (!this.searchInputHasFocus()) {
            searchInput.focus();
        }
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.$.search.getSearchInput() ===
            this.$.search.shadowRoot.activeElement;
    }
    onSearchChanged_(e) {
        this.filterValue_ = e.detail;
    }
    /** @return A list of languages to be displayed. */
    getLanguages_() {
        if (!this.filterValue_) {
            return this.languages;
        }
        const filterValue = this.filterValue_.toLowerCase();
        return this.languages.filter(language => {
            return language.displayName.toLowerCase().includes(filterValue) ||
                language.nativeDisplayName.toLowerCase().includes(filterValue);
        });
    }
    /** @return The number of languages to be displayed. */
    getLanguagesCount_() {
        return this.getLanguages_().length;
    }
    getDisplayText_(language) {
        return getFullName(language);
    }
    /**
     * @return Whether the user has chosen to add this language (checked its
     *     checkbox).
     */
    willAdd_(languageCode) {
        return this.languagesToAdd_.has(languageCode);
    }
    /** Handler for checking or unchecking a language item. */
    onLanguageCheckboxChange_(e) {
        const checkbox = e.currentTarget;
        const languageCode = checkbox.dataset['code'];
        if (checkbox.checked) {
            this.languagesToAdd_.add(languageCode);
        }
        else {
            this.languagesToAdd_.delete(languageCode);
        }
        this.requestUpdate();
        this.disableActionButton_ = !this.languagesToAdd_.size;
    }
    onCancelButtonClick_() {
        this.$.dialog.close();
    }
    /** Enables the checked languages. */
    onActionButtonClick_() {
        this.fire('languages-added', Array.from(this.languagesToAdd_));
        this.$.dialog.close();
    }
    onKeydown_(e) {
        // Close dialog if 'esc' is pressed and the search box is already empty.
        if (e.key === 'Escape' && !this.$.search.getValue().trim()) {
            this.$.dialog.close();
        }
        else if (e.key !== 'PageDown' && e.key !== 'PageUp') {
            this.$.search.scrollIntoViewIfNeeded();
        }
    }
}
customElements.define(SettingsAddLanguagesDialogElement.is, SettingsAddLanguagesDialogElement);
