import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SignInPromoElement {
    $: {
        acceptSignInButton: CrButtonElement;
        buttonRow: HTMLElement;
        contentArea: HTMLElement;
        declineSignInButton: CrButtonElement;
        disclaimerText: HTMLElement;
        managedDeviceDisclaimer: HTMLElement;
        safeZone: HTMLElement;
    };
}
export interface BenefitCard {
    title: string;
    description: string;
    iconId: string;
}
declare const SignInPromoElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SignInPromoElement extends SignInPromoElementBase {
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
    };
    constructor();
    private browserProxy_;
    protected accessor benefitCards_: BenefitCard[];
    private divisionLineResizeObserver_;
    protected accessor managedDeviceDisclaimer_: string;
    protected accessor isDeviceManaged_: boolean;
    private accessor anyButtonClicked_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private onViewEnterStart_;
    private toggleDivisionLine_;
    private resetButtons_;
    private handleManagedDeviceDisclaimerUpdate_;
    /**
     * Disable buttons if the device is managed until the management
     * disclaimer is loaded or if a button was clicked.
     */
    protected areButtonsDisabled_(): boolean;
    private setTranslationHeightToAlignLogoAndAnimation_;
    protected onContinueWithAccountClick_(): void;
    protected onContinueWithoutAccountClick_(): void;
    protected getDisclaimerVisibilityClass_(): "fast-fade-in" | "temporarily-hidden";
}
declare global {
    interface HTMLElementTagNameMap {
        'sign-in-promo': SignInPromoElement;
    }
}
export {};
