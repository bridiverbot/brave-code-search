export declare class PrefsBrowserProxy implements PrefsBrowserProxy {
    getAllPrefs(): Promise<chrome.settingsPrivate.PrefObject<any>[]>;
    getPref(name: string): Promise<chrome.settingsPrivate.PrefObject<any>>;
    setPref(name: string, value: unknown, pageId?: string): Promise<boolean>;
    get onPrefsChanged(): import("/tools/typescript/definitions/chrome_event.js").ChromeEvent<chrome.settingsPrivate.PrefsCallback>;
    static getInstance(): PrefsBrowserProxy;
    static setInstance(obj: PrefsBrowserProxy): void;
}
