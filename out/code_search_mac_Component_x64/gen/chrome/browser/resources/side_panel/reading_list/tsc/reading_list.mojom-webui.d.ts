import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { ClickModifiers as ui_mojom_ClickModifiers } from '//resources/mojo/ui/base/mojom/window_open_disposition.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const CurrentPageActionButtonStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CurrentPageActionButtonState {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kAdd = 0,
    kDisabled = 1,
    kMarkAsRead = 2
}
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
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
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PageRemote, handler: PageHandlerPendingReceiver) => any>;
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
    getReadLaterEntries(): Promise<{
        entries: ReadLaterEntriesByStatus;
    }>;
    openURL(url: url_mojom_Url, clickModifiers: ui_mojom_ClickModifiers): void;
    updateReadStatus(url: url_mojom_Url, read: boolean): void;
    markCurrentTabAsRead(): void;
    addCurrentTab(): void;
    removeEntry(url: url_mojom_Url): void;
    showContextMenuForURL(url: url_mojom_Url, x: number, y: number): void;
    updateCurrentPageActionButtonState(): void;
    showUI(): void;
    closeUI(): void;
    getWindowData(): Promise<{
        windows: Window[];
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getReadLaterEntries(): Promise<{
        entries: ReadLaterEntriesByStatus;
    }>;
    openURL(url: url_mojom_Url, clickModifiers: ui_mojom_ClickModifiers): void;
    updateReadStatus(url: url_mojom_Url, read: boolean): void;
    markCurrentTabAsRead(): void;
    addCurrentTab(): void;
    removeEntry(url: url_mojom_Url): void;
    showContextMenuForURL(url: url_mojom_Url, x: number, y: number): void;
    updateCurrentPageActionButtonState(): void;
    showUI(): void;
    closeUI(): void;
    getWindowData(): Promise<{
        windows: Window[];
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
    getReadLaterEntries: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openURL: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, clickModifiers: ui_mojom_ClickModifiers) => any>;
    updateReadStatus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, read: boolean) => any>;
    markCurrentTabAsRead: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    addCurrentTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    removeEntry: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    showContextMenuForURL: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, x: number, y: number) => any>;
    updateCurrentPageActionButtonState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    closeUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getWindowData: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
export declare class PagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Page> {
    handle: mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
    constructor(handle: MojoHandle | PagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageInterface {
    itemsChanged(entries: ReadLaterEntriesByStatus): void;
    currentPageActionButtonStateChanged(state: CurrentPageActionButtonState): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    itemsChanged(entries: ReadLaterEntriesByStatus): void;
    currentPageActionButtonStateChanged(state: CurrentPageActionButtonState): void;
}
/**
 * An object which receives request messages for the Page
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageInterface);
}
export declare class Page {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageRemote;
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    itemsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(entries: ReadLaterEntriesByStatus) => any>;
    currentPageActionButtonStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: CurrentPageActionButtonState) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ReadLaterEntriesByStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare const ReadLaterEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare const WindowSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetReadLaterEntries_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetReadLaterEntries_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenURL_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateReadStatus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MarkCurrentTabAsRead_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AddCurrentTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveEntry_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowContextMenuForURL_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetWindowData_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetWindowData_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ItemsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_CurrentPageActionButtonStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ReadLaterEntriesByStatusMojoType {
    unreadEntries: ReadLaterEntry[];
    readEntries: ReadLaterEntry[];
}
export type ReadLaterEntriesByStatus = ReadLaterEntriesByStatusMojoType;
export declare interface ReadLaterEntryMojoType {
    title: string;
    url: url_mojom_Url;
    displayUrl: string;
    updateTime: bigint;
    read: boolean;
    displayTimeSinceUpdate: string;
}
export type ReadLaterEntry = ReadLaterEntryMojoType;
export declare interface WindowMojoType {
    active: boolean;
    height: number;
}
export type Window = WindowMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_GetReadLaterEntries_ParamsMojoType {
}
export type PageHandler_GetReadLaterEntries_Params = PageHandler_GetReadLaterEntries_ParamsMojoType;
export declare interface PageHandler_GetReadLaterEntries_ResponseParamsMojoType {
    entries: ReadLaterEntriesByStatus;
}
export type PageHandler_GetReadLaterEntries_ResponseParams = PageHandler_GetReadLaterEntries_ResponseParamsMojoType;
export declare interface PageHandler_OpenURL_ParamsMojoType {
    url: url_mojom_Url;
    clickModifiers: ui_mojom_ClickModifiers;
}
export type PageHandler_OpenURL_Params = PageHandler_OpenURL_ParamsMojoType;
export declare interface PageHandler_UpdateReadStatus_ParamsMojoType {
    url: url_mojom_Url;
    read: boolean;
}
export type PageHandler_UpdateReadStatus_Params = PageHandler_UpdateReadStatus_ParamsMojoType;
export declare interface PageHandler_MarkCurrentTabAsRead_ParamsMojoType {
}
export type PageHandler_MarkCurrentTabAsRead_Params = PageHandler_MarkCurrentTabAsRead_ParamsMojoType;
export declare interface PageHandler_AddCurrentTab_ParamsMojoType {
}
export type PageHandler_AddCurrentTab_Params = PageHandler_AddCurrentTab_ParamsMojoType;
export declare interface PageHandler_RemoveEntry_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_RemoveEntry_Params = PageHandler_RemoveEntry_ParamsMojoType;
export declare interface PageHandler_ShowContextMenuForURL_ParamsMojoType {
    url: url_mojom_Url;
    x: number;
    y: number;
}
export type PageHandler_ShowContextMenuForURL_Params = PageHandler_ShowContextMenuForURL_ParamsMojoType;
export declare interface PageHandler_UpdateCurrentPageActionButtonState_ParamsMojoType {
}
export type PageHandler_UpdateCurrentPageActionButtonState_Params = PageHandler_UpdateCurrentPageActionButtonState_ParamsMojoType;
export declare interface PageHandler_ShowUI_ParamsMojoType {
}
export type PageHandler_ShowUI_Params = PageHandler_ShowUI_ParamsMojoType;
export declare interface PageHandler_CloseUI_ParamsMojoType {
}
export type PageHandler_CloseUI_Params = PageHandler_CloseUI_ParamsMojoType;
export declare interface PageHandler_GetWindowData_ParamsMojoType {
}
export type PageHandler_GetWindowData_Params = PageHandler_GetWindowData_ParamsMojoType;
export declare interface PageHandler_GetWindowData_ResponseParamsMojoType {
    windows: Window[];
}
export type PageHandler_GetWindowData_ResponseParams = PageHandler_GetWindowData_ResponseParamsMojoType;
export declare interface Page_ItemsChanged_ParamsMojoType {
    entries: ReadLaterEntriesByStatus;
}
export type Page_ItemsChanged_Params = Page_ItemsChanged_ParamsMojoType;
export declare interface Page_CurrentPageActionButtonStateChanged_ParamsMojoType {
    state: CurrentPageActionButtonState;
}
export type Page_CurrentPageActionButtonStateChanged_Params = Page_CurrentPageActionButtonStateChanged_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
