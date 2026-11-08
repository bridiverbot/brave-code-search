// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class Debouncer {
    duration_ = 0;
    timeoutId_ = -1;
    constructor(duration) {
        this.duration_ = duration;
    }
    clear() {
        if (this.timeoutId_ !== -1) {
            clearTimeout(this.timeoutId_);
            this.timeoutId_ = -1;
        }
    }
    call(fn) {
        this.clear();
        this.timeoutId_ = setTimeout(() => {
            this.timeoutId_ = -1;
            fn();
        }, this.duration_);
    }
}
