import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const StepIndicatorElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface StepIndicatorModel {
    active: number;
    total: number;
}
export declare class StepIndicatorElement extends StepIndicatorElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * An Object with 'active' and 'total' members, indicating the active dot
         * index and the total number of dots.
         */
        model: {
            type: ObjectConstructor;
        };
        /**
         * An array with length equal to the number of dots, for use by
         * dom-repeat. The contents of the array are unused.
         */
        dots_: {
            type: ArrayConstructor;
        };
    };
    accessor model: StepIndicatorModel | undefined;
    protected accessor dots_: void[];
    willUpdate(changedProperties: PropertyValues<this>): void;
    /** @return the screenreader label for this element. */
    protected computeA11yLabel_(): string;
    private computeDots_;
    /**
     * Returns a class for the dot at `index`, which will highlight the dot at the
     * active index.
     */
    protected getActiveClass_(index: number): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'step-indicator': StepIndicatorElement;
    }
}
export {};
