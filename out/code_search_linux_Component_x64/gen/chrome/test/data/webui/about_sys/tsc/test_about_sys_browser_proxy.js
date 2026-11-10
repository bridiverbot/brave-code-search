// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestAboutSysBrowserProxy extends TestBrowserProxy {
    systemLogs = [];
    constructor() {
        super([
            'requestSystemInfo',
        ]);
    }
    setSystemLogs(logs) {
        this.systemLogs = logs;
    }
    requestSystemInfo() {
        this.methodCalled('requestSystemInfo');
        return Promise.resolve(this.systemLogs);
    }
}
