// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * Test implementation
 */
export class TestNotificationCardsProxy extends TestBrowserProxy {
    card;
    constructor() {
        super([
            'getAvailableNotificationCard',
            'recordNotificationDismissed',
            'signInFromNotificationCard',
        ]);
        this.card = null;
    }
    getAvailableNotificationCard() {
        this.methodCalled('getAvailableNotificationCard');
        return Promise.resolve(this.card);
    }
    recordNotificationDismissed(id) {
        this.methodCalled('recordNotificationDismissed', id);
    }
    signInFromNotificationCard() {
        this.methodCalled('signInFromNotificationCard');
    }
}
