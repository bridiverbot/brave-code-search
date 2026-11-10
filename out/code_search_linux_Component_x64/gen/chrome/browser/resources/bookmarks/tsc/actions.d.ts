import type { Action } from 'chrome://resources/js/store.js';
import { IncognitoAvailability } from './constants.js';
import type { BookmarkNode, BookmarksPageState, NodeMap } from './types.js';
/**
 * @fileoverview Module for functions which produce action objects. These are
 * listed in one place to document available actions and their parameters.
 */
export type CreateBookmarkAction = Action & {
    id: string;
    parentId: string;
    parentIndex: number;
    node: BookmarkNode;
};
export declare function createBookmark(parentId: string, parentIndex: number, node: BookmarkNode): CreateBookmarkAction;
export type EditBookmarkAction = Action & {
    id: string;
    changeInfo: {
        title: string;
        url?: string;
    };
};
export declare function editBookmark(id: string, changeInfo: {
    title: string;
    url?: string;
}): EditBookmarkAction;
export type MoveBookmarkAction = Action & {
    id: string;
    parentId: string;
    index: number;
    oldParentId: string;
    oldIndex: number;
};
export declare function moveBookmark(id: string, parentId: string, index: number, oldParentId: string, oldIndex: number): MoveBookmarkAction;
export type ReorderChildrenAction = Action & {
    id: string;
    children: string[];
};
export declare function reorderChildren(id: string, newChildIds: string[]): ReorderChildrenAction;
export type RemoveBookmarkAction = Action & {
    id: string;
    parentId: string;
    index: number;
    descendants: Set<string>;
};
export declare function removeBookmark(id: string, parentId: string, index: number, nodes: NodeMap): RemoveBookmarkAction;
export type RefreshNodesAction = Action & {
    nodes: NodeMap;
};
export declare function refreshNodes(nodeMap: NodeMap): RefreshNodesAction;
export type SelectFolderAction = Action & {
    id: string;
};
export declare function selectFolder(id: string, nodes?: NodeMap): SelectFolderAction | null;
export type ChangeFolderOpenAction = Action & {
    id: string;
    open: boolean;
};
export declare function changeFolderOpen(id: string, open: boolean): ChangeFolderOpenAction;
export declare function clearSearch(): Action;
export declare function deselectItems(): Action;
export type SelectItemsAction = Action & {
    clear: boolean;
    toggle: boolean;
    anchor: string;
    items: string[];
};
export declare function selectItem(id: string, state: BookmarksPageState, config: {
    clear: boolean;
    range: boolean;
    toggle: boolean;
}): SelectItemsAction;
export declare function selectAll(ids: string[], state: BookmarksPageState, anchor?: string): SelectItemsAction;
export type UpdateAnchorAction = Action & {
    anchor: string;
};
export declare function updateAnchor(id: string): UpdateAnchorAction;
export type StartSearchAction = Action & {
    term: string;
};
export declare function setSearchTerm(term: string): (Action | StartSearchAction);
export type FinishSearchAction = Action & {
    results: string[];
};
export declare function setSearchResults(ids: string[]): FinishSearchAction;
export type SetPrefAction = Action & {
    value: IncognitoAvailability | boolean;
};
export declare function setIncognitoAvailability(availability: IncognitoAvailability): SetPrefAction;
export declare function setCanEditBookmarks(canEdit: boolean): SetPrefAction;
