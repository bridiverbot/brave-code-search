// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './circular_progress_ring.css.js';
import { getHtml } from './circular_progress_ring.html.js';
const STROKE_DASHARRAY = 566;
function convertPercentageToStrokeDashOffset(percentage) {
    const ratio = percentage / 100;
    const value = Math.round(STROKE_DASHARRAY * (1 - ratio));
    return `${value}px`;
}
export class CircularProgressRingElement extends CrLitElement {
    static get is() {
        return 'circular-progress-ring';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            strokeDashOffset: { type: String },
            value: { type: Number },
        };
    }
    #value_accessor_storage = 0;
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    #strokeDashOffset_accessor_storage = `${STROKE_DASHARRAY}px`;
    get strokeDashOffset() { return this.#strokeDashOffset_accessor_storage; }
    set strokeDashOffset(value) { this.#strokeDashOffset_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('value')) {
            assert(this.value >= 0 && this.value <= 100);
            this.strokeDashOffset = convertPercentageToStrokeDashOffset(this.value);
        }
    }
}
customElements.define(CircularProgressRingElement.is, CircularProgressRingElement);
