// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { SpeechController } from '../read_aloud/speech_controller.js';
import { getRectsForSegments } from '../shared/dom_queries.js';
import { MetricsBrowserProxyImpl } from '../shared/metrics_browser_proxy.js';
import { calculateTextBounds, getLineForRect, getRectIndexAtY } from '../shared/rect_calculations.js';
import { LineFocusMovement, LineFocusNotificationType } from './read_anything_types.js';
// Used to prevent microadjustments of the line focus window when adjusting to
// new line heights as it can be distracting for no functional difference.
// Determined by experimentation and should be tweaked as needed.
const BASE_MOVEMENT_THRESHOLD = 8;
// Base class for line focus movement strategies.
export class LineFocusMoveMode {
    model_;
    styleMode_;
    delegate_;
    movementThreshold = BASE_MOVEMENT_THRESHOLD;
    // Tracks the scroller scrollTop position across frames during smooth
    // scrolling to calculate frame-by-frame scroll differences.
    lastFrameScrollTop_ = null;
    // Cached container and viewport height to enable recalculating fresh text
    // bounds when repositioning the focal point.
    textContentContainer_ = null;
    viewportHeight_ = 0;
    speechController_ = SpeechController.getInstance();
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    constructor(model_, styleMode_, delegate_) {
        this.model_ = model_;
        this.styleMode_ = styleMode_;
        this.delegate_ = delegate_;
    }
    // Snaps the focus to the next or previous text line.
    snapToNextLine(isForward) {
        const lines = this.model_.getTextBounds();
        if (!lines.length) {
            return false;
        }
        // If this is the first time snapping after mouse movement, move to the
        // closest line to the current Y.
        const currentIndex = this.model_.getCurrentLineIndex();
        if (currentIndex === null) {
            this.initializeSnapIndex(isForward);
            const linesToLog = this.styleMode_.getStyle().lines;
            for (let i = 0; i < linesToLog; i++) {
                this.metricsBrowserProxy_.incrementLineFocusKeyboardLines();
            }
        }
        else {
            this.updateSnapIndex_(currentIndex, isForward);
        }
        return true;
    }
    // Updates focus when speech reaches a new word boundary.
    onWordBoundary(segments) {
        const rects = getRectsForSegments(segments);
        if (rects.length === 0) {
            return;
        }
        const rect = rects[0];
        const targetRect = getLineForRect(rect, this.model_.getTextBounds()) ?? rect;
        if (Math.abs(this.model_.getFocalPoint() -
            this.styleMode_.getFocalPointForRect(targetRect)) > 2) {
            this.metricsBrowserProxy_.incrementLineFocusSpeechLines();
        }
        this.moveToRect(targetRect);
    }
    recenterCurrentTextLineIfNeeded(instant) {
        const bounds = this.model_.getTextBounds();
        if (bounds.length === 0) {
            return false;
        }
        const currentIndex = this.model_.getCurrentLineIndex() ??
            this.getSafeIndex(/*isForward=*/ true);
        const scrollDiff = this.getScrollDiffForRecentering(currentIndex);
        if (Math.abs(scrollDiff) > this.movementThreshold) {
            this.scroll(scrollDiff, instant);
            return true;
        }
        return false;
    }
    setFocalPoint(focalPointY, notificationType) {
        this.model_.setFocalPoint(focalPointY);
        this.styleMode_.updateFocusBounds();
        if (notificationType === LineFocusNotificationType.NONE) {
            return;
        }
        if (notificationType === LineFocusNotificationType.CONTENT) {
            this.delegate_.notifyMoveWithContentPositionChange();
        }
        else {
            this.delegate_.notifyMoveWithVisualPositionChange();
        }
    }
    getSafeIndex(isForward) {
        const lines = this.model_.getTextBounds();
        const rawIndex = getRectIndexAtY(this.model_.getFocalPoint(), lines, isForward);
        return this.styleMode_.clampLineIndex(rawIndex);
    }
    scroll(scrollDiff, instant) {
        if (Math.abs(scrollDiff) < this.movementThreshold) {
            return;
        }
        this.model_.setInitiatedScroll(true);
        this.delegate_.notifyScroll(scrollDiff, instant);
    }
    resetScrollState(newScrollTop) {
        const distance = Math.round(Math.abs(newScrollTop - this.model_.getLastScrollTop()));
        this.metricsBrowserProxy_.addLineFocusScrollDistance(distance);
        this.model_.setLastScrollTop(newScrollTop);
        // If the scroll was not initiated by line focus, then reset which line is
        // currently focused.
        if (!this.model_.getInitiatedScroll()) {
            this.model_.setCurrentLineIndex(null);
        }
        this.model_.setInitiatedScroll(false);
        this.lastFrameScrollTop_ = null;
    }
    initializeSnapIndex(isForward) {
        const lines = this.model_.getTextBounds();
        const safeIndex = this.getSafeIndex(isForward);
        this.model_.setCurrentLineIndex(safeIndex);
        assert(safeIndex < lines.length);
        this.moveToRect(lines[safeIndex]);
    }
    updatePositions(container, height) {
        this.textContentContainer_ = container;
        this.viewportHeight_ = height;
        const { minY, maxY, bounds } = calculateTextBounds(container, height);
        this.model_.setMinY(minY);
        this.model_.setMaxY(maxY);
        this.model_.setTextBounds(bounds);
        this.movementThreshold =
            BASE_MOVEMENT_THRESHOLD * this.visualBrowserProxy_.getFontSize();
    }
    // Common setup logic for when a movement mode that enables line focus is
    // activated.
    setupEnabledMode(container, height) {
        if (!this.model_.isSessionActive()) {
            this.metricsBrowserProxy_.startLineFocusSession();
            this.model_.setSessionActive(true);
        }
        this.updatePositions(container, height);
        this.updateScrollBuffer();
    }
    updateScrollBuffer() {
        this.delegate_.notifyScrollBuffer(this.needsScrollBuffer());
    }
    getCenterY() {
        return this.styleMode_.getCenterY();
    }
    notifyScrollToTop() {
        this.delegate_.notifyScrollToTop();
    }
    updateSnapIndex_(currentIndex, isForward) {
        const lines = this.model_.getTextBounds();
        assert(lines.length > 0);
        const direction = isForward ? 1 : -1;
        const nextIndex = currentIndex + direction;
        if (nextIndex < 0 ||
            this.styleMode_.getBottomIndex(nextIndex) >= lines.length) {
            return;
        }
        const clampedIndex = this.styleMode_.clampLineIndex(nextIndex);
        this.model_.setCurrentLineIndex(clampedIndex);
        if (this.model_.getCurrentLineIndex() !== currentIndex) {
            this.metricsBrowserProxy_.incrementLineFocusKeyboardLines();
        }
        this.moveToRect(lines[clampedIndex]);
        // If the user has navigated back to the top of the panel, but there's
        // still a little bit left to scroll, scroll to the top.
        if (this.model_.getCurrentLineIndex() === currentIndex) {
            this.notifyScrollToTop();
        }
    }
}
// Movement strategy where the focus element stays centered in the view,
// scrolling the view when needed.
export class LineFocusStaticMoveMode extends LineFocusMoveMode {
    getMovement() {
        return LineFocusMovement.STATIC;
    }
    onActivated(container, height) {
        const notificationType = this.model_.isSessionActive() ? LineFocusNotificationType.VISUAL :
            LineFocusNotificationType.CONTENT;
        this.setupEnabledMode(container, height);
        // In static mode, don't adapt the window size to line height to prevent
        // jarring movement / jitter.
        this.model_.setAdaptMultiLineWindow(false);
        // When switching between Line Focus styles while active (wasEnabled ===
        // true), update the focal point quietly without calling
        // notifyMoveWithContentPositionChange(). This prevents DOM hit-testing and
        // avoids calling onLineFocusChange, which would otherwise reset paused
        // speech or jump the audio. Visual highlight styling is updated via
        // notifyMoveWithVisualPositionChange() below.
        this.setFocalPoint(this.getCenterY(), notificationType);
        // Start at the first text line on activate by scrolling to it if needed.
        this.recenterCurrentTextLineIfNeeded(/*instant=*/ true);
    }
    // Static mode ignores mouse movements.
    onMouseMove(_y) { }
    onMouseMoveInToolbar(_y) { }
    onScrollEnd(newScrollTop) {
        const initiatedScroll = this.model_.getInitiatedScroll();
        this.resetScrollState(newScrollTop);
        // For a user-initiated scroll, notify that the focus is in a different
        // position in the content even though the coordinates are the same. This
        // ensures speaking from the current line focus position works properly.
        if (!initiatedScroll) {
            this.delegate_.notifyMoveWithContentPositionChange();
            return;
        }
        // For a line-focus-initiated scroll, only notify if the focus should adapt
        // to the text bounds.
        if (this.styleMode_.shouldAdaptToTextBounds()) {
            const oldHeight = this.model_.getWindowHeight();
            const oldTop = this.model_.getTop();
            this.styleMode_.updateFocusBounds();
            const heightDiff = Math.abs(oldHeight - this.model_.getWindowHeight());
            const topDiff = Math.abs(oldTop - this.model_.getTop());
            if (heightDiff > this.movementThreshold ||
                topDiff > this.movementThreshold) {
                this.delegate_.notifyMoveWithContentPositionChange();
            }
        }
    }
    onTextLocationsChange(container, height) {
        const previousMaxY = this.model_.getMaxY();
        const previousMinY = this.model_.getMinY();
        const previousBounds = this.model_.getTextBounds();
        this.updatePositions(container, height);
        this.updateScrollBuffer();
        const newBounds = this.model_.getTextBounds();
        const previousSpread = previousBounds.length > 0 ?
            (previousBounds.at(-1).bottom - previousBounds.at(0).top) :
            0;
        const newSpread = newBounds.length > 0 ?
            (newBounds.at(-1).bottom - newBounds.at(0).top) :
            0;
        // Recalculate the focus area if the window size changes or if the text line
        // heights change (represented by the difference between the top of the
        // first line and the bottom of the last line).
        if (Math.abs(newSpread - previousSpread) > this.movementThreshold ||
            previousMaxY !== this.model_.getMaxY() ||
            previousMinY !== this.model_.getMinY()) {
            // Notify of a change even if it's less than the threshold so that the
            // window adapts to the new line heights.
            this.setFocalPoint(this.getCenterY(), 
            /*notificationType=*/ LineFocusNotificationType.VISUAL);
        }
    }
    moveToRect(rect) {
        const focalPoint = this.styleMode_.getFocalPointForRect(rect);
        const scrollDiff = focalPoint - this.model_.getFocalPoint();
        this.scroll(scrollDiff);
    }
    needsScrollBuffer() {
        return true;
    }
    getScrollDiffForRecentering(currentIndex) {
        return this.styleMode_.getCenterDiff(currentIndex);
    }
}
// Movement strategy where the focus element follows the mouse cursor.
export class LineFocusCursorMoveMode extends LineFocusMoveMode {
    getMovement() {
        return LineFocusMovement.CURSOR;
    }
    onActivated(container, height) {
        const wasEnabled = this.model_.isSessionActive();
        const notificationType = wasEnabled ?
            LineFocusNotificationType.VISUAL :
            LineFocusNotificationType.CONTENT;
        this.setupEnabledMode(container, height);
        this.model_.setAdaptMultiLineWindow(true);
        // When switching Line Focus styles while active (wasEnabled === true), set
        // the focal point quietly without calling
        // notifyMoveWithContentPositionChange(). This prevents DOM hit-testing and
        // calling onLineFocusChange, avoiding audio jumps or speech resets. Visual
        // highlight styling is updated via notifyMoveWithVisualPositionChange()
        // below.
        this.setFocalPoint(Math.max(this.getFirstVisibleFocalPoint_(), this.model_.getFocalPoint()), notificationType);
        if (!wasEnabled && this.model_.getTextBounds().length > 0) {
            this.initializeSnapIndex(/*isForward=*/ true);
        }
    }
    onMouseMove(y) {
        this.model_.setCurrentLineIndex(null);
        const previousFocalPoint = this.model_.getFocalPoint();
        this.setFocalPoint(Math.max(this.model_.getMinY(), y), LineFocusNotificationType.CONTENT);
        this.metricsBrowserProxy_.addLineFocusMouseDistance(Math.round(Math.abs(this.model_.getFocalPoint() - previousFocalPoint)));
    }
    onMouseMoveInToolbar(y) {
        // Store the new position, but do not notify listeners since the mouse is
        // in the toolbar, which means they are likely trying to change some
        // settings. onAllMenusClose will notify them of the final position when
        // all the settings menus are closed.
        this.setFocalPoint(Math.max(this.model_.getMinY(), y), LineFocusNotificationType.NONE);
    }
    onScrollEnd(newScrollTop) {
        const wasInitiated = this.model_.getInitiatedScroll();
        this.resetScrollState(newScrollTop);
        // When an auto-scroll or speech-driven scroll finishes, recalculate bounds
        // to ensure the line focus highlight visually aligns with the resting text.
        if (wasInitiated || this.speechController_.isSpeechActive()) {
            this.styleMode_.updateFocusBounds();
            this.delegate_.notifyMoveWithVisualPositionChange();
        }
    }
    onTextLocationsChange(container, height) {
        const currentIndex = this.model_.getCurrentLineIndex();
        this.updatePositions(container, height);
        this.updateScrollOffset_(container);
        this.updateScrollBuffer();
        // If the user is focusing on a particular line when font size or spacing
        // changes, recenter that text line if it would go off screen to keep their
        // place.
        if (this.model_.getCurrentLineIndex() !== null &&
            !this.model_.getInitiatedScroll()) {
            this.recenterCurrentTextLineIfNeeded(/*instant=*/ true);
        }
        if (currentIndex !== null) {
            const newFocalPoint = this.styleMode_.getDesiredCenter(currentIndex);
            this.setFocalPoint(newFocalPoint, LineFocusNotificationType.VISUAL);
        }
        else if (this.model_.getFocalPoint() === 0) {
            // After content finishes rendering, set the focal point. This
            // prevents scenarios where read aloud starts playing before the focal
            // point is set (i.e. on a first open if the mouse cursor hasn't
            // entered the main content panel), which would mean the line focus
            // window would be missing or "stuck" at the top of the page while
            // read aloud continues reading behind the scrim.
            const firstVisible = this.getFirstVisibleFocalPoint_();
            this.setFocalPoint(firstVisible, LineFocusNotificationType.VISUAL);
        }
        else if (this.model_.getMinY() > this.model_.getFocalPoint()) {
            this.initializeSnapIndex(/*isForward=*/ true);
        }
    }
    moveToRect(rect) {
        const oldHeight = this.model_.getWindowHeight();
        const oldTop = this.model_.getTop();
        const oldFocalPoint = this.model_.getFocalPoint();
        // Ensure text bounds are initialized or updated if the scroll offset
        // changed before applying the new focal point. When scroll position is
        // unchanged between words, skip recomputing positions to avoid redundant
        // layout reflows on each word boundary.
        const scroller = this.textContentContainer_?.closest('.sp-scroller');
        const currentScrollTop = scroller ? scroller.scrollTop : null;
        const lastScrollTop = this.lastFrameScrollTop_ ?? this.model_.getLastScrollTop();
        const scrolledSinceLastUpdate = this.model_.getTextBounds().length === 0 ||
            (currentScrollTop !== null && currentScrollTop !== lastScrollTop);
        if (scrolledSinceLastUpdate) {
            this.updatePositionsAndScrollTop_(scroller);
        }
        // Set the focal point quietly as the threshold calculation below will
        // determine whether or not to notify of movement.
        const newFocalPoint = this.styleMode_.getFocalPointForRect(rect);
        this.setFocalPoint(newFocalPoint, LineFocusNotificationType.NONE);
        // During active speech playback, scroll instantly so the spoken text is
        // in view before audio plays, avoiding smooth-scroll animation lag.
        const scrolledAfterRecentering = this.recenterCurrentTextLineIfNeeded(
        /*instant=*/ this.speechController_.isSpeechActive());
        if (scrolledAfterRecentering) {
            this.updatePositionsAndScrollTop_(scroller);
        }
        const heightDiff = Math.abs(oldHeight - this.model_.getWindowHeight());
        const topDiff = Math.abs(oldTop - this.model_.getTop());
        const focalDiff = Math.abs(oldFocalPoint - newFocalPoint);
        if (scrolledAfterRecentering || focalDiff > this.movementThreshold ||
            heightDiff > this.movementThreshold ||
            topDiff > this.movementThreshold) {
            this.delegate_.notifyMoveWithContentPositionChange();
        }
    }
    updatePositionsAndScrollTop_(scroller) {
        if (!this.textContentContainer_) {
            return;
        }
        this.updatePositions(this.textContentContainer_, this.viewportHeight_);
        const scrollTop = scroller ? scroller.scrollTop : null;
        if (scrollTop !== null) {
            this.lastFrameScrollTop_ = scrollTop;
            this.model_.setLastScrollTop(scrollTop);
        }
    }
    needsScrollBuffer() {
        return false;
    }
    getScrollDiffForRecentering(currentIndex) {
        return this.styleMode_.getOffScreenDiff(currentIndex);
    }
    getFirstVisibleFocalPoint_() {
        const bounds = this.model_.getTextBounds();
        if (bounds.length === 0) {
            return this.model_.getMinY();
        }
        const firstVisibleRect = bounds.find(rect => rect.top >= this.model_.getMinY());
        return firstVisibleRect ?
            this.styleMode_.getFocalPointForRect(firstVisibleRect) :
            this.model_.getMinY();
    }
    // Shifts the line focus focal point during an active smooth-scroll animation
    // (such as when scrolling while reading) when using follow cursor mode so
    // that the focus window visually follows the moving text instead of being
    // offset by the previous scroll amount.
    updateScrollOffset_(container) {
        const scroller = container.closest('.sp-scroller');
        if (!scroller) {
            return;
        }
        const currentScrollTop = scroller.scrollTop;
        // Use lastFrameScrollTop_ if set, falling back to model's last scroll top
        // so the initial scroll delta is not dropped on the first frame.
        const lastScrollTop = this.lastFrameScrollTop_ ?? this.model_.getLastScrollTop();
        const scrollDiff = currentScrollTop - lastScrollTop;
        // If line focus is currently tracking the reading cursor (currentIndex
        // is null), shift the focal point by the scroll difference so the focus
        // box visually moves with the text during the smooth scroll animation.
        const isFollowingCursor = this.model_.getCurrentLineIndex() === null;
        const isAutoScrollActive = this.model_.getInitiatedScroll() ||
            this.speechController_.isSpeechActive();
        if (isFollowingCursor && (scrollDiff !== 0) && isAutoScrollActive) {
            this.setFocalPoint(this.model_.getFocalPoint() - scrollDiff, LineFocusNotificationType.VISUAL);
        }
        this.lastFrameScrollTop_ = currentScrollTop;
    }
}
// Movement strategy for when line focus is disabled.
export class LineFocusNoneMoveMode extends LineFocusMoveMode {
    movement_;
    constructor(model, styleMode, delegate, movement_) {
        super(model, styleMode, delegate);
        this.movement_ = movement_;
    }
    getMovement() {
        return this.movement_;
    }
    onActivated(_container, _height) {
        this.model_.reset();
        this.updateScrollBuffer();
    }
    onMouseMove(_y) { }
    onMouseMoveInToolbar(_y) { }
    onScrollEnd(_newScrollTop) { }
    onTextLocationsChange(_container, _height) { }
    onWordBoundary(_segments) { }
    snapToNextLine(_isForward) {
        return false;
    }
    moveToRect(_rect) { }
    needsScrollBuffer() {
        return false;
    }
    getScrollDiffForRecentering(_currentIndex) {
        return 0;
    }
}
