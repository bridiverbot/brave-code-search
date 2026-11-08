// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "Default Browser" section
 * to interact with the browser.
 */
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class DefaultBrowserBrowserProxyImpl {
    requestDefaultBrowserState() {
        return sendWithPromise('requestDefaultBrowserState');
    }
    requestUserValueStringsFeatureState() {
        return sendWithPromise('requestUserValueStringsFeatureState');
    }
    setAsDefaultBrowser(pin) {
        chrome.send('setAsDefaultBrowser', [pin]);
    }
    static getInstance() {
        return instance || (instance = new DefaultBrowserBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
