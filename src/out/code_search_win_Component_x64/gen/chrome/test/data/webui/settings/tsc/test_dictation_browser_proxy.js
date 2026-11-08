// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestDictationBrowserProxy extends TestBrowserProxy {
    setDictationShortcutResult_ = true;
    dictationShortcut_ = '';
    constructor() {
        super([
            'getDictationShortcut',
            'setDictationShortcut',
        ]);
    }
    getDictationShortcut() {
        this.methodCalled('getDictationShortcut');
        return Promise.resolve(this.dictationShortcut_);
    }
    setDictationShortcut(shortcut) {
        this.methodCalled('setDictationShortcut', shortcut);
        if (this.setDictationShortcutResult_) {
            this.dictationShortcut_ = shortcut;
        }
        return Promise.resolve(this.setDictationShortcutResult_);
    }
    setDictationShortcutResult(result) {
        this.setDictationShortcutResult_ = result;
    }
    setDictationShortcutValue(shortcut) {
        this.dictationShortcut_ = shortcut;
    }
}
