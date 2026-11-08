// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { AMPLITUDE_DECAY_RATE, applySensitivityEasing, clamp, getAmbientSimulatedMotion, makeSimulatedAudioBump, MS_PER_FRAME, SPEECH_RECEIVED_BUMP_DURATION_MULT, SPEECH_RECEIVED_BUMP_DURATION_OFFSET, SPEECH_RECEIVED_BUMP_MAX_VOL_MULT, SPEECH_RECEIVED_BUMP_MAX_VOL_OFFSET, triggerSyllableBumps, updateBumpsAndGetSum } from './audio_simulation_utils.js';
import { getCss } from './audio_wave.css.js';
import { getHtml } from './audio_wave.html.js';
export const blurredRectUrl = '//resources/cr_components/search/images/eclipse_wave_blurred_rect.png';
// Controls the curvature tightness (0.0 = straight line, 0.5 = full circle).
const BEZIER_TENSION_RATIO = 0.38;
// Wave height.
const MAX_AMPLITUDE = -25;
const MIN_AMPLITUDE = -0;
// Vertical offset.
const MAX_VERTICAL_SHIFT = -10;
const MIN_VERTICAL_SHIFT = -0;
// Idle wave: large margin (less width); peak wave: small margin (more width).
const WAVE_SIDE_MARGIN_IDLE = 56;
const WAVE_SIDE_MARGIN_PEAK = 10;
const STROKE_WIDTH = 3;
const SPEECH_RECEIVED_VOL_SPIKE = 0.4;
const SMOOTHING_WINDOW_SIZE = 3;
const SMOOTHING_BUFFER_SIZE = 5;
/*
 * Linear Interpolation that maps one unit to another unit, like volume to px.
 */
export function mapToRange(value, inputMin, inputMax, outputMin, outputMax, shouldClamp = false) {
    if (shouldClamp) {
        value = clamp(value, inputMin, inputMax);
    }
    // Is: (val - input_offset) * ratio + output_offset.
    return (value - inputMin) *
        ((outputMax - outputMin) / (inputMax - inputMin)) +
        outputMin;
}
export function weightedAverage(numArray, amountToAverage) {
    let weightedSum = 0;
    let sumOfWeights = 0;
    for (let i = 0; i < amountToAverage; i++) {
        // Lower indices get higher weight (most recent volume)
        const weight = amountToAverage - i;
        weightedSum += (numArray[i] ?? 0) * weight;
        sumOfWeights += weight;
    }
    return sumOfWeights === 0 ? 0 : weightedSum / sumOfWeights;
}
/**
 * Voice input visualizer.
 */
