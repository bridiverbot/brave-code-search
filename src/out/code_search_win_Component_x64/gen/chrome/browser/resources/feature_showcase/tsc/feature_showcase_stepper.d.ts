import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_components/cr_lottie/cr_lottie.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const FeatureShowcaseStepperElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class FeatureShowcaseStepperElement extends FeatureShowcaseStepperElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        steps: {
            type: ArrayConstructor;
        };
        activeIndex: {
            type: NumberConstructor;
        };
        completedAnimationIndex_: {
            type: NumberConstructor;
        };
        useStaticCheck_: {
            type: BooleanConstructor;
        };
    };
    accessor steps: string[];
    accessor activeIndex: number;
    private forcedColorsQuery_;
    /**
     * Whether to force a static checkmark in place of the animation - either for
     * testing or for a11y reasons when forced colors mode is active.
     */
    protected accessor useStaticCheck_: boolean;
    /**
     * Steps are completed in order, so every index at or below this one is done.
     * These steps render a static checkmark.
     */
    protected accessor completedAnimationIndex_: number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onForcedColorsChanged_;
    /**
     * Only the step that just completed animates; any earlier one is already
     * static, so at most one animation runs at a time. Every operand is
     * monotonic, so a static checkmark never reverts to the animation.
     */
    protected shouldShowStaticCheck_(index: number): boolean;
    waitForAnimationComplete(): Promise<void>;
    protected onCrLottieCompleted_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'feature-showcase-stepper': FeatureShowcaseStepperElement;
    }
}
export {};
