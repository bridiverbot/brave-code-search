/**
 * @fileoverview A debouncer which fires the given callback after a delay. The
 * delay can be refreshed by calling restartTimeout. Resetting the timeout with
 * no delay moves the callback to the end of the task queue.
 */
export declare class Debouncer {
    private callback_;
    private timer_;
    private timerProxy_;
    private boundTimerCallback_;
    private isDone_;
    private promiseResolver_;
    constructor(callback: () => void);
    /**
     * Starts the timer for the callback, cancelling the old timer if there is
     * one.
     */
    restartTimeout(delay?: number): void;
    done(): boolean;
    get promise(): Promise<void>;
    /**
     * Resets the debouncer as if it had been newly instantiated.
     */
    reset(): void;
    /**
     * Cancel the timer callback, which can be restarted by calling
     * restartTimeout().
     */
    private cancelTimeout_;
    private timerCallback_;
}
