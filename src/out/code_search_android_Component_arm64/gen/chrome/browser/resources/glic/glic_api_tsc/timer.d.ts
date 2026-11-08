export declare class OneShotTimer {
    private delayMs;
    private timerId;
    private promiseReject;
    constructor(delayMs: number);
    reset(): void;
    start(callback: () => void): void;
    startPromise(): Promise<void>;
}
