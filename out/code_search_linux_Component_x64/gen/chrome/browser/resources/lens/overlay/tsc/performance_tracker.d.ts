/**
 * A class that keeps track of and records metrics related to FPS.
 */
export declare class PerformanceTracker {
    private totalFrameCount;
    private firstFrameTimestamp?;
    private lastFrameTimestamp?;
    private onAnimationFrameRequestId?;
    reset(): void;
    /**
     * Starts recording FPS metrics.
     */
    startSession(): void;
    /**
     * Ends the FPS metrics session and records the performance metrics.
     */
    endSession(): void;
    private onAnimationFrame;
}
