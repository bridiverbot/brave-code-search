export interface TtsErrorEvent {
    error: string;
}
export interface TtsUtterance {
    text: string;
    voice?: SpeechSynthesisVoice;
    rate?: number;
    volume?: number;
    lang?: string;
    onEnd?: () => void;
    onBoundary?: (event: SpeechSynthesisEvent) => void;
    onError?: (event: TtsErrorEvent) => void;
    onStart?: () => void;
}
export interface TtsClient {
    /**
     * Plays the given utterance.
     * @param utterance The utterance to play.
     */
    play(utterance: TtsUtterance): void;
    /**
     * Stops the current utterance.
     */
    stop(): void;
    /**
     * Pauses the current utterance.
     */
    pause(): void;
    /**
     * Resumes the current utterance.
     */
    resume(): void;
    /**
     * Returns the voices available for speech synthesis.
     */
    getVoices(): SpeechSynthesisVoice[];
    /**
     * Sets a callback to be invoked when the set of available voices changes.
     */
    setOnVoicesChanged(callback: () => void): void;
    /**
     * Returns whether the given voice is a "Natural" voice.
     */
    isNatural(voice: SpeechSynthesisVoice): boolean;
    /**
     * Returns whether the given voice is a "Google" voice.
     */
    isGoogle(voice: SpeechSynthesisVoice): boolean;
    /**
     * The priority of this client. Higher values indicate higher priority.
     */
    readonly priority: number;
}
