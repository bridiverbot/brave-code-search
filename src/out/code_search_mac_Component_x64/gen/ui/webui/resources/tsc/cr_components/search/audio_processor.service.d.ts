export declare class AudioProcessorService {
    private audioContext;
    private analyser;
    private levels;
    private audioLevelsProcessor;
    private mediaStream;
    private microphoneSource;
    private simulate;
    private isListening;
    private startTimeMs;
    private lastVolumeTimeMs;
    private decayingAmplitude;
    private activeSimulatedBumps;
    private receivedSpeech;
    private lastWordCount;
    private firstSyllable;
    setSimulate(simulate: boolean): void;
    startMonitoringLevels(): Promise<boolean>;
    getVolume(): number;
    updateTranscript(transcript: string): void;
    updateReceivedSpeech(receivedSpeech: boolean): void;
    private triggerSyllableBumps;
    private getCurrentVirtualFrame;
    stopListening(): Promise<void>;
}
export declare const AudioProcessor: AudioProcessorService;
