// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BookmarkPromoType, IncognitoAvailability } from 'chrome://bookmarks/bookmarks.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * Test version of the bookmarks browser proxy.
 */
export class TestBookmarksBrowserProxy extends TestBrowserProxy {
    canUploadBookmark_ = false;
    constructor() {
        super([
            'getIncognitoAvailability',
            'getCanEditBookmarks',
            'getCanUploadBookmarkToAccountStorage',
            'recordInHistogram',
            'onSingleBookmarkUploadClicked',
            'getPromoData',
            'onPromoShown',
            'onPromoClicked',
            'onPromoDismissed',
        ]);
    }
    setCanUploadAsAccountBookmark(canUpload) {
        this.canUploadBookmark_ = canUpload;
    }
    getIncognitoAvailability() {
        this.methodCalled('getIncognitoAvailability');
        return Promise.resolve(IncognitoAvailability.DISABLED);
    }
    getCanEditBookmarks() {
        this.methodCalled('getCanEditBookmarks');
        return Promise.resolve(false);
    }
    getCanUploadBookmarkToAccountStorage(bookmarkId) {
        this.methodCalled('getCanUploadBookmarkToAccountStorage', [bookmarkId]);
        return Promise.resolve(this.canUploadBookmark_);
    }
    recordInHistogram(histogram, bucket, maxBucket) {
        this.methodCalled('recordInHistogram', [histogram, bucket, maxBucket]);
    }
    onSingleBookmarkUploadClicked(bookmarkId) {
        this.methodCalled('onSingleBookmarkUploadClicked', [bookmarkId]);
    }
    getPromoData() {
        this.methodCalled('getPromoData');
        return Promise.resolve({
            promoType: BookmarkPromoType.NONE,
            canShow: false,
            promoTitle: '',
            promoSubtitle: '',
            actionButtonText: '',
        });
    }
    onPromoShown() {
        this.methodCalled('onPromoShown');
    }
    onPromoClicked() {
        this.methodCalled('onPromoClicked');
    }
    onPromoDismissed() {
        this.methodCalled('onPromoDismissed');
    }
}
