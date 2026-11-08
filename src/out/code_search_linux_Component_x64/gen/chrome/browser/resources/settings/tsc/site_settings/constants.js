// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * All possible contentSettingsTypes that we currently support configuring in
 * the UI. Both top-level categories and content settings that represent
 * individual permissions under Site Details should appear here.
 * This should be kept in sync with the |kContentSettingsTypeGroupNames| array
 * in chrome/browser/ui/webui/settings/site_settings_helper.cc. See
 * chrome/browser/resources/settings/site_settings/site_settings_page_util
 * for translations.
 */
export var ContentSettingsTypes;
(function (ContentSettingsTypes) {
    ContentSettingsTypes["ADS"] = "ads";
    ContentSettingsTypes["ANTI_ABUSE"] = "anti-abuse";
    ContentSettingsTypes["AR"] = "ar";
    ContentSettingsTypes["AUTO_PICTURE_IN_PICTURE"] = "auto-picture-in-picture";
    ContentSettingsTypes["AUTOMATIC_DOWNLOADS"] = "multiple-automatic-downloads";
    ContentSettingsTypes["AUTOMATIC_FULLSCREEN"] = "automatic-fullscreen";
    ContentSettingsTypes["BACKGROUND_SYNC"] = "background-sync";
    ContentSettingsTypes["BLUETOOTH_DEVICES"] = "bluetooth-devices";
    ContentSettingsTypes["BLUETOOTH_SCANNING"] = "bluetooth-scanning";
    ContentSettingsTypes["CAMERA"] = "media-stream-camera";
    ContentSettingsTypes["CAPTURED_SURFACE_CONTROL"] = "captured-surface-control";
    ContentSettingsTypes["CLIPBOARD"] = "clipboard";
    ContentSettingsTypes["COOKIES"] = "cookies";
    ContentSettingsTypes["FEDERATED_IDENTITY_API"] = "federated-identity-api";
    ContentSettingsTypes["FILE_SYSTEM_WRITE"] = "file-system-write";
    ContentSettingsTypes["GEOLOCATION"] = "location";
    ContentSettingsTypes["HAND_TRACKING"] = "hand-tracking";
    ContentSettingsTypes["HID_DEVICES"] = "hid-devices";
    ContentSettingsTypes["IDLE_DETECTION"] = "idle-detection";
    ContentSettingsTypes["IMAGES"] = "images";
    ContentSettingsTypes["INLINE_CUE_MENU"] = "inline-cue-menu";
    ContentSettingsTypes["JAVASCRIPT"] = "javascript";
    ContentSettingsTypes["JAVASCRIPT_OPTIMIZER"] = "javascript-optimizer";
    ContentSettingsTypes["KEYBOARD_LOCK"] = "keyboard-lock";
    ContentSettingsTypes["LOCAL_FONTS"] = "local-fonts";
    ContentSettingsTypes["LOCAL_NETWORK"] = "local-network";
    ContentSettingsTypes["LOOPBACK_NETWORK"] = "loopback-network";
    ContentSettingsTypes["MIC"] = "media-stream-mic";
    ContentSettingsTypes["MIDI_DEVICES"] = "midi-sysex";
    ContentSettingsTypes["MIXEDSCRIPT"] = "mixed-script";
    ContentSettingsTypes["NOTIFICATIONS"] = "notifications";
    ContentSettingsTypes["PAYMENT_HANDLER"] = "payment-handler";
    ContentSettingsTypes["PERFORMANCE"] = "performance";
    ContentSettingsTypes["POINTER_LOCK"] = "pointer-lock";
    ContentSettingsTypes["POPUPS"] = "popups";
    ContentSettingsTypes["PROTECTED_CONTENT"] = "protected-content";
    ContentSettingsTypes["PROTOCOL_HANDLERS"] = "register-protocol-handler";
    ContentSettingsTypes["SENSORS"] = "sensors";
    ContentSettingsTypes["SERIAL_PORTS"] = "serial-ports";
    ContentSettingsTypes["SMART_CARD_READERS"] = "smart-card-readers";
    ContentSettingsTypes["SOUND"] = "sound";
    ContentSettingsTypes["STORAGE_ACCESS"] = "storage-access";
    ContentSettingsTypes["TOP_LEVEL_STORAGE_ACCESS"] = "top-level-storage-access";
    ContentSettingsTypes["USB_DEVICES"] = "usb-devices";
    ContentSettingsTypes["VR"] = "vr";
    ContentSettingsTypes["WEB_APP_INSTALLATION"] = "web-app-installation";
    ContentSettingsTypes["WINDOW_MANAGEMENT"] = "window-management";
    ContentSettingsTypes["ZOOM_LEVELS"] = "zoom-levels";
    ContentSettingsTypes["WEB_PRINTING"] = "web-printing";
    // The following items are not in the C++ kContentSettingsTypeGroupNames, but
    // are used everywhere where ContentSettingsTypes is used in JS.
    ContentSettingsTypes["PDF_DOCUMENTS"] = "pdfDocuments";
    ContentSettingsTypes["SITE_DATA"] = "site-data";
    ContentSettingsTypes["OFFER_WRITING_HELP"] = "offer-writing-help";
    ContentSettingsTypes["AUTOPLAY"] = "autoplay";
    ContentSettingsTypes["ETHEREUM"] = "ethereum";
    ContentSettingsTypes["SOLANA"] = "solana";
    ContentSettingsTypes["CARDANO"] = "cardano";
    ContentSettingsTypes["BRAVE_SHIELDS"] = "braveShields";
    ContentSettingsTypes["GOOGLE_SIGN_IN"] = "googleSignIn";
    ContentSettingsTypes["BRAVE_OPEN_AI_CHAT"] = "braveOpenAIChat";
})(ContentSettingsTypes || (ContentSettingsTypes = {}));
/**
 * Contains the possible string values for a given ContentSettingsTypes.
 * This should be kept in sync with the |ContentSetting| enum in
 * components/content_settings/core/common/content_settings.h
 */
