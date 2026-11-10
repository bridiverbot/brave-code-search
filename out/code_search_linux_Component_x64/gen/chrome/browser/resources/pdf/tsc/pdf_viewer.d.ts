import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './elements/viewer_error_dialog.js';
import './elements/viewer_password_dialog.js';
import './elements/ink_text_annotations.js';
import './elements/viewer_bottom_toolbar.js';
import './elements/viewer_side_panel.js';
import './elements/viewer_signature_bottom_toolbar.js';
import './elements/viewer_signature_dialog.js';
import './elements/viewer_signature_side_panel.js';
import './elements/viewer_text_bottom_toolbar.js';
import './elements/viewer_text_side_panel.js';
import './elements/viewer_pdf_sidenav.js';
import './elements/viewer_properties_dialog.js';
import './elements/viewer_save_to_drive_bubble.js';
import './elements/viewer_toolbar.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import type { LoadTimeDataRaw } from 'chrome://resources/js/load_time_data.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Bookmark } from './bookmark_type.js';
import type { BrowserApi } from './browser_api.js';
import type { Attachment, DocumentMetadata } from './constants.js';
import { AnnotationMode } from './constants.js';
import { FittingType, FormFieldFocusType } from './constants.js';
import { SaveToDriveBubbleRequestType, SaveToDriveState } from './constants.js';
import type { MessageData } from './controller.js';
import { TextBoxState } from './elements/ink_text_box.js';
import type { ChangePageAndXyDetail, ChangePageDetail, NavigateDetail } from './elements/viewer_bookmark.js';
import type { ViewerToolbarElement } from './elements/viewer_toolbar.js';
import type { PdfNavigator } from './navigator.js';
import { LoadState } from './pdf_scripting_api.js';
import { PdfViewerBaseElement } from './pdf_viewer_base.js';
import type { DocumentDimensionsMessageData } from './pdf_viewer_utils.js';
type SaveToDriveProgress = chrome.pdfViewerPrivate.SaveToDriveProgress;
declare const SaveRequestType: typeof chrome.pdfViewerPrivate.SaveRequestType;
type SaveRequestType = chrome.pdfViewerPrivate.SaveRequestType;
interface ZoomBounds {
    min: number;
    max: number;
}
/**
 * Return the filename component of a URL, percent decoded if possible.
 * Exported for tests.
 */
