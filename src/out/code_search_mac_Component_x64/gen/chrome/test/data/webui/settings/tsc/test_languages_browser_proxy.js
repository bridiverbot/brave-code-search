// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { FakeLanguageSettingsPrivate } from './fake_language_settings_private.js';
// clang-format on
export class TestLanguagesBrowserProxy extends TestBrowserProxy {
    languageSettingsPrivate_ = new FakeLanguageSettingsPrivate();
    // 
    getLanguageSettingsPrivate() {
        return this.languageSettingsPrivate_;
    }
    setLanguageSettingsPrivate(languageSettingsPrivate) {
        this.languageSettingsPrivate_ = languageSettingsPrivate;
    }
}
