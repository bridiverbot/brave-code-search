// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter } from 'chrome://tab-search.top-chrome/tab_search.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestTabSearchApiProxy extends TestBrowserProxy {
    callbackRouter;
    callbackRouterRemote;
    profileData_;
    isSplit_ = false;
    constructor() {
        super([
            'closeTab',
            'closeTabs',
            'closeWebUiTab',
            'getProfileData',
            'getIsSplit',
            'openRecentlyClosedEntry',
            'replaceActiveSplitTab',
            'switchToTab',
            'saveRecentlyClosedExpandedPref',
            'maybeShowUi',
            'redirectToNtp',
        ]);
        this.callbackRouter = new PageCallbackRouter();
        this.callbackRouterRemote =
            this.callbackRouter.$.bindNewPipeAndPassRemote();
    }
    closeTab(tabId) {
        this.methodCalled('closeTab', [tabId]);
    }
    closeTabs(tabIds) {
        this.methodCalled('closeTabs', [tabIds]);
    }
    closeWebUiTab() {
        this.methodCalled('closeWebUiTab', []);
    }
    getProfileData() {
        this.methodCalled('getProfileData');
        return Promise.resolve({ profileData: this.profileData_ });
    }
    getIsSplit() {
        this.methodCalled('getIsSplit');
        return Promise.resolve({ isSplit: this.isSplit_ });
    }
    openRecentlyClosedEntry(id, withSearch, isTab) {
        this.methodCalled('openRecentlyClosedEntry', [id, withSearch, isTab]);
    }
    replaceActiveSplitTab(replacementTabId) {
        this.methodCalled('replaceActiveSplitTab', [replacementTabId]);
    }
    switchToTab(info) {
        this.methodCalled('switchToTab', [info]);
    }
    saveRecentlyClosedExpandedPref(expanded) {
        this.methodCalled('saveRecentlyClosedExpandedPref', [expanded]);
    }
    maybeShowUi() {
        this.methodCalled('maybeShowUi');
    }
    redirectToNtp() {
        this.methodCalled('redirectToNtp');
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    getCallbackRouterRemote() {
        return this.callbackRouterRemote;
    }
    setProfileData(profileData) {
        this.profileData_ = profileData;
    }
    setIsSplit(isSplit) {
        this.isSplit_ = isSplit;
    }
}
