// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class SpeechBrowserProxyImpl {
    synth_;
    constructor() {
        this.synth_ = window.speechSynthesis;
    }
    cancel() {
        this.synth_.cancel();
    }
    getVoices() {
        return this.synth_.getVoices();
    }
    pause() {
        this.synth_.pause();
    }
    resume() {
        this.synth_.resume();
    }
    setOnVoicesChanged(onvoiceschanged) {
        this.synth_.onvoiceschanged = onvoiceschanged;
    }
    speak(utterance) {
        this.synth_.speak(utterance);
    }
    static getInstance() {
        return instance || (instance = new SpeechBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
