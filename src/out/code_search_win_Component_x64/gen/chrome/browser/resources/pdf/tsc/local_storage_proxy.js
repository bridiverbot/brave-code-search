// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class LocalStorageProxyImpl {
    getItem(key) {
        return window.localStorage ? window.localStorage.getItem(key) : null;
    }
    setItem(key, value) {
        if (window.localStorage) {
            window.localStorage.setItem(key, value);
        }
    }
    static getInstance() {
        return instance || (instance = new LocalStorageProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
