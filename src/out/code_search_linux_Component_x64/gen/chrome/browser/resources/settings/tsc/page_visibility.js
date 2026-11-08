// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from './i18n_setup.js';
function createPageVisibility() {
    if (!loadTimeData.getBoolean('isGuest')) {
        return undefined;
    }
    // 
    const pageVisibility = {
        a11y: false,
        ai: false,
        appearance: false,
        autofill: false,
        defaultBrowser: false,
        downloads: false,
        extensions: false,
        languages: false,
        onStartup: false,
        people: false,
        performance: false,
        privacy: false,
        reset: false,
        safetyHub: false,
        system: false,
        yourSavedInfo: false,
    };
    // 
    // 
    return pageVisibility;
}
/**
 * Dictionary defining page visibility.
 */
export let pageVisibility = createPageVisibility();
export function resetPageVisibilityForTesting(testVisibility = createPageVisibility()) {
    pageVisibility = testVisibility;
}
