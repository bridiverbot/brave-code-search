import type { BrowserProxy } from './browser_proxy.js';
import type { Language } from './translate.mojom-webui.js';
export interface LanguageBrowserProxy {
    getClientLanguageList(): Promise<Language[]>;
    getLastUsedSourceLanguage(): string | null;
    getLastUsedTargetLanguage(): string | null;
    getTranslateTargetLanguage(): Promise<string>;
    getRecentSourceLanguages(): string[];
    getRecentTargetLanguages(): string[];
    getStoredServerLanguages(browserProxy: BrowserProxy): Promise<{
        sourceLanguages: Language[];
        targetLanguages: Language[];
    }>;
    storeLanguages(locale: string, sourceLanguages: Language[], targetLanguages: Language[]): void;
    storeLastUsedSourceLanguage(sourceLanguageCode: string | null): void;
    storeLastUsedTargetLanguage(targetLanguageCode: string | null): void;
    storeRecentSourceLanguages(languages: string[]): void;
    storeRecentTargetLanguages(languages: string[]): void;
}
export declare class LanguageBrowserProxyImpl implements LanguageBrowserProxy {
    static getInstance(): LanguageBrowserProxy;
    static setInstance(obj: LanguageBrowserProxy): void;
    getClientLanguageList(): Promise<Language[]>;
    getLastUsedSourceLanguage(): string | null;
    getLastUsedTargetLanguage(): string | null;
    getTranslateTargetLanguage(): Promise<string>;
    getRecentSourceLanguages(): string[];
    getRecentTargetLanguages(): string[];
    getStoredServerLanguages(browserProxy: BrowserProxy): Promise<{
        sourceLanguages: Language[];
        targetLanguages: Language[];
    }>;
    storeLanguages(locale: string, sourceLanguages: Language[], targetLanguages: Language[]): void;
    storeLastUsedSourceLanguage(sourceLanguageCode: string | null): void;
    storeLastUsedTargetLanguage(targetLanguageCode: string | null): void;
    storeRecentSourceLanguages(languages: string[]): void;
    storeRecentTargetLanguages(languages: string[]): void;
    private onServerLanguageListFetched;
    private shouldFetchSupportedLanguages;
}
