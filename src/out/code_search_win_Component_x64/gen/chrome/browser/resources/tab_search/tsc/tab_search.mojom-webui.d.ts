import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Color as tabGroups_mojom_Color } from './tab_group_types.mojom-webui.js';
import { TabAlertState as tabs_mojom_TabAlertState } from './tabs.mojom-webui.js';
import { Time as mojoBase_mojom_Time, TimeTicks as mojoBase_mojom_TimeTicks } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Token as mojoBase_mojom_Token } from '//resources/mojo/mojo/public/mojom/base/token.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const SplitTabLayoutSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SplitTabLayout {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kSideBySide = 0,
    kStacked = 1
}
export type SearchHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SearchHandlerPendingReceiver>;
export declare class SearchHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SearchHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<SearchHandlerPendingReceiver>;
    constructor(handle: MojoHandle | SearchHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SearchHandlerInterface {
    getRangesIgnoringCaseAndAccents(searchText: string, targets: string[]): Promise<{
        ranges: TokenRange[][];
    }>;
}
export declare class SearchHandlerRemote implements SearchHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<SearchHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SearchHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SearchHandlerPendingReceiverEndpoint);
    getRangesIgnoringCaseAndAccents(searchText: string, targets: string[]): Promise<{
        ranges: TokenRange[][];
    }>;
}
/**
 * An object which receives request messages for the SearchHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SearchHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SearchHandlerRemote, SearchHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SearchHandlerRemote, SearchHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SearchHandlerInterface);
}
export declare class SearchHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SearchHandlerRemote;
}
/**
 * An object which receives request messages for the SearchHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SearchHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SearchHandlerRemote, SearchHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SearchHandlerRemote, SearchHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getRangesIgnoringCaseAndAccents: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(searchText: string, targets: string[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
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
    closeTab(tabId: number): void;
    closeTabs(tabIds: number[]): void;
    closeWebUiTab(): void;
    getProfileData(): Promise<{
        profileData: ProfileData;
    }>;
    getIsSplit(): Promise<{
        isSplit: boolean;
    }>;
    switchToTab(switchToTabInfo: SwitchToTabInfo): void;
    openRecentlyClosedEntry(sessionId: number): void;
    replaceActiveSplitTab(replacementTabId: number): void;
    saveRecentlyClosedExpandedPref(expanded: boolean): void;
    startTabGroupTutorial(): void;
    maybeShowUI(): void;
    getSuggestedTopics(): Promise<{
        topics: string[];
        error: (Error | null);
    }>;
    getFocusTabs(topic: string): Promise<{
        windowCreated: boolean;
        error: (Error | null);
    }>;
    undoFocusTabs(): Promise<void>;
    openLeoGoPremiumPage(): void;
    openLearnMorePage(): void;
    setTabFocusEnabled(): void;
    getTabFocusShowFRE(): Promise<{
        showFRE: boolean;
    }>;
    searchTabsByContent(query: string): Promise<{
        tabIds: number[];
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    closeTab(tabId: number): void;
    closeTabs(tabIds: number[]): void;
    closeWebUiTab(): void;
    getProfileData(): Promise<{
        profileData: ProfileData;
    }>;
    getIsSplit(): Promise<{
        isSplit: boolean;
    }>;
    switchToTab(switchToTabInfo: SwitchToTabInfo): void;
    openRecentlyClosedEntry(sessionId: number): void;
    replaceActiveSplitTab(replacementTabId: number): void;
    saveRecentlyClosedExpandedPref(expanded: boolean): void;
    startTabGroupTutorial(): void;
    maybeShowUI(): void;
    getSuggestedTopics(): Promise<{
        topics: string[];
        error: (Error | null);
    }>;
    getFocusTabs(topic: string): Promise<{
        windowCreated: boolean;
        error: (Error | null);
    }>;
    undoFocusTabs(): Promise<void>;
    openLeoGoPremiumPage(): void;
    openLearnMorePage(): void;
    setTabFocusEnabled(): void;
    getTabFocusShowFRE(): Promise<{
        showFRE: boolean;
    }>;
    searchTabsByContent(query: string): Promise<{
        tabIds: number[];
    }>;
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
    closeTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    closeTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabIds: number[]) => any>;
    closeWebUiTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getProfileData: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getIsSplit: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    switchToTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(switchToTabInfo: SwitchToTabInfo) => any>;
    openRecentlyClosedEntry: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sessionId: number) => any>;
    replaceActiveSplitTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(replacementTabId: number) => any>;
    saveRecentlyClosedExpandedPref: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(expanded: boolean) => any>;
    startTabGroupTutorial: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    maybeShowUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getSuggestedTopics: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getFocusTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(topic: string) => any>;
    undoFocusTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openLeoGoPremiumPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openLearnMorePage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setTabFocusEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getTabFocusShowFRE: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    searchTabsByContent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
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
    hostWindowChanged(): void;
    tabsChanged(profileTabs: ProfileData): void;
    tabUpdated(tabUpdateInfo: TabUpdateInfo): void;
    tabsRemoved(tabsRemovedInfo: TabsRemovedInfo): void;
    tabUnsplit(): void;
    tabFocusShowFREChanged(show: boolean): void;
    tabFocusEnabledChanged(enabled: boolean): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    hostWindowChanged(): void;
    tabsChanged(profileTabs: ProfileData): void;
    tabUpdated(tabUpdateInfo: TabUpdateInfo): void;
    tabsRemoved(tabsRemovedInfo: TabsRemovedInfo): void;
    tabUnsplit(): void;
    tabFocusShowFREChanged(show: boolean): void;
    tabFocusEnabledChanged(enabled: boolean): void;
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
    hostWindowChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    tabsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(profileTabs: ProfileData) => any>;
    tabUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabUpdateInfo: TabUpdateInfo) => any>;
    tabsRemoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabsRemovedInfo: TabsRemovedInfo) => any>;
    tabUnsplit: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    tabFocusShowFREChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(show: boolean) => any>;
    tabFocusEnabledChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const RateLimitedInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ProfileDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const TokenRangeSpec: {
    $: mojo.internal.MojomType;
};
export declare const WindowSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabSpec: {
    $: mojo.internal.MojomType;
};
export declare const RecentlyClosedTabSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const RecentlyClosedTabGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const RecentlyClosedSplitViewSpec: {
    $: mojo.internal.MojomType;
};
export declare const SwitchToTabInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabUpdateInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabsRemovedInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchHandler_GetRangesIgnoringCaseAndAccents_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchHandler_GetRangesIgnoringCaseAndAccents_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseWebUiTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetProfileData_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetProfileData_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetIsSplit_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetIsSplit_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SwitchToTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenRecentlyClosedEntry_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ReplaceActiveSplitTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartTabGroupTutorial_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MaybeShowUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSuggestedTopics_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSuggestedTopics_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetFocusTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetFocusTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UndoFocusTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UndoFocusTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenLeoGoPremiumPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenLearnMorePage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetTabFocusEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabFocusShowFRE_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabFocusShowFRE_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SearchTabsByContent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SearchTabsByContent_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_HostWindowChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_TabsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_TabUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_TabsRemoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_TabUnsplit_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_TabFocusShowFREChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_TabFocusEnabledChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface RateLimitedInfoMojoType {
    isPremium: boolean;
}
export type RateLimitedInfo = RateLimitedInfoMojoType;
export declare interface ErrorMojoType {
    message: string;
    rateLimitedInfo: (RateLimitedInfo | null);
}
export type Error = ErrorMojoType;
export declare interface ProfileDataMojoType {
    windows: Window[];
    tabGroups: TabGroup[];
    recentlyClosedTabs: RecentlyClosedTab[];
    recentlyClosedTabGroups: RecentlyClosedTabGroup[];
    recentlyClosedSplitViews: RecentlyClosedSplitView[];
    recentlyClosedSectionExpanded: boolean;
}
export type ProfileData = ProfileDataMojoType;
export declare interface TokenRangeMojoType {
    start: number;
    length: number;
}
export type TokenRange = TokenRangeMojoType;
export declare interface WindowMojoType {
    active: boolean;
    isHostWindow: boolean;
    height: number;
    tabs: Tab[];
}
export type Window = WindowMojoType;
export declare interface TabMojoType {
    active: boolean;
    visible: boolean;
    pinned: boolean;
    split: boolean;
    splitLayout: (SplitTabLayout | null);
    isDefaultFavicon: boolean;
    showIcon: boolean;
    tabId: number;
    alertStates: tabs_mojom_TabAlertState[];
    groupId: (mojoBase_mojom_Token | null);
    splitId: (mojoBase_mojom_Token | null);
    title: string;
    url: url_mojom_Url;
    faviconUrl: (url_mojom_Url | null);
    lastActiveTimeTicks: mojoBase_mojom_TimeTicks;
    lastActiveElapsedText: string;
}
export type Tab = TabMojoType;
export declare interface RecentlyClosedTabMojoType {
    tabId: number;
    groupId: (mojoBase_mojom_Token | null);
    splitId: (mojoBase_mojom_Token | null);
    title: string;
    url: url_mojom_Url;
    lastActiveTime: mojoBase_mojom_Time;
    lastActiveElapsedText: string;
}
export type RecentlyClosedTab = RecentlyClosedTabMojoType;
export declare interface TabGroupMojoType {
    id: mojoBase_mojom_Token;
    color: tabGroups_mojom_Color;
    title: string;
}
export type TabGroup = TabGroupMojoType;
export declare interface RecentlyClosedTabGroupMojoType {
    sessionId: number;
    color: tabGroups_mojom_Color;
    id: mojoBase_mojom_Token;
    title: string;
    tabCount: number;
    lastActiveTime: mojoBase_mojom_Time;
    lastActiveElapsedText: string;
}
export type RecentlyClosedTabGroup = RecentlyClosedTabGroupMojoType;
export declare interface RecentlyClosedSplitViewMojoType {
    sessionId: number;
    tabCount: number;
    id: mojoBase_mojom_Token;
    lastActiveTime: mojoBase_mojom_Time;
    lastActiveElapsedText: string;
    tabUrls: url_mojom_Url[];
    tabTitles: string[];
    layout: SplitTabLayout;
    groupId: (mojoBase_mojom_Token | null);
}
export type RecentlyClosedSplitView = RecentlyClosedSplitViewMojoType;
export declare interface SwitchToTabInfoMojoType {
    tabId: number;
}
export type SwitchToTabInfo = SwitchToTabInfoMojoType;
export declare interface TabUpdateInfoMojoType {
    inActiveWindow: boolean;
    inHostWindow: boolean;
    tab: Tab;
}
export type TabUpdateInfo = TabUpdateInfoMojoType;
export declare interface TabsRemovedInfoMojoType {
    tabIds: number[];
    recentlyClosedTabs: RecentlyClosedTab[];
}
export type TabsRemovedInfo = TabsRemovedInfoMojoType;
export declare interface SearchHandler_GetRangesIgnoringCaseAndAccents_ParamsMojoType {
    searchText: string;
    targets: string[];
}
export type SearchHandler_GetRangesIgnoringCaseAndAccents_Params = SearchHandler_GetRangesIgnoringCaseAndAccents_ParamsMojoType;
export declare interface SearchHandler_GetRangesIgnoringCaseAndAccents_ResponseParamsMojoType {
    ranges: TokenRange[][];
}
export type SearchHandler_GetRangesIgnoringCaseAndAccents_ResponseParams = SearchHandler_GetRangesIgnoringCaseAndAccents_ResponseParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_CloseTab_ParamsMojoType {
    tabId: number;
}
export type PageHandler_CloseTab_Params = PageHandler_CloseTab_ParamsMojoType;
export declare interface PageHandler_CloseTabs_ParamsMojoType {
    tabIds: number[];
}
export type PageHandler_CloseTabs_Params = PageHandler_CloseTabs_ParamsMojoType;
export declare interface PageHandler_CloseWebUiTab_ParamsMojoType {
}
export type PageHandler_CloseWebUiTab_Params = PageHandler_CloseWebUiTab_ParamsMojoType;
export declare interface PageHandler_GetProfileData_ParamsMojoType {
}
export type PageHandler_GetProfileData_Params = PageHandler_GetProfileData_ParamsMojoType;
export declare interface PageHandler_GetProfileData_ResponseParamsMojoType {
    profileData: ProfileData;
}
export type PageHandler_GetProfileData_ResponseParams = PageHandler_GetProfileData_ResponseParamsMojoType;
export declare interface PageHandler_GetIsSplit_ParamsMojoType {
}
export type PageHandler_GetIsSplit_Params = PageHandler_GetIsSplit_ParamsMojoType;
export declare interface PageHandler_GetIsSplit_ResponseParamsMojoType {
    isSplit: boolean;
}
export type PageHandler_GetIsSplit_ResponseParams = PageHandler_GetIsSplit_ResponseParamsMojoType;
export declare interface PageHandler_SwitchToTab_ParamsMojoType {
    switchToTabInfo: SwitchToTabInfo;
}
export type PageHandler_SwitchToTab_Params = PageHandler_SwitchToTab_ParamsMojoType;
export declare interface PageHandler_OpenRecentlyClosedEntry_ParamsMojoType {
    sessionId: number;
}
export type PageHandler_OpenRecentlyClosedEntry_Params = PageHandler_OpenRecentlyClosedEntry_ParamsMojoType;
export declare interface PageHandler_ReplaceActiveSplitTab_ParamsMojoType {
    replacementTabId: number;
}
export type PageHandler_ReplaceActiveSplitTab_Params = PageHandler_ReplaceActiveSplitTab_ParamsMojoType;
export declare interface PageHandler_SaveRecentlyClosedExpandedPref_ParamsMojoType {
    expanded: boolean;
}
export type PageHandler_SaveRecentlyClosedExpandedPref_Params = PageHandler_SaveRecentlyClosedExpandedPref_ParamsMojoType;
export declare interface PageHandler_StartTabGroupTutorial_ParamsMojoType {
}
export type PageHandler_StartTabGroupTutorial_Params = PageHandler_StartTabGroupTutorial_ParamsMojoType;
export declare interface PageHandler_MaybeShowUI_ParamsMojoType {
}
export type PageHandler_MaybeShowUI_Params = PageHandler_MaybeShowUI_ParamsMojoType;
export declare interface PageHandler_GetSuggestedTopics_ParamsMojoType {
}
export type PageHandler_GetSuggestedTopics_Params = PageHandler_GetSuggestedTopics_ParamsMojoType;
export declare interface PageHandler_GetSuggestedTopics_ResponseParamsMojoType {
    topics: string[];
    error: (Error | null);
}
export type PageHandler_GetSuggestedTopics_ResponseParams = PageHandler_GetSuggestedTopics_ResponseParamsMojoType;
export declare interface PageHandler_GetFocusTabs_ParamsMojoType {
    topic: string;
}
export type PageHandler_GetFocusTabs_Params = PageHandler_GetFocusTabs_ParamsMojoType;
export declare interface PageHandler_GetFocusTabs_ResponseParamsMojoType {
    windowCreated: boolean;
    error: (Error | null);
}
export type PageHandler_GetFocusTabs_ResponseParams = PageHandler_GetFocusTabs_ResponseParamsMojoType;
export declare interface PageHandler_UndoFocusTabs_ParamsMojoType {
}
export type PageHandler_UndoFocusTabs_Params = PageHandler_UndoFocusTabs_ParamsMojoType;
export declare interface PageHandler_UndoFocusTabs_ResponseParamsMojoType {
}
export type PageHandler_UndoFocusTabs_ResponseParams = PageHandler_UndoFocusTabs_ResponseParamsMojoType;
export declare interface PageHandler_OpenLeoGoPremiumPage_ParamsMojoType {
}
export type PageHandler_OpenLeoGoPremiumPage_Params = PageHandler_OpenLeoGoPremiumPage_ParamsMojoType;
export declare interface PageHandler_OpenLearnMorePage_ParamsMojoType {
}
export type PageHandler_OpenLearnMorePage_Params = PageHandler_OpenLearnMorePage_ParamsMojoType;
export declare interface PageHandler_SetTabFocusEnabled_ParamsMojoType {
}
export type PageHandler_SetTabFocusEnabled_Params = PageHandler_SetTabFocusEnabled_ParamsMojoType;
export declare interface PageHandler_GetTabFocusShowFRE_ParamsMojoType {
}
export type PageHandler_GetTabFocusShowFRE_Params = PageHandler_GetTabFocusShowFRE_ParamsMojoType;
export declare interface PageHandler_GetTabFocusShowFRE_ResponseParamsMojoType {
    showFRE: boolean;
}
export type PageHandler_GetTabFocusShowFRE_ResponseParams = PageHandler_GetTabFocusShowFRE_ResponseParamsMojoType;
export declare interface PageHandler_SearchTabsByContent_ParamsMojoType {
    query: string;
}
export type PageHandler_SearchTabsByContent_Params = PageHandler_SearchTabsByContent_ParamsMojoType;
export declare interface PageHandler_SearchTabsByContent_ResponseParamsMojoType {
    tabIds: number[];
}
export type PageHandler_SearchTabsByContent_ResponseParams = PageHandler_SearchTabsByContent_ResponseParamsMojoType;
export declare interface Page_HostWindowChanged_ParamsMojoType {
}
export type Page_HostWindowChanged_Params = Page_HostWindowChanged_ParamsMojoType;
export declare interface Page_TabsChanged_ParamsMojoType {
    profileTabs: ProfileData;
}
export type Page_TabsChanged_Params = Page_TabsChanged_ParamsMojoType;
export declare interface Page_TabUpdated_ParamsMojoType {
    tabUpdateInfo: TabUpdateInfo;
}
export type Page_TabUpdated_Params = Page_TabUpdated_ParamsMojoType;
export declare interface Page_TabsRemoved_ParamsMojoType {
    tabsRemovedInfo: TabsRemovedInfo;
}
export type Page_TabsRemoved_Params = Page_TabsRemoved_ParamsMojoType;
export declare interface Page_TabUnsplit_ParamsMojoType {
}
export type Page_TabUnsplit_Params = Page_TabUnsplit_ParamsMojoType;
export declare interface Page_TabFocusShowFREChanged_ParamsMojoType {
    show: boolean;
}
export type Page_TabFocusShowFREChanged_Params = Page_TabFocusShowFREChanged_ParamsMojoType;
export declare interface Page_TabFocusEnabledChanged_ParamsMojoType {
    enabled: boolean;
}
export type Page_TabFocusEnabledChanged_Params = Page_TabFocusEnabledChanged_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
