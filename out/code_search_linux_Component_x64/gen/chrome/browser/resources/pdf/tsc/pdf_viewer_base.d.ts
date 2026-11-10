import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import type { LoadTimeDataRaw } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BrowserApi } from './browser_api.js';
import type { Point } from './constants.js';
import { FittingType } from './constants.js';
import type { ContentController, MessageData, SelectedTextData } from './controller.js';
import type { OpenPdfParams } from './open_pdf_params_parser.js';
import { OpenPdfParamsParser } from './open_pdf_params_parser.js';
import { LoadState } from './pdf_scripting_api.js';
import type { SerializedKeyEvent } from './pdf_scripting_api.js';
import type { DocumentDimensionsMessageData } from './pdf_viewer_utils.js';
import { Viewport } from './viewport.js';
interface DocumentLoadedScriptingMessage {
    type: 'documentLoaded';
    load_state: LoadState;
}
interface ViewportScriptingMessage {
    type: 'viewport';
    pageX: number;
    pageY: number;
    pageWidth: number;
    viewportWidth: number;
    viewportHeight: number;
}
interface SendKeyEventScriptingMessage {
    type: 'sendKeyEvent';
    keyEvent: SerializedKeyEvent;
}
interface SimpleScriptingMessage {
    type: 'passwordPrompted' | 'touchSelectionOccurred';
}
export type ScriptingMessage = DocumentLoadedScriptingMessage | ViewportScriptingMessage | SendKeyEventScriptingMessage | SimpleScriptingMessage | SelectedTextData;
declare const HelpBubbleCrLitElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare abstract class PdfViewerBaseElement extends HelpBubbleCrLitElementBase {
    static get properties(): {
        showErrorDialog: {
            type: BooleanConstructor;
        };
        strings: {
            type: ObjectConstructor;
        };
    };
    protected browserApi: BrowserApi | null;
    protected currentController: ContentController | null;
    protected documentDimensions: DocumentDimensionsMessageData | null;
    protected isUserInitiatedEvent: boolean;
    protected lastViewportPosition: Point | null;
    protected originalUrl: string;
    protected paramsParser: OpenPdfParamsParser | null;
    protected pdfOopifEnabled: boolean;
    accessor showErrorDialog: boolean;
    protected accessor strings: LoadTimeDataRaw | undefined;
    protected tracker: EventTracker;
    private delayedScriptingMessages_;
    private initialLoadComplete_;
    private loaded_;
    private loadState_;
    private overrideSendScriptingMessageForTest_;
    private parentOrigin_;
    private parentWindow_;
    private plugin_;
    private viewport_;
    private zoomManager_;
    protected abstract forceFit(view: FittingType): void;
    protected abstract afterZoom(viewportZoom: number): void;
    protected abstract setPluginSrc(plugin: HTMLEmbedElement): void;
    createHelpBubbleProxy(): import("chrome://resources/cr_components/help_bubble/pdf_help_bubble_proxy.js").PdfHelpBubbleProxy;
    /** Whether to enable the new UI. */
    protected isNewUiEnabled(): boolean;
    abstract getBackgroundColor(): number;
    /** Creates the plugin element. */
    private createPlugin_;
    abstract init(browserApi: BrowserApi): void;
    /**
     * Initializes the PDF viewer.
     * @param browserApi The interface with the browser.
     * @param scroller The viewport's scroller element.
     * @param sizer The viewport's sizer element.
     * @param content The viewport's content element.
     */
    protected initInternal(browserApi: BrowserApi, scroller: HTMLElement, sizer: HTMLElement, content: HTMLElement): void;
    /**
     * Updates the loading progress of the document in response to a progress
     * message being received from the content controller.
     * @param progress The progress as a percentage.
     */
    updateProgress(progress: number): void;
    /** @return Whether the documentLoaded message can be sent. */
    readyToSendLoadMessage(): boolean;
    /**
     * Sends a 'documentLoaded' message to the PdfScriptingApi if the document has
     * finished loading.
     */
    sendDocumentLoadedMessage(): void;
    /** Updates the UI before sending the viewport scripting message. */
    protected abstract updateUiForViewportChange(): void;
    /** A callback to be called after the viewport changes. */
    private viewportChanged_;
    /**
     * Handles a scripting message from outside the extension (typically sent by
     * PdfScriptingApi in a page containing the extension) to interact with the
     * plugin.
     * @return Whether the message was handled.
     */
    handleScriptingMessage(message: MessageEvent): boolean;
    /**
     * @return Whether the message was delayed and added to the queue.
     */
    delayScriptingMessage(message: MessageEvent): boolean;
    protected abstract handlePluginMessage(e: CustomEvent<MessageData>): void;
    /**
     * Handles key events. For instance, these may come from the user directly,
     * the plugin frame, or the scripting API.
     */
    protected abstract handleKeyEvent(e: KeyboardEvent): void;
    /** Sets document dimensions from the current controller. */
    protected setDocumentDimensions(documentDimensions: DocumentDimensionsMessageData): void;
    /**
     * @return True if OOPIF PDF is enabled, false otherwise.
     */
    get isPdfOopifEnabled(): boolean;
    /**
     * @return Resolved when the load state reaches LOADED, rejects on FAILED.
     *     Returns null if no promise has been created, which is the case for
     *     initial load of the PDF.
     */
    get loaded(): Promise<void> | null;
    get viewport(): Viewport;
    /**
     * Updates the load state and triggers completion of the `loaded`
     * promise if necessary.
     */
    protected setLoadState(loadState: LoadState): void;
    getLoadSucceededForTesting(): boolean;
    /**
     * Load a dictionary of translated strings into the UI. Used as a callback for
     * chrome.resourcesPrivate.
     * @param strings Dictionary of translated strings
     */
    protected handleStrings(strings?: LoadTimeDataRaw): void;
    /**
     * Handles open pdf parameters. This function updates the viewport as per the
     * parameters appended to the URL when opening pdf. The order is important as
     * later actions can override the effects of previous actions.
     * @param params The open params passed in the URL.
     */
    handleUrlParams(params: OpenPdfParams): void;
    /**
     * A callback that sets `isUserInitiatedEvent` to `userInitiated`.
     * @param userInitiated The value to which to set `isUserInitiatedEvent`.
     */
    private setUserInitiated_;
    overrideSendScriptingMessageForTest(): void;
    /**
     * Send a scripting message outside the extension (typically to
     * PdfScriptingApi in a page containing the extension).
     */
    protected sendScriptingMessage(message: ScriptingMessage): void;
    /** Requests to change the viewport fitting type. */
    protected onFitToChanged(e: CustomEvent<FittingType>): void;
    protected onZoomIn(): void;
    protected onZoomChanged(e: CustomEvent<number>): void;
    protected onZoomOut(): void;
    /** Handles a selected text reply from the current controller. */
    protected handleSelectedTextReply(message: SelectedTextData): void;
    protected rotateClockwise(): void;
    protected rotateCounterclockwise(): void;
}
export {};
