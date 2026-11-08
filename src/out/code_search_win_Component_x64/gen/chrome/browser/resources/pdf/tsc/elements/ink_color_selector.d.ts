import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Color } from '../constants.js';
export interface ColorOption {
    label: string;
    color: string;
    blended: boolean;
}
declare const InkColorSelectorElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class InkColorSelectorElement extends InkColorSelectorElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        colors: {
            type: ArrayConstructor;
        };
        currentColor: {
            type: ObjectConstructor;
        };
        label: {
            type: StringConstructor;
        };
    };
    accessor colors: ColorOption[];
    accessor currentColor: Color;
    accessor label: string;
    protected onColorClick_(e: Event): void;
    protected onCrGridFocusChanged_(e: CustomEvent<HTMLElement>): void;
    focus(): void;
    protected getTabIndex_(color: string): number;
    protected isCurrentColor_(hex: string): boolean;
    protected getBlendedClass_(item: ColorOption): string;
    private setBrushColor_;
}
declare global {
    interface HTMLElementTagNameMap {
        'ink-color-selector': InkColorSelectorElement;
    }
}
export {};
