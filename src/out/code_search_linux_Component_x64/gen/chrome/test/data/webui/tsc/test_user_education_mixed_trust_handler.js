// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from './test_browser_proxy.js';
export class TestUserEducationMixedTrustHandler extends TestBrowserProxy {
    showNewBadgeResponses_ = new Map();
    constructor() {
        super([
            'notifyFeaturePromoFeatureUsed',
            'notifyAdditionalConditionEvent',
            'notifyNewBadgeFeatureUsed',
            'maybeShowFeaturePromo',
            'maybeShowNewBadgeFor',
        ]);
    }
    maybeShowFeaturePromo(params) {
        this.methodCalled('maybeShowFeaturePromo', params);
    }
    notifyFeaturePromoFeatureUsed(featureName, action) {
        this.methodCalled('notifyFeaturePromoFeatureUsed', { featureName, action });
    }
    notifyAdditionalConditionEvent(name) {
        this.methodCalled('notifyAdditionalConditionEvent', name);
    }
    notifyNewBadgeFeatureUsed(featureName) {
        this.methodCalled('notifyNewBadgeFeatureUsed', featureName);
    }
    setNewBadgeResponse(featureName, response) {
        this.showNewBadgeResponses_.set(featureName, response);
    }
    maybeShowNewBadgeFor(featureName) {
        this.methodCalled('maybeShowNewBadgeFor', featureName);
        return Promise.resolve({ shouldShow: this.showNewBadgeResponses_.get(featureName) || false });
    }
}
