// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestStartupUrlsPageBrowserProxy extends TestBrowserProxy {
    urlIsValid_ = true;
    constructor() {
        super([
            'addStartupPage',
            'editStartupPage',
            'loadStartupPages',
            'removeStartupPage',
            'useCurrentPages',
            'validateStartupPage',
        ]);
    }
    setUrlValidity(isValid) {
        this.urlIsValid_ = isValid;
    }
    addStartupPage(url) {
        this.methodCalled('addStartupPage', url);
        return Promise.resolve(this.urlIsValid_);
    }
    editStartupPage(modelIndex, url) {
        this.methodCalled('editStartupPage', [modelIndex, url]);
        return Promise.resolve(this.urlIsValid_);
    }
    loadStartupPages() {
        this.methodCalled('loadStartupPages');
    }
    removeStartupPage(modelIndex) {
        this.methodCalled('removeStartupPage', modelIndex);
    }
    useCurrentPages() {
        this.methodCalled('useCurrentPages');
    }
    validateStartupPage(url) {
        this.methodCalled('validateStartupPage', url);
        return Promise.resolve(this.urlIsValid_);
    }
}
