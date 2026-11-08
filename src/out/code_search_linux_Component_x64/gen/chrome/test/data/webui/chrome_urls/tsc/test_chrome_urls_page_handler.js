// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * Test version of the PageHandler used to verify calls to the browser from
 * WebUI.
 */
export class TestPageHandler extends TestBrowserProxy {
    testData_ = {
        webuiUrls: [],
        commandUrls: [],
        internalDebuggingUisEnabled: false,
    };
    constructor() {
        super(['getUrls', 'setDebugPagesEnabled']);
    }
    getUrls() {
        this.methodCalled('getUrls');
        return Promise.resolve({ urlsData: structuredClone(this.testData_) });
    }
    setDebugPagesEnabled(enabled) {
        this.methodCalled('setDebugPagesEnabled', enabled);
        return Promise.resolve();
    }
    setTestData(data) {
        this.testData_ = structuredClone(data);
    }
}
