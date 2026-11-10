// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { UpdateStatus } from 'chrome://settings/settings.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestAboutPageBrowserProxy extends TestBrowserProxy {
    updateStatus_ = UpdateStatus.UPDATED;
    constructor() {
        super([
            'pageReady', 'refreshUpdateStatus', 'openHelpPage', 'openFeedbackDialog',
            // 
        ]);
    }
    setUpdateStatus(updateStatus) {
        this.updateStatus_ = updateStatus;
    }
    pageReady() {
        this.methodCalled('pageReady');
    }
    refreshUpdateStatus() {
        webUIListenerCallback('update-status-changed', {
            progress: 1,
            status: this.updateStatus_,
        });
        this.methodCalled('refreshUpdateStatus');
    }
    openFeedbackDialog() {
        this.methodCalled('openFeedbackDialog');
    }
    openHelpPage() {
        this.methodCalled('openHelpPage');
    }
}
