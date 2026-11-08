import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type SignInPromoPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SignInPromoPageHandlerFactoryPendingReceiver>;
export declare class SignInPromoPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SignInPromoPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<SignInPromoPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | SignInPromoPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SignInPromoPageHandlerFactoryInterface {
    createSignInPromoPageHandler(page: SignInPromoPageRemote, handler: SignInPromoPageHandlerPendingReceiver): void;
}
export declare class SignInPromoPageHandlerFactoryRemote implements SignInPromoPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<SignInPromoPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SignInPromoPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SignInPromoPageHandlerFactoryPendingReceiverEndpoint);
    createSignInPromoPageHandler(page: SignInPromoPageRemote, handler: SignInPromoPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the SignInPromoPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SignInPromoPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SignInPromoPageHandlerFactoryRemote, SignInPromoPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInPromoPageHandlerFactoryRemote, SignInPromoPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SignInPromoPageHandlerFactoryInterface);
}
export declare class SignInPromoPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SignInPromoPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the SignInPromoPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SignInPromoPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SignInPromoPageHandlerFactoryRemote, SignInPromoPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInPromoPageHandlerFactoryRemote, SignInPromoPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createSignInPromoPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: SignInPromoPageRemote, handler: SignInPromoPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SignInPromoPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SignInPromoPageHandlerPendingReceiver>;
export declare class SignInPromoPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SignInPromoPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<SignInPromoPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | SignInPromoPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SignInPromoPageHandlerInterface {
    getManagedDeviceDisclaimer(): Promise<{
        disclaimer: string;
    }>;
    continueWithAccount(): void;
    continueWithoutAccount(): void;
}
export declare class SignInPromoPageHandlerRemote implements SignInPromoPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<SignInPromoPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SignInPromoPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SignInPromoPageHandlerPendingReceiverEndpoint);
    getManagedDeviceDisclaimer(): Promise<{
        disclaimer: string;
    }>;
    continueWithAccount(): void;
    continueWithoutAccount(): void;
}
/**
 * An object which receives request messages for the SignInPromoPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SignInPromoPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SignInPromoPageHandlerRemote, SignInPromoPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInPromoPageHandlerRemote, SignInPromoPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SignInPromoPageHandlerInterface);
}
export declare class SignInPromoPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SignInPromoPageHandlerRemote;
}
/**
 * An object which receives request messages for the SignInPromoPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SignInPromoPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SignInPromoPageHandlerRemote, SignInPromoPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInPromoPageHandlerRemote, SignInPromoPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getManagedDeviceDisclaimer: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    continueWithAccount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    continueWithoutAccount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SignInPromoPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SignInPromoPagePendingReceiver>;
export declare class SignInPromoPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SignInPromoPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<SignInPromoPagePendingReceiver>;
    constructor(handle: MojoHandle | SignInPromoPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SignInPromoPageInterface {
    onResetButtons(): void;
}
export declare class SignInPromoPageRemote implements SignInPromoPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<SignInPromoPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SignInPromoPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SignInPromoPagePendingReceiverEndpoint);
    onResetButtons(): void;
}
/**
 * An object which receives request messages for the SignInPromoPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SignInPromoPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SignInPromoPageRemote, SignInPromoPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInPromoPageRemote, SignInPromoPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SignInPromoPageInterface);
}
export declare class SignInPromoPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SignInPromoPageRemote;
}
/**
 * An object which receives request messages for the SignInPromoPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SignInPromoPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SignInPromoPageRemote, SignInPromoPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInPromoPageRemote, SignInPromoPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onResetButtons: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const SignInPromoPageHandlerFactory_CreateSignInPromoPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInPromoPageHandler_GetManagedDeviceDisclaimer_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInPromoPageHandler_GetManagedDeviceDisclaimer_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInPromoPageHandler_ContinueWithAccount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInPromoPageHandler_ContinueWithoutAccount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInPromoPage_OnResetButtons_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SignInPromoPageHandlerFactory_CreateSignInPromoPageHandler_ParamsMojoType {
    page: SignInPromoPageRemote;
    handler: SignInPromoPageHandlerPendingReceiver;
}
export type SignInPromoPageHandlerFactory_CreateSignInPromoPageHandler_Params = SignInPromoPageHandlerFactory_CreateSignInPromoPageHandler_ParamsMojoType;
export declare interface SignInPromoPageHandler_GetManagedDeviceDisclaimer_ParamsMojoType {
}
export type SignInPromoPageHandler_GetManagedDeviceDisclaimer_Params = SignInPromoPageHandler_GetManagedDeviceDisclaimer_ParamsMojoType;
export declare interface SignInPromoPageHandler_GetManagedDeviceDisclaimer_ResponseParamsMojoType {
    disclaimer: string;
}
export type SignInPromoPageHandler_GetManagedDeviceDisclaimer_ResponseParams = SignInPromoPageHandler_GetManagedDeviceDisclaimer_ResponseParamsMojoType;
export declare interface SignInPromoPageHandler_ContinueWithAccount_ParamsMojoType {
}
export type SignInPromoPageHandler_ContinueWithAccount_Params = SignInPromoPageHandler_ContinueWithAccount_ParamsMojoType;
export declare interface SignInPromoPageHandler_ContinueWithoutAccount_ParamsMojoType {
}
export type SignInPromoPageHandler_ContinueWithoutAccount_Params = SignInPromoPageHandler_ContinueWithoutAccount_ParamsMojoType;
export declare interface SignInPromoPage_OnResetButtons_ParamsMojoType {
}
export type SignInPromoPage_OnResetButtons_Params = SignInPromoPage_OnResetButtons_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<SignInPromoPageHandlerInterface, SignInPromoPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<SignInPromoPageHandlerInterface, SignInPromoPageRemote, SignInPromoPageHandlerPendingReceiver, SignInPromoPagePendingReceiver, SignInPromoPageCallbackRouter, SignInPromoPageHandlerRemote>;
