// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
// LogLevel values must match the strings provided by the backend.
// LINT.IfChange
export var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "Debug";
    LogLevel["EVENT"] = "Event";
    LogLevel["USER"] = "User";
    LogLevel["ERROR"] = "Error";
})(LogLevel || (LogLevel = {}));
export class BrowserProxyImpl {
    getLog() {
        return sendWithPromise('getLog');
    }
    clearLog() {
        chrome.send('clearLog');
    }
    static getInstance() {
        return instance || (instance = new BrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
// The singleton instance_ is replaced with a test version of this wrapper
// during testing.
let instance = null;
