import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { DictionaryValue as mojoBase_mojom_DictionaryValue } from '//resources/mojo/mojo/public/mojom/base/values.mojom-webui.js';
import { Size as gfx_mojom_Size } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(handler: PageHandlerPendingReceiver, page: PageRemote): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: PageHandlerPendingReceiver, page: PageRemote): void;
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
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: PageHandlerPendingReceiver, page: PageRemote) => any>;
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
    createGuest(createParams: mojoBase_mojom_DictionaryValue): Promise<{
        guestInstanceId: number;
    }>;
    setSize(guestInstanceId: number, sizeParams: SetSizeParams): void;
    navigate(guestInstanceId: number, url: url_mojom_Url): void;
    setPermission(guestInstanceId: number, requestId: number, action: PageHandler_PermissionResponseAction): Promise<{
        allowed: boolean;
    }>;
    setUserAgentOverride(guestInstanceId: number, userAgentOverride: string): void;
    setZoom(guestInstanceId: number, zoomFactor: number): Promise<void>;
    getZoom(guestInstanceId: number): Promise<{
        zoomFactor: number;
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    createGuest(createParams: mojoBase_mojom_DictionaryValue): Promise<{
        guestInstanceId: number;
    }>;
    setSize(guestInstanceId: number, sizeParams: SetSizeParams): void;
    navigate(guestInstanceId: number, url: url_mojom_Url): void;
    setPermission(guestInstanceId: number, requestId: number, action: PageHandler_PermissionResponseAction): Promise<{
        allowed: boolean;
    }>;
    setUserAgentOverride(guestInstanceId: number, userAgentOverride: string): void;
    setZoom(guestInstanceId: number, zoomFactor: number): Promise<void>;
    getZoom(guestInstanceId: number): Promise<{
        zoomFactor: number;
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
export declare const PageHandler_PermissionResponseActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PageHandler_PermissionResponseAction {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDeny = 0,
    kAllow = 1,
    kDefault = 2
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
    createGuest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(createParams: mojoBase_mojom_DictionaryValue) => any>;
    setSize: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guestInstanceId: number, sizeParams: SetSizeParams) => any>;
    navigate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guestInstanceId: number, url: url_mojom_Url) => any>;
    setPermission: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guestInstanceId: number, requestId: number, action: PageHandler_PermissionResponseAction) => any>;
    setUserAgentOverride: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guestInstanceId: number, userAgentOverride: string) => any>;
    setZoom: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guestInstanceId: number, zoomFactor: number) => any>;
    getZoom: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guestInstanceId: number) => any>;
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
    dispatchEvent(eventName: string, args: mojoBase_mojom_DictionaryValue, instanceId: number): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    dispatchEvent(eventName: string, args: mojoBase_mojom_DictionaryValue, instanceId: number): void;
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
    dispatchEvent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(eventName: string, args: mojoBase_mojom_DictionaryValue, instanceId: number) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const SetSizeParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CreateGuest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CreateGuest_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetSize_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Navigate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetPermission_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetPermission_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetUserAgentOverride_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetZoom_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetZoom_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetZoom_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetZoom_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_DispatchEvent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SetSizeParamsMojoType {
    enableAutoSize: boolean;
    min: gfx_mojom_Size;
    max: gfx_mojom_Size;
}
export type SetSizeParams = SetSizeParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: PageHandlerPendingReceiver;
    page: PageRemote;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_CreateGuest_ParamsMojoType {
    createParams: mojoBase_mojom_DictionaryValue;
}
export type PageHandler_CreateGuest_Params = PageHandler_CreateGuest_ParamsMojoType;
export declare interface PageHandler_CreateGuest_ResponseParamsMojoType {
    guestInstanceId: number;
}
export type PageHandler_CreateGuest_ResponseParams = PageHandler_CreateGuest_ResponseParamsMojoType;
export declare interface PageHandler_SetSize_ParamsMojoType {
    guestInstanceId: number;
    sizeParams: SetSizeParams;
}
export type PageHandler_SetSize_Params = PageHandler_SetSize_ParamsMojoType;
export declare interface PageHandler_Navigate_ParamsMojoType {
    guestInstanceId: number;
    url: url_mojom_Url;
}
export type PageHandler_Navigate_Params = PageHandler_Navigate_ParamsMojoType;
export declare interface PageHandler_SetPermission_ParamsMojoType {
    guestInstanceId: number;
    requestId: number;
    action: PageHandler_PermissionResponseAction;
}
export type PageHandler_SetPermission_Params = PageHandler_SetPermission_ParamsMojoType;
export declare interface PageHandler_SetPermission_ResponseParamsMojoType {
    allowed: boolean;
}
export type PageHandler_SetPermission_ResponseParams = PageHandler_SetPermission_ResponseParamsMojoType;
export declare interface PageHandler_SetUserAgentOverride_ParamsMojoType {
    guestInstanceId: number;
    userAgentOverride: string;
}
export type PageHandler_SetUserAgentOverride_Params = PageHandler_SetUserAgentOverride_ParamsMojoType;
export declare interface PageHandler_SetZoom_ParamsMojoType {
    guestInstanceId: number;
    zoomFactor: number;
}
export type PageHandler_SetZoom_Params = PageHandler_SetZoom_ParamsMojoType;
export declare interface PageHandler_SetZoom_ResponseParamsMojoType {
}
export type PageHandler_SetZoom_ResponseParams = PageHandler_SetZoom_ResponseParamsMojoType;
export declare interface PageHandler_GetZoom_ParamsMojoType {
    guestInstanceId: number;
}
export type PageHandler_GetZoom_Params = PageHandler_GetZoom_ParamsMojoType;
export declare interface PageHandler_GetZoom_ResponseParamsMojoType {
    zoomFactor: number;
}
export type PageHandler_GetZoom_ResponseParams = PageHandler_GetZoom_ResponseParamsMojoType;
export declare interface Page_DispatchEvent_ParamsMojoType {
    eventName: string;
    args: mojoBase_mojom_DictionaryValue;
    instanceId: number;
}
export type Page_DispatchEvent_Params = Page_DispatchEvent_ParamsMojoType;
