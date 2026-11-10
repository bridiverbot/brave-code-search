import '/strings.m.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { DomRepeat } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { GestureEvent } from './selection_utils.js';
export interface ObjectLayerElement {
    $: {
        highlightImgCanvas: HTMLCanvasElement;
        objectsContainer: DomRepeat;
        objectSelectionCanvas: HTMLCanvasElement;
    };
}
export declare class ObjectLayerElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        canvasHeight: NumberConstructor;
        canvasWidth: NumberConstructor;
        canvasPhysicalHeight: NumberConstructor;
        canvasPhysicalWidth: NumberConstructor;
        renderedObjects: {
            type: ArrayConstructor;
            value: () => never[];
        };
        debugMode: {
            type: BooleanConstructor;
            value: () => boolean;
            reflectToAttribute: boolean;
        };
    };
    private eventTracker_;
    private canvasHeight;
    private canvasWidth;
    private canvasPhysicalHeight;
    private canvasPhysicalWidth;
    private context;
    private renderedObjects;
    private lastPostSelection;
    private debugMode;
    private fadeOutAnimations;
    private fadeOutTimeoutIds;
    private postSelectionComparisonThreshold;
    private readonly router;
    private objectsReceivedListenerId;
    private browserProxy;
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleGestureEnd(event: GestureEvent): boolean;
    private handlePointerEnter;
    private isRegionAlreadySelected;
    private handlePointerLeave;
    setCanvasSizeTo(width: number, height: number): void;
    private drawObject;
    private clearCanvas;
    private focusShimmer;
    private onObjectsReceived;
    /** @return The CSS styles string for the given object. */
    private getObjectStyle;
    private getPostSelectionRegion;
    /**
     * @return Returns the index in renderedObjects of the object at the given
     *     point. Returns null if no object is at the given point.
     */
    private objectIndexFromPoint;
    private clearAndCancelAnimation;
    getObjectNodesForTesting(): NodeListOf<HTMLElement>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lens-object-layer': ObjectLayerElement;
    }
}
