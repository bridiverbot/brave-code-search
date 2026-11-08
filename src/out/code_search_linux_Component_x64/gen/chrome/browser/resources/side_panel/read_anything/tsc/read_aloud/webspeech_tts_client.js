// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { SpeechBrowserProxyImpl } from './speech_browser_proxy.js';
import { getFilteredVoiceList } from './tts_voice_filtering.js';
import { defaultIsGoogle, defaultIsNatural } from './voice_language_conversions.js';
// A TTS client that uses the web speech API.
export class WebSpeechTtsClient {
    static initialize() {
        return new WebSpeechTtsClient();
    }
    synth_ = SpeechBrowserProxyImpl.getInstance();
    // Set to lowest priority for multiple TTSClient sorting
    priority = 0;
    play(ttsUtterance) {
        const utterance = new SpeechSynthesisUtterance(ttsUtterance.text);
        if (ttsUtterance.voice) {
            utterance.voice = ttsUtterance.voice;
        }
        if (ttsUtterance.lang) {
            utterance.lang = ttsUtterance.lang;
        }
        if (ttsUtterance.rate) {
            utterance.rate = ttsUtterance.rate;
        }
        if (ttsUtterance.volume) {
            utterance.volume = ttsUtterance.volume;
        }
        if (ttsUtterance.onEnd) {
            utterance.onend = ttsUtterance.onEnd;
        }
        if (ttsUtterance.onBoundary) {
            utterance.onboundary = ttsUtterance.onBoundary;
        }
        if (ttsUtterance.onError) {
            utterance.onerror = ttsUtterance.onError;
        }
        if (ttsUtterance.onStart) {
            utterance.onstart = ttsUtterance.onStart;
        }
        this.synth_.speak(utterance);
    }
    stop() {
        this.synth_.cancel();
    }
    pause() {
        this.synth_.pause();
    }
    resume() {
        this.synth_.resume();
    }
    getVoices() {
        return getFilteredVoiceList(this.synth_.getVoices());
    }
    setOnVoicesChanged(callback) {
        this.synth_.setOnVoicesChanged(callback);
    }
    isNatural(voice) {
        return defaultIsNatural(voice);
    }
    isGoogle(voice) {
        return defaultIsGoogle(voice);
    }
}
