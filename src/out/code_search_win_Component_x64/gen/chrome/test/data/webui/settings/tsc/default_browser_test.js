// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { DefaultBrowserBrowserProxyImpl, loadTimeData, Router, routes } from 'chrome://settings/settings.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
// clang-format on
/**
 * A test version of DefaultBrowserBrowserProxy. Provides helper methods
 * for allowing tests to know when a method was called, as well as
 * specifying mock responses.
 */
class TestDefaultBrowserBrowserProxy extends TestBrowserProxy {
    defaultBrowserInfo_;
    userValueStringsFeatureState_;
    constructor() {
        super([
            'requestDefaultBrowserState',
            'requestUserValueStringsFeatureState',
            'setAsDefaultBrowser',
        ]);
        this.defaultBrowserInfo_ = {
            canBeDefault: true,
            canPin: false,
            isDefault: false,
            isDisabledByPolicy: false,
            isUnknownError: false,
        };
        this.userValueStringsFeatureState_ = false;
    }
    requestDefaultBrowserState() {
        this.methodCalled('requestDefaultBrowserState');
        return Promise.resolve(this.defaultBrowserInfo_);
    }
    requestUserValueStringsFeatureState() {
        this.methodCalled('requestUserValueStringsFeatureState');
        return Promise.resolve(this.userValueStringsFeatureState_);
    }
    setAsDefaultBrowser(pin) {
        this.methodCalled('setAsDefaultBrowser', pin);
    }
    /**
     * Sets the response to be returned by |requestDefaultBrowserState|.
     * @param info Fake info for testing.
     */
    setDefaultBrowserInfo(info) {
        this.defaultBrowserInfo_ = info;
    }
    /**
     * Sets the response to be returned by |requestUserValueStringsFeatureState|.
     * @param featureState Fake state for testing.
     */
    setUserValueStringsFeatureState(featureState) {
        this.userValueStringsFeatureState_ = featureState;
    }
}
suite('DefaultBrowserPageTest', function () {
    let page;
    let browserProxy;
    setup(async function () {
        browserProxy = new TestDefaultBrowserBrowserProxy();
        DefaultBrowserBrowserProxyImpl.setInstance(browserProxy);
        await initPage();
    });
    teardown(function () {
        page.remove();
    });
    async function initPage() {
        browserProxy.reset();
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        page = document.createElement('settings-default-browser-page');
        document.body.appendChild(page);
        await browserProxy.whenCalled('requestDefaultBrowserState');
        await microtasksFinished();
    }
    /**
     * Simulates navigation to the Default Browser page and waits
     * for the experiment activation call.
     */
    function navigateToDefaultBrowserPage() {
        browserProxy.resetResolver('requestUserValueStringsFeatureState');
        Router.getInstance().navigateTo(routes.DEFAULT_BROWSER);
        return browserProxy.whenCalled('requestUserValueStringsFeatureState');
    }
    // TODO(crbug.com/459593729): Delete this test once the experiment is launched
    // and the old behavior is no longer supported.
    test('default-browser-test-can-be-default-featureOff', async function () {
        browserProxy.setUserValueStringsFeatureState(false);
        browserProxy.setDefaultBrowserInfo({
            canBeDefault: true,
            canPin: false,
            isDefault: false,
            isDisabledByPolicy: false,
            isUnknownError: false,
        });
        await initPage();
        await navigateToDefaultBrowserPage();
        await microtasksFinished();
        assertTrue(!!page.shadowRoot.querySelector('#canBeDefaultBrowser'));
        assertTrue(!page.shadowRoot.querySelector('#isDefault'));
        assertTrue(!page.shadowRoot.querySelector('#isSecondaryInstall'));
        assertTrue(!page.shadowRoot.querySelector('#isUnknownError'));
        // Verify that settings page doesn't offer to pin Chrome.
        const makeDefault = page.shadowRoot.querySelector('#makeDefaultLabel');
        assertTrue(!!makeDefault);
        assertEquals(makeDefault.textContent.trim(), loadTimeData.getString('defaultBrowserMakeDefault'));
    });
    // TODO(crbug.com/459593729): Drop the featureOn suffix and remove
    // the feature enablement once the experiment is launched.
    test('default-browser-test-can-be-default-featureOn', async function () {
        browserProxy.setUserValueStringsFeatureState(true);
        browserProxy.setDefaultBrowserInfo({
            canBeDefault: true,
            canPin: false,
            isDefault: false,
            isDisabledByPolicy: false,
            isUnknownError: false,
        });
        await initPage();
        await navigateToDefaultBrowserPage(); // Triggers currentRouteChanged
        await microtasksFinished();
        assertTrue(!!page.shadowRoot.querySelector('#canBeDefaultBrowser'));
        assertTrue(!page.shadowRoot.querySelector('#isDefault'));
        assertTrue(!page.shadowRoot.querySelector('#isSecondaryInstall'));
        assertTrue(!page.shadowRoot.querySelector('#isUnknownError'));
        // Verify that settings page doesn't offer to pin Chrome.
        const makeDefault = page.shadowRoot.querySelector('#makeDefaultLabel');
        assertTrue(!!makeDefault);
        assertEquals(makeDefault.textContent.trim(), loadTimeData.getString('defaultBrowserMakeDefaultUserValue'));
    });
    // TODO(crbug.com/459593729): Delete this test once the experiment is launched
    // and the old behavior is no longer supported.
    test('default-browser-test-can-be-default-and-pin-featureOff', async function () {
        browserProxy.setUserValueStringsFeatureState(false);
        browserProxy.setDefaultBrowserInfo({
            canBeDefault: true,
            canPin: true,
            isDefault: false,
            isDisabledByPolicy: false,
            isUnknownError: false,
        });
        await initPage();
        await navigateToDefaultBrowserPage();
        await microtasksFinished();
        assertTrue(!!page.shadowRoot.querySelector('#canBeDefaultBrowser'));
        assertFalse(!!page.shadowRoot.querySelector('#isDefault'));
        assertFalse(!!page.shadowRoot.querySelector('#isSecondaryInstall'));
        // Verify that settings page offers to pin Chrome.
        const makeDefault = page.shadowRoot.querySelector('#makeDefaultLabel');
        assertTrue(!!makeDefault);
        assertEquals(makeDefault.textContent.trim(), loadTimeData.getString('defaultBrowserMakeDefaultAndPin'));
        assertFalse(!!page.shadowRoot.querySelector('#isUnknownError'));
    });
    // TODO(crbug.com/459593729): Drop the featureOn suffix and remove
    // the feature enablement once the experiment is launched.
    test('default-browser-test-can-be-default-and-pin-featureOn', async function () {
        browserProxy.setUserValueStringsFeatureState(true);
        browserProxy.setDefaultBrowserInfo({
            canBeDefault: true,
            canPin: true,
            isDefault: false,
            isDisabledByPolicy: false,
            isUnknownError: false,
        });
        await initPage();
        await navigateToDefaultBrowserPage();
        await microtasksFinished();
        assertTrue(!!page.shadowRoot.querySelector('#canBeDefaultBrowser'));
        assertFalse(!!page.shadowRoot.querySelector('#isDefault'));
        assertFalse(!!page.shadowRoot.querySelector('#isSecondaryInstall'));
        // Verify that settings page offers to pin Chrome with user value
        // string.
        const makeDefault = page.shadowRoot.querySelector('#makeDefaultLabel');
        assertTrue(!!makeDefault);
        assertEquals(makeDefault.textContent.trim(), loadTimeData.getString('defaultBrowserMakeDefaultAndPinUserValue'));
        assertFalse(!!page.shadowRoot.querySelector('#isUnknownError'));
    });
    // TODO(crbug.com/459593729): Delete this test once the experiment is launched
    // and the old behavior is no longer supported.
    test('default-browser-test-is-default-featureOff', async function () {
        assertTrue(!!page);
        browserProxy.setUserValueStringsFeatureState(false);
        browserProxy.setDefaultBrowserInfo({
            canBeDefault: true,
            canPin: false,
            isDefault: true,
            isDisabledByPolicy: false,
            isUnknownError: false,
        });
        await initPage();
        await navigateToDefaultBrowserPage();
        await microtasksFinished();
        assertFalse(!!page.shadowRoot.querySelector('#canBeDefaultBrowser'));
        assertFalse(page.shadowRoot.querySelector('#isDefault').hidden);
        assertTrue(page.shadowRoot.querySelector('#defaultStringThankYou').hidden);
        const defaultString = page.shadowRoot.querySelector('#defaultString');
        assertFalse(defaultString.hidden);
        assertEquals(defaultString.textContent.trim(), loadTimeData.getString('defaultBrowserDefault'));
        assertTrue(page.shadowRoot.querySelector('#isSecondaryInstall').hidden);
        assertTrue(page.shadowRoot.querySelector('#isUnknownError').hidden);
    });
    // TODO(crbug.com/459593729): Drop the featureOn suffix and remove
    // the feature enablement once the experiment is launched.
    test('default-browser-test-is-default-featureOn', async function () {
        assertTrue(!!page);
        browserProxy.setUserValueStringsFeatureState(true);
        browserProxy.setDefaultBrowserInfo({
            canBeDefault: true,
            canPin: false,
            isDefault: true,
            isDisabledByPolicy: false,
            isUnknownError: false,
        });
        await initPage();
        await navigateToDefaultBrowserPage();
        await microtasksFinished();
        assertFalse(!!page.shadowRoot.querySelector('#canBeDefaultBrowser'));
        assertFalse(page.shadowRoot.querySelector('#isDefault').hidden);
        assertTrue(page.shadowRoot.querySelector('#defaultString').hidden);
        const defaultStringThankYou = page.shadowRoot.querySelector('#defaultStringThankYou');
        assertFalse(defaultStringThankYou.hidden);
        assertEquals(defaultStringThankYou.textContent.trim(), loadTimeData.getString('defaultBrowserDefaultThankYou'));
        assertTrue(page.shadowRoot.querySelector('#isSecondaryInstall').hidden);
        assertTrue(page.shadowRoot.querySelector('#isUnknownError').hidden);
    });
    test('default-browser-test-is-secondary-install', async function () {
        browserProxy.setDefaultBrowserInfo({
            canBeDefault: false,
            canPin: false,
            isDefault: false,
            isDisabledByPolicy: false,
            isUnknownError: false,
        });
        await initPage();
        await microtasksFinished();
        assertFalse(!!page.shadowRoot.querySelector('#canBeDefaultBrowser'));
        assertTrue(page.shadowRoot.querySelector('#isDefault').hidden);
        assertFalse(page.shadowRoot.querySelector('#isSecondaryInstall').hidden);
        assertTrue(page.shadowRoot.querySelector('#isUnknownError').hidden);
    });
    test('default-browser-test-is-disabled-by-policy', async function () {
        browserProxy.setDefaultBrowserInfo({
            canBeDefault: true,
            canPin: false,
            isDefault: false,
            isDisabledByPolicy: true,
            isUnknownError: false,
        });
        await initPage();
        await microtasksFinished();
        assertFalse(!!page.shadowRoot.querySelector('#canBeDefaultBrowser'));
        assertTrue(page.shadowRoot.querySelector('#isDefault').hidden);
        assertTrue(page.shadowRoot.querySelector('#isSecondaryInstall').hidden);
        assertFalse(page.shadowRoot.querySelector('#isUnknownError').hidden);
    });
    test('default-browser-test-is-unknown-error', async function () {
        browserProxy.setDefaultBrowserInfo({
            canBeDefault: true,
            canPin: false,
            isDefault: false,
            isDisabledByPolicy: false,
            isUnknownError: true,
        });
        await initPage();
        await microtasksFinished();
        assertFalse(!!page.shadowRoot.querySelector('#canBeDefaultBrowser'));
        assertTrue(page.shadowRoot.querySelector('#isDefault').hidden);
        assertTrue(page.shadowRoot.querySelector('#isSecondaryInstall').hidden);
        assertFalse(page.shadowRoot.querySelector('#isUnknownError').hidden);
    });
    test('searchContents', async function () {
        let result = await page.searchContents('Make default');
        assertFalse(result.canceled);
        assertEquals(1, result.matchCount);
        assertFalse(result.wasClearSearch);
        result = await page.searchContents('non-existing-text');
        assertFalse(result.canceled);
        assertEquals(0, result.matchCount);
        assertFalse(result.wasClearSearch);
        result = await page.searchContents('');
        assertFalse(result.canceled);
        assertEquals(0, result.matchCount);
        assertTrue(result.wasClearSearch);
    });
});
