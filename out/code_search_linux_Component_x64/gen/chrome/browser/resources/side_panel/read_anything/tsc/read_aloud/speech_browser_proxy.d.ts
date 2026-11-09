export interface SpeechBrowserProxy {
    cancel(): void;
    getVoices(): SpeechSynthesisVoice[];
    pause(): void;
    resume(): void;
    setOnVoicesChanged(onvoiceschanged: (event: Event) => void): void;
    speak(utterance: SpeechSynthesisUtterance): void;
}
export declare class SpeechBrowserProxyImpl implements SpeechBrowserProxy {
    private synth_;
    constructor();
    cancel(): void;
    getVoices(): SpeechSynthesisVoice[];
    pause(): void;
    resume(): void;
    setOnVoicesChanged(onvoiceschanged: (event: Event) => void): void;
    speak(utterance: SpeechSynthesisUtterance): void;
    static getInstance(): SpeechBrowserProxy;
    static setInstance(obj: SpeechBrowserProxy): void;
}
