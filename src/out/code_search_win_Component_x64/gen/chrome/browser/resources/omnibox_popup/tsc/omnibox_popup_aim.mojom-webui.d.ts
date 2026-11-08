import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { SearchContext as searchbox_mojom_SearchContext } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { Point as gfx_mojom_Point } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
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
    requestClose(input: string): void;
    showContextMenu(point: gfx_mojom_Point): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    requestClose(input: string): void;
    showContextMenu(point: gfx_mojom_Point): void;
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
    requestClose: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(input: string) => any>;
    showContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(point: gfx_mojom_Point) => any>;
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
    onPopupShown(context: searchbox_mojom_SearchContext): void;
    addContext(context: searchbox_mojom_SearchContext): void;
    focusInput(): void;
    clearPopup(): Promise<{
        input: string;
        querySubmitted: boolean;
    }>;
    setPreserveContextOnClose(preserveContextOnClose: boolean): void;
    onContextMenuClosed(): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onPopupShown(context: searchbox_mojom_SearchContext): void;
    addContext(context: searchbox_mojom_SearchContext): void;
    focusInput(): void;
    clearPopup(): Promise<{
        input: string;
        querySubmitted: boolean;
    }>;
    setPreserveContextOnClose(preserveContextOnClose: boolean): void;
    onContextMenuClosed(): void;
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
    onPopupShown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(context: searchbox_mojom_SearchContext) => any>;
    addContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(context: searchbox_mojom_SearchContext) => any>;
    focusInput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearPopup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setPreserveContextOnClose: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(preserveContextOnClose: boolean) => any>;
    onContextMenuClosed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestClose_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnPopupShown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_AddContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_FocusInput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ClearPopup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ClearPopup_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetPreserveContextOnClose_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnContextMenuClosed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_RequestClose_ParamsMojoType {
    input: string;
}
export type PageHandler_RequestClose_Params = PageHandler_RequestClose_ParamsMojoType;
export declare interface PageHandler_ShowContextMenu_ParamsMojoType {
    point: gfx_mojom_Point;
}
export type PageHandler_ShowContextMenu_Params = PageHandler_ShowContextMenu_ParamsMojoType;
export declare interface Page_OnPopupShown_ParamsMojoType {
    context: searchbox_mojom_SearchContext;
}
export type Page_OnPopupShown_Params = Page_OnPopupShown_ParamsMojoType;
export declare interface Page_AddContext_ParamsMojoType {
    context: searchbox_mojom_SearchContext;
}
export type Page_AddContext_Params = Page_AddContext_ParamsMojoType;
export declare interface Page_FocusInput_ParamsMojoType {
}
export type Page_FocusInput_Params = Page_FocusInput_ParamsMojoType;
export declare interface Page_ClearPopup_ParamsMojoType {
}
export type Page_ClearPopup_Params = Page_ClearPopup_ParamsMojoType;
export declare interface Page_ClearPopup_ResponseParamsMojoType {
    input: string;
    querySubmitted: boolean;
}
export type Page_ClearPopup_ResponseParams = Page_ClearPopup_ResponseParamsMojoType;
export declare interface Page_SetPreserveContextOnClose_ParamsMojoType {
    preserveContextOnClose: boolean;
}
export type Page_SetPreserveContextOnClose_Params = Page_SetPreserveContextOnClose_ParamsMojoType;
export declare interface Page_OnContextMenuClosed_ParamsMojoType {
}
export type Page_OnContextMenuClosed_Params = Page_OnContextMenuClosed_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
