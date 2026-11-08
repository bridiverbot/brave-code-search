import { ZoomBehavior } from './browser_api.js';
export declare abstract class ZoomManager {
    protected browserZoom: number;
    protected getViewportZoom: () => number;
    private eventTarget_;
    /**
     * @param getViewportZoomCallback Callback to get the viewport's current zoom
     *     level.
     * @param initialZoom The initial browser zoom level.
     */
    constructor(getViewportZoomCallback: () => number, initialZoom: number);
    getEventTarget(): EventTarget;
    /**
     * Creates the appropriate kind of zoom manager given the zoom behavior.
     * @param zoomBehavior How to manage zoom.
     * @param getViewportZoom A function that gets the current viewport zoom.
     * @param setBrowserZoomFunction A function that sets the browser zoom to the
     *     provided value.
     * @param initialZoom The initial browser zoom level.
     */
    static create(zoomBehavior: ZoomBehavior, getViewportZoom: () => number, setBrowserZoomFunction: (zoom: number) => Promise<void>, initialZoom: number): ZoomManager;
    /**
     * Invoked when a browser-initiated zoom-level change occurs.
     * @param newZoom the zoom level to zoom to.
     */
    abstract onBrowserZoomChange(newZoom: number): void;
    /** Invoked when an extension-initiated zoom-level change occurs. */
    abstract onPdfZoomChange(): void;
    /**
     * Combines the internal pdf zoom and the browser zoom to
     * produce the total zoom level for the viewer.
     * @param internalZoom the zoom level internal to the viewer.
     * @return the total zoom level.
     */
    applyBrowserZoom(internalZoom: number): number;
    /**
     * Given a zoom level, return the internal zoom level needed to
     * produce that zoom level.
     * @param totalZoom the total zoom level.
     * @return the zoom level internal to the viewer.
     */
    internalZoomComponent(totalZoom: number): number;
}
export declare class InactiveZoomManager extends ZoomManager {
    onBrowserZoomChange(_newZoom: number): void;
    onPdfZoomChange(): void;
}
