// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export var Shortcut;
(function (Shortcut) {
    Shortcut["MAIN"] = "main";
    Shortcut["FOCUS_TOGGLE"] = "focusToggle";
})(Shortcut || (Shortcut = {}));
export class TestGlicBrowserProxy extends TestBrowserProxy {
    glicShortcutResponse_ = '';
    glicFocusToggleShortcutResponse_ = '';
    glicDisallowedByAdmin_ = false;
    webActuationToggleVisibilityResponse_ = false;
    webActuationEnabledResponse_ = false;
    experimentalTriggeringEnabledResponse_ = true;
    actorLoginPermissions_ = [];
    revokeActorLoginPermissionResponse_ = true;
    constructor() {
        super([
            'getActorLoginPermissions',
            'startObservingActorLoginPermissions',
            'stopObservingActorLoginPermissions',
            'revokeActorLoginPermission',
            'setGlicOsLauncherEnabled',
            'getGlicShortcut',
            'setGlicShortcut',
            'getGlicFocusToggleShortcut',
            'setGlicFocusToggleShortcut',
            'setShortcutSuspensionState',
            'getDisallowedByAdmin',
            'getWebActuationToggleVisibility',
            'getGlicSelectionShortcut',
            'setGlicSelectionShortcut',
            'getWebActuationEnabled',
            'setWebActuationEnabled',
            'getExperimentalTriggeringEnabled',
            'setExperimentalTriggeringEnabled',
            'onHotkeyScopeSettingsChange',
        ]);
    }
    reset() {
        super.reset();
        this.glicShortcutResponse_ = '';
        this.glicFocusToggleShortcutResponse_ = '';
        this.webActuationToggleVisibilityResponse_ = false;
        this.actorLoginPermissions_ = [];
        this.revokeActorLoginPermissionResponse_ = true;
    }
    setGlicOsLauncherEnabled(enabled) {
        this.methodCalled('setGlicOsLauncherEnabled', enabled);
    }
    setGlicShortcutResponse(response) {
        this.glicShortcutResponse_ = response;
    }
    setGlicFocusToggleShortcutResponse(response) {
        this.glicFocusToggleShortcutResponse_ = response;
    }
    setShortcutResponse(shortcut, response) {
        switch (shortcut) {
            case Shortcut.MAIN:
                this.setGlicShortcutResponse(response);
                break;
            case Shortcut.FOCUS_TOGGLE:
                this.setGlicFocusToggleShortcutResponse(response);
                break;
            default:
                break;
        }
    }
    getGlicShortcut() {
        this.methodCalled('getGlicShortcut');
        return Promise.resolve(this.glicShortcutResponse_);
    }
    setGlicShortcut(shortcut) {
        this.methodCalled('setGlicShortcut', shortcut);
        return Promise.resolve();
    }
    getGlicFocusToggleShortcut() {
        this.methodCalled('getGlicFocusToggleShortcut');
        return Promise.resolve(this.glicFocusToggleShortcutResponse_);
    }
    setGlicFocusToggleShortcut(shortcut) {
        this.methodCalled('setGlicFocusToggleShortcut', shortcut);
        return Promise.resolve();
    }
    setShortcutSuspensionState(shouldSuspend) {
        this.methodCalled('setShortcutSuspensionState', shouldSuspend);
    }
    getDisallowedByAdmin() {
        this.methodCalled('getDisallowedByAdmin');
        return Promise.resolve(this.glicDisallowedByAdmin_);
    }
    setDisallowedByAdmin(disallowed) {
        this.glicDisallowedByAdmin_ = disallowed;
    }
    getWebActuationToggleVisibility() {
        this.methodCalled('getWebActuationToggleVisibility');
        return Promise.resolve(this.webActuationToggleVisibilityResponse_);
    }
    setWebActuationToggleVisibilityResponse(visible) {
        this.webActuationToggleVisibilityResponse_ = visible;
    }
    getWebActuationEnabled() {
        this.methodCalled('getWebActuationEnabled');
        return Promise.resolve(this.webActuationEnabledResponse_);
    }
    setWebActuationEnabled(enabled) {
        this.methodCalled('setWebActuationEnabled', enabled);
    }
    setWebActuationEnabledResponse(enabled) {
        this.webActuationEnabledResponse_ = enabled;
    }
    getExperimentalTriggeringEnabled() {
        this.methodCalled('getExperimentalTriggeringEnabled');
        return Promise.resolve(this.experimentalTriggeringEnabledResponse_);
    }
    setExperimentalTriggeringEnabled(enabled) {
        this.methodCalled('setExperimentalTriggeringEnabled', enabled);
    }
    setExperimentalTriggeringEnabledResponse(enabled) {
        this.experimentalTriggeringEnabledResponse_ = enabled;
    }
    getActorLoginPermissions() {
        this.methodCalled('getActorLoginPermissions');
        return Promise.resolve(this.actorLoginPermissions_);
    }
    startObservingActorLoginPermissions() {
        this.methodCalled('startObservingActorLoginPermissions');
    }
    stopObservingActorLoginPermissions() {
        this.methodCalled('stopObservingActorLoginPermissions');
    }
    setActorLoginPermissions(permissions) {
        this.actorLoginPermissions_ = permissions;
    }
    setRevokeActorLoginPermissionResponse(success) {
        this.revokeActorLoginPermissionResponse_ = success;
    }
    revokeActorLoginPermission(signonRealm) {
        this.methodCalled('revokeActorLoginPermission', signonRealm);
        return Promise.resolve(this.revokeActorLoginPermissionResponse_);
    }
    getGlicSelectionShortcut() {
        this.methodCalled('getGlicSelectionShortcut');
        return Promise.resolve(this.glicShortcutResponse_);
    }
    setGlicSelectionShortcut(shortcut) {
        this.methodCalled('setGlicSelectionShortcut', shortcut);
        return Promise.resolve();
    }
    onHotkeyScopeSettingsChange(isGlobal) {
        this.methodCalled('onHotkeyScopeSettingsChange', isGlobal);
    }
}
