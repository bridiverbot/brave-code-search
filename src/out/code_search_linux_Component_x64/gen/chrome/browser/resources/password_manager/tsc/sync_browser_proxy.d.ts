export declare enum TrustedVaultBannerState {
    NOT_SHOWN = 0,
    OFFER_OPT_IN = 1,
    OPTED_IN = 2
}
export declare enum BatchUploadPasswordsEntryPoint {
    PASSWORD_MANAGER = 0,
    PROMO_CARD = 1
}
/**
 * @see chrome/browser/ui/webui/password_manager/sync_handler.cc
 */
export interface AccountInfo {
    email: string;
    avatarImage?: string;
}
export interface SyncInfo {
    isSyncingPasswords: boolean;
}
export interface SyncBrowserProxy {
    /**
     * Gets trusted vault banner state.
     */
    getTrustedVaultBannerState(): Promise<TrustedVaultBannerState>;
    /**
     * Gets the current sync info.
     */
    getSyncInfo(): Promise<SyncInfo>;
    /**
     * Gets the current account info.
     */
    getAccountInfo(): Promise<AccountInfo>;
    /**
     * Returns the number of local data password from the sync service API.
     */
    getLocalPasswordCount(): Promise<number>;
    /**
     * Opens the batch upload dialog on top of the current page with the passwords
     * entry point as input.
     */
    openBatchUpload(entryPoint: BatchUploadPasswordsEntryPoint): void;
    /**
     * Triggers the passkey unlock flow.
     */
    startPasskeyUnlockFlow(): void;
}
export declare class SyncBrowserProxyImpl implements SyncBrowserProxy {
    getTrustedVaultBannerState(): Promise<TrustedVaultBannerState>;
    getSyncInfo(): Promise<SyncInfo>;
    getAccountInfo(): Promise<AccountInfo>;
    getLocalPasswordCount(): Promise<number>;
    openBatchUpload(entryPoint: BatchUploadPasswordsEntryPoint): void;
    startPasskeyUnlockFlow(): void;
    static getInstance(): SyncBrowserProxy;
    static setInstance(obj: SyncBrowserProxy): void;
}
