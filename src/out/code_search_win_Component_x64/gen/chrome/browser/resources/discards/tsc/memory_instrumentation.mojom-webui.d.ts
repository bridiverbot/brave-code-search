import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { ProcessId as mojoBase_mojom_ProcessId } from '//resources/mojo/mojo/public/mojom/base/process_id.mojom-webui.js';
import { TimeTicks as mojoBase_mojom_TimeTicks } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
export declare const DumpTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DumpType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    PERIODIC_INTERVAL = 0,
    EXPLICITLY_TRIGGERED = 1,
    SUMMARY_ONLY = 2
}
export declare const LevelOfDetailSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LevelOfDetail {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    BACKGROUND = 0,
    LIGHT = 1,
    DETAILED = 2
}
export declare const DeterminismSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Determinism {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    NONE = 0,
    FORCE_GC = 1
}
export declare const ProcessTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ProcessType {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    OTHER = 0,
    BROWSER = 1,
    RENDERER = 2,
    GPU = 3,
    UTILITY = 4,
    PLUGIN = 5,
    ARC = 6
}
export declare const MemoryMapOptionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum MemoryMapOption {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    NONE = 0,
    MODULES = 1,
    FULL = 2
}
export declare const MemDumpFlagsSpec: {
    $: mojo.internal.MojomType;
};
export declare enum MemDumpFlags {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    MEM_DUMP_COUNT_MAPPINGS = 0,
    MEM_DUMP_PSS = 1,
    MEM_DUMP_PAGES_BITMAP = 2
}
export declare const RequestOutcomeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RequestOutcome {
    MIN_VALUE = 0,
    MAX_VALUE = 9,
    kSuccess = 0,
    kRedundant = 1,
    kFillOsMemoryDumpFailed = 2,
    kFillProcessMemoryMapsFailed = 3,
    kNullPid = 4,
    kProcessNotFound = 5,
    kInvalidTracingState = 6,
    kProcessUnregistered = 7,
    kTimeout = 8,
    kInProcessMemoryDumpFailed = 9
}
export type ClientProcessPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ClientProcessPendingReceiver>;
export declare class ClientProcessPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ClientProcess> {
    handle: mojo.internal.interfaceSupport.Endpoint<ClientProcessPendingReceiver>;
    constructor(handle: MojoHandle | ClientProcessPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ClientProcessInterface {
    requestChromeMemoryDump(args: RequestArgs): Promise<{
        outcome: RequestOutcome;
        dumpId: bigint;
        rawProcessMemoryDump: (RawProcessMemoryDump | null);
    }>;
    requestOSMemoryDump(option: MemoryMapOption, flags: MemDumpFlags[], pids: mojoBase_mojom_ProcessId[]): Promise<{
        outcome: RequestOutcome;
        dumps: Map<mojoBase_mojom_ProcessId, RawOSMemDump>;
    }>;
}
export declare class ClientProcessRemote implements ClientProcessInterface, mojo.internal.interfaceSupport.InterfaceRemote<ClientProcessPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ClientProcessPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ClientProcessPendingReceiverEndpoint);
    requestChromeMemoryDump(args: RequestArgs): Promise<{
        outcome: RequestOutcome;
        dumpId: bigint;
        rawProcessMemoryDump: (RawProcessMemoryDump | null);
    }>;
    requestOSMemoryDump(option: MemoryMapOption, flags: MemDumpFlags[], pids: mojoBase_mojom_ProcessId[]): Promise<{
        outcome: RequestOutcome;
        dumps: Map<mojoBase_mojom_ProcessId, RawOSMemDump>;
    }>;
}
/**
 * An object which receives request messages for the ClientProcess
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ClientProcessReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ClientProcessRemote, ClientProcessPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ClientProcessRemote, ClientProcessPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ClientProcessInterface);
}
export declare class ClientProcess {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ClientProcessRemote;
}
/**
 * An object which receives request messages for the ClientProcess
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ClientProcessCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ClientProcessRemote, ClientProcessPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ClientProcessRemote, ClientProcessPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    requestChromeMemoryDump: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(args: RequestArgs) => any>;
    requestOSMemoryDump: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(option: MemoryMapOption, flags: MemDumpFlags[], pids: mojoBase_mojom_ProcessId[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CoordinatorPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CoordinatorPendingReceiver>;
export declare class CoordinatorPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Coordinator> {
    handle: mojo.internal.interfaceSupport.Endpoint<CoordinatorPendingReceiver>;
    constructor(handle: MojoHandle | CoordinatorPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CoordinatorInterface {
    requestGlobalMemoryDump(dumpType: DumpType, levelOfDetail: LevelOfDetail, determinism: Determinism, allocatorDumpNames: string[]): Promise<{
        outcome: RequestOutcome;
        globalMemoryDump: (GlobalMemoryDump | null);
    }>;
    requestGlobalMemoryDumpForPid(pid: mojoBase_mojom_ProcessId, allocatorDumpNames: string[]): Promise<{
        outcome: RequestOutcome;
        globalMemoryDump: (GlobalMemoryDump | null);
    }>;
    requestPrivateMemoryFootprint(pid: mojoBase_mojom_ProcessId): Promise<{
        outcome: RequestOutcome;
        globalMemoryDump: (GlobalMemoryDump | null);
    }>;
    requestGlobalMemoryDumpAndAppendToTrace(dumpType: DumpType, levelOfDetail: LevelOfDetail, determinism: Determinism): Promise<{
        outcome: RequestOutcome;
        dumpId: bigint;
    }>;
}
export declare class CoordinatorRemote implements CoordinatorInterface, mojo.internal.interfaceSupport.InterfaceRemote<CoordinatorPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CoordinatorPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CoordinatorPendingReceiverEndpoint);
    requestGlobalMemoryDump(dumpType: DumpType, levelOfDetail: LevelOfDetail, determinism: Determinism, allocatorDumpNames: string[]): Promise<{
        outcome: RequestOutcome;
        globalMemoryDump: (GlobalMemoryDump | null);
    }>;
    requestGlobalMemoryDumpForPid(pid: mojoBase_mojom_ProcessId, allocatorDumpNames: string[]): Promise<{
        outcome: RequestOutcome;
        globalMemoryDump: (GlobalMemoryDump | null);
    }>;
    requestPrivateMemoryFootprint(pid: mojoBase_mojom_ProcessId): Promise<{
        outcome: RequestOutcome;
        globalMemoryDump: (GlobalMemoryDump | null);
    }>;
    requestGlobalMemoryDumpAndAppendToTrace(dumpType: DumpType, levelOfDetail: LevelOfDetail, determinism: Determinism): Promise<{
        outcome: RequestOutcome;
        dumpId: bigint;
    }>;
}
/**
 * An object which receives request messages for the Coordinator
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CoordinatorReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CoordinatorRemote, CoordinatorPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CoordinatorRemote, CoordinatorPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CoordinatorInterface);
}
export declare class Coordinator {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CoordinatorRemote;
}
/**
 * An object which receives request messages for the Coordinator
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CoordinatorCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CoordinatorRemote, CoordinatorPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CoordinatorRemote, CoordinatorPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    requestGlobalMemoryDump: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(dumpType: DumpType, levelOfDetail: LevelOfDetail, determinism: Determinism, allocatorDumpNames: string[]) => any>;
    requestGlobalMemoryDumpForPid: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pid: mojoBase_mojom_ProcessId, allocatorDumpNames: string[]) => any>;
    requestPrivateMemoryFootprint: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pid: mojoBase_mojom_ProcessId) => any>;
    requestGlobalMemoryDumpAndAppendToTrace: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(dumpType: DumpType, levelOfDetail: LevelOfDetail, determinism: Determinism) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CoordinatorConnectorPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CoordinatorConnectorPendingReceiver>;
export declare class CoordinatorConnectorPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CoordinatorConnector> {
    handle: mojo.internal.interfaceSupport.Endpoint<CoordinatorConnectorPendingReceiver>;
    constructor(handle: MojoHandle | CoordinatorConnectorPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CoordinatorConnectorInterface {
    registerCoordinatorClient(receiver: CoordinatorPendingReceiver, clientProcess: ClientProcessRemote): void;
}
export declare class CoordinatorConnectorRemote implements CoordinatorConnectorInterface, mojo.internal.interfaceSupport.InterfaceRemote<CoordinatorConnectorPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CoordinatorConnectorPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CoordinatorConnectorPendingReceiverEndpoint);
    registerCoordinatorClient(receiver: CoordinatorPendingReceiver, clientProcess: ClientProcessRemote): void;
}
/**
 * An object which receives request messages for the CoordinatorConnector
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CoordinatorConnectorReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CoordinatorConnectorRemote, CoordinatorConnectorPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CoordinatorConnectorRemote, CoordinatorConnectorPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CoordinatorConnectorInterface);
}
export declare class CoordinatorConnector {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CoordinatorConnectorRemote;
}
/**
 * An object which receives request messages for the CoordinatorConnector
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CoordinatorConnectorCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CoordinatorConnectorRemote, CoordinatorConnectorPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CoordinatorConnectorRemote, CoordinatorConnectorPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    registerCoordinatorClient: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: CoordinatorPendingReceiver, clientProcess: ClientProcessRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const RequestArgsSpec: {
    $: mojo.internal.MojomType;
};
export declare const RawAllocatorDumpEdgeSpec: {
    $: mojo.internal.MojomType;
};
export declare const RawAllocatorDumpEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare const RawAllocatorDumpSpec: {
    $: mojo.internal.MojomType;
};
export declare const RawProcessMemoryDumpSpec: {
    $: mojo.internal.MojomType;
};
export declare const VmRegionSpec: {
    $: mojo.internal.MojomType;
};
export declare const PlatformPrivateFootprintSpec: {
    $: mojo.internal.MojomType;
};
export declare const RawOSMemDumpSpec: {
    $: mojo.internal.MojomType;
};
export declare const OSMemDumpSpec: {
    $: mojo.internal.MojomType;
};
export declare const AllocatorMemDumpSpec: {
    $: mojo.internal.MojomType;
};
export declare const ProcessMemoryDumpSpec: {
    $: mojo.internal.MojomType;
};
export declare const AggregatedMetricsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlobalMemoryDumpSpec: {
    $: mojo.internal.MojomType;
};
export declare const ClientProcess_RequestChromeMemoryDump_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ClientProcess_RequestChromeMemoryDump_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ClientProcess_RequestOSMemoryDump_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ClientProcess_RequestOSMemoryDump_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Coordinator_RequestGlobalMemoryDump_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Coordinator_RequestGlobalMemoryDump_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Coordinator_RequestGlobalMemoryDumpForPid_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Coordinator_RequestPrivateMemoryFootprint_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Coordinator_RequestPrivateMemoryFootprint_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CoordinatorConnector_RegisterCoordinatorClient_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const RawAllocatorDumpEntryValueSpec: {
    $: mojo.internal.MojomType;
};
export declare interface RequestArgsMojoType {
    dumpGuid: bigint;
    dumpType: DumpType;
    levelOfDetail: LevelOfDetail;
    determinism: Determinism;
}
export type RequestArgs = RequestArgsMojoType;
export declare interface RawAllocatorDumpEdgeMojoType {
    sourceId: bigint;
    targetId: bigint;
    importance: number;
    overridable: boolean;
}
export type RawAllocatorDumpEdge = RawAllocatorDumpEdgeMojoType;
export declare interface RawAllocatorDumpEntryMojoType {
    name: string;
    units: string;
    value: RawAllocatorDumpEntryValue;
}
export type RawAllocatorDumpEntry = RawAllocatorDumpEntryMojoType;
export declare interface RawAllocatorDumpMojoType {
    id: bigint;
    absoluteName: string;
    weak: boolean;
    levelOfDetail: LevelOfDetail;
    entries: RawAllocatorDumpEntry[];
}
export type RawAllocatorDump = RawAllocatorDumpMojoType;
export declare interface RawProcessMemoryDumpMojoType {
    levelOfDetail: LevelOfDetail;
    allocatorDumpEdges: RawAllocatorDumpEdge[];
    allocatorDumps: RawAllocatorDump[];
}
export type RawProcessMemoryDump = RawProcessMemoryDumpMojoType;
export declare const VmRegion_PROTECTION_FLAGS_READ: number;
export declare const VmRegion_PROTECTION_FLAGS_WRITE: number;
export declare const VmRegion_PROTECTION_FLAGS_EXEC: number;
export declare const VmRegion_PROTECTION_FLAGS_MAYSHARE: number;
export declare interface VmRegionMojoType {
    startAddress: bigint;
    sizeInBytes: bigint;
    moduleTimestamp: bigint;
    moduleDebugid: string;
    moduleDebugPath: string;
    protectionFlags: number;
    mappedFile: string;
    byteStatsPrivateDirtyResident: bigint;
    byteStatsPrivateCleanResident: bigint;
    byteStatsSharedDirtyResident: bigint;
    byteStatsSharedCleanResident: bigint;
    byteStatsSwapped: bigint;
    byteLocked: bigint;
    byteStatsProportionalResident: bigint;
}
export type VmRegion = VmRegionMojoType;
export declare interface PlatformPrivateFootprintMojoType {
    physFootprintBytes: bigint;
    internalBytes: bigint;
    compressedBytes: bigint;
    rssAnonBytes: bigint;
    vmSwapBytes: bigint;
    privateBytes: bigint;
}
export type PlatformPrivateFootprint = PlatformPrivateFootprintMojoType;
export declare interface RawOSMemDumpMojoType {
    residentSetKb: number;
    peakResidentSetKb: number;
    isPeakRssResettable: boolean;
    platformPrivateFootprint: PlatformPrivateFootprint;
    memoryMaps: VmRegion[];
    nativeLibraryPagesBitmap: number[];
}
export type RawOSMemDump = RawOSMemDumpMojoType;
export declare interface OSMemDumpMojoType {
    residentSetKb: number;
    peakResidentSetKb: number;
    isPeakRssResettable: boolean;
    privateFootprintKb: number;
    sharedFootprintKb: number;
}
export type OSMemDump = OSMemDumpMojoType;
export declare interface AllocatorMemDumpMojoType {
    numericEntries: {
        [key: string]: bigint;
    };
    children: {
        [key: string]: AllocatorMemDump;
    };
}
export type AllocatorMemDump = AllocatorMemDumpMojoType;
export declare interface ProcessMemoryDumpMojoType {
    processType: ProcessType;
    osDump: OSMemDump;
    chromeAllocatorDumps: {
        [key: string]: AllocatorMemDump;
    };
    pid: mojoBase_mojom_ProcessId;
    serviceName: (string | null);
}
export type ProcessMemoryDump = ProcessMemoryDumpMojoType;
export declare interface AggregatedMetricsMojoType {
    nativeLibraryResidentKb: number;
    nativeLibraryResidentNotOrderedKb: number;
    nativeLibraryNotResidentOrderedKb: number;
}
export type AggregatedMetrics = AggregatedMetricsMojoType;
export declare interface GlobalMemoryDumpMojoType {
    startTime: mojoBase_mojom_TimeTicks;
    processDumps: ProcessMemoryDump[];
    aggregatedMetrics: AggregatedMetrics;
}
export type GlobalMemoryDump = GlobalMemoryDumpMojoType;
export declare interface ClientProcess_RequestChromeMemoryDump_ParamsMojoType {
    args: RequestArgs;
}
export type ClientProcess_RequestChromeMemoryDump_Params = ClientProcess_RequestChromeMemoryDump_ParamsMojoType;
export declare interface ClientProcess_RequestChromeMemoryDump_ResponseParamsMojoType {
    outcome: RequestOutcome;
    dumpId: bigint;
    rawProcessMemoryDump: (RawProcessMemoryDump | null);
}
export type ClientProcess_RequestChromeMemoryDump_ResponseParams = ClientProcess_RequestChromeMemoryDump_ResponseParamsMojoType;
export declare interface ClientProcess_RequestOSMemoryDump_ParamsMojoType {
    option: MemoryMapOption;
    flags: MemDumpFlags[];
    pids: mojoBase_mojom_ProcessId[];
}
export type ClientProcess_RequestOSMemoryDump_Params = ClientProcess_RequestOSMemoryDump_ParamsMojoType;
export declare interface ClientProcess_RequestOSMemoryDump_ResponseParamsMojoType {
    outcome: RequestOutcome;
    dumps: Map<mojoBase_mojom_ProcessId, RawOSMemDump>;
}
export type ClientProcess_RequestOSMemoryDump_ResponseParams = ClientProcess_RequestOSMemoryDump_ResponseParamsMojoType;
export declare interface Coordinator_RequestGlobalMemoryDump_ParamsMojoType {
    dumpType: DumpType;
    levelOfDetail: LevelOfDetail;
    determinism: Determinism;
    allocatorDumpNames: string[];
}
export type Coordinator_RequestGlobalMemoryDump_Params = Coordinator_RequestGlobalMemoryDump_ParamsMojoType;
export declare interface Coordinator_RequestGlobalMemoryDump_ResponseParamsMojoType {
    outcome: RequestOutcome;
    globalMemoryDump: (GlobalMemoryDump | null);
}
export type Coordinator_RequestGlobalMemoryDump_ResponseParams = Coordinator_RequestGlobalMemoryDump_ResponseParamsMojoType;
export declare interface Coordinator_RequestGlobalMemoryDumpForPid_ParamsMojoType {
    pid: mojoBase_mojom_ProcessId;
    allocatorDumpNames: string[];
}
export type Coordinator_RequestGlobalMemoryDumpForPid_Params = Coordinator_RequestGlobalMemoryDumpForPid_ParamsMojoType;
export declare interface Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsMojoType {
    outcome: RequestOutcome;
    globalMemoryDump: (GlobalMemoryDump | null);
}
export type Coordinator_RequestGlobalMemoryDumpForPid_ResponseParams = Coordinator_RequestGlobalMemoryDumpForPid_ResponseParamsMojoType;
export declare interface Coordinator_RequestPrivateMemoryFootprint_ParamsMojoType {
    pid: mojoBase_mojom_ProcessId;
}
export type Coordinator_RequestPrivateMemoryFootprint_Params = Coordinator_RequestPrivateMemoryFootprint_ParamsMojoType;
export declare interface Coordinator_RequestPrivateMemoryFootprint_ResponseParamsMojoType {
    outcome: RequestOutcome;
    globalMemoryDump: (GlobalMemoryDump | null);
}
export type Coordinator_RequestPrivateMemoryFootprint_ResponseParams = Coordinator_RequestPrivateMemoryFootprint_ResponseParamsMojoType;
export declare interface Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsMojoType {
    dumpType: DumpType;
    levelOfDetail: LevelOfDetail;
    determinism: Determinism;
}
export type Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_Params = Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ParamsMojoType;
export declare interface Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsMojoType {
    outcome: RequestOutcome;
    dumpId: bigint;
}
export type Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParams = Coordinator_RequestGlobalMemoryDumpAndAppendToTrace_ResponseParamsMojoType;
export declare interface CoordinatorConnector_RegisterCoordinatorClient_ParamsMojoType {
    receiver: CoordinatorPendingReceiver;
    clientProcess: ClientProcessRemote;
}
export type CoordinatorConnector_RegisterCoordinatorClient_Params = CoordinatorConnector_RegisterCoordinatorClient_ParamsMojoType;
export declare interface RawAllocatorDumpEntryValue {
    valueUint64?: bigint;
    valueString?: string;
}
export declare enum RawAllocatorDumpEntryValueFieldTags {
    VALUE_UINT64 = 0,
    VALUE_STRING = 1
}
export declare function whichRawAllocatorDumpEntryValue(u: RawAllocatorDumpEntryValue): RawAllocatorDumpEntryValueFieldTags;
