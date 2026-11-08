import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { PageContentType as lens_mojom_PageContentType } from './page_content_type.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const SidePanelResultStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SidePanelResultStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnknown = 0,
    kResultShown = 1,
    kErrorPageShownOffline = 2,
    kErrorPageShownStartQueryError = 3,
    kErrorPageShownProtected = 4
}
export type LensSidePanelPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<LensSidePanelPageHandlerFactoryPendingReceiver>;
export declare class LensSidePanelPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<LensSidePanelPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<LensSidePanelPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | LensSidePanelPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface LensSidePanelPageHandlerFactoryInterface {
    createSidePanelPageHandler(handler: LensSidePanelPageHandlerPendingReceiver, page: LensSidePanelPageRemote): void;
}
export declare class LensSidePanelPageHandlerFactoryRemote implements LensSidePanelPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<LensSidePanelPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<LensSidePanelPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | LensSidePanelPageHandlerFactoryPendingReceiverEndpoint);
    createSidePanelPageHandler(handler: LensSidePanelPageHandlerPendingReceiver, page: LensSidePanelPageRemote): void;
}
/**
 * An object which receives request messages for the LensSidePanelPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class LensSidePanelPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<LensSidePanelPageHandlerFactoryRemote, LensSidePanelPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensSidePanelPageHandlerFactoryRemote, LensSidePanelPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: LensSidePanelPageHandlerFactoryInterface);
}
export declare class LensSidePanelPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): LensSidePanelPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the LensSidePanelPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class LensSidePanelPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<LensSidePanelPageHandlerFactoryRemote, LensSidePanelPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensSidePanelPageHandlerFactoryRemote, LensSidePanelPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createSidePanelPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: LensSidePanelPageHandlerPendingReceiver, page: LensSidePanelPageRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type LensSidePanelPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<LensSidePanelPageHandlerPendingReceiver>;
export declare class LensSidePanelPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<LensSidePanelPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<LensSidePanelPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | LensSidePanelPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface LensSidePanelPageHandlerInterface {
    popAndLoadQueryFromHistory(): void;
    getIsContextualSearchbox(): Promise<{
        isContextualSearchbox: boolean;
    }>;
    onScrollToMessage(textFragments: string[], pdfPageNumber: number): void;
    requestSendFeedback(): void;
    onAimMessage(message: number[]): void;
    onImageQueryWithEmptyText(): void;
}
export declare class LensSidePanelPageHandlerRemote implements LensSidePanelPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<LensSidePanelPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<LensSidePanelPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | LensSidePanelPageHandlerPendingReceiverEndpoint);
    popAndLoadQueryFromHistory(): void;
    getIsContextualSearchbox(): Promise<{
        isContextualSearchbox: boolean;
    }>;
    onScrollToMessage(textFragments: string[], pdfPageNumber: number): void;
    requestSendFeedback(): void;
    onAimMessage(message: number[]): void;
    onImageQueryWithEmptyText(): void;
}
/**
 * An object which receives request messages for the LensSidePanelPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class LensSidePanelPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<LensSidePanelPageHandlerRemote, LensSidePanelPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensSidePanelPageHandlerRemote, LensSidePanelPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: LensSidePanelPageHandlerInterface);
}
export declare class LensSidePanelPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): LensSidePanelPageHandlerRemote;
}
/**
 * An object which receives request messages for the LensSidePanelPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class LensSidePanelPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<LensSidePanelPageHandlerRemote, LensSidePanelPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensSidePanelPageHandlerRemote, LensSidePanelPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    popAndLoadQueryFromHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getIsContextualSearchbox: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onScrollToMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(textFragments: string[], pdfPageNumber: number) => any>;
    requestSendFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onAimMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(message: number[]) => any>;
    onImageQueryWithEmptyText: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type LensSidePanelPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<LensSidePanelPagePendingReceiver>;
export declare class LensSidePanelPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<LensSidePanelPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<LensSidePanelPagePendingReceiver>;
    constructor(handle: MojoHandle | LensSidePanelPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface LensSidePanelPageInterface {
    loadResultsInFrame(resultsUrl: url_mojom_Url): void;
    setIsLoadingResults(isLoading: boolean): void;
    setPageContentUploadProgress(progress: number): void;
    setBackArrowVisible(visible: boolean): void;
    setShowErrorPage(shouldShowErrorPage: boolean, status: SidePanelResultStatus): void;
    suppressGhostLoader(): void;
    pageContentTypeChanged(newPageContentType: lens_mojom_PageContentType): void;
    showToast(message: string): void;
    sendClientMessageToAim(serializedMessage: number[]): void;
    aimHandshakeReceived(): void;
    aimResultsChanged(onAim: boolean): void;
    focusResultsFrame(): void;
    setIsOverlayShowing(isShowing: boolean): void;
    focusSearchbox(): void;
}
export declare class LensSidePanelPageRemote implements LensSidePanelPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<LensSidePanelPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<LensSidePanelPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | LensSidePanelPagePendingReceiverEndpoint);
    loadResultsInFrame(resultsUrl: url_mojom_Url): void;
    setIsLoadingResults(isLoading: boolean): void;
    setPageContentUploadProgress(progress: number): void;
    setBackArrowVisible(visible: boolean): void;
    setShowErrorPage(shouldShowErrorPage: boolean, status: SidePanelResultStatus): void;
    suppressGhostLoader(): void;
    pageContentTypeChanged(newPageContentType: lens_mojom_PageContentType): void;
    showToast(message: string): void;
    sendClientMessageToAim(serializedMessage: number[]): void;
    aimHandshakeReceived(): void;
    aimResultsChanged(onAim: boolean): void;
    focusResultsFrame(): void;
    setIsOverlayShowing(isShowing: boolean): void;
    focusSearchbox(): void;
}
/**
 * An object which receives request messages for the LensSidePanelPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class LensSidePanelPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<LensSidePanelPageRemote, LensSidePanelPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensSidePanelPageRemote, LensSidePanelPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: LensSidePanelPageInterface);
}
export declare class LensSidePanelPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): LensSidePanelPageRemote;
}
/**
 * An object which receives request messages for the LensSidePanelPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class LensSidePanelPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<LensSidePanelPageRemote, LensSidePanelPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensSidePanelPageRemote, LensSidePanelPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    loadResultsInFrame: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultsUrl: url_mojom_Url) => any>;
    setIsLoadingResults: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isLoading: boolean) => any>;
    setPageContentUploadProgress: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(progress: number) => any>;
    setBackArrowVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    setShowErrorPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shouldShowErrorPage: boolean, status: SidePanelResultStatus) => any>;
    suppressGhostLoader: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    pageContentTypeChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(newPageContentType: lens_mojom_PageContentType) => any>;
    showToast: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(message: string) => any>;
    sendClientMessageToAim: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serializedMessage: number[]) => any>;
    aimHandshakeReceived: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    aimResultsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(onAim: boolean) => any>;
    focusResultsFrame: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setIsOverlayShowing: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isShowing: boolean) => any>;
    focusSearchbox: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPageHandler_OnAimMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_LoadResultsInFrame_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_SetIsLoadingResults_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_SetBackArrowVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_SetShowErrorPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_SuppressGhostLoader_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_PageContentTypeChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_ShowToast_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_SendClientMessageToAim_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_AimHandshakeReceived_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_AimResultsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_FocusResultsFrame_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_SetIsOverlayShowing_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensSidePanelPage_FocusSearchbox_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsMojoType {
    handler: LensSidePanelPageHandlerPendingReceiver;
    page: LensSidePanelPageRemote;
}
export type LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_Params = LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsMojoType;
export declare interface LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsMojoType {
}
export type LensSidePanelPageHandler_PopAndLoadQueryFromHistory_Params = LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsMojoType;
export declare interface LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsMojoType {
}
export type LensSidePanelPageHandler_GetIsContextualSearchbox_Params = LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsMojoType;
export declare interface LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsMojoType {
    isContextualSearchbox: boolean;
}
export type LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParams = LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsMojoType;
export declare interface LensSidePanelPageHandler_OnScrollToMessage_ParamsMojoType {
    textFragments: string[];
    pdfPageNumber: number;
}
export type LensSidePanelPageHandler_OnScrollToMessage_Params = LensSidePanelPageHandler_OnScrollToMessage_ParamsMojoType;
export declare interface LensSidePanelPageHandler_RequestSendFeedback_ParamsMojoType {
}
export type LensSidePanelPageHandler_RequestSendFeedback_Params = LensSidePanelPageHandler_RequestSendFeedback_ParamsMojoType;
export declare interface LensSidePanelPageHandler_OnAimMessage_ParamsMojoType {
    message: number[];
}
export type LensSidePanelPageHandler_OnAimMessage_Params = LensSidePanelPageHandler_OnAimMessage_ParamsMojoType;
export declare interface LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsMojoType {
}
export type LensSidePanelPageHandler_OnImageQueryWithEmptyText_Params = LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsMojoType;
export declare interface LensSidePanelPage_LoadResultsInFrame_ParamsMojoType {
    resultsUrl: url_mojom_Url;
}
export type LensSidePanelPage_LoadResultsInFrame_Params = LensSidePanelPage_LoadResultsInFrame_ParamsMojoType;
export declare interface LensSidePanelPage_SetIsLoadingResults_ParamsMojoType {
    isLoading: boolean;
}
export type LensSidePanelPage_SetIsLoadingResults_Params = LensSidePanelPage_SetIsLoadingResults_ParamsMojoType;
export declare interface LensSidePanelPage_SetPageContentUploadProgress_ParamsMojoType {
    progress: number;
}
export type LensSidePanelPage_SetPageContentUploadProgress_Params = LensSidePanelPage_SetPageContentUploadProgress_ParamsMojoType;
export declare interface LensSidePanelPage_SetBackArrowVisible_ParamsMojoType {
    visible: boolean;
}
export type LensSidePanelPage_SetBackArrowVisible_Params = LensSidePanelPage_SetBackArrowVisible_ParamsMojoType;
export declare interface LensSidePanelPage_SetShowErrorPage_ParamsMojoType {
    shouldShowErrorPage: boolean;
    status: SidePanelResultStatus;
}
export type LensSidePanelPage_SetShowErrorPage_Params = LensSidePanelPage_SetShowErrorPage_ParamsMojoType;
export declare interface LensSidePanelPage_SuppressGhostLoader_ParamsMojoType {
}
export type LensSidePanelPage_SuppressGhostLoader_Params = LensSidePanelPage_SuppressGhostLoader_ParamsMojoType;
export declare interface LensSidePanelPage_PageContentTypeChanged_ParamsMojoType {
    newPageContentType: lens_mojom_PageContentType;
}
export type LensSidePanelPage_PageContentTypeChanged_Params = LensSidePanelPage_PageContentTypeChanged_ParamsMojoType;
export declare interface LensSidePanelPage_ShowToast_ParamsMojoType {
    message: string;
}
export type LensSidePanelPage_ShowToast_Params = LensSidePanelPage_ShowToast_ParamsMojoType;
export declare interface LensSidePanelPage_SendClientMessageToAim_ParamsMojoType {
    serializedMessage: number[];
}
export type LensSidePanelPage_SendClientMessageToAim_Params = LensSidePanelPage_SendClientMessageToAim_ParamsMojoType;
export declare interface LensSidePanelPage_AimHandshakeReceived_ParamsMojoType {
}
export type LensSidePanelPage_AimHandshakeReceived_Params = LensSidePanelPage_AimHandshakeReceived_ParamsMojoType;
export declare interface LensSidePanelPage_AimResultsChanged_ParamsMojoType {
    onAim: boolean;
}
export type LensSidePanelPage_AimResultsChanged_Params = LensSidePanelPage_AimResultsChanged_ParamsMojoType;
export declare interface LensSidePanelPage_FocusResultsFrame_ParamsMojoType {
}
export type LensSidePanelPage_FocusResultsFrame_Params = LensSidePanelPage_FocusResultsFrame_ParamsMojoType;
export declare interface LensSidePanelPage_SetIsOverlayShowing_ParamsMojoType {
    isShowing: boolean;
}
export type LensSidePanelPage_SetIsOverlayShowing_Params = LensSidePanelPage_SetIsOverlayShowing_ParamsMojoType;
export declare interface LensSidePanelPage_FocusSearchbox_ParamsMojoType {
}
export type LensSidePanelPage_FocusSearchbox_Params = LensSidePanelPage_FocusSearchbox_ParamsMojoType;
