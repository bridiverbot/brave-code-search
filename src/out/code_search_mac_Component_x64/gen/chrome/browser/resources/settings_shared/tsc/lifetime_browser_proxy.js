// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class LifetimeBrowserProxyImpl {
    restart() {
        chrome.send('restart');
    }
    relaunch() {
        chrome.send('relaunch');
    }
    // 
    shouldShowRelaunchConfirmationDialog(alwaysShowDialog) {
        return sendWithPromise('shouldShowRelaunchConfirmationDialog', alwaysShowDialog);
    }
    getRelaunchConfirmationDialogDescription(isVersionUpdate) {
        return sendWithPromise('getRelaunchConfirmationDialogDescription', isVersionUpdate);
    }
    // 
    // 
    static getInstance() {
        return instance || (instance = new LifetimeBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
