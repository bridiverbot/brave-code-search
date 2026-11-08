export interface SwipeEvent {
    type: string;
    detail: SwipeDirection;
}
/** Enumeration of swipe directions. */
export declare enum SwipeDirection {
    RIGHT_TO_LEFT = 0,
    LEFT_TO_RIGHT = 1
}
export declare class SwipeDetector {
    private element_;
    private isPresentationMode_;
    private swipeStartEvent_;
    private elapsedTimeForTesting_;
    private eventTarget_;
    /** @param element The element to monitor for touch gestures. */
    constructor(element: HTMLElement);
    /**
     * Public for tests. Allow manually setting the elapsed time for a swipe
     * action.
     */
    setElapsedTimerForTesting(time: number): void;
    setPresentationMode(enabled: boolean): void;
    getPresentationModeForTesting(): boolean;
    getEventTarget(): EventTarget;
    /**
     * Call the relevant listeners with the given swipe |direction|.
     * @param direction The direction of swipe action.
     */
    private notify_;
    /** The callback for touchstart events on the element. */
    private onTouchStart_;
    /** The callback for touchcancel events on the element. */
    private onTouchCancel_;
    /** The callback for touchend events on the element. */
    private onTouchEnd_;
}
