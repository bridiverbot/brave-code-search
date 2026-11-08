/**
 * @fileoverview Utility file for storing shared types and helper functions for
 * the different selection components.
 */
export declare const DRAG_THRESHOLD = 5;
export declare enum DragFeature {
    NONE = 0,
    TEXT = 1,
    MANUAL_REGION = 2,
    POST_SELECTION = 3
}
export declare enum GestureState {
    NOT_STARTED = 0,
    STARTING = 1,
    DRAGGING = 2,
    FINISHED = 3
}
export declare enum CursorType {
    DEFAULT = 0,
    POINTER = 1,
    CROSSHAIR = 2,
    TEXT = 3
}
export declare enum ShimmerControlRequester {
    NONE = 0,
    CURSOR = 1,
    POST_SELECTION = 2,
    SEGMENTATION = 3,
    SEARCHBOX = 4,
    MANUAL_REGION = 5,
    TRANSLATE = 6
}
export interface OverlayShimmerFocusedRegion {
    top: number;
    left: number;
    width: number;
    height: number;
    requester: ShimmerControlRequester;
}
export interface OverlayShimmerUnfocusRegion {
    requester: ShimmerControlRequester;
}
export interface GestureEvent {
    state: GestureState;
    startX: number;
    startY: number;
    clientX: number;
    clientY: number;
}
/** A simple interface representing a point. */
export interface Point {
    x: number;
    y: number;
}
export declare function emptyGestureEvent(): GestureEvent;
/**
 * Helper function to dispatch event to focus the shimmer on a region. This
 * should be used instead of directly dispatching the event, so if
 * implementation changes, it can be easily changed across the codebase.
 */
export declare function focusShimmerOnRegion(dispatchEl: HTMLElement, top: number, left: number, width: number, height: number, requester: ShimmerControlRequester): void;
/**
 * Helper function to dispatch event to unfocus the shimmer. This should be used
 * instead of directly dispatching the event, so if implementation changes, it
 * can be easily changed across the codebase.
 */
export declare function unfocusShimmer(dispatchEl: HTMLElement, requester: ShimmerControlRequester): void;
export declare function getRelativeCoordinate(coord: Point, parentBounds: DOMRect): Point;
export declare function normalizePoints(points: Point[], parentBounds: DOMRect): Point[];
export declare function calculateBoundingBox(points: Point[]): {
    top: number;
    left: number;
    width: number;
    height: number;
};
export declare function calculateCenterRotatedBox(points: Point[]): {
    box: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    rotation: number;
};
