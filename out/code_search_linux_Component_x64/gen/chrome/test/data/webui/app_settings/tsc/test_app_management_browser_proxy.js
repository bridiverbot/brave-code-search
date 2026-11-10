// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class FakePageHandler extends TestBrowserProxy {
    app_;
    page_ = null;
    overlappingApps_ = [];
    apps_ = [];
    defaultAppAssociationsShown_ = false;
    constructor(app) {
        super([
            'setPreferredApp',
            'getOverlappingPreferredApps',
            'checkForIsolatedWebAppUpdate',
            'applyIsolatedWebAppUpdate',
            'getNumWindowsForApp',
        ]);
        this.app_ = app;
    }
    setPage(page) {
        this.page_ = page;
    }
    async flushPipesForTesting() {
        await this.page_.$.flushForTesting();
    }
    setOverlappingAppsForTesting(ids) {
        this.overlappingApps_ = ids;
    }
    // This is used to set the app for which the App Settings page
    // is being loaded.
    setApp(app) {
        this.app_ = app;
        this.apps_.push(app);
        this.page_.onAppChanged(this.app_);
    }
    // This is used to mimic the addition of more apps, which can
    // be taken into account for a few components, like the
    // supported links item.
    addApp(app) {
        this.apps_.push(app);
        this.page_.onAppChanged(app);
    }
    getApps() {
        return Promise.resolve({ apps: this.apps_ });
    }
    getApp(_appId) {
        return Promise.resolve({ app: this.app_ });
    }
    getSubAppToParentMap() {
        return Promise.resolve({ subAppToParentMap: {} });
    }
    getExtensionAppPermissionMessages(_appId) {
        return Promise.resolve({ messages: [] });
    }
    setPinned(_appId, _pinned) { }
    setPermission(_appId, permission) {
        this.app_.permissions[permission.permissionType] = permission;
        this.page_.onAppChanged(this.app_);
    }
    setResizeLocked(_appId, _locked) { }
    uninstall(_appId) { }
    updateAppSize(_appId) { }
    openNativeSettings(_appId) { }
    setWindowMode(_appId, windowMode) {
        this.app_.windowMode = windowMode;
        this.page_.onAppChanged(this.app_);
    }
    setAppLocale(_appId, _localeTag) { }
    setRunOnOsLoginMode(_appId, loginMode) {
        this.app_.runOnOsLogin.loginMode = loginMode;
        this.page_.onAppChanged(this.app_);
    }
    setFileHandlingEnabled(_appId, fileHandlingEnabled) {
        this.app_.fileHandlingState.enabled = fileHandlingEnabled;
        this.page_.onAppChanged(this.app_);
    }
    setPreferredApp(appId, isPreferredApp) {
        const app = this.apps_.find((app) => app.id === appId);
        assert(app);
        this.app_ = { ...app, isPreferredApp };
        this.page_.onAppChanged(this.app_);
        this.methodCalled('setPreferredApp');
    }
    getOverlappingPreferredApps(_appId) {
        this.methodCalled('getOverlappingPreferredApps');
        if (!this.overlappingApps_) {
            return Promise.resolve({ appIds: [] });
        }
        return Promise.resolve({ appIds: this.overlappingApps_ });
    }
    showDefaultAppAssociationsUi() {
        this.defaultAppAssociationsShown_ = true;
    }
    defaultAppAssociationsUiWasShown() {
        return this.defaultAppAssociationsShown_;
    }
    openStorePage(_appId) { }
    openSystemNotificationSettings(_appId) { }
    checkForIsolatedWebAppUpdate(_appId) {
        this.methodCalled('checkForIsolatedWebAppUpdate');
        return Promise.resolve({ updateVersion: null });
    }
    applyIsolatedWebAppUpdate(_appId) {
        this.methodCalled('applyIsolatedWebAppUpdate');
        return Promise.resolve({ success: true });
    }
    getNumWindowsForApp(_appId) {
        this.methodCalled('getNumWindowsForApp');
        return Promise.resolve({ numWindows: 0 });
    }
}
