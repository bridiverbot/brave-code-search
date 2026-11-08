import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type FeatureShowcasePageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<FeatureShowcasePageHandlerPendingReceiver>;
export declare class FeatureShowcasePageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<FeatureShowcasePageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<FeatureShowcasePageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | FeatureShowcasePageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface FeatureShowcasePageHandlerInterface {
    finishFeatureShowcase(): void;
    nextStepShown(): void;
}
export declare class FeatureShowcasePageHandlerRemote implements FeatureShowcasePageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<FeatureShowcasePageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<FeatureShowcasePageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | FeatureShowcasePageHandlerPendingReceiverEndpoint);
    finishFeatureShowcase(): void;
    nextStepShown(): void;
}
/**
 * An object which receives request messages for the FeatureShowcasePageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class FeatureShowcasePageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<FeatureShowcasePageHandlerRemote, FeatureShowcasePageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FeatureShowcasePageHandlerRemote, FeatureShowcasePageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: FeatureShowcasePageHandlerInterface);
}
export declare class FeatureShowcasePageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): FeatureShowcasePageHandlerRemote;
}
/**
 * An object which receives request messages for the FeatureShowcasePageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class FeatureShowcasePageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<FeatureShowcasePageHandlerRemote, FeatureShowcasePageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FeatureShowcasePageHandlerRemote, FeatureShowcasePageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    finishFeatureShowcase: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    nextStepShown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type FeatureShowcasePageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<FeatureShowcasePageHandlerFactoryPendingReceiver>;
export declare class FeatureShowcasePageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<FeatureShowcasePageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<FeatureShowcasePageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | FeatureShowcasePageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface FeatureShowcasePageHandlerFactoryInterface {
    createPageHandler(handler: FeatureShowcasePageHandlerPendingReceiver): void;
}
export declare class FeatureShowcasePageHandlerFactoryRemote implements FeatureShowcasePageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<FeatureShowcasePageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<FeatureShowcasePageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | FeatureShowcasePageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: FeatureShowcasePageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the FeatureShowcasePageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class FeatureShowcasePageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<FeatureShowcasePageHandlerFactoryRemote, FeatureShowcasePageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FeatureShowcasePageHandlerFactoryRemote, FeatureShowcasePageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: FeatureShowcasePageHandlerFactoryInterface);
}
export declare class FeatureShowcasePageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): FeatureShowcasePageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the FeatureShowcasePageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class FeatureShowcasePageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<FeatureShowcasePageHandlerFactoryRemote, FeatureShowcasePageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FeatureShowcasePageHandlerFactoryRemote, FeatureShowcasePageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: FeatureShowcasePageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const FeatureShowcasePageHandler_FinishFeatureShowcase_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const FeatureShowcasePageHandler_NextStepShown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const FeatureShowcasePageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface FeatureShowcasePageHandler_FinishFeatureShowcase_ParamsMojoType {
}
export type FeatureShowcasePageHandler_FinishFeatureShowcase_Params = FeatureShowcasePageHandler_FinishFeatureShowcase_ParamsMojoType;
export declare interface FeatureShowcasePageHandler_NextStepShown_ParamsMojoType {
}
export type FeatureShowcasePageHandler_NextStepShown_Params = FeatureShowcasePageHandler_NextStepShown_ParamsMojoType;
export declare interface FeatureShowcasePageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: FeatureShowcasePageHandlerPendingReceiver;
}
export type FeatureShowcasePageHandlerFactory_CreatePageHandler_Params = FeatureShowcasePageHandlerFactory_CreatePageHandler_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<FeatureShowcasePageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<FeatureShowcasePageHandlerInterface, FeatureShowcasePageHandlerPendingReceiver, FeatureShowcasePageHandlerRemote>;
