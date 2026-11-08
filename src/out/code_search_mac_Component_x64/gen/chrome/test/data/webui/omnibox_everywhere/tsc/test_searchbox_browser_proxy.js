// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter as OmniboxEverywherePageCallbackRouter, PageHandlerRemote as OmniboxEverywherePageHandlerRemote } from 'chrome://omnibox-everywhere.top-chrome/omnibox_everywhere.mojom-webui.js';
import { PageCallbackRouter as SearchboxPageCallbackRouter, PageHandlerRemote as SearchboxPageHandlerRemote } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
export function createDefaultInputState() {
    return {
        allowedModels: [],
        allowedTools: [],
        allowedInputTypes: [],
        activeModel: 0, // kUnspecified
        activeTool: 0, // kUnspecified
        disabledModels: [],
        disabledTools: [],
        disabledInputTypes: [],
        toolConfigs: [],
        modelConfigs: [],
        inputTypeConfigs: [],
        toolsSectionConfig: null,
        modelSectionConfig: null,
        hintText: '',
        maxInputsByType: {},
        maxTotalInputs: 0,
        isCanvasQuerySubmitted: false,
        willFulfillInAim: true,
    };
}
export class TestSearchboxBrowserProxy {
    callbackRouter;
    handler;
    page;
    constructor() {
        this.callbackRouter = new SearchboxPageCallbackRouter();
        this.page = this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.handler = TestMock.fromClass(SearchboxPageHandlerRemote);
        this.handler.setPromiseResolveFor('getRecentTabs', { tabs: [] });
        this.handler.setPromiseResolveFor('getInputState', {
            state: createDefaultInputState(),
        });
        this.handler.setPromiseResolveFor('getSmartTabSharingActive', { active: false });
        this.handler.setPromiseResolveFor('resetSmartTabSharing', { active: false });
        this.handler.setPromiseResolveFor('getPageClassification', { metricSource: 'OMNIBOX_EVERYWHERE' });
        this.handler.setPromiseResolveFor('startScreenshare', { token: null });
        this.handler.setPromiseResolveFor('captureRegionScreenshot', { token: null });
        this.handler.setPromiseResolveFor('showHotkeyDropdown', undefined);
    }
    initVisibilityPrefs() {
        this.page.updateAimPopupEligibility(true);
        this.page.updateContentSharingPolicy(true);
    }
}
export class TestOmniboxEverywhereBrowserProxy {
    callbackRouter;
    handler;
    page;
    constructor() {
        this.callbackRouter = new OmniboxEverywherePageCallbackRouter();
        this.page = this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.handler = TestMock.fromClass(OmniboxEverywherePageHandlerRemote);
    }
}
