// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
// clang-format on
/**
 * Contains the possible profile shortcut statuses. These strings must be kept
 * in sync with the C++ Manage Profile handler.
 */
export var ProfileShortcutStatus;
(function (ProfileShortcutStatus) {
    ProfileShortcutStatus["PROFILE_SHORTCUT_SETTING_HIDDEN"] = "profileShortcutSettingHidden";
    ProfileShortcutStatus["PROFILE_SHORTCUT_NOT_FOUND"] = "profileShortcutNotFound";
    ProfileShortcutStatus["PROFILE_SHORTCUT_FOUND"] = "profileShortcutFound";
})(ProfileShortcutStatus || (ProfileShortcutStatus = {}));
export class ManageProfileBrowserProxyImpl {
    getAvailableIcons() {
        return sendWithPromise('getAvailableIcons');
    }
    setProfileIconToGaiaAvatar() {
        chrome.send('setProfileIconToGaiaAvatar');
    }
    setProfileIconToDefaultAvatar(index) {
        chrome.send('setProfileIconToDefaultAvatar', [index]);
    }
    setProfileName(name) {
        chrome.send('setProfileName', [name]);
    }
    getProfileShortcutStatus() {
        return sendWithPromise('requestProfileShortcutStatus');
    }
    addProfileShortcut() {
        chrome.send('addProfileShortcut');
    }
    removeProfileShortcut() {
        chrome.send('removeProfileShortcut');
    }
    static getInstance() {
        return instance || (instance = new ManageProfileBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
