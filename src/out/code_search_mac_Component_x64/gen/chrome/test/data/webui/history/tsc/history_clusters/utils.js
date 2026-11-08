// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy as BaseTestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestMetricsProxy extends BaseTestBrowserProxy {
    constructor() {
        super([
            'recordClusterAction',
            'recordRelatedSearchAction',
            'recordToggledVisibility',
            'recordVisitAction',
        ]);
    }
    recordClusterAction(action, index) {
        this.methodCalled('recordClusterAction', [action, index]);
    }
    recordRelatedSearchAction(action, index) {
        this.methodCalled('recordRelatedSearchAction', [action, index]);
    }
    recordToggledVisibility(visible) {
        this.methodCalled('recordToggledVisibility', visible);
    }
    recordVisitAction(action, index, type) {
        this.methodCalled('recordVisitAction', [action, index, type]);
    }
}
