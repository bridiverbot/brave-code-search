import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type GeminiPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GeminiPageHandlerPendingReceiver>;
export declare class GeminiPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GeminiPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<GeminiPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | GeminiPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GeminiPageHandlerInterface {
    acceptConsent(): void;
    skipConsent(): void;
}
export declare class GeminiPageHandlerRemote implements GeminiPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<GeminiPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GeminiPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GeminiPageHandlerPendingReceiverEndpoint);
    acceptConsent(): void;
    skipConsent(): void;
}
/**
 * An object which receives request messages for the GeminiPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GeminiPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GeminiPageHandlerRemote, GeminiPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeminiPageHandlerRemote, GeminiPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GeminiPageHandlerInterface);
}
export declare class GeminiPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GeminiPageHandlerRemote;
}
/**
 * An object which receives request messages for the GeminiPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GeminiPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GeminiPageHandlerRemote, GeminiPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeminiPageHandlerRemote, GeminiPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    acceptConsent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    skipConsent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GeminiPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GeminiPageHandlerFactoryPendingReceiver>;
export declare class GeminiPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GeminiPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<GeminiPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | GeminiPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GeminiPageHandlerFactoryInterface {
    createGeminiPageHandler(handler: GeminiPageHandlerPendingReceiver): void;
}
export declare class GeminiPageHandlerFactoryRemote implements GeminiPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<GeminiPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GeminiPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GeminiPageHandlerFactoryPendingReceiverEndpoint);
    createGeminiPageHandler(handler: GeminiPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the GeminiPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GeminiPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GeminiPageHandlerFactoryRemote, GeminiPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeminiPageHandlerFactoryRemote, GeminiPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GeminiPageHandlerFactoryInterface);
}
export declare class GeminiPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GeminiPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the GeminiPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GeminiPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GeminiPageHandlerFactoryRemote, GeminiPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeminiPageHandlerFactoryRemote, GeminiPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createGeminiPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: GeminiPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const GeminiPageHandler_AcceptConsent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiPageHandler_SkipConsent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiPageHandlerFactory_CreateGeminiPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GeminiPageHandler_AcceptConsent_ParamsMojoType {
}
export type GeminiPageHandler_AcceptConsent_Params = GeminiPageHandler_AcceptConsent_ParamsMojoType;
export declare interface GeminiPageHandler_SkipConsent_ParamsMojoType {
}
export type GeminiPageHandler_SkipConsent_Params = GeminiPageHandler_SkipConsent_ParamsMojoType;
export declare interface GeminiPageHandlerFactory_CreateGeminiPageHandler_ParamsMojoType {
    handler: GeminiPageHandlerPendingReceiver;
}
export type GeminiPageHandlerFactory_CreateGeminiPageHandler_Params = GeminiPageHandlerFactory_CreateGeminiPageHandler_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<GeminiPageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<GeminiPageHandlerInterface, GeminiPageHandlerPendingReceiver, GeminiPageHandlerRemote>;
