import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * The different pages that can be shown.
 */
export declare enum Page {
    LOCAL_CERTS = "localcerts",
    CLIENT_CERTS = "clientcerts",
    CRS_CERTS = "crscerts",
    ADMIN_CERTS = "localcerts/admincerts",
    PLATFORM_CERTS = "localcerts/platformcerts",
    USER_CERTS = "localcerts/usercerts",
    PLATFORM_CLIENT_CERTS = "clientcerts/platformclientcerts"
}
export declare class Route {
    constructor(page: Page);
    page: Page;
    path(): string;
    isSubpage(): boolean;
}
/**
 * A helper object to manage in-page navigations.
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
    navigateTo(page: Page): void;
    private notifyObservers_;
    static getPageFromPath(path: string): Page | undefined;
    /**
     * Helper function to set the current page from the path and notify all
     * observers.
     */
    private processRoute_;
}
type Constructor<T> = new (...args: any[]) => T;
export declare const RouteObserverMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<RouteObserverMixinInterface>;
export interface RouteObserverMixinInterface {
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
export {};
