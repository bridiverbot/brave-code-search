// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import './margin_control_container.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { hasKeyModifiers } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DarkModeMixin } from '../dark_mode_mixin.js';
import { Coordinate2d } from '../data/coordinate2d.js';
import { CustomMarginsOrientation, MarginsType } from '../data/margins.js';
import { DuplexMode } from '../data/model.js';
import { ScalingType } from '../data/scaling.js';
import { Size } from '../data/size.js';
import { Error, State } from '../data/state.js';
import { NativeLayerImpl } from '../native_layer.js';
import { areRangesEqual } from '../print_preview_utils.js';
import { MARGIN_KEY_MAP } from './margin_control_container.js';
import { PluginProxyImpl } from './plugin_proxy.js';
import { getCss } from './preview_area.css.js';
import { getHtml } from './preview_area.html.js';
import { SettingsMixin } from './settings_mixin.js';
export var PreviewAreaState;
(function (PreviewAreaState) {
    PreviewAreaState["LOADING"] = "loading";
    PreviewAreaState["DISPLAY_PREVIEW"] = "display-preview";
    PreviewAreaState["OPEN_IN_PREVIEW_LOADING"] = "open-in-preview-loading";
    PreviewAreaState["OPEN_IN_PREVIEW_LOADED"] = "open-in-preview-loaded";
    PreviewAreaState["ERROR"] = "error";
})(PreviewAreaState || (PreviewAreaState = {}));
const PrintPreviewPreviewAreaElementBase = WebUiListenerMixinLit(I18nMixinLit(SettingsMixin(DarkModeMixin(CrLitElement))));
export class PrintPreviewPreviewAreaElement extends PrintPreviewPreviewAreaElementBase {
    static get is() {
        return 'print-preview-preview-area';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            destination: { type: Object },
            documentModifiable: { type: Boolean },
            error: {
                type: Number,
                notify: true,
            },
            margins: { type: Object },
            measurementSystem: { type: Object },
            pageSize: { type: Object },
            previewState: {
                type: String,
                notify: true,
            },
            state: { type: Number },
            pluginLoadComplete_: { type: Boolean },
            documentReady_: { type: Boolean },
        };
    }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #documentModifiable_accessor_storage = false;
    get documentModifiable() { return this.#documentModifiable_accessor_storage; }
    set documentModifiable(value) { this.#documentModifiable_accessor_storage = value; }
    #error_accessor_storage = null;
    get error() { return this.#error_accessor_storage; }
    set error(value) { this.#error_accessor_storage = value; }
    #margins_accessor_storage = null;
    get margins() { return this.#margins_accessor_storage; }
    set margins(value) { this.#margins_accessor_storage = value; }
    #measurementSystem_accessor_storage = null;
    get measurementSystem() { return this.#measurementSystem_accessor_storage; }
    set measurementSystem(value) { this.#measurementSystem_accessor_storage = value; }
    #pageSize_accessor_storage = new Size(612, 792);
    get pageSize() { return this.#pageSize_accessor_storage; }
    set pageSize(value) { this.#pageSize_accessor_storage = value; }
    #previewState_accessor_storage = PreviewAreaState.LOADING;
    get previewState() { return this.#previewState_accessor_storage; }
    set previewState(value) { this.#previewState_accessor_storage = value; }
    #state_accessor_storage = State.NOT_READY;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #pluginLoadComplete__accessor_storage = false;
    get pluginLoadComplete_() { return this.#pluginLoadComplete__accessor_storage; }
    set pluginLoadComplete_(value) { this.#pluginLoadComplete__accessor_storage = value; }
    #documentReady__accessor_storage = false;
    get documentReady_() { return this.#documentReady__accessor_storage; }
    set documentReady_(value) { this.#documentReady__accessor_storage = value; }
    nativeLayer_ = null;
    lastTicket_ = null;
    inFlightRequestId_ = -1;
    pluginProxy_ = PluginProxyImpl.getInstance();
    keyEventCallback_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.nativeLayer_ = NativeLayerImpl.getInstance();
        this.addWebUiListener('page-preview-ready', this.onPagePreviewReady_.bind(this));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('state') || changedProperties.has('error')) {
            this.onStateOrErrorChange_();
        }
        if (changedPrivateProperties.has('documentReady_') ||
            changedPrivateProperties.has('pluginLoadComplete_')) {
            this.pluginOrDocumentStatusChanged_();
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener('pointerover', this.onPointerOver_.bind(this));
        this.addEventListener('pointerout', this.onPointerOut_.bind(this));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('inDarkMode')) {
            this.onDarkModeChanged_();
        }
    }
    getLastTicketForTest() {
        return this.lastTicket_;
    }
    previewLoaded() {
        return this.documentReady_ && this.pluginLoadComplete_;
    }
    /**
     * Called when the pointer moves onto the component. Shows the margin
     * controls if custom margins are being used.
     */
    onPointerOver_() {
        this.$.marginControlContainer.setInvisible(false);
    }
    /**
     * Called when the pointer moves off of the component. Hides the margin
     * controls if they are visible.
     */
    onPointerOut_() {
        this.$.marginControlContainer.setInvisible(true);
    }
    pluginOrDocumentStatusChanged_() {
        if (!this.pluginLoadComplete_ || !this.documentReady_ ||
            this.previewState === PreviewAreaState.ERROR) {
            return;
        }
        this.previewState =
            this.previewState === PreviewAreaState.OPEN_IN_PREVIEW_LOADING ?
                PreviewAreaState.OPEN_IN_PREVIEW_LOADED :
                PreviewAreaState.DISPLAY_PREVIEW;
    }
    /**
     * @return 'invisible' if overlay is invisible, '' otherwise.
     */
    getInvisible_() {
        return this.isInDisplayPreviewState_() ? 'invisible' : '';
    }
    /**
     * @return Whether the preview area is in DISPLAY_PREVIEW state.
     */
    isInDisplayPreviewState_() {
        return this.previewState === PreviewAreaState.DISPLAY_PREVIEW;
    }
    /**
     * @return Whether the preview is currently loading.
     */
    isPreviewLoading_() {
        return this.previewState === PreviewAreaState.LOADING;
    }
    /**
     * @return 'jumping-dots' to enable animation, '' otherwise.
     */
    getJumpingDots_() {
        return this.isPreviewLoading_() ? 'jumping-dots' : '';
    }
    /**
     * @return The current preview area message to display.
     */
    currentMessage_() {
        switch (this.previewState) {
            case PreviewAreaState.LOADING:
                return this.i18nAdvanced('loading');
            case PreviewAreaState.DISPLAY_PREVIEW:
                return window.trustedTypes.emptyHTML;
            // 
            case PreviewAreaState.OPEN_IN_PREVIEW_LOADING:
            case PreviewAreaState.OPEN_IN_PREVIEW_LOADED:
                return this.i18nAdvanced('openingPDFInPreview');
            // 
            case PreviewAreaState.ERROR:
                // The preview area is responsible for displaying all errors except
                // print failed.
                return this.getErrorMessage_();
            default:
                return window.trustedTypes.emptyHTML;
        }
    }
    /**
     * @param forceUpdate Whether to force the preview area to update
     *     regardless of whether the print ticket has changed.
     */
    startPreview(forceUpdate) {
        if (!this.hasTicketChanged_() && !forceUpdate &&
            this.previewState !== PreviewAreaState.ERROR) {
            return;
        }
        this.previewState = PreviewAreaState.LOADING;
        this.documentReady_ = false;
        this.getPreview_().then(previewUid => {
            if (!this.documentModifiable) {
                this.onPreviewStart_(previewUid, -1);
            }
            this.documentReady_ = true;
        }, type => {
            if (type === 'SETTINGS_INVALID') {
                this.error = Error.INVALID_PRINTER;
                this.previewState = PreviewAreaState.ERROR;
            }
            else if (type !== 'CANCELLED') {
                console.warn('Preview failed in getPreview(): ' + type);
                this.error = Error.PREVIEW_FAILED;
                this.previewState = PreviewAreaState.ERROR;
            }
        });
    }
    // 
    /** Set the preview state to display the "opening in preview" message. */
    setOpeningPdfInPreview() {
        this.previewState = this.previewState === PreviewAreaState.LOADING ?
            PreviewAreaState.OPEN_IN_PREVIEW_LOADING :
            PreviewAreaState.OPEN_IN_PREVIEW_LOADED;
    }
    // 
    /**
     * @param previewUid The unique identifier of the preview.
     * @param index The index of the page to preview.
     */
    onPreviewStart_(previewUid, index) {
        if (!this.pluginProxy_.pluginReady()) {
            const plugin = this.pluginProxy_.createPlugin(previewUid, index);
            this.pluginProxy_.setKeyEventCallback(this.keyEventCallback_);
            this.shadowRoot.querySelector('.preview-area-plugin-wrapper').appendChild(plugin);
            this.pluginProxy_.setLoadCompleteCallback(this.onPluginLoadComplete_.bind(this));
            this.pluginProxy_.setViewportChangedCallback(this.onPreviewVisualStateChange_.bind(this));
        }
        this.pluginLoadComplete_ = false;
        if (this.inDarkMode) {
            this.pluginProxy_.darkModeChanged(true);
        }
        this.pluginProxy_.resetPrintPreviewMode(previewUid, index, !this.getSettingValue('color'), this.getSettingValue('pages'), this.documentModifiable);
    }
    /**
     * Called when the plugin loads the preview completely.
     * @param success Whether the plugin load succeeded or not.
     */
    onPluginLoadComplete_(success) {
        if (success) {
            this.pluginLoadComplete_ = true;
        }
        else {
            console.warn('Preview failed in onPluginLoadComplete_()');
            this.error = Error.PREVIEW_FAILED;
            this.previewState = PreviewAreaState.ERROR;
        }
    }
    /**
     * Called when the preview plugin's visual state has changed. This is a
     * consequence of scrolling or zooming the plugin. Updates the custom
     * margins component if shown.
     * @param pageX The horizontal offset for the page corner in pixels.
     * @param pageY The vertical offset for the page corner in pixels.
     * @param pageWidth The page width in pixels.
     * @param viewportWidth The viewport width in pixels.
     * @param viewportHeight The viewport height in pixels.
     */
    onPreviewVisualStateChange_(pageX, pageY, pageWidth, viewportWidth, viewportHeight) {
        // Ensure the PDF viewer isn't tabbable if the window is small enough that
        // the zoom toolbar isn't displayed.
        const tabindex = viewportWidth < 300 || viewportHeight < 200 ? '-1' : '0';
        this.shadowRoot.querySelector('.preview-area-plugin').setAttribute('tabindex', tabindex);
        this.$.marginControlContainer.updateTranslationTransform(new Coordinate2d(pageX, pageY));
        this.$.marginControlContainer.updateScaleTransform(pageWidth / this.pageSize.width);
        this.$.marginControlContainer.updateClippingMask(new Size(viewportWidth, viewportHeight));
        // Align the margin control container with the preview content area.
        // The offset may be caused by the scrollbar on the left in the preview
        // area in right-to-left direction.
        const previewDocument = this.shadowRoot
            .querySelector('.preview-area-plugin').contentDocument;
        if (previewDocument && previewDocument.documentElement) {
            this.$.marginControlContainer.style.left =
                previewDocument.documentElement.offsetLeft + 'px';
        }
    }
    /**
     * Called when a page's preview has been generated.
     * @param pageIndex The index of the page whose preview is ready.
     * @param previewUid The unique ID of the print preview UI.
     * @param previewResponseId The preview request ID that this page
     *     preview is a response to.
     */
    onPagePreviewReady_(pageIndex, previewUid, previewResponseId) {
        if (this.inFlightRequestId_ !== previewResponseId) {
            return;
        }
        const pageNumber = pageIndex + 1;
        let index = this.getSettingValue('pages').indexOf(pageNumber);
        // When pagesPerSheet > 1, the backend will always return page indices 0 to
        // N-1, where N is the total page count of the N-upped document.
        const pagesPerSheet = this.getSettingValue('pagesPerSheet');
        if (pagesPerSheet > 1) {
            index = pageIndex;
        }
        if (index === 0) {
            this.onPreviewStart_(previewUid, pageIndex);
        }
        if (index !== -1) {
            this.pluginProxy_.loadPreviewPage(previewUid, pageIndex, index);
        }
    }
    onDarkModeChanged_() {
        if (this.pluginProxy_.pluginReady()) {
            this.pluginProxy_.darkModeChanged(this.inDarkMode);
        }
        if (this.previewState === PreviewAreaState.DISPLAY_PREVIEW) {
            this.startPreview(true);
        }
    }
    /**
     * Processes a keyboard event that could possibly be used to change state of
     * the preview plugin.
     * @param e Keyboard event to process.
     */
    handleDirectionalKeyEvent(e) {
        // Make sure the PDF plugin is there.
        // We only care about: PageUp, PageDown, Left, Up, Right, Down.
        // If the user is holding a modifier key, ignore.
        if (!this.pluginProxy_.pluginReady() ||
            !['PageUp', 'PageDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp',
                'ArrowDown']
                .includes(e.key) ||
            hasKeyModifiers(e)) {
            return;
        }
        // Don't handle the key event for these elements.
        const tagName = e.composedPath()[0].tagName;
        if (['INPUT', 'SELECT', 'EMBED'].includes(tagName)) {
            return;
        }
        // For the most part, if any div of header was the last clicked element,
        // then the active element is the body. Starting with the last clicked
        // element, and work up the DOM tree to see if any element has a
        // scrollbar. If there exists a scrollbar, do not handle the key event
        // here.
        const isEventHorizontal = ['ArrowLeft', 'ArrowRight'].includes(e.key);
        for (let i = 0; i < e.composedPath().length; i++) {
            const element = e.composedPath()[i];
            if (element.scrollHeight > element.clientHeight && !isEventHorizontal ||
                element.scrollWidth > element.clientWidth && isEventHorizontal) {
                return;
            }
        }
        // No scroll bar anywhere, or the active element is something else, like a
        // button. Note: buttons have a bigger scrollHeight than clientHeight.
        this.pluginProxy_.sendKeyEvent(e);
        e.preventDefault();
    }
    /**
     * Sends a message to the plugin to hide the toolbars after a delay.
     */
    hideToolbar() {
        if (!this.pluginProxy_.pluginReady()) {
            return;
        }
        this.pluginProxy_.hideToolbar();
    }
    /**
     * Set a callback that gets called when a key event is received that
     * originates in the plugin.
     * @param callback The callback to be called with a key event.
     */
    setPluginKeyEventCallback(callback) {
        this.keyEventCallback_ = callback;
    }
    /**
     * Called when dragging margins starts or stops.
     */
    onMarginDragChanged_(e) {
        if (!this.pluginProxy_.pluginReady()) {
            return;
        }
        // When hovering over the plugin (which may be in a separate iframe)
        // pointer events will be sent to the frame. When dragging the margins,
        // we don't want this to happen as it can cause the margin to stop
        // being draggable.
        this.pluginProxy_.setPointerEvents(!e.detail);
    }
    /**
     * @param e Contains information about where the plugin should scroll to.
     */
    onTextFocusPosition_(e) {
        // TODO(tkent): This is a workaround of a preview-area scrolling
        // issue. Blink scrolls preview-area on focus, but we don't want it.  We
        // should adjust scroll position of PDF preview and positions of
        // MarginContgrols here, or restructure the HTML so that the PDF review
        // and MarginControls are on the single scrollable container.
        // crbug.com/40464055
        this.scrollTop = 0;
        this.scrollLeft = 0;
        const position = e.detail;
        if (position.x === 0 && position.y === 0) {
            return;
        }
        this.pluginProxy_.scrollPosition(position.x, position.y);
    }
    /**
     * @return Whether margin settings are valid for the print ticket.
     */
    marginsValid_() {
        const type = this.getSettingValue('margins');
        if (!Object.values(MarginsType).includes(type)) {
            // Unrecognized margins type.
            return false;
        }
        if (type !== MarginsType.CUSTOM) {
            return true;
        }
        const customMargins = this.getSettingValue('customMargins');
        return customMargins.marginTop !== undefined &&
            customMargins.marginLeft !== undefined &&
            customMargins.marginBottom !== undefined &&
            customMargins.marginRight !== undefined;
    }
    hasTicketChanged_() {
        if (!this.marginsValid_()) {
            return false;
        }
        if (!this.lastTicket_) {
            return true;
        }
        assert(this.destination);
        const lastTicket = this.lastTicket_;
        // Margins
        const newMarginsType = this.getSettingValue('margins');
        if (newMarginsType !== lastTicket.marginsType &&
            newMarginsType !== MarginsType.CUSTOM) {
            return true;
        }
        if (newMarginsType === MarginsType.CUSTOM) {
            const customMargins = this.getSettingValue('customMargins');
            // Change in custom margins values.
            if (!!lastTicket.marginsCustom &&
                (lastTicket.marginsCustom.marginTop !== customMargins.marginTop ||
                    lastTicket.marginsCustom.marginLeft !== customMargins.marginLeft ||
                    lastTicket.marginsCustom.marginRight !== customMargins.marginRight ||
                    lastTicket.marginsCustom.marginBottom !==
                        customMargins.marginBottom)) {
                return true;
            }
            // Changed to custom margins from a different margins type.
            if (!this.margins) {
                return false;
            }
            const customMarginsChanged = Object.values(CustomMarginsOrientation).some(side => {
                return this.margins.get(side) !==
                    customMargins[MARGIN_KEY_MAP.get(side)];
            });
            if (customMarginsChanged) {
                return true;
            }
        }
        // Simple settings: ranges, layout, header/footer, pages per sheet, fit to
        // page, css background, selection only, rasterize, scaling, dpi
        if (!areRangesEqual(this.getSettingValue('ranges'), lastTicket.pageRange) ||
            this.getSettingValue('layout') !== lastTicket.landscape ||
            this.getColorForTicket_() !== lastTicket.color ||
            this.getSettingValue('headerFooter') !==
                lastTicket.headerFooterEnabled ||
            this.getSettingValue('cssBackground') !==
                lastTicket.shouldPrintBackgrounds ||
            this.getSettingValue('selectionOnly') !==
                lastTicket.shouldPrintSelectionOnly ||
            this.getSettingValue('rasterize') !== lastTicket.rasterizePDF ||
            this.isScalingChanged_(lastTicket)) {
            return true;
        }
        // Pages per sheet. If margins are non-default, wait for the return to
        // default margins to trigger a request.
        if (this.getSettingValue('pagesPerSheet') !== lastTicket.pagesPerSheet &&
            this.getSettingValue('margins') === MarginsType.DEFAULT) {
            return true;
        }
        // Media size
        const newValue = this.getSettingValue('mediaSize');
        if (newValue.height_microns !== lastTicket.mediaSize.height_microns ||
            newValue.width_microns !== lastTicket.mediaSize.width_microns ||
            newValue.imageable_area_left_microns !==
                lastTicket.mediaSize.imageable_area_left_microns ||
            newValue.imageable_area_bottom_microns !==
                lastTicket.mediaSize.imageable_area_bottom_microns ||
            newValue.imageable_area_right_microns !==
                lastTicket.mediaSize.imageable_area_right_microns ||
            newValue.imageable_area_top_microns !==
                lastTicket.mediaSize.imageable_area_top_microns ||
            (this.destination.id !== lastTicket.deviceName &&
                this.getSettingValue('margins') === MarginsType.MINIMUM)) {
            return true;
        }
        // Destination
        if (this.destination.type !== lastTicket.printerType) {
            return true;
        }
        return false;
    }
    /** @return Native color model of the destination. */
    getColorForTicket_() {
        assert(this.destination);
        return this.destination.getNativeColorModel(this.getSettingValue('color'));
    }
    /** @return Scale factor for print ticket. */
    getScaleFactorForTicket_() {
        return this.getSettingValue(this.getScalingSettingKey_()) ===
            ScalingType.CUSTOM ?
            parseInt(this.getSettingValue('scaling'), 10) :
            100;
    }
    isScalingPdf_() {
        return this.getSetting('scalingTypePdf').available;
    }
    /** @return Appropriate key for the scaling type setting. */
    getScalingSettingKey_() {
        return this.isScalingPdf_() ? 'scalingTypePdf' : 'scalingType';
    }
    /**
     * @return true if the scaling type has just changed between
     * `ScalingType.CUSTOM` and another scaling type that is functionally
     * equivalent. In other words, this detects switch back
     * and forth between the `CUSTOM` scaling type and
     * a different scaling type that behaves the same as `CUSTOM`.
     */
    scalingTypeAlteredAroundCustom_(otherScalingTypeSameToCustom, currentScalingType, lastScalingType) {
        const otherToCustom = currentScalingType === ScalingType.CUSTOM &&
            lastScalingType === otherScalingTypeSameToCustom;
        const customToOther = currentScalingType === otherScalingTypeSameToCustom &&
            lastScalingType === ScalingType.CUSTOM;
        return customToOther || otherToCustom;
    }
    /**
     * @param lastTicket Last print ticket.
     * @return Whether new scaling settings update the previewed
     *     document.
     */
    isScalingChanged_(lastTicket) {
        // Preview always updates if the scale factor is changed.
        if (this.getScaleFactorForTicket_() !== lastTicket.scaleFactor) {
            return true;
        }
        // If both scale factors and type match, no scaling change happened.
        const scalingType = this.getSettingValue(this.getScalingSettingKey_());
        if (scalingType === lastTicket.scalingType) {
            return false;
        }
        // When 'alignPdfDefaultPrintSettingsWithHTML' is enabled,
        // PDF documents use a different default scaling behavior:
        //
        // - OLD behavior: PDF default scaling = CUSTOM with a scale factor of 100
        // - NEW behavior: PDF default scaling = kCenterShrinkToFitPaper
        //
        // The behavior of the new option "actual size" is the same as custom
        // scaling with a scale factor of 100.
        if (this.isScalingPdf_() &&
            loadTimeData.getBoolean('alignPdfDefaultPrintSettingsWithHTML')) {
            return !this.scalingTypeAlteredAroundCustom_(ScalingType.ACTUAL_SIZE, scalingType, lastTicket.scalingType);
        }
        // Scaling doesn't always change because of a scalingType change. Changing
        // between custom scaling with a scale factor of 100 and default scaling
        // makes no difference.
        return !this.scalingTypeAlteredAroundCustom_(ScalingType.DEFAULT, scalingType, lastTicket.scalingType);
    }
    /**
     * @param dpiField The field in dpi to retrieve.
     * @return Field value.
     */
    getDpiForTicket_(dpiField) {
        const dpi = this.getSettingValue('dpi');
        const value = (dpi && dpiField in dpi) ? dpi[dpiField] : 0;
        return value;
    }
    /**
     * Requests a preview from the native layer.
     * @return Promise that resolves when the preview has been
     *     generated.
     */
    getPreview_() {
        assert(this.destination);
        this.inFlightRequestId_++;
        const ticket = {
            pageRange: this.getSettingValue('ranges'),
            mediaSize: this.getSettingValue('mediaSize'),
            landscape: this.getSettingValue('layout'),
            color: this.getColorForTicket_(),
            headerFooterEnabled: this.getSettingValue('headerFooter'),
            marginsType: this.getSettingValue('margins'),
            pagesPerSheet: this.getSettingValue('pagesPerSheet'),
            isFirstRequest: this.inFlightRequestId_ === 0,
            requestID: this.inFlightRequestId_,
            previewModifiable: this.documentModifiable,
            scaleFactor: this.getScaleFactorForTicket_(),
            scalingType: this.getSettingValue(this.getScalingSettingKey_()),
            shouldPrintBackgrounds: this.getSettingValue('cssBackground'),
            shouldPrintSelectionOnly: this.getSettingValue('selectionOnly'),
            // NOTE: Even though the remaining fields don't directly relate to the
            // preview, they still need to be included.
            // e.g. printing::PrintSettingsFromJobSettings() still checks for them.
            collate: true,
            copies: 1,
            deviceName: this.destination.id,
            dpiHorizontal: this.getDpiForTicket_('horizontal_dpi'),
            dpiVertical: this.getDpiForTicket_('vertical_dpi'),
            duplex: this.getSettingValue('duplex') ? DuplexMode.LONG_EDGE :
                DuplexMode.SIMPLEX,
            printerType: this.destination.type,
            rasterizePDF: this.getSettingValue('rasterize'),
        };
        if (this.getSettingValue('margins') === MarginsType.CUSTOM) {
            ticket.marginsCustom = this.getSettingValue('customMargins');
        }
        this.lastTicket_ = ticket;
        this.fire('preview-start', this.inFlightRequestId_);
        return this.nativeLayer_.getPreview(JSON.stringify(ticket));
    }
    onStateOrErrorChange_() {
        if ((this.state === State.ERROR || this.state === State.FATAL_ERROR) &&
            this.getErrorMessage_().toString() !== '') {
            this.previewState = PreviewAreaState.ERROR;
        }
    }
    /** @return The error message to display in the preview area. */
    getErrorMessage_() {
        switch (this.error) {
            case Error.INVALID_PRINTER:
                return this.i18nAdvanced('invalidPrinterSettings', {
                    substitutions: [],
                    tags: ['BR'],
                });
            case Error.PREVIEW_FAILED:
                return this.i18nAdvanced('previewFailed');
            default:
                return window.trustedTypes.emptyHTML;
        }
    }
}
customElements.define(PrintPreviewPreviewAreaElement.is, PrintPreviewPreviewAreaElement);
