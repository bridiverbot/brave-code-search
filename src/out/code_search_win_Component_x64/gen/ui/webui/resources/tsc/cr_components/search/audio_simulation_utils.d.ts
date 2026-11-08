export interface Bump {
    startTime: number;
    duration: number;
    maxVol: number;
}
export declare const MIN_FRAMES_PER_SYLLABLE: number;
export declare const MAX_FRAMES_PER_SYLLABLE: number;
export declare const FRAME_LATENCY: number;
export declare const CIRCLE_RAD: number;
export declare const MS_PER_FRAME: number;
export declare const AMPLITUDE_DECAY_RATE: number;
export declare const SPEECH_RECEIVED_BUMP_DURATION_MULT: number;
export declare const SPEECH_RECEIVED_BUMP_DURATION_OFFSET: number;
export declare const SPEECH_RECEIVED_BUMP_MAX_VOL_MULT: number;
export declare const SPEECH_RECEIVED_BUMP_MAX_VOL_OFFSET: number;
export declare const SYLLABLE_BUMP_DURATION_MULT: number;
export declare const SYLLABLE_BUMP_DURATION_OFFSET: number;
export declare const SYLLABLE_BUMP_MAX_VOL_MULT: number;
export declare const SYLLABLE_BUMP_MAX_VOL_OFFSET: number;
export declare function clamp(value: number, minVal: number, maxVal: number): number;
export declare function bezierEasing(controlX1: number, controlX2: number, timeProgress: number): number;
export declare function countSyllablesHeuristic(word: string): number;
export declare function updateBumpsAndGetSum(bumps: Bump[], currentTime: number): number;
export declare function makeSimulatedAudioBump(bumps: Bump[], durationMultiplier: number, durationOffset: number, startTime: number, maxVolMultiplier: number, maxVolOffset: number): void;
export declare function triggerSyllableBumps(bumps: Bump[], words: string[], currentVirtualFrame: number, firstSyllable: boolean): {
    firstSyllable: boolean;
};
/**
 * Calculates ambient simulated breathing wave (fast wave + slow wave + random
 * noise floor) with a smooth start ramp over the first 80 frames.
 */
export declare function getAmbientSimulatedMotion(frame: number): number;
/**
 * Applies standard non-linear sensitivity curve (Bézier easing with control
 * points 0.4, 0.6) so wave reacts more dynamically to soft sounds.
 */
export declare function applySensitivityEasing(level: number): number;
