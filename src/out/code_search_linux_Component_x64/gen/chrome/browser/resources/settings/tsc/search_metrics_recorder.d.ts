import type { Route, RouteObserverMixinInterface } from './router.js';
/**
 * How long the 'search' URL parameter needs to stay unchanged before the query
 * it carries counts as submitted. The parameter is updated as the user types,
 * so a single query can arrive here as a sequence of prefixes. Metrics only
 * care about the query the user settled on, so those prefixes are collapsed
 * into one submitted query.
 */
export declare const QUERY_SUBMITTED_DELAY_MS: number;
/**
 * Dwell times longer than this are assumed to belong to an abandoned session
 * (for example a Settings tab left open in the background), and are dropped.
 */
export declare const MAX_DWELL_TIME_MS: number;
export declare class SearchMetricsRecorder implements RouteObserverMixinInterface {
    private metricsBrowserProxy_;
    /** Last 'search' query parameter seen in the URL. */
    private currentQuery_;
    /** Whether a search session is currently being tracked. */
    private sessionActive_;
    private querySubmittedTimerId_;
    /** Query whose Settings.Search.HasResults sample is still pending. */
    private pendingHasResultsQuery_;
    /** Results of the most recently completed search request. */
    private lastResult_;
    /** Time at which the user last interacted with a search result. */
    private resultInteractionTime_;
    /** Whether the recorder is currently observing search activity. */
    private running_;
    private eventTracker_;
    start(): void;
    stop(): void;
    /**
     * Called when a search request initiated by `settings-main` completed.
     */
    onSearchFinished(query: string, matchCount: number): void;
    /**
     * Called when the user interacted with one of the search results, either by
     * opening it or by changing its value in place.
     */
    onSearchResultInteraction(): void;
    currentRouteChanged(newRoute: Route): void;
    private startOrUpdateSession_;
    private endSession_;
    private endSessionState_;
    private recordQuerySubmitted_;
    private maybeRecordHasResults_;
    /**
     * Records how long the user spent on a search result before coming back to
     * the search box, if applicable.
     */
    private recordDwellTime_;
    private clearQuerySubmittedTimer_;
}
