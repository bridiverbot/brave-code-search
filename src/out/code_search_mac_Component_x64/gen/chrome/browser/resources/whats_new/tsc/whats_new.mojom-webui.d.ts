import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { JSTime as mojoBase_mojom_JSTime, TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ScrollDepthSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ScrollDepth {
    MIN_VALUE = 0,
    MAX_VALUE = 100,
    k0 = 0,
    k25 = 25,
    k50 = 50,
    k75 = 75,
    k100 = 100
}
export declare const ModulePositionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ModulePosition {
    MIN_VALUE = 1,
    MAX_VALUE = 11,
    kSpotlight1 = 1,
    kSpotlight2 = 2,
    kSpotlight3 = 3,
    kSpotlight4 = 4,
    kExploreMore1 = 5,
    kExploreMore2 = 6,
    kExploreMore3 = 7,
    kExploreMore4 = 8,
    kExploreMore5 = 9,
    kExploreMore6 = 10,
    kUndefined = 11
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
    getServerUrl(isStaging: boolean): Promise<{
        url: url_mojom_Url;
    }>;
    recordTimeToLoadContent(time: mojoBase_mojom_JSTime): void;
    recordVersionPageLoaded(isAutoOpen: boolean): void;
    recordEditionPageLoaded(pageUid: string, isAutoOpen: boolean): void;
    recordModuleImpression(moduleName: string, position: ModulePosition): void;
    recordExploreMoreToggled(expanded: boolean): void;
    recordScrollDepth(depth: ScrollDepth): void;
    recordTimeOnPage(time: mojoBase_mojom_TimeDelta, isHeartbeat: boolean): void;
    recordModuleLinkClicked(moduleName: string, position: ModulePosition): void;
    recordModuleVideoStarted(moduleName: string, position: ModulePosition): void;
    recordModuleVideoEnded(moduleName: string, position: ModulePosition): void;
    recordModulePlayClicked(moduleName: string, position: ModulePosition): void;
    recordModulePauseClicked(moduleName: string, position: ModulePosition): void;
    recordModuleRestartClicked(moduleName: string, position: ModulePosition): void;
    recordBrowserCommandExecuted(): void;
    recordQrCodeToggled(expanded: boolean): void;
    recordNavClick(): void;
    recordFeatureTileNavigation(): void;
    recordCarouselScrollButtonClick(): void;
    recordExpandMediaToggled(moduleName: string, expanded: boolean): void;
    recordCtaClick(): void;
    recordNextButtonClick(): void;
    openCrossDeviceSigninQrBubble(): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getServerUrl(isStaging: boolean): Promise<{
        url: url_mojom_Url;
    }>;
    recordTimeToLoadContent(time: mojoBase_mojom_JSTime): void;
    recordVersionPageLoaded(isAutoOpen: boolean): void;
    recordEditionPageLoaded(pageUid: string, isAutoOpen: boolean): void;
    recordModuleImpression(moduleName: string, position: ModulePosition): void;
    recordExploreMoreToggled(expanded: boolean): void;
    recordScrollDepth(depth: ScrollDepth): void;
    recordTimeOnPage(time: mojoBase_mojom_TimeDelta, isHeartbeat: boolean): void;
    recordModuleLinkClicked(moduleName: string, position: ModulePosition): void;
    recordModuleVideoStarted(moduleName: string, position: ModulePosition): void;
    recordModuleVideoEnded(moduleName: string, position: ModulePosition): void;
    recordModulePlayClicked(moduleName: string, position: ModulePosition): void;
    recordModulePauseClicked(moduleName: string, position: ModulePosition): void;
    recordModuleRestartClicked(moduleName: string, position: ModulePosition): void;
    recordBrowserCommandExecuted(): void;
    recordQrCodeToggled(expanded: boolean): void;
    recordNavClick(): void;
    recordFeatureTileNavigation(): void;
    recordCarouselScrollButtonClick(): void;
    recordExpandMediaToggled(moduleName: string, expanded: boolean): void;
    recordCtaClick(): void;
    recordNextButtonClick(): void;
    openCrossDeviceSigninQrBubble(): void;
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
    getServerUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isStaging: boolean) => any>;
    recordTimeToLoadContent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(time: mojoBase_mojom_JSTime) => any>;
    recordVersionPageLoaded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isAutoOpen: boolean) => any>;
    recordEditionPageLoaded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pageUid: string, isAutoOpen: boolean) => any>;
    recordModuleImpression: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleName: string, position: ModulePosition) => any>;
    recordExploreMoreToggled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(expanded: boolean) => any>;
    recordScrollDepth: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(depth: ScrollDepth) => any>;
    recordTimeOnPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(time: mojoBase_mojom_TimeDelta, isHeartbeat: boolean) => any>;
    recordModuleLinkClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleName: string, position: ModulePosition) => any>;
    recordModuleVideoStarted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleName: string, position: ModulePosition) => any>;
    recordModuleVideoEnded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleName: string, position: ModulePosition) => any>;
    recordModulePlayClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleName: string, position: ModulePosition) => any>;
    recordModulePauseClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleName: string, position: ModulePosition) => any>;
    recordModuleRestartClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleName: string, position: ModulePosition) => any>;
    recordBrowserCommandExecuted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordQrCodeToggled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(expanded: boolean) => any>;
    recordNavClick: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordFeatureTileNavigation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordCarouselScrollButtonClick: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordExpandMediaToggled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleName: string, expanded: boolean) => any>;
    recordCtaClick: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordNextButtonClick: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openCrossDeviceSigninQrBubble: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetServerUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetServerUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordTimeToLoadContent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordVersionPageLoaded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordEditionPageLoaded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordModuleImpression_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordExploreMoreToggled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordScrollDepth_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordTimeOnPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordModuleLinkClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordModuleVideoStarted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordModuleVideoEnded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordModulePlayClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordModulePauseClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordModuleRestartClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordBrowserCommandExecuted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordQrCodeToggled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordNavClick_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordFeatureTileNavigation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordCarouselScrollButtonClick_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordExpandMediaToggled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordCtaClick_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordNextButtonClick_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenCrossDeviceSigninQrBubble_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_GetServerUrl_ParamsMojoType {
    isStaging: boolean;
}
export type PageHandler_GetServerUrl_Params = PageHandler_GetServerUrl_ParamsMojoType;
export declare interface PageHandler_GetServerUrl_ResponseParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_GetServerUrl_ResponseParams = PageHandler_GetServerUrl_ResponseParamsMojoType;
export declare interface PageHandler_RecordTimeToLoadContent_ParamsMojoType {
    time: mojoBase_mojom_JSTime;
}
export type PageHandler_RecordTimeToLoadContent_Params = PageHandler_RecordTimeToLoadContent_ParamsMojoType;
export declare interface PageHandler_RecordVersionPageLoaded_ParamsMojoType {
    isAutoOpen: boolean;
}
export type PageHandler_RecordVersionPageLoaded_Params = PageHandler_RecordVersionPageLoaded_ParamsMojoType;
export declare interface PageHandler_RecordEditionPageLoaded_ParamsMojoType {
    pageUid: string;
    isAutoOpen: boolean;
}
export type PageHandler_RecordEditionPageLoaded_Params = PageHandler_RecordEditionPageLoaded_ParamsMojoType;
export declare interface PageHandler_RecordModuleImpression_ParamsMojoType {
    moduleName: string;
    position: ModulePosition;
}
export type PageHandler_RecordModuleImpression_Params = PageHandler_RecordModuleImpression_ParamsMojoType;
export declare interface PageHandler_RecordExploreMoreToggled_ParamsMojoType {
    expanded: boolean;
}
export type PageHandler_RecordExploreMoreToggled_Params = PageHandler_RecordExploreMoreToggled_ParamsMojoType;
export declare interface PageHandler_RecordScrollDepth_ParamsMojoType {
    depth: ScrollDepth;
}
export type PageHandler_RecordScrollDepth_Params = PageHandler_RecordScrollDepth_ParamsMojoType;
export declare interface PageHandler_RecordTimeOnPage_ParamsMojoType {
    time: mojoBase_mojom_TimeDelta;
    isHeartbeat: boolean;
}
export type PageHandler_RecordTimeOnPage_Params = PageHandler_RecordTimeOnPage_ParamsMojoType;
export declare interface PageHandler_RecordModuleLinkClicked_ParamsMojoType {
    moduleName: string;
    position: ModulePosition;
}
export type PageHandler_RecordModuleLinkClicked_Params = PageHandler_RecordModuleLinkClicked_ParamsMojoType;
export declare interface PageHandler_RecordModuleVideoStarted_ParamsMojoType {
    moduleName: string;
    position: ModulePosition;
}
export type PageHandler_RecordModuleVideoStarted_Params = PageHandler_RecordModuleVideoStarted_ParamsMojoType;
export declare interface PageHandler_RecordModuleVideoEnded_ParamsMojoType {
    moduleName: string;
    position: ModulePosition;
}
export type PageHandler_RecordModuleVideoEnded_Params = PageHandler_RecordModuleVideoEnded_ParamsMojoType;
export declare interface PageHandler_RecordModulePlayClicked_ParamsMojoType {
    moduleName: string;
    position: ModulePosition;
}
export type PageHandler_RecordModulePlayClicked_Params = PageHandler_RecordModulePlayClicked_ParamsMojoType;
export declare interface PageHandler_RecordModulePauseClicked_ParamsMojoType {
    moduleName: string;
    position: ModulePosition;
}
export type PageHandler_RecordModulePauseClicked_Params = PageHandler_RecordModulePauseClicked_ParamsMojoType;
export declare interface PageHandler_RecordModuleRestartClicked_ParamsMojoType {
    moduleName: string;
    position: ModulePosition;
}
export type PageHandler_RecordModuleRestartClicked_Params = PageHandler_RecordModuleRestartClicked_ParamsMojoType;
export declare interface PageHandler_RecordBrowserCommandExecuted_ParamsMojoType {
}
export type PageHandler_RecordBrowserCommandExecuted_Params = PageHandler_RecordBrowserCommandExecuted_ParamsMojoType;
export declare interface PageHandler_RecordQrCodeToggled_ParamsMojoType {
    expanded: boolean;
}
export type PageHandler_RecordQrCodeToggled_Params = PageHandler_RecordQrCodeToggled_ParamsMojoType;
export declare interface PageHandler_RecordNavClick_ParamsMojoType {
}
export type PageHandler_RecordNavClick_Params = PageHandler_RecordNavClick_ParamsMojoType;
export declare interface PageHandler_RecordFeatureTileNavigation_ParamsMojoType {
}
export type PageHandler_RecordFeatureTileNavigation_Params = PageHandler_RecordFeatureTileNavigation_ParamsMojoType;
export declare interface PageHandler_RecordCarouselScrollButtonClick_ParamsMojoType {
}
export type PageHandler_RecordCarouselScrollButtonClick_Params = PageHandler_RecordCarouselScrollButtonClick_ParamsMojoType;
export declare interface PageHandler_RecordExpandMediaToggled_ParamsMojoType {
    moduleName: string;
    expanded: boolean;
}
export type PageHandler_RecordExpandMediaToggled_Params = PageHandler_RecordExpandMediaToggled_ParamsMojoType;
export declare interface PageHandler_RecordCtaClick_ParamsMojoType {
}
export type PageHandler_RecordCtaClick_Params = PageHandler_RecordCtaClick_ParamsMojoType;
export declare interface PageHandler_RecordNextButtonClick_ParamsMojoType {
}
export type PageHandler_RecordNextButtonClick_Params = PageHandler_RecordNextButtonClick_ParamsMojoType;
export declare interface PageHandler_OpenCrossDeviceSigninQrBubble_ParamsMojoType {
}
export type PageHandler_OpenCrossDeviceSigninQrBubble_Params = PageHandler_OpenCrossDeviceSigninQrBubble_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<PageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<PageHandlerInterface, PageHandlerPendingReceiver, PageHandlerRemote>;
