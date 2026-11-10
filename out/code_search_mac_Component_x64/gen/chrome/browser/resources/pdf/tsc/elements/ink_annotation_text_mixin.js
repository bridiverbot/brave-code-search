// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { TextTypeface } from '../constants.js';
import { Ink2Manager } from '../ink2_manager.js';
import { colorsEqual, hexToColor } from '../pdf_viewer_utils.js';
// LINT.IfChange(TextSizes)
export const TEXT_SIZES = [6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 64, 72, 100];
// LINT.ThenChange(//pdf/pdfium/pdfium_ink_reader.cc:TextSizes)
export const TEXT_COLORS = [
    // LINT.IfChange(TextAnnotationColors)
    // Row 1:
    { label: 'annotationColorBlack', color: '#000000', blended: false },
    { label: 'ink2BrushColorDarkGrey2', color: '#5f6368', blended: false },
    { label: 'ink2BrushColorDarkGrey1', color: '#9aa0a6', blended: false },
    { label: 'annotationColorLightGrey', color: '#dadce0', blended: false },
    { label: 'annotationColorWhite', color: '#ffffff', blended: false },
    // Row 2:
    { label: 'ink2BrushColorRed1', color: '#f28b82', blended: false },
    { label: 'ink2BrushColorYellow1', color: '#fdd663', blended: false },
    { label: 'ink2BrushColorGreen1', color: '#81c995', blended: false },
    { label: 'ink2TextColorCyan1', color: '#78d9ec', blended: false },
    { label: 'ink2BrushColorBlue1', color: '#8ab4f8', blended: false },
    // Row 3:
    { label: 'ink2BrushColorRed2', color: '#e94235', blended: false },
    { label: 'ink2BrushColorYellow2', color: '#fbbc04', blended: false },
    { label: 'ink2BrushColorGreen2', color: '#34a853', blended: false },
    { label: 'ink2TextColorCyan2', color: '#24c1e0', blended: false },
    { label: 'ink2BrushColorBlue2', color: '#4285f4', blended: false },
    // Row 4:
    { label: 'ink2BrushColorRed3', color: '#c5221f', blended: false },
    { label: 'ink2BrushColorYellow3', color: '#d56e0c', blended: false },
    { label: 'ink2BrushColorGreen3', color: '#188038', blended: false },
    { label: 'ink2TextColorCyan3', color: '#12a4af', blended: false },
    { label: 'ink2BrushColorBlue3', color: '#1967d2', blended: false },
    // LINT.ThenChange(//pdf/pdf_ink_metrics_handler.cc:TextAnnotationColors)
];
export const InkAnnotationTextMixin = (superClass) => {
    class InkAnnotationTextMixin extends superClass {
        static get properties() {
            return {
                colors: { type: Array },
                currentColor: { type: Object },
                currentSize: { type: Number },
                currentTypeface: { type: String },
                fontNames: { type: Array },
                sizes: { type: Array },
            };
        }
        #currentColor_accessor_storage = hexToColor(TEXT_COLORS[0].color);
        get currentColor() { return this.#currentColor_accessor_storage; }
        set currentColor(value) { this.#currentColor_accessor_storage = value; }
        #currentSize_accessor_storage = TEXT_SIZES[3];
        get currentSize() { return this.#currentSize_accessor_storage; }
        set currentSize(value) { this.#currentSize_accessor_storage = value; }
        #currentTypeface_accessor_storage = TextTypeface.SANS_SERIF;
        get currentTypeface() { return this.#currentTypeface_accessor_storage; }
        set currentTypeface(value) { this.#currentTypeface_accessor_storage = value; }
        #colors_accessor_storage = TEXT_COLORS;
        get colors() { return this.#colors_accessor_storage; }
        set colors(value) { this.#colors_accessor_storage = value; }
        #fontNames_accessor_storage = [
            TextTypeface.SANS_SERIF,
            TextTypeface.SERIF,
            TextTypeface.MONOSPACE,
        ];
        get fontNames() { return this.#fontNames_accessor_storage; }
        set fontNames(value) { this.#fontNames_accessor_storage = value; }
        #sizes_accessor_storage = TEXT_SIZES;
        get sizes() { return this.#sizes_accessor_storage; }
        set sizes(value) { this.#sizes_accessor_storage = value; }
        firstUpdated(changedProperties) {
            super.firstUpdated(changedProperties);
            const typefaceSelect = this.shadowRoot.querySelector('#typefaceSelect');
            assert(typefaceSelect);
            typefaceSelect.value = this.currentTypeface;
            const sizeSelect = this.shadowRoot.querySelector('#sizeSelect');
            assert(sizeSelect);
            sizeSelect.value = this.currentSize.toString();
        }
        getLabelForTypeface(typeface) {
            switch (typeface) {
                case TextTypeface.SANS_SERIF:
                    return 'ink2TextFontSansSerif';
                case TextTypeface.SERIF:
                    return 'ink2TextFontSerif';
                case TextTypeface.MONOSPACE:
                    return 'ink2TextFontMonospace';
                default:
                    assertNotReachedCase(typeface);
            }
        }
        onTypefaceSelected(e) {
            const newValue = e.target.value;
            Ink2Manager.getInstance().setTextTypeface(newValue);
        }
        onSizeSelected(e) {
            const newValue = Number(e.target.value);
            Ink2Manager.getInstance().setTextSize(newValue);
        }
        onCurrentColorChanged(e) {
            // Avoid poking the plugin if the value hasn't actually changed.
            const newColor = e.detail.value;
            if (!colorsEqual(newColor, this.currentColor)) {
                Ink2Manager.getInstance().setTextColor(newColor);
            }
        }
        onTextAttributesChanged(attributes) {
            this.currentColor = attributes.color;
            this.currentTypeface = attributes.typeface;
            this.currentSize = attributes.size;
        }
    }
    return InkAnnotationTextMixin;
};
