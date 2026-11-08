export declare class SearchService {
    private searchTerms_;
    private browserProxy_;
    /**
     * @param searchText Input typed by the user into a search box.
     * @return A list of terms extracted from |searchText|.
     */
    static splitTerms(searchText: string): string[];
    /** Instructs the browser to clear all finished downloads. */
    clearAll(): void;
    /** Loads more downloads with the current search terms. */
    loadMore(): void;
    /**
     * @return Whether the user is currently searching for downloads
     *     (i.e. has a non-empty search term).
     */
    isSearching(): boolean;
    /**
     * @param searchText What to search for.
     * @return Whether |searchText| resulted in new search terms.
     */
    search(searchText: string): boolean;
    static getInstance(): SearchService;
    static setInstance(obj: SearchService): void;
}
