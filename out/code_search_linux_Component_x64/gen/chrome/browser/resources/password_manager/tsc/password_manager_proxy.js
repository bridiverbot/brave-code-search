// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview PasswordManagerProxy is an abstraction over
 * chrome.passwordsPrivate and a Mojo remote. It is intended to facilitate
 * testing. The chrome.passwordsPrivate API is being migrated to use Mojo.
 */
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { ImportEntryStatus, ImportResultsStatus, PageCallbackRouter, PageHandlerFactory, PageHandlerRemote, PasswordManagerActionableError, PasswordStoreSet as MojoPasswordStoreSet } from './password_manager.mojom-webui.js';
/**
 * Represents different interactions the user can perform on the Password Check
 * page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Needs to stay in sync with PasswordCheckInteraction in enums.xml.
 */
export var PasswordCheckInteraction;
(function (PasswordCheckInteraction) {
    PasswordCheckInteraction[PasswordCheckInteraction["START_CHECK_AUTOMATICALLY"] = 0] = "START_CHECK_AUTOMATICALLY";
    PasswordCheckInteraction[PasswordCheckInteraction["START_CHECK_MANUALLY"] = 1] = "START_CHECK_MANUALLY";
    PasswordCheckInteraction[PasswordCheckInteraction["STOP_CHECK"] = 2] = "STOP_CHECK";
    PasswordCheckInteraction[PasswordCheckInteraction["CHANGE_PASSWORD"] = 3] = "CHANGE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["EDIT_PASSWORD"] = 4] = "EDIT_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["REMOVE_PASSWORD"] = 5] = "REMOVE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["SHOW_PASSWORD"] = 6] = "SHOW_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["MUTE_PASSWORD"] = 7] = "MUTE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["UNMUTE_PASSWORD"] = 8] = "UNMUTE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["CHANGE_PASSWORD_AUTOMATICALLY"] = 9] = "CHANGE_PASSWORD_AUTOMATICALLY";
    // Must be last.
    PasswordCheckInteraction[PasswordCheckInteraction["COUNT"] = 10] = "COUNT";
})(PasswordCheckInteraction || (PasswordCheckInteraction = {}));
/**
 * Should be kept in sync with PasswordViewPageInteractions in enums.xml.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export var PasswordViewPageInteractions;
(function (PasswordViewPageInteractions) {
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_ROW_CLICKED"] = 0] = "CREDENTIAL_ROW_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_FOUND"] = 1] = "CREDENTIAL_FOUND";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_NOT_FOUND"] = 2] = "CREDENTIAL_NOT_FOUND";
    PasswordViewPageInteractions[PasswordViewPageInteractions["USERNAME_COPY_BUTTON_CLICKED"] = 3] = "USERNAME_COPY_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_COPY_BUTTON_CLICKED"] = 4] = "PASSWORD_COPY_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_SHOW_BUTTON_CLICKED"] = 5] = "PASSWORD_SHOW_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_EDIT_BUTTON_CLICKED"] = 6] = "PASSWORD_EDIT_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_DELETE_BUTTON_CLICKED"] = 7] = "PASSWORD_DELETE_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_EDITED"] = 8] = "CREDENTIAL_EDITED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["TIMED_OUT_IN_EDIT_DIALOG"] = 9] = "TIMED_OUT_IN_EDIT_DIALOG";
    PasswordViewPageInteractions[PasswordViewPageInteractions["TIMED_OUT_IN_VIEW_PAGE"] = 10] = "TIMED_OUT_IN_VIEW_PAGE";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_REQUESTED_BY_URL"] = 11] = "CREDENTIAL_REQUESTED_BY_URL";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED"] = 12] = "PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_DELETE_BUTTON_CLICKED"] = 13] = "PASSKEY_DELETE_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_EDIT_BUTTON_CLICKED"] = 14] = "PASSKEY_EDIT_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CHANGE_PASSWORD_CLICKED"] = 15] = "CHANGE_PASSWORD_CLICKED";
    // Must be last.
    PasswordViewPageInteractions[PasswordViewPageInteractions["COUNT"] = 16] = "COUNT";
})(PasswordViewPageInteractions || (PasswordViewPageInteractions = {}));
/**
 * Maps chrome.passwordsPrivate.PasswordManagerActionableError to
 * password_manager.mojom.PasswordManagerActionableError.
 */
