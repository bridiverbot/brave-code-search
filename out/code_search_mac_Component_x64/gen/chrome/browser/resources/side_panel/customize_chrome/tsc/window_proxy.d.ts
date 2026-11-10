declare global {
    interface Window {
        requestIdleCallback(callback: () => void, options?: {
            timeout: number;
        }): void;
    }
}
/** Abstracts some builtin JS functions to mock them in tests. */
export declare class WindowProxy {
    static getInstance(): WindowProxy;
    static setInstance(newInstance: WindowProxy): void;
    now(): number;
    get onLine(): boolean;
}
