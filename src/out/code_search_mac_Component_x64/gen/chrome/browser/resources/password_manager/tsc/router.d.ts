import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * The different pages that can be shown at a time.
 */
export declare enum Page {
    PASSWORDS = "passwords",
    CHECKUP = "checkup",
    SETTINGS = "settings",
    CHECKUP_DETAILS = "checkup-details",
    PASSWORD_DETAILS = "password-details",
    PASSWORD_CHANGE = "password-change"
}
/**
 * The different checkup sub-pages that can be shown at a time.
 */
export declare enum CheckupSubpage {
    COMPROMISED = "compromised",
    REUSED = "reused",
    WEAK = "weak"
}
export declare enum UrlParam {
    SEARCH_TERM = "q",
    START_CHECK = "start",
    START_IMPORT = "import"
}
export declare class Route {
    constructor(page: Page, queryParameters?: URLSearchParams, details?: unknown);
    page: Page;
    queryParameters: URLSearchParams;
    details?: unknown;
    path(): string;
}
/**
 * A helper object to manage in-page navigations. Since the Password Manager
 * page needs to support different urls for different subpages (like the checkup
 * page), we use this object to manage the history and url conversions.
 */
export declare class Router {
    static getInstance(): Router;
    private currentRoute_;
    private previousRoute_;
    private routeObservers_;
    constructor();
    addObserver(observer: RouteObserverMixinInterface): void;
    removeObserver(observer: RouteObserverMixinInterface): void;
    get currentRoute(): Route;
    get previousRoute(): Route | null;
    /**
     * Navigates to a page and pushes a new history entry.
     */
    navigateTo(page: Page, details?: unknown, params?: URLSearchParams): void;
    /**
     * Updates the URL parameters of the current route via replacing the
     * window history state. This changes location.search but doesn't
     * change the page itself, hence does not push a new route history entry.
     * Notifies routeObservers_.
     */
    updateRouterParams(params: URLSearchParams): void;
    private notifyObservers_;
    /**
     * Helper function to set the current page and notify all observers.
     */
    private processRoute_;
}
type Constructor<T> = new (...args: any[]) => T;
export declare const RouteObserverMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<RouteObserverMixinInterface>;
export interface RouteObserverMixinInterface {
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
export {};
