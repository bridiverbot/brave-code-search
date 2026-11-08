// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPasskeysBrowserProxy extends TestBrowserProxy {
    passkeysPresent = false;
    constructor() {
        super([
            'passkeysHasPasskeys',
            'passkeysManagePasskeys',
        ]);
    }
    hasPasskeys() {
        this.methodCalled('passkeysHasPasskeys');
        return Promise.resolve(this.passkeysPresent);
    }
    managePasskeys() {
        this.methodCalled('passkeysManagePasskeys');
    }
}
