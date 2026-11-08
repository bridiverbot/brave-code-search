/**
 * @fileoverview 'iban-list-entry' is an IBAN row to be shown on the settings
 * page.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../../i18n_setup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export type DotsIbanMenuClickEvent = CustomEvent<{
    iban: chrome.autofillPrivate.IbanEntry;
    anchorElement: HTMLElement;
}>;
export type RemoteIbanMenuClickEvent = CustomEvent<{
    iban: chrome.autofillPrivate.IbanEntry;
    anchorElement: HTMLElement;
}>;
declare global {
    interface HTMLElementEventMap {
        'dots-iban-menu-click': DotsIbanMenuClickEvent;
        'remote-iban-menu-click': RemoteIbanMenuClickEvent;
    }
}
declare const SettingsIbanListEntryElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsIbanListEntryElement extends SettingsIbanListEntryElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** A saved IBAN. */
        iban: {
            type: ObjectConstructor;
        };
        autofillEnableWalletBrandingEnabled_: {
            type: BooleanConstructor;
        };
        autofillEnableGradientGoogleLogosEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor iban: chrome.autofillPrivate.IbanEntry;
    protected accessor autofillEnableWalletBrandingEnabled_: boolean;
    protected accessor autofillEnableGradientGoogleLogosEnabled_: boolean;
    get dotsMenu(): HTMLElement | null;
    /**
     * The 3-dot menu should be shown if the IBAN is a local IBAN.
     */
    protected showDotsMenu_(): boolean;
    protected shouldShowOutlinkWithWalletBranding_(): boolean;
    protected shouldShowOutlinkWithoutWalletBranding_(): boolean;
    /**
     * The Google Payments icon should be shown if the IBAN is a server IBAN.
     */
    protected shouldShowGooglePaymentsIndicator_(): boolean;
    /**
     * Opens the IBAN action menu.
     */
    protected onDotsMenuClick_(): void;
    protected onRemoteEditClick_(): void;
    protected getA11yIbanDescription_(): string;
    protected getLabel_(): string;
    protected getSubLabel_(): string;
    /**
     * @return the title for the More Actions button corresponding to the IBAN
     *     which is described by the nickname or last 4 digits of the IBAN's
     *     value.
     */
    protected getMoreActionsTitle_(): string;
    protected getGooglePayLightModeLogoSrcSet_(): string;
    protected getGooglePayDarkModeLogoSrcSet_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-iban-list-entry': SettingsIbanListEntryElement;
    }
}
export {};
