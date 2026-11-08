import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
declare const CrCheckboxElementBase: typeof CrLitElement & (new (...args: any[]) => import("../cr_ripple/cr_ripple_mixin.js").CrRippleMixinInterface);
export interface CrCheckboxElement {
    $: {
        checkbox: HTMLElement;
        labelContainer: HTMLElement;
    };
}
export declare class CrCheckboxElement extends CrCheckboxElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        checked: {
            type: BooleanConstructor;
            reflect: boolean;
            notify: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        ariaDescription: {
            type: StringConstructor;
        };
        ariaLabelOverride: {
            type: StringConstructor;
        };
        tabIndex: {
            type: NumberConstructor;
        };
    };
    accessor checked: boolean;
    accessor disabled: boolean;
    accessor ariaDescription: string | null;
    accessor ariaLabelOverride: string | undefined;
    accessor tabIndex: number;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    focus(): void;
    getFocusableElement(): HTMLElement;
    protected getAriaDisabled_(): string;
    protected getAriaChecked_(): string;
    private showRipple_;
    private hideRipple_;
    private onClick_;
    protected onKeydown_(e: KeyboardEvent): void;
    protected onKeyup_(e: KeyboardEvent): void;
    createRipple(): import("../cr_ripple/cr_ripple.js").CrRippleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-checkbox': CrCheckboxElement;
    }
}
export {};
