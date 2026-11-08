import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface CheckMarkWrapperElement {
    $: {
        circle: HTMLElement;
    };
}
export declare class CheckMarkWrapperElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        checked: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        checkmarkBorderHidden: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor checked: boolean;
    accessor checkmarkBorderHidden: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-check-mark-wrapper': CheckMarkWrapperElement;
    }
}
