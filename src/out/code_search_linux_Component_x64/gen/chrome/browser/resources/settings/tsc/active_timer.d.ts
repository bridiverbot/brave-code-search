/**
 * Tracks the amount of time a user actively engages with a page.
 *
 * This timer uses the Page Lifecycle API to accurately measure active time and
 * emits a metric when the page is closed, navigated away from, or enters the
 * back/forward cache (BFCache). It pauses the timer when the page loses focus
 * or becomes hidden, reducing inaccuracies for long background sessions.
 */
export declare class ActiveTimer {
    private activeStartTime_;
    private totalActiveTime_;
    private isRunning_;
    private onEmit_;
    private metricEmitted_;
    private listenersAdded_;
    private visibilityChangeListener_;
    private focusListener_;
    private blurListener_;
    private pagehideListener_;
    private pageshowListener_;
    constructor(onEmit: (duration: number) => void);
    private resetState_;
    start(): void;
    stop(): void;
    private isActive_;
    private startTimer_;
    private pauseTimer_;
    private updateTimer_;
    private emit_;
}
