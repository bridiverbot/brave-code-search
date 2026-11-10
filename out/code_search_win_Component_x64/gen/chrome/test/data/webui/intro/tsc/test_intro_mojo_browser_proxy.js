// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { IntroPageCallbackRouter } from 'chrome://intro/intro.mojom-webui.js';
import { FakeMediaQueryList } from 'chrome://webui-test/fake_media_query_list.js';
export class TestIntroMojoBrowserProxy {
    callbackRouter = new IntroPageCallbackRouter();
    mediaQueryList_ = new FakeMediaQueryList('dummy');
    matchMedia(_query) {
        return this.mediaQueryList_;
    }
    setMatchMediaMatches(matches) {
        this.mediaQueryList_.matches = matches;
    }
}
