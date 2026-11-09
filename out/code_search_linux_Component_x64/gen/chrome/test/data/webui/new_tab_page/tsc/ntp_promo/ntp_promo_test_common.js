// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://new-tab-page/lazy_load.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestNtpPromoHandler extends TestBrowserProxy {
    constructor() {
        super([
            'requestPromos',
            'onPromoShown',
            'onPromoClicked',
            'onPromoDismissed',
        ]);
    }
    requestPromos() {
        this.methodCalled('requestPromos');
    }
    onPromoShown(eligible) {
        this.methodCalled('onPromoShown', eligible);
    }
    onPromoClicked(promoId) {
        this.methodCalled('onPromoClicked', promoId);
    }
    onPromoDismissed(promoId) {
        this.methodCalled('onPromoDismissed', promoId);
    }
}
