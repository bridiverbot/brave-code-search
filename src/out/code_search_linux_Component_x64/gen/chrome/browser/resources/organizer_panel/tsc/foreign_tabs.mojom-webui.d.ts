import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type ForeignTabsPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ForeignTabsPageHandlerPendingReceiver>;
export declare class ForeignTabsPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ForeignTabsPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ForeignTabsPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ForeignTabsPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ForeignTabsPageHandlerInterface {
    getForeignTabs(): Promise<{
        tabs: ForeignTab[];
    }>;
    openTab(sessionTag: string, sessionTabId: number): void;
}
export declare class ForeignTabsPageHandlerRemote implements ForeignTabsPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ForeignTabsPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ForeignTabsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ForeignTabsPageHandlerPendingReceiverEndpoint);
    getForeignTabs(): Promise<{
        tabs: ForeignTab[];
    }>;
    openTab(sessionTag: string, sessionTabId: number): void;
}
/**
 * An object which receives request messages for the ForeignTabsPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ForeignTabsPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ForeignTabsPageHandlerRemote, ForeignTabsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignTabsPageHandlerRemote, ForeignTabsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ForeignTabsPageHandlerInterface);
}
export declare class ForeignTabsPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ForeignTabsPageHandlerRemote;
}
/**
 * An object which receives request messages for the ForeignTabsPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ForeignTabsPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ForeignTabsPageHandlerRemote, ForeignTabsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignTabsPageHandlerRemote, ForeignTabsPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getForeignTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sessionTag: string, sessionTabId: number) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ForeignTabsPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ForeignTabsPageHandlerFactoryPendingReceiver>;
export declare class ForeignTabsPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ForeignTabsPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<ForeignTabsPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | ForeignTabsPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ForeignTabsPageHandlerFactoryInterface {
    createPageHandler(handler: ForeignTabsPageHandlerPendingReceiver): void;
}
export declare class ForeignTabsPageHandlerFactoryRemote implements ForeignTabsPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<ForeignTabsPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ForeignTabsPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ForeignTabsPageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: ForeignTabsPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the ForeignTabsPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ForeignTabsPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ForeignTabsPageHandlerFactoryRemote, ForeignTabsPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignTabsPageHandlerFactoryRemote, ForeignTabsPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ForeignTabsPageHandlerFactoryInterface);
}
export declare class ForeignTabsPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ForeignTabsPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the ForeignTabsPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ForeignTabsPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ForeignTabsPageHandlerFactoryRemote, ForeignTabsPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignTabsPageHandlerFactoryRemote, ForeignTabsPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: ForeignTabsPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ForeignTabSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignTabsPageHandler_GetForeignTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignTabsPageHandler_GetForeignTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignTabsPageHandler_OpenTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignTabsPageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ForeignTabMojoType {
    sessionTag: string;
    sessionTabId: number;
    title: string;
    url: url_mojom_Url;
    lastActiveElapsedText: string;
    deviceName: string;
}
export type ForeignTab = ForeignTabMojoType;
export declare interface ForeignTabsPageHandler_GetForeignTabs_ParamsMojoType {
}
export type ForeignTabsPageHandler_GetForeignTabs_Params = ForeignTabsPageHandler_GetForeignTabs_ParamsMojoType;
export declare interface ForeignTabsPageHandler_GetForeignTabs_ResponseParamsMojoType {
    tabs: ForeignTab[];
}
export type ForeignTabsPageHandler_GetForeignTabs_ResponseParams = ForeignTabsPageHandler_GetForeignTabs_ResponseParamsMojoType;
export declare interface ForeignTabsPageHandler_OpenTab_ParamsMojoType {
    sessionTag: string;
    sessionTabId: number;
}
export type ForeignTabsPageHandler_OpenTab_Params = ForeignTabsPageHandler_OpenTab_ParamsMojoType;
export declare interface ForeignTabsPageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: ForeignTabsPageHandlerPendingReceiver;
}
export type ForeignTabsPageHandlerFactory_CreatePageHandler_Params = ForeignTabsPageHandlerFactory_CreatePageHandler_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<ForeignTabsPageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<ForeignTabsPageHandlerInterface, ForeignTabsPageHandlerPendingReceiver, ForeignTabsPageHandlerRemote>;
