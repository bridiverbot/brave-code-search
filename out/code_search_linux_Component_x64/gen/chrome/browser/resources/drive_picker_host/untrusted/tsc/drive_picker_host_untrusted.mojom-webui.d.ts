import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { DrivePickerResultHandlerRemote as drivePickerHost_mojom_DrivePickerResultHandlerRemote } from './drive_picker_result_handler.mojom-webui.js';
import { ProtoWrapper as mojoBase_mojom_ProtoWrapper } from '//resources/mojo/mojo/public/mojom/base/proto_wrapper.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    onConsentKitIframeMessage(messageWrapper: mojoBase_mojom_ProtoWrapper): void;
    onConsentKitPrivacyFlowResult(resultWrapper: mojoBase_mojom_ProtoWrapper): void;
    onConsentKitError(errorMessage: string): void;
    onShowErrorDialog(): void;
    onHideErrorDialog(): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    onConsentKitIframeMessage(messageWrapper: mojoBase_mojom_ProtoWrapper): void;
    onConsentKitPrivacyFlowResult(resultWrapper: mojoBase_mojom_ProtoWrapper): void;
    onConsentKitError(errorMessage: string): void;
    onShowErrorDialog(): void;
    onHideErrorDialog(): void;
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
    onConsentKitIframeMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(messageWrapper: mojoBase_mojom_ProtoWrapper) => any>;
    onConsentKitPrivacyFlowResult: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultWrapper: mojoBase_mojom_ProtoWrapper) => any>;
    onConsentKitError: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(errorMessage: string) => any>;
    onShowErrorDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onHideErrorDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
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
    showDrivePicker(resultHandler: drivePickerHost_mojom_DrivePickerResultHandlerRemote, keys: DrivePickerKeys): void;
    loadConsentKitUrl(consentKitUrl: url_mojom_Url): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    showDrivePicker(resultHandler: drivePickerHost_mojom_DrivePickerResultHandlerRemote, keys: DrivePickerKeys): void;
    loadConsentKitUrl(consentKitUrl: url_mojom_Url): void;
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
    showDrivePicker: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultHandler: drivePickerHost_mojom_DrivePickerResultHandlerRemote, keys: DrivePickerKeys) => any>;
    loadConsentKitUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(consentKitUrl: url_mojom_Url) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
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
export type DrivePickerBridgePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DrivePickerBridgePendingReceiver>;
export declare class DrivePickerBridgePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DrivePickerBridge> {
    handle: mojo.internal.interfaceSupport.Endpoint<DrivePickerBridgePendingReceiver>;
    constructor(handle: MojoHandle | DrivePickerBridgePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DrivePickerBridgeInterface {
    showDrivePicker(resultHandler: drivePickerHost_mojom_DrivePickerResultHandlerRemote, keys: DrivePickerKeys): void;
    loadConsentKitUrl(consentKitUrl: url_mojom_Url): void;
}
export declare class DrivePickerBridgeRemote implements DrivePickerBridgeInterface, mojo.internal.interfaceSupport.InterfaceRemote<DrivePickerBridgePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DrivePickerBridgePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DrivePickerBridgePendingReceiverEndpoint);
    showDrivePicker(resultHandler: drivePickerHost_mojom_DrivePickerResultHandlerRemote, keys: DrivePickerKeys): void;
    loadConsentKitUrl(consentKitUrl: url_mojom_Url): void;
}
/**
 * An object which receives request messages for the DrivePickerBridge
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DrivePickerBridgeReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DrivePickerBridgeRemote, DrivePickerBridgePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DrivePickerBridgeRemote, DrivePickerBridgePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DrivePickerBridgeInterface);
}
export declare class DrivePickerBridge {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DrivePickerBridgeRemote;
}
/**
 * An object which receives request messages for the DrivePickerBridge
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DrivePickerBridgeCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DrivePickerBridgeRemote, DrivePickerBridgePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DrivePickerBridgeRemote, DrivePickerBridgePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    showDrivePicker: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultHandler: drivePickerHost_mojom_DrivePickerResultHandlerRemote, keys: DrivePickerKeys) => any>;
    loadConsentKitUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(consentKitUrl: url_mojom_Url) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const DrivePickerKeysSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnConsentKitIframeMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnConsentKitPrivacyFlowResult_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnConsentKitError_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnShowErrorDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnHideErrorDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ShowDrivePicker_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_LoadConsentKitUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DrivePickerBridge_ShowDrivePicker_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DrivePickerBridge_LoadConsentKitUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DrivePickerKeysMojoType {
    oauthToken: string;
    apiKey: string;
    appId: string;
}
export type DrivePickerKeys = DrivePickerKeysMojoType;
export declare interface PageHandler_OnConsentKitIframeMessage_ParamsMojoType {
    messageWrapper: mojoBase_mojom_ProtoWrapper;
}
export type PageHandler_OnConsentKitIframeMessage_Params = PageHandler_OnConsentKitIframeMessage_ParamsMojoType;
export declare interface PageHandler_OnConsentKitPrivacyFlowResult_ParamsMojoType {
    resultWrapper: mojoBase_mojom_ProtoWrapper;
}
export type PageHandler_OnConsentKitPrivacyFlowResult_Params = PageHandler_OnConsentKitPrivacyFlowResult_ParamsMojoType;
export declare interface PageHandler_OnConsentKitError_ParamsMojoType {
    errorMessage: string;
}
export type PageHandler_OnConsentKitError_Params = PageHandler_OnConsentKitError_ParamsMojoType;
export declare interface PageHandler_OnShowErrorDialog_ParamsMojoType {
}
export type PageHandler_OnShowErrorDialog_Params = PageHandler_OnShowErrorDialog_ParamsMojoType;
export declare interface PageHandler_OnHideErrorDialog_ParamsMojoType {
}
export type PageHandler_OnHideErrorDialog_Params = PageHandler_OnHideErrorDialog_ParamsMojoType;
export declare interface Page_ShowDrivePicker_ParamsMojoType {
    resultHandler: drivePickerHost_mojom_DrivePickerResultHandlerRemote;
    keys: DrivePickerKeys;
}
export type Page_ShowDrivePicker_Params = Page_ShowDrivePicker_ParamsMojoType;
export declare interface Page_LoadConsentKitUrl_ParamsMojoType {
    consentKitUrl: url_mojom_Url;
}
export type Page_LoadConsentKitUrl_Params = Page_LoadConsentKitUrl_ParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface DrivePickerBridge_ShowDrivePicker_ParamsMojoType {
    resultHandler: drivePickerHost_mojom_DrivePickerResultHandlerRemote;
    keys: DrivePickerKeys;
}
export type DrivePickerBridge_ShowDrivePicker_Params = DrivePickerBridge_ShowDrivePicker_ParamsMojoType;
export declare interface DrivePickerBridge_LoadConsentKitUrl_ParamsMojoType {
    consentKitUrl: url_mojom_Url;
}
export type DrivePickerBridge_LoadConsentKitUrl_Params = DrivePickerBridge_LoadConsentKitUrl_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
