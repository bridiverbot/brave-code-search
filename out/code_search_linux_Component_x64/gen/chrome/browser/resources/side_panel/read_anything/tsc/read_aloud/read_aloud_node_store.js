// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Manages ReadAloudNodes for use with read aloud
export class ReadAloudNodeStore {
    domNodeToReadAloudNodes_ = new WeakMap();
    // Registers this DomReadAloudNode to the node store.
    register(domReadAloudNode) {
        const node = domReadAloudNode.domNode();
        if (!node) {
            return;
        }
        if (node && !this.domNodeToReadAloudNodes_.has(node)) {
            this.domNodeToReadAloudNodes_.set(node, new Set());
        }
        this.domNodeToReadAloudNodes_.get(node).add(domReadAloudNode);
    }
    // Updates that a DOM element has been replaced, such as from highlighting.
    // When this happens, if the DOM element has an associated ReadAloudNode,
    // update the DOM element of this node.
    update(current, replacer) {
        if (this.domNodeToReadAloudNodes_.has(current)) {
            const wrappers = this.domNodeToReadAloudNodes_.get(current);
            wrappers.forEach(wrapper => wrapper.refresh(replacer));
            this.domNodeToReadAloudNodes_.set(replacer, wrappers);
            this.domNodeToReadAloudNodes_.delete(current);
        }
    }
    static getInstance() {
        return instance || (instance = new ReadAloudNodeStore());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
