export interface LanguagesBrowserProxy {
    /**
     * Sets the prospective UI language to the chosen language. This won't
     * affect the actual UI language until a restart.
     */
    setProspectiveUiLanguage(languageCode: string): void;
    getProspectiveUiLanguage(): Promise<string>;
    getLanguageSettingsPrivate(): typeof chrome.languageSettingsPrivate;
}
export declare class LanguagesBrowserProxyImpl implements LanguagesBrowserProxy {
    setProspectiveUiLanguage(languageCode: string): void;
    getProspectiveUiLanguage(): Promise<string>;
    getLanguageSettingsPrivate(): typeof chrome.languageSettingsPrivate;
    static getInstance(): LanguagesBrowserProxy;
    static setInstance(obj: LanguagesBrowserProxy): void;
}
