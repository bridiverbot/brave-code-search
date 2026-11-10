import type { QueryResult, QueryState } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare function convertDateToQueryValue(date: Date): string;
export type ChangeQueryEvent = CustomEvent<{
    search: string | null;
    after: string | null;
    includeUserVisits?: boolean;
    includeActorVisits?: boolean;
    clientIds?: string[];
}>;
declare global {
    interface HTMLElementEventMap {
        'change-query': ChangeQueryEvent;
    }
}
export declare class HistoryQueryManagerElement extends CrLitElement {
    static get is(): string;
    static get template(): null;
    static get properties(): {
        queryState: {
            type: ObjectConstructor;
            notify: boolean;
        };
        queryResult: {
            type: ObjectConstructor;
        };
    };
    accessor queryState: QueryState;
    accessor queryResult: QueryResult;
    private eventTracker_;
    /**
     * When this is non-null, that means there's a QueryResult that's pending
     * metrics logging since this debouncer timestamp. The debouncing is needed
     * because queries are issued as the user types, and we want to skip logging
     * these trivial queries the user typed through.
     */
    private resultPendingMetricsTimestamp_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    initialize(): void;
    private queryHistory_;
    private onChangeQuery_;
    private onQueryHistory_;
    /**
     * @param results List of results with information about the query.
     */
    private onQueryResult_;
    private searchTermChanged_;
    /**
     * Flushes any pending query result metric waiting to be logged.
     */
    private flushDebouncedQueryResultMetric_;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-query-manager': HistoryQueryManagerElement;
    }
}
