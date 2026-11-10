// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export const TEST_NOTEBOOK_HOME_URL = 'https://example.com';
export class TestNotebooksInternalsPageHandler extends TestBrowserProxy {
    featureFlagState = {
        notebooksFeatureEnabled: true,
        notebookHomeUrl: TEST_NOTEBOOK_HOME_URL,
    };
    profileEligibility = {
        userEligible: true,
    };
    constructor() {
        super([
            'getFeatureFlagState',
            'getProfileEligibility',
        ]);
    }
    setFeatureFlagState(flags) {
        this.featureFlagState = flags;
    }
    setProfileEligibility(eligibility) {
        this.profileEligibility = eligibility;
    }
    getFeatureFlagState() {
        this.methodCalled('getFeatureFlagState');
        return Promise.resolve({ flags: this.featureFlagState });
    }
    getProfileEligibility() {
        this.methodCalled('getProfileEligibility');
        return Promise.resolve({ eligibility: this.profileEligibility });
    }
}
