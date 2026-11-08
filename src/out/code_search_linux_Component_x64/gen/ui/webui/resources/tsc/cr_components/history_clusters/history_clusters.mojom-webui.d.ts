import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Cluster as historyClusters_mojom_Cluster, URLVisit as historyClusters_mojom_URLVisit } from './history_cluster_types.mojom-webui.js';
import { Time as mojoBase_mojom_Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { ClickModifiers as ui_mojom_ClickModifiers } from '//resources/mojo/ui/base/mojom/window_open_disposition.mojom-webui.js';
import { Point as gfx_mojom_Point } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ClusterActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ClusterAction {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kDeleted = 0,
    kOpenedInTabGroup = 1,
    kRelatedSearchClicked = 2,
    kVisitClicked = 3
}
export declare const RelatedSearchActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RelatedSearchAction {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kClicked = 0
}
export declare const VisitActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum VisitAction {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kClicked = 0,
    kHidden = 1,
    kDeleted = 2
}
export declare const VisitTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum VisitType {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kSRP = 0,
    kNonSRP = 1
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    openHistoryUrl(url: url_mojom_Url, clickModifiers: ui_mojom_ClickModifiers): void;
    showContextMenuForSearchbox(query: string, point: gfx_mojom_Point): void;
    showContextMenuForURL(url: url_mojom_Url, point: gfx_mojom_Point): void;
    showSidePanelUI(): void;
    toggleVisibility(visible: boolean): Promise<{
        visible: boolean;
    }>;
    startQueryClusters(query: string, beginTime: (mojoBase_mojom_Time | null), recluster: boolean): void;
    loadMoreClusters(query: string): void;
    hideVisits(visits: historyClusters_mojom_URLVisit[]): Promise<{
        success: boolean;
    }>;
    removeVisits(visits: historyClusters_mojom_URLVisit[]): Promise<{
        success: boolean;
    }>;
    removeVisitByUrlAndTime(url: url_mojom_Url, timestamp: number): Promise<{
        success: boolean;
    }>;
    openVisitUrlsInTabGroup(visits: historyClusters_mojom_URLVisit[], tabGroupName: (string | null)): void;
    recordVisitAction(visitAction: VisitAction, visitIndex: number, visitType: VisitType): void;
    recordRelatedSearchAction(action: RelatedSearchAction, visitIndex: number): void;
    recordClusterAction(clusterAction: ClusterAction, clusterIndex: number): void;
    recordToggledVisibility(visible: boolean): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    openHistoryUrl(url: url_mojom_Url, clickModifiers: ui_mojom_ClickModifiers): void;
    showContextMenuForSearchbox(query: string, point: gfx_mojom_Point): void;
    showContextMenuForURL(url: url_mojom_Url, point: gfx_mojom_Point): void;
    showSidePanelUI(): void;
    toggleVisibility(visible: boolean): Promise<{
        visible: boolean;
    }>;
    startQueryClusters(query: string, beginTime: (mojoBase_mojom_Time | null), recluster: boolean): void;
    loadMoreClusters(query: string): void;
    hideVisits(visits: historyClusters_mojom_URLVisit[]): Promise<{
        success: boolean;
    }>;
    removeVisits(visits: historyClusters_mojom_URLVisit[]): Promise<{
        success: boolean;
    }>;
    removeVisitByUrlAndTime(url: url_mojom_Url, timestamp: number): Promise<{
        success: boolean;
    }>;
    openVisitUrlsInTabGroup(visits: historyClusters_mojom_URLVisit[], tabGroupName: (string | null)): void;
    recordVisitAction(visitAction: VisitAction, visitIndex: number, visitType: VisitType): void;
    recordRelatedSearchAction(action: RelatedSearchAction, visitIndex: number): void;
    recordClusterAction(clusterAction: ClusterAction, clusterIndex: number): void;
    recordToggledVisibility(visible: boolean): void;
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
    openHistoryUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, clickModifiers: ui_mojom_ClickModifiers) => any>;
    showContextMenuForSearchbox: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string, point: gfx_mojom_Point) => any>;
    showContextMenuForURL: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, point: gfx_mojom_Point) => any>;
    showSidePanelUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    toggleVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    startQueryClusters: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string, beginTime: (mojoBase_mojom_Time | null), recluster: boolean) => any>;
    loadMoreClusters: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
    hideVisits: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visits: historyClusters_mojom_URLVisit[]) => any>;
    removeVisits: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visits: historyClusters_mojom_URLVisit[]) => any>;
    removeVisitByUrlAndTime: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, timestamp: number) => any>;
    openVisitUrlsInTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visits: historyClusters_mojom_URLVisit[], tabGroupName: (string | null)) => any>;
    recordVisitAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visitAction: VisitAction, visitIndex: number, visitType: VisitType) => any>;
    recordRelatedSearchAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(action: RelatedSearchAction, visitIndex: number) => any>;
    recordClusterAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clusterAction: ClusterAction, clusterIndex: number) => any>;
    recordToggledVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
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
    onClustersQueryResult(result: QueryResult): void;
    onClusterImageUpdated(clusterIndex: number, imageUrl: url_mojom_Url): void;
    onVisitsHidden(hiddenVisits: historyClusters_mojom_URLVisit[]): void;
    onVisitsRemoved(removedVisits: historyClusters_mojom_URLVisit[]): void;
    onHistoryDeleted(): void;
    onQueryChangedByUser(query: string): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onClustersQueryResult(result: QueryResult): void;
    onClusterImageUpdated(clusterIndex: number, imageUrl: url_mojom_Url): void;
    onVisitsHidden(hiddenVisits: historyClusters_mojom_URLVisit[]): void;
    onVisitsRemoved(removedVisits: historyClusters_mojom_URLVisit[]): void;
    onHistoryDeleted(): void;
    onQueryChangedByUser(query: string): void;
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
    onClustersQueryResult: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(result: QueryResult) => any>;
    onClusterImageUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clusterIndex: number, imageUrl: url_mojom_Url) => any>;
    onVisitsHidden: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(hiddenVisits: historyClusters_mojom_URLVisit[]) => any>;
    onVisitsRemoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(removedVisits: historyClusters_mojom_URLVisit[]) => any>;
    onHistoryDeleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onQueryChangedByUser: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
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
export declare const QueryResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenHistoryUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowContextMenuForSearchbox_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowContextMenuForURL_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowSidePanelUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ToggleVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ToggleVisibility_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartQueryClusters_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_LoadMoreClusters_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_HideVisits_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_HideVisits_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveVisits_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveVisits_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveVisitByUrlAndTime_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordVisitAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordRelatedSearchAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordClusterAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordToggledVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnClustersQueryResult_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnClusterImageUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnVisitsHidden_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnVisitsRemoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnHistoryDeleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnQueryChangedByUser_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface QueryResultMojoType {
    query: string;
    clusters: historyClusters_mojom_Cluster[];
    canLoadMore: boolean;
    isContinuation: boolean;
}
export type QueryResult = QueryResultMojoType;
export declare interface PageHandler_OpenHistoryUrl_ParamsMojoType {
    url: url_mojom_Url;
    clickModifiers: ui_mojom_ClickModifiers;
}
export type PageHandler_OpenHistoryUrl_Params = PageHandler_OpenHistoryUrl_ParamsMojoType;
export declare interface PageHandler_ShowContextMenuForSearchbox_ParamsMojoType {
    query: string;
    point: gfx_mojom_Point;
}
export type PageHandler_ShowContextMenuForSearchbox_Params = PageHandler_ShowContextMenuForSearchbox_ParamsMojoType;
export declare interface PageHandler_ShowContextMenuForURL_ParamsMojoType {
    url: url_mojom_Url;
    point: gfx_mojom_Point;
}
export type PageHandler_ShowContextMenuForURL_Params = PageHandler_ShowContextMenuForURL_ParamsMojoType;
export declare interface PageHandler_ShowSidePanelUI_ParamsMojoType {
}
export type PageHandler_ShowSidePanelUI_Params = PageHandler_ShowSidePanelUI_ParamsMojoType;
export declare interface PageHandler_ToggleVisibility_ParamsMojoType {
    visible: boolean;
}
export type PageHandler_ToggleVisibility_Params = PageHandler_ToggleVisibility_ParamsMojoType;
export declare interface PageHandler_ToggleVisibility_ResponseParamsMojoType {
    visible: boolean;
}
export type PageHandler_ToggleVisibility_ResponseParams = PageHandler_ToggleVisibility_ResponseParamsMojoType;
export declare interface PageHandler_StartQueryClusters_ParamsMojoType {
    query: string;
    beginTime: (mojoBase_mojom_Time | null);
    recluster: boolean;
}
export type PageHandler_StartQueryClusters_Params = PageHandler_StartQueryClusters_ParamsMojoType;
export declare interface PageHandler_LoadMoreClusters_ParamsMojoType {
    query: string;
}
export type PageHandler_LoadMoreClusters_Params = PageHandler_LoadMoreClusters_ParamsMojoType;
export declare interface PageHandler_HideVisits_ParamsMojoType {
    visits: historyClusters_mojom_URLVisit[];
}
export type PageHandler_HideVisits_Params = PageHandler_HideVisits_ParamsMojoType;
export declare interface PageHandler_HideVisits_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_HideVisits_ResponseParams = PageHandler_HideVisits_ResponseParamsMojoType;
export declare interface PageHandler_RemoveVisits_ParamsMojoType {
    visits: historyClusters_mojom_URLVisit[];
}
export type PageHandler_RemoveVisits_Params = PageHandler_RemoveVisits_ParamsMojoType;
export declare interface PageHandler_RemoveVisits_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_RemoveVisits_ResponseParams = PageHandler_RemoveVisits_ResponseParamsMojoType;
export declare interface PageHandler_RemoveVisitByUrlAndTime_ParamsMojoType {
    url: url_mojom_Url;
    timestamp: number;
}
export type PageHandler_RemoveVisitByUrlAndTime_Params = PageHandler_RemoveVisitByUrlAndTime_ParamsMojoType;
export declare interface PageHandler_RemoveVisitByUrlAndTime_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_RemoveVisitByUrlAndTime_ResponseParams = PageHandler_RemoveVisitByUrlAndTime_ResponseParamsMojoType;
export declare interface PageHandler_OpenVisitUrlsInTabGroup_ParamsMojoType {
    visits: historyClusters_mojom_URLVisit[];
    tabGroupName: (string | null);
}
export type PageHandler_OpenVisitUrlsInTabGroup_Params = PageHandler_OpenVisitUrlsInTabGroup_ParamsMojoType;
export declare interface PageHandler_RecordVisitAction_ParamsMojoType {
    visitAction: VisitAction;
    visitIndex: number;
    visitType: VisitType;
}
export type PageHandler_RecordVisitAction_Params = PageHandler_RecordVisitAction_ParamsMojoType;
export declare interface PageHandler_RecordRelatedSearchAction_ParamsMojoType {
    action: RelatedSearchAction;
    visitIndex: number;
}
export type PageHandler_RecordRelatedSearchAction_Params = PageHandler_RecordRelatedSearchAction_ParamsMojoType;
export declare interface PageHandler_RecordClusterAction_ParamsMojoType {
    clusterAction: ClusterAction;
    clusterIndex: number;
}
export type PageHandler_RecordClusterAction_Params = PageHandler_RecordClusterAction_ParamsMojoType;
export declare interface PageHandler_RecordToggledVisibility_ParamsMojoType {
    visible: boolean;
}
export type PageHandler_RecordToggledVisibility_Params = PageHandler_RecordToggledVisibility_ParamsMojoType;
export declare interface Page_OnClustersQueryResult_ParamsMojoType {
    result: QueryResult;
}
export type Page_OnClustersQueryResult_Params = Page_OnClustersQueryResult_ParamsMojoType;
export declare interface Page_OnClusterImageUpdated_ParamsMojoType {
    clusterIndex: number;
    imageUrl: url_mojom_Url;
}
export type Page_OnClusterImageUpdated_Params = Page_OnClusterImageUpdated_ParamsMojoType;
export declare interface Page_OnVisitsHidden_ParamsMojoType {
    hiddenVisits: historyClusters_mojom_URLVisit[];
}
export type Page_OnVisitsHidden_Params = Page_OnVisitsHidden_ParamsMojoType;
export declare interface Page_OnVisitsRemoved_ParamsMojoType {
    removedVisits: historyClusters_mojom_URLVisit[];
}
export type Page_OnVisitsRemoved_Params = Page_OnVisitsRemoved_ParamsMojoType;
export declare interface Page_OnHistoryDeleted_ParamsMojoType {
}
export type Page_OnHistoryDeleted_Params = Page_OnHistoryDeleted_ParamsMojoType;
export declare interface Page_OnQueryChangedByUser_ParamsMojoType {
    query: string;
}
export type Page_OnQueryChangedByUser_Params = Page_OnQueryChangedByUser_ParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
