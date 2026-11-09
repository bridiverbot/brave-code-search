declare enum WordBoundaryMode {
    BOUNDARIES_NOT_SUPPORTED = 0,
    NO_BOUNDARIES = 1,
    BOUNDARY_DETECTED = 2
}
export interface WordBoundaryState {
    mode: WordBoundaryMode;
    previouslySpokenIndex: number;
    speechUtteranceStartIndex: number;
    speechUtteranceLength: number;
}
export declare class WordBoundaries {
    state: WordBoundaryState;
    hasBoundaries(): boolean;
    notSupported(): boolean;
    /**
     * Resets the state to a default configuration.
     *
     * If a word boundary was previously detected, the mode is set to
     * NO_BOUNDARIES. This is because we know boundaries are supported and are
     * simply clearing the current state. Otherwise, the mode is set to
     * BOUNDARIES_NOT_SUPPORTED.
     */
    resetToDefaultState(): void;
    /**
     * Explicitly sets the mode to indicate that word boundaries are not or might
     * not be supported.
     */
    setNotSupported(): void;
    getResumeBoundary(): number;
    updateBoundary(charIndex: number, charLength?: number): void;
    static getInstance(): WordBoundaries;
    static setInstance(obj: WordBoundaries): void;
}
export {};
