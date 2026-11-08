// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestReadingListApiProxy extends TestBrowserProxy {
    entries_;
    windows_;
    constructor() {
        super([
            'getReadLaterEntries',
            'openURL',
            'updateReadStatus',
            'addCurrentTab',
            'markCurrentTabAsRead',
            'removeEntry',
            'showContextMenuForURL',
            'updateCurrentPageActionButtonState',
            'showUI',
            'closeUI',
            'getWindowData',
        ]);
        this.entries_ = {
            unreadEntries: [],
            readEntries: [],
        };
        this.windows_ = [
            { active: true, height: 1000 },
        ];
    }
    getReadLaterEntries() {
        this.methodCalled('getReadLaterEntries');
        return Promise.resolve({ entries: this.entries_ });
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    openURL(url, clickModifiers) {
        this.methodCalled('openURL', [url, clickModifiers]);
    }
    updateReadStatus(url, read) {
        this.methodCalled('updateReadStatus', [url, read]);
    }
    addCurrentTab() {
        this.methodCalled('addCurrentTab');
    }
    markCurrentTabAsRead() {
        this.methodCalled('markCurrentTabAsRead');
    }
    removeEntry(url) {
        this.methodCalled('removeEntry', url);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    showContextMenuForURL(url, locationX, locationY) {
        this.methodCalled('showContextMenuForURL', [url, locationX, locationY]);
    }
    updateCurrentPageActionButtonState() {
        this.methodCalled('updateCurrentPageActionButtonState');
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    showUI() {
        this.methodCalled('showUI');
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    closeUI() {
        this.methodCalled('closeUI');
    }
    getWindowData() {
        this.methodCalled('getWindowData');
        return Promise.resolve({ windows: this.windows_ });
    }
    setEntries(entries) {
        this.entries_ = entries;
    }
}
