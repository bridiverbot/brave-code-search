/**
 * Handles audio playback.
 */
export declare class AudioPlayer {
    private readonly sampleRate;
    private audioContext;
    private analyser;
    private nextStartTime;
    private sources;
    private onDone?;
    private onStart?;
    private doneTimeout;
    constructor(onStart?: () => void, onDone?: () => void, sampleRate?: number);
    getEnergy(): number;
    isPlaying(): boolean;
    play(base64Data: string): void;
    playPcmBytes(bytes: Uint8Array): void;
    playBuffer(buffer: AudioBuffer): void;
    stop(): void;
}
