// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// clang-format off
import type {LanguageHelper, SettingsSpellCheckPageElement} from 'chrome://settings/lazy_load.js';
import {LanguageHelperImpl, LanguagesBrowserProxyImpl, getLanguageHelperInstance} from 'chrome://settings/lazy_load.js';
import {PrefsBrowserProxy, PrefService} from 'chrome://settings/settings.js';
// 

import {assertFalse, assertTrue} from 'chrome://webui-test/chai_assert.js';
// 

// 
// 

import {getFakeLanguagePrefs} from './fake_language_settings_private.js';
import {TestLanguagesBrowserProxy} from './test_languages_browser_proxy.js';
import {TestPrefsBrowserProxy} from './test_prefs_browser_proxy.js';

// clang-format on

suite('SpellCheck', function() {
  let languageHelper: LanguageHelper;
  let spellcheckPage: SettingsSpellCheckPageElement;
  let browserProxy: TestLanguagesBrowserProxy;
  let prefsBrowserProxy: TestPrefsBrowserProxy;
  let prefService: PrefService;

  setup(async function() {
    document.body.innerHTML = window.trustedTypes!.emptyHTML;
    prefsBrowserProxy = new TestPrefsBrowserProxy(getFakeLanguagePrefs());
    PrefsBrowserProxy.setInstance(prefsBrowserProxy);
    PrefService.resetInstanceForTesting();
    prefService = PrefService.getInstance();
    await prefService.whenInitialized();

    // Set up test browser proxy.
    browserProxy = new TestLanguagesBrowserProxy();
    LanguagesBrowserProxyImpl.setInstance(browserProxy);

    LanguageHelperImpl.resetInstanceForTesting();
    languageHelper = getLanguageHelperInstance();
    await languageHelper.whenReady();

    spellcheckPage = document.createElement('settings-spell-check-page');
    document.body.appendChild(spellcheckPage);
  });

  suite('AllBuilds', function() {
    // 
    test('structure', function() {
      const spellCheckLanguagesList =
          spellcheckPage.shadowRoot.querySelector('#spellCheckLanguagesList');
      assertFalse(!!spellCheckLanguagesList);

      const editDictionaryTrigger =
          spellcheckPage.shadowRoot.querySelector('#spellCheckSubpageTrigger');
      assertFalse(!!editDictionaryTrigger);

      // 
      const spellCheckCollapse =
          spellcheckPage.shadowRoot.querySelector('#spellCheckCollapse');
      assertFalse(!!spellCheckCollapse);
      // 

      const toggle = spellcheckPage.$.enableSpellcheckingToggle;
      assertTrue(toggle.checked);
    });
    // 

    // 
  });

  // 
});
