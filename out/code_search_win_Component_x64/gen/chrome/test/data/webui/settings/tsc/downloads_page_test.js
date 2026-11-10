// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { DownloadsBrowserProxyImpl } from 'chrome://settings/lazy_load.js';
import { loadTimeData, PrefService, PrefsBrowserProxy } from 'chrome://settings/settings.js';
import { assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
// 
import { TestPrefsBrowserProxy } from './test_prefs_browser_proxy.js';
// clang-format on
class TestDownloadsBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'initializeDownloads',
            'setDownloadsConnectionAccountLink',
            'selectDownloadLocation',
            'resetAutoOpenFileTypes',
            'getDownloadLocationText',
        ]);
    }
    initializeDownloads() {
        this.methodCalled('initializeDownloads');
    }
    setDownloadsConnectionAccountLink(enableLink) {
        this.methodCalled('setDownloadsConnectionAccountLink', enableLink);
    }
    selectDownloadLocation() {
        this.methodCalled('selectDownloadLocation');
    }
    resetAutoOpenFileTypes() {
        this.methodCalled('resetAutoOpenFileTypes');
    }
}
function getInitialPrefs() {
    return [
        {
            key: 'download.default_directory',
            type: chrome.settingsPrivate.PrefType.STRING,
            value: '/path/to/downloads',
        },
        {
            key: 'download.prompt_for_download',
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            value: false,
        },
        {
            key: 'download_bubble.partial_view_enabled',
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            value: true,
        },
    ];
}
suite('DownloadsHandler', function () {
    let downloadsBrowserProxy;
    let downloadsPage;
    let prefsBrowserProxy;
    let prefService;
    setup(async function () {
        loadTimeData.overrideValues({
            downloadBubblePartialViewControlledByPref: false,
        });
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        downloadsBrowserProxy = new TestDownloadsBrowserProxy();
        DownloadsBrowserProxyImpl.setInstance(downloadsBrowserProxy);
        prefsBrowserProxy = new TestPrefsBrowserProxy(getInitialPrefs());
        PrefsBrowserProxy.setInstance(prefsBrowserProxy);
        PrefService.resetInstanceForTesting();
        prefService = PrefService.getInstance();
        await prefService.whenInitialized();
        downloadsPage = document.createElement('settings-downloads-page');
        document.body.appendChild(downloadsPage);
        // Page element must call 'initializeDownloads' upon attachment to the DOM.
        return downloadsBrowserProxy.whenCalled('initializeDownloads');
    });
    test('select downloads location', function () {
        const button = downloadsPage.shadowRoot.querySelector('#changeDownloadsPath');
        assertTrue(!!button);
        button.click();
        return downloadsBrowserProxy.whenCalled('selectDownloadLocation');
    });
    test('controlled button pref enforcement', async function () {
        const button = downloadsPage.shadowRoot.querySelector('#changeDownloadsPath');
        assertTrue(!!button);
        assertFalse(button.$.button.disabled);
        assertFalse(!!button.shadowRoot.querySelector('cr-policy-pref-indicator'));
        prefsBrowserProxy.fakeApi.sendPrefChanges([{
                key: 'download.default_directory',
                type: chrome.settingsPrivate.PrefType.STRING,
                value: '/path/to/downloads',
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
                controlledBy: chrome.settingsPrivate.ControlledBy.USER_POLICY,
            }]);
        await microtasksFinished();
        assertTrue(button.$.button.disabled);
        assertTrue(!!button.shadowRoot.querySelector('cr-policy-pref-indicator'));
    });
    test('openAdvancedDownloadsettings', async function () {
        let button = downloadsPage.shadowRoot.querySelector('#resetAutoOpenFileTypes');
        assertFalse(!!button);
        webUIListenerCallback('auto-open-downloads-changed', true);
        await microtasksFinished();
        button = downloadsPage.shadowRoot.querySelector('#resetAutoOpenFileTypes');
        assertTrue(!!button);
        button.click();
        await downloadsBrowserProxy.whenCalled('resetAutoOpenFileTypes');
        webUIListenerCallback('auto-open-downloads-changed', false);
        await microtasksFinished();
        button = downloadsPage.shadowRoot.querySelector('#resetAutoOpenFileTypes');
        assertFalse(!!button);
    });
    // 
    test('showDownloadsToggleHidden', async function () {
        await microtasksFinished();
        const button = downloadsPage.shadowRoot.querySelector('#showDownloadsToggle');
        assertFalse(!!button);
    });
});
suite('DownloadsHandlerWithBubblePartialView', function () {
    let downloadsBrowserProxy;
    let downloadsPage;
    let prefService;
    setup(async function () {
        loadTimeData.overrideValues({
            downloadBubblePartialViewControlledByPref: true,
        });
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        downloadsBrowserProxy = new TestDownloadsBrowserProxy();
        DownloadsBrowserProxyImpl.setInstance(downloadsBrowserProxy);
        const prefsBrowserProxy = new TestPrefsBrowserProxy(getInitialPrefs());
        PrefsBrowserProxy.setInstance(prefsBrowserProxy);
        PrefService.resetInstanceForTesting();
        prefService = PrefService.getInstance();
        await prefService.whenInitialized();
        downloadsPage = document.createElement('settings-downloads-page');
        document.body.appendChild(downloadsPage);
        // Page element must call 'initializeDownloads' upon attachment to the DOM.
        return downloadsBrowserProxy.whenCalled('initializeDownloads');
    });
    test('showDownloadsToggleShown', function () {
        const button = downloadsPage.shadowRoot.querySelector('#showDownloadsToggle');
        assertTrue(!!button);
    });
    test('showDownloadsToggleChangesPref', async function () {
        prefService.setPrefValue('download_bubble.partial_view_enabled', false);
        await microtasksFinished();
        assertFalse(prefService.getPref('download_bubble.partial_view_enabled')
            .value);
        const button = downloadsPage.shadowRoot.querySelector('#showDownloadsToggle');
        assertTrue(!!button);
        button.click();
        await microtasksFinished();
        assertTrue(prefService.getPref('download_bubble.partial_view_enabled')
            .value);
    });
});
