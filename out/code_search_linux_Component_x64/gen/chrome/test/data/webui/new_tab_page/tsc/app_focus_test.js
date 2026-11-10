// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://new-tab-page/new_tab_page.js';
import { ComposeboxProxyImpl, ModuleRegistry } from 'chrome://new-tab-page/lazy_load.js';
import { CustomizeButtonsHandlerRemote } from 'chrome://new-tab-page/new_tab_page.js';
import { $$, BackgroundManager, customizeButtonsProxyFactory, newTabPageProxyFactory, SearchboxBrowserProxy, WindowProxy } from 'chrome://new-tab-page/new_tab_page.js';
import { PageHandlerRemote } from 'chrome://new-tab-page/new_tab_page.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { PageHandlerRemote as SearchboxPageHandlerRemote } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { fakeMetricsPrivate } from 'chrome://webui-test/metrics_test_support.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
import { assertStyle, createTheme, installMock } from './test_support.js';
suite('NewTabPageAppFocusTest', () => {
    let app;
    let windowProxy;
    let handler;
    let moduleRegistry;
    let moduleResolver;
    let backgroundManager;
    let callbackRouterRemote;
    let searchboxHandler;
    const url = new URL(location.href);
    const backgroundImageLoadTime = 123;
    suiteSetup(() => {
        loadTimeData.overrideValues({
            searchboxShowComposeEntrypoint: true,
            searchboxShowComposebox: true,
            ntpRealboxNextEnabled: true,
        });
    });
    setup(async () => {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        windowProxy = installMock(WindowProxy);
        windowProxy.setResultMapperFor('matchMedia', () => ({
            addListener() { },
            addEventListener() { },
            removeListener() { },
            removeEventListener() { },
        }));
        windowProxy.setPromiseResolveFor('waitForLazyRender');
        windowProxy.setPromiseResolveFor('ensureLazyLoaded');
        windowProxy.setResultFor('createIframeSrc', '');
        windowProxy.setResultFor('url', url);
        fakeMetricsPrivate();
        backgroundManager = installMock(BackgroundManager);
        backgroundManager.setPromiseResolveFor('getBackgroundImageLoadTime', backgroundImageLoadTime);
        handler = installMock(PageHandlerRemote, mock => {
            const { instance, remote } = newTabPageProxyFactory.createForTest(mock);
            newTabPageProxyFactory.setInstance(instance);
            callbackRouterRemote = remote;
        });
        handler.setPromiseResolveFor('getMostVisitedSettings', {
            customLinksEnabled: false,
            shortcutsVisible: false,
        });
        handler.setPromiseResolveFor('getDoodle', {
            doodle: null,
        });
        handler.setPromiseResolveFor('getModulesIdNames', { data: [] });
        handler.setPromiseResolveFor('canShowRealboxContextMenuAnimation', { canShow: false });
        installMock(CustomizeButtonsHandlerRemote, mock => customizeButtonsProxyFactory.setInstance(customizeButtonsProxyFactory.createForTest(mock).instance));
        moduleRegistry = installMock(ModuleRegistry);
        moduleResolver = new PromiseResolver();
        moduleRegistry.setResultFor('initializeModules', moduleResolver.promise);
        searchboxHandler = installMock(SearchboxPageHandlerRemote, mock => {
            ComposeboxProxyImpl.getInstance().searchboxHandler = mock;
            SearchboxBrowserProxy.getInstance().handler = mock;
        });
        searchboxHandler.setPromiseResolveFor('getRecentTabs', { tabs: [] });
        app = document.createElement('ntp-app');
        document.body.appendChild(app);
        await microtasksFinished();
    });
    function getScrim() {
        return app.shadowRoot.querySelector('#scrim');
    }
    test('A scrim is applied when the focus is on searchbox input', async () => {
        // Arrange.
        callbackRouterRemote.setTheme(createTheme());
        await callbackRouterRemote.$.flushForTesting();
        const scrim = getScrim();
        assertTrue(!!scrim);
        assertTrue(scrim.hidden);
        const searchbox = $$(app, '#searchbox');
        assertTrue(!!searchbox);
        await microtasksFinished();
        assertStyle($$(app, '#searchbox'), 'visibility', 'visible');
        const inputWrapper = searchbox.shadowRoot.getElementById('input');
        assertTrue(!!inputWrapper);
        const input = inputWrapper.shadowRoot.getElementById('input');
        assertTrue(!!input);
        input.focus();
        await microtasksFinished();
        assertFalse(scrim.hidden);
        input.blur();
        await microtasksFinished();
        assertTrue(scrim.hidden);
    });
});
