// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from '//resources/js/load_time_data.js';
// clang-format off
// 
import { hasGoogleIdentifier } from './voice_language_conversions.js';
// 
// clang-format on
import { getDisplayNameForLocale } from './language_display.js';
import { areVoicesEqual, hasNaturalIdentifier, NotificationType } from './voice_language_conversions.js';
import { getVoiceNatureNaming } from './voice_nature_naming.js';
// Returns the user-facing display label for a voice.
// Outside ChromeOS, non-Google system voices are labeled with the generic
// system string. Handles null/undefined voice gracefully.
export function getVoiceTitle(voice) {
    if (!voice) {
        return loadTimeData.getString('voiceSelectionLabel');
    }
    let title = voice.name;
    // 
    if (!hasGoogleIdentifier(voice)) {
        title = loadTimeData.getString('systemVoiceLabel');
    }
    // 
    return title;
}
// Returns both title and nature naming display fields for one voice
export function getVoiceTitleAndNatureNaming(voice) {
    const title = getVoiceTitle(voice);
    // Off ChromeOS, getVoiceTitle collapses non-Google voices to the generic
    // system label; a mapping hit must not undo that collapse.
    const natureNaming = (voice && title === voice.name) ?
        getVoiceNatureNaming(voice.name) :
        null;
    return { title, natureNaming };
}
// The display name for a voice (nature name when mapped, otherwise the title).
export function getVoiceDisplayName(naming) {
    return naming.natureNaming ? naming.natureNaming.natureName : naming.title;
}
// Sanitizes voice names for use in HTML data-test-id attributes and CSS
// selectors.
export function stringToHtmlTestId(name) {
    return name.replace(/\s/g, '-').replace(/[()]/g, '');
}
// Comparator to prioritize Google Natural voices ahead of Standard/eSpeak
// voices within the same language group. Uses structural typing for voice
// containers.
export function voiceQualityRankComparator(item1, item2) {
    const isItem1Natural = hasNaturalIdentifier(item1.voice);
    const isItem2Natural = hasNaturalIdentifier(item2.voice);
    if (isItem1Natural && isItem2Natural) {
        return 0;
    }
    if (!isItem1Natural && !isItem2Natural) {
        return 0;
    }
    return isItem1Natural ? -1 : 1;
}
// Determines whether the preview loading spinner should be visible.
export function isVoicePreviewSpinning(voiceDropdown) {
    return voiceDropdown.previewInitiated &&
        !voiceDropdown.previewActuallyPlaying;
}
// Filters and groups available voices by enabled languages, maps each to a
// VoiceDropdownItem, and sorts voices within each language group.
export function computeVoiceDropdown(params) {
    const { availableVoices, enabledLangs, selectedVoice = null, previewVoicePlaying = null, previewVoiceInitiated = null, localeToDisplayName = {}, } = params;
    if (!availableVoices || !enabledLangs) {
        return { groups: [], hasSelectedVoice: false };
    }
    const enabledLangsLowerCase = new Set(enabledLangs.map(lang => lang.toLowerCase()));
    const enabledVoices = availableVoices.filter(({ lang }) => lang && enabledLangsLowerCase.has(lang.toLowerCase()));
    let hasSelectedVoice = false;
    const languageToVoices = enabledVoices.reduce((languageToDropdownItems, voice) => {
        const isSelected = areVoicesEqual(selectedVoice, voice);
        if (isSelected) {
            hasSelectedVoice = true;
        }
        const { title, natureNaming } = getVoiceTitleAndNatureNaming(voice);
        const dropdownItem = {
            title,
            natureNaming,
            voice,
            id: stringToHtmlTestId(voice.name),
            selected: isSelected,
            previewActuallyPlaying: areVoicesEqual(previewVoicePlaying, voice),
            previewInitiated: areVoicesEqual(previewVoiceInitiated, voice),
        };
        const langLower = voice.lang.toLowerCase();
        const lang = localeToDisplayName[langLower] || langLower;
        if (languageToDropdownItems[lang]) {
            languageToDropdownItems[lang].push(dropdownItem);
        }
        else {
            languageToDropdownItems[lang] = [dropdownItem];
        }
        return languageToDropdownItems;
    }, {});
    for (const lang of Object.keys(languageToVoices)) {
        languageToVoices[lang].sort(voiceQualityRankComparator);
    }
    const groups = Object.entries(languageToVoices).map(([language, voices]) => ({
        language,
        voices,
    }));
    return { groups, hasSelectedVoice };
}
// Resolves error notification messages for voice pack states (NO_SPACE,
// NO_INTERNET).
export function computeErrorMessages(currentNotifications, audioBrowserProxy) {
    const allocationErrors = computeMessages(currentNotifications, audioBrowserProxy, ([_, notification]) => notification === NotificationType.NO_SPACE, 'readingModeVoiceMenuNoSpace');
    const noInternetErrors = computeMessages(currentNotifications, audioBrowserProxy, ([_, notification]) => notification === NotificationType.NO_INTERNET, 'readingModeVoiceMenuNoInternet');
    return allocationErrors.concat(noInternetErrors);
}
// Resolves downloading notification messages for voice pack states
// (DOWNLOADING).
export function computeDownloadingMessages(currentNotifications, audioBrowserProxy) {
    return computeMessages(currentNotifications, audioBrowserProxy, ([_, notification]) => notification === NotificationType.DOWNLOADING, 'readingModeVoiceMenuDownloading');
}
// Formats voice pack notifications using the specified string template.
function computeMessages(currentNotifications, audioBrowserProxy, filterFn, message) {
    if (!currentNotifications) {
        return [];
    }
    const entries = Object.entries(currentNotifications);
    return entries.filter(filterFn)
        .map(([lang, _]) => getDisplayNameForLocale(lang, audioBrowserProxy))
        .filter(possibleName => possibleName.length > 0)
        .map(displayName => loadTimeData.getStringF(message, displayName));
}
