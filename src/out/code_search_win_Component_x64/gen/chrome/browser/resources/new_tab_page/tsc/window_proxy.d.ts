/** Abstracts some builtin JS functions to mock them in tests. */
export declare class WindowProxy {
    static getInstance(): WindowProxy;
    static setInstance(newInstance: WindowProxy): void;
    navigate(href: string): void;
    open(url: string): void;
    setTimeout(callback: () => void, duration: number): number;
    clearTimeout(id: number | null): void;
    random(): number;
    createIframeSrc(src: string): string;
    matchMedia(query: string): MediaQueryList;
    now(): number;
    /** Returns promise that resolves when lazy rendering should be started. */
    waitForLazyRender(): Promise<void>;
    /**
     * Adds a <script> tag that holds the lazy loaded code, if not already
     * added, and returns a promise that resolves when it has loaded.
     */
    ensureLazyLoaded(): Promise<void>;
    /**
     * Posts |message| on |target| at |targetOrigin| (or on its content window if
     * |target| is an iframe).
     */
    postMessage(target: HTMLIFrameElement | Window, message: unknown, targetOrigin: string): void;
    /** Returns `window.location.href` wrapped in a URL object. */
    get url(): URL;
    get onLine(): boolean;
}
