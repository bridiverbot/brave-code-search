import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type DefaultBrowserPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DefaultBrowserPageHandlerPendingReceiver>;
export declare class DefaultBrowserPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DefaultBrowserPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<DefaultBrowserPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | DefaultBrowserPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DefaultBrowserPageHandlerInterface {
    setAsDefaultBrowser(): void;
    skipSetAsDefaultBrowser(): void;
}
export declare class DefaultBrowserPageHandlerRemote implements DefaultBrowserPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<DefaultBrowserPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DefaultBrowserPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DefaultBrowserPageHandlerPendingReceiverEndpoint);
    setAsDefaultBrowser(): void;
    skipSetAsDefaultBrowser(): void;
}
/**
 * An object which receives request messages for the DefaultBrowserPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DefaultBrowserPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DefaultBrowserPageHandlerRemote, DefaultBrowserPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DefaultBrowserPageHandlerRemote, DefaultBrowserPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DefaultBrowserPageHandlerInterface);
}
export declare class DefaultBrowserPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DefaultBrowserPageHandlerRemote;
}
/**
 * An object which receives request messages for the DefaultBrowserPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DefaultBrowserPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DefaultBrowserPageHandlerRemote, DefaultBrowserPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DefaultBrowserPageHandlerRemote, DefaultBrowserPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setAsDefaultBrowser: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    skipSetAsDefaultBrowser: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type DefaultBrowserPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DefaultBrowserPageHandlerFactoryPendingReceiver>;
export declare class DefaultBrowserPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DefaultBrowserPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<DefaultBrowserPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | DefaultBrowserPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DefaultBrowserPageHandlerFactoryInterface {
    createPageHandler(handler: DefaultBrowserPageHandlerPendingReceiver): void;
}
export declare class DefaultBrowserPageHandlerFactoryRemote implements DefaultBrowserPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<DefaultBrowserPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DefaultBrowserPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DefaultBrowserPageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: DefaultBrowserPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the DefaultBrowserPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DefaultBrowserPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DefaultBrowserPageHandlerFactoryRemote, DefaultBrowserPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DefaultBrowserPageHandlerFactoryRemote, DefaultBrowserPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DefaultBrowserPageHandlerFactoryInterface);
}
export declare class DefaultBrowserPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DefaultBrowserPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the DefaultBrowserPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DefaultBrowserPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DefaultBrowserPageHandlerFactoryRemote, DefaultBrowserPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DefaultBrowserPageHandlerFactoryRemote, DefaultBrowserPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: DefaultBrowserPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const DefaultBrowserPageHandler_SetAsDefaultBrowser_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DefaultBrowserPageHandler_SkipSetAsDefaultBrowser_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DefaultBrowserPageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DefaultBrowserPageHandler_SetAsDefaultBrowser_ParamsMojoType {
}
export type DefaultBrowserPageHandler_SetAsDefaultBrowser_Params = DefaultBrowserPageHandler_SetAsDefaultBrowser_ParamsMojoType;
export declare interface DefaultBrowserPageHandler_SkipSetAsDefaultBrowser_ParamsMojoType {
}
export type DefaultBrowserPageHandler_SkipSetAsDefaultBrowser_Params = DefaultBrowserPageHandler_SkipSetAsDefaultBrowser_ParamsMojoType;
export declare interface DefaultBrowserPageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: DefaultBrowserPageHandlerPendingReceiver;
}
export type DefaultBrowserPageHandlerFactory_CreatePageHandler_Params = DefaultBrowserPageHandlerFactory_CreatePageHandler_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<DefaultBrowserPageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<DefaultBrowserPageHandlerInterface, DefaultBrowserPageHandlerPendingReceiver, DefaultBrowserPageHandlerRemote>;
