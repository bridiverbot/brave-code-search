import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface CheckMarkWrapperElement {
    $: {
        svg: SVGElement;
    };
}
export declare class CheckMarkWrapperElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        checked: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor checked: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-theme-color-check-mark-wrapper': CheckMarkWrapperElement;
    }
}
