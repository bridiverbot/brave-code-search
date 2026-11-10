import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { CenterRotatedBox as lens_mojom_CenterRotatedBox } from './geometry.mojom-webui.js';
import { OverlayObject as lens_mojom_OverlayObject } from './overlay_object.mojom-webui.js';
import { PageContentType as lens_mojom_PageContentType } from './page_content_type.mojom-webui.js';
import { Text as lens_mojom_Text } from './text.mojom-webui.js';
import { Language as lens_mojom_Language } from './translate.mojom-webui.js';
import { BitmapMappedFromTrustedProcess as skia_mojom_BitmapMappedFromTrustedProcess } from '//resources/mojo/skia/public/mojom/bitmap.mojom-webui.js';
import { ClickModifiers as ui_mojom_ClickModifiers } from '//resources/mojo/ui/base/mojom/window_open_disposition.mojom-webui.js';
export declare const UserActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UserAction {
    MIN_VALUE = 0,
    MAX_VALUE = 18,
    kRegionSelection = 0,
    kRegionSelectionChange = 1,
    kTextSelection = 2,
    kObjectClick = 3,
    kTranslateText = 4,
    kCopyText = 5,
    kMyActivity = 6,
    kLearnMore = 7,
    kSendFeedback = 8,
    kTapRegionSelection = 9,
    kTranslateButtonEnableAction = 10,
    kTranslateButtonDisableAction = 11,
    kTranslateSourceLanguageChanged = 12,
    kTranslateTargetLanguageChanged = 13,
    kTranslateTextSelection = 14,
    kCopyAsImage = 15,
    kSaveAsImage = 16,
    kMathSelection = 17,
    kFullScreenshotRegionSelection = 18
}
export declare const SemanticEventSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SemanticEvent {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kTextGleamsViewStart = 0,
    kTextGleamsViewEnd = 1
}
export type LensPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<LensPageHandlerFactoryPendingReceiver>;
export declare class LensPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<LensPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<LensPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | LensPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface LensPageHandlerFactoryInterface {
    createPageHandler(handler: LensPageHandlerPendingReceiver, page: LensPageRemote): void;
}
export declare class LensPageHandlerFactoryRemote implements LensPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<LensPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<LensPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | LensPageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: LensPageHandlerPendingReceiver, page: LensPageRemote): void;
}
/**
 * An object which receives request messages for the LensPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class LensPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<LensPageHandlerFactoryRemote, LensPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensPageHandlerFactoryRemote, LensPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: LensPageHandlerFactoryInterface);
}
export declare class LensPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): LensPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the LensPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class LensPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<LensPageHandlerFactoryRemote, LensPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensPageHandlerFactoryRemote, LensPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: LensPageHandlerPendingReceiver, page: LensPageRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type LensPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<LensPageHandlerPendingReceiver>;
export declare class LensPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<LensPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<LensPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | LensPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface LensPageHandlerInterface {
    activityRequestedByOverlay(clickModifiers: ui_mojom_ClickModifiers): void;
    closeRequestedByOverlayCloseButton(): void;
    closeRequestedByOverlayBackgroundClick(): void;
    notifyOverlayInitialized(): void;
    addBackgroundBlur(): void;
    setLiveBlur(enabled: boolean): void;
    feedbackRequestedByOverlay(): void;
    getOverlayInvocationSource(): Promise<{
        invocationSource: string;
    }>;
    infoRequestedByOverlay(clickModifiers: ui_mojom_ClickModifiers): void;
    issueLensRegionRequest(region: lens_mojom_CenterRotatedBox, isClick: boolean): void;
    issueLensObjectRequest(region: lens_mojom_CenterRotatedBox, isMaskClick: boolean): void;
    issueTextSelectionRequest(query: string, selectionStartIndex: number, selectionEndIndex: number, isTranslate: boolean): void;
    issueTranslateSelectionRequest(query: string, contentLanguage: string, selectionStartIndex: number, selectionEndIndex: number): void;
    issueMathSelectionRequest(query: string, formula: string, selectionStartIndex: number, selectionEndIndex: number): void;
    issueTranslateFullPageRequest(sourceLanguage: string, targetLanguage: string): void;
    issueEndTranslateModeRequest(): void;
    copyText(text: string): void;
    copyImage(region: lens_mojom_CenterRotatedBox): void;
    saveAsImage(region: lens_mojom_CenterRotatedBox): void;
    closePreselectionBubble(): void;
    recordUkmAndTaskCompletionForLensOverlayInteraction(userAction: UserAction): void;
    recordLensOverlaySemanticEvent(event: SemanticEvent): void;
    fetchSupportedLanguages(): Promise<{
        browserLocale: string;
        sourceLanguages: lens_mojom_Language[];
        targetLanguages: lens_mojom_Language[];
    }>;
    finishReshowOverlay(): void;
    acceptPrivacyNotice(): void;
    dismissPrivacyNotice(): void;
}
export declare class LensPageHandlerRemote implements LensPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<LensPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<LensPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | LensPageHandlerPendingReceiverEndpoint);
    activityRequestedByOverlay(clickModifiers: ui_mojom_ClickModifiers): void;
    closeRequestedByOverlayCloseButton(): void;
    closeRequestedByOverlayBackgroundClick(): void;
    notifyOverlayInitialized(): void;
    addBackgroundBlur(): void;
    setLiveBlur(enabled: boolean): void;
    feedbackRequestedByOverlay(): void;
    getOverlayInvocationSource(): Promise<{
        invocationSource: string;
    }>;
    infoRequestedByOverlay(clickModifiers: ui_mojom_ClickModifiers): void;
    issueLensRegionRequest(region: lens_mojom_CenterRotatedBox, isClick: boolean): void;
    issueLensObjectRequest(region: lens_mojom_CenterRotatedBox, isMaskClick: boolean): void;
    issueTextSelectionRequest(query: string, selectionStartIndex: number, selectionEndIndex: number, isTranslate: boolean): void;
    issueTranslateSelectionRequest(query: string, contentLanguage: string, selectionStartIndex: number, selectionEndIndex: number): void;
    issueMathSelectionRequest(query: string, formula: string, selectionStartIndex: number, selectionEndIndex: number): void;
    issueTranslateFullPageRequest(sourceLanguage: string, targetLanguage: string): void;
    issueEndTranslateModeRequest(): void;
    copyText(text: string): void;
    copyImage(region: lens_mojom_CenterRotatedBox): void;
    saveAsImage(region: lens_mojom_CenterRotatedBox): void;
    closePreselectionBubble(): void;
    recordUkmAndTaskCompletionForLensOverlayInteraction(userAction: UserAction): void;
    recordLensOverlaySemanticEvent(event: SemanticEvent): void;
    fetchSupportedLanguages(): Promise<{
        browserLocale: string;
        sourceLanguages: lens_mojom_Language[];
        targetLanguages: lens_mojom_Language[];
    }>;
    finishReshowOverlay(): void;
    acceptPrivacyNotice(): void;
    dismissPrivacyNotice(): void;
}
/**
 * An object which receives request messages for the LensPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class LensPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<LensPageHandlerRemote, LensPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensPageHandlerRemote, LensPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: LensPageHandlerInterface);
}
export declare class LensPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): LensPageHandlerRemote;
}
/**
 * An object which receives request messages for the LensPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class LensPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<LensPageHandlerRemote, LensPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensPageHandlerRemote, LensPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    activityRequestedByOverlay: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clickModifiers: ui_mojom_ClickModifiers) => any>;
    closeRequestedByOverlayCloseButton: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    closeRequestedByOverlayBackgroundClick: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifyOverlayInitialized: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    addBackgroundBlur: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setLiveBlur: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    feedbackRequestedByOverlay: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getOverlayInvocationSource: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    infoRequestedByOverlay: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clickModifiers: ui_mojom_ClickModifiers) => any>;
    issueLensRegionRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(region: lens_mojom_CenterRotatedBox, isClick: boolean) => any>;
    issueLensObjectRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(region: lens_mojom_CenterRotatedBox, isMaskClick: boolean) => any>;
    issueTextSelectionRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string, selectionStartIndex: number, selectionEndIndex: number, isTranslate: boolean) => any>;
    issueTranslateSelectionRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string, contentLanguage: string, selectionStartIndex: number, selectionEndIndex: number) => any>;
    issueMathSelectionRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string, formula: string, selectionStartIndex: number, selectionEndIndex: number) => any>;
    issueTranslateFullPageRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sourceLanguage: string, targetLanguage: string) => any>;
    issueEndTranslateModeRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    copyText: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: string) => any>;
    copyImage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(region: lens_mojom_CenterRotatedBox) => any>;
    saveAsImage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(region: lens_mojom_CenterRotatedBox) => any>;
    closePreselectionBubble: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordUkmAndTaskCompletionForLensOverlayInteraction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(userAction: UserAction) => any>;
    recordLensOverlaySemanticEvent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(event: SemanticEvent) => any>;
    fetchSupportedLanguages: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    finishReshowOverlay: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    acceptPrivacyNotice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    dismissPrivacyNotice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type LensPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<LensPagePendingReceiver>;
export declare class LensPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<LensPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<LensPagePendingReceiver>;
    constructor(handle: MojoHandle | LensPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface LensPageInterface {
    screenshotDataReceived(screenshotData: skia_mojom_BitmapMappedFromTrustedProcess, isSidePanelOpen: boolean): void;
    notifyHandshakeComplete(): void;
    notifyResultsPanelOpened(): void;
    notifyOverlayClosing(): void;
    objectsReceived(objects: lens_mojom_OverlayObject[]): void;
    textReceived(text: lens_mojom_Text): void;
    regionTextReceived(text: lens_mojom_Text, isInjectedImage: boolean): void;
    shouldShowContextualSearchBox(shouldShow: boolean): void;
    pageContentTypeChanged(newPageContentType: lens_mojom_PageContentType): void;
    setPostRegionSelection(region: lens_mojom_CenterRotatedBox): void;
    setTextSelection(selectionStartIndex: number, selectionEndIndex: number): void;
    setTranslateMode(sourceLanguage: string, targetLanguage: string): void;
    clearRegionSelection(): void;
    clearTextSelection(): void;
    clearAllSelections(): void;
    onCopyCommand(): void;
    suppressGhostLoader(): void;
    onOverlayReshown(screenshotData: skia_mojom_BitmapMappedFromTrustedProcess): void;
}
export declare class LensPageRemote implements LensPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<LensPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<LensPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | LensPagePendingReceiverEndpoint);
    screenshotDataReceived(screenshotData: skia_mojom_BitmapMappedFromTrustedProcess, isSidePanelOpen: boolean): void;
    notifyHandshakeComplete(): void;
    notifyResultsPanelOpened(): void;
    notifyOverlayClosing(): void;
    objectsReceived(objects: lens_mojom_OverlayObject[]): void;
    textReceived(text: lens_mojom_Text): void;
    regionTextReceived(text: lens_mojom_Text, isInjectedImage: boolean): void;
    shouldShowContextualSearchBox(shouldShow: boolean): void;
    pageContentTypeChanged(newPageContentType: lens_mojom_PageContentType): void;
    setPostRegionSelection(region: lens_mojom_CenterRotatedBox): void;
    setTextSelection(selectionStartIndex: number, selectionEndIndex: number): void;
    setTranslateMode(sourceLanguage: string, targetLanguage: string): void;
    clearRegionSelection(): void;
    clearTextSelection(): void;
    clearAllSelections(): void;
    onCopyCommand(): void;
    suppressGhostLoader(): void;
    onOverlayReshown(screenshotData: skia_mojom_BitmapMappedFromTrustedProcess): void;
}
/**
 * An object which receives request messages for the LensPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class LensPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<LensPageRemote, LensPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensPageRemote, LensPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: LensPageInterface);
}
export declare class LensPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): LensPageRemote;
}
/**
 * An object which receives request messages for the LensPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class LensPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<LensPageRemote, LensPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LensPageRemote, LensPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    screenshotDataReceived: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(screenshotData: skia_mojom_BitmapMappedFromTrustedProcess, isSidePanelOpen: boolean) => any>;
    notifyHandshakeComplete: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifyResultsPanelOpened: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifyOverlayClosing: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    objectsReceived: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(objects: lens_mojom_OverlayObject[]) => any>;
    textReceived: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: lens_mojom_Text) => any>;
    regionTextReceived: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: lens_mojom_Text, isInjectedImage: boolean) => any>;
    shouldShowContextualSearchBox: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shouldShow: boolean) => any>;
    pageContentTypeChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(newPageContentType: lens_mojom_PageContentType) => any>;
    setPostRegionSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(region: lens_mojom_CenterRotatedBox) => any>;
    setTextSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(selectionStartIndex: number, selectionEndIndex: number) => any>;
    setTranslateMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sourceLanguage: string, targetLanguage: string) => any>;
    clearRegionSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearTextSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearAllSelections: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onCopyCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    suppressGhostLoader: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onOverlayReshown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(screenshotData: skia_mojom_BitmapMappedFromTrustedProcess) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const LensPageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_ActivityRequestedByOverlay_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_NotifyOverlayInitialized_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_AddBackgroundBlur_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_SetLiveBlur_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_GetOverlayInvocationSource_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_InfoRequestedByOverlay_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_IssueLensRegionRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_IssueLensObjectRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_IssueTextSelectionRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_IssueMathSelectionRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_CopyText_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_CopyImage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_SaveAsImage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_ClosePreselectionBubble_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_FetchSupportedLanguages_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_FinishReshowOverlay_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_AcceptPrivacyNotice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPageHandler_DismissPrivacyNotice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_ScreenshotDataReceived_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_NotifyHandshakeComplete_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_NotifyResultsPanelOpened_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_NotifyOverlayClosing_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_ObjectsReceived_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_TextReceived_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_RegionTextReceived_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_ShouldShowContextualSearchBox_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_PageContentTypeChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_SetPostRegionSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_SetTextSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_SetTranslateMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_ClearRegionSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_ClearTextSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_ClearAllSelections_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_OnCopyCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_SuppressGhostLoader_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LensPage_OnOverlayReshown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface LensPageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: LensPageHandlerPendingReceiver;
    page: LensPageRemote;
}
export type LensPageHandlerFactory_CreatePageHandler_Params = LensPageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface LensPageHandler_ActivityRequestedByOverlay_ParamsMojoType {
    clickModifiers: ui_mojom_ClickModifiers;
}
export type LensPageHandler_ActivityRequestedByOverlay_Params = LensPageHandler_ActivityRequestedByOverlay_ParamsMojoType;
export declare interface LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsMojoType {
}
export type LensPageHandler_CloseRequestedByOverlayCloseButton_Params = LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsMojoType;
export declare interface LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsMojoType {
}
export type LensPageHandler_CloseRequestedByOverlayBackgroundClick_Params = LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsMojoType;
export declare interface LensPageHandler_NotifyOverlayInitialized_ParamsMojoType {
}
export type LensPageHandler_NotifyOverlayInitialized_Params = LensPageHandler_NotifyOverlayInitialized_ParamsMojoType;
export declare interface LensPageHandler_AddBackgroundBlur_ParamsMojoType {
}
export type LensPageHandler_AddBackgroundBlur_Params = LensPageHandler_AddBackgroundBlur_ParamsMojoType;
export declare interface LensPageHandler_SetLiveBlur_ParamsMojoType {
    enabled: boolean;
}
export type LensPageHandler_SetLiveBlur_Params = LensPageHandler_SetLiveBlur_ParamsMojoType;
export declare interface LensPageHandler_FeedbackRequestedByOverlay_ParamsMojoType {
}
export type LensPageHandler_FeedbackRequestedByOverlay_Params = LensPageHandler_FeedbackRequestedByOverlay_ParamsMojoType;
export declare interface LensPageHandler_GetOverlayInvocationSource_ParamsMojoType {
}
export type LensPageHandler_GetOverlayInvocationSource_Params = LensPageHandler_GetOverlayInvocationSource_ParamsMojoType;
export declare interface LensPageHandler_GetOverlayInvocationSource_ResponseParamsMojoType {
    invocationSource: string;
}
export type LensPageHandler_GetOverlayInvocationSource_ResponseParams = LensPageHandler_GetOverlayInvocationSource_ResponseParamsMojoType;
export declare interface LensPageHandler_InfoRequestedByOverlay_ParamsMojoType {
    clickModifiers: ui_mojom_ClickModifiers;
}
export type LensPageHandler_InfoRequestedByOverlay_Params = LensPageHandler_InfoRequestedByOverlay_ParamsMojoType;
export declare interface LensPageHandler_IssueLensRegionRequest_ParamsMojoType {
    region: lens_mojom_CenterRotatedBox;
    isClick: boolean;
}
export type LensPageHandler_IssueLensRegionRequest_Params = LensPageHandler_IssueLensRegionRequest_ParamsMojoType;
export declare interface LensPageHandler_IssueLensObjectRequest_ParamsMojoType {
    region: lens_mojom_CenterRotatedBox;
    isMaskClick: boolean;
}
export type LensPageHandler_IssueLensObjectRequest_Params = LensPageHandler_IssueLensObjectRequest_ParamsMojoType;
export declare interface LensPageHandler_IssueTextSelectionRequest_ParamsMojoType {
    query: string;
    selectionStartIndex: number;
    selectionEndIndex: number;
    isTranslate: boolean;
}
export type LensPageHandler_IssueTextSelectionRequest_Params = LensPageHandler_IssueTextSelectionRequest_ParamsMojoType;
export declare interface LensPageHandler_IssueTranslateSelectionRequest_ParamsMojoType {
    query: string;
    contentLanguage: string;
    selectionStartIndex: number;
    selectionEndIndex: number;
}
export type LensPageHandler_IssueTranslateSelectionRequest_Params = LensPageHandler_IssueTranslateSelectionRequest_ParamsMojoType;
export declare interface LensPageHandler_IssueMathSelectionRequest_ParamsMojoType {
    query: string;
    formula: string;
    selectionStartIndex: number;
    selectionEndIndex: number;
}
export type LensPageHandler_IssueMathSelectionRequest_Params = LensPageHandler_IssueMathSelectionRequest_ParamsMojoType;
export declare interface LensPageHandler_IssueTranslateFullPageRequest_ParamsMojoType {
    sourceLanguage: string;
    targetLanguage: string;
}
export type LensPageHandler_IssueTranslateFullPageRequest_Params = LensPageHandler_IssueTranslateFullPageRequest_ParamsMojoType;
export declare interface LensPageHandler_IssueEndTranslateModeRequest_ParamsMojoType {
}
export type LensPageHandler_IssueEndTranslateModeRequest_Params = LensPageHandler_IssueEndTranslateModeRequest_ParamsMojoType;
export declare interface LensPageHandler_CopyText_ParamsMojoType {
    text: string;
}
export type LensPageHandler_CopyText_Params = LensPageHandler_CopyText_ParamsMojoType;
export declare interface LensPageHandler_CopyImage_ParamsMojoType {
    region: lens_mojom_CenterRotatedBox;
}
export type LensPageHandler_CopyImage_Params = LensPageHandler_CopyImage_ParamsMojoType;
export declare interface LensPageHandler_SaveAsImage_ParamsMojoType {
    region: lens_mojom_CenterRotatedBox;
}
export type LensPageHandler_SaveAsImage_Params = LensPageHandler_SaveAsImage_ParamsMojoType;
export declare interface LensPageHandler_ClosePreselectionBubble_ParamsMojoType {
}
export type LensPageHandler_ClosePreselectionBubble_Params = LensPageHandler_ClosePreselectionBubble_ParamsMojoType;
export declare interface LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsMojoType {
    userAction: UserAction;
}
export type LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_Params = LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsMojoType;
export declare interface LensPageHandler_RecordLensOverlaySemanticEvent_ParamsMojoType {
    event: SemanticEvent;
}
export type LensPageHandler_RecordLensOverlaySemanticEvent_Params = LensPageHandler_RecordLensOverlaySemanticEvent_ParamsMojoType;
export declare interface LensPageHandler_FetchSupportedLanguages_ParamsMojoType {
}
export type LensPageHandler_FetchSupportedLanguages_Params = LensPageHandler_FetchSupportedLanguages_ParamsMojoType;
export declare interface LensPageHandler_FetchSupportedLanguages_ResponseParamsMojoType {
    browserLocale: string;
    sourceLanguages: lens_mojom_Language[];
    targetLanguages: lens_mojom_Language[];
}
export type LensPageHandler_FetchSupportedLanguages_ResponseParams = LensPageHandler_FetchSupportedLanguages_ResponseParamsMojoType;
export declare interface LensPageHandler_FinishReshowOverlay_ParamsMojoType {
}
export type LensPageHandler_FinishReshowOverlay_Params = LensPageHandler_FinishReshowOverlay_ParamsMojoType;
export declare interface LensPageHandler_AcceptPrivacyNotice_ParamsMojoType {
}
export type LensPageHandler_AcceptPrivacyNotice_Params = LensPageHandler_AcceptPrivacyNotice_ParamsMojoType;
export declare interface LensPageHandler_DismissPrivacyNotice_ParamsMojoType {
}
export type LensPageHandler_DismissPrivacyNotice_Params = LensPageHandler_DismissPrivacyNotice_ParamsMojoType;
export declare interface LensPage_ScreenshotDataReceived_ParamsMojoType {
    screenshotData: skia_mojom_BitmapMappedFromTrustedProcess;
    isSidePanelOpen: boolean;
}
export type LensPage_ScreenshotDataReceived_Params = LensPage_ScreenshotDataReceived_ParamsMojoType;
export declare interface LensPage_NotifyHandshakeComplete_ParamsMojoType {
}
export type LensPage_NotifyHandshakeComplete_Params = LensPage_NotifyHandshakeComplete_ParamsMojoType;
export declare interface LensPage_NotifyResultsPanelOpened_ParamsMojoType {
}
export type LensPage_NotifyResultsPanelOpened_Params = LensPage_NotifyResultsPanelOpened_ParamsMojoType;
export declare interface LensPage_NotifyOverlayClosing_ParamsMojoType {
}
export type LensPage_NotifyOverlayClosing_Params = LensPage_NotifyOverlayClosing_ParamsMojoType;
export declare interface LensPage_ObjectsReceived_ParamsMojoType {
    objects: lens_mojom_OverlayObject[];
}
export type LensPage_ObjectsReceived_Params = LensPage_ObjectsReceived_ParamsMojoType;
export declare interface LensPage_TextReceived_ParamsMojoType {
    text: lens_mojom_Text;
}
export type LensPage_TextReceived_Params = LensPage_TextReceived_ParamsMojoType;
export declare interface LensPage_RegionTextReceived_ParamsMojoType {
    text: lens_mojom_Text;
    isInjectedImage: boolean;
}
export type LensPage_RegionTextReceived_Params = LensPage_RegionTextReceived_ParamsMojoType;
export declare interface LensPage_ShouldShowContextualSearchBox_ParamsMojoType {
    shouldShow: boolean;
}
export type LensPage_ShouldShowContextualSearchBox_Params = LensPage_ShouldShowContextualSearchBox_ParamsMojoType;
export declare interface LensPage_PageContentTypeChanged_ParamsMojoType {
    newPageContentType: lens_mojom_PageContentType;
}
export type LensPage_PageContentTypeChanged_Params = LensPage_PageContentTypeChanged_ParamsMojoType;
export declare interface LensPage_SetPostRegionSelection_ParamsMojoType {
    region: lens_mojom_CenterRotatedBox;
}
export type LensPage_SetPostRegionSelection_Params = LensPage_SetPostRegionSelection_ParamsMojoType;
export declare interface LensPage_SetTextSelection_ParamsMojoType {
    selectionStartIndex: number;
    selectionEndIndex: number;
}
export type LensPage_SetTextSelection_Params = LensPage_SetTextSelection_ParamsMojoType;
export declare interface LensPage_SetTranslateMode_ParamsMojoType {
    sourceLanguage: string;
    targetLanguage: string;
}
export type LensPage_SetTranslateMode_Params = LensPage_SetTranslateMode_ParamsMojoType;
export declare interface LensPage_ClearRegionSelection_ParamsMojoType {
}
export type LensPage_ClearRegionSelection_Params = LensPage_ClearRegionSelection_ParamsMojoType;
export declare interface LensPage_ClearTextSelection_ParamsMojoType {
}
export type LensPage_ClearTextSelection_Params = LensPage_ClearTextSelection_ParamsMojoType;
export declare interface LensPage_ClearAllSelections_ParamsMojoType {
}
export type LensPage_ClearAllSelections_Params = LensPage_ClearAllSelections_ParamsMojoType;
export declare interface LensPage_OnCopyCommand_ParamsMojoType {
}
export type LensPage_OnCopyCommand_Params = LensPage_OnCopyCommand_ParamsMojoType;
export declare interface LensPage_SuppressGhostLoader_ParamsMojoType {
}
export type LensPage_SuppressGhostLoader_Params = LensPage_SuppressGhostLoader_ParamsMojoType;
export declare interface LensPage_OnOverlayReshown_ParamsMojoType {
    screenshotData: skia_mojom_BitmapMappedFromTrustedProcess;
}
export type LensPage_OnOverlayReshown_Params = LensPage_OnOverlayReshown_ParamsMojoType;
