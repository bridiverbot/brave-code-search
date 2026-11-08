// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
export class TestSpeechBrowserProxy extends TestBrowserProxy {
    voices_ = [];
    constructor() {
        super([
            'cancel',
            'getVoices',
            'pause',
            'resume',
            'setOnVoicesChanged',
            'speak',
        ]);
    }
    cancel() {
        this.methodCalled('cancel');
    }
    setVoices(voices) {
        this.voices_ = voices;
    }
    getVoices() {
        this.methodCalled('getVoices');
        return this.voices_;
    }
    pause() {
        this.methodCalled('pause');
    }
    resume() {
        this.methodCalled('resume');
    }
    setOnVoicesChanged(onvoiceschanged) {
        this.methodCalled('setOnVoicesChanged', onvoiceschanged);
    }
    speak(utterance) {
        this.methodCalled('speak', utterance);
    }
}
