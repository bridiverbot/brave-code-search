// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-site-shortcuts-page' is the settings page containing site
 * shortcuts.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import './search_engine_edit_dialog.js';
import './search_engines_list.js';
import '../settings_page/settings_section.js';
import '../simple_confirmation_dialog.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SearchEnginesBrowserProxyImpl, SearchEnginesInteractions } from './search_engines_browser_proxy.js';
import { getCss } from './site_shortcuts_page.css.js';
import { getHtml } from './site_shortcuts_page.html.js';
const SiteShortcutsPageElementBase = WebUiListenerMixinLit(CrLitElement);
export class SiteShortcutsPageElement extends SiteShortcutsPageElementBase {
    static get is() {
        return 'settings-site-shortcuts-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            activeShortcuts: { type: Array },
            inactiveShortcuts: { type: Array },
            // Whether the corresponding subsection is expanded.
            activeShortcutsExpanded_: { type: Boolean },
            inactiveShortcutsExpanded_: { type: Boolean },
            dialogModel_: { type: Object },
            dialogAnchorElement_: { type: Object },
            showEditDialog_: { type: Boolean },
            showDeleteConfirmationDialog_: { type: Boolean },
        };
    }
    #activeShortcuts_accessor_storage = [];
    get activeShortcuts() { return this.#activeShortcuts_accessor_storage; }
    set activeShortcuts(value) { this.#activeShortcuts_accessor_storage = value; }
    #inactiveShortcuts_accessor_storage = [];
    get inactiveShortcuts() { return this.#inactiveShortcuts_accessor_storage; }
    set inactiveShortcuts(value) { this.#inactiveShortcuts_accessor_storage = value; }
    #activeShortcutsExpanded__accessor_storage = false;
    get activeShortcutsExpanded_() { return this.#activeShortcutsExpanded__accessor_storage; }
    set activeShortcutsExpanded_(value) { this.#activeShortcutsExpanded__accessor_storage = value; }
    #inactiveShortcutsExpanded__accessor_storage = false;
    get inactiveShortcutsExpanded_() { return this.#inactiveShortcutsExpanded__accessor_storage; }
    set inactiveShortcutsExpanded_(value) { this.#inactiveShortcutsExpanded__accessor_storage = value; }
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
    connectedCallback() {
        super.connectedCallback();
        SearchEnginesBrowserProxyImpl.getInstance()
            .getCategorizedTemplateUrls()
            .then(this.enginesChanged_.bind(this));
        this.addWebUiListener('search-engines-changed', this.enginesChanged_.bind(this));
        this.addEventListener('view-or-edit-search-engine', e => this.onEditSearchEngine_(e));
        this.addEventListener('delete-search-engine', e => this.onDeleteSearchEngine_(e));
    }
    enginesChanged_(categorizedTemplateUrls) {
        this.activeShortcuts = categorizedTemplateUrls.activeSiteShortcuts;
        this.inactiveShortcuts = categorizedTemplateUrls.inactiveSiteShortcuts;
    }
    openEditDialog_(searchEngine, anchorElement) {
        this.dialogModel_ = searchEngine;
        this.dialogAnchorElement_ = anchorElement;
        this.showEditDialog_ = true;
    }
    onEditDialogClose_() {
        this.showEditDialog_ = false;
        focusWithoutInk(this.dialogAnchorElement_);
        this.dialogModel_ = null;
        this.dialogAnchorElement_ = null;
    }
    onEditSearchEngine_(e) {
        this.openEditDialog_(e.detail.engine, e.detail.anchorElement);
    }
    openDeleteConfirmationDialog_(searchEngine, anchorElement) {
        this.dialogModel_ = searchEngine;
        this.dialogAnchorElement_ = anchorElement;
        this.showDeleteConfirmationDialog_ = true;
    }
    onDeleteConfirmationDialogClose_() {
        const dialog = this.shadowRoot.querySelector('settings-simple-confirmation-dialog');
        assert(dialog);
        const confirmed = dialog.wasConfirmed();
        this.showDeleteConfirmationDialog_ = false;
        if (confirmed) {
            assert(this.dialogModel_);
            const focusTarget = this.dialogModel_.canBeActivated ?
                this.$.inactiveShortcutsRow :
                this.$.activeShortcutsRow;
            this.browserProxy_.removeSearchEngine(this.dialogModel_.id);
            // If the engine is deleted, set the focus to the row that contained it.
            focusWithoutInk(focusTarget);
        }
        else {
            focusWithoutInk(this.dialogAnchorElement_);
        }
        this.dialogAnchorElement_ = null;
        this.dialogModel_ = null;
    }
    onDeleteSearchEngine_(e) {
        this.openDeleteConfirmationDialog_(e.detail.engine, e.detail.anchorElement);
    }
    onAddSearchEngineClick_(e) {
        e.stopPropagation();
        this.browserProxy_.recordSearchEnginesPageHistogram(SearchEnginesInteractions.ADD_SEARCH_ENGINE);
        this.openEditDialog_(null, this.$.addSearchEngine);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('activeShortcutsExpanded_') &&
            changedPrivateProperties.get('activeShortcutsExpanded_') !==
                undefined) {
            this.onSectionExpandedChanged_(this.activeShortcutsExpanded_);
        }
        if (changedPrivateProperties.has('inactiveShortcutsExpanded_') &&
            changedPrivateProperties.get('inactiveShortcutsExpanded_') !==
                undefined) {
            this.onSectionExpandedChanged_(this.inactiveShortcutsExpanded_);
        }
    }
    onActiveShortcutsExpandedChanged_(e) {
        this.activeShortcutsExpanded_ = e.detail.value;
    }
    onInactiveShortcutsExpandedChanged_(e) {
        this.inactiveShortcutsExpanded_ = e.detail.value;
    }
    onSectionExpandedChanged_(expanded) {
        const interaction = expanded ?
            SearchEnginesInteractions.SITE_SHORTCUTS_SECTION_EXPANDED :
            SearchEnginesInteractions.SITE_SHORTCUTS_SECTION_COLLAPSED;
        this.browserProxy_.recordSearchEnginesPageHistogram(interaction);
    }
}
customElements.define(SiteShortcutsPageElement.is, SiteShortcutsPageElement);
