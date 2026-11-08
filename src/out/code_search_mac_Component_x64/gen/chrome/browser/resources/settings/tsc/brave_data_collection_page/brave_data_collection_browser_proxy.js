/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class BraveDataCollectionBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new BraveDataCollectionBrowserProxyImpl());
    }
    getP3AEnabled() {
        return sendWithPromise('getP3AEnabled');
    }
    setP3AEnabled(value) {
        chrome.send('setP3AEnabled', [value]);
    }
    getStatsUsagePingEnabled() {
        return sendWithPromise('getStatsUsagePingEnabled');
    }
    setStatsUsagePingEnabled(value) {
        chrome.send('setStatsUsagePingEnabled', [value]);
    }
    setMetricsReportingEnabled(enabled) {
        chrome.send('setMetricsReportingEnabled', [enabled]);
    }
    getMetricsReporting() {
        return sendWithPromise('getMetricsReporting');
    }
}
let instance = null;
