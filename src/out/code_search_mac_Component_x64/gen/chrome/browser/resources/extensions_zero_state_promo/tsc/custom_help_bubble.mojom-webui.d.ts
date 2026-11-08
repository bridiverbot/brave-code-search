import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export declare const CustomHelpBubbleUserActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CustomHelpBubbleUserAction {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kDismiss = 0,
    kSnooze = 1,
    kAction = 2,
    kCancel = 3
}
export type CustomHelpBubbleHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomHelpBubbleHandlerFactoryPendingReceiver>;
export declare class CustomHelpBubbleHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomHelpBubbleHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomHelpBubbleHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | CustomHelpBubbleHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomHelpBubbleHandlerFactoryInterface {
    createCustomHelpBubbleHandler(handler: CustomHelpBubbleHandlerPendingReceiver): void;
}
export declare class CustomHelpBubbleHandlerFactoryRemote implements CustomHelpBubbleHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomHelpBubbleHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomHelpBubbleHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomHelpBubbleHandlerFactoryPendingReceiverEndpoint);
    createCustomHelpBubbleHandler(handler: CustomHelpBubbleHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the CustomHelpBubbleHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomHelpBubbleHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomHelpBubbleHandlerFactoryRemote, CustomHelpBubbleHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomHelpBubbleHandlerFactoryRemote, CustomHelpBubbleHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomHelpBubbleHandlerFactoryInterface);
}
export declare class CustomHelpBubbleHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomHelpBubbleHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the CustomHelpBubbleHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomHelpBubbleHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomHelpBubbleHandlerFactoryRemote, CustomHelpBubbleHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomHelpBubbleHandlerFactoryRemote, CustomHelpBubbleHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createCustomHelpBubbleHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: CustomHelpBubbleHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomHelpBubbleHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomHelpBubbleHandlerPendingReceiver>;
export declare class CustomHelpBubbleHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomHelpBubbleHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomHelpBubbleHandlerPendingReceiver>;
    constructor(handle: MojoHandle | CustomHelpBubbleHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomHelpBubbleHandlerInterface {
    notifyUserAction(action: CustomHelpBubbleUserAction): void;
}
export declare class CustomHelpBubbleHandlerRemote implements CustomHelpBubbleHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomHelpBubbleHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomHelpBubbleHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomHelpBubbleHandlerPendingReceiverEndpoint);
    notifyUserAction(action: CustomHelpBubbleUserAction): void;
}
/**
 * An object which receives request messages for the CustomHelpBubbleHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomHelpBubbleHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomHelpBubbleHandlerRemote, CustomHelpBubbleHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomHelpBubbleHandlerRemote, CustomHelpBubbleHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomHelpBubbleHandlerInterface);
}
export declare class CustomHelpBubbleHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomHelpBubbleHandlerRemote;
}
/**
 * An object which receives request messages for the CustomHelpBubbleHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomHelpBubbleHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomHelpBubbleHandlerRemote, CustomHelpBubbleHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomHelpBubbleHandlerRemote, CustomHelpBubbleHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    notifyUserAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(action: CustomHelpBubbleUserAction) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomHelpBubbleHandler_NotifyUserAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_ParamsMojoType {
    handler: CustomHelpBubbleHandlerPendingReceiver;
}
export type CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_Params = CustomHelpBubbleHandlerFactory_CreateCustomHelpBubbleHandler_ParamsMojoType;
export declare interface CustomHelpBubbleHandler_NotifyUserAction_ParamsMojoType {
    action: CustomHelpBubbleUserAction;
}
export type CustomHelpBubbleHandler_NotifyUserAction_Params = CustomHelpBubbleHandler_NotifyUserAction_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<CustomHelpBubbleHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<CustomHelpBubbleHandlerInterface, CustomHelpBubbleHandlerPendingReceiver, CustomHelpBubbleHandlerRemote>;
