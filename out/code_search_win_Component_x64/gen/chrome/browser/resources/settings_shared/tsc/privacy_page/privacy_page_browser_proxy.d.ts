export interface MetricsReporting {
    enabled: boolean;
    managed: boolean;
}
export interface PrivacyPageBrowserProxy {
    getMetricsReporting(): Promise<MetricsReporting>;
    setMetricsReportingEnabled(enabled: boolean): void;
}
export declare class PrivacyPageBrowserProxyImpl implements PrivacyPageBrowserProxy {
    getMetricsReporting(): Promise<MetricsReporting>;
    setMetricsReportingEnabled(enabled: boolean): void;
    static getInstance(): PrivacyPageBrowserProxy;
    static setInstance(obj: PrivacyPageBrowserProxy): void;
}
