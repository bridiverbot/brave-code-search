// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class MatchMediaProxyImpl {
    matchMedia(query) {
        return window.matchMedia(query);
    }
    static getInstance() {
        return instance || (instance = new MatchMediaProxyImpl());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
}
let instance = null;