export var ContentSetting;
(function (ContentSetting) {
    ContentSetting["DEFAULT"] = "default";
    ContentSetting["ALLOW"] = "allow";
    ContentSetting["BLOCK"] = "block";
    ContentSetting["ASK"] = "ask";
    ContentSetting["SESSION_ONLY"] = "session_only";
})(ContentSetting || (ContentSetting = {}));
/**
 * All possible ChooserTypes that we currently support configuring in the UI.
 * This should be kept in sync with the |kChooserTypeGroupNames| array in
 * chrome/browser/ui/webui/settings/site_settings_helper.cc
 */
export var ChooserType;
(function (ChooserType) {
    ChooserType["NONE"] = "";
    ChooserType["USB_DEVICES"] = "usb-devices-data";
    ChooserType["SERIAL_PORTS"] = "serial-ports-data";
    ChooserType["HID_DEVICES"] = "hid-devices-data";
    ChooserType["BLUETOOTH_DEVICES"] = "bluetooth-devices-data";
    // 
})(ChooserType || (ChooserType = {}));
/**
 * Possible preference settings for the profile.cookie_controls_mode pref.
 * This should be kept in sync with the |CookieControlsMode| enum in
 * components/content_settings/core/browser/cookie_settings.h
 */
// LINT.IfChange(CookieControlsMode)
export var CookieControlsMode;
(function (CookieControlsMode) {
    CookieControlsMode[CookieControlsMode["OFF"] = 0] = "OFF";
    CookieControlsMode[CookieControlsMode["BLOCK_THIRD_PARTY"] = 1] = "BLOCK_THIRD_PARTY";
    CookieControlsMode[CookieControlsMode["INCOGNITO_ONLY"] = 2] = "INCOGNITO_ONLY";
})(CookieControlsMode || (CookieControlsMode = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/privacy/enums.xml:CookieControlsMode, //components/content_settings/core/browser/cookie_settings.h:CookieControlsMode)
/**
 * Contains the possible sources of a ContentSetting.
 * This should be kept in sync with the |SiteSettingSource| enum in
 * chrome/browser/ui/webui/settings/site_settings_helper.h
 */
export var SiteSettingSource;
(function (SiteSettingSource) {
    SiteSettingSource["ADS_FILTER_BLACKLIST"] = "ads-filter-blacklist";
    SiteSettingSource["ALLOWLIST"] = "allowlist";
    SiteSettingSource["DEFAULT"] = "default";
    SiteSettingSource["EMBARGO"] = "embargo";
    SiteSettingSource["EXTENSION"] = "extension";
    SiteSettingSource["HOSTED_APP"] = "HostedApp";
    SiteSettingSource["INSECURE_ORIGIN"] = "insecure-origin";
    SiteSettingSource["KILL_SWITCH"] = "kill-switch";
    SiteSettingSource["POLICY"] = "policy";
    SiteSettingSource["PREFERENCE"] = "preference";
})(SiteSettingSource || (SiteSettingSource = {}));
/**
 * Enumeration of states for the notification and geolocation default setting
 * generated pref. Must be kept in sync with the SettingsState enum in:
 * chrome/browser/content_settings/generated_permission_prompting_behavior_pref.h
 */
export var SettingsState;
(function (SettingsState) {
    SettingsState[SettingsState["UNDEFINED"] = -1] = "UNDEFINED";
    SettingsState[SettingsState["LOUD"] = 0] = "LOUD";
    SettingsState[SettingsState["QUIET"] = 1] = "QUIET";
    SettingsState[SettingsState["CPSS"] = 2] = "CPSS";
})(SettingsState || (SettingsState = {}));
/**
 * Enumeration of states for the Javascript optimizer default setting generated
 * pref. Must be kept in sync with the JavascriptOptimizerSetting enum in:
 * components/content_settings/browser/ui/javascript_optimizer_setting.h
 */
// LINT.IfChange(JavascriptOptimizerSetting)
export var JavascriptOptimizerSetting;
(function (JavascriptOptimizerSetting) {
    JavascriptOptimizerSetting[JavascriptOptimizerSetting["BLOCKED"] = 0] = "BLOCKED";
    JavascriptOptimizerSetting[JavascriptOptimizerSetting["ALLOWED"] = 1] = "ALLOWED";
    JavascriptOptimizerSetting[JavascriptOptimizerSetting["BLOCKED_FOR_UNFAMILIAR_SITES"] = 2] = "BLOCKED_FOR_UNFAMILIAR_SITES";
})(JavascriptOptimizerSetting || (JavascriptOptimizerSetting = {}));
// LINT.ThenChange(//components/content_settings/browser/ui/javascript_optimizer_setting.h)
/**
 * An invalid subtype value.
 */
export const INVALID_CATEGORY_SUBTYPE = '';
/**
 * Contains the possible record action types.
 * This should be kept in sync with the |AllSitesAction2| enum in
 * chrome/browser/ui/webui/settings/site_settings_handler.cc
 */
export var AllSitesAction2;
(function (AllSitesAction2) {
    AllSitesAction2[AllSitesAction2["LOAD_PAGE"] = 0] = "LOAD_PAGE";
    AllSitesAction2[AllSitesAction2["RESET_SITE_GROUP_PERMISSIONS"] = 1] = "RESET_SITE_GROUP_PERMISSIONS";
    AllSitesAction2[AllSitesAction2["RESET_ORIGIN_PERMISSIONS"] = 2] = "RESET_ORIGIN_PERMISSIONS";
    AllSitesAction2[AllSitesAction2["CLEAR_ALL_DATA"] = 3] = "CLEAR_ALL_DATA";
    AllSitesAction2[AllSitesAction2["CLEAR_SITE_GROUP_DATA"] = 4] = "CLEAR_SITE_GROUP_DATA";
    AllSitesAction2[AllSitesAction2["CLEAR_ORIGIN_DATA"] = 5] = "CLEAR_ORIGIN_DATA";
    AllSitesAction2[AllSitesAction2["ENTER_SITE_DETAILS"] = 6] = "ENTER_SITE_DETAILS";
    AllSitesAction2[AllSitesAction2["REMOVE_SITE_GROUP"] = 7] = "REMOVE_SITE_GROUP";
    AllSitesAction2[AllSitesAction2["REMOVE_ORIGIN"] = 8] = "REMOVE_ORIGIN";
    AllSitesAction2[AllSitesAction2["REMOVE_ORIGIN_PARTITIONED"] = 9] = "REMOVE_ORIGIN_PARTITIONED";
    AllSitesAction2[AllSitesAction2["FILTER_BY_FPS_OWNER"] = 10] = "FILTER_BY_FPS_OWNER";
    AllSitesAction2[AllSitesAction2["DELETE_FOR_ENTIRE_FPS"] = 11] = "DELETE_FOR_ENTIRE_FPS";
})(AllSitesAction2 || (AllSitesAction2 = {}));
/**
 * Contains the possible sort methods.
 */
export var SortMethod;
(function (SortMethod) {
    SortMethod["NAME"] = "name";
    SortMethod["MOST_VISITED"] = "most-visited";
    SortMethod["STORAGE"] = "data-stored";
})(SortMethod || (SortMethod = {}));
/**
 * Contains types of dialogs on the AllSites page,
 * used for logging userActions.
 */
export var AllSitesDialog;
(function (AllSitesDialog) {
    AllSitesDialog["CLEAR_DATA"] = "ClearData";
    AllSitesDialog["RESET_PERMISSIONS"] = "ResetPermissions";
})(AllSitesDialog || (AllSitesDialog = {}));
/**
 * String representation of the wildcard used for universal
 * match for SiteExceptions.
 */
export const SITE_EXCEPTION_WILDCARD = '*';
/**
 * Types of cookies exceptions based on the use of wildcard in the patterns:
 * - THIRD_PARTY: primary pattern is wildcard (third-party exception).
 * - SITE_DATA: primary pattern is set, secondary pattern is wildcard (site data
 * exceptions) or is set (only possible via extensions API).
 * - COMBINED: any pattern combination can be used.
 */
export var CookiesExceptionType;
(function (CookiesExceptionType) {
    CookiesExceptionType["THIRD_PARTY"] = "third-party";
    CookiesExceptionType["SITE_DATA"] = "site-data";
    CookiesExceptionType["COMBINED"] = "combined";
})(CookiesExceptionType || (CookiesExceptionType = {}));
