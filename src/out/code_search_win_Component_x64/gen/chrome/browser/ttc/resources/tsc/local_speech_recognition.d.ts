export interface LocalSpeechRecognitionDelegate {
    onLocalTranscript: (text: string) => void;
    isAssistantSpeaking: () => boolean;
    isSessionListening: () => boolean;
}
/**
 * Encapsulates browser-local Web Speech API (SODA/cloud ASR) recognition.
 */
export declare class LocalSpeechRecognition {
    private recognition;
    private delegate;
    constructor(delegate: LocalSpeechRecognitionDelegate);
    private init;
    start(): void;
    stop(): void;
}
