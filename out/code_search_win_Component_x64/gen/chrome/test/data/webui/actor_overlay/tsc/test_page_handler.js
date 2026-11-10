// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestActorOverlayPageHandler extends TestBrowserProxy {
    isBorderGlowVisible_ = false;
    constructor() {
        super(['onHoverStatusChanged', 'getCurrentBorderGlowVisibility']);
    }
    onHoverStatusChanged(isVisible) {
        this.methodCalled('onHoverStatusChanged', isVisible);
    }
    getCurrentBorderGlowVisibility() {
        this.methodCalled('getCurrentBorderGlowVisibility');
        return Promise.resolve({ isVisible: this.isBorderGlowVisible_ });
    }
    setBorderGlowVisibilityForTesting(isVisible) {
        this.isBorderGlowVisible_ = isVisible;
    }
}
