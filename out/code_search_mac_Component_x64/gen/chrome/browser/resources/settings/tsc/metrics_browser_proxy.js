// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Handles metrics for the settings pages. */
/**
 * Contains all possible recorded interactions across privacy settings pages.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsPrivacyElementInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
// LINT.IfChange(PrivacyElementInteractions)
export var PrivacyElementInteractions;
(function (PrivacyElementInteractions) {
    // SYNC_AND_GOOGLE_SERVICES = 0,
    // CHROME_SIGN_IN = 1,
    PrivacyElementInteractions[PrivacyElementInteractions["DO_NOT_TRACK"] = 2] = "DO_NOT_TRACK";
    PrivacyElementInteractions[PrivacyElementInteractions["PAYMENT_METHOD"] = 3] = "PAYMENT_METHOD";
    // NETWORK_PREDICTION = 4,
    PrivacyElementInteractions[PrivacyElementInteractions["MANAGE_CERTIFICATES"] = 5] = "MANAGE_CERTIFICATES";
    // SAFE_BROWSING = 6,
    // PASSWORD_CHECK = 7,
    PrivacyElementInteractions[PrivacyElementInteractions["IMPROVE_SECURITY"] = 8] = "IMPROVE_SECURITY";
    // COOKIES_ALL = 9,
    // COOKIES_INCOGNITO = 10,
    // COOKIES_THIRD = 11,
    // COOKIES_BLOCK = 12,
    // COOKIES_SESSION = 13,
    // SITE_DATA_REMOVE_ALL = 14,
    // SITE_DATA_REMOVE_FILTERED = 15,
    // SITE_DATA_REMOVE_SITE = 16,
    // COOKIE_DETAILS_REMOVE_ALL = 17,
    // COOKIE_DETAILS_REMOVE_ITEM = 18,
    PrivacyElementInteractions[PrivacyElementInteractions["SITE_DETAILS_CLEAR_DATA"] = 19] = "SITE_DETAILS_CLEAR_DATA";
    PrivacyElementInteractions[PrivacyElementInteractions["THIRD_PARTY_COOKIES_ALLOW"] = 20] = "THIRD_PARTY_COOKIES_ALLOW";
    PrivacyElementInteractions[PrivacyElementInteractions["THIRD_PARTY_COOKIES_BLOCK_IN_INCOGNITO"] = 21] = "THIRD_PARTY_COOKIES_BLOCK_IN_INCOGNITO";
    PrivacyElementInteractions[PrivacyElementInteractions["THIRD_PARTY_COOKIES_BLOCK"] = 22] = "THIRD_PARTY_COOKIES_BLOCK";
    PrivacyElementInteractions[PrivacyElementInteractions["BLOCK_ALL_THIRD_PARTY_COOKIES"] = 23] = "BLOCK_ALL_THIRD_PARTY_COOKIES";
    // IP_PROTECTION = 24,
    // FINGERPRINTING_PROTECTION = 25,
    // COUNT should be updated whenever new entries are added.
    PrivacyElementInteractions[PrivacyElementInteractions["COUNT"] = 26] = "COUNT";
})(PrivacyElementInteractions || (PrivacyElementInteractions = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/settings/enums.xml:SettingsPrivacyElementInteractions)
/**
 * Contains all Safety Hub card states.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SafetyHubCardState in
 * histograms/enums.xml and CardState in safety_hub/safety_hub_browser_proxy.ts.
 */
// LINT.IfChange(SafetyHubCardState)
export var SafetyHubCardState;
(function (SafetyHubCardState) {
    SafetyHubCardState[SafetyHubCardState["WARNING"] = 0] = "WARNING";
    SafetyHubCardState[SafetyHubCardState["WEAK"] = 1] = "WEAK";
    SafetyHubCardState[SafetyHubCardState["INFO"] = 2] = "INFO";
    SafetyHubCardState[SafetyHubCardState["SAFE"] = 3] = "SAFE";
    // COUNT should be updated whenever new entries are added.
    SafetyHubCardState[SafetyHubCardState["COUNT"] = 4] = "COUNT";
})(SafetyHubCardState || (SafetyHubCardState = {}));
// LINT.ThenChange(
//   //chrome/browser/resources/settings/safety_hub/safety_hub_browser_proxy.ts:CardState,
//   //tools/metrics/histograms/metadata/settings/enums.xml:SafetyHubCardState
// )
/**
 * Contains all safety check unused site permissions module interactions.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the
 * SafetyCheckUnusedSitePermissionsModuleInteractions enum in
 * histograms/enums.xml
 */
