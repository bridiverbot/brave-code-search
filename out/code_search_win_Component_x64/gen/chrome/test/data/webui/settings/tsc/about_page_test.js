// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AboutPageBrowserProxyImpl, LifetimeBrowserProxyImpl, loadTimeData, Router, routes } from 'chrome://settings/settings.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestAboutPageBrowserProxy } from './test_about_page_browser_proxy.js';
import { TestLifetimeBrowserProxy } from './test_lifetime_browser_proxy.js';
// 
// 
// 
import { UpdateStatus } from 'chrome://settings/settings.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { assertNotEquals } from 'chrome://webui-test/chai_assert.js';
import { isVisible, eventToPromise } from 'chrome://webui-test/test_util.js';
// 
// clang-format on
// 
function fireStatusChanged(status, options = {}) {
    webUIListenerCallback('update-status-changed', {
        progress: options.progress === undefined ? 1 : options.progress,
        message: options.message,
        status: status,
    });
}
// 
suite('AllBuilds', function () {
    let page;
    let aboutBrowserProxy;
    let lifetimeBrowserProxy;
    setup(function () {
        loadTimeData.overrideValues({
            aboutObsoleteNowOrSoon: false,
            aboutObsoleteEndOfTheLine: false,
        });
        lifetimeBrowserProxy = new TestLifetimeBrowserProxy();
        LifetimeBrowserProxyImpl.setInstance(lifetimeBrowserProxy);
        aboutBrowserProxy = new TestAboutPageBrowserProxy();
        AboutPageBrowserProxyImpl.setInstance(aboutBrowserProxy);
        return initNewPage();
    });
    teardown(function () {
        page.remove();
    });
    async function initNewPage() {
        aboutBrowserProxy.reset();
        lifetimeBrowserProxy.reset();
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        page = document.createElement('settings-about-page');
        Router.getInstance().navigateTo(routes.ABOUT);
        document.body.appendChild(page);
        await microtasksFinished();
        // 
        // 
        await aboutBrowserProxy.whenCalled('refreshUpdateStatus');
        await microtasksFinished();
        // 
    }
    // 
    const SPINNER_ICON = 'chrome://resources/images/throbber_small.svg';
    async function assertSpinnerVisible(visible) {
        const img = page.shadowRoot.querySelector(`img[src='${SPINNER_ICON}']`);
        assertTrue(!!img);
        if (img.complete) {
            assertEquals(visible, isVisible(img));
            return;
        }
        await eventToPromise('load', img);
        assertEquals(visible, isVisible(img));
    }
    /**
     * Test that the status icon and status message update according to
     * incoming 'update-status-changed' events.
     */
    test('IconAndMessageUpdates', async function () {
        const icon = page.shadowRoot.querySelector('cr-icon');
        assertTrue(!!icon);
        const statusMessageEl = page.shadowRoot.querySelector('#updateStatusMessage div');
        let previousMessageText = statusMessageEl.textContent;
        fireStatusChanged(UpdateStatus.CHECKING);
        await microtasksFinished();
        await assertSpinnerVisible(true);
        assertEquals('', icon.getAttribute('icon'));
        assertNotEquals(previousMessageText, statusMessageEl.textContent);
        previousMessageText = statusMessageEl.textContent;
        fireStatusChanged(UpdateStatus.UPDATING, { progress: 0 });
        await microtasksFinished();
        await assertSpinnerVisible(true);
        assertEquals('', icon.getAttribute('icon'));
        assertFalse(statusMessageEl.textContent.includes('%'));
        assertNotEquals(previousMessageText, statusMessageEl.textContent);
        previousMessageText = statusMessageEl.textContent;
        fireStatusChanged(UpdateStatus.UPDATING, { progress: 1 });
        await microtasksFinished();
        assertNotEquals(previousMessageText, statusMessageEl.textContent);
        assertTrue(statusMessageEl.textContent.includes('%'));
        previousMessageText = statusMessageEl.textContent;
        fireStatusChanged(UpdateStatus.NEARLY_UPDATED);
        await microtasksFinished();
        await assertSpinnerVisible(false);
        assertEquals('cr:check-circle', icon.icon);
        assertNotEquals(previousMessageText, statusMessageEl.textContent);
        previousMessageText = statusMessageEl.textContent;
        fireStatusChanged(UpdateStatus.DISABLED_BY_ADMIN);
        await microtasksFinished();
        await assertSpinnerVisible(false);
        assertEquals('cr20:domain', icon.icon);
        assertEquals(0, statusMessageEl.textContent.trim().length);
        fireStatusChanged(UpdateStatus.FAILED);
        await microtasksFinished();
        await assertSpinnerVisible(false);
        assertEquals('cr:error-filled', icon.icon);
        assertEquals(0, statusMessageEl.textContent.trim().length);
        fireStatusChanged(UpdateStatus.DISABLED);
        await microtasksFinished();
        await assertSpinnerVisible(false);
        assertEquals('', icon.getAttribute('icon'));
        assertEquals(0, statusMessageEl.textContent.trim().length);
    });
    test('ErrorMessageWithHtml', async function () {
        const htmlError = 'hello<br>there<br>was<pre>an</pre>error';
        fireStatusChanged(UpdateStatus.FAILED, { message: htmlError });
        await microtasksFinished();
        const statusMessageEl = page.shadowRoot.querySelector('#updateStatusMessage div');
        assertEquals(htmlError, statusMessageEl.innerHTML);
    });
    test('FailedLearnMoreLink', async function () {
        // Check that link is shown when update failed.
        fireStatusChanged(UpdateStatus.FAILED, { message: 'foo' });
        await microtasksFinished();
        assertTrue(!!page.shadowRoot.querySelector('#updateStatusMessage a:not([hidden])'));
        // Check that link is hidden when update hasn't failed.
        fireStatusChanged(UpdateStatus.UPDATED, { message: '' });
        await microtasksFinished();
        assertTrue(!!page.shadowRoot.querySelector('#updateStatusMessage a[hidden]'));
    });
    /**
     * Test that when the current platform has been marked as deprecated
     * (but not end of the line) a deprecation warning message is displayed,
     * without interfering with the update status message and icon.
     */
    test('ObsoleteSystem', async () => {
        loadTimeData.overrideValues({
            aboutObsoleteNowOrSoon: true,
            aboutObsoleteEndOfTheLine: false,
        });
        await initNewPage();
        const icon = page.shadowRoot.querySelector('cr-icon');
        assertTrue(!!icon);
        assertTrue(!!page.$.updateStatusMessage);
        assertTrue(!!page.$.deprecationWarning);
        assertFalse(page.$.deprecationWarning.hidden);
        fireStatusChanged(UpdateStatus.CHECKING);
        await microtasksFinished();
        await assertSpinnerVisible(true);
        assertEquals('', icon.getAttribute('icon'));
        assertFalse(page.$.deprecationWarning.hidden);
        assertFalse(page.$.updateStatusMessage.hidden);
        fireStatusChanged(UpdateStatus.UPDATING);
        await microtasksFinished();
        await assertSpinnerVisible(true);
        assertEquals('', icon.getAttribute('icon'));
        assertFalse(page.$.deprecationWarning.hidden);
        assertFalse(page.$.updateStatusMessage.hidden);
        fireStatusChanged(UpdateStatus.NEARLY_UPDATED);
        await microtasksFinished();
        await assertSpinnerVisible(false);
        assertEquals('cr:check-circle', icon.icon);
        assertFalse(page.$.deprecationWarning.hidden);
        assertFalse(page.$.updateStatusMessage.hidden);
    });
    /**
     * Test that when the current platform has reached the end of the line,
     * a deprecation warning message and an error icon is displayed.
     */
    test('ObsoleteSystemEndOfLine', async () => {
        loadTimeData.overrideValues({
            aboutObsoleteNowOrSoon: true,
            aboutObsoleteEndOfTheLine: true,
        });
        await initNewPage();
        const icon = page.shadowRoot.querySelector('cr-icon');
        assertTrue(!!icon);
        assertTrue(!!page.$.deprecationWarning);
        assertTrue(!!page.$.updateStatusMessage);
        assertFalse(page.$.deprecationWarning.hidden);
        assertTrue(page.$.updateStatusMessage.hidden);
        fireStatusChanged(UpdateStatus.CHECKING);
        await microtasksFinished();
        await assertSpinnerVisible(false);
        assertEquals('cr:error-filled', icon.icon);
        assertFalse(page.$.deprecationWarning.hidden);
        assertTrue(page.$.updateStatusMessage.hidden);
        fireStatusChanged(UpdateStatus.FAILED);
        await microtasksFinished();
        await assertSpinnerVisible(false);
        assertEquals('cr:error-filled', icon.icon);
        assertFalse(page.$.deprecationWarning.hidden);
        assertTrue(page.$.updateStatusMessage.hidden);
        fireStatusChanged(UpdateStatus.UPDATED);
        await microtasksFinished();
        await assertSpinnerVisible(false);
        assertEquals('cr:error-filled', icon.icon);
        assertFalse(page.$.deprecationWarning.hidden);
        assertTrue(page.$.updateStatusMessage.hidden);
    });
    test('Relaunch', async function () {
        let relaunch = page.shadowRoot.querySelector('#relaunch');
        assertTrue(!!relaunch);
        assertTrue(relaunch.hidden);
        fireStatusChanged(UpdateStatus.NEARLY_UPDATED);
        await microtasksFinished();
        assertFalse(relaunch.hidden);
        relaunch = page.shadowRoot.querySelector('#relaunch');
        assertTrue(!!relaunch);
        relaunch.click();
        return lifetimeBrowserProxy.whenCalled('relaunch');
    });
    /*
     * Test that the "Relaunch" button updates according to incoming
     * 'update-status-changed' events.
     */
    test('ButtonsUpdate', async function () {
        const relaunch = page.shadowRoot.querySelector('#relaunch');
        assertTrue(!!relaunch);
        fireStatusChanged(UpdateStatus.CHECKING);
        await microtasksFinished();
        assertTrue(relaunch.hidden);
        fireStatusChanged(UpdateStatus.UPDATING);
        await microtasksFinished();
        assertTrue(relaunch.hidden);
        fireStatusChanged(UpdateStatus.NEARLY_UPDATED);
        await microtasksFinished();
        assertFalse(relaunch.hidden);
        fireStatusChanged(UpdateStatus.UPDATED);
        await microtasksFinished();
        assertTrue(relaunch.hidden);
        fireStatusChanged(UpdateStatus.FAILED);
        await microtasksFinished();
        assertTrue(relaunch.hidden);
        fireStatusChanged(UpdateStatus.DISABLED);
        await microtasksFinished();
        assertTrue(relaunch.hidden);
        fireStatusChanged(UpdateStatus.DISABLED_BY_ADMIN);
        await microtasksFinished();
        assertTrue(relaunch.hidden);
    });
    // 
    // 
    test('GetHelp', function () {
        assertTrue(!!page.shadowRoot.querySelector('#help'));
        page.shadowRoot.querySelector('#help').click();
        return aboutBrowserProxy.whenCalled('openHelpPage');
    });
    test('searchContents', async function () {
        let result = await page.searchContents('foo');
        assertFalse(result.canceled);
        assertEquals(0, result.matchCount);
        assertFalse(result.wasClearSearch);
        result = await page.searchContents('');
        assertFalse(result.canceled);
        assertEquals(0, result.matchCount);
        assertTrue(result.wasClearSearch);
    });
});
// 
