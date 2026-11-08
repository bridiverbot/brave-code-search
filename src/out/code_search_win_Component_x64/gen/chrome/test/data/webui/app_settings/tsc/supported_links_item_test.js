// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Test suite for SupportedLinksItemElement. */
import 'chrome://app-settings/supported_links_item.js';
import { AppType, WindowMode } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { assertEquals, assertFalse, assertNull, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { isVisible, microtasksFinished } from 'chrome://webui-test/test_util.js';
import { createTestApp, setupMockHandler } from './app_management_test_support.js';
suite('SupportedLinksItemElement', function () {
    let supportedLinksItem;
    let apps;
    setup(function () {
        apps = {};
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        setupMockHandler();
        loadTimeData.resetForTesting({
            cancel: 'Cancel',
            close: 'Close',
            appManagementIntentSettingsDialogTitle: 'Supported Links',
            appManagementIntentSettingsTitle: '<a href="#">Supported Links</a>',
            appManagementIntentOverlapDialogTitle: 'Change as preferred app',
            appManagementIntentOverlapChangeButton: 'Change',
            appManagementIntentSharingOpenBrowserLabel: 'Open in Chrome browser',
            appManagementIntentSharingOpenAppLabel: 'Open in $1 App',
            appManagementIntentSharingTabExplanation: 'App is set to open in a new browser tab, supported links will also open in the browser.',
            updateAppStringsOnSettingsEnabled: false,
        });
    });
    async function setUpSupportedLinksComponent(id, optConfig) {
        const app = createTestApp(id, optConfig);
        apps[app.id] = app;
        supportedLinksItem =
            document.createElement('app-management-supported-links-item');
        supportedLinksItem.app = app;
        supportedLinksItem.apps = apps;
        document.body.appendChild(supportedLinksItem);
        await microtasksFinished();
        return app;
    }
    test('No supported links', async () => {
        const appOptions = {
            type: AppType.kWeb,
            isPreferredApp: true,
            supportedLinks: [], // Explicitly empty.
        };
        await setUpSupportedLinksComponent('app1', appOptions);
        assertFalse(isVisible(supportedLinksItem));
    });
    test('Tab mode works', async () => {
        const appOptions = {
            type: AppType.kWeb,
            isPreferredApp: true,
            windowMode: WindowMode.kBrowser,
            supportedLinks: ['google.com'],
        };
        await setUpSupportedLinksComponent('app1', appOptions);
        const radioGroup = supportedLinksItem.shadowRoot.querySelector('#radioGroup');
        assertTrue(!!radioGroup);
        assertFalse(radioGroup.disabled);
    });
    test('can open and close supported links list dialog', async () => {
        const supportedLink = 'google.com';
        const appOptions = {
            type: AppType.kWeb,
            isPreferredApp: true,
            supportedLinks: [supportedLink],
        };
        await setUpSupportedLinksComponent('app1', appOptions);
        let supportedLinksDialog = supportedLinksItem.shadowRoot.querySelector('#dialog');
        assertNull(supportedLinksDialog);
        // Open dialog.
        const heading = supportedLinksItem.$.heading;
        const link = heading.shadowRoot.querySelector('a');
        assertTrue(!!link);
        link.click();
        await microtasksFinished();
        supportedLinksDialog =
            supportedLinksItem.shadowRoot.querySelector('#dialog');
        assertTrue(!!supportedLinksDialog);
        const innerDialog = supportedLinksDialog.shadowRoot.querySelector('#dialog');
        assertTrue(!!innerDialog);
        assertTrue(innerDialog.open);
        // Confirm google.com shows up.
        const list = supportedLinksDialog.shadowRoot.querySelector('#list');
        assertTrue(!!list);
        const item = list.getElementsByClassName('list-item')[0];
        assertTrue(!!item);
        assertEquals(supportedLink, item.innerText);
        // Close dialog.
        const closeButton = innerDialog.shadowRoot.querySelector('#close');
        assertTrue(!!closeButton);
        closeButton.click();
        await microtasksFinished();
        // Wait for the stamped dialog to be destroyed.
        supportedLinksDialog =
            supportedLinksItem.shadowRoot.querySelector('#dialog');
        assertNull(supportedLinksDialog);
    });
    test('supports focus-existing / navigate-existing custom labels when feature enabled', async () => {
        loadTimeData.overrideValues({
            updateAppStringsOnSettingsEnabled: true,
            appManagementIntentSharingOpenExistingTabLabel: 'Open in an existing $1 tab',
            appManagementIntentSharingOpenNewTabLabel: 'Open in a new browser tab',
        });
        const appOptions = {
            type: AppType.kWeb,
            isPreferredApp: true,
            windowMode: WindowMode.kBrowser,
            disableUserChoiceNavigationCapturing: false,
            supportedLinks: ['google.com'],
            title: 'MyApp',
        };
        await setUpSupportedLinksComponent('app1', appOptions);
        const preferredRadio = supportedLinksItem.$.preferredRadioButton;
        assertEquals('Open in an existing MyApp tab', preferredRadio.label);
        const browserRadio = supportedLinksItem.$.browserRadioButton;
        assertEquals('Open in a new browser tab', browserRadio.label);
    });
    test('fallback to default labels when feature disabled', async () => {
        loadTimeData.overrideValues({
            updateAppStringsOnSettingsEnabled: false,
        });
        const appOptions = {
            type: AppType.kWeb,
            isPreferredApp: true,
            windowMode: WindowMode.kBrowser,
            disableUserChoiceNavigationCapturing: false,
            supportedLinks: ['google.com'],
            title: 'MyApp',
        };
        await setUpSupportedLinksComponent('app1', appOptions);
        const preferredRadio = supportedLinksItem.$.preferredRadioButton;
        assertEquals('Open in MyApp App', preferredRadio.label);
    });
});
