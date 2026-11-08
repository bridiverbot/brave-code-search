// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_components/history_embeddings/icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_selection_overlay.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './history_toolbar.css.js';
import { getHtml } from './history_toolbar.html.js';
import { TABBED_PAGES } from './router.js';
export class HistoryToolbarElement extends CrLitElement {
    static get is() {
        return 'history-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // Number of history items currently selected.
            // TODO(calamity): bind this to
            // listContainer.selectedItem.selectedPaths.length.
            count: { type: Number },
            // True if 1 or more history items are selected. When this value changes
            // the background colour changes.
            itemsSelected_: { type: Boolean },
            pendingDelete: { type: Boolean },
            // The most recent term entered in the search field. Updated incrementally
            // as the user types.
            searchTerm: { type: String },
            selectedPage: { type: String },
            // True if the backend is processing and a spinner should be shown in the
            // toolbar.
            spinnerActive: { type: Boolean },
            hasDrawer: {
                type: Boolean,
                reflect: true,
            },
            hasMoreResults: { type: Boolean },
            querying: { type: Boolean },
            queryInfo: { type: Object },
            // Whether to show the menu promo (a tooltip that points at the menu
            // button
            // in narrow mode).
            showMenuPromo: { type: Boolean },
        };
    }
    #count_accessor_storage = 0;
    get count() { return this.#count_accessor_storage; }
    set count(value) { this.#count_accessor_storage = value; }
    #pendingDelete_accessor_storage = false;
    get pendingDelete() { return this.#pendingDelete_accessor_storage; }
    set pendingDelete(value) { this.#pendingDelete_accessor_storage = value; }
    #searchTerm_accessor_storage = '';
    get searchTerm() { return this.#searchTerm_accessor_storage; }
    set searchTerm(value) { this.#searchTerm_accessor_storage = value; }
    #selectedPage_accessor_storage = '';
    get selectedPage() { return this.#selectedPage_accessor_storage; }
    set selectedPage(value) { this.#selectedPage_accessor_storage = value; }
    #hasDrawer_accessor_storage = false;
    get hasDrawer() { return this.#hasDrawer_accessor_storage; }
    set hasDrawer(value) { this.#hasDrawer_accessor_storage = value; }
    #hasMoreResults_accessor_storage = false;
    get hasMoreResults() { return this.#hasMoreResults_accessor_storage; }
    set hasMoreResults(value) { this.#hasMoreResults_accessor_storage = value; }
    #querying_accessor_storage = false;
    get querying() { return this.#querying_accessor_storage; }
    set querying(value) { this.#querying_accessor_storage = value; }
    #queryInfo_accessor_storage = null;
    get queryInfo() { return this.#queryInfo_accessor_storage; }
    set queryInfo(value) { this.#queryInfo_accessor_storage = value; }
    #spinnerActive_accessor_storage = false;
    get spinnerActive() { return this.#spinnerActive_accessor_storage; }
    set spinnerActive(value) { this.#spinnerActive_accessor_storage = value; }
    #showMenuPromo_accessor_storage = false;
    get showMenuPromo() { return this.#showMenuPromo_accessor_storage; }
    set showMenuPromo(value) { this.#showMenuPromo_accessor_storage = value; }
    #itemsSelected__accessor_storage = false;
    get itemsSelected_() { return this.#itemsSelected__accessor_storage; }
    set itemsSelected_(value) { this.#itemsSelected__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('count')) {
            this.changeToolbarView_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Querying and modifying the DOM should happen in updated().
        if (changedProperties.has('searchTerm')) {
            this.searchTermChanged_();
        }
    }
    get searchField() {
        return this.$.mainToolbar.getSearchField();
    }
    onDeleteSelectedItemsClick_() {
        this.deleteSelectedItems();
    }
    deleteSelectedItems() {
        this.fire('delete-selected');
    }
    onOpenSelectedItemsClick_() {
        this.openSelectedItems();
    }
    openSelectedItems() {
        this.fire('open-selected');
    }
    onClearSelectedItems_() {
        this.clearSelectedItems();
    }
    clearSelectedItems() {
        this.fire('unselect-all');
        getAnnouncerInstance().announce(loadTimeData.getString('itemsUnselected'));
    }
    /**
     * Changes the toolbar background color depending on whether any history items
     * are currently selected.
     */
    changeToolbarView_() {
        this.itemsSelected_ = this.count > 0;
    }
    /**
     * When changing the search term externally, update the search field to
     * reflect the new search term.
     */
    searchTermChanged_() {
        if (this.searchField.getValue() !== this.searchTerm) {
            this.searchField.showAndFocus();
            this.searchField.setValue(this.searchTerm);
        }
    }
    onSearchChanged_(event) {
        this.fire('change-query', { search: event.detail, /* Prevent updating after date. */ after: null });
    }
    numberOfItemsSelected_(count) {
        return count > 0 ? loadTimeData.getStringF('itemsSelected', count) : '';
    }
    computeSearchIconOverride_() {
        if (loadTimeData.getBoolean('enableHistoryEmbeddings') &&
            TABBED_PAGES.includes(this.selectedPage)) {
            return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'history-embeddings:search-spark' :
                'history-embeddings:search-old';
        }
        return undefined;
    }
    computeSearchInputAriaDescriptionOverride_() {
        if (loadTimeData.getBoolean('enableHistoryEmbeddings') &&
            TABBED_PAGES.includes(this.selectedPage)) {
            return loadTimeData.getString('historyEmbeddingsDisclaimer');
        }
        return undefined;
    }
    computeSearchPrompt_() {
        if (loadTimeData.getBoolean('enableHistoryEmbeddings') &&
            TABBED_PAGES.includes(this.selectedPage)) {
            if (loadTimeData.getBoolean('enableHistoryEmbeddingsAnswers')) {
                const possiblePrompts = [
                    'historyEmbeddingsSearchPrompt',
                    'historyEmbeddingsAnswersSearchAlternativePrompt1',
                    'historyEmbeddingsAnswersSearchAlternativePrompt2',
                    'historyEmbeddingsAnswersSearchAlternativePrompt3',
                    'historyEmbeddingsAnswersSearchAlternativePrompt4',
                ];
                const randomIndex = Math.floor(Math.random() * possiblePrompts.length);
                return loadTimeData.getString(possiblePrompts[randomIndex]);
            }
            return loadTimeData.getString('historyEmbeddingsSearchPrompt');
        }
        return loadTimeData.getString('searchPrompt');
    }
}
customElements.define(HistoryToolbarElement.is, HistoryToolbarElement);
