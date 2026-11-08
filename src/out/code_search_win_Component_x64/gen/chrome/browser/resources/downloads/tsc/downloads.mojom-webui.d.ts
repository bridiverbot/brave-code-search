import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { String16 as mojoBase_mojom_String16 } from '//resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const DangerTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DangerType {
    MIN_VALUE = 0,
    MAX_VALUE = 19,
    kNoApplicableDangerType = 0,
    kDangerousFile = 1,
    kDangerousUrl = 2,
    kDangerousContent = 3,
    kCookieTheft = 4,
    kUncommonContent = 5,
    kDangerousHost = 6,
    kPotentiallyUnwanted = 7,
    kAsyncScanning = 8,
    kAsyncLocalPasswordScanning = 9,
    kBlockedPasswordProtected = 10,
    kBlockedTooLarge = 11,
    kSensitiveContentWarning = 12,
    kSensitiveContentBlock = 13,
    kDeepScannedFailed = 14,
    kDeepScannedSafe = 15,
    kDeepScannedOpenedDangerous = 16,
    kBlockedScanFailed = 17,
    kForcedSaveToGdrive = 18,
    kForcedSaveToOnedrive = 19
}
export declare const TailoredWarningTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TailoredWarningType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kNoApplicableTailoredWarningType = 0,
    kCookieTheft = 1,
    kSuspiciousArchive = 2
}
export declare const StateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum State {
    MIN_VALUE = 0,
    MAX_VALUE = 9,
    kInProgress = 0,
    kCancelled = 1,
    kComplete = 2,
    kPaused = 3,
    kDangerous = 4,
    kInterrupted = 5,
    kInsecure = 6,
    kAsyncScanning = 7,
    kPromptForScanning = 8,
    kPromptForLocalPasswordScanning = 9
}
export declare const SafeBrowsingStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SafeBrowsingState {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kNoSafeBrowsing = 0,
    kStandardProtection = 1,
    kEnhancedProtection = 2
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
    getDownloads(searchTerms: string[]): void;
    openFileRequiringGesture(id: string): void;
    drag(id: string): void;
    saveSuspiciousRequiringGesture(id: string): void;
    recordOpenBypassWarningDialog(id: string): void;
    saveDangerousFromDialogRequiringGesture(id: string): void;
    recordCancelBypassWarningDialog(id: string): void;
    discardDangerous(id: string): void;
    retryDownload(id: string): void;
    show(id: string): void;
    pause(id: string): void;
    resume(id: string): void;
    remove(id: string): void;
    undo(): void;
    cancel(id: string): void;
    clearAll(): void;
    openDownloadsFolderRequiringGesture(): void;
    openEsbSettings(): void;
    logEsbPromotionRowViewed(): void;
    openDuringScanningRequiringGesture(id: string): void;
    reviewDangerousRequiringGesture(id: string): void;
    deepScan(id: string): void;
    bypassDeepScanRequiringGesture(id: string): void;
    isEligibleForEsbPromo(): Promise<{
        result: boolean;
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getDownloads(searchTerms: string[]): void;
    openFileRequiringGesture(id: string): void;
    drag(id: string): void;
    saveSuspiciousRequiringGesture(id: string): void;
    recordOpenBypassWarningDialog(id: string): void;
    saveDangerousFromDialogRequiringGesture(id: string): void;
    recordCancelBypassWarningDialog(id: string): void;
    discardDangerous(id: string): void;
    retryDownload(id: string): void;
    show(id: string): void;
    pause(id: string): void;
    resume(id: string): void;
    remove(id: string): void;
    undo(): void;
    cancel(id: string): void;
    clearAll(): void;
    openDownloadsFolderRequiringGesture(): void;
    openEsbSettings(): void;
    logEsbPromotionRowViewed(): void;
    openDuringScanningRequiringGesture(id: string): void;
    reviewDangerousRequiringGesture(id: string): void;
    deepScan(id: string): void;
    bypassDeepScanRequiringGesture(id: string): void;
    isEligibleForEsbPromo(): Promise<{
        result: boolean;
    }>;
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
    getDownloads: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(searchTerms: string[]) => any>;
    openFileRequiringGesture: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    drag: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    saveSuspiciousRequiringGesture: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    recordOpenBypassWarningDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    saveDangerousFromDialogRequiringGesture: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    recordCancelBypassWarningDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    discardDangerous: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    retryDownload: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    show: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    pause: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    resume: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    remove: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    undo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    cancel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    clearAll: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openDownloadsFolderRequiringGesture: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openEsbSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    logEsbPromotionRowViewed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openDuringScanningRequiringGesture: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    reviewDangerousRequiringGesture: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    deepScan: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    bypassDeepScanRequiringGesture: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    isEligibleForEsbPromo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
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
    removeItem(index: number): void;
    updateItem(index: number, data: Data): void;
    insertItems(index: number, items: Data[]): void;
    clearAll(): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    removeItem(index: number): void;
    updateItem(index: number, data: Data): void;
    insertItems(index: number, items: Data[]): void;
    clearAll(): void;
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
    removeItem: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(index: number) => any>;
    updateItem: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(index: number, data: Data) => any>;
    insertItems: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(index: number, items: Data[]) => any>;
    clearAll: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const DataSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetDownloads_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenFileRequiringGesture_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Drag_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordOpenBypassWarningDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordCancelBypassWarningDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DiscardDangerous_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RetryDownload_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Show_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Pause_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Resume_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Remove_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Undo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Cancel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearAll_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenEsbSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_LogEsbPromotionRowViewed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ReviewDangerousRequiringGesture_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeepScan_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_BypassDeepScanRequiringGesture_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsEligibleForEsbPromo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsEligibleForEsbPromo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_RemoveItem_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateItem_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_InsertItems_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ClearAll_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DataMojoType {
    fileExternallyRemoved: boolean;
    isDangerous: boolean;
    isInsecure: boolean;
    isReviewable: boolean;
    otr: boolean;
    resume: boolean;
    retry: boolean;
    hasSafeBrowsingVerdict: boolean;
    percent: number;
    started: number;
    dangerType: DangerType;
    total: bigint;
    byExtId: string;
    byExtName: string;
    tailoredWarningType: TailoredWarningType;
    state: State;
    dateString: string;
    fileName: string;
    filePath: string;
    fileUrl: string;
    id: string;
    lastReasonText: string;
    progressStatusText: string;
    showInFolderText: string;
    sinceString: string;
    displayInitiatorOrigin: mojoBase_mojom_String16;
    url: (url_mojom_Url | null);
    safeBrowsingState: SafeBrowsingState;
}
export type Data = DataMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_GetDownloads_ParamsMojoType {
    searchTerms: string[];
}
export type PageHandler_GetDownloads_Params = PageHandler_GetDownloads_ParamsMojoType;
export declare interface PageHandler_OpenFileRequiringGesture_ParamsMojoType {
    id: string;
}
export type PageHandler_OpenFileRequiringGesture_Params = PageHandler_OpenFileRequiringGesture_ParamsMojoType;
export declare interface PageHandler_Drag_ParamsMojoType {
    id: string;
}
export type PageHandler_Drag_Params = PageHandler_Drag_ParamsMojoType;
export declare interface PageHandler_SaveSuspiciousRequiringGesture_ParamsMojoType {
    id: string;
}
export type PageHandler_SaveSuspiciousRequiringGesture_Params = PageHandler_SaveSuspiciousRequiringGesture_ParamsMojoType;
export declare interface PageHandler_RecordOpenBypassWarningDialog_ParamsMojoType {
    id: string;
}
export type PageHandler_RecordOpenBypassWarningDialog_Params = PageHandler_RecordOpenBypassWarningDialog_ParamsMojoType;
export declare interface PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsMojoType {
    id: string;
}
export type PageHandler_SaveDangerousFromDialogRequiringGesture_Params = PageHandler_SaveDangerousFromDialogRequiringGesture_ParamsMojoType;
export declare interface PageHandler_RecordCancelBypassWarningDialog_ParamsMojoType {
    id: string;
}
export type PageHandler_RecordCancelBypassWarningDialog_Params = PageHandler_RecordCancelBypassWarningDialog_ParamsMojoType;
export declare interface PageHandler_DiscardDangerous_ParamsMojoType {
    id: string;
}
export type PageHandler_DiscardDangerous_Params = PageHandler_DiscardDangerous_ParamsMojoType;
export declare interface PageHandler_RetryDownload_ParamsMojoType {
    id: string;
}
export type PageHandler_RetryDownload_Params = PageHandler_RetryDownload_ParamsMojoType;
export declare interface PageHandler_Show_ParamsMojoType {
    id: string;
}
export type PageHandler_Show_Params = PageHandler_Show_ParamsMojoType;
export declare interface PageHandler_Pause_ParamsMojoType {
    id: string;
}
export type PageHandler_Pause_Params = PageHandler_Pause_ParamsMojoType;
export declare interface PageHandler_Resume_ParamsMojoType {
    id: string;
}
export type PageHandler_Resume_Params = PageHandler_Resume_ParamsMojoType;
export declare interface PageHandler_Remove_ParamsMojoType {
    id: string;
}
export type PageHandler_Remove_Params = PageHandler_Remove_ParamsMojoType;
export declare interface PageHandler_Undo_ParamsMojoType {
}
export type PageHandler_Undo_Params = PageHandler_Undo_ParamsMojoType;
export declare interface PageHandler_Cancel_ParamsMojoType {
    id: string;
}
export type PageHandler_Cancel_Params = PageHandler_Cancel_ParamsMojoType;
export declare interface PageHandler_ClearAll_ParamsMojoType {
}
export type PageHandler_ClearAll_Params = PageHandler_ClearAll_ParamsMojoType;
export declare interface PageHandler_OpenDownloadsFolderRequiringGesture_ParamsMojoType {
}
export type PageHandler_OpenDownloadsFolderRequiringGesture_Params = PageHandler_OpenDownloadsFolderRequiringGesture_ParamsMojoType;
export declare interface PageHandler_OpenEsbSettings_ParamsMojoType {
}
export type PageHandler_OpenEsbSettings_Params = PageHandler_OpenEsbSettings_ParamsMojoType;
export declare interface PageHandler_LogEsbPromotionRowViewed_ParamsMojoType {
}
export type PageHandler_LogEsbPromotionRowViewed_Params = PageHandler_LogEsbPromotionRowViewed_ParamsMojoType;
export declare interface PageHandler_OpenDuringScanningRequiringGesture_ParamsMojoType {
    id: string;
}
export type PageHandler_OpenDuringScanningRequiringGesture_Params = PageHandler_OpenDuringScanningRequiringGesture_ParamsMojoType;
export declare interface PageHandler_ReviewDangerousRequiringGesture_ParamsMojoType {
    id: string;
}
export type PageHandler_ReviewDangerousRequiringGesture_Params = PageHandler_ReviewDangerousRequiringGesture_ParamsMojoType;
export declare interface PageHandler_DeepScan_ParamsMojoType {
    id: string;
}
export type PageHandler_DeepScan_Params = PageHandler_DeepScan_ParamsMojoType;
export declare interface PageHandler_BypassDeepScanRequiringGesture_ParamsMojoType {
    id: string;
}
export type PageHandler_BypassDeepScanRequiringGesture_Params = PageHandler_BypassDeepScanRequiringGesture_ParamsMojoType;
export declare interface PageHandler_IsEligibleForEsbPromo_ParamsMojoType {
}
export type PageHandler_IsEligibleForEsbPromo_Params = PageHandler_IsEligibleForEsbPromo_ParamsMojoType;
export declare interface PageHandler_IsEligibleForEsbPromo_ResponseParamsMojoType {
    result: boolean;
}
export type PageHandler_IsEligibleForEsbPromo_ResponseParams = PageHandler_IsEligibleForEsbPromo_ResponseParamsMojoType;
export declare interface Page_RemoveItem_ParamsMojoType {
    index: number;
}
export type Page_RemoveItem_Params = Page_RemoveItem_ParamsMojoType;
export declare interface Page_UpdateItem_ParamsMojoType {
    index: number;
    data: Data;
}
export type Page_UpdateItem_Params = Page_UpdateItem_ParamsMojoType;
export declare interface Page_InsertItems_ParamsMojoType {
    index: number;
    items: Data[];
}
export type Page_InsertItems_Params = Page_InsertItems_ParamsMojoType;
export declare interface Page_ClearAll_ParamsMojoType {
}
export type Page_ClearAll_Params = Page_ClearAll_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
