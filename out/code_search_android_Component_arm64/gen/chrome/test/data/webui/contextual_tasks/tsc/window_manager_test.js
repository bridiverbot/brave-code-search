// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BrowserProxyImpl } from 'chrome://contextual-tasks/contextual_tasks_browser_proxy.js';
import { WindowManager } from 'chrome://contextual-tasks/window_manager.js';
import { assertEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestContextualTasksBrowserProxy } from './test_contextual_tasks_browser_proxy.js';
import { fixtureUrl } from './contextual_tasks_test_utils.js';
suite('WindowManagerTest', () => {
    let windowManager;
    let mockMainWebview;
    let newWindowCallback = null;
    let proxy;
    setup(async () => {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        proxy = new TestContextualTasksBrowserProxy(fixtureUrl);
        BrowserProxyImpl.setInstance(proxy);
        mockMainWebview = {
            addEventListener: (type, callback) => {
                if (type === 'newwindow') {
                    newWindowCallback = callback;
                }
            },
        };
        windowManager =
            new WindowManager(mockMainWebview);
        assertTrue(!!windowManager);
        await microtasksFinished();
    });
    test('creates mock webview on newwindow event', () => {
        assertTrue(newWindowCallback !== null);
        let preventDefaultCalled = false;
        let attachCalled = false;
        let attachedWebview = null;
        const mockEvent = {
            preventDefault: () => {
                preventDefaultCalled = true;
            },
            window: {
                attach: (webview) => {
                    attachCalled = true;
                    attachedWebview = webview;
                },
            },
        };
        newWindowCallback(mockEvent);
        assertTrue(preventDefaultCalled);
        assertTrue(attachCalled);
        assertTrue(attachedWebview !== null);
        // Verify it was added to DOM
        const webviews = document.querySelectorAll('webview');
        assertEquals(1, webviews.length);
        assertEquals(attachedWebview, webviews[0]);
        const attachedWebviewNonNull = attachedWebview;
        assertEquals('persist:contextual-tasks', attachedWebviewNonNull.partition);
        assertEquals('none', attachedWebviewNonNull.style.display);
    });
    test('removes webview on close event', async () => {
        assertTrue(newWindowCallback !== null);
        const mockEvent = {
            preventDefault: () => { },
            window: {
                attach: (_webview) => { },
            },
        };
        newWindowCallback(mockEvent);
        const webviews = document.querySelectorAll('webview');
        assertEquals(1, webviews.length);
        const attachedWebview = webviews[0];
        // Simulate close event
        attachedWebview.dispatchEvent(new Event('close'));
        await microtasksFinished();
        const webviewsAfterClose = document.querySelectorAll('webview');
        assertEquals(0, webviewsAfterClose.length);
    });
    test('newwindow event registers window', async () => {
        assertTrue(newWindowCallback !== null);
        const mockEvent = {
            preventDefault: () => { },
            targetUrl: 'https://example.com/popup',
            window: {
                attach: (_webview) => { },
            },
        };
        const testUrl = new URL(window.location.href);
        testUrl.searchParams.set('chrome_task_id', '1234');
        window.history.replaceState({}, '', testUrl.href);
        newWindowCallback(mockEvent);
        const [, url, windowId] = await proxy.handler.whenCalled('registerWindow');
        assertEquals('https://example.com/popup', url);
        assertTrue(!!windowId.value);
    });
});
