// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import '../data/document_info.js';
import '../data/model.js';
import '../data/state.js';
import './preview_area.js';
import './sidebar.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { isMac, isWindows } from 'chrome://resources/js/platform.js';
import { hasKeyModifiers } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PrinterType } from '../data/destination.js';
import { createDocumentSettings } from '../data/document_info.js';
import { MeasurementSystem } from '../data/measurement_system.js';
import { DuplexMode, whenReady } from '../data/model.js';
import { Size } from '../data/size.js';
import { Error, State } from '../data/state.js';
import { NativeLayerImpl } from '../native_layer.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { DestinationState } from './destination_settings.js';
import { PreviewAreaState } from './preview_area.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewAppElementBase = WebUiListenerMixinLit(SettingsMixin(CrLitElement));
export class PrintPreviewAppElement extends PrintPreviewAppElementBase {
    static get is() {
        return 'print-preview-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            state: { type: Number },
            controlsManaged_: { type: Boolean },
            destination_: { type: Object },
            destinationsManaged_: { type: Boolean },
            documentSettings_: { type: Object },
            error_: { type: Number },
            margins_: { type: Object },
            pageSize_: { type: Object },
            settingsManaged_: { type: Boolean },
            measurementSystem_: { type: Object },
        };
    }
    #state_accessor_storage = State.NOT_READY;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #controlsManaged__accessor_storage = false;
    get controlsManaged_() { return this.#controlsManaged__accessor_storage; }
    set controlsManaged_(value) { this.#controlsManaged__accessor_storage = value; }
    #destination__accessor_storage = null;
    get destination_() { return this.#destination__accessor_storage; }
    set destination_(value) { this.#destination__accessor_storage = value; }
    #destinationsManaged__accessor_storage = false;
    get destinationsManaged_() { return this.#destinationsManaged__accessor_storage; }
    set destinationsManaged_(value) { this.#destinationsManaged__accessor_storage = value; }
    #documentSettings__accessor_storage = createDocumentSettings();
    get documentSettings_() { return this.#documentSettings__accessor_storage; }
    set documentSettings_(value) { this.#documentSettings__accessor_storage = value; }
    #error__accessor_storage = null;
    get error_() { return this.#error__accessor_storage; }
    set error_(value) { this.#error__accessor_storage = value; }
    #margins__accessor_storage = null;
    get margins_() { return this.#margins__accessor_storage; }
    set margins_(value) { this.#margins__accessor_storage = value; }
    #pageSize__accessor_storage = new Size(612, 792);
    get pageSize_() { return this.#pageSize__accessor_storage; }
    set pageSize_(value) { this.#pageSize__accessor_storage = value; }
    #settingsManaged__accessor_storage = false;
    get settingsManaged_() { return this.#settingsManaged__accessor_storage; }
    set settingsManaged_(value) { this.#settingsManaged__accessor_storage = value; }
    #measurementSystem__accessor_storage = null;
    get measurementSystem_() { return this.#measurementSystem__accessor_storage; }
    set measurementSystem_(value) { this.#measurementSystem__accessor_storage = value; }
    nativeLayer_ = null;
    tracker_ = new EventTracker();
    cancelled_ = false;
    printRequested_ = false;
    startPreviewWhenReady_ = false;
    showSystemDialogBeforePrint_ = false;
    openPdfInPreview_ = false;
    isInKioskAutoPrintMode_ = false;
    whenReady_ = null;
    constructor() {
        super();
        // Regular expression that captures the leading slash, the content and the
        // trailing slash in three different groups.
        const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
        const path = location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
        if (path !== '/') { // There are no subpages in Print Preview.
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    connectedCallback() {
        super.connectedCallback();
        document.documentElement.classList.remove('loading');
        this.nativeLayer_ = NativeLayerImpl.getInstance();
        this.addWebUiListener('print-preset-options', this.onPrintPresetOptions_.bind(this));
        this.tracker_.add(window, 'keydown', this.onKeyDown_.bind(this));
        this.$.previewArea.setPluginKeyEventCallback(this.onKeyDown_.bind(this));
        this.whenReady_ = whenReady();
        this.nativeLayer_.getInitialSettings().then(this.onInitialSettingsSet_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.tracker_.removeAll();
        this.whenReady_ = null;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('destinationsManaged_') ||
            changedPrivateProperties.has('settingsManaged_')) {
            this.controlsManaged_ =
                this.destinationsManaged_ || this.settingsManaged_;
        }
    }
    firstUpdated() {
        FocusOutlineManager.forDocument(document);
        // 
        this.$.sidebar.addEventListener('open-pdf-in-preview', this.onOpenPdfInPreview_.bind(this));
        // 
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('state')) {
            this.updateUiForStateChange_();
        }
        if (changedPrivateProperties.has('error_')) {
            if (this.error_ !== null && this.error_ !== Error.NONE) {
                this.nativeLayer_.recordInHistogram('PrintPreview.StateError', this.error_, Error.MAX_BUCKET);
            }
        }
    }
    onSidebarFocus_() {
        this.$.previewArea.hideToolbar();
    }
    /**
     * Consume escape and enter key presses and ctrl + shift + p. Delegate
     * everything else to the preview area.
     */
    onKeyDown_(e) {
        if (e.key === 'Escape' && !hasKeyModifiers(e)) {
            // On non-mac with toolkit-views, ESC key is handled by C++-side instead
            // of JS-side.
            if (isMac) {
                this.close_();
                e.preventDefault();
            }
            return;
        }
        // On Mac, Cmd+Period should close the print dialog.
        if (isMac && e.key === '.' && e.metaKey) {
            this.close_();
            e.preventDefault();
            return;
        }
        // Ctrl + Shift + p / Mac equivalent. Doesn't apply on Chrome OS.
        // On Linux/Windows, shift + p means that e.key will be 'P' with caps lock
        // off or 'p' with caps lock on.
        // On Mac, alt + p means that e.key will be unicode 03c0 (pi).
        if (e.key === 'P' || e.key === 'p' || e.key === '\u03c0') {
            if ((isMac && e.metaKey && e.altKey && !e.shiftKey && !e.ctrlKey) ||
                (!isMac && e.shiftKey && e.ctrlKey && !e.altKey && !e.metaKey)) {
                // Don't use system dialog if the link isn't available.
                if (!this.$.sidebar.systemDialogLinkAvailable()) {
                    return;
                }
                // Don't try to print with system dialog on Windows if the document is
                // not ready, because we send the preview document to the printer on
                // Windows.
                if (!isWindows || this.state === State.READY) {
                    this.onPrintWithSystemDialog_();
                }
                e.preventDefault();
                return;
            }
        }
        if ((e.key === 'Enter' || e.key === 'NumpadEnter') &&
            this.state === State.READY) {
            const activeElement = e.composedPath()[0];
            // activeElement may be undefined if this is a forwarded key event from
            // the plugin. Print Preview conventionally does not trigger a print for
            // Enter when the plugin is focused
            if (!activeElement) {
                return;
            }
            const activeElementTag = activeElement.tagName;
            if (['CR-BUTTON', 'BUTTON', 'SELECT', 'A', 'CR-CHECKBOX'].includes(activeElementTag)) {
                return;
            }
            this.onPrintRequested_();
            e.preventDefault();
            return;
        }
        // Pass certain directional keyboard events to the PDF viewer.
        this.$.previewArea.handleDirectionalKeyEvent(e);
    }
    onInitialSettingsSet_(settings) {
        if (!this.whenReady_) {
            // This element and its corresponding model were detached while waiting
            // for the callback. This can happen in tests; return early.
            return;
        }
        this.whenReady_.then(() => {
            this.$.documentInfo.init(settings.previewModifiable, settings.documentTitle, settings.documentHasSelection);
            this.$.model.setStickySettings(settings.serializedAppStateStr);
            this.$.model.setPolicySettings(settings.policies);
            this.measurementSystem_ = new MeasurementSystem(settings.thousandsDelimiter, settings.decimalDelimiter, settings.unitType);
            this.setSetting('selectionOnly', settings.shouldPrintSelectionOnly);
            this.$.sidebar.init(settings.isInAppKioskMode, settings.printerName, settings.serializedDefaultDestinationSelectionRulesStr, settings.pdfPrinterDisabled);
            this.destinationsManaged_ = settings.destinationsManaged;
            this.isInKioskAutoPrintMode_ = settings.isInKioskAutoPrintMode;
            // This is only visible in the task manager.
            let title = document.head.querySelector('title');
            if (!title) {
                title = document.createElement('title');
                document.head.appendChild(title);
            }
            title.textContent = settings.documentTitle;
        });
    }
    onDestinationStateChanged_(e) {
        const destinationState = e.detail.value;
        switch (destinationState) {
            case DestinationState.SET:
                if (this.state !== State.NOT_READY &&
                    this.state !== State.FATAL_ERROR) {
                    this.$.state.transitTo(State.NOT_READY);
                }
                break;
            case DestinationState.UPDATED:
                if (!this.$.model.initialized()) {
                    this.$.model.applyStickySettings();
                }
                this.$.model.applyPoliciesOnDestinationUpdate();
                this.startPreviewWhenReady_ = true;
                if (this.state === State.NOT_READY &&
                    this.destination_.type !== PrinterType.PDF_PRINTER) {
                    this.nativeLayer_.recordBooleanHistogram('PrintPreview.TransitionedToReadyState', true);
                }
                this.$.state.transitTo(State.READY);
                break;
            case DestinationState.ERROR:
                if (this.state === State.NOT_READY &&
                    this.destination_.type !== PrinterType.PDF_PRINTER) {
                    this.nativeLayer_.recordBooleanHistogram('PrintPreview.TransitionedToReadyState', false);
                }
                this.$.state.transitTo(State.ERROR);
                break;
            default:
                break;
        }
    }
    /**
     * @param e Event containing the new sticky settings.
     */
    onStickySettingChanged_(e) {
        this.nativeLayer_.saveAppState(e.detail);
    }
    async onPreviewSettingChanged_() {
        if (this.state === State.READY) {
            // Need to wait for rendering to finish, to ensure that the `destination`
            // is synced across print-preview-app, print-preview-model and
            // print-preview-area.
            await this.updateComplete;
            assert(this.destination_.id === this.$.previewArea.destination.id);
            assert(this.destination_.id === this.$.model.destination.id);
            this.$.previewArea.startPreview(false);
            this.startPreviewWhenReady_ = false;
        }
        else {
            this.startPreviewWhenReady_ = true;
        }
    }
    updateUiForStateChange_() {
        if (this.state === State.READY) {
            if (this.startPreviewWhenReady_) {
                this.$.previewArea.startPreview(false);
                this.startPreviewWhenReady_ = false;
            }
            if (this.isInKioskAutoPrintMode_ || this.printRequested_) {
                this.onPrintRequested_();
                // Reset in case printing fails.
                this.printRequested_ = false;
            }
        }
        else if (this.state === State.CLOSING) {
            this.remove();
            this.nativeLayer_.dialogClose(this.cancelled_);
        }
        else if (this.state === State.PRINT_PENDING) {
            assert(this.destination_);
            if (this.destination_.type !== PrinterType.PDF_PRINTER) {
                // Only hide the preview for local, non PDF destinations.
                this.nativeLayer_.hidePreview();
                this.$.state.transitTo(State.HIDDEN);
            }
        }
        else if (this.state === State.PRINTING) {
            assert(this.destination_);
            const whenPrintDone = this.nativeLayer_.doPrint(this.$.model.createPrintTicket(this.destination_, this.openPdfInPreview_, this.showSystemDialogBeforePrint_));
            const onError = this.destination_.type === PrinterType.PDF_PRINTER ?
                this.onFileSelectionCancel_.bind(this) :
                this.onPrintFailed_.bind(this);
            whenPrintDone.then(this.close_.bind(this), onError);
        }
    }
    onPrintRequested_() {
        if (this.state === State.NOT_READY) {
            this.printRequested_ = true;
            return;
        }
        this.$.state.transitTo(this.$.previewArea.previewLoaded() ? State.PRINTING :
            State.PRINT_PENDING);
    }
    onCancelRequested_() {
        this.cancelled_ = true;
        this.$.state.transitTo(State.CLOSING);
    }
    /**
     * @param e The event containing the new validity.
     */
    onSettingValidChanged_(e) {
        if (e.detail) {
            this.$.state.transitTo(State.READY);
        }
        else {
            this.error_ = Error.INVALID_TICKET;
            this.$.state.transitTo(State.ERROR);
        }
    }
    onFileSelectionCancel_() {
        this.$.state.transitTo(State.READY);
    }
    onPrintWithSystemDialog_() {
        // 
        // 
        this.nativeLayer_.showSystemDialog();
        this.$.state.transitTo(State.SYSTEM_DIALOG);
        // 
    }
    // 
    onOpenPdfInPreview_() {
        this.openPdfInPreview_ = true;
        this.$.previewArea.setOpeningPdfInPreview();
        this.onPrintRequested_();
    }
    // 
    /**
     * Called when printing to an extension printer fails.
     * @param httpError The HTTP error code, or -1 or a string describing
     *     the error, if not an HTTP error.
     */
    onPrintFailed_(httpError) {
        console.warn('Printing failed with error code ' + httpError);
        this.error_ = Error.PRINT_FAILED;
        this.$.state.transitTo(State.FATAL_ERROR);
    }
    onPreviewStateChanged_(e) {
        const previewState = e.detail.value;
        switch (previewState) {
            case PreviewAreaState.DISPLAY_PREVIEW:
            case PreviewAreaState.OPEN_IN_PREVIEW_LOADED:
                if (this.state === State.PRINT_PENDING || this.state === State.HIDDEN) {
                    this.$.state.transitTo(State.PRINTING);
                }
                break;
            case PreviewAreaState.ERROR:
                if (this.state !== State.ERROR && this.state !== State.FATAL_ERROR) {
                    this.$.state.transitTo(this.error_ === Error.INVALID_PRINTER ? State.ERROR :
                        State.FATAL_ERROR);
                }
                break;
            default:
                break;
        }
    }
    /**
     * Updates printing options according to source document presets.
     * @param disableScaling Whether the document disables scaling.
     * @param copies The default number of copies from the document.
     * @param duplex The default duplex setting from the document.
     */
    onPrintPresetOptions_(disableScaling, copies, duplex) {
        if (disableScaling) {
            this.$.documentInfo.updateIsScalingDisabled(true);
        }
        if (copies > 0 && this.getSetting('copies').available) {
            this.setSetting('copies', copies, true);
        }
        if (duplex === DuplexMode.UNKNOWN_DUPLEX_MODE) {
            return;
        }
        if (this.getSetting('duplex').available) {
            this.setSetting('duplex', duplex === DuplexMode.LONG_EDGE || duplex === DuplexMode.SHORT_EDGE, true);
        }
        if (duplex !== DuplexMode.SIMPLEX &&
            this.getSetting('duplexShortEdge').available) {
            this.setSetting('duplexShortEdge', duplex === DuplexMode.SHORT_EDGE, true);
        }
    }
    /**
     * @param e Contains the new preview request ID.
     */
    onPreviewStart_(e) {
        this.$.documentInfo.inFlightRequestId = e.detail;
    }
    close_() {
        this.$.state.transitTo(State.CLOSING);
    }
    onDestinationChanged_(e) {
        this.destination_ = e.detail.value;
    }
    onDestinationCapabilitiesChanged_() {
        this.$.model.updateSettingsFromDestination();
    }
    onStateChanged_(e) {
        this.state = e.detail.value;
    }
    onErrorChanged_(e) {
        this.error_ = e.detail.value;
    }
    onSettingsManagedChanged_(e) {
        this.settingsManaged_ = e.detail.value;
    }
    onDocumentSettingsChanged_(e) {
        this.documentSettings_ = e.detail.value;
    }
    onMarginsChanged_(e) {
        this.margins_ = e.detail.value;
    }
    onPageSizeChanged_(e) {
        this.pageSize_ = e.detail.value;
    }
}
customElements.define(PrintPreviewAppElement.is, PrintPreviewAppElement);
