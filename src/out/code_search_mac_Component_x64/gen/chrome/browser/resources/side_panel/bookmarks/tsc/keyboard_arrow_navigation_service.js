// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
/**
 * Navigates focus through nested elements given a HTMLElement parent
 * node with child nodes with specific element types such as `div` or custom
 * elements like `power-bookmark-row`
 *
 * This service can focus elements across shadow doms.
 */
export class KeyArrowNavigationService {
    /**
     * List of focusable HTMLElement nodes representing focusable elements in a
     * flat format sorted by tab order.
     */
    elements_ = [];
    rootElement_;
    focusIndex_ = 0;
    childrenQuerySelector_ = '';
    constructor(rootElement, querySelector) {
        this.rootElement_ = rootElement;
        this.childrenQuerySelector_ = querySelector;
    }
    boundKeyArrowListener_ = this.handleKeyArrowEvent_.bind(this);
    /**
     * Creates listeners for the root element.
     * Invoke during setup.
     */
    startListening() {
        this.rootElement_.addEventListener('keydown', this.boundKeyArrowListener_);
    }
    /**
     * Cleans up any listeners created by the startListening method.
     * Invoke during teardown.
     */
    stopListening() {
        this.rootElement_.removeEventListener('keydown', this.boundKeyArrowListener_);
    }
    /**
     * Inserts elements to the `elements_` list next to the current `focusIndex_`
     * position.
     *
     * @param parentElement parent node from which nested elements will be added
     */
    addElementsWithin(parentElement) {
        const childElements = this.traverseElements_(parentElement);
        const newElements = [...this.elements_];
        const targetIndex = this.findElementIndex_(parentElement);
        // adding child elements to the right of the parent element
        newElements.splice(targetIndex + 1, 0, ...childElements);
        this.elements_ = newElements;
    }
    /**
     * Collapses nested elements from a given HTMLElement node by traversing the
     * given element to verify if any child elements have nested children and
     * account for these when removing elements from the main elements list.
     *
     * @param parentElement parent node from which nested elements will be removed
     */
    removeElementsWithin(parentElement) {
        const updatedElements = [...this.elements_];
        const numElementsToRemove = this.traverseElements_(parentElement).length;
        const targetIndex = this.findElementIndex_(parentElement);
        updatedElements.splice(targetIndex + 1, numElementsToRemove);
        this.elements_ = updatedElements;
    }
    /**
     * Used to manually focus on a specific element when the keyboard focus is
     * currently on an element, and a click event focuses on a different element
     * therefore having to move the `focusIndex` to the element being clicked.
     *
     * Returns false if no element was found.
     *
     * @param element Target element to focus on
     */
    setCurrentFocusIndex(element) {
        const newCurrentIndex = this.findElementIndex_(element);
        if (newCurrentIndex < 0) {
            return false;
        }
        this.focusIndex_ = newCurrentIndex;
        return true;
    }
    /**
     * Rebuilds the navigation structure from an optional given element, if not
     * it will default to the existing root node.
     *
     * @param rootElement
     */
    rebuildNavigationElements(rootElement) {
        this.elements_ = this.traverseElements_(rootElement || this.rootElement_);
    }
    /**
     * Returns the current focused element, may be used for testing.
     *
     * @returns the current focused element
     */
    getElementAtFocusIndexForTesting() {
        return this.elements_[this.focusIndex_];
    }
    /**
     * Returns the focusable elements list, may be used for testing.
     *
     * @returns HTML element list
     */
    getElementsForTesting() {
        return [...this.elements_];
    }
    /**
     * Returns the amount of focusable elements in the current list.
     *
     * @returns Number of tree elements
     */
    getElementCount() {
        return this.elements_.length;
    }
    /**
     * Moves the focus on the current tree to either the next or the previous
     * element depending on the direction that is passed in.
     */
    moveFocus(direction) {
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
    handleKeyArrowEvent_(event) {
        const { key } = event;
        if (!(key === 'ArrowUp' || key === 'ArrowDown')) {
            return;
        }
        if (this.elements_.length === 0) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        if (key === 'ArrowUp') {
            this.moveFocus(-1);
        }
        if (key === 'ArrowDown') {
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
    traverseElements_(node) {
        const children = Array.from(node.shadowRoot.querySelectorAll(this.childrenQuerySelector_));
        let treeElements = [];
        for (const childNode of children) {
            const hasChildren = childNode.shadowRoot &&
                Array.from(childNode.shadowRoot.querySelectorAll(this.childrenQuerySelector_))
                    .length > 0;
            treeElements = hasChildren ?
                [
                    ...treeElements,
                    childNode,
                    ...this.traverseElements_(childNode),
                ] :
                [...treeElements, childNode];
        }
        return treeElements;
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
