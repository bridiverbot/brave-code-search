import type { Point, Rect, ScrollData } from './constants.js';
import { FittingType } from './constants.js';
import type { Gesture } from './gesture_detector.js';
import { GestureDetector } from './gesture_detector.js';
import type { PdfPluginElement } from './internal_plugin.js';
import { SwipeDirection } from './swipe_detector.js';
import type { ZoomManager } from './zoom_manager.js';
export interface ViewportRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface DocumentDimensions {
    width: number;
    height: number;
    pageDimensions: ViewportRect[];
    layoutOptions?: LayoutOptions;
}
export interface LayoutOptions {
    direction: number;
    defaultPageOrientation: number;
    twoUpViewEnabled: boolean;
}
export interface Size {
    width: number;
    height: number;
}
interface FitToPageParams {
    pageIndex?: number;
    scrollToTop?: boolean;
}
interface FitToHeightParams {
    pageIndex?: number;
    viewPosition?: number;
}
interface FitToBoundingBoxParams {
    boundingBox: Rect;
    pageIndex: number;
}
interface FitToBoundingBoxDimensionParams extends FitToBoundingBoxParams {
    viewPosition?: number;
    fitToWidth: boolean;
}
type FitToWidthParams = FitToHeightParams;
type FittingTypeParams = FitToPageParams | FitToHeightParams | FitToWidthParams | FitToBoundingBoxParams | FitToBoundingBoxDimensionParams;
export declare class Viewport {
    private window_;
    private scrollContent_;
    private defaultZoom_;
    private viewportChangedCallback_;
    private beforeZoomCallback_;
    private afterZoomCallback_;
    private userInitiatedCallback_;
    private allowedToChangeZoom_;
    private internalZoom_;
    /**
     * Zoom state used to change zoom and fitting type to what it was
     * originally when saved.
     */
    private savedZoom_;
    private savedFittingType_;
    /**
     * Predefined zoom factors to be used when zooming in/out. These are in
     * ascending order.
     */
    private presetZoomFactors_;
    private zoomManager_;
    private documentDimensions_;
    private pageDimensions_;
    private fittingType_;
    private prevScale_;
    private smoothScrolling_;
    private pinchPhase_;
    private pinchPanVector_;
    private pinchCenter_;
    private firstPinchCenterInFrame_;
    private oldCenterInContent_;
    private keepContentCentered_;
    private tracker_;
    private gestureDetector_;
    private swipeDetector_;
    private sentPinchEvent_;
    private fullscreenForTesting_;
    /**
     * @param container The element which contains the scrollable content.
     * @param sizer The element which represents the size of the scrollable
     *     content in the viewport
     * @param content The element which is the parent of the plugin in the viewer.
     * @param scrollbarWidth The width of scrollbars on the page
     * @param defaultZoom The default zoom level.
     */
    constructor(container: HTMLElement, sizer: HTMLElement, content: HTMLElement, scrollbarWidth: number, defaultZoom: number);
    /**
     * Sets whether the viewport is in Presentation mode.
     */
    setPresentationMode(enabled: boolean): void;
    /**
     * Sets the contents of the viewport, scrolling within the viewport's window.
     * @param content The new viewport contents, or null to clear the viewport.
     */
    setContent(content: Node | null): void;
    /**
     * Sets the contents of the viewport, scrolling within the content's window.
     * @param content The new viewport contents.
     */
    setRemoteContent(content: PdfPluginElement): void;
    /**
     * Synchronizes scroll position from remote content.
     */
    syncScrollFromRemote(position: Point): void;
    /**
     * Receives acknowledgment of scroll position synchronized to remote content.
     */
    ackScrollToRemote(position: Point): void;
    setViewportChangedCallback(viewportChangedCallback: () => void): void;
    setBeforeZoomCallback(beforeZoomCallback: () => void): void;
    setAfterZoomCallback(afterZoomCallback: () => void): void;
    setUserInitiatedCallback(userInitiatedCallback: (userInitiated: boolean) => void): void;
    /**
     * @return The number of clockwise 90-degree rotations that have been applied.
     */
    getClockwiseRotations(): number;
    /** @return Whether viewport is in two-up view mode. */
    twoUpViewEnabled(): boolean;
    /**
     * Clamps the zoom factor (or page scale factor) to be within the limits.
     * @param factor The zoom/scale factor.
     * @return The factor clamped within the limits.
     */
    private clampZoom_;
    /** @param factors Array containing zoom/scale factors. */
    setZoomFactorRange(factors: number[]): void;
    /**
     * Converts a page position (e.g. the location of a bookmark) to a screen
     * position.
     * @param point The position on `page`.
     * @return The screen position.
     */
    convertPageToScreen(page: number, point: Point): Point;
    /**
     * Returns the zoomed and rounded document dimensions for the given zoom.
     * Rounding is necessary when interacting with the renderer which tends to
     * operate in integral values (for example for determining if scrollbars
     * should be shown).
     * @param zoom The zoom to use to compute the scaled dimensions.
     * @return Scaled 'width' and 'height' of the document.
     */
    private getZoomedDocumentDimensions_;
    /** @return A dictionary with the 'width'/'height' of the document. */
    getDocumentDimensions(): Size;
    /** @return A dictionary carrying layout options from the plugin. */
    getLayoutOptions(): LayoutOptions | undefined;
    /** @return ViewportRect for the viewport given current zoom. */
    private getViewportRect_;
    /**
     * @param zoom Zoom to compute scrollbars for
     * @return Whether horizontal or vertical scrollbars are needed.
     * Public so tests can call it directly.
     */
    documentNeedsScrollbars(zoom: number): {
        horizontal: boolean;
        vertical: boolean;
    };
    /**
     * @return Whether horizontal and vertical scrollbars are needed.
     */
    documentHasScrollbars(): {
        horizontal: boolean;
        vertical: boolean;
    };
    /**
     * Helper function called when the zoomed document size changes. Updates the
     * sizer's width and height.
     */
    private contentSizeChanged_;
    /** Called when the viewport should be updated. */
    private updateViewport_;
    /** Called when the browser window size changes. */
    private resizeWrapper_;
    /** Called when the viewport size changes. */
    private resize_;
    /** @return The scroll position of the viewport. */
    get position(): Point;
    /**
     * Scroll the viewport to the specified position.
     * @param position The position to scroll to.
     * @param isSmooth Whether to scroll smoothly.
     */
    setPosition(position: Point, isSmooth?: boolean): void;
    /** @return The size of the viewport. */
    get size(): Size;
    /** Gets the content size. */
    get contentSize(): Size;
    /** @return The current zoom. */
    getZoom(): number;
    /** @return The preset zoom factors. */
    get presetZoomFactors(): number[];
    setZoomManager(manager: ZoomManager): void;
    /**
     * @return The phase of the current pinch gesture for the viewport.
     */
    get pinchPhase(): PinchPhase;
    /**
     * @return The panning caused by the current pinch gesture (as the deltas of
     *     the x and y coordinates).
     */
    get pinchPanVector(): Point | null;
    /**
     * @return The coordinates of the center of the current pinch gesture.
     */
    get pinchCenter(): Point | null;
    /**
     * Used to wrap a function that might perform zooming on the viewport. This is
     * required so that we can notify the plugin that zooming is in progress
     * so that while zooming is taking place it can stop reacting to scroll events
     * from the viewport. This is to avoid flickering.
     */
    private mightZoom_;
    /**
     * @param currentScrollPos Optional starting position to zoom into. Otherwise,
     *     use the current position.
     */
    private setZoomInternal_;
    /**
     * Sets the zoom of the viewport.
     * Same as setZoomInternal_ but for pinch zoom we have some more operations.
     * @param scaleDelta The zoom delta.
     * @param center The pinch center in plugin coordinates.
     */
    private setPinchZoomInternal_;
    /**
     *  Converts a point from plugin to content coordinates.
     *  @param pluginPoint The plugin coordinates.
     *  @return The content coordinates.
     */
    private pluginToContent_;
    /** @param newZoom The zoom level to zoom to. */
    setZoom(newZoom: number): void;
    /**
     * Save the current zoom and fitting type.
     */
    saveZoomState(): void;
    /**
     * Set zoom and fitting type to what it was when saved. See saveZoomState().
     */
    restoreZoomState(): void;
    /** @param e Event containing the old browser zoom. */
    private updateZoomFromBrowserChange_;
    /**
     * Gets the width of scrollbars in the viewport in pixels.
     */
    get scrollbarWidth(): number;
    /**
     * Gets the width of overlay scrollbars in the viewport in pixels, or 0 if not
     * using overlay scrollbars.
     */
    get overlayScrollbarWidth(): number;
    /** @return The fitting type the viewport is currently in. */
    get fittingType(): FittingType;
    /** @return The y coordinate of the bottom of the given page. */
    private getPageBottom_;
    /**
     * Get the page at a given y position. If there are multiple pages
     * overlapping the given y-coordinate, returns one of the two of them (does
     * a binary search so returns whichever of the two happens to be hit first).
     * Note: May return the wrong result in two-up view. See getTwoUpPageAtY_()
     * for a version of this method that accounts for two-up view.
     * @param y The y-coordinate to get the page at.
     * @return The index of a page overlapping the given y-coordinate.
     */
    private getPageAtY_;
    /**
     * Get the first page at a given y position in two up view. Always returns
     * the lower index page at the y position.
     * @param y The y-coordinate to get the page at.
     * @return The index of a page overlapping the given y-coordinate.
     */
    private getTwoUpPageAtY_;
    /**
     * Return the last page visible in the viewport. Returns the last index of the
     * document if the viewport is below the document.
     * @return The highest index of the pages visible in the viewport.
     */
    private getLastPageInViewport_;
    /** @return Whether |point| (in screen coordinates) is inside a page. */
    isPointInsidePage(point: Point): boolean;
    /**
     * @return The page at |point|, or -1 if there is no page at |point|.
     */
    getPageAtPoint(point: Point): number;
    /**
     * @return Whether `location` is on a scrollbar.
     */
    isPointOnScrollbar(location: Point): boolean;
    /**
     * @return The index of the page with the greatest proportion of its area in
     *     the current viewport.
     */
    getMostVisiblePage(): number;
    /**
     * Compute the zoom level for fit-to-page, fit-to-width or fit-to-height.
     * At least one of {fitWidth, fitHeight} must be true.
     * @param pageDimensions The dimensions of a given page in px.
     * @param fitWidth Whether the whole width of the page needs to be in the
     *     viewport.
     * @param fitHeight Whether the whole height of the page needs to be in the
     *     viewport.
     */
    private computeFittingZoom_;
    /**
     * Compute a zoom level given the dimensions to fit and the actual numbers
     * in those dimensions.
     * @param fitWidth Whether to constrain the page width to the window.
     * @param fitHeight Whether to constrain the page height to the window.
     * @param windowWidth Width of the window in px.
     * @param windowHeight Height of the window in px.
     * @param pageWidth Width of the page in px.
     * @param pageHeight Height of the page in px.
     */
    private computeFittingZoomGivenDimensions_;
    /**
     * Set the fitting type and fit within the viewport accordingly.
     * @param params Params needed to determine the page, position, and zoom for
     *     certain fitting types.
     */
    setFittingType(fittingType: FittingType, params?: FittingTypeParams): void;
    /**
     * Zoom the viewport so that the page width consumes the entire viewport.
     * @param params Optional params that may contain the page to scroll to the
     *     top of. Otherwise, remain at the current scroll position. Params may
     *     also contain the y offset from the top of the page.
     */
    fitToWidth(params?: FitToWidthParams): void;
    /**
     * Zoom the viewport so that the page height consumes the entire viewport.
     * @param params Optional params that may contain the page to scroll to the
     *     top of. Otherwise, remain at the current scroll position. Params may
     *     also contain the x offset from the left of the page.
     */
    fitToHeight(params?: FitToHeightParams): void;
    /**
     * Zoom the viewport so that a page consumes as much as of the viewport as
     * possible.
     * @param params Optional params that may contain the page to scroll to the
     *     top of. Also may contain `scrollToTop`, whether to scroll to the top of
     *     the page or not. Defaults to true. Ignored if a page value is provided.
     */
    fitToPage(params?: FitToPageParams): void;
    /** Zoom the viewport to the default zoom. */
    fitToNone(): void;
    /**
     * Zoom the viewport so that the bounding box of a page consumes the entire
     * viewport.
     * @param params Required params containing the bounding box to fit to and the
     *     page to scroll to.
     */
    fitToBoundingBox(params: FitToBoundingBoxParams): void;
    /**
     * If params.viewPosition is defined, use it as the x offset of the given
     * page.
     */
    private getBoundingBoxHeightPosition_;
    /**
     * If params.viewPosition is defined, use it as the y offset of the given
     * page.
     */
    private getBoundingBoxWidthPosition_;
    /**
     * Zoom the viewport so that the given dimension of the bounding box of a page
     * consumes the entire viewport.
     * @param params Required params containing the bounding box to fit to, the
     *     page to scroll to, and the dimension to fit to. Optionally contains the
     *     offset of the given page.
     */
    fitToBoundingBoxDimension(params: FitToBoundingBoxDimensionParams): void;
    /** Zoom out to the next predefined zoom level. */
    zoomOut(): void;
    /** Zoom in to the next predefined zoom level. */
    zoomIn(): void;
    /** Announce zoom level for screen readers. */
    private announceZoom_;
    private pageUpDownSpaceHandler_;
    private arrowLeftRightHandler_;
    private arrowUpDownHandler_;
    /**
     * Handle certain directional key events.
     * @param formFieldFocused Whether a form field is currently focused.
     * @param caretBrowsingEnabled Whether caret browsing mode is currently
     *     enabled.
     * @return Whether the event was handled.
     */
    handleDirectionalKeyEvent(e: KeyboardEvent, formFieldFocused: boolean, caretBrowsingEnabled: boolean): boolean;
    /**
     * Go to the next page. If the document is in two-up view, go to the left page
     * of the next row. Public for tests.
     */
    goToNextPage(): void;
    /**
     * Go to the previous page. If the document is in two-up view, go to the left
     * page of the previous row. Public for tests.
     */
    goToPreviousPage(): void;
    /**
     * Go to the given page index.
     * @param page the index of the page to go to. zero-based.
     */
    goToPage(page: number): void;
    /**
     * Go to the given y position in the given page index.
     * @param page the index of the page to go to. zero-based.
     */
    goToPageAndXy(page: number, x: number | undefined, y: number | undefined): void;
    setDocumentDimensions(documentDimensions: DocumentDimensions): void;
    /** Announce state of rotation, clockwise, for screen readers. */
    private announceRotation_;
    /** @return The bounds for page `page` minus the shadows. */
    getPageInsetDimensions(page: number): ViewportRect;
    /**
     * Get the coordinates of the page contents (excluding the page shadow)
     * relative to the screen.
     * @param page The index of the page to get the rect for.
     * @return A rect representing the page in screen coordinates.
     */
    getPageScreenRect(page: number): ViewportRect;
    /**
     * Check if the current fitting type is a paged mode.
     * In a paged mode, page up and page down scroll to the top of the
     * previous/next page and part of the page is under the toolbar.
     * @return Whether the current fitting type is a paged mode.
     */
    private isPagedMode_;
    /**
     * Retrieves the in-screen coordinates of the current viewport position.
     */
    private retrieveCurrentScreenCoordinates_;
    /**
     * Handles a navigation request to a destination from the current controller.
     * @param x The in-screen x coordinate for the destination.
     *     If `x` is undefined, retain current x coordinate value.
     * @param y The in-screen y coordinate for the destination.
     *     If `y` is undefined, retain current y coordinate value.
     */
    handleNavigateToDestination(page: number, x: number | undefined, y: number | undefined, zoom: number): void;
    setSmoothScrolling(isSmooth: boolean): void;
    /**
     * @param scrollData The position to scroll the viewport to, and the smooth
     *     scrolling option.
     */
    scrollTo(scrollData: Partial<ScrollData>): void;
    /** @param delta The delta by which to scroll the viewport. */
    scrollBy(delta: Point): void;
    /** Removes all events being tracked from the tracker. */
    resetTracker(): void;
    /**
     * Dispatches a gesture external to this viewport.
     */
    dispatchGesture(gesture: Gesture): void;
    /**
     * Dispatches a swipe event of |direction| external to this viewport.
     */
    dispatchSwipe(direction: SwipeDirection): void;
    /**
     * A callback that's called when an update to a pinch zoom is detected.
     */
    private onPinchUpdate_;
    /**
     * A callback that's called when the end of a pinch zoom is detected.
     */
    private onPinchEnd_;
    /**
     * A callback that's called when the start of a pinch zoom is detected.
     */
    private onPinchStart_;
    /**
     * A callback that's called when a Presentation mode wheel event is detected.
     */
    private onWheel_;
    getGestureDetectorForTesting(): GestureDetector;
    /**
     * A callback that's called when a left/right swipe is detected in
     * Presentation mode.
     */
    private onSwipe_;
    enableFullscreenForTesting(): void;
}
/**
 * Enumeration of pinch states.
 */
export declare enum PinchPhase {
    NONE = 0,
    START = 1,
    UPDATE_ZOOM_OUT = 2,
    UPDATE_ZOOM_IN = 3,
    END = 4
}
/**
 * The width of the page shadow around pages in pixels.
 */
export declare const PAGE_SHADOW: {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export {};
