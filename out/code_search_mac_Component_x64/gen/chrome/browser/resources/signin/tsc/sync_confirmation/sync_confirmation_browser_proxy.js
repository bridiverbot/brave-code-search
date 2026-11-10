// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// LINT.IfChange(screen_mode)
/**
 * In PENDING mode, the screen should not show consent buttons and indicate that
 * some loading is pending. In RESTRICTED mode, the button must not be weighted,
 * and in UNRESTRICTED mode they can be.
 *
 * In UNSUPPORTED mode, the client take any behavior.
 */
export var ScreenMode;
(function (ScreenMode) {
    ScreenMode[ScreenMode["UNSUPPORTED"] = 0] = "UNSUPPORTED";
    ScreenMode[ScreenMode["PENDING"] = 1] = "PENDING";
    ScreenMode[ScreenMode["RESTRICTED"] = 2] = "RESTRICTED";
    ScreenMode[ScreenMode["UNRESTRICTED"] = 3] = "UNRESTRICTED";
    ScreenMode[ScreenMode["DEADLINED"] = 4] = "DEADLINED";
})(ScreenMode || (ScreenMode = {}));
export class SyncConfirmationBrowserProxyImpl {
    confirm(description, confirmation, screenMode) {
        chrome.send('confirm', [description, confirmation, screenMode]);
    }
    undo(screenMode) {
        chrome.send('undo', [screenMode]);
    }
    goToSettings(description, confirmation, screenMode) {
        chrome.send('goToSettings', [description, confirmation, screenMode]);
    }
    initializedWithSize(height) {
        chrome.send('initializedWithSize', height);
    }
    requestAccountInfo() {
        chrome.send('accountInfoRequest');
    }
    openDeviceSyncSettings() {
        chrome.send('openDeviceSyncSettings');
    }
    static getInstance() {
        return instance || (instance = new SyncConfirmationBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
