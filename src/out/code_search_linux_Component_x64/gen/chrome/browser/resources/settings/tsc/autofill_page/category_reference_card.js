// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'category-reference-card' is a card that shows a list of
 * chips related to a certain category.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './category_reference_card.css.js';
import { getHtml } from './category_reference_card.html.js';
export class CategoryReferenceCardElement extends CrLitElement {
    static get is() {
        return 'category-reference-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            cardTitle: { type: String },
            categoryId: { type: Number },
            chips: { type: Array },
            isExternal: { type: Boolean },
        };
    }
    #cardTitle_accessor_storage = '';
    get cardTitle() { return this.#cardTitle_accessor_storage; }
    set cardTitle(value) { this.#cardTitle_accessor_storage = value; }
    #categoryId_accessor_storage;
    get categoryId() { return this.#categoryId_accessor_storage; }
    set categoryId(value) { this.#categoryId_accessor_storage = value; }
    #chips_accessor_storage = [];
    get chips() { return this.#chips_accessor_storage; }
    set chips(value) { this.#chips_accessor_storage = value; }
    #isExternal_accessor_storage = false;
    get isExternal() { return this.#isExternal_accessor_storage; }
    set isExternal(value) { this.#isExternal_accessor_storage = value; }
    onDataCategoryClick_() {
        this.fire('data-category-click', { categoryId: this.categoryId });
    }
    onDataChipClick_(event) {
        const target = event.currentTarget;
        const index = Number(target.dataset['index']);
        const chip = this.chips[index];
        this.fire('data-chip-click', { chipId: chip.id });
    }
    focus() {
        this.shadowRoot.querySelector('cr-link-row').focus();
    }
}
customElements.define(CategoryReferenceCardElement.is, CategoryReferenceCardElement);
