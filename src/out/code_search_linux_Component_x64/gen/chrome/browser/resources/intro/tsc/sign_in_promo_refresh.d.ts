import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_components/cr_lottie/cr_lottie.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import type { CrLottieElement } from 'chrome://resources/cr_components/cr_lottie/cr_lottie.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SignInPromoRefreshElement {
    $: {
        leftAnimation: CrLottieElement;
        rightAnimation: CrLottieElement;
        bottomAnimation: CrLottieElement;
        acceptSignInButton: CrButtonElement;
        declineSignInButton: CrButtonElement;
        disclaimerText: HTMLElement;
        managedDeviceDisclaimer: HTMLElement;
    };
}
export interface BenefitCard {
    title: string;
    description: string;
    iconId: string;
}
declare const SignInPromoRefreshElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SignInPromoRefreshElement extends SignInPromoRefreshElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The list of benefits the user will get when signed in to Chrome
         */
        benefitCards_: {
            type: ArrayConstructor;
        };
        managedDeviceDisclaimer_: {
            type: StringConstructor;
        };
        isDeviceManaged_: {
            type: BooleanConstructor;
        };
        anyButtonClicked_: {
            type: BooleanConstructor;
        };
        shouldDisableAnimations_: {
            type: BooleanConstructor;
        };
        isPreFirstRunDesktopRefreshEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isDarkMode_: {
            type: BooleanConstructor;
        };
    };
    protected accessor benefitCards_: BenefitCard[];
    protected accessor managedDeviceDisclaimer_: string;
    protected accessor isDeviceManaged_: boolean;
    protected accessor isPreFirstRunDesktopRefreshEnabled_: boolean;
    protected accessor shouldDisableAnimations_: boolean;
    protected accessor isDarkMode_: boolean;
    private accessor anyButtonClicked_;
    private introBrowserProxy_;
    private browserProxy_;
    private darkModeListener_;
    private matchMedia_;
    private signInPromoListenerIds_;
    private introListenerIds_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private resetButtons_;
    private onManagedDeviceDisclaimerUpdated_;
    /**
     * Disable buttons if the device is managed until the management
     * disclaimer is loaded or if a button was clicked.
     */
    protected shouldDisableButtons_(): boolean;
    protected onAcceptSignInButtonClick_(): void;
    protected onDeclineSignInButtonClick_(): void;
    /**
     * To keep the layout stable during animations, for managed devices it is
     * invisible while we're fetching the text to display.
     */
    protected getDisclaimerVisibilityClass_(): string;
    protected getAnimationUrl_(position: 'left' | 'right' | 'bottom'): string;
    private toggleAnimations_;
}
declare global {
    interface HTMLElementTagNameMap {
        'sign-in-promo-refresh': SignInPromoRefreshElement;
    }
}
export {};
