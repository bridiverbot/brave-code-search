// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Implements ParentTrustedPage interface to handle requests from the child
 * page. This is only connected to the Microsoft Auth iframe.
 */
let instance = null;
export class ParentTrustedDocumentProxy {
    static getInstance() {
        return instance;
    }
    static setInstance(childDocument) {
        instance = new ParentTrustedDocumentProxy(childDocument);
    }
    childDocument_;
    constructor(childDocument) {
        this.childDocument_ = childDocument;
    }
    getChildDocument() {
        return this.childDocument_;
    }
}
