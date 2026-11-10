// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class OmniboxEverywhereBrowserProxyImpl {
    getOmniboxEverywhereShortcut() {
        return sendWithPromise('getOmniboxEverywhereShortcut');
    }
    setOmniboxEverywhereShortcut(shortcut) {
        return sendWithPromise('setOmniboxEverywhereShortcut', shortcut);
    }
    setOmniboxEverywhereShortcutSuspensionState(shouldSuspend) {
        chrome.send('setOmniboxEverywhereShortcutSuspensionState', [shouldSuspend]);
    }
    static getInstance() {
        return instance || (instance = new OmniboxEverywhereBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
