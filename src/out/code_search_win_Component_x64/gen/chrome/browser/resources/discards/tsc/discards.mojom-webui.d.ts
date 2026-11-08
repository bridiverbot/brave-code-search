import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { LifecycleUnitDiscardReason as mojom_LifecycleUnitDiscardReason, LifecycleUnitLoadingState as mojom_LifecycleUnitLoadingState, LifecycleUnitState as mojom_LifecycleUnitState } from './lifecycle_unit_state.mojom-webui.js';
import { ProcessMemoryDump as memoryInstrumentation_mojom_ProcessMemoryDump } from './memory_instrumentation.mojom-webui.js';
import { ProcessId as mojoBase_mojom_ProcessId } from '//resources/mojo/mojo/public/mojom/base/process_id.mojom-webui.js';
import { JSTime as mojoBase_mojom_JSTime } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const LifecycleUnitVisibilitySpec: {
    $: mojo.internal.MojomType;
};
export declare enum LifecycleUnitVisibility {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    HIDDEN = 0,
    OCCLUDED = 1,
    VISIBLE = 2
}
export declare const CanFreezeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CanFreeze {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    YES = 0,
    VARIES = 1,
    NO = 2
}
export type DetailsProviderPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DetailsProviderPendingReceiver>;
export declare class DetailsProviderPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DetailsProvider> {
    handle: mojo.internal.interfaceSupport.Endpoint<DetailsProviderPendingReceiver>;
    constructor(handle: MojoHandle | DetailsProviderPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DetailsProviderInterface {
    getTabDiscardsInfo(): Promise<{
        infos: TabDiscardsInfo[];
    }>;
    setAutoDiscardable(tabId: number, isAutoDiscardable: boolean): Promise<void>;
    discardById(tabId: number, reason: mojom_LifecycleUnitDiscardReason): Promise<void>;
    freezeById(tabId: number): void;
    loadById(tabId: number): void;
    discard(): Promise<void>;
    toggleBatterySaverMode(): void;
    refreshPerformanceTabCpuMeasurements(): void;
    getProcessMemoryDumps(): Promise<{
        success: boolean;
        processDumps: memoryInstrumentation_mojom_ProcessMemoryDump[];
        processDescriptions: ProcessDescription[];
    }>;
}
export declare class DetailsProviderRemote implements DetailsProviderInterface, mojo.internal.interfaceSupport.InterfaceRemote<DetailsProviderPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DetailsProviderPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DetailsProviderPendingReceiverEndpoint);
    getTabDiscardsInfo(): Promise<{
        infos: TabDiscardsInfo[];
    }>;
    setAutoDiscardable(tabId: number, isAutoDiscardable: boolean): Promise<void>;
    discardById(tabId: number, reason: mojom_LifecycleUnitDiscardReason): Promise<void>;
    freezeById(tabId: number): void;
    loadById(tabId: number): void;
    discard(): Promise<void>;
    toggleBatterySaverMode(): void;
    refreshPerformanceTabCpuMeasurements(): void;
    getProcessMemoryDumps(): Promise<{
        success: boolean;
        processDumps: memoryInstrumentation_mojom_ProcessMemoryDump[];
        processDescriptions: ProcessDescription[];
    }>;
}
/**
 * An object which receives request messages for the DetailsProvider
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DetailsProviderReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DetailsProviderRemote, DetailsProviderPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DetailsProviderRemote, DetailsProviderPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DetailsProviderInterface);
}
export declare class DetailsProvider {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DetailsProviderRemote;
}
/**
 * An object which receives request messages for the DetailsProvider
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DetailsProviderCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DetailsProviderRemote, DetailsProviderPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DetailsProviderRemote, DetailsProviderPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getTabDiscardsInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setAutoDiscardable: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, isAutoDiscardable: boolean) => any>;
    discardById: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, reason: mojom_LifecycleUnitDiscardReason) => any>;
    freezeById: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    loadById: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    discard: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    toggleBatterySaverMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    refreshPerformanceTabCpuMeasurements: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getProcessMemoryDumps: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GraphChangeStreamPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GraphChangeStreamPendingReceiver>;
export declare class GraphChangeStreamPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GraphChangeStream> {
    handle: mojo.internal.interfaceSupport.Endpoint<GraphChangeStreamPendingReceiver>;
    constructor(handle: MojoHandle | GraphChangeStreamPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GraphChangeStreamInterface {
    frameCreated(frame: FrameInfo): void;
    pageCreated(pages: PageInfo): void;
    processCreated(process: ProcessInfo): void;
    workerCreated(worker: WorkerInfo): void;
    frameChanged(frame: FrameInfo): void;
    pageChanged(page: PageInfo): void;
    processChanged(process: ProcessInfo): void;
    workerChanged(worker: WorkerInfo): void;
    favIconDataAvailable(favicon: FavIconInfo): void;
    nodeDeleted(nodeId: bigint): void;
}
export declare class GraphChangeStreamRemote implements GraphChangeStreamInterface, mojo.internal.interfaceSupport.InterfaceRemote<GraphChangeStreamPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GraphChangeStreamPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GraphChangeStreamPendingReceiverEndpoint);
    frameCreated(frame: FrameInfo): void;
    pageCreated(pages: PageInfo): void;
    processCreated(process: ProcessInfo): void;
    workerCreated(worker: WorkerInfo): void;
    frameChanged(frame: FrameInfo): void;
    pageChanged(page: PageInfo): void;
    processChanged(process: ProcessInfo): void;
    workerChanged(worker: WorkerInfo): void;
    favIconDataAvailable(favicon: FavIconInfo): void;
    nodeDeleted(nodeId: bigint): void;
}
/**
 * An object which receives request messages for the GraphChangeStream
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GraphChangeStreamReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GraphChangeStreamRemote, GraphChangeStreamPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GraphChangeStreamRemote, GraphChangeStreamPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GraphChangeStreamInterface);
}
export declare class GraphChangeStream {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GraphChangeStreamRemote;
}
/**
 * An object which receives request messages for the GraphChangeStream
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GraphChangeStreamCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GraphChangeStreamRemote, GraphChangeStreamPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GraphChangeStreamRemote, GraphChangeStreamPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    frameCreated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(frame: FrameInfo) => any>;
    pageCreated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pages: PageInfo) => any>;
    processCreated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(process: ProcessInfo) => any>;
    workerCreated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(worker: WorkerInfo) => any>;
    frameChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(frame: FrameInfo) => any>;
    pageChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PageInfo) => any>;
    processChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(process: ProcessInfo) => any>;
    workerChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(worker: WorkerInfo) => any>;
    favIconDataAvailable: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(favicon: FavIconInfo) => any>;
    nodeDeleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeId: bigint) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GraphDumpPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GraphDumpPendingReceiver>;
export declare class GraphDumpPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GraphDump> {
    handle: mojo.internal.interfaceSupport.Endpoint<GraphDumpPendingReceiver>;
    constructor(handle: MojoHandle | GraphDumpPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GraphDumpInterface {
    subscribeToChanges(changeSubscriber: GraphChangeStreamRemote): void;
    requestNodeDescriptions(nodeIds: bigint[]): Promise<{
        nodeDescriptionsJson: Map<bigint, string>;
    }>;
}
export declare class GraphDumpRemote implements GraphDumpInterface, mojo.internal.interfaceSupport.InterfaceRemote<GraphDumpPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GraphDumpPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GraphDumpPendingReceiverEndpoint);
    subscribeToChanges(changeSubscriber: GraphChangeStreamRemote): void;
    requestNodeDescriptions(nodeIds: bigint[]): Promise<{
        nodeDescriptionsJson: Map<bigint, string>;
    }>;
}
/**
 * An object which receives request messages for the GraphDump
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GraphDumpReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GraphDumpRemote, GraphDumpPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GraphDumpRemote, GraphDumpPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GraphDumpInterface);
}
export declare class GraphDump {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GraphDumpRemote;
}
/**
 * An object which receives request messages for the GraphDump
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GraphDumpCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GraphDumpRemote, GraphDumpPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GraphDumpRemote, GraphDumpPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    subscribeToChanges: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(changeSubscriber: GraphChangeStreamRemote) => any>;
    requestNodeDescriptions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeIds: bigint[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TabDiscardsInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ProcessDescriptionSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const FrameInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ProcessInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const WorkerInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const FavIconInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_GetTabDiscardsInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_SetAutoDiscardable_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_SetAutoDiscardable_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_DiscardById_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_DiscardById_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_FreezeById_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_LoadById_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_Discard_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_Discard_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_ToggleBatterySaverMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_GetProcessMemoryDumps_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DetailsProvider_GetProcessMemoryDumps_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_FrameCreated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_PageCreated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_ProcessCreated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_WorkerCreated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_FrameChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_PageChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_ProcessChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_WorkerChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_FavIconDataAvailable_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphChangeStream_NodeDeleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphDump_SubscribeToChanges_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphDump_RequestNodeDescriptions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GraphDump_RequestNodeDescriptions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TabDiscardsInfoMojoType {
    tabUrl: string;
    title: string;
    visibility: LifecycleUnitVisibility;
    loadingState: mojom_LifecycleUnitLoadingState;
    state: mojom_LifecycleUnitState;
    canDiscard: boolean;
    isAutoDiscardable: boolean;
    hasFocus: boolean;
    cannotDiscardReasons: string[];
    canFreeze: CanFreeze;
    discardCount: number;
    cannotFreezeReasons: string[];
    discardReason: mojom_LifecycleUnitDiscardReason;
    utilityRank: number;
    lastActiveSeconds: number;
    id: number;
    siteEngagementScore: number;
    stateChangeTime: mojoBase_mojom_JSTime;
}
export type TabDiscardsInfo = TabDiscardsInfoMojoType;
export declare interface ProcessDescriptionMojoType {
    pid: mojoBase_mojom_ProcessId;
    description: string;
}
export type ProcessDescription = ProcessDescriptionMojoType;
export declare interface PageInfoMojoType {
    id: bigint;
    mainFrameUrl: url_mojom_Url;
    openerFrameId: bigint;
    embedderFrameId: bigint;
    descriptionJson: string;
}
export type PageInfo = PageInfoMojoType;
export declare interface FrameInfoMojoType {
    id: bigint;
    url: url_mojom_Url;
    pageId: bigint;
    parentFrameId: bigint;
    processId: bigint;
    descriptionJson: string;
}
export type FrameInfo = FrameInfoMojoType;
export declare interface ProcessInfoMojoType {
    id: bigint;
    pid: mojoBase_mojom_ProcessId;
    privateFootprintKb: bigint;
    descriptionJson: string;
}
export type ProcessInfo = ProcessInfoMojoType;
export declare interface WorkerInfoMojoType {
    id: bigint;
    url: url_mojom_Url;
    processId: bigint;
    clientFrameIds: bigint[];
    clientWorkerIds: bigint[];
    childWorkerIds: bigint[];
    descriptionJson: string;
}
export type WorkerInfo = WorkerInfoMojoType;
export declare interface FavIconInfoMojoType {
    nodeId: bigint;
    iconData: string;
}
export type FavIconInfo = FavIconInfoMojoType;
export declare interface DetailsProvider_GetTabDiscardsInfo_ParamsMojoType {
}
export type DetailsProvider_GetTabDiscardsInfo_Params = DetailsProvider_GetTabDiscardsInfo_ParamsMojoType;
export declare interface DetailsProvider_GetTabDiscardsInfo_ResponseParamsMojoType {
    infos: TabDiscardsInfo[];
}
export type DetailsProvider_GetTabDiscardsInfo_ResponseParams = DetailsProvider_GetTabDiscardsInfo_ResponseParamsMojoType;
export declare interface DetailsProvider_SetAutoDiscardable_ParamsMojoType {
    tabId: number;
    isAutoDiscardable: boolean;
}
export type DetailsProvider_SetAutoDiscardable_Params = DetailsProvider_SetAutoDiscardable_ParamsMojoType;
export declare interface DetailsProvider_SetAutoDiscardable_ResponseParamsMojoType {
}
export type DetailsProvider_SetAutoDiscardable_ResponseParams = DetailsProvider_SetAutoDiscardable_ResponseParamsMojoType;
export declare interface DetailsProvider_DiscardById_ParamsMojoType {
    tabId: number;
    reason: mojom_LifecycleUnitDiscardReason;
}
export type DetailsProvider_DiscardById_Params = DetailsProvider_DiscardById_ParamsMojoType;
export declare interface DetailsProvider_DiscardById_ResponseParamsMojoType {
}
export type DetailsProvider_DiscardById_ResponseParams = DetailsProvider_DiscardById_ResponseParamsMojoType;
export declare interface DetailsProvider_FreezeById_ParamsMojoType {
    tabId: number;
}
export type DetailsProvider_FreezeById_Params = DetailsProvider_FreezeById_ParamsMojoType;
export declare interface DetailsProvider_LoadById_ParamsMojoType {
    tabId: number;
}
export type DetailsProvider_LoadById_Params = DetailsProvider_LoadById_ParamsMojoType;
export declare interface DetailsProvider_Discard_ParamsMojoType {
}
export type DetailsProvider_Discard_Params = DetailsProvider_Discard_ParamsMojoType;
export declare interface DetailsProvider_Discard_ResponseParamsMojoType {
}
export type DetailsProvider_Discard_ResponseParams = DetailsProvider_Discard_ResponseParamsMojoType;
export declare interface DetailsProvider_ToggleBatterySaverMode_ParamsMojoType {
}
export type DetailsProvider_ToggleBatterySaverMode_Params = DetailsProvider_ToggleBatterySaverMode_ParamsMojoType;
export declare interface DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsMojoType {
}
export type DetailsProvider_RefreshPerformanceTabCpuMeasurements_Params = DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsMojoType;
export declare interface DetailsProvider_GetProcessMemoryDumps_ParamsMojoType {
}
export type DetailsProvider_GetProcessMemoryDumps_Params = DetailsProvider_GetProcessMemoryDumps_ParamsMojoType;
export declare interface DetailsProvider_GetProcessMemoryDumps_ResponseParamsMojoType {
    success: boolean;
    processDumps: memoryInstrumentation_mojom_ProcessMemoryDump[];
    processDescriptions: ProcessDescription[];
}
export type DetailsProvider_GetProcessMemoryDumps_ResponseParams = DetailsProvider_GetProcessMemoryDumps_ResponseParamsMojoType;
export declare interface GraphChangeStream_FrameCreated_ParamsMojoType {
    frame: FrameInfo;
}
export type GraphChangeStream_FrameCreated_Params = GraphChangeStream_FrameCreated_ParamsMojoType;
export declare interface GraphChangeStream_PageCreated_ParamsMojoType {
    pages: PageInfo;
}
export type GraphChangeStream_PageCreated_Params = GraphChangeStream_PageCreated_ParamsMojoType;
export declare interface GraphChangeStream_ProcessCreated_ParamsMojoType {
    process: ProcessInfo;
}
export type GraphChangeStream_ProcessCreated_Params = GraphChangeStream_ProcessCreated_ParamsMojoType;
export declare interface GraphChangeStream_WorkerCreated_ParamsMojoType {
    worker: WorkerInfo;
}
export type GraphChangeStream_WorkerCreated_Params = GraphChangeStream_WorkerCreated_ParamsMojoType;
export declare interface GraphChangeStream_FrameChanged_ParamsMojoType {
    frame: FrameInfo;
}
export type GraphChangeStream_FrameChanged_Params = GraphChangeStream_FrameChanged_ParamsMojoType;
export declare interface GraphChangeStream_PageChanged_ParamsMojoType {
    page: PageInfo;
}
export type GraphChangeStream_PageChanged_Params = GraphChangeStream_PageChanged_ParamsMojoType;
export declare interface GraphChangeStream_ProcessChanged_ParamsMojoType {
    process: ProcessInfo;
}
export type GraphChangeStream_ProcessChanged_Params = GraphChangeStream_ProcessChanged_ParamsMojoType;
export declare interface GraphChangeStream_WorkerChanged_ParamsMojoType {
    worker: WorkerInfo;
}
export type GraphChangeStream_WorkerChanged_Params = GraphChangeStream_WorkerChanged_ParamsMojoType;
export declare interface GraphChangeStream_FavIconDataAvailable_ParamsMojoType {
    favicon: FavIconInfo;
}
export type GraphChangeStream_FavIconDataAvailable_Params = GraphChangeStream_FavIconDataAvailable_ParamsMojoType;
export declare interface GraphChangeStream_NodeDeleted_ParamsMojoType {
    nodeId: bigint;
}
export type GraphChangeStream_NodeDeleted_Params = GraphChangeStream_NodeDeleted_ParamsMojoType;
export declare interface GraphDump_SubscribeToChanges_ParamsMojoType {
    changeSubscriber: GraphChangeStreamRemote;
}
export type GraphDump_SubscribeToChanges_Params = GraphDump_SubscribeToChanges_ParamsMojoType;
export declare interface GraphDump_RequestNodeDescriptions_ParamsMojoType {
    nodeIds: bigint[];
}
export type GraphDump_RequestNodeDescriptions_Params = GraphDump_RequestNodeDescriptions_ParamsMojoType;
export declare interface GraphDump_RequestNodeDescriptions_ResponseParamsMojoType {
    nodeDescriptionsJson: Map<bigint, string>;
}
export type GraphDump_RequestNodeDescriptions_ResponseParams = GraphDump_RequestNodeDescriptions_ResponseParamsMojoType;
