// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class BrowserSwitchProxyImpl {
    launchAlternativeBrowserAndCloseTab(url) {
        return sendWithPromise('launchAlternativeBrowserAndCloseTab', url);
    }
    gotoNewTabPage() {
        chrome.send('gotoNewTabPage');
    }
    static getInstance() {
        return instance || (instance = new BrowserSwitchProxyImpl());
    }
}
let instance = null;
