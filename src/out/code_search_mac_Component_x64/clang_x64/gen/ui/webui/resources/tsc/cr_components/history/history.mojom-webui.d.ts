import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const FilteringBehaviorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FilteringBehavior {
    MIN_VALUE = -1,
    MAX_VALUE = 3,
    kUnknown = -1,
    kAllow = 0,
    kBlock = 2,
    kInvalid = 3
}
export declare const CriticalActionTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CriticalActionType {
    MIN_VALUE = 0,
    MAX_VALUE = 8,
    kUnknown = 0,
    kFormFill = 1,
    kDownload = 2,
    kSettingChange = 3,
    kCredentialAccess = 4,
    kGooglePasswordManager = 5,
    kFederatedLogin = 6,
    kCredentialsOtp = 7,
    kWebMcpTool = 8
}
export declare const OpenConversationResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum OpenConversationResult {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kSuccess = 0,
    kErrorInvalidActionEntry = 1,
    kErrorInternal = 2
}
export declare const AccessPointSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AccessPoint {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kRecentTabs = 0,
    kHistoryPage = 1
}
export declare const TimePeriodOptionIdSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TimePeriodOptionId {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kAllTime = 0,
    kYesterday = 1,
    kEarlierThisWeek = 2,
    kLastWeek = 3,
    kTwoWeeksAgo = 4
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    setPage(page: PageRemote): void;
    queryHistory(query: string, maxResults: number, beginTime: (number | null), includeUserVisits: boolean, includeActorVisits: boolean, clientIds: string[]): Promise<{
        results: QueryResult;
    }>;
    queryHistoryContinuation(): Promise<{
        results: QueryResult;
    }>;
    removeVisits(items: RemovalItem[]): Promise<void>;
    openClearBrowsingDataDialog(): void;
    removeBookmark(url: string): void;
    setLastSelectedTab(lastTab: number): void;
    showSidePanelUI(): void;
    requestAccountInfo(): Promise<{
        accountInfo: AccountInfo;
    }>;
    turnOnHistorySync(accessPoint: AccessPoint): void;
    openCriticalActionConversation(criticalActionId: string): Promise<{
        result: OpenConversationResult;
    }>;
    getSyncedDevicesForFiltering(): Promise<{
        devices: Device[];
    }>;
    getTimePeriodOptions(): Promise<{
        options: TimePeriodOption[];
    }>;
    shouldShowHistoryPageHistorySyncPromo(): Promise<{
        shouldShow: boolean;
    }>;
    recordHistoryPageHistorySyncPromoDismissed(): void;
    incrementHistoryPageHistorySyncPromoShownCount(): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    setPage(page: PageRemote): void;
    queryHistory(query: string, maxResults: number, beginTime: (number | null), includeUserVisits: boolean, includeActorVisits: boolean, clientIds: string[]): Promise<{
        results: QueryResult;
    }>;
    queryHistoryContinuation(): Promise<{
        results: QueryResult;
    }>;
    removeVisits(items: RemovalItem[]): Promise<void>;
    openClearBrowsingDataDialog(): void;
    removeBookmark(url: string): void;
    setLastSelectedTab(lastTab: number): void;
    showSidePanelUI(): void;
    requestAccountInfo(): Promise<{
        accountInfo: AccountInfo;
    }>;
    turnOnHistorySync(accessPoint: AccessPoint): void;
    openCriticalActionConversation(criticalActionId: string): Promise<{
        result: OpenConversationResult;
    }>;
    getSyncedDevicesForFiltering(): Promise<{
        devices: Device[];
    }>;
    getTimePeriodOptions(): Promise<{
        options: TimePeriodOption[];
    }>;
    shouldShowHistoryPageHistorySyncPromo(): Promise<{
        shouldShow: boolean;
    }>;
    recordHistoryPageHistorySyncPromoDismissed(): void;
    incrementHistoryPageHistorySyncPromoShownCount(): void;
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
    setPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PageRemote) => any>;
    queryHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string, maxResults: number, beginTime: (number | null), includeUserVisits: boolean, includeActorVisits: boolean, clientIds: string[]) => any>;
    queryHistoryContinuation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    removeVisits: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(items: RemovalItem[]) => any>;
    openClearBrowsingDataDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    removeBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: string) => any>;
    setLastSelectedTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(lastTab: number) => any>;
    showSidePanelUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    requestAccountInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    turnOnHistorySync: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(accessPoint: AccessPoint) => any>;
    openCriticalActionConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(criticalActionId: string) => any>;
    getSyncedDevicesForFiltering: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getTimePeriodOptions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    shouldShowHistoryPageHistorySyncPromo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordHistoryPageHistorySyncPromoDismissed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    incrementHistoryPageHistorySyncPromoShownCount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
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
    onHistoryDeleted(): void;
    onHasOtherFormsChanged(hasOtherForms: boolean): void;
    sendAccountInfo(accountInfo: AccountInfo): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onHistoryDeleted(): void;
    onHasOtherFormsChanged(hasOtherForms: boolean): void;
    sendAccountInfo(accountInfo: AccountInfo): void;
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
    onHistoryDeleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onHasOtherFormsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(hasOtherForms: boolean) => any>;
    sendAccountInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(accountInfo: AccountInfo) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const DeviceSpec: {
    $: mojo.internal.MojomType;
};
export declare const QueryStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryQuerySpec: {
    $: mojo.internal.MojomType;
};
export declare const DebugInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare const CriticalActionSpec: {
    $: mojo.internal.MojomType;
};
export declare const QueryResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const RemovalItemSpec: {
    $: mojo.internal.MojomType;
};
export declare const AccountInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const TimePeriodOptionSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_QueryHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_QueryHistory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_QueryHistoryContinuation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_QueryHistoryContinuation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveVisits_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveVisits_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenClearBrowsingDataDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetLastSelectedTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowSidePanelUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestAccountInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestAccountInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_TurnOnHistorySync_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenCriticalActionConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenCriticalActionConversation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSyncedDevicesForFiltering_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSyncedDevicesForFiltering_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTimePeriodOptions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTimePeriodOptions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnHistoryDeleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnHasOtherFormsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SendAccountInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DeviceMojoType {
    name: string;
    isLocalDevice: boolean;
    ids: string[];
}
export type Device = DeviceMojoType;
export declare interface QueryStateMojoType {
    incremental: boolean;
    querying: boolean;
    includeUserVisits: boolean;
    includeActorVisits: boolean;
    searchTerm: string;
    after: (string | null);
    clientIds: string[];
}
export type QueryState = QueryStateMojoType;
export declare interface HistoryQueryMojoType {
    term: string;
    finished: boolean;
}
export type HistoryQuery = HistoryQueryMojoType;
export declare interface DebugInfoMojoType {
    isUrlInLocalDatabase: boolean;
    visitCount: number;
    typedCount: number;
}
export type DebugInfo = DebugInfoMojoType;
export declare interface HistoryEntryMojoType {
    url: string;
    title: string;
    domain: string;
    fallbackFaviconText: string;
    time: number;
    allTimestamps: {
        [key: string]: number[];
    };
    dateShort: string;
    deviceName: string;
    deviceType: string;
    dateTimeOfDay: string;
    dateRelativeDay: string;
    selected: boolean;
    starred: boolean;
    blockedVisit: boolean;
    isUrlInRemoteUserData: boolean;
    isActorVisit: boolean;
    hostFilteringBehavior: FilteringBehavior;
    readableTimestamp: string;
    snippet: string;
    remoteIconUrlForUma: string;
    debug: (DebugInfo | null);
    criticalActions: CriticalAction[];
}
export type HistoryEntry = HistoryEntryMojoType;
export declare interface CriticalActionMojoType {
    id: string;
    label: string;
    tooltip: string;
    linkoutUrl: (string | null);
    actionType: CriticalActionType;
}
export type CriticalAction = CriticalActionMojoType;
export declare interface QueryResultMojoType {
    info: (HistoryQuery | null);
    value: HistoryEntry[];
}
export type QueryResult = QueryResultMojoType;
export declare interface RemovalItemMojoType {
    url: string;
    timestamps: number[];
}
export type RemovalItem = RemovalItemMojoType;
export declare interface AccountInfoMojoType {
    accountImageSrc: url_mojom_Url;
    name: string;
    email: string;
}
export type AccountInfo = AccountInfoMojoType;
export declare interface TimePeriodOptionMojoType {
    id: TimePeriodOptionId;
    beginTime: (number | null);
    endTime: (number | null);
    label: string;
}
export type TimePeriodOption = TimePeriodOptionMojoType;
export declare interface PageHandler_SetPage_ParamsMojoType {
    page: PageRemote;
}
export type PageHandler_SetPage_Params = PageHandler_SetPage_ParamsMojoType;
export declare interface PageHandler_QueryHistory_ParamsMojoType {
    query: string;
    maxResults: number;
    beginTime: (number | null);
    includeUserVisits: boolean;
    includeActorVisits: boolean;
    clientIds: string[];
}
export type PageHandler_QueryHistory_Params = PageHandler_QueryHistory_ParamsMojoType;
export declare interface PageHandler_QueryHistory_ResponseParamsMojoType {
    results: QueryResult;
}
export type PageHandler_QueryHistory_ResponseParams = PageHandler_QueryHistory_ResponseParamsMojoType;
export declare interface PageHandler_QueryHistoryContinuation_ParamsMojoType {
}
export type PageHandler_QueryHistoryContinuation_Params = PageHandler_QueryHistoryContinuation_ParamsMojoType;
export declare interface PageHandler_QueryHistoryContinuation_ResponseParamsMojoType {
    results: QueryResult;
}
export type PageHandler_QueryHistoryContinuation_ResponseParams = PageHandler_QueryHistoryContinuation_ResponseParamsMojoType;
export declare interface PageHandler_RemoveVisits_ParamsMojoType {
    items: RemovalItem[];
}
export type PageHandler_RemoveVisits_Params = PageHandler_RemoveVisits_ParamsMojoType;
export declare interface PageHandler_RemoveVisits_ResponseParamsMojoType {
}
export type PageHandler_RemoveVisits_ResponseParams = PageHandler_RemoveVisits_ResponseParamsMojoType;
export declare interface PageHandler_OpenClearBrowsingDataDialog_ParamsMojoType {
}
export type PageHandler_OpenClearBrowsingDataDialog_Params = PageHandler_OpenClearBrowsingDataDialog_ParamsMojoType;
export declare interface PageHandler_RemoveBookmark_ParamsMojoType {
    url: string;
}
export type PageHandler_RemoveBookmark_Params = PageHandler_RemoveBookmark_ParamsMojoType;
export declare interface PageHandler_SetLastSelectedTab_ParamsMojoType {
    lastTab: number;
}
export type PageHandler_SetLastSelectedTab_Params = PageHandler_SetLastSelectedTab_ParamsMojoType;
export declare interface PageHandler_ShowSidePanelUI_ParamsMojoType {
}
export type PageHandler_ShowSidePanelUI_Params = PageHandler_ShowSidePanelUI_ParamsMojoType;
export declare interface PageHandler_RequestAccountInfo_ParamsMojoType {
}
export type PageHandler_RequestAccountInfo_Params = PageHandler_RequestAccountInfo_ParamsMojoType;
export declare interface PageHandler_RequestAccountInfo_ResponseParamsMojoType {
    accountInfo: AccountInfo;
}
export type PageHandler_RequestAccountInfo_ResponseParams = PageHandler_RequestAccountInfo_ResponseParamsMojoType;
export declare interface PageHandler_TurnOnHistorySync_ParamsMojoType {
    accessPoint: AccessPoint;
}
export type PageHandler_TurnOnHistorySync_Params = PageHandler_TurnOnHistorySync_ParamsMojoType;
export declare interface PageHandler_OpenCriticalActionConversation_ParamsMojoType {
    criticalActionId: string;
}
export type PageHandler_OpenCriticalActionConversation_Params = PageHandler_OpenCriticalActionConversation_ParamsMojoType;
export declare interface PageHandler_OpenCriticalActionConversation_ResponseParamsMojoType {
    result: OpenConversationResult;
}
export type PageHandler_OpenCriticalActionConversation_ResponseParams = PageHandler_OpenCriticalActionConversation_ResponseParamsMojoType;
export declare interface PageHandler_GetSyncedDevicesForFiltering_ParamsMojoType {
}
export type PageHandler_GetSyncedDevicesForFiltering_Params = PageHandler_GetSyncedDevicesForFiltering_ParamsMojoType;
export declare interface PageHandler_GetSyncedDevicesForFiltering_ResponseParamsMojoType {
    devices: Device[];
}
export type PageHandler_GetSyncedDevicesForFiltering_ResponseParams = PageHandler_GetSyncedDevicesForFiltering_ResponseParamsMojoType;
export declare interface PageHandler_GetTimePeriodOptions_ParamsMojoType {
}
export type PageHandler_GetTimePeriodOptions_Params = PageHandler_GetTimePeriodOptions_ParamsMojoType;
export declare interface PageHandler_GetTimePeriodOptions_ResponseParamsMojoType {
    options: TimePeriodOption[];
}
export type PageHandler_GetTimePeriodOptions_ResponseParams = PageHandler_GetTimePeriodOptions_ResponseParamsMojoType;
export declare interface PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsMojoType {
}
export type PageHandler_ShouldShowHistoryPageHistorySyncPromo_Params = PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsMojoType;
export declare interface PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsMojoType {
    shouldShow: boolean;
}
export type PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParams = PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsMojoType;
export declare interface PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsMojoType {
}
export type PageHandler_RecordHistoryPageHistorySyncPromoDismissed_Params = PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsMojoType;
export declare interface PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsMojoType {
}
export type PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_Params = PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsMojoType;
export declare interface Page_OnHistoryDeleted_ParamsMojoType {
}
export type Page_OnHistoryDeleted_Params = Page_OnHistoryDeleted_ParamsMojoType;
export declare interface Page_OnHasOtherFormsChanged_ParamsMojoType {
    hasOtherForms: boolean;
}
export type Page_OnHasOtherFormsChanged_Params = Page_OnHasOtherFormsChanged_ParamsMojoType;
export declare interface Page_SendAccountInfo_ParamsMojoType {
    accountInfo: AccountInfo;
}
export type Page_SendAccountInfo_Params = Page_SendAccountInfo_ParamsMojoType;
