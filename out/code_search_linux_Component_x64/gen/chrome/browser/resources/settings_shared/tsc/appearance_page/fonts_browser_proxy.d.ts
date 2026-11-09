export interface FontsData {
    fontList: Array<[string, string, string]>;
}
export interface FontsBrowserProxy {
    fetchFontsData(): Promise<FontsData>;
}
export declare class FontsBrowserProxyImpl implements FontsBrowserProxy {
    fetchFontsData(): Promise<FontsData>;
    static getInstance(): FontsBrowserProxy;
    static setInstance(obj: FontsBrowserProxy): void;
}
