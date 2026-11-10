import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type PriceInsightsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PriceInsightsHandlerPendingReceiver>;
export declare class PriceInsightsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PriceInsightsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PriceInsightsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PriceInsightsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PriceInsightsHandlerInterface {
    showSidePanelUI(): void;
    showFeedback(): void;
}
export declare class PriceInsightsHandlerRemote implements PriceInsightsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PriceInsightsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PriceInsightsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PriceInsightsHandlerPendingReceiverEndpoint);
    showSidePanelUI(): void;
    showFeedback(): void;
}
/**
 * An object which receives request messages for the PriceInsightsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PriceInsightsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PriceInsightsHandlerRemote, PriceInsightsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PriceInsightsHandlerRemote, PriceInsightsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PriceInsightsHandlerInterface);
}
export declare class PriceInsightsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PriceInsightsHandlerRemote;
}
/**
 * An object which receives request messages for the PriceInsightsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PriceInsightsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PriceInsightsHandlerRemote, PriceInsightsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PriceInsightsHandlerRemote, PriceInsightsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    showSidePanelUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PriceInsightsHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PriceInsightsHandlerFactoryPendingReceiver>;
export declare class PriceInsightsHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PriceInsightsHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PriceInsightsHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PriceInsightsHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PriceInsightsHandlerFactoryInterface {
    createPriceInsightsHandler(handler: PriceInsightsHandlerPendingReceiver): void;
}
export declare class PriceInsightsHandlerFactoryRemote implements PriceInsightsHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PriceInsightsHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PriceInsightsHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PriceInsightsHandlerFactoryPendingReceiverEndpoint);
    createPriceInsightsHandler(handler: PriceInsightsHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PriceInsightsHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PriceInsightsHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PriceInsightsHandlerFactoryRemote, PriceInsightsHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PriceInsightsHandlerFactoryRemote, PriceInsightsHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PriceInsightsHandlerFactoryInterface);
}
export declare class PriceInsightsHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PriceInsightsHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PriceInsightsHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PriceInsightsHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PriceInsightsHandlerFactoryRemote, PriceInsightsHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PriceInsightsHandlerFactoryRemote, PriceInsightsHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPriceInsightsHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: PriceInsightsHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PriceInsightsHandler_ShowSidePanelUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceInsightsHandler_ShowFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceInsightsHandlerFactory_CreatePriceInsightsHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PriceInsightsHandler_ShowSidePanelUI_ParamsMojoType {
}
export type PriceInsightsHandler_ShowSidePanelUI_Params = PriceInsightsHandler_ShowSidePanelUI_ParamsMojoType;
export declare interface PriceInsightsHandler_ShowFeedback_ParamsMojoType {
}
export type PriceInsightsHandler_ShowFeedback_Params = PriceInsightsHandler_ShowFeedback_ParamsMojoType;
export declare interface PriceInsightsHandlerFactory_CreatePriceInsightsHandler_ParamsMojoType {
    handler: PriceInsightsHandlerPendingReceiver;
}
export type PriceInsightsHandlerFactory_CreatePriceInsightsHandler_Params = PriceInsightsHandlerFactory_CreatePriceInsightsHandler_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<PriceInsightsHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<PriceInsightsHandlerInterface, PriceInsightsHandlerPendingReceiver, PriceInsightsHandlerRemote>;
