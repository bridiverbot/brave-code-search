// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://settings/lazy_load.js';
import 'chrome://settings/settings.js';
import { OpenWindowProxyImpl, PrefsBrowserProxy, PrefService } from 'chrome://settings/settings.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { TestOpenWindowProxy } from 'chrome://webui-test/test_open_window_proxy.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestPrefsBrowserProxy } from './test_prefs_browser_proxy.js';
function getInitialPrefs() {
    return [
        {
            key: 'skills.enabled',
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            value: true,
        },
    ];
}
suite('SkillsPage', function () {
    let openWindowProxy;
    let subpage;
    let prefService;
    setup(async function () {
        const prefsBrowserProxy = new TestPrefsBrowserProxy(getInitialPrefs());
        PrefsBrowserProxy.setInstance(prefsBrowserProxy);
        PrefService.resetInstanceForTesting();
        prefService = PrefService.getInstance();
        await prefService.whenInitialized();
        openWindowProxy = new TestOpenWindowProxy();
        OpenWindowProxyImpl.setInstance(openWindowProxy);
    });
    teardown(function () {
        openWindowProxy.reset();
    });
    function createPage() {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        subpage = document.createElement('settings-skills-page');
        document.body.appendChild(subpage);
        return microtasksFinished();
    }
    test('skillsToggle', async () => {
        await createPage();
        const toggle = subpage.shadowRoot.querySelector('settings-toggle-button');
        assertTrue(!!toggle);
        // Default should be true.
        assertTrue(prefService.getPref('skills.enabled').value);
        assertTrue(toggle.checked);
        // Toggle to false.
        toggle.click();
        assertFalse(prefService.getPref('skills.enabled').value);
        assertFalse(toggle.checked);
        // Toggle back to true.
        toggle.click();
        assertTrue(prefService.getPref('skills.enabled').value);
        assertTrue(toggle.checked);
    });
    test('skillsGalleryLink', async function () {
        await createPage();
        const linkRow = subpage.shadowRoot.querySelector('#skillsGalleryLink');
        assertTrue(!!linkRow);
        linkRow.click();
        const url = await openWindowProxy.whenCalled('openUrl');
        assertEquals('chrome://skills', url);
    });
});
