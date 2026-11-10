import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { PageRemote as searchbox_mojom_PageRemote, PageHandlerPendingReceiver as searchbox_mojom_PageHandlerPendingReceiver } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const LensOverlayDismissalSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LensOverlayDismissalSource {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kContextualTasksImageUploadsDisabled = 0
}
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(handler: PageHandlerPendingReceiver, searchboxPage: searchbox_mojom_PageRemote, searchboxHandler: searchbox_mojom_PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: PageHandlerPendingReceiver, searchboxPage: searchbox_mojom_PageRemote, searchboxHandler: searchbox_mojom_PageHandlerPendingReceiver): void;
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
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: PageHandlerPendingReceiver, searchboxPage: searchbox_mojom_PageRemote, searchboxHandler: searchbox_mojom_PageHandlerPendingReceiver) => any>;
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
    focusChanged(focused: boolean): void;
    startPlatformVoiceRecognition(): void;
    handleLensButtonClick(): void;
    handleFileUpload(isImage: boolean): void;
    navigateUrl(url: url_mojom_Url): void;
    closeLensOverlayFromWebUI(dismissalSource: LensOverlayDismissalSource): void;
    setSmartTabSharingActive(active: boolean): void;
    getSmartTabSharingActive(): Promise<{
        active: boolean;
    }>;
    onContextMenuOpened(): void;
    notifyComposeboxQuerySubmittedWithContext(): void;
    canShowNextboxAnimation(): Promise<{
        canShow: boolean;
    }>;
    recordNextboxAnimationImpression(shown: boolean): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    focusChanged(focused: boolean): void;
    startPlatformVoiceRecognition(): void;
    handleLensButtonClick(): void;
    handleFileUpload(isImage: boolean): void;
    navigateUrl(url: url_mojom_Url): void;
    closeLensOverlayFromWebUI(dismissalSource: LensOverlayDismissalSource): void;
    setSmartTabSharingActive(active: boolean): void;
    getSmartTabSharingActive(): Promise<{
        active: boolean;
    }>;
    onContextMenuOpened(): void;
    notifyComposeboxQuerySubmittedWithContext(): void;
    canShowNextboxAnimation(): Promise<{
        canShow: boolean;
    }>;
    recordNextboxAnimationImpression(shown: boolean): void;
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
    focusChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(focused: boolean) => any>;
    startPlatformVoiceRecognition: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    handleLensButtonClick: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    handleFileUpload: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isImage: boolean) => any>;
    navigateUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    closeLensOverlayFromWebUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(dismissalSource: LensOverlayDismissalSource) => any>;
    setSmartTabSharingActive: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(active: boolean) => any>;
    getSmartTabSharingActive: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onContextMenuOpened: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifyComposeboxQuerySubmittedWithContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    canShowNextboxAnimation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordNextboxAnimationImpression: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shown: boolean) => any>;
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
export declare const PageHandler_FocusChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartPlatformVoiceRecognition_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_HandleLensButtonClick_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_HandleFileUpload_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_NavigateUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseLensOverlayFromWebUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetSmartTabSharingActive_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSmartTabSharingActive_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSmartTabSharingActive_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnContextMenuOpened_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_NotifyComposeboxQuerySubmittedWithContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CanShowNextboxAnimation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CanShowNextboxAnimation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordNextboxAnimationImpression_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: PageHandlerPendingReceiver;
    searchboxPage: searchbox_mojom_PageRemote;
    searchboxHandler: searchbox_mojom_PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_FocusChanged_ParamsMojoType {
    focused: boolean;
}
export type PageHandler_FocusChanged_Params = PageHandler_FocusChanged_ParamsMojoType;
export declare interface PageHandler_StartPlatformVoiceRecognition_ParamsMojoType {
}
export type PageHandler_StartPlatformVoiceRecognition_Params = PageHandler_StartPlatformVoiceRecognition_ParamsMojoType;
export declare interface PageHandler_HandleLensButtonClick_ParamsMojoType {
}
export type PageHandler_HandleLensButtonClick_Params = PageHandler_HandleLensButtonClick_ParamsMojoType;
export declare interface PageHandler_HandleFileUpload_ParamsMojoType {
    isImage: boolean;
}
export type PageHandler_HandleFileUpload_Params = PageHandler_HandleFileUpload_ParamsMojoType;
export declare interface PageHandler_NavigateUrl_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_NavigateUrl_Params = PageHandler_NavigateUrl_ParamsMojoType;
export declare interface PageHandler_CloseLensOverlayFromWebUI_ParamsMojoType {
    dismissalSource: LensOverlayDismissalSource;
}
export type PageHandler_CloseLensOverlayFromWebUI_Params = PageHandler_CloseLensOverlayFromWebUI_ParamsMojoType;
export declare interface PageHandler_SetSmartTabSharingActive_ParamsMojoType {
    active: boolean;
}
export type PageHandler_SetSmartTabSharingActive_Params = PageHandler_SetSmartTabSharingActive_ParamsMojoType;
export declare interface PageHandler_GetSmartTabSharingActive_ParamsMojoType {
}
export type PageHandler_GetSmartTabSharingActive_Params = PageHandler_GetSmartTabSharingActive_ParamsMojoType;
export declare interface PageHandler_GetSmartTabSharingActive_ResponseParamsMojoType {
    active: boolean;
}
export type PageHandler_GetSmartTabSharingActive_ResponseParams = PageHandler_GetSmartTabSharingActive_ResponseParamsMojoType;
export declare interface PageHandler_OnContextMenuOpened_ParamsMojoType {
}
export type PageHandler_OnContextMenuOpened_Params = PageHandler_OnContextMenuOpened_ParamsMojoType;
export declare interface PageHandler_NotifyComposeboxQuerySubmittedWithContext_ParamsMojoType {
}
export type PageHandler_NotifyComposeboxQuerySubmittedWithContext_Params = PageHandler_NotifyComposeboxQuerySubmittedWithContext_ParamsMojoType;
export declare interface PageHandler_CanShowNextboxAnimation_ParamsMojoType {
}
export type PageHandler_CanShowNextboxAnimation_Params = PageHandler_CanShowNextboxAnimation_ParamsMojoType;
export declare interface PageHandler_CanShowNextboxAnimation_ResponseParamsMojoType {
    canShow: boolean;
}
export type PageHandler_CanShowNextboxAnimation_ResponseParams = PageHandler_CanShowNextboxAnimation_ResponseParamsMojoType;
export declare interface PageHandler_RecordNextboxAnimationImpression_ParamsMojoType {
    shown: boolean;
}
export type PageHandler_RecordNextboxAnimationImpression_Params = PageHandler_RecordNextboxAnimationImpression_ParamsMojoType;
