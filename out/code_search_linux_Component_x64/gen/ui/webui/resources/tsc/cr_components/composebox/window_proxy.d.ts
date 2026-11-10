declare global {
    interface Window {
        webkitSpeechRecognition: typeof SpeechRecognition;
    }
}
export declare class WindowProxy {
    static getInstance(): WindowProxy;
    static setInstance(obj: WindowProxy): void;
    setTimeout(callback: () => void, duration: number): number;
    clearTimeout(id: number | null): void;
    navigate(url: string): void;
    matchMedia(query: string): MediaQueryList;
    hasWebkitSpeechRecognition(): boolean;
    createSpeechRecognition(): SpeechRecognition;
}
