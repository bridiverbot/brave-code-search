// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class NotificationCardsProxyImpl {
    getAvailableNotificationCard() {
        return sendWithPromise('getAvailableNotificationCard');
    }
    recordNotificationDismissed(id) {
        chrome.send('recordNotificationDismissed', [id]);
    }
    signInFromNotificationCard() {
        chrome.send('signInFromNotificationCard');
    }
    static getInstance() {
        return instance || (instance = new NotificationCardsProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
