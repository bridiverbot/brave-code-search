import { ImportEntryStatus, ImportResultsStatus, PageCallbackRouter, PageHandlerRemote, PasswordManagerActionableError, PasswordStoreSet as MojoPasswordStoreSet } from './password_manager.mojom-webui.js';
import type { ActorLoginPermission, ExportPasswordsResult, ExportProgressStatus, ImportResults } from './password_manager.mojom-webui.js';
export type BlockedSite = chrome.passwordsPrivate.ExceptionEntry;
export type AccountStorageActiveStateChangedListener = (activeState: boolean) => void;
export type CredentialsChangedListener = (credentials: chrome.passwordsPrivate.PasswordUiEntry[]) => void;
export type PasswordCheckStatusChangedListener = (status: chrome.passwordsPrivate.PasswordCheckStatus) => void;
export type BlockedSitesListChangedListener = (entries: BlockedSite[]) => void;
export type PasswordManagerAuthTimeoutListener = () => void;
export type PasswordManagerActionableErrorChangedListener = (error: chrome.passwordsPrivate.PasswordManagerActionableError) => void;
/**
 * Represents different interactions the user can perform on the Password Check
 * page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Needs to stay in sync with PasswordCheckInteraction in enums.xml.
 */
export declare enum PasswordCheckInteraction {
    START_CHECK_AUTOMATICALLY = 0,
    START_CHECK_MANUALLY = 1,
    STOP_CHECK = 2,
    CHANGE_PASSWORD = 3,
    EDIT_PASSWORD = 4,
    REMOVE_PASSWORD = 5,
    SHOW_PASSWORD = 6,
    MUTE_PASSWORD = 7,
    UNMUTE_PASSWORD = 8,
    CHANGE_PASSWORD_AUTOMATICALLY = 9,
    COUNT = 10
}
/**
 * Should be kept in sync with PasswordViewPageInteractions in enums.xml.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export declare enum PasswordViewPageInteractions {
    CREDENTIAL_ROW_CLICKED = 0,
    CREDENTIAL_FOUND = 1,
    CREDENTIAL_NOT_FOUND = 2,
    USERNAME_COPY_BUTTON_CLICKED = 3,
    PASSWORD_COPY_BUTTON_CLICKED = 4,
    PASSWORD_SHOW_BUTTON_CLICKED = 5,
    PASSWORD_EDIT_BUTTON_CLICKED = 6,
    PASSWORD_DELETE_BUTTON_CLICKED = 7,
    CREDENTIAL_EDITED = 8,
    TIMED_OUT_IN_EDIT_DIALOG = 9,
    TIMED_OUT_IN_VIEW_PAGE = 10,
    CREDENTIAL_REQUESTED_BY_URL = 11,
    PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED = 12,
    PASSKEY_DELETE_BUTTON_CLICKED = 13,
    PASSKEY_EDIT_BUTTON_CLICKED = 14,
    CHANGE_PASSWORD_CLICKED = 15,
    COUNT = 16
}
/**
 * Interface for all callbacks to the password API.
 */
