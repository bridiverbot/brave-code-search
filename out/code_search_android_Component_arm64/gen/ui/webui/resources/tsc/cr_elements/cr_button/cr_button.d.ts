import '//resources/brave/leo.bundle.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CSSResultGroup, PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { CrRippleElement } from '../cr_ripple/cr_ripple.js';
export declare class CrButtonElement extends CrLitElement {
    static get is(): string;
    $: {
        button: HTMLElement;
        prefixIcon: HTMLSlotElement;
        suffixIcon: HTMLSlotElement;
    };
    static get styles(): CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        class: {
            type: StringConstructor;
            reflect: boolean;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        noink: {
            type: BooleanConstructor;
        };
    };
    accessor disabled: boolean;
    accessor class: string;
    accessor size: string;
    accessor noink: boolean;
    private onClick_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private classChanged;
    getRipple(): CrRippleElement;
    hasRipple(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-button': CrButtonElement;
    }
}
