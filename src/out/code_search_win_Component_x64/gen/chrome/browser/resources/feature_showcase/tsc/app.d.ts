import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_components/cr_lottie/cr_lottie.js';
import '//resources/cr_elements/cr_view_manager/cr_view_manager.js';
import '/strings.m.js';
import './feature_showcase_step.js';
import './feature_showcase_stepper.js';
import './default_browser/default_browser_step.js';
import './gemini/gemini_step.js';
import './google_lens/google_lens_step.js';
import './themes_and_customization/themes_and_customization_step.js';
import './password_manager/password_manager_step.js';
import type { CrLottieElement } from '//resources/cr_components/cr_lottie/cr_lottie.js';
import type { CrViewManagerElement } from '//resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface FeatureShowcaseAppElement {
    $: {
        viewManager: CrViewManagerElement;
        rightAnimation: CrLottieElement;
        bottomAnimation: CrLottieElement;
    };
}
export declare class FeatureShowcaseAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        activeStepIndex: {
            type: NumberConstructor;
        };
        steps: {
            type: ArrayConstructor;
        };
        areButtonsDisabled_: {
            type: BooleanConstructor;
        };
        isDarkMode_: {
            type: BooleanConstructor;
        };
    };
    accessor activeStepIndex: number;
    accessor steps: string[];
    protected accessor areButtonsDisabled_: boolean;
    protected accessor isDarkMode_: boolean;
    private matchMedia_;
    private darkModeListener_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    protected getAnimationUrl_(position: 'right' | 'bottom'): string;
    protected hasStep_(stepId: string): boolean;
    protected onStepCompleted_(e: Event): void;
    private notifyStepShown_;
    private tryPlayingTransitionAnimations;
}
declare global {
    interface HTMLElementTagNameMap {
        'feature-showcase-app': FeatureShowcaseAppElement;
    }
}
