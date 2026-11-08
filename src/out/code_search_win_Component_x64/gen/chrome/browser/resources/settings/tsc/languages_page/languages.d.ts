import type { LanguageHelper, LanguagesModel, LanguageState } from './languages_types.js';
export declare function getLanguageHelperInstance(): LanguageHelper;
/**
 * Singleton class that generates the languages model on start-up and
 * updates it whenever Chrome's pref store and other settings change.
 */
export declare class LanguageHelperImpl extends EventTarget implements LanguageHelper {
    static resetInstanceForTesting(newInstance?: LanguageHelperImpl | null): void;
    languages: LanguagesModel | undefined;
    private intlAcceptLanguagesPref_?;
    private intlAppLocalePref_?;
    private intlForcedLanguagesPref_?;
    private spellcheckBlockedDictionariesPref_?;
    private spellcheckDictionariesPref_?;
    private spellcheckForcedDictionariesPref_?;
    private translateAllowlistsPref_?;
    private translateBlockedLanguagesPref_?;
    private translateRecentTargetPref_?;
    private translateSiteBlocklistPref_?;
    private resolver_;
    private supportedLanguageMap_;
    private enabledLanguageSet_;
    private observerIds_;
    /** Prospective UI language when the page was loaded. */
    private originalProspectiveUILanguage_;
    private boundOnSpellcheckDictionariesChanged_;
    private browserProxy_;
    private languageSettingsPrivate_;
    constructor();
    private init_;
    private observePref_;
    private observePrefs_;
    destroy(): void;
    private dispatchLanguagesChanged_;
    /**
     * Updates the prospective UI language based on the new pref value.
     */
    private prospectiveUiLanguageChanged_;
    /**
     * Updates the list of enabled languages from the preferred languages pref.
     */
    private preferredLanguagesPrefChanged_;
    /**
     * Updates the spellCheckEnabled state of each enabled language.
     */
    private spellCheckDictionariesPrefChanged_;
    /**
     * Returns two arrays of SpellCheckLanguageStates for spell check languages:
     * one for spell check on, one for spell check off.
     * @param supportedLanguages The list of supported languages, normally
     *     this.languages.supported.
     */
    private getSpellCheckLanguages_;
    /**
     * Updates the list of always translate languages from translate prefs.
     */
    private alwaysTranslateLanguagesPrefChanged_;
    /**
     * Updates the list of never translate languages from translate prefs.
     */
    private neverTranslateLanguagesPrefChanged_;
    /**
     * Updates the list of never translate sites from translate prefs.
     */
    private neverTranslateSitesPrefChanged_;
    private translateLanguagesPrefChanged_;
    private translateTargetPrefChanged_;
    /**
     * Constructs the languages model.
     * @param args used to populate the model above.
     */
    private createModel_;
    /**
     * Returns a list of LanguageStates for each enabled language in the supported
     * languages list.
     * @param translateTarget Language code of the default translate
     *     target language.
     * @param prospectiveUILanguage Prospective UI display language. Only defined
     *     on Windows and Chrome OS.
     */
    private getEnabledLanguageStates_;
    /**
     * True iff we translate pages that are in the given language.
     * @param code Language code.
     * @param supportsTranslate If translation supports the given language.
     * @param translateBlockedSet Set of languages for which translation is
     *     blocked.
     * @param translateTarget Language code of the default translate target
     *     language.
     * @param prospectiveUILanguage Prospective UI display language. Only define
     *     on Windows and Chrome OS.
     */
    private isTranslateEnabled_;
    /**
     * Updates the dictionary download status for spell check languages in order
     * to track the number of times a spell check dictionary download has failed.
     */
    private onSpellcheckDictionariesChanged_;
    /**
     * Updates the |removable| property of the enabled language states based
     * on what other languages and input methods are enabled.
     */
    private updateRemovableLanguages_;
    /**
     * Creates a Set from the elements of the array.
     */
    private makeSetFromArray_;
    whenReady(): Promise<void>;
    /**
     * Sets the prospective UI language to the chosen language. This won't affect
     * the actual UI language until a restart.
     */
    setProspectiveUiLanguage(languageCode: string): void;
    /**
     * True if the prospective UI language was changed from its starting value.
     */
    requiresRestart(): boolean;
    /**
     * @return True if the language is for ARC IMEs.
     */
    private isLanguageCodeForArcIme_;
    /**
     * @return True if the language is enabled.
     */
    isLanguageEnabled(languageCode: string): boolean;
    /**
     * Enables the language, making it available for spell check and input.
     */
    enableLanguage(languageCode: string): void;
    /**
     * Disables the language.
     */
    disableLanguage(languageCode: string): void;
    canDisableLanguage(_languageState: LanguageState): boolean;
    canEnableLanguage(language: chrome.languageSettingsPrivate.Language): boolean;
    /**
     * Sets whether a given language should always be automatically translated.
     */
    setLanguageAlwaysTranslateState(languageCode: string, alwaysTranslate: boolean): void;
    /**
     * Moves the language in the list of enabled languages either up (toward the
     * front of the list) or down (toward the back).
     * @param upDirection True if we need to move up, false if we need to move
     *     down
     */
    moveLanguage(languageCode: string, upDirection: boolean): void;
    /**
     * Moves the language directly to the front of the list of enabled languages.
     */
    moveLanguageToFront(languageCode: string): void;
    /**
     * Enables translate for the given language by removing the translate
     * language from the blocked languages preference.
     */
    enableTranslateLanguage(languageCode: string): void;
    /**
     * Disables translate for the given language by adding the translate
     * language to the blocked languages preference.
     */
    disableTranslateLanguage(languageCode: string): void;
    /**
     * Sets the translate target language.
     */
    setTranslateTargetLanguage(languageCode: string): void;
    /**
     * Enables or disables spell check for the given language.
     */
    toggleSpellCheck(languageCode: string, enable: boolean): void;
    getLanguage(languageCode: string): chrome.languageSettingsPrivate.Language | undefined;
    /**
     * Retries downloading the dictionary for |languageCode|.
     */
    retryDownloadDictionary(languageCode: string): void;
}
