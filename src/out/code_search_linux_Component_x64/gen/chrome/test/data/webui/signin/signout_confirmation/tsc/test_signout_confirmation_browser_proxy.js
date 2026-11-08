// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter } from 'chrome://signout-confirmation/signout_confirmation.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
class TestSignoutConfirmationHandler extends TestBrowserProxy {
    constructor() {
        super([
            'updateViewHeight',
            'accept',
            'cancel',
            'performReauth',
            'close',
        ]);
    }
    updateViewHeight(height) {
        this.methodCalled('updateViewHeight', height);
    }
    accept(uninstallAccountExtensions) {
        this.methodCalled('accept', uninstallAccountExtensions);
    }
    cancel(uninstallAccountExtensions) {
        this.methodCalled('cancel', uninstallAccountExtensions);
    }
    performReauth() {
        this.methodCalled('performReauth');
    }
    close() {
        this.methodCalled('close');
    }
}
export class TestSignoutConfirmationBrowserProxy {
    callbackRouter = new PageCallbackRouter();
    handler = new TestSignoutConfirmationHandler();
}
