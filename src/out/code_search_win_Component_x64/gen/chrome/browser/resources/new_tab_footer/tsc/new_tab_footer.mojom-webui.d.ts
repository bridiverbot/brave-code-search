import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Point as gfx_mojom_Point } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const NewTabPageTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum NewTabPageType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kFirstPartyWebUI = 0,
    kExtension = 1,
    kOther = 2
}
export type NewTabFooterHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<NewTabFooterHandlerFactoryPendingReceiver>;
export declare class NewTabFooterHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<NewTabFooterHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<NewTabFooterHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | NewTabFooterHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface NewTabFooterHandlerFactoryInterface {
    createNewTabFooterHandler(document: NewTabFooterDocumentRemote, handler: NewTabFooterHandlerPendingReceiver): void;
}
export declare class NewTabFooterHandlerFactoryRemote implements NewTabFooterHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<NewTabFooterHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<NewTabFooterHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | NewTabFooterHandlerFactoryPendingReceiverEndpoint);
    createNewTabFooterHandler(document: NewTabFooterDocumentRemote, handler: NewTabFooterHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the NewTabFooterHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class NewTabFooterHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<NewTabFooterHandlerFactoryRemote, NewTabFooterHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NewTabFooterHandlerFactoryRemote, NewTabFooterHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: NewTabFooterHandlerFactoryInterface);
}
export declare class NewTabFooterHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): NewTabFooterHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the NewTabFooterHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class NewTabFooterHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<NewTabFooterHandlerFactoryRemote, NewTabFooterHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NewTabFooterHandlerFactoryRemote, NewTabFooterHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createNewTabFooterHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(document: NewTabFooterDocumentRemote, handler: NewTabFooterHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type NewTabFooterHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<NewTabFooterHandlerPendingReceiver>;
export declare class NewTabFooterHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<NewTabFooterHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<NewTabFooterHandlerPendingReceiver>;
    constructor(handle: MojoHandle | NewTabFooterHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface NewTabFooterHandlerInterface {
    updateNtpExtensionName(): void;
    updateManagementNotice(): void;
    updateAttachedTabState(): void;
    updateBackgroundAttribution(): void;
    openExtensionOptionsPageWithFallback(): void;
    openManagementPage(): void;
    openUrlInCurrentTab(url: url_mojom_Url): void;
    showContextMenu(point: gfx_mojom_Point): void;
    notifyCustomizationButtonVisible(): void;
}
export declare class NewTabFooterHandlerRemote implements NewTabFooterHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<NewTabFooterHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<NewTabFooterHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | NewTabFooterHandlerPendingReceiverEndpoint);
    updateNtpExtensionName(): void;
    updateManagementNotice(): void;
    updateAttachedTabState(): void;
    updateBackgroundAttribution(): void;
    openExtensionOptionsPageWithFallback(): void;
    openManagementPage(): void;
    openUrlInCurrentTab(url: url_mojom_Url): void;
    showContextMenu(point: gfx_mojom_Point): void;
    notifyCustomizationButtonVisible(): void;
}
/**
 * An object which receives request messages for the NewTabFooterHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class NewTabFooterHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<NewTabFooterHandlerRemote, NewTabFooterHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NewTabFooterHandlerRemote, NewTabFooterHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: NewTabFooterHandlerInterface);
}
export declare class NewTabFooterHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): NewTabFooterHandlerRemote;
}
/**
 * An object which receives request messages for the NewTabFooterHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class NewTabFooterHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<NewTabFooterHandlerRemote, NewTabFooterHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NewTabFooterHandlerRemote, NewTabFooterHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    updateNtpExtensionName: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateManagementNotice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateAttachedTabState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateBackgroundAttribution: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openExtensionOptionsPageWithFallback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openManagementPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openUrlInCurrentTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    showContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(point: gfx_mojom_Point) => any>;
    notifyCustomizationButtonVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type NewTabFooterDocumentPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<NewTabFooterDocumentPendingReceiver>;
export declare class NewTabFooterDocumentPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<NewTabFooterDocument> {
    handle: mojo.internal.interfaceSupport.Endpoint<NewTabFooterDocumentPendingReceiver>;
    constructor(handle: MojoHandle | NewTabFooterDocumentPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface NewTabFooterDocumentInterface {
    setNtpExtensionName(name: string): void;
    setManagementNotice(notice: (ManagementNotice | null)): void;
    attachedTabStateUpdated(ntpType: NewTabPageType, canCustomizeChrome: boolean): void;
    setBackgroundAttribution(backgroundImageAttribution: (BackgroundAttribution | null)): void;
}
export declare class NewTabFooterDocumentRemote implements NewTabFooterDocumentInterface, mojo.internal.interfaceSupport.InterfaceRemote<NewTabFooterDocumentPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<NewTabFooterDocumentPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | NewTabFooterDocumentPendingReceiverEndpoint);
    setNtpExtensionName(name: string): void;
    setManagementNotice(notice: (ManagementNotice | null)): void;
    attachedTabStateUpdated(ntpType: NewTabPageType, canCustomizeChrome: boolean): void;
    setBackgroundAttribution(backgroundImageAttribution: (BackgroundAttribution | null)): void;
}
/**
 * An object which receives request messages for the NewTabFooterDocument
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class NewTabFooterDocumentReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<NewTabFooterDocumentRemote, NewTabFooterDocumentPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NewTabFooterDocumentRemote, NewTabFooterDocumentPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: NewTabFooterDocumentInterface);
}
export declare class NewTabFooterDocument {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): NewTabFooterDocumentRemote;
}
/**
 * An object which receives request messages for the NewTabFooterDocument
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class NewTabFooterDocumentCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<NewTabFooterDocumentRemote, NewTabFooterDocumentPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NewTabFooterDocumentRemote, NewTabFooterDocumentPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setNtpExtensionName: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(name: string) => any>;
    setManagementNotice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(notice: (ManagementNotice | null)) => any>;
    attachedTabStateUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ntpType: NewTabPageType, canCustomizeChrome: boolean) => any>;
    setBackgroundAttribution: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(backgroundImageAttribution: (BackgroundAttribution | null)) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ManagementNoticeSpec: {
    $: mojo.internal.MojomType;
};
export declare const BackgroundAttributionSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandler_UpdateManagementNotice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandler_OpenManagementPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandler_ShowContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterDocument_SetNtpExtensionName_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterDocument_SetManagementNotice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ManagementNoticeMojoType {
    text: string;
    customBitmapDataUrl: (url_mojom_Url | null);
}
export type ManagementNotice = ManagementNoticeMojoType;
export declare interface BackgroundAttributionMojoType {
    name: string;
    url: (url_mojom_Url | null);
}
export type BackgroundAttribution = BackgroundAttributionMojoType;
export declare interface NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsMojoType {
    document: NewTabFooterDocumentRemote;
    handler: NewTabFooterHandlerPendingReceiver;
}
export type NewTabFooterHandlerFactory_CreateNewTabFooterHandler_Params = NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsMojoType;
export declare interface NewTabFooterHandler_UpdateNtpExtensionName_ParamsMojoType {
}
export type NewTabFooterHandler_UpdateNtpExtensionName_Params = NewTabFooterHandler_UpdateNtpExtensionName_ParamsMojoType;
export declare interface NewTabFooterHandler_UpdateManagementNotice_ParamsMojoType {
}
export type NewTabFooterHandler_UpdateManagementNotice_Params = NewTabFooterHandler_UpdateManagementNotice_ParamsMojoType;
export declare interface NewTabFooterHandler_UpdateAttachedTabState_ParamsMojoType {
}
export type NewTabFooterHandler_UpdateAttachedTabState_Params = NewTabFooterHandler_UpdateAttachedTabState_ParamsMojoType;
export declare interface NewTabFooterHandler_UpdateBackgroundAttribution_ParamsMojoType {
}
export type NewTabFooterHandler_UpdateBackgroundAttribution_Params = NewTabFooterHandler_UpdateBackgroundAttribution_ParamsMojoType;
export declare interface NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsMojoType {
}
export type NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_Params = NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsMojoType;
export declare interface NewTabFooterHandler_OpenManagementPage_ParamsMojoType {
}
export type NewTabFooterHandler_OpenManagementPage_Params = NewTabFooterHandler_OpenManagementPage_ParamsMojoType;
export declare interface NewTabFooterHandler_OpenUrlInCurrentTab_ParamsMojoType {
    url: url_mojom_Url;
}
export type NewTabFooterHandler_OpenUrlInCurrentTab_Params = NewTabFooterHandler_OpenUrlInCurrentTab_ParamsMojoType;
export declare interface NewTabFooterHandler_ShowContextMenu_ParamsMojoType {
    point: gfx_mojom_Point;
}
export type NewTabFooterHandler_ShowContextMenu_Params = NewTabFooterHandler_ShowContextMenu_ParamsMojoType;
export declare interface NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsMojoType {
}
export type NewTabFooterHandler_NotifyCustomizationButtonVisible_Params = NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsMojoType;
export declare interface NewTabFooterDocument_SetNtpExtensionName_ParamsMojoType {
    name: string;
}
export type NewTabFooterDocument_SetNtpExtensionName_Params = NewTabFooterDocument_SetNtpExtensionName_ParamsMojoType;
export declare interface NewTabFooterDocument_SetManagementNotice_ParamsMojoType {
    notice: (ManagementNotice | null);
}
export type NewTabFooterDocument_SetManagementNotice_Params = NewTabFooterDocument_SetManagementNotice_ParamsMojoType;
export declare interface NewTabFooterDocument_AttachedTabStateUpdated_ParamsMojoType {
    ntpType: NewTabPageType;
    canCustomizeChrome: boolean;
}
export type NewTabFooterDocument_AttachedTabStateUpdated_Params = NewTabFooterDocument_AttachedTabStateUpdated_ParamsMojoType;
export declare interface NewTabFooterDocument_SetBackgroundAttribution_ParamsMojoType {
    backgroundImageAttribution: (BackgroundAttribution | null);
}
export type NewTabFooterDocument_SetBackgroundAttribution_Params = NewTabFooterDocument_SetBackgroundAttribution_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<NewTabFooterHandlerInterface, NewTabFooterDocumentCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<NewTabFooterHandlerInterface, NewTabFooterDocumentRemote, NewTabFooterHandlerPendingReceiver, NewTabFooterDocumentPendingReceiver, NewTabFooterDocumentCallbackRouter, NewTabFooterHandlerRemote>;
