import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { ClickModifiers as ui_mojom_ClickModifiers } from '//resources/mojo/ui/base/mojom/window_open_disposition.mojom-webui.js';
import { Point as gfx_mojom_Point } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
export declare const ActionSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ActionSource {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kBookmark = 0,
    kPriceTracking = 1
}
export declare const SortOrderSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SortOrder {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kNewest = 0,
    kOldest = 1,
    kLastOpened = 2,
    kAlphabetical = 3,
    kReverseAlphabetical = 4,
    kCustom = 5,
    kCount = 6
}
export declare const ViewTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ViewType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kCompact = 0,
    kExpanded = 1,
    kCount = 2
}
export type BookmarksPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BookmarksPageHandlerFactoryPendingReceiver>;
export declare class BookmarksPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BookmarksPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<BookmarksPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | BookmarksPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BookmarksPageHandlerFactoryInterface {
    createBookmarksPageHandler(page: BookmarksPageRemote, handler: BookmarksPageHandlerPendingReceiver): void;
}
export declare class BookmarksPageHandlerFactoryRemote implements BookmarksPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<BookmarksPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BookmarksPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BookmarksPageHandlerFactoryPendingReceiverEndpoint);
    createBookmarksPageHandler(page: BookmarksPageRemote, handler: BookmarksPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the BookmarksPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BookmarksPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BookmarksPageHandlerFactoryRemote, BookmarksPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksPageHandlerFactoryRemote, BookmarksPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BookmarksPageHandlerFactoryInterface);
}
export declare class BookmarksPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BookmarksPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the BookmarksPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BookmarksPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BookmarksPageHandlerFactoryRemote, BookmarksPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksPageHandlerFactoryRemote, BookmarksPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createBookmarksPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: BookmarksPageRemote, handler: BookmarksPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type BookmarksPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BookmarksPageHandlerPendingReceiver>;
export declare class BookmarksPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BookmarksPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<BookmarksPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | BookmarksPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BookmarksPageHandlerInterface {
    bookmarkCurrentTabInFolder(folderId: string): void;
    createFolder(folderId: string, title: string): Promise<{
        newFolderId: string;
    }>;
    dropBookmarks(folderId: string): Promise<void>;
    executeEditCommand(nodeIds: bigint[], source: ActionSource): void;
    executeMoveCommand(nodeIds: bigint[], source: ActionSource): void;
    executeOpenInNewTabCommand(sidePanelIds: string[], source: ActionSource): void;
    executeOpenInNewWindowCommand(sidePanelIds: string[], source: ActionSource): void;
    executeOpenInOffTheRecordWindowCommand(sidePanelIds: string[], source: ActionSource): void;
    executeOpenInNewTabGroupCommand(sidePanelIds: string[], source: ActionSource): void;
    executeOpenInSplitViewCommand(nodeIds: bigint[], source: ActionSource): void;
    executeAddToBookmarksBarCommand(nodeId: bigint, source: ActionSource): void;
    executeRemoveFromBookmarksBarCommand(nodeId: bigint, source: ActionSource): void;
    executeDeleteCommand(nodeIds: bigint[], source: ActionSource): void;
    getIncognitoAvailableCount(sidePanelIds: string[]): Promise<{
        incognitoCount: number;
    }>;
    openBookmark(nodeId: bigint, parentFolderDepth: number, clickModifiers: ui_mojom_ClickModifiers, source: ActionSource): void;
    undo(): void;
    renameBookmark(nodeId: bigint, newTitle: string): void;
    removeBookmarks(nodeIds: bigint[]): Promise<void>;
    setSortOrder(sortOrder: SortOrder): void;
    setViewType(viewType: ViewType): void;
    showContextMenu(id: string, point: gfx_mojom_Point, source: ActionSource): void;
    showUI(): void;
    getAllBookmarks(): Promise<{
        nodes: BookmarksTreeNode[];
    }>;
}
export declare class BookmarksPageHandlerRemote implements BookmarksPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<BookmarksPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BookmarksPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BookmarksPageHandlerPendingReceiverEndpoint);
    bookmarkCurrentTabInFolder(folderId: string): void;
    createFolder(folderId: string, title: string): Promise<{
        newFolderId: string;
    }>;
    dropBookmarks(folderId: string): Promise<void>;
    executeEditCommand(nodeIds: bigint[], source: ActionSource): void;
    executeMoveCommand(nodeIds: bigint[], source: ActionSource): void;
    executeOpenInNewTabCommand(sidePanelIds: string[], source: ActionSource): void;
    executeOpenInNewWindowCommand(sidePanelIds: string[], source: ActionSource): void;
    executeOpenInOffTheRecordWindowCommand(sidePanelIds: string[], source: ActionSource): void;
    executeOpenInNewTabGroupCommand(sidePanelIds: string[], source: ActionSource): void;
    executeOpenInSplitViewCommand(nodeIds: bigint[], source: ActionSource): void;
    executeAddToBookmarksBarCommand(nodeId: bigint, source: ActionSource): void;
    executeRemoveFromBookmarksBarCommand(nodeId: bigint, source: ActionSource): void;
    executeDeleteCommand(nodeIds: bigint[], source: ActionSource): void;
    getIncognitoAvailableCount(sidePanelIds: string[]): Promise<{
        incognitoCount: number;
    }>;
    openBookmark(nodeId: bigint, parentFolderDepth: number, clickModifiers: ui_mojom_ClickModifiers, source: ActionSource): void;
    undo(): void;
    renameBookmark(nodeId: bigint, newTitle: string): void;
    removeBookmarks(nodeIds: bigint[]): Promise<void>;
    setSortOrder(sortOrder: SortOrder): void;
    setViewType(viewType: ViewType): void;
    showContextMenu(id: string, point: gfx_mojom_Point, source: ActionSource): void;
    showUI(): void;
    getAllBookmarks(): Promise<{
        nodes: BookmarksTreeNode[];
    }>;
}
/**
 * An object which receives request messages for the BookmarksPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BookmarksPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BookmarksPageHandlerRemote, BookmarksPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksPageHandlerRemote, BookmarksPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BookmarksPageHandlerInterface);
}
export declare class BookmarksPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BookmarksPageHandlerRemote;
}
/**
 * An object which receives request messages for the BookmarksPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BookmarksPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BookmarksPageHandlerRemote, BookmarksPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksPageHandlerRemote, BookmarksPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bookmarkCurrentTabInFolder: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(folderId: string) => any>;
    createFolder: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(folderId: string, title: string) => any>;
    dropBookmarks: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(folderId: string) => any>;
    executeEditCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeIds: bigint[], source: ActionSource) => any>;
    executeMoveCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeIds: bigint[], source: ActionSource) => any>;
    executeOpenInNewTabCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sidePanelIds: string[], source: ActionSource) => any>;
    executeOpenInNewWindowCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sidePanelIds: string[], source: ActionSource) => any>;
    executeOpenInOffTheRecordWindowCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sidePanelIds: string[], source: ActionSource) => any>;
    executeOpenInNewTabGroupCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sidePanelIds: string[], source: ActionSource) => any>;
    executeOpenInSplitViewCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeIds: bigint[], source: ActionSource) => any>;
    executeAddToBookmarksBarCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeId: bigint, source: ActionSource) => any>;
    executeRemoveFromBookmarksBarCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeId: bigint, source: ActionSource) => any>;
    executeDeleteCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeIds: bigint[], source: ActionSource) => any>;
    getIncognitoAvailableCount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sidePanelIds: string[]) => any>;
    openBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeId: bigint, parentFolderDepth: number, clickModifiers: ui_mojom_ClickModifiers, source: ActionSource) => any>;
    undo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    renameBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeId: bigint, newTitle: string) => any>;
    removeBookmarks: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeIds: bigint[]) => any>;
    setSortOrder: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sortOrder: SortOrder) => any>;
    setViewType: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(viewType: ViewType) => any>;
    showContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string, point: gfx_mojom_Point, source: ActionSource) => any>;
    showUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getAllBookmarks: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type BookmarksPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BookmarksPagePendingReceiver>;
export declare class BookmarksPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BookmarksPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<BookmarksPagePendingReceiver>;
    constructor(handle: MojoHandle | BookmarksPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BookmarksPageInterface {
    onBookmarkNodeAdded(node: BookmarksTreeNode): void;
    onBookmarkNodesRemoved(nodeIds: string[]): void;
    onBookmarkParentFolderChildrenReordered(folderId: string, childrenOrderedIds: string[]): void;
    onBookmarkNodeMoved(oldParentIndex: string, oldNodeIndex: number, newParentIndex: string, newNodeIndex: number): void;
    onBookmarkNodeChanged(id: string, newTitle: string, newUrl: string): void;
}
export declare class BookmarksPageRemote implements BookmarksPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<BookmarksPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BookmarksPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BookmarksPagePendingReceiverEndpoint);
    onBookmarkNodeAdded(node: BookmarksTreeNode): void;
    onBookmarkNodesRemoved(nodeIds: string[]): void;
    onBookmarkParentFolderChildrenReordered(folderId: string, childrenOrderedIds: string[]): void;
    onBookmarkNodeMoved(oldParentIndex: string, oldNodeIndex: number, newParentIndex: string, newNodeIndex: number): void;
    onBookmarkNodeChanged(id: string, newTitle: string, newUrl: string): void;
}
/**
 * An object which receives request messages for the BookmarksPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BookmarksPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BookmarksPageRemote, BookmarksPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksPageRemote, BookmarksPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BookmarksPageInterface);
}
export declare class BookmarksPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BookmarksPageRemote;
}
/**
 * An object which receives request messages for the BookmarksPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BookmarksPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BookmarksPageRemote, BookmarksPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BookmarksPageRemote, BookmarksPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onBookmarkNodeAdded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(node: BookmarksTreeNode) => any>;
    onBookmarkNodesRemoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nodeIds: string[]) => any>;
    onBookmarkParentFolderChildrenReordered: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(folderId: string, childrenOrderedIds: string[]) => any>;
    onBookmarkNodeMoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(oldParentIndex: string, oldNodeIndex: number, newParentIndex: string, newNodeIndex: number) => any>;
    onBookmarkNodeChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string, newTitle: string, newUrl: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const BookmarksTreeNodeSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_CreateFolder_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_CreateFolder_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_DropBookmarks_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_DropBookmarks_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteEditCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteOpenInOffTheRecordWindowCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_GetIncognitoAvailableCount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_GetIncognitoAvailableCount_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_OpenBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_Undo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_RenameBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_RemoveBookmarks_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_RemoveBookmarks_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_SetSortOrder_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_SetViewType_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ShowContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_ShowUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_GetAllBookmarks_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPageHandler_GetAllBookmarks_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPage_OnBookmarkNodeAdded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPage_OnBookmarkNodeMoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BookmarksPage_OnBookmarkNodeChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface BookmarksTreeNodeMojoType {
    id: string;
    parentId: string;
    index: number;
    dateAdded: (number | null);
    dateLastUsed: (number | null);
    unmodifiable: boolean;
    title: string;
    url: (string | null);
    children: (BookmarksTreeNode[] | null);
}
export type BookmarksTreeNode = BookmarksTreeNodeMojoType;
export declare interface BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsMojoType {
    page: BookmarksPageRemote;
    handler: BookmarksPageHandlerPendingReceiver;
}
export type BookmarksPageHandlerFactory_CreateBookmarksPageHandler_Params = BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsMojoType;
export declare interface BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsMojoType {
    folderId: string;
}
export type BookmarksPageHandler_BookmarkCurrentTabInFolder_Params = BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsMojoType;
export declare interface BookmarksPageHandler_CreateFolder_ParamsMojoType {
    folderId: string;
    title: string;
}
export type BookmarksPageHandler_CreateFolder_Params = BookmarksPageHandler_CreateFolder_ParamsMojoType;
export declare interface BookmarksPageHandler_CreateFolder_ResponseParamsMojoType {
    newFolderId: string;
}
export type BookmarksPageHandler_CreateFolder_ResponseParams = BookmarksPageHandler_CreateFolder_ResponseParamsMojoType;
export declare interface BookmarksPageHandler_DropBookmarks_ParamsMojoType {
    folderId: string;
}
export type BookmarksPageHandler_DropBookmarks_Params = BookmarksPageHandler_DropBookmarks_ParamsMojoType;
export declare interface BookmarksPageHandler_DropBookmarks_ResponseParamsMojoType {
}
export type BookmarksPageHandler_DropBookmarks_ResponseParams = BookmarksPageHandler_DropBookmarks_ResponseParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteEditCommand_ParamsMojoType {
    nodeIds: bigint[];
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteEditCommand_Params = BookmarksPageHandler_ExecuteEditCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteMoveCommand_ParamsMojoType {
    nodeIds: bigint[];
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteMoveCommand_Params = BookmarksPageHandler_ExecuteMoveCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsMojoType {
    sidePanelIds: string[];
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteOpenInNewTabCommand_Params = BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsMojoType {
    sidePanelIds: string[];
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteOpenInNewWindowCommand_Params = BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteOpenInOffTheRecordWindowCommand_ParamsMojoType {
    sidePanelIds: string[];
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteOpenInOffTheRecordWindowCommand_Params = BookmarksPageHandler_ExecuteOpenInOffTheRecordWindowCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsMojoType {
    sidePanelIds: string[];
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_Params = BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsMojoType {
    nodeIds: bigint[];
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteOpenInSplitViewCommand_Params = BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsMojoType {
    nodeId: bigint;
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_Params = BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsMojoType {
    nodeId: bigint;
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_Params = BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_ExecuteDeleteCommand_ParamsMojoType {
    nodeIds: bigint[];
    source: ActionSource;
}
export type BookmarksPageHandler_ExecuteDeleteCommand_Params = BookmarksPageHandler_ExecuteDeleteCommand_ParamsMojoType;
export declare interface BookmarksPageHandler_GetIncognitoAvailableCount_ParamsMojoType {
    sidePanelIds: string[];
}
export type BookmarksPageHandler_GetIncognitoAvailableCount_Params = BookmarksPageHandler_GetIncognitoAvailableCount_ParamsMojoType;
export declare interface BookmarksPageHandler_GetIncognitoAvailableCount_ResponseParamsMojoType {
    incognitoCount: number;
}
export type BookmarksPageHandler_GetIncognitoAvailableCount_ResponseParams = BookmarksPageHandler_GetIncognitoAvailableCount_ResponseParamsMojoType;
export declare interface BookmarksPageHandler_OpenBookmark_ParamsMojoType {
    nodeId: bigint;
    parentFolderDepth: number;
    source: ActionSource;
    clickModifiers: ui_mojom_ClickModifiers;
}
export type BookmarksPageHandler_OpenBookmark_Params = BookmarksPageHandler_OpenBookmark_ParamsMojoType;
export declare interface BookmarksPageHandler_Undo_ParamsMojoType {
}
export type BookmarksPageHandler_Undo_Params = BookmarksPageHandler_Undo_ParamsMojoType;
export declare interface BookmarksPageHandler_RenameBookmark_ParamsMojoType {
    nodeId: bigint;
    newTitle: string;
}
export type BookmarksPageHandler_RenameBookmark_Params = BookmarksPageHandler_RenameBookmark_ParamsMojoType;
export declare interface BookmarksPageHandler_RemoveBookmarks_ParamsMojoType {
    nodeIds: bigint[];
}
export type BookmarksPageHandler_RemoveBookmarks_Params = BookmarksPageHandler_RemoveBookmarks_ParamsMojoType;
export declare interface BookmarksPageHandler_RemoveBookmarks_ResponseParamsMojoType {
}
export type BookmarksPageHandler_RemoveBookmarks_ResponseParams = BookmarksPageHandler_RemoveBookmarks_ResponseParamsMojoType;
export declare interface BookmarksPageHandler_SetSortOrder_ParamsMojoType {
    sortOrder: SortOrder;
}
export type BookmarksPageHandler_SetSortOrder_Params = BookmarksPageHandler_SetSortOrder_ParamsMojoType;
export declare interface BookmarksPageHandler_SetViewType_ParamsMojoType {
    viewType: ViewType;
}
export type BookmarksPageHandler_SetViewType_Params = BookmarksPageHandler_SetViewType_ParamsMojoType;
export declare interface BookmarksPageHandler_ShowContextMenu_ParamsMojoType {
    id: string;
    point: gfx_mojom_Point;
    source: ActionSource;
}
export type BookmarksPageHandler_ShowContextMenu_Params = BookmarksPageHandler_ShowContextMenu_ParamsMojoType;
export declare interface BookmarksPageHandler_ShowUI_ParamsMojoType {
}
export type BookmarksPageHandler_ShowUI_Params = BookmarksPageHandler_ShowUI_ParamsMojoType;
export declare interface BookmarksPageHandler_GetAllBookmarks_ParamsMojoType {
}
export type BookmarksPageHandler_GetAllBookmarks_Params = BookmarksPageHandler_GetAllBookmarks_ParamsMojoType;
export declare interface BookmarksPageHandler_GetAllBookmarks_ResponseParamsMojoType {
    nodes: BookmarksTreeNode[];
}
export type BookmarksPageHandler_GetAllBookmarks_ResponseParams = BookmarksPageHandler_GetAllBookmarks_ResponseParamsMojoType;
export declare interface BookmarksPage_OnBookmarkNodeAdded_ParamsMojoType {
    node: BookmarksTreeNode;
}
export type BookmarksPage_OnBookmarkNodeAdded_Params = BookmarksPage_OnBookmarkNodeAdded_ParamsMojoType;
export declare interface BookmarksPage_OnBookmarkNodesRemoved_ParamsMojoType {
    nodeIds: string[];
}
export type BookmarksPage_OnBookmarkNodesRemoved_Params = BookmarksPage_OnBookmarkNodesRemoved_ParamsMojoType;
export declare interface BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsMojoType {
    folderId: string;
    childrenOrderedIds: string[];
}
export type BookmarksPage_OnBookmarkParentFolderChildrenReordered_Params = BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsMojoType;
export declare interface BookmarksPage_OnBookmarkNodeMoved_ParamsMojoType {
    oldParentIndex: string;
    oldNodeIndex: number;
    newNodeIndex: number;
    newParentIndex: string;
}
export type BookmarksPage_OnBookmarkNodeMoved_Params = BookmarksPage_OnBookmarkNodeMoved_ParamsMojoType;
export declare interface BookmarksPage_OnBookmarkNodeChanged_ParamsMojoType {
    id: string;
    newTitle: string;
    newUrl: string;
}
export type BookmarksPage_OnBookmarkNodeChanged_Params = BookmarksPage_OnBookmarkNodeChanged_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<BookmarksPageHandlerInterface, BookmarksPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<BookmarksPageHandlerInterface, BookmarksPageRemote, BookmarksPageHandlerPendingReceiver, BookmarksPagePendingReceiver, BookmarksPageCallbackRouter, BookmarksPageHandlerRemote>;
