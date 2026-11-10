// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ReadAloudNode } from './read_aloud_types.js';
export var PauseActionSource;
(function (PauseActionSource) {
    PauseActionSource[PauseActionSource["DEFAULT"] = 0] = "DEFAULT";
    PauseActionSource[PauseActionSource["BUTTON_CLICK"] = 1] = "BUTTON_CLICK";
    PauseActionSource[PauseActionSource["VOICE_PREVIEW"] = 2] = "VOICE_PREVIEW";
    PauseActionSource[PauseActionSource["VOICE_SETTINGS_CHANGE"] = 3] = "VOICE_SETTINGS_CHANGE";
    PauseActionSource[PauseActionSource["ENGINE_INTERRUPT"] = 4] = "ENGINE_INTERRUPT";
    PauseActionSource[PauseActionSource["SPEECH_FINISHED"] = 5] = "SPEECH_FINISHED";
})(PauseActionSource || (PauseActionSource = {}));
export var SpeechEngineState;
(function (SpeechEngineState) {
    SpeechEngineState[SpeechEngineState["NONE"] = 0] = "NONE";
    SpeechEngineState[SpeechEngineState["LOADING"] = 1] = "LOADING";
    SpeechEngineState[SpeechEngineState["LOADED"] = 2] = "LOADED";
})(SpeechEngineState || (SpeechEngineState = {}));
export class SpeechModel {
    speechPlayingState_ = {
        isSpeechActive: false,
        pauseSource: PauseActionSource.DEFAULT,
        isAudioCurrentlyPlaying: false,
        hasSpeechBeenTriggered: false,
        isSpeechBeingRepositioned: false,
    };
    speechEngineState_ = SpeechEngineState.NONE;
    previewVoicePlaying_ = null;
    // With minor page changes, we redistill or redraw sometimes and end up losing
    // our reading position if read aloud has started. This keeps track of the
    // last position so we can check if it's still in the new page.
    lastReadingPosition_ = null;
    // The current position in the content, which can be derived from either a
    // user selection or the line focus position. This is used to determine
    // where to begin or resume speech playback.
    currentContentPosition_ = null;
    savedSpeechPlayingState_ = null;
    savedWordBoundaryState_ = null;
    // Used for logging play time.
    playSessionStartTime_ = null;
    // Used to log the cumulative speech playback time on a given page.
    pagePlaybackTimeMs_ = 0;
    // Used to log the number of words heard by a user via read aloud on a given
    // page.
    wordsHeard_ = 0;
    // The context node used to initialize Read Aloud. This is null if it has
    // not been set. When TS-based segmentation is enabled, this is the root
    // node, and when V8-based segmentation is enabled, this is the first text
    // node.
    readAloudContextNode_ = null;
    resumeSpeechOnVoiceMenuClose_ = false;
    speechVolume_ = 1.0;
    // The current utterance being spoken by the speech engine.
    // This is null if speech is not active.
    activeUtterance_ = null;
    setVolume(volume) {
        this.speechVolume_ = volume;
    }
    getVolume() {
        return this.speechVolume_;
    }
    getSavedSpeechPlayingState() {
        return this.savedSpeechPlayingState_;
    }
    setSavedSpeechPlayingState(state) {
        this.savedSpeechPlayingState_ = state;
    }
    getSavedWordBoundaryState() {
        return this.savedWordBoundaryState_;
    }
    setSavedWordBoundaryState(state) {
        this.savedWordBoundaryState_ = state;
    }
    getResumeSpeechOnVoiceMenuClose() {
        return this.resumeSpeechOnVoiceMenuClose_;
    }
    setResumeSpeechOnVoiceMenuClose(shouldResume) {
        this.resumeSpeechOnVoiceMenuClose_ = shouldResume;
    }
    getContextNode() {
        return this.readAloudContextNode_;
    }
    setContextNode(node) {
        if (!node) {
            this.readAloudContextNode_ = node;
            return;
        }
        this.readAloudContextNode_ = ReadAloudNode.create(node);
    }
    getPlaySessionStartTime() {
        return this.playSessionStartTime_;
    }
    setPlaySessionStartTime(time) {
        this.playSessionStartTime_ = time;
    }
    getPagePlaybackTime() {
        return this.pagePlaybackTimeMs_;
    }
    addPagePlaybackTime(time) {
        this.pagePlaybackTimeMs_ += time;
    }
    resetPagePlaybackTime() {
        this.pagePlaybackTimeMs_ = 0;
    }
    getLastPosition() {
        return this.lastReadingPosition_;
    }
    setLastPosition(position) {
        this.lastReadingPosition_ = position;
    }
    getCurrentContentPosition() {
        return this.currentContentPosition_;
    }
    setCurrentContentPosition(position) {
        this.currentContentPosition_ = position;
    }
    getEngineState() {
        return this.speechEngineState_;
    }
    setEngineState(state) {
        this.speechEngineState_ = state;
    }
    getPreviewVoicePlaying() {
        return this.previewVoicePlaying_;
    }
    setPreviewVoicePlaying(voice) {
        this.previewVoicePlaying_ = voice;
    }
    getState() {
        return this.speechPlayingState_;
    }
    setState(state) {
        this.speechPlayingState_ = { ...state };
    }
    isSpeechActive() {
        return this.speechPlayingState_.isSpeechActive;
    }
    setIsSpeechActive(value) {
        this.speechPlayingState_.isSpeechActive = value;
    }
    getPauseSource() {
        return this.speechPlayingState_.pauseSource;
    }
    setPauseSource(value) {
        this.speechPlayingState_.pauseSource = value;
    }
    isAudioCurrentlyPlaying() {
        return this.speechPlayingState_.isAudioCurrentlyPlaying;
    }
    setIsAudioCurrentlyPlaying(value) {
        this.speechPlayingState_.isAudioCurrentlyPlaying = value;
    }
    hasSpeechBeenTriggered() {
        return this.speechPlayingState_.hasSpeechBeenTriggered;
    }
    setHasSpeechBeenTriggered(value) {
        this.speechPlayingState_.hasSpeechBeenTriggered = value;
    }
    isSpeechBeingRepositioned() {
        return this.speechPlayingState_.isSpeechBeingRepositioned;
    }
    setIsSpeechBeingRepositioned(value) {
        this.speechPlayingState_.isSpeechBeingRepositioned = value;
    }
    getWordsHeard() {
        return this.wordsHeard_;
    }
    setWordsHeard(words) {
        this.wordsHeard_ = words;
    }
    incrementWordsHeard() {
        this.wordsHeard_++;
    }
    setActiveUtterance(utterance) {
        this.activeUtterance_ = utterance;
    }
    getActiveUtterance() {
        return this.activeUtterance_;
    }
}
