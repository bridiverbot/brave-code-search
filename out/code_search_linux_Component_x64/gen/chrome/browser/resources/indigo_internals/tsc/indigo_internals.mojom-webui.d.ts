import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
export declare const LocalEligibilitySpec: {
    $: mojo.internal.MojomType;
};
export declare enum LocalEligibility {
    MIN_VALUE = 0,
    MAX_VALUE = 8,
    kEligible = 0,
    kNotSignedIn = 1,
    kRefreshTokenInPersistentErrorState = 2,
    kMissingCapabilities = 3,
    kDisabledByPolicy = 4,
    kMissingScript = 5,
    kManagedDomain = 6,
    kGlicDisabledForProfile = 7,
    kEnterpriseDisallowed = 8
}
export declare const OptimizationGuideStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum OptimizationGuideStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDisabled = 0,
    kNotPermitted = 1,
    kEnabled = 2
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
    getLocalEligibility(): Promise<{
        status: LocalEligibility;
    }>;
    getCombinedEligibility(): Promise<{
        status: CombinedEligibility;
    }>;
    getOptimizationGuideStatus(): Promise<{
        status: OptimizationGuideStatus;
    }>;
    getGlicPromptInfo(): Promise<{
        info: GlicPromptInfo;
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getLocalEligibility(): Promise<{
        status: LocalEligibility;
    }>;
    getCombinedEligibility(): Promise<{
        status: CombinedEligibility;
    }>;
    getOptimizationGuideStatus(): Promise<{
        status: OptimizationGuideStatus;
    }>;
    getGlicPromptInfo(): Promise<{
        info: GlicPromptInfo;
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
    getLocalEligibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getCombinedEligibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getOptimizationGuideStatus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getGlicPromptInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
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
    onLocalEligibilityChanged(status: LocalEligibility): void;
    onOptimizationGuideStatusChanged(status: OptimizationGuideStatus): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onLocalEligibilityChanged(status: LocalEligibility): void;
    onOptimizationGuideStatusChanged(status: OptimizationGuideStatus): void;
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
    onLocalEligibilityChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(status: LocalEligibility) => any>;
    onOptimizationGuideStatusChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(status: OptimizationGuideStatus) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const RemoteEligibilitySpec: {
    $: mojo.internal.MojomType;
};
export declare const IndigoPromptSpec: {
    $: mojo.internal.MojomType;
};
export declare const CombinedEligibilitySpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicPromptInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetLocalEligibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetLocalEligibility_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetCombinedEligibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetCombinedEligibility_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetOptimizationGuideStatus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetOptimizationGuideStatus_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetGlicPromptInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetGlicPromptInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnLocalEligibilityChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnOptimizationGuideStatusChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface RemoteEligibilityMojoType {
    isServiceSupportedForAccount: boolean;
    hasUserImage: boolean;
}
export type RemoteEligibility = RemoteEligibilityMojoType;
export declare interface IndigoPromptMojoType {
    key: string;
    prompt: string;
}
export type IndigoPrompt = IndigoPromptMojoType;
export declare interface CombinedEligibilityMojoType {
    localEligibility: LocalEligibility;
    canGenerateImage: boolean;
    readyToOnboard: boolean;
    hasOnboardedPref: boolean;
    remoteEligibility: (RemoteEligibility | null);
}
export type CombinedEligibility = CombinedEligibilityMojoType;
export declare interface GlicPromptInfoMojoType {
    integrationEnabled: boolean;
    currentKey: string;
    overridePrompt: string;
    skillId: string;
    skillName: string;
    loadedPrompts: IndigoPrompt[];
}
export type GlicPromptInfo = GlicPromptInfoMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_GetLocalEligibility_ParamsMojoType {
}
export type PageHandler_GetLocalEligibility_Params = PageHandler_GetLocalEligibility_ParamsMojoType;
export declare interface PageHandler_GetLocalEligibility_ResponseParamsMojoType {
    status: LocalEligibility;
}
export type PageHandler_GetLocalEligibility_ResponseParams = PageHandler_GetLocalEligibility_ResponseParamsMojoType;
export declare interface PageHandler_GetCombinedEligibility_ParamsMojoType {
}
export type PageHandler_GetCombinedEligibility_Params = PageHandler_GetCombinedEligibility_ParamsMojoType;
export declare interface PageHandler_GetCombinedEligibility_ResponseParamsMojoType {
    status: CombinedEligibility;
}
export type PageHandler_GetCombinedEligibility_ResponseParams = PageHandler_GetCombinedEligibility_ResponseParamsMojoType;
export declare interface PageHandler_GetOptimizationGuideStatus_ParamsMojoType {
}
export type PageHandler_GetOptimizationGuideStatus_Params = PageHandler_GetOptimizationGuideStatus_ParamsMojoType;
export declare interface PageHandler_GetOptimizationGuideStatus_ResponseParamsMojoType {
    status: OptimizationGuideStatus;
}
export type PageHandler_GetOptimizationGuideStatus_ResponseParams = PageHandler_GetOptimizationGuideStatus_ResponseParamsMojoType;
export declare interface PageHandler_GetGlicPromptInfo_ParamsMojoType {
}
export type PageHandler_GetGlicPromptInfo_Params = PageHandler_GetGlicPromptInfo_ParamsMojoType;
export declare interface PageHandler_GetGlicPromptInfo_ResponseParamsMojoType {
    info: GlicPromptInfo;
}
export type PageHandler_GetGlicPromptInfo_ResponseParams = PageHandler_GetGlicPromptInfo_ResponseParamsMojoType;
export declare interface Page_OnLocalEligibilityChanged_ParamsMojoType {
    status: LocalEligibility;
}
export type Page_OnLocalEligibilityChanged_Params = Page_OnLocalEligibilityChanged_ParamsMojoType;
export declare interface Page_OnOptimizationGuideStatusChanged_ParamsMojoType {
    status: OptimizationGuideStatus;
}
export type Page_OnOptimizationGuideStatusChanged_Params = Page_OnOptimizationGuideStatusChanged_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
