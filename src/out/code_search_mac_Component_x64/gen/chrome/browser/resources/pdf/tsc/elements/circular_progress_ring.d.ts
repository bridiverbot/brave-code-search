import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface CircularProgressRingElement {
    $: {
        innerProgress: HTMLElement;
    };
}
export declare class CircularProgressRingElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        strokeDashOffset: {
            type: StringConstructor;
        };
        value: {
            type: NumberConstructor;
        };
    };
    accessor value: number;
    protected accessor strokeDashOffset: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'circular-progress-ring': CircularProgressRingElement;
    }
}
