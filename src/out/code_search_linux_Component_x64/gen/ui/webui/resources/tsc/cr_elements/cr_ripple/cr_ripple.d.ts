import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export declare class CrRippleElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    static get properties(): {
        holdDown: {
            type: BooleanConstructor;
        };
        recenters: {
            type: BooleanConstructor;
        };
        noink: {
            type: BooleanConstructor;
        };
    };
    accessor holdDown: boolean;
    accessor recenters: boolean;
    accessor noink: boolean;
    private ripples_;
    private eventTracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    uiDownAction(e?: PointerEvent): void;
    private downAction_;
    clear(): void;
    showAndHoldDown(): void;
    private showRipple_;
    uiUpAction(): void;
    private upAction_;
    private hideRipple_;
    private onEnterKeydown_;
    private onSpaceKeydown_;
    private onSpaceKeyup_;
    private holdDownChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-ripple': CrRippleElement;
    }
}
