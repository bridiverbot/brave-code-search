// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// clang-format off
import type {LanguagesBrowserProxy} from 'chrome://settings/lazy_load.js';
import {TestBrowserProxy} from 'chrome://webui-test/test_browser_proxy.js';

import {FakeLanguageSettingsPrivate} from './fake_language_settings_private.js';

// clang-format on

export class TestLanguagesBrowserProxy extends TestBrowserProxy implements
    LanguagesBrowserProxy {
  private languageSettingsPrivate_: typeof chrome.languageSettingsPrivate =
      new FakeLanguageSettingsPrivate() as unknown as
      typeof chrome.languageSettingsPrivate;

  // 
  constructor() {
    super([
      'getProspectiveUiLanguage',
      'setProspectiveUiLanguage',
    ]);
  }
  // 

  getLanguageSettingsPrivate() {
    return this.languageSettingsPrivate_;
  }

  setLanguageSettingsPrivate(languageSettingsPrivate:
                                 typeof chrome.languageSettingsPrivate) {
    this.languageSettingsPrivate_ = languageSettingsPrivate;
  }

  // 
  getProspectiveUiLanguage() {
    this.methodCalled('getProspectiveUiLanguage');
    return Promise.resolve('en-US');
  }

  setProspectiveUiLanguage(language: string) {
    this.methodCalled('setProspectiveUiLanguage', language);
  }
  // 
}
