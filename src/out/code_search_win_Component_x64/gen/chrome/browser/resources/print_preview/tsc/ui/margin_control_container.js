// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './margin_control.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { Coordinate2d } from '../data/coordinate2d.js';
import { CustomMarginsOrientation, MarginsType } from '../data/margins.js';
import { Size } from '../data/size.js';
import { State } from '../data/state.js';
import { getCss } from './margin_control_container.css.js';
import { getHtml } from './margin_control_container.html.js';
import { SettingsMixin } from './settings_mixin.js';
export const MARGIN_KEY_MAP = new Map([
    [CustomMarginsOrientation.TOP, 'marginTop'],
    [CustomMarginsOrientation.RIGHT, 'marginRight'],
    [CustomMarginsOrientation.BOTTOM, 'marginBottom'],
    [CustomMarginsOrientation.LEFT, 'marginLeft'],
]);
const MINIMUM_DISTANCE = 72; // 1 inch
const PrintPreviewMarginControlContainerElementBase = SettingsMixin(CrLitElement);
export class PrintPreviewMarginControlContainerElement extends PrintPreviewMarginControlContainerElementBase {
    static get is() {
        return 'print-preview-margin-control-container';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            pageSize: { type: Object },
            documentMargins: { type: Object },
            previewLoaded: { type: Boolean },
            measurementSystem: { type: Object },
            state: { type: Number },
            scaleTransform_: { type: Number },
            translateTransform_: { type: Object },
            clipSize_: { type: Object },
            available_: { type: Boolean },
            invisible_: { type: Boolean },
            marginSides_: { type: Array },
            /**
             * String attribute used to set cursor appearance. Possible values:
             * empty (''): No margin control is currently being dragged.
             * 'dragging-horizontal': The left or right control is being dragged.
             * 'dragging-vertical': The top or bottom control is being dragged.
             */
            dragging_: {
                type: String,
                reflect: true,
            },
        };
    }
    #pageSize_accessor_storage = new Size(612, 792);
    get pageSize() { return this.#pageSize_accessor_storage; }
    set pageSize(value) { this.#pageSize_accessor_storage = value; }
    #documentMargins_accessor_storage = null;
    get documentMargins() { return this.#documentMargins_accessor_storage; }
    set documentMargins(value) { this.#documentMargins_accessor_storage = value; }
    #previewLoaded_accessor_storage = false;
    get previewLoaded() { return this.#previewLoaded_accessor_storage; }
    set previewLoaded(value) { this.#previewLoaded_accessor_storage = value; }
    #measurementSystem_accessor_storage = null;
    get measurementSystem() { return this.#measurementSystem_accessor_storage; }
    set measurementSystem(value) { this.#measurementSystem_accessor_storage = value; }
    #state_accessor_storage = State.NOT_READY;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #available__accessor_storage = false;
    get available_() { return this.#available__accessor_storage; }
    set available_(value) { this.#available__accessor_storage = value; }
    #invisible__accessor_storage = true;
    get invisible_() { return this.#invisible__accessor_storage; }
    set invisible_(value) { this.#invisible__accessor_storage = value; }
    #clipSize__accessor_storage = new Size(0, 0);
    get clipSize_() { return this.#clipSize__accessor_storage; }
    set clipSize_(value) { this.#clipSize__accessor_storage = value; }
    #scaleTransform__accessor_storage = 0;
    get scaleTransform_() { return this.#scaleTransform__accessor_storage; }
    set scaleTransform_(value) { this.#scaleTransform__accessor_storage = value; }
    #translateTransform__accessor_storage = new Coordinate2d(0, 0);
    get translateTransform_() { return this.#translateTransform__accessor_storage; }
    set translateTransform_(value) { this.#translateTransform__accessor_storage = value; }
    #dragging__accessor_storage = '';
    get dragging_() { return this.#dragging__accessor_storage; }
    set dragging_(value) { this.#dragging__accessor_storage = value; }
    #marginSides__accessor_storage = [
        CustomMarginsOrientation.TOP,
        CustomMarginsOrientation.RIGHT,
        CustomMarginsOrientation.BOTTOM,
        CustomMarginsOrientation.LEFT,
    ];
    get marginSides_() { return this.#marginSides__accessor_storage; }
    set marginSides_(value) { this.#marginSides__accessor_storage = value; }
    pointerStartPositionInPixels_ = new Coordinate2d(0, 0);
    marginStartPositionInPixels_ = null;
    resetMargins_ = null;
    eventTracker_ = new EventTracker();
    textboxFocused_ = false;
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('customMargins.value', this.onMarginSettingsChange_.bind(this));
        this.onMarginSettingsChange_();
        this.addSettingObserver('mediaSize.value', this.onMediaSizeOrLayoutChange_.bind(this));
        this.addSettingObserver('layout.value', this.onMediaSizeOrLayoutChange_.bind(this));
        this.addSettingObserver('margins.value', () => {
            this.available_ = this.computeAvailable_();
        });
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('state')) {
            this.onStateChanged_();
        }
        if (changedProperties.has('previewLoaded')) {
            this.available_ = this.computeAvailable_();
        }
        if (changedPrivateProperties.has('available_')) {
            this.onAvailableChange_();
        }
    }
    computeAvailable_() {
        return this.previewLoaded &&
            (this.getSettingValue('margins') === MarginsType.CUSTOM) &&
            !!this.pageSize;
    }
    onAvailableChange_() {
        if (this.available_ && this.resetMargins_) {
            // Set the custom margins values to the current document margins if the
            // custom margins were reset.
            const newMargins = {};
            assert(this.documentMargins);
            for (const side of Object.values(CustomMarginsOrientation)) {
                const key = MARGIN_KEY_MAP.get(side);
                newMargins[key] = this.documentMargins.get(side);
            }
            this.setSetting('customMargins', newMargins);
            this.resetMargins_ = false;
        }
        this.invisible_ = !this.available_;
    }
    onMarginSettingsChange_() {
        const margins = this.getSettingValue('customMargins');
        if (!margins || margins.marginTop === undefined) {
            // This may be called when print preview model initially sets the
            // settings. It sets custom margins empty by default.
            return;
        }
        this.shadowRoot.querySelectorAll('print-preview-margin-control')
            .forEach(control => {
            const key = MARGIN_KEY_MAP.get(control.side);
            const newValue = margins[key] || 0;
            control.setPositionInPts(newValue);
            control.setTextboxValue(newValue);
        });
    }
    onMediaSizeOrLayoutChange_() {
        // Reset the custom margins when the paper size changes. Don't do this if
        // it is the first preview.
        if (this.resetMargins_ === null) {
            return;
        }
        this.resetMargins_ = true;
        // Reset custom margins so that the sticky value is not restored for the new
        // paper size.
        this.setSetting('customMargins', {});
    }
    onStateChanged_() {
        if (this.state === State.READY && this.resetMargins_ === null) {
            // Don't reset margins if there are sticky values. Otherwise, set them
            // to the document margins when the user selects custom margins.
            const margins = this.getSettingValue('customMargins');
            this.resetMargins_ = !margins || margins.marginTop === undefined;
        }
    }
    /**
     * @return Whether the controls should be disabled.
     */
    controlsDisabled_() {
        return this.state !== State.READY || this.invisible_;
    }
    /**
     * @param orientation Orientation value to test.
     * @return Whether the given orientation is TOP or BOTTOM.
     */
    isTopOrBottom_(orientation) {
        return orientation === CustomMarginsOrientation.TOP ||
            orientation === CustomMarginsOrientation.BOTTOM;
    }
    /**
     * @param control Control being repositioned.
     * @param posInPixels Desired position, in pixels.
     * @return The new position for the control, in pts. Returns the
     *     position for the dimension that the control operates in, i.e.
     *     x direction for the left/right controls, y direction otherwise.
     */
    posInPixelsToPts_(control, posInPixels) {
        const side = control.side;
        return this.clipAndRoundValue_(side, control.convertPixelsToPts(this.isTopOrBottom_(side) ? posInPixels.y : posInPixels.x));
    }
    /**
     * Moves the position of the given control to the desired position in pts
     * within some constraint minimum and maximum.
     * @param control Control to move.
     * @param posInPts Desired position to move to, in pts. Position is
     *     1 dimensional and represents position in the x direction if control
     * is for the left or right margin, and the y direction otherwise.
     */
    moveControlWithConstraints_(control, posInPts) {
        control.setPositionInPts(posInPts);
        control.setTextboxValue(posInPts);
    }
    /**
     * Translates the position of the margin control relative to the pointer
     * position in pixels.
     * @param pointerPosition New position of the pointer.
     * @return New position of the margin control.
     */
    translatePointerToPositionInPixels(pointerPosition) {
        return new Coordinate2d(pointerPosition.x - this.pointerStartPositionInPixels_.x +
            this.marginStartPositionInPixels_.x, pointerPosition.y - this.pointerStartPositionInPixels_.y +
            this.marginStartPositionInPixels_.y);
    }
    /**
     * Called when the pointer moves in the custom margins component. Moves the
     * dragged margin control.
     * @param event Contains the position of the pointer.
     */
    onPointerMove_(event) {
        const control = event.target;
        const posInPts = this.posInPixelsToPts_(control, this.translatePointerToPositionInPixels(new Coordinate2d(event.x, event.y)));
        this.moveControlWithConstraints_(control, posInPts);
    }
    /**
     * Called when the pointer is released in the custom margins component.
     * Releases the dragged margin control.
     * @param event Contains the position of the pointer.
     */
    onPointerUp_(event) {
        const control = event.target;
        this.dragging_ = '';
        const posInPixels = this.translatePointerToPositionInPixels(new Coordinate2d(event.x, event.y));
        const posInPts = this.posInPixelsToPts_(control, posInPixels);
        this.moveControlWithConstraints_(control, posInPts);
        this.setMargin_(control.side, posInPts);
        this.eventTracker_.remove(control, 'pointercancel');
        this.eventTracker_.remove(control, 'pointerup');
        this.eventTracker_.remove(control, 'pointermove');
        this.fireDragChanged_(false);
    }
    /**
     * @param invisible Whether the margin controls should be invisible.
     */
    setInvisible(invisible) {
        // Ignore changes if the margin controls are not available.
        if (!this.available_) {
            return;
        }
        // Do not set the controls invisible if the user is dragging or focusing
        // the textbox for one of them.
        if (invisible && (this.dragging_ !== '' || this.textboxFocused_)) {
            return;
        }
        this.invisible_ = invisible;
    }
    /**
     * @param e Contains information about what control fired the event.
     */
    onTextFocus_(e) {
        this.textboxFocused_ = true;
        const control = e.target;
        const x = control.offsetLeft;
        const y = control.offsetTop;
        const isTopOrBottom = this.isTopOrBottom_(control.side);
        const position = {};
        // Extra padding, in px, to ensure the full textbox will be visible and
        // not just a portion of it. Can't be less than half the width or height
        // of the clip area for the computations below to work.
        const padding = Math.min(Math.min(this.clipSize_.width / 2, this.clipSize_.height / 2), 50);
        // Note: clipSize_ gives the current visible area of the margin control
        // container. The offsets of the controls are relative to the origin of
        // this visible area.
        if (isTopOrBottom) {
            // For top and bottom controls, the horizontal position of the box is
            // around halfway across the control's width.
            position.x = Math.min(x + control.offsetWidth / 2 - padding, 0);
            position.x = Math.max(x + control.offsetWidth / 2 + padding - this.clipSize_.width, position.x);
            // For top and bottom controls, the vertical position of the box is
            // nearly the same as the vertical position of the control.
            position.y = Math.min(y - padding, 0);
            position.y = Math.max(y - this.clipSize_.height + padding, position.y);
        }
        else {
            // For left and right controls, the horizontal position of the box is
            // nearly the same as the horizontal position of the control.
            position.x = Math.min(x - padding, 0);
            position.x = Math.max(x - this.clipSize_.width + padding, position.x);
            // For top and bottom controls, the vertical position of the box is
            // around halfway up the control's height.
            position.y = Math.min(y + control.offsetHeight / 2 - padding, 0);
            position.y = Math.max(y + control.offsetHeight / 2 + padding - this.clipSize_.height, position.y);
        }
        this.fire('text-focus-position', position);
    }
    /**
     * @param marginSide The margin side. Must be a CustomMarginsOrientation.
     * @param marginValue New value for the margin in points.
     */
    setMargin_(marginSide, marginValue) {
        const oldMargins = this.getSettingValue('customMargins');
        const key = MARGIN_KEY_MAP.get(marginSide);
        if (oldMargins[key] === marginValue) {
            return;
        }
        const newMargins = Object.assign({}, oldMargins);
        newMargins[key] = marginValue;
        this.setSetting('customMargins', newMargins);
    }
    /**
     * @param marginSide The margin side.
     * @param value The new margin value in points.
     * @return The clipped margin value in points.
     */
    clipAndRoundValue_(marginSide, value) {
        if (value < 0) {
            return 0;
        }
        const Orientation = CustomMarginsOrientation;
        let limit = 0;
        const margins = this.getSettingValue('customMargins');
        if (marginSide === Orientation.TOP) {
            limit = this.pageSize.height - margins.marginBottom - MINIMUM_DISTANCE;
        }
        else if (marginSide === Orientation.RIGHT) {
            limit = this.pageSize.width - margins.marginLeft - MINIMUM_DISTANCE;
        }
        else if (marginSide === Orientation.BOTTOM) {
            limit = this.pageSize.height - margins.marginTop - MINIMUM_DISTANCE;
        }
        else {
            assert(marginSide === Orientation.LEFT);
            limit = this.pageSize.width - margins.marginRight - MINIMUM_DISTANCE;
        }
        return Math.round(Math.min(value, limit));
    }
    /**
     * @param e Event containing the new textbox value.
     */
    onTextChange_(e) {
        const control = e.target;
        control.invalid = false;
        const clippedValue = this.clipAndRoundValue_(control.side, e.detail);
        control.setPositionInPts(clippedValue);
        this.setMargin_(control.side, clippedValue);
    }
    /**
     * @param e Event fired when a control's text field is blurred. Contains
     *     information about whether the control is in an invalid state.
     */
    onTextBlur_(e) {
        const control = e.target;
        control.setTextboxValue(control.getPositionInPts());
        if (e.detail /* detail is true if the control is in an invalid state */) {
            control.invalid = false;
        }
        this.textboxFocused_ = false;
    }
    /**
     * @param e Fired when pointerdown occurs on a margin control.
     */
    onPointerdown_(e) {
        const control = e.target;
        if (!control.shouldDrag(e)) {
            return;
        }
        this.pointerStartPositionInPixels_ = new Coordinate2d(e.x, e.y);
        this.marginStartPositionInPixels_ =
            new Coordinate2d(control.offsetLeft, control.offsetTop);
        this.dragging_ = this.isTopOrBottom_(control.side) ? 'dragging-vertical' :
            'dragging-horizontal';
        this.eventTracker_.add(control, 'pointercancel', (e) => this.onPointerUp_(e));
        this.eventTracker_.add(control, 'pointerup', (e) => this.onPointerUp_(e));
        this.eventTracker_.add(control, 'pointermove', (e) => this.onPointerMove_(e));
        control.setPointerCapture(e.pointerId);
        this.fireDragChanged_(true);
    }
    /**
     * @param dragChanged
     */
    fireDragChanged_(dragChanged) {
        this.fire('margin-drag-changed', dragChanged);
    }
    /**
     * Set display:none after the opacity transition for the controls is done.
     */
    onTransitionEnd_() {
        if (this.invisible_) {
            this.style.display = 'none';
        }
    }
    /**
     * Updates the translation transformation that translates pixel values in
     * the space of the HTML DOM.
     * @param translateTransform Updated value of the translation transformation.
     */
    updateTranslationTransform(translateTransform) {
        if (!translateTransform.equals(this.translateTransform_)) {
            this.translateTransform_ = translateTransform;
        }
    }
    /**
     * Updates the scaling transform that scales pixels values to point values.
     * @param scaleTransform Updated value of the scale transform.
     */
    updateScaleTransform(scaleTransform) {
        if (scaleTransform !== this.scaleTransform_) {
            this.scaleTransform_ = scaleTransform;
        }
    }
    /**
     * Clips margin controls to the given clip size in pixels.
     * @param clipSize Size to clip the margin controls to.
     */
    updateClippingMask(clipSize) {
        this.clipSize_ = clipSize;
    }
}
customElements.define(PrintPreviewMarginControlContainerElement.is, PrintPreviewMarginControlContainerElement);
