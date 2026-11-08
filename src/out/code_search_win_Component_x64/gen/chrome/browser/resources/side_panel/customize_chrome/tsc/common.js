// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Customize Chrome actions. This enum must match the numbering for
 * NTPCustomizeChromeSidePanelAction in enums.xml. These values are persisted
 * to logs. Entries should not be renumbered, removed or reused.
 *
 * MAX_VALUE should always be at the end to help get the current number of
 * buckets.
 */
export var CustomizeChromeAction;
(function (CustomizeChromeAction) {
    CustomizeChromeAction[CustomizeChromeAction["EDIT_THEME_CLICKED"] = 0] = "EDIT_THEME_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["CATEGORIES_DEFAULT_CHROME_SELECTED"] = 1] = "CATEGORIES_DEFAULT_CHROME_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["CATEGORIES_UPLOAD_IMAGE_SELECTED"] = 2] = "CATEGORIES_UPLOAD_IMAGE_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["CATEGORIES_WALLPAPER_SEARCH_SELECTED"] = 3] = "CATEGORIES_WALLPAPER_SEARCH_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_PROMPT_SUBMITTED"] = 4] = "WALLPAPER_SEARCH_PROMPT_SUBMITTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_RESULT_IMAGE_SELECTED"] = 5] = "WALLPAPER_SEARCH_RESULT_IMAGE_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_HISTORY_IMAGE_SELECTED"] = 6] = "WALLPAPER_SEARCH_HISTORY_IMAGE_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["CATEGORIES_FIRST_PARTY_COLLECTION_SELECTED"] = 7] = "CATEGORIES_FIRST_PARTY_COLLECTION_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["FIRST_PARTY_COLLECTION_THEME_SELECTED"] = 8] = "FIRST_PARTY_COLLECTION_THEME_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_THUMBS_UP_SELECTED"] = 9] = "WALLPAPER_SEARCH_THUMBS_UP_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_THUMBS_DOWN_SELECTED"] = 10] = "WALLPAPER_SEARCH_THUMBS_DOWN_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_SUBJECT_DESCRIPTOR_UPDATED"] = 11] = "WALLPAPER_SEARCH_SUBJECT_DESCRIPTOR_UPDATED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_STYLE_DESCRIPTOR_UPDATED"] = 12] = "WALLPAPER_SEARCH_STYLE_DESCRIPTOR_UPDATED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_MOOD_DESCRIPTOR_UPDATED"] = 13] = "WALLPAPER_SEARCH_MOOD_DESCRIPTOR_UPDATED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_COLOR_DESCRIPTOR_UPDATED"] = 14] = "WALLPAPER_SEARCH_COLOR_DESCRIPTOR_UPDATED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_INSPIRATION_THEME_SELECTED"] = 15] = "WALLPAPER_SEARCH_INSPIRATION_THEME_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["SET_CLASSIC_CHROME_THEME_CLICKED"] = 16] = "SET_CLASSIC_CHROME_THEME_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["SHOW_SHORTCUTS_TOGGLE_CLICKED"] = 17] = "SHOW_SHORTCUTS_TOGGLE_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["SHOW_CARDS_TOGGLE_CLICKED"] = 18] = "SHOW_CARDS_TOGGLE_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_APPEARANCE_BUTTON_CLICKED"] = 19] = "WALLPAPER_SEARCH_APPEARANCE_BUTTON_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["DEFAULT_COLOR_CLICKED"] = 20] = "DEFAULT_COLOR_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["CHROME_COLOR_CLICKED"] = 21] = "CHROME_COLOR_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["CUSTOM_COLOR_CLICKED"] = 22] = "CUSTOM_COLOR_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["SHOW_FOOTER_TOGGLE_CLICKED"] = 23] = "SHOW_FOOTER_TOGGLE_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["SHOW_ACTION_CHIPS_TOGGLE_CLICKED"] = 24] = "SHOW_ACTION_CHIPS_TOGGLE_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["MAX_VALUE"] = 24] = "MAX_VALUE";
})(CustomizeChromeAction || (CustomizeChromeAction = {}));
export function recordCustomizeChromeAction(action) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.CustomizeChromeSidePanelAction', action, CustomizeChromeAction.MAX_VALUE + 1);
}
/**
 * Types of images that are shown on the NTP (and therefore also appear in
 * Customize Chrome). This enum must match the numbering for NtpImageType in
 * enums.xml. These values are persisted to logs. Entries should not be
 * renumbered, removed or reused.
 *
 * MAX_VALUE should always be at the end to help get the current number of
 * buckets.
 */
export var NtpImageType;
(function (NtpImageType) {
    NtpImageType[NtpImageType["BACKGROUND_IMAGE"] = 0] = "BACKGROUND_IMAGE";
    NtpImageType[NtpImageType["COLLECTIONS"] = 1] = "COLLECTIONS";
    NtpImageType[NtpImageType["COLLECTION_IMAGES"] = 2] = "COLLECTION_IMAGES";
    NtpImageType[NtpImageType["MAX_VALUE"] = 2] = "MAX_VALUE";
})(NtpImageType || (NtpImageType = {}));
export function recordCustomizeChromeImageError(imageType) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.BackgroundService.Images.Headers.ErrorDetected', imageType, NtpImageType.MAX_VALUE + 1);
}
