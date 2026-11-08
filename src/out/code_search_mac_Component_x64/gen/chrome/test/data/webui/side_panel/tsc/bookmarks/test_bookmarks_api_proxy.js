// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BookmarksPageCallbackRouter } from 'chrome://bookmarks-side-panel.top-chrome/bookmarks.mojom-webui.js';
import { FakeChromeEvent } from 'chrome://webui-test/fake_chrome_event.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestBookmarksApiProxy extends TestBrowserProxy {
    allBookmarks_ = [];
    pageCallbackRouter;
    callbackRouterRemote;
    callbackRouter;
    constructor() {
        super([
            'getActiveUrl',
            'getIncognitoAvailableCount',
            'isActiveTabInSplit',
            'bookmarkCurrentTabInFolder',
            'openBookmark',
            'contextMenuOpenBookmarkInNewTab',
            'contextMenuOpenBookmarkInNewWindow',
            'contextMenuOpenBookmarkInOffTheRecordWindow',
            'contextMenuOpenBookmarkInNewTabGroup',
            'contextMenuOpenBookmarkInSplitView',
            'contextMenuEdit',
            'contextMenuMove',
            'contextMenuAddToBookmarksBar',
            'contextMenuRemoveFromBookmarksBar',
            'contextMenuDelete',
            'createFolder',
            'deleteBookmarks',
            'dropBookmarks',
            'renameBookmark',
            'setSortOrder',
            'setViewType',
            'showContextMenu',
            'showUi',
            'undo',
            'getAllBookmarks',
        ]);
        this.callbackRouter = {
            onTabActivated: new FakeChromeEvent(),
            onTabUpdated: new FakeChromeEvent(),
        };
        this.pageCallbackRouter = new BookmarksPageCallbackRouter();
        this.callbackRouterRemote =
            this.pageCallbackRouter.$.bindNewPipeAndPassRemote();
    }
    getActiveUrl() {
        this.methodCalled('getActiveUrl');
        return Promise.resolve('http://www.test.com');
    }
    getIncognitoAvailableCount(ids) {
        this.methodCalled('getIncognitoAvailableCount', ids);
        return Promise.resolve({ incognitoCount: 1 });
    }
    isActiveTabInSplit() {
        this.methodCalled('isActiveTabInSplit');
        return Promise.resolve(false);
    }
    bookmarkCurrentTabInFolder() {
        this.methodCalled('bookmarkCurrentTabInFolder');
    }
    openBookmark(id, depth, clickModifiers, source) {
        this.methodCalled('openBookmark', id, depth, clickModifiers, source);
    }
    contextMenuOpenBookmarkInNewTab(ids, source) {
        this.methodCalled('contextMenuOpenBookmarkInNewTab', ids, source);
    }
    contextMenuOpenBookmarkInNewWindow(ids, source) {
        this.methodCalled('contextMenuOpenBookmarkInNewWindow', ids, source);
    }
    contextMenuOpenBookmarkInOffTheRecordWindow(ids, source) {
        this.methodCalled('contextMenuOpenBookmarkInOffTheRecordWindow', ids, source);
    }
    contextMenuOpenBookmarkInNewTabGroup(ids, source) {
        this.methodCalled('contextMenuOpenBookmarkInNewTabGroup', ids, source);
    }
    contextMenuOpenBookmarkInSplitView(ids, source) {
        this.methodCalled('contextMenuOpenBookmarkInSplitView', ids, source);
    }
    contextMenuEdit(ids, source) {
        this.methodCalled('contextMenuEdit', ids, source);
    }
    contextMenuMove(ids, source) {
        this.methodCalled('contextMenuMove', ids, source);
    }
    contextMenuAddToBookmarksBar(id, source) {
        this.methodCalled('contextMenuAddToBookmarksBar', id, source);
    }
    contextMenuRemoveFromBookmarksBar(id, source) {
        this.methodCalled('contextMenuRemoveFromBookmarksBar', id, source);
    }
    contextMenuDelete(ids, source) {
        this.methodCalled('contextMenuDelete', ids, source);
    }
    copyBookmark(id) {
        this.methodCalled('copyBookmark', id);
        return Promise.resolve();
    }
    createFolder(parentId, title) {
        this.methodCalled('createFolder', parentId, title);
        return Promise.resolve({ newFolderId: '0' });
    }
    cutBookmark(id) {
        this.methodCalled('cutBookmark', id);
    }
    deleteBookmarks(ids) {
        this.methodCalled('deleteBookmarks', ids);
        return Promise.resolve();
    }
    dropBookmarks(parentId) {
        this.methodCalled('dropBookmarks', parentId);
        return Promise.resolve();
    }
    pasteToBookmark(parentId, destinationId) {
        this.methodCalled('pasteToBookmark', parentId, destinationId);
        return Promise.resolve();
    }
    renameBookmark(id, title) {
        this.methodCalled('renameBookmark', id, title);
    }
    setSortOrder(sortOrder) {
        this.methodCalled('setSortOrder', sortOrder);
    }
    setViewType(viewType) {
        this.methodCalled('setViewType', viewType);
    }
    showContextMenu(id, x, y, source) {
        this.methodCalled('showContextMenu', id, x, y, source);
    }
    showUi() {
        this.methodCalled('showUi');
    }
    undo() {
        this.methodCalled('undo');
    }
    setAllBookmarks(allBookmarks) {
        this.allBookmarks_ = allBookmarks;
    }
    getAllBookmarks() {
        this.methodCalled('getAllBookmarks');
        return Promise.resolve({ nodes: this.allBookmarks_ });
    }
}
