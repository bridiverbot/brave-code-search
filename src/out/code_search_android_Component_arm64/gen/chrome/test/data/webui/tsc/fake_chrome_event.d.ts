export declare class FakeChromeEvent {
    private listeners_;
    addListener(listener: Function): void;
    removeListener(listener: Function): void;
    callListeners(...args: any[]): void;
}
