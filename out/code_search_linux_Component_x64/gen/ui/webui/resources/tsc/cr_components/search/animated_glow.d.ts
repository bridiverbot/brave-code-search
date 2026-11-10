import './audio_wave.js';
import './recording_wave.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { GlowAnimationState, GlowMode } from './constants.js';
export declare class SearchAnimatedGlowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        coloredTicTacVoiceAnimationEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showingOnlyCarouselOnTopOfInput: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        animationState: {
            type: StringConstructor;
            reflect: boolean;
        };
        glowMode: {
            type: StringConstructor;
            reflect: boolean;
        };
        dragDropPlaceholder: {
            type: StringConstructor;
        };
        requiresVoice: {
            type: BooleanConstructor;
        };
        isCollapsible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        transcript: {
            type: StringConstructor;
        };
        receivedSpeech: {
            type: BooleanConstructor;
        };
        isListening: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        energyEffectAnimationEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        darkThemeColorsEnabled: {
            type: BooleanConstructor;
        };
    };
    accessor animationState: GlowAnimationState;
    accessor dragDropPlaceholder: string;
    accessor glowMode: GlowMode;
    accessor requiresVoice: boolean;
    accessor isCollapsible: boolean;
    accessor transcript: string;
    accessor receivedSpeech: boolean;
    accessor coloredTicTacVoiceAnimationEnabled: boolean;
    accessor showingOnlyCarouselOnTopOfInput: boolean;
    accessor isListening: boolean;
    accessor energyEffectAnimationEnabled: boolean;
    accessor darkThemeColorsEnabled: boolean;
    protected useEnergyEffect_(): boolean;
    private targetAngle_;
    private maskCurrAngle_;
    private gradCurrAngle_;
    private isDragging_;
    private rafId_;
    private onDragOver_;
    private getAngleFromEvent_;
    private lerpAngle_;
    private renderLoop_;
    updated(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'search-animated-glow': SearchAnimatedGlowElement;
    }
}
