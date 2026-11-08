import { MetricsReporting } from '/shared/settings/privacy_page/privacy_page_browser_proxy.js';
export interface BraveDataCollectionBrowserProxy {
    getP3AEnabled: () => Promise<boolean>;
    setP3AEnabled: (value: boolean) => void;
    getStatsUsagePingEnabled: () => Promise<boolean>;
    setStatsUsagePingEnabled: (value: boolean) => void;
    setMetricsReportingEnabled: (enabled: boolean) => void;
    getMetricsReporting: () => Promise<MetricsReporting>;
}
export declare class BraveDataCollectionBrowserProxyImpl implements BraveDataCollectionBrowserProxy {
    static getInstance(): BraveDataCollectionBrowserProxy;
    getP3AEnabled(): Promise<boolean>;
    setP3AEnabled(value: boolean): void;
    getStatsUsagePingEnabled(): Promise<boolean>;
    setStatsUsagePingEnabled(value: boolean): void;
    setMetricsReportingEnabled(enabled: boolean): void;
    getMetricsReporting(): Promise<MetricsReporting>;
}
