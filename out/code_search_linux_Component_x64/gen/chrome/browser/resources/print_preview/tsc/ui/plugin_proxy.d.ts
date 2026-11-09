import type { PdfPlugin } from 'chrome://print/pdf/pdf_scripting_api.js';
export type ViewportChangedCallback = (pageX: number, pageY: number, pageWidth: number, viewportWidth: number, viewportHeight: number) => void;
/**
 * An interface to the PDF plugin.
 */
export interface PluginProxy {
    /** @return Whether the plugin is ready. */
    pluginReady(): boolean;
    /**
     * Creates the PDF plugin.
     * @param previewUid The unique ID of the preview UI.
     * @param index The preview index to load.
     * @return The created plugin.
     */
    createPlugin(previewUid: number, index: number): PdfPlugin;
    /**
     * @param previewUid Unique identifier of preview.
     * @param index Page index for plugin.
     * @param color Whether the preview should be color.
     * @param pages Page indices to preview.
     * @param modifiable Whether the document is modifiable.
     */
    resetPrintPreviewMode(previewUid: number, index: number, color: boolean, pages: number[], modifiable: boolean): void;
    /**
     * @param scrollX The amount to horizontally scroll in pixels.
     * @param scrollY The amount to vertically scroll in pixels.
     */
    scrollPosition(scrollX: number, scrollY: number): void;
    /** @param e Keyboard event to forward to the plugin. */
    sendKeyEvent(e: KeyboardEvent): void;
    hideToolbar(): void;
    /**
     * @param eventsEnabled Whether pointer events should be captured by the
     *     plugin.
     */
    setPointerEvents(eventsEnabled: boolean): void;
    /**
     * @param previewUid The unique ID of the preview UI.
     * @param pageIndex The page index to load.
     * @param index The preview index.
     */
    loadPreviewPage(previewUid: number, pageIndex: number, index: number): void;
    setKeyEventCallback(keyEventCallback: (e: KeyboardEvent) => void): void;
    setLoadCompleteCallback(loadCompleteCallback: (success: boolean) => void): void;
    setViewportChangedCallback(viewportChangedCallback: (pageX: number, pageY: number, pageWidth: number, viewportWidth: number, viewportHeight: number) => void): void;
    /** @param darkMode Whether the page is in dark mode. */
    darkModeChanged(darkMode: boolean): void;
}
export declare class PluginProxyImpl implements PluginProxy {
    private plugin_;
    pluginReady(): boolean;
    createPlugin(previewUid: number, index: number): PdfPlugin;
    /**
     * Get the URL for the plugin.
     * @param previewUid Unique identifier of preview.
     * @param index Page index for plugin.
     */
    private getPreviewUrl_;
    resetPrintPreviewMode(previewUid: number, index: number, color: boolean, pages: number[], modifiable: boolean): void;
    scrollPosition(scrollX: number, scrollY: number): void;
    sendKeyEvent(e: KeyboardEvent): void;
    hideToolbar(): void;
    setPointerEvents(eventsEnabled: boolean): void;
    loadPreviewPage(previewUid: number, pageIndex: number, index: number): void;
    setKeyEventCallback(keyEventCallback: (e: KeyboardEvent) => void): void;
    setLoadCompleteCallback(loadCompleteCallback: (success: boolean) => void): void;
    setViewportChangedCallback(viewportChangedCallback: ViewportChangedCallback): void;
    darkModeChanged(darkMode: boolean): void;
    static setInstance(obj: PluginProxy): void;
    static getInstance(): PluginProxy;
}
