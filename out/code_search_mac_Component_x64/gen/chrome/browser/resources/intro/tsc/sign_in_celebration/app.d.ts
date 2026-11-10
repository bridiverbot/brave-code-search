import 'chrome://resources/cr_components/cr_lottie/cr_lottie.js';
import '/strings.m.js';
import type { CrLottieElement } from 'chrome://resources/cr_components/cr_lottie/cr_lottie.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SignInCelebrationUserInfo } from '../sign_in_celebration.mojom-webui.js';
export interface SignInCelebrationAppElement {
    $: {
        avatarAnimation: CrLottieElement;
        avatar: HTMLImageElement;
        title: HTMLElement;
    };
}
declare const SignInCelebrationAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SignInCelebrationAppElement extends SignInCelebrationAppElementBase {
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
        userInfo_: {
            type: ObjectConstructor;
        };
    };
    protected accessor isDarkMode_: boolean;
    protected accessor disableAnimations_: boolean;
    protected accessor userInfo_: SignInCelebrationUserInfo;
    private browserProxy_;
    private darkModeListener_;
    private matchMedia_;
    private listenerIds_;
    private isAnimationFinished_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected getAnimationUrl_(): string;
    protected onAvatarAnimationCrLottieCompleted_(): void;
    private updateUserInfo_;
}
declare global {
    interface HTMLElementTagNameMap {
        'sign-in-celebration-app': SignInCelebrationAppElement;
    }
}
export {};
