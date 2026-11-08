import type { AudioBrowserProxy } from './audio_browser_proxy.js';
export declare function stripDiacritics(str: string): string;
export declare function isSubstring(value: string, substring: string): boolean;
export declare function getDisplayName(lang: string, localeToDisplayName: {
    [locale: string]: string;
}): string;
export declare function getDisplayNameForLocale(language: string, audioBrowserProxy: AudioBrowserProxy): string;
export declare function getNormalizedDisplayName(lang: string, localeToDisplayName: {
    [locale: string]: string;
}): string;
export declare function isLanguageSearchMatch(lang: string, languageSearchValue: string, localeToDisplayName: {
    [locale: string]: string;
}): boolean;
export declare function sortLanguagesByDisplayName(languages: string[], localeToDisplayName: {
    [locale: string]: string;
}): void;
