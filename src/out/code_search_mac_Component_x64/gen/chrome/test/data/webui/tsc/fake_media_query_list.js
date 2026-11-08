// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Fake MediaQueryList used in mocking response of |window.matchMedia|.
export class FakeMediaQueryList extends EventTarget {
    matches_ = false;
    media_;
    constructor(media) {
        super();
        this.media_ = media;
    }
    addListener(_listener) { }
    removeListener(_listener) { }
    onchange(_e) { }
    notifyListeners_() {
        const event = new MediaQueryListEvent('change', { media: this.media_, matches: this.matches_ });
        this.dispatchEvent(event);
    }
    get media() {
        return this.media_;
    }
    get matches() {
        return this.matches_;
    }
    set matches(matches) {
        if (this.matches_ !== matches) {
            this.matches_ = matches;
            this.notifyListeners_();
        }
    }
}
