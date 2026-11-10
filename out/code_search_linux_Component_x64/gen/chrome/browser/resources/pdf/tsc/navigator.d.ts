import type { BrowserApi } from './browser_api.js';
import type { OpenPdfParamsParser } from './open_pdf_params_parser.js';
import type { Viewport } from './viewport.js';
export interface NavigatorDelegate {
    /**
     * Called when navigation should happen in the current tab.
     */
    navigateInCurrentTab(url: string): void;
    /**
     * Called when navigation should happen in the new tab.
     * @param active Indicates if the new tab should be the active tab.
     */
    navigateInNewTab(url: string, active: boolean): void;
    /**
     * Called when navigation should happen in the new window.
     */
    navigateInNewWindow(url: string): void;
    isAllowedLocalFileAccess(url: string): Promise<boolean>;
}
export declare class NavigatorDelegateImpl implements NavigatorDelegate {
    private browserApi_;
    constructor(browserApi: BrowserApi);
    navigateInCurrentTab(url: string): void;
    navigateInNewTab(url: string, active: boolean): void;
    navigateInNewWindow(url: string): void;
    isAllowedLocalFileAccess(url: string): Promise<boolean>;
}
export interface PdfNavigator {
    /**
     * Function to navigate to the given URL. This might involve navigating
     * within the PDF page or opening a new url (in the same tab or a new tab).
     * @param disposition The window open disposition when navigating to the new
     *     URL.
     * @return When navigation has completed (used for testing).
     */
    navigate(urlString: string, disposition: WindowOpenDisposition): Promise<void>;
}
export declare class PdfNavigatorImpl implements PdfNavigator {
    private originalUrl_;
    private viewport_;
    private paramsParser_;
    private navigatorDelegate_;
    /**
     * @param originalUrl The original page URL.
     * @param viewport The viewport info of the page.
     * @param paramsParser The object for URL parsing.
     * @param navigatorDelegate The object with callback functions that get called
     *    when navigation happens in the current tab, a new tab, and a new window.
     */
    constructor(originalUrl: string, viewport: Viewport, paramsParser: OpenPdfParamsParser, navigatorDelegate: NavigatorDelegate);
    /**
     * Function to navigate to the given URL. This might involve navigating
     * within the PDF page or opening a new url (in the same tab or a new tab).
     * @param disposition The window open disposition when navigating to the new
     *     URL.
     * @return When navigation has completed (used for testing).
     */
    navigate(urlString: string, disposition: WindowOpenDisposition): Promise<void>;
    /**
     * Called when the viewport position is received.
     * @param viewportPosition Dictionary containing the viewport
     *    position.
     */
    private onViewportReceived_;
    /**
     * Checks if the URL starts with a scheme and is not just a scheme.
     */
    private isValidUrl_;
    /**
     * Attempt to figure out what a URL is when there is no scheme.
     * @return The URL with a scheme or the original URL if it is not
     *     possible to determine the scheme.
     */
    private guessUrlWithoutScheme_;
}
/**
 * Represents options when navigating to a new url. C++ counterpart of
 * the enum is in ui/base/window_open_disposition.h. This enum represents
 * the only values that are passed from Plugin.
 */
export declare enum WindowOpenDisposition {
    CURRENT_TAB = 1,
    NEW_FOREGROUND_TAB = 3,
    NEW_BACKGROUND_TAB = 4,
    NEW_WINDOW = 6,
    SAVE_TO_DISK = 7
}
