export interface LocalStorageProxy {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
}
export declare class LocalStorageProxyImpl implements LocalStorageProxy {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    static getInstance(): LocalStorageProxy;
    static setInstance(obj: LocalStorageProxy): void;
}
