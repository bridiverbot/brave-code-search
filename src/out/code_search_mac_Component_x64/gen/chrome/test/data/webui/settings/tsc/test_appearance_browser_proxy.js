// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestAppearanceBrowserProxy extends TestBrowserProxy {
    defaultZoom_ = 1;
    isChildAccount_ = false;
    isHomeUrlValid_ = true;
    pinnedToolbarActionsAreDefaultResponse_ = true;
    constructor() {
        super([
            'getDefaultZoom',
            'getThemeInfo',
            'isChildAccount',
            'openCustomizeChrome',
            'openCustomizeChromeToolbarSection',
            'recordGlassFrameEnabledChanged',
            'recordHoverCardImagesEnabledChanged',
            'recordHoverCardMemoryUsageEnabledChanged',
            'recordVerticalTabStripModeChanged',
            'resetPinnedToolbarActions',
            'useDefaultTheme',
            // 
            'validateStartupPage',
            'pinnedToolbarActionsAreDefault',
        ]);
    }
    getDefaultZoom() {
        this.methodCalled('getDefaultZoom');
        return Promise.resolve(this.defaultZoom_);
    }
    getThemeInfo(themeId) {
        this.methodCalled('getThemeInfo', themeId);
        return Promise.resolve({
            id: '',
            name: 'Sports car red',
            shortName: '',
            description: '',
            version: '',
            mayDisable: false,
            enabled: false,
            isApp: false,
            offlineEnabled: false,
            optionsUrl: '',
            permissions: [],
            hostPermissions: [],
        });
    }
    isChildAccount() {
        this.methodCalled('isChildAccount');
        return this.isChildAccount_;
    }
    openCustomizeChrome() {
        this.methodCalled('openCustomizeChrome');
    }
    openCustomizeChromeToolbarSection() {
        this.methodCalled('openCustomizeChromeToolbarSection');
    }
    recordGlassFrameEnabledChanged(enabled) {
        this.methodCalled('recordGlassFrameEnabledChanged', enabled);
    }
    recordHoverCardImagesEnabledChanged(enabled) {
        this.methodCalled('recordHoverCardImagesEnabledChanged', enabled);
    }
    recordHoverCardMemoryUsageEnabledChanged(enabled) {
        this.methodCalled('recordHoverCardMemoryUsageEnabledChanged', enabled);
    }
    recordVerticalTabStripModeChanged(enabled) {
        this.methodCalled('recordVerticalTabStripModeChanged', enabled);
    }
    resetPinnedToolbarActions() {
        this.methodCalled('resetPinnedToolbarActions');
    }
    useDefaultTheme() {
        this.methodCalled('useDefaultTheme');
    }
    // 
    setDefaultZoom(defaultZoom) {
        this.defaultZoom_ = defaultZoom;
    }
    setIsChildAccount(isChildAccount) {
        this.isChildAccount_ = isChildAccount;
    }
    validateStartupPage(url) {
        this.methodCalled('validateStartupPage', url);
        return Promise.resolve(this.isHomeUrlValid_);
    }
    setValidStartupPageResponse(isValid) {
        this.isHomeUrlValid_ = isValid;
    }
    pinnedToolbarActionsAreDefault() {
        this.methodCalled('pinnedToolbarActionsAreDefault');
        return Promise.resolve(this.pinnedToolbarActionsAreDefaultResponse_);
    }
    setPinnedToolbarActionsAreDefaultResponse(areDefault) {
        this.pinnedToolbarActionsAreDefaultResponse_ = areDefault;
    }
}
