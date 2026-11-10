// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { outlookCalendarDescriptor, OutlookCalendarProxyImpl, ParentTrustedDocumentProxy } from 'chrome://new-tab-page/lazy_load.js';
import { MicrosoftAuthUntrustedDocumentRemote, OutlookCalendarPageHandlerRemote } from 'chrome://new-tab-page/new_tab_page.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { assertEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { eventToPromise, isVisible } from 'chrome://webui-test/test_util.js';
import { installMock } from '../../test_support.js';
import { createEvents } from './test_support.js';
suite('NewTabPageModulesOutlookCalendarModuleTest', () => {
    const title = 'Outlook Calendar';
    let childDocument;
    let handler;
    let module;
    setup(() => {
        loadTimeData.overrideValues({
            modulesOutlookCalendarTitle: title,
        });
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        handler = installMock(OutlookCalendarPageHandlerRemote, mock => OutlookCalendarProxyImpl.setInstance(new OutlookCalendarProxyImpl(mock)));
        childDocument = installMock(MicrosoftAuthUntrustedDocumentRemote, mock => ParentTrustedDocumentProxy.setInstance(mock));
    });
    test('creates module', async () => {
        handler.setPromiseResolveFor('getEvents', { events: createEvents(1) });
        module = await outlookCalendarDescriptor.initialize(0);
        assertTrue(!!module);
        document.body.append(module);
        // Assert.
        assertTrue(isVisible(module.$.moduleHeader));
        assertEquals(module.$.moduleHeader.headerText, title);
    });
    test('module not created when there are no events', async () => {
        handler.setPromiseResolveFor('getEvents', { events: createEvents(0) });
        module = await outlookCalendarDescriptor.initialize(0);
        assertEquals(module, null);
    });
    test('clicking the disable button fires a disable module event', async () => {
        // Arrange.
        handler.setPromiseResolveFor('getEvents', { events: createEvents(1) });
        module = await outlookCalendarDescriptor.initialize(0);
        assertTrue(!!module);
        document.body.append(module);
        // Act.
        const whenFired = eventToPromise('disable-module', module);
        const disableButton = module.$.moduleHeader.shadowRoot.querySelector('#disable');
        assertTrue(!!disableButton);
        disableButton.click();
        // Assert.
        const event = await whenFired;
        assertEquals(('You won\'t see Outlook Calendar on this page again'), event.detail.message);
    });
    test('clicking the sign out button sends sign out request', async () => {
        // Arrange.
        handler.setPromiseResolveFor('getEvents', { events: createEvents(1) });
        module = await outlookCalendarDescriptor.initialize(0);
        assertTrue(!!module);
        document.body.append(module);
        // Act.
        const signoutButton = module.$.moduleHeader.shadowRoot.querySelector('#signout');
        assertTrue(!!signoutButton);
        signoutButton.click();
        // Assert.
        assertEquals(1, childDocument.getCallCount('signOut'));
    });
});
