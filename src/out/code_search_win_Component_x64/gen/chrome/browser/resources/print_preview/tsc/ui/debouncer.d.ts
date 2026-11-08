export declare class Debouncer {
    private duration_;
    private timeoutId_;
    constructor(duration: number);
    clear(): void;
    call(fn: () => void): void;
}
