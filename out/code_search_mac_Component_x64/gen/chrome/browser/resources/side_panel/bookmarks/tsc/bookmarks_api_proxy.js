// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BookmarksPageCallbackRouter, BookmarksPageHandlerFactory, BookmarksPageHandlerRemote } from './bookmarks.mojom-webui.js';
let instance = null;
export class BookmarksApiProxyImpl {
    callbackRouter;
    pageCallbackRouter;
    handler;
    constructor() {
        this.callbackRouter = {
            onTabActivated: chrome.tabs.onActivated,
            onTabUpdated: chrome.tabs.onUpdated,
        };
        this.pageCallbackRouter = new BookmarksPageCallbackRouter();
        this.handler = new BookmarksPageHandlerRemote();
        const factory = BookmarksPageHandlerFactory.getRemote();
        factory.createBookmarksPageHandler(this.pageCallbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    bookmarkCurrentTabInFolder(folderId) {
        this.handler.bookmarkCurrentTabInFolder(folderId);
    }
    contextMenuOpenBookmarkInNewTab(ids, source) {
        this.handler.executeOpenInNewTabCommand(ids, source);
    }
    contextMenuOpenBookmarkInNewWindow(ids, source) {
        this.handler.executeOpenInNewWindowCommand(ids, source);
    }
    contextMenuOpenBookmarkInOffTheRecordWindow(ids, source) {
        this.handler.executeOpenInOffTheRecordWindowCommand(ids, source);
    }
    contextMenuOpenBookmarkInNewTabGroup(ids, source) {
        this.handler.executeOpenInNewTabGroupCommand(ids, source);
    }
    contextMenuOpenBookmarkInSplitView(ids, source) {
        this.handler.executeOpenInSplitViewCommand(ids.map(id => BigInt(id)), source);
    }
    contextMenuEdit(ids, source) {
        this.handler.executeEditCommand(ids.map(id => BigInt(id)), source);
    }
    contextMenuMove(ids, source) {
        this.handler.executeMoveCommand(ids.map(id => BigInt(id)), source);
    }
    contextMenuAddToBookmarksBar(id, source) {
        this.handler.executeAddToBookmarksBarCommand(BigInt(id), source);
    }
    contextMenuRemoveFromBookmarksBar(id, source) {
        this.handler.executeRemoveFromBookmarksBarCommand(BigInt(id), source);
    }
    contextMenuDelete(ids, source) {
        this.handler.executeDeleteCommand(ids.map(id => BigInt(id)), source);
    }
    createFolder(parentId, title) {
        return this.handler.createFolder(parentId, title);
    }
    deleteBookmarks(ids) {
        return this.handler.removeBookmarks(ids.map(id => BigInt(id)));
    }
    dropBookmarks(parentId) {
        return this.handler.dropBookmarks(parentId);
    }
    getActiveUrl() {
        return chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
            if (tabs[0]) {
                return tabs[0].url;
            }
            return undefined;
        });
    }
    getIncognitoAvailableCount(ids) {
        return this.handler.getIncognitoAvailableCount(ids);
    }
    // TODO(crbug.com/406794014): Use the extensions API for this once
    // implemented.
    isActiveTabInSplit() {
        return chrome.bookmarkManagerPrivate.isActiveTabInSplit();
    }
    openBookmark(id, depth, clickModifiers, source) {
        this.handler.openBookmark(BigInt(id), depth, clickModifiers, source);
    }
    renameBookmark(id, title) {
        this.handler.renameBookmark(BigInt(id), title);
    }
    setSortOrder(sortOrder) {
        this.handler.setSortOrder(sortOrder);
    }
    setViewType(viewType) {
        this.handler.setViewType(viewType);
    }
    showContextMenu(id, x, y, source) {
        this.handler.showContextMenu(id, { x, y }, source);
    }
    showUi() {
        this.handler.showUI();
    }
    undo() {
        this.handler.undo();
    }
    // Asynchronously gets the list of non empty permanent bookmark nodes.
    getAllBookmarks() {
        return this.handler.getAllBookmarks();
    }
    static getInstance() {
        return instance || (instance = new BookmarksApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
