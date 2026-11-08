// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import type {LanguageHelper, LanguageSettingsMetricsProxy, LanguageSettingsPageImpressionType, SettingsSpellCheckPageElement} from 'chrome://settings/lazy_load.js';
import {getLanguageHelperInstance, LanguageHelperImpl, LanguagesBrowserProxyImpl, LanguageSettingsActionType, LanguageSettingsMetricsProxyImpl} from 'chrome://settings/lazy_load.js';
import {PrefsBrowserProxy, PrefService} from 'chrome://settings/settings.js';
import {assertEquals} from 'chrome://webui-test/chai_assert.js';

// 

import {TestBrowserProxy} from 'chrome://webui-test/test_browser_proxy.js';
import {microtasksFinished} from 'chrome://webui-test/test_util.js';

import {getFakeLanguagePrefs} from './fake_language_settings_private.js';
import {TestLanguagesBrowserProxy} from './test_languages_browser_proxy.js';
import {TestPrefsBrowserProxy} from './test_prefs_browser_proxy.js';

/**
 * A test version of LanguageSettingsMetricsProxy.
 */
class TestSpellCheckSettingsMetricsProxy extends TestBrowserProxy implements
    LanguageSettingsMetricsProxy {
  constructor() {
    super(['recordSettingsMetric', 'recordPageImpressionMetric']);
  }

  recordSettingsMetric(interaction: LanguageSettingsActionType) {
    this.methodCalled('recordSettingsMetric', interaction);
  }

  recordPageImpressionMetric(interaction: LanguageSettingsPageImpressionType) {
    this.methodCalled('recordPageImpressionMetric', interaction);
  }
}

suite('SpellCheckPageMetricsBrowser', function() {
  let languageHelper: LanguageHelper;
  let spellCheckPage: SettingsSpellCheckPageElement;
  let browserProxy: TestLanguagesBrowserProxy;
  let languageSettingsMetricsProxy: TestSpellCheckSettingsMetricsProxy;
  let prefService: PrefService;

  setup(async function() {
    document.body.innerHTML = window.trustedTypes!.emptyHTML;
    const prefsBrowserProxy = new TestPrefsBrowserProxy(getFakeLanguagePrefs());
    PrefsBrowserProxy.setInstance(prefsBrowserProxy);
    PrefService.resetInstanceForTesting();
    prefService = PrefService.getInstance();
    await prefService.whenInitialized();

    // Sets up test browser proxy.
    browserProxy = new TestLanguagesBrowserProxy();
    LanguagesBrowserProxyImpl.setInstance(browserProxy);

    // Sets up test browser proxy.
    languageSettingsMetricsProxy = new TestSpellCheckSettingsMetricsProxy();
    LanguageSettingsMetricsProxyImpl.setInstance(languageSettingsMetricsProxy);

    LanguageHelperImpl.resetInstanceForTesting();
    languageHelper = getLanguageHelperInstance();
    await languageHelper.whenReady();

    spellCheckPage = document.createElement('settings-spell-check-page');
    document.body.appendChild(spellCheckPage);
    await microtasksFinished();
  });

  teardown(function() {
    document.body.innerHTML = window.trustedTypes!.emptyHTML;
  });

  suite('Metrics', function() {
    test('records when disabling spellCheck globally', async () => {
      prefService.setPrefValue('browser.enable_spellchecking', true);
      await microtasksFinished();
      const spellCheckToggle = spellCheckPage.$.enableSpellcheckingToggle;
      spellCheckToggle.click();
      await microtasksFinished();

      assertEquals(
          LanguageSettingsActionType.DISABLE_SPELL_CHECK_GLOBALLY,
          await languageSettingsMetricsProxy.whenCalled('recordSettingsMetric'));
    });

    test('records when enabling spellCheck globally', async () => {
      prefService.setPrefValue('browser.enable_spellchecking', false);
      await microtasksFinished();

      const spellCheckToggle = spellCheckPage.$.enableSpellcheckingToggle;
      spellCheckToggle.click();
      await microtasksFinished();

      assertEquals(
          LanguageSettingsActionType.ENABLE_SPELL_CHECK_GLOBALLY,
          await languageSettingsMetricsProxy.whenCalled('recordSettingsMetric'));
    });
  });

  // 

  // 
});
