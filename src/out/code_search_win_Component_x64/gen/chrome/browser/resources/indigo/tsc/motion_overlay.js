// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './text_overlay.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './motion_overlay.css.js';
import { getHtml } from './motion_overlay.html.js';
const SWIPE_DURATION_MS = 2000;
const LOADING_CIRCLES_START_DELAY_MS = 1300;
const TEXT_OVERLAY_START_DELAY_MS = 1000;
// If the exit starts within this opacity of either end of #maxBlurLayer's
// fade-in, it snaps to that end, so the exit draws one blur instead of two.
const MAX_BLUR_OPACITY_SNAP = 0.01;
export class IndigoMotionOverlayElement extends CrLitElement {
    static get is() {
        return 'indigo-motion-overlay';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            animationState: {
                type: String,
                reflect: true,
                attribute: 'animation-state',
            },
            showLoadingCircles_: {
                type: Boolean,
                reflect: true,
                attribute: 'show-loading-circles',
            },
            maxBlur_: {
                type: String,
                reflect: true,
                attribute: 'max-blur',
            },
        };
    }
    #animationState_accessor_storage = 'none';
    get animationState() { return this.#animationState_accessor_storage; }
    set animationState(value) { this.#animationState_accessor_storage = value; }
    #showLoadingCircles__accessor_storage = false;
    get showLoadingCircles_() { return this.#showLoadingCircles__accessor_storage; }
    set showLoadingCircles_(value) { this.#showLoadingCircles__accessor_storage = value; }
    #maxBlur__accessor_storage = null;
    get maxBlur_() { return this.#maxBlur__accessor_storage; }
    set maxBlur_(value) { this.#maxBlur__accessor_storage = value; }
    loadingTimeout_ = null;
    entryTimeout_ = null;
    textOverlayTimeout_ = null;
    motionCompleteTimeout_ = null;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (!changedProperties.has('animationState')) {
            return;
        }
        if (this.animationState === 'entry') {
            this.maxBlur_ = null;
        }
        else if (this.animationState === 'exit') {
            // The exit styles drop the max blur's fade-in, so that a later entry
            // restarts it. Read how far it got here: willUpdate() runs before
            // update() reflects animation-state, so the entry styles still apply.
            this.maxBlur_ = this.computeMaxBlurForExit_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('animationState')) {
            const oldState = changedProperties.get('animationState');
            const newState = this.animationState;
            if (newState === 'entry' && oldState !== 'entry') {
                this.startTransitionAnimation_();
            }
            else if (newState === 'exit' && oldState !== 'exit') {
                this.startExitAnimation_();
            }
        }
    }
    onMaxBlurAnimationend_(e) {
        if (e.animationName === 'maxBlurFadeIn') {
            this.maxBlur_ = 'full';
        }
    }
    startTransitionAnimation_() {
        // A regenerated image can start a new entry before the previous exit ends.
        if (this.motionCompleteTimeout_) {
            window.clearTimeout(this.motionCompleteTimeout_);
            this.motionCompleteTimeout_ = null;
        }
        this.calculateDimensions_();
        this.entryTimeout_ = window.setTimeout(() => {
            this.entryTimeout_ = null;
            this.fire('entry-complete');
        }, SWIPE_DURATION_MS);
        this.loadingTimeout_ = window.setTimeout(() => {
            this.loadingTimeout_ = null;
            this.showLoadingCircles_ = true;
        }, LOADING_CIRCLES_START_DELAY_MS);
        this.textOverlayTimeout_ = window.setTimeout(() => {
            this.textOverlayTimeout_ = null;
            this.$.textOverlay.startSequence();
        }, TEXT_OVERLAY_START_DELAY_MS);
    }
    startExitAnimation_() {
        if (this.entryTimeout_) {
            window.clearTimeout(this.entryTimeout_);
            this.entryTimeout_ = null;
            this.fire('entry-complete');
        }
        if (this.loadingTimeout_) {
            window.clearTimeout(this.loadingTimeout_);
            this.loadingTimeout_ = null;
        }
        if (this.textOverlayTimeout_) {
            window.clearTimeout(this.textOverlayTimeout_);
            this.textOverlayTimeout_ = null;
        }
        this.$.textOverlay.stopSequence();
        this.showLoadingCircles_ = false;
        this.motionCompleteTimeout_ = window.setTimeout(() => {
            this.motionCompleteTimeout_ = null;
            this.fire('motion-complete');
        }, SWIPE_DURATION_MS);
    }
    computeMaxBlurForExit_() {
        if (this.maxBlur_ === 'full') {
            return 'full';
        }
        // There's no local DOM before the first render, and CrLitElement throws if
        // `$` is used within willUpdate() then.
        const opacity = this.hasUpdated ?
            Number(getComputedStyle(this.$.maxBlurLayer).opacity) :
            0;
        if (opacity <= MAX_BLUR_OPACITY_SNAP) {
            return 'hidden';
        }
        if (opacity >= 1 - MAX_BLUR_OPACITY_SNAP) {
            return 'full';
        }
        this.style.setProperty('--indigo-max-blur-opacity', `${opacity}`);
        return 'partial';
    }
    calculateDimensions_() {
        const rect = this.getBoundingClientRect();
        const w = rect.width || window.innerWidth;
        const h = rect.height || window.innerHeight;
        const diagonal = Math.sqrt(w * w + h * h);
        const majorAxis = diagonal * 4;
        const minorAxis = majorAxis * 0.7;
        const borderWidth = (h + w) / 4;
        const gap = h * 0.7;
        this.style.setProperty('--major-axis', `${majorAxis}px`);
        this.style.setProperty('--minor-axis', `${minorAxis}px`);
        this.style.setProperty('--border-width', `${borderWidth}px`);
        this.style.setProperty('--gap', `${gap}px`);
        this.style.setProperty('--indigo-swipe-duration', `${SWIPE_DURATION_MS}ms`);
    }
}
customElements.define(IndigoMotionOverlayElement.is, IndigoMotionOverlayElement);
// The blur layers' sweep mask is drawn by a paint worklet from --indigo-sweep
// (see sweep_mask_worklet.ts). The property is registered as a number so that
// animating it can run on the compositor thread.
CSS.registerProperty({
    name: '--indigo-sweep',
    syntax: '<number>',
    inherits: false,
    initialValue: '0',
});
// Resolves once the worklet has loaded. Don't start the entry animation before
// that, or #blurLayer shows unmasked until the worklet loads and the sweep runs
// on the main thread.
export const sweepMaskReady = CSS.paintWorklet.addModule('sweep_mask_worklet.js');
