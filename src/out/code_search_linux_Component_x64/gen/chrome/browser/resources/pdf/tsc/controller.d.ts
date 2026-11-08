import type { AnnotationBrush, AnnotationBrushType, AnnotationMode, DeleteTextAnnotationMessageData, TextAnnotation, TextAnnotationMessageData } from './constants.js';
import type { NamedDestinationMessageData, Rect } from './constants.js';
import type { LayoutOptions, Viewport } from './viewport.js';
import { PinchPhase } from './viewport.js';
type SaveRequestType = chrome.pdfViewerPrivate.SaveRequestType;
export interface MessageData {
    type: string;
    messageId?: string;
}
export interface SaveAttachmentMessageData {
    type: string;
    dataToSave: ArrayBuffer;
}
export interface PrintPreviewParams {
    type: string;
    url: string;
    grayscale: boolean;
    modifiable: boolean;
    pageNumbers: number[];
}
interface ThumbnailMessageData {
    imageData: ArrayBuffer;
    width: number;
    height: number;
}
export interface SelectedTextData {
    type: 'getSelectedTextReply';
    selectedText: string;
}
export interface AnnotationBrushMessage {
    type: 'setAnnotationBrush' | 'getAnnotationBrush';
    data: AnnotationBrush;
}
interface AllTextAnnotationsMessage {
    type: 'getAllTextAnnotations';
    annotations: TextAnnotation[];
}
interface DeleteTextAnnotationMessage {
    type: 'deleteTextAnnotation';
    data: DeleteTextAnnotationMessageData;
}
interface EditTextAnnotationMessage {
    type: 'editTextAnnotation';
    data: number;
}
interface FinishTextAnnotationMessage {
    type: 'finishTextAnnotation';
    data: TextAnnotationMessageData;
}
export interface ViewportMessage {
    type: 'viewport';
    userInitiated: boolean;
    zoom: number;
    layoutOptions?: LayoutOptions;
    xOffset: number;
    yOffset: number;
    pinchPhase?: PinchPhase;
    pinchX?: number;
    pinchY?: number;
    pinchVectorX?: number;
    pinchVectorY?: number;
}
export interface StopScrollingMessage {
    type: 'stopScrolling';
}
export interface RotateClockwiseMessage {
    type: 'rotateClockwise';
}
export interface RotateCounterclockwiseMessage {
    type: 'rotateCounterclockwise';
}
export interface DisplayAnnotationsMessage {
    type: 'displayAnnotations';
    display: boolean;
}
export interface SetTwoUpViewMessage {
    type: 'setTwoUpView';
    enableTwoUpView: boolean;
}
export interface PrintMessage {
    type: 'print';
}
export interface SelectAllMessage {
    type: 'selectAll';
}
export interface HighlightTextFragmentsMessage {
    type: 'highlightTextFragments';
    textFragments: string[];
}
export interface GetSelectedTextMessage {
    type: 'getSelectedText';
}
export interface GetThumbnailMessage {
    type: 'getThumbnail';
    pageIndex: number;
}
export interface ResetPrintPreviewModeMessage {
    type: 'resetPrintPreviewMode';
    url: string;
    grayscale: boolean;
    pageCount: number;
}
export interface SetBackgroundColorMessage {
    type: 'setBackgroundColor';
    color: number;
}
export interface LoadPreviewPageMessage {
    type: 'loadPreviewPage';
    url: string;
    index: number;
}
export interface GetPageBoundingBoxMessage {
    type: 'getPageBoundingBox';
    page: number;
}
export interface GetPasswordCompleteMessage {
    type: 'getPasswordComplete';
    password: string;
}
export interface GetNamedDestinationMessage {
    type: 'getNamedDestination';
    namedDestination: string;
}
export interface SetPresentationModeMessage {
    type: 'setPresentationMode';
    enablePresentationMode: boolean;
}
export interface SaveMessage {
    type: 'save';
    token: string;
    saveRequestType: SaveRequestType;
}
export interface GetSaveDataBlockMessage {
    type: 'getSaveDataBlock';
    token: string;
    saveRequestType: SaveRequestType;
    offset: number;
    blockSize: number;
}
export interface GetSuggestedFileNameMessage {
    type: 'getSuggestedFileName';
    saveRequestTypeForTesting: SaveRequestType;
}
export interface ReleaseSaveInBlockBuffersMessage {
    type: 'releaseSaveInBlockBuffers';
}
export interface SaveAttachmentMessage {
    type: 'saveAttachment';
    attachmentIndex: number;
}
export interface FocusMessage {
    type: 'focus';
}
export interface SetAnnotationModeMessage {
    type: 'setAnnotationMode';
    mode: AnnotationMode;
}
export interface GetAnnotationBrushMessage {
    type: 'getAnnotationBrush';
    brushType?: AnnotationBrushType;
}
export interface AnnotationRedoMessage {
    type: 'annotationRedo';
}
export interface GetAllTextAnnotationsRequestMessage {
    type: 'getAllTextAnnotations';
}
export interface AnnotationUndoMessage {
    type: 'annotationUndo';
}
export type PluginMessageWithReply = GetSelectedTextMessage | GetThumbnailMessage | GetPageBoundingBoxMessage | GetNamedDestinationMessage | GetSuggestedFileNameMessage | SaveAttachmentMessage | GetAnnotationBrushMessage | GetAllTextAnnotationsRequestMessage;
export type PluginMessageWithoutReply = StopScrollingMessage | ViewportMessage | RotateClockwiseMessage | RotateCounterclockwiseMessage | DisplayAnnotationsMessage | SetTwoUpViewMessage | PrintMessage | SelectAllMessage | HighlightTextFragmentsMessage | ResetPrintPreviewModeMessage | SetBackgroundColorMessage | LoadPreviewPageMessage | GetPasswordCompleteMessage | SetPresentationModeMessage | SaveMessage | GetSaveDataBlockMessage | ReleaseSaveInBlockBuffersMessage | FocusMessage | SetAnnotationModeMessage | AnnotationBrushMessage | DeleteTextAnnotationMessage | EditTextAnnotationMessage | FinishTextAnnotationMessage | AnnotationRedoMessage | AnnotationUndoMessage;
export type PluginMessage = PluginMessageWithReply | PluginMessageWithoutReply;
export interface MessageResponseMap {
    'getSelectedText': SelectedTextData;
    'getThumbnail': ThumbnailMessageData;
    'getPageBoundingBox': Rect;
    'getNamedDestination': NamedDestinationMessageData;
    'getSuggestedFileName': {
        fileName: string;
        bypassSaveFileForTesting?: boolean;
    };
    'saveAttachment': SaveAttachmentMessageData;
    'getAnnotationBrush': AnnotationBrushMessage;
    'getAllTextAnnotations': AllTextAnnotationsMessage;
}
export interface ContentController {
    getEventTarget(): EventTarget;
    beforeZoom(): void;
    afterZoom(): void;
    viewportChanged(): void;
    rotateClockwise(): void;
    rotateCounterclockwise(): void;
    setDisplayAnnotations(displayAnnotations: boolean): void;
    setTwoUpView(enableTwoUpView: boolean): void;
    /** Triggers printing of the current document. */
    print(): void;
    /** Undo an annotation mode edit action. */
    undo(): void;
    /** Redo an annotation mode edit action. */
    redo(): void;
    /**
     * Requests that the current document be saved.
     * @param requestType The type of save request. If ANNOTATION, a response is
     *     required, otherwise the controller may save the document to disk
     *     internally.
     */
    save(requestType: SaveRequestType): Promise<{
        fileName: string;
        dataToSave: ArrayBuffer;
        bypassSaveFileForTesting?: boolean;
        editModeForTesting?: boolean;
    } | null>;
    /**
     * Requests that the attachment at a certain index be saved.
     * @param index The index of the attachment to be saved.
     */
    saveAttachment(index: number): Promise<SaveAttachmentMessageData>;
}
/** Event types dispatched by the plugin controller. */
export declare enum PluginControllerEventType {
    FINISH_INK_STROKE = "PluginControllerEventType.FINISH_INK_STROKE",
    START_INK_STROKE = "PluginControllerEventType.START_INK_STROKE",
    UPDATE_THUMBNAIL = "PluginControllerEventType.UPDATE_THUMBNAIL",
    IS_ACTIVE_CHANGED = "PluginControllerEventType.IS_ACTIVE_CHANGED",
    PLUGIN_MESSAGE = "PluginControllerEventType.PLUGIN_MESSAGE"
}
/**
 * PDF plugin controller singleton, responsible for communicating with the
 * embedded plugin element. Dispatches a
 * `PluginControllerEventType.PLUGIN_MESSAGE` event containing the message from
 * the plugin, if a message type not handled by this controller is received.
 */
