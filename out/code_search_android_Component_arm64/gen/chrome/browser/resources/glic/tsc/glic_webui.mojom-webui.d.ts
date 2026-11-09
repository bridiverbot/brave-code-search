import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { PanelStateKind as glic_mojom_PanelStateKind } from './glic_enums.mojom-webui.js';
import { TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Size as gfx_mojom_Size } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ProfileReadyStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ProfileReadyState {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kUnknownError = 0,
    kSignInRequired = 1,
    kReady = 2,
    kIneligible = 3,
    kDisabledByAdmin = 4,
    kLocationMismatch = 5,
    kIneligibleAccount = 6
}
export declare const ZoomActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ZoomAction {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kZoomIn = 0,
    kZoomOut = 1,
    kReset = 2
}
export declare const WebClientStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum WebClientState {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUninitialized = 0,
    kWarmed = 1,
    kResponsive = 2,
    kUnresponsive = 3,
    kError = 4
}
export declare const GuestPageTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GuestPageType {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kRegular = 0,
    kLogin = 1,
    kGuestError = 2,
    kLoadError = 3,
    kDisabledByAdmin = 4,
    kSecurityInterstitial = 5
}
export declare const WebUiStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum WebUiState {
    MIN_VALUE = 0,
    MAX_VALUE = 16,
    kUninitialized = 0,
    kBeginLoad = 1,
    kShowLoading = 2,
    kHoldLoading = 3,
    kFinishLoading = 4,
    kError = 5,
    kOffline = 6,
    kUnavailable = 7,
    kReady = 8,
    kUnresponsive = 9,
    kSignIn = 10,
    kGuestError = 11,
    kDisabledByAdmin = 12,
    kWarmed = 13,
    kLocationMismatch = 14,
    kIneligibleAccount = 15,
    kGuestLoaded = 16
}
export declare const ClientLoadErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ClientLoadErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 12,
    kUnknown = 0,
    kUnavailable = 1,
    kIneligibleAccount = 2,
    kLocationMismatch = 3,
    kDisabledByAdmin = 4,
    kOffline = 5,
    kSignIn = 6,
    kCookieSyncFailed = 7,
    kGuestLoadFailed = 8,
    kGuestProcessGone = 9,
    kClientError = 10,
    kClientLoadTimeout = 11,
    kWarmedTimeout = 12
}
export declare const PrepareForClientResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PrepareForClientResult {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kSuccess = 0,
    kErrorResyncingCookies = 1,
    kRequiresSignIn = 2
}
export declare const HelpCenterTopicSpec: {
    $: mojo.internal.MojomType;
};
export declare enum HelpCenterTopic {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kLocationMismatch = 0,
    kIneligibleAccount = 1
}
export type PreloadPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PreloadPagePendingReceiver>;
export declare class PreloadPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PreloadPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<PreloadPagePendingReceiver>;
    constructor(handle: MojoHandle | PreloadPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PreloadPageInterface {
    setProfileReadyState(readyState: ProfileReadyState): void;
    onGuestNavigationStarted(): void;
    onGuestNavigated(url: url_mojom_Url, isApiAllowed: boolean, pageType: GuestPageType, isInitialCommit: boolean): void;
    onGuestMainPageLoaded(): void;
    onGuestProcessGone(): void;
    webClientStateChanged(state: WebClientState): void;
}
export declare class PreloadPageRemote implements PreloadPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PreloadPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PreloadPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PreloadPagePendingReceiverEndpoint);
    setProfileReadyState(readyState: ProfileReadyState): void;
    onGuestNavigationStarted(): void;
    onGuestNavigated(url: url_mojom_Url, isApiAllowed: boolean, pageType: GuestPageType, isInitialCommit: boolean): void;
    onGuestMainPageLoaded(): void;
    onGuestProcessGone(): void;
    webClientStateChanged(state: WebClientState): void;
}
/**
 * An object which receives request messages for the PreloadPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PreloadPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PreloadPageRemote, PreloadPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PreloadPageRemote, PreloadPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PreloadPageInterface);
}
export declare class PreloadPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PreloadPageRemote;
}
/**
 * An object which receives request messages for the PreloadPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PreloadPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PreloadPageRemote, PreloadPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PreloadPageRemote, PreloadPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setProfileReadyState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(readyState: ProfileReadyState) => any>;
    onGuestNavigationStarted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onGuestNavigated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, isApiAllowed: boolean, pageType: GuestPageType, isInitialCommit: boolean) => any>;
    onGuestMainPageLoaded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onGuestProcessGone: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    webClientStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: WebClientState) => any>;
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
    intentToShow(): void;
    waitForLoad(): Promise<{
        failed: boolean;
    }>;
    setProfileReadyState(readyState: ProfileReadyState): void;
    updatePageState(panelStateKind: glic_mojom_PanelStateKind): void;
    clientReadyStateChanged(ready: boolean): void;
    zoom(action: ZoomAction): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    intentToShow(): void;
    waitForLoad(): Promise<{
        failed: boolean;
    }>;
    setProfileReadyState(readyState: ProfileReadyState): void;
    updatePageState(panelStateKind: glic_mojom_PanelStateKind): void;
    clientReadyStateChanged(ready: boolean): void;
    zoom(action: ZoomAction): void;
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
    intentToShow: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    waitForLoad: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setProfileReadyState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(readyState: ProfileReadyState) => any>;
    updatePageState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(panelStateKind: glic_mojom_PanelStateKind) => any>;
    clientReadyStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ready: boolean) => any>;
    zoom: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(action: ZoomAction) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GlicPreloadHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GlicPreloadHandlerPendingReceiver>;
export declare class GlicPreloadHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GlicPreloadHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<GlicPreloadHandlerPendingReceiver>;
    constructor(handle: MojoHandle | GlicPreloadHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GlicPreloadHandlerInterface {
    prepareForClient(): Promise<{
        result: PrepareForClientResult;
    }>;
}
export declare class GlicPreloadHandlerRemote implements GlicPreloadHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<GlicPreloadHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GlicPreloadHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GlicPreloadHandlerPendingReceiverEndpoint);
    prepareForClient(): Promise<{
        result: PrepareForClientResult;
    }>;
}
/**
 * An object which receives request messages for the GlicPreloadHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GlicPreloadHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GlicPreloadHandlerRemote, GlicPreloadHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicPreloadHandlerRemote, GlicPreloadHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GlicPreloadHandlerInterface);
}
export declare class GlicPreloadHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GlicPreloadHandlerRemote;
}
/**
 * An object which receives request messages for the GlicPreloadHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GlicPreloadHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GlicPreloadHandlerRemote, GlicPreloadHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicPreloadHandlerRemote, GlicPreloadHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    prepareForClient: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GlicPreloadHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GlicPreloadHandlerFactoryPendingReceiver>;
export declare class GlicPreloadHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GlicPreloadHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<GlicPreloadHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | GlicPreloadHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GlicPreloadHandlerFactoryInterface {
    createPreloadHandler(receiver: GlicPreloadHandlerPendingReceiver, page: PreloadPageRemote): void;
}
export declare class GlicPreloadHandlerFactoryRemote implements GlicPreloadHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<GlicPreloadHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GlicPreloadHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GlicPreloadHandlerFactoryPendingReceiverEndpoint);
    createPreloadHandler(receiver: GlicPreloadHandlerPendingReceiver, page: PreloadPageRemote): void;
}
/**
 * An object which receives request messages for the GlicPreloadHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GlicPreloadHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GlicPreloadHandlerFactoryRemote, GlicPreloadHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicPreloadHandlerFactoryRemote, GlicPreloadHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GlicPreloadHandlerFactoryInterface);
}
export declare class GlicPreloadHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GlicPreloadHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the GlicPreloadHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GlicPreloadHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GlicPreloadHandlerFactoryRemote, GlicPreloadHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GlicPreloadHandlerFactoryRemote, GlicPreloadHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPreloadHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: GlicPreloadHandlerPendingReceiver, page: PreloadPageRemote) => any>;
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
    createPageHandler(receiver: PageHandlerPendingReceiver, page: PageRemote): Promise<{
        instanceId: string;
    }>;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(receiver: PageHandlerPendingReceiver, page: PageRemote): Promise<{
        instanceId: string;
    }>;
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
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: PageHandlerPendingReceiver, page: PageRemote) => any>;
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
    prepareForClient(): Promise<{
        result: PrepareForClientResult;
    }>;
    webviewCommitted(url: url_mojom_Url): void;
    openLinkInPopup(url: url_mojom_Url, popupWidth: number, popupHeight: number): void;
    openLinkInNewTab(url: url_mojom_Url): void;
    onZoomLevelChange(zoomFactor: number): void;
    shouldAllowGeolocationPermissionRequest(): Promise<{
        isAllowed: boolean;
    }>;
    closePanel(): Promise<void>;
    openHelpCenterTopicAndClosePanel(topic: HelpCenterTopic): void;
    openProfilePickerAndClosePanel(): void;
    openDisabledByAdminLinkAndClosePanel(): void;
    signInAndClosePanel(): void;
    resizeWidget(size: gfx_mojom_Size, duration: mojoBase_mojom_TimeDelta): Promise<void>;
    onWebUiStateChanged(newState: WebUiState): void;
    notifyClientLoadError(reason: ClientLoadErrorReason): void;
    onClientLoadFailed(failed: boolean): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    prepareForClient(): Promise<{
        result: PrepareForClientResult;
    }>;
    webviewCommitted(url: url_mojom_Url): void;
    openLinkInPopup(url: url_mojom_Url, popupWidth: number, popupHeight: number): void;
    openLinkInNewTab(url: url_mojom_Url): void;
    onZoomLevelChange(zoomFactor: number): void;
    shouldAllowGeolocationPermissionRequest(): Promise<{
        isAllowed: boolean;
    }>;
    closePanel(): Promise<void>;
    openHelpCenterTopicAndClosePanel(topic: HelpCenterTopic): void;
    openProfilePickerAndClosePanel(): void;
    openDisabledByAdminLinkAndClosePanel(): void;
    signInAndClosePanel(): void;
    resizeWidget(size: gfx_mojom_Size, duration: mojoBase_mojom_TimeDelta): Promise<void>;
    onWebUiStateChanged(newState: WebUiState): void;
    notifyClientLoadError(reason: ClientLoadErrorReason): void;
    onClientLoadFailed(failed: boolean): void;
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
    prepareForClient: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    webviewCommitted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    openLinkInPopup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, popupWidth: number, popupHeight: number) => any>;
    openLinkInNewTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    onZoomLevelChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(zoomFactor: number) => any>;
    shouldAllowGeolocationPermissionRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    closePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openHelpCenterTopicAndClosePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(topic: HelpCenterTopic) => any>;
    openProfilePickerAndClosePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openDisabledByAdminLinkAndClosePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    signInAndClosePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    resizeWidget: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(size: gfx_mojom_Size, duration: mojoBase_mojom_TimeDelta) => any>;
    onWebUiStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(newState: WebUiState) => any>;
    notifyClientLoadError: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(reason: ClientLoadErrorReason) => any>;
    onClientLoadFailed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(failed: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PreloadPage_SetProfileReadyState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PreloadPage_OnGuestNavigationStarted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PreloadPage_OnGuestNavigated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PreloadPage_OnGuestMainPageLoaded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PreloadPage_OnGuestProcessGone_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PreloadPage_WebClientStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_IntentToShow_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_WaitForLoad_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_WaitForLoad_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetProfileReadyState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdatePageState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ClientReadyStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_Zoom_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicPreloadHandler_PrepareForClient_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicPreloadHandler_PrepareForClient_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_PrepareForClient_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_PrepareForClient_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_WebviewCommitted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenLinkInPopup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenLinkInNewTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnZoomLevelChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClosePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClosePanel_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SignInAndClosePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResizeWidget_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResizeWidget_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnWebUiStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_NotifyClientLoadError_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnClientLoadFailed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PreloadPage_SetProfileReadyState_ParamsMojoType {
    readyState: ProfileReadyState;
}
export type PreloadPage_SetProfileReadyState_Params = PreloadPage_SetProfileReadyState_ParamsMojoType;
export declare interface PreloadPage_OnGuestNavigationStarted_ParamsMojoType {
}
export type PreloadPage_OnGuestNavigationStarted_Params = PreloadPage_OnGuestNavigationStarted_ParamsMojoType;
export declare interface PreloadPage_OnGuestNavigated_ParamsMojoType {
    url: url_mojom_Url;
    isApiAllowed: boolean;
    isInitialCommit: boolean;
    pageType: GuestPageType;
}
export type PreloadPage_OnGuestNavigated_Params = PreloadPage_OnGuestNavigated_ParamsMojoType;
export declare interface PreloadPage_OnGuestMainPageLoaded_ParamsMojoType {
}
export type PreloadPage_OnGuestMainPageLoaded_Params = PreloadPage_OnGuestMainPageLoaded_ParamsMojoType;
export declare interface PreloadPage_OnGuestProcessGone_ParamsMojoType {
}
export type PreloadPage_OnGuestProcessGone_Params = PreloadPage_OnGuestProcessGone_ParamsMojoType;
export declare interface PreloadPage_WebClientStateChanged_ParamsMojoType {
    state: WebClientState;
}
export type PreloadPage_WebClientStateChanged_Params = PreloadPage_WebClientStateChanged_ParamsMojoType;
export declare interface Page_IntentToShow_ParamsMojoType {
}
export type Page_IntentToShow_Params = Page_IntentToShow_ParamsMojoType;
export declare interface Page_WaitForLoad_ParamsMojoType {
}
export type Page_WaitForLoad_Params = Page_WaitForLoad_ParamsMojoType;
export declare interface Page_WaitForLoad_ResponseParamsMojoType {
    failed: boolean;
}
export type Page_WaitForLoad_ResponseParams = Page_WaitForLoad_ResponseParamsMojoType;
export declare interface Page_SetProfileReadyState_ParamsMojoType {
    readyState: ProfileReadyState;
}
export type Page_SetProfileReadyState_Params = Page_SetProfileReadyState_ParamsMojoType;
export declare interface Page_UpdatePageState_ParamsMojoType {
    panelStateKind: glic_mojom_PanelStateKind;
}
export type Page_UpdatePageState_Params = Page_UpdatePageState_ParamsMojoType;
export declare interface Page_ClientReadyStateChanged_ParamsMojoType {
    ready: boolean;
}
export type Page_ClientReadyStateChanged_Params = Page_ClientReadyStateChanged_ParamsMojoType;
export declare interface Page_Zoom_ParamsMojoType {
    action: ZoomAction;
}
export type Page_Zoom_Params = Page_Zoom_ParamsMojoType;
export declare interface GlicPreloadHandler_PrepareForClient_ParamsMojoType {
}
export type GlicPreloadHandler_PrepareForClient_Params = GlicPreloadHandler_PrepareForClient_ParamsMojoType;
export declare interface GlicPreloadHandler_PrepareForClient_ResponseParamsMojoType {
    result: PrepareForClientResult;
}
export type GlicPreloadHandler_PrepareForClient_ResponseParams = GlicPreloadHandler_PrepareForClient_ResponseParamsMojoType;
export declare interface GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsMojoType {
    receiver: GlicPreloadHandlerPendingReceiver;
    page: PreloadPageRemote;
}
export type GlicPreloadHandlerFactory_CreatePreloadHandler_Params = GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    receiver: PageHandlerPendingReceiver;
    page: PageRemote;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ResponseParamsMojoType {
    instanceId: string;
}
export type PageHandlerFactory_CreatePageHandler_ResponseParams = PageHandlerFactory_CreatePageHandler_ResponseParamsMojoType;
export declare interface PageHandler_PrepareForClient_ParamsMojoType {
}
export type PageHandler_PrepareForClient_Params = PageHandler_PrepareForClient_ParamsMojoType;
export declare interface PageHandler_PrepareForClient_ResponseParamsMojoType {
    result: PrepareForClientResult;
}
export type PageHandler_PrepareForClient_ResponseParams = PageHandler_PrepareForClient_ResponseParamsMojoType;
export declare interface PageHandler_WebviewCommitted_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_WebviewCommitted_Params = PageHandler_WebviewCommitted_ParamsMojoType;
export declare interface PageHandler_OpenLinkInPopup_ParamsMojoType {
    url: url_mojom_Url;
    popupWidth: number;
    popupHeight: number;
}
export type PageHandler_OpenLinkInPopup_Params = PageHandler_OpenLinkInPopup_ParamsMojoType;
export declare interface PageHandler_OpenLinkInNewTab_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_OpenLinkInNewTab_Params = PageHandler_OpenLinkInNewTab_ParamsMojoType;
export declare interface PageHandler_OnZoomLevelChange_ParamsMojoType {
    zoomFactor: number;
}
export type PageHandler_OnZoomLevelChange_Params = PageHandler_OnZoomLevelChange_ParamsMojoType;
export declare interface PageHandler_ShouldAllowGeolocationPermissionRequest_ParamsMojoType {
}
export type PageHandler_ShouldAllowGeolocationPermissionRequest_Params = PageHandler_ShouldAllowGeolocationPermissionRequest_ParamsMojoType;
export declare interface PageHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsMojoType {
    isAllowed: boolean;
}
export type PageHandler_ShouldAllowGeolocationPermissionRequest_ResponseParams = PageHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsMojoType;
export declare interface PageHandler_ClosePanel_ParamsMojoType {
}
export type PageHandler_ClosePanel_Params = PageHandler_ClosePanel_ParamsMojoType;
export declare interface PageHandler_ClosePanel_ResponseParamsMojoType {
}
export type PageHandler_ClosePanel_ResponseParams = PageHandler_ClosePanel_ResponseParamsMojoType;
export declare interface PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsMojoType {
    topic: HelpCenterTopic;
}
export type PageHandler_OpenHelpCenterTopicAndClosePanel_Params = PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsMojoType;
export declare interface PageHandler_OpenProfilePickerAndClosePanel_ParamsMojoType {
}
export type PageHandler_OpenProfilePickerAndClosePanel_Params = PageHandler_OpenProfilePickerAndClosePanel_ParamsMojoType;
export declare interface PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsMojoType {
}
export type PageHandler_OpenDisabledByAdminLinkAndClosePanel_Params = PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsMojoType;
export declare interface PageHandler_SignInAndClosePanel_ParamsMojoType {
}
export type PageHandler_SignInAndClosePanel_Params = PageHandler_SignInAndClosePanel_ParamsMojoType;
export declare interface PageHandler_ResizeWidget_ParamsMojoType {
    size: gfx_mojom_Size;
    duration: mojoBase_mojom_TimeDelta;
}
export type PageHandler_ResizeWidget_Params = PageHandler_ResizeWidget_ParamsMojoType;
export declare interface PageHandler_ResizeWidget_ResponseParamsMojoType {
}
export type PageHandler_ResizeWidget_ResponseParams = PageHandler_ResizeWidget_ResponseParamsMojoType;
export declare interface PageHandler_OnWebUiStateChanged_ParamsMojoType {
    newState: WebUiState;
}
export type PageHandler_OnWebUiStateChanged_Params = PageHandler_OnWebUiStateChanged_ParamsMojoType;
export declare interface PageHandler_NotifyClientLoadError_ParamsMojoType {
    reason: ClientLoadErrorReason;
}
export type PageHandler_NotifyClientLoadError_Params = PageHandler_NotifyClientLoadError_ParamsMojoType;
export declare interface PageHandler_OnClientLoadFailed_ParamsMojoType {
    failed: boolean;
}
export type PageHandler_OnClientLoadFailed_Params = PageHandler_OnClientLoadFailed_ParamsMojoType;
