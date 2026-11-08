// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "Site Settings" section to
 * interact with the content settings prefs.
 */
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
// clang-format on
/**
 * The handler will send a policy source that is similar, but not exactly the
 * same as a ControlledBy value. If the DefaultSettingSource is omitted it
 * should be treated as 'default'.
 * Should be kept in sync with values returned by C++ function
 * `ProviderToDefaultSettingSourceString`.
 */
export var DefaultSettingSource;
(function (DefaultSettingSource) {
    DefaultSettingSource["POLICY"] = "policy";
    DefaultSettingSource["SUPERVISED_USER"] = "supervised_user";
    DefaultSettingSource["EXTENSION"] = "extension";
    DefaultSettingSource["PREFERENCE"] = "preference";
    DefaultSettingSource["DEFAULT"] = "default";
})(DefaultSettingSource || (DefaultSettingSource = {}));
/**
 * Must be kept in sync with the C++ enum of the same name in
 * chrome/browser/content_settings/generated_cookie_prefs.h
 */
// LINT.IfChange(ThirdPartyCookieBlockingSetting)
export var ThirdPartyCookieBlockingSetting;
(function (ThirdPartyCookieBlockingSetting) {
    ThirdPartyCookieBlockingSetting[ThirdPartyCookieBlockingSetting["BLOCK_THIRD_PARTY"] = 0] = "BLOCK_THIRD_PARTY";
    ThirdPartyCookieBlockingSetting[ThirdPartyCookieBlockingSetting["INCOGNITO_ONLY"] = 1] = "INCOGNITO_ONLY";
})(ThirdPartyCookieBlockingSetting || (ThirdPartyCookieBlockingSetting = {}));
export class SiteSettingsBrowserProxyImpl {
    setDefaultValueForContentType(contentType, defaultValue) {
        chrome.send('setDefaultValueForContentType', [contentType, defaultValue]);
    }
    getDefaultValueForContentType(contentType) {
        return sendWithPromise('getDefaultValueForContentType', contentType);
    }
    getAllSites() {
        return sendWithPromise('getAllSites');
    }
    getCategoryList(origin) {
        return sendWithPromise('getCategoryList', origin);
    }
    getRecentSitePermissions(numSources) {
        return sendWithPromise('getRecentSitePermissions', numSources);
    }
    getChooserExceptionList(chooserType) {
        return sendWithPromise('getChooserExceptionList', chooserType);
    }
    getFormattedBytes(numBytes) {
        return sendWithPromise('getFormattedBytes', numBytes);
    }
    getExceptionList(contentType) {
        return sendWithPromise('getExceptionList', contentType);
    }
    getStorageAccessExceptionList(categorySubtype) {
        return sendWithPromise('getStorageAccessExceptionList', categorySubtype);
    }
    getFileSystemGrants() {
        return sendWithPromise('getFileSystemGrants');
    }
    revokeFileSystemGrant(origin, filePath) {
        chrome.send('revokeFileSystemGrant', [origin, filePath]);
    }
    revokeFileSystemGrants(origin) {
        chrome.send('revokeFileSystemGrants', [origin]);
    }
    getOriginPermissions(origin, contentTypes) {
        return sendWithPromise('getOriginPermissions', origin, contentTypes);
    }
    setOriginPermissions(origin, category, blanketSetting) {
        chrome.send('setOriginPermissions', [origin, category, blanketSetting]);
    }
    resetCategoryPermissionForPattern(primaryPattern, secondaryPattern, contentType, incognito) {
        chrome.send('resetCategoryPermissionForPattern', [primaryPattern, secondaryPattern, contentType, incognito]);
    }
    resetChooserExceptionForSite(chooserType, origin, exception) {
        chrome.send('resetChooserExceptionForSite', [chooserType, origin, exception]);
    }
    setCategoryPermissionForPattern(primaryPattern, secondaryPattern, contentType, value, incognito) {
        chrome.send('setCategoryPermissionForPattern', [primaryPattern, secondaryPattern, contentType, value, incognito]);
    }
    isOriginValid(origin) {
        return sendWithPromise('isOriginValid', origin);
    }
    isPatternValidForType(pattern, category) {
        return sendWithPromise('isPatternValidForType', pattern, category);
    }
    initializeCaptureDevices(type) {
        chrome.send('initializeCaptureDevices', [type]);
    }
    setPreferredCaptureDevice(type, defaultValue) {
        chrome.send('setPreferredCaptureDevice', [type, defaultValue]);
    }
    observeProtocolHandlers() {
        chrome.send('observeProtocolHandlers');
    }
    observeAppProtocolHandlers() {
        chrome.send('observeAppProtocolHandlers');
    }
    observeProtocolHandlersEnabledState() {
        chrome.send('observeProtocolHandlersEnabledState');
    }
    setProtocolHandlerDefault(enabled) {
        chrome.send('setHandlersEnabled', [enabled]);
    }
    setProtocolDefault(protocol, url) {
        chrome.send('setDefault', [protocol, url]);
    }
    removeProtocolHandler(protocol, url) {
        chrome.send('removeHandler', [protocol, url]);
    }
    removeAppAllowedHandler(protocol, url, appId) {
        chrome.send('removeAppAllowedHandler', [protocol, url, appId]);
    }
    removeAppDisallowedHandler(protocol, url, appId) {
        chrome.send('removeAppDisallowedHandler', [protocol, url, appId]);
    }
    updateIncognitoStatus() {
        chrome.send('updateIncognitoStatus');
    }
    fetchZoomLevels() {
        chrome.send('fetchZoomLevels');
    }
    removeZoomLevel(host) {
        chrome.send('removeZoomLevel', [host]);
    }
    fetchBlockAutoplayStatus() {
        chrome.send('fetchBlockAutoplayStatus');
    }
    setBlockAutoplayEnabled(enabled) {
        chrome.send('setBlockAutoplayEnabled', [enabled]);
    }
    clearSiteGroupDataAndCookies(groupingKey) {
        chrome.send('clearSiteGroupDataAndCookies', [groupingKey]);
    }
    clearUnpartitionedOriginDataAndCookies(origin) {
        chrome.send('clearUnpartitionedUsage', [origin]);
    }
    clearPartitionedOriginDataAndCookies(origin, groupingKey) {
        chrome.send('clearPartitionedUsage', [origin, groupingKey]);
    }
    recordAction(action) {
        chrome.send('recordAction', [action]);
    }
    getRwsMembershipLabel(rwsNumMembers, rwsOwner) {
        return sendWithPromise('getRwsMembershipLabel', rwsNumMembers, rwsOwner);
    }
    getNumCookiesString(numCookies) {
        return sendWithPromise('getNumCookiesString', numCookies);
    }
    getSystemDeniedPermissions() {
        return sendWithPromise('getSystemDeniedPermissions');
    }
    openSystemPermissionSettings(contentType) {
        chrome.send('openSystemPermissionSettings', [contentType]);
    }
    getSubAppsPermissionExplanation(url) {
        return sendWithPromise('getSubAppsPermissionExplanation', url);
    }
    static getInstance() {
        return instance || (instance = new SiteSettingsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
