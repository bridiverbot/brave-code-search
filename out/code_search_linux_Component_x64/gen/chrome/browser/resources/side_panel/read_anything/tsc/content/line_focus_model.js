// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
export class LineFocusModel {
    // The min y position allowed for the line focus element.
    minY_ = 0;
    // The max y position allowed for the line focus element.
    maxY_ = 0;
    // The focal point y position of the line focus element. If the element is a
    // line, this is where the top of the line should go. If the element is a
    // window, this is where the center of the window should go.
    focalPoint_ = 0;
    // The top value of the line focus element. If the element is a line, this is
    // equal to focalPoint_. If the element is a window, this is the top of the
    // window.
    top_ = 0;
    // The height of the line focus element if it is a window. This should be 0
    // otherwise.
    windowHeight_ = 0;
    // Whether a multi-line window focus should adapt to the current line heights.
    adaptMultiLineWindow_ = false;
    // The current style and move mode strategy instances.
    currentStyleMode_;
    currentMoveMode_;
    // Whether a line focus session is currently active.
    isSessionActive_ = false;
    // The index of the current line in textLineBottoms_ being focused. Null if
    // line focus is moving continuously with the mouse instead of discretely.
    currentLineIndex_ = null;
    // The precomputed bounding boxes of each line of text.
    textBounds_ = [];
    // Used for logging line focus session scroll distance.
    lastScrollTop_ = 0;
    // Whether line focus caused the latest scroll action.
    initiatedScroll_ = false;
    getMinY() {
        return this.minY_;
    }
    setMinY(y) {
        this.minY_ = y;
    }
    getMaxY() {
        return this.maxY_;
    }
    setMaxY(y) {
        this.maxY_ = y;
    }
    getFocalPoint() {
        return this.focalPoint_;
    }
    setFocalPoint(focalPoint) {
        this.focalPoint_ = focalPoint;
    }
    getTop() {
        return this.top_;
    }
    setTop(top) {
        this.top_ = top;
    }
    getWindowHeight() {
        return this.windowHeight_;
    }
    setWindowHeight(height) {
        this.windowHeight_ = height;
    }
    getAdaptMultiLineWindow() {
        return this.adaptMultiLineWindow_;
    }
    setAdaptMultiLineWindow(adapt) {
        this.adaptMultiLineWindow_ = adapt;
    }
    getCurrentStyleMode() {
        assert(this.currentStyleMode_, 'You must set the default style mode!');
        return this.currentStyleMode_;
    }
    setCurrentStyleMode(styleMode) {
        this.currentStyleMode_ = styleMode;
    }
    getCurrentMoveMode() {
        assert(this.currentMoveMode_, 'You must set the default move mode!');
        return this.currentMoveMode_;
    }
    setCurrentMoveMode(moveMode) {
        this.currentMoveMode_ = moveMode;
    }
    isSessionActive() {
        return this.isSessionActive_;
    }
    setSessionActive(active) {
        this.isSessionActive_ = active;
    }
    getCurrentLineIndex() {
        return this.currentLineIndex_;
    }
    setCurrentLineIndex(index) {
        this.currentLineIndex_ = index;
    }
    getTextBounds() {
        return this.textBounds_;
    }
    setTextBounds(bounds) {
        this.textBounds_ = bounds;
    }
    getLastScrollTop() {
        return this.lastScrollTop_;
    }
    setLastScrollTop(top) {
        this.lastScrollTop_ = top;
    }
    getInitiatedScroll() {
        return this.initiatedScroll_;
    }
    setInitiatedScroll(initiated) {
        this.initiatedScroll_ = initiated;
    }
    // Resets the model to its initial state.
    reset() {
        this.minY_ = 0;
        this.maxY_ = 0;
        this.focalPoint_ = 0;
        this.top_ = 0;
        this.windowHeight_ = 0;
        this.textBounds_ = [];
        this.currentLineIndex_ = null;
        this.lastScrollTop_ = 0;
        this.initiatedScroll_ = false;
        this.isSessionActive_ = false;
        this.adaptMultiLineWindow_ = false;
    }
}
