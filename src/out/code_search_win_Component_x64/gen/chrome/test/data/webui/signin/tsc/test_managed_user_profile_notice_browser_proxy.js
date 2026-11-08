// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { FakeMediaQueryList } from 'chrome://webui-test/fake_media_query_list.js';
export class TestManagedUserProfileNoticeBrowserProxy extends TestBrowserProxy {
    managedUserProfileInfo_;
    mediaQueryList_ = new FakeMediaQueryList('dummy');
    constructor(info) {
        super([
            'initialized',
            'initializedWithSize',
            'proceed',
            'cancel',
            'learnMoreClicked',
        ]);
        this.managedUserProfileInfo_ = info;
    }
    setManagedUserProfileInfo(info) {
        this.managedUserProfileInfo_ = info;
    }
    initialized() {
        this.methodCalled('initialized');
        return Promise.resolve(this.managedUserProfileInfo_);
    }
    initializedWithSize(height) {
        this.methodCalled('initializedWithSize', height);
    }
    proceed() {
        this.methodCalled('proceed');
    }
    cancel() {
        this.methodCalled('cancel');
    }
    matchMedia(_query) {
        return this.mediaQueryList_;
    }
    setMatchMediaMatches(matches) {
        this.mediaQueryList_.matches = matches;
    }
    learnMoreClicked() {
        this.methodCalled('learnMoreClicked');
    }
}
