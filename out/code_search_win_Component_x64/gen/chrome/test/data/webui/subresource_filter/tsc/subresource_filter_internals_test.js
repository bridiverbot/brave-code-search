// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://subresource-filter-internals/app.js';
import { BrowserProxy } from 'chrome://subresource-filter-internals/browser_proxy.js';
import { SubresourceFilterInternalsHandlerRemote, SubresourceFilterInternalsObserverCallbackRouter } from 'chrome://subresource-filter-internals/subresource_filter_internals.mojom-webui.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
class TestSubresourceFilterInternalsBrowserProxy {
    callbackRouter;
    handler;
    observer;
    constructor() {
        this.callbackRouter =
            new SubresourceFilterInternalsObserverCallbackRouter();
        this.handler = TestMock.fromClass(SubresourceFilterInternalsHandlerRemote);
        this.observer = this.callbackRouter.$.bindNewPipeAndPassRemote();
    }
}
suite('SubresourceFilterInternals', function () {
    let app;
    let testProxy;
    setup(function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        testProxy = new TestSubresourceFilterInternalsBrowserProxy();
        BrowserProxy.setInstance(testProxy);
        testProxy.handler.setResultFor('getInternalsPageSettings', Promise.resolve({
            settings: { shouldHighlightAds: false },
        }));
        app = document.createElement('subresource-internals-app');
        document.body.appendChild(app);
    });
    test('ToggleAdsHighlighting', async function () {
        // Initial fetch should be called.
        await testProxy.handler.whenCalled('getInternalsPageSettings');
        assertEquals(1, testProxy.handler.getCallCount('getInternalsPageSettings'));
        // Observer should be registered.
        await testProxy.handler.whenCalled('observeInternalsPageSettings');
        assertEquals(1, testProxy.handler.getCallCount('observeInternalsPageSettings'));
        const checkbox = app.shadowRoot.querySelector('#highlight-ads-checkbox');
        assertTrue(!!checkbox);
        assertFalse(checkbox.checked);
        // Click checkbox to toggle setting.
        checkbox.click();
        const settings = await testProxy.handler.whenCalled('setInternalsPageSettings');
        assertTrue(settings.shouldHighlightAds);
        // Checkbox UI should reflect the change.
        await microtasksFinished();
        assertTrue(checkbox.checked);
        // Simulate external change from observer.
        testProxy.observer.onInternalsPageSettingsChanged({ shouldHighlightAds: false });
        await microtasksFinished();
        assertFalse(checkbox.checked);
    });
});
