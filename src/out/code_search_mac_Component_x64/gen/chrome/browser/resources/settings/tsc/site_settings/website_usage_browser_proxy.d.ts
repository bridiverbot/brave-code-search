export interface WebsiteUsageBrowserProxy {
    fetchUsageTotal(host: string): void;
    clearUsage(origin: string): void;
}
export declare class WebsiteUsageBrowserProxyImpl implements WebsiteUsageBrowserProxy {
    fetchUsageTotal(host: string): void;
    clearUsage(origin: string): void;
    static getInstance(): WebsiteUsageBrowserProxy;
    static setInstance(obj: WebsiteUsageBrowserProxy): void;
}
