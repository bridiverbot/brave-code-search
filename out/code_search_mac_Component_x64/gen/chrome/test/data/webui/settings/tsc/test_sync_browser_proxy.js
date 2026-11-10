// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageStatus, SignedInState, StatusAction, ChromeSigninUserChoice } from 'chrome://settings/settings.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// 
// clang-format on
export class TestSyncBrowserProxy extends TestBrowserProxy {
    resolveGetSyncStatus_ = null;
    syncStatus_ = {
        signedInState: SignedInState.SIGNED_IN,
        signedInUsername: 'fakeUsername',
        statusAction: StatusAction.NO_ACTION,
    };
    // Settable fake data.
    encryptionPassphraseSuccess = false;
    decryptionPassphraseSuccess = false;
    storedAccounts = [];
    profileAvatarURL = '';
    chromeSigninUserChoiceInfo = {
        shouldShowSettings: false,
        choice: ChromeSigninUserChoice.NO_CHOICE,
        signedInEmail: '',
    };
    constructor() {
        // clang-format off
        super([
            'didNavigateAwayFromSyncPage',
            'didNavigateToSyncPage',
            'getStoredAccounts',
            'getProfileAvatar',
            'getSyncStatus',
            'setSyncDatatypes',
            'setEncryptionPassphrase',
            'setDecryptionPassphrase',
            'sendSyncPrefsChanged',
            'sendTrustedVaultBannerStateChanged',
            'startSyncingWithEmail',
            'didNavigateToAccountSettingsPage',
            'setSyncDatatype',
            // 
            'pauseSync',
            'signOut',
            'startSignIn',
            'recordSigninPendingOffered',
            'recordSigninOffered',
            // 
            // 
            'setChromeSigninUserChoice',
            'getChromeSigninUserChoiceInfo',
            'showBookmarkLimitExceededHelp',
            'showSyncPassphraseDialog',
        ]);
        // clang-format on
    }
    get testSyncStatus() {
        return this.syncStatus_;
    }
    set testSyncStatus(syncStatus) {
        this.syncStatus_ = syncStatus;
        if (this.syncStatus_ && this.resolveGetSyncStatus_) {
            this.resolveGetSyncStatus_(this.syncStatus_);
            this.resolveGetSyncStatus_ = null;
        }
    }
    getSyncStatus() {
        this.methodCalled('getSyncStatus');
        if (this.syncStatus_) {
            return Promise.resolve(this.syncStatus_);
        }
        else {
            return new Promise((resolve) => {
                this.resolveGetSyncStatus_ = resolve;
            });
        }
    }
    getStoredAccounts() {
        this.methodCalled('getStoredAccounts');
        return Promise.resolve(this.storedAccounts);
    }
    getProfileAvatar() {
        this.methodCalled('getProfileAvatar');
        return Promise.resolve(this.profileAvatarURL);
    }
    didNavigateToAccountSettingsPage() {
        this.methodCalled('didNavigateToAccountSettingsPage');
    }
    setSyncDatatype(pref, value) {
        this.methodCalled('setSyncDatatype', pref, value);
        return Promise.resolve(PageStatus.CONFIGURE);
    }
    // 
    signOut(deleteProfile) {
        this.methodCalled('signOut', deleteProfile);
    }
    pauseSync() {
        this.methodCalled('pauseSync');
    }
    startSignIn(accessPoint) {
        this.methodCalled('startSignIn', accessPoint);
    }
    recordSigninPendingOffered() {
        this.methodCalled('recordSigninPendingOffered');
    }
    recordSigninOffered(accessPoint) {
        this.methodCalled('recordSigninOffered', accessPoint);
    }
    // 
    startSyncingWithEmail(email, isDefaultPromoAccount) {
        this.methodCalled('startSyncingWithEmail', [email, isDefaultPromoAccount]);
    }
    didNavigateToSyncPage() {
        this.methodCalled('didNavigateToSyncPage');
    }
    didNavigateAwayFromSyncPage(didAbort) {
        this.methodCalled('didNavigateAwayFromSyncPage', didAbort);
    }
    setSyncDatatypes(syncPrefs) {
        this.methodCalled('setSyncDatatypes', syncPrefs);
        return Promise.resolve(PageStatus.CONFIGURE);
    }
    setEncryptionPassphrase(passphrase) {
        this.methodCalled('setEncryptionPassphrase', passphrase);
        return Promise.resolve(this.encryptionPassphraseSuccess);
    }
    setDecryptionPassphrase(passphrase) {
        this.methodCalled('setDecryptionPassphrase', passphrase);
        return Promise.resolve(this.decryptionPassphraseSuccess);
    }
    sendSyncPrefsChanged() {
        this.methodCalled('sendSyncPrefsChanged');
    }
    sendTrustedVaultBannerStateChanged() {
        this.methodCalled('sendTrustedVaultBannerStateChanged');
    }
    openActivityControlsUrl() { }
    startKeyRetrieval() { }
    showSyncPassphraseDialog() {
        this.methodCalled('showSyncPassphraseDialog');
    }
    showBookmarkLimitExceededHelp() {
        this.methodCalled('showBookmarkLimitExceededHelp');
    }
    // 
    setChromeSigninUserChoice() {
        this.methodCalled('setChromeSigninUserChoice');
    }
    // Prepares the return value for `getChromeSigninUserChoiceInfo()`.
    setGetUserChromeSigninUserChoiceInfoResponse(info) {
        this.chromeSigninUserChoiceInfo = info;
    }
    getChromeSigninUserChoiceInfo() {
        this.methodCalled('getChromeSigninUserChoiceInfo');
        return Promise.resolve(this.chromeSigninUserChoiceInfo);
    }
}
