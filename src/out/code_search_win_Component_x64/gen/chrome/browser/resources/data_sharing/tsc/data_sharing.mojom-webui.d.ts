import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { GroupData as dataSharing_mojom_GroupData } from './group_data.mojom-webui.js';
import { AbslStatusCode as mojoBase_mojom_AbslStatusCode } from '//resources/mojo/mojo/public/mojom/base/absl_status.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const GroupActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GroupAction {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kUnknown = 0,
    kJoinGroup = 1,
    kDeleteGroup = 2,
    kLeaveGroup = 3,
    kKeepGroup = 4,
    kStopSharing = 5
}
export declare const GroupActionProgressSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GroupActionProgress {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnknown = 0,
    kStarted = 1,
    kFailed = 2,
    kSuccess = 3
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
    showUI(): void;
    closeUI(statusCode: number): void;
    apiInitComplete(): void;
    makeTabGroupShared(tabGroupId: string, groupId: string, accessToken: string): Promise<{
        url: (url_mojom_Url | null);
    }>;
    getShareLink(groupId: string, accessToken: string): Promise<{
        url: url_mojom_Url;
    }>;
    getTabGroupPreview(groupId: string, accessToken: string): Promise<{
        groupPreview: GroupPreview;
    }>;
    openTabGroup(groupId: string): void;
    aboutToUnShareTabGroup(tabGroupId: string): void;
    onTabGroupUnShareComplete(tabGroupId: string): void;
    onGroupAction(action: GroupAction, progress: GroupActionProgress): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    showUI(): void;
    closeUI(statusCode: number): void;
    apiInitComplete(): void;
    makeTabGroupShared(tabGroupId: string, groupId: string, accessToken: string): Promise<{
        url: (url_mojom_Url | null);
    }>;
    getShareLink(groupId: string, accessToken: string): Promise<{
        url: url_mojom_Url;
    }>;
    getTabGroupPreview(groupId: string, accessToken: string): Promise<{
        groupPreview: GroupPreview;
    }>;
    openTabGroup(groupId: string): void;
    aboutToUnShareTabGroup(tabGroupId: string): void;
    onTabGroupUnShareComplete(tabGroupId: string): void;
    onGroupAction(action: GroupAction, progress: GroupActionProgress): void;
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
    showUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    closeUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(statusCode: number) => any>;
    apiInitComplete: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    makeTabGroupShared: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabGroupId: string, groupId: string, accessToken: string) => any>;
    getShareLink: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(groupId: string, accessToken: string) => any>;
    getTabGroupPreview: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(groupId: string, accessToken: string) => any>;
    openTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(groupId: string) => any>;
    aboutToUnShareTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabGroupId: string) => any>;
    onTabGroupUnShareComplete: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabGroupId: string) => any>;
    onGroupAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(action: GroupAction, progress: GroupActionProgress) => any>;
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
    onAccessTokenFetched(accessToken: string): void;
    readGroups(readGroupsParams: ReadGroupsParams): Promise<{
        result: ReadGroupsResult;
    }>;
    readGroupWithToken(param: ReadGroupWithTokenParam): Promise<{
        result: ReadGroupWithTokenResult;
    }>;
    deleteGroup(groupId: string): Promise<{
        statusCode: number;
    }>;
    leaveGroup(groupId: string): Promise<{
        statusCode: number;
    }>;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onAccessTokenFetched(accessToken: string): void;
    readGroups(readGroupsParams: ReadGroupsParams): Promise<{
        result: ReadGroupsResult;
    }>;
    readGroupWithToken(param: ReadGroupWithTokenParam): Promise<{
        result: ReadGroupWithTokenResult;
    }>;
    deleteGroup(groupId: string): Promise<{
        statusCode: number;
    }>;
    leaveGroup(groupId: string): Promise<{
        statusCode: number;
    }>;
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
    onAccessTokenFetched: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(accessToken: string) => any>;
    readGroups: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(readGroupsParams: ReadGroupsParams) => any>;
    readGroupWithToken: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(param: ReadGroupWithTokenParam) => any>;
    deleteGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(groupId: string) => any>;
    leaveGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(groupId: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ReadGroupsParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ReadGroupParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ReadGroupsResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ReadGroupWithTokenParamSpec: {
    $: mojo.internal.MojomType;
};
export declare const ReadGroupWithTokenResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const SharedTabSpec: {
    $: mojo.internal.MojomType;
};
export declare const GroupPreviewSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ApiInitComplete_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MakeTabGroupShared_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MakeTabGroupShared_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetShareLink_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetShareLink_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabGroupPreview_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabGroupPreview_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AboutToUnShareTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnTabGroupUnShareComplete_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnGroupAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAccessTokenFetched_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ReadGroups_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ReadGroups_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ReadGroupWithToken_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ReadGroupWithToken_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_DeleteGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_DeleteGroup_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_LeaveGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_LeaveGroup_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ReadGroupsParamsMojoType {
    params: ReadGroupParams[];
}
export type ReadGroupsParams = ReadGroupsParamsMojoType;
export declare interface ReadGroupParamsMojoType {
    groupId: string;
    consistencyToken: string;
}
export type ReadGroupParams = ReadGroupParamsMojoType;
export declare interface ReadGroupsResultMojoType {
    groups: dataSharing_mojom_GroupData[];
    statusCode: number;
}
export type ReadGroupsResult = ReadGroupsResultMojoType;
export declare interface ReadGroupWithTokenParamMojoType {
    groupId: string;
    accessToken: string;
}
export type ReadGroupWithTokenParam = ReadGroupWithTokenParamMojoType;
export declare interface ReadGroupWithTokenResultMojoType {
    group: (dataSharing_mojom_GroupData | null);
    statusCode: number;
}
export type ReadGroupWithTokenResult = ReadGroupWithTokenResultMojoType;
export declare interface SharedTabMojoType {
    displayUrl: string;
    faviconUrl: url_mojom_Url;
}
export type SharedTab = SharedTabMojoType;
export declare interface GroupPreviewMojoType {
    title: string;
    sharedTabs: SharedTab[];
    statusCode: mojoBase_mojom_AbslStatusCode;
}
export type GroupPreview = GroupPreviewMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_ShowUI_ParamsMojoType {
}
export type PageHandler_ShowUI_Params = PageHandler_ShowUI_ParamsMojoType;
export declare interface PageHandler_CloseUI_ParamsMojoType {
    statusCode: number;
}
export type PageHandler_CloseUI_Params = PageHandler_CloseUI_ParamsMojoType;
export declare interface PageHandler_ApiInitComplete_ParamsMojoType {
}
export type PageHandler_ApiInitComplete_Params = PageHandler_ApiInitComplete_ParamsMojoType;
export declare interface PageHandler_MakeTabGroupShared_ParamsMojoType {
    tabGroupId: string;
    groupId: string;
    accessToken: string;
}
export type PageHandler_MakeTabGroupShared_Params = PageHandler_MakeTabGroupShared_ParamsMojoType;
export declare interface PageHandler_MakeTabGroupShared_ResponseParamsMojoType {
    url: (url_mojom_Url | null);
}
export type PageHandler_MakeTabGroupShared_ResponseParams = PageHandler_MakeTabGroupShared_ResponseParamsMojoType;
export declare interface PageHandler_GetShareLink_ParamsMojoType {
    groupId: string;
    accessToken: string;
}
export type PageHandler_GetShareLink_Params = PageHandler_GetShareLink_ParamsMojoType;
export declare interface PageHandler_GetShareLink_ResponseParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_GetShareLink_ResponseParams = PageHandler_GetShareLink_ResponseParamsMojoType;
export declare interface PageHandler_GetTabGroupPreview_ParamsMojoType {
    groupId: string;
    accessToken: string;
}
export type PageHandler_GetTabGroupPreview_Params = PageHandler_GetTabGroupPreview_ParamsMojoType;
export declare interface PageHandler_GetTabGroupPreview_ResponseParamsMojoType {
    groupPreview: GroupPreview;
}
export type PageHandler_GetTabGroupPreview_ResponseParams = PageHandler_GetTabGroupPreview_ResponseParamsMojoType;
export declare interface PageHandler_OpenTabGroup_ParamsMojoType {
    groupId: string;
}
export type PageHandler_OpenTabGroup_Params = PageHandler_OpenTabGroup_ParamsMojoType;
export declare interface PageHandler_AboutToUnShareTabGroup_ParamsMojoType {
    tabGroupId: string;
}
export type PageHandler_AboutToUnShareTabGroup_Params = PageHandler_AboutToUnShareTabGroup_ParamsMojoType;
export declare interface PageHandler_OnTabGroupUnShareComplete_ParamsMojoType {
    tabGroupId: string;
}
export type PageHandler_OnTabGroupUnShareComplete_Params = PageHandler_OnTabGroupUnShareComplete_ParamsMojoType;
export declare interface PageHandler_OnGroupAction_ParamsMojoType {
    action: GroupAction;
    progress: GroupActionProgress;
}
export type PageHandler_OnGroupAction_Params = PageHandler_OnGroupAction_ParamsMojoType;
export declare interface Page_OnAccessTokenFetched_ParamsMojoType {
    accessToken: string;
}
export type Page_OnAccessTokenFetched_Params = Page_OnAccessTokenFetched_ParamsMojoType;
export declare interface Page_ReadGroups_ParamsMojoType {
    readGroupsParams: ReadGroupsParams;
}
export type Page_ReadGroups_Params = Page_ReadGroups_ParamsMojoType;
export declare interface Page_ReadGroups_ResponseParamsMojoType {
    result: ReadGroupsResult;
}
export type Page_ReadGroups_ResponseParams = Page_ReadGroups_ResponseParamsMojoType;
export declare interface Page_ReadGroupWithToken_ParamsMojoType {
    param: ReadGroupWithTokenParam;
}
export type Page_ReadGroupWithToken_Params = Page_ReadGroupWithToken_ParamsMojoType;
export declare interface Page_ReadGroupWithToken_ResponseParamsMojoType {
    result: ReadGroupWithTokenResult;
}
export type Page_ReadGroupWithToken_ResponseParams = Page_ReadGroupWithToken_ResponseParamsMojoType;
export declare interface Page_DeleteGroup_ParamsMojoType {
    groupId: string;
}
export type Page_DeleteGroup_Params = Page_DeleteGroup_ParamsMojoType;
export declare interface Page_DeleteGroup_ResponseParamsMojoType {
    statusCode: number;
}
export type Page_DeleteGroup_ResponseParams = Page_DeleteGroup_ResponseParamsMojoType;
export declare interface Page_LeaveGroup_ParamsMojoType {
    groupId: string;
}
export type Page_LeaveGroup_Params = Page_LeaveGroup_ParamsMojoType;
export declare interface Page_LeaveGroup_ResponseParamsMojoType {
    statusCode: number;
}
export type Page_LeaveGroup_ResponseParams = Page_LeaveGroup_ResponseParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
