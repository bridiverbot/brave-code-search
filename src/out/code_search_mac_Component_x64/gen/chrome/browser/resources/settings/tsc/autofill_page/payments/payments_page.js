// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
import { CvcDeletionUserAction, MetricsBrowserProxyImpl, PrivacyElementInteractions } from '../../metrics_browser_proxy.js';
import { SettingsViewMixinLit } from '../../settings_page/settings_view_mixin_lit.js';
import { AutofillPolicyDataCategory, computeEffectiveAutofillPref } from '../policy_utils.js';
import { PaymentsManagerImpl } from './payments_manager_proxy.js';
import { getCss } from './payments_page.css.js';
import { getHtml } from './payments_page.html.js';
const CREDIT_CARD_ENABLED_SYNTHETIC_PREF_KEY = 'synthetic.settings.autofill.credit_card_enabled';
const SettingsPaymentsPageElementBase = PrefServiceObserverMixinLit(SettingsViewMixinLit(I18nMixinLit(CrLitElement)));
export class SettingsPaymentsPageElement extends SettingsPaymentsPageElementBase {
    static get is() {
        return 'settings-payments-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            creditCardEnabledSyntheticPref_: { type: Object },
            /**
             * An array of all saved credit cards.
             */
            creditCards: { type: Array },
            /**
             * An array of all saved IBANs.
             */
            ibans: { type: Array },
            /**
             * An array of all saved pay over time issuers.
             */
            payOverTimeIssuers: { type: Array },
            /**
             * Whether IBAN is supported in Settings page.
             */
            showIbanSettingsEnabled_: { type: Boolean },
            /**
             * Whether Google Wallet branding should be used instead of Google Pay
             * branding.
             */
            autofillEnableWalletBrandingEnabled_: { type: Boolean },
            /**
             * The model for any credit card-related action menus or dialogs.
             */
            activeCreditCard_: { type: Object },
            /**
             * The model for any IBAN-related action menus or dialogs.
             */
            activeIban_: { type: Object },
            showCreditCardDialog_: { type: Boolean },
            showIbanDialog_: { type: Boolean },
            showLocalCreditCardRemoveConfirmationDialog_: { type: Boolean },
            showLocalIbanRemoveConfirmationDialog_: { type: Boolean },
            showVirtualCardUnenrollDialog_: { type: Boolean },
            showBulkRemoveCvcConfirmationDialog_: { type: Boolean },
            /**
             * Checks if we can use device authentication to authenticate the user.
             */
            // 
            deviceAuthAvailable_: { type: Boolean },
            // 
            /**
             * Checks if CVC storage is available based on the feature flag.
             */
            cvcStorageAvailable_: { type: Boolean },
            /**
             * Checks if a mandatory reauth feature flag is enabled.
             */
            mandatoryReauthFeatureFlagEnabled_: { type: Boolean },
            /**
             * Checks if pay over time should be shown from the settings page.
             */
            shouldShowPayOverTimeSettings_: { type: Boolean },
            prefsInitialized_: { type: Boolean },
        };
    }
    #creditCards_accessor_storage = [];
    get creditCards() { return this.#creditCards_accessor_storage; }
    set creditCards(value) { this.#creditCards_accessor_storage = value; }
    #ibans_accessor_storage = [];
    get ibans() { return this.#ibans_accessor_storage; }
    set ibans(value) { this.#ibans_accessor_storage = value; }
    #payOverTimeIssuers_accessor_storage = [];
    get payOverTimeIssuers() { return this.#payOverTimeIssuers_accessor_storage; }
    set payOverTimeIssuers(value) { this.#payOverTimeIssuers_accessor_storage = value; }
    #showIbanSettingsEnabled__accessor_storage = loadTimeData.getBoolean('showIbansSettings');
    get showIbanSettingsEnabled_() { return this.#showIbanSettingsEnabled__accessor_storage; }
    set showIbanSettingsEnabled_(value) { this.#showIbanSettingsEnabled__accessor_storage = value; }
    #creditCardEnabledSyntheticPref__accessor_storage;
    get creditCardEnabledSyntheticPref_() { return this.#creditCardEnabledSyntheticPref__accessor_storage; }
    set creditCardEnabledSyntheticPref_(value) { this.#creditCardEnabledSyntheticPref__accessor_storage = value; }
    #autofillEnableWalletBrandingEnabled__accessor_storage = loadTimeData.getBoolean('autofillEnableWalletBranding');
    get autofillEnableWalletBrandingEnabled_() { return this.#autofillEnableWalletBrandingEnabled__accessor_storage; }
    set autofillEnableWalletBrandingEnabled_(value) { this.#autofillEnableWalletBrandingEnabled__accessor_storage = value; }
    #activeCreditCard__accessor_storage = null;
    get activeCreditCard_() { return this.#activeCreditCard__accessor_storage; }
    set activeCreditCard_(value) { this.#activeCreditCard__accessor_storage = value; }
    #activeIban__accessor_storage = null;
    get activeIban_() { return this.#activeIban__accessor_storage; }
    set activeIban_(value) { this.#activeIban__accessor_storage = value; }
    #showCreditCardDialog__accessor_storage = false;
    get showCreditCardDialog_() { return this.#showCreditCardDialog__accessor_storage; }
    set showCreditCardDialog_(value) { this.#showCreditCardDialog__accessor_storage = value; }
    #showIbanDialog__accessor_storage = false;
    get showIbanDialog_() { return this.#showIbanDialog__accessor_storage; }
    set showIbanDialog_(value) { this.#showIbanDialog__accessor_storage = value; }
    #showLocalCreditCardRemoveConfirmationDialog__accessor_storage = false;
    get showLocalCreditCardRemoveConfirmationDialog_() { return this.#showLocalCreditCardRemoveConfirmationDialog__accessor_storage; }
    set showLocalCreditCardRemoveConfirmationDialog_(value) { this.#showLocalCreditCardRemoveConfirmationDialog__accessor_storage = value; }
    #showLocalIbanRemoveConfirmationDialog__accessor_storage = false;
    get showLocalIbanRemoveConfirmationDialog_() { return this.#showLocalIbanRemoveConfirmationDialog__accessor_storage; }
    set showLocalIbanRemoveConfirmationDialog_(value) { this.#showLocalIbanRemoveConfirmationDialog__accessor_storage = value; }
    #showVirtualCardUnenrollDialog__accessor_storage = false;
    get showVirtualCardUnenrollDialog_() { return this.#showVirtualCardUnenrollDialog__accessor_storage; }
    set showVirtualCardUnenrollDialog_(value) { this.#showVirtualCardUnenrollDialog__accessor_storage = value; }
    #deviceAuthAvailable__accessor_storage = loadTimeData.getBoolean('deviceAuthAvailable');
    // 
    get deviceAuthAvailable_() { return this.#deviceAuthAvailable__accessor_storage; }
    set deviceAuthAvailable_(value) { this.#deviceAuthAvailable__accessor_storage = value; }
    #cvcStorageAvailable__accessor_storage = loadTimeData.getBoolean('cvcStorageAvailable');
    // 
    get cvcStorageAvailable_() { return this.#cvcStorageAvailable__accessor_storage; }
    set cvcStorageAvailable_(value) { this.#cvcStorageAvailable__accessor_storage = value; }
    #showBulkRemoveCvcConfirmationDialog__accessor_storage = false;
    get showBulkRemoveCvcConfirmationDialog_() { return this.#showBulkRemoveCvcConfirmationDialog__accessor_storage; }
    set showBulkRemoveCvcConfirmationDialog_(value) { this.#showBulkRemoveCvcConfirmationDialog__accessor_storage = value; }
    #shouldShowPayOverTimeSettings__accessor_storage = loadTimeData.getBoolean('shouldShowPayOverTimeSettings');
    get shouldShowPayOverTimeSettings_() { return this.#shouldShowPayOverTimeSettings__accessor_storage; }
    set shouldShowPayOverTimeSettings_(value) { this.#shouldShowPayOverTimeSettings__accessor_storage = value; }
    #mandatoryReauthFeatureFlagEnabled__accessor_storage = loadTimeData.getBoolean('mandatoryReauthFeatureFlagEnabled');
    get mandatoryReauthFeatureFlagEnabled_() { return this.#mandatoryReauthFeatureFlagEnabled__accessor_storage; }
    set mandatoryReauthFeatureFlagEnabled_(value) { this.#mandatoryReauthFeatureFlagEnabled__accessor_storage = value; }
    #prefsInitialized__accessor_storage = false;
    get prefsInitialized_() { return this.#prefsInitialized__accessor_storage; }
    set prefsInitialized_(value) { this.#prefsInitialized__accessor_storage = value; }
    paymentsManager_ = PaymentsManagerImpl.getInstance();
    setPersonalDataListener_ = null;
    connectedCallback() {
        this.mirrorPref(CREDIT_CARD_ENABLED_SYNTHETIC_PREF_KEY, 'creditCardEnabledSyntheticPref_');
        this.addPrefObserver('autofill.credit_card_enabled', () => this.updateCreditCardEnabledSyntheticPref_());
        this.addPrefObserver('autofill.types_blocked', () => this.updateCreditCardEnabledSyntheticPref_());
        super.connectedCallback();
        PrefService.getInstance().whenInitialized().then(() => {
            this.prefsInitialized_ = true;
        });
        // Create listener function.
        const setCreditCardsListener = (cardList) => {
            this.setCreditCards_(cardList);
        };
        const setPersonalDataListener = (_addressList, cardList, ibanList, payOverTimeIssuerList) => {
            this.setCreditCards_(cardList);
            this.ibans = ibanList;
            if (this.shouldShowPayOverTimeSettings_) {
                this.payOverTimeIssuers = payOverTimeIssuerList;
            }
        };
        const setIbansListener = (ibanList) => {
            this.ibans = ibanList;
        };
        // Remember the bound reference in order to detach.
        this.setPersonalDataListener_ = setPersonalDataListener;
        // Request initial data.
        this.paymentsManager_.getCreditCardList().then(setCreditCardsListener);
        this.paymentsManager_.getIbanList().then(setIbansListener);
        if (this.shouldShowPayOverTimeSettings_) {
            this.paymentsManager_.getPayOverTimeIssuerList().then((issuers) => {
                this.payOverTimeIssuers = issuers;
            });
        }
        // Listen for changes.
        this.paymentsManager_.setPersonalDataManagerListener(setPersonalDataListener);
        // 
        this.paymentsManager_.checkIfDeviceAuthAvailable().then(result => this.deviceAuthAvailable_ = result);
        // 
        // Record that the user opened the payments settings.
        chrome.metricsPrivate.recordUserAction('AutofillCreditCardsViewed');
        // Measure clicks on the 'Google Account' link for managing payment methods.
        const manageAccountAnchor = this.$.manageLink.querySelector('a');
        if (manageAccountAnchor !== null) {
            manageAccountAnchor.addEventListener('click', () => {
                MetricsBrowserProxyImpl.getInstance().recordAction('Autofill.PaymentMethodsSettingsPage.ManagePaymentMethodsLinkClicked');
            });
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setPersonalDataListener_);
        this.paymentsManager_.removePersonalDataManagerListener(this.setPersonalDataListener_);
        this.setPersonalDataListener_ = null;
    }
    /**
     * Computes a synthetic preference that overlays the wildcard
     * `autofill.types_blocked` enterprise policy onto the user's
     * `autofill.credit_card_enabled` preference.
     */
    updateCreditCardEnabledSyntheticPref_() {
        const effectivePref = computeEffectiveAutofillPref(PrefService.getInstance().getPref('autofill.credit_card_enabled'), PrefService.getInstance().getPref('autofill.types_blocked'), AutofillPolicyDataCategory.PAYMENTS);
        PrefService.getInstance().setSyntheticPref({
            ...effectivePref,
            key: CREDIT_CARD_ENABLED_SYNTHETIC_PREF_KEY,
        });
    }
    /**
     * Handles user toggle changes on the payments autofill toggle. Since the
     * toggle is one-way bound to `creditCardEnabledSyntheticPref_`, we explicitly
     * update the underlying `autofill.credit_card_enabled` pref, guarding against
     * changes when policy is enforced.
     */
    onCreditCardToggleSettingsBooleanControlChange_(event) {
        // If the preference is enforced by enterprise policy, do not allow the user
        // to toggle or mutate the underlying preference value.
        if (this.creditCardEnabledSyntheticPref_?.enforcement ===
            chrome.settingsPrivate.Enforcement.ENFORCED) {
            return;
        }
        const toggle = event.target;
        PrefService.getInstance().setPrefValue('autofill.credit_card_enabled', toggle.checked);
    }
    setCreditCards_(cardList) {
        this.creditCards = cardList;
    }
    /**
     * Returns true if IBAN should be shown from settings page.
     * TODO(crbug.com/40234941): Add additional check (starter country-list, or
     * the saved-pref-boolean on if the user has submitted an IBAN form).
     */
    shouldShowIbanSettings_() {
        return this.showIbanSettingsEnabled_;
    }
    getPaymentMethodsActionMenu_() {
        const el = this.shadowRoot
            .querySelector('#paymentMethodsActionMenu');
        assert(el);
        return el.get();
    }
    /**
     * Opens the dropdown menu to add a credit/debit card or IBAN.
     */
    onAddPaymentMethodClick_(e) {
        const target = e.currentTarget;
        this.getPaymentMethodsActionMenu_().showAt(target, {
            anchorAlignmentX: AnchorAlignment.BEFORE_END,
            anchorAlignmentY: AnchorAlignment.AFTER_END,
            noOffset: true,
        });
    }
    /**
     * Opens the credit card action menu.
     */
    onDotsCardMenuClick_(e) {
        // Copy item so dialog won't update model on cancel.
        this.activeCreditCard_ = e.detail.creditCard;
        this.$.creditCardSharedMenu.showAt(e.detail.anchorElement);
    }
    /**
     * Opens the IBAN action menu.
     */
    onDotsIbanMenuClick_(e) {
        // Copy item so dialog won't update model on cancel.
        this.activeIban_ = e.detail.iban;
        this.$.ibanSharedActionMenu.get().showAt(e.detail.anchorElement);
    }
    /**
     * Handles clicking on the "Add credit card" button.
     */
    onAddCreditCardClick_(e) {
        e.preventDefault();
        const date = new Date(); // Default to current month/year.
        const expirationMonth = date.getMonth() + 1; // Months are 0 based.
        this.activeCreditCard_ = {
            expirationMonth: expirationMonth.toString(),
            expirationYear: date.getFullYear().toString(),
        };
        this.showCreditCardDialog_ = true;
        if (this.showIbanSettingsEnabled_) {
            this.getPaymentMethodsActionMenu_().close();
        }
    }
    onCreditCardDialogClose_() {
        this.showCreditCardDialog_ = false;
        this.activeCreditCard_ = null;
    }
    /**
     * Handles clicking on the add "IBAN" option.
     */
    onAddIbanClick_(e) {
        e.preventDefault();
        this.showIbanDialog_ = true;
        this.getPaymentMethodsActionMenu_().close();
    }
    onIbanDialogClose_() {
        this.showIbanDialog_ = false;
        this.activeIban_ = null;
    }
    /**
     * Handles clicking on the "Edit" credit card button.
     */
    async onMenuEditCreditCardClick_(e) {
        e.preventDefault();
        assert(this.activeCreditCard_);
        if (this.activeCreditCard_.metadata.isLocal) {
            const unmaskedCreditCard = await this.paymentsManager_.getLocalCard(this.activeCreditCard_.guid);
            assert(unmaskedCreditCard);
            this.activeCreditCard_ = unmaskedCreditCard;
            this.showCreditCardDialog_ = true;
        }
        else {
            this.onRemoteCreditCardUrlClick_();
        }
        this.$.creditCardSharedMenu.close();
    }
    onRemoteCardMenuClick_(e) {
        this.activeCreditCard_ = e.detail.creditCard;
        this.onRemoteCreditCardUrlClick_();
    }
    onRemoteCreditCardUrlClick_() {
        this.paymentsManager_.logServerCardLinkClicked();
        const url = new URL(loadTimeData.getString('managePaymentMethodsUrl'));
        assert(this.activeCreditCard_);
        if (this.activeCreditCard_.instrumentId) {
            url.searchParams.append('id', this.activeCreditCard_.instrumentId);
        }
        OpenWindowProxyImpl.getInstance().openUrl(url.toString());
    }
    onRemoteIbanMenuClick_(e) {
        this.activeIban_ = e.detail.iban;
        this.paymentsManager_.logServerIbanLinkClicked();
        const url = new URL(loadTimeData.getString('managePaymentMethodsUrl'));
        assert(this.activeIban_);
        if (this.activeIban_.instrumentId) {
            url.searchParams.append('id', this.activeIban_.instrumentId);
        }
        OpenWindowProxyImpl.getInstance().openUrl(url.toString());
    }
    onLocalCreditCardRemoveConfirmationDialogClose_() {
        // Only remove the credit card entry if the user closed the dialog via the
        // confirmation button (instead of cancel or close).
        const confirmationDialog = this.shadowRoot.querySelector('#localCardDeleteConfirmDialog');
        assert(confirmationDialog);
        if (confirmationDialog.wasConfirmed()) {
            assert(this.activeCreditCard_);
            assert(this.activeCreditCard_.guid);
            const index = this.creditCards.findIndex((card) => card.guid === this.activeCreditCard_.guid);
            if (!this.$.paymentsList.updateFocusBeforeCreditCardRemoval(index)) {
                this.focusHeaderControls_();
            }
            this.paymentsManager_.removeCreditCard(this.activeCreditCard_.guid);
            this.activeCreditCard_ = null;
        }
        this.showLocalCreditCardRemoveConfirmationDialog_ = false;
    }
    /**
     * Handles clicking on the "Remove" credit card button.
     */
    onMenuRemoveCreditCardClick_() {
        this.showLocalCreditCardRemoveConfirmationDialog_ = true;
        this.$.creditCardSharedMenu.close();
    }
    /**
     * Handles clicking on the "Edit" IBAN button.
     */
    onMenuEditIbanClick_(e) {
        e.preventDefault();
        this.showIbanDialog_ = true;
        this.$.ibanSharedActionMenu.get().close();
    }
    onLocalIbanRemoveConfirmationDialogClose_() {
        // Only remove the IBAN entry if the user closed the dialog via the
        // confirmation button (instead of cancel or close).
        const confirmationDialog = this.shadowRoot.querySelector('#localIbanDeleteConfirmationDialog');
        assert(confirmationDialog);
        if (confirmationDialog.wasConfirmed()) {
            assert(this.activeIban_);
            assert(this.activeIban_.guid);
            const index = this.ibans.findIndex((iban) => iban.guid === this.activeIban_.guid);
            if (!this.$.paymentsList.updateFocusBeforeIbanRemoval(index)) {
                this.focusHeaderControls_();
            }
            this.paymentsManager_.removeIban(this.activeIban_.guid);
            this.activeIban_ = null;
        }
        this.showLocalIbanRemoveConfirmationDialog_ = false;
    }
    /**
     * Handles clicking on the "Remove" IBAN button.
     */
    onMenuRemoveIbanClick_() {
        assert(this.activeIban_);
        this.showLocalIbanRemoveConfirmationDialog_ = true;
        this.$.ibanSharedActionMenu.get().close();
    }
    onMenuAddVirtualCardClick_() {
        this.paymentsManager_.addVirtualCard(this.activeCreditCard_.guid);
        this.$.creditCardSharedMenu.close();
        this.activeCreditCard_ = null;
    }
    onMenuRemoveVirtualCardClick_() {
        this.showVirtualCardUnenrollDialog_ = true;
        this.$.creditCardSharedMenu.close();
    }
    onVirtualCardUnenrollDialogClose_() {
        this.showVirtualCardUnenrollDialog_ = false;
        this.activeCreditCard_ = null;
    }
    /**
     * Records changes made to the "Allow sites to check if you have payment
     * methods saved" setting to a histogram.
     */
    onCanMakePaymentSettingsBooleanControlChange_() {
        MetricsBrowserProxyImpl.getInstance().recordSettingsPageHistogram(PrivacyElementInteractions.PAYMENT_METHOD);
    }
    /**
     * Listens for the save-credit-card event, and calls the private API.
     */
    onSaveCreditCard_(event) {
        this.paymentsManager_.saveCreditCard(event.detail);
    }
    onSaveIban_(event) {
        this.paymentsManager_.saveIban(event.detail);
    }
    getMenuEditCardText_() {
        if (this.activeCreditCard_?.metadata?.isLocal) {
            return this.i18n('edit');
        }
        return this.i18n(this.autofillEnableWalletBrandingEnabled_ ? 'editServerCardInWallet' :
            'editServerCard');
    }
    shouldShowAddVirtualCardButton_() {
        if (this.activeCreditCard_ === null || !this.activeCreditCard_.metadata) {
            return false;
        }
        return !!this.activeCreditCard_.metadata.isVirtualCardEnrollmentEligible &&
            !this.activeCreditCard_.metadata.isVirtualCardEnrolled;
    }
    shouldShowRemoveVirtualCardButton_() {
        if (this.activeCreditCard_ === null || !this.activeCreditCard_.metadata) {
            return false;
        }
        return !!this.activeCreditCard_.metadata.isVirtualCardEnrollmentEligible &&
            !!this.activeCreditCard_.metadata.isVirtualCardEnrolled;
    }
    /**
     * Listens for the unenroll-virtual-card event, and calls the private API.
     */
    onUnenrollVirtualCard_(event) {
        this.paymentsManager_.removeVirtualCard(event.detail);
    }
    // 
    /**
     * Checks if we should disable the mandatory reauth toggle.
     * This method checks that one of the following conditions are met:
     * 1) Pref autofill.credit_card_enabled is false
     * 2) There is no support for device authentication
     * Under any of these circumstances, we should display a disabled mandatory
     * re-auth toggle to the user.
     */
    shouldDisableAuthToggle_() {
        if (!this.prefsInitialized_) {
            return true;
        }
        const creditCardEnabled = this.creditCardEnabledSyntheticPref_?.value ||
            PrefService.getInstance()
                .getPref('autofill.credit_card_enabled')
                .value;
        return !creditCardEnabled || !this.deviceAuthAvailable_;
    }
    // 
    focusHeaderControls_() {
        const element = this.shadowRoot.querySelector('.header-aligned-button');
        if (element) {
            focusWithoutInk(element);
        }
    }
    /**
     * Checks for user auth before flipping the mandatory auth toggle.
     */
    onMandatoryAuthToggleSettingsBooleanControlChange_(e) {
        const mandatoryAuthToggle = e.target;
        assert(mandatoryAuthToggle);
        // The toggle is reset to the value when it was clicked.
        // It will be flipped afterwards if the user auth is successful.
        mandatoryAuthToggle.checked = !mandatoryAuthToggle.checked;
        this.paymentsManager_.authenticateUserAndFlipMandatoryAuthToggle();
    }
    /**
     * Method to handle the clicking of bulk delete all the CVCs.
     */
    onCvcStorageSubLabelLinkClicked_() {
        assert(this.cvcStorageAvailable_);
        // Log the metric for user clicking on the bulk delete hyperlink which
        // triggers the dialog window.
        MetricsBrowserProxyImpl.getInstance().recordAction(CvcDeletionUserAction.HYPERLINK_CLICKED);
        this.showBulkRemoveCvcConfirmationDialog_ = true;
    }
    /**
     * Method to bulk delete all the CVCs present on the local DB.
     */
    onShowBulkRemoveCvcConfirmationDialogClose_() {
        assert(this.cvcStorageAvailable_);
        const confirmationDialog = this.shadowRoot.querySelector('#bulkDeleteCvcConfirmDialog');
        assert(confirmationDialog);
        // Log the metric for user either clicking on "Delete" or "Cancel" on the
        // bulk delete dialog window.
        MetricsBrowserProxyImpl.getInstance().recordAction(confirmationDialog.wasConfirmed() ?
            CvcDeletionUserAction.DIALOG_ACCEPTED :
            CvcDeletionUserAction.DIALOG_CANCELLED);
        if (confirmationDialog.wasConfirmed()) {
            this.paymentsManager_.bulkDeleteAllCvcs();
        }
        this.showBulkRemoveCvcConfirmationDialog_ = false;
        // Focus on the CVC storage toggle, post deletion of CVCs for voice reader
        // correctness.
        const cvcStorageToggle = this.shadowRoot.querySelector('#cvcStorageToggle');
        assert(cvcStorageToggle);
        cvcStorageToggle.focus();
    }
    /**
     * Method to return the correct sublabel for the cvc storage toggle.
     * If any card from the list has a cvc, the sublabel with bulk delete
     * hyperlink is returned else return the regular sublabel.
     * @returns Cvc storage toggle sublabel string.
     */
    getCvcStorageSublabel_() {
        const card = this.creditCards.find(cc => !!cc.cvc);
        return loadTimeData.getStringF(card === undefined ? 'enableCvcStorageSublabel' :
            'enableCvcStorageDeleteDataSublabel');
    }
    /**
     * Opens an article to learn about card benefits when the card benefits toggle
     * sublabel link is clicked.
     */
    onCardBenefitsSubLabelLinkClicked_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('cardBenefitsToggleLearnMoreUrl'));
    }
    /**
     * Get the CVC storage toggle aria label for a11y voice readers.
     * @returns CVC storage aria label.
     */
    getCvcStorageAriaLabel_() {
        const card = this.creditCards.find(cc => !!cc.cvc);
        return this.i18n(card === undefined ? 'enableCvcStorageAriaLabelForNoCvcSaved' :
            'enableCvcStorageLabel');
    }
    /**
     * Get the body text for the CVC deletion dialog, depending on whether Google
     * Wallet branding is enabled or not.
     */
    getCvcDeletionDialogBodyText_() {
        return this.i18n(this.autofillEnableWalletBrandingEnabled_ ?
            'bulkRemoveCvcFromWalletConfirmationDescription' :
            'bulkRemoveCvcConfirmationDescription');
    }
    /**
     * Opens an article to learn about pay over time when the pay over time
     * toggle sublabel link is clicked.
     */
    onPayOverTimeSubLabelLinkClicked_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('autofillPayOverTimeSettingsLearnMoreUrl'));
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsPaymentsPageElement.is, SettingsPaymentsPageElement);
