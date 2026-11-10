export declare class SyncSearchManager {
    private currSearchId_;
    private resultsData_;
    private selected_;
    private selectedIndex_;
    private resultsControl_;
    private detailsControl_;
    private queryControl_;
    private statusControl_;
    /**
     * @param queryControl The <input> object of
     *     type=search where the user's query is typed.
     * @param submitControl The <button> object
     *     where the user can click to submit the query.
     * @param statusControl The <span> object display the
     *     search status.
     * @param resultsControl The <list> object which holds
     *     the list of returned results.
     * @param detailsControl The <pre> object which
     *     holds the details of the selected result.
     */
    constructor(queryControl: HTMLInputElement, submitControl: HTMLButtonElement, statusControl: HTMLElement, resultsControl: HTMLElement, detailsControl: HTMLElement);
    private startSearch_;
    private setSelected_;
    private handleKeydown_;
    private drawResultsList_;
    /**
     * Runs a search with the given query.
     * @param query The regex to do the search with.
     */
    private doSearch_;
    private displayResults_;
    setDataForTest(data: object[]): void;
}
/**
 * Decorates the quick search controls
 *
 * @param quickLinkArray The <a> object which
 *     will be given a link to a quick filter option.
 * @param submitControl
 * @param queryControl The <input> object of type=search where user's query is
 *     typed.
 */
export declare function decorateQuickQueryControls(quickLinkArray: NodeListOf<HTMLElement>, submitControl: HTMLButtonElement, queryControl: HTMLInputElement): void;
