import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const ROW_DELAYS: number[];
export declare function getPairDelays(initialDelay: number): number[];
export declare function getSecondGroupDelay(pairDelay: number): number;
export declare function getBottomDelay(topDelay: number): number;
export declare class GhostLoaderElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {};
}
declare global {
    interface HTMLElementTagNameMap {
        'ghost-loader': GhostLoaderElement;
    }
}
