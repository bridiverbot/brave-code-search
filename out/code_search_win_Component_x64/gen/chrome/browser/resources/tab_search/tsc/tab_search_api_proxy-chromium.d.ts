import type { ProfileData, SwitchToTabInfo } from './tab_search.mojom-webui.js';
import { PageCallbackRouter, PageHandlerRemote } from './tab_search.mojom-webui.js';
/**
 * These values are persisted to logs and should not be renumbered or reused.
 * See tools/metrics/histograms/metadata/tab/enums.xml.
 */
export declare enum RecentlyClosedItemOpenAction {
    WITHOUT_SEARCH = 0,
    WITH_SEARCH = 1,
    COUNT = 2
}
export interface TabSearchApiProxy {
    closeTab(tabId: number): void;
    closeTabs(tabIds: number[]): void;
    closeWebUiTab(): void;
    getProfileData(): Promise<{
        profileData: ProfileData;
    }>;
    getIsSplit(): Promise<{
        isSplit: boolean;
    }>;
    openRecentlyClosedEntry(id: number, withSearch: boolean, isTab: boolean): void;
    switchToTab(info: SwitchToTabInfo): void;
    getCallbackRouter(): PageCallbackRouter;
    replaceActiveSplitTab(replacementTabId: number): void;
    saveRecentlyClosedExpandedPref(expanded: boolean): void;
    maybeShowUi(): void;
    redirectToNtp(): void;
}
export declare class TabSearchApiProxyImpl implements TabSearchApiProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerRemote;
    constructor();
    closeTab(tabId: number): void;
    closeTabs(tabIds: number[]): void;
    closeWebUiTab(): void;
    getProfileData(): Promise<{
        profileData: ProfileData;
    }>;
    getIsSplit(): Promise<{
        isSplit: boolean;
    }>;
    openRecentlyClosedEntry(id: number, withSearch: boolean, isTab: boolean): void;
    switchToTab(info: SwitchToTabInfo): void;
    getCallbackRouter(): PageCallbackRouter;
    replaceActiveSplitTab(replacementSplitTabId: number): void;
    saveRecentlyClosedExpandedPref(expanded: boolean): void;
    maybeShowUi(): void;
    redirectToNtp(): void;
    static getInstance(): TabSearchApiProxy;
    static setInstance(obj: TabSearchApiProxy): void;
}
