import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { GestureEvent } from './selection_utils.js';
export interface RegionSelectionElement {
    $: {
        highlightImgCanvas: HTMLCanvasElement;
        keyboardSelection: HTMLDivElement;
        regionSelectionCanvas: HTMLCanvasElement;
    };
}
declare const RegionSelectionElementBase: typeof PolymerElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class RegionSelectionElement extends RegionSelectionElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        borderGlowEnabled: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: boolean;
        };
        canvasHeight: NumberConstructor;
        canvasWidth: NumberConstructor;
        canvasPhysicalHeight: NumberConstructor;
        canvasPhysicalWidth: NumberConstructor;
        displayKeyboardSelection: {
            type: BooleanConstructor;
            value: () => boolean;
            reflectToAttribute: boolean;
        };
        hasSelected: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: boolean;
        };
        isSelecting: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: boolean;
        };
        multiRegionSelectionEnabled: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        lineSelectionEnabled: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        screenshotDataUri: StringConstructor;
        shaderLayerColorHexes: {
            type: ArrayConstructor;
            computed: string;
        };
        selectionOverlayRect: ObjectConstructor;
        regionStrokeColor1: {
            type: StringConstructor;
            value: string;
        };
        regionStrokeColor2: {
            type: StringConstructor;
            value: string;
        };
        regionStrokeColor3: {
            type: StringConstructor;
            value: string;
        };
        regionStrokeColor4: {
            type: StringConstructor;
            value: string;
        };
        regionStrokeColor5: {
            type: StringConstructor;
            value: string;
        };
    };
    private eventTracker_;
    private borderGlowEnabled;
    private canvasHeight;
    private canvasWidth;
    private canvasPhysicalHeight;
    private canvasPhysicalWidth;
    private hasSelected;
    private isSelecting;
    private context;
    private screenshotDataUri;
    private shaderLayerColorHexes;
    private selectionOverlayRect;
    private displayKeyboardSelection;
    private multiRegionSelectionEnabled;
    lineSelectionEnabled: boolean;
    private regionStrokeColor1;
    private regionStrokeColor2;
    private regionStrokeColor3;
    private regionStrokeColor4;
    private regionStrokeColor5;
    private baseHandler;
    private readonly gradientRegionStrokeEnabled;
    private readonly whiteRegionStrokeEnabled;
    private lineSelectionStrokeWidth;
    private lineSelectionColor1;
    private lineSelectionColor2;
    private lineSelectionColor3;
    private readonly tapRegionHeight;
    private readonly tapRegionWidth;
    private readonly enableKeyboardSelection;
    private currentPolylinePoints;
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private computeShaderLayerColorHexes_;
    handleGestureStart(): void;
    handleGestureDrag(event: GestureEvent): void;
    handleGestureEnd(event: GestureEvent): boolean;
    private renderPolyline;
    private onKeyboardSelection;
    private issueRequest;
    private completeSelection;
    handlePostSelectionDragGestureEnd(): void;
    handlePostSelectionCleared(): void;
    cancelGesture(): void;
    setCanvasSizeTo(width: number, height: number): void;
    private clearCanvas;
    private renderBoundingBox;
    private getNormalizedCenterRotatedBoxFromGesture;
    private getNormalizedCenterRotatedBoxFromTap;
    /**
     * @returns a mojo CenterRotatedBox corresponding to the gesture provided,
     * normalized to the selection overlay dimensions. The gesture is
     * expected to be a drag.
     */
    private getNormalizedCenterRotatedBoxFromDrag;
    private getPostSelectionRegion;
    private getPostSelectionRegionFromTap;
    private getPostSelectionRegionFromDrag;
    private getNormalizedRectangleFromTap;
    setSelectionOverlayRectForTesting(rect: DOMRect): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'region-selection': RegionSelectionElement;
    }
}
export {};
