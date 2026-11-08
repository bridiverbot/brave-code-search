import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
import type { ClickModifiers } from 'chrome://resources/mojo/ui/base/mojom/window_open_disposition.mojom-webui.js';
import type { ActionSource, SortOrder, ViewType } from './bookmarks.mojom-webui.js';
import { BookmarksPageCallbackRouter, BookmarksPageHandlerRemote } from './bookmarks.mojom-webui.js';
import type { BookmarksTreeNode } from './bookmarks.mojom-webui.js';
export interface BookmarksApiProxy {
    callbackRouter: {
        [key: string]: ChromeEvent<Function>;
    };
    pageCallbackRouter: BookmarksPageCallbackRouter;
    showUi(): void;
    getAllBookmarks(): Promise<{
        nodes: BookmarksTreeNode[];
    }>;
    getActiveUrl(): Promise<string | undefined>;
    isActiveTabInSplit(): Promise<boolean>;
    setSortOrder(sortOrder: SortOrder): void;
    setViewType(viewType: ViewType): void;
    bookmarkCurrentTabInFolder(folderId: string): void;
    createFolder(parentId: string, title: string): Promise<{
        newFolderId: string;
    }>;
    deleteBookmarks(ids: string[]): Promise<void>;
    dropBookmarks(parentId: string): Promise<void>;
    getIncognitoAvailableCount(ids: string[]): Promise<{
        incognitoCount: number;
    }>;
    undo(): void;
    renameBookmark(id: string, title: string): void;
    openBookmark(id: string, depth: number, clickModifiers: ClickModifiers, source: ActionSource): void;
    showContextMenu(id: string, x: number, y: number, source: ActionSource): void;
    contextMenuOpenBookmarkInNewTab(ids: string[], source: ActionSource): void;
    contextMenuOpenBookmarkInNewWindow(ids: string[], source: ActionSource): void;
    contextMenuOpenBookmarkInOffTheRecordWindow(ids: string[], source: ActionSource): void;
    contextMenuOpenBookmarkInNewTabGroup(ids: string[], source: ActionSource): void;
    contextMenuOpenBookmarkInSplitView(ids: string[], source: ActionSource): void;
    contextMenuEdit(ids: string[], source: ActionSource): void;
    contextMenuMove(ids: string[], source: ActionSource): void;
    contextMenuAddToBookmarksBar(id: string, source: ActionSource): void;
    contextMenuRemoveFromBookmarksBar(id: string, source: ActionSource): void;
    contextMenuDelete(ids: string[], source: ActionSource): void;
}
export declare class BookmarksApiProxyImpl implements BookmarksApiProxy {
    callbackRouter: {
        [key: string]: ChromeEvent<Function>;
    };
    pageCallbackRouter: BookmarksPageCallbackRouter;
    handler: BookmarksPageHandlerRemote;
    constructor();
    bookmarkCurrentTabInFolder(folderId: string): void;
    contextMenuOpenBookmarkInNewTab(ids: string[], source: ActionSource): void;
    contextMenuOpenBookmarkInNewWindow(ids: string[], source: ActionSource): void;
    contextMenuOpenBookmarkInOffTheRecordWindow(ids: string[], source: ActionSource): void;
    contextMenuOpenBookmarkInNewTabGroup(ids: string[], source: ActionSource): void;
    contextMenuOpenBookmarkInSplitView(ids: string[], source: ActionSource): void;
    contextMenuEdit(ids: string[], source: ActionSource): void;
    contextMenuMove(ids: string[], source: ActionSource): void;
    contextMenuAddToBookmarksBar(id: string, source: ActionSource): void;
    contextMenuRemoveFromBookmarksBar(id: string, source: ActionSource): void;
    contextMenuDelete(ids: string[], source: ActionSource): void;
    createFolder(parentId: string, title: string): Promise<{
        newFolderId: string;
    }>;
    deleteBookmarks(ids: string[]): Promise<void>;
    dropBookmarks(parentId: string): Promise<void>;
    getActiveUrl(): Promise<string | undefined>;
    getIncognitoAvailableCount(ids: string[]): Promise<{
        incognitoCount: number;
    }>;
    isActiveTabInSplit(): Promise<boolean>;
    openBookmark(id: string, depth: number, clickModifiers: ClickModifiers, source: ActionSource): void;
    renameBookmark(id: string, title: string): void;
    setSortOrder(sortOrder: SortOrder): void;
    setViewType(viewType: ViewType): void;
    showContextMenu(id: string, x: number, y: number, source: ActionSource): void;
    showUi(): void;
    undo(): void;
    getAllBookmarks(): Promise<{
        nodes: BookmarksTreeNode[];
    }>;
    static getInstance(): BookmarksApiProxy;
    static setInstance(obj: BookmarksApiProxy): void;
}