// LINT.IfChange(SafetyCheckUnusedSitePermissionsModuleInteractions)
export var SafetyCheckUnusedSitePermissionsModuleInteractions;
(function (SafetyCheckUnusedSitePermissionsModuleInteractions) {
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["OPEN_REVIEW_UI"] = 0] = "OPEN_REVIEW_UI";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["ALLOW_AGAIN"] = 1] = "ALLOW_AGAIN";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["ACKNOWLEDGE_ALL"] = 2] = "ACKNOWLEDGE_ALL";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["UNDO_ALLOW_AGAIN"] = 3] = "UNDO_ALLOW_AGAIN";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["UNDO_ACKNOWLEDGE_ALL"] = 4] = "UNDO_ACKNOWLEDGE_ALL";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["MINIMIZE"] = 5] = "MINIMIZE";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["GO_TO_SETTINGS"] = 6] = "GO_TO_SETTINGS";
    // COUNT should be updated whenever new entries are added.
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["COUNT"] = 7] = "COUNT";
})(SafetyCheckUnusedSitePermissionsModuleInteractions || (SafetyCheckUnusedSitePermissionsModuleInteractions = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/settings/enums.xml:SafetyCheckUnusedSitePermissionsModuleInteractions)
/**
 * Contains all entry points for Safety Hub page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SafetyHubEntryPoint enum in
 * histograms/enums.xml and safety_hub/safety_hub_constants.h.
 */
// LINT.IfChange(SafetyHubEntryPoint)
export var SafetyHubEntryPoint;
(function (SafetyHubEntryPoint) {
    SafetyHubEntryPoint[SafetyHubEntryPoint["PRIVACY_SAFE"] = 0] = "PRIVACY_SAFE";
    SafetyHubEntryPoint[SafetyHubEntryPoint["PRIVACY_WARNING"] = 1] = "PRIVACY_WARNING";
    SafetyHubEntryPoint[SafetyHubEntryPoint["SITE_SETTINGS"] = 2] = "SITE_SETTINGS";
    SafetyHubEntryPoint[SafetyHubEntryPoint["THREE_DOT_MENU"] = 3] = "THREE_DOT_MENU";
    SafetyHubEntryPoint[SafetyHubEntryPoint["NOTIFICATIONS"] = 4] = "NOTIFICATIONS";
    // COUNT should be updated whenever new entries are added.
    SafetyHubEntryPoint[SafetyHubEntryPoint["COUNT"] = 5] = "COUNT";
})(SafetyHubEntryPoint || (SafetyHubEntryPoint = {}));
// LINT.ThenChange(
//   //tools/metrics/histograms/metadata/settings/enums.xml:SafetyHubEntryPoint,
//   //chrome/browser/ui/safety_hub/safety_hub_constants.h:SafetyHubEntryPoint
// )
/**
 * Contains all Safety Hub modules.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SafetyHubModuleType enum in
 * histograms/enums.xml and safety_hub/safety_hub_constants.h.
 */
// LINT.IfChange(SafetyHubModuleType)
export var SafetyHubModuleType;
(function (SafetyHubModuleType) {
    SafetyHubModuleType[SafetyHubModuleType["PERMISSIONS"] = 0] = "PERMISSIONS";
    SafetyHubModuleType[SafetyHubModuleType["NOTIFICATIONS"] = 1] = "NOTIFICATIONS";
    SafetyHubModuleType[SafetyHubModuleType["SAFE_BROWSING"] = 2] = "SAFE_BROWSING";
    SafetyHubModuleType[SafetyHubModuleType["EXTENSIONS"] = 3] = "EXTENSIONS";
    SafetyHubModuleType[SafetyHubModuleType["PASSWORDS"] = 4] = "PASSWORDS";
    SafetyHubModuleType[SafetyHubModuleType["VERSION"] = 5] = "VERSION";
    // COUNT should be updated whenever new entries are added.
    SafetyHubModuleType[SafetyHubModuleType["COUNT"] = 6] = "COUNT";
})(SafetyHubModuleType || (SafetyHubModuleType = {}));
// LINT.ThenChange(
//   //tools/metrics/histograms/metadata/settings/enums.xml:SafetyHubModuleType,
//   //chrome/browser/ui/safety_hub/safety_hub_constants.h:SafetyHubModuleType
// )
/**
 * Contains all safe browsing interactions.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the UserAction in safe_browsing_settings_metrics.h.
 */
// LINT.IfChange(SafeBrowsingInteractions)
export var SafeBrowsingInteractions;
(function (SafeBrowsingInteractions) {
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_SHOWED"] = 0] = "SAFE_BROWSING_SHOWED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_ENHANCED_PROTECTION_CLICKED"] = 1] = "SAFE_BROWSING_ENHANCED_PROTECTION_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_STANDARD_PROTECTION_CLICKED"] = 2] = "SAFE_BROWSING_STANDARD_PROTECTION_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_DISABLE_SAFE_BROWSING_CLICKED"] = 3] = "SAFE_BROWSING_DISABLE_SAFE_BROWSING_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_ENHANCED_PROTECTION_EXPAND_ARROW_CLICKED"] = 4] = "SAFE_BROWSING_ENHANCED_PROTECTION_EXPAND_ARROW_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_STANDARD_PROTECTION_EXPAND_ARROW_CLICKED"] = 5] = "SAFE_BROWSING_STANDARD_PROTECTION_EXPAND_ARROW_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_CONFIRMED"] = 6] = "SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_CONFIRMED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_DENIED"] = 7] = "SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_DENIED";
    // COUNT should be updated whenever new entries are added.
    SafeBrowsingInteractions[SafeBrowsingInteractions["COUNT"] = 8] = "COUNT";
})(SafeBrowsingInteractions || (SafeBrowsingInteractions = {}));
// LINT.ThenChange(//components/safe_browsing/core/common/safe_browsing_settings_metrics.h:UserAction)
/**
 * All Privacy guide interactions with metrics.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SettingsPrivacyGuideInteractions in emus.xml and
 * PrivacyGuideInteractions in privacy_guide/privacy_guide.h.
 */
// LINT.IfChange(PrivacyGuideInteractions)
export var PrivacyGuideInteractions;
(function (PrivacyGuideInteractions) {
    PrivacyGuideInteractions[PrivacyGuideInteractions["WELCOME_NEXT_BUTTON"] = 0] = "WELCOME_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["MSBB_NEXT_BUTTON"] = 1] = "MSBB_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["HISTORY_SYNC_NEXT_BUTTON"] = 2] = "HISTORY_SYNC_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["SAFE_BROWSING_NEXT_BUTTON"] = 3] = "SAFE_BROWSING_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["COOKIES_NEXT_BUTTON"] = 4] = "COOKIES_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["COMPLETION_NEXT_BUTTON"] = 5] = "COMPLETION_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["SETTINGS_LINK_ROW_ENTRY"] = 6] = "SETTINGS_LINK_ROW_ENTRY";
    PrivacyGuideInteractions[PrivacyGuideInteractions["PROMO_ENTRY"] = 7] = "PROMO_ENTRY";
    PrivacyGuideInteractions[PrivacyGuideInteractions["SWAA_COMPLETION_LINK"] = 8] = "SWAA_COMPLETION_LINK";
    PrivacyGuideInteractions[PrivacyGuideInteractions["PRIVACY_SANDBOX_COMPLETION_LINK"] = 9] = "PRIVACY_SANDBOX_COMPLETION_LINK";
    PrivacyGuideInteractions[PrivacyGuideInteractions["SEARCH_SUGGESTIONS_NEXT_BUTTON"] = 10] = "SEARCH_SUGGESTIONS_NEXT_BUTTON";
    // TRACKING_PROTECTION_COMPLETION_LINK = 11, // OBSOLETE
    // AD_TOPICS_NEXT_BUTTON = 12, // OBSOLETE
    PrivacyGuideInteractions[PrivacyGuideInteractions["AI_SETTINGS_COMPLETION_LINK"] = 13] = "AI_SETTINGS_COMPLETION_LINK";
    // COUNT should be updated whenever new entries are added.
    PrivacyGuideInteractions[PrivacyGuideInteractions["COUNT"] = 14] = "COUNT";
})(PrivacyGuideInteractions || (PrivacyGuideInteractions = {}));
// LINT.ThenChange(
//   //chrome/browser/privacy_guide/privacy_guide.h:PrivacyGuideInteractions,
//   //tools/metrics/histograms/metadata/settings/enums.xml:SettingsPrivacyGuideInteractions
// )
/**
 * This enum covers all possible combinations of the start and end
 * settings states for each Privacy guide fragment, allowing metrics to see if
 * users change their settings inside of Privacy guide or not. The format is
 * settingAtStart-To-settingAtEnd.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SettingsPrivacyGuideSettingsStates in enums.xml and
 * PrivacyGuideSettingsStates in privacy_guide/privacy_guide.h.
 */
