// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
/** Abstracts some builtin JS functions to mock them in tests. */
export class WindowProxy {
    static getInstance() {
        return instance || (instance = new WindowProxy());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
    /** Returns `window.location.href` wrapped in a URL object. */
    get url() {
        return new URL(window.location.href);
    }
}
