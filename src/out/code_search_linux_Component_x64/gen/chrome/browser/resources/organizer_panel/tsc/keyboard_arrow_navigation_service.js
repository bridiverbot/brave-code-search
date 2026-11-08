// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
/**
 * Navigates focus through focusable elements using ArrowUp and ArrowDown keys.
 */
export class KeyArrowNavigationService {
    elements_ = [];
    rootElement_;
    focusIndex_ = 0;
    getNavigableElements_;
    boundKeyArrowListener_ = this.handleKeyArrowEvent_.bind(this);
    boundFocusInListener_ = this.handleFocusInEvent_.bind(this);
    constructor(rootElement, getNavigableElements) {
        this.rootElement_ = rootElement;
        this.getNavigableElements_ = getNavigableElements;
    }
    /**
     * Creates listeners for the root element.
     */
    startListening() {
        this.rootElement_.addEventListener('keydown', this.boundKeyArrowListener_);
        this.rootElement_.addEventListener('focusin', this.boundFocusInListener_);
    }
    /**
     * Cleans up listeners created by startListening.
     */
    stopListening() {
        this.rootElement_.removeEventListener('keydown', this.boundKeyArrowListener_);
        this.rootElement_.removeEventListener('focusin', this.boundFocusInListener_);
    }
    /**
     * Sets the current focus index to the specified element.
     * Returns false if the element was not found.
     */
    setCurrentFocusIndex(element) {
        this.elements_ = this.getNavigableElements_();
        const newCurrentIndex = this.findElementIndex_(element);
        if (newCurrentIndex < 0) {
            return false;
        }
        this.focusIndex_ = newCurrentIndex;
        return true;
    }
    /**
     * Rebuilds the navigation elements list.
     */
    rebuildNavigationElements() {
        this.elements_ = this.getNavigableElements_();
        if (this.elements_.length === 0) {
            this.focusIndex_ = 0;
            return;
        }
        this.focusIndex_ =
            Math.max(0, Math.min(this.focusIndex_, this.elements_.length - 1));
    }
    /**
     * Returns the element at current focus index for testing.
     */
    getElementAtFocusIndexForTesting() {
        return this.elements_[this.focusIndex_];
    }
    /**
     * Returns the list of navigable elements for testing.
     */
    getElementsForTesting() {
        return [...this.elements_];
    }
    /**
     * Returns the count of navigable elements.
     */
    getElementCount() {
        return this.elements_.length;
    }
    /**
     * Moves focus by direction (-1 for previous, 1 for next).
     */
    moveFocus(direction) {
        this.elements_ = this.getNavigableElements_();
        const elementCount = this.elements_.length;
        if (elementCount === 0) {
            return;
        }
        if (direction === 1) {
            this.focusIndex_ = (this.focusIndex_ + 1) % elementCount;
        }
        else {
            this.focusIndex_ = (this.focusIndex_ - 1 + elementCount) % elementCount;
        }
        this.focusCurrentIndex_();
    }
    handleFocusInEvent_(event) {
        this.elements_ = this.getNavigableElements_();
        const path = event.composedPath();
        const target = this.elements_.find(elem => path.includes(elem));
        if (target) {
            this.focusIndex_ = this.elements_.indexOf(target);
        }
    }
    handleKeyArrowEvent_(event) {
        const { key } = event;
        if (key !== 'ArrowUp' && key !== 'ArrowDown') {
            return;
        }
        this.elements_ = this.getNavigableElements_();
        if (this.elements_.length === 0) {
            return;
        }
        const path = event.composedPath();
        const activeNavigableElement = this.elements_.find(el => path.includes(el));
        if (!activeNavigableElement) {
            return;
        }
        // Do not navigate on arrow keys if focus is within an open dialog (e.g.
        // an opened action menu).
        if (path.some(el => el.tagName === 'DIALOG' ||
            el.tagName === 'CR-ACTION-MENU')) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.focusIndex_ = this.elements_.indexOf(activeNavigableElement);
        if (key === 'ArrowUp') {
            this.moveFocus(-1);
        }
        else if (key === 'ArrowDown') {
            this.moveFocus(1);
        }
    }
    focusCurrentIndex_() {
        const element = this.elements_[this.focusIndex_];
        if (element) {
            element.focus();
        }
    }
    findElementIndex_(element) {
        return this.elements_.findIndex((elem) => elem === element);
    }
    static getInstance() {
        assert(instance);
        return instance;
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
