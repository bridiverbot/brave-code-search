import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Container as tabsApi_mojom_Container, Tab as tabsApi_mojom_Tab, Data as tabsApi_mojom_Data } from './tab_strip_api_data_model.mojom-webui.js';
import { OnCollectionCreatedEvent as tabsApi_mojom_OnCollectionCreatedEvent, OnNodeMovedEvent as tabsApi_mojom_OnNodeMovedEvent, OnNodesClosedEvent as tabsApi_mojom_OnNodesClosedEvent, OnTabsCreatedEvent as tabsApi_mojom_OnTabsCreatedEvent, OnDataChangedEvent as tabsApi_mojom_OnDataChangedEvent } from './tab_strip_api_events.mojom-webui.js';
import { Position as tabsApi_mojom_Position } from './tab_strip_api_types.mojom-webui.js';
import { Empty as mojoBase_mojom_Empty } from '//resources/mojo/mojo/public/mojom/base/empty.mojom-webui.js';
import { Error as mojoBase_mojom_Error } from '//resources/mojo/mojo/public/mojom/base/error.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type TabStripServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabStripServicePendingReceiver>;
export declare class TabStripServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabStripService> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabStripServicePendingReceiver>;
    constructor(handle: MojoHandle | TabStripServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabStripServiceInterface {
    getTabs(): Promise<TabsSnapshot>;
    getTab(id: string): Promise<tabsApi_mojom_Tab>;
    createTabAt(pos: (tabsApi_mojom_Position | null), url: (url_mojom_Url | null)): Promise<tabsApi_mojom_Tab>;
    closeNodes(ids: string[]): Promise<mojoBase_mojom_Empty>;
    activateTab(id: string): Promise<mojoBase_mojom_Empty>;
    setSelectedTabs(selection: string[], tabToActivate: string): Promise<mojoBase_mojom_Empty>;
    moveNode(id: string, position: tabsApi_mojom_Position): Promise<mojoBase_mojom_Empty>;
    update(data: tabsApi_mojom_Data, updateMask: (string[] | null)): Promise<tabsApi_mojom_Data>;
}
export declare class TabStripServiceRemote implements TabStripServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabStripServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabStripServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabStripServicePendingReceiverEndpoint);
    getTabs(): Promise<TabsSnapshot>;
    getTab(id: string): Promise<tabsApi_mojom_Tab>;
    createTabAt(pos: (tabsApi_mojom_Position | null), url: (url_mojom_Url | null)): Promise<tabsApi_mojom_Tab>;
    closeNodes(ids: string[]): Promise<mojoBase_mojom_Empty>;
    activateTab(id: string): Promise<mojoBase_mojom_Empty>;
    setSelectedTabs(selection: string[], tabToActivate: string): Promise<mojoBase_mojom_Empty>;
    moveNode(id: string, position: tabsApi_mojom_Position): Promise<mojoBase_mojom_Empty>;
    update(data: tabsApi_mojom_Data, updateMask: (string[] | null)): Promise<tabsApi_mojom_Data>;
}
/**
 * An object which receives request messages for the TabStripService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabStripServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabStripServiceRemote, TabStripServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabStripServiceRemote, TabStripServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabStripServiceInterface);
}
export declare class TabStripService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabStripServiceRemote;
}
/**
 * An object which receives request messages for the TabStripService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabStripServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabStripServiceRemote, TabStripServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabStripServiceRemote, TabStripServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    createTabAt: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pos: (tabsApi_mojom_Position | null), url: (url_mojom_Url | null)) => any>;
    closeNodes: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ids: string[]) => any>;
    activateTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    setSelectedTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(selection: string[], tabToActivate: string) => any>;
    moveNode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string, position: tabsApi_mojom_Position) => any>;
    update: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(data: tabsApi_mojom_Data, updateMask: (string[] | null)) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type TabsObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabsObserverPendingReceiver>;
export declare class TabsObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabsObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabsObserverPendingReceiver>;
    constructor(handle: MojoHandle | TabsObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabsObserverInterface {
    onTabEvents(events: TabsEvent[]): void;
}
export declare class TabsObserverRemote implements TabsObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabsObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabsObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabsObserverPendingReceiverEndpoint);
    onTabEvents(events: TabsEvent[]): void;
}
/**
 * An object which receives request messages for the TabsObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabsObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabsObserverRemote, TabsObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabsObserverRemote, TabsObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabsObserverInterface);
}
export declare class TabsObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabsObserverRemote;
}
/**
 * An object which receives request messages for the TabsObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabsObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabsObserverRemote, TabsObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabsObserverRemote, TabsObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onTabEvents: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(events: TabsEvent[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TabsSnapshotSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_GetTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_GetTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_GetTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_GetTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_CreateTabAt_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_CreateTabAt_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_CloseNodes_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_CloseNodes_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_ActivateTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_ActivateTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_SetSelectedTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_SetSelectedTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_MoveNode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_MoveNode_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_Update_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_Update_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabsObserver_OnTabEvents_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabsEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_GetTabs_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_GetTab_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_CreateTabAt_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_CloseNodes_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_ActivateTab_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_SetSelectedTabs_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_MoveNode_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripService_Update_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TabsSnapshotMojoType {
    tabStrip: tabsApi_mojom_Container;
    stream: TabsObserverPendingReceiver;
}
export type TabsSnapshot = TabsSnapshotMojoType;
export declare interface TabStripService_GetTabs_ParamsMojoType {
}
export type TabStripService_GetTabs_Params = TabStripService_GetTabs_ParamsMojoType;
export declare interface TabStripService_GetTabs_ResponseParamsMojoType {
    result: TabStripService_GetTabs_ResponseParam_Result;
}
export type TabStripService_GetTabs_ResponseParams = TabStripService_GetTabs_ResponseParamsMojoType;
export declare interface TabStripService_GetTab_ParamsMojoType {
    id: string;
}
export type TabStripService_GetTab_Params = TabStripService_GetTab_ParamsMojoType;
export declare interface TabStripService_GetTab_ResponseParamsMojoType {
    result: TabStripService_GetTab_ResponseParam_Result;
}
export type TabStripService_GetTab_ResponseParams = TabStripService_GetTab_ResponseParamsMojoType;
export declare interface TabStripService_CreateTabAt_ParamsMojoType {
    pos: (tabsApi_mojom_Position | null);
    url: (url_mojom_Url | null);
}
export type TabStripService_CreateTabAt_Params = TabStripService_CreateTabAt_ParamsMojoType;
export declare interface TabStripService_CreateTabAt_ResponseParamsMojoType {
    result: TabStripService_CreateTabAt_ResponseParam_Result;
}
export type TabStripService_CreateTabAt_ResponseParams = TabStripService_CreateTabAt_ResponseParamsMojoType;
export declare interface TabStripService_CloseNodes_ParamsMojoType {
    ids: string[];
}
export type TabStripService_CloseNodes_Params = TabStripService_CloseNodes_ParamsMojoType;
export declare interface TabStripService_CloseNodes_ResponseParamsMojoType {
    result: TabStripService_CloseNodes_ResponseParam_Result;
}
export type TabStripService_CloseNodes_ResponseParams = TabStripService_CloseNodes_ResponseParamsMojoType;
export declare interface TabStripService_ActivateTab_ParamsMojoType {
    id: string;
}
export type TabStripService_ActivateTab_Params = TabStripService_ActivateTab_ParamsMojoType;
export declare interface TabStripService_ActivateTab_ResponseParamsMojoType {
    result: TabStripService_ActivateTab_ResponseParam_Result;
}
export type TabStripService_ActivateTab_ResponseParams = TabStripService_ActivateTab_ResponseParamsMojoType;
export declare interface TabStripService_SetSelectedTabs_ParamsMojoType {
    selection: string[];
    tabToActivate: string;
}
export type TabStripService_SetSelectedTabs_Params = TabStripService_SetSelectedTabs_ParamsMojoType;
export declare interface TabStripService_SetSelectedTabs_ResponseParamsMojoType {
    result: TabStripService_SetSelectedTabs_ResponseParam_Result;
}
export type TabStripService_SetSelectedTabs_ResponseParams = TabStripService_SetSelectedTabs_ResponseParamsMojoType;
export declare interface TabStripService_MoveNode_ParamsMojoType {
    id: string;
    position: tabsApi_mojom_Position;
}
export type TabStripService_MoveNode_Params = TabStripService_MoveNode_ParamsMojoType;
export declare interface TabStripService_MoveNode_ResponseParamsMojoType {
    result: TabStripService_MoveNode_ResponseParam_Result;
}
export type TabStripService_MoveNode_ResponseParams = TabStripService_MoveNode_ResponseParamsMojoType;
export declare interface TabStripService_Update_ParamsMojoType {
    data: tabsApi_mojom_Data;
    updateMask: (string[] | null);
}
export type TabStripService_Update_Params = TabStripService_Update_ParamsMojoType;
export declare interface TabStripService_Update_ResponseParamsMojoType {
    result: TabStripService_Update_ResponseParam_Result;
}
export type TabStripService_Update_ResponseParams = TabStripService_Update_ResponseParamsMojoType;
export declare interface TabsObserver_OnTabEvents_ParamsMojoType {
    events: TabsEvent[];
}
export type TabsObserver_OnTabEvents_Params = TabsObserver_OnTabEvents_ParamsMojoType;
export declare interface TabsEvent {
    tabsCreatedEvent?: tabsApi_mojom_OnTabsCreatedEvent;
    nodesClosedEvent?: tabsApi_mojom_OnNodesClosedEvent;
    nodeMovedEvent?: tabsApi_mojom_OnNodeMovedEvent;
    dataChangedEvent?: tabsApi_mojom_OnDataChangedEvent;
    collectionCreatedEvent?: tabsApi_mojom_OnCollectionCreatedEvent;
}
export declare enum TabsEventFieldTags {
    TABS_CREATED_EVENT = 0,
    NODES_CLOSED_EVENT = 1,
    NODE_MOVED_EVENT = 2,
    DATA_CHANGED_EVENT = 3,
    COLLECTION_CREATED_EVENT = 4
}
export declare function whichTabsEvent(u: TabsEvent): TabsEventFieldTags;
export declare interface TabStripService_GetTabs_ResponseParam_Result {
    success?: TabsSnapshot;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripService_GetTabs_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripService_GetTabs_ResponseParam_Result(u: TabStripService_GetTabs_ResponseParam_Result): TabStripService_GetTabs_ResponseParam_ResultFieldTags;
export declare interface TabStripService_GetTab_ResponseParam_Result {
    success?: tabsApi_mojom_Tab;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripService_GetTab_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripService_GetTab_ResponseParam_Result(u: TabStripService_GetTab_ResponseParam_Result): TabStripService_GetTab_ResponseParam_ResultFieldTags;
export declare interface TabStripService_CreateTabAt_ResponseParam_Result {
    success?: tabsApi_mojom_Tab;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripService_CreateTabAt_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripService_CreateTabAt_ResponseParam_Result(u: TabStripService_CreateTabAt_ResponseParam_Result): TabStripService_CreateTabAt_ResponseParam_ResultFieldTags;
export declare interface TabStripService_CloseNodes_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripService_CloseNodes_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripService_CloseNodes_ResponseParam_Result(u: TabStripService_CloseNodes_ResponseParam_Result): TabStripService_CloseNodes_ResponseParam_ResultFieldTags;
export declare interface TabStripService_ActivateTab_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripService_ActivateTab_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripService_ActivateTab_ResponseParam_Result(u: TabStripService_ActivateTab_ResponseParam_Result): TabStripService_ActivateTab_ResponseParam_ResultFieldTags;
export declare interface TabStripService_SetSelectedTabs_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripService_SetSelectedTabs_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripService_SetSelectedTabs_ResponseParam_Result(u: TabStripService_SetSelectedTabs_ResponseParam_Result): TabStripService_SetSelectedTabs_ResponseParam_ResultFieldTags;
export declare interface TabStripService_MoveNode_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripService_MoveNode_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripService_MoveNode_ResponseParam_Result(u: TabStripService_MoveNode_ResponseParam_Result): TabStripService_MoveNode_ResponseParam_ResultFieldTags;
export declare interface TabStripService_Update_ResponseParam_Result {
    success?: tabsApi_mojom_Data;
    failure?: mojoBase_mojom_Error;
}
export declare enum TabStripService_Update_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichTabStripService_Update_ResponseParam_Result(u: TabStripService_Update_ResponseParam_Result): TabStripService_Update_ResponseParam_ResultFieldTags;
