type ViewportChangedCallback = (pageX: number, pageY: number, pageWidth: number, viewportWidth: number, viewportHeight: number) => void;
export interface PdfPlugin extends HTMLIFrameElement {
    darkModeChanged(darkMode: boolean): void;
    hideToolbar(): void;
    loadPreviewPage(url: string, index: number): void;
    resetPrintPreviewMode(url: string, color: boolean, pages: number[], modifiable: boolean): void;
    scrollPosition(x: number, y: number): void;
    sendKeyEvent(e: KeyboardEvent): void;
    setKeyEventCallback(callback: (e: KeyboardEvent) => void): void;
    setLoadCompleteCallback(callback: (loaded: boolean) => void): void;
    setViewportChangedCallback(callback: ViewportChangedCallback): void;
}
export interface SerializedKeyEvent {
    keyCode: number;
    code: string;
    key: string;
    shiftKey: boolean;
    ctrlKey: boolean;
    altKey: boolean;
    metaKey: boolean;
}
/**
 * Turn a dictionary received from postMessage into a key event.
 * @param dict A dictionary representing the key event.
 */
export declare function deserializeKeyEvent(dict: SerializedKeyEvent): KeyboardEvent;
/**
 * Turn a key event into a dictionary which can be sent over postMessage.
 * @return A dictionary representing the key event.
 */
export declare function serializeKeyEvent(event: KeyboardEvent): SerializedKeyEvent;
/**
 * An enum containing a value specifying whether the PDF is currently loading,
 * has finished loading or failed to load.
 */
export declare enum LoadState {
    LOADING = "loading",
    SUCCESS = "success",
    FAILED = "failed"
}
export declare class PdfScriptingApi {
    private loadState_;
    private pendingScriptingMessages_;
    private viewportChangedCallback_?;
    private loadCompleteCallback_?;
    private selectedTextCallback_?;
    private keyEventCallback_?;
    private plugin_;
    /**
     * @param window the window of the page containing the pdf viewer.
     * @param plugin the plugin element containing the pdf viewer.
     */
    constructor(window: Window, plugin: Window | null);
    /**
     * Send a message to the extension. If messages try to get sent before there
     * is a plugin element set, then we queue them up and send them later (this
     * can happen in print preview).
     */
    private sendMessage_;
    /**
     * Sets the plugin element containing the PDF viewer. The element will usually
     * be passed into the PdfScriptingApi constructor but may also be set later.
     * @param plugin the plugin element containing the PDF viewer.
     */
    setPlugin(plugin: Window | null): void;
    /**
     * Sets the callback which will be run when the PDF viewport changes.
     */
    setViewportChangedCallback(callback: ViewportChangedCallback): void;
    /**
     * Sets the callback which will be run when the PDF document has finished
     * loading. If the document is already loaded, it will be run immediately.
     */
    setLoadCompleteCallback(callback: (loaded: boolean) => void): void;
    /**
     * Sets a callback that gets run when a key event is fired in the PDF viewer.
     */
    setKeyEventCallback(callback: (e: KeyboardEvent) => void): void;
    /**
     * Resets the PDF viewer into print preview mode.
     * @param url the url of the PDF to load.
     * @param grayscale whether or not to display the PDF in grayscale.
     * @param pageNumbers an array of the page numbers.
     * @param modifiable whether or not the document is modifiable.
     */
    resetPrintPreviewMode(url: string, grayscale: boolean, pageNumbers: number[], modifiable: boolean): void;
    /** Hide the toolbar after a delay. */
    hideToolbar(): void;
    /**
     * Load a page into the document while in print preview mode.
     * @param url the url of the pdf page to load.
     * @param index the index of the page to load.
     */
    loadPreviewPage(url: string, index: number): void;
    /** @param darkMode Whether the page is in dark mode. */
    darkModeChanged(darkMode: boolean): void;
    /**
     * Select all the text in the document. May only be called after document
     * load.
     */
    selectAll(): void;
    /**
     * Get the selected text in the document. The callback will be called with the
     * text that is selected. May only be called after document load.
     * @param callback a callback to be called with the selected text.
     * @return Whether the function is successful, false if there is an
     *     outstanding request for selected text that has not been answered.
     */
    getSelectedText(callback: (text: string) => void): boolean;
    /** Print the document. May only be called after document load. */
    print(): void;
    /**
     * Send a key event to the extension.
     * @param keyEvent the key event to send to the extension.
     */
    sendKeyEvent(keyEvent: KeyboardEvent): void;
    /**
     * @param scrollX The amount to horizontally scroll in pixels.
     * @param scrollY The amount to vertically scroll in pixels.
     */
    scrollPosition(scrollX: number, scrollY: number): void;
}
/**
 * Creates a PDF viewer with a scripting interface. This is basically 1) an
 * iframe which is navigated to the PDF viewer extension and 2) a scripting
 * interface which provides access to various features of the viewer for use
 * by print preview and accessibility.
 * @param src the source URL of the PDF to load initially.
 * @param baseUrl the base URL of the PDF viewer
 * @return The iframe element containing the PDF viewer.
 */
export declare function pdfCreateOutOfProcessPlugin(src: string, baseUrl: string): PdfPlugin;
export {};
