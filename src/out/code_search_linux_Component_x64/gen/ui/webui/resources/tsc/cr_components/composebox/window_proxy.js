// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Abstracts built-in JS functions in order to mock in tests.
 */
let instance = null;
export class WindowProxy {
    static getInstance() {
        return instance || (instance = new WindowProxy());
    }
    static setInstance(obj) {
        instance = obj;
    }
    setTimeout(callback, duration) {
        return window.setTimeout(callback, duration);
    }
    clearTimeout(id) {
        window.clearTimeout(id !== null ? id : undefined);
    }
    navigate(url) {
        window.location.href = url;
    }
    matchMedia(query) {
        return window.matchMedia(query);
    }
    hasWebkitSpeechRecognition() {
        return 'webkitSpeechRecognition' in window;
    }
    createSpeechRecognition() {
        return new window.webkitSpeechRecognition();
    }
}
