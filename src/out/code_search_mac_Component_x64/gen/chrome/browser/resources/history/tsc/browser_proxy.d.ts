import type { AccessPoint, Device, PageHandlerRemote, TimePeriodOption } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import { PageCallbackRouter } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import type { HistorySignInState, SyncState } from './constants.js';
export type RemoveVisitsRequest = Array<{
    url: string;
    timestamps: number[];
}>;
/**
 * The type of the history identity state object. This definition is based on
 * chrome/browser/ui/webui/history/history_identity_state_watcher.h:
 */
export interface HistoryIdentityState {
    signIn: HistorySignInState;
    tabsSync: SyncState;
    historySync: SyncState;
}
export interface BrowserProxy {
    handler: PageHandlerRemote;
    callbackRouter: PageCallbackRouter;
    recordHistogram(histogram: string, value: number, max: number): void;
    recordBooleanHistogram(histogram: string, value: boolean): void;
    recordAction(action: string): void;
    recordTime(histogram: string, time: number): void;
    recordLongTime(histogram: string, time: number): void;
    recordSigninPendingOffered(accessPoint: AccessPoint): void;
    navigateToUrl(url: string, target: string, e: MouseEvent): void;
    otherDevicesInitialized(): void;
    getInitialIdentityState(): Promise<HistoryIdentityState>;
    startTurnOnSyncFlow(): void;
    getSyncedDevicesForFiltering(): Promise<{
        devices: Device[];
    }>;
    getTimePeriodOptions(): Promise<{
        options: TimePeriodOption[];
    }>;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    handler: PageHandlerRemote;
    callbackRouter: PageCallbackRouter;
    constructor();
    recordHistogram(histogram: string, value: number, max: number): void;
    recordBooleanHistogram(histogram: string, value: boolean): void;
    recordAction(action: string): void;
    recordTime(histogram: string, time: number): void;
    recordLongTime(histogram: string, time: number): void;
    recordSigninPendingOffered(accessPoint: AccessPoint): void;
    navigateToUrl(url: string, target: string, e: MouseEvent): void;
    otherDevicesInitialized(): void;
    getInitialIdentityState(): Promise<HistoryIdentityState>;
    startTurnOnSyncFlow(): void;
    getSyncedDevicesForFiltering(): Promise<{
        devices: Device[];
    }>;
    getTimePeriodOptions(): Promise<{
        options: TimePeriodOption[];
    }>;
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
