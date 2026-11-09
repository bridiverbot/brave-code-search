/** Abstracts some builtin JS functions to mock them in tests. */
export declare class WindowProxy {
    static getInstance(): WindowProxy;
    static setInstance(newInstance: WindowProxy): void;
    /** Returns `window.location.href` wrapped in a URL object. */
    get url(): URL;
}
