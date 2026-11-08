import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { RegionSource } from './selection_overlay_base_handler.js';
import type { GestureEvent, Point } from './selection_utils.js';
export interface PostSelectionBoundingBox {
    top: number;
    left: number;
    width: number;
    height: number;
    polyline?: Point[];
}
export interface StaticRegion {
    id: string;
    left: string;
    top: string;
    width: string;
    height: string;
    clipPath: string;
    hasPolyline?: boolean;
}
declare enum DragTarget {
    NONE = 0,
    TOP_LEFT = 1,
    TOP_RIGHT = 2,
    BOTTOM_RIGHT = 3,
    BOTTOM_LEFT = 4
}
export declare const PERIMETER_SELECTION_PADDING_PX = 4;
export declare const MAX_CORNER_LENGTH_PX = 22;
export declare const MAX_CORNER_RADIUS_PX = 14;
export declare const CUTOUT_RADIUS_PX = 5;
export declare const MIN_BOX_SIZE_PX = 12;
export interface PostSelectionRendererElement {
    $: {
        backgroundImageCanvas: HTMLCanvasElement;
        postSelection: HTMLElement;
    };
}
declare const PostSelectionRendererElementBase: typeof PolymerElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class PostSelectionRendererElement extends PostSelectionRendererElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        top: {
            type: NumberConstructor;
            value: number;
        };
        left: {
            type: NumberConstructor;
            value: number;
        };
        height: {
            type: NumberConstructor;
            value: number;
        };
        width: {
            type: NumberConstructor;
            value: number;
        };
        currentDragTarget: {
            type: NumberConstructor;
            value: DragTarget;
        };
        cornerIds: {
            type: ArrayConstructor;
            value: () => string[];
        };
        canvasHeight: {
            type: NumberConstructor;
            reflectToAttribute: boolean;
        };
        canvasWidth: {
            type: NumberConstructor;
            reflectToAttribute: boolean;
        };
        canvasPhysicalHeight: {
            type: NumberConstructor;
            reflectToAttribute: boolean;
        };
        canvasPhysicalWidth: {
            type: NumberConstructor;
            reflectToAttribute: boolean;
        };
        regionSelectedGlowEnabled: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: () => boolean;
        };
        selectionOverlayRect: ObjectConstructor;
        shouldDarkenScrim: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        cornerSlidersEnabled: {
            type: BooleanConstructor;
            value: () => boolean;
            reflectToAttribute: boolean;
        };
        backgroundGradientHidden: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        hideHandles: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        hideCloseButton: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        multiRegionSelectionEnabled: {
            type: BooleanConstructor;
            value: () => boolean;
            reflectToAttribute: boolean;
        };
        staticRegions: {
            type: ArrayConstructor;
            value: () => never[];
        };
        activeRegionId: {
            type: StringConstructor;
            value: string;
            reflectToAttribute: boolean;
        };
        activeRegionHasPolyline: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        activePolylinePoints: {
            type: ArrayConstructor;
            value: () => never[];
        };
        selectedRegions: {
            type: ArrayConstructor;
            value: () => never[];
        };
    };
    static get observers(): string[];
    private syncActiveRegion;
    private updateHasPolyline;
    private eventTracker_;
    private top;
    private left;
    private height;
    private width;
    private currentDragTarget;
    private cornerIds;
    private canvasHeight;
    private canvasWidth;
    private canvasPhysicalHeight;
    private canvasPhysicalWidth;
    private regionSelectedGlowEnabled;
    private selectionOverlayRect;
    private backgroundGradientHidden;
    hideHandles: boolean;
    hideCloseButton: boolean;
    private multiRegionSelectionEnabled;
    private staticRegions;
    private activeRegionId;
    private activeRegionHasPolyline;
    protected activePolylinePoints: Point[];
    private selectedRegions;
    private currentScreenshot;
    private renderedCanvasElements_;
    private context;
    private listenerIds;
    private originalBounds;
    private baseHandler;
    private resizeObserver;
    private newBoxAnimation;
    private animateOnResize;
    private shouldDarkenScrim;
    private cornerSlidersEnabled;
    private sliderChangedTimeout;
    private sliderChangedTimeoutID;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handlePointerMoveForFocus;
    private onCloseActiveButtonClick;
    private onCloseButtonPointerdown;
    private onMultiRegionSelectionUpdated;
    private calculateStaticRegions;
    private selectedRegionToStaticRegion;
    private renderStaticRegionCanvases;
    setCanvasSizeTo(width: number, height: number): void;
    clearRegionSelection(): void;
    clearSelection(): void;
    handleGestureStart(event: GestureEvent): boolean;
    handleGestureDrag(event: GestureEvent): void;
    handleGestureEnd(source?: RegionSource): void;
    cancelGesture(): void;
    handleRightClick(event: PointerEvent): void;
    handleSliderChange(event: Event): void;
    private getPostSelectionStyles;
    private setDimensions;
    private updateSliderValues;
    private setSelection;
    private onRenderPostSelection;
    private getClampedBounds;
    private handleResize;
    private rerender;
    private updateCornerDimensions;
    private triggerNewBoxAnimation;
    private getNewBoxAnimationKeyframes;
    private getCornerDimensions;
    private notifyPostSelectionUpdated;
    private areBoundsChanging;
    /**
     * @return Returns the drag target at the given point.
     */
    private dragTargetFromPoint;
    private shouldHandleGestureStart;
    private getNormalizedCenterRotatedBox;
    private getScrimStyleProperties;
    hasSelection(height?: number, width?: number, activePolylinePoints?: Point[]): boolean;
    setSelectionOverlayRectForTesting(rect: DOMRect): void;
    getActiveRegionIdForTesting(): string;
    setActiveRegionIdForTesting(id: string): void;
    private showPolylineCloseButton;
}
declare global {
    interface HTMLElementTagNameMap {
        'post-selection-renderer': PostSelectionRendererElement;
    }
}
export {};
