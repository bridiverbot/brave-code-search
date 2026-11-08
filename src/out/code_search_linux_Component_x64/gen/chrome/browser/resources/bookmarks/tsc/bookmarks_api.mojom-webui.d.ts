import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Empty as mojoBase_mojom_Empty } from '//resources/mojo/mojo/public/mojom/base/empty.mojom-webui.js';
import { Error as mojoBase_mojom_Error } from '//resources/mojo/mojo/public/mojom/base/error.mojom-webui.js';
import { Uuid as mojoBase_mojom_Uuid } from '//resources/mojo/mojo/public/mojom/base/uuid.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const PermanentFolderTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PermanentFolderType {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnknown = 0,
    kBookmarkBar = 1,
    kOther = 2,
    kMobile = 3,
    kManaged = 4
}
export type BookmarksObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BookmarksObserverPendingReceiver>;
export declare class BookmarksObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BookmarksObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<BookmarksObserverPendingReceiver>;
    constructor(handle: MojoHandle | BookmarksObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BookmarksObserverInterface {
    onBookmarksEvents(events: BookmarksEvent[]): void;
}
export declare class BookmarksObserverRemote implements BookmarksObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<BookmarksObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BookmarksObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BookmarksObserverPendingReceiverEndpoint);
    onBookmarksEvents(events: BookmarksEvent[]): void;
}
/**
 * An object which receives request messages for the BookmarksObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BookmarksObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BookmarksObserverRemote, BookmarksObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksObserverRemote, BookmarksObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BookmarksObserverInterface);
}
export declare class BookmarksObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BookmarksObserverRemote;
}
/**
 * An object which receives request messages for the BookmarksObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BookmarksObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BookmarksObserverRemote, BookmarksObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksObserverRemote, BookmarksObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onBookmarksEvents: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(events: BookmarksEvent[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type BookmarksServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BookmarksServicePendingReceiver>;
export declare class BookmarksServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BookmarksService> {
    handle: mojo.internal.interfaceSupport.Endpoint<BookmarksServicePendingReceiver>;
    constructor(handle: MojoHandle | BookmarksServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BookmarksServiceInterface {
    getBookmarks(): Promise<BookmarksSnapshot>;
    getBookmark(id: mojoBase_mojom_Uuid): Promise<BookmarkNode>;
    createBookmarkNode(parentId: mojoBase_mojom_Uuid, index: (number | null), node: BookmarkNode): Promise<BookmarkNode>;
    updateBookmarkNode(node: BookmarkNode): Promise<BookmarkNode>;
    moveBookmarkNode(id: mojoBase_mojom_Uuid, newParentId: mojoBase_mojom_Uuid, index: (number | null)): Promise<mojoBase_mojom_Empty>;
    deleteBookmarkNodes(ids: mojoBase_mojom_Uuid[]): Promise<mojoBase_mojom_Empty>;
}
export declare class BookmarksServiceRemote implements BookmarksServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<BookmarksServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BookmarksServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BookmarksServicePendingReceiverEndpoint);
    getBookmarks(): Promise<BookmarksSnapshot>;
    getBookmark(id: mojoBase_mojom_Uuid): Promise<BookmarkNode>;
    createBookmarkNode(parentId: mojoBase_mojom_Uuid, index: (number | null), node: BookmarkNode): Promise<BookmarkNode>;
    updateBookmarkNode(node: BookmarkNode): Promise<BookmarkNode>;
    moveBookmarkNode(id: mojoBase_mojom_Uuid, newParentId: mojoBase_mojom_Uuid, index: (number | null)): Promise<mojoBase_mojom_Empty>;
    deleteBookmarkNodes(ids: mojoBase_mojom_Uuid[]): Promise<mojoBase_mojom_Empty>;
}
/**
 * An object which receives request messages for the BookmarksService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BookmarksServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BookmarksServiceRemote, BookmarksServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksServiceRemote, BookmarksServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BookmarksServiceInterface);
}
export declare class BookmarksService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BookmarksServiceRemote;
}
/**
 * An object which receives request messages for the BookmarksService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BookmarksServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BookmarksServiceRemote, BookmarksServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksServiceRemote, BookmarksServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getBookmarks: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: mojoBase_mojom_Uuid) => any>;
    createBookmarkNode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(parentId: mojoBase_mojom_Uuid, index: (number | null), node: BookmarkNode) => any>;
    updateBookmarkNode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(node: BookmarkNode) => any>;
    moveBookmarkNode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: mojoBase_mojom_Uuid, newParentId: mojoBase_mojom_Uuid, index: (number | null)) => any>;
    deleteBookmarkNodes: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ids: mojoBase_mojom_Uuid[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const LegacyFieldsSpec: {
    $: mojo.internal.MojomType;
};
export declare const RootNodeSpec: {
    $: mojo.internal.MojomType;
};
export declare const UrlSpec: {
    $: mojo.internal.MojomType;
};
export declare const FolderSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksSnapshotSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarkNodeCreatedSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarkNodeRemovedSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarkNodeMovedSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarkNodeChangedSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksObserver_OnBookmarksEvents_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_GetBookmarks_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_GetBookmarks_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_GetBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_GetBookmark_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_CreateBookmarkNode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_CreateBookmarkNode_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_UpdateBookmarkNode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_UpdateBookmarkNode_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_MoveBookmarkNode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_MoveBookmarkNode_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_DeleteBookmarkNodes_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_DeleteBookmarkNodes_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarkNodeSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_GetBookmarks_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_GetBookmark_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_CreateBookmarkNode_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_UpdateBookmarkNode_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_MoveBookmarkNode_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface LegacyFieldsMojoType {
    id: (bigint | null);
}
export type LegacyFields = LegacyFieldsMojoType;
export declare interface RootNodeMojoType {
    id: mojoBase_mojom_Uuid;
    children: Folder[];
}
export type RootNode = RootNodeMojoType;
export declare interface UrlMojoType {
    id: (mojoBase_mojom_Uuid | null);
    legacy: (LegacyFields | null);
    title: string;
    url: url_mojom_Url;
    faviconUrl: (url_mojom_Url | null);
    isSynced: boolean;
}
export type Url = UrlMojoType;
export declare interface FolderMojoType {
    id: (mojoBase_mojom_Uuid | null);
    legacy: (LegacyFields | null);
    title: string;
    children: BookmarkNode[];
    permanentFolderType: (PermanentFolderType | null);
    isSynced: boolean;
}
export type Folder = FolderMojoType;
export declare interface BookmarksSnapshotMojoType {
    root: RootNode;
    stream: BookmarksObserverPendingReceiver;
}
export type BookmarksSnapshot = BookmarksSnapshotMojoType;
export declare interface BookmarkNodeCreatedMojoType {
    parentId: mojoBase_mojom_Uuid;
    index: number;
    node: BookmarkNode;
}
export type BookmarkNodeCreated = BookmarkNodeCreatedMojoType;
export declare interface BookmarkNodeRemovedMojoType {
    id: mojoBase_mojom_Uuid;
}
export type BookmarkNodeRemoved = BookmarkNodeRemovedMojoType;
export declare interface BookmarkNodeMovedMojoType {
    oldParentId: mojoBase_mojom_Uuid;
    oldIndex: number;
    newIndex: number;
    newParentId: mojoBase_mojom_Uuid;
}
export type BookmarkNodeMoved = BookmarkNodeMovedMojoType;
export declare interface BookmarkNodeChangedMojoType {
    node: BookmarkNode;
}
export type BookmarkNodeChanged = BookmarkNodeChangedMojoType;
export declare interface BookmarksObserver_OnBookmarksEvents_ParamsMojoType {
    events: BookmarksEvent[];
}
export type BookmarksObserver_OnBookmarksEvents_Params = BookmarksObserver_OnBookmarksEvents_ParamsMojoType;
export declare interface BookmarksService_GetBookmarks_ParamsMojoType {
}
export type BookmarksService_GetBookmarks_Params = BookmarksService_GetBookmarks_ParamsMojoType;
export declare interface BookmarksService_GetBookmarks_ResponseParamsMojoType {
    result: BookmarksService_GetBookmarks_ResponseParam_Result;
}
export type BookmarksService_GetBookmarks_ResponseParams = BookmarksService_GetBookmarks_ResponseParamsMojoType;
export declare interface BookmarksService_GetBookmark_ParamsMojoType {
    id: mojoBase_mojom_Uuid;
}
export type BookmarksService_GetBookmark_Params = BookmarksService_GetBookmark_ParamsMojoType;
export declare interface BookmarksService_GetBookmark_ResponseParamsMojoType {
    result: BookmarksService_GetBookmark_ResponseParam_Result;
}
export type BookmarksService_GetBookmark_ResponseParams = BookmarksService_GetBookmark_ResponseParamsMojoType;
export declare interface BookmarksService_CreateBookmarkNode_ParamsMojoType {
    parentId: mojoBase_mojom_Uuid;
    index: (number | null);
    node: BookmarkNode;
}
export type BookmarksService_CreateBookmarkNode_Params = BookmarksService_CreateBookmarkNode_ParamsMojoType;
export declare interface BookmarksService_CreateBookmarkNode_ResponseParamsMojoType {
    result: BookmarksService_CreateBookmarkNode_ResponseParam_Result;
}
export type BookmarksService_CreateBookmarkNode_ResponseParams = BookmarksService_CreateBookmarkNode_ResponseParamsMojoType;
export declare interface BookmarksService_UpdateBookmarkNode_ParamsMojoType {
    node: BookmarkNode;
}
export type BookmarksService_UpdateBookmarkNode_Params = BookmarksService_UpdateBookmarkNode_ParamsMojoType;
export declare interface BookmarksService_UpdateBookmarkNode_ResponseParamsMojoType {
    result: BookmarksService_UpdateBookmarkNode_ResponseParam_Result;
}
export type BookmarksService_UpdateBookmarkNode_ResponseParams = BookmarksService_UpdateBookmarkNode_ResponseParamsMojoType;
export declare interface BookmarksService_MoveBookmarkNode_ParamsMojoType {
    id: mojoBase_mojom_Uuid;
    newParentId: mojoBase_mojom_Uuid;
    index: (number | null);
}
export type BookmarksService_MoveBookmarkNode_Params = BookmarksService_MoveBookmarkNode_ParamsMojoType;
export declare interface BookmarksService_MoveBookmarkNode_ResponseParamsMojoType {
    result: BookmarksService_MoveBookmarkNode_ResponseParam_Result;
}
export type BookmarksService_MoveBookmarkNode_ResponseParams = BookmarksService_MoveBookmarkNode_ResponseParamsMojoType;
export declare interface BookmarksService_DeleteBookmarkNodes_ParamsMojoType {
    ids: mojoBase_mojom_Uuid[];
}
export type BookmarksService_DeleteBookmarkNodes_Params = BookmarksService_DeleteBookmarkNodes_ParamsMojoType;
export declare interface BookmarksService_DeleteBookmarkNodes_ResponseParamsMojoType {
    result: BookmarksService_DeleteBookmarkNodes_ResponseParam_Result;
}
export type BookmarksService_DeleteBookmarkNodes_ResponseParams = BookmarksService_DeleteBookmarkNodes_ResponseParamsMojoType;
export declare interface BookmarkNode {
    url?: Url;
    folder?: Folder;
}
export declare enum BookmarkNodeFieldTags {
    URL = 0,
    FOLDER = 1
}
export declare function whichBookmarkNode(u: BookmarkNode): BookmarkNodeFieldTags;
export declare interface BookmarksEvent {
    added?: BookmarkNodeCreated;
    removed?: BookmarkNodeRemoved;
    moved?: BookmarkNodeMoved;
    changed?: BookmarkNodeChanged;
}
export declare enum BookmarksEventFieldTags {
    ADDED = 0,
    REMOVED = 1,
    MOVED = 2,
    CHANGED = 3
}
export declare function whichBookmarksEvent(u: BookmarksEvent): BookmarksEventFieldTags;
export declare interface BookmarksService_GetBookmarks_ResponseParam_Result {
    success?: BookmarksSnapshot;
    failure?: mojoBase_mojom_Error;
}
export declare enum BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBookmarksService_GetBookmarks_ResponseParam_Result(u: BookmarksService_GetBookmarks_ResponseParam_Result): BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags;
export declare interface BookmarksService_GetBookmark_ResponseParam_Result {
    success?: BookmarkNode;
    failure?: mojoBase_mojom_Error;
}
export declare enum BookmarksService_GetBookmark_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBookmarksService_GetBookmark_ResponseParam_Result(u: BookmarksService_GetBookmark_ResponseParam_Result): BookmarksService_GetBookmark_ResponseParam_ResultFieldTags;
export declare interface BookmarksService_CreateBookmarkNode_ResponseParam_Result {
    success?: BookmarkNode;
    failure?: mojoBase_mojom_Error;
}
export declare enum BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBookmarksService_CreateBookmarkNode_ResponseParam_Result(u: BookmarksService_CreateBookmarkNode_ResponseParam_Result): BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags;
export declare interface BookmarksService_UpdateBookmarkNode_ResponseParam_Result {
    success?: BookmarkNode;
    failure?: mojoBase_mojom_Error;
}
export declare enum BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBookmarksService_UpdateBookmarkNode_ResponseParam_Result(u: BookmarksService_UpdateBookmarkNode_ResponseParam_Result): BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags;
export declare interface BookmarksService_MoveBookmarkNode_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBookmarksService_MoveBookmarkNode_ResponseParam_Result(u: BookmarksService_MoveBookmarkNode_ResponseParam_Result): BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags;
export declare interface BookmarksService_DeleteBookmarkNodes_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichBookmarksService_DeleteBookmarkNodes_ResponseParam_Result(u: BookmarksService_DeleteBookmarkNodes_ResponseParam_Result): BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags;
