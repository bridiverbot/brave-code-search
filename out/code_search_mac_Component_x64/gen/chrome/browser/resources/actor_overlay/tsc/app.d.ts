import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ActorOverlayAppElement {
    $: {
        magicCursor: HTMLDivElement;
        cursorImage: HTMLDivElement;
    };
}
export declare class ActorOverlayAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        borderGlowVisible_: {
            type: BooleanConstructor;
        };
        cursorChipText_: {
            type: StringConstructor;
        };
    };
    protected accessor borderGlowVisible_: boolean;
    protected accessor cursorChipText_: string;
    private eventTracker_;
    private listenerIds_;
    private shouldShowCursor_;
    private isCursorInitialized_;
    private loadingTimerId_;
    private resizeTimerId_;
    private clickAnimationAbortController_;
    private currentX_;
    private currentY_;
    private desiredSpeedPxPerMs_;
    private minDurationMs_;
    private maxDurationMs_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onWheelEvent_;
    private handleWindowResize_;
    private onSetScrimBackground_;
    private onSetBorderGlowVisibility_;
    private onSetCursorChip_;
    private onSetTheme_;
    private cancelClickAnimation_;
    private onTriggerClickAnimation_;
    private onMoveCursorTo_;
    private startLoadingTimer_;
    setCursorTransform(drawX: number, drawY: number): void;
    getClickAnimationAbortSignal(): AbortSignal | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'actor-overlay-app': ActorOverlayAppElement;
    }
}
