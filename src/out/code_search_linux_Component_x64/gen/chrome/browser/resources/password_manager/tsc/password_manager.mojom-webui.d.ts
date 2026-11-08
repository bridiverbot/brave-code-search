import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ExportProgressStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ExportProgressStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kNotStarted = 0,
    kInProgress = 1,
    kSucceeded = 2,
    kFailed = 3,
    kFailedWrite = 4
}
export declare const ExportPasswordsResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ExportPasswordsResult {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kSuccess = 0,
    kInProgress = 1,
    kReauthFailed = 2
}
export declare const PasswordAutomaticChangeStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PasswordAutomaticChangeState {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kInactive = 0,
    kAttemptingSignIn = 1,
    kChangingPassword = 2,
    kConfirmingChangedPassword = 3,
    kPasswordChangedSuccessfully = 4,
    kError = 5
}
export declare const PasswordManagerActionableErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PasswordManagerActionableError {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kNoError = 0,
    kInactionable = 1,
    kInactionableTemporaryError = 2,
    kSignInNeeded = 3,
    kKeychainError = 4,
    kTrustedVaultKeyNeeded = 5,
    kNeedsPassphrase = 6
}
export declare const PasswordStoreSetSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PasswordStoreSet {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDevice = 0,
    kAccount = 1,
    kDeviceAndAccount = 2
}
export declare const ImportResultsStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ImportResultsStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 8,
    kUnknownError = 0,
    kSuccess = 1,
    kIoError = 2,
    kBadFormat = 3,
    kDismissed = 4,
    kMaxFileSize = 5,
    kImportAlreadyActive = 6,
    kNumPasswordsExceeded = 7,
    kConflicts = 8
}
export declare const ImportEntryStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ImportEntryStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 12,
    kUnknownError = 0,
    kMissingPassword = 1,
    kMissingUrl = 2,
    kInvalidUrl = 3,
    kNonAsciiUrl = 4,
    kLongUrl = 5,
    kLongPassword = 6,
    kLongUsername = 7,
    kConflictProfile = 8,
    kConflictAccount = 9,
    kLongNote = 10,
    kLongConcatenatedNote = 11,
    kValid = 12
}
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerFactoryInterface);
}
export declare class PageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PageRemote, handler: PageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    extendAuthValidity(): void;
    deleteAllPasswordManagerData(): Promise<{
        success: boolean;
    }>;
    copyPlaintextBackupPassword(id: number): Promise<{
        success: boolean;
    }>;
    removeBackupPassword(id: number): void;
    removeCredential(id: number, fromStores: PasswordStoreSet): void;
    removePasswordException(id: number): void;
    startBulkPasswordCheck(): void;
    movePasswordsToAccount(ids: number[]): void;
    resetImporter(deleteFile: boolean): Promise<void>;
    getActorLoginPermissions(): Promise<{
        sites: ActorLoginPermission[];
    }>;
    revokeActorLoginPermission(site: ActorLoginPermission): void;
    changePasswordManagerPin(): Promise<{
        success: boolean;
    }>;
    showAddShortcutDialog(): void;
    isAccountStorageActive(): Promise<{
        active: boolean;
    }>;
    isPasswordManagerPinAvailable(): Promise<{
        isAvailable: boolean;
    }>;
    switchBiometricAuthBeforeFillingState(): Promise<{
        success: boolean;
    }>;
    startPasswordChange(credentialId: number): void;
    stopPasswordChange(credentialId: number): void;
    openPasswordChangeTab(credentialId: number): void;
    getPasswordManagerActionableError(): Promise<{
        error: PasswordManagerActionableError;
    }>;
    showLastExportedFileInShell(): void;
    disconnectCloudAuthenticator(): Promise<{
        success: boolean;
    }>;
    isConnectedToCloudAuthenticator(): Promise<{
        connected: boolean;
    }>;
    undoRemoveSavedPasswordOrException(): void;
    requestPasswordsExport(): Promise<{
        result: ExportPasswordsResult;
    }>;
    getPasswordsExportProgress(): Promise<{
        status: ExportProgressStatus;
    }>;
    importPasswords(toStore: PasswordStoreSet): Promise<{
        results: ImportResults;
    }>;
    continueImport(selectedIds: number[]): Promise<{
        results: ImportResults;
    }>;
    startTrustedVaultUnlock(): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    extendAuthValidity(): void;
    deleteAllPasswordManagerData(): Promise<{
        success: boolean;
    }>;
    copyPlaintextBackupPassword(id: number): Promise<{
        success: boolean;
    }>;
    removeBackupPassword(id: number): void;
    removeCredential(id: number, fromStores: PasswordStoreSet): void;
    removePasswordException(id: number): void;
    startBulkPasswordCheck(): void;
    movePasswordsToAccount(ids: number[]): void;
    resetImporter(deleteFile: boolean): Promise<void>;
    getActorLoginPermissions(): Promise<{
        sites: ActorLoginPermission[];
    }>;
    revokeActorLoginPermission(site: ActorLoginPermission): void;
    changePasswordManagerPin(): Promise<{
        success: boolean;
    }>;
    showAddShortcutDialog(): void;
    isAccountStorageActive(): Promise<{
        active: boolean;
    }>;
    isPasswordManagerPinAvailable(): Promise<{
        isAvailable: boolean;
    }>;
    switchBiometricAuthBeforeFillingState(): Promise<{
        success: boolean;
    }>;
    startPasswordChange(credentialId: number): void;
    stopPasswordChange(credentialId: number): void;
    openPasswordChangeTab(credentialId: number): void;
    getPasswordManagerActionableError(): Promise<{
        error: PasswordManagerActionableError;
    }>;
    showLastExportedFileInShell(): void;
    disconnectCloudAuthenticator(): Promise<{
        success: boolean;
    }>;
    isConnectedToCloudAuthenticator(): Promise<{
        connected: boolean;
    }>;
    undoRemoveSavedPasswordOrException(): void;
    requestPasswordsExport(): Promise<{
        result: ExportPasswordsResult;
    }>;
    getPasswordsExportProgress(): Promise<{
        status: ExportProgressStatus;
    }>;
    importPasswords(toStore: PasswordStoreSet): Promise<{
        results: ImportResults;
    }>;
    continueImport(selectedIds: number[]): Promise<{
        results: ImportResults;
    }>;
    startTrustedVaultUnlock(): void;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerInterface);
}
export declare class PageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerRemote;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    extendAuthValidity: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    deleteAllPasswordManagerData: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    copyPlaintextBackupPassword: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: number) => any>;
    removeBackupPassword: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: number) => any>;
    removeCredential: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: number, fromStores: PasswordStoreSet) => any>;
    removePasswordException: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: number) => any>;
    startBulkPasswordCheck: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    movePasswordsToAccount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ids: number[]) => any>;
    resetImporter: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(deleteFile: boolean) => any>;
    getActorLoginPermissions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    revokeActorLoginPermission: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(site: ActorLoginPermission) => any>;
    changePasswordManagerPin: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showAddShortcutDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    isAccountStorageActive: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    isPasswordManagerPinAvailable: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    switchBiometricAuthBeforeFillingState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    startPasswordChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(credentialId: number) => any>;
    stopPasswordChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(credentialId: number) => any>;
    openPasswordChangeTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(credentialId: number) => any>;
    getPasswordManagerActionableError: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showLastExportedFileInShell: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    disconnectCloudAuthenticator: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    isConnectedToCloudAuthenticator: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    undoRemoveSavedPasswordOrException: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    requestPasswordsExport: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getPasswordsExportProgress: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    importPasswords: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(toStore: PasswordStoreSet) => any>;
    continueImport: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(selectedIds: number[]) => any>;
    startTrustedVaultUnlock: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
