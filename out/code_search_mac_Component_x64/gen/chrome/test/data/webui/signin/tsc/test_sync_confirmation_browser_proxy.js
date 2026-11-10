// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestSyncConfirmationBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'confirm',
            'undo',
            'goToSettings',
            'openDeviceSyncSettings',
            'initializedWithSize',
            'requestAccountInfo',
        ]);
    }
    confirm(description, confirmation, screenMode) {
        this.methodCalled('confirm', [description, confirmation, screenMode]);
    }
    undo(screenMode) {
        this.methodCalled('undo', [screenMode]);
    }
    goToSettings(description, confirmation, screenMode) {
        this.methodCalled('goToSettings', [description, confirmation, screenMode]);
    }
    openDeviceSyncSettings() {
        this.methodCalled('openDeviceSyncSettings');
    }
    initializedWithSize(height) {
        this.methodCalled('initializedWithSize', height);
    }
    requestAccountInfo() {
        this.methodCalled('requestAccountInfo');
    }
}
