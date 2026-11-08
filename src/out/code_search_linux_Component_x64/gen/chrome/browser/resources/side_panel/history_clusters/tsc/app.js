// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_components/history_clusters/clusters.js';
import 'chrome://resources/cr_components/history_embeddings/history_embeddings.js';
import 'chrome://resources/cr_components/history_embeddings/icons.html.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { browserProxyFactory } from 'chrome://resources/cr_components/history_clusters/history_clusters.mojom-webui.js';
import { browserProxyFactory as historyEmbeddingsBrowserProxyFactory } from 'chrome://resources/cr_components/history_embeddings/history_embeddings.mojom-webui.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
export class HistoryClustersAppElement extends CrLitElement {
    static get is() {
        return 'history-clusters-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enableHistoryEmbeddings_: { type: Boolean, reflect: true },
            hasHistoryEmbeddingsResults_: { type: Boolean, reflect: true },
            historyEmbeddingsDisclaimerLinkClicked_: { type: Boolean },
            nonEmbeddingsResultClicked_: { type: Boolean },
            numCharsTypedInSearch_: { type: Number },
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: { type: String },
            scrollTarget_: { type: Object },
            searchIcon_: { type: String },
        };
    }
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
    }
    #enableHistoryEmbeddings__accessor_storage = loadTimeData.getBoolean('enableHistoryEmbeddings');
    //============================================================================
    // Properties
    //============================================================================
    get enableHistoryEmbeddings_() { return this.#enableHistoryEmbeddings__accessor_storage; }
    set enableHistoryEmbeddings_(value) { this.#enableHistoryEmbeddings__accessor_storage = value; }
    #hasHistoryEmbeddingsResults__accessor_storage = false;
    get hasHistoryEmbeddingsResults_() { return this.#hasHistoryEmbeddingsResults__accessor_storage; }
    set hasHistoryEmbeddingsResults_(value) { this.#hasHistoryEmbeddingsResults__accessor_storage = value; }
    #historyEmbeddingsDisclaimerLinkClicked__accessor_storage = false;
    get historyEmbeddingsDisclaimerLinkClicked_() { return this.#historyEmbeddingsDisclaimerLinkClicked__accessor_storage; }
    set historyEmbeddingsDisclaimerLinkClicked_(value) { this.#historyEmbeddingsDisclaimerLinkClicked__accessor_storage = value; }
    #query_accessor_storage = '';
    get query() { return this.#query_accessor_storage; }
    set query(value) { this.#query_accessor_storage = value; }
    #nonEmbeddingsResultClicked__accessor_storage = false;
    get nonEmbeddingsResultClicked_() { return this.#nonEmbeddingsResultClicked__accessor_storage; }
    set nonEmbeddingsResultClicked_(value) { this.#nonEmbeddingsResultClicked__accessor_storage = value; }
    #numCharsTypedInSearch__accessor_storage = 0;
    get numCharsTypedInSearch_() { return this.#numCharsTypedInSearch__accessor_storage; }
    set numCharsTypedInSearch_(value) { this.#numCharsTypedInSearch__accessor_storage = value; }
    #scrollTarget__accessor_storage = document.documentElement;
    get scrollTarget_() { return this.#scrollTarget__accessor_storage; }
    set scrollTarget_(value) { this.#scrollTarget__accessor_storage = value; }
    #searchIcon__accessor_storage;
    get searchIcon_() { return this.#searchIcon__accessor_storage; }
    set searchIcon_(value) { this.#searchIcon__accessor_storage = value; }
    //============================================================================
    // Event Handlers
    //============================================================================
    onContextmenu_(event) {
        browserProxyFactory.getInstance().handler.showContextMenuForSearchbox(this.query, { x: event.clientX, y: event.clientY });
    }
    //============================================================================
    // Overridden methods
    //============================================================================
    connectedCallback() {
        super.connectedCallback();
        this.scrollTarget_ = this.enableHistoryEmbeddings_ ?
            this.$.embeddingsScrollContainer :
            this.$.historyClusters;
        if (this.enableHistoryEmbeddings_) {
            this.searchIcon_ = loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'history-embeddings:search-spark' :
                'history-embeddings:search-old';
        }
        // Populate the initial query from the URL parameter. Other methods are
        // mostly racy.
        const initialQuery = new URLSearchParams(window.location.search).get('initial_query');
        if (initialQuery) {
            this.$.searchbox.setValue(initialQuery);
        }
    }
    getClustersComponentClass_() {
        return this.enableHistoryEmbeddings_ ?
            '' :
            'sp-scroller sp-scroller-bottom-of-page';
    }
    onHistoryEmbeddingsDisclaimerLinkAuxclick_(e) {
        this.onHistoryEmbeddingsDisclaimerLinkClick_(e);
    }
    onHistoryEmbeddingsDisclaimerLinkClick_(e) {
        e.preventDefault();
        this.historyEmbeddingsDisclaimerLinkClicked_ = true;
        historyEmbeddingsBrowserProxyFactory.getInstance()
            .handler.openSettingsPage();
    }
    /**
     * Called when the value of the search field changes.
     */
    onSearchChanged_(event) {
        // Update the query based on the value of the search field, if necessary.
        this.query = event.detail;
        this.nonEmbeddingsResultClicked_ = false;
    }
    onHistoryEmbeddingsAnswerClick_(event) {
        this.onHistoryEmbeddingsResultClick_(event);
    }
    onHistoryEmbeddingsResultClick_(event) {
        browserProxyFactory.getInstance().handler.openHistoryUrl(event.detail.item.url, {
            middleButton: event.detail.middleButton,
            altKey: event.detail.altKey,
            ctrlKey: event.detail.ctrlKey,
            metaKey: event.detail.metaKey,
            shiftKey: event.detail.shiftKey,
        });
    }
    onAnswerContextMenu_(event) {
        this.onHistoryEmbeddingsResultContextMenu_(event);
    }
    onHistoryEmbeddingsResultContextMenu_(event) {
        event.preventDefault();
        browserProxyFactory.getInstance().handler.showContextMenuForURL(event.detail.item.url, {
            x: event.detail.x,
            y: event.detail.y,
        });
    }
    onHistoryEmbeddingsIsEmptyChanged_(e) {
        this.hasHistoryEmbeddingsResults_ = !e.detail.value;
    }
    onHistoryEmbeddingsRemoveItemClick_(e) {
        e.preventDefault();
        const historyEmbeddingsItem = e.detail;
        browserProxyFactory.getInstance().handler.removeVisitByUrlAndTime(historyEmbeddingsItem.url, historyEmbeddingsItem.lastUrlVisitTimestamp);
    }
    /**
     * Called when the browser handler forces us to change our query.
     */
    onQueryChangedByUser_(event) {
        // This will in turn fire `onSearchChanged_()`.
        if (this.$.searchbox) {
            this.$.searchbox.setValue(event.detail);
        }
    }
    onClusterRecordHistoryLinkClick_() {
        this.nonEmbeddingsResultClicked_ = true;
    }
    onSearchTermCleared_() {
        if (!this.enableHistoryEmbeddings_) {
            return;
        }
        this.numCharsTypedInSearch_ = 0;
    }
    onSearchTermNativeInput_(e) {
        if (!this.enableHistoryEmbeddings_) {
            return;
        }
        if (e.detail.inputValue.length === 0) {
            // Input was cleared (eg. backspace/delete was hit).
            this.numCharsTypedInSearch_ = 0;
        }
        else if (e.detail.e.data === e.detail.inputValue) {
            // If the inserted text matches exactly with the current value of the
            // input, that implies that the previous input value was cleared or
            // was empty to begin with. So, reset the num chars typed and count this
            // input event as 1 char typed.
            this.numCharsTypedInSearch_ = 1;
        }
        else {
            this.numCharsTypedInSearch_++;
        }
    }
    shouldShowHistoryEmbeddingsResults_() {
        if (!this.enableHistoryEmbeddings_) {
            return false;
        }
        if (!this.query) {
            return false;
        }
        return this.query.split(' ').filter(part => part.length > 0).length >=
            loadTimeData.getInteger('historyEmbeddingsSearchMinimumWordCount');
    }
}
customElements.define(HistoryClustersAppElement.is, HistoryClustersAppElement);
