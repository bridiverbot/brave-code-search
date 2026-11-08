import type { Notification } from '../menus/menu_util.js';
export type VoicePackStatus = VoicePackServerResponseSuccess | VoicePackServerResponseError | VoicePackServerResponseParsingError;
export declare const EXTENSION_RESPONSE_TIMEOUT_MS = 12000;
interface VoicePackServerResponseSuccess {
    id: 'Successful response';
    code: VoicePackServerStatusSuccessCode;
}
interface VoicePackServerResponseError {
    id: 'Unsuccessful response';
    code: VoicePackServerStatusErrorCode;
}
interface VoicePackServerResponseParsingError {
    id: 'Cannot parse LanguagePackManager response';
    code: 'ParseError';
}
export declare function isVoicePackStatusSuccess(status?: VoicePackStatus): status is VoicePackServerResponseSuccess;
export declare function isVoicePackStatusError(status?: VoicePackStatus): status is VoicePackServerResponseError;
export declare enum VoicePackServerStatusSuccessCode {
    NOT_INSTALLED = 0,// Available to be downloaded but not installed
    INSTALLING = 1,// Currently installing
    INSTALLED = 2
}
export declare enum VoicePackServerStatusErrorCode {
    OTHER = 0,// A catch all error
    WRONG_ID = 1,// If no language pack for this language
    NEED_REBOOT = 2,// Error installing and a reboot should help
    ALLOCATION = 3,// Error due to not enough memory
    UNSUPPORTED_PLATFORM = 4,// Downloads not supported on this platform
    NOT_REACHED = 5
}
export declare enum VoiceClientSideStatusCode {
    NOT_INSTALLED = 0,// Available to be downloaded but not installed
    SENT_INSTALL_REQUEST = 1,// We sent an install request
    SENT_INSTALL_REQUEST_ERROR_RETRY = 2,// We sent an install request retrying a
    INSTALLED_AND_UNAVAILABLE = 3,// The server says voice is on disk, but it's not
    AVAILABLE = 4,// The voice is installed and available to be used by the local
    ERROR_INSTALLING = 5,// Couldn't install
    INSTALL_ERROR_ALLOCATION = 6
}
export declare enum NotificationType {
    NONE = 0,// No notification needed.
    DOWNLOADING = 1,// Language is downloading.
    DOWNLOADED = 2,// Language is downloaded.
    GOOGLE_VOICES_UNAVAILABLE = 3,// Google voices are not available due to not
    NO_INTERNET = 4,// No available voices for this language due to no internet.
    NO_SPACE = 5,// No available voices for this language due to no space.
    NO_SPACE_HQ = 6,// No high-quality voices for this language due to no space.
    GENERIC_ERROR = 7
}
export declare function hasNaturalIdentifier(voice: SpeechSynthesisVoice): boolean;
export declare function defaultIsNatural(voice: SpeechSynthesisVoice): boolean;
export declare function hasEspeakIdentifier(voice?: SpeechSynthesisVoice | null): boolean;
export declare function hasGoogleIdentifier(voice: SpeechSynthesisVoice | undefined): boolean;
export declare function defaultIsGoogle(voice: SpeechSynthesisVoice | undefined): boolean;
export declare function getNaturalVoiceOrDefault(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null;
export declare function getNotification(lang: string, status: VoiceClientSideStatusCode, availableVoices: SpeechSynthesisVoice[], onLine?: boolean): NotificationType;
export declare function createInitialListOfEnabledLanguages(browserOrPageBaseLang: string, storedLanguagesPref: string[], availableLangs: string[], langOfDefaultVoice: string | undefined): string[];
export declare function convertLangToAnAvailableLangIfPresent(langOrLocale: string, availableLangs: string[], allowCurrentLanguageIfExists?: boolean): string | undefined;
export declare function mojoVoicePackStatusToVoicePackStatusEnum(mojoPackStatus: string): VoicePackStatus;
export declare function convertLangOrLocaleForVoicePackManager(langOrLocale: string, enabledLangs?: string[], availableLangs?: string[]): string | undefined;
export declare function convertLangOrLocaleToExactVoicePackLocale(langOrLocale: string): string | undefined;
export declare function isWaitingForInstallLocally(status: VoiceClientSideStatusCode | undefined): status is VoiceClientSideStatusCode.SENT_INSTALL_REQUEST | VoiceClientSideStatusCode.SENT_INSTALL_REQUEST_ERROR_RETRY;
export declare function doesLanguageHaveNaturalVoices(language: string): boolean;
export declare function getVoicePackConvertedLangIfExists(lang: string): string;
export declare const PACK_MANAGER_SUPPORTED_LANGS_AND_LOCALES: Set<string>;
export declare const AVAILABLE_GOOGLE_TTS_LOCALES: Set<string>;
export declare function areVoicesEqual(voice1?: SpeechSynthesisVoice | null, voice2?: SpeechSynthesisVoice | null): boolean;
/**
 * Maps a language code and notification dictionary to a Notification structure
 * containing error state and localization string ID.
 */
export declare function getNotificationFor(lang: string, currentNotifications: {
    [language: string]: NotificationType;
}): Notification;
export {};
