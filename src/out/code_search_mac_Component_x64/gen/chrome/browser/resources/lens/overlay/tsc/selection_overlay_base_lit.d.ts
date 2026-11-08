import { EventTracker } from '//resources/js/event_tracker.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { OverlayBorderGlowElement } from './overlay_border_glow.js';
import type { OverlayShimmerCanvasElement } from './overlay_shimmer_canvas.js';
import type { PostSelectionRendererElement } from './post_selection_renderer.js';
import type { RegionSelectionElement } from './region_selection.js';
import { SelectionOverlayBaseHandler } from './selection_overlay_base_handler.js';
import { CursorType, DragFeature, GestureState } from './selection_utils.js';
import type { GestureEvent } from './selection_utils.js';
export declare const CURSOR_SIZE_PIXEL = 32;
export declare const CURSOR_IMG_URL = "--cursor-img-url";
export interface CursorData {
    cursor: CursorType;
}
declare const SelectionOverlayElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare abstract class SelectionOverlayBaseLitElement extends SelectionOverlayElementBase {
    static get properties(): {
        isScreenshotRendered: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isResized: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isInitialSize: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        canvasHeight: {
            type: NumberConstructor;
        };
        canvasWidth: {
            type: NumberConstructor;
        };
        isPointerInside: {
            type: BooleanConstructor;
        };
        currentGesture: {
            type: ObjectConstructor;
        };
        disableShimmer: {
            type: BooleanConstructor;
        };
        enableBorderGlow: {
            type: BooleanConstructor;
        };
        isClosing: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        shimmerOnSegmentation: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        shimmerFadeOutComplete: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        darkenExtraScrim: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        selectionOverlayRect: {
            type: ObjectConstructor;
        };
        hideBackgroundImageCanvas: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        sidePanelOpened: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        activeRegionId: {
            type: StringConstructor;
        };
    };
    accessor isScreenshotRendered: boolean;
    accessor isResized: boolean;
    accessor isInitialSize: boolean;
    protected accessor canvasHeight: number;
    protected accessor canvasWidth: number;
    protected accessor selectionOverlayRect: DOMRect;
    protected accessor currentGesture: GestureEvent;
    protected accessor disableShimmer: boolean;
    protected accessor enableBorderGlow: boolean;
    protected accessor isClosing: boolean;
    protected accessor darkenExtraScrim: boolean;
    protected accessor shimmerOnSegmentation: boolean;
    protected accessor shimmerFadeOutComplete: boolean;
    protected accessor sidePanelOpened: boolean;
    protected accessor hideBackgroundImageCanvas: boolean;
    protected accessor isPointerInside: boolean;
    accessor activeRegionId: string;
    protected eventTracker_: EventTracker;
    protected listenerIds: number[];
    private onOverlayReshownListenerId?;
    protected draggingRespondent: DragFeature;
    private resizeObserver;
    private matchMedia?;
    protected cursorOffsetX: number;
    protected cursorOffsetY: number;
    private hasInitialFlashAnimationEnded;
    protected baseHandler: SelectionOverlayBaseHandler;
    private regions;
    private creationOrder;
    private updateCursorPositionRequestId?;
    private onPointerMoveRequestId?;
    private handleResizeRequestId?;
    getSelectionElementColor(): string;
    getPrimaryColor(): string;
    abstract get selectionElements(): {
        backgroundImageCanvas: HTMLCanvasElement;
        cursor: HTMLElement;
        initialFlashScrim: HTMLElement;
        overlayShimmerCanvas: OverlayShimmerCanvasElement;
        postSelectionRenderer: PostSelectionRendererElement;
        regionSelectionLayer: RegionSelectionElement;
        selectionOverlay: HTMLElement;
    };
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
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
    protected getHiddenCursorClass(isPointerInside: boolean, state?: GestureState): string;
    protected setCursorToText(): void;
    protected setCursorToCrosshair(): void;
    protected setCursorToPointer(): void;
    protected resetCursor(): void;
    protected get defaultCursorIconUrl(): string;
    private onImageRendered;
    protected onPointerenter(): void;
    protected onPointerleave(): void;
    protected onPointerDown(event: PointerEvent): void;
    protected pointerDownHandled(): void;
    protected handleRightClick(event: PointerEvent): void;
    protected onPointerUp: (event: PointerEvent) => void;
    protected onPointerMove: (event: PointerEvent) => void;
    private cancelPendingDragAnimationFrame;
    protected onPointerCancel: () => void;
    protected handleGestureStart(): void;
    protected handleGestureDrag(event: PointerEvent): void;
    protected handleGestureEnd(): void;
    protected handleGestureCancel(): void;
    private handlePostSelectionUpdated;
    protected updateCanvasSize(containerWidth: number, containerHeight: number): void;
    private handleResize;
    protected updateSelectionOverlayRect(): void;
    protected resizeSelectionCanvases(newWidth: number, newHeight: number): void;
    private updateGestureCoordinates;
    protected shouldIgnoreEvent(event: PointerEvent): boolean;
    private isDragging;
    private onInitialFlashAnimationEnd;
    private screenshotDataReceived;
    protected setSidePanelOpened(): void;
    private onOverlayReshown;
    abstract getOverlayBorderGlow(): OverlayBorderGlowElement;
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
