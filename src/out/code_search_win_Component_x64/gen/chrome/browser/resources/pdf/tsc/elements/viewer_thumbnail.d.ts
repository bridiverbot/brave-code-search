import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const PORTRAIT_WIDTH: number;
export declare const LANDSCAPE_WIDTH: number;
export declare const PAINTED_ATTRIBUTE: string;
export interface ViewerThumbnailElement {
    $: {
        thumbnail: HTMLElement;
    };
}
export declare class ViewerThumbnailElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        clockwiseRotations: {
            type: NumberConstructor;
        };
        isActive: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        pageNumber: {
            type: NumberConstructor;
        };
    };
    accessor clockwiseRotations: number;
    accessor isActive: boolean;
    accessor pageNumber: number;
    updated(changedProperties: PropertyValues<this>): void;
    set image(imageData: ImageData);
    clearImage(): void;
    getClickTarget(): HTMLElement;
    private getCanvas_;
    /**
     * Calculates the CSS size of the thumbnail depending on the rotation, the
     * dimensions of the image data, and the screen resolution. The plugin
     * scales the thumbnail image data by the device to pixel ratio, so that
     * scaling must be taken into account on the UI.
     */
    private getThumbnailCssSize_;
    /**
     * Focuses and scrolls the element into view.
     * The default scroll behavior of focus() acts differently than
     * scrollIntoView(), which is called in updated(). This method
     * unifies the behavior.
     */
    focusAndScroll(): void;
    isPainted(): boolean;
    setPainted(): void;
    protected onClick_(): void;
    /**
     * Sets the canvas CSS size to maintain the resolution of the thumbnail at any
     * rotation.
     */
    private styleCanvas_;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-thumbnail': ViewerThumbnailElement;
    }
}
