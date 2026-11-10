import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
declare const CrMenuSelectorElementBase: typeof CrLitElement & (new (...args: any[]) => import("../cr_selectable_mixin.js").CrSelectableMixinInterface);
export declare class CrMenuSelectorElement extends CrMenuSelectorElementBase {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues): void;
    private getAllFocusableItems_;
    private onFocusin_;
    private onIronDeselected_;
    private onIronSelected_;
    private onKeydown_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-menu-selector': CrMenuSelectorElement;
    }
}
export {};