export function toMojoActionableError(error) {
    const PrivateError = chrome.passwordsPrivate.PasswordManagerActionableError;
    switch (error) {
        case PrivateError.NO_ERROR:
            return PasswordManagerActionableError.kNoError;
        case PrivateError.INACTIONABLE:
            return PasswordManagerActionableError.kInactionable;
        case PrivateError.INACTIONABLE_TEMPORARY_ERROR:
            return PasswordManagerActionableError.kInactionableTemporaryError;
        case PrivateError.SIGN_IN_NEEDED:
            return PasswordManagerActionableError.kSignInNeeded;
        case PrivateError.KEYCHAIN_ERROR:
            return PasswordManagerActionableError.kKeychainError;
        case PrivateError.TRUSTED_VAULT_KEY_NEEDED:
            return PasswordManagerActionableError.kTrustedVaultKeyNeeded;
        case PrivateError.NEEDS_PASSPHRASE:
            return PasswordManagerActionableError.kNeedsPassphrase;
        default:
            return PasswordManagerActionableError.kNoError;
    }
}
/**
 * Maps chrome.passwordsPrivate.ImportResultsStatus to
 * password_manager.mojom.ImportResultsStatus.
 */
export function toMojoImportResultsStatus(status) {
    const PrivateStatus = chrome.passwordsPrivate.ImportResultsStatus;
    switch (status) {
        case PrivateStatus.SUCCESS:
            return ImportResultsStatus.kSuccess;
        case PrivateStatus.IO_ERROR:
            return ImportResultsStatus.kIoError;
        case PrivateStatus.BAD_FORMAT:
            return ImportResultsStatus.kBadFormat;
        case PrivateStatus.DISMISSED:
            return ImportResultsStatus.kDismissed;
        case PrivateStatus.MAX_FILE_SIZE:
            return ImportResultsStatus.kMaxFileSize;
        case PrivateStatus.IMPORT_ALREADY_ACTIVE:
            return ImportResultsStatus.kImportAlreadyActive;
        case PrivateStatus.NUM_PASSWORDS_EXCEEDED:
            return ImportResultsStatus.kNumPasswordsExceeded;
        case PrivateStatus.CONFLICTS:
            return ImportResultsStatus.kConflicts;
        case PrivateStatus.UNKNOWN_ERROR:
        default:
            return ImportResultsStatus.kUnknownError;
    }
}
/**
 * Maps chrome.passwordsPrivate.ImportEntryStatus to
 * password_manager.mojom.ImportEntryStatus.
 */
export function toMojoImportEntryStatus(status) {
    const PrivateStatus = chrome.passwordsPrivate.ImportEntryStatus;
    switch (status) {
        case PrivateStatus.MISSING_PASSWORD:
            return ImportEntryStatus.kMissingPassword;
        case PrivateStatus.MISSING_URL:
            return ImportEntryStatus.kMissingUrl;
        case PrivateStatus.INVALID_URL:
            return ImportEntryStatus.kInvalidUrl;
        case PrivateStatus.NON_ASCII_URL:
            return ImportEntryStatus.kNonAsciiUrl;
        case PrivateStatus.LONG_URL:
            return ImportEntryStatus.kLongUrl;
        case PrivateStatus.LONG_PASSWORD:
            return ImportEntryStatus.kLongPassword;
        case PrivateStatus.LONG_USERNAME:
            return ImportEntryStatus.kLongUsername;
        case PrivateStatus.CONFLICT_PROFILE:
            return ImportEntryStatus.kConflictProfile;
        case PrivateStatus.CONFLICT_ACCOUNT:
            return ImportEntryStatus.kConflictAccount;
        case PrivateStatus.LONG_NOTE:
            return ImportEntryStatus.kLongNote;
        case PrivateStatus.LONG_CONCATENATED_NOTE:
            return ImportEntryStatus.kLongConcatenatedNote;
        case PrivateStatus.VALID:
            return ImportEntryStatus.kValid;
        case PrivateStatus.UNKNOWN_ERROR:
        default:
            return ImportEntryStatus.kUnknownError;
    }
}
/**
 * Maps chrome.passwordsPrivate.ImportResults to
 * password_manager.mojom.ImportResults.
 */
