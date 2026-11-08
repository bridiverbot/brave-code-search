// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_progress/cr_progress.js';
import './icons.html.js';
import './viewer_download_controls.js';
import './viewer_page_selector.js';
// 
import './viewer_save_to_drive_controls.js';
// 
import './shared_vars.css.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
// 
import { assert } from 'chrome://resources/js/assert.js';
// 
// 
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
// 
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
// 
import { AnnotationMode } from '../constants.js';
// 
import { FittingType, FormFieldFocusType } from '../constants.js';
// 
import { SaveToDriveState } from '../constants.js';
// 
// 
import { PluginController, PluginControllerEventType } from '../controller.js';
import { Ink2Manager } from '../ink2_manager.js';
// 
import { record, UserAction } from '../metrics.js';
import { getCss } from './viewer_toolbar.css.js';
import { getHtml } from './viewer_toolbar.html.js';
export class ViewerToolbarElement extends CrLitElement {
    static get is() {
        return 'viewer-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            docTitle: { type: String },
            docLength: { type: Number },
            embeddedViewer: { type: Boolean },
            hasEdits: { type: Boolean },
            formFieldFocus: { type: String },
            loadProgress: { type: Number },
            loading_: {
                type: Boolean,
                reflect: true,
            },
            pageNo: { type: Number },
            rotated: { type: Boolean },
            strings: { type: Object },
            viewportZoom: { type: Number },
            zoomBounds: { type: Object },
            sidenavCollapsed: { type: Boolean },
            twoUpViewEnabled: { type: Boolean },
            moreMenuOpen_: {
                type: Boolean,
                reflect: true,
            },
            displayAnnotations_: { type: Boolean },
            fittingType_: { type: String },
            printingEnabled_: { type: Boolean },
            viewportZoomPercent_: { type: Number },
            pdfGlicSummarizeEnabled_: { type: Boolean },
            // 
            annotationAvailable: { type: Boolean },
            annotationMode: {
                type: String,
                reflect: true,
            },
            enableUndoRedo: { type: Boolean },
            hasInk2Edits: { type: Boolean },
            pdfInk2Enabled: { type: Boolean },
            shouldEnableRedo_: { type: Boolean },
            shouldEnableUndo_: { type: Boolean },
            pdfSignaturesEnabled_: { type: Boolean },
            pdfTextAnnotationsEnabled_: { type: Boolean },
            //  enable_pdf_ink2
            // 
            pdfSaveToDriveEnabled: { type: Boolean },
            saveToDriveProgress: { type: Number },
            saveToDriveState: { type: String },
            //  enable_pdf_save_to_drive
        };
    }
    #docTitle_accessor_storage = '';
    get docTitle() { return this.#docTitle_accessor_storage; }
    set docTitle(value) { this.#docTitle_accessor_storage = value; }
    #docLength_accessor_storage = 0;
    get docLength() { return this.#docLength_accessor_storage; }
    set docLength(value) { this.#docLength_accessor_storage = value; }
    #embeddedViewer_accessor_storage = false;
    get embeddedViewer() { return this.#embeddedViewer_accessor_storage; }
    set embeddedViewer(value) { this.#embeddedViewer_accessor_storage = value; }
    #hasEdits_accessor_storage = false;
    get hasEdits() { return this.#hasEdits_accessor_storage; }
    set hasEdits(value) { this.#hasEdits_accessor_storage = value; }
    #formFieldFocus_accessor_storage = FormFieldFocusType.NONE;
    get formFieldFocus() { return this.#formFieldFocus_accessor_storage; }
    set formFieldFocus(value) { this.#formFieldFocus_accessor_storage = value; }
    #loadProgress_accessor_storage = 0;
    get loadProgress() { return this.#loadProgress_accessor_storage; }
    set loadProgress(value) { this.#loadProgress_accessor_storage = value; }
    #pageNo_accessor_storage = 0;
    get pageNo() { return this.#pageNo_accessor_storage; }
    set pageNo(value) { this.#pageNo_accessor_storage = value; }
    #rotated_accessor_storage = false;
    get rotated() { return this.#rotated_accessor_storage; }
    set rotated(value) { this.#rotated_accessor_storage = value; }
    #strings_accessor_storage;
    get strings() { return this.#strings_accessor_storage; }
    set strings(value) { this.#strings_accessor_storage = value; }
    #viewportZoom_accessor_storage = 0;
    get viewportZoom() { return this.#viewportZoom_accessor_storage; }
    set viewportZoom(value) { this.#viewportZoom_accessor_storage = value; }
    #zoomBounds_accessor_storage = { min: 0, max: 0 };
    get zoomBounds() { return this.#zoomBounds_accessor_storage; }
    set zoomBounds(value) { this.#zoomBounds_accessor_storage = value; }
    #sidenavCollapsed_accessor_storage = false;
    get sidenavCollapsed() { return this.#sidenavCollapsed_accessor_storage; }
    set sidenavCollapsed(value) { this.#sidenavCollapsed_accessor_storage = value; }
    #twoUpViewEnabled_accessor_storage = false;
    get twoUpViewEnabled() { return this.#twoUpViewEnabled_accessor_storage; }
    set twoUpViewEnabled(value) { this.#twoUpViewEnabled_accessor_storage = value; }
    #displayAnnotations__accessor_storage = true;
    get displayAnnotations_() { return this.#displayAnnotations__accessor_storage; }
    set displayAnnotations_(value) { this.#displayAnnotations__accessor_storage = value; }
    #fittingType__accessor_storage = FittingType.FIT_TO_PAGE;
    get fittingType_() { return this.#fittingType__accessor_storage; }
    set fittingType_(value) { this.#fittingType__accessor_storage = value; }
    #moreMenuOpen__accessor_storage = false;
    get moreMenuOpen_() { return this.#moreMenuOpen__accessor_storage; }
    set moreMenuOpen_(value) { this.#moreMenuOpen__accessor_storage = value; }
    #loading__accessor_storage = true;
    get loading_() { return this.#loading__accessor_storage; }
    set loading_(value) { this.#loading__accessor_storage = value; }
    #printingEnabled__accessor_storage = false;
    get printingEnabled_() { return this.#printingEnabled__accessor_storage; }
    set printingEnabled_(value) { this.#printingEnabled__accessor_storage = value; }
    #viewportZoomPercent__accessor_storage = 0;
    get viewportZoomPercent_() { return this.#viewportZoomPercent__accessor_storage; }
    set viewportZoomPercent_(value) { this.#viewportZoomPercent__accessor_storage = value; }
    #pdfGlicSummarizeEnabled__accessor_storage = false;
    get pdfGlicSummarizeEnabled_() { return this.#pdfGlicSummarizeEnabled__accessor_storage; }
    set pdfGlicSummarizeEnabled_(value) { this.#pdfGlicSummarizeEnabled__accessor_storage = value; }
    #pdfSaveToDriveEnabled_accessor_storage = false;
    // 
    get pdfSaveToDriveEnabled() { return this.#pdfSaveToDriveEnabled_accessor_storage; }
    set pdfSaveToDriveEnabled(value) { this.#pdfSaveToDriveEnabled_accessor_storage = value; }
    #saveToDriveProgress_accessor_storage = 0;
    get saveToDriveProgress() { return this.#saveToDriveProgress_accessor_storage; }
    set saveToDriveProgress(value) { this.#saveToDriveProgress_accessor_storage = value; }
    #saveToDriveState_accessor_storage = SaveToDriveState.UNINITIALIZED;
    get saveToDriveState() { return this.#saveToDriveState_accessor_storage; }
    set saveToDriveState(value) { this.#saveToDriveState_accessor_storage = value; }
    #annotationAvailable_accessor_storage = false;
    //  enable_pdf_save_to_drive
    // 
    // Ink2 reactive properties
    get annotationAvailable() { return this.#annotationAvailable_accessor_storage; }
    set annotationAvailable(value) { this.#annotationAvailable_accessor_storage = value; }
    #annotationMode_accessor_storage = AnnotationMode.OFF;
    get annotationMode() { return this.#annotationMode_accessor_storage; }
    set annotationMode(value) { this.#annotationMode_accessor_storage = value; }
    #enableUndoRedo_accessor_storage = true;
    get enableUndoRedo() { return this.#enableUndoRedo_accessor_storage; }
    set enableUndoRedo(value) { this.#enableUndoRedo_accessor_storage = value; }
    #hasInk2Edits_accessor_storage = false;
    get hasInk2Edits() { return this.#hasInk2Edits_accessor_storage; }
    set hasInk2Edits(value) { this.#hasInk2Edits_accessor_storage = value; }
    #pdfInk2Enabled_accessor_storage = false;
    get pdfInk2Enabled() { return this.#pdfInk2Enabled_accessor_storage; }
    set pdfInk2Enabled(value) { this.#pdfInk2Enabled_accessor_storage = value; }
    #shouldEnableRedo__accessor_storage = false;
    get shouldEnableRedo_() { return this.#shouldEnableRedo__accessor_storage; }
    set shouldEnableRedo_(value) { this.#shouldEnableRedo__accessor_storage = value; }
    #shouldEnableUndo__accessor_storage = false;
    get shouldEnableUndo_() { return this.#shouldEnableUndo__accessor_storage; }
    set shouldEnableUndo_(value) { this.#shouldEnableUndo__accessor_storage = value; }
    #pdfSignaturesEnabled__accessor_storage = false;
    get pdfSignaturesEnabled_() { return this.#pdfSignaturesEnabled__accessor_storage; }
    set pdfSignaturesEnabled_(value) { this.#pdfSignaturesEnabled__accessor_storage = value; }
    #pdfTextAnnotationsEnabled__accessor_storage = false;
    get pdfTextAnnotationsEnabled_() { return this.#pdfTextAnnotationsEnabled__accessor_storage; }
    set pdfTextAnnotationsEnabled_(value) { this.#pdfTextAnnotationsEnabled__accessor_storage = value; }
    // Ink2 class members
    canUndo_ = false;
    canRedo_ = false;
    pluginController_ = PluginController.getInstance();
    strokeInProgress_ = false;
    tracker_ = new EventTracker();
    constructor() {
        super();
        this.tracker_.add(this.pluginController_.getEventTarget(), PluginControllerEventType.FINISH_INK_STROKE, this.handleFinishInkStroke_.bind(this));
        this.tracker_.add(this.pluginController_.getEventTarget(), PluginControllerEventType.START_INK_STROKE, this.handleStartInkStroke_.bind(this));
        this.tracker_.add(Ink2Manager.getInstance(), 'undo-redo-state-changed', this.handleUndoRedoStateChanged_.bind(this));
    }
    //  enable_pdf_ink2
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('loadProgress')) {
            this.loading_ = this.loadProgress < 100;
        }
        if (changedProperties.has('strings') && this.strings) {
            this.updateLoadTimeData_();
        }
        if (changedProperties.has('viewportZoom')) {
            this.viewportZoomPercent_ = Math.round(100 * this.viewportZoom);
        }
        // 
        if (changedProperties.has('formFieldFocus')) {
            this.updateCanUndoRedo_();
        }
        // 
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // viewportZoomPercent_ always updates with viewportZoom, see above.
        if (changedProperties.has('viewportZoom')) {
            this.getZoomInput_().value = `${this.viewportZoomPercent_}%`;
        }
    }
    updateLoadTimeData_() {
        this.printingEnabled_ = loadTimeData.getBoolean('printingEnabled');
        this.pdfGlicSummarizeEnabled_ =
            loadTimeData.getBoolean('pdfGlicSummarizeEnabled');
        // 
        this.pdfSignaturesEnabled_ =
            loadTimeData.getBoolean('pdfSignaturesEnabled');
        this.pdfTextAnnotationsEnabled_ =
            loadTimeData.getBoolean('pdfTextAnnotationsEnabled');
        // 
    }
    onSidenavToggleClick_() {
        record(UserAction.TOGGLE_SIDENAV);
        this.dispatchEvent(new CustomEvent('sidenav-toggle-click'));
    }
    fitToButtonIcon_() {
        return 'pdf' +
            (this.fittingType_ === FittingType.FIT_TO_PAGE ? ':fit-page-height' :
                ':fit-page-width');
    }
    /** @return The appropriate tooltip for the current state. */
    getFitToButtonTooltip_() {
        if (!this.strings) {
            return '';
        }
        return loadTimeData.getString(this.fittingType_ === FittingType.FIT_TO_PAGE ? 'tooltipFitToPage' :
            'tooltipFitToWidth');
    }
    onGlicSummarizeClick_() {
        this.fire('glic-summarize');
    }
    // 
    showInk2Buttons_() {
        return this.pdfInk2Enabled;
    }
    // 
    onPrintClick_() {
        this.dispatchEvent(new CustomEvent('print'));
    }
    onRotateClick_() {
        this.dispatchEvent(new CustomEvent('rotate-left'));
    }
    onDisplayAnnotationsClick_() {
        record(UserAction.TOGGLE_DISPLAY_ANNOTATIONS);
        this.displayAnnotations_ = !this.displayAnnotations_;
        this.dispatchEvent(new CustomEvent('display-annotations-changed', { detail: this.displayAnnotations_ }));
        this.$.menu.close();
    }
    onPresentClick_() {
        record(UserAction.PRESENT);
        this.$.menu.close();
        this.dispatchEvent(new CustomEvent('present-click'));
    }
    onPropertiesClick_() {
        record(UserAction.PROPERTIES);
        this.$.menu.close();
        this.dispatchEvent(new CustomEvent('properties-click'));
    }
    getAriaChecked_(checked) {
        return checked ? 'true' : 'false';
    }
    getAriaExpanded_() {
        return this.sidenavCollapsed ? 'false' : 'true';
    }
    onTwoPageViewClick_() {
        const newTwoUpViewEnabled = !this.twoUpViewEnabled;
        this.dispatchEvent(new CustomEvent('two-up-view-changed', { detail: newTwoUpViewEnabled }));
        this.$.menu.close();
    }
    onZoomInClick_() {
        this.dispatchEvent(new CustomEvent('zoom-in'));
    }
    onZoomOutClick_() {
        this.dispatchEvent(new CustomEvent('zoom-out'));
    }
    forceFit(fittingType) {
        // The fitting type is the new state. We want to set the button fitting type
        // to the opposite value.
        this.fittingType_ = fittingType === FittingType.FIT_TO_WIDTH ?
            FittingType.FIT_TO_PAGE :
            FittingType.FIT_TO_WIDTH;
    }
    fitToggle() {
        const newState = this.fittingType_ === FittingType.FIT_TO_PAGE ?
            FittingType.FIT_TO_WIDTH :
            FittingType.FIT_TO_PAGE;
        this.dispatchEvent(new CustomEvent('fit-to-changed', { detail: this.fittingType_ }));
        this.fittingType_ = newState;
    }
    onFitToButtonClick_() {
        this.fitToggle();
    }
    getZoomInput_() {
        return this.shadowRoot.querySelector('#zoom-controls input');
    }
    onZoomBlur_() {
        this.onZoomChange_();
    }
    onZoomChange_() {
        const input = this.getZoomInput_();
        let value = Number.parseInt(input.value, 10);
        value = Math.max(Math.min(value, this.zoomBounds.max), this.zoomBounds.min);
        if (this.sendZoomChanged_(value)) {
            return;
        }
        const zoomString = `${this.viewportZoomPercent_}%`;
        input.value = zoomString;
    }
    /**
     * @param value The new zoom value
     * @return Whether the zoom-changed event was sent.
     */
    sendZoomChanged_(value) {
        if (Number.isNaN(value)) {
            return false;
        }
        // The viewport can have non-integer zoom values.
        if (Math.abs(this.viewportZoom * 100 - value) < 0.5) {
            return false;
        }
        this.dispatchEvent(new CustomEvent('zoom-changed', { detail: value }));
        return true;
    }
    onZoomInputPointerup_(e) {
        e.target.select();
    }
    onMoreClick_() {
        const anchor = this.shadowRoot.querySelector('#more');
        this.$.menu.showAt(anchor, {
            anchorAlignmentX: AnchorAlignment.CENTER,
            anchorAlignmentY: AnchorAlignment.AFTER_END,
            noOffset: true,
        });
    }
    onMoreOpenChanged_(e) {
        this.moreMenuOpen_ = e.detail.value;
    }
    isAtMinimumZoom_() {
        return this.zoomBounds !== undefined &&
            this.viewportZoomPercent_ === this.zoomBounds.min;
    }
    isAtMaximumZoom_() {
        return this.zoomBounds !== undefined &&
            this.viewportZoomPercent_ === this.zoomBounds.max;
    }
    // 
    // Gets a CSS class of "active" if `mode` is the active annotation mode.
    getActive_(mode) {
        return mode === this.annotationMode ? 'active' : '';
    }
    // Returns true if the button is toggled on, false otherwise.
    getAriaPressed_(mode) {
        return mode === this.annotationMode ? 'true' : 'false';
    }
    onAnnotationClick_() {
        assert(this.pdfInk2Enabled);
        const newAnnotationMode = this.annotationMode === AnnotationMode.DRAW ?
            AnnotationMode.OFF :
            AnnotationMode.DRAW;
        this.setAnnotationMode(newAnnotationMode);
    }
    setAnnotationMode(annotationMode) {
        assert(this.pdfInk2Enabled);
        this.dispatchEvent(new CustomEvent('annotation-mode-updated', { detail: annotationMode }));
    }
    //  enable_pdf_ink2
    // 
    onTextAnnotationClick_() {
        this.setAnnotationMode(this.annotationMode === AnnotationMode.TEXT ? AnnotationMode.OFF :
            AnnotationMode.TEXT);
    }
    onSignatureClick_() {
        this.setAnnotationMode(this.annotationMode === AnnotationMode.SIGNATURE ?
            AnnotationMode.OFF :
            AnnotationMode.SIGNATURE);
    }
    /**
     * Handles when the user starts a stroke. While the stroke is in progress,
     * disallow undo/redo operations.
     */
    handleStartInkStroke_() {
        this.strokeInProgress_ = true;
    }
    /**
     * Handles when the user finishes a stroke, so that undo/redo operations can
     * can be allowed if available. This event also fires for eraser operations.
     */
    handleFinishInkStroke_() {
        this.strokeInProgress_ = false;
    }
    computeEnableUndo_() {
        return this.shouldEnableUndo_ && !this.strokeInProgress_ &&
            this.enableUndoRedo;
    }
    computeEnableRedo_() {
        return this.shouldEnableRedo_ && !this.strokeInProgress_ &&
            this.enableUndoRedo;
    }
    onUndoClick_() {
        this.undo();
    }
    /**
     * Undo an annotation stroke, if possible.
     */
    undo() {
        if (!this.computeEnableUndo_()) {
            return;
        }
        assert(this.formFieldFocus !== FormFieldFocusType.TEXT);
        Ink2Manager.getInstance().undo();
        getAnnouncerInstance().announce(loadTimeData.getString('ink2AnnotationUndone'));
        record(UserAction.UNDO_INK2);
    }
    onRedoClick_() {
        this.redo();
    }
    /**
     * Redo an annotation stroke, if possible.
     */
    redo() {
        if (!this.computeEnableRedo_()) {
            return;
        }
        assert(this.formFieldFocus !== FormFieldFocusType.TEXT);
        Ink2Manager.getInstance().redo();
        getAnnouncerInstance().announce(loadTimeData.getString('ink2AnnotationRedone'));
        record(UserAction.REDO_INK2);
    }
    /**
     * Update whether the undo and redo buttons should be enabled or disabled.
     * Both buttons should be disabled when a text form field has focus. Undo and
     * redo should be disabled when there are no possible undo and redo actions
     * respectively.
     */
    updateCanUndoRedo_() {
        const isTextFormFieldFocused = this.formFieldFocus === FormFieldFocusType.TEXT;
        this.shouldEnableUndo_ = !isTextFormFieldFocused && this.canUndo_;
        this.shouldEnableRedo_ = !isTextFormFieldFocused && this.canRedo_;
    }
    handleUndoRedoStateChanged_(e) {
        this.canUndo_ = e.detail.canUndo;
        this.canRedo_ = e.detail.canRedo;
        this.updateCanUndoRedo_();
    }
    // 
    isFormFieldFocused_() {
        return this.formFieldFocus !== FormFieldFocusType.NONE;
    }
    /**
     * Updates the toolbar's presentation mode available flag depending on current
     * conditions.
     */
    presentationModeAvailable_() {
        return !this.embeddedViewer;
    }
    // 
    getSaveToDriveBubbleAnchor() {
        const anchor = this.shadowRoot.querySelector('#save-to-drive');
        assert(anchor);
        return anchor;
    }
}
customElements.define(ViewerToolbarElement.is, ViewerToolbarElement);
