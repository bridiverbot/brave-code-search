import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
/**
 * A data structure used by callers to combine the results of multiple search
 * requests.
 */
export interface SearchResult {
    canceled: boolean;
    matchCount: number;
    wasClearSearch: boolean;
}
export declare function showBubble(control: Node, newResults: number, bubbles: Set<Node>, horizontallyCenter: boolean): void;
declare abstract class Task {
    protected request: SearchRequest;
    protected node: Node;
    constructor(request: SearchRequest, node: Node);
    abstract exec(): Promise<void>;
}
declare class SearchAndHighlightTask extends Task {
    exec(): Promise<void>;
}
declare class TopLevelSearchTask extends Task {
    exec(): Promise<void>;
}
declare class TaskQueue {
    private request_;
    private queues_;
    private running_;
    private onEmptyCallback_;
    constructor(request: SearchRequest);
    /** Drops all tasks. */
    reset(): void;
    addTopLevelSearchTask(task: TopLevelSearchTask): void;
    addSearchAndHighlightTask(task: SearchAndHighlightTask): void;
    /**
     * Registers a callback to be called every time the queue becomes empty.
     */
    onEmpty(onEmptyCallback: () => void): void;
    private popNextTask_;
    private consumePending_;
}
export declare class SearchRequest {
    private rawQuery_;
    private root_;
    regExp: RegExp | null;
    canceled: boolean;
    private matchCount_;
    resolver: PromiseResolver<SearchRequest>;
    queue: TaskQueue;
    private textObservers_;
    private highlights_;
    bubbles: Set<HTMLElement>;
    constructor(rawQuery: string, root: Element);
    /** @param highlights The highlight wrappers to add */
    addHighlights(highlights: HTMLElement[]): void;
    removeAllTextObservers(): void;
    removeAllHighlightsAndBubbles(): void;
    addTextObserver(textNode: Node): void;
    /**
     * Fires this search request.
     */
    start(): void;
    private generateRegExp_;
    /**
     * @return Whether this SearchRequest refers to an identical query.
     */
    isSame(rawQuery: string): boolean;
    /**
     * Updates the number of search hits found for this search request.
     */
    updateMatchCount(newMatches: number): void;
    getSearchResult(): SearchResult;
}
export declare function combineSearchResults(results: SearchResult[]): SearchResult;
export interface SearchManager {
    /**
     * @param text The text to search for.
     * @param page
     * @return A signal indicating that searching finished.
     */
    search(text: string, page: Element): Promise<SearchRequest>;
}
export declare function getSearchManager(): SearchManager;
/**
 * Sets the SearchManager singleton instance, useful for testing.
 */
export declare function setSearchManagerForTesting(searchManager: SearchManager): void;
export {};
