import { SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
export type BraveDeviceInfo = {
    name: string;
    guid: string;
    id: string;
    os: string;
    type: string;
    chromeVersion: string;
    lastUpdatedTimestamp: number;
    supportsSelfDelete: boolean;
    isCurrentDevice: boolean;
    hasSharingInfo: boolean;
};
export interface BraveSyncStatus extends SyncStatus {
    hasSyncWordsDecryptionError: boolean;
    isOsEncryptionAvailable: boolean;
}
export declare class BraveSyncBrowserProxy {
    getSyncCode(): Promise<string>;
    getPureSyncCode(): Promise<string>;
    getQRCode(syncCode: string): Promise<string>;
    copySyncCodeToClipboard(syncCode: string): Promise<boolean>;
    getDeviceList(): Promise<BraveDeviceInfo[]>;
    setSyncCode(syncCode: string): Promise<boolean>;
    resetSyncChain(): Promise<boolean>;
    deleteDevice(deviceId: string): Promise<boolean>;
    getSyncStatus(): Promise<BraveSyncStatus>;
    permanentlyDeleteSyncAccount(): Promise<boolean>;
    getWordsCount(syncCode: string): Promise<number>;
    static getInstance(): BraveSyncBrowserProxy;
}
