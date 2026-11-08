import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class OverlayBorderGlowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isFadingOut: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isFadingIn: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        selectionOverlayRect: {
            type: ObjectConstructor;
        };
    };
    private accessor isFadingOut;
    private accessor isFadingIn;
    private accessor selectionOverlayRect;
    protected getGradientColorStyles(): string;
    protected getBoundsStyles(): string;
    handleGestureStart(): void;
    handlePostSelectionUpdated(): void;
    handleClearSelection(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'overlay-border-glow': OverlayBorderGlowElement;
    }
}
