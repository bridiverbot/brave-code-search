// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './segmented_button.css.js';
import { getHtml } from './segmented_button.html.js';
export class SegmentedButtonElement extends CrLitElement {
    static get is() {
        return 'segmented-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selected: {
                type: String,
                notify: true,
            },
            selectableElements: { type: String },
            groupAriaLabel: { type: String },
        };
    }
    #selected_accessor_storage;
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    #selectableElements_accessor_storage = 'segmented-button-option';
    get selectableElements() { return this.#selectableElements_accessor_storage; }
    set selectableElements(value) { this.#selectableElements_accessor_storage = value; }
    #groupAriaLabel_accessor_storage = '';
    get groupAriaLabel() { return this.#groupAriaLabel_accessor_storage; }
    set groupAriaLabel(value) { this.#groupAriaLabel_accessor_storage = value; }
    onSelectedChanged_(e) {
        this.selected = e.detail.value;
    }
}
customElements.define(SegmentedButtonElement.is, SegmentedButtonElement);
