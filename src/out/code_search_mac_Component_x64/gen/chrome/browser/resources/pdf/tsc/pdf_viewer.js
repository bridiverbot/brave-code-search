// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// 
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
// 
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './elements/viewer_error_dialog.js';
import './elements/viewer_password_dialog.js';
// 
import './elements/ink_text_annotations.js';
import './elements/viewer_bottom_toolbar.js';
import './elements/viewer_side_panel.js';
import './elements/viewer_signature_bottom_toolbar.js';
import './elements/viewer_signature_dialog.js';
import './elements/viewer_signature_side_panel.js';
import './elements/viewer_text_bottom_toolbar.js';
import './elements/viewer_text_side_panel.js';
// 
import './elements/viewer_pdf_sidenav.js';
import './elements/viewer_properties_dialog.js';
// 
import './elements/viewer_save_to_drive_bubble.js';
//  enable_pdf_save_to_drive
import './elements/viewer_toolbar.js';
import { PdfHelpBubbleProxyImpl } from 'chrome://resources/cr_components/help_bubble/pdf_help_bubble_proxy.js';
import { assert, assertNotReached, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { listenOnce } from 'chrome://resources/js/util.js';
// 
import { BeforeUnloadProxyImpl } from './before_unload_proxy.js';
import { AnnotationMode } from './constants.js';
// 
import { FittingType, FormFieldFocusType } from './constants.js';
// 
import { SaveToDriveBubbleRequestType, SaveToDriveState } from './constants.js';
import { PluginController } from './controller.js';
// 
import { PluginControllerEventType } from './controller.js';
// 
// 
import { TextBoxState } from './elements/ink_text_box.js';
import { ChangePageOrigin } from './elements/viewer_bookmark.js';
// 
import { Ink2Manager } from './ink2_manager.js';
//
import { LocalStorageProxyImpl } from './local_storage_proxy.js';
import { convertDocumentDimensionsMessage, convertFormFocusChangeMessage, convertLoadProgressMessage, convertSendKeyEventMessage } from './message_converter.js';
import { PostMessageDataType, record, recordEnumeration, UserAction } from './metrics.js';
import { NavigatorDelegateImpl, PdfNavigatorImpl, WindowOpenDisposition } from './navigator.js';
import { LoadState } from './pdf_scripting_api.js';
import { getCss } from './pdf_viewer.css.js';
import { getHtml } from './pdf_viewer.html.js';
import { PdfViewerBaseElement } from './pdf_viewer_base.js';
import { PdfViewerPrivateProxyImpl } from './pdf_viewer_private_proxy.js';
// 
import { getSaveToDriveManageStorageUrl, getSaveToDriveOpenInDriveUrl } from './pdf_viewer_utils.js';
//  enable_pdf_save_to_drive
import { hasCtrlModifier, hasCtrlModifierOnly, shouldIgnoreKeyEvents, verifyPdfHeader } from './pdf_viewer_utils.js';
// 
import { getTextStyleForShortcut } from './pdf_viewer_utils.js';
// 
// 
import { recordSaveToDriveBubbleActionMetrics, recordSaveToDriveBubbleRetryMetrics, recordSaveToDriveMetrics, recordShowSaveToDriveBubbleMetrics } from './save_to_drive_metrics.js';
//  enable_pdf_save_to_drive
// clang-format on
// 
const SaveToDriveErrorType = chrome.pdfViewerPrivate.SaveToDriveErrorType;
const SaveToDriveStatus = chrome.pdfViewerPrivate.SaveToDriveStatus;
//  enable_pdf_save_to_drive
const SaveRequestType = chrome.pdfViewerPrivate.SaveRequestType;
/**
 * Return the filename component of a URL, percent decoded if possible.
 * Exported for tests.
 */
export function getFilenameFromURL(url) {
    // Ignore the query and fragment.
    const mainUrl = url.split(/#|\?/)[0] || '';
    const components = mainUrl.split(/\/|\\/);
    const filename = components[components.length - 1] || '';
    try {
        return decodeURIComponent(filename);
    }
    catch (e) {
        if (e instanceof URIError) {
            return filename;
        }
        throw e;
    }
}
function eventToPromise(event, target) {
    return new Promise(resolve => listenOnce(target, event, (_e) => resolve()));
}
// Unlike hasCtrlModifierOnly(), this always checks `e.ctrlKey` and not
// `e.metaKey`. Whereas hasCtrlModifierOnly() will flip the two modifiers on
// macOS.
function hasFixedCtrlModifierOnly(e) {
    return e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey;
}
// Like hasCtrlModifierOnly(), but allow the shift modifier.
function hasCtrlModifierMaybeWithShift(e) {
    let metaModifier = e.metaKey;
    // 
    metaModifier = e.ctrlKey;
    // 
    return hasCtrlModifier(e) && !e.altKey && !metaModifier;
}
const LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY = 'sidenavCollapsed';
export const LOCAL_STORAGE_TWO_UP_VIEW_ENABLED_KEY = 'twoUpViewEnabled';
/**
 * The background color used for the regular viewer.
 */
// LINT.IfChange(PdfBackgroundColor)
const BACKGROUND_COLOR = 0xff282828;
// clang-format off
// LINT.ThenChange(//components/pdf/common/pdf_util.cc:PdfBackgroundColor)
// clang-format on
// 
function isEditedSaveRequestType(requestType) {
    return requestType === SaveRequestType.ANNOTATION ||
        requestType === SaveRequestType.EDITED;
}
// 
// 
function convertNoErrorStatusToSaveToDriveState(status) {
    switch (status) {
        case SaveToDriveStatus.INITIATED:
        case SaveToDriveStatus.FETCH_OAUTH:
        case SaveToDriveStatus.FETCH_PARENT_FOLDER:
        case SaveToDriveStatus.UPLOAD_STARTED:
        case SaveToDriveStatus.UPLOAD_IN_PROGRESS:
            return SaveToDriveState.UPLOADING;
        case SaveToDriveStatus.UPLOAD_COMPLETED:
            return SaveToDriveState.SUCCESS;
        default:
            return SaveToDriveState.UNINITIALIZED;
    }
}
function convertSaveToDriveProgressToSaveToDriveState(progress) {
    switch (progress.errorType) {
        case SaveToDriveErrorType.NO_ERROR:
            return convertNoErrorStatusToSaveToDriveState(progress.status);
        case SaveToDriveErrorType.UNKNOWN_ERROR:
            return SaveToDriveState.UNKNOWN_ERROR;
        case SaveToDriveErrorType.QUOTA_EXCEEDED:
            return SaveToDriveState.STORAGE_FULL_ERROR;
        case SaveToDriveErrorType.OFFLINE:
            return SaveToDriveState.CONNECTION_ERROR;
        case SaveToDriveErrorType.OAUTH_ERROR:
            return SaveToDriveState.SESSION_TIMEOUT_ERROR;
        case SaveToDriveErrorType.ACCOUNT_CHOOSER_CANCELED:
            return SaveToDriveState.UNINITIALIZED;
        case SaveToDriveErrorType.PARENT_FOLDER_SELECTION_FAILED:
            return SaveToDriveState.UNKNOWN_ERROR;
        default:
            assertNotReached();
    }
}
function saveToDriveStateIsFinalState(state) {
    switch (state) {
        case SaveToDriveState.SUCCESS:
        case SaveToDriveState.CONNECTION_ERROR:
        case SaveToDriveState.STORAGE_FULL_ERROR:
        case SaveToDriveState.SESSION_TIMEOUT_ERROR:
        case SaveToDriveState.UNKNOWN_ERROR:
            return true;
        default:
            return false;
    }
}
export class PdfViewerElement extends PdfViewerBaseElement {
    static get is() {
        return 'pdf-viewer';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ...super.properties,
            // 
            annotationMode_: { type: String },
            // 
            attachments_: { type: Array },
            bookmarks_: { type: Array },
            canSerializeDocument_: { type: Boolean },
            clockwiseRotations_: { type: Number },
            /** The number of pages in the PDF document. */
            docLength_: { type: Number },
            documentHasFocus_: { type: Boolean },
            documentMetadata_: { type: Object },
            embedded_: { type: Boolean },
            fileName_: { type: String },
            hadPassword_: { type: Boolean },
            hasEdits_: { type: Boolean },
            // 
            hasCommittedInk2Edits_: { type: Boolean },
            // 
            formFieldFocus_: { type: String },
            /** The current loading progress of the PDF document (0 - 100). */
            loadProgress_: { type: Number },
            /** The number of the page being viewed (1-based). */
            pageNo_: { type: Number },
            // 
            pdfInk2Enabled_: { type: Boolean },
            pdfSignaturesEnabled_: { type: Boolean },
            pdfTextAnnotationsEnabled_: { type: Boolean },
            // 
            // 
            pdfSaveToDriveEnabled_: { type: Boolean },
            saveToDriveProgress_: { type: Object },
            saveToDriveState_: { type: String },
            // 
            showPasswordDialog_: { type: Boolean },
            showPropertiesDialog_: { type: Boolean },
            // 
            showSignatureDialog_: { type: Boolean },
            // 
            sidenavCollapsed_: { type: Boolean },
            // 
            textboxState_: { type: Number },
            // 
            title_: { type: String },
            twoUpViewEnabled_: { type: Boolean },
            // 
            useSidePanelForInk_: { type: Boolean },
            // 
            viewportZoom_: { type: Number },
            zoomBounds_: { type: Object },
            toolbarEnabled_: { type: Boolean },
        };
    }
    beepCount = 0;
    #annotationMode__accessor_storage = AnnotationMode.OFF;
    // 
    get annotationMode_() { return this.#annotationMode__accessor_storage; }
    set annotationMode_(value) { this.#annotationMode__accessor_storage = value; }
    #attachments__accessor_storage = [];
    // 
    get attachments_() { return this.#attachments__accessor_storage; }
    set attachments_(value) { this.#attachments__accessor_storage = value; }
    #bookmarks__accessor_storage = [];
    get bookmarks_() { return this.#bookmarks__accessor_storage; }
    set bookmarks_(value) { this.#bookmarks__accessor_storage = value; }
    #canSerializeDocument__accessor_storage = false;
    get canSerializeDocument_() { return this.#canSerializeDocument__accessor_storage; }
    set canSerializeDocument_(value) { this.#canSerializeDocument__accessor_storage = value; }
    caretBrowsingEnabled_ = false;
    #clockwiseRotations__accessor_storage = 0;
    get clockwiseRotations_() { return this.#clockwiseRotations__accessor_storage; }
    set clockwiseRotations_(value) { this.#clockwiseRotations__accessor_storage = value; }
    #docLength__accessor_storage = 0;
    get docLength_() { return this.#docLength__accessor_storage; }
    set docLength_(value) { this.#docLength__accessor_storage = value; }
    #documentHasFocus__accessor_storage = false;
    get documentHasFocus_() { return this.#documentHasFocus__accessor_storage; }
    set documentHasFocus_(value) { this.#documentHasFocus__accessor_storage = value; }
    #documentMetadata__accessor_storage = {
        author: '',
        canSerializeDocument: false,
        creationDate: '',
        creator: '',
        fileSize: '',
        keywords: '',
        linearized: false,
        modDate: '',
        pageSize: '',
        producer: '',
        subject: '',
        title: '',
        version: '',
    };
    get documentMetadata_() { return this.#documentMetadata__accessor_storage; }
    set documentMetadata_(value) { this.#documentMetadata__accessor_storage = value; }
    #embedded__accessor_storage = false;
    get embedded_() { return this.#embedded__accessor_storage; }
    set embedded_(value) { this.#embedded__accessor_storage = value; }
    #fileName__accessor_storage = '';
    get fileName_() { return this.#fileName__accessor_storage; }
    set fileName_(value) { this.#fileName__accessor_storage = value; }
    #hadPassword__accessor_storage = false;
    get hadPassword_() { return this.#hadPassword__accessor_storage; }
    set hadPassword_(value) { this.#hadPassword__accessor_storage = value; }
    #hasEdits__accessor_storage = false;
    get hasEdits_() { return this.#hasEdits__accessor_storage; }
    set hasEdits_(value) { this.#hasEdits__accessor_storage = value; }
    #hasCommittedInk2Edits__accessor_storage = false;
    // 
    get hasCommittedInk2Edits_() { return this.#hasCommittedInk2Edits__accessor_storage; }
    set hasCommittedInk2Edits_(value) { this.#hasCommittedInk2Edits__accessor_storage = value; }
    // 
    // 
    // `hasUnsavedEdits_` is set whenever the user makes edits to the PDF that
    // have not been saved. This is used to determine whether to enable the
    // beforeunload dialog when the user navigates away with unsaved changes.
    hasUnsavedEdits_ = false;
    #formFieldFocus__accessor_storage = FormFieldFocusType.NONE;
    // 
    get formFieldFocus_() { return this.#formFieldFocus__accessor_storage; }
    set formFieldFocus_(value) { this.#formFieldFocus__accessor_storage = value; }
    #loadProgress__accessor_storage = 0;
    get loadProgress_() { return this.#loadProgress__accessor_storage; }
    set loadProgress_(value) { this.#loadProgress__accessor_storage = value; }
    navigator_ = null;
    #pageNo__accessor_storage = 0;
    get pageNo_() { return this.#pageNo__accessor_storage; }
    set pageNo_(value) { this.#pageNo__accessor_storage = value; }
    pdfGetSaveDataInBlocks_ = false;
    #pdfInk2Enabled__accessor_storage = false;
    // 
    get pdfInk2Enabled_() { return this.#pdfInk2Enabled__accessor_storage; }
    set pdfInk2Enabled_(value) { this.#pdfInk2Enabled__accessor_storage = value; }
    #pdfSignaturesEnabled__accessor_storage = false;
    get pdfSignaturesEnabled_() { return this.#pdfSignaturesEnabled__accessor_storage; }
    set pdfSignaturesEnabled_(value) { this.#pdfSignaturesEnabled__accessor_storage = value; }
    #pdfTextAnnotationsEnabled__accessor_storage = false;
    get pdfTextAnnotationsEnabled_() { return this.#pdfTextAnnotationsEnabled__accessor_storage; }
    set pdfTextAnnotationsEnabled_(value) { this.#pdfTextAnnotationsEnabled__accessor_storage = value; }
    #pdfSaveToDriveEnabled__accessor_storage = false;
    // 
    // 
    get pdfSaveToDriveEnabled_() { return this.#pdfSaveToDriveEnabled__accessor_storage; }
    set pdfSaveToDriveEnabled_(value) { this.#pdfSaveToDriveEnabled__accessor_storage = value; }
    #saveToDriveProgress__accessor_storage = {
        status: SaveToDriveStatus.NOT_STARTED,
        errorType: SaveToDriveErrorType.NO_ERROR,
    };
    get saveToDriveProgress_() { return this.#saveToDriveProgress__accessor_storage; }
    set saveToDriveProgress_(value) { this.#saveToDriveProgress__accessor_storage = value; }
    #saveToDriveState__accessor_storage = SaveToDriveState.UNINITIALIZED;
    get saveToDriveState_() { return this.#saveToDriveState__accessor_storage; }
    set saveToDriveState_(value) { this.#saveToDriveState__accessor_storage = value; }
    saveToDriveRequestType_ = SaveRequestType.ORIGINAL;
    // 
    pdfSearchifySaveEnabled_ = false;
    pdfUseShowSaveFilePicker_ = false;
    pluginController_ = PluginController.getInstance();
    // 
    restoreAnnotationMode_ = AnnotationMode.OFF;
    // 
    // 
    showBeforeUnloadDialog_ = false;
    #showPasswordDialog__accessor_storage = false;
    // 
    get showPasswordDialog_() { return this.#showPasswordDialog__accessor_storage; }
    set showPasswordDialog_(value) { this.#showPasswordDialog__accessor_storage = value; }
    #showPropertiesDialog__accessor_storage = false;
    get showPropertiesDialog_() { return this.#showPropertiesDialog__accessor_storage; }
    set showPropertiesDialog_(value) { this.#showPropertiesDialog__accessor_storage = value; }
    #showSignatureDialog__accessor_storage = false;
    // 
    get showSignatureDialog_() { return this.#showSignatureDialog__accessor_storage; }
    set showSignatureDialog_(value) { this.#showSignatureDialog__accessor_storage = value; }
    #sidenavCollapsed__accessor_storage;
    // 
    get sidenavCollapsed_() { return this.#sidenavCollapsed__accessor_storage; }
    set sidenavCollapsed_(value) { this.#sidenavCollapsed__accessor_storage = value; }
    #textboxState__accessor_storage = TextBoxState.INACTIVE;
    // 
    get textboxState_() { return this.#textboxState__accessor_storage; }
    set textboxState_(value) { this.#textboxState__accessor_storage = value; }
    #title__accessor_storage = '';
    // 
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    #toolbarEnabled__accessor_storage = false;
    get toolbarEnabled_() { return this.#toolbarEnabled__accessor_storage; }
    set toolbarEnabled_(value) { this.#toolbarEnabled__accessor_storage = value; }
    #twoUpViewEnabled__accessor_storage = false;
    get twoUpViewEnabled_() { return this.#twoUpViewEnabled__accessor_storage; }
    set twoUpViewEnabled_(value) { this.#twoUpViewEnabled__accessor_storage = value; }
    #useSidePanelForInk__accessor_storage = false;
    // 
    get useSidePanelForInk_() { return this.#useSidePanelForInk__accessor_storage; }
    set useSidePanelForInk_(value) { this.#useSidePanelForInk__accessor_storage = value; }
    #viewportZoom__accessor_storage = 1;
    // 
    get viewportZoom_() { return this.#viewportZoom__accessor_storage; }
    set viewportZoom_(value) { this.#viewportZoom__accessor_storage = value; }
    #zoomBounds__accessor_storage = { min: 0, max: 0 };
    get zoomBounds_() { return this.#zoomBounds__accessor_storage; }
    set zoomBounds_(value) { this.#zoomBounds__accessor_storage = value; }
    hasSearchifyText_ = false;
    constructor() {
        PdfHelpBubbleProxyImpl.createConnectedInstance();
        super();
        // TODO(dpapad): Add tests after crbug.com/40142584 is fixed.
        this.sidenavCollapsed_ = Boolean(Number.parseInt(LocalStorageProxyImpl.getInstance().getItem(LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY), 10));
    }
    // 
    connectedCallback() {
        super.connectedCallback();
        this.tracker.add(window, 'beforeunload', this.onBeforeUnload_.bind(this));
        // 
        const mediaQuery = window.matchMedia('(min-width: 960px)');
        this.useSidePanelForInk_ = mediaQuery.matches;
        this.tracker.add(mediaQuery, 'change', () => {
            this.useSidePanelForInk_ = mediaQuery.matches;
            // If in DRAW or TEXT annotation mode, record opening the
            // UI that's opened by making the window narrower/wider.
            if (this.annotationMode_ !== AnnotationMode.OFF) {
                record(this.useSidePanelForInk_ ? UserAction.OPEN_INK2_SIDE_PANEL :
                    UserAction.OPEN_INK2_BOTTOM_TOOLBAR);
            }
        });
        this.tracker.add(Ink2Manager.getInstance(), 'undo-redo-state-changed', this.handleUndoRedoStateChanged_.bind(this));
        //  enable_pdf_ink2
    }
    disconnectedCallback() {
        this.tracker.removeAll();
        super.disconnectedCallback();
    }
    //  enable_pdf_ink2 or enable_pdf_save_to_drive
    // 
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('pdfInk2Enabled_') &&
            this.pdfInk2Enabled_) {
            // Set the viewport when PdfInk2 is enabled, if this happens after init().
            Ink2Manager.getInstance().setViewport(this.viewport);
        }
    }
    // 
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('showErrorDialog') && this.showErrorDialog) {
            this.onErrorDialog_();
        }
        // 
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('saveToDriveState_')) {
            this.onSaveToDriveStateChanged_(changedPrivateProperties.get('saveToDriveState_'));
        }
        // 
    }
    getBackgroundColor() {
        return BACKGROUND_COLOR;
    }
    setPluginSrc(plugin) {
        plugin.src = this.browserApi.getStreamInfo().streamUrl;
    }
    init(browserApi) {
        this.initInternal(browserApi, this.$.scroller, this.$.sizer, this.$.content);
        this.fileName_ = getFilenameFromURL(this.originalUrl);
        this.title_ = this.fileName_;
        assert(this.paramsParser);
        this.toolbarEnabled_ =
            this.paramsParser.shouldShowToolbar(this.originalUrl);
        if (this.toolbarEnabled_) {
            this.$.toolbar.hidden = false;
        }
        const showSidenav = this.paramsParser.shouldShowSidenav(this.originalUrl, this.sidenavCollapsed_);
        this.sidenavCollapsed_ = !showSidenav;
        this.navigator_ = new PdfNavigatorImpl(this.originalUrl, this.viewport, this.paramsParser, new NavigatorDelegateImpl(browserApi));
        // Listen for save commands from the browser.
        if (this.pdfOopifEnabled) {
            chrome.pdfViewerPrivate.onSave.addListener(this.onSave_.bind(this));
        }
        else {
            chrome.mimeHandlerPrivate.onSave.addListener(this.onSave_.bind(this));
        }
        // Listen for hash updates from the browser.
        chrome.pdfViewerPrivate.onShouldUpdateViewport.addListener(this.handleMaybeUpdateViewport_.bind(this));
        // 
        PdfViewerPrivateProxyImpl.getInstance().onSaveToDriveProgress.addListener(this.handleSaveToDriveProgress_.bind(this));
        // 
        this.embedded_ = this.browserApi.getStreamInfo().embedded;
        if (this.pdfOopifEnabled && !this.embedded_) {
            // Give the full page PDF viewer focus so it can handle keyboard events
            // immediately.
            window.focus();
        }
    }
    handleKeyEvent(e) {
        if (shouldIgnoreKeyEvents() || e.defaultPrevented) {
            return;
        }
        // Let the viewport handle directional key events.
        if (this.viewport.handleDirectionalKeyEvent(e, this.formFieldFocus_ !== FormFieldFocusType.NONE, this.caretBrowsingEnabled_)) {
            return;
        }
        if (document.fullscreenElement !== null) {
            // Disable zoom shortcuts in Presentation mode.
            // Handle '+' and '-' buttons (both in the numpad and elsewhere).
            if (hasCtrlModifier(e) &&
                (e.key === '=' || e.key === '-' || e.key === '+')) {
                e.preventDefault();
            }
            // Disable further key handling when in Presentation mode.
            return;
        }
        // 
        if (this.isInTextAnnotationMode_()) {
            const textStyle = getTextStyleForShortcut(e);
            if (textStyle !== null) {
                e.preventDefault();
                Ink2Manager.getInstance().toggleTextStyle(textStyle);
                return;
            }
        }
        // 
        switch (e.key) {
            case 'a':
                // Take over Ctrl+A (but not other combinations like Ctrl-Shift-A).
                // Note that on macOS, "Ctrl" is Command.
                if (hasCtrlModifierOnly(e)) {
                    this.pluginController_.selectAll();
                    // Since we do selection ourselves.
                    e.preventDefault();
                }
                return;
            // 
            case 'Enter':
                if (e.fromPlugin &&
                    this.isInTextAnnotationMode_()) {
                    this.maybeCreateTextAnnotation_();
                }
                return;
            case 'v':
                if (e.fromPlugin && hasCtrlModifierOnly(e) &&
                    this.isInTextAnnotationMode_()) {
                    this.maybePasteTextAnnotation_();
                }
                return;
            // 
            default:
                break;
        }
        // Handle toolbar related key events.
        this.handleToolbarKeyEvent_(e);
    }
    // 
    maybePasteTextAnnotation_() {
        // Ignore paste if focus is actively on some other element like
        // a side panel/nav or toolbar.
        const focused = this.shadowRoot.activeElement;
        if (!!focused && !this.$.scroller.contains(focused)) {
            return;
        }
        const annotations = this.shadowRoot.querySelector('ink-text-annotations');
        assert(annotations);
        annotations.pasteAnnotation();
    }
    // 
    /**
     * Helper for handleKeyEvent dealing with events that control toolbars.
     */
    handleToolbarKeyEvent_(e) {
        // TODO: Add handling for additional relevant hotkeys for the new unified
        // toolbar.
        switch (e.key) {
            case '[':
                // Do not use hasCtrlModifierOnly() here, since Command + [ is already
                // taken by the "go back to the previous webpage" action.
                if (hasFixedCtrlModifierOnly(e)) {
                    this.rotateCounterclockwise();
                }
                return;
            case '\\':
                // Do not use hasCtrlModifierOnly() here, to match '[' and ']'.
                if (hasFixedCtrlModifierOnly(e)) {
                    this.$.toolbar.fitToggle();
                }
                return;
            case ']':
                // Do not use hasCtrlModifierOnly() here, since Command + ] is already
                // taken by the "go forward to the next webpage" action.
                if (hasFixedCtrlModifierOnly(e)) {
                    this.rotateClockwise();
                }
                return;
            // 
            case 'z':
            case 'Z':
                if (hasCtrlModifierMaybeWithShift(e)) {
                    if (e.shiftKey) {
                        this.$.toolbar.redo();
                    }
                    else {
                        this.$.toolbar.undo();
                    }
                }
                return;
            //   not is_macosx
            //   enable_pdf_ink2
            default:
                break;
        }
    }
    // 
    async maybeCreateTextAnnotation_(location) {
        const hasActive = this.isTextboxActive_();
        if (hasActive) {
            await this.maybeCommitActiveTextbox_();
        }
        Ink2Manager.getInstance().initializeTextAnnotation(location, /*onlyExisting=*/ hasActive);
    }
    recordEnterExitAnnotationModeMetrics_(newAnnotationMode) {
        // Record exit metrics if annotation mode is being changed from one of
        // the ink annotation modes.
        switch (this.annotationMode_) {
            case AnnotationMode.DRAW:
                record(UserAction.EXIT_INK2_ANNOTATION_MODE);
                break;
            case AnnotationMode.TEXT:
                record(UserAction.EXIT_INK2_TEXT_ANNOTATION_MODE);
                break;
            case AnnotationMode.SIGNATURE:
                record(UserAction.EXIT_INK2_SIGNATURE_MODE);
                break;
            case AnnotationMode.OFF:
                break;
            default:
                assertNotReached();
        }
        // Record enter metrics if annotation mode is being changed to one of
        // the ink annotation modes.
        switch (newAnnotationMode) {
            case AnnotationMode.DRAW:
                record(UserAction.ENTER_INK2_ANNOTATION_MODE);
                break;
            case AnnotationMode.TEXT:
                record(UserAction.ENTER_INK2_TEXT_ANNOTATION_MODE);
                break;
            case AnnotationMode.SIGNATURE:
                record(UserAction.ENTER_INK2_SIGNATURE_MODE);
                break;
            case AnnotationMode.OFF:
                break;
            default:
                assertNotReached();
        }
    }
    // 
    // 
    // Handles the annotation mode being updated from the toolbar buttons.
    onAnnotationModeUpdated_(e) {
        this.setAnnotationMode_(e.detail);
    }
    async setAnnotationMode_(newAnnotationMode) {
        assert(this.pdfInk2Enabled_);
        if (newAnnotationMode === this.annotationMode_) {
            return;
        }
        if (this.annotationMode_ === AnnotationMode.TEXT) {
            await this.maybeCommitActiveTextbox_();
        }
        if (this.annotationMode_ === AnnotationMode.OFF) {
            record(this.useSidePanelForInk_ ? UserAction.OPEN_INK2_SIDE_PANEL :
                UserAction.OPEN_INK2_BOTTOM_TOOLBAR);
        }
        if (this.restoreAnnotationMode_ === AnnotationMode.OFF) {
            this.recordEnterExitAnnotationModeMetrics_(newAnnotationMode);
        }
        this.pluginController_.setAnnotationMode(newAnnotationMode);
        if (newAnnotationMode === AnnotationMode.DRAW &&
            !Ink2Manager.getInstance().isInitializationStarted()) {
            await Ink2Manager.getInstance().initializeBrush();
        }
        if (newAnnotationMode === AnnotationMode.TEXT &&
            !Ink2Manager.getInstance().isTextInitializationComplete()) {
            await Ink2Manager.getInstance().initializeTextAnnotations();
        }
        this.annotationMode_ = newAnnotationMode;
        this.showSignatureDialog_ = newAnnotationMode === AnnotationMode.SIGNATURE;
    }
    //  enable_pdf_ink2
    onDisplayAnnotationsChanged_(e) {
        assert(this.currentController);
        this.currentController.setDisplayAnnotations(e.detail);
    }
    async enterPresentationMode_() {
        const scroller = this.$.scroller;
        this.viewport.saveZoomState();
        // Initiate `requestFullscreen()` synchronously to capture the user gesture
        // before any asynchronous operations (such as committing text annotations
        // when exiting text annotation mode).
        const fullscreenPromise = Promise.all([
            eventToPromise('fullscreenchange', scroller),
            scroller.requestFullscreen(),
        ]);
        // 
        // Exit annotation mode if it was enabled.
        if (this.pdfInk2Enabled_ && this.annotationMode_ !== AnnotationMode.OFF) {
            this.restoreAnnotationMode_ = this.annotationMode_;
            await this.setAnnotationMode_(AnnotationMode.OFF);
        }
        assert(this.annotationMode_ === AnnotationMode.OFF);
        // 
        await fullscreenPromise;
        this.forceFit(FittingType.FIT_TO_HEIGHT);
        // Switch viewport's wheel behavior.
        this.viewport.setPresentationMode(true);
        // Set presentation mode, which restricts the content to read only
        // (e.g. disable forms and links).
        this.pluginController_.setPresentationMode(true);
        // Nothing else to do here. The viewport will be updated as a result
        // of a 'resize' event callback.
    }
    exitPresentationMode_() {
        // Revert back to the normal state when exiting Presentation mode.
        assert(document.fullscreenElement === null);
        this.viewport.setPresentationMode(false);
        this.pluginController_.setPresentationMode(false);
        // Ensure that directional keys still work after exiting.
        this.focusPlugin_();
        // Set zoom back to original zoom before presentation mode.
        this.viewport.restoreZoomState();
    }
    // 
    async maybeRestoreAnnotationMode_() {
        // Restore annotation mode if it was previously enabled.
        if (this.restoreAnnotationMode_ !== AnnotationMode.OFF) {
            await this.setAnnotationMode_(this.restoreAnnotationMode_);
            assert(this.annotationMode_ !== AnnotationMode.OFF);
            this.restoreAnnotationMode_ = AnnotationMode.OFF;
        }
    }
    //  enable_pdf_ink2
    focusPlugin_() {
        // Focus the embed in this frame, so the browser routes keyboard events to
        // the plugin.
        this.shadowRoot.querySelector('embed').focus();
        // Send a 'focus' message to the plugin frame, so it internally focuses its
        // own elements.
        this.pluginController_.focus();
    }
    async onPresentClick_() {
        await this.enterPresentationMode_();
        // When fullscreen changes, it means that the user exited Presentation
        // mode.
        await eventToPromise('fullscreenchange', this.$.scroller);
        this.exitPresentationMode_();
        // 
        await this.maybeRestoreAnnotationMode_();
        // 
    }
    onPropertiesClick_() {
        assert(!this.showPropertiesDialog_);
        this.showPropertiesDialog_ = true;
    }
    onPropertiesDialogClose_() {
        assert(this.showPropertiesDialog_);
        this.showPropertiesDialog_ = false;
    }
    // 
    onSignatureDialogClose_() {
        assert(this.showSignatureDialog_);
        this.showSignatureDialog_ = false;
    }
    // 
    /**
     * @return Whether two up view was enabled when the user last toggled it,
     *     and should be restored for this document.
     */
    shouldRestoreTwoUpView_() {
        const value = LocalStorageProxyImpl.getInstance().getItem(LOCAL_STORAGE_TWO_UP_VIEW_ENABLED_KEY);
        return value !== null && Boolean(Number.parseInt(value, 10));
    }
    /**
     * Changes two up view mode for the controller. Controller will trigger
     * layout update later, which will update the viewport accordingly.
     */
    onTwoUpViewChanged_(e) {
        const twoUpViewEnabled = e.detail;
        assert(this.currentController);
        this.currentController.setTwoUpView(twoUpViewEnabled);
        LocalStorageProxyImpl.getInstance().setItem(LOCAL_STORAGE_TWO_UP_VIEW_ENABLED_KEY, twoUpViewEnabled ? '1' : '0');
        record(twoUpViewEnabled ? UserAction.TWO_UP_VIEW_ENABLE :
            UserAction.TWO_UP_VIEW_DISABLE);
    }
    /**
     * Moves the viewport to a point in a page. Called back after a
     * 'transformPagePointReply' is returned from the plugin.
     * @param origin Identifier for the caller for logging purposes.
     * @param page The index of the page to go to. zero-based.
     * @param message Message received from the plugin containing the x and y to
     *     navigate to in screen coordinates.
     */
    goToPageAndXy_(origin, page, message) {
        this.viewport.goToPageAndXy(page, message.x, message.y);
        if (origin === ChangePageOrigin.BOOKMARK) {
            record(UserAction.FOLLOW_BOOKMARK);
        }
    }
    /** @return The bookmarks. Used for testing. */
    get bookmarks() {
        return this.bookmarks_;
    }
    /** @return The title. Used for testing. */
    get pdfTitle() {
        return this.title_;
    }
    setLoadState(loadState) {
        super.setLoadState(loadState);
        if (loadState === LoadState.FAILED) {
            this.closePasswordDialog_();
        }
    }
    updateProgress(progress) {
        if (this.toolbarEnabled_) {
            this.loadProgress_ = progress;
        }
        super.updateProgress(progress);
        // Text fragment directives should be handled after the document is set to
        // finished loading.
        if (progress === 100) {
            this.maybeRenderTextDirectiveHighlights_(this.originalUrl);
        }
    }
    onErrorDialog_() {
        // The error screen can only reload from a normal tab.
        if (!chrome.tabs || this.browserApi.getStreamInfo().tabId === -1) {
            return;
        }
        const errorDialog = this.shadowRoot.querySelector('#error-dialog');
        errorDialog.reloadFn = () => {
            chrome.tabs.reload(this.browserApi.getStreamInfo().tabId);
        };
    }
    closePasswordDialog_() {
        const passwordDialog = this.shadowRoot.querySelector('#password-dialog');
        if (passwordDialog) {
            passwordDialog.close();
        }
    }
    onPasswordDialogClose_() {
        this.showPasswordDialog_ = false;
    }
    /**
     * An event handler for handling password-submitted events. These are fired
     * when an event is entered into the password dialog.
     * @param event A password-submitted event.
     */
    onPasswordSubmitted_(event) {
        this.pluginController_.getPasswordComplete(event.detail.password);
    }
    updateUiForViewportChange() {
        // Update toolbar elements.
        this.clockwiseRotations_ = this.viewport.getClockwiseRotations();
        this.pageNo_ = this.viewport.getMostVisiblePage() + 1;
        this.twoUpViewEnabled_ = this.viewport.twoUpViewEnabled();
        assert(this.currentController);
        this.currentController.viewportChanged();
        // 
        if (this.pdfInk2Enabled_) {
            const hasScrollbars = this.viewport.documentHasScrollbars();
            const scrollbarWidthStyle = `${this.viewport.scrollbarWidth}px`;
            this.style.setProperty('--vertical-scrollbar-width', hasScrollbars.vertical ? scrollbarWidthStyle : '0px');
            this.style.setProperty('--horizontal-scrollbar-width', hasScrollbars.horizontal ? scrollbarWidthStyle : '0px');
            const annotations = this.shadowRoot.querySelector('ink-text-annotations');
            if (annotations) {
                annotations.viewportChanged();
            }
        }
        // 
    }
    handleStrings(strings) {
        super.handleStrings(strings);
        this.pdfGetSaveDataInBlocks_ =
            loadTimeData.getBoolean('pdfGetSaveDataInBlocks');
        // 
        this.pdfInk2Enabled_ = loadTimeData.getBoolean('pdfInk2Enabled');
        this.pdfSignaturesEnabled_ =
            loadTimeData.getBoolean('pdfSignaturesEnabled');
        this.pdfTextAnnotationsEnabled_ =
            loadTimeData.getBoolean('pdfTextAnnotationsEnabled');
        // 
        // 
        this.pdfSaveToDriveEnabled_ = loadTimeData.getBoolean('pdfSaveToDrive');
        // 
        this.pdfSearchifySaveEnabled_ =
            loadTimeData.getBoolean('pdfSearchifySaveEnabled');
        this.pdfUseShowSaveFilePicker_ =
            loadTimeData.getBoolean('pdfUseShowSaveFilePicker');
        const presetZoomFactors = this.viewport.presetZoomFactors;
        assert(presetZoomFactors.length > 0);
        this.zoomBounds_.min = Math.round(presetZoomFactors[0] * 100);
        this.zoomBounds_.max =
            Math.round(presetZoomFactors[presetZoomFactors.length - 1] * 100);
        const hasGlic = loadTimeData.getBoolean('pdfGlicSummarizeEnabled');
        if (hasGlic
            // 
            || this.pdfInk2Enabled_
        // 
        ) {
            this.updateComplete.then(() => {
                if (hasGlic) {
                    const summarizeBtn = this.$.toolbar.shadowRoot.querySelector('#glic-summarize-button');
                    if (summarizeBtn) {
                        this.registerHelpBubble('PdfHelpBubbleHandlerFactory::kPdfGlicSummarizeElementId', summarizeBtn);
                    }
                }
                // 
                if (this.pdfInk2Enabled_) {
                    this.registerHelpBubble('PdfHelpBubbleHandlerFactory::kPdfInkSignaturesDrawElementId', this.$.toolbar.shadowRoot.querySelector('#annotate'));
                    if (this.pdfTextAnnotationsEnabled_) {
                        this.registerHelpBubble('PdfHelpBubbleHandlerFactory::kPdfInkSignaturesAddTextElementId', this.$.toolbar.shadowRoot.querySelector('#text-annotate'));
                    }
                }
                // 
            });
        }
    }
    handleScriptingMessage(message) {
        if (super.handleScriptingMessage(message)) {
            return true;
        }
        if (this.delayScriptingMessage(message)) {
            return true;
        }
        let messageType;
        switch (message.data.type) {
            case 'getSelectedText':
                messageType = PostMessageDataType.GET_SELECTED_TEXT;
                this.pluginController_.getSelectedText().then(this.handleSelectedTextReply.bind(this));
                break;
            case 'print':
                messageType = PostMessageDataType.PRINT;
                // 
                this.maybeCommitActiveTextbox_().then(() => {
                    this.pluginController_.print();
                });
                // 
                // 
                break;
            case 'selectAll':
                messageType = PostMessageDataType.SELECT_ALL;
                this.pluginController_.selectAll();
                break;
            default:
                return false;
        }
        recordEnumeration('PDF.PostMessageDataType', messageType, PostMessageDataType.COUNT);
        return true;
    }
    handlePluginMessage(e) {
        const data = e.detail;
        switch (data.type) {
            case 'attachments':
                const attachmentsData = data;
                this.setAttachments_(attachmentsData.attachmentsData);
                return;
            case 'beep':
                this.handleBeep_();
                return;
            case 'bookmarks':
                const bookmarksData = data;
                this.setBookmarks_(bookmarksData.bookmarksData);
                return;
            case 'documentDimensions':
                this.setDocumentDimensions(convertDocumentDimensionsMessage(data));
                return;
            case 'documentFocusChanged':
                const hasFocusData = data;
                this.documentHasFocus_ = hasFocusData.hasFocus;
                return;
            case 'email':
                const emailData = data;
                const href = 'mailto:' + emailData.to + '?cc=' + emailData.cc +
                    '&bcc=' + emailData.bcc + '&subject=' + emailData.subject +
                    '&body=' + emailData.body;
                this.handleNavigate_(href, WindowOpenDisposition.CURRENT_TAB);
                return;
            case 'executedEditCommand':
                const editCommandData = data;
                const editCommand = editCommandData.editCommand;
                switch (editCommand) {
                    case 'Cut':
                        record(UserAction.CUT);
                        return;
                    case 'Copy':
                        record(UserAction.COPY);
                        if (this.hasSearchifyText_) {
                            record(UserAction.COPY_SEARCHIFIED);
                        }
                        return;
                    case 'Paste':
                        record(UserAction.PASTE);
                        return;
                    default:
                        assertNotReached('Unknown executedEditCommand data received: ' + editCommand);
                }
            // 
            case 'finishInkStroke':
                const modifiedData = data;
                this.handleFinishInkStroke_(modifiedData.modified);
                return;
            // 
            case 'formFocusChange':
                const focusedData = convertFormFocusChangeMessage(data);
                this.formFieldFocus_ = focusedData.focused;
                return;
            case 'getPassword':
                this.handlePasswordRequest_();
                return;
            case 'loadProgress':
                const progressData = convertLoadProgressMessage(data);
                this.updateProgress(progressData.progress);
                return;
            case 'metadata':
                const metadataData = data;
                this.setDocumentMetadata_(metadataData.metadataData);
                return;
            case 'navigate':
                const navigateData = data;
                this.handleNavigate_(navigateData.url, navigateData.disposition);
                return;
            case 'rendererPreferencesUpdated':
                const caretBrowsingEnabledData = data;
                this.caretBrowsingEnabled_ =
                    caretBrowsingEnabledData.caretBrowsingEnabled;
                return;
            // 
            case 'sendClickEvent':
                // Ignore click events outside of text annotation mode.
                if (this.annotationMode_ !== AnnotationMode.TEXT) {
                    return;
                }
                const location = data;
                // Clicks on a scrollbar should allow the plugin to take focus.
                if (this.viewport.isPointOnScrollbar(location)) {
                    const annotations = this.shadowRoot.querySelector('ink-text-annotations');
                    assert(annotations);
                    annotations.blurActiveAnnotation();
                }
                else {
                    this.maybeCreateTextAnnotation_(data);
                }
                return;
            // 
            case 'sendKeyEvent':
                const keyEvent = convertSendKeyEventMessage(data);
                keyEvent.fromPlugin = true;
                this.handleKeyEvent(keyEvent);
                return;
            case 'setIsEditing':
                // Editing mode can only be entered once, and cannot be exited.
                this.hasEdits_ = true;
                return;
            case 'setHasSearchifyText':
                this.hasSearchifyText_ = true;
                return;
            case 'showSearchifyInProgress':
                if (data.show) {
                    this.$.searchifyProgress.show();
                }
                else {
                    this.$.searchifyProgress.hide();
                }
                return;
            // 
            case 'startInkStroke':
                this.handleStartInkStroke_();
                return;
            // 
            case 'startedFindInPage':
                record(UserAction.FIND_IN_PAGE);
                if (this.hasSearchifyText_) {
                    record(UserAction.FIND_IN_PAGE_SEARCHIFIED);
                }
                return;
            case 'touchSelectionOccurred':
                this.sendScriptingMessage({
                    type: 'touchSelectionOccurred',
                });
                return;
            // 
            case 'updateThumbnail':
                const thumbnailData = data;
                this.pluginController_.getEventTarget().dispatchEvent(new CustomEvent(PluginControllerEventType.UPDATE_THUMBNAIL, { detail: thumbnailData }));
                return;
            // 
            default:
                assertNotReached('Unknown message type received: ' + data.type);
        }
    }
    forceFit(view) {
        this.$.toolbar.forceFit(view);
    }
    afterZoom(viewportZoom) {
        this.viewportZoom_ = viewportZoom;
    }
    setDocumentDimensions(documentDimensions) {
        // Restore the two up view mode from the previous session before the
        // initial layout is applied, so that the document is never laid out and
        // painted in single page view first.
        if (!this.documentDimensions &&
            !documentDimensions.layoutOptions?.twoUpViewEnabled &&
            this.shouldRestoreTwoUpView_()) {
            assert(this.currentController);
            this.currentController.setTwoUpView(true);
            return;
        }
        super.setDocumentDimensions(documentDimensions);
        // If the document dimensions are received, the password was correct and the
        // password dialog can be dismissed.
        this.closePasswordDialog_();
        if (this.toolbarEnabled_) {
            this.docLength_ = this.documentDimensions.pageDimensions.length;
        }
    }
    /** Handles a beep request from the current controller. */
    handleBeep_() {
        // Beeps are annoying, so just track count for now.
        this.beepCount += 1;
    }
    /** Handles a password request from the current controller. */
    handlePasswordRequest_() {
        // Show the password dialog if it is not already shown. Otherwise, respond
        // to an incorrect password.
        if (!this.showPasswordDialog_) {
            this.hadPassword_ = true;
            this.showPasswordDialog_ = true;
            this.sendScriptingMessage({ type: 'passwordPrompted' });
        }
        else {
            const passwordDialog = this.shadowRoot.querySelector('#password-dialog');
            assert(passwordDialog);
            passwordDialog.deny();
        }
    }
    /** Handles a navigation request from the current controller. */
    handleNavigate_(url, disposition) {
        this.navigator_.navigate(url, disposition);
    }
    // 
    handleSaveToDriveProgress_(streamUrl, progress) {
        if (streamUrl !== this.browserApi.getStreamInfo().streamUrl) {
            return;
        }
        this.saveToDriveProgress_ = progress;
        this.saveToDriveState_ =
            convertSaveToDriveProgressToSaveToDriveState(progress);
    }
    // 
    /**
     * Handles updating viewport params based on the `newUrl` provided.
     * @param streamUrl Unique identifier for a PDF Viewer instance.
     * @param newUrl The new URL to parse viewport params from.
     */
    handleMaybeUpdateViewport_(streamUrl, newUrl) {
        if (streamUrl !== this.browserApi.getStreamInfo().streamUrl) {
            return;
        }
        assert(this.paramsParser);
        this.paramsParser.getViewportFromUrlParams(newUrl).then(params => this.handleUrlParams(params));
        this.maybeRenderTextDirectiveHighlights_(newUrl);
    }
    // 
    /** Handles the start of a new ink stroke in annotation mode. */
    handleStartInkStroke_() {
        this.pluginController_.getEventTarget().dispatchEvent(new CustomEvent(PluginControllerEventType.START_INK_STROKE));
    }
    /** Handles a new ink stroke in annotation mode. */
    handleFinishInkStroke_(modified) {
        if (modified) {
            this.hasCommittedInk2Edits_ = true;
            this.hasUnsavedEdits_ = true;
            this.setShowBeforeUnloadDialog_(true);
        }
        this.pluginController_.getEventTarget().dispatchEvent(new CustomEvent(PluginControllerEventType.FINISH_INK_STROKE, { detail: modified }));
    }
    // 
    /**
     * Returns whether the PDF has entered editing mode or has committed ink2
     * edits.
     */
    hasCommittedEdits_() {
        let hasEdits = this.hasEdits_;
        // 
        hasEdits ||= this.hasCommittedInk2Edits_;
        // 
        return hasEdits;
    }
    /** Sets the document attachment data. */
    setAttachments_(attachments) {
        this.attachments_ = attachments;
    }
    /** Sets the document bookmarks data. */
    setBookmarks_(bookmarks) {
        this.bookmarks_ = bookmarks;
    }
    /** Sets document metadata from the current controller. */
    setDocumentMetadata_(metadata) {
        this.documentMetadata_ = metadata;
        this.title_ = this.documentMetadata_.title || this.fileName_;
        // Tab title is updated only when document.title is called in a
        // top-level document (`main_frame` of `WebContents`). For OOPIF PDF viewer,
        // the current document is the child of a top-level document, hence using a
        // private API to set the tab title.
        // NOTE: Title should only be set for full-page PDFs.
        if (this.pdfOopifEnabled && !this.embedded_) {
            PdfViewerPrivateProxyImpl.getInstance().setPdfDocumentTitle(this.title_);
        }
        else {
            document.title = this.title_;
        }
        this.canSerializeDocument_ = this.documentMetadata_.canSerializeDocument;
    }
    /**
     * An event handler for when the browser tells the PDF Viewer to perform a
     * save on the attachment at a certain index. Callers of this function must
     * be responsible for checking whether the attachment size is valid for
     * downloading.
     * @param e The event which contains the index of attachment to be downloaded.
     */
    async onSaveAttachment_(e) {
        const index = e.detail;
        assert(this.attachments_[index] !== undefined);
        const size = this.attachments_[index].size;
        assert(size !== -1);
        let dataArray = [];
        // If the attachment size is 0, skip requesting the backend to fetch the
        // attachment data.
        if (size !== 0) {
            assert(this.currentController);
            const result = await this.currentController.saveAttachment(index);
            // Cap the PDF attachment size at 100 MB. This cap should be kept in sync
            // with and is also enforced in pdf/pdf_view_web_plugin.h.
            const MAX_FILE_SIZE = 100 * 1000 * 1000;
            const bufView = new Uint8Array(result.dataToSave);
            assert(bufView.length <= MAX_FILE_SIZE, `File too large to be saved: ${bufView.length} bytes.`);
            assert(bufView.length === size, `Received attachment size does not match its expected value: ${size} bytes.`);
            dataArray = [result.dataToSave];
        }
        const blob = new Blob(dataArray);
        const fileName = this.attachments_[index].name;
        if (this.pdfUseShowSaveFilePicker_) {
            try {
                const fileHandle = await window.showSaveFilePicker({
                    suggestedName: fileName,
                });
                const writable = await fileHandle.createWritable();
                await writable.write(blob);
                await writable.close();
            }
            catch (error) {
                if (error instanceof Error && error.name !== 'AbortError') {
                    console.error('window.showSaveFilePicker failed: ' + error);
                }
            }
        }
        else {
            const writer = await this.selectFileAndGetWriter_(fileName);
            if (writer !== null) {
                writer.write(blob);
            }
        }
    }
    /**
     * An event handler for when the browser tells the PDF Viewer to perform a
     * save.
     * @param streamUrl Unique identifier for a PDF Viewer instance.
     */
    onSave_(streamUrl) {
        if (streamUrl !== this.browserApi.getStreamInfo().streamUrl) {
            return;
        }
        let shouldSaveWithAnnotation = false;
        // 
        if (this.pdfInk2Enabled_) {
            shouldSaveWithAnnotation = this.hasCommittedInk2Edits_ ||
                this.textboxState_ === TextBoxState.EDITED;
        }
        // 
        let saveMode;
        if (shouldSaveWithAnnotation) {
            saveMode = SaveRequestType.ANNOTATION;
        }
        else if (this.hasEdits_) {
            saveMode = SaveRequestType.EDITED;
        }
        else if (this.hasSearchifyText_ && this.pdfSearchifySaveEnabled_) {
            saveMode = SaveRequestType.SEARCHIFIED;
        }
        else {
            saveMode = SaveRequestType.ORIGINAL;
        }
        this.save_(saveMode);
    }
    onToolbarSave_(e) {
        this.save_(e.detail);
    }
    // 
    getStreamUrlForTesting() {
        return this.browserApi.getStreamInfo().streamUrl;
    }
    setOnSaveToDriveProgressListenerForTesting() {
        PdfViewerPrivateProxyImpl.getInstance().onSaveToDriveProgress.addListener(this.handleSaveToDriveProgress_.bind(this));
    }
    setPdfNavigatorForTesting(navigator) {
        this.navigator_ = navigator;
    }
    // Calculates the save to Drive progress in percentage. Returns 0 if the PDF
    // is not uploading to Drive.
    getSaveToDriveProgress_() {
        if (!this.isSaveToDriveUploading_()) {
            return 0;
        }
        const fileSizeBytes = this.saveToDriveProgress_.fileSizeBytes ?? 0;
        if (fileSizeBytes === 0) {
            return 0;
        }
        const uploadedBytes = this.saveToDriveProgress_.uploadedBytes ?? 0;
        return Math.round((uploadedBytes / fileSizeBytes) * 100);
    }
    isSaveToDriveUploading_() {
        return this.saveToDriveState_ === SaveToDriveState.UPLOADING;
    }
    async onSaveToDrive_(e) {
        if (this.saveToDriveState_ === SaveToDriveState.UNINITIALIZED) {
            this.saveToDriveRequestType_ = e.detail;
            let pdfInk2Enabled = false;
            // 
            pdfInk2Enabled = this.pdfInk2Enabled_;
            if (this.pdfInk2Enabled_ && e.detail === SaveRequestType.ANNOTATION) {
                await this.maybeCommitActiveTextbox_();
                Ink2Manager.getInstance().initiateSave();
            }
            // 
            PdfViewerPrivateProxyImpl.getInstance().saveToDrive(e.detail);
            recordSaveToDriveMetrics(e.detail, this.hasCommittedEdits_(), pdfInk2Enabled);
            return;
        }
        this.getSaveToDriveBubble_().showAt(this.$.toolbar.getSaveToDriveBubbleAnchor());
        recordShowSaveToDriveBubbleMetrics(this.saveToDriveState_);
    }
    onSaveToDriveBubbleAction_(e) {
        recordSaveToDriveBubbleActionMetrics(e.detail);
        switch (e.detail) {
            case SaveToDriveBubbleRequestType.CANCEL_UPLOAD:
                PdfViewerPrivateProxyImpl.getInstance().saveToDrive(
                /*saveRequestType=undefined*/ );
                this.saveToDriveState_ = SaveToDriveState.UNINITIALIZED;
                break;
            case SaveToDriveBubbleRequestType.MANAGE_STORAGE:
                assert(this.saveToDriveProgress_.accountEmail);
                this.handleNavigate_(getSaveToDriveManageStorageUrl(this.saveToDriveProgress_.accountEmail, this.saveToDriveProgress_.accountIsManaged ?? false), WindowOpenDisposition.NEW_FOREGROUND_TAB);
                this.saveToDriveState_ = SaveToDriveState.UNINITIALIZED;
                break;
            case SaveToDriveBubbleRequestType.OPEN_IN_DRIVE:
                assert(this.saveToDriveProgress_.accountEmail);
                assert(this.saveToDriveProgress_.driveItemId);
                this.handleNavigate_(getSaveToDriveOpenInDriveUrl(this.saveToDriveProgress_.accountEmail, this.saveToDriveProgress_.driveItemId), WindowOpenDisposition.NEW_FOREGROUND_TAB);
                this.saveToDriveState_ = SaveToDriveState.UNINITIALIZED;
                break;
            case SaveToDriveBubbleRequestType.RETRY:
                PdfViewerPrivateProxyImpl.getInstance().saveToDrive(this.saveToDriveRequestType_);
                recordSaveToDriveBubbleRetryMetrics(this.saveToDriveRequestType_, this.hasCommittedEdits_());
                break;
            case SaveToDriveBubbleRequestType.DIALOG_CLOSED:
                if (saveToDriveStateIsFinalState(this.saveToDriveState_)) {
                    this.saveToDriveState_ = SaveToDriveState.UNINITIALIZED;
                }
                break;
            default:
                console.warn('Saving to Drive bubble action is not implemented yet.', e.detail);
                break;
        }
    }
    getSaveToDriveBubble_() {
        const bubble = this.shadowRoot.querySelector('viewer-save-to-drive-bubble');
        assert(bubble);
        return bubble;
    }
    onSaveToDriveStateChanged_(oldState) {
        const newState = this.saveToDriveState_;
        if (saveToDriveStateIsFinalState(newState)) {
            if (newState === SaveToDriveState.SUCCESS) {
                this.onSaveSuccessful_(this.saveToDriveRequestType_);
            }
            else if (oldState === SaveToDriveState.UPLOADING) {
                // TODO(crbug.com/450600664): Fix an edge case where beforeunload dialog
                // is still blocking if an EDITED upload is cancelled after a successful
                // EDITED disk save.
                // 
                this.onSaveFailedOrCancelled_(this.saveToDriveRequestType_);
                // 
            }
            this.getSaveToDriveBubble_().showAt(this.$.toolbar.getSaveToDriveBubbleAnchor(), 
            /*autoDismiss=*/ true);
            return;
        }
        if (newState === SaveToDriveState.UPLOADING) {
            // Block unloading the window if upload is in progress.
            this.setShowBeforeUnloadDialog_(true);
            if (isEditedSaveRequestType(this.saveToDriveRequestType_)) {
                this.hasUnsavedEdits_ = false;
            }
            return;
        }
        assert(newState === SaveToDriveState.UNINITIALIZED, `Unexpected state: ${newState}`);
        if (oldState !== SaveToDriveState.UPLOADING) {
            this.setShowBeforeUnloadDialog_(this.hasUnsavedEdits_);
        }
    }
    //  enable_pdf_save_to_drive
    onRotateLeft_() {
        this.rotateCounterclockwise();
    }
    onChangePage_(e) {
        this.viewport.goToPage(e.detail.page);
        if (e.detail.origin === ChangePageOrigin.BOOKMARK) {
            record(UserAction.FOLLOW_BOOKMARK);
        }
        else if (e.detail.origin === ChangePageOrigin.PAGE_SELECTOR) {
            record(UserAction.PAGE_SELECTOR_NAVIGATE);
        }
        else if (e.detail.origin === ChangePageOrigin.THUMBNAIL) {
            record(UserAction.THUMBNAIL_NAVIGATE);
        }
    }
    onChangePageAndXy_(e) {
        const point = this.viewport.convertPageToScreen(e.detail.page, e.detail);
        this.goToPageAndXy_(e.detail.origin, e.detail.page, point);
    }
    onNavigate_(e) {
        const disposition = e.detail.newtab ?
            WindowOpenDisposition.NEW_BACKGROUND_TAB :
            WindowOpenDisposition.CURRENT_TAB;
        this.navigator_.navigate(e.detail.uri, disposition);
    }
    onSidenavToggleClick_() {
        this.sidenavCollapsed_ = !this.sidenavCollapsed_;
        // Workaround for crbug.com/40145705, so that the PDF plugin resizes only
        // once when the sidenav is opened/closed.
        const container = this.shadowRoot.querySelector('#sidenav-container');
        if (!this.sidenavCollapsed_) {
            container.classList.add('floating');
            container.addEventListener('transitionend', () => {
                container.classList.remove('floating');
            }, { once: true });
        }
        LocalStorageProxyImpl.getInstance().setItem(LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY, this.sidenavCollapsed_ ? '1' : '0');
    }
    // 
    handleUndoRedoStateChanged_(e) {
        this.hasCommittedInk2Edits_ = e.detail.canUndo;
        this.hasUnsavedEdits_ = e.detail.hasUnsavedEdits;
        this.setShowBeforeUnloadDialog_(this.shouldShowBeforeUnloadDialog_());
    }
    // 
    /**
     * Sends a message to the PDF plugin to highlight the provided text
     * directives if any.
     */
    maybeRenderTextDirectiveHighlights_(url) {
        assert(this.paramsParser);
        const textDirectives = this.paramsParser.getTextFragments(url);
        if (textDirectives.length > 0) {
            this.pluginController_.highlightTextFragments(textDirectives);
        }
    }
    /**
     * Shows save file picker and returns a writable.
     * @param: suggestedName The default value for the filename.
     * @returns A Writable if successful, otherwise throws an exception.
     */
    async selectFileAndGetWritable_(suggestedName) {
        assert(this.pdfUseShowSaveFilePicker_);
        const fileHandle = await window.showSaveFilePicker({
            suggestedName: suggestedName,
            types: [{
                    description: 'PDF Files',
                    accept: { 'application/pdf': ['.pdf'] },
                }],
        });
        return fileHandle.createWritable();
    }
    /**
     * Shows deprecated save file picker and returns a FileWriter if successful.
     * @param suggestedName The default value for the filename.
     * @returns A FileWriter if successful, otherwise returns null.
     */
    async selectFileAndGetWriter_(suggestedName) {
        assert(!this.pdfUseShowSaveFilePicker_);
        return new Promise(resolve => {
            chrome.fileSystem.chooseEntry({
                type: 'saveFile',
                accepts: [{ description: '*.pdf', extensions: ['pdf'] }],
                suggestedName: suggestedName,
            }, (entry) => {
                if (chrome.runtime.lastError) {
                    if (chrome.runtime.lastError.message !== 'User cancelled') {
                        console.error('chrome.fileSystem.chooseEntry failed: ' +
                            chrome.runtime.lastError.message);
                    }
                    resolve(null);
                }
                assert(entry);
                entry.createWriter(writer => {
                    resolve(writer);
                });
            });
        });
    }
    /**
     * Writes a blob to a FileWriter, waiting until writing is completed. Throws
     * an exception on error.
     * @param writer: The FileWriter into which data is written.
     * @param blob: The Blob of data to write.
     */
    writeToWriter_(writer, blob) {
        return new Promise((resolve, reject) => {
            writer.onwriteend = () => resolve();
            writer.onerror = () => reject(writer.error);
            writer.write(blob);
        });
    }
    /**
     * Saves the current PDF document to disk.
     */
    async save_(requestType) {
        this.recordSaveMetrics_(requestType);
        // Entering annotation mode requires the local contents to ensure
        // annotations are saved, unless the original document is specifically
        // requested. Otherwise, the cached remote copy would be saved without
        // annotations.
        //
        // Always send requests of type ORIGINAL to the plugin controller, not the
        // ink controller. The ink controller always saves the edited document.
        // TODO(dstockwell): Report an error to user if this fails.
        assert(this.currentController);
        // 
        await this.maybeCommitActiveTextbox_();
        // `this.hasUnsavedEdits_` will be set back to true if save is disrupted for
        // SaveRequestType.ANNOTATION or SaveRequestType.EDITED.
        if (isEditedSaveRequestType(requestType)) {
            this.hasUnsavedEdits_ = false;
            // 
            if (this.pdfInk2Enabled_ && requestType === SaveRequestType.ANNOTATION) {
                Ink2Manager.getInstance().initiateSave();
            }
            // 
        }
        // 
        this.fire('save-initiated-for-testing');
        if (this.pdfGetSaveDataInBlocks_) {
            this.saveInBlocks_(requestType);
            return;
        }
        const result = await this.currentController.save(requestType);
        if (result === null) {
            // The content controller handled the save internally.
            this.fire('save-completed-for-testing');
            return;
        }
        // Make sure file extension is .pdf, avoids dangerous extensions.
        let fileName = result.fileName;
        if (!fileName.toLowerCase().endsWith('.pdf')) {
            fileName = fileName + '.pdf';
        }
        // 
        if (result.bypassSaveFileForTesting) {
            // Only set by the mock plugin.
            this.onSaveSuccessful_(requestType);
            return;
        }
        // 
        // Create blob before callback to avoid race condition.
        const blob = new Blob([result.dataToSave], { type: 'application/pdf' });
        if (!this.pdfUseShowSaveFilePicker_) {
            const writer = await this.selectFileAndGetWriter_(fileName);
            if (writer === null) {
                // 
                this.onSaveFailedOrCancelled_(requestType);
                // 
                return;
            }
            writer.write(blob);
            // 
            this.onSaveSuccessful_(requestType);
            // 
            return;
        }
        try {
            const writable = await this.selectFileAndGetWritable_(fileName);
            await writable.write(blob);
            await writable.close();
            // 
            this.onSaveSuccessful_(requestType);
            // 
        }
        catch (error) {
            if (error instanceof Error && error.name !== 'AbortError') {
                console.error('window.showSaveFilePicker failed: ' + error);
            }
            // 
            this.onSaveFailedOrCancelled_(requestType);
            // 
        }
    }
    /**
     * Saves the current PDF document to disk in blocks.
     *
     * This function does not perform pre/post steps of saving and should be
     * called by `save_`.
     */
    async saveInBlocks_(requestType) {
        // TODO(crbug.com/382610226): Update for `SaveRequestType.SEARCHIFIED` to
        // allow users to select saving original PDF or text extracted one.
        // To do so, the save type should be asked first, and then content would be
        // fetched based on the selected type.
        assert(this.pluginController_.isActive);
        // Request type is only passed for testing purposes.
        const nameResult = await this.pluginController_.getSuggestedFileName(requestType);
        // Make sure file extension is .pdf, avoids dangerous extensions.
        let fileName = nameResult.fileName;
        if (!fileName.toLowerCase().endsWith('.pdf')) {
            fileName = fileName + '.pdf';
        }
        // 
        if (nameResult.bypassSaveFileForTesting) {
            // Only set by the mock plugin.
            this.onSaveSuccessful_(requestType);
            return;
        }
        // 
        try {
            let writable;
            let writer;
            if (this.pdfUseShowSaveFilePicker_) {
                writable = await this.selectFileAndGetWritable_(fileName);
                writer = null;
            }
            else {
                writer = await this.selectFileAndGetWriter_(fileName);
                if (writer === null) {
                    // 
                    this.onSaveFailedOrCancelled_(requestType);
                    // 
                    return;
                }
                writable = null;
            }
            // Total file size is updated after the first results are received.
            let totalFileSize = 0;
            let offset = 0;
            do {
                // Get save data from plugin in maximum 16 MB blocks.
                // LINT.IfChange(MaxSaveBufferSize)
                const MAX_SAVE_BUFFER_SIZE = 16 * 1000 * 1000;
                // LINT.ThenChange(//pdf/pdf_view_web_plugin.cc:MaxSaveBufferSize)
                // `blockSize` will be 0 on the first call, since the total file size
                // is not known yet.
                const blockSize = Math.min(totalFileSize - offset, MAX_SAVE_BUFFER_SIZE);
                const result = await this.pluginController_.getSaveDataBlock(requestType, offset, blockSize);
                if (offset === 0) {
                    // Update `totalFileSize` after the first block of data is received.
                    totalFileSize = result.totalFileSize;
                    if (totalFileSize === 0) {
                        // File could not be saved.
                        throw new Error('File size is zero.');
                    }
                    verifyPdfHeader(result.dataToSave);
                    assert(result.dataToSave.byteLength !== 0);
                }
                else {
                    assert(result.dataToSave.byteLength === blockSize);
                }
                offset += result.dataToSave.byteLength;
                if (writable !== null) {
                    await writable.write(result.dataToSave);
                }
                else {
                    assert(writer !== null);
                    const blob = new Blob([result.dataToSave], { type: 'application/pdf' });
                    await this.writeToWriter_(writer, blob);
                }
            } while (offset < totalFileSize);
            if (writable !== null) {
                await writable.close();
            }
            // 
            this.onSaveSuccessful_(requestType);
            // 
        }
        catch (error) {
            this.pluginController_.releaseSaveInBlockBuffers();
            if (error instanceof Error && error.name !== 'AbortError') {
                console.error('window.showSaveFilePicker failed: ' + error);
            }
            // 
            this.onSaveFailedOrCancelled_(requestType);
            // 
        }
    }
    // 
    /**
     * Performs required tasks after a successful save.
     */
    onSaveSuccessful_(requestType) {
        this.setShowBeforeUnloadDialog_(this.shouldShowBeforeUnloadDialog_());
        if (this.pdfInk2Enabled_ && requestType === SaveRequestType.ANNOTATION) {
            Ink2Manager.getInstance().saved();
        }
        this.fire('save-completed-for-testing');
    }
    // 
    // 
    // 
    /**
     * Returns whether the beforeunload dialog should be shown.
     */
    shouldShowBeforeUnloadDialog_() {
        let showBeforeUnloadDialog = this.hasUnsavedEdits_;
        // 
        // If Save to Drive is uploading, block closing the window.
        showBeforeUnloadDialog =
            showBeforeUnloadDialog || this.isSaveToDriveUploading_();
        //  enable_pdf_save_to_drive
        return showBeforeUnloadDialog;
    }
    //  enable_pdf_ink2 or enable_pdf_save_to_drive
    /**
     * Records metrics for saving PDFs.
     */
    recordSaveMetrics_(requestType) {
        record(UserAction.SAVE);
        switch (requestType) {
            case SaveRequestType.ANNOTATION:
                // 
                record(UserAction.SAVE_WITH_INK2_ANNOTATION);
                break;
            // 
            // 
            case SaveRequestType.ORIGINAL:
                record(this.hasCommittedEdits_() ? UserAction.SAVE_ORIGINAL :
                    UserAction.SAVE_ORIGINAL_ONLY);
                break;
            case SaveRequestType.EDITED:
                record(UserAction.SAVE_EDITED);
                break;
            case SaveRequestType.SEARCHIFIED:
                // TODO(crbug.com/382610226): Update metric after the code is updated to
                // give users the option to save searchified or original PDF, and add
                // test.
                record(UserAction.SAVE_SEARCHIFIED);
                break;
            default:
                assertNotReachedCase(requestType);
        }
    }
    onGlicSummarize_() {
        PdfViewerPrivateProxyImpl.getInstance().glicSummarize();
    }
    async onPrint_() {
        record(UserAction.PRINT);
        assert(this.currentController);
        // 
        await this.maybeCommitActiveTextbox_();
        // 
        this.currentController.print();
    }
    /**
     * Updates the toolbar's annotation available flag depending on current
     * conditions.
     * @return Whether annotations are available.
     */
    annotationAvailable_() {
        return this.canSerializeDocument_ && !this.hadPassword_;
    }
    /** @return Whether the PDF contents are rotated. */
    isRotated_() {
        return this.clockwiseRotations_ !== 0;
    }
    // 
    isTextboxActive_() {
        return this.textboxState_ !== TextBoxState.INACTIVE;
    }
    /**
     * Commits the textbox if it is active, no-op otherwise.
     */
    maybeCommitActiveTextbox_() {
        if (!this.isTextboxActive_()) {
            return Promise.resolve();
        }
        const annotations = this.shadowRoot.querySelector('ink-text-annotations');
        assert(annotations);
        return annotations.commitActiveAnnotation();
    }
    isInTextAnnotationMode_() {
        return this.annotationMode_ === AnnotationMode.TEXT;
    }
    /**
     * @return Whether the Ink bottom toolbar should be shown. It should never be
     *     shown if the Ink side panel is shown.
     */
    shouldShowInkBottomToolbar_() {
        return this.inInk2AnnotationMode_() && !this.useSidePanelForInk_;
    }
    /**
     * @return Whether the Ink side panel should be shown. It should never be
     *     shown if the Ink bottom toolbar is shown. It should be shown if the
     *     window width is at least a certain width.
     */
    shouldShowInkSidePanel_() {
        return this.inInk2AnnotationMode_() && this.useSidePanelForInk_;
    }
    hasInk2AnnotationEdits_() {
        return this.textboxState_ === TextBoxState.EDITED ||
            this.hasCommittedInk2Edits_;
    }
    /**
     * Performs required tasks after a failed or cancelled save.
     */
    onSaveFailedOrCancelled_(requestType) {
        // Restore the original value of `hasUnsavedEdits_` and block closing the
        // window if there are unsaved edits.
        if (isEditedSaveRequestType(requestType)) {
            this.hasUnsavedEdits_ = true;
        }
        // 
        if (this.pdfInk2Enabled_ && requestType === SaveRequestType.ANNOTATION) {
            Ink2Manager.getInstance().cancelSave();
        }
        // 
        this.setShowBeforeUnloadDialog_(this.shouldShowBeforeUnloadDialog_());
        this.fire('save-completed-for-testing');
    }
    onTextBoxStateChanged_(e) {
        this.textboxState_ = e.detail;
        if (e.detail === TextBoxState.INACTIVE) {
            this.focusPlugin_();
        }
        else if (e.detail === TextBoxState.EDITED) {
            this.setShowBeforeUnloadDialog_(true);
        }
    }
    /**
     * @returns Whether the PDF viewer has Ink2 enabled and is in annotation mode.
     */
    inInk2AnnotationMode_() {
        return this.pdfInk2Enabled_ && this.annotationMode_ !== AnnotationMode.OFF;
    }
    // 
    // 
    /**
     * Handles the `BeforeUnloadEvent` event.
     * @param event The `BeforeUnloadEvent` object representing the event.
     */
    onBeforeUnload_(event) {
        // When a user tries to leave PDF with unsaved changes or when Save to Drive
        // is in progress, show the 'Leave site' dialog. OOPIF PDF only, since
        // MimeHandler handles the beforeunload event instead.
        if (this.pdfOopifEnabled && this.showBeforeUnloadDialog_) {
            BeforeUnloadProxyImpl.getInstance().preventDefault(event);
        }
    }
    /**
     * Sets whether to show the beforeunload dialog when navigating away from pdf.
     * @param showDialog A boolean indicating whether to show the beforeunload
     * dialog.
     */
    setShowBeforeUnloadDialog_(showDialog) {
        if (this.showBeforeUnloadDialog_ === showDialog) {
            return;
        }
        this.showBeforeUnloadDialog_ = showDialog;
        if (!this.pdfOopifEnabled) {
            chrome.mimeHandlerPrivate.setShowBeforeUnloadDialog(showDialog);
        }
    }
}
customElements.define(PdfViewerElement.is, PdfViewerElement);
