import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export declare const blurredRectUrl = "//resources/cr_components/search/images/eclipse_wave_blurred_rect.png";
export declare function mapToRange(value: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number, shouldClamp?: boolean): number;
export declare function weightedAverage(numArray: number[], amountToAverage: number): number;
export interface AudioWaveElement {
    $: {
        eclipseSvgWrapper: HTMLElement;
        eclipseSvg: SVGElement;
        mask: SVGMaskElement;
        thinPath: SVGPathElement;
        lowerGlowPath: SVGPathElement;
        clipPathShape: SVGPathElement;
    };
}
/**
 * Voice input visualizer.
 */
export declare class AudioWaveElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isListening: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        isExpanding_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        transcript: {
            type: StringConstructor;
        };
        receivedSpeech: {
            type: BooleanConstructor;
        };
    };
    accessor isListening: boolean;
    accessor transcript: string;
    accessor receivedSpeech: boolean;
    protected accessor isExpanding_: boolean;
    private containerWidth_;
    private animationFrameId_;
    private decayingAmplitude_;
    private frame_;
    private lastUpdateTime_;
    private lastWordCount_;
    private volumeHistory_;
    private activeSimulatedBumps_;
    private firstSyllable_;
    private resizeObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onStartListen_(): void;
    protected onStopListen_(): void;
    private processFrame;
    protected drawEclipseWavePath_(rawInputLevel: number): void;
    protected updateVolume_(): void;
    protected handleNewWords_(): void;
    protected triggerSyllableBumps_(words: string[]): void;
    protected makeSimulatedAudioBump_(durationMultiplier: number, durationOffset: number, startTime: number, maxVolMultiplier: number, maxVolOffset: number): void;
    protected getSimulatedAudioBumpsSum_(): number;
}
declare global {
    interface HTMLElementTagNameMap {
        'audio-wave': AudioWaveElement;
    }
}
