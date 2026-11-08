// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestManageProfilesBrowserProxy extends TestBrowserProxy {
    profileThemeInfo;
    profileSample;
    getProfileStatePromise_;
    constructor() {
        super([
            'initializeMainView',
            'launchGuestProfile',
            'openManageProfileSettingsSubPage',
            'launchSelectedProfile',
            'askOnStartupChanged',
            'getNewProfileSuggestedThemeInfo',
            'getProfileThemeInfo',
            'removeProfile',
            'getProfileStatistics',
            'closeProfileStatistics',
            'selectNewAccount',
            'continueWithoutAccount',
            'setProfileName',
            'recordSignInPromoImpression',
            'getAvailableIcons',
            'getProfileState',
            'confirmProfileSwitch',
            'cancelProfileSwitch',
            'updateProfileOrder',
            'onLearnMoreClicked',
        ]);
        this.profileThemeInfo = {
            colorId: 22,
            color: -10799479,
            themeFrameColor: 'rgb(70, 42, 104)',
            themeShapeColor: 'rgb(109, 65, 161)',
            themeFrameTextColor: 'rgb(255, 255, 255)',
            themeGenericAvatar: 'AvatarUrl-22',
        };
        this.profileSample = {
            profilePath: 'profile1',
            localProfileName: 'Work',
            needsSignin: false,
            isSyncing: true,
            gaiaName: 'Alice',
            userName: 'Alice@gmail.com',
            avatarIcon: 'url',
            profileCardButtonLabel: '',
            avatarBadge: '',
            hasEnterpriseLabel: false,
            hasAvatarRing: false,
        };
        /**
         * The promise to return from `getProfileState()`.
         */
        this.getProfileStatePromise_ = null;
    }
    setProfileThemeInfo(profileThemeInfo) {
        this.profileThemeInfo = profileThemeInfo;
    }
    setGetProfileStatePromise(promise) {
        this.getProfileStatePromise_ = promise;
    }
    initializeMainView() {
        this.methodCalled('initializeMainView');
    }
    launchGuestProfile() {
        this.methodCalled('launchGuestProfile');
    }
    openManageProfileSettingsSubPage(profilePath) {
        this.methodCalled('openManageProfileSettingsSubPage', profilePath);
    }
    launchSelectedProfile(profilePath) {
        this.methodCalled('launchSelectedProfile', profilePath);
    }
    askOnStartupChanged(shouldShow) {
        this.methodCalled('askOnStartupChanged', shouldShow);
    }
    getNewProfileSuggestedThemeInfo() {
        this.methodCalled('getNewProfileSuggestedThemeInfo');
        return Promise.resolve(this.profileThemeInfo);
    }
    getProfileThemeInfo(theme) {
        this.methodCalled('getProfileThemeInfo', theme);
        return Promise.resolve(this.profileThemeInfo);
    }
    removeProfile(profilePath) {
        this.methodCalled('removeProfile', profilePath);
    }
    getProfileStatistics(profilePath) {
        this.methodCalled('getProfileStatistics', profilePath);
    }
    closeProfileStatistics() {
        this.methodCalled('closeProfileStatistics');
    }
    selectNewAccount(profileColor) {
        this.methodCalled('selectNewAccount', [profileColor]);
    }
    continueWithoutAccount(profileColor) {
        this.methodCalled('continueWithoutAccount', [profileColor]);
    }
    setProfileName(profilePath, profileName) {
        this.methodCalled('setProfileName', [profilePath, profileName]);
    }
    recordSignInPromoImpression() {
        this.methodCalled('recordSignInPromoImpression');
    }
    getAvailableIcons() {
        this.methodCalled('getAvailableIcons');
        return Promise.resolve([
            {
                url: 'fake-icon-1.png',
                label: 'fake-icon-1',
                index: 1,
                selected: false,
                isGaiaAvatar: false,
            },
            {
                url: 'fake-icon-2.png',
                label: 'fake-icon-2',
                index: 2,
                selected: false,
                isGaiaAvatar: false,
            },
            {
                url: 'fake-icon-3.png',
                label: 'fake-icon-3',
                index: 3,
                selected: false,
                isGaiaAvatar: false,
            },
        ]);
    }
    getProfileState() {
        this.methodCalled('getProfileState');
        return this.getProfileStatePromise_ || Promise.resolve(this.profileSample);
    }
    confirmProfileSwitch(profilePath) {
        this.methodCalled('confirmProfileSwitch', [profilePath]);
    }
    cancelProfileSwitch() {
        this.methodCalled('cancelProfileSwitch');
    }
    updateProfileOrder(fromIndex, toIndex) {
        this.methodCalled('updateProfileOrder', [fromIndex, toIndex]);
    }
    onLearnMoreClicked() {
        this.methodCalled('onLearnMoreClicked');
    }
}
