// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Shared styles for showing an empty state for a side panel UI.
 */
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './sp_empty_state.css.js';
import { getHtml } from './sp_empty_state.html.js';
export class SpEmptyStateElement extends CrLitElement {
    static get is() {
        return 'sp-empty-state';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            body: { type: String },
            darkImagePath: { type: String },
            heading: { type: String },
            imagePath: { type: String },
        };
    }
    #body_accessor_storage = '';
    get body() { return this.#body_accessor_storage; }
    set body(value) { this.#body_accessor_storage = value; }
    #darkImagePath_accessor_storage = '';
    get darkImagePath() { return this.#darkImagePath_accessor_storage; }
    set darkImagePath(value) { this.#darkImagePath_accessor_storage = value; }
    #heading_accessor_storage = '';
    get heading() { return this.#heading_accessor_storage; }
    set heading(value) { this.#heading_accessor_storage = value; }
    #imagePath_accessor_storage = '';
    get imagePath() { return this.#imagePath_accessor_storage; }
    set imagePath(value) { this.#imagePath_accessor_storage = value; }
}
customElements.define(SpEmptyStateElement.is, SpEmptyStateElement);
