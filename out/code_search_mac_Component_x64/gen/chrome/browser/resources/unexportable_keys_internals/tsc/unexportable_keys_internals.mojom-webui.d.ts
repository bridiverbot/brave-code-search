import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { JSTime as mojoBase_mojom_JSTime } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { UnguessableToken as mojoBase_mojom_UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createUnexportableKeysInternalsHandler(handler: PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createUnexportableKeysInternalsHandler(handler: PageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerFactoryInterface);
}
export declare class PageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createUnexportableKeysInternalsHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: PageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    getUnexportableKeysInfo(): Promise<{
        keys: UnexportableKeyInfo[];
    }>;
    deleteKey(keyId: UnexportableSigningKeyId): Promise<{
        success: boolean;
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getUnexportableKeysInfo(): Promise<{
        keys: UnexportableKeyInfo[];
    }>;
    deleteKey(keyId: UnexportableSigningKeyId): Promise<{
        success: boolean;
    }>;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerInterface);
}
export declare class PageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerRemote;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getUnexportableKeysInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    deleteKey: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(keyId: UnexportableSigningKeyId) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const UnexportableSigningKeyIdSpec: {
    $: mojo.internal.MojomType;
};
export declare const UnexportableKeyInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetUnexportableKeysInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetUnexportableKeysInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteKey_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteKey_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface UnexportableSigningKeyIdMojoType {
    keyId: mojoBase_mojom_UnguessableToken;
}
export type UnexportableSigningKeyId = UnexportableSigningKeyIdMojoType;
export declare interface UnexportableKeyInfoMojoType {
    keyId: UnexportableSigningKeyId;
    wrappedKey: string;
    algorithm: string;
    keyTag: string;
    creationTime: mojoBase_mojom_JSTime;
}
export type UnexportableKeyInfo = UnexportableKeyInfoMojoType;
export declare interface PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsMojoType {
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreateUnexportableKeysInternalsHandler_Params = PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsMojoType;
export declare interface PageHandler_GetUnexportableKeysInfo_ParamsMojoType {
}
export type PageHandler_GetUnexportableKeysInfo_Params = PageHandler_GetUnexportableKeysInfo_ParamsMojoType;
export declare interface PageHandler_GetUnexportableKeysInfo_ResponseParamsMojoType {
    keys: UnexportableKeyInfo[];
}
export type PageHandler_GetUnexportableKeysInfo_ResponseParams = PageHandler_GetUnexportableKeysInfo_ResponseParamsMojoType;
export declare interface PageHandler_DeleteKey_ParamsMojoType {
    keyId: UnexportableSigningKeyId;
}
export type PageHandler_DeleteKey_Params = PageHandler_DeleteKey_ParamsMojoType;
export declare interface PageHandler_DeleteKey_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_DeleteKey_ResponseParams = PageHandler_DeleteKey_ResponseParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<PageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<PageHandlerInterface, PageHandlerPendingReceiver, PageHandlerRemote>;
