/**
 * Proxy for interacting with the browser from the Dictation settings page.
 */
export interface DictationBrowserProxy {
    getDictationShortcut(): Promise<string>;
    setDictationShortcut(shortcut: string): Promise<boolean>;
}
/**
 * Default implementation of DictationBrowserProxy.
 */
export declare class DictationBrowserProxyImpl implements DictationBrowserProxy {
    getDictationShortcut(): Promise<string>;
    setDictationShortcut(shortcut: string): Promise<boolean>;
    static getInstance(): DictationBrowserProxy;
    static setInstance(obj: DictationBrowserProxy): void;
}
