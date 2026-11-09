import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Color as tabGroups_mojom_Color } from './tab_group_types.mojom-webui.js';
import { Rect as gfx_mojom_Rect } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
export type TabGroupsOrganizerPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabGroupsOrganizerPagePendingReceiver>;
export declare class TabGroupsOrganizerPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabGroupsOrganizerPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabGroupsOrganizerPagePendingReceiver>;
    constructor(handle: MojoHandle | TabGroupsOrganizerPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabGroupsOrganizerPageInterface {
    tabGroupAdded(tabGroup: TabGroup): void;
    tabGroupRemoved(id: string): void;
    tabGroupUpdated(tabGroup: TabGroup): void;
}
export declare class TabGroupsOrganizerPageRemote implements TabGroupsOrganizerPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabGroupsOrganizerPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabGroupsOrganizerPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabGroupsOrganizerPagePendingReceiverEndpoint);
    tabGroupAdded(tabGroup: TabGroup): void;
    tabGroupRemoved(id: string): void;
    tabGroupUpdated(tabGroup: TabGroup): void;
}
/**
 * An object which receives request messages for the TabGroupsOrganizerPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabGroupsOrganizerPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabGroupsOrganizerPageRemote, TabGroupsOrganizerPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabGroupsOrganizerPageRemote, TabGroupsOrganizerPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabGroupsOrganizerPageInterface);
}
export declare class TabGroupsOrganizerPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabGroupsOrganizerPageRemote;
}
/**
 * An object which receives request messages for the TabGroupsOrganizerPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabGroupsOrganizerPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabGroupsOrganizerPageRemote, TabGroupsOrganizerPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabGroupsOrganizerPageRemote, TabGroupsOrganizerPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    tabGroupAdded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabGroup: TabGroup) => any>;
    tabGroupRemoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    tabGroupUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabGroup: TabGroup) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type TabGroupsOrganizerPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabGroupsOrganizerPageHandlerPendingReceiver>;
export declare class TabGroupsOrganizerPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabGroupsOrganizerPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabGroupsOrganizerPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | TabGroupsOrganizerPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabGroupsOrganizerPageHandlerInterface {
    getTabGroups(): Promise<{
        tabGroups: TabGroup[];
    }>;
    openTabGroup(id: string): void;
    showContextMenu(groupId: string, anchorRect: gfx_mojom_Rect): Promise<void>;
    createNewTabGroup(): void;
}
export declare class TabGroupsOrganizerPageHandlerRemote implements TabGroupsOrganizerPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabGroupsOrganizerPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabGroupsOrganizerPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabGroupsOrganizerPageHandlerPendingReceiverEndpoint);
    getTabGroups(): Promise<{
        tabGroups: TabGroup[];
    }>;
    openTabGroup(id: string): void;
    showContextMenu(groupId: string, anchorRect: gfx_mojom_Rect): Promise<void>;
    createNewTabGroup(): void;
}
/**
 * An object which receives request messages for the TabGroupsOrganizerPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabGroupsOrganizerPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabGroupsOrganizerPageHandlerRemote, TabGroupsOrganizerPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabGroupsOrganizerPageHandlerRemote, TabGroupsOrganizerPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabGroupsOrganizerPageHandlerInterface);
}
export declare class TabGroupsOrganizerPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabGroupsOrganizerPageHandlerRemote;
}
/**
 * An object which receives request messages for the TabGroupsOrganizerPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabGroupsOrganizerPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabGroupsOrganizerPageHandlerRemote, TabGroupsOrganizerPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabGroupsOrganizerPageHandlerRemote, TabGroupsOrganizerPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getTabGroups: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    showContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(groupId: string, anchorRect: gfx_mojom_Rect) => any>;
    createNewTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type TabGroupsOrganizerPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabGroupsOrganizerPageHandlerFactoryPendingReceiver>;
export declare class TabGroupsOrganizerPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabGroupsOrganizerPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabGroupsOrganizerPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | TabGroupsOrganizerPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabGroupsOrganizerPageHandlerFactoryInterface {
    createPageHandler(page: TabGroupsOrganizerPageRemote, handler: TabGroupsOrganizerPageHandlerPendingReceiver): void;
}
export declare class TabGroupsOrganizerPageHandlerFactoryRemote implements TabGroupsOrganizerPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabGroupsOrganizerPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabGroupsOrganizerPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabGroupsOrganizerPageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: TabGroupsOrganizerPageRemote, handler: TabGroupsOrganizerPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the TabGroupsOrganizerPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabGroupsOrganizerPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabGroupsOrganizerPageHandlerFactoryRemote, TabGroupsOrganizerPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabGroupsOrganizerPageHandlerFactoryRemote, TabGroupsOrganizerPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabGroupsOrganizerPageHandlerFactoryInterface);
}
export declare class TabGroupsOrganizerPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabGroupsOrganizerPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the TabGroupsOrganizerPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabGroupsOrganizerPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabGroupsOrganizerPageHandlerFactoryRemote, TabGroupsOrganizerPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabGroupsOrganizerPageHandlerFactoryRemote, TabGroupsOrganizerPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: TabGroupsOrganizerPageRemote, handler: TabGroupsOrganizerPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TabGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPage_TabGroupAdded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPage_TabGroupRemoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPage_TabGroupUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPageHandler_GetTabGroups_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPageHandler_GetTabGroups_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPageHandler_OpenTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPageHandler_ShowContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPageHandler_ShowContextMenu_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPageHandler_CreateNewTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupsOrganizerPageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TabGroupMojoType {
    id: string;
    color: tabGroups_mojom_Color;
    isOpen: boolean;
    title: string;
    lastActiveElapsedText: string;
}
export type TabGroup = TabGroupMojoType;
export declare interface TabGroupsOrganizerPage_TabGroupAdded_ParamsMojoType {
    tabGroup: TabGroup;
}
export type TabGroupsOrganizerPage_TabGroupAdded_Params = TabGroupsOrganizerPage_TabGroupAdded_ParamsMojoType;
export declare interface TabGroupsOrganizerPage_TabGroupRemoved_ParamsMojoType {
    id: string;
}
export type TabGroupsOrganizerPage_TabGroupRemoved_Params = TabGroupsOrganizerPage_TabGroupRemoved_ParamsMojoType;
export declare interface TabGroupsOrganizerPage_TabGroupUpdated_ParamsMojoType {
    tabGroup: TabGroup;
}
export type TabGroupsOrganizerPage_TabGroupUpdated_Params = TabGroupsOrganizerPage_TabGroupUpdated_ParamsMojoType;
export declare interface TabGroupsOrganizerPageHandler_GetTabGroups_ParamsMojoType {
}
export type TabGroupsOrganizerPageHandler_GetTabGroups_Params = TabGroupsOrganizerPageHandler_GetTabGroups_ParamsMojoType;
export declare interface TabGroupsOrganizerPageHandler_GetTabGroups_ResponseParamsMojoType {
    tabGroups: TabGroup[];
}
export type TabGroupsOrganizerPageHandler_GetTabGroups_ResponseParams = TabGroupsOrganizerPageHandler_GetTabGroups_ResponseParamsMojoType;
export declare interface TabGroupsOrganizerPageHandler_OpenTabGroup_ParamsMojoType {
    id: string;
}
export type TabGroupsOrganizerPageHandler_OpenTabGroup_Params = TabGroupsOrganizerPageHandler_OpenTabGroup_ParamsMojoType;
export declare interface TabGroupsOrganizerPageHandler_ShowContextMenu_ParamsMojoType {
    groupId: string;
    anchorRect: gfx_mojom_Rect;
}
export type TabGroupsOrganizerPageHandler_ShowContextMenu_Params = TabGroupsOrganizerPageHandler_ShowContextMenu_ParamsMojoType;
export declare interface TabGroupsOrganizerPageHandler_ShowContextMenu_ResponseParamsMojoType {
}
export type TabGroupsOrganizerPageHandler_ShowContextMenu_ResponseParams = TabGroupsOrganizerPageHandler_ShowContextMenu_ResponseParamsMojoType;
export declare interface TabGroupsOrganizerPageHandler_CreateNewTabGroup_ParamsMojoType {
}
export type TabGroupsOrganizerPageHandler_CreateNewTabGroup_Params = TabGroupsOrganizerPageHandler_CreateNewTabGroup_ParamsMojoType;
export declare interface TabGroupsOrganizerPageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: TabGroupsOrganizerPageRemote;
    handler: TabGroupsOrganizerPageHandlerPendingReceiver;
}
export type TabGroupsOrganizerPageHandlerFactory_CreatePageHandler_Params = TabGroupsOrganizerPageHandlerFactory_CreatePageHandler_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<TabGroupsOrganizerPageHandlerInterface, TabGroupsOrganizerPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<TabGroupsOrganizerPageHandlerInterface, TabGroupsOrganizerPageRemote, TabGroupsOrganizerPageHandlerPendingReceiver, TabGroupsOrganizerPagePendingReceiver, TabGroupsOrganizerPageCallbackRouter, TabGroupsOrganizerPageHandlerRemote>;
