import type { BookmarkProductInfo } from '//resources/cr_components/commerce/shared.mojom-webui.js';
import type { BookmarksTreeNode } from './bookmarks.mojom-webui.js';
export interface Label {
    label: string;
    icon: string;
    active: boolean;
}
export interface PowerBookmarksDelegate {
    setCurrentUrl(url: string | undefined): void;
    setImageUrl(bookmark: BookmarksTreeNode, url: string): void;
    onBookmarksLoaded(): void;
    onBookmarkChanged(id: string): void;
    onBookmarkAdded(bookmark: BookmarksTreeNode, parent: BookmarksTreeNode): void;
    onBookmarkMoved(bookmark: BookmarksTreeNode, oldParent: BookmarksTreeNode, newParent: BookmarksTreeNode): void;
    onBookmarkRemoved(bookmark: BookmarksTreeNode): void;
    getTrackedProductInfos(): {
        [key: string]: BookmarkProductInfo;
    };
    getAvailableProductInfos(): Map<string, BookmarkProductInfo>;
    getProductImageUrl(bookmark: BookmarksTreeNode): string;
}
export declare function editingDisabledByPolicy(bookmarks: BookmarksTreeNode[]): boolean;
export declare function getFolderDescendants(folder: BookmarksTreeNode, excludeFolder?: BookmarksTreeNode | undefined): BookmarksTreeNode[];
export declare class PowerBookmarksService {
    private delegate_;
    private bookmarksApi_;
    private listeners_;
    private folders_;
    private bookmarksWithCachedImages_;
    private activeImageServiceRequestCount_;
    private inactiveImageServiceRequests_;
    private maxImageServiceRequests_;
    constructor(delegate: PowerBookmarksDelegate);
    /**
     * Creates listeners for all relevant bookmark and shopping information.
     * Invoke during setup.
     */
    startListening(): void;
    /**
     * Cleans up any listeners created by the startListening method.
     * Invoke during teardown.
     */
    stopListening(): void;
    /**
     * Returns a list of all root bookmark folders.
     */
    getFolders(): import("./bookmarks.mojom-webui.js").BookmarksTreeNodeMojoType[];
    /**
     * Returns a list of all bookmarks defaulted to if no filter criteria are
     * provided.
     */
    getTopLevelBookmarks(): import("./bookmarks.mojom-webui.js").BookmarksTreeNodeMojoType[];
    /**
     * Returns a list of bookmarks and folders filtered by the provided criteria.
     */
    filterBookmarks(activeFolder: BookmarksTreeNode | undefined, activeSortIndex: number, searchQuery: string | undefined, labels: Label[], excludeFolder?: BookmarksTreeNode): BookmarksTreeNode[];
    /**
     * Apply the current active sort type to the given bookmarks list. Returns
     * true if any elements in the list changed position.
     */
    sortBookmarks(bookmarks: BookmarksTreeNode[], activeSortIndex: number): boolean;
    /**
     * Checks bookmarks for any relevant data and updates delegate_ with the
     * results. Used to batch data fetching in any cases where it is particularly
     * expensive.
     */
    refreshDataForBookmarks(bookmarks: BookmarksTreeNode[]): void;
    /**
     * Returns the BookmarkTreeNode with the given id, or undefined if one does
     * not exist.
     */
    findBookmarkWithId(id: string | undefined): BookmarksTreeNode | undefined;
    /**
     * Returns true if the given url is not already present in the given folder.
     * If the folder is undefined, will default to the "Other Bookmarks" folder.
     */
    canAddUrl(url: string | undefined, folder: BookmarksTreeNode | undefined): boolean;
    bookmarkMatchesSearchQueryAndLabels(bookmark: BookmarksTreeNode, labels: Label[], searchQuery: string | undefined): boolean;
    setMaxImageServiceRequestsForTesting(max: number): void;
    getPriceTrackedInfo(bookmark: BookmarksTreeNode): BookmarkProductInfo | undefined;
    getAvailableProductInfo(bookmark: BookmarksTreeNode): BookmarkProductInfo | undefined;
    private applySearchQueryAndLabels_;
    private nodeMatchesContentFilters_;
    private addListener_;
    private onBookmarkNodeChanged_;
    private onBookmarkNodeAdded_;
    private onBookmarkNodeMoved_;
    private onBookmarkNodesRemoved_;
    private onBookmarkParentFolderChildrenReordered_;
    /**
     * Finds the node within all bookmarks and returns the path to the node in
     * the tree.
     */
    findPathToId(id: string): BookmarksTreeNode[];
    /**
     * Assigns an image url for the given bookmark. Also assigns an image url to
     * all children if recurse is true.
     */
    private findBookmarkImageUrls_;
    private findBookmarkImageUrl_;
    static getInstance(): PowerBookmarksService;
    static setInstance(obj: PowerBookmarksService): void;
}
