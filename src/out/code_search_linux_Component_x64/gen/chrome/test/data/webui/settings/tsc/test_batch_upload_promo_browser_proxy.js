// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter } from 'chrome://settings/lazy_load.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestBatchUploadPromoHandler extends TestBrowserProxy {
    // Settable fake data.
    batchUploadPromoLocalDataCount_ = 0;
    constructor() {
        super([
            'getBatchUploadPromoLocalDataCount',
            'onBatchUploadPromoClicked',
        ]);
    }
    setBatchUploadPromoLocalDataCount(localDataCount) {
        this.batchUploadPromoLocalDataCount_ = localDataCount;
    }
    getBatchUploadPromoLocalDataCount() {
        return Promise.resolve({ localDataCount: this.batchUploadPromoLocalDataCount_ });
    }
    onBatchUploadPromoClicked() {
        this.methodCalled('onBatchUploadPromoClicked');
    }
}
export class TestBatchUploadPromoProxy {
    callbackRouter;
    page;
    handler;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.page = this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.handler = new TestBatchUploadPromoHandler();
    }
}
