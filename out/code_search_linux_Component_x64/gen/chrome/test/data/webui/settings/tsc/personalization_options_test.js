// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import 'chrome://settings/lazy_load.js';
import { loadTimeData, PrefService, PrefsBrowserProxy, PrivacyPageBrowserProxyImpl, resetPageVisibilityForTesting, SignedInState, StatusAction, SyncBrowserProxyImpl } from 'chrome://settings/settings.js';
import { assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { isVisible, microtasksFinished } from 'chrome://webui-test/test_util.js';
// 
// 
// 
import { TestPrivacyPageBrowserProxy } from './test_privacy_page_browser_proxy.js';
import { TestSyncBrowserProxy } from './test_sync_browser_proxy.js';
import { TestPrefsBrowserProxy } from './test_prefs_browser_proxy.js';
// clang-format on
function createBooleanPref(name, value) {
    return {
        key: name,
        type: chrome.settingsPrivate.PrefType.BOOLEAN,
        value: value,
    };
}
function getInitialPrefs() {
    return [
        createBooleanPref('search.suggest_enabled', true),
        createBooleanPref('url_keyed_anonymized_data_collection.enabled', true),
        createBooleanPref('page_content_collection.enabled', false),
        createBooleanPref('price_tracking.email_notifications_enabled', true),
        createBooleanPref('signin.allowed_on_next_startup', true),
        createBooleanPref('spellcheck.use_spelling_service', false),
        createBooleanPref('browser.enable_spellchecking', true),
        {
            key: 'spellcheck.dictionaries',
            type: chrome.settingsPrivate.PrefType.LIST,
            value: ['en-US'],
        },
    ];
}
suite('AllBuilds', function () {
    let testBrowserProxy;
    let syncBrowserProxy;
    let testElement;
    let prefService;
    suiteSetup(function () {
        loadTimeData.overrideValues({
            signinAvailable: true,
            changePriceEmailNotificationsEnabled: true,
            shouldUseMetricsConsentRestructure: true,
        });
    });
    function buildTestElement() {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        testElement = document.createElement('settings-personalization-options');
        document.body.appendChild(testElement);
    }
    setup(async function () {
        const prefsBrowserProxy = new TestPrefsBrowserProxy(getInitialPrefs());
        PrefsBrowserProxy.setInstance(prefsBrowserProxy);
        PrefService.resetInstanceForTesting();
        prefService = PrefService.getInstance();
        await prefService.whenInitialized();
        testBrowserProxy = new TestPrivacyPageBrowserProxy();
        PrivacyPageBrowserProxyImpl.setInstance(testBrowserProxy);
        syncBrowserProxy = new TestSyncBrowserProxy();
        SyncBrowserProxyImpl.setInstance(syncBrowserProxy);
        buildTestElement();
    });
    teardown(function () {
        testElement.remove();
        resetPageVisibilityForTesting();
    });
    // 
    // 
    test('searchSuggestToggleShownIfPageVisibilityUndefined', function () {
        // This is the most common case, as in non-Guest profiles on Desktop
        // platforms pageVisibility is undefined.
        assertTrue(isVisible(testElement.shadowRoot.querySelector('#searchSuggestToggle')));
    });
    test('searchSuggestToggleHiddenByPageVisibility', function () {
        resetPageVisibilityForTesting({
            privacy: {
                searchPrediction: false,
                networkPrediction: false,
            },
        });
        buildTestElement();
        assertFalse(isVisible(testElement.shadowRoot.querySelector('#searchSuggestToggle')));
    });
    test('searchSuggestToggleShownByPageVisibility', function () {
        resetPageVisibilityForTesting({
            privacy: {
                searchPrediction: true,
                networkPrediction: false,
            },
        });
        buildTestElement();
        assertTrue(isVisible(testElement.shadowRoot.querySelector('#searchSuggestToggle')));
    });
    // 
    test('searchAggregatorSuggestNotShown', function () {
        loadTimeData.overrideValues({ showSearchAggregatorSuggest: false });
        buildTestElement(); // Rebuild the element after modifying loadTimeData.
        assertFalse(isVisible(testElement.shadowRoot.querySelector('#searchAggregatorSuggestToggle')));
    });
    test('searchAggregatorSuggestShown', function () {
        loadTimeData.overrideValues({ showSearchAggregatorSuggest: true });
        buildTestElement(); // Rebuild the element after modifying loadTimeData.
        assertTrue(isVisible(testElement.shadowRoot.querySelector('#searchAggregatorSuggestToggle')));
    });
    test('priceEmailNotificationsToggleHidden', async function () {
        loadTimeData.overrideValues({ 'changePriceEmailNotificationsEnabled': false });
        buildTestElement(); // Rebuild the element after modifying loadTimeData.
        assertFalse(!!testElement.shadowRoot.querySelector('#priceEmailNotificationsToggle'));
        testElement.syncStatus = {
            signedInState: SignedInState.SYNCING,
            statusAction: StatusAction.NO_ACTION,
        };
        await microtasksFinished();
        assertFalse(!!testElement.shadowRoot.querySelector('#priceEmailNotificationsToggle'));
    });
    test('priceEmailNotificationsToggleShownForSignedInUsersWithFlag', async function () {
        loadTimeData.overrideValues({
            'changePriceEmailNotificationsEnabled': true,
            // Flag is enabled.
            'replaceSyncPromosWithSignInPromos': true,
        });
        // Rebuild the element after modifying loadTimeData.
        buildTestElement();
        testElement.syncStatus = {
            signedInState: SignedInState.SIGNED_IN,
            statusAction: StatusAction.NO_ACTION,
        };
        await microtasksFinished();
        assertTrue(!!testElement.shadowRoot.querySelector('#priceEmailNotificationsToggle'));
    });
    test('priceEmailNotificationsToggleShownForSyncingUsersWithFlag', async function () {
        loadTimeData.overrideValues({
            'changePriceEmailNotificationsEnabled': true,
            // Flag is enabled.
            'replaceSyncPromosWithSignInPromos': true,
        });
        // Rebuild the element after modifying loadTimeData.
        buildTestElement();
        testElement.syncStatus = {
            signedInState: SignedInState.SYNCING,
            statusAction: StatusAction.NO_ACTION,
        };
        await microtasksFinished();
        assertTrue(!!testElement.shadowRoot.querySelector('#priceEmailNotificationsToggle'));
    });
    // 
});
// 
