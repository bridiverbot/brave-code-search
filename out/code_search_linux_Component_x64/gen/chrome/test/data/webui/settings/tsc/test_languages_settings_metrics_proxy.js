// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// clang-format on
export class TestLanguageSettingsMetricsProxy extends TestBrowserProxy {
    constructor() {
        super(['recordSettingsMetric', 'recordPageImpressionMetric']);
    }
    recordSettingsMetric(interaction) {
        this.methodCalled('recordSettingsMetric', interaction);
    }
    recordPageImpressionMetric(interaction) {
        this.methodCalled('recordPageImpressionMetric', interaction);
    }
}
