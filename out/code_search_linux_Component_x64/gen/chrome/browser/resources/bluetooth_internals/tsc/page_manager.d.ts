import { Page } from './page.js';
/**
 * PageManager contains a list of root Page objects and handles "navigation"
 * by showing and hiding these pages. On initial load, PageManager can use
 * the path to open the correct hierarchy of pages.
 */
export declare class PageManager {
    /**
     * True if page is served from a dialog.
     */
    isDialog: boolean;
    /**
     * Root pages. Maps lower-case page names to the respective page object.
     */
    registeredPages: Map<string, Page>;
    /**
     * Observers will be notified when opening and closing overlays.
     */
    private observers_;
    private defaultPage_;
    constructor();
    /**
     * Initializes the complete page.
     * @param defaultPage The page to be shown when no
     *     page is specified in the path.
     */
    initialize(defaultPage: Page): void;
    /**
     * Registers new page.
     * @param page Page to register.
     */
    register(page: Page): void;
    /**
     * Unregisters an existing page.
     * @param page Page to unregister.
     */
    unregister(page: Page): void;
    /**
     * Shows the default page.
     * @param updateHistory If we should update the history after showing the page
     *     (defaults to true).
     */
    showDefaultPage(updateHistory?: boolean): void;
    /**
     * Shows a registered page.
     * @param pageName Page name.
     * @param updateHistory If we should update the history after showing the page
     *     (defaults to true).
     * @param propertyBag An optional bag of properties including replaceState (if
     *     history state should be replaced instead of pushed). hash (a hash state
     *     to attach to the page).
     */
    showPageByName(pageName: string, updateHistory?: boolean, propertyBag?: {
        replaceState?: boolean;
        hash?: string;
    }): void;
    /**
     * Returns the name of the page from the current path.
     * @return Name of the page specified by the current path.
     */
    getPageNameFromPath(): string;
    /**
     * Gets the level of the page. Root pages (e.g., BrowserOptions) are at
     * level 0.
     * @return How far down this page is from the root page.
     */
    getNestingLevel(page: Page): number;
    /**
     * Checks whether one page is an ancestor of the other page in terms of
     * subpage nesting.
     * @param potentialAncestor Potential ancestor.
     * @param potentialDescendent Potential descendent.
     * @return True if |potentialDescendent| is nested under |potentialAncestor|.
     */
    isAncestorOfPage(potentialAncestor: Page, potentialDescendent: Page): boolean;
    /**
     * Called when a page's hash changes. If the page is the topmost visible
     * page, the history state is updated.
     */
    private onPageHashChanged_;
    /**
     * @param observer The observer to register.
     */
    addObserver(observer: PageManagerObserver): void;
    /**
     * Returns the topmost visible page.
     */
    private getTopmostVisiblePage;
    /**
     * Updates the title to the title of the current page, or of the topmost
     * visible page with a non-empty title.
     */
    private updateTitle_;
    /**
     * Constructs a new path to push onto the history stack, using observers
     * to update the history.
     * @param replace If true, handlers should replace the current history event
     *     rather than create new ones.
     */
    private updateHistoryState_;
    static getInstance(): PageManager;
}
/**
 * An observer of PageManager.
 */
export interface PageManagerObserver {
    /**
     * Called when a new title should be set.
     * @param title The title to set.
     */
    updateTitle(title: string): void;
    /**
     * Called when a page is navigated to.
     * @param path The path of the page being visited.
     * @param replace If true, allow no history events to be created.
     */
    updateHistory(path: string, replace: boolean): void;
}
