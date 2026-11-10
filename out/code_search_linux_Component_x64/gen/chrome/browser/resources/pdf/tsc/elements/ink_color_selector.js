// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { colorsEqual, hexToColor } from '../pdf_viewer_utils.js';
import { getCss } from './ink_color_selector.css.js';
import { getHtml } from './ink_color_selector.html.js';
const InkColorSelectorElementBase = I18nMixinLit(CrLitElement);
export class InkColorSelectorElement extends InkColorSelectorElementBase {
    static get is() {
        return 'ink-color-selector';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            colors: { type: Array },
            currentColor: { type: Object },
            label: { type: String },
        };
    }
    #colors_accessor_storage = [];
    get colors() { return this.#colors_accessor_storage; }
    set colors(value) { this.#colors_accessor_storage = value; }
    #currentColor_accessor_storage = { r: 0, g: 0, b: 0 };
    get currentColor() { return this.#currentColor_accessor_storage; }
    set currentColor(value) { this.#currentColor_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    onColorClick_(e) {
        this.setBrushColor_(e.currentTarget);
    }
    onCrGridFocusChanged_(e) {
        this.setBrushColor_(e.detail);
    }
    focus() {
        const selectedButton = this.shadowRoot.querySelector('input[checked]');
        assert(selectedButton);
        selectedButton.focus();
    }
    getTabIndex_(color) {
        return this.isCurrentColor_(color) ? 0 : -1;
    }
    isCurrentColor_(hex) {
        return colorsEqual(this.currentColor, hexToColor(hex));
    }
    getBlendedClass_(item) {
        return item.blended ? 'blended' : '';
    }
    setBrushColor_(colorButton) {
        const hex = colorButton.value;
        assert(hex);
        const newColor = hexToColor(hex);
        if (colorsEqual(this.currentColor, newColor)) {
            return;
        }
        this.currentColor = newColor;
        // Intentionally only dispatch an event when the color is changed from the
        // UI, and not whenever it is changed from the parent via property binding.
        this.fire('current-color-changed', { value: newColor });
    }
}
customElements.define(InkColorSelectorElement.is, InkColorSelectorElement);
