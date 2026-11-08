/**
 * |name| is the display name of a language, ex. German.
 * |code| is the language code, ex. de-DE.
 * |downloadProgress| is the display-friendly download progress as the language
 *     model is being downloaded.
 */
export interface LiveCaptionLanguage {
    displayName: string;
    nativeDisplayName: string;
    code: string;
    downloadProgress: string;
}
export type LiveCaptionLanguageList = LiveCaptionLanguage[];
export interface CaptionsBrowserProxy {
    /**
     * Open the native captions system dialog.
     */
    openSystemCaptionsDialog(): void;
    liveCaptionSectionReady(): void;
    getInstalledLanguagePacks(): Promise<LiveCaptionLanguageList>;
    getAvailableLanguagePacks(): Promise<LiveCaptionLanguageList>;
    removeLanguagePack(languageCode: string): void;
    installLanguagePacks(languageCodes: string[]): void;
    installSpeechRecognitionSmallExpertModel(): void;
    deleteSpeechRecognitionSmallExpertModel(): void;
}
export declare class CaptionsBrowserProxyImpl implements CaptionsBrowserProxy {
    openSystemCaptionsDialog(): void;
    liveCaptionSectionReady(): void;
    getInstalledLanguagePacks(): Promise<LiveCaptionLanguageList>;
    getAvailableLanguagePacks(): Promise<LiveCaptionLanguageList>;
    removeLanguagePack(languageCode: string): void;
    installLanguagePacks(languageCodes: string[]): void;
    installSpeechRecognitionSmallExpertModel(): void;
    deleteSpeechRecognitionSmallExpertModel(): void;
    static getInstance(): CaptionsBrowserProxy;
    static setInstance(obj: CaptionsBrowserProxy): void;
}
