// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { OnStartupBrowserProxyImpl, PrefsBrowserProxy, PrefService, PrefValues, StartupUrlsPageBrowserProxyImpl } from 'chrome://settings/settings.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// 
import { TestPrefsBrowserProxy } from './test_prefs_browser_proxy.js';
import { TestStartupUrlsPageBrowserProxy } from './test_startup_urls_page_browser_proxy.js';
// clang-format on
class TestOnStartupBrowserProxy extends TestBrowserProxy {
    ntpExtension_ = null;
    constructor() {
        super(['getNtpExtension']);
    }
    getNtpExtension() {
        this.methodCalled('getNtpExtension');
        return Promise.resolve(this.ntpExtension_);
    }
    /**
     * Sets ntpExtension and fires an update event
     */
    setNtpExtension(ntpExtension) {
        this.ntpExtension_ = ntpExtension;
        webUIListenerCallback('update-ntp-extension', ntpExtension);
    }
}
function getInitialPrefs() {
    return [
        // 
        {
            key: 'session.restore_on_startup',
            type: chrome.settingsPrivate.PrefType.NUMBER,
            value: PrefValues.OPEN_NEW_TAB,
        },
        {
            key: 'session.startup_urls',
            type: chrome.settingsPrivate.PrefType.LIST,
            value: [],
        },
    ];
}
/** @fileoverview Suite of tests for on_startup_page. */
suite('OnStartupPage', function () {
    let testElement;
    let onStartupBrowserProxy;
    let startupUrlsBrowserProxy;
    let prefsBrowserProxy;
    let prefService;
    const ntpExtension = { id: 'id', name: 'name', canBeDisabled: true };
    const prefValuesToTest = [
        PrefValues.CONTINUE,
        PrefValues.OPEN_NEW_TAB,
        PrefValues.OPEN_SPECIFIC,
    ];
    async function initPage() {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        onStartupBrowserProxy.reset();
        startupUrlsBrowserProxy.reset();
        testElement = document.createElement('settings-on-startup-page');
        document.body.appendChild(testElement);
        await onStartupBrowserProxy.whenCalled('getNtpExtension');
        return microtasksFinished();
    }
    function getSelectedOptionLabel() {
        return Array
            .from(testElement.shadowRoot.querySelectorAll('controlled-radio-button'))
            .find(el => el.name ===
            testElement.shadowRoot.querySelector('settings-radio-group')
                .selected).label;
    }
    setup(async function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        onStartupBrowserProxy = new TestOnStartupBrowserProxy();
        OnStartupBrowserProxyImpl.setInstance(onStartupBrowserProxy);
        startupUrlsBrowserProxy = new TestStartupUrlsPageBrowserProxy();
        StartupUrlsPageBrowserProxyImpl.setInstance(startupUrlsBrowserProxy);
        prefsBrowserProxy = new TestPrefsBrowserProxy(getInitialPrefs());
        PrefsBrowserProxy.setInstance(prefsBrowserProxy);
        PrefService.resetInstanceForTesting();
        prefService = PrefService.getInstance();
        await prefService.whenInitialized();
        // 
        return initPage();
    });
    test('open-continue', async function () {
        await prefService.setPrefValue('session.restore_on_startup', PrefValues.CONTINUE);
        assertEquals('Continue where you left off', getSelectedOptionLabel());
    });
    test('open-ntp', async function () {
        await prefService.setPrefValue('session.restore_on_startup', PrefValues.OPEN_NEW_TAB);
        assertEquals('Open the new tab page', getSelectedOptionLabel());
    });
    test('open-specific', async function () {
        await prefService.setPrefValue('session.restore_on_startup', PrefValues.OPEN_SPECIFIC);
        assertEquals('Open a specific page or set of pages', getSelectedOptionLabel());
    });
    // Test that loadStartupPages is called every time the "Open a specific page
    // or set of pages" radio button is selected.
    test('toggle-startup-urls-visibility', async function () {
        await prefService.setPrefValue('session.restore_on_startup', PrefValues.OPEN_SPECIFIC);
        await startupUrlsBrowserProxy.whenCalled('loadStartupPages');
        startupUrlsBrowserProxy.reset();
        await prefService.setPrefValue('session.restore_on_startup', PrefValues.OPEN_NEW_TAB);
        await prefService.setPrefValue('session.restore_on_startup', PrefValues.OPEN_SPECIFIC);
        await startupUrlsBrowserProxy.whenCalled('loadStartupPages');
    });
    function extensionControlledIndicatorExists() {
        return !!testElement.shadowRoot.querySelector('extension-controlled-indicator');
    }
    test('given ntp extension, extension indicator always exists', async function () {
        onStartupBrowserProxy.setNtpExtension(ntpExtension);
        await onStartupBrowserProxy.whenCalled('getNtpExtension');
        assertTrue(extensionControlledIndicatorExists());
        for (const option of prefValuesToTest) {
            await prefService.setPrefValue('session.restore_on_startup', option);
            assertTrue(extensionControlledIndicatorExists());
        }
    });
    test('extension indicator not shown when no ntp extension enabled', async function () {
        assertFalse(extensionControlledIndicatorExists());
        for (const option of prefValuesToTest) {
            await prefService.setPrefValue('session.restore_on_startup', option);
            assertFalse(extensionControlledIndicatorExists());
        }
    });
    test('ntp extension updated, extension indicator added', async function () {
        assertFalse(extensionControlledIndicatorExists());
        onStartupBrowserProxy.setNtpExtension(ntpExtension);
        await onStartupBrowserProxy.whenCalled('getNtpExtension');
        assertTrue(extensionControlledIndicatorExists());
    });
    test('searchContents', async function () {
        let result = await testElement.searchContents('Continue where');
        assertFalse(result.canceled);
        assertEquals(1, result.matchCount);
        assertFalse(result.wasClearSearch);
        result = await testElement.searchContents('non-existing-text');
        assertFalse(result.canceled);
        assertEquals(0, result.matchCount);
        assertFalse(result.wasClearSearch);
        result = await testElement.searchContents('');
        assertFalse(result.canceled);
        assertEquals(0, result.matchCount);
        assertTrue(result.wasClearSearch);
    });
    // 
});
