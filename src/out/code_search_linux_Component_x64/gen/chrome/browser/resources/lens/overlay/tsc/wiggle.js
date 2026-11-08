// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const INITIAL_ANGULAR_POSITION_MULTIPLIER = 1000;
const BASE_WAVE_AMPLITUDE_FACTOR = 0.53;
const BASE_WAVE_FREQUENCY_FACTOR = 1;
const FIRST_OVERTONE_WAVE_AMPLITUDE_FACTOR = 0.25;
const FIRST_OVERTONE_WAVE_FREQUENCY_FACTOR = 2;
const SECOND_OVERTONE_WAVE_AMPLITUDE_FACTOR = 0.12;
const SECOND_OVERTONE_WAVE_FREQUENCY_FACTOR = 3;
function createWaveParam(amplitude, frequency) {
    return { amplitude, frequency };
}
/** Converts frequency to angular frequency (2πf) */
function frequencyToAngularFrequency(frequency) {
    return 2 * Math.PI * frequency;
}
/**
 * Simulates a random "wiggle" motion using the supplied frequency. Values are
 * calculated stepwise, progressing the simulation based on the current time.
 *
 * The calculated values are roughly in the range [-1, 1].
 *
 * For more information see
 * https://www.schoolofmotion.com/blog/wiggle-expression.
 */
export class Wiggle {
    // Randomized constants in pairs of (amplitude, frequency) which make each
    // Wiggle object have a unique path.
    waveParams = [
        createWaveParam(BASE_WAVE_AMPLITUDE_FACTOR * (0.5 + Math.random()), BASE_WAVE_FREQUENCY_FACTOR * (0.5 + Math.random())),
        createWaveParam(FIRST_OVERTONE_WAVE_AMPLITUDE_FACTOR * (0.5 + Math.random()), FIRST_OVERTONE_WAVE_FREQUENCY_FACTOR * (0.5 + Math.random())),
        createWaveParam(SECOND_OVERTONE_WAVE_AMPLITUDE_FACTOR * (0.5 + Math.random()), SECOND_OVERTONE_WAVE_FREQUENCY_FACTOR * (0.5 + Math.random())),
    ];
    /** Wiggle angular frequency (2πf) */
    angularFrequency;
    /** The internal position of the simulation that is stepped forward */
    angularPosition;
    /** Time in seconds of previous calculation */
    previousTimeSeconds;
    /** Value of the previous calculated wiggle simulation value. */
    previousWiggleValue;
    constructor(frequency) {
        this.angularFrequency = frequencyToAngularFrequency(frequency);
        this.angularPosition = Math.random() * INITIAL_ANGULAR_POSITION_MULTIPLIER;
        // If there was no previous wiggle value (as in the case of entering through
        // the image context menu item), then it is possible for all of the circles
        // to overlap causing their simulated gaussian blur to become more apparent
        // at the gradient color stops. Calculate an initial wiggle value to prevent
        // this.
        this.previousWiggleValue = this.calculateNext(0);
    }
    getPreviousWiggleValue() {
        return this.previousWiggleValue;
    }
    setFrequency(frequency) {
        this.angularFrequency = frequencyToAngularFrequency(frequency);
    }
    /**
     * Calculates the state of the Wiggle simulation for the current time
     *
     * @param timeSeconds Current simulation time in seconds
     */
    calculateNext(timeSeconds) {
        if (!this.previousTimeSeconds) {
            this.previousTimeSeconds = timeSeconds;
        }
        this.angularPosition +=
            (timeSeconds - this.previousTimeSeconds) * this.angularFrequency;
        this.previousTimeSeconds = timeSeconds;
        let wiggle = 0;
        for (const { amplitude, frequency } of this.waveParams) {
            wiggle += amplitude * Math.sin(frequency * this.angularPosition);
        }
        this.previousWiggleValue = wiggle;
        return wiggle;
    }
}
