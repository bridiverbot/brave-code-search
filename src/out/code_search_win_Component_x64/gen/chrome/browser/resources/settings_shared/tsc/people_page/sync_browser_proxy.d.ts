/**
 * @see chrome/browser/ui/webui/settings/people_handler.cc
 */
export interface StoredAccount {
    fullName?: string;
    givenName?: string;
    email: string;
    isPrimaryAccount?: boolean;
    avatarImage?: string;
}
/**
 * Equivalent to C++ counterpart.
 * @see chrome/browser/signin/signin_ui_util.h
 * TODO(b/336510160): Look into integrating SYNC_PAUSED value.
 */
export declare enum SignedInState {
    SIGNED_OUT = 0,
    SIGNED_IN = 1,
    SYNCING = 2,
    SIGNED_IN_PAUSED = 3,
    WEB_ONLY_SIGNED_IN = 4
}
/**
 * @see chrome/browser/ui/webui/settings/people_handler.cc
 */
export interface SyncStatus {
    statusAction?: StatusAction;
    disabled?: boolean;
    domain?: string;
    hasError?: boolean;
    hasPasswordsOnlyError?: boolean;
    hasUnrecoverableError?: boolean;
    managed?: boolean;
    firstSetupInProgress?: boolean;
    signedInState?: SignedInState;
    signedInUsername?: string;
    statusActionText?: string;
    secondaryButtonActionText?: string;
    statusText?: string;
    supervisedUser?: boolean;
    syncCookiesSupported?: boolean;
    syncSystemEnabled?: boolean;
}
/**
 * Must be kept in sync with the return values of getSyncErrorAction in
 * chrome/browser/ui/webui/settings/people_handler.cc
 */
export declare enum StatusAction {
    NO_ACTION = "noAction",// No action to take.
    REAUTHENTICATE = "reauthenticate",// User needs to reauthenticate.
    UPGRADE_CLIENT = "upgradeClient",// User needs to upgrade the client.
    ENTER_PASSPHRASE = "enterPassphrase",// User needs to enter passphrase.
    RETRIEVE_TRUSTED_VAULT_KEYS = "retrieveTrustedVaultKeys",
    CONFIRM_SYNC_SETTINGS = "confirmSyncSettings",// User needs to confirm sync settings.
    SHOW_BOOKMARKS_LIMIT_HELP_ARTICLE = "showBookmarksLimitHelpArticle"
}
/**
 * Checks whether the error associated with the given status action is
 * configurable, meaning that the user should still be able to interact with the
 * sync controls.
 */
export declare function shouldShowSyncTogglesForStatusAction(statusAction: StatusAction | undefined): boolean;
/**
 * The state of sync. This is the data structure sent back and forth between
 * C++ and JS. Its naming and structure is not optimal, but changing it would
 * require changes to the C++ handler, which is already functional. See
 * PeopleHandler::PushSyncPrefs() for more details.
 */
export interface SyncPrefs {
    appsManaged: boolean;
    appsRegistered: boolean;
    appsSynced: boolean;
    autofillManaged: boolean;
    autofillRegistered: boolean;
    autofillSynced: boolean;
    bookmarksManaged: boolean;
    bookmarksRegistered: boolean;
    bookmarksSynced: boolean;
    cookiesManaged: boolean;
    cookiesRegistered: boolean;
    cookiesSynced: boolean;
    customPassphraseAllowed: boolean;
    encryptAllData: boolean;
    extensionsManaged: boolean;
    extensionsRegistered: boolean;
    extensionsSynced: boolean;
    localSyncEnabled: boolean;
    passphraseRequired: boolean;
    passwordsManaged: boolean;
    passwordsRegistered: boolean;
    passwordsSynced: boolean;
    paymentsManaged: boolean;
    paymentsRegistered: boolean;
    paymentsSynced: boolean;
    preferencesManaged: boolean;
    preferencesRegistered: boolean;
    preferencesSynced: boolean;
    productComparisonManaged: boolean;
    productComparisonRegistered: boolean;
    productComparisonSynced: boolean;
    readingListManaged: boolean;
    readingListRegistered: boolean;
    readingListSynced: boolean;
    savedTabGroupsManaged: boolean;
    savedTabGroupsRegistered: boolean;
    savedTabGroupsSynced: boolean;
    syncAllDataTypes: boolean;
    tabsManaged: boolean;
    tabsRegistered: boolean;
    tabsSynced: boolean;
    themesManaged: boolean;
    themesRegistered: boolean;
    themesSynced: boolean;
    trustedVaultKeysRequired: boolean;
    typedUrlsManaged: boolean;
    typedUrlsRegistered: boolean;
    typedUrlsSynced: boolean;
    wifiConfigurationsManaged: boolean;
    wifiConfigurationsRegistered: boolean;
    wifiConfigurationsSynced: boolean;
    aiChatManaged: boolean;
    aiChatRegistered: boolean;
    aiChatSynced: boolean;
    explicitPassphraseTime?: string;
}
/**
 * Names of the individual data type properties to be cached from
 * SyncPrefs when the user checks 'Sync All'.
 */
