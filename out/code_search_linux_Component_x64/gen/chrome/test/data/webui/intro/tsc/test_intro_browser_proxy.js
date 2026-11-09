// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { FakeMediaQueryList } from 'chrome://webui-test/fake_media_query_list.js';
export class TestIntroBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'continueWithAccount',
            'continueWithoutAccount',
            'initializeMainView',
        ]);
    }
    mediaQueryList_ = new FakeMediaQueryList('dummy');
    continueWithAccount() {
        this.methodCalled('continueWithAccount');
    }
    continueWithoutAccount() {
        this.methodCalled('continueWithoutAccount');
    }
    initializeMainView() {
        this.methodCalled('initializeMainView');
    }
    matchMedia(_query) {
        return this.mediaQueryList_;
    }
    setMatchMediaMatches(matches) {
        this.mediaQueryList_.matches = matches;
    }
}
