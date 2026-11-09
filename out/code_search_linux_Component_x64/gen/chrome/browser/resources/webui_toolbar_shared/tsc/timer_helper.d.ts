/**
 * A helper class for handling a single timer. Starting it will cancel any
 * previously pending timer it was managing. This is useful to avoid having to
 * manually keep track of any old running timers to cancel them when starting
 * a new one, when that behavior is desired.
 */
export declare class TimerHelper {
    private timerId_;
    setTimeout: (func: Function, delay?: number, ...args: any[]) => void;
    clearTimeout: () => void;
    isRunning: () => boolean;
}
