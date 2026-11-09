// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class GlicBrowserProxyImpl {
    setGlicOsLauncherEnabled(enabled) {
        chrome.send('setGlicOsLauncherEnabled', [enabled]);
    }
    getGlicShortcut() {
        return sendWithPromise('getGlicShortcut');
    }
    setGlicShortcut(shortcut) {
        return sendWithPromise('setGlicShortcut', shortcut);
    }
    getGlicFocusToggleShortcut() {
        return sendWithPromise('getGlicFocusToggleShortcut');
    }
    setGlicFocusToggleShortcut(shortcut) {
        return sendWithPromise('setGlicFocusToggleShortcut', shortcut);
    }
    setShortcutSuspensionState(shouldSuspend) {
        chrome.send('setShortcutSuspensionState', [shouldSuspend]);
    }
    getDisallowedByAdmin() {
        return sendWithPromise('getGlicDisallowedByAdmin');
    }
    getActorLoginPermissions() {
        return sendWithPromise('getActorLoginPermissions');
    }
    revokeActorLoginPermission(signonRealm, username) {
        return sendWithPromise('revokeActorLoginPermission', signonRealm, username);
    }
    getGlicSelectionShortcut() {
        return sendWithPromise('getGlicSelectionShortcut');
    }
    setGlicSelectionShortcut(shortcut) {
        return sendWithPromise('setGlicSelectionShortcut', shortcut);
    }
    getWebActuationToggleVisibility() {
        return sendWithPromise('getWebActuationToggleVisibility');
    }
    getWebActuationEnabled() {
        return sendWithPromise('getWebActuationEnabled');
    }
    setWebActuationEnabled(enabled) {
        chrome.send('setWebActuationEnabled', [enabled]);
    }
    getExperimentalTriggeringEnabled() {
        return sendWithPromise('getExperimentalTriggeringEnabled');
    }
    setExperimentalTriggeringEnabled(enabled) {
        chrome.send('setExperimentalTriggeringEnabled', [enabled]);
    }
    startObservingActorLoginPermissions() {
        chrome.send('startObservingActorLoginPermissions');
    }
    stopObservingActorLoginPermissions() {
        chrome.send('stopObservingActorLoginPermissions');
    }
    onHotkeyScopeSettingsChange(isGlobal) {
        chrome.send('onHotkeyScopeSettingsChange', [isGlobal]);
    }
    static getInstance() {
        return instance || (instance = new GlicBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
