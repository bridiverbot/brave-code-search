// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import 'chrome://settings/lazy_load.js';
import { SystemPageBrowserProxyImpl } from 'chrome://settings/lazy_load.js';
import { LifetimeBrowserProxyImpl, PrefService, PrefsBrowserProxy } from 'chrome://settings/settings.js';
import { assertEquals, assertFalse, assertNotEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { TestPrefsBrowserProxy } from './test_prefs_browser_proxy.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { isVisible, microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestLifetimeBrowserProxy } from './test_lifetime_browser_proxy.js';
// 
// 
// clang-format on
const HARDWARE_ACCELERATION_AT_STARTUP = true;
class TestSystemPageBrowserProxy extends TestBrowserProxy {
    constructor() {
        super(['showProxySettings']);
    }
    showProxySettings() {
        this.methodCalled('showProxySettings');
    }
    wasHardwareAccelerationEnabledAtStartup() {
        return HARDWARE_ACCELERATION_AT_STARTUP;
    }
}
suite('settings system page', function () {
    let systemBrowserProxy;
    let lifetimeBrowserProxy;
    // 
    let systemPage;
    let fakeSettingsPrivate;
    function getInitialPrefs(_isolationEnabledAtStartup) {
        const prefs = [
            {
                key: 'background_mode.enabled',
                type: chrome.settingsPrivate.PrefType.BOOLEAN,
                value: true,
            },
            {
                key: 'hardware_acceleration_mode.enabled',
                type: chrome.settingsPrivate.PrefType.BOOLEAN,
                value: HARDWARE_ACCELERATION_AT_STARTUP,
            },
            {
                key: 'proxy',
                type: chrome.settingsPrivate.PrefType.DICTIONARY,
                value: { mode: 'system' },
            },
            {
                key: 'proxy_override_rules',
                type: chrome.settingsPrivate.PrefType.LIST,
                value: [],
            },
        ];
        // 
        // 
        return prefs;
    }
    setup(async function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        // 
        lifetimeBrowserProxy = new TestLifetimeBrowserProxy();
        LifetimeBrowserProxyImpl.setInstance(lifetimeBrowserProxy);
        // 
        systemBrowserProxy = new TestSystemPageBrowserProxy();
        SystemPageBrowserProxyImpl.setInstance(systemBrowserProxy);
        const prefsBrowserProxy = new TestPrefsBrowserProxy(getInitialPrefs(/*_isolationEnabledAtStartup=*/ false));
        PrefsBrowserProxy.setInstance(prefsBrowserProxy);
        fakeSettingsPrivate = prefsBrowserProxy.fakeApi;
        PrefService.resetInstanceForTesting();
        await PrefService.getInstance().whenInitialized();
        systemPage = document.createElement('settings-system-page');
        document.body.appendChild(systemPage);
        // Ensure that conditionally rendered nodes (i.e.,
        // featureNotificationsEnabled) are loaded.
        await microtasksFinished();
    });
    teardown(function () {
        systemPage.remove();
    });
    test('restart button', async function () {
        const control = systemPage.$.hardwareAcceleration;
        assertEquals(HARDWARE_ACCELERATION_AT_STARTUP, control.checked);
        // Restart button should be hidden by default.
        assertFalse(!!control.querySelector('cr-button'));
        PrefService.getInstance().setPrefValue('hardware_acceleration_mode.enabled', !HARDWARE_ACCELERATION_AT_STARTUP);
        await microtasksFinished();
        assertNotEquals(HARDWARE_ACCELERATION_AT_STARTUP, control.checked);
        const restart = control.querySelector('cr-button');
        assertTrue(!!restart); // The "RESTART" button should be showing now.
        restart.click();
        return lifetimeBrowserProxy.whenCalled('restart');
    });
    // 
    test('proxy row', function () {
        systemPage.$.proxy.click();
        return systemBrowserProxy.whenCalled('showProxySettings');
    });
    test('proxy row enforcement', async function () {
        const control = systemPage.$.proxy;
        const showProxyButton = control.querySelector('cr-icon-button');
        assertTrue(control.hasAttribute('actionable'));
        assertEquals(null, control.querySelector('cr-policy-pref-indicator'));
        assertTrue(isVisible(showProxyButton));
        fakeSettingsPrivate.sendPrefChanges([{
                key: 'proxy',
                type: chrome.settingsPrivate.PrefType.DICTIONARY,
                value: { mode: 'system' },
                controlledBy: chrome.settingsPrivate.ControlledBy.EXTENSION,
                extensionId: 'blah',
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
            }]);
        await microtasksFinished();
        // When managed by extensions, we disable the ability to show proxy
        // settings.
        assertFalse(control.hasAttribute('actionable'));
        assertEquals(null, control.querySelector('cr-policy-pref-indicator'));
        assertFalse(isVisible(showProxyButton));
        fakeSettingsPrivate.sendPrefChanges([{
                key: 'proxy',
                type: chrome.settingsPrivate.PrefType.DICTIONARY,
                value: { mode: 'system' },
                controlledBy: chrome.settingsPrivate.ControlledBy.USER_POLICY,
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
            }]);
        await microtasksFinished();
        // When managed by policy directly, we disable the ability to show proxy
        // settings.
        assertFalse(control.hasAttribute('actionable'));
        assertNotEquals(null, control.querySelector('cr-policy-pref-indicator'));
        assertFalse(isVisible(showProxyButton));
    });
    test('proxy row multiple sources', async function () {
        const control = systemPage.$.proxyMultipleSources;
        const deviceSettings = control.querySelector('#proxyDeviceSettings');
        assertTrue(deviceSettings.hasAttribute('actionable'));
        assertFalse(isVisible(control));
        const multipleSourcesLabel = systemPage.$.proxy.querySelector('#proxyMultipleSourcesLabel');
        assertFalse(isVisible(multipleSourcesLabel));
        // Case 1: ProxyOverrideRules is set by policy, proxy is not set (using
        // system default). Multiple sources should be shown.
        fakeSettingsPrivate.sendPrefChanges([{
                key: 'proxy_override_rules',
                type: chrome.settingsPrivate.PrefType.LIST,
                value: [{
                        'DestinationMatchers': ['https://app1.com', 'https://app2.com'],
                        'ProxyList': ['HTTPS proxy.app:443'],
                    }],
                controlledBy: chrome.settingsPrivate.ControlledBy.USER_POLICY,
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
            }]);
        await microtasksFinished();
        assertTrue(deviceSettings.hasAttribute('actionable'));
        assertTrue(isVisible(control));
        assertTrue(isVisible(multipleSourcesLabel));
        // Case 2: Both ProxyOverrideRules and proxy are set by policy.
        // A single combined sources should be shown.
        fakeSettingsPrivate.sendPrefChanges([{
                key: 'proxy',
                type: chrome.settingsPrivate.PrefType.DICTIONARY,
                value: { mode: 'system' },
                controlledBy: chrome.settingsPrivate.ControlledBy.USER_POLICY,
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
            }]);
        await microtasksFinished();
        assertFalse(deviceSettings.hasAttribute('actionable'));
        assertFalse(isVisible(control));
        assertFalse(isVisible(multipleSourcesLabel));
        // Case 3: ProxyOverrideRules is set by policy, proxy is set by an
        // extension. Multiple sources should be shown.
        fakeSettingsPrivate.sendPrefChanges([{
                key: 'proxy',
                type: chrome.settingsPrivate.PrefType.DICTIONARY,
                value: { mode: 'system' },
                controlledBy: chrome.settingsPrivate.ControlledBy.EXTENSION,
                extensionId: 'extension-id-1',
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
            }]);
        await microtasksFinished();
        assertFalse(deviceSettings.hasAttribute('actionable'));
        assertTrue(isVisible(control));
        assertTrue(isVisible(multipleSourcesLabel));
        // Case 4: ProxyOverrideRules and proxy are set by the same extension.
        // A single combined sources should be shown.
        fakeSettingsPrivate.sendPrefChanges([{
                key: 'proxy_override_rules',
                type: chrome.settingsPrivate.PrefType.LIST,
                value: [{
                        'DestinationMatchers': ['https://app1.com'],
                        'ProxyList': ['HTTPS proxy.app:443'],
                    }],
                controlledBy: chrome.settingsPrivate.ControlledBy.EXTENSION,
                extensionId: 'extension-id-1',
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
            }]);
        await microtasksFinished();
        assertFalse(deviceSettings.hasAttribute('actionable'));
        assertFalse(isVisible(control));
        assertFalse(isVisible(multipleSourcesLabel));
        // Case 5: ProxyOverrideRules and proxy are set by different extension.
        // Multiple sources should be shown.
        fakeSettingsPrivate.sendPrefChanges([{
                key: 'proxy',
                type: chrome.settingsPrivate.PrefType.DICTIONARY,
                value: { mode: 'system' },
                controlledBy: chrome.settingsPrivate.ControlledBy.EXTENSION,
                extensionId: 'extension-id-2',
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
            }]);
        await microtasksFinished();
        assertFalse(deviceSettings.hasAttribute('actionable'));
        assertTrue(isVisible(control));
        assertTrue(isVisible(multipleSourcesLabel));
    });
    // 
});
