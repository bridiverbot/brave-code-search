/**
 * The different pages that can be shown at a time.
 * Note: This must remain in sync with the page ids in manager.html!
 */
export declare enum Page {
    LIST = "itemsList",
    DETAILS = "details-view",
    ACTIVITY_LOG = "activity-log",
    SITE_PERMISSIONS = "site-permissions",
    SITE_PERMISSIONS_ALL_SITES = "site-permissions-by-site",
    SHORTCUTS = "keyboard-shortcuts",
    ERRORS = "error-page"
}
export declare enum Dialog {
    OPTIONS = "options"
}
export interface PageState {
    page: Page;
    extensionId?: string;
    subpage?: Dialog;
}
type Listener = (pageState: PageState) => void;
/**
 * A helper object to manage in-page navigations. Since the extensions page
 * needs to support different urls for different subpages (like the details
 * page), we use this object to manage the history and url conversions.
 */
export declare class NavigationHelper {
    private nextListenerId_;
    private listeners_;
    private previousPage_?;
    constructor();
    private get currentPath_();
    /**
     * Going to /configureCommands and /shortcuts should land you on /shortcuts,
     * and going to /sitePermissions should land you on /sitePermissions.
     * These are the only three supported routes, so all other cases will redirect
     * you to root path if not already on it.
     */
    private processRoute_;
    /**
     * @return The page that should be displayed for the current URL.
     */
    getCurrentPage(): PageState;
    /**
     * Function to add subscribers.
     * @param {!function(!PageState)} listener
     * @return A numerical ID to be used for removing the listener.
     */
    addListener(listener: Listener): number;
    /**
     * Remove a previously registered listener.
     * @return Whether a listener with the given ID was actually found and
     *   removed.
     */
    removeListener(id: number): boolean;
    /**
     * Function to notify subscribers.
     */
    private notifyRouteChanged_;
    /**
     * @param newPage the page to navigate to.
     */
    navigateTo(newPage: PageState): void;
    /**
     * @param newPage the page to replace the current page with.
     */
    replaceWith(newPage: PageState): void;
    /**
     * Called when a page changes, and pushes state to history to reflect it.
     */
    updateHistory(entry: PageState, replaceState: boolean): void;
}
export declare const navigation: NavigationHelper;
export {};
