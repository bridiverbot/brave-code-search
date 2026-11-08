import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createWebAppInternalsHandler(handler: WebAppInternalsHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createWebAppInternalsHandler(handler: WebAppInternalsHandlerPendingReceiver): void;
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
    createWebAppInternalsHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: WebAppInternalsHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type WebAppInternalsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WebAppInternalsHandlerPendingReceiver>;
export declare class WebAppInternalsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WebAppInternalsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<WebAppInternalsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | WebAppInternalsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WebAppInternalsHandlerInterface {
    getDebugInfoAsJsonString(): Promise<{
        result: string;
    }>;
}
export declare class WebAppInternalsHandlerRemote implements WebAppInternalsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<WebAppInternalsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WebAppInternalsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WebAppInternalsHandlerPendingReceiverEndpoint);
    getDebugInfoAsJsonString(): Promise<{
        result: string;
    }>;
}
/**
 * An object which receives request messages for the WebAppInternalsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WebAppInternalsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WebAppInternalsHandlerRemote, WebAppInternalsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebAppInternalsHandlerRemote, WebAppInternalsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WebAppInternalsHandlerInterface);
}
export declare class WebAppInternalsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WebAppInternalsHandlerRemote;
}
/**
 * An object which receives request messages for the WebAppInternalsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WebAppInternalsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WebAppInternalsHandlerRemote, WebAppInternalsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebAppInternalsHandlerRemote, WebAppInternalsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getDebugInfoAsJsonString: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PageHandlerFactory_CreateWebAppInternalsHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageHandlerFactory_CreateWebAppInternalsHandler_ParamsMojoType {
    handler: WebAppInternalsHandlerPendingReceiver;
}
export type PageHandlerFactory_CreateWebAppInternalsHandler_Params = PageHandlerFactory_CreateWebAppInternalsHandler_ParamsMojoType;
export declare interface WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsMojoType {
}
export type WebAppInternalsHandler_GetDebugInfoAsJsonString_Params = WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsMojoType;
export declare interface WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsMojoType {
    result: string;
}
export type WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParams = WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<WebAppInternalsHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<WebAppInternalsHandlerInterface, WebAppInternalsHandlerPendingReceiver, WebAppInternalsHandlerRemote>;
