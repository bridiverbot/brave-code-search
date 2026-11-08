/**
 * Interface for audio capture.
 */
export interface AudioCapturer {
    start(onAudioCallback: (data: string) => void): Promise<boolean>;
    stop(): void;
    getSampleRate(): number;
    getEnergy(): number;
}
/**
 * Handles audio capture from the microphone.
 */
export declare class MicrophoneAudioCapturer implements AudioCapturer {
    private audioContext;
    private analyser;
    private stream;
    private processor;
    private onAudioCallback;
    private readonly sampleRate;
    constructor(stream: MediaStream, sampleRate?: number);
    getEnergy(): number;
    start(onAudioCallback: (data: string) => void): Promise<boolean>;
    stop(): void;
    getSampleRate(): number;
    private sendAudio;
}
/**
 * An audio capturer that uses a blob audio file to capture audio. Used as a
 * development aid when a microphone isn't available or convenient.
 */
export declare class BlobAudioCapturer implements AudioCapturer {
    private static readonly SAMPLE_RATE;
    private audioContext;
    private onAudioCallback;
    private sendPromise;
    private isInjecting;
    private audioPlayer;
    private get isStopped();
    constructor();
    start(onAudioCallback: (data: string) => void): Promise<boolean>;
    private startSilenceLoop;
    stop(): void;
    getEnergy(): number;
    getSampleRate(): number;
    send(blob: Blob, onSpeechDone?: () => void): Promise<void>;
    private sendInternal;
}
