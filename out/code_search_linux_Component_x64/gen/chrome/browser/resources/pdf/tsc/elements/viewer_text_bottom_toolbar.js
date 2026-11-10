// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './ink_color_selector.js';
import './text_alignment_selector.js';
import './text_styles_selector.js';
import './viewer_bottom_toolbar_dropdown.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { TextAlignment } from '../constants.js';
import { colorToHex } from '../pdf_viewer_utils.js';
import { InkAnnotationTextMixin } from './ink_annotation_text_mixin.js';
import { InkTextObserverMixin } from './ink_text_observer_mixin.js';
import { getCss } from './viewer_text_bottom_toolbar.css.js';
import { getHtml } from './viewer_text_bottom_toolbar.html.js';
const ViewerTextBottomToolbarElementBase = InkAnnotationTextMixin(InkTextObserverMixin(I18nMixinLit(CrLitElement)));
export class ViewerTextBottomToolbarElement extends ViewerTextBottomToolbarElementBase {
    static get is() {
        return 'viewer-text-bottom-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            currentAlignment_: { type: String },
        };
    }
    #currentAlignment__accessor_storage = TextAlignment.LEFT;
    get currentAlignment_() { return this.#currentAlignment__accessor_storage; }
    set currentAlignment_(value) { this.#currentAlignment__accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('currentColor') && this.currentColor) {
            this.style.setProperty('--ink-brush-color', colorToHex(this.currentColor));
        }
    }
    onTypefaceChange_(e) {
        this.onTypefaceSelected(e);
    }
    onSizeChange_(e) {
        this.onSizeSelected(e);
    }
    getAlignmentIcon_() {
        switch (this.currentAlignment_) {
            case TextAlignment.LEFT:
                return 'pdf-ink:format-align-left';
            case TextAlignment.CENTER:
                return 'pdf-ink:format-align-center';
            case TextAlignment.RIGHT:
                return 'pdf-ink:format-align-right';
            default:
                assertNotReached();
        }
    }
    onTextAttributesChanged(attributes) {
        super.onTextAttributesChanged(attributes);
        this.currentAlignment_ = attributes.alignment;
    }
}
customElements.define(ViewerTextBottomToolbarElement.is, ViewerTextBottomToolbarElement);
