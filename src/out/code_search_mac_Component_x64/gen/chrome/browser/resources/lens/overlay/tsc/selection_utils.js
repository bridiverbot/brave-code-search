// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Utility file for storing shared types and helper functions for
 * the different selection components.
 */
// The number of pixels the pointer needs to move before being considered a drag
export const DRAG_THRESHOLD = 5;
export var DragFeature;
(function (DragFeature) {
    DragFeature[DragFeature["NONE"] = 0] = "NONE";
    DragFeature[DragFeature["TEXT"] = 1] = "TEXT";
    DragFeature[DragFeature["MANUAL_REGION"] = 2] = "MANUAL_REGION";
    DragFeature[DragFeature["POST_SELECTION"] = 3] = "POST_SELECTION";
})(DragFeature || (DragFeature = {}));
export var GestureState;
(function (GestureState) {
    // No gesture is currently happening.
    GestureState[GestureState["NOT_STARTED"] = 0] = "NOT_STARTED";
    // A gesture is starting, indicated by a pointerdown event.
    GestureState[GestureState["STARTING"] = 1] = "STARTING";
    // A drag is currently happening, indicated by pointer moving far enough away
    // from the initial gesture position.
    GestureState[GestureState["DRAGGING"] = 2] = "DRAGGING";
    // A drag is finished, indicated by a pointerup event.
    GestureState[GestureState["FINISHED"] = 3] = "FINISHED";
})(GestureState || (GestureState = {}));
export var CursorType;
(function (CursorType) {
    CursorType[CursorType["DEFAULT"] = 0] = "DEFAULT";
    CursorType[CursorType["POINTER"] = 1] = "POINTER";
    CursorType[CursorType["CROSSHAIR"] = 2] = "CROSSHAIR";
    CursorType[CursorType["TEXT"] = 3] = "TEXT";
})(CursorType || (CursorType = {}));
// Specifies which feature is requesting to control the Shimmer. Features are
// ordered by priority, meaning requesters with higher enum values can take
// control from lower value requesters, but not vice versa. For example, if
// CURSOR is the requester, and a new focus region gets called for SEGMENTATION,
// the focus region request will be executed. But if CURSOR sends a focus region
// request while SEGMENTATION has control, the request will be ignored.
export var ShimmerControlRequester;
(function (ShimmerControlRequester) {
    ShimmerControlRequester[ShimmerControlRequester["NONE"] = 0] = "NONE";
    ShimmerControlRequester[ShimmerControlRequester["CURSOR"] = 1] = "CURSOR";
    ShimmerControlRequester[ShimmerControlRequester["POST_SELECTION"] = 2] = "POST_SELECTION";
    ShimmerControlRequester[ShimmerControlRequester["SEGMENTATION"] = 3] = "SEGMENTATION";
    ShimmerControlRequester[ShimmerControlRequester["SEARCHBOX"] = 4] = "SEARCHBOX";
    ShimmerControlRequester[ShimmerControlRequester["MANUAL_REGION"] = 5] = "MANUAL_REGION";
    ShimmerControlRequester[ShimmerControlRequester["TRANSLATE"] = 6] = "TRANSLATE";
})(ShimmerControlRequester || (ShimmerControlRequester = {}));
// Returns an empty GestureEvent
export function emptyGestureEvent() {
    return {
        state: GestureState.NOT_STARTED,
        startX: 0,
        startY: 0,
        clientX: 0,
        clientY: 0,
    };
}
/**
 * Helper function to dispatch event to focus the shimmer on a region. This
 * should be used instead of directly dispatching the event, so if
 * implementation changes, it can be easily changed across the codebase.
 */
export function focusShimmerOnRegion(dispatchEl, top, left, width, height, requester) {
    dispatchEl.dispatchEvent(new CustomEvent('focus-region', {
        bubbles: true,
        composed: true,
        detail: {
            top,
            left,
            width,
            height,
            requester,
        },
    }));
}
/**
 * Helper function to dispatch event to unfocus the shimmer. This should be used
 * instead of directly dispatching the event, so if implementation changes, it
 * can be easily changed across the codebase.
 */
export function unfocusShimmer(dispatchEl, requester) {
    dispatchEl.dispatchEvent(new CustomEvent('unfocus-region', {
        bubbles: true,
        composed: true,
        detail: { requester },
    }));
}
// Converts the clientX and clientY to be relative to the given parent bounds
// instead of the viewport. If the event is out of the parent bounds, returns
// the closest point to those bounds.
export function getRelativeCoordinate(coord, parentBounds) {
    return {
        x: Math.max(0, Math.min(coord.x, parentBounds.right) - parentBounds.left),
        y: Math.max(0, Math.min(coord.y, parentBounds.bottom) - parentBounds.top),
    };
}
// Normalizes a list of points to the parent bounds.
export function normalizePoints(points, parentBounds) {
    return points.map(p => {
        const relative = getRelativeCoordinate(p, parentBounds);
        return {
            x: relative.x / parentBounds.width,
            y: relative.y / parentBounds.height,
        };
    });
}
// Calculates a bounding box from a list of normalized points.
export function calculateBoundingBox(points) {
    let minX = 1;
    let minY = 1;
    let maxX = 0;
    let maxY = 0;
    points.forEach(p => {
        minX = Math.min(minX, p.x);
        minY = Math.min(minY, p.y);
        maxX = Math.max(maxX, p.x);
        maxY = Math.max(maxY, p.y);
    });
    return {
        top: minY,
        left: minX,
        width: maxX - minX,
        height: maxY - minY,
    };
}
// Calculates a center rotated box from a list of normalized points.
export function calculateCenterRotatedBox(points) {
    const bounds = calculateBoundingBox(points);
    return {
        box: {
            x: bounds.left + (bounds.width / 2),
            y: bounds.top + (bounds.height / 2),
            width: bounds.width,
            height: bounds.height,
        },
        rotation: 0,
    };
}
