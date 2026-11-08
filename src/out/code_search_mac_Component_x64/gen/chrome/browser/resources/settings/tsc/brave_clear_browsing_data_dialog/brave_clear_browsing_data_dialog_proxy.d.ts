export interface BraveClearBrowsingDataDialogBrowserProxy {
    getBraveRewardsEnabled: () => Promise<boolean>;
    clearBraveAdsData: () => Promise<boolean>;
}
export declare class BraveClearBrowsingDataDialogBrowserProxyImpl implements BraveClearBrowsingDataDialogBrowserProxy {
    getBraveRewardsEnabled(): Promise<boolean>;
    clearBraveAdsData(): Promise<boolean>;
    static getInstance(): BraveClearBrowsingDataDialogBrowserProxyImpl;
}
