// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './audio_wave.js';
import './recording_wave.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './animated_glow.css.js';
import { getHtml } from './animated_glow.html.js';
import { GlowAnimationState, GlowMode } from './constants.js';
/*
 * Animation glow for expanding, submitting, voice, dragging.
 * Parent must pass animationState to trigger one of 4 animations, or idle.
 * RequiresVoice, isCollapsible are optional. RequiresVoice is
 * false by default. And if it is true, then it renders the eclipse audio wave
 * element as well. IsCollapsible adds an animation for expand (see .css file).
 * Transcript and receivedSpeech are optional. Allows for audio to simulate
 * audio input without opening audio stream.
 */
if (window.CSS && CSS.registerProperty) {
    try {
        CSS.registerProperty({
            name: '--gradient-angle',
            syntax: '<angle>',
            inherits: true,
            initialValue: '0deg',
        });
    }
    catch (_e) {
    }
    try {
        CSS.registerProperty({
            name: '--mask-angle',
            syntax: '<angle>',
            inherits: true,
            initialValue: '0deg',
        });
    }
    catch (_e) {
    }
}
export class SearchAnimatedGlowElement extends CrLitElement {
    static get is() {
        return 'search-animated-glow';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            coloredTicTacVoiceAnimationEnabled: {
                type: Boolean,
                reflect: true,
            },
            showingOnlyCarouselOnTopOfInput: {
                type: Boolean,
                reflect: true,
            },
            animationState: {
                type: String,
                reflect: true,
            },
            glowMode: {
                type: String,
                reflect: true,
            },
            dragDropPlaceholder: { type: String },
            requiresVoice: { type: Boolean },
            isCollapsible: {
                type: Boolean,
                reflect: true,
            },
            transcript: { type: String },
            receivedSpeech: { type: Boolean },
            isListening: {
                type: Boolean,
                reflect: true,
            },
            energyEffectAnimationEnabled: {
                type: Boolean,
                reflect: true,
            },
            darkThemeColorsEnabled: {
                type: Boolean,
            },
        };
    }
    #animationState_accessor_storage = GlowAnimationState.NONE;
    get animationState() { return this.#animationState_accessor_storage; }
    set animationState(value) { this.#animationState_accessor_storage = value; }
    #dragDropPlaceholder_accessor_storage = loadTimeData.getString('composeboxDragAndDropHint');
    get dragDropPlaceholder() { return this.#dragDropPlaceholder_accessor_storage; }
    set dragDropPlaceholder(value) { this.#dragDropPlaceholder_accessor_storage = value; }
    #glowMode_accessor_storage = GlowMode.OUTER_GLOW;
    get glowMode() { return this.#glowMode_accessor_storage; }
    set glowMode(value) { this.#glowMode_accessor_storage = value; }
    #requiresVoice_accessor_storage = false;
    get requiresVoice() { return this.#requiresVoice_accessor_storage; }
    set requiresVoice(value) { this.#requiresVoice_accessor_storage = value; }
    #isCollapsible_accessor_storage = false;
    get isCollapsible() { return this.#isCollapsible_accessor_storage; }
    set isCollapsible(value) { this.#isCollapsible_accessor_storage = value; }
    #transcript_accessor_storage = '';
    get transcript() { return this.#transcript_accessor_storage; }
    set transcript(value) { this.#transcript_accessor_storage = value; }
    #receivedSpeech_accessor_storage = false;
    get receivedSpeech() { return this.#receivedSpeech_accessor_storage; }
    set receivedSpeech(value) { this.#receivedSpeech_accessor_storage = value; }
    #coloredTicTacVoiceAnimationEnabled_accessor_storage = false;
    // Source of truth for voice search (as not every parent has
    // `animationState`).
    get coloredTicTacVoiceAnimationEnabled() { return this.#coloredTicTacVoiceAnimationEnabled_accessor_storage; }
    set coloredTicTacVoiceAnimationEnabled(value) { this.#coloredTicTacVoiceAnimationEnabled_accessor_storage = value; }
    #showingOnlyCarouselOnTopOfInput_accessor_storage = false;
    get showingOnlyCarouselOnTopOfInput() { return this.#showingOnlyCarouselOnTopOfInput_accessor_storage; }
    set showingOnlyCarouselOnTopOfInput(value) { this.#showingOnlyCarouselOnTopOfInput_accessor_storage = value; }
    #isListening_accessor_storage = false;
    get isListening() { return this.#isListening_accessor_storage; }
    set isListening(value) { this.#isListening_accessor_storage = value; }
    #energyEffectAnimationEnabled_accessor_storage = false;
    get energyEffectAnimationEnabled() { return this.#energyEffectAnimationEnabled_accessor_storage; }
    set energyEffectAnimationEnabled(value) { this.#energyEffectAnimationEnabled_accessor_storage = value; }
    #darkThemeColorsEnabled_accessor_storage = true;
    get darkThemeColorsEnabled() { return this.#darkThemeColorsEnabled_accessor_storage; }
    set darkThemeColorsEnabled(value) { this.#darkThemeColorsEnabled_accessor_storage = value; }
    useEnergyEffect_() {
        return this.glowMode === GlowMode.OUTER_GLOW;
    }
    targetAngle_ = 0;
    maskCurrAngle_ = 0;
    gradCurrAngle_ = 0;
    isDragging_ = false;
    rafId_ = null;
    onDragOver_ = (e) => {
        if (!this.isDragging_) {
            return;
        }
        const newAngle = this.getAngleFromEvent_(e);
        if (this.targetAngle_ === 0 && this.maskCurrAngle_ === 0) {
            this.targetAngle_ = newAngle;
            this.maskCurrAngle_ = newAngle;
            this.gradCurrAngle_ = newAngle;
        }
        else {
            this.targetAngle_ = newAngle;
        }
    };
    getAngleFromEvent_(e) {
        const backgroundEl = this.shadowRoot.querySelector('.background');
        const rect = backgroundEl ? backgroundEl.getBoundingClientRect() :
            this.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const scaleX = 4;
        const scaleY = 1.0;
        const dx = (e.clientX - centerX) / scaleX;
        const dy = (e.clientY - centerY) / scaleY;
        return Math.atan2(dy, dx) * (180 / Math.PI);
    }
    lerpAngle_(start, end, factor) {
        let delta = end - start;
        while (delta > 180) {
            delta -= 360;
        }
        while (delta < -180) {
            delta += 360;
        }
        return start + delta * factor;
    }
    renderLoop_ = () => {
        const maskLerpFactor = 0.08;
        const gradLerpFactor = 0.03;
        this.maskCurrAngle_ =
            this.lerpAngle_(this.maskCurrAngle_, this.targetAngle_, maskLerpFactor);
        this.gradCurrAngle_ =
            this.lerpAngle_(this.gradCurrAngle_, this.targetAngle_, gradLerpFactor);
        const maskOffset = -167;
        const gradOffset = -165;
        this.style.setProperty('--mask-angle', `${this.maskCurrAngle_ + maskOffset}deg`);
        this.style.setProperty('--gradient-angle', `${this.gradCurrAngle_ + gradOffset}deg`);
        if (this.isDragging_) {
            this.rafId_ = requestAnimationFrame(this.renderLoop_);
        }
    };
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('animationState')) {
            if (this.useEnergyEffect_() &&
                this.animationState === GlowAnimationState.DRAGGING) {
                this.isDragging_ = true;
                window.addEventListener('dragover', this.onDragOver_);
                this.rafId_ = requestAnimationFrame(this.renderLoop_);
            }
            else if (changedProperties.get('animationState') ===
                GlowAnimationState.DRAGGING) {
                this.isDragging_ = false;
                window.removeEventListener('dragover', this.onDragOver_);
                if (this.rafId_ !== null) {
                    cancelAnimationFrame(this.rafId_);
                    this.rafId_ = null;
                }
                this.style.removeProperty('--mask-angle');
                this.style.removeProperty('--gradient-angle');
            }
        }
    }
}
customElements.define(SearchAnimatedGlowElement.is, SearchAnimatedGlowElement);
