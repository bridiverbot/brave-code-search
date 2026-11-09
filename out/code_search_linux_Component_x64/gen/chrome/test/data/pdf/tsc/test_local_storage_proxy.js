// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestLocalStorageProxy extends TestBrowserProxy {
    items_ = new Map();
    constructor() {
        super(['getItem', 'setItem']);
    }
    getItem(key) {
        this.methodCalled('getItem', key);
        return this.items_.get(key) ?? null;
    }
    setItem(key, value) {
        this.methodCalled('setItem', key, value);
        this.items_.set(key, value);
    }
}
