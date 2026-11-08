import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_components/cr_lottie/cr_lottie.js';
import type { CrLottieElement } from 'chrome://resources/cr_components/cr_lottie/cr_lottie.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface FinishOrContinueAppElement {
    $: {
        buttonContainer: HTMLElement;
        continueEducationButton: HTMLElement;
        startBrowsingButton: HTMLElement;
        leftAnimation: CrLottieElement;
        rightAnimation: CrLottieElement;
        bottomAnimation: CrLottieElement;
    };
}
export declare class FinishOrContinueAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isDarkMode_: {
            type: BooleanConstructor;
        };
        disableAnimations_: {
            type: BooleanConstructor;
        };
    };
    protected accessor isDarkMode_: boolean;
    protected accessor disableAnimations_: boolean;
    private isFeatureShowcaseEligible_;
    private matchMediaProxy_;
    private browserProxy_;
    private introBrowserProxy_;
    private darkModeListener_;
    private matchMedia_;
    private listenerIds_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected getContinueEducationButtonLabel_(): string;
    protected getAnimationUrl_(position: 'left' | 'right' | 'bottom'): string;
    private toggleAnimations_;
    protected onStartBrowsingClick_(): void;
    protected onContinueEducationClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'finish-or-continue-app': FinishOrContinueAppElement;
    }
}
