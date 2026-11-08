// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Handles interprocess communication for the privacy page. */
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class PrivacyPageBrowserProxyImpl {
    // 
    getMetricsReporting() {
        return sendWithPromise('getMetricsReporting');
    }
    setMetricsReportingEnabled(enabled) {
        chrome.send('setMetricsReportingEnabled', [enabled]);
    }
    // 
    static getInstance() {
        return instance || (instance = new PrivacyPageBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