export interface PasswordManagerProxy {
    callbackRouter: PageCallbackRouter;
    /**
     * Add an observer to the list of saved passwords.
     */
    addSavedPasswordListChangedListener(listener: CredentialsChangedListener): void;
    /**
     * Remove an observer from the list of saved passwords.
     */
    removeSavedPasswordListChangedListener(listener: CredentialsChangedListener): void;
    /**
     * Add an observer to the list of blocked sites.
     */
    addBlockedSitesListChangedListener(listener: BlockedSitesListChangedListener): void;
    /**
     * Remove an observer from the list of blocked sites.
     */
    removeBlockedSitesListChangedListener(listener: BlockedSitesListChangedListener): void;
    /**
     * Add an observer to the passwords check status change.
     */
    addPasswordCheckStatusListener(listener: PasswordCheckStatusChangedListener): void;
    /**
     * Remove an observer to the passwords check status change.
     */
    removePasswordCheckStatusListener(listener: PasswordCheckStatusChangedListener): void;
    /**
     * Add an observer to the insecure passwords change.
     */
    addInsecureCredentialsListener(listener: CredentialsChangedListener): void;
    /**
     * Remove an observer to the insecure passwords change.
     */
    removeInsecureCredentialsListener(listener: CredentialsChangedListener): void;
    startTrustedVaultUnlock(): void;
    /**
     * Request the list of saved passwords.
     */
    getSavedPasswordList(): Promise<chrome.passwordsPrivate.PasswordUiEntry[]>;
    /**
     * Request grouped credentials.
     */
    getCredentialGroups(): Promise<chrome.passwordsPrivate.CredentialGroup[]>;
    /**
     * Request the list of blocked sites.
     */
    getBlockedSitesList(): Promise<BlockedSite[]>;
    /**
     * Requests the current status of the check.
     */
    getPasswordCheckStatus(): Promise<chrome.passwordsPrivate.PasswordCheckStatus>;
    /**
     * Requests the latest information about insecure credentials.
     */
    getInsecureCredentials(): Promise<chrome.passwordsPrivate.PasswordUiEntry[]>;
    /**
     * Requests the latest information about insecure credentials.
     */
    getCredentialsWithReusedPassword(): Promise<chrome.passwordsPrivate.PasswordUiEntryList[]>;
    /**
     * Requests the start of the bulk password check.
     */
    startBulkPasswordCheck(): void;
    /**
     * Records a given interaction on the Password Check page.
     */
    recordPasswordCheckInteraction(interaction: PasswordCheckInteraction): void;
    /**
     * Records a given interaction on the Password details page.
     */
    recordPasswordViewInteraction(interaction: PasswordViewPageInteractions): void;
    /**
     * Triggers the shortcut creation dialog.
     */
    showAddShortcutDialog(): void;
    /**
     * Gets the list of full (with note and password) credentials for given ids.
     * @param ids The id for the password entries being retrieved.
     * @return A promise that resolves to |PasswordUiEntry[]|.
     */
    requestCredentialsDetails(ids: number[]): Promise<chrome.passwordsPrivate.PasswordUiEntry[]>;
    /**
     * Gets the saved password for a given id and reason.
     * @param id The id for the password entry being being retrieved.
     * @param reason The reason why the plaintext password is requested.
     * @return A promise that resolves to the plaintext password.
     */
    requestPlaintextPassword(id: number, reason: chrome.passwordsPrivate.PlaintextReason): Promise<string>;
    /**
     * Copies the backup password for a specific ID to the clipboard.
     * @param id The id for the password entry being being retrieved.
     * @return A promise that resolves to `true` if the copy was successful, and
     *     `false` otherwise.
     */
    copyPlaintextBackupPassword(id: number): Promise<boolean>;
    /**
     * Saves a new password entry described by the given |options|.
     * @param options Details about a new password and storage to be used.
     * @return A promise that resolves when the new entry is added.
     */
    addPassword(options: chrome.passwordsPrivate.AddPasswordOptions): Promise<void>;
    /**
     * Fetches family members (password share recipients).
     * @return A promise that resolves the FamilyFetchResults.
     */
    fetchFamilyMembers(): Promise<chrome.passwordsPrivate.FamilyFetchResults>;
    /**
     * Sends sharing invitations to the recipients.
     * @param id The id of the password entry to be shared.
     * @param recipients The list of selected recipients.
     */
    sharePassword(id: number, recipients: chrome.passwordsPrivate.RecipientInfo[]): void;
    /**
     * Updates the given credential. Not all parameters can be updated.
     * @param credential the credential to update.
     * @return A promise that resolves if the credential was found and updated,
     *     rejects otherwise.
     */
    changeCredential(credential: chrome.passwordsPrivate.PasswordUiEntry): Promise<void>;
    /**
     * Should remove the credential and notify that the list has changed.
     * @param id The id for the credential being removed. No-op if |id| is not in
     *     the list.
     * @param fromStores The store from which credential should be removed.
     */
    removeCredential(id: number, fromStores: chrome.passwordsPrivate.PasswordStoreSet): void;
    /**
     * Should remove the backup password of a credential and notify that the list
     * has changed.
     * @param id The id for the credential being updated. No-op if |id| is not in
     *     the list.
     */
    removeBackupPassword(id: number): void;
    /**
     * Should remove the blocked site and notify that the list has changed.
     * @param id The id for the blocked url entry being removed. No-op if |id|
     *     is not in the list.
     */
    removeBlockedSite(id: number): void;
    /**
     * Dismisses / mutes the |insecureCredential| in the passwords store.
     */
    muteInsecureCredential(insecureCredential: chrome.passwordsPrivate.PasswordUiEntry): void;
    /**
     * Restores / unmutes the |insecureCredential| in the passwords store.
     */
    unmuteInsecureCredential(insecureCredential: chrome.passwordsPrivate.PasswordUiEntry): void;
    /**
     * Should undo the last saved password or exception removal and notify that
     * the list has changed.
     */
    undoRemoveSavedPasswordOrException(): void;
    /**
     * Triggers the dialog for importing passwords.
     * @return A promise that resolves to the import results.
     */
    importPasswords(toStore: chrome.passwordsPrivate.PasswordStoreSet): Promise<ImportResults>;
    /**
     * Resumes the password import process when user has selected which passwords
     * to replace.
     * @return A promise that resolves to the |ImportResults|.
     */
    continueImport(selectedIds: number[]): Promise<ImportResults>;
    /**
     * Resets the PasswordImporter if it is in the CONFLICTS/FINISHED state and
     * the user closes the dialog. Only when the PasswordImporter is in FINISHED
     * state, |deleteFile| option is taken into account.
     * @param deleteFile Whether to trigger deletion of the last imported file.
     */
    resetImporter(deleteFile: boolean): Promise<void>;
    /**
     * Queries the status of any ongoing export.
     */
    requestExportProgressStatus(): Promise<ExportProgressStatus>;
    /**
     * Triggers the dialog for exporting passwords.
     */
    exportPasswords(): Promise<ExportPasswordsResult>;
    /**
     * Switches Biometric authentication before filling state after
     * successful authentication.
     * @return A promise that resolves with authentication result.
     */
    switchBiometricAuthBeforeFillingState(): Promise<boolean>;
    /**
     * Shows the file with the exported passwords in the OS shell.
     */
    showLastExportedFileInShell(): void;
    /**
     * Requests whether the given |url| meets the requirements to save a password
     * for it (e.g. valid, has proper scheme etc.).
     * @return A promise that resolves to the corresponding URLCollection on
     *     success and to null otherwise.
     */
    getUrlCollection(url: string): Promise<chrome.passwordsPrivate.UrlCollection | null>;
    /**
     * Add an observer for authentication timeout.
     */
    addPasswordManagerAuthTimeoutListener(listener: PasswordManagerAuthTimeoutListener): void;
    /**
     * Remove the specified observer for authentication timeout.
     */
    removePasswordManagerAuthTimeoutListener(listener: PasswordManagerAuthTimeoutListener): void;
    /**
     * Add an observer for password manager actionable error change.
     */
    addPasswordManagerActionableErrorChangedListener(listener: PasswordManagerActionableErrorChangedListener): void;
    /**
     * Remove the specified observer for password manager actionable error change.
     */
    removePasswordManagerActionableErrorChangedListener(listener: PasswordManagerActionableErrorChangedListener): void;
    /**
     * Requests extension of authentication validity.
     */
    extendAuthValidity(): void;
    /**
     * Add an observer to the account storage active state.
     */
    addAccountStorageEnabledStateListener(listener: AccountStorageActiveStateChangedListener): void;
    /**
     * Remove an observer to the account storage active state.
     */
    removeAccountStorageEnabledStateListener(listener: AccountStorageActiveStateChangedListener): void;
    /**
     * Requests the account-storage active state of the current user.
     * @return A promise that resolves to the active state.
     */
    isAccountStorageActive(): Promise<boolean>;
    /**
     * Moves a list of passwords from the device to the account
     * @param ids The ids for the password entries being moved.
     */
    movePasswordsToAccount(ids: number[]): void;
    /** Dismiss the menu notifications for the Safety Hub password module. */
    dismissSafetyHubPasswordMenuNotification(): void;
    /** Starts the flow for changing Password Manager PIN. */
    changePasswordManagerPin(): Promise<boolean>;
    /** Checks whether changing the Password Manager PIN is possible. */
    isPasswordManagerPinAvailable(): Promise<boolean>;
    /**
     * Starts the flow for disconnecting the Cloud Authenticator
     * (Passkeys Enclave).
     */
    disconnectCloudAuthenticator(): Promise<boolean>;
    /**
     * Checks whether the Chrome client is connected to the Cloud Authenticator
     * (Passkeys Enclave).
     */
    isConnectedToCloudAuthenticator(): Promise<boolean>;
    /**
     * Deletes all password manager data (passwords, passkeys, etc.)
     */
    deleteAllPasswordManagerData(): Promise<boolean>;
    /**
     * Returns the list of sites that can be used for Actor Login.
     */
    getActorLoginPermissions(): Promise<ActorLoginPermission[]>;
    /**
     * Revokes actor login permission for all credentials matching the site.
     */
    revokeActorLoginPermission(site: ActorLoginPermission): void;
    /**
     * Request a password change flow by invoking Glic.
     * @param id The ID of the credential.
     */
    requestChangePassword(credential_id: number): void;
    /**
     * Stops an ongoing password change flow started from Password Checkup for the
     * given credential.
     */
    stopPasswordChange(credentialId: number): void;
    /**
     * Opens/activates the tab where the automatic password change flow is
     * running.
     */
    openPasswordChangeTab(id: number): void;
    /**
     * Returns the current actionable error.
     */
    getPasswordManagerActionableError(): Promise<PasswordManagerActionableError>;
}
/**
 * Maps chrome.passwordsPrivate.PasswordManagerActionableError to
 * password_manager.mojom.PasswordManagerActionableError.
 */
