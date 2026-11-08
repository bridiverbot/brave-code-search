import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface OverlayShimmerCanvasElement {
    $: {
        shaderCanvas: HTMLCanvasElement;
        sparklesSvg: SVGImageElement;
    };
}
export declare class OverlayShimmerCanvasElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        canvasHeight: NumberConstructor;
        canvasWidth: NumberConstructor;
        shaderLayerRgbaColors: {
            type: ArrayConstructor;
            computed: string;
        };
    };
    private canvasHeight;
    private canvasWidth;
    private shaderLayerRgbaColors;
    private circles;
    private isWiggling;
    private eventTracker_;
    private shimmerControllerStack;
    private previousPostSelection?;
    private areResultsShowing;
    private listenerIds;
    private canvasPhysicalHeight;
    private canvasPhysicalWidth;
    private canvas;
    private context;
    private shimmerAnimation;
    private cursorCenter;
    private regionCenter;
    private regionWidth;
    private regionHeight;
    private sparklesPattern;
    private sparklesOffset;
    private sparklesIntervalId?;
    private enableSparkles;
    private shimmerState;
    private animationStartTime?;
    private didLastTransitionFinish;
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onSparklesLoad;
    startAnimation(): void;
    setCanvasSizeTo(width: number, height: number): void;
    private computeShaderLayerColorRgbas;
    private stepAnimation;
    private onFocusRegion;
    private onUnfocusRegion;
    private focusRegion;
    private drawCircles;
    private drawSparkles;
    private resetCanvasSizeIfNeeded;
    private resetCanvasPixelRatioIfNeeded;
    private animateOpacityIfNeeded;
    private stepUpdateCircle;
    private drawCircle;
    private createShimmerAnimation;
    private setWiggleFrequency;
    private createStartKeyframeFromCircle;
    private createEndKeyframeFromCircle;
    private isShimmerInTransitionState;
    private setCurrentAnimationStartTimeIfNeeded;
    private getElapsedAnimationTime;
    private getEasingFunctionForCurrentState;
    private setTransitionState;
    private finishAnimationIfNeeded;
    /** Returns the expected duration of the current transition. */
    private getTransitionDuration;
    private getCurrentShimmerController;
}
declare global {
    interface HTMLElementTagNameMap {
        'overlay-shimmer-canvas': OverlayShimmerCanvasElement;
    }
}
