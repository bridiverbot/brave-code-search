// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-autofill-page' is the entry point for users to see
 * and manage their saved info.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './account_card.js';
import './category_reference_card.js';
import './collapsible_autofill_settings_card.js';
import '../settings_page/settings_section.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
// 
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert, assertNotReached, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { EntityTypeName } from '../autofill_ai_enums.mojom-webui.js';
import { loadTimeData } from '../i18n_setup.js';
import { MetricsBrowserProxyImpl, SuggestionsFromGeminiEntryPoint, YourSavedInfoDataCategory, YourSavedInfoDataChip, YourSavedInfoRelatedService } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { AutofillManagerImpl } from './autofill_manager_proxy.js';
import { getCss } from './autofill_page.css.js';
import { getHtml } from './autofill_page.html.js';
import { EntityDataManagerProxyImpl } from './entity_data_manager_proxy.js';
import { PasswordManagerImpl, PasswordManagerPage } from './passwords/password_manager_proxy.js';
import { PaymentsManagerImpl } from './payments/payments_manager_proxy.js';
import { DataManagementSurvey, SavedInfoHandlerImpl } from './saved_info_handler_proxy.js';
const SettingsAutofillPageElementBase = SettingsViewMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement)));
export class SettingsAutofillPageElement extends SettingsAutofillPageElementBase {
    static get is() {
        return 'settings-autofill-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            hierarchy_: { type: Object },
            isShoppingEnabled_: { type: Boolean },
            showSuggestionsFromGeminiSettings_: { type: Boolean },
            spark_: { type: String },
        };
    }
    #hierarchy__accessor_storage;
    get hierarchy_() { return this.#hierarchy__accessor_storage; }
    set hierarchy_(value) { this.#hierarchy__accessor_storage = value; }
    #isShoppingEnabled__accessor_storage = loadTimeData.getBoolean('shoppingIntegrationEnabled');
    get isShoppingEnabled_() { return this.#isShoppingEnabled__accessor_storage; }
    set isShoppingEnabled_(value) { this.#isShoppingEnabled__accessor_storage = value; }
    #showSuggestionsFromGeminiSettings__accessor_storage = loadTimeData.getBoolean('showSuggestionsFromGeminiSettings');
    get showSuggestionsFromGeminiSettings_() { return this.#showSuggestionsFromGeminiSettings__accessor_storage; }
    set showSuggestionsFromGeminiSettings_(value) { this.#showSuggestionsFromGeminiSettings__accessor_storage = value; }
    #spark__accessor_storage = 'settings20:lightbulb';
    // 
    get spark_() { return this.#spark__accessor_storage; }
    set spark_(value) { this.#spark__accessor_storage = value; }
    // 
    // 
    dataChipIdToChip_ = new Map();
    dataChipIdToCategory_ = new Map();
    availableAutofillAiTypes_ = new Set();
    paymentsManager_ = PaymentsManagerImpl.getInstance();
    autofillManager_ = AutofillManagerImpl.getInstance();
    autofillAiEntityManager_ = EntityDataManagerProxyImpl.getInstance();
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    setPersonalDataListener_ = null;
    onAutofillAiEntitiesChangedListener_ = null;
    constructor() {
        super();
        this.hierarchy_ = this.initializeDataTypeHierarchy_();
        for (const category of Object.values(this.hierarchy_)) {
            for (const chip of category.chips) {
                this.dataChipIdToChip_.set(chip.id, chip);
                this.dataChipIdToCategory_.set(chip.id, category);
            }
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.setupDataTypeCounters();
    }
    initializeDataTypeHierarchy_() {
        return {
            passwordManager: {
                id: YourSavedInfoDataCategory.PASSWORD_MANAGER,
                chips: [
                    {
                        id: YourSavedInfoDataChip.PASSWORDS,
                        label: this.i18n('passwordsLabel'),
                        icon: 'cr20:password-manager',
                        isVisibleWhenNoEntitiesOfTypeExists: () => true,
                    },
                    {
                        id: YourSavedInfoDataChip.PASSKEYS,
                        label: this.i18n('passkeysLabel'),
                        icon: 'settings20:passkey',
                        isVisibleWhenNoEntitiesOfTypeExists: () => true,
                    },
                ],
            },
            payments: {
                id: YourSavedInfoDataCategory.PAYMENTS,
                chips: [
                    {
                        id: YourSavedInfoDataChip.CREDIT_CARDS,
                        label: this.i18n('creditAndDebitCardTitle'),
                        icon: 'settings20:credit-card',
                        isVisibleWhenNoEntitiesOfTypeExists: () => true,
                    },
                    {
                        id: YourSavedInfoDataChip.IBANS,
                        label: this.i18n('ibanTitle'),
                        icon: 'settings20:iban-custom',
                        isVisibleWhenNoEntitiesOfTypeExists: () => loadTimeData.getBoolean('showIbansSettings'),
                    },
                    {
                        id: YourSavedInfoDataChip.PAY_OVER_TIME,
                        label: this.i18n('autofillPayOverTimeSettingsLabel'),
                        icon: 'settings20:hourglass',
                        isVisibleWhenNoEntitiesOfTypeExists: () => loadTimeData.getBoolean('shouldShowPayOverTimeSettings'),
                    },
                    {
                        id: YourSavedInfoDataChip.LOYALTY_CARDS,
                        label: this.i18n('loyaltyCardsTitle'),
                        icon: 'settings20:loyalty-programs',
                        isVisibleWhenNoEntitiesOfTypeExists: () => true,
                    },
                ],
            },
            contactInfo: {
                id: YourSavedInfoDataCategory.CONTACT_INFO,
                chips: [
                    {
                        id: YourSavedInfoDataChip.ADDRESSES,
                        label: this.i18n('addresses'),
                        icon: 'settings:mail-filled',
                        isVisibleWhenNoEntitiesOfTypeExists: () => true,
                    },
                ],
            },
            identityDocs: {
                id: YourSavedInfoDataCategory.IDENTITY_DOCS,
                chips: [
                    {
                        id: YourSavedInfoDataChip.DRIVERS_LICENSES,
                        label: this.i18n('yourSavedInfoDriverLicenseChip'),
                        icon: 'settings20:id-card',
                        isVisibleWhenNoEntitiesOfTypeExists: () => this.availableAutofillAiTypes_.has(EntityTypeName.kDriversLicense),
                    },
                    {
                        id: YourSavedInfoDataChip.NATIONAL_ID_CARDS,
                        label: this.i18n('yourSavedInfoNationalIdsChip'),
                        icon: 'settings20:id-card',
                        isVisibleWhenNoEntitiesOfTypeExists: () => this.availableAutofillAiTypes_.has(EntityTypeName.kNationalIdCard),
                    },
                    {
                        id: YourSavedInfoDataChip.PASSPORTS,
                        label: this.i18n('yourSavedInfoPassportChip'),
                        icon: 'settings20:passport',
                        isVisibleWhenNoEntitiesOfTypeExists: () => this.availableAutofillAiTypes_.has(EntityTypeName.kPassport),
                    },
                ],
            },
            travel: {
                id: YourSavedInfoDataCategory.TRAVEL,
                chips: [
                    {
                        id: YourSavedInfoDataChip.FLIGHT_RESERVATIONS,
                        label: this.i18n('yourSavedInfoFlightReservationsChip'),
                        icon: 'settings20:travel',
                        isVisibleWhenNoEntitiesOfTypeExists: () => false,
                    },
                    {
                        id: YourSavedInfoDataChip.TRAVEL_INFO,
                        label: this.i18n('yourSavedInfoTravelInfoChip'),
                        icon: 'privacy20:person-check',
                        isVisibleWhenNoEntitiesOfTypeExists: () => this.availableAutofillAiTypes_.has(EntityTypeName.kKnownTravelerNumber) ||
                            this.availableAutofillAiTypes_.has(EntityTypeName.kRedressNumber),
                    },
                    {
                        id: YourSavedInfoDataChip.VEHICLES,
                        label: this.i18n('yourSavedInfoVehiclesChip'),
                        icon: 'settings20:directions-car',
                        isVisibleWhenNoEntitiesOfTypeExists: () => this.availableAutofillAiTypes_.has(EntityTypeName.kVehicle),
                    },
                ],
            },
            shopping: {
                id: YourSavedInfoDataCategory.SHOPPING,
                chips: [
                    {
                        id: YourSavedInfoDataChip.ORDERS,
                        label: this.i18n('yourSavedInfoOrdersChip'),
                        icon: 'settings20:orders',
                        isVisibleWhenNoEntitiesOfTypeExists: () => this.availableAutofillAiTypes_.has(EntityTypeName.kOrder),
                    },
                    {
                        id: YourSavedInfoDataChip.SHIPMENTS,
                        label: this.i18n('yourSavedInfoShipmentsChip'),
                        icon: 'settings20:local-shipping',
                        isVisibleWhenNoEntitiesOfTypeExists: () => this.availableAutofillAiTypes_.has(EntityTypeName.kShipment),
                    },
                ],
            },
        };
    }
    setupDataTypeCounters() {
        // Password and passkey counts.
        const setPasswordCount = (count) => {
            this.setChipCount_(YourSavedInfoDataChip.PASSWORDS, count.passwordCount);
            this.setChipCount_(YourSavedInfoDataChip.PASSKEYS, count.passkeyCount);
        };
        this.addWebUiListener('password-count-changed', setPasswordCount);
        SavedInfoHandlerImpl.getInstance().getPasswordCount().then(setPasswordCount);
        // Addresses: Request initial data.
        const setAddressesListener = (addresses) => {
            this.setChipCount_(YourSavedInfoDataChip.ADDRESSES, addresses.length);
        };
        this.autofillManager_.getAddressList().then(setAddressesListener);
        // Payments: Request initial data.
        const setCreditCardsListener = (creditCards) => {
            this.setChipCount_(YourSavedInfoDataChip.CREDIT_CARDS, creditCards.length);
        };
        const setIbansListener = (ibans) => {
            this.setChipCount_(YourSavedInfoDataChip.IBANS, ibans.length);
        };
        const setPayOverTimeListener = (payOverTimeIssuers) => {
            this.setChipCount_(YourSavedInfoDataChip.PAY_OVER_TIME, payOverTimeIssuers.length);
        };
        this.paymentsManager_.getCreditCardList().then(setCreditCardsListener);
        this.paymentsManager_.getIbanList().then(setIbansListener);
        this.paymentsManager_.getPayOverTimeIssuerList().then(setPayOverTimeListener);
        // Addresses and Payments: Listen for changes.
        const setPersonalDataListener = (addresses, creditCards, ibans, payOverTimeIssuers, _accountInfo) => {
            this.setChipCount_(YourSavedInfoDataChip.ADDRESSES, addresses.length);
            this.setChipCount_(YourSavedInfoDataChip.CREDIT_CARDS, creditCards.length);
            this.setChipCount_(YourSavedInfoDataChip.IBANS, ibans.length);
            this.setChipCount_(YourSavedInfoDataChip.PAY_OVER_TIME, payOverTimeIssuers.length);
        };
        this.setPersonalDataListener_ = setPersonalDataListener;
        this.autofillManager_.setPersonalDataManagerListener(setPersonalDataListener);
        // Autofill AI entities.
        this.onAutofillAiEntitiesChangedListener_ =
            this.onAutofillAiEntitiesChanged.bind(this);
        this.autofillAiEntityManager_.addEntityInstancesChangedListener(this.onAutofillAiEntitiesChangedListener_);
        this.autofillAiEntityManager_.loadEntityInstances().then(this.onAutofillAiEntitiesChangedListener_);
        this.autofillAiEntityManager_.getWritableEntityTypes().then((entityTypes) => {
            for (const entityType of entityTypes) {
                this.availableAutofillAiTypes_.add(entityType.typeName);
            }
            this.requestUpdate();
        });
        if (this.isShoppingEnabled_) {
            this.availableAutofillAiTypes_.add(EntityTypeName.kOrder);
            this.availableAutofillAiTypes_.add(EntityTypeName.kShipment);
        }
        // Wallet: Loyalty cards count.
        const setLoyaltyCardsCount = (loyaltyCardsCount) => {
            this.setChipCount_(YourSavedInfoDataChip.LOYALTY_CARDS, loyaltyCardsCount);
        };
        this.addWebUiListener('loyalty-cards-count-changed', setLoyaltyCardsCount);
        SavedInfoHandlerImpl.getInstance().getLoyaltyCardsCount().then(setLoyaltyCardsCount);
    }
    onAutofillAiEntitiesChanged(entities) {
        const entityCounts = new Map();
        for (const entity of entities) {
            const newCount = (entityCounts.get(entity.type.typeName) || 0) + 1;
            entityCounts.set(entity.type.typeName, newCount);
        }
        this.setChipCount_(YourSavedInfoDataChip.PASSPORTS, entityCounts.get(EntityTypeName.kPassport) ?? 0);
        this.setChipCount_(YourSavedInfoDataChip.DRIVERS_LICENSES, entityCounts.get(EntityTypeName.kDriversLicense) ?? 0);
        this.setChipCount_(YourSavedInfoDataChip.VEHICLES, entityCounts.get(EntityTypeName.kVehicle) ?? 0);
        this.setChipCount_(YourSavedInfoDataChip.NATIONAL_ID_CARDS, entityCounts.get(EntityTypeName.kNationalIdCard) ?? 0);
        this.setChipCount_(YourSavedInfoDataChip.TRAVEL_INFO, (entityCounts.get(EntityTypeName.kKnownTravelerNumber) ?? 0) +
            (entityCounts.get(EntityTypeName.kRedressNumber) ?? 0));
        this.setChipCount_(YourSavedInfoDataChip.FLIGHT_RESERVATIONS, entityCounts.get(EntityTypeName.kFlightReservation) ?? 0);
        this.setChipCount_(YourSavedInfoDataChip.ORDERS, entityCounts.get(EntityTypeName.kOrder) ?? 0);
        this.setChipCount_(YourSavedInfoDataChip.SHIPMENTS, entityCounts.get(EntityTypeName.kShipment) ?? 0);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.setPersonalDataListener_) {
            this.autofillManager_.removePersonalDataManagerListener(this.setPersonalDataListener_);
            this.setPersonalDataListener_ = null;
        }
        if (this.onAutofillAiEntitiesChangedListener_) {
            this.autofillAiEntityManager_.removeEntityInstancesChangedListener(this.onAutofillAiEntitiesChangedListener_);
            this.onAutofillAiEntitiesChangedListener_ = null;
        }
    }
    // SettingsViewMixin implementation.
    getFocusConfig() {
        const map = new Map();
        if (routes.PAYMENTS) {
            map.set(routes.PAYMENTS.path, '#paymentManagerButton');
        }
        if (routes.CONTACT_INFO) {
            map.set(routes.CONTACT_INFO.path, '#addressesManagerButton');
        }
        if (routes.IDENTITY_DOCS) {
            map.set(routes.IDENTITY_DOCS.path, '#identityManagerButton');
        }
        if (routes.TRAVEL) {
            map.set(routes.TRAVEL.path, '#travelManagerButton');
        }
        if (routes.SHOPPING) {
            map.set(routes.SHOPPING.path, '#shoppingManagerButton');
        }
        if (routes.SUGGESTIONS_FROM_GEMINI) {
            map.set(routes.SUGGESTIONS_FROM_GEMINI.path, '#suggestionsFromGeminiLinkRow');
        }
        return map;
    }
    // SettingsViewMixin implementation.
    getAssociatedControlFor(childViewId) {
        let triggerId;
        switch (childViewId) {
            case 'contactInfo':
                triggerId = 'addressesManagerButton';
                break;
            // 
            case 'passkeys':
                triggerId = 'passwordManagerButton';
                break;
            // 
            case 'payments':
                triggerId = 'paymentManagerButton';
                break;
            case 'identityDocs':
                triggerId = 'identityManagerButton';
                break;
            case 'travel':
                triggerId = 'travelManagerButton';
                break;
            case 'shopping':
                triggerId = 'shoppingManagerButton';
                break;
            case 'suggestionsFromGemini':
                triggerId = 'suggestionsFromGeminiLinkRow';
                break;
            default:
                assertNotReached(`Unrecognized child view ID: ${childViewId}`);
        }
        const control = this.shadowRoot.querySelector(`#${triggerId}`);
        assert(control, `Failed to find associated control for child '${childViewId}'`);
        return control;
    }
    setChipCount_(chipId, count) {
        const chip = this.dataChipIdToChip_.get(chipId);
        chip.count = count;
        this.requestUpdate();
    }
    getVisibleChips_(chips) {
        return chips.filter(chip => chip.isVisibleWhenNoEntitiesOfTypeExists() || !!chip.count)
            .map(chip => ({ ...chip }));
    }
    hasVisibleChips_(chips) {
        return chips.some(chip => chip.isVisibleWhenNoEntitiesOfTypeExists() || !!chip.count);
    }
    onDataCategoryClick_(e) {
        const categoryId = e.detail.categoryId;
        this.metricsBrowserProxy_.recordYourSavedInfoCategoryClick(categoryId);
        this.navigateToLeafPage_(categoryId);
    }
    onDataChipClick_(e) {
        const chipId = e.detail.chipId;
        const category = this.dataChipIdToCategory_.get(chipId);
        this.metricsBrowserProxy_.recordYourSavedInfoDataChipClick(chipId);
        this.navigateToLeafPage_(category.id);
    }
    /**
     * Navigate to the settings sub page corresponding to a data category.
     */
    navigateToLeafPage_(categoryId) {
        switch (categoryId) {
            case YourSavedInfoDataCategory.PASSWORD_MANAGER:
                PasswordManagerImpl.getInstance().recordPasswordsPageAccessInSettings();
                PasswordManagerImpl.getInstance().showPasswordManager(PasswordManagerPage.PASSWORDS);
                SavedInfoHandlerImpl.getInstance().requestDataManagementSurvey(DataManagementSurvey.PASSWORDS, true);
                break;
            case YourSavedInfoDataCategory.PAYMENTS:
                Router.getInstance().navigateTo(routes.PAYMENTS);
                break;
            case YourSavedInfoDataCategory.CONTACT_INFO:
                Router.getInstance().navigateTo(routes.CONTACT_INFO);
                break;
            case YourSavedInfoDataCategory.IDENTITY_DOCS:
                Router.getInstance().navigateTo(routes.IDENTITY_DOCS);
                break;
            case YourSavedInfoDataCategory.TRAVEL:
                Router.getInstance().navigateTo(routes.TRAVEL);
                break;
            case YourSavedInfoDataCategory.SHOPPING:
                Router.getInstance().navigateTo(routes.SHOPPING);
                break;
            case YourSavedInfoDataCategory.COUNT:
                assertNotReached();
            default:
                assertNotReachedCase(categoryId);
        }
    }
    onSuggestionsFromGeminiClick_() {
        this.metricsBrowserProxy_.recordSuggestionsFromGeminiEntryPointClick(SuggestionsFromGeminiEntryPoint.YOUR_SAVED_INFO);
        Router.getInstance().navigateTo(routes.SUGGESTIONS_FROM_GEMINI);
    }
    /**
     * Opens Password Manager page on clicking a related service link.
     */
    onPasswordManagerRelatedServiceClick_() {
        this.metricsBrowserProxy_.recordYourSavedInfoRelatedServiceClick(YourSavedInfoRelatedService.GOOGLE_PASSWORD_MANAGER);
        PasswordManagerImpl.getInstance().recordPasswordsPageAccessInSettings();
        PasswordManagerImpl.getInstance().showPasswordManager(PasswordManagerPage.PASSWORDS);
        SavedInfoHandlerImpl.getInstance().requestDataManagementSurvey(DataManagementSurvey.PASSWORDS, true);
    }
    /**
     * Opens Wallet page in a new tab.
     */
    onGoogleWalletRelatedServiceClick_() {
        this.metricsBrowserProxy_.recordYourSavedInfoRelatedServiceClick(YourSavedInfoRelatedService.GOOGLE_WALLET);
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('googleWalletUrl'));
    }
    /**
     * Opens Google Account page in a new tab.
     */
    onGoogleAccountRelatedServiceClick_() {
        this.metricsBrowserProxy_.recordYourSavedInfoRelatedServiceClick(YourSavedInfoRelatedService.GOOGLE_ACCOUNT);
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('googleAccountUrl'));
    }
}
customElements.define(SettingsAutofillPageElement.is, SettingsAutofillPageElement);
