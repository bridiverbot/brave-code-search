// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { convertLangOrLocaleForVoicePackManager } from './voice_language_conversions.js';
// Strips diacritical combining marks via Unicode NFD normalization.
export function stripDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
// Returns whether `substring` is a non-case-sensitive substring of `value`.
export function isSubstring(value, substring) {
    return value.toLowerCase().includes(substring.toLowerCase());
}
// Retrieves the localized display name for a given language code from the
// dictionary, falling back to the lowercase language code if unavailable.
export function getDisplayName(lang, localeToDisplayName) {
    const langLower = lang.toLowerCase();
    return (localeToDisplayName && localeToDisplayName[langLower]) || langLower;
}
// Resolves localized display name for a voice pack language.
export function getDisplayNameForLocale(language, audioBrowserProxy) {
    const voicePackLang = convertLangOrLocaleForVoicePackManager(language);
    return voicePackLang ?
        audioBrowserProxy.getDisplayNameForLocale(voicePackLang, voicePackLang) :
        '';
}
// Returns the localized display name stripped of diacritics / accent marks.
export function getNormalizedDisplayName(lang, localeToDisplayName) {
    return stripDiacritics(getDisplayName(lang, localeToDisplayName));
}
// Checks whether a language matches a search query against:
// 1. Localized display name (e.g. "Português (Brasil)")
// 2. Language code (e.g. "pt-br")
// 3. Diacritic-stripped display name (e.g. "Portugues" matches "português")
export function isLanguageSearchMatch(lang, languageSearchValue, localeToDisplayName) {
    if (!languageSearchValue || languageSearchValue.trim().length === 0) {
        return true;
    }
    const normalizedQuery = stripDiacritics(languageSearchValue);
    const displayName = getDisplayName(lang, localeToDisplayName);
    const normalizedDisplayName = getNormalizedDisplayName(lang, localeToDisplayName);
    return isSubstring(displayName, languageSearchValue) ||
        isSubstring(lang, languageSearchValue) ||
        isSubstring(normalizedDisplayName, normalizedQuery);
}
// Sorts a list of BCP-47 language codes alphabetically in-place by their
// localized display name.
export function sortLanguagesByDisplayName(languages, localeToDisplayName) {
    languages.sort((lang1, lang2) => {
        return getDisplayName(lang1, localeToDisplayName)
            .localeCompare(getDisplayName(lang2, localeToDisplayName));
    });
}
