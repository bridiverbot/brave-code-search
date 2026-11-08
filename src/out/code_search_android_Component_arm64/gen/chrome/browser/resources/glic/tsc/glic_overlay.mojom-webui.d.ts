import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
export declare const ErrorPanelTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ErrorPanelType {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    kOffline = 0,
    kError = 1,
    kUnavailable = 2,
    kIneligibleAccount = 3,
    kDisabledByAdmin = 4,
    kDisabledByAdminWithLink = 5,
    kSignIn = 6,
    kLocationMismatch = 7
}
export declare const LoadingStyleSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LoadingStyle {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kFloating = 0,
    kSidePanel = 1
}
export type GlicOverlayPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GlicOverlayPagePendingReceiver>;
export declare class GlicOverlayPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GlicOverlayPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<GlicOverlayPagePendingReceiver>;
    constructor(handle: MojoHandle | GlicOverlayPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GlicOverlayPageInterface {
    setOverlayState(state: OverlayState): void;
}
export declare class GlicOverlayPageRemote implements GlicOverlayPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<GlicOverlayPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GlicOverlayPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GlicOverlayPagePendingReceiverEndpoint);
    setOverlayState(state: OverlayState): void;
}
/**
 * An object which receives request messages for the GlicOverlayPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GlicOverlayPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GlicOverlayPageRemote, GlicOverlayPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicOverlayPageRemote, GlicOverlayPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GlicOverlayPageInterface);
}
export declare class GlicOverlayPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GlicOverlayPageRemote;
}
/**
 * An object which receives request messages for the GlicOverlayPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GlicOverlayPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GlicOverlayPageRemote, GlicOverlayPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicOverlayPageRemote, GlicOverlayPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setOverlayState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: OverlayState) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GlicOverlayPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GlicOverlayPageHandlerPendingReceiver>;
export declare class GlicOverlayPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GlicOverlayPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<GlicOverlayPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | GlicOverlayPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GlicOverlayPageHandlerInterface {
    onRetryClicked(): void;
    onSignInClicked(): void;
    onProfilePickerClicked(): void;
    onIneligibleAccountHelpClicked(): void;
    onLocationMismatchHelpClicked(): void;
    onDisabledByAdminCloseClicked(): void;
    onDisabledByAdminLinkClicked(): void;
    onClosePanelClicked(): void;
    onShowErrorClicked(): void;
}
export declare class GlicOverlayPageHandlerRemote implements GlicOverlayPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<GlicOverlayPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GlicOverlayPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GlicOverlayPageHandlerPendingReceiverEndpoint);
    onRetryClicked(): void;
    onSignInClicked(): void;
    onProfilePickerClicked(): void;
    onIneligibleAccountHelpClicked(): void;
    onLocationMismatchHelpClicked(): void;
    onDisabledByAdminCloseClicked(): void;
    onDisabledByAdminLinkClicked(): void;
    onClosePanelClicked(): void;
    onShowErrorClicked(): void;
}
/**
 * An object which receives request messages for the GlicOverlayPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GlicOverlayPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GlicOverlayPageHandlerRemote, GlicOverlayPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicOverlayPageHandlerRemote, GlicOverlayPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GlicOverlayPageHandlerInterface);
}
export declare class GlicOverlayPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GlicOverlayPageHandlerRemote;
}
/**
 * An object which receives request messages for the GlicOverlayPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GlicOverlayPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GlicOverlayPageHandlerRemote, GlicOverlayPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicOverlayPageHandlerRemote, GlicOverlayPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onRetryClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onSignInClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onProfilePickerClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onIneligibleAccountHelpClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onLocationMismatchHelpClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onDisabledByAdminCloseClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onDisabledByAdminLinkClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onClosePanelClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onShowErrorClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GlicOverlayPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GlicOverlayPageHandlerFactoryPendingReceiver>;
export declare class GlicOverlayPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GlicOverlayPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<GlicOverlayPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | GlicOverlayPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GlicOverlayPageHandlerFactoryInterface {
    createPageHandler(page: GlicOverlayPageRemote, handler: GlicOverlayPageHandlerPendingReceiver): void;
}
export declare class GlicOverlayPageHandlerFactoryRemote implements GlicOverlayPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<GlicOverlayPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GlicOverlayPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GlicOverlayPageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: GlicOverlayPageRemote, handler: GlicOverlayPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the GlicOverlayPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GlicOverlayPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GlicOverlayPageHandlerFactoryRemote, GlicOverlayPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicOverlayPageHandlerFactoryRemote, GlicOverlayPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GlicOverlayPageHandlerFactoryInterface);
}
export declare class GlicOverlayPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GlicOverlayPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the GlicOverlayPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GlicOverlayPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GlicOverlayPageHandlerFactoryRemote, GlicOverlayPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicOverlayPageHandlerFactoryRemote, GlicOverlayPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: GlicOverlayPageRemote, handler: GlicOverlayPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const GlicOverlayPage_SetOverlayState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandler_OnRetryClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandler_OnSignInClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandler_OnProfilePickerClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandler_OnIneligibleAccountHelpClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandler_OnLocationMismatchHelpClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandler_OnDisabledByAdminCloseClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandler_OnDisabledByAdminLinkClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandler_OnClosePanelClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandler_OnShowErrorClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OverlayStateSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GlicOverlayPage_SetOverlayState_ParamsMojoType {
    state: OverlayState;
}
export type GlicOverlayPage_SetOverlayState_Params = GlicOverlayPage_SetOverlayState_ParamsMojoType;
export declare interface GlicOverlayPageHandler_OnRetryClicked_ParamsMojoType {
}
export type GlicOverlayPageHandler_OnRetryClicked_Params = GlicOverlayPageHandler_OnRetryClicked_ParamsMojoType;
export declare interface GlicOverlayPageHandler_OnSignInClicked_ParamsMojoType {
}
export type GlicOverlayPageHandler_OnSignInClicked_Params = GlicOverlayPageHandler_OnSignInClicked_ParamsMojoType;
export declare interface GlicOverlayPageHandler_OnProfilePickerClicked_ParamsMojoType {
}
export type GlicOverlayPageHandler_OnProfilePickerClicked_Params = GlicOverlayPageHandler_OnProfilePickerClicked_ParamsMojoType;
export declare interface GlicOverlayPageHandler_OnIneligibleAccountHelpClicked_ParamsMojoType {
}
export type GlicOverlayPageHandler_OnIneligibleAccountHelpClicked_Params = GlicOverlayPageHandler_OnIneligibleAccountHelpClicked_ParamsMojoType;
export declare interface GlicOverlayPageHandler_OnLocationMismatchHelpClicked_ParamsMojoType {
}
export type GlicOverlayPageHandler_OnLocationMismatchHelpClicked_Params = GlicOverlayPageHandler_OnLocationMismatchHelpClicked_ParamsMojoType;
export declare interface GlicOverlayPageHandler_OnDisabledByAdminCloseClicked_ParamsMojoType {
}
export type GlicOverlayPageHandler_OnDisabledByAdminCloseClicked_Params = GlicOverlayPageHandler_OnDisabledByAdminCloseClicked_ParamsMojoType;
export declare interface GlicOverlayPageHandler_OnDisabledByAdminLinkClicked_ParamsMojoType {
}
export type GlicOverlayPageHandler_OnDisabledByAdminLinkClicked_Params = GlicOverlayPageHandler_OnDisabledByAdminLinkClicked_ParamsMojoType;
export declare interface GlicOverlayPageHandler_OnClosePanelClicked_ParamsMojoType {
}
export type GlicOverlayPageHandler_OnClosePanelClicked_Params = GlicOverlayPageHandler_OnClosePanelClicked_ParamsMojoType;
export declare interface GlicOverlayPageHandler_OnShowErrorClicked_ParamsMojoType {
}
export type GlicOverlayPageHandler_OnShowErrorClicked_Params = GlicOverlayPageHandler_OnShowErrorClicked_ParamsMojoType;
export declare interface GlicOverlayPageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: GlicOverlayPageRemote;
    handler: GlicOverlayPageHandlerPendingReceiver;
}
export type GlicOverlayPageHandlerFactory_CreatePageHandler_Params = GlicOverlayPageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface OverlayState {
    loading?: LoadingStyle;
    error?: ErrorPanelType;
}
export declare enum OverlayStateFieldTags {
    LOADING = 0,
    ERROR = 1
}
export declare function whichOverlayState(u: OverlayState): OverlayStateFieldTags;
export type BrowserProxy = MojoBrowserProxy<GlicOverlayPageHandlerInterface, GlicOverlayPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<GlicOverlayPageHandlerInterface, GlicOverlayPageRemote, GlicOverlayPageHandlerPendingReceiver, GlicOverlayPagePendingReceiver, GlicOverlayPageCallbackRouter, GlicOverlayPageHandlerRemote>;
