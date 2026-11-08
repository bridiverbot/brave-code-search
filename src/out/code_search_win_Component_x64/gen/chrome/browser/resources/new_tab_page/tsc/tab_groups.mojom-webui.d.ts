import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Color as tabGroups_mojom_Color } from './tab_group_types.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    createNewTabGroup(): void;
    getTabGroups(): Promise<{
        tabGroups: (TabGroup[] | null);
        showZeroState: boolean;
    }>;
    openTabGroup(id: string): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    createNewTabGroup(): void;
    getTabGroups(): Promise<{
        tabGroups: (TabGroup[] | null);
        showZeroState: boolean;
    }>;
    openTabGroup(id: string): void;
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
    createNewTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getTabGroups: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
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
export declare const PageHandler_CreateNewTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabGroups_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabGroups_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TabGroupMojoType {
    id: string;
    title: string;
    updateTime: string;
    deviceName: (string | null);
    totalTabCount: number;
    color: tabGroups_mojom_Color;
    faviconUrls: url_mojom_Url[];
    isSharedTabGroup: boolean;
}
export type TabGroup = TabGroupMojoType;
export declare interface PageHandler_CreateNewTabGroup_ParamsMojoType {
}
export type PageHandler_CreateNewTabGroup_Params = PageHandler_CreateNewTabGroup_ParamsMojoType;
export declare interface PageHandler_GetTabGroups_ParamsMojoType {
}
export type PageHandler_GetTabGroups_Params = PageHandler_GetTabGroups_ParamsMojoType;
export declare interface PageHandler_GetTabGroups_ResponseParamsMojoType {
    tabGroups: (TabGroup[] | null);
    showZeroState: boolean;
}
export type PageHandler_GetTabGroups_ResponseParams = PageHandler_GetTabGroups_ResponseParamsMojoType;
export declare interface PageHandler_OpenTabGroup_ParamsMojoType {
    id: string;
}
export type PageHandler_OpenTabGroup_Params = PageHandler_OpenTabGroup_ParamsMojoType;
