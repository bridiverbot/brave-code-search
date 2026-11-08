import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { EventDispositionFlag as browserControlsApi_mojom_EventDispositionFlag } from './browser_controls_api_data_model.mojom-webui.js';
import { Empty as mojoBase_mojom_Empty } from '//resources/mojo/mojo/public/mojom/base/empty.mojom-webui.js';
import { Error as mojoBase_mojom_Error } from '//resources/mojo/mojo/public/mojom/base/error.mojom-webui.js';
import { TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ReloadInputTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ReloadInputType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnspecified = 0,
    kMouseRelease = 1,
    kKeyPress = 2
}
export type BrowserControlsServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BrowserControlsServicePendingReceiver>;
export declare class BrowserControlsServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BrowserControlsService> {
    handle: mojo.internal.interfaceSupport.Endpoint<BrowserControlsServicePendingReceiver>;
    constructor(handle: MojoHandle | BrowserControlsServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BrowserControlsServiceInterface {
    stopLoad(): Promise<mojoBase_mojom_Empty>;
    reloadFromClick(bypassCache: boolean, clickFlags: browserControlsApi_mojom_EventDispositionFlag[], metadata: (ReloadInteractionMetadata | null)): Promise<mojoBase_mojom_Empty>;
    splitActiveTab(): Promise<mojoBase_mojom_Empty>;
    back(flags: browserControlsApi_mojom_EventDispositionFlag[]): Promise<mojoBase_mojom_Empty>;
    forward(flags: browserControlsApi_mojom_EventDispositionFlag[]): Promise<mojoBase_mojom_Empty>;
    backButtonHovered(): Promise<mojoBase_mojom_Empty>;
    navigateHome(clickFlags: browserControlsApi_mojom_EventDispositionFlag[]): Promise<mojoBase_mojom_Empty>;
    navigate(url: url_mojom_Url): Promise<mojoBase_mojom_Empty>;
    navigateText(text: string): Promise<mojoBase_mojom_Empty>;
}
export declare class BrowserControlsServiceRemote implements BrowserControlsServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<BrowserControlsServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BrowserControlsServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BrowserControlsServicePendingReceiverEndpoint);
    stopLoad(): Promise<mojoBase_mojom_Empty>;
    reloadFromClick(bypassCache: boolean, clickFlags: browserControlsApi_mojom_EventDispositionFlag[], metadata: (ReloadInteractionMetadata | null)): Promise<mojoBase_mojom_Empty>;
    splitActiveTab(): Promise<mojoBase_mojom_Empty>;
    back(flags: browserControlsApi_mojom_EventDispositionFlag[]): Promise<mojoBase_mojom_Empty>;
    forward(flags: browserControlsApi_mojom_EventDispositionFlag[]): Promise<mojoBase_mojom_Empty>;
    backButtonHovered(): Promise<mojoBase_mojom_Empty>;
    navigateHome(clickFlags: browserControlsApi_mojom_EventDispositionFlag[]): Promise<mojoBase_mojom_Empty>;
    navigate(url: url_mojom_Url): Promise<mojoBase_mojom_Empty>;
    navigateText(text: string): Promise<mojoBase_mojom_Empty>;
}
/**
 * An object which receives request messages for the BrowserControlsService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BrowserControlsServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BrowserControlsServiceRemote, BrowserControlsServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BrowserControlsServiceRemote, BrowserControlsServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BrowserControlsServiceInterface);
}
export declare class BrowserControlsService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BrowserControlsServiceRemote;
}
/**
 * An object which receives request messages for the BrowserControlsService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BrowserControlsServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BrowserControlsServiceRemote, BrowserControlsServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BrowserControlsServiceRemote, BrowserControlsServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    stopLoad: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    reloadFromClick: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(bypassCache: boolean, clickFlags: browserControlsApi_mojom_EventDispositionFlag[], metadata: (ReloadInteractionMetadata | null)) => any>;
    splitActiveTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    back: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(flags: browserControlsApi_mojom_EventDispositionFlag[]) => any>;
    forward: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(flags: browserControlsApi_mojom_EventDispositionFlag[]) => any>;
    backButtonHovered: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    navigateHome: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clickFlags: browserControlsApi_mojom_EventDispositionFlag[]) => any>;
    navigate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    navigateText: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ReloadInteractionMetadataSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_StopLoad_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_StopLoad_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_ReloadFromClick_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_ReloadFromClick_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_SplitActiveTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_SplitActiveTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_Back_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_Back_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_Forward_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_Forward_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_BackButtonHovered_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_BackButtonHovered_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_NavigateHome_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_NavigateHome_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_Navigate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_Navigate_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_NavigateText_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_NavigateText_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_StopLoad_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_ReloadFromClick_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_SplitActiveTab_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_Back_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_Forward_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_BackButtonHovered_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_NavigateHome_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_Navigate_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserControlsService_NavigateText_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ReloadInteractionMetadataMojoType {
    interactionTimeOffset: mojoBase_mojom_TimeDelta;
    inputType: ReloadInputType;
}
export type ReloadInteractionMetadata = ReloadInteractionMetadataMojoType;
export declare interface BrowserControlsService_StopLoad_ParamsMojoType {
}
export type BrowserControlsService_StopLoad_Params = BrowserControlsService_StopLoad_ParamsMojoType;
export declare interface BrowserControlsService_StopLoad_ResponseParamsMojoType {
    result: BrowserControlsService_StopLoad_ResponseParam_Result;
}
export type BrowserControlsService_StopLoad_ResponseParams = BrowserControlsService_StopLoad_ResponseParamsMojoType;
export declare interface BrowserControlsService_ReloadFromClick_ParamsMojoType {
    bypassCache: boolean;
    clickFlags: browserControlsApi_mojom_EventDispositionFlag[];
    metadata: (ReloadInteractionMetadata | null);
}
export type BrowserControlsService_ReloadFromClick_Params = BrowserControlsService_ReloadFromClick_ParamsMojoType;
export declare interface BrowserControlsService_ReloadFromClick_ResponseParamsMojoType {
    result: BrowserControlsService_ReloadFromClick_ResponseParam_Result;
}
export type BrowserControlsService_ReloadFromClick_ResponseParams = BrowserControlsService_ReloadFromClick_ResponseParamsMojoType;
export declare interface BrowserControlsService_SplitActiveTab_ParamsMojoType {
}
export type BrowserControlsService_SplitActiveTab_Params = BrowserControlsService_SplitActiveTab_ParamsMojoType;
export declare interface BrowserControlsService_SplitActiveTab_ResponseParamsMojoType {
    result: BrowserControlsService_SplitActiveTab_ResponseParam_Result;
}
export type BrowserControlsService_SplitActiveTab_ResponseParams = BrowserControlsService_SplitActiveTab_ResponseParamsMojoType;
export declare interface BrowserControlsService_Back_ParamsMojoType {
    flags: browserControlsApi_mojom_EventDispositionFlag[];
}
export type BrowserControlsService_Back_Params = BrowserControlsService_Back_ParamsMojoType;
export declare interface BrowserControlsService_Back_ResponseParamsMojoType {
    result: BrowserControlsService_Back_ResponseParam_Result;
}
export type BrowserControlsService_Back_ResponseParams = BrowserControlsService_Back_ResponseParamsMojoType;
export declare interface BrowserControlsService_Forward_ParamsMojoType {
    flags: browserControlsApi_mojom_EventDispositionFlag[];
}
export type BrowserControlsService_Forward_Params = BrowserControlsService_Forward_ParamsMojoType;
export declare interface BrowserControlsService_Forward_ResponseParamsMojoType {
    result: BrowserControlsService_Forward_ResponseParam_Result;
}
export type BrowserControlsService_Forward_ResponseParams = BrowserControlsService_Forward_ResponseParamsMojoType;
export declare interface BrowserControlsService_BackButtonHovered_ParamsMojoType {
}
export type BrowserControlsService_BackButtonHovered_Params = BrowserControlsService_BackButtonHovered_ParamsMojoType;
export declare interface BrowserControlsService_BackButtonHovered_ResponseParamsMojoType {
    result: BrowserControlsService_BackButtonHovered_ResponseParam_Result;
}
export type BrowserControlsService_BackButtonHovered_ResponseParams = BrowserControlsService_BackButtonHovered_ResponseParamsMojoType;
export declare interface BrowserControlsService_NavigateHome_ParamsMojoType {
    clickFlags: browserControlsApi_mojom_EventDispositionFlag[];
}
export type BrowserControlsService_NavigateHome_Params = BrowserControlsService_NavigateHome_ParamsMojoType;
export declare interface BrowserControlsService_NavigateHome_ResponseParamsMojoType {
    result: BrowserControlsService_NavigateHome_ResponseParam_Result;
}
export type BrowserControlsService_NavigateHome_ResponseParams = BrowserControlsService_NavigateHome_ResponseParamsMojoType;
export declare interface BrowserControlsService_Navigate_ParamsMojoType {
    url: url_mojom_Url;
}
export type BrowserControlsService_Navigate_Params = BrowserControlsService_Navigate_ParamsMojoType;
export declare interface BrowserControlsService_Navigate_ResponseParamsMojoType {
    result: BrowserControlsService_Navigate_ResponseParam_Result;
}
export type BrowserControlsService_Navigate_ResponseParams = BrowserControlsService_Navigate_ResponseParamsMojoType;
export declare interface BrowserControlsService_NavigateText_ParamsMojoType {
    text: string;
}
export type BrowserControlsService_NavigateText_Params = BrowserControlsService_NavigateText_ParamsMojoType;
export declare interface BrowserControlsService_NavigateText_ResponseParamsMojoType {
    result: BrowserControlsService_NavigateText_ResponseParam_Result;
}
export type BrowserControlsService_NavigateText_ResponseParams = BrowserControlsService_NavigateText_ResponseParamsMojoType;
export declare interface BrowserControlsService_StopLoad_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BrowserControlsService_StopLoad_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBrowserControlsService_StopLoad_ResponseParam_Result(u: BrowserControlsService_StopLoad_ResponseParam_Result): BrowserControlsService_StopLoad_ResponseParam_ResultFieldTags;
export declare interface BrowserControlsService_ReloadFromClick_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BrowserControlsService_ReloadFromClick_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBrowserControlsService_ReloadFromClick_ResponseParam_Result(u: BrowserControlsService_ReloadFromClick_ResponseParam_Result): BrowserControlsService_ReloadFromClick_ResponseParam_ResultFieldTags;
export declare interface BrowserControlsService_SplitActiveTab_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BrowserControlsService_SplitActiveTab_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBrowserControlsService_SplitActiveTab_ResponseParam_Result(u: BrowserControlsService_SplitActiveTab_ResponseParam_Result): BrowserControlsService_SplitActiveTab_ResponseParam_ResultFieldTags;
export declare interface BrowserControlsService_Back_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BrowserControlsService_Back_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBrowserControlsService_Back_ResponseParam_Result(u: BrowserControlsService_Back_ResponseParam_Result): BrowserControlsService_Back_ResponseParam_ResultFieldTags;
export declare interface BrowserControlsService_Forward_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BrowserControlsService_Forward_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBrowserControlsService_Forward_ResponseParam_Result(u: BrowserControlsService_Forward_ResponseParam_Result): BrowserControlsService_Forward_ResponseParam_ResultFieldTags;
export declare interface BrowserControlsService_BackButtonHovered_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BrowserControlsService_BackButtonHovered_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBrowserControlsService_BackButtonHovered_ResponseParam_Result(u: BrowserControlsService_BackButtonHovered_ResponseParam_Result): BrowserControlsService_BackButtonHovered_ResponseParam_ResultFieldTags;
export declare interface BrowserControlsService_NavigateHome_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BrowserControlsService_NavigateHome_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBrowserControlsService_NavigateHome_ResponseParam_Result(u: BrowserControlsService_NavigateHome_ResponseParam_Result): BrowserControlsService_NavigateHome_ResponseParam_ResultFieldTags;
export declare interface BrowserControlsService_Navigate_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BrowserControlsService_Navigate_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBrowserControlsService_Navigate_ResponseParam_Result(u: BrowserControlsService_Navigate_ResponseParam_Result): BrowserControlsService_Navigate_ResponseParam_ResultFieldTags;
export declare interface BrowserControlsService_NavigateText_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BrowserControlsService_NavigateText_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBrowserControlsService_NavigateText_ResponseParam_Result(u: BrowserControlsService_NavigateText_ResponseParam_Result): BrowserControlsService_NavigateText_ResponseParam_ResultFieldTags;