export function toMojoImportResults(results) {
    return {
        status: toMojoImportResultsStatus(results.status),
        numberImported: results.numberImported,
        displayedEntries: results.displayedEntries.map(entry => ({
            status: toMojoImportEntryStatus(entry.status),
            url: entry.url,
            username: entry.username,
            password: entry.password,
            id: entry.id,
        })),
        fileName: results.fileName || '',
    };
}
/**
 * Maps chrome.passwordsPrivate.PasswordStoreSet to
 * password_manager.mojom.PasswordStoreSet.
 */
export function toMojoPasswordStoreSet(store) {
    switch (store) {
        case chrome.passwordsPrivate.PasswordStoreSet.DEVICE:
            return MojoPasswordStoreSet.kDevice;
        case chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT:
            return MojoPasswordStoreSet.kAccount;
        case chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT:
            return MojoPasswordStoreSet.kDeviceAndAccount;
        default:
            assertNotReached();
    }
}
/**
 * Implementation that accesses the private API.
 */
export class PasswordManagerImpl {
    callbackRouter = new PageCallbackRouter();
    handler = new PageHandlerRemote();
    constructor() {
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    addSavedPasswordListChangedListener(listener) {
        chrome.passwordsPrivate.onSavedPasswordsListChanged.addListener(listener);
    }
    removeSavedPasswordListChangedListener(listener) {
        chrome.passwordsPrivate.onSavedPasswordsListChanged.removeListener(listener);
    }
    addBlockedSitesListChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordExceptionsListChanged.addListener(listener);
    }
    removeBlockedSitesListChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordExceptionsListChanged.removeListener(listener);
    }
    addPasswordCheckStatusListener(listener) {
        chrome.passwordsPrivate.onPasswordCheckStatusChanged.addListener(listener);
    }
    removePasswordCheckStatusListener(listener) {
        chrome.passwordsPrivate.onPasswordCheckStatusChanged.removeListener(listener);
    }
    addInsecureCredentialsListener(listener) {
        chrome.passwordsPrivate.onInsecureCredentialsChanged.addListener(listener);
    }
    removeInsecureCredentialsListener(listener) {
        chrome.passwordsPrivate.onInsecureCredentialsChanged.removeListener(listener);
    }
    getSavedPasswordList() {
        return chrome.passwordsPrivate.getSavedPasswordList().catch(() => []);
    }
    getCredentialGroups() {
        return chrome.passwordsPrivate.getCredentialGroups();
    }
    getBlockedSitesList() {
        return chrome.passwordsPrivate.getPasswordExceptionList().catch(() => []);
    }
    getPasswordCheckStatus() {
        return chrome.passwordsPrivate.getPasswordCheckStatus();
    }
    getInsecureCredentials() {
        return chrome.passwordsPrivate.getInsecureCredentials();
    }
    getCredentialsWithReusedPassword() {
        return chrome.passwordsPrivate.getCredentialsWithReusedPassword();
    }
    startBulkPasswordCheck() {
        this.handler.startBulkPasswordCheck();
    }
    recordPasswordCheckInteraction(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.BulkCheck.UserAction', interaction, PasswordCheckInteraction.COUNT);
    }
    recordPasswordViewInteraction(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.PasswordViewPage.UserActions', interaction, PasswordViewPageInteractions.COUNT);
    }
    showAddShortcutDialog() {
        this.handler.showAddShortcutDialog();
    }
    requestCredentialsDetails(ids) {
        return chrome.passwordsPrivate.requestCredentialsDetails(ids);
    }
    requestPlaintextPassword(id, reason) {
        return chrome.passwordsPrivate.requestPlaintextPassword(id, reason);
    }
    copyPlaintextBackupPassword(id) {
        return this.handler.copyPlaintextBackupPassword(id).then(result => result.success);
    }
    addPassword(options) {
        return chrome.passwordsPrivate.addPassword(options);
    }
    changeCredential(credential) {
        return chrome.passwordsPrivate.changeCredential(credential);
    }
    removeCredential(id, fromStores) {
        if (!loadTimeData.getBoolean('enablePasswordManagerMojoApiPhase2')) {
            chrome.passwordsPrivate.removeCredential(id, fromStores);
            return;
        }
        this.handler.removeCredential(id, toMojoPasswordStoreSet(fromStores));
    }
    removeBackupPassword(id) {
        this.handler.removeBackupPassword(id);
    }
    removeBlockedSite(id) {
        this.handler.removePasswordException(id);
    }
    muteInsecureCredential(insecureCredential) {
        chrome.passwordsPrivate.muteInsecureCredential(insecureCredential);
    }
    unmuteInsecureCredential(insecureCredential) {
        chrome.passwordsPrivate.unmuteInsecureCredential(insecureCredential);
    }
    undoRemoveSavedPasswordOrException() {
        this.handler.undoRemoveSavedPasswordOrException();
    }
    fetchFamilyMembers() {
        return chrome.passwordsPrivate.fetchFamilyMembers();
    }
    sharePassword(id, recipients) {
        chrome.passwordsPrivate.sharePassword(id, recipients);
    }
    importPasswords(toStore) {
        if (!loadTimeData.getBoolean('enablePasswordManagerMojoApiPhase2')) {
            return chrome.passwordsPrivate.importPasswords(toStore).then(toMojoImportResults);
        }
        return this.handler.importPasswords(toMojoPasswordStoreSet(toStore))
            .then(res => res.results);
    }
    continueImport(selectedIds) {
        if (!loadTimeData.getBoolean('enablePasswordManagerMojoApiPhase2')) {
            return chrome.passwordsPrivate.continueImport(selectedIds)
                .then(toMojoImportResults);
        }
        return this.handler.continueImport(selectedIds).then(res => res.results);
    }
    resetImporter(deleteFile) {
        return this.handler.resetImporter(deleteFile).then(() => { });
    }
    requestExportProgressStatus() {
        return this.handler.getPasswordsExportProgress().then(response => response.status);
    }
    exportPasswords() {
        return this.handler.requestPasswordsExport().then(({ result }) => result);
    }
    switchBiometricAuthBeforeFillingState() {
        return this.handler.switchBiometricAuthBeforeFillingState().then(result => result.success);
    }
    showLastExportedFileInShell() {
        this.handler.showLastExportedFileInShell();
    }
    getUrlCollection(url) {
        return chrome.passwordsPrivate.getUrlCollection(url);
    }
    addPasswordManagerAuthTimeoutListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerAuthTimeout.addListener(listener);
    }
    removePasswordManagerAuthTimeoutListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerAuthTimeout.removeListener(listener);
    }
    addPasswordManagerActionableErrorChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerActionableErrorChanged.addListener(listener);
    }
    removePasswordManagerActionableErrorChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerActionableErrorChanged
            .removeListener(listener);
    }
    extendAuthValidity() {
        this.handler.extendAuthValidity();
    }
    addAccountStorageEnabledStateListener(listener) {
        chrome.passwordsPrivate.onAccountStorageActiveStateChanged.addListener(listener);
    }
    removeAccountStorageEnabledStateListener(listener) {
        chrome.passwordsPrivate.onAccountStorageActiveStateChanged.removeListener(listener);
    }
    isAccountStorageActive() {
        return this.handler.isAccountStorageActive().then(result => result.active);
    }
    movePasswordsToAccount(ids) {
        this.handler.movePasswordsToAccount(ids);
    }
    dismissSafetyHubPasswordMenuNotification() {
        chrome.send('dismissSafetyHubPasswordMenuNotification');
    }
    changePasswordManagerPin() {
        return this.handler.changePasswordManagerPin().then(result => result.success);
    }
    isPasswordManagerPinAvailable() {
        return this.handler.isPasswordManagerPinAvailable().then(result => result.isAvailable);
    }
    disconnectCloudAuthenticator() {
        return this.handler.disconnectCloudAuthenticator().then(result => result.success);
    }
    isConnectedToCloudAuthenticator() {
        return this.handler.isConnectedToCloudAuthenticator().then(result => result.connected);
    }
    deleteAllPasswordManagerData() {
        return this.handler.deleteAllPasswordManagerData().then(result => result.success);
    }
    getActorLoginPermissions() {
        return this.handler.getActorLoginPermissions().then(result => result.sites);
    }
    revokeActorLoginPermission(site) {
        this.handler.revokeActorLoginPermission(site);
    }
    requestChangePassword(credentialId) {
        this.handler.startPasswordChange(credentialId);
    }
    stopPasswordChange(credentialId) {
        this.handler.stopPasswordChange(credentialId);
    }
    openPasswordChangeTab(id) {
        this.handler.openPasswordChangeTab(id);
    }
    getPasswordManagerActionableError() {
        return this.handler.getPasswordManagerActionableError().then(result => result.error);
    }
    startTrustedVaultUnlock() {
        this.handler.startTrustedVaultUnlock();
    }
    static getInstance() {
        return instance || (instance = new PasswordManagerImpl());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
}
let instance = null;
