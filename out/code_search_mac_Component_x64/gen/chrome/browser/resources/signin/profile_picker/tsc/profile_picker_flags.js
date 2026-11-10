// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
export function isProfileCreationAllowed() {
    return loadTimeData.getBoolean('isProfileCreationAllowed');
}
export function isBrowserSigninAllowed() {
    return loadTimeData.getBoolean('isBrowserSigninAllowed');
}
export function isForceSigninEnabled() {
    return loadTimeData.getBoolean('isForceSigninEnabled');
}
export function isSignInProfileCreationSupported() {
    return loadTimeData.getBoolean('signInProfileCreationFlowSupported');
}
export function isAskOnStartupAllowed() {
    return loadTimeData.getBoolean('isAskOnStartupAllowed');
}
export function isGlicVersion() {
    return loadTimeData.getBoolean('isGlicVersion');
}
export function isUseRefreshedUI() {
    return loadTimeData.getBoolean('useRefreshedUI');
}
