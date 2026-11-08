// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used by the "Site Settings" to interact with
 * the permission-related updates of the browser.
 */
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
// clang-format on
/**
 * Constants used in safety hub C++ to JS communication.
 * Their values need be kept in sync with their counterparts in
 * chrome/browser/ui/webui/settings/safety_hub_handler.h and
 * chrome/browser/ui/webui/settings/safety_hub_handler.cc
 */
export var SafetyHubEvent;
(function (SafetyHubEvent) {
    SafetyHubEvent["UNUSED_PERMISSIONS_MAYBE_CHANGED"] = "unused-permission-review-list-maybe-changed";
    SafetyHubEvent["EXTENSIONS_CHANGED"] = "extensions-review-list-maybe-changed";
})(SafetyHubEvent || (SafetyHubEvent = {}));
// LINT.IfChange(PermissionsRevocationType)
export var PermissionsRevocationType;
(function (PermissionsRevocationType) {
    PermissionsRevocationType[PermissionsRevocationType["UNUSED_PERMISSIONS"] = 0] = "UNUSED_PERMISSIONS";
    PermissionsRevocationType[PermissionsRevocationType["ABUSIVE_NOTIFICATION_PERMISSIONS"] = 1] = "ABUSIVE_NOTIFICATION_PERMISSIONS";
    PermissionsRevocationType[PermissionsRevocationType["DISRUPTIVE_NOTIFICATION_PERMISSIONS"] = 2] = "DISRUPTIVE_NOTIFICATION_PERMISSIONS";
    PermissionsRevocationType[PermissionsRevocationType["UNUSED_PERMISSIONS_AND_ABUSIVE_NOTIFICATIONS"] = 3] = "UNUSED_PERMISSIONS_AND_ABUSIVE_NOTIFICATIONS";
    PermissionsRevocationType[PermissionsRevocationType["UNUSED_PERMISSIONS_AND_DISRUPTIVE_NOTIFICATIONS"] = 4] = "UNUSED_PERMISSIONS_AND_DISRUPTIVE_NOTIFICATIONS";
    PermissionsRevocationType[PermissionsRevocationType["SUSPICIOUS_NOTIFICATION_PERMISSIONS"] = 5] = "SUSPICIOUS_NOTIFICATION_PERMISSIONS";
    PermissionsRevocationType[PermissionsRevocationType["UNUSED_PERMISSIONS_AND_SUSPICIOUS_NOTIFICATIONS"] = 6] = "UNUSED_PERMISSIONS_AND_SUSPICIOUS_NOTIFICATIONS";
})(PermissionsRevocationType || (PermissionsRevocationType = {}));
/**
 * A Safety Hub card has 4 different states as represented below. Depending on
 * the card state, the card will be updated.
 */
// LINT.IfChange(CardState)
export var CardState;
(function (CardState) {
    CardState[CardState["WARNING"] = 0] = "WARNING";
    CardState[CardState["WEAK"] = 1] = "WEAK";
    CardState[CardState["INFO"] = 2] = "INFO";
    CardState[CardState["SAFE"] = 3] = "SAFE";
})(CardState || (CardState = {}));
export class SafetyHubBrowserProxyImpl {
    acknowledgeRevokedUnusedSitePermissionsList() {
        chrome.send('acknowledgeRevokedUnusedSitePermissionsList');
    }
    allowPermissionsAgainForUnusedSite(origin) {
        chrome.send('allowPermissionsAgainForUnusedSite', [origin]);
    }
    getRevokedUnusedSitePermissionsList() {
        return sendWithPromise('getRevokedUnusedSitePermissionsList');
    }
    undoAcknowledgeRevokedUnusedSitePermissionsList(unusedSitePermissionsList) {
        chrome.send('undoAcknowledgeRevokedUnusedSitePermissionsList', [unusedSitePermissionsList]);
    }
    undoAllowPermissionsAgainForUnusedSite(unusedSitePermissions) {
        chrome.send('undoAllowPermissionsAgainForUnusedSite', [unusedSitePermissions]);
    }
    dismissActiveMenuNotification() {
        chrome.send('dismissActiveMenuNotification');
    }
    getPasswordCardData() {
        return sendWithPromise('getPasswordCardData');
    }
    getSafeBrowsingCardData() {
        return sendWithPromise('getSafeBrowsingCardData');
    }
    getVersionCardData() {
        return sendWithPromise('getVersionCardData');
    }
    getNumberOfExtensionsThatNeedReview() {
        return sendWithPromise('getNumberOfExtensionsThatNeedReview');
    }
    getSafetyHubEntryPointData() {
        return sendWithPromise('getSafetyHubEntryPointData');
    }
    recordSafetyHubPageVisit() {
        return sendWithPromise('recordSafetyHubPageVisit');
    }
    recordSafetyHubInteraction() {
        return sendWithPromise('recordSafetyHubInteraction');
    }
    static getInstance() {
        return instance || (instance = new SafetyHubBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
