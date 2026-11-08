import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ActionIdSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ActionId {
    MIN_VALUE = 0,
    MAX_VALUE = 37,
    kShowBookmarks = 0,
    kShowHistoryCluster = 1,
    kShowReadAnything = 2,
    kShowReadingList = 3,
    kShowLensOverlay = 4,
    kShowSearchCompanion = 5,
    kHome = 6,
    kForward = 7,
    kNewIncognitoWindow = 8,
    kShowPasswordManager = 9,
    kShowPaymentMethods = 10,
    kShowAddresses = 11,
    kShowDownloads = 12,
    kClearBrowsingData = 13,
    kPrint = 14,
    kShowTranslate = 15,
    kSendTabToSelf = 16,
    kQrCodeGenerator = 17,
    kRouteMedia = 18,
    kTaskManager = 19,
    kDevTools = 20,
    kShowChromeLabs = 21,
    kCopyLink = 22,
    kTabSearch = 23,
    kSplitTab = 24,
    kContextualTasks = 25,
    kTtc = 26,
    kShowTabsFromOtherDevices = 27,
    kShowAddBookmarkButton = 28,
    kShowWallet = 29,
    kShowAIChat = 30,
    kShowVPN = 31,
    kShowSidePanel = 32,
    kShowScreenshot = 33,
    kShowVerticalTabToggleButton = 34,
    kShowReward = 35,
    kShowBraveNews = 36,
    kShowPwaInstall = 37
}
export declare const CategoryIdSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CategoryId {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kNavigation = 0,
    kYourChrome = 1,
    kTools = 2,
    kAddressBar = 3
}
export type CustomizeToolbarHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeToolbarHandlerFactoryPendingReceiver>;
export declare class CustomizeToolbarHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeToolbarHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeToolbarHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeToolbarHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeToolbarHandlerFactoryInterface {
    createCustomizeToolbarHandler(client: CustomizeToolbarClientRemote, handler: CustomizeToolbarHandlerPendingReceiver): void;
}
export declare class CustomizeToolbarHandlerFactoryRemote implements CustomizeToolbarHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeToolbarHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeToolbarHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeToolbarHandlerFactoryPendingReceiverEndpoint);
    createCustomizeToolbarHandler(client: CustomizeToolbarClientRemote, handler: CustomizeToolbarHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the CustomizeToolbarHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeToolbarHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeToolbarHandlerFactoryRemote, CustomizeToolbarHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeToolbarHandlerFactoryRemote, CustomizeToolbarHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeToolbarHandlerFactoryInterface);
}
export declare class CustomizeToolbarHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeToolbarHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the CustomizeToolbarHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeToolbarHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeToolbarHandlerFactoryRemote, CustomizeToolbarHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeToolbarHandlerFactoryRemote, CustomizeToolbarHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createCustomizeToolbarHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: CustomizeToolbarClientRemote, handler: CustomizeToolbarHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomizeToolbarHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeToolbarHandlerPendingReceiver>;
export declare class CustomizeToolbarHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeToolbarHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeToolbarHandlerPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeToolbarHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeToolbarHandlerInterface {
    listActions(): Promise<{
        actions: Action[];
    }>;
    listCategories(): Promise<{
        categories: Category[];
    }>;
    pinAction(actionId: ActionId, pinned: boolean): void;
    getIsCustomized(): Promise<{
        customized: boolean;
    }>;
    resetToDefault(): void;
}
export declare class CustomizeToolbarHandlerRemote implements CustomizeToolbarHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeToolbarHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeToolbarHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeToolbarHandlerPendingReceiverEndpoint);
    listActions(): Promise<{
        actions: Action[];
    }>;
    listCategories(): Promise<{
        categories: Category[];
    }>;
    pinAction(actionId: ActionId, pinned: boolean): void;
    getIsCustomized(): Promise<{
        customized: boolean;
    }>;
    resetToDefault(): void;
}
/**
 * An object which receives request messages for the CustomizeToolbarHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeToolbarHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeToolbarHandlerRemote, CustomizeToolbarHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeToolbarHandlerRemote, CustomizeToolbarHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeToolbarHandlerInterface);
}
export declare class CustomizeToolbarHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeToolbarHandlerRemote;
}
/**
 * An object which receives request messages for the CustomizeToolbarHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeToolbarHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeToolbarHandlerRemote, CustomizeToolbarHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeToolbarHandlerRemote, CustomizeToolbarHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    listActions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    listCategories: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    pinAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionId: ActionId, pinned: boolean) => any>;
    getIsCustomized: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    resetToDefault: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomizeToolbarClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeToolbarClientPendingReceiver>;
export declare class CustomizeToolbarClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeToolbarClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeToolbarClientPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeToolbarClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeToolbarClientInterface {
    setActionPinned(actionId: ActionId, pinned: boolean): void;
    notifyActionsUpdated(): void;
}
export declare class CustomizeToolbarClientRemote implements CustomizeToolbarClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeToolbarClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeToolbarClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeToolbarClientPendingReceiverEndpoint);
    setActionPinned(actionId: ActionId, pinned: boolean): void;
    notifyActionsUpdated(): void;
}
/**
 * An object which receives request messages for the CustomizeToolbarClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeToolbarClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeToolbarClientRemote, CustomizeToolbarClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeToolbarClientRemote, CustomizeToolbarClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeToolbarClientInterface);
}
export declare class CustomizeToolbarClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeToolbarClientRemote;
}
/**
 * An object which receives request messages for the CustomizeToolbarClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeToolbarClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeToolbarClientRemote, CustomizeToolbarClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeToolbarClientRemote, CustomizeToolbarClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setActionPinned: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionId: ActionId, pinned: boolean) => any>;
    notifyActionsUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ActionSpec: {
    $: mojo.internal.MojomType;
};
export declare const CategorySpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarHandler_ListActions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarHandler_ListActions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarHandler_ListCategories_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarHandler_ListCategories_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarHandler_PinAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarHandler_GetIsCustomized_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarHandler_GetIsCustomized_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarHandler_ResetToDefault_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarClient_SetActionPinned_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ActionMojoType {
    id: ActionId;
    pinned: boolean;
    hasEnterpriseControlledPinnedState: boolean;
    displayName: string;
    category: CategoryId;
    iconUrl: url_mojom_Url;
}
export type Action = ActionMojoType;
export declare interface CategoryMojoType {
    id: CategoryId;
    displayName: string;
}
export type Category = CategoryMojoType;
export declare interface CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsMojoType {
    client: CustomizeToolbarClientRemote;
    handler: CustomizeToolbarHandlerPendingReceiver;
}
export type CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_Params = CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsMojoType;
export declare interface CustomizeToolbarHandler_ListActions_ParamsMojoType {
}
export type CustomizeToolbarHandler_ListActions_Params = CustomizeToolbarHandler_ListActions_ParamsMojoType;
export declare interface CustomizeToolbarHandler_ListActions_ResponseParamsMojoType {
    actions: Action[];
}
export type CustomizeToolbarHandler_ListActions_ResponseParams = CustomizeToolbarHandler_ListActions_ResponseParamsMojoType;
export declare interface CustomizeToolbarHandler_ListCategories_ParamsMojoType {
}
export type CustomizeToolbarHandler_ListCategories_Params = CustomizeToolbarHandler_ListCategories_ParamsMojoType;
export declare interface CustomizeToolbarHandler_ListCategories_ResponseParamsMojoType {
    categories: Category[];
}
export type CustomizeToolbarHandler_ListCategories_ResponseParams = CustomizeToolbarHandler_ListCategories_ResponseParamsMojoType;
export declare interface CustomizeToolbarHandler_PinAction_ParamsMojoType {
    actionId: ActionId;
    pinned: boolean;
}
export type CustomizeToolbarHandler_PinAction_Params = CustomizeToolbarHandler_PinAction_ParamsMojoType;
export declare interface CustomizeToolbarHandler_GetIsCustomized_ParamsMojoType {
}
export type CustomizeToolbarHandler_GetIsCustomized_Params = CustomizeToolbarHandler_GetIsCustomized_ParamsMojoType;
export declare interface CustomizeToolbarHandler_GetIsCustomized_ResponseParamsMojoType {
    customized: boolean;
}
export type CustomizeToolbarHandler_GetIsCustomized_ResponseParams = CustomizeToolbarHandler_GetIsCustomized_ResponseParamsMojoType;
export declare interface CustomizeToolbarHandler_ResetToDefault_ParamsMojoType {
}
export type CustomizeToolbarHandler_ResetToDefault_Params = CustomizeToolbarHandler_ResetToDefault_ParamsMojoType;
export declare interface CustomizeToolbarClient_SetActionPinned_ParamsMojoType {
    actionId: ActionId;
    pinned: boolean;
}
export type CustomizeToolbarClient_SetActionPinned_Params = CustomizeToolbarClient_SetActionPinned_ParamsMojoType;
export declare interface CustomizeToolbarClient_NotifyActionsUpdated_ParamsMojoType {
}
export type CustomizeToolbarClient_NotifyActionsUpdated_Params = CustomizeToolbarClient_NotifyActionsUpdated_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<CustomizeToolbarHandlerInterface, CustomizeToolbarClientCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<CustomizeToolbarHandlerInterface, CustomizeToolbarClientRemote, CustomizeToolbarHandlerPendingReceiver, CustomizeToolbarClientPendingReceiver, CustomizeToolbarClientCallbackRouter, CustomizeToolbarHandlerRemote>;
