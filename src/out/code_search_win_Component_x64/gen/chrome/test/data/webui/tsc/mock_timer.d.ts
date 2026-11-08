export declare class MockTimer {
    /** Default versions of the timing functions. */
    private originals_;
    /**
     * Key to assign on the next creation of a scheduled timer. Each call to
     * setTimeout or setInterval returns a unique key that can be used for
     * clearing the timer.
     */
    private nextTimerKey_;
    /** Details for active timers. */
    private timers_;
    /** List of scheduled tasks. */
    private schedule_;
    /** Virtual elapsed time in milliseconds. */
    private now_;
    /**
     * Used to control when scheduled callbacks fire.  Calling the 'tick' method
     * inflates this parameter and triggers callbacks.
     */
    private until_;
    /**
     * Replaces built-in functions for scheduled callbacks.
     */
    install(): void;
    /**
     * Restores default behavior for scheduling callbacks.
     */
    uninstall(): void;
    /**
     * Overrides a global function.
     * @param functionName The name of the function.
     * @param replacementFunction The function override.
     */
    private replace_;
    /**
     * Creates a virtual timer.
     * @param callback The callback function.
     * @param delayInMs The virtual delay in milliseconds.
     * @param repeats Indicates if the timer repeats.
     * @return Identifier for the timer.
     */
    private createTimer_;
    /**
     * Schedules a callback for execution after a virtual time delay. The tasks
     * are sorted in descending order of time delay such that the next callback
     * to fire is at the end of the list.
     * @param details The timer details.
     */
    private scheduleTask_;
    /**
     * Override of window.setInterval.
     * @param callback The callback function.
     * @param intervalInMs The repeat interval.
     */
    private setInterval_;
    /**
     * Override of window.clearInterval.
     * @param key The ID of the interval timer returned from setInterval.
     */
    private clearInterval_;
    /**
     * Override of window.setTimeout.
     * @param callback The callback function.
     * @param delayInMs The scheduled delay.
     */
    private setTimeout_;
    /**
     * Override of window.clearTimeout.
     * @param key The ID of the schedule timeout callback returned
     *     from setTimeout.
     */
    private clearTimeout_;
    /**
     * Simulates passage of time, triggering any scheduled callbacks whose timer
     * has elapsed.
     * @param elapsedMs The simulated elapsed time in milliseconds.
     */
    tick(elapsedMs: number): void;
    /**
     * Triggers any callbacks that should have fired based in the simulated
     * timing.
     */
    private fireElapsedCallbacks_;
}
