/**
 * @fileoverview 'credit-card-list-entry' is a credit card row to be shown in
 * the settings page.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsCreditCardListEntryElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsCreditCardListEntryElement extends SettingsCreditCardListEntryElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** A saved credit card. */
        creditCard: {
            type: ObjectConstructor;
        };
        autofillEnableWalletBrandingEnabled_: {
            type: BooleanConstructor;
        };
        autofillEnableGradientGoogleLogosEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor creditCard: chrome.autofillPrivate.CreditCardEntry;
    protected accessor autofillEnableWalletBrandingEnabled_: boolean;
    protected accessor autofillEnableGradientGoogleLogosEnabled_: boolean;
    get dotsMenu(): HTMLElement | null;
    /**
     * Opens the credit card action menu.
     */
    protected onDotsMenuClick_(): void;
    protected onRemoteEditClick_(): void;
    protected onSummarySublabelTermsLinkClick_(): void;
    private getCardNumberDescription_;
    /**
     * @returns the title for the More Actions button corresponding to the card
     *     which is described by the nickname or the network name and last 4
     *     digits or name. If a card has CVC saved, there will be additional
     *     description to notify of the same.
     */
    protected moreActionsTitle_(): string;
    /**
     * The card has a product description or a nickname.
     */
    protected hasCardIdentifier_(): boolean;
    /**
     * The 3-dot menu should be shown if the card is not a masked server card or
     * if the card is eligible for virtual card enrollment.
     */
    protected showDots_(): boolean;
    protected shouldShowOutlinkWithWalletBranding_(): boolean;
    protected shouldShowOutlinkWithoutWalletBranding_(): boolean;
    private isVirtualCardEnrollmentEligible_;
    private isVirtualCardEnrolled_;
    protected getCardIdentifierAriaLabel_(): string;
    protected getSummaryAriaLabel_(): string;
    /**
     * Returns an aria label for the benefits terms link such as "See terms for
     * Amex ending in 0001". If no card description is available, then the
     * default text such as "See terms here" is returned.
     */
    protected getBenefitsTermsAriaLabel_(): string;
    private getCardExpiryDate_;
    /**
     * Returns expiration date.
     */
    protected getExpirationlabel_(): string;
    /**
     * Returns one of the following sublabels, based on the card's status:
     *   Virtual card enrollment tag
     *   'CVC saved' tag
     * e.g., one of the following:
     *   CVC saved
     *   Virtual card turned on
     *   Virtual card turned on | CVC saved
     */
    protected getSummarySublabel_(): string;
    protected hasSummaryAndBenefitSublabel_(): boolean;
    protected getSummaryAriaSublabel_(): string;
    private shouldShowVirtualCardSecondarySublabel_;
    protected shouldShowPaymentsIndicator_(): boolean;
    private isCardCvcAvailable_;
    protected isCardBenefitsProductUrlAvailable_(): boolean;
    protected getCardBenefitsProductUrl_(): string;
    /**
     * When the provided `imageSrc` points toward a processor's default card art,
     * this function returns a string that will scale the image based on the
     * user's screen resolution, otherwise it will return the unmodified
     * `imageSrc`.
     */
    protected getCardImage_(): string;
    protected getGooglePayLightModeLogoSrcSet_(): string;
    protected getGooglePayDarkModeLogoSrcSet_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-credit-card-list-entry': SettingsCreditCardListEntryElement;
    }
}
export {};
