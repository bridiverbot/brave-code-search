// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
export function $$(element, selector) {
    return element.shadowRoot.querySelector(selector);
}
/**
 * Queries |selector| on |root| and returns the resulting element. Throws
 * exception if there is no resulting element or if element is not of type
 * |type|.
 */
export function strictQuery(root, selector, type) {
    const element = root.querySelector(selector);
    assert(element && element instanceof type);
    return element;
}
