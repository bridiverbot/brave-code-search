export declare enum LogLevel {
    DEBUG = "Debug",
    EVENT = "Event",
    USER = "User",
    ERROR = "Error"
}
export interface LogEntry {
    event: string;
    file: string;
    level: LogLevel;
    timestampshort: string;
    timestamp: string;
    type: string;
}
export interface BrowserProxy {
    getLog(): Promise<string>;
    clearLog(): void;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    getLog(): Promise<string>;
    clearLog(): void;
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
