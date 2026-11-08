// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestBrowserActuatorInternalsUiHandler extends TestBrowserProxy {
    sessions_ = [];
    exportedJson_ = '';
    constructor() {
        super([
            'getSessionHistory',
            'exportSessionHistory',
        ]);
    }
    setSessions(sessions) {
        this.sessions_ = sessions;
    }
    setExportedJson(json) {
        this.exportedJson_ = json;
    }
    getSessionHistory() {
        this.methodCalled('getSessionHistory');
        return Promise.resolve({ sessions: this.sessions_ });
    }
    exportSessionHistory(sessionIds) {
        this.methodCalled('exportSessionHistory', sessionIds);
        return Promise.resolve({ json: this.exportedJson_ });
    }
}
