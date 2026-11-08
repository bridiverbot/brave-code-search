// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPowerBookmarksDelegate extends TestBrowserProxy {
    constructor() {
        super([
            'setCurrentUrl',
            'setImageUrl',
            'onBookmarksLoaded',
            'onBookmarkChanged',
            'onBookmarkAdded',
            'onBookmarkMoved',
            'onBookmarkRemoved',
            'getTrackedProductInfos',
            'getAvailableProductInfos',
            'getSelectedBookmarks',
            'getProductImageUrl',
        ]);
    }
    setCurrentUrl(url) {
        this.methodCalled('setCurrentUrl', url);
    }
    setImageUrl(bookmark, url) {
        this.methodCalled('setImageUrl', bookmark, url);
    }
    onBookmarksLoaded() {
        this.methodCalled('onBookmarksLoaded');
    }
    onBookmarkChanged(id) {
        this.methodCalled('onBookmarkChanged', id);
    }
    onBookmarkAdded(bookmark, parent) {
        this.methodCalled('onBookmarkAdded', bookmark, parent);
    }
    onBookmarkMoved(bookmark, oldParent, newParent) {
        this.methodCalled('onBookmarkMoved', bookmark, oldParent, newParent);
    }
    onBookmarkRemoved(bookmark) {
        this.methodCalled('onBookmarkRemoved', bookmark);
    }
    getTrackedProductInfos() {
        this.methodCalled('getTrackedProductInfos');
        return {};
    }
    getAvailableProductInfos() {
        this.methodCalled('getAvailableProductInfos');
        return new Map();
    }
    getSelectedBookmarks() {
        this.methodCalled('getSelectedBookmarks');
        return {};
    }
    getProductImageUrl(bookmark) {
        this.methodCalled('getProductImageUrl', bookmark);
        return '';
    }
}
