// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from '../i18n_setup.js';
export class AppearanceBrowserProxyImpl {
    getDefaultZoom() {
        return chrome.settingsPrivate.getDefaultZoom();
    }
    getThemeInfo(themeId) {
        return chrome.management.get(themeId);
    }
    isChildAccount() {
        return loadTimeData.getBoolean('isChildAccount');
    }
    openCustomizeChrome() {
        chrome.send('openCustomizeChrome');
    }
    openCustomizeChromeToolbarSection() {
        chrome.send('openCustomizeChromeToolbarSection');
    }
    recordGlassFrameEnabledChanged(enabled) {
        chrome.metricsPrivate.recordBoolean('Settings.GlassFrame.Enabled', enabled);
    }
    recordHoverCardImagesEnabledChanged(enabled) {
        chrome.metricsPrivate.recordBoolean('Settings.HoverCards.ImagePreview.Enabled', enabled);
    }
    recordHoverCardMemoryUsageEnabledChanged(enabled) {
        chrome.metricsPrivate.recordBoolean('Settings.HoverCards.MemoryUsage.Enabled', enabled);
    }
    recordVerticalTabStripModeChanged(enabled) {
        chrome.send('recordVerticalTabStripModeChanged', [enabled]);
    }
    resetPinnedToolbarActions() {
        chrome.send('resetPinnedToolbarActions');
    }
    useDefaultTheme() {
        chrome.send('useDefaultTheme');
    }
    // 
    validateStartupPage(url) {
        return sendWithPromise('validateStartupPage', url);
    }
    pinnedToolbarActionsAreDefault() {
        return sendWithPromise('pinnedToolbarActionsAreDefault');
    }
    static getInstance() {
        return instance || (instance = new AppearanceBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
