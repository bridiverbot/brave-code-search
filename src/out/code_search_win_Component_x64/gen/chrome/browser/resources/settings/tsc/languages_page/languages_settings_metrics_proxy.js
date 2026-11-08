// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
  This file is for recording Chrome Browser's language settings metrics on the
  frontend.
*/
// LINT.IfChange(LanguageSettingsActionType)
/**
 * These values are persisted to LanguageSettingsActionType
 * in tools/metrics/histograms/metadata/language/enums.xml. Entries should not be renumbered and
 * should never be reused.
 */
export var LanguageSettingsActionType;
(function (LanguageSettingsActionType) {
    // CLICK_ON_ADD_LANGUAGE = 1, // Deprecated, use ADD_LANGUAGE in
    // LanguageSettingsPageImpression
    LanguageSettingsActionType[LanguageSettingsActionType["LANGUAGE_ADDED"] = 2] = "LANGUAGE_ADDED";
    LanguageSettingsActionType[LanguageSettingsActionType["LANGUAGE_REMOVED"] = 3] = "LANGUAGE_REMOVED";
    LanguageSettingsActionType[LanguageSettingsActionType["DISABLE_TRANSLATE_GLOBALLY"] = 4] = "DISABLE_TRANSLATE_GLOBALLY";
    LanguageSettingsActionType[LanguageSettingsActionType["ENABLE_TRANSLATE_GLOBALLY"] = 5] = "ENABLE_TRANSLATE_GLOBALLY";
    LanguageSettingsActionType[LanguageSettingsActionType["DISABLE_TRANSLATE_FOR_SINGLE_LANGUAGE"] = 6] = "DISABLE_TRANSLATE_FOR_SINGLE_LANGUAGE";
    LanguageSettingsActionType[LanguageSettingsActionType["ENABLE_TRANSLATE_FOR_SINGLE_LANGUAGE"] = 7] = "ENABLE_TRANSLATE_FOR_SINGLE_LANGUAGE";
    LanguageSettingsActionType[LanguageSettingsActionType["LANGUAGE_LIST_REORDERED"] = 8] = "LANGUAGE_LIST_REORDERED";
    LanguageSettingsActionType[LanguageSettingsActionType["CHANGE_CHROME_LANGUAGE"] = 9] = "CHANGE_CHROME_LANGUAGE";
    LanguageSettingsActionType[LanguageSettingsActionType["CHANGE_TRANSLATE_TARGET"] = 10] = "CHANGE_TRANSLATE_TARGET";
    LanguageSettingsActionType[LanguageSettingsActionType["REMOVE_FROM_NEVER_TRANSLATE"] = 11] = "REMOVE_FROM_NEVER_TRANSLATE";
    LanguageSettingsActionType[LanguageSettingsActionType["ADD_TO_NEVER_TRANSLATE"] = 12] = "ADD_TO_NEVER_TRANSLATE";
    LanguageSettingsActionType[LanguageSettingsActionType["REMOVE_FROM_ALWAYS_TRANSLATE"] = 13] = "REMOVE_FROM_ALWAYS_TRANSLATE";
    LanguageSettingsActionType[LanguageSettingsActionType["ADD_TO_ALWAYS_TRANSLATE"] = 14] = "ADD_TO_ALWAYS_TRANSLATE";
    LanguageSettingsActionType[LanguageSettingsActionType["REMOVE_FROM_NEVER_TRANSLATE_SITES"] = 15] = "REMOVE_FROM_NEVER_TRANSLATE_SITES";
    LanguageSettingsActionType[LanguageSettingsActionType["RESTART_FOR_SPLIT_INSTALL"] = 16] = "RESTART_FOR_SPLIT_INSTALL";
    LanguageSettingsActionType[LanguageSettingsActionType["ENABLE_SPELL_CHECK_GLOBALLY"] = 17] = "ENABLE_SPELL_CHECK_GLOBALLY";
    LanguageSettingsActionType[LanguageSettingsActionType["DISABLE_SPELL_CHECK_GLOBALLY"] = 18] = "DISABLE_SPELL_CHECK_GLOBALLY";
    LanguageSettingsActionType[LanguageSettingsActionType["ENABLE_SPELL_CHECK_FOR_LANGUAGE"] = 19] = "ENABLE_SPELL_CHECK_FOR_LANGUAGE";
    LanguageSettingsActionType[LanguageSettingsActionType["DISABLE_SPELL_CHECK_FOR_LANGUAGE"] = 20] = "DISABLE_SPELL_CHECK_FOR_LANGUAGE";
    LanguageSettingsActionType[LanguageSettingsActionType["SELECT_BASIC_SPELL_CHECK"] = 21] = "SELECT_BASIC_SPELL_CHECK";
    LanguageSettingsActionType[LanguageSettingsActionType["SELECT_ENHANCED_SPELL_CHECK"] = 22] = "SELECT_ENHANCED_SPELL_CHECK";
    LanguageSettingsActionType[LanguageSettingsActionType["COUNT"] = 23] = "COUNT";
})(LanguageSettingsActionType || (LanguageSettingsActionType = {}));
// LINT.ThenChange(
//   //tools/metrics/histograms/metadata/language/enums.xml:LanguageSettingsActionType,
//   //chrome/browser/language/android/java/src/org/chromium/chrome/browser/language/settings/LanguagesManager.java:LanguageSettingsActionType
// )
/**
 * These values are persisted to LanguageSettingsPageImpression
 * in tools/metrics/histograms/metadata/language/enums.xml. Entries should not be renumbered and
 * should never be reused.
 */
