import type { ContentPosition } from '../content/read_anything_types.js';
import { ReadAloudNode } from './read_aloud_types.js';
import type { WordBoundaryState } from './word_boundaries.js';
export declare enum PauseActionSource {
    DEFAULT = 0,
    BUTTON_CLICK = 1,
    VOICE_PREVIEW = 2,
    VOICE_SETTINGS_CHANGE = 3,
    ENGINE_INTERRUPT = 4,
    SPEECH_FINISHED = 5
}
export interface SpeechPlayingState {
    isSpeechActive: boolean;
    pauseSource: PauseActionSource;
    isAudioCurrentlyPlaying: boolean;
    hasSpeechBeenTriggered: boolean;
    isSpeechBeingRepositioned: boolean;
}
export declare enum SpeechEngineState {
    NONE = 0,
    LOADING = 1,
    LOADED = 2
}
interface ReadingPosition {
    node: ReadAloudNode;
    offset: number;
}
export declare class SpeechModel {
    private speechPlayingState_;
    private speechEngineState_;
    private previewVoicePlaying_;
    private lastReadingPosition_;
    private currentContentPosition_;
    private savedSpeechPlayingState_;
    private savedWordBoundaryState_;
    private playSessionStartTime_;
    private pagePlaybackTimeMs_;
    private wordsHeard_;
    private readAloudContextNode_;
    private resumeSpeechOnVoiceMenuClose_;
    private speechVolume_;
    private activeUtterance_;
    setVolume(volume: number): void;
    getVolume(): number;
    getSavedSpeechPlayingState(): SpeechPlayingState | null;
    setSavedSpeechPlayingState(state: SpeechPlayingState | null): void;
    getSavedWordBoundaryState(): WordBoundaryState | null;
    setSavedWordBoundaryState(state: WordBoundaryState | null): void;
    getResumeSpeechOnVoiceMenuClose(): boolean;
    setResumeSpeechOnVoiceMenuClose(shouldResume: boolean): void;
    getContextNode(): ReadAloudNode | null | undefined;
    setContextNode(node: Node | null): void;
    getPlaySessionStartTime(): number | null;
    setPlaySessionStartTime(time: number | null): void;
    getPagePlaybackTime(): number;
    addPagePlaybackTime(time: number): void;
    resetPagePlaybackTime(): void;
    getLastPosition(): ReadingPosition | null;
    setLastPosition(position: ReadingPosition | null): void;
    getCurrentContentPosition(): ContentPosition | null;
    setCurrentContentPosition(position: ContentPosition | null): void;
    getEngineState(): SpeechEngineState;
    setEngineState(state: SpeechEngineState): void;
    getPreviewVoicePlaying(): SpeechSynthesisVoice | null;
    setPreviewVoicePlaying(voice: SpeechSynthesisVoice | null): void;
    getState(): SpeechPlayingState;
    setState(state: SpeechPlayingState): void;
    isSpeechActive(): boolean;
    setIsSpeechActive(value: boolean): void;
    getPauseSource(): PauseActionSource;
    setPauseSource(value: PauseActionSource): void;
    isAudioCurrentlyPlaying(): boolean;
    setIsAudioCurrentlyPlaying(value: boolean): void;
    hasSpeechBeenTriggered(): boolean;
    setHasSpeechBeenTriggered(value: boolean): void;
    isSpeechBeingRepositioned(): boolean;
    setIsSpeechBeingRepositioned(value: boolean): void;
    getWordsHeard(): number;
    setWordsHeard(words: number): void;
    incrementWordsHeard(): void;
    setActiveUtterance(utterance: SpeechSynthesisUtterance | null): void;
    getActiveUtterance(): SpeechSynthesisUtterance | null;
}
export {};
