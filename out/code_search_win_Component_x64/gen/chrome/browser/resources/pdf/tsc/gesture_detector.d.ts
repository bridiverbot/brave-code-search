import type { Point } from './constants.js';
export interface Gesture {
    type: string;
    detail: PinchEventDetail;
}
export interface PinchEventDetail {
    center: Point;
    direction?: string;
    scaleRatio?: number | null;
    startScaleRatio?: number | null;
}
export declare class GestureDetector {
    private element_;
    private pinchStartEvent_;
    private lastTouchTouchesCount_;
    private lastEvent_;
    private isPresentationMode_;
    /**
     * The scale relative to the start of the pinch when handling ctrl-wheels.
     * null when there is no ongoing pinch.
     */
    private accumulatedWheelScale_;
    /**
     * A timeout ID from setTimeout used for sending the pinchend event when
     * handling ctrl-wheels.
     */
    private wheelEndTimeout_;
    private eventTarget_;
    /** @param element The element to monitor for touch gestures. */
    constructor(element: HTMLElement);
    setPresentationMode(enabled: boolean): void;
    getEventTarget(): EventTarget;
    /**
     * Public for tests.
     * @return True if the last touch start was a two finger touch.
     */
    wasTwoFingerTouch(): boolean;
    /**
     * Call the relevant listeners with the given |PinchEventDetail|.
     * @param type The type of pinch event.
     * @param detail The event to notify the listeners of.
     */
    private notify_;
    /** The callback for touchstart events on the element. */
    private onTouchStart_;
    /** The callback for touch move, end, and cancel events on the element. */
    private onTouch_;
    /** The callback for wheel events on the element. */
    private onWheel_;
    private handleContextMenuEvent_;
}
