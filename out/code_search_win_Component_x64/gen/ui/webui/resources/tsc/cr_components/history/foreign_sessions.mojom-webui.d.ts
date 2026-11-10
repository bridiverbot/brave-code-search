import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { ClickModifiers as ui_mojom_ClickModifiers } from '//resources/mojo/ui/base/mojom/window_open_disposition.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type ForeignSessionPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ForeignSessionPageHandlerFactoryPendingReceiver>;
export declare class ForeignSessionPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ForeignSessionPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<ForeignSessionPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | ForeignSessionPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ForeignSessionPageHandlerFactoryInterface {
    createForeignSessionPageHandler(page: ForeignSessionPageRemote, handler: ForeignSessionPageHandlerPendingReceiver): void;
}
export declare class ForeignSessionPageHandlerFactoryRemote implements ForeignSessionPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<ForeignSessionPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ForeignSessionPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ForeignSessionPageHandlerFactoryPendingReceiverEndpoint);
    createForeignSessionPageHandler(page: ForeignSessionPageRemote, handler: ForeignSessionPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the ForeignSessionPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ForeignSessionPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ForeignSessionPageHandlerFactoryRemote, ForeignSessionPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignSessionPageHandlerFactoryRemote, ForeignSessionPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ForeignSessionPageHandlerFactoryInterface);
}
export declare class ForeignSessionPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ForeignSessionPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the ForeignSessionPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ForeignSessionPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ForeignSessionPageHandlerFactoryRemote, ForeignSessionPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignSessionPageHandlerFactoryRemote, ForeignSessionPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createForeignSessionPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: ForeignSessionPageRemote, handler: ForeignSessionPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ForeignSessionPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ForeignSessionPageHandlerPendingReceiver>;
export declare class ForeignSessionPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ForeignSessionPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ForeignSessionPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ForeignSessionPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ForeignSessionPageHandlerInterface {
    getForeignSessions(): Promise<{
        sessions: ForeignSession[];
    }>;
    openForeignSessionAllTabs(sessionTag: string): void;
    openForeignSessionTab(sessionTag: string, tabId: number, modifiers: ui_mojom_ClickModifiers): void;
    deleteForeignSession(sessionTag: string): void;
    setForeignSessionCollapsed(sessionTag: string, collapsed: boolean): void;
    showUi(): void;
}
export declare class ForeignSessionPageHandlerRemote implements ForeignSessionPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ForeignSessionPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ForeignSessionPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ForeignSessionPageHandlerPendingReceiverEndpoint);
    getForeignSessions(): Promise<{
        sessions: ForeignSession[];
    }>;
    openForeignSessionAllTabs(sessionTag: string): void;
    openForeignSessionTab(sessionTag: string, tabId: number, modifiers: ui_mojom_ClickModifiers): void;
    deleteForeignSession(sessionTag: string): void;
    setForeignSessionCollapsed(sessionTag: string, collapsed: boolean): void;
    showUi(): void;
}
/**
 * An object which receives request messages for the ForeignSessionPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ForeignSessionPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ForeignSessionPageHandlerRemote, ForeignSessionPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignSessionPageHandlerRemote, ForeignSessionPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ForeignSessionPageHandlerInterface);
}
export declare class ForeignSessionPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ForeignSessionPageHandlerRemote;
}
/**
 * An object which receives request messages for the ForeignSessionPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ForeignSessionPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ForeignSessionPageHandlerRemote, ForeignSessionPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignSessionPageHandlerRemote, ForeignSessionPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getForeignSessions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openForeignSessionAllTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sessionTag: string) => any>;
    openForeignSessionTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sessionTag: string, tabId: number, modifiers: ui_mojom_ClickModifiers) => any>;
    deleteForeignSession: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sessionTag: string) => any>;
    setForeignSessionCollapsed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sessionTag: string, collapsed: boolean) => any>;
    showUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ForeignSessionPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ForeignSessionPagePendingReceiver>;
export declare class ForeignSessionPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ForeignSessionPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<ForeignSessionPagePendingReceiver>;
    constructor(handle: MojoHandle | ForeignSessionPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ForeignSessionPageInterface {
    onForeignSessionsChanged(sessions: ForeignSession[]): void;
}
export declare class ForeignSessionPageRemote implements ForeignSessionPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<ForeignSessionPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ForeignSessionPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ForeignSessionPagePendingReceiverEndpoint);
    onForeignSessionsChanged(sessions: ForeignSession[]): void;
}
/**
 * An object which receives request messages for the ForeignSessionPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ForeignSessionPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ForeignSessionPageRemote, ForeignSessionPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignSessionPageRemote, ForeignSessionPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ForeignSessionPageInterface);
}
export declare class ForeignSessionPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ForeignSessionPageRemote;
}
/**
 * An object which receives request messages for the ForeignSessionPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ForeignSessionPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ForeignSessionPageRemote, ForeignSessionPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ForeignSessionPageRemote, ForeignSessionPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onForeignSessionsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sessions: ForeignSession[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ForeignSessionTabSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionWindowSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionPageHandlerFactory_CreateForeignSessionPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionPageHandler_GetForeignSessions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionPageHandler_GetForeignSessions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionPageHandler_OpenForeignSessionAllTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionPageHandler_OpenForeignSessionTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionPageHandler_DeleteForeignSession_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionPageHandler_SetForeignSessionCollapsed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionPageHandler_ShowUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ForeignSessionPage_OnForeignSessionsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ForeignSessionTabMojoType {
    direction: string;
    remoteIconUrlForUma: string;
    sessionId: number;
    windowId: number;
    timestamp: number;
    timestampDisplayStr: string;
    title: string;
    url: url_mojom_Url;
}
export type ForeignSessionTab = ForeignSessionTabMojoType;
export declare interface ForeignSessionWindowMojoType {
    timestamp: number;
    sessionId: number;
    tabs: ForeignSessionTab[];
}
export type ForeignSessionWindow = ForeignSessionWindowMojoType;
export declare interface ForeignSessionMojoType {
    tag: string;
    name: string;
    modifiedTime: string;
    timestamp: number;
    collapsed: boolean;
    windows: ForeignSessionWindow[];
}
export type ForeignSession = ForeignSessionMojoType;
export declare interface ForeignSessionPageHandlerFactory_CreateForeignSessionPageHandler_ParamsMojoType {
    page: ForeignSessionPageRemote;
    handler: ForeignSessionPageHandlerPendingReceiver;
}
export type ForeignSessionPageHandlerFactory_CreateForeignSessionPageHandler_Params = ForeignSessionPageHandlerFactory_CreateForeignSessionPageHandler_ParamsMojoType;
export declare interface ForeignSessionPageHandler_GetForeignSessions_ParamsMojoType {
}
export type ForeignSessionPageHandler_GetForeignSessions_Params = ForeignSessionPageHandler_GetForeignSessions_ParamsMojoType;
export declare interface ForeignSessionPageHandler_GetForeignSessions_ResponseParamsMojoType {
    sessions: ForeignSession[];
}
export type ForeignSessionPageHandler_GetForeignSessions_ResponseParams = ForeignSessionPageHandler_GetForeignSessions_ResponseParamsMojoType;
export declare interface ForeignSessionPageHandler_OpenForeignSessionAllTabs_ParamsMojoType {
    sessionTag: string;
}
export type ForeignSessionPageHandler_OpenForeignSessionAllTabs_Params = ForeignSessionPageHandler_OpenForeignSessionAllTabs_ParamsMojoType;
export declare interface ForeignSessionPageHandler_OpenForeignSessionTab_ParamsMojoType {
    sessionTag: string;
    tabId: number;
    modifiers: ui_mojom_ClickModifiers;
}
export type ForeignSessionPageHandler_OpenForeignSessionTab_Params = ForeignSessionPageHandler_OpenForeignSessionTab_ParamsMojoType;
export declare interface ForeignSessionPageHandler_DeleteForeignSession_ParamsMojoType {
    sessionTag: string;
}
export type ForeignSessionPageHandler_DeleteForeignSession_Params = ForeignSessionPageHandler_DeleteForeignSession_ParamsMojoType;
export declare interface ForeignSessionPageHandler_SetForeignSessionCollapsed_ParamsMojoType {
    sessionTag: string;
    collapsed: boolean;
}
export type ForeignSessionPageHandler_SetForeignSessionCollapsed_Params = ForeignSessionPageHandler_SetForeignSessionCollapsed_ParamsMojoType;
export declare interface ForeignSessionPageHandler_ShowUi_ParamsMojoType {
}
export type ForeignSessionPageHandler_ShowUi_Params = ForeignSessionPageHandler_ShowUi_ParamsMojoType;
export declare interface ForeignSessionPage_OnForeignSessionsChanged_ParamsMojoType {
    sessions: ForeignSession[];
}
export type ForeignSessionPage_OnForeignSessionsChanged_Params = ForeignSessionPage_OnForeignSessionsChanged_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<ForeignSessionPageHandlerInterface, ForeignSessionPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<ForeignSessionPageHandlerInterface, ForeignSessionPageRemote, ForeignSessionPageHandlerPendingReceiver, ForeignSessionPagePendingReceiver, ForeignSessionPageCallbackRouter, ForeignSessionPageHandlerRemote>;
