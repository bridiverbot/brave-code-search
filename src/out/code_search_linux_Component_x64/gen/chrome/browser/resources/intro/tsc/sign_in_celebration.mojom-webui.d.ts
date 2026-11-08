import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type SignInCelebrationPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SignInCelebrationPageHandlerFactoryPendingReceiver>;
export declare class SignInCelebrationPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SignInCelebrationPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<SignInCelebrationPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | SignInCelebrationPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SignInCelebrationPageHandlerFactoryInterface {
    createSignInCelebrationPageHandler(page: SignInCelebrationPageRemote, handler: SignInCelebrationPageHandlerPendingReceiver): void;
}
export declare class SignInCelebrationPageHandlerFactoryRemote implements SignInCelebrationPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<SignInCelebrationPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SignInCelebrationPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SignInCelebrationPageHandlerFactoryPendingReceiverEndpoint);
    createSignInCelebrationPageHandler(page: SignInCelebrationPageRemote, handler: SignInCelebrationPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the SignInCelebrationPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SignInCelebrationPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SignInCelebrationPageHandlerFactoryRemote, SignInCelebrationPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInCelebrationPageHandlerFactoryRemote, SignInCelebrationPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SignInCelebrationPageHandlerFactoryInterface);
}
export declare class SignInCelebrationPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SignInCelebrationPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the SignInCelebrationPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SignInCelebrationPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SignInCelebrationPageHandlerFactoryRemote, SignInCelebrationPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInCelebrationPageHandlerFactoryRemote, SignInCelebrationPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createSignInCelebrationPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: SignInCelebrationPageRemote, handler: SignInCelebrationPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SignInCelebrationPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SignInCelebrationPageHandlerPendingReceiver>;
export declare class SignInCelebrationPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SignInCelebrationPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<SignInCelebrationPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | SignInCelebrationPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SignInCelebrationPageHandlerInterface {
    getSignInCelebrationUserInfo(): Promise<{
        userInfo: SignInCelebrationUserInfo;
    }>;
    signInCelebrationFinished(): void;
}
export declare class SignInCelebrationPageHandlerRemote implements SignInCelebrationPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<SignInCelebrationPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SignInCelebrationPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SignInCelebrationPageHandlerPendingReceiverEndpoint);
    getSignInCelebrationUserInfo(): Promise<{
        userInfo: SignInCelebrationUserInfo;
    }>;
    signInCelebrationFinished(): void;
}
/**
 * An object which receives request messages for the SignInCelebrationPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SignInCelebrationPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SignInCelebrationPageHandlerRemote, SignInCelebrationPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInCelebrationPageHandlerRemote, SignInCelebrationPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SignInCelebrationPageHandlerInterface);
}
export declare class SignInCelebrationPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SignInCelebrationPageHandlerRemote;
}
/**
 * An object which receives request messages for the SignInCelebrationPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SignInCelebrationPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SignInCelebrationPageHandlerRemote, SignInCelebrationPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInCelebrationPageHandlerRemote, SignInCelebrationPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getSignInCelebrationUserInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    signInCelebrationFinished: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SignInCelebrationPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SignInCelebrationPagePendingReceiver>;
export declare class SignInCelebrationPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SignInCelebrationPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<SignInCelebrationPagePendingReceiver>;
    constructor(handle: MojoHandle | SignInCelebrationPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SignInCelebrationPageInterface {
    onSignInCelebrationUserInfoUpdated(userInfo: SignInCelebrationUserInfo): void;
}
export declare class SignInCelebrationPageRemote implements SignInCelebrationPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<SignInCelebrationPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SignInCelebrationPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SignInCelebrationPagePendingReceiverEndpoint);
    onSignInCelebrationUserInfoUpdated(userInfo: SignInCelebrationUserInfo): void;
}
/**
 * An object which receives request messages for the SignInCelebrationPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SignInCelebrationPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SignInCelebrationPageRemote, SignInCelebrationPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInCelebrationPageRemote, SignInCelebrationPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SignInCelebrationPageInterface);
}
export declare class SignInCelebrationPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SignInCelebrationPageRemote;
}
/**
 * An object which receives request messages for the SignInCelebrationPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SignInCelebrationPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SignInCelebrationPageRemote, SignInCelebrationPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SignInCelebrationPageRemote, SignInCelebrationPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onSignInCelebrationUserInfoUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(userInfo: SignInCelebrationUserInfo) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const SignInCelebrationUserInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInCelebrationPageHandlerFactory_CreateSignInCelebrationPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInCelebrationPageHandler_GetSignInCelebrationUserInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInCelebrationPageHandler_GetSignInCelebrationUserInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInCelebrationPageHandler_SignInCelebrationFinished_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SignInCelebrationPage_OnSignInCelebrationUserInfoUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SignInCelebrationUserInfoMojoType {
    avatarUrl: url_mojom_Url;
    title: string;
}
export type SignInCelebrationUserInfo = SignInCelebrationUserInfoMojoType;
export declare interface SignInCelebrationPageHandlerFactory_CreateSignInCelebrationPageHandler_ParamsMojoType {
    page: SignInCelebrationPageRemote;
    handler: SignInCelebrationPageHandlerPendingReceiver;
}
export type SignInCelebrationPageHandlerFactory_CreateSignInCelebrationPageHandler_Params = SignInCelebrationPageHandlerFactory_CreateSignInCelebrationPageHandler_ParamsMojoType;
export declare interface SignInCelebrationPageHandler_GetSignInCelebrationUserInfo_ParamsMojoType {
}
export type SignInCelebrationPageHandler_GetSignInCelebrationUserInfo_Params = SignInCelebrationPageHandler_GetSignInCelebrationUserInfo_ParamsMojoType;
export declare interface SignInCelebrationPageHandler_GetSignInCelebrationUserInfo_ResponseParamsMojoType {
    userInfo: SignInCelebrationUserInfo;
}
export type SignInCelebrationPageHandler_GetSignInCelebrationUserInfo_ResponseParams = SignInCelebrationPageHandler_GetSignInCelebrationUserInfo_ResponseParamsMojoType;
export declare interface SignInCelebrationPageHandler_SignInCelebrationFinished_ParamsMojoType {
}
export type SignInCelebrationPageHandler_SignInCelebrationFinished_Params = SignInCelebrationPageHandler_SignInCelebrationFinished_ParamsMojoType;
export declare interface SignInCelebrationPage_OnSignInCelebrationUserInfoUpdated_ParamsMojoType {
    userInfo: SignInCelebrationUserInfo;
}
export type SignInCelebrationPage_OnSignInCelebrationUserInfoUpdated_Params = SignInCelebrationPage_OnSignInCelebrationUserInfoUpdated_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<SignInCelebrationPageHandlerInterface, SignInCelebrationPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<SignInCelebrationPageHandlerInterface, SignInCelebrationPageRemote, SignInCelebrationPageHandlerPendingReceiver, SignInCelebrationPagePendingReceiver, SignInCelebrationPageCallbackRouter, SignInCelebrationPageHandlerRemote>;
