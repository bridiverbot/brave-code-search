/**
 * @fileoverview A helper object used from the languages section
 * to interact with the browser.
 */
export interface LanguagesBrowserProxy {
    getLanguageSettingsPrivate(): typeof chrome.languageSettingsPrivate;
}
export declare class LanguagesBrowserProxyImpl implements LanguagesBrowserProxy {
    getLanguageSettingsPrivate(): typeof chrome.languageSettingsPrivate;
    static getInstance(): LanguagesBrowserProxy;
    static setInstance(obj: LanguagesBrowserProxy): void;
}