export declare const syncPrefsIndividualDataTypes: string[];
export declare enum UserSelectableType {
    BOOKMARKS = 0,
    PREFERENCES = 1,
    PASSWORDS = 2,
    AUTOFILL = 3,
    THEMES = 4,
    HISTORY = 5,
    EXTENSIONS = 6,
    APPS = 7,
    READING_LIST = 8,
    TABS = 9,
    SAVED_TAB_GROUPS = 10,
    PAYMENTS = 11,
    PRODUCT_COMPARISON = 12,
    COOKIES = 13,
    AI_CHAT = 14
}
export declare enum PageStatus {
    SPINNER = "spinner",// Before the page has loaded.
    CONFIGURE = "configure",// Preferences ready to be configured.
    DONE = "done",// Sync subpage can be closed now.
    PASSPHRASE_FAILED = "passphraseFailed"
}
export declare enum TrustedVaultBannerState {
    NOT_SHOWN = 0,
    OFFER_OPT_IN = 1,
    OPTED_IN = 2
}
export declare enum ChromeSigninUserChoice {
    NO_CHOICE = 0,
    ALWAYS_ASK = 1,
    SIGNIN = 2,
    DO_NOT_SIGNIN = 3
}
export interface ChromeSigninUserChoiceInfo {
    shouldShowSettings: boolean;
    choice: ChromeSigninUserChoice;
    signedInEmail: string;
}
export declare enum ChromeSigninAccessPoint {
    SETTINGS = 0,
    SETTINGS_YOUR_SAVED_INFO = 1
}
export interface SyncBrowserProxy {
    /**
     * Starts the signin process for the user. Does nothing if the user is
     * already signed in.
     */
    startSignIn(accessPoint: ChromeSigninAccessPoint): void;
    /**
     * Signs out the signed-in user.
     */
    signOut(deleteProfile: boolean): void;
    /**
     * Invalidates the Sync token without signing the user out.
     */
    pauseSync(): void;
    recordSigninPendingOffered(): void;
    recordSigninOffered(accessPoint: ChromeSigninAccessPoint): void;
    /**
     * Sets a single type of data to sync.
     */
    setSyncDatatype(pref: UserSelectableType, value: boolean): Promise<PageStatus>;
    /**
     * Function to invoke when the account settings page with the account storage
     * per type settings is shown.
     */
    didNavigateToAccountSettingsPage(): void;
    /**
     * Starts the key retrieval process.
     */
    startKeyRetrieval(): void;
    /**
     * Forwards the user to the help center article about the bookmarks limit.
     */
    showBookmarkLimitExceededHelp(): void;
    /**
     * Displays the sync passphrase dialog for users to enter passphrase to enable
     * sync.
     */
    showSyncPassphraseDialog(): void;
    /**
     * Gets the current sync status.
     */
    getSyncStatus(): Promise<SyncStatus>;
    /**
     * Gets a list of stored accounts.
     */
    getStoredAccounts(): Promise<StoredAccount[]>;
    /**
     * Gets the current profile avatar.
     */
    getProfileAvatar(): Promise<string>;
    /**
     * Function to invoke when the sync page has been navigated to. This
     * registers the UI as the "active" sync UI so that if the user tries to
     * open another sync UI, this one will be shown instead.
     */
    didNavigateToSyncPage(): void;
    /**
     * Function to invoke when leaving the sync page so that the C++ layer can
     * be notified that the sync UI is no longer open.
     */
    didNavigateAwayFromSyncPage(didAbort: boolean): void;
    /**
     * Sets which types of data to sync.
     */
    setSyncDatatypes(syncPrefs: SyncPrefs): Promise<PageStatus>;
    /**
     * Attempts to set up a new passphrase to encrypt Sync data.
     * @return Whether the passphrase was successfully set. The call can fail, for
     *     example, if encrypting the data is disallowed.
     */
    setEncryptionPassphrase(passphrase: string): Promise<boolean>;
    /**
     * Attempts to set the passphrase to decrypt Sync data.
     * @return Whether the passphrase was successfully set. The call can fail, for
     *     example, if the passphrase is incorrect.
     */
    setDecryptionPassphrase(passphrase: string): Promise<boolean>;
    /**
     * Start syncing with an account, specified by its email.
     * |isDefaultPromoAccount| is true if |email| is the email of the default
     * account displayed in the promo.
     */
    startSyncingWithEmail(email: string, isDefaultPromoAccount: boolean): void;
    /**
     * Opens the Google Activity Controls url in a new tab.
     */
    openActivityControlsUrl(): void;
    /**
     * Function to dispatch event sync-prefs-changed even without a change.
     * This is used to decide whether we should show the link to password
     * manager in passwords section on page load.
     */
    sendSyncPrefsChanged(): void;
    /**
     * Forces a trusted-vault-banner-state-changed event to be fired.
     */
    sendTrustedVaultBannerStateChanged(): void;
    /**
     * Sets the ChromeSigninUserChoice from the signed in email after a user
     * choice on the UI.
     */
    setChromeSigninUserChoice(choice: ChromeSigninUserChoice, signedInEmail: string): void;
    /**
     * Gets the information related to the Chrome Signin user choice settings.
     */
    getChromeSigninUserChoiceInfo(): Promise<ChromeSigninUserChoiceInfo>;
}
export declare class SyncBrowserProxyImpl implements SyncBrowserProxy {
    startSignIn(accessPoint: ChromeSigninAccessPoint): void;
    signOut(deleteProfile: boolean): void;
    pauseSync(): void;
    recordSigninPendingOffered(): void;
    recordSigninOffered(accessPoint: ChromeSigninAccessPoint): void;
    setSyncDatatype(pref: UserSelectableType, value: boolean): Promise<PageStatus>;
    didNavigateToAccountSettingsPage(): void;
    startKeyRetrieval(): void;
    showBookmarkLimitExceededHelp(): void;
    showSyncPassphraseDialog(): void;
    getSyncStatus(): Promise<SyncStatus>;
    getStoredAccounts(): Promise<StoredAccount[]>;
    getProfileAvatar(): Promise<string>;
    didNavigateToSyncPage(): void;
    didNavigateAwayFromSyncPage(didAbort: boolean): void;
    setSyncDatatypes(syncPrefs: SyncPrefs): Promise<PageStatus>;
    setEncryptionPassphrase(passphrase: string): Promise<boolean>;
    setDecryptionPassphrase(passphrase: string): Promise<boolean>;
    startSyncingWithEmail(email: string, isDefaultPromoAccount: boolean): void;
    openActivityControlsUrl(): void;
    sendSyncPrefsChanged(): void;
    sendTrustedVaultBannerStateChanged(): void;
    setChromeSigninUserChoice(choice: ChromeSigninUserChoice, signedInEmail: string): void;
    getChromeSigninUserChoiceInfo(): Promise<ChromeSigninUserChoiceInfo>;
    static getInstance(): SyncBrowserProxy;
    static setInstance(obj: SyncBrowserProxy): void;
}
