import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { ExtensionActionInfo as extensionsBar_mojom_ExtensionActionInfo } from './extensions_bar_data_model.mojom-webui.js';
import { IconUpdate as toolbarUiApi_mojom_IconUpdate } from './icon_handle.mojom-webui.js';
import { MenuSourceType as ui_mojom_MenuSourceType } from '//resources/mojo/ui/base/mojom/menu_source_type.mojom-webui.js';
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
    executeUserAction(id: string): void;
    showContextMenu(source: ui_mojom_MenuSourceType, id: string): void;
    toggleExtensionsMenuFromWebUI(): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    executeUserAction(id: string): void;
    showContextMenu(source: ui_mojom_MenuSourceType, id: string): void;
    toggleExtensionsMenuFromWebUI(): void;
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
    executeUserAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    showContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: ui_mojom_MenuSourceType, id: string) => any>;
    toggleExtensionsMenuFromWebUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
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
    actionsAddedOrUpdated(icons: toolbarUiApi_mojom_IconUpdate[], actions: extensionsBar_mojom_ExtensionActionInfo[]): void;
    actionRemoved(icons: toolbarUiApi_mojom_IconUpdate[], id: string): void;
    actionPoppedOut(): Promise<void>;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    actionsAddedOrUpdated(icons: toolbarUiApi_mojom_IconUpdate[], actions: extensionsBar_mojom_ExtensionActionInfo[]): void;
    actionRemoved(icons: toolbarUiApi_mojom_IconUpdate[], id: string): void;
    actionPoppedOut(): Promise<void>;
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
    actionsAddedOrUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(icons: toolbarUiApi_mojom_IconUpdate[], actions: extensionsBar_mojom_ExtensionActionInfo[]) => any>;
    actionRemoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(icons: toolbarUiApi_mojom_IconUpdate[], id: string) => any>;
    actionPoppedOut: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
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
export declare const PageHandler_ExecuteUserAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ActionsAddedOrUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ActionRemoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ActionPoppedOut_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ActionPoppedOut_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_ExecuteUserAction_ParamsMojoType {
    id: string;
}
export type PageHandler_ExecuteUserAction_Params = PageHandler_ExecuteUserAction_ParamsMojoType;
export declare interface PageHandler_ShowContextMenu_ParamsMojoType {
    source: ui_mojom_MenuSourceType;
    id: string;
}
export type PageHandler_ShowContextMenu_Params = PageHandler_ShowContextMenu_ParamsMojoType;
export declare interface PageHandler_ToggleExtensionsMenuFromWebUI_ParamsMojoType {
}
export type PageHandler_ToggleExtensionsMenuFromWebUI_Params = PageHandler_ToggleExtensionsMenuFromWebUI_ParamsMojoType;
export declare interface Page_ActionsAddedOrUpdated_ParamsMojoType {
    icons: toolbarUiApi_mojom_IconUpdate[];
    actions: extensionsBar_mojom_ExtensionActionInfo[];
}
export type Page_ActionsAddedOrUpdated_Params = Page_ActionsAddedOrUpdated_ParamsMojoType;
export declare interface Page_ActionRemoved_ParamsMojoType {
    icons: toolbarUiApi_mojom_IconUpdate[];
    id: string;
}
export type Page_ActionRemoved_Params = Page_ActionRemoved_ParamsMojoType;
export declare interface Page_ActionPoppedOut_ParamsMojoType {
}
export type Page_ActionPoppedOut_Params = Page_ActionPoppedOut_ParamsMojoType;
export declare interface Page_ActionPoppedOut_ResponseParamsMojoType {
}
export type Page_ActionPoppedOut_ResponseParams = Page_ActionPoppedOut_ResponseParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
