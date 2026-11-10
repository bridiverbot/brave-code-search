// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import './selectable_icon_button.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AnnotationBrushType } from '../constants.js';
import { getCss } from './ink_size_selector.css.js';
import { getHtml } from './ink_size_selector.html.js';
// LINT.IfChange(PenSizes)
export const PEN_SIZES = [
    { icon: 'pen-size-1', label: 'ink2BrushSizeExtraThin', size: 1 },
    { icon: 'pen-size-2', label: 'ink2BrushSizeThin', size: 2 },
    { icon: 'pen-size-3', label: 'ink2BrushSizeMedium', size: 3 },
    { icon: 'pen-size-4', label: 'ink2BrushSizeThick', size: 6 },
    { icon: 'pen-size-5', label: 'ink2BrushSizeExtraThick', size: 8 },
];
// LINT.ThenChange(//pdf/pdf_ink_metrics_handler.cc:PenSizes)
export const HIGHLIGHTER_SIZES = [
    // LINT.IfChange(HighlighterSizes)
    { icon: 'highlighter-size-1', label: 'ink2BrushSizeExtraThin', size: 4 },
    { icon: 'highlighter-size-2', label: 'ink2BrushSizeThin', size: 6 },
    { icon: 'highlighter-size-3', label: 'ink2BrushSizeMedium', size: 8 },
    { icon: 'highlighter-size-4', label: 'ink2BrushSizeThick', size: 12 },
    { icon: 'highlighter-size-5', label: 'ink2BrushSizeExtraThick', size: 16 },
    // LINT.ThenChange(//pdf/pdf_ink_metrics_handler.cc:HighlighterSizes)
];
const InkSizeSelectorElementBase = I18nMixinLit(CrLitElement);
export class InkSizeSelectorElement extends InkSizeSelectorElementBase {
    static get is() {
        return 'ink-size-selector';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            currentSize: {
                notify: true,
                type: Number,
            },
            currentType: { type: String },
        };
    }
    focus() {
        const selectedButton = this.shadowRoot.querySelector('selectable-icon-button[checked]');
        assert(selectedButton);
        selectedButton.focus();
    }
    #currentSize_accessor_storage = 0;
    get currentSize() { return this.#currentSize_accessor_storage; }
    set currentSize(value) { this.#currentSize_accessor_storage = value; }
    #currentType_accessor_storage = AnnotationBrushType.PEN;
    get currentType() { return this.#currentType_accessor_storage; }
    set currentType(value) { this.#currentType_accessor_storage = value; }
    currentSizeString_() {
        return this.currentSize.toString();
    }
    onSelectedChanged_(e) {
        this.currentSize = Number(e.detail.value);
    }
    getCurrentBrushSizes_() {
        assert(this.currentType !== AnnotationBrushType.ERASER);
        return this.currentType === AnnotationBrushType.HIGHLIGHTER ?
            HIGHLIGHTER_SIZES :
            PEN_SIZES;
    }
}
customElements.define(InkSizeSelectorElement.is, InkSizeSelectorElement);
