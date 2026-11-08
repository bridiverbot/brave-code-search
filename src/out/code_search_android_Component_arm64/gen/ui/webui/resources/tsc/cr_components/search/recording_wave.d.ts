import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export interface Bar {
    level: number;
    isSpawning: boolean;
    isUnspawned: boolean;
    initialScale: number;
    spawnTimeMs: number;
    currentScaleX: number;
    currentScaleY: number;
    jitterFactor: number;
    targetHeightPx: number;
}
export interface RecordingWaveElement {
    $: {
        barsContainer: HTMLElement;
    };
}
export declare const BAR_GAP = 3;
export declare const MAX_BAR_BOUND_HEIGHT = 40;
export declare class RecordingWaveElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isListening: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        darkThemeColorsEnabled: {
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
    accessor darkThemeColorsEnabled: boolean;
    accessor transcript: string;
    accessor receivedSpeech: boolean;
    private barsData_;
    private lastDrawTimestamp_;
    private animationFrameId_;
    private containerWidth_;
    private maxBars_;
    private resizeObserver_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private animationLoop_;
}
declare global {
    interface HTMLElementTagNameMap {
        'recording-wave': RecordingWaveElement;
    }
}
