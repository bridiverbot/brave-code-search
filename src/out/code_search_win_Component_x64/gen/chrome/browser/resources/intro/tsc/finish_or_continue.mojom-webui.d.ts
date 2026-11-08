import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type FinishOrContinuePageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<FinishOrContinuePageHandlerFactoryPendingReceiver>;
export declare class FinishOrContinuePageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<FinishOrContinuePageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<FinishOrContinuePageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | FinishOrContinuePageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface FinishOrContinuePageHandlerFactoryInterface {
    createFinishOrContinuePageHandler(handler: FinishOrContinuePageHandlerPendingReceiver): void;
}
export declare class FinishOrContinuePageHandlerFactoryRemote implements FinishOrContinuePageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<FinishOrContinuePageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<FinishOrContinuePageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | FinishOrContinuePageHandlerFactoryPendingReceiverEndpoint);
    createFinishOrContinuePageHandler(handler: FinishOrContinuePageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the FinishOrContinuePageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class FinishOrContinuePageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<FinishOrContinuePageHandlerFactoryRemote, FinishOrContinuePageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FinishOrContinuePageHandlerFactoryRemote, FinishOrContinuePageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: FinishOrContinuePageHandlerFactoryInterface);
}
export declare class FinishOrContinuePageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): FinishOrContinuePageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the FinishOrContinuePageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class FinishOrContinuePageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<FinishOrContinuePageHandlerFactoryRemote, FinishOrContinuePageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FinishOrContinuePageHandlerFactoryRemote, FinishOrContinuePageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createFinishOrContinuePageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: FinishOrContinuePageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type FinishOrContinuePageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<FinishOrContinuePageHandlerPendingReceiver>;
export declare class FinishOrContinuePageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<FinishOrContinuePageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<FinishOrContinuePageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | FinishOrContinuePageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface FinishOrContinuePageHandlerInterface {
    startBrowsing(): void;
    continueEducation(): void;
}
export declare class FinishOrContinuePageHandlerRemote implements FinishOrContinuePageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<FinishOrContinuePageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<FinishOrContinuePageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | FinishOrContinuePageHandlerPendingReceiverEndpoint);
    startBrowsing(): void;
    continueEducation(): void;
}
/**
 * An object which receives request messages for the FinishOrContinuePageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class FinishOrContinuePageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<FinishOrContinuePageHandlerRemote, FinishOrContinuePageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FinishOrContinuePageHandlerRemote, FinishOrContinuePageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: FinishOrContinuePageHandlerInterface);
}
export declare class FinishOrContinuePageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): FinishOrContinuePageHandlerRemote;
}
/**
 * An object which receives request messages for the FinishOrContinuePageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class FinishOrContinuePageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<FinishOrContinuePageHandlerRemote, FinishOrContinuePageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FinishOrContinuePageHandlerRemote, FinishOrContinuePageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    startBrowsing: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    continueEducation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const FinishOrContinuePageHandlerFactory_CreateFinishOrContinuePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const FinishOrContinuePageHandler_StartBrowsing_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const FinishOrContinuePageHandler_ContinueEducation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface FinishOrContinuePageHandlerFactory_CreateFinishOrContinuePageHandler_ParamsMojoType {
    handler: FinishOrContinuePageHandlerPendingReceiver;
}
export type FinishOrContinuePageHandlerFactory_CreateFinishOrContinuePageHandler_Params = FinishOrContinuePageHandlerFactory_CreateFinishOrContinuePageHandler_ParamsMojoType;
export declare interface FinishOrContinuePageHandler_StartBrowsing_ParamsMojoType {
}
export type FinishOrContinuePageHandler_StartBrowsing_Params = FinishOrContinuePageHandler_StartBrowsing_ParamsMojoType;
export declare interface FinishOrContinuePageHandler_ContinueEducation_ParamsMojoType {
}
export type FinishOrContinuePageHandler_ContinueEducation_Params = FinishOrContinuePageHandler_ContinueEducation_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<FinishOrContinuePageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<FinishOrContinuePageHandlerInterface, FinishOrContinuePageHandlerPendingReceiver, FinishOrContinuePageHandlerRemote>;
