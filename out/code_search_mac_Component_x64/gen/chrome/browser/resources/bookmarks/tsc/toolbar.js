// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_selection_overlay.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { setSearchTerm } from './actions.js';
import { BookmarksCommandManagerElement } from './command_manager.js';
import { Command, MenuSource } from './constants.js';
import { StoreClientMixinLit } from './store_client_mixin_lit.js';
import { getCss } from './toolbar.css.js';
import { getHtml } from './toolbar.html.js';
const BookmarksToolbarElementBase = StoreClientMixinLit(CrLitElement);
export class BookmarksToolbarElement extends BookmarksToolbarElementBase {
    static get is() {
        return 'bookmarks-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            sidebarWidth: { type: String },
            showSelectionOverlay: { type: Boolean },
            narrow_: {
                type: Boolean,
                reflect: true,
            },
            searchTerm_: { type: String },
            selectedItems_: { type: Object },
            globalCanEdit_: { type: Boolean },
        };
    }
    #sidebarWidth_accessor_storage = '';
    get sidebarWidth() { return this.#sidebarWidth_accessor_storage; }
    set sidebarWidth(value) { this.#sidebarWidth_accessor_storage = value; }
    #showSelectionOverlay_accessor_storage = false;
    get showSelectionOverlay() { return this.#showSelectionOverlay_accessor_storage; }
    set showSelectionOverlay(value) { this.#showSelectionOverlay_accessor_storage = value; }
    #narrow__accessor_storage = false;
    get narrow_() { return this.#narrow__accessor_storage; }
    set narrow_(value) { this.#narrow__accessor_storage = value; }
    #searchTerm__accessor_storage = '';
    get searchTerm_() { return this.#searchTerm__accessor_storage; }
    set searchTerm_(value) { this.#searchTerm__accessor_storage = value; }
    #selectedItems__accessor_storage = new Set();
    get selectedItems_() { return this.#selectedItems__accessor_storage; }
    set selectedItems_(value) { this.#selectedItems__accessor_storage = value; }
    #globalCanEdit__accessor_storage = false;
    get globalCanEdit_() { return this.#globalCanEdit__accessor_storage; }
    set globalCanEdit_(value) { this.#globalCanEdit__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.updateFromStore();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('selectedItems_') ||
            changedPrivateProperties.has('globalCanEdit_')) {
            this.showSelectionOverlay =
                this.selectedItems_.size > 1 && this.globalCanEdit_;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('sidebarWidth')) {
            this.style.setProperty('--sidebar-width', this.sidebarWidth);
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('searchTerm_')) {
            // Note: searchField getter accesses the DOM.
            this.searchField.setValue(this.searchTerm_ || '');
        }
    }
    onStateChanged(state) {
        this.searchTerm_ = state.search.term;
        this.selectedItems_ = state.selection.items;
        this.globalCanEdit_ = state.prefs.canEdit;
    }
    get searchField() {
        return this.shadowRoot.querySelector('cr-toolbar').getSearchField();
    }
    onMenuButtonOpenClick_(e) {
        this.fire('open-command-menu', {
            targetElement: e.target,
            source: MenuSource.TOOLBAR,
        });
    }
    onDeleteSelectionClick_() {
        const selection = this.selectedItems_;
        const commandManager = BookmarksCommandManagerElement.getInstance();
        assert(commandManager.canExecute(Command.DELETE, selection));
        commandManager.handle(Command.DELETE, selection);
    }
    onClearSelectedItems_() {
        const commandManager = BookmarksCommandManagerElement.getInstance();
        assert(commandManager.canExecute(Command.DESELECT_ALL, this.selectedItems_));
        commandManager.handle(Command.DESELECT_ALL, this.selectedItems_);
    }
    onSearchChanged_(e) {
        if (e.detail !== this.searchTerm_) {
            this.dispatch(setSearchTerm(e.detail));
        }
    }
    onNarrowChanged_(e) {
        this.narrow_ = e.detail.value;
    }
    canDeleteSelection_() {
        return this.showSelectionOverlay &&
            BookmarksCommandManagerElement.getInstance().canExecute(Command.DELETE, this.selectedItems_);
    }
    getItemsSelectedString_() {
        return loadTimeData.getStringF('itemsSelected', this.selectedItems_.size);
    }
}
customElements.define(BookmarksToolbarElement.is, BookmarksToolbarElement);
