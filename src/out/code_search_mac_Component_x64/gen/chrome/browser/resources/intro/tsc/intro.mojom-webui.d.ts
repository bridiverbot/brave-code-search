import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type IntroPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<IntroPageHandlerFactoryPendingReceiver>;
export declare class IntroPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<IntroPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<IntroPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | IntroPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface IntroPageHandlerFactoryInterface {
    createIntroPageHandler(page: IntroPageRemote): void;
}
export declare class IntroPageHandlerFactoryRemote implements IntroPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<IntroPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<IntroPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | IntroPageHandlerFactoryPendingReceiverEndpoint);
    createIntroPageHandler(page: IntroPageRemote): void;
}
/**
 * An object which receives request messages for the IntroPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class IntroPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<IntroPageHandlerFactoryRemote, IntroPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<IntroPageHandlerFactoryRemote, IntroPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: IntroPageHandlerFactoryInterface);
}
export declare class IntroPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): IntroPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the IntroPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class IntroPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<IntroPageHandlerFactoryRemote, IntroPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<IntroPageHandlerFactoryRemote, IntroPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createIntroPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: IntroPageRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type IntroPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<IntroPagePendingReceiver>;
export declare class IntroPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<IntroPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<IntroPagePendingReceiver>;
    constructor(handle: MojoHandle | IntroPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface IntroPageInterface {
    toggleAnimations(active: boolean): void;
}
export declare class IntroPageRemote implements IntroPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<IntroPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<IntroPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | IntroPagePendingReceiverEndpoint);
    toggleAnimations(active: boolean): void;
}
/**
 * An object which receives request messages for the IntroPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class IntroPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<IntroPageRemote, IntroPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<IntroPageRemote, IntroPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: IntroPageInterface);
}
export declare class IntroPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): IntroPageRemote;
}
/**
 * An object which receives request messages for the IntroPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class IntroPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<IntroPageRemote, IntroPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<IntroPageRemote, IntroPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    toggleAnimations: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(active: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const IntroPageHandlerFactory_CreateIntroPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const IntroPage_ToggleAnimations_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface IntroPageHandlerFactory_CreateIntroPageHandler_ParamsMojoType {
    page: IntroPageRemote;
}
export type IntroPageHandlerFactory_CreateIntroPageHandler_Params = IntroPageHandlerFactory_CreateIntroPageHandler_ParamsMojoType;
export declare interface IntroPage_ToggleAnimations_ParamsMojoType {
    active: boolean;
}
export type IntroPage_ToggleAnimations_Params = IntroPage_ToggleAnimations_ParamsMojoType;
