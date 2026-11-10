// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-search-engines-page' is the settings page
 * containing search engines settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../simple_confirmation_dialog.js';
import './search_engine_edit_dialog.js';
import './search_engines_list.js';
import './omnibox_extension_entry.js';
import '../settings_page/settings_subpage.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { SearchEnginesBrowserProxyImpl, SearchEnginesInteractions } from './search_engines_browser_proxy.js';
import { getCss } from './search_engines_page.css.js';
import { getHtml } from './search_engines_page.html.js';
const SettingsSearchEnginesPageElementBase = SettingsViewMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement)));
export class SettingsSearchEnginesPageElement extends SettingsSearchEnginesPageElementBase {
    static get is() {
        return 'settings-search-engines-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            defaultEngines: { type: Array },
            activeEngines: { type: Array },
            otherEngines: { type: Array },
            extensions: { type: Array },
            showExtensionsList_: { type: Boolean },
            /** Filters out all search engines that do not match. */
            filter_: { type: String },
            matchingDefaultEngines_: { type: Array },
            matchingActiveEngines_: { type: Array },
            matchingOtherEngines_: { type: Array },
            matchingExtensions_: { type: Array },
            dialogModel_: { type: Object },
            dialogAnchorElement_: { type: Object },
            showEditDialog_: { type: Boolean },
            showDeleteConfirmationDialog_: { type: Boolean },
        };
    }
    #defaultEngines_accessor_storage = [];
    get defaultEngines() { return this.#defaultEngines_accessor_storage; }
    set defaultEngines(value) { this.#defaultEngines_accessor_storage = value; }
    #activeEngines_accessor_storage = [];
    get activeEngines() { return this.#activeEngines_accessor_storage; }
    set activeEngines(value) { this.#activeEngines_accessor_storage = value; }
    #otherEngines_accessor_storage = [];
    get otherEngines() { return this.#otherEngines_accessor_storage; }
    set otherEngines(value) { this.#otherEngines_accessor_storage = value; }
    #extensions_accessor_storage = [];
    get extensions() { return this.#extensions_accessor_storage; }
    set extensions(value) { this.#extensions_accessor_storage = value; }
    #showExtensionsList__accessor_storage = false;
    get showExtensionsList_() { return this.#showExtensionsList__accessor_storage; }
    set showExtensionsList_(value) { this.#showExtensionsList__accessor_storage = value; }
    #filter__accessor_storage = '';
    get filter_() { return this.#filter__accessor_storage; }
    set filter_(value) { this.#filter__accessor_storage = value; }
    #matchingDefaultEngines__accessor_storage = [];
    get matchingDefaultEngines_() { return this.#matchingDefaultEngines__accessor_storage; }
    set matchingDefaultEngines_(value) { this.#matchingDefaultEngines__accessor_storage = value; }
    #matchingActiveEngines__accessor_storage = [];
    get matchingActiveEngines_() { return this.#matchingActiveEngines__accessor_storage; }
    set matchingActiveEngines_(value) { this.#matchingActiveEngines__accessor_storage = value; }
    #matchingOtherEngines__accessor_storage = [];
    get matchingOtherEngines_() { return this.#matchingOtherEngines__accessor_storage; }
    set matchingOtherEngines_(value) { this.#matchingOtherEngines__accessor_storage = value; }
    #matchingExtensions__accessor_storage = [];
    get matchingExtensions_() { return this.#matchingExtensions__accessor_storage; }
    set matchingExtensions_(value) { this.#matchingExtensions__accessor_storage = value; }
    #dialogModel__accessor_storage = null;
    get dialogModel_() { return this.#dialogModel__accessor_storage; }
    set dialogModel_(value) { this.#dialogModel__accessor_storage = value; }
    #dialogAnchorElement__accessor_storage = null;
    get dialogAnchorElement_() { return this.#dialogAnchorElement__accessor_storage; }
    set dialogAnchorElement_(value) { this.#dialogAnchorElement__accessor_storage = value; }
    #showEditDialog__accessor_storage = false;
    get showEditDialog_() { return this.#showEditDialog__accessor_storage; }
    set showEditDialog_(value) { this.#showEditDialog__accessor_storage = value; }
    #showDeleteConfirmationDialog__accessor_storage = false;
    get showDeleteConfirmationDialog_() { return this.#showDeleteConfirmationDialog__accessor_storage; }
    set showDeleteConfirmationDialog_(value) { this.#showDeleteConfirmationDialog__accessor_storage = value; }
    browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('defaultEngines') ||
            changedPrivateProperties.has('filter_')) {
            this.matchingDefaultEngines_ =
                this.computeMatchingEngines_(this.defaultEngines);
        }
        if (changedProperties.has('activeEngines') ||
            changedPrivateProperties.has('filter_')) {
            this.matchingActiveEngines_ =
                this.computeMatchingEngines_(this.activeEngines);
        }
        if (changedProperties.has('otherEngines') ||
            changedPrivateProperties.has('filter_')) {
            this.matchingOtherEngines_ =
                this.computeMatchingEngines_(this.otherEngines);
        }
        if (changedProperties.has('extensions') ||
            changedPrivateProperties.has('filter_')) {
            this.matchingExtensions_ = this.computeMatchingEngines_(this.extensions);
        }
        if (changedProperties.has('extensions')) {
            this.showExtensionsList_ = this.extensions.length > 0;
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.browserProxy_.getSearchEnginesList().then(this.enginesChanged_.bind(this));
        this.addWebUiListener('search-engines-changed', this.enginesChanged_.bind(this));
        this.addEventListener('view-or-edit-search-engine', e => this.onEditSearchEngine_(e));
        this.addEventListener('delete-search-engine', e => this.onDeleteSearchEngine_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        // Restore focus to the last element if the previous last element was
        // deleted while it was focused.
        if (changedPrivateProperties.has('matchingExtensions_')) {
            const previousExtensions = changedPrivateProperties.get('matchingExtensions_');
            if (previousExtensions &&
                this.matchingExtensions_.length < previousExtensions.length) {
                const focused = this.shadowRoot.querySelector('settings-omnibox-extension-entry:focus-within');
                if (!focused) {
                    const toFocus = this.shadowRoot.querySelector('settings-omnibox-extension-entry:last-of-type');
                    toFocus?.focus();
                }
            }
        }
    }
    onSearchChanged_(e) {
        this.filter_ = e.detail;
    }
    openEditDialog_(searchEngine, anchorElement) {
        this.dialogModel_ = searchEngine;
        this.dialogAnchorElement_ = anchorElement;
        this.showEditDialog_ = true;
    }
    openDeleteConfirmationDialog_(searchEngine, anchorElement) {
        this.dialogModel_ = searchEngine;
        this.dialogAnchorElement_ = anchorElement;
        this.showDeleteConfirmationDialog_ = true;
    }
    getDeleteConfirmationBodyText_(searchEngine) {
        if (searchEngine && searchEngine.isManaged) {
            return this.i18n('searchEnginesDeleteConfirmationDescriptionForPolicy');
        }
        return this.i18n('searchEnginesDeleteConfirmationDescription');
    }
    onEditDialogClose_() {
        this.showEditDialog_ = false;
        focusWithoutInk(this.dialogAnchorElement_);
        this.dialogModel_ = null;
        this.dialogAnchorElement_ = null;
    }
    onDeleteConfirmationDialogClose_() {
        const dialog = this.shadowRoot.querySelector('settings-simple-confirmation-dialog');
        assert(dialog);
        const confirmed = dialog.wasConfirmed();
        this.showDeleteConfirmationDialog_ = false;
        if (confirmed) {
            assert(this.dialogModel_);
            this.browserProxy_.removeSearchEngine(this.dialogModel_.id);
            this.dialogAnchorElement_ = null;
        }
        this.dialogModel_ = null;
    }
    onEditSearchEngine_(e) {
        this.openEditDialog_(e.detail.engine, e.detail.anchorElement);
    }
    onDeleteSearchEngine_(e) {
        this.openDeleteConfirmationDialog_(e.detail.engine, e.detail.anchorElement);
    }
    enginesChanged_(searchEnginesInfo) {
        this.defaultEngines = searchEnginesInfo.defaults;
        this.activeEngines = searchEnginesInfo.actives;
        this.otherEngines = searchEnginesInfo.others;
        this.extensions = searchEnginesInfo.extensions;
    }
    onAddSearchEngineClick_(e) {
        e.preventDefault();
        this.browserProxy_.recordSearchEnginesPageHistogram(SearchEnginesInteractions.ADD_SEARCH_ENGINE);
        this.openEditDialog_(null, this.shadowRoot.querySelector('#addSearchEngine'));
    }
    /**
     * Filters the given list based on the currently existing filter string.
     */
    computeMatchingEngines_(list) {
        if (this.filter_ === '') {
            return list;
        }
        const filter = this.filter_.toLowerCase();
        return list.filter(e => {
            return [e.displayName, e.name, e.keyword, e.url].some(term => term.toLowerCase().includes(filter));
        });
    }
    /**
     * @param list The original list.
     * @param filteredList The filtered list.
     * @return Whether to show the "no results" message.
     */
    showNoResultsMessage_(list, filteredList) {
        return list.length > 0 && filteredList.length === 0;
    }
    onKeyboardShortcutSettingChange_() {
        const spaceEnabled = this.$.keyboardShortcutSettingGroup.selected === 'true';
        this.browserProxy_.recordSearchEnginesPageHistogram(spaceEnabled ?
            SearchEnginesInteractions.KEYBOARD_SHORTCUT_SPACE_OR_TAB :
            SearchEnginesInteractions.KEYBOARD_SHORTCUT_TAB);
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsSearchEnginesPageElement.is, SettingsSearchEnginesPageElement);
