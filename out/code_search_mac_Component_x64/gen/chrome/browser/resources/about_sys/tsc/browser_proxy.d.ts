export interface SystemLog {
    statName: string;
    statValue: string;
}
export interface BrowserProxy {
    requestSystemInfo(): Promise<SystemLog[]>;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    requestSystemInfo(): Promise<SystemLog[]>;
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
