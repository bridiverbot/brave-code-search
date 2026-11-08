import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type GoogleLensPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GoogleLensPageHandlerPendingReceiver>;
export declare class GoogleLensPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GoogleLensPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<GoogleLensPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | GoogleLensPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GoogleLensPageHandlerInterface {
    enableGoogleLens(): void;
    skipGoogleLens(): void;
}
export declare class GoogleLensPageHandlerRemote implements GoogleLensPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<GoogleLensPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GoogleLensPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GoogleLensPageHandlerPendingReceiverEndpoint);
    enableGoogleLens(): void;
    skipGoogleLens(): void;
}
/**
 * An object which receives request messages for the GoogleLensPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GoogleLensPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GoogleLensPageHandlerRemote, GoogleLensPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GoogleLensPageHandlerRemote, GoogleLensPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GoogleLensPageHandlerInterface);
}
export declare class GoogleLensPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GoogleLensPageHandlerRemote;
}
/**
 * An object which receives request messages for the GoogleLensPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GoogleLensPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GoogleLensPageHandlerRemote, GoogleLensPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GoogleLensPageHandlerRemote, GoogleLensPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    enableGoogleLens: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    skipGoogleLens: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GoogleLensPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GoogleLensPageHandlerFactoryPendingReceiver>;
export declare class GoogleLensPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GoogleLensPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<GoogleLensPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | GoogleLensPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GoogleLensPageHandlerFactoryInterface {
    createGoogleLensPageHandler(handler: GoogleLensPageHandlerPendingReceiver): void;
}
export declare class GoogleLensPageHandlerFactoryRemote implements GoogleLensPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<GoogleLensPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GoogleLensPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GoogleLensPageHandlerFactoryPendingReceiverEndpoint);
    createGoogleLensPageHandler(handler: GoogleLensPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the GoogleLensPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GoogleLensPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GoogleLensPageHandlerFactoryRemote, GoogleLensPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GoogleLensPageHandlerFactoryRemote, GoogleLensPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GoogleLensPageHandlerFactoryInterface);
}
export declare class GoogleLensPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GoogleLensPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the GoogleLensPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GoogleLensPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GoogleLensPageHandlerFactoryRemote, GoogleLensPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GoogleLensPageHandlerFactoryRemote, GoogleLensPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createGoogleLensPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: GoogleLensPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const GoogleLensPageHandler_EnableGoogleLens_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GoogleLensPageHandler_SkipGoogleLens_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GoogleLensPageHandlerFactory_CreateGoogleLensPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GoogleLensPageHandler_EnableGoogleLens_ParamsMojoType {
}
export type GoogleLensPageHandler_EnableGoogleLens_Params = GoogleLensPageHandler_EnableGoogleLens_ParamsMojoType;
export declare interface GoogleLensPageHandler_SkipGoogleLens_ParamsMojoType {
}
export type GoogleLensPageHandler_SkipGoogleLens_Params = GoogleLensPageHandler_SkipGoogleLens_ParamsMojoType;
export declare interface GoogleLensPageHandlerFactory_CreateGoogleLensPageHandler_ParamsMojoType {
    handler: GoogleLensPageHandlerPendingReceiver;
}
export type GoogleLensPageHandlerFactory_CreateGoogleLensPageHandler_Params = GoogleLensPageHandlerFactory_CreateGoogleLensPageHandler_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<GoogleLensPageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<GoogleLensPageHandlerInterface, GoogleLensPageHandlerPendingReceiver, GoogleLensPageHandlerRemote>;