// LINT.IfChange(PrivacyGuideSettingsStates)
export var PrivacyGuideSettingsStates;
(function (PrivacyGuideSettingsStates) {
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["MSBB_ON_TO_ON"] = 0] = "MSBB_ON_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["MSBB_ON_TO_OFF"] = 1] = "MSBB_ON_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["MSBB_OFF_TO_ON"] = 2] = "MSBB_OFF_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["MSBB_OFF_TO_OFF"] = 3] = "MSBB_OFF_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["BLOCK_3P_INCOGNITO_TO_3P_INCOGNITO"] = 4] = "BLOCK_3P_INCOGNITO_TO_3P_INCOGNITO";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["BLOCK_3P_INCOGNITO_TO_3P"] = 5] = "BLOCK_3P_INCOGNITO_TO_3P";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["BLOCK_3P_TO_3P_INCOGNITO"] = 6] = "BLOCK_3P_TO_3P_INCOGNITO";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["BLOCK_3P_TO_3P"] = 7] = "BLOCK_3P_TO_3P";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["HISTORY_SYNC_ON_TO_ON"] = 8] = "HISTORY_SYNC_ON_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["HISTORY_SYNC_ON_TO_OFF"] = 9] = "HISTORY_SYNC_ON_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["HISTORY_SYNC_OFF_TO_ON"] = 10] = "HISTORY_SYNC_OFF_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["HISTORY_SYNC_OFF_TO_OFF"] = 11] = "HISTORY_SYNC_OFF_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SAFE_BROWSING_ENHANCED_TO_ENHANCED"] = 12] = "SAFE_BROWSING_ENHANCED_TO_ENHANCED";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SAFE_BROWSING_ENHANCED_TO_STANDARD"] = 13] = "SAFE_BROWSING_ENHANCED_TO_STANDARD";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SAFE_BROWSING_STANDARD_TO_ENHANCED"] = 14] = "SAFE_BROWSING_STANDARD_TO_ENHANCED";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SAFE_BROWSING_STANDARD_TO_STANDARD"] = 15] = "SAFE_BROWSING_STANDARD_TO_STANDARD";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SEARCH_SUGGESTIONS_ON_TO_ON"] = 16] = "SEARCH_SUGGESTIONS_ON_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SEARCH_SUGGESTIONS_ON_TO_OFF"] = 17] = "SEARCH_SUGGESTIONS_ON_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SEARCH_SUGGESTIONS_OFF_TO_ON"] = 18] = "SEARCH_SUGGESTIONS_OFF_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SEARCH_SUGGESTIONS_OFF_TO_OFF"] = 19] = "SEARCH_SUGGESTIONS_OFF_TO_OFF";
    // AD_TOPICS_ON_TO_ON = 20, // OBSOLETE
    // AD_TOPICS_ON_TO_OFF = 21, // OBSOLETE
    // AD_TOPICS_OFF_TO_ON = 22, // OBSOLETE
    // AD_TOPICS_OFF_TO_OFF = 23, // OBSOLETE
    // COUNT should be updated whenever new entries are added.
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["COUNT"] = 24] = "COUNT";
})(PrivacyGuideSettingsStates || (PrivacyGuideSettingsStates = {}));
// LINT.ThenChange(
//   //chrome/browser/privacy_guide/privacy_guide.h:PrivacyGuideSettingsStates,
//   //tools/metrics/histograms/metadata/settings/enums.xml:SettingsPrivacyGuideSettingsStates
// )
/**
 * This enum is used with metrics to record when a step in the privacy guide is
 * eligible to be shown and/or reached by the user.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SettingsPrivacyGuideStepsEligibleAndReached in
 * enums.xml and PrivacyGuideStepsEligibleAndReached in
 * privacy_guide/privacy_guide.h.
 */
