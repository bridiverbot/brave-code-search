// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrRippleMixin } from '//resources/cr_elements/cr_ripple/cr_ripple_mixin.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory, RelatedSearchAction } from './history_clusters.mojom-webui.js';
import { MetricsProxyImpl } from './metrics_proxy.js';
import { getCss } from './search_query.css.js';
import { getHtml } from './search_query.html.js';
const SearchQueryElementBase = CrRippleMixin(CrLitElement);
export class SearchQueryElement extends SearchQueryElementBase {
    static get is() {
        return 'search-query';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The index of the search query pill.
             */
            index: { type: Number },
            /**
             * The search query to display.
             */
            searchQuery: { type: Object },
        };
    }
    #index_accessor_storage = -1;
    //============================================================================
    // Properties
    //============================================================================
    get index() { return this.#index_accessor_storage; } // Initialized to an invalid value.
    set index(value) { this.#index_accessor_storage = value; }
    #searchQuery_accessor_storage;
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    //============================================================================
    // Event handlers
    //============================================================================
    firstUpdated() {
        this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
        this.addEventListener('pointercancel', this.onPointerCancel_.bind(this));
    }
    onAuxclick_() {
        MetricsProxyImpl.getInstance().recordRelatedSearchAction(RelatedSearchAction.kClicked, this.index);
        // Notify the parent <history-cluster> element of this event.
        this.fire('related-search-clicked');
    }
    onClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        // To record metrics.
        this.onAuxclick_();
        this.openUrl_(event);
    }
    onKeydown_(e) {
        // Disable ripple on Space.
        this.noink = e.key === ' ';
        // To be consistent with <history-list>, only handle Enter, and not Space.
        if (e.key !== 'Enter') {
            return;
        }
        this.getRipple().uiDownAction();
        // To record metrics.
        this.onAuxclick_();
        this.openUrl_(e);
        setTimeout(() => this.getRipple().uiUpAction(), 100);
    }
    onPointerDown_() {
        // Ensure ripple is visible.
        this.noink = false;
        this.ensureRipple();
    }
    onPointerCancel_() {
        this.getRipple().clear();
    }
    openUrl_(event) {
        assert(this.searchQuery);
        browserProxyFactory.getInstance().handler.openHistoryUrl(this.searchQuery.url, {
            middleButton: false,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
        });
    }
    // Overridden from CrRippleMixin
    createRipple() {
        this.rippleContainer = this.$.searchQueryLink;
        const ripple = super.createRipple();
        return ripple;
    }
}
customElements.define(SearchQueryElement.is, SearchQueryElement);
