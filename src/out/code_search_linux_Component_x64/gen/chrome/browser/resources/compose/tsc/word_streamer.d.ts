export declare class WordStreamer {
    callback: (words: string[], isComplete: boolean) => void;
    private msPerTick_;
    private charsPerTick_;
    private msWaitBeforeComplete_;
    private words_;
    private displayState_;
    private nextTick_;
    private finalTick_;
    private finalTextReceived_;
    constructor(callback: (words: string[], isComplete: boolean) => void);
    reset(): void;
    setText(text: string, isFinal: boolean): void;
    private scheduleUpdate;
    private tick;
    setMsPerTickForTesting(msPerTick: number): void;
    setCharsPerTickForTesting(charsPerTick: number): void;
    setMsWaitBeforeCompleteForTesting(msWaitBeforeComplete: number): void;
}
