import type { TtsClient, TtsUtterance } from './tts_client.js';
export declare class WebSpeechTtsClient implements TtsClient {
    static initialize(): WebSpeechTtsClient;
    private synth_;
    readonly priority = 0;
    play(ttsUtterance: TtsUtterance): void;
    stop(): void;
    pause(): void;
    resume(): void;
    getVoices(): SpeechSynthesisVoice[];
    setOnVoicesChanged(callback: () => void): void;
    isNatural(voice: SpeechSynthesisVoice): boolean;
    isGoogle(voice: SpeechSynthesisVoice): boolean;
}
