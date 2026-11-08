/**
 * @fileoverview 'settings-payments-page' is the page containing saved
 * credit cards for use in autofill and payments APIs.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../../controls/settings_toggle_button.js';
import '../../settings_page/settings_subpage.js';
import '../../simple_confirmation_dialog.js';
import './credit_card_edit_dialog.js';
import './iban_edit_dialog.js';
import './payments_list.js';
import './virtual_card_unenroll_dialog.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../../controls/settings_toggle_button.js';
import type { DotsIbanMenuClickEvent, RemoteIbanMenuClickEvent } from './iban_list_entry.js';
import type { SettingsPaymentsListElement } from './payments_list.js';
type DotsCardMenuClickEvent = CustomEvent<{
    creditCard: chrome.autofillPrivate.CreditCardEntry;
    anchorElement: HTMLElement;
}>;
type RemoteCardMenuClickEvent = CustomEvent<{
    creditCard: chrome.autofillPrivate.CreditCardEntry;
    anchorElement: HTMLElement;
}>;
declare global {
    interface HTMLElementEventMap {
        'dots-card-menu-click': DotsCardMenuClickEvent;
        'remote-card-menu-click': RemoteCardMenuClickEvent;
    }
}
export interface SettingsPaymentsPageElement {
    $: {
        autofillCreditCardToggle: SettingsToggleButtonElement;
        canMakePaymentToggle: SettingsToggleButtonElement;
        creditCardSharedMenu: CrActionMenuElement;
        ibanSharedActionMenu: CrLazyRenderLitElement<CrActionMenuElement>;
        manageLink: HTMLElement;
        menuEditCreditCard: HTMLElement;
        menuRemoveCreditCard: HTMLElement;
        menuAddVirtualCard: HTMLElement;
        menuRemoveVirtualCard: HTMLElement;
        paymentsList: SettingsPaymentsListElement;
    };
}
declare const SettingsPaymentsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsPaymentsPageElement extends SettingsPaymentsPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        creditCardEnabledSyntheticPref_: {
            type: ObjectConstructor;
        };
        /**
         * An array of all saved credit cards.
         */
        creditCards: {
            type: ArrayConstructor;
        };
        /**
         * An array of all saved IBANs.
         */
        ibans: {
            type: ArrayConstructor;
        };
        /**
         * An array of all saved pay over time issuers.
         */
        payOverTimeIssuers: {
            type: ArrayConstructor;
        };
        /**
         * Whether IBAN is supported in Settings page.
         */
        showIbanSettingsEnabled_: {
            type: BooleanConstructor;
        };
        /**
         * Whether Google Wallet branding should be used instead of Google Pay
         * branding.
         */
        autofillEnableWalletBrandingEnabled_: {
            type: BooleanConstructor;
        };
        /**
         * The model for any credit card-related action menus or dialogs.
         */
        activeCreditCard_: {
            type: ObjectConstructor;
        };
        /**
         * The model for any IBAN-related action menus or dialogs.
         */
        activeIban_: {
            type: ObjectConstructor;
        };
        showCreditCardDialog_: {
            type: BooleanConstructor;
        };
        showIbanDialog_: {
            type: BooleanConstructor;
        };
        showLocalCreditCardRemoveConfirmationDialog_: {
            type: BooleanConstructor;
        };
        showLocalIbanRemoveConfirmationDialog_: {
            type: BooleanConstructor;
        };
        showVirtualCardUnenrollDialog_: {
            type: BooleanConstructor;
        };
        showBulkRemoveCvcConfirmationDialog_: {
            type: BooleanConstructor;
        };
        /**
         * Checks if we can use device authentication to authenticate the user.
         */
        /**
         * Checks if CVC storage is available based on the feature flag.
         */
        cvcStorageAvailable_: {
            type: BooleanConstructor;
        };
        /**
         * Checks if a mandatory reauth feature flag is enabled.
         */
        mandatoryReauthFeatureFlagEnabled_: {
            type: BooleanConstructor;
        };
        /**
         * Checks if pay over time should be shown from the settings page.
         */
        shouldShowPayOverTimeSettings_: {
            type: BooleanConstructor;
        };
        prefsInitialized_: {
            type: BooleanConstructor;
        };
    };
    accessor creditCards: chrome.autofillPrivate.CreditCardEntry[];
    accessor ibans: chrome.autofillPrivate.IbanEntry[];
    accessor payOverTimeIssuers: chrome.autofillPrivate.PayOverTimeIssuerEntry[];
    private accessor showIbanSettingsEnabled_;
    protected accessor creditCardEnabledSyntheticPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    private accessor autofillEnableWalletBrandingEnabled_;
    protected accessor activeCreditCard_: chrome.autofillPrivate.CreditCardEntry | null;
    protected accessor activeIban_: chrome.autofillPrivate.IbanEntry | null;
    protected accessor showCreditCardDialog_: boolean;
    protected accessor showIbanDialog_: boolean;
    protected accessor showLocalCreditCardRemoveConfirmationDialog_: boolean;
    protected accessor showLocalIbanRemoveConfirmationDialog_: boolean;
    protected accessor showVirtualCardUnenrollDialog_: boolean;
    protected accessor cvcStorageAvailable_: boolean;
    protected accessor showBulkRemoveCvcConfirmationDialog_: boolean;
    protected accessor shouldShowPayOverTimeSettings_: boolean;
    protected accessor mandatoryReauthFeatureFlagEnabled_: boolean;
    private accessor prefsInitialized_;
    private paymentsManager_;
    private setPersonalDataListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Computes a synthetic preference that overlays the wildcard
     * `autofill.types_blocked` enterprise policy onto the user's
     * `autofill.credit_card_enabled` preference.
     */
    private updateCreditCardEnabledSyntheticPref_;
    /**
     * Handles user toggle changes on the payments autofill toggle. Since the
     * toggle is one-way bound to `creditCardEnabledSyntheticPref_`, we explicitly
     * update the underlying `autofill.credit_card_enabled` pref, guarding against
     * changes when policy is enforced.
     */
    protected onCreditCardToggleSettingsBooleanControlChange_(event: Event): void;
    private setCreditCards_;
    /**
     * Returns true if IBAN should be shown from settings page.
     * TODO(crbug.com/40234941): Add additional check (starter country-list, or
     * the saved-pref-boolean on if the user has submitted an IBAN form).
     */
    protected shouldShowIbanSettings_(): boolean;
    private getPaymentMethodsActionMenu_;
    /**
     * Opens the dropdown menu to add a credit/debit card or IBAN.
     */
    protected onAddPaymentMethodClick_(e: Event): void;
    /**
     * Opens the credit card action menu.
     */
    protected onDotsCardMenuClick_(e: DotsCardMenuClickEvent): void;
    /**
     * Opens the IBAN action menu.
     */
    protected onDotsIbanMenuClick_(e: DotsIbanMenuClickEvent): void;
    /**
     * Handles clicking on the "Add credit card" button.
     */
    protected onAddCreditCardClick_(e: Event): void;
    protected onCreditCardDialogClose_(): void;
    /**
     * Handles clicking on the add "IBAN" option.
     */
    protected onAddIbanClick_(e: Event): void;
    protected onIbanDialogClose_(): void;
    /**
     * Handles clicking on the "Edit" credit card button.
     */
    protected onMenuEditCreditCardClick_(e: Event): Promise<void>;
    protected onRemoteCardMenuClick_(e: RemoteCardMenuClickEvent): void;
    private onRemoteCreditCardUrlClick_;
    protected onRemoteIbanMenuClick_(e: RemoteIbanMenuClickEvent): void;
    protected onLocalCreditCardRemoveConfirmationDialogClose_(): void;
    /**
     * Handles clicking on the "Remove" credit card button.
     */
    protected onMenuRemoveCreditCardClick_(): void;
    /**
     * Handles clicking on the "Edit" IBAN button.
     */
    protected onMenuEditIbanClick_(e: Event): void;
    protected onLocalIbanRemoveConfirmationDialogClose_(): void;
    /**
     * Handles clicking on the "Remove" IBAN button.
     */
    protected onMenuRemoveIbanClick_(): void;
    protected onMenuAddVirtualCardClick_(): void;
    protected onMenuRemoveVirtualCardClick_(): void;
    protected onVirtualCardUnenrollDialogClose_(): void;
    /**
     * Records changes made to the "Allow sites to check if you have payment
     * methods saved" setting to a histogram.
     */
    protected onCanMakePaymentSettingsBooleanControlChange_(): void;
    /**
     * Listens for the save-credit-card event, and calls the private API.
     */
    protected onSaveCreditCard_(event: CustomEvent<chrome.autofillPrivate.CreditCardEntry>): void;
    protected onSaveIban_(event: CustomEvent<chrome.autofillPrivate.IbanEntry>): void;
    protected getMenuEditCardText_(): string;
    protected shouldShowAddVirtualCardButton_(): boolean;
    protected shouldShowRemoveVirtualCardButton_(): boolean;
    /**
     * Listens for the unenroll-virtual-card event, and calls the private API.
     */
    protected onUnenrollVirtualCard_(event: CustomEvent<string>): void;
    private focusHeaderControls_;
    /**
     * Checks for user auth before flipping the mandatory auth toggle.
     */
    protected onMandatoryAuthToggleSettingsBooleanControlChange_(e: Event): void;
    /**
     * Method to handle the clicking of bulk delete all the CVCs.
     */
    protected onCvcStorageSubLabelLinkClicked_(): void;
    /**
     * Method to bulk delete all the CVCs present on the local DB.
     */
    protected onShowBulkRemoveCvcConfirmationDialogClose_(): void;
    /**
     * Method to return the correct sublabel for the cvc storage toggle.
     * If any card from the list has a cvc, the sublabel with bulk delete
     * hyperlink is returned else return the regular sublabel.
     * @returns Cvc storage toggle sublabel string.
     */
    protected getCvcStorageSublabel_(): string;
    /**
     * Opens an article to learn about card benefits when the card benefits toggle
     * sublabel link is clicked.
     */
    protected onCardBenefitsSubLabelLinkClicked_(): void;
    /**
     * Get the CVC storage toggle aria label for a11y voice readers.
     * @returns CVC storage aria label.
     */
    protected getCvcStorageAriaLabel_(): string;
    /**
     * Get the body text for the CVC deletion dialog, depending on whether Google
     * Wallet branding is enabled or not.
     */
    protected getCvcDeletionDialogBodyText_(): string;
    /**
     * Opens an article to learn about pay over time when the pay over time
     * toggle sublabel link is clicked.
     */
    protected onPayOverTimeSubLabelLinkClicked_(): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-payments-page': SettingsPaymentsPageElement;
    }
}
export {};
