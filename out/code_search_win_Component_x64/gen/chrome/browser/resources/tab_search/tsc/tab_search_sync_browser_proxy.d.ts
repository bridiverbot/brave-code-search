export interface TabSearchSyncBrowserProxy {
    /**
     * Returns whether the user is signed in
     */
    getSignInState(): Promise<boolean>;
}
export declare class TabSearchSyncBrowserProxyImpl implements TabSearchSyncBrowserProxy {
    getSignInState(): Promise<boolean>;
    static getInstance(): TabSearchSyncBrowserProxy;
    static setInstance(obj: TabSearchSyncBrowserProxy): void;
}
