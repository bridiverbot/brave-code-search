/**
 * @fileoverview 'pay-over-time-issuer-list-entry' is an Pay Over Time issuer
 * row to be shown on the settings page.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../../i18n_setup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class SettingsPayOverTimeIssuerListEntryElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        payOverTimeIssuer: {
            type: ObjectConstructor;
        };
        autofillEnableWalletBrandingEnabled_: {
            type: BooleanConstructor;
        };
        autofillEnableGradientGoogleLogosEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor payOverTimeIssuer: chrome.autofillPrivate.PayOverTimeIssuerEntry;
    protected accessor autofillEnableWalletBrandingEnabled_: boolean;
    protected accessor autofillEnableGradientGoogleLogosEnabled_: boolean;
    /**
     * When the provided `imageSrc` points toward an issuer's default logo art,
     * this function returns a string that will scale the image based on the
     * user's screen resolution, otherwise it will return the unmodified
     * `imageSrc`.
     */
    protected getIssuerImage_(imageSrc?: string): string;
    protected getRemotePaymentMethodsLinkLabel_(): string;
    protected onRemoteEditClick_(): void;
    protected getGooglePayLightModeLogoSrcSet_(): string;
    protected getGooglePayDarkModeLogoSrcSet_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-pay-over-time-issuer-list-entry': SettingsPayOverTimeIssuerListEntryElement;
    }
}