export declare function getFilenameFromURL(url: string): string;
export declare const LOCAL_STORAGE_TWO_UP_VIEW_ENABLED_KEY: string;
export interface PdfViewerElement {
    $: {
        content: HTMLElement;
        scroller: HTMLElement;
        sizer: HTMLElement;
        toolbar: ViewerToolbarElement;
        searchifyProgress: CrToastElement;
    };
}
export declare class PdfViewerElement extends PdfViewerBaseElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showErrorDialog: {
            type: BooleanConstructor;
        };
        strings: {
            type: ObjectConstructor;
        };
        annotationMode_: {
            type: StringConstructor;
        };
        attachments_: {
            type: ArrayConstructor;
        };
        bookmarks_: {
            type: ArrayConstructor;
        };
        canSerializeDocument_: {
            type: BooleanConstructor;
        };
        clockwiseRotations_: {
            type: NumberConstructor;
        };
        /** The number of pages in the PDF document. */
        docLength_: {
            type: NumberConstructor;
        };
        documentHasFocus_: {
            type: BooleanConstructor;
        };
        documentMetadata_: {
            type: ObjectConstructor;
        };
        embedded_: {
            type: BooleanConstructor;
        };
        fileName_: {
            type: StringConstructor;
        };
        hadPassword_: {
            type: BooleanConstructor;
        };
        hasEdits_: {
            type: BooleanConstructor;
        };
        hasCommittedInk2Edits_: {
            type: BooleanConstructor;
        };
        formFieldFocus_: {
            type: StringConstructor;
        };
        /** The current loading progress of the PDF document (0 - 100). */
        loadProgress_: {
            type: NumberConstructor;
        };
        /** The number of the page being viewed (1-based). */
        pageNo_: {
            type: NumberConstructor;
        };
        pdfInk2Enabled_: {
            type: BooleanConstructor;
        };
        pdfSignaturesEnabled_: {
            type: BooleanConstructor;
        };
        pdfTextAnnotationsEnabled_: {
            type: BooleanConstructor;
        };
        pdfSaveToDriveEnabled_: {
            type: BooleanConstructor;
        };
        saveToDriveProgress_: {
            type: ObjectConstructor;
        };
        saveToDriveState_: {
            type: StringConstructor;
        };
        showPasswordDialog_: {
            type: BooleanConstructor;
        };
        showPropertiesDialog_: {
            type: BooleanConstructor;
        };
        showSignatureDialog_: {
            type: BooleanConstructor;
        };
        sidenavCollapsed_: {
            type: BooleanConstructor;
        };
        textboxState_: {
            type: NumberConstructor;
        };
        title_: {
            type: StringConstructor;
        };
        twoUpViewEnabled_: {
            type: BooleanConstructor;
        };
        useSidePanelForInk_: {
            type: BooleanConstructor;
        };
        viewportZoom_: {
            type: NumberConstructor;
        };
        zoomBounds_: {
            type: ObjectConstructor;
        };
        toolbarEnabled_: {
            type: BooleanConstructor;
        };
    };
    beepCount: number;
    protected accessor annotationMode_: AnnotationMode;
    protected accessor attachments_: Attachment[];
    protected accessor bookmarks_: Bookmark[];
    private accessor canSerializeDocument_;
    private caretBrowsingEnabled_;
    protected accessor clockwiseRotations_: number;
    protected accessor docLength_: number;
    protected accessor documentHasFocus_: boolean;
    protected accessor documentMetadata_: DocumentMetadata;
    protected accessor embedded_: boolean;
    protected accessor fileName_: string;
    private accessor hadPassword_;
    protected accessor hasEdits_: boolean;
    protected accessor hasCommittedInk2Edits_: boolean;
    private hasUnsavedEdits_;
    protected accessor formFieldFocus_: FormFieldFocusType;
    protected accessor loadProgress_: number;
    private navigator_;
    protected accessor pageNo_: number;
    private pdfGetSaveDataInBlocks_;
    protected accessor pdfInk2Enabled_: boolean;
    protected accessor pdfSignaturesEnabled_: boolean;
    protected accessor pdfTextAnnotationsEnabled_: boolean;
    protected accessor pdfSaveToDriveEnabled_: boolean;
    protected accessor saveToDriveProgress_: SaveToDriveProgress;
    protected accessor saveToDriveState_: SaveToDriveState;
    private saveToDriveRequestType_;
    private pdfSearchifySaveEnabled_;
    private pdfUseShowSaveFilePicker_;
    private pluginController_;
    private restoreAnnotationMode_;
    private showBeforeUnloadDialog_;
    protected accessor showPasswordDialog_: boolean;
    protected accessor showPropertiesDialog_: boolean;
    protected accessor showSignatureDialog_: boolean;
    protected accessor sidenavCollapsed_: boolean;
    protected accessor textboxState_: TextBoxState;
    protected accessor title_: string;
    protected accessor toolbarEnabled_: boolean;
    protected accessor twoUpViewEnabled_: boolean;
    private accessor useSidePanelForInk_;
    protected accessor viewportZoom_: number;
    protected accessor zoomBounds_: ZoomBounds;
    private hasSearchifyText_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    getBackgroundColor(): number;
    setPluginSrc(plugin: HTMLEmbedElement): void;
    init(browserApi: BrowserApi): void;
    handleKeyEvent(e: KeyboardEvent): void;
    private maybePasteTextAnnotation_;
    /**
     * Helper for handleKeyEvent dealing with events that control toolbars.
     */
    private handleToolbarKeyEvent_;
    private maybeCreateTextAnnotation_;
    private recordEnterExitAnnotationModeMetrics_;
    protected onAnnotationModeUpdated_(e: CustomEvent<AnnotationMode>): void;
    private setAnnotationMode_;
    protected onDisplayAnnotationsChanged_(e: CustomEvent<boolean>): void;
    private enterPresentationMode_;
    private exitPresentationMode_;
    private maybeRestoreAnnotationMode_;
    private focusPlugin_;
    protected onPresentClick_(): Promise<void>;
    protected onPropertiesClick_(): void;
    protected onPropertiesDialogClose_(): void;
    protected onSignatureDialogClose_(): void;
    /**
     * @return Whether two up view was enabled when the user last toggled it,
     *     and should be restored for this document.
     */
    private shouldRestoreTwoUpView_;
    /**
     * Changes two up view mode for the controller. Controller will trigger
     * layout update later, which will update the viewport accordingly.
     */
    protected onTwoUpViewChanged_(e: CustomEvent<boolean>): void;
    /**
     * Moves the viewport to a point in a page. Called back after a
     * 'transformPagePointReply' is returned from the plugin.
     * @param origin Identifier for the caller for logging purposes.
     * @param page The index of the page to go to. zero-based.
     * @param message Message received from the plugin containing the x and y to
     *     navigate to in screen coordinates.
     */
    private goToPageAndXy_;
    /** @return The bookmarks. Used for testing. */
    get bookmarks(): Bookmark[];
    /** @return The title. Used for testing. */
    get pdfTitle(): string;
    setLoadState(loadState: LoadState): void;
    updateProgress(progress: number): void;
    protected onErrorDialog_(): void;
    private closePasswordDialog_;
    protected onPasswordDialogClose_(): void;
    /**
     * An event handler for handling password-submitted events. These are fired
     * when an event is entered into the password dialog.
     * @param event A password-submitted event.
     */
    protected onPasswordSubmitted_(event: CustomEvent<{
        password: string;
    }>): void;
    updateUiForViewportChange(): void;
    handleStrings(strings: LoadTimeDataRaw): void;
    handleScriptingMessage(message: MessageEvent<unknown>): boolean;
    handlePluginMessage(e: CustomEvent<MessageData>): void;
    forceFit(view: FittingType): void;
    afterZoom(viewportZoom: number): void;
    setDocumentDimensions(documentDimensions: DocumentDimensionsMessageData): void;
    /** Handles a beep request from the current controller. */
    private handleBeep_;
    /** Handles a password request from the current controller. */
    private handlePasswordRequest_;
    /** Handles a navigation request from the current controller. */
    private handleNavigate_;
    private handleSaveToDriveProgress_;
    /**
     * Handles updating viewport params based on the `newUrl` provided.
     * @param streamUrl Unique identifier for a PDF Viewer instance.
     * @param newUrl The new URL to parse viewport params from.
     */
    private handleMaybeUpdateViewport_;
    /** Handles the start of a new ink stroke in annotation mode. */
    private handleStartInkStroke_;
    /** Handles a new ink stroke in annotation mode. */
    private handleFinishInkStroke_;
    /**
     * Returns whether the PDF has entered editing mode or has committed ink2
     * edits.
     */
    private hasCommittedEdits_;
    /** Sets the document attachment data. */
    private setAttachments_;
    /** Sets the document bookmarks data. */
    private setBookmarks_;
    /** Sets document metadata from the current controller. */
    private setDocumentMetadata_;
    /**
     * An event handler for when the browser tells the PDF Viewer to perform a
     * save on the attachment at a certain index. Callers of this function must
     * be responsible for checking whether the attachment size is valid for
     * downloading.
     * @param e The event which contains the index of attachment to be downloaded.
     */
    protected onSaveAttachment_(e: CustomEvent<number>): Promise<void>;
    /**
     * An event handler for when the browser tells the PDF Viewer to perform a
     * save.
     * @param streamUrl Unique identifier for a PDF Viewer instance.
     */
    private onSave_;
    protected onToolbarSave_(e: CustomEvent<SaveRequestType>): void;
    getStreamUrlForTesting(): string;
    setOnSaveToDriveProgressListenerForTesting(): void;
    setPdfNavigatorForTesting(navigator: PdfNavigator): void;
    protected getSaveToDriveProgress_(): number;
    protected isSaveToDriveUploading_(): boolean;
    protected onSaveToDrive_(e: CustomEvent<SaveRequestType>): Promise<void>;
    protected onSaveToDriveBubbleAction_(e: CustomEvent<SaveToDriveBubbleRequestType>): void;
    private getSaveToDriveBubble_;
    private onSaveToDriveStateChanged_;
    protected onRotateLeft_(): void;
    protected onChangePage_(e: CustomEvent<ChangePageDetail>): void;
    protected onChangePageAndXy_(e: CustomEvent<ChangePageAndXyDetail>): void;
    protected onNavigate_(e: CustomEvent<NavigateDetail>): void;
    protected onSidenavToggleClick_(): void;
    private handleUndoRedoStateChanged_;
    /**
     * Sends a message to the PDF plugin to highlight the provided text
     * directives if any.
     */
    private maybeRenderTextDirectiveHighlights_;
    /**
     * Shows save file picker and returns a writable.
     * @param: suggestedName The default value for the filename.
     * @returns A Writable if successful, otherwise throws an exception.
     */
    private selectFileAndGetWritable_;
    /**
     * Shows deprecated save file picker and returns a FileWriter if successful.
     * @param suggestedName The default value for the filename.
     * @returns A FileWriter if successful, otherwise returns null.
     */
    private selectFileAndGetWriter_;
    /**
     * Writes a blob to a FileWriter, waiting until writing is completed. Throws
     * an exception on error.
     * @param writer: The FileWriter into which data is written.
     * @param blob: The Blob of data to write.
     */
    private writeToWriter_;
    /**
     * Saves the current PDF document to disk.
     */
    private save_;
    /**
     * Saves the current PDF document to disk in blocks.
     *
     * This function does not perform pre/post steps of saving and should be
     * called by `save_`.
     */
    private saveInBlocks_;
    /**
     * Performs required tasks after a successful save.
     */
    private onSaveSuccessful_;
    /**
     * Returns whether the beforeunload dialog should be shown.
     */
    private shouldShowBeforeUnloadDialog_;
    /**
     * Records metrics for saving PDFs.
     */
    private recordSaveMetrics_;
    protected onGlicSummarize_(): void;
    protected onPrint_(): Promise<void>;
    /**
     * Updates the toolbar's annotation available flag depending on current
     * conditions.
     * @return Whether annotations are available.
     */
    protected annotationAvailable_(): boolean;
    /** @return Whether the PDF contents are rotated. */
    protected isRotated_(): boolean;
    protected isTextboxActive_(): boolean;
    /**
     * Commits the textbox if it is active, no-op otherwise.
     */
    private maybeCommitActiveTextbox_;
    protected isInTextAnnotationMode_(): boolean;
    /**
     * @return Whether the Ink bottom toolbar should be shown. It should never be
     *     shown if the Ink side panel is shown.
     */
    protected shouldShowInkBottomToolbar_(): boolean;
    /**
     * @return Whether the Ink side panel should be shown. It should never be
     *     shown if the Ink bottom toolbar is shown. It should be shown if the
     *     window width is at least a certain width.
     */
    protected shouldShowInkSidePanel_(): boolean;
    protected hasInk2AnnotationEdits_(): boolean;
    /**
     * Performs required tasks after a failed or cancelled save.
     */
    private onSaveFailedOrCancelled_;
    protected onTextBoxStateChanged_(e: CustomEvent<TextBoxState>): void;
    /**
     * @returns Whether the PDF viewer has Ink2 enabled and is in annotation mode.
     */
    private inInk2AnnotationMode_;
    /**
     * Handles the `BeforeUnloadEvent` event.
     * @param event The `BeforeUnloadEvent` object representing the event.
     */
    private onBeforeUnload_;
    /**
     * Sets whether to show the beforeunload dialog when navigating away from pdf.
     * @param showDialog A boolean indicating whether to show the beforeunload
     * dialog.
     */
    private setShowBeforeUnloadDialog_;
}
declare global {
    interface HTMLElementTagNameMap {
        'pdf-viewer': PdfViewerElement;
    }
    interface Window {
        showSaveFilePicker(opts: unknown): Promise<FileSystemFileHandle>;
    }
}
export {};