// LINT.IfChange(PrivacyGuideStepsEligibleAndReached)
export var PrivacyGuideStepsEligibleAndReached;
(function (PrivacyGuideStepsEligibleAndReached) {
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["MSBB_ELIGIBLE"] = 0] = "MSBB_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["MSBB_REACHED"] = 1] = "MSBB_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["HISTORY_SYNC_ELIGIBLE"] = 2] = "HISTORY_SYNC_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["HISTORY_SYNC_REACHED"] = 3] = "HISTORY_SYNC_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["SAFE_BROWSING_ELIGIBLE"] = 4] = "SAFE_BROWSING_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["SAFE_BROWSING_REACHED"] = 5] = "SAFE_BROWSING_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COOKIES_ELIGIBLE"] = 6] = "COOKIES_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COOKIES_REACHED"] = 7] = "COOKIES_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COMPLETION_ELIGIBLE"] = 8] = "COMPLETION_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COMPLETION_REACHED"] = 9] = "COMPLETION_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["SEARCH_SUGGESTIONS_ELIGIBLE"] = 10] = "SEARCH_SUGGESTIONS_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["SEARCH_SUGGESTIONS_REACHED"] = 11] = "SEARCH_SUGGESTIONS_REACHED";
    // AD_TOPICS_ELIGIBLE = 12, // OBSOLETE
    // AD_TOPICS_REACHED = 13, // OBSOLETE
    // Leave this at the end.
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COUNT"] = 14] = "COUNT";
})(PrivacyGuideStepsEligibleAndReached || (PrivacyGuideStepsEligibleAndReached = {}));
// LINT.ThenChange(
//   //chrome/browser/privacy_guide/privacy_guide.h:PrivacyGuideStepsEligibleAndReached,
//   //tools/metrics/histograms/metadata/settings/enums.xml:SettingsPrivacyGuideStepsEligibleAndReached
// )
/**
 * Contains the possible delete browsing data action types.
 * This should be kept in sync with the `DeleteBrowsingDataAction` enum in
 * components/browsing_data/core/browsing_data_utils.h
 */
// LINT.IfChange(DeleteBrowsingDataAction)
export var DeleteBrowsingDataAction;
(function (DeleteBrowsingDataAction) {
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["CLEAR_BROWSING_DATA_DIALOG"] = 0] = "CLEAR_BROWSING_DATA_DIALOG";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["CLEAR_BROWSING_DATA_ON_EXIT"] = 1] = "CLEAR_BROWSING_DATA_ON_EXIT";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["INCOGNITO_CLOSE_TABS"] = 2] = "INCOGNITO_CLOSE_TABS";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["COOKIES_IN_USE_DIALOG"] = 3] = "COOKIES_IN_USE_DIALOG";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["SITES_SETTINGS_PAGE"] = 4] = "SITES_SETTINGS_PAGE";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["HISTORY_PAGE_ENTRIES"] = 5] = "HISTORY_PAGE_ENTRIES";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["QUICK_DELETE"] = 6] = "QUICK_DELETE";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["PAGE_INFO_RESET_PERMISSIONS"] = 7] = "PAGE_INFO_RESET_PERMISSIONS";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["RWS_DELETE_ALL_DATA"] = 8] = "RWS_DELETE_ALL_DATA";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["COUNT"] = 9] = "COUNT";
})(DeleteBrowsingDataAction || (DeleteBrowsingDataAction = {}));
// LINT.ThenChange(
//   //components/browsing_data/core/browsing_data_utils.h:DeleteBrowsingDataAction,
//   //tools/metrics/histograms/metadata/privacy/enums.xml:DeleteBrowsingDataAction
// )
/**
 * This enum contains the different surfaces of Safety Hub that users can
 * interact with, or on which they can observe a Safety Hub feature.
 *
 * Must be kept in sync with the `safety_hub::SafetyHubSurfaces` enum in
 * chrome/browser/ui/safety_hub/safety_hub_constants.h and `SafetyHubSurfaces`
 * in enums.xml
 */
// LINT.IfChange(SafetyHubSurfaces)
export var SafetyHubSurfaces;
(function (SafetyHubSurfaces) {
    SafetyHubSurfaces[SafetyHubSurfaces["THREE_DOT_MENU"] = 0] = "THREE_DOT_MENU";
    SafetyHubSurfaces[SafetyHubSurfaces["SAFETY_HUB_PAGE"] = 1] = "SAFETY_HUB_PAGE";
    SafetyHubSurfaces[SafetyHubSurfaces["COUNT"] = 2] = "COUNT";
})(SafetyHubSurfaces || (SafetyHubSurfaces = {}));
// LINT.ThenChange(
//   //tools/metrics/histograms/metadata/settings/enums.xml:SafetyHubSurfaces,
//   //chrome/browser/ui/safety_hub/safety_hub_constants.h:SafetyHubSurfaces
// )
/**
 * This enum contains the possible user actions for the bulk CVC deletion
 * operation on the payments settings page.
 */
export var CvcDeletionUserAction;
(function (CvcDeletionUserAction) {
    CvcDeletionUserAction["HYPERLINK_CLICKED"] = "BulkCvcDeletionHyperlinkClicked";
    CvcDeletionUserAction["DIALOG_ACCEPTED"] = "BulkCvcDeletionConfirmationDialogAccepted";
    CvcDeletionUserAction["DIALOG_CANCELLED"] = "BulkCvcDeletionConfirmationDialogCancelled";
})(CvcDeletionUserAction || (CvcDeletionUserAction = {}));
/**
 * This enum contains relevant UserAction log names for card benefits-related
 * functionality on the payment methods settings page.
 */
