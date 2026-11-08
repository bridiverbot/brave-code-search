// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { getMostCommonPitch, getRectIndexAtY } from '../shared/rect_calculations.js';
// Base class for the visual style of the line focus element (e.g. a
// single line vs a larger window).
export class LineFocusStyleMode {
    style_;
    model_;
    constructor(style_, model_) {
        this.style_ = style_;
        this.model_ = model_;
    }
    // Returns the style of this style strategy.
    getStyle() {
        return this.style_;
    }
    // Returns how far from the center the current focal point is if it is outside
    // the viewport. Returns 0 otherwise.
    getOffScreenDiff(targetIndex) {
        const textBounds = this.model_.getTextBounds();
        const { topRect, bottomRect } = this.getFocusWindowBounds(textBounds, targetIndex);
        if (bottomRect.bottom > this.model_.getMaxY() ||
            topRect.top < this.model_.getMinY()) {
            const center = this.getFocalPoint(topRect, bottomRect);
            return center - this.getCenterY();
        }
        return 0;
    }
    // Returns how far from the center the current focal point is.
    getCenterDiff(targetIndex) {
        const textBounds = this.model_.getTextBounds();
        const { topRect, bottomRect } = this.getFocusWindowBounds(textBounds, targetIndex);
        const center = this.getFocalPoint(topRect, bottomRect);
        return center - this.getCenterY();
    }
    // Returns where the center of the focus element should be in the focus area
    // outlined by the given rects.
    getDesiredCenter(targetIndex) {
        const textBounds = this.model_.getTextBounds();
        const { topRect, bottomRect } = this.getFocusWindowBounds(textBounds, targetIndex);
        return this.getFocalPoint(topRect, bottomRect);
    }
}
// Style strategy for focusing on a single line with an underline effect.
export class LineFocusLineStyleMode extends LineFocusStyleMode {
    constructor(style, model) {
        super(style, model);
    }
    getCenterY() {
        // Because underline style is rendered directly under a line of text,
        // offsetting by the toolbar / minY can sometimes cause the underline
        // to be placed directly through the center of the text when scrolling
        // automatically, so the vertical midpoint should only be calculated using
        // maxY.
        return this.model_.getMaxY() / 2;
    }
    updateFocusBounds() {
        this.model_.setTop(this.model_.getFocalPoint());
        this.model_.setWindowHeight(0);
    }
    getFocalPointForRect(bounds) {
        return bounds.bottom;
    }
    getBottomIndex(focalIndex) {
        return focalIndex;
    }
    clampLineIndex(index) {
        return index;
    }
    shouldAdaptToTextBounds() {
        // No need to update the focus area in line mode since the size of the line
        // does not affect the underline size.
        return false;
    }
    // The focus "window" is just the line itself.
    getFocusWindowBounds(lines, targetIndex) {
        assert(targetIndex >= 0 && targetIndex < lines.length);
        const rect = lines[targetIndex];
        return {
            topRect: rect,
            bottomRect: rect,
        };
    }
    getFocalPoint(_topRect, bottomRect) {
        return bottomRect.bottom;
    }
}
// Style strategy for focusing on a window of one or more lines.
export class LineFocusWindowStyleMode extends LineFocusStyleMode {
    constructor(style, model) {
        super(style, model);
    }
    getCenterY() {
        // Because window style is rendered centered around a line of text,
        // the vertical midpoint should be offset by the toolbar (minY) in
        // order to ensure the window is properly centered around the current
        // line(s) when scrolling automatically.
        return (this.model_.getMinY() + this.model_.getMaxY()) / 2;
    }
    updateFocusBounds() {
        const bounds = this.model_.getTextBounds();
        if (bounds.length === 0) {
            return;
        }
        // Use a set height to calculate a multi-line window if the window should
        // not adapt to the line heights.
        if (!this.shouldAdaptToTextBounds()) {
            const center = this.getCenterY();
            const mostCommonPitch = getMostCommonPitch(bounds);
            const windowHeight = mostCommonPitch * this.style_.lines;
            this.model_.setTop(center - (windowHeight / 2));
            this.model_.setWindowHeight(windowHeight);
            return;
        }
        const currentLineIndex = this.model_.getCurrentLineIndex() ??
            getRectIndexAtY(this.model_.getFocalPoint(), this.model_.getTextBounds(), true);
        if (this.style_.lines === 1) {
            // This is essentially what the math below comes out to when lines === 1,
            // so the simplified way is written here for easier understanding.
            this.model_.setTop(bounds[currentLineIndex].top);
            this.model_.setWindowHeight(bounds[currentLineIndex].height);
            return;
        }
        const numLines = this.style_.lines;
        const topIndex = currentLineIndex - ((numLines - 1) / 2);
        const maxTopIndex = bounds.length - numLines;
        // Find first line that is visible.
        const findIndexResult = bounds.findIndex(rect => rect.top >= this.model_.getMinY());
        const minTopIndex = findIndexResult === -1 ? 0 : findIndexResult;
        const validTopIndex = Math.max(minTopIndex, Math.min(maxTopIndex, Math.floor(topIndex)));
        const topLine = bounds[validTopIndex];
        assert(topLine);
        this.model_.setTop(topLine.top);
        const bottomIndex = (validTopIndex + numLines - 1);
        const bottomRect = bounds[bottomIndex];
        const bottom = bottomRect ? bottomRect.bottom : bounds.at(-1).bottom;
        this.model_.setWindowHeight(bottom - this.model_.getTop());
    }
    getFocalPointForRect(bounds) {
        return (bounds.top + bounds.bottom) / 2;
    }
    getBottomIndex(focalIndex) {
        return this.shouldAdaptToTextBounds() ?
            focalIndex + ((this.style_.lines - 1) / 2) :
            focalIndex;
    }
    // The bottom of the window should not go below the last line in the content
    // panel and the top should not go above the first line of the panel.
    clampLineIndex(index) {
        const bounds = this.model_.getTextBounds();
        if (bounds.length === 0) {
            return 0;
        }
        if (!this.shouldAdaptToTextBounds()) {
            return index;
        }
        const numLines = this.style_.lines;
        const offset = Math.floor((numLines - 1) / 2);
        const maxIndex = bounds.length - 1;
        const minIndex = maxIndex - offset;
        const clampedIndex = Math.max(offset, Math.min(minIndex, index));
        // Fallback safety to return a valid index in [0, maxIndex] even when the
        // requested window size is larger than the available lines.
        return Math.max(0, Math.min(maxIndex, clampedIndex));
    }
    shouldAdaptToTextBounds() {
        return this.style_.lines === 1 || this.model_.getAdaptMultiLineWindow();
    }
    // The focus window spans multiple lines around the center index.
    getFocusWindowBounds(lines, targetIndex) {
        const numLines = this.style_.lines;
        const offset = Math.floor((numLines - 1) / 2);
        const topIndex = Math.max(0, targetIndex - offset);
        const bottomIndex = Math.min(lines.length - 1, topIndex + numLines - 1);
        const topRect = lines[Math.floor(topIndex)];
        const bottomRect = lines[Math.floor(bottomIndex)];
        return {
            topRect,
            bottomRect,
        };
    }
    getFocalPoint(topRect, bottomRect) {
        return (topRect.top + bottomRect.bottom) / 2;
    }
}
// Style strategy for when line focus is disabled.
export class LineFocusNoneStyleMode extends LineFocusStyleMode {
    constructor(style, model) {
        super(style, model);
    }
    updateFocusBounds() {
        // No-op.
    }
    getFocalPointForRect(_bounds) {
        // The focus area should never be drawn when line focus is disabled.
        return 0;
    }
    getBottomIndex(_focalIndex) {
        // The focus area should never be drawn when line focus is disabled.
        return 0;
    }
    clampLineIndex(_index) {
        // The focus area should never be drawn when line focus is disabled.
        return 0;
    }
    shouldAdaptToTextBounds() {
        // Do nothing when line focus is disabled.
        return false;
    }
    getCenterY() {
        // The center Y isn't needed when line focus is disabled.
        return 0;
    }
    getFocusWindowBounds(_lines, _targetIndex) {
        // The focus area should never be drawn when line focus is disabled.
        const emptyRect = new DOMRect();
        return {
            topRect: emptyRect,
            bottomRect: emptyRect,
        };
    }
    getFocalPoint(_topRect, _bottomRect) {
        // The focus area should never be drawn when line focus is disabled.
        return 0;
    }
}
