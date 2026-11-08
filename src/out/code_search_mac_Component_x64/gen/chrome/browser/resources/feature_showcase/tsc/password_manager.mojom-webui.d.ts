import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type PasswordManagerPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PasswordManagerPageHandlerPendingReceiver>;
export declare class PasswordManagerPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PasswordManagerPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PasswordManagerPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PasswordManagerPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PasswordManagerPageHandlerInterface {
    pinPasswordManager(): void;
    skipPasswordManager(): void;
}
export declare class PasswordManagerPageHandlerRemote implements PasswordManagerPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PasswordManagerPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PasswordManagerPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PasswordManagerPageHandlerPendingReceiverEndpoint);
    pinPasswordManager(): void;
    skipPasswordManager(): void;
}
/**
 * An object which receives request messages for the PasswordManagerPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PasswordManagerPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PasswordManagerPageHandlerRemote, PasswordManagerPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PasswordManagerPageHandlerRemote, PasswordManagerPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PasswordManagerPageHandlerInterface);
}
export declare class PasswordManagerPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PasswordManagerPageHandlerRemote;
}
/**
 * An object which receives request messages for the PasswordManagerPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PasswordManagerPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PasswordManagerPageHandlerRemote, PasswordManagerPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PasswordManagerPageHandlerRemote, PasswordManagerPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    pinPasswordManager: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    skipPasswordManager: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PasswordManagerPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PasswordManagerPageHandlerFactoryPendingReceiver>;
export declare class PasswordManagerPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PasswordManagerPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PasswordManagerPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PasswordManagerPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PasswordManagerPageHandlerFactoryInterface {
    createPasswordManagerPageHandler(handler: PasswordManagerPageHandlerPendingReceiver): void;
}
export declare class PasswordManagerPageHandlerFactoryRemote implements PasswordManagerPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PasswordManagerPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PasswordManagerPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PasswordManagerPageHandlerFactoryPendingReceiverEndpoint);
    createPasswordManagerPageHandler(handler: PasswordManagerPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PasswordManagerPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PasswordManagerPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PasswordManagerPageHandlerFactoryRemote, PasswordManagerPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PasswordManagerPageHandlerFactoryRemote, PasswordManagerPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PasswordManagerPageHandlerFactoryInterface);
}
export declare class PasswordManagerPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PasswordManagerPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PasswordManagerPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PasswordManagerPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PasswordManagerPageHandlerFactoryRemote, PasswordManagerPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PasswordManagerPageHandlerFactoryRemote, PasswordManagerPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPasswordManagerPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: PasswordManagerPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PasswordManagerPageHandler_PinPasswordManager_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PasswordManagerPageHandler_SkipPasswordManager_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PasswordManagerPageHandlerFactory_CreatePasswordManagerPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PasswordManagerPageHandler_PinPasswordManager_ParamsMojoType {
}
export type PasswordManagerPageHandler_PinPasswordManager_Params = PasswordManagerPageHandler_PinPasswordManager_ParamsMojoType;
export declare interface PasswordManagerPageHandler_SkipPasswordManager_ParamsMojoType {
}
export type PasswordManagerPageHandler_SkipPasswordManager_Params = PasswordManagerPageHandler_SkipPasswordManager_ParamsMojoType;
export declare interface PasswordManagerPageHandlerFactory_CreatePasswordManagerPageHandler_ParamsMojoType {
    handler: PasswordManagerPageHandlerPendingReceiver;
}
export type PasswordManagerPageHandlerFactory_CreatePasswordManagerPageHandler_Params = PasswordManagerPageHandlerFactory_CreatePasswordManagerPageHandler_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<PasswordManagerPageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<PasswordManagerPageHandlerInterface, PasswordManagerPageHandlerPendingReceiver, PasswordManagerPageHandlerRemote>;
