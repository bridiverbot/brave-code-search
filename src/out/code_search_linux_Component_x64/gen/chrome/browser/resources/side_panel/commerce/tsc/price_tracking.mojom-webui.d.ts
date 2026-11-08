import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { BookmarkProductInfo as commerce_shared_mojom_BookmarkProductInfo } from './shared.mojom-webui.js';
import { String16 as mojoBase_mojom_String16 } from '//resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
export type PriceTrackingHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PriceTrackingHandlerPendingReceiver>;
export declare class PriceTrackingHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PriceTrackingHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PriceTrackingHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PriceTrackingHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PriceTrackingHandlerInterface {
    trackPriceForBookmark(bookmarkId: bigint): void;
    untrackPriceForBookmark(bookmarkId: bigint): void;
    setPriceTrackingStatusForCurrentUrl(track: boolean): void;
    getAllShoppingBookmarkProductInfo(): Promise<{
        productInfos: commerce_shared_mojom_BookmarkProductInfo[];
    }>;
    getAllPriceTrackedBookmarkProductInfo(): Promise<{
        productInfos: commerce_shared_mojom_BookmarkProductInfo[];
    }>;
    getShoppingCollectionBookmarkFolderId(): Promise<{
        collectionId: bigint;
    }>;
    getParentBookmarkFolderNameForCurrentUrl(): Promise<{
        name: mojoBase_mojom_String16;
    }>;
    showBookmarkEditorForCurrentUrl(): void;
}
export declare class PriceTrackingHandlerRemote implements PriceTrackingHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PriceTrackingHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PriceTrackingHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PriceTrackingHandlerPendingReceiverEndpoint);
    trackPriceForBookmark(bookmarkId: bigint): void;
    untrackPriceForBookmark(bookmarkId: bigint): void;
    setPriceTrackingStatusForCurrentUrl(track: boolean): void;
    getAllShoppingBookmarkProductInfo(): Promise<{
        productInfos: commerce_shared_mojom_BookmarkProductInfo[];
    }>;
    getAllPriceTrackedBookmarkProductInfo(): Promise<{
        productInfos: commerce_shared_mojom_BookmarkProductInfo[];
    }>;
    getShoppingCollectionBookmarkFolderId(): Promise<{
        collectionId: bigint;
    }>;
    getParentBookmarkFolderNameForCurrentUrl(): Promise<{
        name: mojoBase_mojom_String16;
    }>;
    showBookmarkEditorForCurrentUrl(): void;
}
/**
 * An object which receives request messages for the PriceTrackingHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PriceTrackingHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PriceTrackingHandlerRemote, PriceTrackingHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PriceTrackingHandlerRemote, PriceTrackingHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PriceTrackingHandlerInterface);
}
export declare class PriceTrackingHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PriceTrackingHandlerRemote;
}
/**
 * An object which receives request messages for the PriceTrackingHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PriceTrackingHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PriceTrackingHandlerRemote, PriceTrackingHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PriceTrackingHandlerRemote, PriceTrackingHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    trackPriceForBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(bookmarkId: bigint) => any>;
    untrackPriceForBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(bookmarkId: bigint) => any>;
    setPriceTrackingStatusForCurrentUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(track: boolean) => any>;
    getAllShoppingBookmarkProductInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getAllPriceTrackedBookmarkProductInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getShoppingCollectionBookmarkFolderId: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getParentBookmarkFolderNameForCurrentUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showBookmarkEditorForCurrentUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
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
    priceTrackedForBookmark(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo): void;
    priceUntrackedForBookmark(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo): void;
    operationFailedForBookmark(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo, attemptedTrack: boolean): void;
    onProductBookmarkMoved(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    priceTrackedForBookmark(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo): void;
    priceUntrackedForBookmark(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo): void;
    operationFailedForBookmark(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo, attemptedTrack: boolean): void;
    onProductBookmarkMoved(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo): void;
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
    priceTrackedForBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo) => any>;
    priceUntrackedForBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo) => any>;
    operationFailedForBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo, attemptedTrack: boolean) => any>;
    onProductBookmarkMoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PriceTrackingHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PriceTrackingHandlerFactoryPendingReceiver>;
export declare class PriceTrackingHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PriceTrackingHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PriceTrackingHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PriceTrackingHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PriceTrackingHandlerFactoryInterface {
    createPriceTrackingHandler(page: PageRemote, handler: PriceTrackingHandlerPendingReceiver): void;
}
export declare class PriceTrackingHandlerFactoryRemote implements PriceTrackingHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PriceTrackingHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PriceTrackingHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PriceTrackingHandlerFactoryPendingReceiverEndpoint);
    createPriceTrackingHandler(page: PageRemote, handler: PriceTrackingHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PriceTrackingHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PriceTrackingHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PriceTrackingHandlerFactoryRemote, PriceTrackingHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PriceTrackingHandlerFactoryRemote, PriceTrackingHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PriceTrackingHandlerFactoryInterface);
}
export declare class PriceTrackingHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PriceTrackingHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PriceTrackingHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PriceTrackingHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PriceTrackingHandlerFactoryRemote, PriceTrackingHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PriceTrackingHandlerFactoryRemote, PriceTrackingHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPriceTrackingHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PageRemote, handler: PriceTrackingHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_PriceTrackedForBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_PriceUntrackedForBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OperationFailedForBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnProductBookmarkMoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PriceTrackingHandler_TrackPriceForBookmark_ParamsMojoType {
    bookmarkId: bigint;
}
export type PriceTrackingHandler_TrackPriceForBookmark_Params = PriceTrackingHandler_TrackPriceForBookmark_ParamsMojoType;
export declare interface PriceTrackingHandler_UntrackPriceForBookmark_ParamsMojoType {
    bookmarkId: bigint;
}
export type PriceTrackingHandler_UntrackPriceForBookmark_Params = PriceTrackingHandler_UntrackPriceForBookmark_ParamsMojoType;
export declare interface PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsMojoType {
    track: boolean;
}
export type PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_Params = PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsMojoType;
export declare interface PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsMojoType {
}
export type PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_Params = PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsMojoType;
export declare interface PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsMojoType {
    productInfos: commerce_shared_mojom_BookmarkProductInfo[];
}
export type PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParams = PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsMojoType;
export declare interface PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsMojoType {
}
export type PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_Params = PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsMojoType;
export declare interface PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsMojoType {
    productInfos: commerce_shared_mojom_BookmarkProductInfo[];
}
export type PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParams = PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsMojoType;
export declare interface PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsMojoType {
}
export type PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_Params = PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsMojoType;
export declare interface PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsMojoType {
    collectionId: bigint;
}
export type PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParams = PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsMojoType;
export declare interface PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsMojoType {
}
export type PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_Params = PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsMojoType;
export declare interface PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsMojoType {
    name: mojoBase_mojom_String16;
}
export type PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParams = PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsMojoType;
export declare interface PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsMojoType {
}
export type PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_Params = PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsMojoType;
export declare interface Page_PriceTrackedForBookmark_ParamsMojoType {
    bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo;
}
export type Page_PriceTrackedForBookmark_Params = Page_PriceTrackedForBookmark_ParamsMojoType;
export declare interface Page_PriceUntrackedForBookmark_ParamsMojoType {
    bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo;
}
export type Page_PriceUntrackedForBookmark_Params = Page_PriceUntrackedForBookmark_ParamsMojoType;
export declare interface Page_OperationFailedForBookmark_ParamsMojoType {
    bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo;
    attemptedTrack: boolean;
}
export type Page_OperationFailedForBookmark_Params = Page_OperationFailedForBookmark_ParamsMojoType;
export declare interface Page_OnProductBookmarkMoved_ParamsMojoType {
    bookmarkProduct: commerce_shared_mojom_BookmarkProductInfo;
}
export type Page_OnProductBookmarkMoved_Params = Page_OnProductBookmarkMoved_ParamsMojoType;
export declare interface PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsMojoType {
    page: PageRemote;
    handler: PriceTrackingHandlerPendingReceiver;
}
export type PriceTrackingHandlerFactory_CreatePriceTrackingHandler_Params = PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PriceTrackingHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PriceTrackingHandlerInterface, PageRemote, PriceTrackingHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PriceTrackingHandlerRemote>;
