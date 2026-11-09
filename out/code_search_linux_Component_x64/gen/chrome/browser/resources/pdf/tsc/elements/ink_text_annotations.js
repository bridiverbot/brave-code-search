// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './ink_text_box.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { Ink2Manager } from '../ink2_manager.js';
import { pageToScreenCoordinates } from '../ink_text_annotation_utils.js';
import { hasCtrlModifierOnly } from '../pdf_viewer_utils.js';
import { getCss } from './ink_text_annotations.css.js';
import { getHtml } from './ink_text_annotations.html.js';
import { TextBoxState } from './ink_text_box.js';
export class InkTextAnnotationsElement extends CrLitElement {
    static get is() {
        return 'ink-text-annotations';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            viewport: { type: Object },
            activeAnnotation_: { type: Object },
            activePageDimensions_: { type: Object },
            focusedIndex_: { type: Number },
            isPaste_: { type: Boolean },
            placeholders_: { type: Array },
        };
    }
    #viewport_accessor_storage = null;
    get viewport() { return this.#viewport_accessor_storage; }
    set viewport(value) { this.#viewport_accessor_storage = value; }
    #activeAnnotation__accessor_storage = null;
    get activeAnnotation_() { return this.#activeAnnotation__accessor_storage; }
    set activeAnnotation_(value) { this.#activeAnnotation__accessor_storage = value; }
    #activePageDimensions__accessor_storage = null;
    get activePageDimensions_() { return this.#activePageDimensions__accessor_storage; }
    set activePageDimensions_(value) { this.#activePageDimensions__accessor_storage = value; }
    #focusedIndex__accessor_storage = -1;
    get focusedIndex_() { return this.#focusedIndex__accessor_storage; }
    set focusedIndex_(value) { this.#focusedIndex__accessor_storage = value; }
    #isPaste__accessor_storage = false;
    get isPaste_() { return this.#isPaste__accessor_storage; }
    set isPaste_(value) { this.#isPaste__accessor_storage = value; }
    #placeholders__accessor_storage = [];
    get placeholders_() { return this.#placeholders__accessor_storage; }
    set placeholders_(value) { this.#placeholders__accessor_storage = value; }
    annotations_ = [];
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        const manager = Ink2Manager.getInstance();
        this.eventTracker_.add(manager, 'annotations-updated', () => this.updateAnnotations_());
        this.eventTracker_.add(manager, 'initialize-text-box', (e) => this.onInitializeTextBox_(e.detail));
        this.eventTracker_.add(this, 'wheel', (e) => this.onWheel_(e));
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
        this.updateAnnotations_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('focusedIndex_')) {
            this.updatePlaceholders_();
        }
    }
    onKeyDown_(e) {
        if (!hasCtrlModifierOnly(e) || e.key.toLowerCase() !== 'v') {
            return;
        }
        // Ignore if event occurred on a <textarea> or <input> that
        // should handle it (e.g. the ink-text-box textarea)
        const target = e.composedPath()[0] ?? null;
        if (target instanceof HTMLTextAreaElement ||
            target instanceof HTMLInputElement) {
            return;
        }
        this.pasteAnnotation();
    }
    async pasteAnnotation() {
        if (this.activeAnnotation_) {
            await this.$.textBox.commitTextAnnotation();
        }
        Ink2Manager.getInstance().pasteAnnotation();
    }
    viewportChanged() {
        this.updatePlaceholders_();
        this.$.textBox.viewportChanged();
    }
    updateAnnotations_() {
        const manager = Ink2Manager.getInstance();
        const allAnnotations = [];
        const sortedPages = Array.from(manager.annotations.keys()).sort((a, b) => a - b);
        for (const page of sortedPages) {
            const pageAnnotationsMap = manager.annotations.get(page);
            if (!pageAnnotationsMap || pageAnnotationsMap.size === 0) {
                continue;
            }
            const pageAnnotations = Array.from(pageAnnotationsMap.values());
            // Sort visually: top-to-bottom, then left-to-right
            pageAnnotations.sort((a, b) => {
                if (a.textBoxRect.locationY !== b.textBoxRect.locationY) {
                    return a.textBoxRect.locationY - b.textBoxRect.locationY;
                }
                return a.textBoxRect.locationX - b.textBoxRect.locationX;
            });
            allAnnotations.push(...pageAnnotations);
        }
        this.annotations_ = allAnnotations;
        this.updatePlaceholders_();
    }
    getActiveWindowIndices_() {
        const indices = new Set();
        const total = this.annotations_.length;
        if (total === 0) {
            return indices;
        }
        if (this.focusedIndex_ === -1) {
            // When no placeholder is focused, pre-position the first and last
            // items so tabbing from top or bottom immediately lands on a positioned
            // element.
            indices.add(0);
            indices.add(total - 1);
            return indices;
        }
        if (this.focusedIndex_ > 0) {
            indices.add(this.focusedIndex_ - 1);
        }
        indices.add(this.focusedIndex_);
        if (this.focusedIndex_ < total - 1) {
            indices.add(this.focusedIndex_ + 1);
        }
        return indices;
    }
    updatePlaceholders_() {
        const viewport = this.viewport;
        assert(viewport);
        const activeIndices = this.getActiveWindowIndices_();
        const clockwiseRotations = viewport.getClockwiseRotations();
        this.placeholders_ = this.annotations_.map((annotation, index) => {
            const screenRect = activeIndices.has(index) ?
                pageToScreenCoordinates(annotation.pageIndex, annotation.textBoxRect, viewport) :
                null;
            return {
                screenRect,
                label: annotation.text,
                rotations: (clockwiseRotations + annotation.textOrientation) % 4,
            };
        });
    }
    getStyles_(placeholder) {
        if (!placeholder.screenRect) {
            return 'opacity: 0;';
        }
        return `
      --left: ${placeholder.screenRect.locationX}px;
      --top: ${placeholder.screenRect.locationY}px;
      --width: ${placeholder.screenRect.width}px;
      --height: ${placeholder.screenRect.height}px;
    `;
    }
    onPlaceholderFocus_(e) {
        const currentTarget = e.currentTarget;
        const index = Number(currentTarget.dataset['index']);
        this.focusedIndex_ = index;
        const placeholder = this.placeholders_[index];
        assert(placeholder);
        assert(placeholder.screenRect);
        this.scrollToShowTextBox_(placeholder.screenRect);
    }
    onContainerFocusout_(e) {
        const relatedTarget = e.relatedTarget;
        if (!this.$.container.contains(relatedTarget)) {
            this.focusedIndex_ = -1;
        }
    }
    async onPlaceholderKeydown_(e) {
        if (e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        e.preventDefault();
        const index = Number(e.currentTarget.dataset['index']);
        const annotation = this.annotations_[index];
        assert(annotation);
        if (this.activeAnnotation_) {
            if (this.activeAnnotation_.id === annotation.id) {
                return;
            }
            await this.$.textBox.commitTextAnnotation();
        }
        Ink2Manager.getInstance().activateAnnotationById(annotation.id);
    }
    commitActiveAnnotation() {
        return this.$.textBox.commitTextAnnotation();
    }
    blurActiveAnnotation() {
        this.$.textBox.blur();
    }
    onTextBoxStateChanged_(e) {
        if (e.detail === TextBoxState.INACTIVE) {
            this.isPaste_ = false;
            this.activeAnnotation_ = null;
            this.activePageDimensions_ = null;
            this.focusedIndex_ = -1;
        }
        this.fire('state-changed', e.detail);
    }
    async onInitializeTextBox_(data) {
        if (this.activeAnnotation_) {
            await this.$.textBox.commitTextAnnotation();
        }
        this.isPaste_ = !!data.isPaste;
        this.activeAnnotation_ = data.annotation;
        this.activePageDimensions_ = data.pageDimensions;
    }
    onTextboxFocused_(e) {
        this.scrollToShowTextBox_(e.detail);
    }
    getPlaceholderTabIndex_(placeholder) {
        if (this.activeAnnotation_ || !placeholder.screenRect) {
            return -1;
        }
        return 0;
    }
    isPlaceholderAriaHidden_(placeholder) {
        return this.activeAnnotation_ || !placeholder.screenRect ? 'true' : 'false';
    }
    // Child placeholder elements intercept all pointer-events. Manually forward
    // wheel events to the viewport.
    onWheel_(e) {
        assert(this.viewport);
        if (e.ctrlKey) {
            return;
        }
        e.preventDefault();
        this.viewport.scrollBy({ x: e.deltaX, y: e.deltaY });
    }
    scrollToShowTextBox_(textBoxRect) {
        // The viewport handles scrolling, so prevent the browser from
        // auto-scrolling.
        this.$.container.scrollTop = 0;
        this.$.container.scrollLeft = 0;
        this.scrollTop = 0;
        this.scrollLeft = 0;
        assert(this.viewport);
        const viewportPosition = this.viewport.position;
        const viewportSize = this.viewport.size;
        let scrollX;
        let scrollY;
        if (textBoxRect.locationX < 0 ||
            textBoxRect.locationX + textBoxRect.width > viewportSize.width) {
            // Adjusting by 10% of viewport, rather than putting the text box on the
            // exact edge of the viewport.
            scrollX = viewportPosition.x + textBoxRect.locationX -
                Math.floor(viewportSize.width / 10);
        }
        if (textBoxRect.locationY < 0 ||
            textBoxRect.locationY + textBoxRect.height > viewportSize.height) {
            // Adjusting by 10% of viewport, rather than putting the text box on the
            // exact edge of the viewport.
            scrollY = viewportPosition.y + textBoxRect.locationY -
                Math.floor(viewportSize.height / 10);
        }
        if (scrollX !== undefined || scrollY !== undefined) {
            // TODO(crbug.com/40218278): Re-enable smooth scrolling for all codepaths.
            this.viewport.scrollTo({
                x: scrollX,
                y: scrollY,
            });
        }
    }
}
customElements.define(InkTextAnnotationsElement.is, InkTextAnnotationsElement);
