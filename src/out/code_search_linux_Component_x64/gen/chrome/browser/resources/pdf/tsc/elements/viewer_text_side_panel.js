// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './text_styles_selector.js';
import './text_alignment_selector.js';
import './ink_color_selector.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { InkAnnotationTextMixin } from './ink_annotation_text_mixin.js';
import { InkTextObserverMixin } from './ink_text_observer_mixin.js';
import { getCss } from './viewer_text_side_panel.css.js';
import { getHtml } from './viewer_text_side_panel.html.js';
const ViewerTextSidePanelElementBase = InkAnnotationTextMixin(InkTextObserverMixin(I18nMixinLit(CrLitElement)));
export class ViewerTextSidePanelElement extends ViewerTextSidePanelElementBase {
    static get is() {
        return 'viewer-text-side-panel';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    onTypefaceChange_(e) {
        this.onTypefaceSelected(e);
    }
    onSizeChange_(e) {
        this.onSizeSelected(e);
    }
}
customElements.define(ViewerTextSidePanelElement.is, ViewerTextSidePanelElement);
