/**
 * @fileoverview A helper object used by the chrome://intro/default-browser page
 * to interact with the browser.
 */
export interface DefaultBrowserBrowserProxy {
    setAsDefaultBrowser(): void;
    skipDefaultBrowser(): void;
}
export declare class DefaultBrowserBrowserProxyImpl implements DefaultBrowserBrowserProxy {
    setAsDefaultBrowser(): void;
    skipDefaultBrowser(): void;
    static getInstance(): DefaultBrowserBrowserProxy;
    static setInstance(obj: DefaultBrowserBrowserProxy): void;
}
