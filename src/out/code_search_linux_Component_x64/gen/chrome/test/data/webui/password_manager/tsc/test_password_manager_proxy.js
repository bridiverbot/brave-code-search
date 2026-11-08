// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Test implementation of PasswordManagerProxy. */
import { ExportPasswordsResult, ExportProgressStatus, ImportResultsStatus, PageCallbackRouter, PasswordManagerActionableError } from 'chrome://password-manager/password_manager.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { makeFamilyFetchResults, makePasswordCheckStatus } from './test_util.js';
/**
 * Test implementation
 */
export class TestPasswordManagerProxy extends TestBrowserProxy {
    callbackRouter = new PageCallbackRouter();
    callbackRouterRemote = this.callbackRouter.$.bindNewPipeAndPassRemote();
    data;
    listeners;
    requestCredentialsDetailsResponse_ = null;
    switchBiometricAuthBeforeFillingStateResult_ = false;
    importResults_ = {
        status: ImportResultsStatus.kSuccess,
        numberImported: 0,
        displayedEntries: [],
        fileName: '',
    };
    exportPasswordsResult_ = ExportPasswordsResult.kSuccess;
    actionableErrorListeners_ = new Set();
    constructor() {
        super([
            'addPassword',
            'cancelExportPasswords',
            'changeCredential',
            'changePasswordManagerPin',
            'continueImport',
            'copyPlaintextBackupPassword',
            'deleteAllPasswordManagerData',
            'disconnectCloudAuthenticator',
            'dismissSafetyHubPasswordMenuNotification',
            'exportPasswords',
            'extendAuthValidity',
            'fetchFamilyMembers',
            'getActorLoginPermissions',
            'getBlockedSitesList',
            'getCredentialGroups',
            'getCredentialsWithReusedPassword',
            'getInsecureCredentials',
            'getPasswordCheckStatus',
            'getSavedPasswordList',
            'getUrlCollection',
            'importPasswords',
            'isConnectedToCloudAuthenticator',
            'isAccountStorageActive',
            'isPasswordManagerPinAvailable',
            'movePasswordsToAccount',
            'muteInsecureCredential',
            'recordPasswordCheckInteraction',
            'recordPasswordViewInteraction',
            'removeBlockedSite',
            'removeCredential',
            'removeBackupPassword',
            'requestCredentialsDetails',
            'requestExportProgressStatus',
            'requestPlaintextPassword',
            'resetImporter',
            'revokeActorLoginPermission',
            'requestChangePassword',
            'stopPasswordChange',
            'openPasswordChangeTab',
            'sharePassword',
            'showAddShortcutDialog',
            'showLastExportedFileInShell',
            'startBulkPasswordCheck',
            'switchBiometricAuthBeforeFillingState',
            'undoRemoveSavedPasswordOrException',
            'unmuteInsecureCredential',
            'getPasswordManagerActionableError',
            'startTrustedVaultUnlock',
        ]);
        // Set these to have non-empty data.
        this.data = {
            blockedSites: [],
            actorLoginPermissions: [],
            checkStatus: makePasswordCheckStatus({}),
            credentialWithReusedPassword: [],
            familyFetchResults: makeFamilyFetchResults(),
            groups: [],
            insecureCredentials: [],
            isAccountStorageActive: false,
            passwords: [],
            isPasswordManagerPinAvailable: false,
            isCloudAuthenticatorConnected: false,
            changePasswordManagerPinSuccessful: false,
            disconnectCloudAuthenticatorSuccessful: false,
            isConnectedToCloudAuthenticator: true,
            deleteAllPasswordManagerData: true,
            getActionableError: PasswordManagerActionableError.kNoError,
        };
        // Holds listeners so they can be called when needed.
        this.listeners = {
            accountStorageActiveStateListener: null,
            blockedSitesListChangedListener: null,
            insecureCredentialsListener: null,
            passwordCheckStatusListener: null,
            passwordManagerAuthTimeoutListener: null,
            savedPasswordListChangedListener: null,
            passwordManagerActionableErrorChangedListener: null,
        };
    }
    addSavedPasswordListChangedListener(listener) {
        this.listeners.savedPasswordListChangedListener = listener;
    }
    removeSavedPasswordListChangedListener(_listener) {
        this.listeners.savedPasswordListChangedListener = null;
    }
    addBlockedSitesListChangedListener(listener) {
        this.listeners.blockedSitesListChangedListener = listener;
    }
    removeBlockedSitesListChangedListener(_listener) {
        this.listeners.blockedSitesListChangedListener = null;
    }
    addPasswordCheckStatusListener(listener) {
        this.listeners.passwordCheckStatusListener = listener;
    }
    removePasswordCheckStatusListener(_listener) {
        this.listeners.passwordCheckStatusListener = null;
    }
    addInsecureCredentialsListener(listener) {
        this.listeners.insecureCredentialsListener = listener;
    }
    removeInsecureCredentialsListener(_listener) {
        this.listeners.insecureCredentialsListener = null;
    }
    getSavedPasswordList() {
        this.methodCalled('getSavedPasswordList');
        return Promise.resolve(this.data.passwords.slice());
    }
    getCredentialGroups() {
        this.methodCalled('getCredentialGroups');
        return Promise.resolve(this.data.groups.slice());
    }
    getBlockedSitesList() {
        this.methodCalled('getBlockedSitesList');
        return Promise.resolve(this.data.blockedSites.slice());
    }
    getPasswordCheckStatus() {
        this.methodCalled('getPasswordCheckStatus');
        return Promise.resolve(this.data.checkStatus);
    }
    getInsecureCredentials() {
        this.methodCalled('getInsecureCredentials');
        return Promise.resolve(this.data.insecureCredentials.slice());
    }
    getCredentialsWithReusedPassword() {
        this.methodCalled('getCredentialsWithReusedPassword');
        return Promise.resolve(this.data.credentialWithReusedPassword.slice());
    }
    startBulkPasswordCheck() {
        this.methodCalled('startBulkPasswordCheck');
    }
    recordPasswordCheckInteraction(interaction) {
        this.methodCalled('recordPasswordCheckInteraction', interaction);
    }
    recordPasswordViewInteraction(interaction) {
        this.methodCalled('recordPasswordViewInteraction', interaction);
    }
    muteInsecureCredential(insecureCredential) {
        this.methodCalled('muteInsecureCredential', insecureCredential);
    }
    unmuteInsecureCredential(insecureCredential) {
        this.methodCalled('unmuteInsecureCredential', insecureCredential);
    }
    showAddShortcutDialog() {
        this.methodCalled('showAddShortcutDialog');
    }
    requestCredentialsDetails(ids) {
        this.methodCalled('requestCredentialsDetails', ids);
        if (!this.requestCredentialsDetailsResponse_) {
            return Promise.reject(new Error('Could not obtain credential details'));
        }
        return Promise.resolve(this.requestCredentialsDetailsResponse_);
    }
    setRequestCredentialsDetailsResponse(credentials) {
        this.requestCredentialsDetailsResponse_ = credentials;
    }
    requestPlaintextPassword(id, reason) {
        this.methodCalled('requestPlaintextPassword', { id, reason });
        return Promise.resolve('plainTextPassword');
    }
    copyPlaintextBackupPassword(id) {
        this.methodCalled('copyPlaintextBackupPassword', { id });
        return Promise.resolve(true);
    }
    addPassword(options) {
        this.methodCalled('addPassword', options);
        return Promise.resolve();
    }
    changeCredential(credential) {
        this.methodCalled('changeCredential', credential);
        return Promise.resolve();
    }
    removeCredential(id, fromStores) {
        this.methodCalled('removeCredential', { id, fromStores });
    }
    removeBackupPassword(id) {
        this.methodCalled('removeBackupPassword', { id });
    }
    removeBlockedSite(id) {
        this.methodCalled('removeBlockedSite', id);
    }
    requestExportProgressStatus() {
        this.methodCalled('requestExportProgressStatus');
        return Promise.resolve(ExportProgressStatus.kNotStarted);
    }
    exportPasswords() {
        this.methodCalled('exportPasswords');
        return Promise.resolve(this.exportPasswordsResult_);
    }
    setExportPasswordsResult(result) {
        this.exportPasswordsResult_ = result;
    }
    cancelExportPasswords() {
        this.methodCalled('cancelExportPasswords');
    }
    switchBiometricAuthBeforeFillingState() {
        this.methodCalled('switchBiometricAuthBeforeFillingState');
        return Promise.resolve(this.switchBiometricAuthBeforeFillingStateResult_);
    }
    setSwitchBiometricAuthBeforeFillingStateResponse(result) {
        this.switchBiometricAuthBeforeFillingStateResult_ = result;
    }
    undoRemoveSavedPasswordOrException() {
        this.methodCalled('undoRemoveSavedPasswordOrException');
    }
    showLastExportedFileInShell() {
        this.methodCalled('showLastExportedFileInShell');
    }
    getUrlCollection(url) {
        this.methodCalled('getUrlCollection', url);
        if (url.includes('www')) {
            return Promise.resolve({
                signonRealm: `https://${url}/login`,
                shown: url,
                link: `https://${url}/login`,
            });
        }
        else {
            return Promise.reject();
        }
    }
    addPasswordManagerAuthTimeoutListener(listener) {
        this.listeners.passwordManagerAuthTimeoutListener = listener;
    }
    removePasswordManagerAuthTimeoutListener(_listener) {
        this.listeners.passwordManagerAuthTimeoutListener = null;
    }
    addPasswordManagerActionableErrorChangedListener(listener) {
        this.actionableErrorListeners_.add(listener);
        this.listeners.passwordManagerActionableErrorChangedListener = error => {
            for (const l of this.actionableErrorListeners_) {
                l(error);
            }
        };
    }
    removePasswordManagerActionableErrorChangedListener(listener) {
        this.actionableErrorListeners_.delete(listener);
        if (this.actionableErrorListeners_.size === 0) {
            this.listeners.passwordManagerActionableErrorChangedListener = null;
        }
    }
    extendAuthValidity() {
        this.methodCalled('extendAuthValidity');
    }
    addAccountStorageEnabledStateListener(listener) {
        this.listeners.accountStorageActiveStateListener = listener;
    }
    removeAccountStorageEnabledStateListener(_listener) {
        this.listeners.accountStorageActiveStateListener = null;
    }
    fetchFamilyMembers() {
        this.methodCalled('fetchFamilyMembers');
        return Promise.resolve(this.data.familyFetchResults);
    }
    sharePassword(id, recipients) {
        this.methodCalled('sharePassword', id, recipients);
    }
    /**
     * Sets the value to be returned by importPasswords.
     */
    setImportResults(results) {
        this.importResults_ = results;
    }
    importPasswords(toStore) {
        this.methodCalled('importPasswords', toStore);
        return Promise.resolve(this.importResults_);
    }
    continueImport(selectedIds) {
        this.methodCalled('continueImport', selectedIds);
        return Promise.resolve(this.importResults_);
    }
    resetImporter(deleteFile) {
        this.methodCalled('resetImporter', deleteFile);
        return Promise.resolve();
    }
    isAccountStorageActive() {
        this.methodCalled('isAccountStorageActive');
        return Promise.resolve(this.data.isAccountStorageActive);
    }
    movePasswordsToAccount(ids) {
        this.methodCalled('movePasswordsToAccount', ids);
    }
    dismissSafetyHubPasswordMenuNotification() {
        this.methodCalled('dismissSafetyHubPasswordMenuNotification');
    }
    changePasswordManagerPin() {
        this.methodCalled('changePasswordManagerPin');
        return Promise.resolve(this.data.changePasswordManagerPinSuccessful);
    }
    isPasswordManagerPinAvailable() {
        this.methodCalled('isPasswordManagerPinAvailable');
        return Promise.resolve(this.data.isPasswordManagerPinAvailable);
    }
    disconnectCloudAuthenticator() {
        this.methodCalled('disconnectCloudAuthenticator');
        this.data.isConnectedToCloudAuthenticator = false;
        return Promise.resolve(this.data.disconnectCloudAuthenticatorSuccessful);
    }
    deleteAllPasswordManagerData() {
        this.methodCalled('deleteAllPasswordManagerData');
        return Promise.resolve(this.data.deleteAllPasswordManagerData);
    }
    isConnectedToCloudAuthenticator() {
        this.methodCalled('isConnectedToCloudAuthenticator');
        return Promise.resolve(this.data.isConnectedToCloudAuthenticator);
    }
    getActorLoginPermissions() {
        this.methodCalled('getActorLoginPermissions');
        return Promise.resolve(this.data.actorLoginPermissions.slice());
    }
    revokeActorLoginPermission(site) {
        this.methodCalled('revokeActorLoginPermission', site);
        this.data.actorLoginPermissions = this.data.actorLoginPermissions.filter(s => !(s.domainInfo.signonRealm === site.domainInfo.signonRealm &&
            s.username === site.username));
    }
    requestChangePassword(id) {
        this.methodCalled('requestChangePassword', id);
    }
    stopPasswordChange(id) {
        this.methodCalled('stopPasswordChange', id);
    }
    openPasswordChangeTab(id) {
        this.methodCalled('openPasswordChangeTab', id);
    }
    getPasswordManagerActionableError() {
        this.methodCalled('getPasswordManagerActionableError');
        return Promise.resolve(this.data.getActionableError);
    }
    startTrustedVaultUnlock() {
        this.methodCalled('startTrustedVaultUnlock');
    }
}
