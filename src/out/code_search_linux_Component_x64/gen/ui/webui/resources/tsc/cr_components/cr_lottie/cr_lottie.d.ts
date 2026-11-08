import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * The reason cr-lottie initialized an animation. Can be either because of being
 * rendered for the first time, because the color scheme changed, or because
 * the animation asset URL changed.
 */
export type DataMessageReason = 'first-run' | 'colors-changed' | 'asset-url-changed' | 'unknown';
interface CanvasElementWithOffscreen extends HTMLCanvasElement {
    transferControlToOffscreen: () => OffscreenCanvas;
}
export interface CrLottieElement {
    $: {
        canvas: CanvasElementWithOffscreen;
    };
}
export declare class CrLottieElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        animationUrl: {
            type: StringConstructor;
        };
        autoplay: {
            type: BooleanConstructor;
        };
        dynamic: {
            type: BooleanConstructor;
        };
        hidden: {
            type: BooleanConstructor;
        };
        singleLoop: {
            type: BooleanConstructor;
        };
    };
    accessor animationUrl: string;
    accessor autoplay: boolean;
    accessor hidden: boolean;
    accessor singleLoop: boolean;
    /**
     * Whether or not the animation should render using a dynamic palette
     * taken from the computed style, or the default colors each asset comes with.
     */
    accessor dynamic: boolean;
    private canvasElement_;
    private isAnimationLoaded_;
    private offscreenCanvas_;
    /**
     * Wrapper over a Lottie JSON file that can inject new values for dynamic
     * colors at runtime.
     */
    private currentProcessor_;
    /** Whether the canvas has been transferred to the worker thread. */
    private hasTransferredCanvas_;
    private resizeObserver_;
    /**
     * The last state that was explicitly set via setPlay.
     * In case setPlay() is invoked before the animation is initialized, the
     * state is stored in this variable. Once the animation initializes, the
     * state is sent to the worker.
     */
    private playState_;
    /**
     * Whether the Worker needs to receive new size
     * information about the canvas. This is necessary for the corner case
     * when the size information is received when the animation is still being
     * loaded into the worker.
     */
    private workerNeedsSizeUpdate_;
    /**
     * The last segments that were explicitly set via playSegments.
     * In case playSegments() is invoked before the animation is initialized, the
     * segments are stored in this variable. Once the animation initializes, the
     * state is sent to the worker.
     */
    private playSegments_;
    /**
     * Whether the Worker needs to receive new control
     * information about its desired state. This is necessary for the corner
     * case when the control information is received when the animation is still
     * being loaded into the worker.
     */
    private workerNeedsPlayControlUpdate_;
    /**
     * Whether the Worker needs to receive new segments
     * information. This is necessary for the corner case when the segments
     * information is received when the animation is still being loaded into
     * the worker.
     */
    private workerNeedsPlaySegmentsUpdate_;
    /** The reason we sent the last message to the worker. */
    private lastDataMessageSendReason_;
    private worker_;
    /** The current in-flight request. */
    private xhr_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Updates the animation that is being displayed.
     */
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Controls the animation based on the value of |shouldPlay|. If the
     * animation is being loaded into the worker when this method is invoked,
     * the action will be postponed to when the animation is fully loaded.
     * @param shouldPlay True for play, false for pause.
     */
    setPlay(shouldPlay: boolean): void;
    /**
     * Plays a segment of the animation.
     * @param segments The start and end frames.
     */
    playSegments(segments: [number, number]): void;
    /**
     * Sends control (play/pause) information to the worker.
     */
    private sendPlayControlInformationToWorker_;
    /**
     * Sends segment information to the worker.
     */
    private sendPlaySegmentsInformationToWorker_;
    /**
     * Initializes all the members of this element.
     */
    private initialize_;
    /**
     * Computes the draw buffer size for the canvas. This ensures that the
     * rasterization is crisp and sharp rather than blurry.
     * @return Size of the canvas draw buffer
     */
    private getCanvasDrawBufferSize_;
    /**
     * Returns true if the |maybeValidUrl| provided is safe to use in an
     * XMLHTTPRequest.
     * @param maybeValidUrl The url string to check for validity.
     */
    private isValidUrl_;
    /**
     * Sends an XMLHTTPRequest to load a resource and runs the callback on
     * getting a successful response.
     * @param url The URL to load the resource.
     * @param responseType The type of response the request would
     *     give on success.
     * @param successCallback The callback to run
     *     when a successful response is received.
     */
    private sendXmlHttpRequest_;
    /**
     * Handles the canvas element resize event. If the animation isn't fully
     * loaded, the canvas size is sent later, once the loading is done.
     */
    private onCanvasElementResized_;
    /**
     * This informs the offscreen canvas worker of the current canvas size.
     */
    private sendCanvasSizeToWorker_;
    /**
     * Re-evaluates CSS token colors and pushes the updated animation data to the
     * worker thread whenever the color provider or theme changes.
     */
    private onColorProviderChanged_;
    /**
     * Sends the animation configuration and payload to the web worker.
     * The offscreen canvas is transferred across to the WebWorker once on initial
     * load; subsequent updates only post the updated animation data.
     */
    private sendAnimationToWorker_;
    /**
     * Initializes the animation on the web worker with the data provided.
     * @param animationData The animation that will be played.
     */
    private initAnimation_;
    /**
     * Handles the messages sent from the web worker to its parent thread.
     * @param event Event sent by the web worker.
     */
    private onMessage_;
    /**
     * Called once the animation is fully loaded into the worker. Sends any
     * size or control information that may have arrived while the animation
     * was not yet fully loaded.
     */
    private sendPendingInfo_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-lottie': CrLottieElement;
    }
}
export {};
