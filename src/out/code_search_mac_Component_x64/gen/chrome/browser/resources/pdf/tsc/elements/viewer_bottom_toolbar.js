// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './ink_brush_selector.js';
import './ink_color_selector.js';
import './ink_size_selector.js';
import './viewer_bottom_toolbar_dropdown.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AnnotationBrushType } from '../constants.js';
import { blendHighlighterColorValue, colorToHex } from '../pdf_viewer_utils.js';
import { InkAnnotationBrushMixin } from './ink_annotation_brush_mixin.js';
import { HIGHLIGHTER_SIZES, PEN_SIZES } from './ink_size_selector.js';
import { getCss } from './viewer_bottom_toolbar.css.js';
import { getHtml } from './viewer_bottom_toolbar.html.js';
const ViewerBottomToolbarElementBase = InkAnnotationBrushMixin(CrLitElement);
export class ViewerBottomToolbarElement extends ViewerBottomToolbarElementBase {
    static get is() {
        return 'viewer-bottom-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            strings: { type: Object },
        };
    }
    #strings_accessor_storage;
    get strings() { return this.#strings_accessor_storage; }
    set strings(value) { this.#strings_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('currentColor') && this.currentColor) {
            this.onCurrentColorUpdated_();
        }
    }
    getSizeIcon_() {
        let options;
        switch (this.currentType) {
            case AnnotationBrushType.HIGHLIGHTER:
                options = HIGHLIGHTER_SIZES;
                break;
            case AnnotationBrushType.PEN:
                options = PEN_SIZES;
                break;
            default:
                assertNotReached();
        }
        assert(options);
        const option = options.find(option => option.size === this.currentSize);
        assert(option);
        return 'pdf-ink:' + option.icon;
    }
    getSizeTitle_() {
        return this.strings ? loadTimeData.getString('ink2Size') : '';
    }
    getColorTitle_() {
        return this.strings ? loadTimeData.getString('ink2Color') : '';
    }
    onCurrentColorUpdated_() {
        assert(this.currentColor);
        const color = this.currentType === AnnotationBrushType.HIGHLIGHTER ?
            {
                r: blendHighlighterColorValue(this.currentColor.r),
                g: blendHighlighterColorValue(this.currentColor.g),
                b: blendHighlighterColorValue(this.currentColor.b),
            } :
            this.currentColor;
        this.style.setProperty('--ink-brush-color', colorToHex(color));
    }
    shouldShowBrushOptions_() {
        return this.currentType !== AnnotationBrushType.ERASER;
    }
}
customElements.define(ViewerBottomToolbarElement.is, ViewerBottomToolbarElement);
