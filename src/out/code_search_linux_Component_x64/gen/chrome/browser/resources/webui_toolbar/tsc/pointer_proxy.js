// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class PointerProxyImpl {
    setPointerCapture(el, pointerId) {
        el.setPointerCapture(pointerId);
    }
    releasePointerCapture(el, pointerId) {
        el.releasePointerCapture(pointerId);
    }
    static getInstance() {
        return instance || (instance = new PointerProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
