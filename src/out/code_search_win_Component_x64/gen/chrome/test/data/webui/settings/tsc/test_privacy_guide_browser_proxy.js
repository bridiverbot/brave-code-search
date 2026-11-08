// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPrivacyGuideBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'getPromoImpressionCount',
            'incrementPromoImpressionCount',
        ]);
    }
    // Test Proxy Functions.
    getPromoImpressionCount() {
        this.methodCalled('getPromoImpressionCount');
        return 0;
    }
    incrementPromoImpressionCount() {
        this.methodCalled('incrementPromoImpressionCount');
    }
}
