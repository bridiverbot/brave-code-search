export type StreamInfoWithExtras = chrome.mimeHandlerPrivate.StreamInfo & {
    javascript?: 'allow' | 'block';
    tabUrl?: string;
};
export declare class BrowserApi {
    private streamInfo_;
    private defaultZoom_;
    private initialZoom_;
    private zoomBehavior_;
    /**
     * @param streamInfo The stream object pointing to the data contained in the
     *     PDF.
     */
    constructor(streamInfo: StreamInfoWithExtras, defaultZoom: number, initialZoom: number, zoomBehavior: ZoomBehavior);
    /**
     * @param streamInfo The stream object pointing to the data contained in the
     *     PDF.
     */
    static create(streamInfo: StreamInfoWithExtras, zoomBehavior: ZoomBehavior): Promise<BrowserApi>;
    /**
     * @return The stream object pointing to the data contained in the PDF.
     */
    getStreamInfo(): StreamInfoWithExtras;
    /**
     * Navigates the current tab.
     * @param url The URL to navigate the tab to.
     */
    navigateInCurrentTab(url: string): void;
    /**
     * Sets the browser zoom.
     * @param zoom The zoom factor to send to the browser.
     * @return A promise that will be resolved when the browser zoom has been
     *     updated.
     */
    setZoom(zoom: number): Promise<void>;
    /** @return The default browser zoom factor. */
    getDefaultZoom(): number;
    /** @return The initial browser zoom factor. */
    getInitialZoom(): number;
    /** @return How to manage zoom. */
    getZoomBehavior(): ZoomBehavior;
    /**
     * Adds an event listener to be notified when the browser zoom changes.
     *
     * @param listener The listener to be called with the new zoom factor.
     */
    addZoomEventListener(listener: (newZoom: number) => void): void;
}
/** Enumeration of ways to manage zoom changes. */
export declare enum ZoomBehavior {
    NONE = 0,
    MANAGE = 1,
    PROPAGATE_PARENT = 2
}
/**
 * Creates a BrowserApi for an extension running as a mime handler.
 * @return A promise to a BrowserApi instance. The instance is constructed by
 *     the pdfViewerPrivate API if PDF OOPIF is enabled, otherwise it is
 *     constructed by the mimeHandlerPrivate API.
 */
export declare function createBrowserApi(): Promise<BrowserApi>;
/**
 * Creates a BrowserApi instance for an extension not running as a mime handler.
 * @return A promise to a BrowserApi instance constructed from the URL.
 */
export declare function createBrowserApiForPrintPreview(): Promise<BrowserApi>;
