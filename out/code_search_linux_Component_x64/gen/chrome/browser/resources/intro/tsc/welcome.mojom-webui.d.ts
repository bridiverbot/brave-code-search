import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type WelcomePageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WelcomePageHandlerFactoryPendingReceiver>;
export declare class WelcomePageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WelcomePageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<WelcomePageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | WelcomePageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WelcomePageHandlerFactoryInterface {
    createWelcomePageHandler(handler: WelcomePageHandlerPendingReceiver): void;
}
export declare class WelcomePageHandlerFactoryRemote implements WelcomePageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<WelcomePageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WelcomePageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WelcomePageHandlerFactoryPendingReceiverEndpoint);
    createWelcomePageHandler(handler: WelcomePageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the WelcomePageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WelcomePageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WelcomePageHandlerFactoryRemote, WelcomePageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WelcomePageHandlerFactoryRemote, WelcomePageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WelcomePageHandlerFactoryInterface);
}
export declare class WelcomePageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WelcomePageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the WelcomePageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WelcomePageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WelcomePageHandlerFactoryRemote, WelcomePageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WelcomePageHandlerFactoryRemote, WelcomePageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createWelcomePageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: WelcomePageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type WelcomePageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WelcomePageHandlerPendingReceiver>;
export declare class WelcomePageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WelcomePageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<WelcomePageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | WelcomePageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WelcomePageHandlerInterface {
    continue(isUmaOptIn: (boolean | null), isDefaultBrowser: (boolean | null)): void;
}
export declare class WelcomePageHandlerRemote implements WelcomePageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<WelcomePageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WelcomePageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WelcomePageHandlerPendingReceiverEndpoint);
    continue(isUmaOptIn: (boolean | null), isDefaultBrowser: (boolean | null)): void;
}
/**
 * An object which receives request messages for the WelcomePageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WelcomePageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WelcomePageHandlerRemote, WelcomePageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WelcomePageHandlerRemote, WelcomePageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WelcomePageHandlerInterface);
}
export declare class WelcomePageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WelcomePageHandlerRemote;
}
/**
 * An object which receives request messages for the WelcomePageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WelcomePageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WelcomePageHandlerRemote, WelcomePageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WelcomePageHandlerRemote, WelcomePageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    continue: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isUmaOptIn: (boolean | null), isDefaultBrowser: (boolean | null)) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const WelcomePageHandlerFactory_CreateWelcomePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WelcomePageHandler_Continue_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface WelcomePageHandlerFactory_CreateWelcomePageHandler_ParamsMojoType {
    handler: WelcomePageHandlerPendingReceiver;
}
export type WelcomePageHandlerFactory_CreateWelcomePageHandler_Params = WelcomePageHandlerFactory_CreateWelcomePageHandler_ParamsMojoType;
export declare interface WelcomePageHandler_Continue_ParamsMojoType {
    isUmaOptIn: (boolean | null);
    isDefaultBrowser: (boolean | null);
}
export type WelcomePageHandler_Continue_Params = WelcomePageHandler_Continue_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<WelcomePageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<WelcomePageHandlerInterface, WelcomePageHandlerPendingReceiver, WelcomePageHandlerRemote>;