export var CardBenefitsUserAction;
(function (CardBenefitsUserAction) {
    CardBenefitsUserAction["CARD_BENEFITS_TERMS_LINK_CLICKED"] = "CardBenefits_TermsLinkClicked";
})(CardBenefitsUserAction || (CardBenefitsUserAction = {}));
/**
 * Contains all recorded interactions across AI settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsAiPageInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
// LINT.IfChange(AiPageInteractions)
export var AiPageInteractions;
(function (AiPageInteractions) {
    AiPageInteractions[AiPageInteractions["HISTORY_SEARCH_CLICK"] = 0] = "HISTORY_SEARCH_CLICK";
    // COMPARE_CLICK = 1, // DEPRECATED
    AiPageInteractions[AiPageInteractions["COMPOSE_CLICK"] = 2] = "COMPOSE_CLICK";
    // TAB_ORGANIZATION_CLICK = 3, // DEPRECATED
    // WALLPAPER_SEARCH_CLICK = 4, // DEPRECATED
    AiPageInteractions[AiPageInteractions["AUTOFILL_AI_CLICK"] = 5] = "AUTOFILL_AI_CLICK";
    AiPageInteractions[AiPageInteractions["PASSWORD_CHANGE_CLICK"] = 6] = "PASSWORD_CHANGE_CLICK";
    AiPageInteractions[AiPageInteractions["AI_SUGGESTIONS_CLICK"] = 7] = "AI_SUGGESTIONS_CLICK";
    AiPageInteractions[AiPageInteractions["SKILLS_CLICK"] = 8] = "SKILLS_CLICK";
    AiPageInteractions[AiPageInteractions["INDIGO_CLICK"] = 9] = "INDIGO_CLICK";
    AiPageInteractions[AiPageInteractions["GOOGLE_SEARCH_AI_MODE_WORKSPACE_CLICK"] = 10] = "GOOGLE_SEARCH_AI_MODE_WORKSPACE_CLICK";
    AiPageInteractions[AiPageInteractions["INLINE_CUE_MENU_CLICK"] = 11] = "INLINE_CUE_MENU_CLICK";
    AiPageInteractions[AiPageInteractions["COUNT"] = 12] = "COUNT";
})(AiPageInteractions || (AiPageInteractions = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/settings/enums.xml:SettingsAiPageInteractions)
/**
 * Contains all recorded interactions in the AI History Search settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsAiPageHistorySearchInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
// LINT.IfChange(AiPageHistorySearchInteractions)
export var AiPageHistorySearchInteractions;
(function (AiPageHistorySearchInteractions) {
    AiPageHistorySearchInteractions[AiPageHistorySearchInteractions["HISTORY_SEARCH_ENABLED"] = 0] = "HISTORY_SEARCH_ENABLED";
    AiPageHistorySearchInteractions[AiPageHistorySearchInteractions["HISTORY_SEARCH_DISABLED"] = 1] = "HISTORY_SEARCH_DISABLED";
    AiPageHistorySearchInteractions[AiPageHistorySearchInteractions["FEATURE_LINK_CLICKED"] = 2] = "FEATURE_LINK_CLICKED";
    AiPageHistorySearchInteractions[AiPageHistorySearchInteractions["LEARN_MORE_LINK_CLICKED"] = 3] = "LEARN_MORE_LINK_CLICKED";
    AiPageHistorySearchInteractions[AiPageHistorySearchInteractions["COUNT"] = 4] = "COUNT";
})(AiPageHistorySearchInteractions || (AiPageHistorySearchInteractions = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/settings/enums.xml:SettingsAiPageHistorySearchInteractions)
/**
 * Contains all recorded interactions in the AI Compose settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsAiPageComposeInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
// LINT.IfChange(AiPageComposeInteractions)
export var AiPageComposeInteractions;
(function (AiPageComposeInteractions) {
    AiPageComposeInteractions[AiPageComposeInteractions["LEARN_MORE_LINK_CLICKED"] = 0] = "LEARN_MORE_LINK_CLICKED";
    AiPageComposeInteractions[AiPageComposeInteractions["COMPOSE_PROACTIVE_NUDGE_ENABLED"] = 1] = "COMPOSE_PROACTIVE_NUDGE_ENABLED";
    AiPageComposeInteractions[AiPageComposeInteractions["COMPOSE_PROACTIVE_NUDGE_DISABLED"] = 2] = "COMPOSE_PROACTIVE_NUDGE_DISABLED";
    AiPageComposeInteractions[AiPageComposeInteractions["COUNT"] = 3] = "COUNT";
})(AiPageComposeInteractions || (AiPageComposeInteractions = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/settings/enums.xml:SettingsAiPageComposeInteractions)
/**
 * Contains all recorded interactions in the AI Suggestions settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsAiPageSuggestionsInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
// LINT.IfChange(AiPageSuggestionsInteractions)
export var AiPageSuggestionsInteractions;
(function (AiPageSuggestionsInteractions) {
    AiPageSuggestionsInteractions[AiPageSuggestionsInteractions["SUGGESTIONS_ENABLED"] = 0] = "SUGGESTIONS_ENABLED";
    AiPageSuggestionsInteractions[AiPageSuggestionsInteractions["SUGGESTIONS_DISABLED"] = 1] = "SUGGESTIONS_DISABLED";
    AiPageSuggestionsInteractions[AiPageSuggestionsInteractions["LEARN_MORE_LINK_CLICKED"] = 2] = "LEARN_MORE_LINK_CLICKED";
    AiPageSuggestionsInteractions[AiPageSuggestionsInteractions["SYNC_SETTINGS_LINK_CLICKED"] = 3] = "SYNC_SETTINGS_LINK_CLICKED";
    AiPageSuggestionsInteractions[AiPageSuggestionsInteractions["COUNT"] = 4] = "COUNT";
})(AiPageSuggestionsInteractions || (AiPageSuggestionsInteractions = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/settings/enums.xml:SettingsAiPageAiSuggestionsInteractions)
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the AutofillSettingsReferrer enum in
 * histograms/metadata/autofill/enums.xml
 */