export declare function toMojoActionableError(error: chrome.passwordsPrivate.PasswordManagerActionableError): PasswordManagerActionableError;
/**
 * Maps chrome.passwordsPrivate.ImportResultsStatus to
 * password_manager.mojom.ImportResultsStatus.
 */
export declare function toMojoImportResultsStatus(status: chrome.passwordsPrivate.ImportResultsStatus): ImportResultsStatus;
/**
 * Maps chrome.passwordsPrivate.ImportEntryStatus to
 * password_manager.mojom.ImportEntryStatus.
 */
export declare function toMojoImportEntryStatus(status: chrome.passwordsPrivate.ImportEntryStatus): ImportEntryStatus;
/**
 * Maps chrome.passwordsPrivate.ImportResults to
 * password_manager.mojom.ImportResults.
 */
export declare function toMojoImportResults(results: chrome.passwordsPrivate.ImportResults): ImportResults;
/**
 * Maps chrome.passwordsPrivate.PasswordStoreSet to
 * password_manager.mojom.PasswordStoreSet.
 */
export declare function toMojoPasswordStoreSet(store: chrome.passwordsPrivate.PasswordStoreSet): MojoPasswordStoreSet;
/**
 * Implementation that accesses the private API.
 */
export declare class PasswordManagerImpl implements PasswordManagerProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerRemote;
    constructor();
    addSavedPasswordListChangedListener(listener: CredentialsChangedListener): void;
    removeSavedPasswordListChangedListener(listener: CredentialsChangedListener): void;
    addBlockedSitesListChangedListener(listener: BlockedSitesListChangedListener): void;
    removeBlockedSitesListChangedListener(listener: BlockedSitesListChangedListener): void;
    addPasswordCheckStatusListener(listener: PasswordCheckStatusChangedListener): void;
    removePasswordCheckStatusListener(listener: PasswordCheckStatusChangedListener): void;
    addInsecureCredentialsListener(listener: CredentialsChangedListener): void;
    removeInsecureCredentialsListener(listener: CredentialsChangedListener): void;
    getSavedPasswordList(): Promise<never[] | chrome.passwordsPrivate.PasswordUiEntry[]>;
    getCredentialGroups(): Promise<chrome.passwordsPrivate.CredentialGroup[]>;
    getBlockedSitesList(): Promise<never[] | chrome.passwordsPrivate.ExceptionEntry[]>;
    getPasswordCheckStatus(): Promise<chrome.passwordsPrivate.PasswordCheckStatus>;
    getInsecureCredentials(): Promise<chrome.passwordsPrivate.PasswordUiEntry[]>;
    getCredentialsWithReusedPassword(): Promise<chrome.passwordsPrivate.PasswordUiEntryList[]>;
    startBulkPasswordCheck(): void;
    recordPasswordCheckInteraction(interaction: PasswordCheckInteraction): void;
    recordPasswordViewInteraction(interaction: PasswordViewPageInteractions): void;
    showAddShortcutDialog(): void;
    requestCredentialsDetails(ids: number[]): Promise<chrome.passwordsPrivate.PasswordUiEntry[]>;
    requestPlaintextPassword(id: number, reason: chrome.passwordsPrivate.PlaintextReason): Promise<string>;
    copyPlaintextBackupPassword(id: number): Promise<boolean>;
    addPassword(options: chrome.passwordsPrivate.AddPasswordOptions): Promise<void>;
    changeCredential(credential: chrome.passwordsPrivate.PasswordUiEntry): Promise<void>;
    removeCredential(id: number, fromStores: chrome.passwordsPrivate.PasswordStoreSet): void;
    removeBackupPassword(id: number): void;
    removeBlockedSite(id: number): void;
    muteInsecureCredential(insecureCredential: chrome.passwordsPrivate.PasswordUiEntry): void;
    unmuteInsecureCredential(insecureCredential: chrome.passwordsPrivate.PasswordUiEntry): void;
    undoRemoveSavedPasswordOrException(): void;
    fetchFamilyMembers(): Promise<chrome.passwordsPrivate.FamilyFetchResults>;
    sharePassword(id: number, recipients: chrome.passwordsPrivate.RecipientInfo[]): void;
    importPasswords(toStore: chrome.passwordsPrivate.PasswordStoreSet): Promise<ImportResults>;
    continueImport(selectedIds: number[]): Promise<ImportResults>;
    resetImporter(deleteFile: boolean): Promise<void>;
    requestExportProgressStatus(): Promise<ExportProgressStatus>;
    exportPasswords(): Promise<ExportPasswordsResult>;
    switchBiometricAuthBeforeFillingState(): Promise<boolean>;
    showLastExportedFileInShell(): void;
    getUrlCollection(url: string): Promise<chrome.passwordsPrivate.UrlCollection | null>;
    addPasswordManagerAuthTimeoutListener(listener: PasswordManagerAuthTimeoutListener): void;
    removePasswordManagerAuthTimeoutListener(listener: PasswordManagerAuthTimeoutListener): void;
    addPasswordManagerActionableErrorChangedListener(listener: PasswordManagerActionableErrorChangedListener): void;
    removePasswordManagerActionableErrorChangedListener(listener: PasswordManagerActionableErrorChangedListener): void;
    extendAuthValidity(): void;
    addAccountStorageEnabledStateListener(listener: AccountStorageActiveStateChangedListener): void;
    removeAccountStorageEnabledStateListener(listener: AccountStorageActiveStateChangedListener): void;
    isAccountStorageActive(): Promise<boolean>;
    movePasswordsToAccount(ids: number[]): void;
    dismissSafetyHubPasswordMenuNotification(): void;
    changePasswordManagerPin(): Promise<boolean>;
    isPasswordManagerPinAvailable(): Promise<boolean>;
    disconnectCloudAuthenticator(): Promise<boolean>;
    isConnectedToCloudAuthenticator(): Promise<boolean>;
    deleteAllPasswordManagerData(): Promise<boolean>;
    getActorLoginPermissions(): Promise<import("./password_manager.mojom-webui.js").ActorLoginPermissionMojoType[]>;
    revokeActorLoginPermission(site: ActorLoginPermission): void;
    requestChangePassword(credentialId: number): void;
    stopPasswordChange(credentialId: number): void;
    openPasswordChangeTab(id: number): void;
    getPasswordManagerActionableError(): Promise<PasswordManagerActionableError>;
    startTrustedVaultUnlock(): void;
    static getInstance(): PasswordManagerProxy;
    static setInstance(proxy: PasswordManagerProxy): void;
}
