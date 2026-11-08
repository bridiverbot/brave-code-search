import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { BigBuffer as mojoBase_mojom_BigBuffer } from '//resources/mojo/mojo/public/mojom/base/big_buffer.mojom-webui.js';
import { FilePath as mojoBase_mojom_FilePath } from '//resources/mojo/mojo/public/mojom/base/file_path.mojom-webui.js';
import { JSTime as mojoBase_mojom_JSTime } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
export declare const ShowDirectoryTargetSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ShowDirectoryTarget {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kSystemUpdater = 0,
    kUserUpdater = 1,
    kEnterpriseCompanionApp = 2
}
export declare const HistoryFilterSpec: {
    $: mojo.internal.MojomType;
};
export declare enum HistoryFilter {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kApp = 0,
    kEvent = 1,
    kOutcome = 2,
    kDate = 3,
    kScope = 4,
    kAll = 5
}
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(handler: PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: PageHandlerPendingReceiver): void;
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
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: PageHandlerPendingReceiver) => any>;
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
    getAllUpdaterEvents(): Promise<{
        events: string[];
    }>;
    getUpdaterStates(): Promise<GetUpdaterStatesResponse>;
    getEnterpriseCompanionState(): Promise<GetEnterpriseCompanionStateResponse>;
    getAppStates(): Promise<GetAppStatesResponse>;
    showDirectory(scope: ShowDirectoryTarget): void;
    recordFilterChange(filter: HistoryFilter): void;
    unzipUpdaterHistoryFiles(zipData: mojoBase_mojom_BigBuffer): Promise<UnzipUpdaterHistoryFilesResponse>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getAllUpdaterEvents(): Promise<{
        events: string[];
    }>;
    getUpdaterStates(): Promise<GetUpdaterStatesResponse>;
    getEnterpriseCompanionState(): Promise<GetEnterpriseCompanionStateResponse>;
    getAppStates(): Promise<GetAppStatesResponse>;
    showDirectory(scope: ShowDirectoryTarget): void;
    recordFilterChange(filter: HistoryFilter): void;
    unzipUpdaterHistoryFiles(zipData: mojoBase_mojom_BigBuffer): Promise<UnzipUpdaterHistoryFilesResponse>;
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
    getAllUpdaterEvents: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getUpdaterStates: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getEnterpriseCompanionState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getAppStates: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showDirectory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(scope: ShowDirectoryTarget) => any>;
    recordFilterChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(filter: HistoryFilter) => any>;
    unzipUpdaterHistoryFiles: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(zipData: mojoBase_mojom_BigBuffer) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const UpdaterStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetUpdaterStatesResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetUpdaterStatesErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const EnterpriseCompanionStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetEnterpriseCompanionStateResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetEnterpriseCompanionStateErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const AppStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetAppStatesResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetAppStatesErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const UnzipUpdaterHistoryFilesResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const UnzipUpdaterHistoryFilesErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAllUpdaterEvents_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAllUpdaterEvents_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetUpdaterStates_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetUpdaterStates_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetEnterpriseCompanionState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetEnterpriseCompanionState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAppStates_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAppStates_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowDirectory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordFilterChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UnzipUpdaterHistoryFiles_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UnzipUpdaterHistoryFiles_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetUpdaterStates_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetEnterpriseCompanionState_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAppStates_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UnzipUpdaterHistoryFiles_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface UpdaterStateMojoType {
    activeVersion: string;
    inactiveVersions: string[];
    lastChecked: (mojoBase_mojom_JSTime | null);
    lastStarted: (mojoBase_mojom_JSTime | null);
    installationDirectory: mojoBase_mojom_FilePath;
    policies: string;
}
export type UpdaterState = UpdaterStateMojoType;
export declare interface GetUpdaterStatesResponseMojoType {
    system: (UpdaterState | null);
    user: (UpdaterState | null);
}
export type GetUpdaterStatesResponse = GetUpdaterStatesResponseMojoType;
export declare interface GetUpdaterStatesErrorMojoType {
    message: string;
}
export type GetUpdaterStatesError = GetUpdaterStatesErrorMojoType;
export declare interface EnterpriseCompanionStateMojoType {
    version: string;
    installationDirectory: mojoBase_mojom_FilePath;
}
export type EnterpriseCompanionState = EnterpriseCompanionStateMojoType;
export declare interface GetEnterpriseCompanionStateResponseMojoType {
    state: (EnterpriseCompanionState | null);
}
export type GetEnterpriseCompanionStateResponse = GetEnterpriseCompanionStateResponseMojoType;
export declare interface GetEnterpriseCompanionStateErrorMojoType {
    message: string;
}
export type GetEnterpriseCompanionStateError = GetEnterpriseCompanionStateErrorMojoType;
export declare interface AppStateMojoType {
    appId: string;
    version: string;
    cohort: (string | null);
}
export type AppState = AppStateMojoType;
export declare interface GetAppStatesResponseMojoType {
    systemApps: AppState[];
    userApps: AppState[];
}
export type GetAppStatesResponse = GetAppStatesResponseMojoType;
export declare interface GetAppStatesErrorMojoType {
    message: string;
}
export type GetAppStatesError = GetAppStatesErrorMojoType;
export declare interface UnzipUpdaterHistoryFilesResponseMojoType {
    historyFileContents: string[];
}
export type UnzipUpdaterHistoryFilesResponse = UnzipUpdaterHistoryFilesResponseMojoType;
export declare interface UnzipUpdaterHistoryFilesErrorMojoType {
    message: string;
}
export type UnzipUpdaterHistoryFilesError = UnzipUpdaterHistoryFilesErrorMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_GetAllUpdaterEvents_ParamsMojoType {
}
export type PageHandler_GetAllUpdaterEvents_Params = PageHandler_GetAllUpdaterEvents_ParamsMojoType;
export declare interface PageHandler_GetAllUpdaterEvents_ResponseParamsMojoType {
    events: string[];
}
export type PageHandler_GetAllUpdaterEvents_ResponseParams = PageHandler_GetAllUpdaterEvents_ResponseParamsMojoType;
export declare interface PageHandler_GetUpdaterStates_ParamsMojoType {
}
export type PageHandler_GetUpdaterStates_Params = PageHandler_GetUpdaterStates_ParamsMojoType;
export declare interface PageHandler_GetUpdaterStates_ResponseParamsMojoType {
    result: PageHandler_GetUpdaterStates_ResponseParam_Result;
}
export type PageHandler_GetUpdaterStates_ResponseParams = PageHandler_GetUpdaterStates_ResponseParamsMojoType;
export declare interface PageHandler_GetEnterpriseCompanionState_ParamsMojoType {
}
export type PageHandler_GetEnterpriseCompanionState_Params = PageHandler_GetEnterpriseCompanionState_ParamsMojoType;
export declare interface PageHandler_GetEnterpriseCompanionState_ResponseParamsMojoType {
    result: PageHandler_GetEnterpriseCompanionState_ResponseParam_Result;
}
export type PageHandler_GetEnterpriseCompanionState_ResponseParams = PageHandler_GetEnterpriseCompanionState_ResponseParamsMojoType;
export declare interface PageHandler_GetAppStates_ParamsMojoType {
}
export type PageHandler_GetAppStates_Params = PageHandler_GetAppStates_ParamsMojoType;
export declare interface PageHandler_GetAppStates_ResponseParamsMojoType {
    result: PageHandler_GetAppStates_ResponseParam_Result;
}
export type PageHandler_GetAppStates_ResponseParams = PageHandler_GetAppStates_ResponseParamsMojoType;
export declare interface PageHandler_ShowDirectory_ParamsMojoType {
    scope: ShowDirectoryTarget;
}
export type PageHandler_ShowDirectory_Params = PageHandler_ShowDirectory_ParamsMojoType;
export declare interface PageHandler_RecordFilterChange_ParamsMojoType {
    filter: HistoryFilter;
}
export type PageHandler_RecordFilterChange_Params = PageHandler_RecordFilterChange_ParamsMojoType;
export declare interface PageHandler_UnzipUpdaterHistoryFiles_ParamsMojoType {
    zipData: mojoBase_mojom_BigBuffer;
}
export type PageHandler_UnzipUpdaterHistoryFiles_Params = PageHandler_UnzipUpdaterHistoryFiles_ParamsMojoType;
export declare interface PageHandler_UnzipUpdaterHistoryFiles_ResponseParamsMojoType {
    result: PageHandler_UnzipUpdaterHistoryFiles_ResponseParam_Result;
}
export type PageHandler_UnzipUpdaterHistoryFiles_ResponseParams = PageHandler_UnzipUpdaterHistoryFiles_ResponseParamsMojoType;
export declare interface PageHandler_GetUpdaterStates_ResponseParam_Result {
    success?: GetUpdaterStatesResponse;
    failure?: GetUpdaterStatesError;
}
export declare enum PageHandler_GetUpdaterStates_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_GetUpdaterStates_ResponseParam_Result(u: PageHandler_GetUpdaterStates_ResponseParam_Result): PageHandler_GetUpdaterStates_ResponseParam_ResultFieldTags;
export declare interface PageHandler_GetEnterpriseCompanionState_ResponseParam_Result {
    success?: GetEnterpriseCompanionStateResponse;
    failure?: GetEnterpriseCompanionStateError;
}
export declare enum PageHandler_GetEnterpriseCompanionState_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_GetEnterpriseCompanionState_ResponseParam_Result(u: PageHandler_GetEnterpriseCompanionState_ResponseParam_Result): PageHandler_GetEnterpriseCompanionState_ResponseParam_ResultFieldTags;
export declare interface PageHandler_GetAppStates_ResponseParam_Result {
    success?: GetAppStatesResponse;
    failure?: GetAppStatesError;
}
export declare enum PageHandler_GetAppStates_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_GetAppStates_ResponseParam_Result(u: PageHandler_GetAppStates_ResponseParam_Result): PageHandler_GetAppStates_ResponseParam_ResultFieldTags;
export declare interface PageHandler_UnzipUpdaterHistoryFiles_ResponseParam_Result {
    success?: UnzipUpdaterHistoryFilesResponse;
    failure?: UnzipUpdaterHistoryFilesError;
}
export declare enum PageHandler_UnzipUpdaterHistoryFiles_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_UnzipUpdaterHistoryFiles_ResponseParam_Result(u: PageHandler_UnzipUpdaterHistoryFiles_ResponseParam_Result): PageHandler_UnzipUpdaterHistoryFiles_ResponseParam_ResultFieldTags;
export type BrowserProxy = MojoHandlerProxy<PageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<PageHandlerInterface, PageHandlerPendingReceiver, PageHandlerRemote>;
