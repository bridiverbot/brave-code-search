// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * Default implementation of DictationBrowserProxy.
 */
export class DictationBrowserProxyImpl {
    getDictationShortcut() {
        return sendWithPromise('getDictationShortcut');
    }
    setDictationShortcut(shortcut) {
        return sendWithPromise('setDictationShortcut', shortcut);
    }
    static getInstance() {
        return instance || (instance = new DictationBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
