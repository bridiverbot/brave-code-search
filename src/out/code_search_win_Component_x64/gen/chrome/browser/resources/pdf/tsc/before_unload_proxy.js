// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class BeforeUnloadProxyImpl {
    preventDefault(event) {
        event.preventDefault();
    }
    static getInstance() {
        return instance || (instance = new BeforeUnloadProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
