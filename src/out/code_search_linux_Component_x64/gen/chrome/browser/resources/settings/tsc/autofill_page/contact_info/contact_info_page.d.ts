/**
 * @fileoverview 'settings-contact-info-page' is the page containing saved
 * addresses for use in autofill and payments APIs.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../../controls/settings_toggle_button.js';
import '../../icons.html.js';
import '../../settings_page/settings_subpage.js';
import '../../simple_confirmation_dialog.js';
import '../../site_favicon.js';
import './address_edit_dialog.js';
import './address_remove_confirmation_dialog.js';
import './gmail_otp_disclaimer_dialog.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../../controls/settings_toggle_button.js';
/**
 * The enum values for the Autofill.Address.IsEnabled.Change metric.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export declare enum AutofillAddressOptInChange {
    OPT_IN = 0,
    OPT_OUT = 1,
    COUNT = 2
}
export declare const AUTOFILL_GMAIL_OTP_FILLING_ENABLED_PREF = "autofill.gmail_otp_filling.enabled";
export declare const AUTOFILL_GMAIL_OTP_OPT_IN_SETTINGS_CHANGE_METRIC = "Autofill.GmailOtpOptIn.SettingsChange";
declare global {
    interface HTMLElementEventMap {
        'save-address': CustomEvent<chrome.autofillPrivate.AddressEntry>;
    }
}
export interface SettingsContactInfoPageElement {
    $: {
        addAddress: CrButtonElement;
        addressList: HTMLElement;
        addressSharedMenu: CrActionMenuElement;
        autofillOtpFillingToggle: SettingsToggleButtonElement;
        autofillProfileToggle: SettingsToggleButtonElement;
        emailSharedMenu: CrActionMenuElement;
        menuRemoveEmail: HTMLElement;
        noAddressesLabel: HTMLElement;
        otpFillingLoadingRow: HTMLElement;
        otpFillingLoadingSpinner: HTMLElement;
        otpFillingLoadingSubLabelWithLink: HTMLElement;
    };
}
declare const SettingsContactInfoPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsContactInfoPageElement extends SettingsContactInfoPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        accountInfo_: {
            type: ObjectConstructor;
        };
        /** An array of saved addresses. */
        addresses: {
            type: ArrayConstructor;
        };
        /** The model for any address related action menus or dialogs. */
        activeAddress: {
            type: ObjectConstructor;
        };
        showAddressDialog_: {
            type: BooleanConstructor;
        };
        showAddressRemoveConfirmationDialog_: {
            type: BooleanConstructor;
        };
        showEmailRemoveConfirmationDialog_: {
            type: BooleanConstructor;
        };
        showGmailOtpDisclaimerDialog_: {
            type: BooleanConstructor;
        };
        activeEmailIssuer_: {
            type: StringConstructor;
        };
        isEmailVerificationProtocolEnabled_: {
            type: BooleanConstructor;
        };
        emailVerificationStatePref_: {
            type: ObjectConstructor;
        };
        emailVerificationAddresses_: {
            type: ArrayConstructor;
        };
        emailVerificationExpanded_: {
            type: BooleanConstructor;
        };
        /**
         * Computed field that determines if the Gmail OTP filling toggle should
         * be shown.
         */
        showGmailOtpFillingToggle_: {
            type: BooleanConstructor;
        };
        gmailOtpFillingEnabledPref_: {
            type: ObjectConstructor;
        };
        profileEnabledSyntheticPref_: {
            type: ObjectConstructor;
        };
        isOtpConsentLoading_: {
            type: BooleanConstructor;
        };
    };
    accessor addresses: chrome.autofillPrivate.AddressEntry[];
    accessor activeAddress: chrome.autofillPrivate.AddressEntry | null;
    protected accessor accountInfo_: chrome.autofillPrivate.AccountInfo | undefined;
    protected accessor showAddressDialog_: boolean;
    protected accessor showAddressRemoveConfirmationDialog_: boolean;
    protected accessor showEmailRemoveConfirmationDialog_: boolean;
    protected accessor showGmailOtpDisclaimerDialog_: boolean;
    private accessor activeEmailIssuer_;
    protected accessor isEmailVerificationProtocolEnabled_: boolean;
    private accessor emailVerificationStatePref_;
    protected accessor emailVerificationAddresses_: string[];
    protected accessor emailVerificationExpanded_: boolean;
    private accessor showGmailOtpFillingToggle_;
    private accessor gmailOtpFillingEnabledPref_;
    protected accessor profileEnabledSyntheticPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    private accessor isOtpConsentLoading_;
    private lastCheckedAccountEmail_;
    minOtpConsentSpinnerDurationMs: number;
    private emailSharedMenuModel_;
    /**
     * Computes a synthetic preference that overlays the wildcard
     * `autofill.types_blocked` enterprise policy onto the user's
     * `autofill.profile_enabled` preference.
     */
    private updateProfileEnabledSyntheticPref_;
    /**
     * Handles user toggle changes on the address autofill toggle. Since the
     * toggle is one-way bound to `profileEnabledSyntheticPref_`, we explicitly
     * update the underlying `autofill.profile_enabled` pref and record metrics,
     * guarding against changes when policy is enforced.
     */
    protected onAutofillProfileToggleSettingsBooleanControlChange_(event: Event): void;
    private autofillManager_;
    private setPersonalDataListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Returns the text for the remove button in the action menu.
     */
    protected getMenuRemoveAddressLabel_(): string;
    /**
     * Open the address action menu.
     */
    protected onAddressMenuClick_(e: Event): void;
    /**
     * Handles tapping on the "Add address" button.
     */
    protected onAddAddressClick_(e: Event): void;
    protected onAddressDialogClose_(): void;
    /**
     * Handles tapping on the "Edit" address button.
     */
    protected onMenuEditAddressClick_(e: Event): void;
    protected onAddressRemoveConfirmationDialogClose_(): void;
    /**
     * Handles tapping on the "Remove" address button.
     */
    protected onMenuRemoveAddressClick_(): void;
    /**
     * Listens for the save-address event, and calls the private API.
     */
    private saveAddress_;
    private isAccountHomeAddress_;
    private isAccountWorkAddress_;
    private isAccountNameEmailAddress_;
    protected isGoogleProfileAddress_(): boolean;
    private computeEmailVerificationAddresses_;
    protected onEmailVerificationExpandClick_(): void;
    protected onEmailVerificationExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    private onAccountHomeAddressClick_;
    private onAccountWorkAddressClick_;
    private onAccountNameEmailAddressClick_;
    protected onEmailMenuClick_(e: Event): void;
    protected onMenuRemoveEmailClick_(): void;
    protected onEmailRemoveConfirmationDialogClose_(e: Event): void;
    protected getEmailRemoveConfirmationDescription_(): string;
    protected getIssuerSite_(email: string): string;
    private isCloudOffVisible_;
    /**
     * Determines if an icon is to be shown for the given address.
     */
    protected shouldShowAddressIcon_(address: chrome.autofillPrivate.AddressEntry): boolean;
    /**
     * Determines which icon to show for a given address.
     *
     * @return The icon string or an empty string.
     */
    protected getAddressIcon_(address: chrome.autofillPrivate.AddressEntry): string;
    /**
     * Determines which a11y string to announce for a given address.
     *
     * @return The a11y string or an empty string.
     */
    protected getA11yLabelForIcon_(address: chrome.autofillPrivate.AddressEntry): string;
    /**
     * @returns the title for the More Actions button corresponding to the address
     */
    protected moreActionsTitle_(address: chrome.autofillPrivate.AddressEntry): string;
    private computeShowGmailOtpFillingToggle_;
    private getRecordTypeSuffix_;
    private recordDeletionMetrics_;
    private fetchConsentWithMinDuration_;
    fetchConsentWithMinDurationForTesting(): Promise<chrome.autofillPrivate.UserDataProcessingConsentStates>;
    protected getGmailOtpFillingDescription_(): TrustedHTML;
    protected shouldShowOtpFillingLoadingRow_(): boolean;
    protected shouldShowOtpFillingToggle_(): boolean;
    private setOtpFillingToggleChecked_;
    private resetOtpFillingState_;
    private enableOtpFilling_;
    private focusOtpFillingToggle_;
    private onGmailOtpConsentBackendNetworkError_;
    private onGmailOtpFillingPrefOrAccountChange_;
    /**
     * Handles click events for the "Learn more" link inside the description.
     * This implements standard WebUI event delegation and navigation handling:
     * 1. Filtering plain text clicks: Because the HTML with the anchor tag is
     *    injected dynamically and the listener is attached to the parent
     *    container, `target.tagName !== 'A'` ensures clicks on surrounding text
     *    are ignored.
     * 2. Allowing synthetic events: CustomEvents dispatched programmatically
     *    (e.g., keyboard activation on custom elements) bypass the tagName check.
     * 3. Preventing native navigation: `preventDefault()` prevents navigating the
     *    privileged chrome:// settings tab. URL opening is delegated to
     *    `OpenWindowProxyImpl`.
     * 4. Stopping bubbling: `stopPropagation()` prevents parent rows or toggles
     *    from triggering when the link is clicked.
     */
    protected onGmailOtpFillingLinkClick_(e: Event): void;
    protected onGmailOtpFillingSubLabelLinkClicked_(): void;
    private openGmailOtpFillingLearnMoreUrl_;
    protected onAutofillOtpFillingToggleSettingsBooleanControlChange_(event: Event): Promise<void>;
    protected onGmailOtpDisclaimerDialogClose_(): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-contact-info-page': SettingsContactInfoPageElement;
    }
}
export {};
