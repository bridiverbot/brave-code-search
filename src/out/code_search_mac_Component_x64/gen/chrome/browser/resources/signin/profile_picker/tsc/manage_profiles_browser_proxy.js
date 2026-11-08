// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/** @implements {ManageProfilesBrowserProxy} */
export class ManageProfilesBrowserProxyImpl {
    initializeMainView() {
        chrome.send('mainViewInitialize');
    }
    launchSelectedProfile(profilePath) {
        chrome.send('launchSelectedProfile', [profilePath]);
    }
    openManageProfileSettingsSubPage(profilePath) {
        chrome.send('openManageProfileSettingsSubPage', [profilePath]);
    }
    launchGuestProfile() {
        chrome.send('launchGuestProfile');
    }
    askOnStartupChanged(shouldShow) {
        chrome.send('askOnStartupChanged', [shouldShow]);
    }
    getNewProfileSuggestedThemeInfo() {
        return sendWithPromise('getNewProfileSuggestedThemeInfo');
    }
    getProfileThemeInfo(theme) {
        return sendWithPromise('getProfileThemeInfo', theme);
    }
    removeProfile(profilePath) {
        chrome.send('removeProfile', [profilePath]);
    }
    getProfileStatistics(profilePath) {
        chrome.send('getProfileStatistics', [profilePath]);
    }
    closeProfileStatistics() {
        chrome.send('closeProfileStatistics');
    }
    selectNewAccount(profileColor) {
        chrome.send('selectNewAccount', [profileColor]);
    }
    getAvailableIcons() {
        return sendWithPromise('getAvailableIcons');
    }
    continueWithoutAccount(profileColor) {
        chrome.send('continueWithoutAccount', [profileColor]);
    }
    setProfileName(profilePath, profileName) {
        chrome.send('setProfileName', [profilePath, profileName]);
    }
    recordSignInPromoImpression() {
        chrome.send('recordSignInPromoImpression');
    }
    getProfileState(profileSwitchPath) {
        return sendWithPromise('getProfileState', profileSwitchPath);
    }
    confirmProfileSwitch(profilePath) {
        chrome.send('confirmProfileSwitch', [profilePath]);
    }
    cancelProfileSwitch() {
        chrome.send('cancelProfileSwitch');
    }
    updateProfileOrder(fromIndex, toIndex) {
        chrome.send('updateProfileOrder', [fromIndex, toIndex]);
    }
    onLearnMoreClicked() {
        chrome.send('onLearnMoreClicked');
    }
    static getInstance() {
        return instance || (instance = new ManageProfilesBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
