import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type LensGhostLoaderPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<LensGhostLoaderPageHandlerFactoryPendingReceiver>;
export declare class LensGhostLoaderPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<LensGhostLoaderPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<LensGhostLoaderPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | LensGhostLoaderPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface LensGhostLoaderPageHandlerFactoryInterface {
    createGhostLoaderPage(page: LensGhostLoaderPageRemote): void;
}
export declare class LensGhostLoaderPageHandlerFactoryRemote implements LensGhostLoaderPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<LensGhostLoaderPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<LensGhostLoaderPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | LensGhostLoaderPageHandlerFactoryPendingReceiverEndpoint);
    createGhostLoaderPage(page: LensGhostLoaderPageRemote): void;
}
/**
 * An object which receives request messages for the LensGhostLoaderPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class LensGhostLoaderPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<LensGhostLoaderPageHandlerFactoryRemote, LensGhostLoaderPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensGhostLoaderPageHandlerFactoryRemote, LensGhostLoaderPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: LensGhostLoaderPageHandlerFactoryInterface);
}
export declare class LensGhostLoaderPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): LensGhostLoaderPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the LensGhostLoaderPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class LensGhostLoaderPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<LensGhostLoaderPageHandlerFactoryRemote, LensGhostLoaderPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensGhostLoaderPageHandlerFactoryRemote, LensGhostLoaderPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createGhostLoaderPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: LensGhostLoaderPageRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type LensGhostLoaderPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<LensGhostLoaderPagePendingReceiver>;
export declare class LensGhostLoaderPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<LensGhostLoaderPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<LensGhostLoaderPagePendingReceiver>;
    constructor(handle: MojoHandle | LensGhostLoaderPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface LensGhostLoaderPageInterface {
    showErrorState(): void;
}
export declare class LensGhostLoaderPageRemote implements LensGhostLoaderPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<LensGhostLoaderPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<LensGhostLoaderPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | LensGhostLoaderPagePendingReceiverEndpoint);
    showErrorState(): void;
}
/**
 * An object which receives request messages for the LensGhostLoaderPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class LensGhostLoaderPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<LensGhostLoaderPageRemote, LensGhostLoaderPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensGhostLoaderPageRemote, LensGhostLoaderPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: LensGhostLoaderPageInterface);
}
export declare class LensGhostLoaderPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): LensGhostLoaderPageRemote;
}
/**
 * An object which receives request messages for the LensGhostLoaderPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class LensGhostLoaderPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<LensGhostLoaderPageRemote, LensGhostLoaderPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensGhostLoaderPageRemote, LensGhostLoaderPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    showErrorState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensGhostLoaderPage_ShowErrorState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_ParamsMojoType {
    page: LensGhostLoaderPageRemote;
}
export type LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_Params = LensGhostLoaderPageHandlerFactory_CreateGhostLoaderPage_ParamsMojoType;
export declare interface LensGhostLoaderPage_ShowErrorState_ParamsMojoType {
}
export type LensGhostLoaderPage_ShowErrorState_Params = LensGhostLoaderPage_ShowErrorState_ParamsMojoType;
