// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { NodeStore } from '../content/node_store.js';
import { AudioBrowserProxyImpl } from './audio_browser_proxy.js';
import { ReadAloudNodeStore } from './read_aloud_node_store.js';
// This file contains type definitions for the data structures
// used in the read aloud feature. It provides an abstraction layer for
// representing text nodes and segments, allowing the core logic to work
// with different text segmentation strategies.
// Set of display types that signal a line break. Using a Set allows O(1)
// lookup instead of array scanning during text traversal.
const LINE_BREAKING_DISPLAY_TYPES = new Set([
    'block',
    'list-item',
    'flex',
    'grid',
    'table',
    'table-row',
    'table-cell',
    'table-caption',
    'table-row-group',
    'table-header-group',
    'table-footer-group',
]);
// Wrapper class to represent a node used by read aloud. The type of node
// could be either a DOM node or an AXNode depending on what type of text
// segmentation method is used.
export class ReadAloudNode {
    // TODO: crbug.com/440400392: This method is a convenience method for working
    // with AxReadAloudNodes during the refactor and should be deleted once
    // the Phrase Highlighting flag is fully enabled.
    static createFromAxNode(axNodeId, nodeStore = NodeStore.getInstance()) {
        const domNode = nodeStore.getDomNode(axNodeId);
        if (!domNode &&
            AudioBrowserProxyImpl.getInstance().isPhraseHighlightingEnabled()) {
            // If there's no DOM node yet, it might not have gotten added to the
            // node store yet, so create an AxReadAloudNode instead.
            // TODO: crbug.com/440400392- This shouldn't be necessary but is a
            // fallback to help ensure that the text segmentation refactor does not
            // impact the V8 segmentation implementation.
            return new AxReadAloudNodeImpl(axNodeId, nodeStore);
        }
        if (!domNode) {
            return undefined;
        }
        return this.create(domNode, nodeStore);
    }
    static create(node, nodeStore = NodeStore.getInstance()) {
        if (!AudioBrowserProxyImpl.getInstance().isPhraseHighlightingEnabled()) {
            return new DomReadAloudNodeImpl(node);
        }
        const axNodeId = nodeStore.getAxId(node);
        if (axNodeId) {
            return new AxReadAloudNodeImpl(axNodeId, nodeStore);
        }
        return undefined;
    }
}
export class AxReadAloudNode extends ReadAloudNode {
    axNodeId;
    nodeStore_;
    constructor(axNodeId, nodeStore_ = NodeStore.getInstance()) {
        super();
        this.axNodeId = axNodeId;
        this.nodeStore_ = nodeStore_;
    }
    equals(other) {
        if (!(other instanceof AxReadAloudNode)) {
            return false;
        }
        return this.axNodeId === other.axNodeId;
    }
    domNode() {
        return this.nodeStore_.getDomNode(this.axNodeId);
    }
}
// TODO: crbug.com/440400392: The Impl classes are a tool for working
// with ReadAloudNodes during the refactor in order to enforce more strict
// ReadAloudNode creation. These classes should be deleted once
// the Phrase Highlighting flag is fully enabled and sooner, if possible.
// Impl class to help enforce that AxReadAloudNode should only be constructed
// by one of the #create methods in ReadAloudNode.
// This class should not be exported.
class AxReadAloudNodeImpl extends AxReadAloudNode {
    constructor(axNodeId, nodeStore = NodeStore.getInstance()) {
        super(axNodeId, nodeStore);
    }
}
// Represents a node used by read aloud that's based entirely on the DOM.
export class DomReadAloudNode extends ReadAloudNode {
    node;
    nearestBlockAncestor_;
    isSuperscript_;
    constructor(node) {
        super();
        this.node = node;
        ReadAloudNodeStore.getInstance().register(this);
        // nearestBlockAncestor_ only needs to be set once.
        this.nearestBlockAncestor_ = this.getNearestBlockAncestor_();
    }
    equals(other) {
        if (!(other instanceof DomReadAloudNode)) {
            return false;
        }
        return this.node.isSameNode(other.node);
    }
    getText() {
        return this.node.textContent || '';
    }
    domNode() {
        return this.node;
    }
    // Refresh the DOM node associated with this read aloud node if the original
    // node has been changed, such as from highlighting. The replacement is in
    // place, so the block ancestor is unchanged.
    refresh(newNode) {
        this.node = newNode;
    }
    // Returns true if the DOM node associated with this ReadAloudNode is
    // part of a superscript (i.e., inside a <sup> tag).
    // TODO(crbug.com/467180032): Add an equivalent isSubscript method to ensure
    // subscripts in PDFs are segmented properly.
    isSuperscript() {
        // Don't recalculate whether this node is a superscript if we've already
        // checked.
        if (this.isSuperscript_ !== undefined) {
            return this.isSuperscript_;
        }
        const domNode = this.node;
        if (!domNode) {
            this.isSuperscript_ = false; // Cache the result
            return false;
        }
        const element = domNode.nodeType === Node.ELEMENT_NODE ?
            domNode :
            domNode.parentElement;
        this.isSuperscript_ = !!element?.closest('sup');
        return this.isSuperscript_;
    }
    // The nearest ancestor to the DOM node associated with this ReadAloudNode
    // that is of a "block" style such that it would constitute a line break.
    getBlockAncestor() {
        return this.nearestBlockAncestor_;
    }
    getNearestBlockAncestor_() {
        const nodeStore = NodeStore.getInstance();
        const parent = this.node.parentElement;
        let currentAncestor = parent;
        while (currentAncestor) {
            // Reuse the cached block ancestor and memoize for the immediate parent.
            const cached = nodeStore.getBlockAncestor(currentAncestor);
            if (cached) {
                if (parent) {
                    nodeStore.setBlockAncestor(parent, cached);
                }
                return cached;
            }
            const displayStyle = window.getComputedStyle(currentAncestor).display;
            if (LINE_BREAKING_DISPLAY_TYPES.has(displayStyle)) {
                // Cache this block element for itself and the immediate parent.
                nodeStore.setBlockAncestor(currentAncestor, currentAncestor);
                if (parent) {
                    nodeStore.setBlockAncestor(parent, currentAncestor);
                }
                return currentAncestor;
            }
            currentAncestor = currentAncestor.parentElement;
        }
        return undefined;
    }
}
// Impl class to help enforce that DomReadAloudNode should only be constructed
// by one of the #create methods in ReadAloudNode.
// This class should not be exported.
class DomReadAloudNodeImpl extends DomReadAloudNode {
    constructor(node) {
        super(node);
    }
}
