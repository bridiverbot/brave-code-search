// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class FakeForeignSessionPageHandler extends TestBrowserProxy {
    sessions_ = [];
    constructor() {
        super([
            'getForeignSessions',
            'openForeignSessionAllTabs',
            'openForeignSessionTab',
            'deleteForeignSession',
            'setForeignSessionCollapsed',
            'showUi',
        ]);
    }
    setForeignSessions(sessions) {
        this.sessions_ = sessions;
    }
    getForeignSessions() {
        this.methodCalled('getForeignSessions');
        return Promise.resolve({ sessions: structuredClone(this.sessions_) });
    }
    openForeignSessionAllTabs(sessionTag) {
        this.methodCalled('openForeignSessionAllTabs', sessionTag);
    }
    openForeignSessionTab(sessionTag, tabId, modifiers) {
        this.methodCalled('openForeignSessionTab', sessionTag, tabId, modifiers);
    }
    deleteForeignSession(sessionTag) {
        this.methodCalled('deleteForeignSession', sessionTag);
    }
    setForeignSessionCollapsed(sessionTag, collapsed) {
        this.methodCalled('setForeignSessionCollapsed', sessionTag, collapsed);
    }
    showUi() {
        this.methodCalled('showUi');
    }
}
