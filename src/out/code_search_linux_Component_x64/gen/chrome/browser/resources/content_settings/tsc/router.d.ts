export interface RouteObserver {
    onRouteChanged(pageName: string | null): void;
}
export declare class Router {
    private observers;
    private currentPage;
    private constructor();
    navigateTo(pageName: string): void;
    processInitialRoute(defaultPage: string): void;
    addObserver(observer: RouteObserver): void;
    removeObserver(observer: RouteObserver): void;
    private getRouteFromUrl;
    private setRoute;
    static getInstance(): Router;
    static resetInstanceForTesting(): void;
}
