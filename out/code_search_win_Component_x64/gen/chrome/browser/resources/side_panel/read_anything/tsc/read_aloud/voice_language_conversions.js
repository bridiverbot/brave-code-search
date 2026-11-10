// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AudioBrowserProxyImpl } from './audio_browser_proxy.js';
const STATUS_SUCCESS = 'Successful response';
const STATUS_FAILURE = 'Unsuccessful response';
const PARSING_ERROR = 'Cannot parse LanguagePackManager response';
// Expect to hear responses from the extension within 12 seconds. Otherwise,
// infer it probably wasn't installed. 12 seconds was determined by
// experimentation on ChromeOS, where the response can be slower since the tts
// engine there gets put to sleep after some amount of inactivity. We have to
// wake the engine and wait for the response in those cases. We can lower this
// amount if that process gets faster or if the TTS engine stops being put to
// sleep, or if ChromeOS stops being supported.
export const EXTENSION_RESPONSE_TIMEOUT_MS = 12000;
export function isVoicePackStatusSuccess(status) {
    if (status === undefined) {
        return false;
    }
    return status.id === STATUS_SUCCESS;
}
export function isVoicePackStatusError(status) {
    if (status === undefined) {
        return false;
    }
    return status.id === STATUS_FAILURE;
}
// Representation of server-side LanguagePackManager state. Roughly corresponds
// to InstallationState in read_anything.mojom
export var VoicePackServerStatusSuccessCode;
(function (VoicePackServerStatusSuccessCode) {
    VoicePackServerStatusSuccessCode[VoicePackServerStatusSuccessCode["NOT_INSTALLED"] = 0] = "NOT_INSTALLED";
    VoicePackServerStatusSuccessCode[VoicePackServerStatusSuccessCode["INSTALLING"] = 1] = "INSTALLING";
    VoicePackServerStatusSuccessCode[VoicePackServerStatusSuccessCode["INSTALLED"] = 2] = "INSTALLED";
})(VoicePackServerStatusSuccessCode || (VoicePackServerStatusSuccessCode = {}));
// Representation of server-side LanguagePackManager state. Roughly corresponds
// to ErrorCode in read_anything.mojom. We treat many of these errors in the
// same way, but these are the states that the server sends us.
export var VoicePackServerStatusErrorCode;
(function (VoicePackServerStatusErrorCode) {
    VoicePackServerStatusErrorCode[VoicePackServerStatusErrorCode["OTHER"] = 0] = "OTHER";
    VoicePackServerStatusErrorCode[VoicePackServerStatusErrorCode["WRONG_ID"] = 1] = "WRONG_ID";
    VoicePackServerStatusErrorCode[VoicePackServerStatusErrorCode["NEED_REBOOT"] = 2] = "NEED_REBOOT";
    VoicePackServerStatusErrorCode[VoicePackServerStatusErrorCode["ALLOCATION"] = 3] = "ALLOCATION";
    VoicePackServerStatusErrorCode[VoicePackServerStatusErrorCode["UNSUPPORTED_PLATFORM"] = 4] = "UNSUPPORTED_PLATFORM";
    VoicePackServerStatusErrorCode[VoicePackServerStatusErrorCode["NOT_REACHED"] = 5] = "NOT_REACHED";
})(VoicePackServerStatusErrorCode || (VoicePackServerStatusErrorCode = {}));
// Our client-side representation tracking voice-pack states.
export var VoiceClientSideStatusCode;
(function (VoiceClientSideStatusCode) {
    VoiceClientSideStatusCode[VoiceClientSideStatusCode["NOT_INSTALLED"] = 0] = "NOT_INSTALLED";
    VoiceClientSideStatusCode[VoiceClientSideStatusCode["SENT_INSTALL_REQUEST"] = 1] = "SENT_INSTALL_REQUEST";
    VoiceClientSideStatusCode[VoiceClientSideStatusCode["SENT_INSTALL_REQUEST_ERROR_RETRY"] = 2] = "SENT_INSTALL_REQUEST_ERROR_RETRY";
    // previously failed download
    VoiceClientSideStatusCode[VoiceClientSideStatusCode["INSTALLED_AND_UNAVAILABLE"] = 3] = "INSTALLED_AND_UNAVAILABLE";
    // available to the local speechSynthesis API yet
    VoiceClientSideStatusCode[VoiceClientSideStatusCode["AVAILABLE"] = 4] = "AVAILABLE";
    // speechSynthesis API
    VoiceClientSideStatusCode[VoiceClientSideStatusCode["ERROR_INSTALLING"] = 5] = "ERROR_INSTALLING";
    VoiceClientSideStatusCode[VoiceClientSideStatusCode["INSTALL_ERROR_ALLOCATION"] = 6] = "INSTALL_ERROR_ALLOCATION";
})(VoiceClientSideStatusCode || (VoiceClientSideStatusCode = {}));
export var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["NONE"] = 0] = "NONE";
    NotificationType[NotificationType["DOWNLOADING"] = 1] = "DOWNLOADING";
    NotificationType[NotificationType["DOWNLOADED"] = 2] = "DOWNLOADED";
    NotificationType[NotificationType["GOOGLE_VOICES_UNAVAILABLE"] = 3] = "GOOGLE_VOICES_UNAVAILABLE";
    // accessing the extension.
    NotificationType[NotificationType["NO_INTERNET"] = 4] = "NO_INTERNET";
    NotificationType[NotificationType["NO_SPACE"] = 5] = "NO_SPACE";
    NotificationType[NotificationType["NO_SPACE_HQ"] = 6] = "NO_SPACE_HQ";
    NotificationType[NotificationType["GENERIC_ERROR"] = 7] = "GENERIC_ERROR";
})(NotificationType || (NotificationType = {}));
// These strings are not localized and will be in English, even for non-English
// Natural, Google, and eSpeak voices.
const NATURAL_STRING_IDENTIFIER = '(Natural)';
const ESPEAK_STRING_IDENTIFIER = 'eSpeak';
// Google voices that are not Natural.
const GOOGLE_STRING_IDENTIFIER = 'Google';
export function hasNaturalIdentifier(voice) {
    return voice.name.includes(NATURAL_STRING_IDENTIFIER);
}
export function defaultIsNatural(voice) {
    return hasNaturalIdentifier(voice);
}
export function hasEspeakIdentifier(voice) {
    return !!(voice && voice.name.includes(ESPEAK_STRING_IDENTIFIER));
}
export function hasGoogleIdentifier(voice) {
    return !!(voice && voice.name.includes(GOOGLE_STRING_IDENTIFIER));
}
export function defaultIsGoogle(voice) {
    return hasGoogleIdentifier(voice);
}
export function getNaturalVoiceOrDefault(voices) {
    if (voices.length === 0) {
        return null;
    }
    const naturalVoice = voices.find(v => hasNaturalIdentifier(v));
    if (naturalVoice) {
        return naturalVoice;
    }
    const defaultVoice = voices.find(({ default: isDefaultVoice }) => isDefaultVoice);
    return defaultVoice ? defaultVoice : (voices[0] || null);
}
export function getNotification(lang, status, availableVoices, onLine = window.navigator.onLine) {
    // No need to check the install status if the language is missing.
    const voicePackLanguage = convertLangOrLocaleForVoicePackManager(lang);
    if (!voicePackLanguage) {
        return NotificationType.NONE;
    }
    // TODO: crbug.com/300259625 - Show more error messages.
    switch (status) {
        case VoiceClientSideStatusCode.SENT_INSTALL_REQUEST:
        case VoiceClientSideStatusCode.SENT_INSTALL_REQUEST_ERROR_RETRY:
        case VoiceClientSideStatusCode.INSTALLED_AND_UNAVAILABLE:
            return NotificationType.DOWNLOADING;
        case VoiceClientSideStatusCode.ERROR_INSTALLING:
            // Don't show an error if there are available on-device voices for this
            // language.
            if (hasVoiceWithVoicePackLang(availableVoices, voicePackLanguage)) {
                return NotificationType.NONE;
            }
            // There's not a specific error code from the language pack installer
            // for internet connectivity, but if there's an installation error
            // and we detect we're offline, we can assume that the install error
            // was due to lack of internet connection.
            if (!onLine) {
                return NotificationType.NO_INTERNET;
            }
            // Show a generic error message.
            return NotificationType.GENERIC_ERROR;
        case VoiceClientSideStatusCode.INSTALL_ERROR_ALLOCATION:
            // If we get an allocation error but voices exist for the given
            // language, show an allocation error specific to downloading high
            // quality voices.
            if (hasVoiceWithVoicePackLang(availableVoices, voicePackLanguage)) {
                return NotificationType.NO_SPACE_HQ;
            }
            return NotificationType.NO_SPACE;
        case VoiceClientSideStatusCode.AVAILABLE:
            return NotificationType.DOWNLOADED;
        case VoiceClientSideStatusCode.NOT_INSTALLED:
            return NotificationType.NONE;
        default:
            // This ensures the switch statement is exhaustive
            return status;
    }
}
function hasVoiceWithVoicePackLang(availableVoices, voicePackLanguage) {
    return availableVoices.some(voice => getVoicePackConvertedLangIfExists(voice.lang) === voicePackLanguage);
}
export function createInitialListOfEnabledLanguages(browserOrPageBaseLang, storedLanguagesPref, availableLangs, langOfDefaultVoice) {
    const initialAvailableLanguages = new Set();
    // Add stored prefs to initial list of enabled languages
    for (const lang of storedLanguagesPref) {
        // Find the version of the lang/locale that maps to a language
        const matchingLang = convertLangToAnAvailableLangIfPresent(lang, availableLangs);
        if (matchingLang) {
            initialAvailableLanguages.add(matchingLang);
        }
    }
    // Add browserOrPageBaseLang to initial list of enabled languages
    // If there's no locale/base-lang already matching in
    // initialAvailableLanguages, then add one
    const browserPageLangAlreadyPresent = [...initialAvailableLanguages].some(lang => lang.startsWith(browserOrPageBaseLang));
    if (!browserPageLangAlreadyPresent) {
        const matchingLangOfBrowserLang = convertLangToAnAvailableLangIfPresent(browserOrPageBaseLang, availableLangs);
        if (matchingLangOfBrowserLang) {
            initialAvailableLanguages.add(matchingLangOfBrowserLang);
        }
    }
    // If initialAvailableLanguages is still empty, add the default voice
    // language
    if (initialAvailableLanguages.size === 0) {
        if (langOfDefaultVoice) {
            initialAvailableLanguages.add(langOfDefaultVoice);
        }
    }
    return [...initialAvailableLanguages];
}
export function convertLangToAnAvailableLangIfPresent(langOrLocale, availableLangs, allowCurrentLanguageIfExists = true) {
    // Convert everything to lower case
    langOrLocale = langOrLocale.toLowerCase();
    availableLangs = availableLangs.map(lang => lang.toLowerCase());
    if (allowCurrentLanguageIfExists && availableLangs.includes(langOrLocale)) {
        return langOrLocale;
    }
    const baseLang = extractBaseLang(langOrLocale);
    if (allowCurrentLanguageIfExists && availableLangs.includes(baseLang)) {
        return baseLang;
    }
    // See if there are any matching available locales we can default to
    const matchingLocales = availableLangs.filter(availableLang => extractBaseLang(availableLang) === baseLang);
    if (matchingLocales && matchingLocales[0]) {
        return matchingLocales[0];
    }
    // If all else fails, try the browser language.
    const defaultLanguage = AudioBrowserProxyImpl.getInstance()
        .getDefaultLanguageForSpeech()
        .toLowerCase();
    if (availableLangs.includes(defaultLanguage)) {
        return defaultLanguage;
    }
    // Try the browser language converted to a locale.
    const convertedDefaultLanguage = convertUnsupportedBaseLangToSupportedLocale(defaultLanguage);
    if (convertedDefaultLanguage &&
        availableLangs.includes(convertedDefaultLanguage)) {
        return convertedDefaultLanguage;
    }
    return undefined;
}
// The following possible values of "status" is a union of enum values of
// enum InstallationState and enum ErrorCode in read_anything.mojom
export function mojoVoicePackStatusToVoicePackStatusEnum(mojoPackStatus) {
    if (mojoPackStatus === 'kNotInstalled') {
        return {
            id: STATUS_SUCCESS,
            code: VoicePackServerStatusSuccessCode.NOT_INSTALLED,
        };
    }
    else if (mojoPackStatus === 'kInstalling') {
        return {
            id: STATUS_SUCCESS,
            code: VoicePackServerStatusSuccessCode.INSTALLING,
        };
    }
    else if (mojoPackStatus === 'kInstalled') {
        return {
            id: STATUS_SUCCESS,
            code: VoicePackServerStatusSuccessCode.INSTALLED,
        };
    }
    else if (mojoPackStatus === 'kOther' || mojoPackStatus === 'kUnknown') {
        return { id: STATUS_FAILURE, code: VoicePackServerStatusErrorCode.OTHER };
    }
    else if (mojoPackStatus === 'kWrongId') {
        return { id: STATUS_FAILURE, code: VoicePackServerStatusErrorCode.WRONG_ID };
    }
    else if (mojoPackStatus === 'kNeedReboot') {
        return {
            id: STATUS_FAILURE,
            code: VoicePackServerStatusErrorCode.NEED_REBOOT,
        };
    }
    else if (mojoPackStatus === 'kAllocation') {
        return {
            id: STATUS_FAILURE,
            code: VoicePackServerStatusErrorCode.ALLOCATION,
        };
    }
    else if (mojoPackStatus === 'kUnsupportedPlatform') {
        return {
            id: STATUS_FAILURE,
            code: VoicePackServerStatusErrorCode.UNSUPPORTED_PLATFORM,
        };
    }
    else if (mojoPackStatus === 'kNotReached') {
        return {
            id: STATUS_FAILURE,
            code: VoicePackServerStatusErrorCode.NOT_REACHED,
        };
    }
    else {
        return { id: PARSING_ERROR, code: 'ParseError' };
    }
}
// TODO: crbug.com/40927698 - Make this private and use
// getVoicePackConvertedLangIfExists instead.
// The ChromeOS VoicePackManager labels some voices by locale, and some by
// base-language. The request for each needs to be exact, so this function
// converts a locale or language into the code the VoicePackManager expects.
// This is based on the VoicePackManager code here:
// https://source.chromium.org/chromium/chromium/src/+/main:chromeos/ash/components/language_packs/language_pack_manager.cc;l=346;drc=31e516b25930112df83bf09d3d2a868200ecbc6d
export function convertLangOrLocaleForVoicePackManager(langOrLocale, enabledLangs, availableLangs) {
    langOrLocale = langOrLocale.toLowerCase();
    if (PACK_MANAGER_SUPPORTED_LANGS_AND_LOCALES.has(langOrLocale)) {
        return langOrLocale;
    }
    if (!isBaseLang(langOrLocale)) {
        const baseLang = langOrLocale.substring(0, langOrLocale.indexOf('-'));
        if (PACK_MANAGER_SUPPORTED_LANGS_AND_LOCALES.has(baseLang)) {
            return baseLang;
        }
        const locale = convertUnsupportedBaseLangToSupportedLocale(baseLang, enabledLangs, availableLangs);
        if (locale) {
            return locale;
        }
    }
    const locale = convertUnsupportedBaseLangToSupportedLocale(langOrLocale, enabledLangs, availableLangs);
    if (locale) {
        return locale;
    }
    return undefined;
}
export function convertLangOrLocaleToExactVoicePackLocale(langOrLocale) {
    const possibleConvertedLang = convertLangOrLocaleForVoicePackManager(langOrLocale);
    if (!possibleConvertedLang) {
        return possibleConvertedLang;
    }
    return [...AVAILABLE_GOOGLE_TTS_LOCALES].find(locale => locale.startsWith(possibleConvertedLang.toLowerCase()));
}
export function isWaitingForInstallLocally(status) {
    return status === VoiceClientSideStatusCode.SENT_INSTALL_REQUEST ||
        status === VoiceClientSideStatusCode.SENT_INSTALL_REQUEST_ERROR_RETRY;
}
function convertUnsupportedBaseLangToSupportedLocale(baseLang, enabledLangs, availableLangs) {
    // Check if it's a base lang that supports a locale. These are the only
    // languages that have locales in the Pack Manager per the code link above.
    if (!['en', 'es', 'pt'].includes(baseLang)) {
        return undefined;
    }
    // If enabledLangs is not null, then choose an enabled locale for this given
    // language so we don't unnecessarily enable other locales when one is already
    // enabled.
    if (enabledLangs) {
        const enabledLocalesForLang = enabledLangs.filter(lang => lang.startsWith(baseLang));
        if (enabledLocalesForLang.length > 0) {
            // TODO: crbug.com/335691447- If there is more than one enabled locale for
            // this lang, choose one based on browser prefs. For now, just default to
            // the first enabled locale.
            return enabledLocalesForLang[0];
        }
    }
    // If availableLangs is not null, then choose an available locale for this
    // given language so we don't unnecessarily download other locales when one is
    // already downloaded.
    if (availableLangs) {
        const availableLocalesForLang = availableLangs.filter(lang => lang.startsWith(baseLang));
        if (availableLocalesForLang.length > 0) {
            // TODO: crbug.com/335691447- If there is more than one available locale
            // for this lang, choose one based on browser prefs. For now, just default
            // to the first available locale.
            return availableLocalesForLang[0];
        }
    }
    // TODO: crbug.com/335691447- Convert from base-lang to locale based on
    // browser prefs.
    // Otherwise, just default to arbitrary locales.
    if (baseLang === 'en') {
        return 'en-us';
    }
    else if (baseLang === 'es') {
        return 'es-es';
    }
    else {
        return 'pt-br';
    }
}
// Returns true if input is base lang, and false if it's a locale
function isBaseLang(langOrLocale) {
    return !langOrLocale.includes('-');
}
function extractBaseLang(langOrLocale) {
    if (isBaseLang(langOrLocale)) {
        return langOrLocale;
    }
    return langOrLocale.substring(0, langOrLocale.indexOf('-'));
}
export function doesLanguageHaveNaturalVoices(language) {
    const voicePackLanguage = getVoicePackConvertedLangIfExists(language);
    return NATURAL_VOICES_SUPPORTED_LANGS_AND_LOCALES.has(voicePackLanguage);
}
export function getVoicePackConvertedLangIfExists(lang) {
    const voicePackLanguage = convertLangOrLocaleForVoicePackManager(lang);
    // If the voice pack language wasn't converted, use the original string.
    // This will enable us to set install statuses on invalid languages and
    // locales.
    if (!voicePackLanguage) {
        return lang;
    }
    return voicePackLanguage;
}
// These are from the Pack Manager. Values should be kept in sync with the code
// link above.
export const PACK_MANAGER_SUPPORTED_LANGS_AND_LOCALES = new Set([
    'bn', 'cs', 'da', 'de', 'el', 'en-au', 'en-gb', 'en-us', 'es-es',
    'es-us', 'fi', 'fil', 'fr', 'hi', 'hu', 'id', 'it', 'ja',
    'km', 'ko', 'nb', 'ne', 'nl', 'pl', 'pt-br', 'pt-pt', 'si',
    'sk', 'sv', 'th', 'tr', 'uk', 'vi', 'yue',
]);
// If there is a natural voice available for this language, based on
// voices_list.csv. If there is a voice in
// PACK_MANAGER_SUPPORTED_LANGS_AND_LOCALES but not in this list, it means
// we still need to call to the pack manager to install the voice pack but
// there are no natural voices associate with the language.
// Currently, 'yue' and 'km' are the only two pack supported languages not
// included in this list.
const NATURAL_VOICES_SUPPORTED_LANGS_AND_LOCALES = new Set([
    'bn', 'cs', 'da', 'de', 'el', 'en-au', 'en-gb', 'en-us',
    'es-es', 'es-us', 'fi', 'fil', 'fr', 'hi', 'hu', 'id',
    'it', 'ja', 'ko', 'nb', 'ne', 'nl', 'pl', 'pt-br',
    'pt-pt', 'si', 'sk', 'sv', 'th', 'tr', 'uk', 'vi',
]);
// These are the locales based on PACK_MANAGER_SUPPORTED_LANGS_AND_LOCALES, but
// for the actual Google TTS locales that can be installed on ChromeOS. While
// we can use the languages in PACK_MANAGER_SUPPORTED_LANGS_AND_LOCALES to
// download a voice pack, the voice pack language code will be returned in
// the locale format, as in AVAILABLE_GOOGLE_TTS_LOCALES, which means the
// previously toggled language item won't match the language item associated
// with the downloaded pack.
// LINT.IfChange(AVAILABLE_GOOGLE_TTS_LOCALES)
export const AVAILABLE_GOOGLE_TTS_LOCALES = new Set([
    'bn-bd', 'cs-cz', 'da-dk', 'de-de', 'el-gr', 'en-au', 'en-gb',
    'en-us', 'es-es', 'es-us', 'fi-fi', 'fil-ph', 'fr-fr', 'hi-in',
    'hu-hu', 'id-id', 'it-it', 'ja-jp', 'km-kh', 'ko-kr', 'nb-no',
    'ne-np', 'nl-nl', 'pl-pl', 'pt-br', 'pt-pt', 'si-lk', 'sk-sk',
    'sv-se', 'th-th', 'tr-tr', 'uk-ua', 'vi-vn', 'yue-hk',
]);
// LINT.ThenChange(voice_nature_naming.ts:VOICE_NATURE_NAMING_BY_LOCALE)
export function areVoicesEqual(voice1, voice2) {
    if (voice1 === voice2) {
        return true;
    }
    if (!voice1 || !voice2) {
        return false;
    }
    return voice1.default === voice2.default && voice1.lang === voice2.lang &&
        voice1.localService === voice2.localService &&
        voice1.name === voice2.name && voice1.voiceURI === voice2.voiceURI;
}
/**
 * Maps a language code and notification dictionary to a Notification structure
 * containing error state and localization string ID.
 */
export function getNotificationFor(lang, currentNotifications) {
    const voicePackLanguage = getVoicePackConvertedLangIfExists(lang);
    const notification = currentNotifications[voicePackLanguage];
    if (notification === undefined) {
        return { isError: false };
    }
    switch (notification) {
        case NotificationType.DOWNLOADING:
            return { isError: false, text: 'readingModeLanguageMenuDownloading' };
        case NotificationType.NO_INTERNET:
            return { isError: true, text: 'readingModeLanguageMenuNoInternet' };
        case NotificationType.GENERIC_ERROR:
            return { isError: true, text: 'languageMenuDownloadFailed' };
        case NotificationType.NO_SPACE_HQ:
            return { isError: true, text: 'allocationErrorHighQuality' };
        case NotificationType.NO_SPACE:
            return { isError: true, text: 'allocationError' };
        case NotificationType.DOWNLOADED:
        case NotificationType.GOOGLE_VOICES_UNAVAILABLE:
        case NotificationType.NONE:
            return { isError: false };
        default:
            return notification;
    }
}
