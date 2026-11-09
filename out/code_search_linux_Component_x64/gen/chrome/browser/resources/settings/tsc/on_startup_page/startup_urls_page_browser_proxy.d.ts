export interface StartupPageInfo {
    modelIndex: number;
    title: string;
    tooltip: string;
    url: string;
}
export interface StartupUrlsPageBrowserProxy {
    loadStartupPages(): void;
    useCurrentPages(): void;
    /** @return Whether the URL is valid. */
    validateStartupPage(url: string): Promise<boolean>;
    /**
     * @return Whether the URL was actually added, or ignored because it was
     *     invalid.
     */
    addStartupPage(url: string): Promise<boolean>;
    /**
     * @return Whether the URL was actually edited, or ignored because it was
     *     invalid.
     */
    editStartupPage(modelIndex: number, url: string): Promise<boolean>;
    removeStartupPage(index: number): void;
}
export declare class StartupUrlsPageBrowserProxyImpl implements StartupUrlsPageBrowserProxy {
    loadStartupPages(): void;
    useCurrentPages(): void;
    validateStartupPage(url: string): Promise<boolean>;
    addStartupPage(url: string): Promise<boolean>;
    editStartupPage(modelIndex: number, url: string): Promise<boolean>;
    removeStartupPage(index: number): void;
    static getInstance(): StartupUrlsPageBrowserProxy;
    static setInstance(obj: StartupUrlsPageBrowserProxy): void;
}
