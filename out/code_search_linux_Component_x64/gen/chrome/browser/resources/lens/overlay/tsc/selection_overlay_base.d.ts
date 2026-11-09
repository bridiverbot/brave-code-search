import './region_selection.js';
import './post_selection_renderer.js';
import './overlay_border_glow.js';
import './overlay_shimmer_canvas.js';
import '/strings.m.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import type { PolymerElementProperties } from '//resources/polymer/v3_0/polymer/interfaces.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { OverlayShimmerCanvasElement } from './overlay_shimmer_canvas.js';
import type { PostSelectionRendererElement } from './post_selection_renderer.js';
import type { RegionSelectionElement } from './region_selection.js';
import { SelectionOverlayBaseHandler } from './selection_overlay_base_handler.js';
import { CursorType, DragFeature } from './selection_utils.js';
import type { GestureEvent } from './selection_utils.js';
export declare const CURSOR_SIZE_PIXEL = 32;
export declare const CURSOR_IMG_URL = "--cursor-img-url";
export interface CursorData {
    cursor: CursorType;
}
declare const SelectionOverlayElementBase: typeof PolymerElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare abstract class SelectionOverlayBaseElement extends SelectionOverlayElementBase {
    protected abstract backgroundImageCanvas(): HTMLCanvasElement;
    protected abstract cursor(): HTMLElement;
    protected abstract initialFlashScrim(): HTMLElement;
    protected abstract overlayShimmerCanvas(): OverlayShimmerCanvasElement;
    protected abstract postSelectionRenderer(): PostSelectionRendererElement;
    protected abstract regionSelectionLayer(): RegionSelectionElement;
    protected abstract selectionOverlay(): HTMLElement;
    static get properties(): PolymerElementProperties;
    private isScreenshotRendered;
    private isResized;
    private isInitialSize;
    protected canvasHeight: number;
    protected canvasWidth: number;
    private selectionOverlayRect;
    protected currentGesture: GestureEvent;
    private disableShimmer;
    private enableBorderGlow;
    private isCoBrowsePanelWithLensOverlayEnabled;
    private isClosing;
    private darkenExtraScrim;
    private shimmerOnSegmentation;
    private shimmerFadeOutComplete;
    protected sidePanelOpened: boolean;
    private hideBackgroundImageCanvas;
    protected isPointerInside: boolean;
    private overlayBorderGlow;
    private activeAnimation?;
    protected eventTracker_: EventTracker;
    protected listenerIds: number[];
    protected draggingRespondent: DragFeature;
    private resizeObserver;
    private matchMedia?;
    protected cursorOffsetX: number;
    protected cursorOffsetY: number;
    private hasInitialFlashAnimationEnded;
    protected baseHandler: SelectionOverlayBaseHandler;
    protected activeRegionId: string;
    private updateCursorPositionRequestId?;
    private onPointerMoveRequestId?;
    private handleResizeRequestId?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    ready(): void;
    protected onActivateRegion(event: CustomEvent<{
        id: string;
    }>): void;
    private addDragListeners;
    private removeDragListeners;
    private updateDevicePixelRatioListener;
    private onDevicePixelRatioChanged;
    private updateCursorPosition;
    private updateShimmerForCursor;
    protected onIsResizedChanged(newValue: boolean): void;
    private getHiddenCursorClass;
    protected setCursorToText(): void;
    protected setCursorToCrosshair(): void;
    protected setCursorToPointer(): void;
    protected resetCursor(): void;
    private onImageRendered;
    protected handlePointerEnter(): void;
    private handlePointerLeave;
    private onPointerDown;
    protected pointerDownHandled(): void;
    protected handleRightClick(event: PointerEvent): void;
    private onPointerUp;
    private onPointerMove;
    private cancelPendingDragAnimationFrame;
    private onPointerCancel;
    protected handleGestureStart(): void;
    protected handleGestureDrag(event: PointerEvent): void;
    protected handleGestureEnd(): void;
    protected handleGestureCancel(): void;
    private handlePostSelectionUpdated;
    private updateCanvasSize;
    private handleResize;
    private updateSelectionOverlayRect;
    protected resizeSelectionCanvases(newWidth: number, newHeight: number): void;
    private updateGestureCoordinates;
    protected shouldIgnoreEvent(event: PointerEvent): boolean;
    private isDragging;
    private onInitialFlashAnimationEnd;
    /**
     * Smoothly animates the canvas from the viewport dimensions to the
     * margined dimensions.
     */
    private animateToResizedBounds;
    private screenshotDataReceived;
    protected setSidePanelOpened(): void;
    private onOverlayReshown;
    private getOverlayBorderGlow;
    protected onFinishReshowOverlay(): void;
    /**
     * Returns the bounding rect of the selection overlay. This is preferred over
     * using getBoundingClientRect() because it is a cached DOM property which
     * doesn't need to be recalculated every time.
     */
    getBoundingRect(): DOMRect;
    fetchNewScreenshotForTesting(): void;
    getHideBackgroundImageCanvasForTesting(): boolean;
}
export {};
