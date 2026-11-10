// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var WordBoundaryMode;
(function (WordBoundaryMode) {
    // Used if word boundaries are not supported (i.e. we haven't received enough
    // information to determine if word boundaries are supported.)
    WordBoundaryMode[WordBoundaryMode["BOUNDARIES_NOT_SUPPORTED"] = 0] = "BOUNDARIES_NOT_SUPPORTED";
    WordBoundaryMode[WordBoundaryMode["NO_BOUNDARIES"] = 1] = "NO_BOUNDARIES";
    WordBoundaryMode[WordBoundaryMode["BOUNDARY_DETECTED"] = 2] = "BOUNDARY_DETECTED";
})(WordBoundaryMode || (WordBoundaryMode = {}));
export class WordBoundaries {
    state = {
        mode: WordBoundaryMode.BOUNDARIES_NOT_SUPPORTED,
        speechUtteranceStartIndex: 0,
        previouslySpokenIndex: 0,
        speechUtteranceLength: 0,
    };
    hasBoundaries() {
        return this.state.mode === WordBoundaryMode.BOUNDARY_DETECTED;
    }
    notSupported() {
        return this.state.mode === WordBoundaryMode.BOUNDARIES_NOT_SUPPORTED;
    }
    /**
     * Resets the state to a default configuration.
     *
     * If a word boundary was previously detected, the mode is set to
     * NO_BOUNDARIES. This is because we know boundaries are supported and are
     * simply clearing the current state. Otherwise, the mode is set to
     * BOUNDARIES_NOT_SUPPORTED.
     */
    resetToDefaultState() {
        const defaultMode = (this.state.mode === WordBoundaryMode.BOUNDARY_DETECTED) ?
            WordBoundaryMode.NO_BOUNDARIES :
            WordBoundaryMode.BOUNDARIES_NOT_SUPPORTED;
        this.state = {
            previouslySpokenIndex: 0,
            mode: defaultMode,
            speechUtteranceStartIndex: 0,
            speechUtteranceLength: 0,
        };
    }
    /**
     * Explicitly sets the mode to indicate that word boundaries are not or might
     * not be supported.
     */
    setNotSupported() {
        this.state.mode = WordBoundaryMode.BOUNDARIES_NOT_SUPPORTED;
    }
    // Returns the index of the word boundary at which we had previously paused.
    getResumeBoundary() {
        const substringIndex = this.state.previouslySpokenIndex + this.state.speechUtteranceStartIndex;
        this.state.previouslySpokenIndex = 0;
        this.state.speechUtteranceStartIndex = substringIndex;
        return substringIndex;
    }
    updateBoundary(charIndex, charLength = 0) {
        this.state.previouslySpokenIndex = charIndex;
        this.state.mode = WordBoundaryMode.BOUNDARY_DETECTED;
        this.state.speechUtteranceLength = charLength;
    }
    static getInstance() {
        return instance || (instance = new WordBoundaries());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