// LINT.IfChange(AutofillSettingsReferrer)
export var AutofillSettingsReferrer;
(function (AutofillSettingsReferrer) {
    // PROFILE_MENU = 0,
    AutofillSettingsReferrer[AutofillSettingsReferrer["SETTINGS_MENU"] = 1] = "SETTINGS_MENU";
    AutofillSettingsReferrer[AutofillSettingsReferrer["AUTOFILL_AND_PASSWORDS_PAGE"] = 2] = "AUTOFILL_AND_PASSWORDS_PAGE";
    // FILLING_FLOW_DROPDOWN = 3,
    // SETTINGS_SEARCH = 4,
    AutofillSettingsReferrer[AutofillSettingsReferrer["COUNT"] = 5] = "COUNT";
})(AutofillSettingsReferrer || (AutofillSettingsReferrer = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/autofill/enums.xml:AutofillSettingsReferrer)
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the YourSavedInfoDataCategory enum in
 * histograms/metadata/autofill/enums.xml
 */
// LINT.IfChange(YourSavedInfoDataCategory)
export var YourSavedInfoDataCategory;
(function (YourSavedInfoDataCategory) {
    YourSavedInfoDataCategory[YourSavedInfoDataCategory["PASSWORD_MANAGER"] = 0] = "PASSWORD_MANAGER";
    YourSavedInfoDataCategory[YourSavedInfoDataCategory["PAYMENTS"] = 1] = "PAYMENTS";
    YourSavedInfoDataCategory[YourSavedInfoDataCategory["CONTACT_INFO"] = 2] = "CONTACT_INFO";
    YourSavedInfoDataCategory[YourSavedInfoDataCategory["IDENTITY_DOCS"] = 3] = "IDENTITY_DOCS";
    YourSavedInfoDataCategory[YourSavedInfoDataCategory["TRAVEL"] = 4] = "TRAVEL";
    YourSavedInfoDataCategory[YourSavedInfoDataCategory["SHOPPING"] = 5] = "SHOPPING";
    YourSavedInfoDataCategory[YourSavedInfoDataCategory["COUNT"] = 6] = "COUNT";
})(YourSavedInfoDataCategory || (YourSavedInfoDataCategory = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/autofill/enums.xml:YourSavedInfoDataCategory)
/**
 * A specific kind of saved user's information.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the YourSavedInfoDataChip enum in
 * histograms/metadata/autofill/enums.xml
 */
// LINT.IfChange(YourSavedInfoDataChip)
export var YourSavedInfoDataChip;
(function (YourSavedInfoDataChip) {
    YourSavedInfoDataChip[YourSavedInfoDataChip["PASSWORDS"] = 0] = "PASSWORDS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["PASSKEYS"] = 1] = "PASSKEYS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["CREDIT_CARDS"] = 2] = "CREDIT_CARDS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["PAY_OVER_TIME"] = 3] = "PAY_OVER_TIME";
    YourSavedInfoDataChip[YourSavedInfoDataChip["IBANS"] = 4] = "IBANS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["LOYALTY_CARDS"] = 5] = "LOYALTY_CARDS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["ADDRESSES"] = 6] = "ADDRESSES";
    YourSavedInfoDataChip[YourSavedInfoDataChip["DRIVERS_LICENSES"] = 7] = "DRIVERS_LICENSES";
    YourSavedInfoDataChip[YourSavedInfoDataChip["NATIONAL_ID_CARDS"] = 8] = "NATIONAL_ID_CARDS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["PASSPORTS"] = 9] = "PASSPORTS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["FLIGHT_RESERVATIONS"] = 10] = "FLIGHT_RESERVATIONS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["TRAVEL_INFO"] = 11] = "TRAVEL_INFO";
    YourSavedInfoDataChip[YourSavedInfoDataChip["VEHICLES"] = 12] = "VEHICLES";
    YourSavedInfoDataChip[YourSavedInfoDataChip["SHIPMENTS"] = 13] = "SHIPMENTS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["ORDERS"] = 14] = "ORDERS";
    YourSavedInfoDataChip[YourSavedInfoDataChip["COUNT"] = 15] = "COUNT";
})(YourSavedInfoDataChip || (YourSavedInfoDataChip = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/autofill/enums.xml:YourSavedInfoDataChip)
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the YourSavedInfoDataCategory enum in
 * histograms/metadata/autofill/enums.xml
 */
// LINT.IfChange(YourSavedInfoRelatedService)
export var YourSavedInfoRelatedService;
(function (YourSavedInfoRelatedService) {
    YourSavedInfoRelatedService[YourSavedInfoRelatedService["GOOGLE_PASSWORD_MANAGER"] = 0] = "GOOGLE_PASSWORD_MANAGER";
    YourSavedInfoRelatedService[YourSavedInfoRelatedService["GOOGLE_WALLET"] = 1] = "GOOGLE_WALLET";
    YourSavedInfoRelatedService[YourSavedInfoRelatedService["GOOGLE_ACCOUNT"] = 2] = "GOOGLE_ACCOUNT";
    YourSavedInfoRelatedService[YourSavedInfoRelatedService["COUNT"] = 3] = "COUNT";
})(YourSavedInfoRelatedService || (YourSavedInfoRelatedService = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/autofill/enums.xml:YourSavedInfoRelatedService)
// LINT.IfChange(SuggestionsFromGeminiEntryPoint)
export var SuggestionsFromGeminiEntryPoint;
(function (SuggestionsFromGeminiEntryPoint) {
    SuggestionsFromGeminiEntryPoint[SuggestionsFromGeminiEntryPoint["YOUR_SAVED_INFO"] = 0] = "YOUR_SAVED_INFO";
    SuggestionsFromGeminiEntryPoint[SuggestionsFromGeminiEntryPoint["TRAVEL"] = 1] = "TRAVEL";
    SuggestionsFromGeminiEntryPoint[SuggestionsFromGeminiEntryPoint["SHOPPING"] = 2] = "SHOPPING";
    SuggestionsFromGeminiEntryPoint[SuggestionsFromGeminiEntryPoint["IDENTITY_DOCS"] = 3] = "IDENTITY_DOCS";
    SuggestionsFromGeminiEntryPoint[SuggestionsFromGeminiEntryPoint["COUNT"] = 4] = "COUNT";
})(SuggestionsFromGeminiEntryPoint || (SuggestionsFromGeminiEntryPoint = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/autofill/enums.xml:SuggestionsFromGeminiEntryPoint)
// LINT.IfChange(SuggestionsFromGeminiAction)
export var SuggestionsFromGeminiAction;
(function (SuggestionsFromGeminiAction) {
    SuggestionsFromGeminiAction[SuggestionsFromGeminiAction["MANAGE_CONNECTED_APPS_CLICK"] = 0] = "MANAGE_CONNECTED_APPS_CLICK";
    SuggestionsFromGeminiAction[SuggestionsFromGeminiAction["TOGGLE_ON"] = 1] = "TOGGLE_ON";
    SuggestionsFromGeminiAction[SuggestionsFromGeminiAction["TOGGLE_OFF"] = 2] = "TOGGLE_OFF";
    SuggestionsFromGeminiAction[SuggestionsFromGeminiAction["COUNT"] = 3] = "COUNT";
})(SuggestionsFromGeminiAction || (SuggestionsFromGeminiAction = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/autofill/enums.xml:SuggestionsFromGeminiAction)
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsSearchExitReasonDesktop enum in
 * histograms/metadata/settings/enums.xml
 */
// LINT.IfChange(SettingsSearchExitReasonDesktop)
export var SettingsSearchExitReasonDesktop;
(function (SettingsSearchExitReasonDesktop) {
    SettingsSearchExitReasonDesktop[SettingsSearchExitReasonDesktop["INTERACTED_WITH_RESULT"] = 0] = "INTERACTED_WITH_RESULT";
    SettingsSearchExitReasonDesktop[SettingsSearchExitReasonDesktop["CLEAR_QUERY"] = 1] = "CLEAR_QUERY";
    SettingsSearchExitReasonDesktop[SettingsSearchExitReasonDesktop["NAVIGATE_SIDEBAR"] = 2] = "NAVIGATE_SIDEBAR";
    SettingsSearchExitReasonDesktop[SettingsSearchExitReasonDesktop["EXIT_SETTINGS"] = 3] = "EXIT_SETTINGS";
    SettingsSearchExitReasonDesktop[SettingsSearchExitReasonDesktop["BACK_NAVIGATION"] = 4] = "BACK_NAVIGATION";
    SettingsSearchExitReasonDesktop[SettingsSearchExitReasonDesktop["COUNT"] = 5] = "COUNT";
})(SettingsSearchExitReasonDesktop || (SettingsSearchExitReasonDesktop = {}));
export const SAFETY_HUB_SUGGESTIONS_MAX_VALUE = 98;
export class MetricsBrowserProxyImpl {
    recordSettingsSearchExitReason(reason) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.Search.ExitReasonDesktop',
            reason,
            SettingsSearchExitReasonDesktop.COUNT,
        ]);
    }
    recordSettingsSearchResultDwellTime(time) {
        // The caller drops dwell times longer than one hour, which is wider than
        // the 3 minute range of 'metricsHandler:recordMediumTime'. MetricsHandler
        // exposes no recordLongTime message, so record through metricsPrivate.
        chrome.metricsPrivate.recordLongTime('Settings.Search.ResultDwellTime', time);
    }
    recordSettingsNavCategoryClicked() {
        chrome.send('recordSettingsNavCategoryClicked');
    }
    recordSettingsSearchQueryEntered() {
        chrome.send('recordSettingsSearchQueryEntered');
    }
    recordAction(action) {
        chrome.send('metricsHandler:recordAction', [action]);
    }
    recordBooleanHistogram(histogramName, visible) {
        chrome.send('metricsHandler:recordBooleanHistogram', [
            histogramName,
            visible,
        ]);
    }
    recordSafetyHubCardStateClicked(histogramName, state) {
        chrome.send('metricsHandler:recordInHistogram', [histogramName, state, SafetyHubCardState.COUNT]);
    }
    recordSafetyHubEntryPointShown(page) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyHub.EntryPointImpression',
            page,
            SafetyHubEntryPoint.COUNT,
        ]);
    }
    recordSafetyHubEntryPointClicked(page) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyHub.EntryPointInteraction',
            page,
            SafetyHubEntryPoint.COUNT,
        ]);
    }
    recordSafetyHubModuleWarningImpression(module) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyHub.DashboardWarning',
            module,
            SafetyHubModuleType.COUNT,
        ]);
    }
    recordSafetyHubDashboardAnyWarning(visible) {
        chrome.send('metricsHandler:recordBooleanHistogram', [
            'Settings.SafetyHub.HasDashboardShowAnyWarning',
            visible,
        ]);
    }
    recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyHub.UnusedSitePermissionsModule.Interactions',
            interaction,
            SafetyCheckUnusedSitePermissionsModuleInteractions.COUNT,
        ]);
    }
    recordSafetyHubAbusiveNotificationPermissionRevocationInteractionsHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyHub.AbusiveNotificationPermissionRevocation.Interactions',
            interaction,
            SafetyCheckUnusedSitePermissionsModuleInteractions.COUNT,
        ]);
    }
    recordSafetyHubUnusedSitePermissionsModuleListCountHistogram(suggestions) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyHub.UnusedSitePermissionsModule.ListCount',
            Math.min(suggestions, SAFETY_HUB_SUGGESTIONS_MAX_VALUE),
            SAFETY_HUB_SUGGESTIONS_MAX_VALUE + 1,
        ]);
    }
    recordSettingsPageHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyElementInteractions',
            interaction,
            PrivacyElementInteractions.COUNT,
        ]);
    }
    recordSafeBrowsingInteractionHistogram(interaction) {
        // TODO(crbug.com/40717279): Set the correct suffix for
        // SafeBrowsing.Settings.UserAction. Use the .Default suffix for now.
        chrome.send('metricsHandler:recordInHistogram', [
            'SafeBrowsing.Settings.UserAction.Default',
            interaction,
            SafeBrowsingInteractions.COUNT,
        ]);
    }
    recordPrivacyGuideNextNavigationHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.NextNavigation',
            interaction,
            PrivacyGuideInteractions.COUNT,
        ]);
    }
    recordPrivacyGuideEntryExitHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.EntryExit',
            interaction,
            PrivacyGuideInteractions.COUNT,
        ]);
    }
    recordPrivacyGuideSettingsStatesHistogram(state) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.SettingsStates',
            state,
            PrivacyGuideSettingsStates.COUNT,
        ]);
    }
    recordPrivacyGuideFlowLengthHistogram(steps) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.FlowLength',
            steps,
            5, /*max number of the settings related steps in privacy guide is 4*/
        ]);
    }
    recordPrivacyGuideStepsEligibleAndReachedHistogram(status) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.StepsEligibleAndReached',
            status,
            PrivacyGuideStepsEligibleAndReached.COUNT,
        ]);
    }
    recordDeleteBrowsingDataAction(action) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Privacy.DeleteBrowsingData.Action',
            action,
            DeleteBrowsingDataAction.COUNT,
        ]);
    }
    recordClearBrowsingDataCancelled() {
        chrome.send('recordClearBrowsingDataCancelled');
    }
    recordSafetyHubImpression(surface) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyHub.Impression',
            surface,
            SafetyHubSurfaces.COUNT,
        ]);
    }
    recordSafetyHubInteraction(surface) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyHub.Interaction',
            surface,
            SafetyHubSurfaces.COUNT,
        ]);
    }
    // 
    recordAiPageInteractions(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.AiPage.Interactions',
            interaction,
            AiPageInteractions.COUNT,
        ]);
    }
    recordAiPageHistorySearchInteractions(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.AiPage.HistorySearch.Interactions',
            interaction,
            AiPageHistorySearchInteractions.COUNT,
        ]);
    }
    recordAiPageComposeInteractions(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.AiPage.Compose.Interactions',
            interaction,
            AiPageComposeInteractions.COUNT,
        ]);
    }
    recordAiPageSuggestionsInteractions(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.AiPage.Suggestions.Interactions',
            interaction,
            AiPageSuggestionsInteractions.COUNT,
        ]);
    }
    recordAutofillSettingsReferrer(histogramName, referrer) {
        chrome.send('metricsHandler:recordInHistogram', [histogramName, referrer, AutofillSettingsReferrer.COUNT]);
    }
    recordYourSavedInfoCategoryClick(category) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Autofill.YourSavedInfoSettingsPage.CategoryLinkClick',
            category,
            YourSavedInfoDataCategory.COUNT,
        ]);
        if (category !== YourSavedInfoDataCategory.COUNT) {
            this.recordAction(`Settings.YourSavedInfo.CategoryClick.${YourSavedInfoDataCategory[category]}`);
        }
    }
    recordYourSavedInfoDataChipClick(chip) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Autofill.YourSavedInfoSettingsPage.DataChipClick',
            chip,
            YourSavedInfoDataChip.COUNT,
        ]);
        if (chip !== YourSavedInfoDataChip.COUNT) {
            this.recordAction(`Settings.YourSavedInfo.ChipClick.${YourSavedInfoDataChip[chip]}`);
        }
    }
    recordYourSavedInfoRelatedServiceClick(service) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Autofill.YourSavedInfoSettingsPage.RelatedServiceLinkClick',
            service,
            YourSavedInfoRelatedService.COUNT,
        ]);
        if (service !== YourSavedInfoRelatedService.COUNT) {
            this.recordAction(`Settings.YourSavedInfo.RelatedServiceClick.${YourSavedInfoRelatedService[service]}`);
        }
    }
    recordSuggestionsFromGeminiEntryPointClick(entryPoint) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Autofill.YourSavedInfoSettingsPage.SuggestionsFromGeminiLinkClick',
            entryPoint,
            SuggestionsFromGeminiEntryPoint.COUNT,
        ]);
        if (entryPoint !== SuggestionsFromGeminiEntryPoint.COUNT) {
            const actionMap = {
                [SuggestionsFromGeminiEntryPoint.YOUR_SAVED_INFO]: 'PersonalContext.Settings.EntryPoint.AutofillAndPasswordsSettings',
                [SuggestionsFromGeminiEntryPoint.TRAVEL]: 'PersonalContext.Settings.EntryPoint.TravelSettings',
                [SuggestionsFromGeminiEntryPoint.SHOPPING]: 'PersonalContext.Settings.EntryPoint.ShoppingSettings',
                [SuggestionsFromGeminiEntryPoint.IDENTITY_DOCS]: 'PersonalContext.Settings.EntryPoint.IdentityDocsSettings',
            };
            this.recordAction(actionMap[entryPoint]);
        }
    }
    recordSuggestionsFromGeminiAction(action) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Autofill.YourSavedInfoSettingsPage.SuggestionsFromGeminiAction',
            action,
            SuggestionsFromGeminiAction.COUNT,
        ]);
        if (action !== SuggestionsFromGeminiAction.COUNT) {
            const actionMap = {
                [SuggestionsFromGeminiAction.MANAGE_CONNECTED_APPS_CLICK]: 'PersonalContext.Settings.ManageConnectedAppsClick',
                [SuggestionsFromGeminiAction.TOGGLE_ON]: 'PersonalContext.Settings.ToggledOn',
                [SuggestionsFromGeminiAction.TOGGLE_OFF]: 'PersonalContext.Settings.ToggledOff',
            };
            this.recordAction(actionMap[action]);
        }
    }
    static getInstance() {
        return instance || (instance = new MetricsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
