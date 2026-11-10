import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { SearchParams } from './structured_utils.js';
export declare class StructuredMetricsInternalsAppElement extends CustomElement {
    static get is(): string;
    static get template(): string | TrustedHTML;
    private browserProxy_;
    private summaryIntervalId_;
    initPromise: Promise<void>;
    textSearch: HTMLInputElement;
    searchQuery: SearchParams | null;
    searchError: boolean;
    constructor();
    disconnectedCallback(): void;
    private init_;
    /**
     * Fetches summary information of the Structured Metrics service and renders
     * it.
     */
    private updateStructuredMetricsSummary_;
    /**
     * Fetches all events currently recorded by the Structured Metrics Service and
     * renders them. It an event has been uploaded then it will not be shown
     * again. This only shows Events recorded in Chromium. Platform2 events are
     * not supported yet.
     */
    private updateStructuredMetricsEvents_;
    /**
     * Initializes search params from the URL.
     */
    private initSearchParams_;
    /**
     * Updates the windows search url.
     */
    private updateSearchCriteria_;
    /**
     * Sanitize the search format into a valid format for the URL.
     */
    private sanitizeSearchToUrl_;
    /**
     * Sanitize the URL search parameters into the search format.
     */
    private sanitizeUrlToSearch_;
    /**
     * Parse search format into an object.
     *
     * The format is a space separated lists of "key:value" pairs. Currently, a
     * single search term is not supported.
     */
    private parseSearchString_;
    /**
     * Hides the search error message.
     */
    private hideSearchErrorMessage_;
    /**
     * Sets and shows the error message.
     */
    private setSearchErrorMessage_;
}
declare global {
    interface HTMLElementTagNameMap {
        'structured-metrics-internals-app': StructuredMetricsInternalsAppElement;
    }
}
