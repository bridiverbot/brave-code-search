import './button_label.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface HoverButtonElement {
    $: {
        hoverButton: HTMLElement;
    };
}
export declare class HoverButtonElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        ariaButtonLabel: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        labelDescription: {
            type: StringConstructor;
        };
    };
    accessor ariaButtonLabel: string | null;
    accessor label: string;
    accessor labelDescription: string | null;
    constructor();
    focus(): void;
    private onKeyDown_;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-hover-button': HoverButtonElement;
    }
}
