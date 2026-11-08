// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestContentSettingsPageHandler extends TestBrowserProxy {
    constructor() {
        super([
            'readContentSettings',
            'contentSettingsPatternToString',
            'stringToContentSettingsPattern',
        ]);
    }
    readContentSettings(_type) {
        this.methodCalled('readContentSettings', _type);
        return Promise.resolve({ contentSettings: [] });
    }
    contentSettingsPatternToString(_pattern) {
        this.methodCalled('contentSettingsPatternToString', _pattern);
        return Promise.resolve({ s: '' });
    }
    stringToContentSettingsPattern(_s) {
        this.methodCalled('stringToContentSettingsPattern', _s);
        return Promise.resolve({ pattern: {} });
    }
}
