// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { assert, assertNotReached, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { isMac } from 'chrome://resources/js/platform.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { TextTypeface } from '../constants.js';
import { Ink2Manager, MIN_TEXTBOX_SIZE_PX, stylesEqual } from '../ink2_manager.js';
import { convertRotatedCoordinates, screenToPageCoordinates } from '../ink_text_annotation_utils.js';
import { record, UserAction } from '../metrics.js';
import { PdfViewerPrivateProxyImpl } from '../pdf_viewer_private_proxy.js';
import { colorsEqual, colorToHex, getTextStyleForShortcut, hasCtrlModifier, hasCtrlModifierOnly } from '../pdf_viewer_utils.js';
import { getCss } from './ink_text_box.css.js';
import { getHtml } from './ink_text_box.html.js';
import { InkTextObserverMixin } from './ink_text_observer_mixin.js';
export var TextBoxState;
(function (TextBoxState) {
    TextBoxState[TextBoxState["INACTIVE"] = 0] = "INACTIVE";
    TextBoxState[TextBoxState["NEW"] = 1] = "NEW";
    TextBoxState[TextBoxState["EDITED"] = 2] = "EDITED";
})(TextBoxState || (TextBoxState = {}));
const KEYBOARD_RESIZE_STEP_PX = 10;
function getStyleForTypeface(typeface) {
    switch (typeface) {
        case TextTypeface.SANS_SERIF:
            return 'Arial, sans-serif';
        case TextTypeface.SERIF:
            return 'Times, serif';
        case TextTypeface.MONOSPACE:
            return '"Courier New", monospace';
        default:
            assertNotReachedCase(typeface);
    }
}
function isArrowKey(key) {
    return key !== null &&
        ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(key);
}
const InkTextBoxElementBase = InkTextObserverMixin(CrLitElement);
export class InkTextBoxElement extends InkTextBoxElementBase {
    static get is() {
        return 'ink-text-box';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            height_: { type: Number },
            locationX_: { type: Number },
            locationY_: { type: Number },
            minHeight_: { type: Number },
            minWidth_: { type: Number },
            state_: { type: Number },
            textOrientation_: { type: Number },
            textRotations_: {
                type: Number,
                reflect: true,
            },
            textValue_: { type: String },
            viewportRotations_: { type: Number },
            width_: { type: Number },
            zoom_: { type: Number },
            viewport: { type: Object },
            annotation: { type: Object },
            pageDimensions: { type: Object },
            isPaste: { type: Boolean },
        };
    }
    #locationX__accessor_storage = 0;
    // Note: locationX_, locationY_, minHeight_, minWidth_, height_ and width_
    // are in screen coordinates.
    get locationX_() { return this.#locationX__accessor_storage; }
    set locationX_(value) { this.#locationX__accessor_storage = value; }
    #locationY__accessor_storage = 0;
    get locationY_() { return this.#locationY__accessor_storage; }
    set locationY_(value) { this.#locationY__accessor_storage = value; }
    #minHeight__accessor_storage = MIN_TEXTBOX_SIZE_PX;
    get minHeight_() { return this.#minHeight__accessor_storage; }
    set minHeight_(value) { this.#minHeight__accessor_storage = value; }
    #minWidth__accessor_storage = MIN_TEXTBOX_SIZE_PX;
    get minWidth_() { return this.#minWidth__accessor_storage; }
    set minWidth_(value) { this.#minWidth__accessor_storage = value; }
    #height__accessor_storage = MIN_TEXTBOX_SIZE_PX;
    get height_() { return this.#height__accessor_storage; }
    set height_(value) { this.#height__accessor_storage = value; }
    #state__accessor_storage = TextBoxState.INACTIVE;
    get state_() { return this.#state__accessor_storage; }
    set state_(value) { this.#state__accessor_storage = value; }
    #textOrientation__accessor_storage = 0;
    get textOrientation_() { return this.#textOrientation__accessor_storage; }
    set textOrientation_(value) { this.#textOrientation__accessor_storage = value; }
    #textRotations__accessor_storage = 0;
    get textRotations_() { return this.#textRotations__accessor_storage; }
    set textRotations_(value) { this.#textRotations__accessor_storage = value; }
    #textValue__accessor_storage = '';
    get textValue_() { return this.#textValue__accessor_storage; }
    set textValue_(value) { this.#textValue__accessor_storage = value; }
    #viewportRotations__accessor_storage = 0;
    get viewportRotations_() { return this.#viewportRotations__accessor_storage; }
    set viewportRotations_(value) { this.#viewportRotations__accessor_storage = value; }
    #width__accessor_storage = MIN_TEXTBOX_SIZE_PX;
    get width_() { return this.#width__accessor_storage; }
    set width_(value) { this.#width__accessor_storage = value; }
    #zoom__accessor_storage = 1.0;
    get zoom_() { return this.#zoom__accessor_storage; }
    set zoom_(value) { this.#zoom__accessor_storage = value; }
    #isPaste_accessor_storage = false;
    get isPaste() { return this.#isPaste_accessor_storage; }
    set isPaste(value) { this.#isPaste_accessor_storage = value; }
    #viewport_accessor_storage = null;
    get viewport() { return this.#viewport_accessor_storage; }
    set viewport(value) { this.#viewport_accessor_storage = value; }
    #annotation_accessor_storage = null;
    get annotation() { return this.#annotation_accessor_storage; }
    set annotation(value) { this.#annotation_accessor_storage = value; }
    #pageDimensions_accessor_storage = null;
    get pageDimensions() { return this.#pageDimensions_accessor_storage; }
    set pageDimensions(value) { this.#pageDimensions_accessor_storage = value; }
    activeKey_ = null;
    arrowKeyDownCount_ = -1;
    attributes_;
    dragTarget_ = null;
    eventTracker_ = new EventTracker();
    // Whether this is an existing textbox. Tracked so that the textbox can
    // correctly notify the backend about changes (e.g. deleting all text in an
    // existing annotation should remove it from the PDF, so this change must be
    // committed where an empty new annotation would not be committed).
    existing_ = false;
    id_ = -1;
    pageIndex_ = -1;
    pageHeight_ = 0;
    pageWidth_ = 0;
    pageX_ = 0;
    pageY_ = 0;
    pointerStart_ = null;
    promiseResolver_ = null;
    startPosition_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(this, 'pointerdown', (e) => this.onPointerDown_(e));
        this.eventTracker_.add(this, 'keydown', (e) => this.onKeyDown_(e));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('annotation') ||
            changedProperties.has('pageDimensions')) {
            if (this.annotation && this.pageDimensions) {
                this.initializeFromProperties_();
            }
            else {
                this.state_ = TextBoxState.INACTIVE;
            }
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('minHeight_')) {
            this.height_ = this.getClampedHeight_(this.height_);
        }
        if (changedPrivateProperties.has('minWidth_')) {
            this.width_ = this.getClampedWidth_(this.width_);
        }
        if (changedPrivateProperties.has('state_')) {
            this.hidden = this.state_ === TextBoxState.INACTIVE;
            this.fire('state-changed', this.state_);
        }
        if (changedPrivateProperties.has('viewportRotations_') ||
            changedPrivateProperties.has('textOrientation_')) {
            this.textRotations_ =
                (this.viewportRotations_ + this.textOrientation_) % 4;
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.setAttribute('tabindex', '0');
        this.addEventListener('focus', e => this.onFocus_(e));
        document.addEventListener('keydown', e => this.onDocumentKeyDown_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('width_')) {
            this.$.textbox.style.width = `${this.width_}px`;
        }
        if (changedPrivateProperties.has('height_')) {
            this.$.textbox.style.height = `${this.height_}px`;
        }
        if (changedPrivateProperties.has('locationX_')) {
            this.style.setProperty('--textbox-location-x', `${this.locationX_}px`);
        }
        if (changedPrivateProperties.has('locationY_')) {
            this.style.setProperty('--textbox-location-y', `${this.locationY_}px`);
        }
        if (changedPrivateProperties.has('zoom_')) {
            this.styleFontSize_();
        }
        if ((changedPrivateProperties.has('width_') &&
            this.textRotations_ % 2 === 0) ||
            (changedPrivateProperties.has('height_') &&
                this.textRotations_ % 2 === 1)) {
            this.updateMinimumSize_();
        }
    }
    styleFontSize_() {
        if (this.attributes_) {
            this.$.textbox.style.fontSize = `${this.attributes_.size * this.zoom_}px`;
        }
    }
    onFocus_(e) {
        if (e.relatedTarget === this ||
            e.currentTarget === this && e.relatedTarget === this.$.textbox) {
            // Focus moved from the box to the textarea (or vice versa via the
            // "Escape" shortcut), ignore.
            return;
        }
        this.fire('textbox-focused', {
            height: this.height_,
            locationX: this.locationX_,
            locationY: this.locationY_,
            width: this.width_,
        });
    }
    onTextValueInput_() {
        this.textValue_ = this.$.textbox.value;
        this.textBoxEdited_();
        this.updateMinimumSize_();
    }
    // Populates a `TextAnnotation` with the current state that can
    // be passed to Ink2Manager.
    createClipboardAnnotation_() {
        if (!this.viewport || !this.attributes_ || this.textValue_ === '') {
            return null;
        }
        const pageRect = screenToPageCoordinates(this.pageIndex_, {
            height: this.height_,
            locationX: this.locationX_,
            locationY: this.locationY_,
            width: this.width_,
        }, this.viewport);
        return {
            id: this.id_,
            mojoTextInfo: new ArrayBuffer(0),
            pageIndex: this.pageIndex_,
            pdfZoom: this.zoom_,
            text: this.textValue_,
            textAttributes: structuredClone(this.attributes_),
            textBoxRect: pageRect,
            textOrientation: this.textOrientation_,
            viewportOrientation: this.viewportRotations_,
        };
    }
    copyAnnotation_() {
        const annotation = this.createClipboardAnnotation_();
        if (!annotation) {
            return;
        }
        Ink2Manager.getInstance().saveAnnotationToClipboard(annotation, /*isCut=*/ false);
    }
    cutAnnotation_() {
        const annotation = this.createClipboardAnnotation_();
        if (!annotation) {
            return;
        }
        Ink2Manager.getInstance().saveAnnotationToClipboard(annotation, /*isCut=*/ true);
        this.textValue_ = '';
        this.$.textbox.value = '';
        this.textBoxEdited_();
        this.commitTextAnnotation();
    }
    textBoxEdited_() {
        if (this.state_ === TextBoxState.NEW) {
            this.state_ = TextBoxState.EDITED;
        }
    }
    updateMinimumSize_() {
        if (this.textRotations_ % 2 === 0) {
            this.$.textbox.style.height = 'auto';
            const scrollHeight = this.$.textbox.scrollHeight;
            this.minHeight_ = Math.max(MIN_TEXTBOX_SIZE_PX, scrollHeight);
            // Reset the height styling back.
            this.$.textbox.style.height = `${this.height_}px`;
        }
        else {
            // Adjust the width if the user is typing vertically.
            this.$.textbox.style.width = 'auto';
            const scrollWidth = this.$.textbox.scrollWidth;
            this.minWidth_ = Math.max(MIN_TEXTBOX_SIZE_PX, scrollWidth);
            // Reset the width styling back.
            this.$.textbox.style.width = `${this.width_}px`;
        }
    }
    removePointerDragListeners_() {
        assert(this.dragTarget_);
        this.eventTracker_.remove(this.dragTarget_, 'pointercancel');
        this.eventTracker_.remove(this.dragTarget_, 'pointerup');
        this.eventTracker_.remove(this.dragTarget_, 'pointermove');
        this.dragTarget_ = null;
        this.pointerStart_ = null;
    }
    removeKeyDragListeners_() {
        assert(this.dragTarget_);
        this.eventTracker_.remove(this.dragTarget_, 'keyup');
        this.eventTracker_.remove(this.dragTarget_, 'focusout');
        this.dragTarget_ = null;
        this.activeKey_ = null;
        this.arrowKeyDownCount_ = -1;
    }
    addKeyDragListeners_() {
        this.dragTarget_ = this;
        this.startPosition_ = {
            locationX: this.locationX_,
            locationY: this.locationY_,
            width: this.width_,
            height: this.height_,
        };
        this.eventTracker_.add(this, 'keyup', () => this.onHandleKeyUp_());
        this.eventTracker_.add(this, 'focusout', () => this.onHandleKeyUp_());
    }
    // Removes any drag listeners and resets location and dimensions to the start
    // position.
    resetDrag_() {
        if (this.dragTarget_ === null) {
            return;
        }
        assert(this.startPosition_);
        this.locationX_ = this.startPosition_.locationX;
        this.locationY_ = this.startPosition_.locationY;
        this.width_ = this.startPosition_.width;
        this.height_ = this.startPosition_.height;
        this.startPosition_ = null;
        if (this.pointerStart_ !== null) {
            this.removePointerDragListeners_();
        }
        else if (this.activeKey_ !== null) {
            this.removeKeyDragListeners_();
        }
    }
    commitTextAnnotation() {
        if (this.promiseResolver_) {
            return this.promiseResolver_.promise;
        }
        this.promiseResolver_ = new PromiseResolver();
        const promise = this.promiseResolver_.promise;
        this.resetDrag_();
        const hasTextValue = this.textValue_ !== '';
        const isUnedited = this.state_ !== TextBoxState.EDITED && !this.isPaste;
        if ((!hasTextValue || isUnedited) && !this.existing_) {
            // Empty textbox.
            this.finishCommit_();
            record(UserAction.ADD_INK2_TEXT_ANNOTATION_ABORTED);
            return promise;
        }
        if (!hasTextValue) {
            // Text deleted.
            Ink2Manager.getInstance().deleteTextAnnotation(this.id_, this.pageIndex_);
            this.finishCommit_();
            record(UserAction.DELETE_INK2_TEXT_ANNOTATION);
            return promise;
        }
        // Save the existing state with dummy mojoTextInfo.
        assert(this.attributes_);
        const isEdited = this.state_ === TextBoxState.EDITED;
        const annotation = {
            id: this.id_,
            mojoTextInfo: new ArrayBuffer(0),
            pageIndex: this.pageIndex_,
            pdfZoom: this.zoom_,
            text: this.textValue_,
            textAttributes: structuredClone(this.attributes_),
            textBoxRect: {
                height: this.height_,
                locationX: this.locationX_,
                locationY: this.locationY_,
                width: this.width_,
            },
            textOrientation: this.textOrientation_,
            viewportOrientation: this.viewportRotations_,
        };
        if (!isEdited) {
            // No edits.
            Ink2Manager.getInstance().commitTextAnnotation(annotation, isEdited, /*typefaces=*/ []);
            this.finishCommit_();
            record(UserAction.EDIT_INK2_TEXT_ANNOTATION_ABORTED);
            return promise;
        }
        // Addition or edit.
        (async () => {
            try {
                const result = await PdfViewerPrivateProxyImpl.getInstance().getTextInfo(this.$.textbox, Ink2Manager.getInstance().getKnownFontIds());
                for (const typeface of result.typefaces) {
                    Ink2Manager.getInstance().addKnownFontId(typeface.uniqueId);
                }
                annotation.mojoTextInfo = result.mojoTextInfo;
                Ink2Manager.getInstance().commitTextAnnotation(annotation, isEdited, result.typefaces);
                record(this.existing_ ? UserAction.EDIT_INK2_TEXT_ANNOTATION :
                    UserAction.ADD_INK2_TEXT_ANNOTATION);
            }
            catch (e) {
                console.error('Error committing text annotation:', e);
            }
            finally {
                this.finishCommit_();
            }
        })();
        return promise;
    }
    finishCommit_() {
        this.state_ = TextBoxState.INACTIVE;
        assert(this.promiseResolver_);
        this.promiseResolver_.resolve();
        this.promiseResolver_ = null;
    }
    initializeFromProperties_() {
        const annotation = this.annotation;
        const pageDimensions = this.pageDimensions;
        if (!annotation || !pageDimensions) {
            return;
        }
        if (this.viewport) {
            this.zoom_ = this.viewport.getZoom();
            this.viewportRotations_ = this.viewport.getClockwiseRotations();
        }
        // Update is in screen coordinates.
        this.pageX_ = pageDimensions.x;
        this.pageY_ = pageDimensions.y;
        this.pageWidth_ = pageDimensions.width;
        this.pageHeight_ = pageDimensions.height;
        this.width_ = annotation.textBoxRect.width;
        this.height_ = annotation.textBoxRect.height;
        this.minHeight_ = MIN_TEXTBOX_SIZE_PX;
        this.minWidth_ = MIN_TEXTBOX_SIZE_PX;
        this.locationX_ = annotation.textBoxRect.locationX;
        this.locationY_ = annotation.textBoxRect.locationY;
        this.state_ = this.isPaste ? TextBoxState.EDITED : TextBoxState.NEW;
        this.existing_ = annotation.text !== '' && !this.isPaste;
        this.textValue_ = annotation.text;
        this.id_ = annotation.id;
        this.pageIndex_ = annotation.pageIndex;
        this.textOrientation_ = annotation.textOrientation;
        this.updateTextAttributes_(annotation.textAttributes);
        this.focusTextboxWhenReady_();
    }
    async focusTextboxWhenReady_() {
        await this.updateComplete;
        setTimeout(() => {
            if (this.isPaste) {
                this.focus();
            }
            else {
                this.$.textbox.focus();
            }
            this.fire('textbox-focused-for-test');
        }, 0);
    }
    viewportChanged() {
        if (!this.viewport || this.pageIndex_ === -1) {
            return;
        }
        const zoom = this.viewport.getZoom();
        const clockwiseRotations = this.viewport.getClockwiseRotations();
        const pageDimensions = this.viewport.getPageScreenRect(this.pageIndex_);
        // Convert width, height, locationX, locationY to the new screen
        // coordinates.
        // Note that this.pageX_ and this.pageY_ are in the old screen
        // coordinates, i.e. they were using the old zoom value.
        const adjusted = {
            locationX: (this.locationX_ - this.pageX_) * zoom / this.zoom_,
            locationY: (this.locationY_ - this.pageY_) * zoom / this.zoom_,
            width: Math.max(this.width_ * zoom / this.zoom_, MIN_TEXTBOX_SIZE_PX),
            height: Math.max(this.height_ * zoom / this.zoom_, MIN_TEXTBOX_SIZE_PX),
        };
        const rotated = convertRotatedCoordinates(adjusted, this.viewportRotations_, clockwiseRotations, pageDimensions.width, pageDimensions.height);
        // Flip min height and width if orientation has switched.
        if (this.viewportRotations_ % 2 !== clockwiseRotations % 2) {
            const min = this.minHeight_;
            this.minHeight_ = this.minWidth_;
            this.minWidth_ = min;
        }
        this.locationX_ = rotated.locationX + pageDimensions.x;
        this.locationY_ = rotated.locationY + pageDimensions.y;
        this.width_ = rotated.width;
        this.height_ = rotated.height;
        // Update properties to the new values.
        this.viewportRotations_ = clockwiseRotations;
        this.zoom_ = zoom;
        this.pageX_ = pageDimensions.x;
        this.pageY_ = pageDimensions.y;
        this.pageWidth_ = pageDimensions.width;
        this.pageHeight_ = pageDimensions.height;
    }
    onDocumentKeyDown_(e) {
        // Only handle "Escape" when in an active state.
        if (e.key !== 'Escape' || this.state_ === TextBoxState.INACTIVE) {
            return;
        }
        const target = e.composedPath()[0];
        if (target === this.$.textbox) {
            this.focus();
            this.fire('ink-text-box-focused-for-test');
        }
        else {
            this.commitTextAnnotation();
        }
        e.preventDefault();
        e.stopPropagation();
    }
    onKeyDown_(e) {
        if (this.state_ === TextBoxState.INACTIVE) {
            return;
        }
        // Handle text styling shortcuts.
        const textStyle = getTextStyleForShortcut(e);
        if (textStyle !== null) {
            e.preventDefault();
            e.stopPropagation();
            Ink2Manager.getInstance().toggleTextStyle(textStyle);
            return;
        }
        const target = e.composedPath()[0];
        // Ignore keyboard events on the textbox itself, other than 'Escape', which
        // is separately handled by the global keyhandler above.
        if (!(target instanceof HTMLElement) || target === this.$.textbox) {
            return;
        }
        // Handle copy and cut.
        if (hasCtrlModifierOnly(e)) {
            const key = e.key.toLowerCase();
            if (key === 'c' || key === 'x') {
                e.preventDefault();
                e.stopPropagation();
                if (key === 'c') {
                    this.copyAnnotation_();
                }
                else {
                    this.cutAnnotation_();
                }
                return;
            }
        }
        // Backspace/Delete key not in the textbox deletes the annotation.
        if (e.key === 'Backspace' || e.key === 'Delete') {
            this.textValue_ = '';
            this.textBoxEdited_();
            this.commitTextAnnotation().then(() => {
                getAnnouncerInstance().announce(loadTimeData.getString('ink2TextAnnotationDeleted'));
            });
            return;
        }
        // Ignore if the user is already dragging with the pointer.
        if (this.pointerStart_ !== null) {
            return;
        }
        if (this.handleResizeShortcut_(e)) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        // Ignore all other keys except arrows.
        if (!isArrowKey(e.key)) {
            return;
        }
        // Ignore arrow key dragging if keyboard resize shortcut is already active.
        if (this.activeKey_ !== null && !isArrowKey(this.activeKey_)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        // Reset state if this is a new arrow key.
        if (this.activeKey_ !== null && this.activeKey_ !== e.key) {
            this.onHandleKeyUp_();
        }
        this.activeKey_ = e.key;
        if (this.arrowKeyDownCount_ === -1) {
            this.addKeyDragListeners_();
            this.arrowKeyDownCount_ = 0;
        }
        this.arrowKeyDownCount_++;
        let moveX = 0;
        let moveY = 0;
        switch (e.key) {
            case 'ArrowDown':
                moveY = this.arrowKeyDownCount_;
                break;
            case 'ArrowUp':
                moveY = -1 * this.arrowKeyDownCount_;
                break;
            case 'ArrowLeft':
                moveX = -1 * this.arrowKeyDownCount_;
                break;
            case 'ArrowRight':
                moveX = this.arrowKeyDownCount_;
                break;
            default:
                break;
        }
        this.onMove_(this, moveX, moveY);
    }
    announceMoveOrResize_() {
        if (!this.startPosition_) {
            return;
        }
        if (this.width_ !== this.startPosition_.width ||
            this.height_ !== this.startPosition_.height) {
            getAnnouncerInstance().announce(loadTimeData.getString('ink2TextAnnotationResized'));
            return;
        }
        const deltaX = this.locationX_ - this.startPosition_.locationX;
        if (deltaX !== 0) {
            const stringId = deltaX > 0 ? 'ink2TextAnnotationMovedRight' :
                'ink2TextAnnotationMovedLeft';
            getAnnouncerInstance().announce(loadTimeData.getString(stringId));
        }
        const deltaY = this.locationY_ - this.startPosition_.locationY;
        if (deltaY !== 0) {
            const stringId = deltaY > 0 ? 'ink2TextAnnotationMovedDown' :
                'ink2TextAnnotationMovedUp';
            getAnnouncerInstance().announce(loadTimeData.getString(stringId));
        }
    }
    onHandleKeyUp_() {
        this.announceMoveOrResize_();
        this.startPosition_ = null;
        this.removeKeyDragListeners_();
        this.textBoxEdited_();
    }
    onPointerDown_(e) {
        const target = e.composedPath()[0];
        // Ignore pointer events on the textbox itself.
        if (e.button !== 0 || !(target instanceof HTMLElement) ||
            target === this.$.textbox) {
            return;
        }
        // Don't allow dragging with the keyboard and pointer at the same time.
        if (this.dragTarget_ !== null) {
            return;
        }
        this.dragTarget_ = target;
        this.pointerStart_ = { x: e.x, y: e.y };
        this.startPosition_ = {
            locationX: this.locationX_,
            locationY: this.locationY_,
            width: this.width_,
            height: this.height_,
        };
        this.eventTracker_.add(target, 'pointercancel', () => this.onHandlePointerUp_());
        this.eventTracker_.add(target, 'pointerup', () => this.onHandlePointerUp_());
        this.eventTracker_.add(target, 'pointermove', (e) => this.onHandlePointerMove_(e));
        target.setPointerCapture(e.pointerId);
    }
    onHandlePointerMove_(e) {
        const target = e.target;
        assert(this.pointerStart_);
        this.onMove_(target, e.x - this.pointerStart_.x, e.y - this.pointerStart_.y);
    }
    onMove_(target, moveX, moveY) {
        assert(this.startPosition_);
        if (!target.classList.contains('handle')) {
            // User is dragging the box itself.
            this.locationX_ = Math.min(this.pageX_ + this.pageWidth_ - this.width_, Math.max(this.pageX_, this.startPosition_.locationX + moveX));
            this.locationY_ = Math.min(this.pageY_ + this.pageHeight_ - this.height_, Math.max(this.pageY_, this.startPosition_.locationY + moveY));
            return;
        }
        if (target.classList.contains('left')) {
            const deltaX = Math.max(this.pageX_ - this.startPosition_.locationX, Math.min(moveX, this.startPosition_.width - this.minWidth_));
            this.locationX_ = this.startPosition_.locationX + deltaX;
            this.width_ = this.startPosition_.width - deltaX;
        }
        else if (target.classList.contains('right')) {
            this.width_ = this.getClampedWidth_(this.startPosition_.width + moveX);
        }
        if (target.classList.contains('top')) {
            const deltaY = Math.max(this.pageY_ - this.startPosition_.locationY, Math.min(moveY, this.startPosition_.height - this.minHeight_));
            this.locationY_ = this.startPosition_.locationY + deltaY;
            this.height_ = this.startPosition_.height - deltaY;
        }
        else if (target.classList.contains('bottom')) {
            this.height_ = this.getClampedHeight_(this.startPosition_.height + moveY);
        }
    }
    onHandlePointerUp_() {
        this.announceMoveOrResize_();
        this.startPosition_ = null;
        this.removePointerDragListeners_();
        this.textBoxEdited_();
    }
    updateTextAttributes_(newAttributes) {
        this.$.textbox.style.fontFamily =
            getStyleForTypeface(newAttributes.typeface);
        this.attributes_ = newAttributes;
        this.styleFontSize_();
        this.$.textbox.style.textAlign = newAttributes.alignment;
        this.$.textbox.style.fontStyle =
            newAttributes.styles.italic ? 'italic' : 'normal';
        this.$.textbox.style.fontWeight =
            newAttributes.styles.bold ? 'bold' : 'normal';
        this.$.textbox.style.color = colorToHex(newAttributes.color);
        const decorations = [];
        if (newAttributes.styles.underline) {
            decorations.push('underline');
        }
        if (newAttributes.styles.strikethrough) {
            decorations.push('line-through');
        }
        this.$.textbox.style.textDecoration = decorations.join(' ') || 'none';
    }
    onTextAttributesChanged(newAttributes) {
        if (!!this.attributes_ &&
            newAttributes.typeface === this.attributes_.typeface &&
            newAttributes.size === this.attributes_.size &&
            colorsEqual(newAttributes.color, this.attributes_.color) &&
            newAttributes.alignment === this.attributes_.alignment &&
            stylesEqual(newAttributes.styles, this.attributes_.styles)) {
            return;
        }
        this.updateTextAttributes_(newAttributes);
        this.textBoxEdited_();
        if (this.state_ !== TextBoxState.INACTIVE) {
            this.updateMinimumSize_();
        }
    }
    handleResizeShortcut_(e) {
        if (this.state_ === TextBoxState.INACTIVE || this.pointerStart_ !== null ||
            isArrowKey(this.activeKey_)) {
            return false;
        }
        const mainModifier = hasCtrlModifier(e);
        const secondModifier = isMac ? e.ctrlKey : e.altKey;
        if (!mainModifier || !secondModifier || e.shiftKey) {
            return false;
        }
        const key = e.key.toLowerCase();
        if (!['b', 'w', 'i', '9', 'k', 'j'].includes(key)) {
            return false;
        }
        if (this.activeKey_ !== null && this.activeKey_ !== key) {
            this.onHandleKeyUp_();
        }
        if (this.activeKey_ === null) {
            this.activeKey_ = key;
            this.addKeyDragListeners_();
        }
        switch (key) {
            case 'b':
                this.resizeBy_(KEYBOARD_RESIZE_STEP_PX, 0);
                return true;
            case 'w':
                this.resizeBy_(-KEYBOARD_RESIZE_STEP_PX, 0);
                return true;
            case 'i':
                this.resizeBy_(0, KEYBOARD_RESIZE_STEP_PX);
                return true;
            case '9':
                this.resizeBy_(0, -KEYBOARD_RESIZE_STEP_PX);
                return true;
            case 'k':
                this.resizeProportionally_(1.1);
                return true;
            case 'j':
                this.resizeProportionally_(0.9);
                return true;
            default:
                assertNotReached();
        }
    }
    /**
     * Changes the size of the textbox by deltaX px horizontally and deltaY px
     * vertically.
     */
    resizeBy_(deltaX, deltaY) {
        const newWidth = this.getClampedWidth_(this.width_ + deltaX);
        const newHeight = this.getClampedHeight_(this.height_ + deltaY);
        if (newWidth !== this.width_ || newHeight !== this.height_) {
            this.width_ = newWidth;
            this.height_ = newHeight;
        }
    }
    resizeProportionally_(scale) {
        const clampedScale = scale > 1 ?
            Math.min(scale, this.getMaxWidth_() / this.width_, this.getMaxHeight_() / this.height_) :
            Math.max(scale, this.minWidth_ / this.width_, this.minHeight_ / this.height_);
        const newWidth = Math.round(this.width_ * clampedScale);
        const newHeight = Math.round(this.height_ * clampedScale);
        if (newWidth !== this.width_ || newHeight !== this.height_) {
            this.width_ = newWidth;
            this.height_ = newHeight;
        }
    }
    getMaxWidth_() {
        return this.pageWidth_ + this.pageX_ - this.locationX_;
    }
    getMaxHeight_() {
        return this.pageHeight_ + this.pageY_ - this.locationY_;
    }
    getClampedWidth_(width) {
        return Math.min(this.getMaxWidth_(), Math.max(this.minWidth_, width));
    }
    getClampedHeight_(height) {
        return Math.min(this.getMaxHeight_(), Math.max(this.minHeight_, height));
    }
}
customElements.define(InkTextBoxElement.is, InkTextBoxElement);