export class AudioWaveElement extends CrLitElement {
    static get is() {
        return 'audio-wave';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isListening: {
                reflect: true,
                type: Boolean,
            },
            isExpanding_: {
                reflect: true,
                type: Boolean,
            },
            transcript: { type: String },
            receivedSpeech: { type: Boolean },
        };
    }
    #isListening_accessor_storage = false;
    get isListening() { return this.#isListening_accessor_storage; }
    set isListening(value) { this.#isListening_accessor_storage = value; }
    #transcript_accessor_storage = '';
    get transcript() { return this.#transcript_accessor_storage; }
    set transcript(value) { this.#transcript_accessor_storage = value; }
    #receivedSpeech_accessor_storage = false;
    /* ReceivedSpeech is always set to true before or at
     * same time transcript is populated.
     */
    get receivedSpeech() { return this.#receivedSpeech_accessor_storage; }
    set receivedSpeech(value) { this.#receivedSpeech_accessor_storage = value; }
    #isExpanding__accessor_storage = true;
    get isExpanding_() { return this.#isExpanding__accessor_storage; }
    set isExpanding_(value) { this.#isExpanding__accessor_storage = value; }
    containerWidth_ = 0;
    animationFrameId_ = null;
    decayingAmplitude_ = 0;
    frame_ = 0;
    lastUpdateTime_ = performance.now();
    lastWordCount_ = 0;
    volumeHistory_ = [];
    activeSimulatedBumps_ = [];
    /* True means first syllable has already been heard. False means
     * have not heard syllable yet, even if receivedSpeech is true
     * (can be noise, not speech first heard). Default is true since default case
     * is that first word is spoken, and receivedSpeech creates the bump instead
     * of transcript. This needs to be true to avoid double counting the first
     * bump in transcript and receivedSpeech. The remaining bumps are processed
     * via transcript.
     */
    firstSyllable_ = true;
    /* Observe width changes per element with a recent size change. */
    resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
            this.containerWidth_ = entry.contentRect.width;
        }
    });
    connectedCallback() {
        super.connectedCallback();
        if (this.$.eclipseSvg) {
            this.resizeObserver.observe(this.$.eclipseSvg);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.onStopListen_();
        this.resizeObserver.disconnect();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('isListening')) {
            this.isListening ? this.onStartListen_() : this.onStopListen_();
            this.receivedSpeech = false;
        }
        if (changedProperties.has('receivedSpeech')) {
            /* Speech recognition's speech state is changed before it outputs a
             * transcript. If received speech (but not results) for first time,
             * add a bump so do not have to wait for transcript to come in
             * from speech webkit. This avoids a delay. If the transcript is
             * still blank, even after it is updated, set firstSyllable_ to false
             * since no word has been received yet and we do not want the default
             * of skipping the first syllable due to receivedSpeech beceoming true.
             */
            if (this.receivedSpeech) {
                this.decayingAmplitude_ = SPEECH_RECEIVED_VOL_SPIKE;
                for (let i = 0; i < this.volumeHistory_.length; i++) {
                    this.volumeHistory_[i] = Math.max(this.volumeHistory_[i] ?? 0, 0.3);
                }
                makeSimulatedAudioBump(this.activeSimulatedBumps_, SPEECH_RECEIVED_BUMP_DURATION_MULT, SPEECH_RECEIVED_BUMP_DURATION_OFFSET, this.frame_, SPEECH_RECEIVED_BUMP_MAX_VOL_MULT, SPEECH_RECEIVED_BUMP_MAX_VOL_OFFSET);
                if (this.transcript === '') {
                    // Do measure since was not a word.
                    this.firstSyllable_ = false;
                }
            }
        }
        if (changedProperties.has('transcript')) {
            this.handleNewWords_();
        }
    }
    onStartListen_() {
        this.isExpanding_ = true;
        this.volumeHistory_ = new Array(SMOOTHING_BUFFER_SIZE).fill(0.001);
        // If animation has not started; start it.
        if (this.animationFrameId_ === null) {
            // Add to queue instead of adding to call stack; (now CPU efficient).
            this.animationFrameId_ = requestAnimationFrame(this.processFrame);
        }
    }
    onStopListen_() {
        this.frame_ = 0;
        this.decayingAmplitude_ = 0;
        if (this.animationFrameId_ !== null) {
            cancelAnimationFrame(this.animationFrameId_);
            this.animationFrameId_ = null;
        }
        this.isExpanding_ = false;
    }
    /* Arrow function where "this" is AudioWaveElement when handed
     * to requestAnimationFrame(). Processes scheduling
     * and smoothing for animation frame_. */
    processFrame = () => {
        if (!this.isListening) {
            this.animationFrameId_ = null;
            return;
        }
        const now = performance.now();
        const elapsed = now - this.lastUpdateTime_;
        // Throttle to ensure 60 fps.
        if (elapsed > MS_PER_FRAME) {
            this.updateVolume_();
            let level = this.volumeHistory_[0];
            // Smoothing to prevent jitter.
            if (SMOOTHING_WINDOW_SIZE > 0) {
                level = weightedAverage(this.volumeHistory_, SMOOTHING_WINDOW_SIZE);
            }
            /* Define soft "ease-in", normal ease-out to reduce smaller
             * noises and slightly emphasize louder sounds.
             */
            level = applySensitivityEasing(level ?? 0);
            this.drawEclipseWavePath_(level);
            this.lastUpdateTime_ = now - (elapsed % MS_PER_FRAME);
        }
        if (this.isListening) {
            this.animationFrameId_ = requestAnimationFrame(this.processFrame);
        }
    };
    drawEclipseWavePath_(rawInputLevel) {
        this.frame_++;
        // Snap up immediately if new volume is louder.
        // If quieter, hold the previous peak (it will decay slowly in the next
        // step).
        this.decayingAmplitude_ = Math.max(this.decayingAmplitude_, rawInputLevel);
        this.decayingAmplitude_ *= AMPLITUDE_DECAY_RATE; // Decay
        // Wave width calculation (louder = wider)
        const currentSidePadding = mapToRange(Math.pow(this.decayingAmplitude_, 2.5), 0, 1, WAVE_SIDE_MARGIN_IDLE, WAVE_SIDE_MARGIN_PEAK);
        // Drawing anchors sitting on left/right ends of wave.
        const anchorLeftX = currentSidePadding;
        const anchorRightX = this.containerWidth_ - currentSidePadding;
        // Center position and width of hypothetical parabola.
        const waveCenterX = (anchorLeftX + anchorRightX) / 2;
        const waveHalfWidth = (anchorRightX - anchorLeftX) / 2;
        /* Calculates how high control points need to be in order to create perfect
         * parabolic arch shape.
         */
        const getParabolicDepth = (xPosition) => {
            if (waveHalfWidth === 0) {
                return 0;
            }
            const normalizedX = (xPosition - waveCenterX) / waveHalfWidth;
            const audioDisplacement = mapToRange(this.decayingAmplitude_, 0, 1, MIN_AMPLITUDE, MAX_AMPLITUDE);
            const baseOffset = mapToRange(this.decayingAmplitude_, 0, 1, MIN_VERTICAL_SHIFT, MAX_VERTICAL_SHIFT);
            // Formula: Displacement * (1 - x^2) + Offset.
            return audioDisplacement * (1 - Math.pow(normalizedX, 2)) + baseOffset;
        };
        // Bezier Control (left and right points) positioning.
        const controlPointXLeft = this.containerWidth_ * BEZIER_TENSION_RATIO;
        const controlPointXRight = this.containerWidth_ * (1 - BEZIER_TENSION_RATIO);
        // Y-offset for control points (determines "pull").
        const controlPointY = getParabolicDepth(controlPointXLeft);
        // Allow it to float up too, not just stretch up.
        const maskTranslateY = mapToRange(this.decayingAmplitude_, 0, 1, MIN_VERTICAL_SHIFT, MAX_VERTICAL_SHIFT);
        const buildBezierPath = (thickness, isSolidLine) => {
            /* If solid line, the bottom curve mirrors the top.
             * Else, is glow, so inverts.
             */
            const topY = thickness * -0.5 + controlPointY;
            const bottomY = thickness * 0.5 + (isSolidLine ? controlPointY : -controlPointY);
            return `M ${anchorLeftX},${0}
                  C ${controlPointXLeft},${topY} ${controlPointXRight},${topY} ${anchorRightX},${0}
                  C ${controlPointXRight},${bottomY} ${controlPointXLeft},${bottomY} ${anchorLeftX},${0}
                  Z`;
        };
        // Line:
        this.$.thinPath.setAttribute('d', buildBezierPath(STROKE_WIDTH, true));
        // Glow:
        this.$.lowerGlowPath.setAttribute('d', buildBezierPath(STROKE_WIDTH, false));
        const currentTransform = `translate(0, ${maskTranslateY})`;
        this.$.mask.setAttribute('transform', currentTransform);
        this.$.thinPath.setAttribute('transform', currentTransform);
        this.$.lowerGlowPath.setAttribute('transform', currentTransform);
        this.$.clipPathShape.setAttribute('transform', currentTransform);
        // Should be >= wrapper height.
        const bottomClipY = 1000;
        const topControlY = STROKE_WIDTH * -0.5 + controlPointY;
        /* Clip the glow so it does not show above the wave (emanates downwards
         * only).
         */
        const clipPathString = `M ${0},${-maskTranslateY * 0.25}
    L ${anchorLeftX},${0}
    C ${controlPointXLeft},${topControlY} ${controlPointXRight},${topControlY} ${anchorRightX},${0}
    L ${this.containerWidth_},${-maskTranslateY * 0.25}
    L ${this.containerWidth_},${bottomClipY}
    L ${0},${bottomClipY}
    Z`;
        this.$.clipPathShape.setAttribute('d', clipPathString);
    }
    updateVolume_() {
        /* 0 to 1 represents how much decimal % of volume can be
         * added in current frame due to mapping in mapToRange.
         */
        // Combine ambient breathing wave + audio bump simulation:
        this.volumeHistory_.unshift(getAmbientSimulatedMotion(this.frame_) +
            this.getSimulatedAudioBumpsSum_());
        // Trim volume history if too long:
        if (this.volumeHistory_.length > SMOOTHING_BUFFER_SIZE) {
            this.volumeHistory_.length = SMOOTHING_BUFFER_SIZE;
        }
    }
    handleNewWords_() {
        const trimmedTranscript = this.transcript.trim();
        if (trimmedTranscript === '') {
            // In case if input gets cleared, reset animation.
            this.lastWordCount_ = 0;
            return;
        }
        const words = trimmedTranscript.split(/\s+/);
        const currentWordCount = words.length;
        // Ignore shorter and same word counts (due to interim result changes).
        if (currentWordCount <= this.lastWordCount_) {
            this.lastWordCount_ = currentWordCount;
            return;
        }
        // Find completely new words not seen before.
        const newWordCount = currentWordCount - this.lastWordCount_;
        const newWords = words.slice(-newWordCount); // Get last nth new words.
        this.lastWordCount_ = currentWordCount;
        this.triggerSyllableBumps_(newWords);
    }
    // Delegated to audio_simulation_utils.ts for shared syllable bump logic.
    triggerSyllableBumps_(words) {
        const { firstSyllable } = triggerSyllableBumps(this.activeSimulatedBumps_, words, this.frame_, this.firstSyllable_);
        this.firstSyllable_ = firstSyllable;
    }
    // Delegated to audio_simulation_utils.ts for backwards compatibility with
    // tests.
    makeSimulatedAudioBump_(durationMultiplier, durationOffset, startTime, maxVolMultiplier, maxVolOffset) {
        makeSimulatedAudioBump(this.activeSimulatedBumps_, durationMultiplier, durationOffset, startTime, maxVolMultiplier, maxVolOffset);
    }
    getSimulatedAudioBumpsSum_() {
        return updateBumpsAndGetSum(this.activeSimulatedBumps_, this.frame_);
    }
}
customElements.define(AudioWaveElement.is, AudioWaveElement);
