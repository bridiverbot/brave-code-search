// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used by the managed user profile notice screen
 * to interact with the browser.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export var BrowsingDataHandling;
(function (BrowsingDataHandling) {
    BrowsingDataHandling["MERGE"] = "merge";
    BrowsingDataHandling["SEPARATE"] = "separate";
})(BrowsingDataHandling || (BrowsingDataHandling = {}));
export var State;
(function (State) {
    State[State["DISCLOSURE"] = 0] = "DISCLOSURE";
    State[State["PROCESSING"] = 1] = "PROCESSING";
    State[State["SUCCESS"] = 2] = "SUCCESS";
    State[State["TIMEOUT"] = 3] = "TIMEOUT";
    State[State["ERROR"] = 4] = "ERROR";
    State[State["VALUE_PROPOSITION"] = 5] = "VALUE_PROPOSITION";
    State[State["USER_DATA_HANDLING"] = 6] = "USER_DATA_HANDLING";
    State[State["SIGNALS_DISCLAIMER"] = 7] = "SIGNALS_DISCLAIMER";
})(State || (State = {}));
// LINT.IfChange(ScreenType)
export var ScreenType;
(function (ScreenType) {
    ScreenType[ScreenType["ENTERPRISE_ACCOUNT_SYNC_ENABLED"] = 0] = "ENTERPRISE_ACCOUNT_SYNC_ENABLED";
    ScreenType[ScreenType["ENTERPRISE_ACCOUNT_SYNC_DISABLED"] = 1] = "ENTERPRISE_ACCOUNT_SYNC_DISABLED";
    ScreenType[ScreenType["CONSUMER_ACCOUNT_SYNC_DISABLED"] = 2] = "CONSUMER_ACCOUNT_SYNC_DISABLED";
    ScreenType[ScreenType["ENTERPRISE_ACCOUNT_CREATION"] = 3] = "ENTERPRISE_ACCOUNT_CREATION";
    ScreenType[ScreenType["ENTERPRISE_OIDC"] = 4] = "ENTERPRISE_OIDC";
    ScreenType[ScreenType["PROFILE_PICKER"] = 5] = "PROFILE_PICKER";
    ScreenType[ScreenType["FIRST_RUN"] = 6] = "FIRST_RUN";
    ScreenType[ScreenType["DEVICE_SIGNALS_DISCLAIMER"] = 7] = "DEVICE_SIGNALS_DISCLAIMER";
    ScreenType[ScreenType["MAX_VALUE"] = 7] = "MAX_VALUE";
})(ScreenType || (ScreenType = {}));
// LINT.ThenChange(//chrome/browser/ui/webui/signin/managed_user_profile_notice_ui.h:ScreenType)
export var AppMode;
(function (AppMode) {
    AppMode["FIRST_RUN"] = "first-run";
    AppMode["PROFILE_PICKER"] = "profile-picker";
})(AppMode || (AppMode = {}));
export class ManagedUserProfileNoticeBrowserProxyImpl {
    initialized() {
        return sendWithPromise('initialized');
    }
    initializedWithSize(height) {
        chrome.send('initializedWithSize', [height]);
    }
    proceed(state, linkData) {
        chrome.send('proceed', [state, linkData]);
    }
    cancel() {
        chrome.send('cancel');
    }
    static getInstance() {
        return instance ||
            (instance = new ManagedUserProfileNoticeBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
    matchMedia(query) {
        return window.matchMedia(query);
    }
    learnMoreClicked() {
        chrome.send('learnMoreClicked');
    }
}
let instance = null;
