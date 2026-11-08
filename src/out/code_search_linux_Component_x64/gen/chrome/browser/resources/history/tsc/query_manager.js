// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { HistoryEmbeddingsUserActions, QUERY_RESULT_MINIMUM_AGE } from 'chrome://resources/cr_components/history/constants.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { RESULTS_PER_PAGE } from './constants.js';
// Converts a JS Date object to a human readable string in the format of
// YYYY-MM-DD for the query.
export function convertDateToQueryValue(date) {
    const fullYear = date.getFullYear();
    const month = date.getMonth() + 1; /* Month is 0-indexed. */
    const day = date.getDate();
    function twoDigits(value) {
        return value >= 10 ? `${value}` : `0${value}`;
    }
    return `${fullYear}-${twoDigits(month)}-${twoDigits(day)}`;
}
export class HistoryQueryManagerElement extends CrLitElement {
    static get is() {
        return 'history-query-manager';
    }
    static get template() {
        return null;
    }
    static get properties() {
        return {
            queryState: {
                type: Object,
                notify: true,
            },
            queryResult: {
                type: Object,
            },
        };
    }
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
    #queryResult_accessor_storage = {
        info: null,
        value: [],
    };
    get queryResult() { return this.#queryResult_accessor_storage; }
    set queryResult(value) { this.#queryResult_accessor_storage = value; }
    eventTracker_ = new EventTracker();
    /**
     * When this is non-null, that means there's a QueryResult that's pending
     * metrics logging since this debouncer timestamp. The debouncing is needed
     * because queries are issued as the user types, and we want to skip logging
     * these trivial queries the user typed through.
     */
    resultPendingMetricsTimestamp_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(document, 'change-query', this.onChangeQuery_.bind(this));
        this.eventTracker_.add(document, 'query-history', this.onQueryHistory_.bind(this));
        this.eventTracker_.add(document, 'visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.flushDebouncedQueryResultMetric_();
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.flushDebouncedQueryResultMetric_();
        this.eventTracker_.removeAll();
    }
    initialize() {
        this.queryHistory_(false /* incremental */);
    }
    queryHistory_(incremental) {
        this.queryState = {
            ...this.queryState,
            querying: true,
            incremental: incremental,
        };
        let afterTimestamp;
        if (loadTimeData.getBoolean('enableHistoryEmbeddings') &&
            this.queryState.after) {
            const afterDate = new Date(this.queryState.after);
            afterDate.setHours(0, 0, 0, 0);
            afterTimestamp = afterDate.getTime();
        }
        const browserProxy = BrowserProxyImpl.getInstance();
        const promise = incremental ?
            browserProxy.handler.queryHistoryContinuation() :
            browserProxy.handler.queryHistory(this.queryState.searchTerm, RESULTS_PER_PAGE, afterTimestamp ? afterTimestamp : null, this.queryState.includeUserVisits, this.queryState.includeActorVisits, this.queryState.clientIds);
        // Ignore rejected (cancelled) queries.
        promise.then((result) => this.onQueryResult_(result.results), () => { });
    }
    onChangeQuery_(e) {
        const changes = e.detail;
        let needsUpdate = false;
        if (changes.search !== null &&
            changes.search !== this.queryState.searchTerm) {
            this.queryState = { ...this.queryState, searchTerm: changes.search };
            this.searchTermChanged_();
            needsUpdate = true;
        }
        if (loadTimeData.getBoolean('enableHistoryEmbeddings') &&
            changes.after !== null && changes.after !== this.queryState.after &&
            (Boolean(changes.after) || Boolean(this.queryState.after))) {
            this.queryState = { ...this.queryState, after: changes.after };
            needsUpdate = true;
        }
        if (changes.includeUserVisits !== undefined &&
            changes.includeUserVisits !== this.queryState.includeUserVisits) {
            this.queryState = {
                ...this.queryState,
                includeUserVisits: changes.includeUserVisits,
            };
            needsUpdate = true;
        }
        if (changes.includeActorVisits !== undefined &&
            changes.includeActorVisits !== this.queryState.includeActorVisits) {
            this.queryState = {
                ...this.queryState,
                includeActorVisits: changes.includeActorVisits,
            };
            needsUpdate = true;
        }
        if (changes.clientIds !== undefined) {
            const newClientIds = changes.clientIds;
            const oldClientIds = this.queryState.clientIds;
            const changed = newClientIds.length !== oldClientIds.length ||
                newClientIds.some((id, i) => id !== oldClientIds[i]);
            if (changed) {
                this.queryState = {
                    ...this.queryState,
                    clientIds: newClientIds,
                };
                needsUpdate = true;
            }
        }
        if (needsUpdate) {
            this.queryHistory_(false);
        }
    }
    onQueryHistory_(e) {
        this.queryHistory_(e.detail);
        return false;
    }
    /**
     * @param results List of results with information about the query.
     */
    onQueryResult_(results) {
        this.queryState = { ...this.queryState, querying: false };
        this.queryResult = {
            ...this.queryResult,
            info: results.info,
            value: results.value,
        };
        this.fire('query-finished', { result: this.queryResult });
    }
    searchTermChanged_() {
        this.flushDebouncedQueryResultMetric_();
        // TODO(tsergeant): Ignore incremental searches in this metric.
        if (this.queryState.searchTerm) {
            BrowserProxyImpl.getInstance().recordAction('Search');
            this.resultPendingMetricsTimestamp_ = performance.now();
        }
    }
    /**
     * Flushes any pending query result metric waiting to be logged.
     */
    flushDebouncedQueryResultMetric_() {
        if (this.resultPendingMetricsTimestamp_ &&
            (performance.now() - this.resultPendingMetricsTimestamp_) >=
                QUERY_RESULT_MINIMUM_AGE) {
            BrowserProxyImpl.getInstance().recordHistogram('History.Embeddings.UserActions', HistoryEmbeddingsUserActions.NON_EMPTY_QUERY_HISTORY_SEARCH, HistoryEmbeddingsUserActions.END);
        }
        // Clear this regardless if it was recorded or not, because we don't want
        // to "try again" to record the same query.
        this.resultPendingMetricsTimestamp_ = null;
    }
}
customElements.define(HistoryQueryManagerElement.is, HistoryQueryManagerElement);
