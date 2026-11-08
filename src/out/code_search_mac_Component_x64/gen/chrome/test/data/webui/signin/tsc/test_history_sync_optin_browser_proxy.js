// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter } from 'chrome://history-sync-optin/history_sync_optin.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestHistorySyncOptInHandler extends TestBrowserProxy {
    callbackRouter;
    constructor() {
        super([
            'accept',
            'reject',
            'requestAccountInfo',
            'updateDialogHeight',
        ]);
        this.callbackRouter = new PageCallbackRouter();
    }
    accept() {
        this.methodCalled('accept');
    }
    reject() {
        this.methodCalled('reject');
    }
    requestAccountInfo() {
        this.methodCalled('requestAccountInfo');
    }
    updateDialogHeight(height) {
        this.methodCalled('updateDialogHeight', height);
    }
}
export class TestHistorySyncOptInBrowserProxy extends TestBrowserProxy {
    callbackRouter;
    page;
    handler;
    constructor() {
        super();
        this.callbackRouter = new PageCallbackRouter();
        this.page =
            this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.handler = new TestHistorySyncOptInHandler();
    }
}
