// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Tracks the amount of time a user actively engages with a page.
 *
 * This timer uses the Page Lifecycle API to accurately measure active time and
 * emits a metric when the page is closed, navigated away from, or enters the
 * back/forward cache (BFCache). It pauses the timer when the page loses focus
 * or becomes hidden, reducing inaccuracies for long background sessions.
 */
export class ActiveTimer {
    activeStartTime_ = 0;
    totalActiveTime_ = 0;
    isRunning_ = false;
    onEmit_;
    metricEmitted_ = false;
    listenersAdded_ = false;
    // Triggered when switching tabs or minimizing the window.
    visibilityChangeListener_ = () => this.updateTimer_();
    // Triggered when clicking into the page.
    focusListener_ = () => this.updateTimer_();
    // Triggered when clicking out of the page (e.g., focusing the URL bar).
    blurListener_ = () => this.updateTimer_();
    // `pagehide` fires when navigating away, closing the tab, or entering
    // BFCache. This serves as our reliable signal that the user is done with the
    // page. We avoid `unload` and `beforeunload` as they are unreliable and
    // prevent the page from being eligible for BFCache.
    pagehideListener_ = () => this.emit_();
    // `pageshow` fires on initial load, and also when restored from BFCache.
    pageshowListener_ = (e) => {
        // `e.persisted` is true if the page was restored from the BFCache.
        // In this case, we treat it as a new session and reset the timer state.
        if (e.persisted) {
            this.resetState_();
            this.updateTimer_();
        }
    };
    constructor(onEmit) {
        this.onEmit_ = onEmit;
    }
    resetState_() {
        this.activeStartTime_ = 0;
        this.totalActiveTime_ = 0;
        this.isRunning_ = false;
        this.metricEmitted_ = false;
    }
    start() {
        this.resetState_();
        this.updateTimer_();
        if (!this.listenersAdded_) {
            document.addEventListener('visibilitychange', this.visibilityChangeListener_);
            window.addEventListener('focus', this.focusListener_);
            window.addEventListener('blur', this.blurListener_);
            window.addEventListener('pagehide', this.pagehideListener_);
            window.addEventListener('pageshow', this.pageshowListener_);
            this.listenersAdded_ = true;
        }
    }
    stop() {
        if (this.listenersAdded_) {
            document.removeEventListener('visibilitychange', this.visibilityChangeListener_);
            window.removeEventListener('focus', this.focusListener_);
            window.removeEventListener('blur', this.blurListener_);
            window.removeEventListener('pagehide', this.pagehideListener_);
            window.removeEventListener('pageshow', this.pageshowListener_);
            this.listenersAdded_ = false;
        }
        this.emit_();
    }
    isActive_() {
        return document.visibilityState === 'visible' && document.hasFocus();
    }
    startTimer_() {
        if (this.isRunning_) {
            return;
        }
        this.activeStartTime_ = performance.now();
        this.isRunning_ = true;
    }
    pauseTimer_() {
        if (!this.isRunning_) {
            return;
        }
        this.totalActiveTime_ += performance.now() - this.activeStartTime_;
        this.isRunning_ = false;
    }
    updateTimer_() {
        if (this.isActive_()) {
            this.startTimer_();
        }
        else {
            this.pauseTimer_();
        }
    }
    emit_() {
        if (this.metricEmitted_) {
            return;
        }
        this.pauseTimer_();
        if (this.totalActiveTime_ > 0) {
            this.onEmit_(Math.floor(this.totalActiveTime_));
        }
        this.metricEmitted_ = true;
    }
}
