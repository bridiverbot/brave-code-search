import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ButtonLabelElement {
    $: {
        label: HTMLButtonElement;
        labelDescription: HTMLElement;
    };
}
export declare class ButtonLabelElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        label: {
            type: StringConstructor;
        };
        labelDescription: {
            type: StringConstructor;
        };
    };
    accessor label: string;
    accessor labelDescription: string | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-button-label': ButtonLabelElement;
    }
}
