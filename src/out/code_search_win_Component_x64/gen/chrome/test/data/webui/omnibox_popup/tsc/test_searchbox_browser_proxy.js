// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter as SearchboxPageCallbackRouter, PageHandlerRemote as SearchboxPageHandlerRemote } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
export function createDefaultInputState() {
    return {
        allowedModels: [],
        allowedTools: [],
        allowedInputTypes: [],
        activeModel: 0,
        activeTool: 0,
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
        this.handler.setPromiseResolveFor('getPageClassification', { metricSource: '' });
        this.handler.setPromiseResolveFor('startScreenshare', { token: null });
        this.handler.setPromiseResolveFor('captureRegionScreenshot', { token: null });
    }
    initVisibilityPrefs() {
        this.page.updateAimPopupEligibility(true);
        this.page.updateContentSharingPolicy(true);
    }
}
