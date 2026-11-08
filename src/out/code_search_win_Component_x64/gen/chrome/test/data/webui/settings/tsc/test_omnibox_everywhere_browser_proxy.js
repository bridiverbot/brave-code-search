// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestOmniboxEverywhereBrowserProxy extends TestBrowserProxy {
    shortcut_ = 'Alt+Space';
    constructor() {
        super([
            'getOmniboxEverywhereShortcut',
            'setOmniboxEverywhereShortcut',
            'setOmniboxEverywhereShortcutSuspensionState',
        ]);
    }
    setShortcut(shortcut) {
        this.shortcut_ = shortcut;
    }
    getOmniboxEverywhereShortcut() {
        this.methodCalled('getOmniboxEverywhereShortcut');
        return Promise.resolve(this.shortcut_);
    }
    setOmniboxEverywhereShortcut(shortcut) {
        this.methodCalled('setOmniboxEverywhereShortcut', shortcut);
        this.shortcut_ = shortcut;
        return Promise.resolve(true);
    }
    setOmniboxEverywhereShortcutSuspensionState(shouldSuspend) {
        this.methodCalled('setOmniboxEverywhereShortcutSuspensionState', shouldSuspend);
    }
}
