// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { SignInPromoPageCallbackRouter, SignInPromoPageHandlerRemote } from 'chrome://intro/sign_in_promo.mojom-webui.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { FakeMediaQueryList } from 'chrome://webui-test/fake_media_query_list.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
export class TestSignInPromoBrowserProxy {
    callbackRouter;
    handler;
    page;
    mediaQueryList_ = new FakeMediaQueryList('dummy');
    disclaimerResolver_ = new PromiseResolver();
    constructor() {
        this.callbackRouter = new SignInPromoPageCallbackRouter();
        this.handler = TestMock.fromClass(SignInPromoPageHandlerRemote);
        this.page = this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.handler.setResultFor('getManagedDeviceDisclaimer', this.disclaimerResolver_.promise);
    }
    resolveDisclaimer(disclaimer) {
        this.disclaimerResolver_.resolve({ disclaimer });
    }
    matchMedia(_query) {
        return this.mediaQueryList_;
    }
    setMatchMediaMatches(matches) {
        this.mediaQueryList_.matches = matches;
    }
}