export declare class PluginController implements ContentController {
    private eventTarget_;
    private isActive_;
    private plugin_?;
    private delayedMessages_;
    private viewport_?;
    private getIsUserInitiatedCallback_;
    private pendingSaveTokens_;
    private pendingSaveDataBlockTokens_;
    private requestResolverMap_;
    private uidCounter_;
    private port_;
    init(plugin: HTMLEmbedElement, viewport: Viewport, getIsUserInitiatedCallback: () => boolean): void;
    get isActive(): boolean;
    set isActive(isActive: boolean);
    private setPlugin_;
    private createUid_;
    getEventTarget(): EventTarget;
    viewportChanged(): void;
    setAnnotationMode(mode: AnnotationMode): void;
    getAnnotationBrush(brushType?: AnnotationBrushType): Promise<AnnotationBrushMessage>;
    setAnnotationBrush(brush: AnnotationBrush): void;
    getAllTextAnnotations(): Promise<AllTextAnnotationsMessage>;
    deleteTextAnnotation(data: DeleteTextAnnotationMessageData): void;
    editTextAnnotation(id: number): void;
    finishTextAnnotation(annotation: TextAnnotationMessageData): void;
    redo(): void;
    undo(): void;
    /**
     * Notify the plugin to stop reacting to scroll events while zoom is taking
     * place to avoid flickering.
     */
    beforeZoom(): void;
    /**
     * Notify the plugin of the zoom change and to continue reacting to scroll
     * events.
     */
    afterZoom(): void;
    /**
     * Post a message to the plugin. Some messages will cause an async reply to be
     * received through handlePluginMessage_().
     */
    private postMessage_;
    /**
     * Post a message to the plugin, for cases where direct response is expected
     * from the plugin.
     * @return A promise holding the response from the plugin.
     */
    private postMessageWithReply_;
    rotateClockwise(): void;
    rotateCounterclockwise(): void;
    setDisplayAnnotations(displayAnnotations: boolean): void;
    setTwoUpView(enableTwoUpView: boolean): void;
    print(): void;
    selectAll(): void;
    highlightTextFragments(textFragments: string[]): void;
    getSelectedText(): Promise<SelectedTextData>;
    /**
     * Post a thumbnail request message to the plugin.
     * @return A promise holding the thumbnail response from the plugin.
     */
    requestThumbnail(pageIndex: number): Promise<ThumbnailMessageData>;
    resetPrintPreviewMode(printPreviewParams: PrintPreviewParams): void;
    /**
     * @param color New color, as a 32-bit integer, of the PDF plugin
     *     background.
     */
    setBackgroundColor(color: number): void;
    loadPreviewPage(url: string, index: number): void;
    getPageBoundingBox(page: number): Promise<Rect>;
    getPasswordComplete(password: string): void;
    /**
     * @return A promise holding the named destination information from the
     *     plugin.
     */
    getNamedDestination(destination: string): Promise<NamedDestinationMessageData>;
    focus(): void;
    setPresentationMode(enablePresentationMode: boolean): void;
    save(requestType: SaveRequestType): Promise<{
        fileName: string;
        dataToSave: ArrayBuffer;
    } | null>;
    /**
     * Requests data to save a block of the current document. The reply will
     * include bytes to save and total file size. A 0 total file size is an error
     * indicator.
     * @param requestType The type of save request.
     * @param offset The offset of the requested data.
     * @param blockSize The size of requested data. This parameter can be 0 when
     *     the offset is 0 since the caller may not know yet the total file size.
     *     Otherwise it specifies the upper limit on the returned data and the
     *     plugin may return less data than requested.
     */
    getSaveDataBlock(requestType: SaveRequestType, offset: number, blockSize: number): Promise<{
        dataToSave: ArrayBuffer;
        totalFileSize: number;
    }>;
    /**
     * Requests suggested filename for saving the current document.
     * @param requestType The type of the request, only used for testing.
     */
    getSuggestedFileName(requestType: SaveRequestType): Promise<{
        fileName: string;
        bypassSaveFileForTesting?: boolean;
    }>;
    /**
     * Releases any memory buffers kept for saving the PDF in blocks.
     */
    releaseSaveInBlockBuffers(): void;
    saveAttachment(index: number): Promise<SaveAttachmentMessageData>;
    /**
     * Binds an event handler for messages received from the plugin.
     *
     * TODO(crbug.com/40189769): Remove this method when a permanent postMessage()
     * bridge is implemented for the viewer.
     */
    bindMessageHandler(port: MessagePort): void;
    /**
     * An event handler for handling message events received from the plugin.
     */
    private handlePluginMessage_;
    /** Handles the pdf file buffer received from the plugin. */
    private saveData_;
    /** Handles the partial pdf file buffer received from the plugin. */
    private saveDataBlock_;
    setPluginForTesting(plugin: HTMLEmbedElement): void;
    static getInstance(): PluginController;
}
export {};
