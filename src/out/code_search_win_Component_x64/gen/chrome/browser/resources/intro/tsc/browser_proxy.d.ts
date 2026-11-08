/**
 * @fileoverview A helper object used by the chrome://intro page to
 * interact with the browser.
 */
export interface IntroBrowserProxy {
    continueWithAccount(): void;
    continueWithoutAccount(): void;
    initializeMainView(): void;
    matchMedia(query: string): MediaQueryList;
}
export declare class IntroBrowserProxyImpl implements IntroBrowserProxy {
    continueWithAccount(): void;
    continueWithoutAccount(): void;
    initializeMainView(): void;
    matchMedia(query: string): MediaQueryList;
    static getInstance(): IntroBrowserProxy;
    static setInstance(obj: IntroBrowserProxy): void;
}