export declare class PagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Page> {
    handle: mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
    constructor(handle: MojoHandle | PagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageInterface {
    onPasswordAutomaticChangeStateUpdated(credentialId: number, state: PasswordAutomaticChangeState): void;
    onPasswordsExportProgress(status: ExportProgressStatus, folderName: (string | null)): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onPasswordAutomaticChangeStateUpdated(credentialId: number, state: PasswordAutomaticChangeState): void;
    onPasswordsExportProgress(status: ExportProgressStatus, folderName: (string | null)): void;
}
/**
 * An object which receives request messages for the Page
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageInterface);
}
export declare class Page {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageRemote;
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onPasswordAutomaticChangeStateUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(credentialId: number, state: PasswordAutomaticChangeState) => any>;
    onPasswordsExportProgress: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(status: ExportProgressStatus, folderName: (string | null)) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const DomainInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorLoginPermissionSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImportEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare const ImportResultsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ExtendAuthValidity_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteAllPasswordManagerData_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteAllPasswordManagerData_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CopyPlaintextBackupPassword_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CopyPlaintextBackupPassword_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveBackupPassword_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveCredential_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemovePasswordException_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartBulkPasswordCheck_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MovePasswordsToAccount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResetImporter_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResetImporter_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetActorLoginPermissions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetActorLoginPermissions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RevokeActorLoginPermission_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ChangePasswordManagerPin_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ChangePasswordManagerPin_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowAddShortcutDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsAccountStorageActive_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsAccountStorageActive_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsPasswordManagerPinAvailable_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsPasswordManagerPinAvailable_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartPasswordChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StopPasswordChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenPasswordChangeTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetPasswordManagerActionableError_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetPasswordManagerActionableError_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowLastExportedFileInShell_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DisconnectCloudAuthenticator_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DisconnectCloudAuthenticator_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsConnectedToCloudAuthenticator_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsConnectedToCloudAuthenticator_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UndoRemoveSavedPasswordOrException_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestPasswordsExport_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestPasswordsExport_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetPasswordsExportProgress_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetPasswordsExportProgress_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ImportPasswords_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ImportPasswords_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ContinueImport_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ContinueImport_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartTrustedVaultUnlock_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnPasswordAutomaticChangeStateUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnPasswordsExportProgress_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DomainInfoMojoType {
    humanReadableName: string;
    url: url_mojom_Url;
    signonRealm: string;
}
export type DomainInfo = DomainInfoMojoType;
export declare interface ActorLoginPermissionMojoType {
    domainInfo: DomainInfo;
    faviconUrl: url_mojom_Url;
    username: string;
}
export type ActorLoginPermission = ActorLoginPermissionMojoType;
export declare interface ImportEntryMojoType {
    status: ImportEntryStatus;
    id: number;
    url: string;
    username: string;
    password: string;
}
export type ImportEntry = ImportEntryMojoType;
export declare interface ImportResultsMojoType {
    status: ImportResultsStatus;
    numberImported: number;
    displayedEntries: ImportEntry[];
    fileName: string;
}
export type ImportResults = ImportResultsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_ExtendAuthValidity_ParamsMojoType {
}
export type PageHandler_ExtendAuthValidity_Params = PageHandler_ExtendAuthValidity_ParamsMojoType;
export declare interface PageHandler_DeleteAllPasswordManagerData_ParamsMojoType {
}
export type PageHandler_DeleteAllPasswordManagerData_Params = PageHandler_DeleteAllPasswordManagerData_ParamsMojoType;
export declare interface PageHandler_DeleteAllPasswordManagerData_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_DeleteAllPasswordManagerData_ResponseParams = PageHandler_DeleteAllPasswordManagerData_ResponseParamsMojoType;
export declare interface PageHandler_CopyPlaintextBackupPassword_ParamsMojoType {
    id: number;
}
export type PageHandler_CopyPlaintextBackupPassword_Params = PageHandler_CopyPlaintextBackupPassword_ParamsMojoType;
export declare interface PageHandler_CopyPlaintextBackupPassword_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_CopyPlaintextBackupPassword_ResponseParams = PageHandler_CopyPlaintextBackupPassword_ResponseParamsMojoType;
export declare interface PageHandler_RemoveBackupPassword_ParamsMojoType {
    id: number;
}
export type PageHandler_RemoveBackupPassword_Params = PageHandler_RemoveBackupPassword_ParamsMojoType;
export declare interface PageHandler_RemoveCredential_ParamsMojoType {
    id: number;
    fromStores: PasswordStoreSet;
}
export type PageHandler_RemoveCredential_Params = PageHandler_RemoveCredential_ParamsMojoType;
export declare interface PageHandler_RemovePasswordException_ParamsMojoType {
    id: number;
}
export type PageHandler_RemovePasswordException_Params = PageHandler_RemovePasswordException_ParamsMojoType;
export declare interface PageHandler_StartBulkPasswordCheck_ParamsMojoType {
}
export type PageHandler_StartBulkPasswordCheck_Params = PageHandler_StartBulkPasswordCheck_ParamsMojoType;
export declare interface PageHandler_MovePasswordsToAccount_ParamsMojoType {
    ids: number[];
}
export type PageHandler_MovePasswordsToAccount_Params = PageHandler_MovePasswordsToAccount_ParamsMojoType;
export declare interface PageHandler_ResetImporter_ParamsMojoType {
    deleteFile: boolean;
}
export type PageHandler_ResetImporter_Params = PageHandler_ResetImporter_ParamsMojoType;
export declare interface PageHandler_ResetImporter_ResponseParamsMojoType {
}
export type PageHandler_ResetImporter_ResponseParams = PageHandler_ResetImporter_ResponseParamsMojoType;
export declare interface PageHandler_GetActorLoginPermissions_ParamsMojoType {
}
export type PageHandler_GetActorLoginPermissions_Params = PageHandler_GetActorLoginPermissions_ParamsMojoType;
export declare interface PageHandler_GetActorLoginPermissions_ResponseParamsMojoType {
    sites: ActorLoginPermission[];
}
export type PageHandler_GetActorLoginPermissions_ResponseParams = PageHandler_GetActorLoginPermissions_ResponseParamsMojoType;
export declare interface PageHandler_RevokeActorLoginPermission_ParamsMojoType {
    site: ActorLoginPermission;
}
export type PageHandler_RevokeActorLoginPermission_Params = PageHandler_RevokeActorLoginPermission_ParamsMojoType;
export declare interface PageHandler_ChangePasswordManagerPin_ParamsMojoType {
}
export type PageHandler_ChangePasswordManagerPin_Params = PageHandler_ChangePasswordManagerPin_ParamsMojoType;
export declare interface PageHandler_ChangePasswordManagerPin_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_ChangePasswordManagerPin_ResponseParams = PageHandler_ChangePasswordManagerPin_ResponseParamsMojoType;
export declare interface PageHandler_ShowAddShortcutDialog_ParamsMojoType {
}
export type PageHandler_ShowAddShortcutDialog_Params = PageHandler_ShowAddShortcutDialog_ParamsMojoType;
export declare interface PageHandler_IsAccountStorageActive_ParamsMojoType {
}
export type PageHandler_IsAccountStorageActive_Params = PageHandler_IsAccountStorageActive_ParamsMojoType;
export declare interface PageHandler_IsAccountStorageActive_ResponseParamsMojoType {
    active: boolean;
}
export type PageHandler_IsAccountStorageActive_ResponseParams = PageHandler_IsAccountStorageActive_ResponseParamsMojoType;
export declare interface PageHandler_IsPasswordManagerPinAvailable_ParamsMojoType {
}
export type PageHandler_IsPasswordManagerPinAvailable_Params = PageHandler_IsPasswordManagerPinAvailable_ParamsMojoType;
export declare interface PageHandler_IsPasswordManagerPinAvailable_ResponseParamsMojoType {
    isAvailable: boolean;
}
export type PageHandler_IsPasswordManagerPinAvailable_ResponseParams = PageHandler_IsPasswordManagerPinAvailable_ResponseParamsMojoType;
export declare interface PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsMojoType {
}
export type PageHandler_SwitchBiometricAuthBeforeFillingState_Params = PageHandler_SwitchBiometricAuthBeforeFillingState_ParamsMojoType;
export declare interface PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParams = PageHandler_SwitchBiometricAuthBeforeFillingState_ResponseParamsMojoType;
export declare interface PageHandler_StartPasswordChange_ParamsMojoType {
    credentialId: number;
}
export type PageHandler_StartPasswordChange_Params = PageHandler_StartPasswordChange_ParamsMojoType;
export declare interface PageHandler_StopPasswordChange_ParamsMojoType {
    credentialId: number;
}
export type PageHandler_StopPasswordChange_Params = PageHandler_StopPasswordChange_ParamsMojoType;
export declare interface PageHandler_OpenPasswordChangeTab_ParamsMojoType {
    credentialId: number;
}
export type PageHandler_OpenPasswordChangeTab_Params = PageHandler_OpenPasswordChangeTab_ParamsMojoType;
export declare interface PageHandler_GetPasswordManagerActionableError_ParamsMojoType {
}
export type PageHandler_GetPasswordManagerActionableError_Params = PageHandler_GetPasswordManagerActionableError_ParamsMojoType;
export declare interface PageHandler_GetPasswordManagerActionableError_ResponseParamsMojoType {
    error: PasswordManagerActionableError;
}
export type PageHandler_GetPasswordManagerActionableError_ResponseParams = PageHandler_GetPasswordManagerActionableError_ResponseParamsMojoType;
export declare interface PageHandler_ShowLastExportedFileInShell_ParamsMojoType {
}
export type PageHandler_ShowLastExportedFileInShell_Params = PageHandler_ShowLastExportedFileInShell_ParamsMojoType;
export declare interface PageHandler_DisconnectCloudAuthenticator_ParamsMojoType {
}
export type PageHandler_DisconnectCloudAuthenticator_Params = PageHandler_DisconnectCloudAuthenticator_ParamsMojoType;
export declare interface PageHandler_DisconnectCloudAuthenticator_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_DisconnectCloudAuthenticator_ResponseParams = PageHandler_DisconnectCloudAuthenticator_ResponseParamsMojoType;
export declare interface PageHandler_IsConnectedToCloudAuthenticator_ParamsMojoType {
}
export type PageHandler_IsConnectedToCloudAuthenticator_Params = PageHandler_IsConnectedToCloudAuthenticator_ParamsMojoType;
export declare interface PageHandler_IsConnectedToCloudAuthenticator_ResponseParamsMojoType {
    connected: boolean;
}
export type PageHandler_IsConnectedToCloudAuthenticator_ResponseParams = PageHandler_IsConnectedToCloudAuthenticator_ResponseParamsMojoType;
export declare interface PageHandler_UndoRemoveSavedPasswordOrException_ParamsMojoType {
}
export type PageHandler_UndoRemoveSavedPasswordOrException_Params = PageHandler_UndoRemoveSavedPasswordOrException_ParamsMojoType;
export declare interface PageHandler_RequestPasswordsExport_ParamsMojoType {
}
export type PageHandler_RequestPasswordsExport_Params = PageHandler_RequestPasswordsExport_ParamsMojoType;
export declare interface PageHandler_RequestPasswordsExport_ResponseParamsMojoType {
    result: ExportPasswordsResult;
}
export type PageHandler_RequestPasswordsExport_ResponseParams = PageHandler_RequestPasswordsExport_ResponseParamsMojoType;
export declare interface PageHandler_GetPasswordsExportProgress_ParamsMojoType {
}
export type PageHandler_GetPasswordsExportProgress_Params = PageHandler_GetPasswordsExportProgress_ParamsMojoType;
export declare interface PageHandler_GetPasswordsExportProgress_ResponseParamsMojoType {
    status: ExportProgressStatus;
}
export type PageHandler_GetPasswordsExportProgress_ResponseParams = PageHandler_GetPasswordsExportProgress_ResponseParamsMojoType;
export declare interface PageHandler_ImportPasswords_ParamsMojoType {
    toStore: PasswordStoreSet;
}
export type PageHandler_ImportPasswords_Params = PageHandler_ImportPasswords_ParamsMojoType;
export declare interface PageHandler_ImportPasswords_ResponseParamsMojoType {
    results: ImportResults;
}
export type PageHandler_ImportPasswords_ResponseParams = PageHandler_ImportPasswords_ResponseParamsMojoType;
export declare interface PageHandler_ContinueImport_ParamsMojoType {
    selectedIds: number[];
}
export type PageHandler_ContinueImport_Params = PageHandler_ContinueImport_ParamsMojoType;
export declare interface PageHandler_ContinueImport_ResponseParamsMojoType {
    results: ImportResults;
}
export type PageHandler_ContinueImport_ResponseParams = PageHandler_ContinueImport_ResponseParamsMojoType;
export declare interface PageHandler_StartTrustedVaultUnlock_ParamsMojoType {
}
export type PageHandler_StartTrustedVaultUnlock_Params = PageHandler_StartTrustedVaultUnlock_ParamsMojoType;
export declare interface Page_OnPasswordAutomaticChangeStateUpdated_ParamsMojoType {
    credentialId: number;
    state: PasswordAutomaticChangeState;
}
export type Page_OnPasswordAutomaticChangeStateUpdated_Params = Page_OnPasswordAutomaticChangeStateUpdated_ParamsMojoType;
export declare interface Page_OnPasswordsExportProgress_ParamsMojoType {
    status: ExportProgressStatus;
    folderName: (string | null);
}
export type Page_OnPasswordsExportProgress_Params = Page_OnPasswordsExportProgress_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