// LINT.IfChange(LanguageSettingsPageType)
export var LanguageSettingsPageImpressionType;
(function (LanguageSettingsPageImpressionType) {
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["MAIN"] = 0] = "MAIN";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["ADD_LANGUAGE"] = 1] = "ADD_LANGUAGE";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["LANGUAGE_DETAILS"] = 2] = "LANGUAGE_DETAILS";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["CHROME_LANGUAGE"] = 3] = "CHROME_LANGUAGE";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["ADVANCED_LANGUAGE_SETTINGS"] = 4] = "ADVANCED_LANGUAGE_SETTINGS";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["TARGET_LANGUAGE"] = 5] = "TARGET_LANGUAGE";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["LANGUAGE_OVERFLOW_MENU_OPENED"] = 6] = "LANGUAGE_OVERFLOW_MENU_OPENED";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["VIEW_NEVER_TRANSLATE_LANGUAGES"] = 7] = "VIEW_NEVER_TRANSLATE_LANGUAGES";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["NEVER_TRANSLATE_ADD_LANGUAGE"] = 8] = "NEVER_TRANSLATE_ADD_LANGUAGE";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["VIEW_ALWAYS_TRANSLATE_LANGUAGES"] = 9] = "VIEW_ALWAYS_TRANSLATE_LANGUAGES";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["ALWAYS_TRANSLATE_ADD_LANGUAGE"] = 10] = "ALWAYS_TRANSLATE_ADD_LANGUAGE";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["VIEW_NEVER_TRANSLATE_SITES"] = 11] = "VIEW_NEVER_TRANSLATE_SITES";
    LanguageSettingsPageImpressionType[LanguageSettingsPageImpressionType["NUM_ENTRIES"] = 12] = "NUM_ENTRIES";
})(LanguageSettingsPageImpressionType || (LanguageSettingsPageImpressionType = {}));
export class LanguageSettingsMetricsProxyImpl {
    recordSettingsMetric(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('LanguageSettings.Actions', interaction, LanguageSettingsActionType.COUNT);
    }
    recordPageImpressionMetric(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('LanguageSettings.PageImpression', interaction, LanguageSettingsPageImpressionType.NUM_ENTRIES);
    }
    static getInstance() {
        return instance || (instance = new LanguageSettingsMetricsProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
