/**
 * Given a language code, returns just the base language without sub-codes. For
 * example, converts 'en-GB' to 'en'.
 */
export declare function getBaseLanguage(languageCode: string): string;
/**
 * Converts deprecated ISO 639 language codes to Chrome format.
 */
export declare function convertLanguageCodeForChrome(languageCode: string): string;
/**
 * Converts the language code to Translate server format where some deprecated
 * ISO 639 codes are used. The only sub-codes that Translate supports are for
 * "zh" where zh-HK is equivalent to zh-TW. For all other languages only
 * the base language is returned.
 */
export declare function convertLanguageCodeForTranslate(languageCode: string): string;
/**
 * @return the [displayName] - [nativeDisplayName] if displayName and
 *     nativeDisplayName are different. If they're the same than only returns
 *     the displayName.
 */
export declare function getFullName(language: chrome.languageSettingsPrivate.Language): string;
/**
 *  @return True if the language is supported by Translate as a base and not
 * an extended sub-code (i.e. "it-CH" and "es-MX" are both marked as
 * supporting translation but only "it" and "es" are actually supported by the
 * Translate server.
 */
export declare function isTranslateBaseLanguage(language: chrome.languageSettingsPrivate.Language): boolean;
