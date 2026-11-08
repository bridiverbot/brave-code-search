// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrRouter } from 'chrome://resources/js/cr_router.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
// All valid pages.
// TODO(crbug.com/40069898): Change this to an enum and use that type for holding
//  these values for better type check when `loadTimeData` is no longer needed.
export const Page = {
    HISTORY: 'history',
    HISTORY_CLUSTERS: 'grouped',
    SYNCED_TABS: 'syncedTabs',
    PRODUCT_SPECIFICATIONS_LISTS: 'comparisonTables',
};
// The ids of pages with corresponding tabs in the order of their tab indices.
export const TABBED_PAGES = [Page.HISTORY, Page.HISTORY_CLUSTERS];
export class HistoryRouterElement extends CrLitElement {
    static get is() {
        return 'history-router';
    }
    static get template() {
        return null;
    }
    static get properties() {
        return {
            lastSelectedTab: {
                type: Number,
            },
            selectedPage: {
                type: String,
                notify: true,
            },
            queryState: {
                type: Object,
            },
        };
    }
    #lastSelectedTab_accessor_storage = -1;
    get lastSelectedTab() { return this.#lastSelectedTab_accessor_storage; }
    set lastSelectedTab(value) { this.#lastSelectedTab_accessor_storage = value; }
    #selectedPage_accessor_storage = '';
    get selectedPage() { return this.#selectedPage_accessor_storage; }
    set selectedPage(value) { this.#selectedPage_accessor_storage = value; }
    #queryState_accessor_storage = {
        incremental: false,
        querying: false,
        searchTerm: '',
        after: null,
        includeUserVisits: true,
        includeActorVisits: true,
        clientIds: [],
    };
    get queryState() { return this.#queryState_accessor_storage; }
    set queryState(value) { this.#queryState_accessor_storage = value; }
    timeRangeStart;
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        // Redirect legacy search URLs to URLs compatible with History.
        if (window.location.hash) {
            window.location.href = window.location.href.split('#')[0] + '?' +
                window.location.hash.substr(1);
        }
        const router = CrRouter.getInstance();
        this.onPathChanged_(router.getPath());
        this.onQueryParamsChanged_(router.getQueryParams());
        this.eventTracker_.add(router, 'cr-router-path-changed', (e) => this.onPathChanged_(e.detail));
        this.eventTracker_.add(router, 'cr-router-query-params-changed', (e) => this.onQueryParamsChanged_(e.detail));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if ((changedProperties.has('queryState') &&
            changedProperties.get('queryState')) ||
            (changedProperties.has('selectedPage') &&
                changedProperties.get('selectedPage'))) {
            this.serializeUrl();
        }
    }
    /**
     * Write all relevant page state to the URL.
     */
    serializeUrl() {
        let path = this.selectedPage;
        if (path === Page.HISTORY) {
            path = '';
        }
        const router = CrRouter.getInstance();
        router.setPath('/' + path);
        if (!this.queryState) {
            return;
        }
        const queryParams = new URLSearchParams();
        if (this.queryState.searchTerm) {
            queryParams.set('q', this.queryState.searchTerm);
        }
        if (this.queryState.after) {
            queryParams.set('after', this.queryState.after);
        }
        router.setQueryParams(queryParams);
    }
    onPathChanged_(newPath) {
        const sections = newPath.substr(1).split('/');
        const page = sections[0] ||
            (window.location.search ? 'history' :
                TABBED_PAGES[this.lastSelectedTab]);
        // TODO(b/338245900): This is kind of nasty. Without cr-tabs to constrain
        //   `selectedPage`, this can be set to an arbitrary value from the URL.
        //   To fix this, we should constrain the selected pages to an actual enum.
        this.selectedPage = page;
    }
    onQueryParamsChanged_(newParams) {
        const changes = { search: '' };
        changes.search = newParams.get('q') || '';
        let after = '';
        const afterFromParams = newParams.get('after');
        if (!!afterFromParams && afterFromParams.match(/^\d{4}-\d{2}-\d{2}$/)) {
            const afterAsDate = new Date(afterFromParams);
            if (!isNaN(afterAsDate.getTime())) {
                after = afterFromParams;
            }
        }
        changes.after = after;
        this.fire('change-query', changes);
    }
}
customElements.define(HistoryRouterElement.is, HistoryRouterElement);
