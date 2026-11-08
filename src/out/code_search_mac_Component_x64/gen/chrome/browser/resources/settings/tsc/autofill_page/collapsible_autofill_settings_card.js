// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'collapsible-card' is a container component used to display Autofill-related
 * settings. It can be expanded or collapsed by the user.
 */
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../ai_page/ai_logging_info_bullet.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
// 
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AiEnterpriseFeaturePrefName, ModelExecutionEnterprisePolicyValue } from '../ai_page/constants.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './collapsible_autofill_settings_card.css.js';
import { getHtml } from './collapsible_autofill_settings_card.html.js';
import { EntityDataManagerProxyImpl } from './entity_data_manager_proxy.js';
const ENHANCED_AUTOFILL_OPTED_IN_PREF_KEY = 'synthetic.settings.autofill.enhanced_autofill_opted_in';
const CollapsibleAutofillSettingsCardElementBase = PrefServiceObserverMixinLit(CrLitElement);
export class CollapsibleAutofillSettingsCardElement extends CollapsibleAutofillSettingsCardElementBase {
    static get is() {
        return 'collapsible-autofill-settings-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Controls the expanded/collapsed state of the details.
             */
            expanded_: { type: Boolean },
            /**
               Indicates if a user is eligible to change Enhanced Autofill data.
               If a user is not eligible for Enhanced Autofill (Autofill with Ai),
               but they have data saved, the code allows them only to edit and delete
               their data. They are not allowed to add new data, or to opt in or
               opt-out of Enhanced Autofill using the corresponding toggle in this
               component. If a user is not eligible for Enhanced Autofill and they
               also have no data saved, then they cannot access this page at all.
             */
            enhancedAutofillEligibleUser_: { type: Boolean },
            /**
             * Indicates whether the feature `kAutofillAiReauthRequired` is enabled.
             */
            // 
            autofillAiReauthOnViewingSensitiveDataEnabled_: { type: Boolean },
            // 
            isUserEligibleForWalletablePassDetection_: { type: Boolean },
            /**
             * If true, Autofill AI does not depend on whether Autofill for addresses
             * is enabled.
             */
            autofillSettingsEnterprisePolicyEnabled_: { type: Boolean },
            profileEnabledPref_: { type: Object },
            autofillAiEnterprisePolicyPref_: { type: Object },
        };
    }
    #expanded__accessor_storage = false;
    get expanded_() { return this.#expanded__accessor_storage; }
    set expanded_(value) { this.#expanded__accessor_storage = value; }
    #enhancedAutofillEligibleUser__accessor_storage = loadTimeData.getBoolean('userEligibleForAutofillAi');
    get enhancedAutofillEligibleUser_() { return this.#enhancedAutofillEligibleUser__accessor_storage; }
    set enhancedAutofillEligibleUser_(value) { this.#enhancedAutofillEligibleUser__accessor_storage = value; }
    #autofillAiReauthOnViewingSensitiveDataEnabled__accessor_storage = loadTimeData.getBoolean('autofillAiReauthOnViewingSensitiveDataEnabled');
    // 
    get autofillAiReauthOnViewingSensitiveDataEnabled_() { return this.#autofillAiReauthOnViewingSensitiveDataEnabled__accessor_storage; }
    set autofillAiReauthOnViewingSensitiveDataEnabled_(value) { this.#autofillAiReauthOnViewingSensitiveDataEnabled__accessor_storage = value; }
    #isUserEligibleForWalletablePassDetection__accessor_storage = loadTimeData.getBoolean('isUserEligibleForWalletablePassDetection');
    // 
    get isUserEligibleForWalletablePassDetection_() { return this.#isUserEligibleForWalletablePassDetection__accessor_storage; }
    set isUserEligibleForWalletablePassDetection_(value) { this.#isUserEligibleForWalletablePassDetection__accessor_storage = value; }
    #autofillSettingsEnterprisePolicyEnabled__accessor_storage = loadTimeData.getBoolean('AutofillSettingsEnterprisePolicyEnabled');
    get autofillSettingsEnterprisePolicyEnabled_() { return this.#autofillSettingsEnterprisePolicyEnabled__accessor_storage; }
    set autofillSettingsEnterprisePolicyEnabled_(value) { this.#autofillSettingsEnterprisePolicyEnabled__accessor_storage = value; }
    #profileEnabledPref__accessor_storage;
    get profileEnabledPref_() { return this.#profileEnabledPref__accessor_storage; }
    set profileEnabledPref_(value) { this.#profileEnabledPref__accessor_storage = value; }
    #autofillAiEnterprisePolicyPref__accessor_storage;
    get autofillAiEnterprisePolicyPref_() { return this.#autofillAiEnterprisePolicyPref__accessor_storage; }
    set autofillAiEnterprisePolicyPref_(value) { this.#autofillAiEnterprisePolicyPref__accessor_storage = value; }
    entityInstancesChangedListener_ = null;
    entityDataManager_ = EntityDataManagerProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'autofill.profile_enabled': 'profileEnabledPref_',
            [AiEnterpriseFeaturePrefName.AUTOFILL_AI]: 'autofillAiEnterprisePolicyPref_',
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.entityInstancesChangedListener_) {
            this.entityDataManager_.removeEntityInstancesChangedListener(this.entityInstancesChangedListener_);
            this.entityInstancesChangedListener_ = null;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('autofillAiEnterprisePolicyPref_') ||
            changedPrivateProperties.has('profileEnabledPref_')) {
            this.onEnterprisePolicyChanged_();
        }
    }
    onExpandedChanged_(e) {
        this.expanded_ = e.detail.value;
    }
    async onOptInToggleSettingsBooleanControlChange_() {
        // `setOptInStatus` returns false when the user tries to toggle the opt-in
        // status when they're ineligible.  This shouldn't happen usually but in
        // some cases it can happen (see crbug.com/408145195).
        this.enhancedAutofillEligibleUser_ =
            (await this.entityDataManager_.setOptInStatus(this.$.optInToggle.checked));
        if (!this.enhancedAutofillEligibleUser_) {
            PrefService.getInstance().setPrefValue(ENHANCED_AUTOFILL_OPTED_IN_PREF_KEY, false);
        }
    }
    // 
    onChangeAuthenticationRequirementClick_(e) {
        e.preventDefault();
        if (!this.enhancedAutofillEligibleUser_) {
            return;
        }
        this.entityDataManager_.toggleAutofillAiReauthRequirement();
    }
    onChangeAuthenticationRequirementChange_(e) {
        this.onChangeAuthenticationRequirementClick_(e);
    }
    // 
    /**
     * Whether an info bullet regarding logging is shown. Enhanced Autofill only
     * shows logging behaviour information for enterprise clients who have either
     * the feature disabled or just logging disabled.
     */
    showLoggingInfoBullet_() {
        return !!this.autofillAiEnterprisePolicyPref_ &&
            this.autofillAiEnterprisePolicyPref_.value !==
                ModelExecutionEnterprisePolicyValue.ALLOW;
    }
    /**
     * Observes changes to the enterprise policies for Address autofill and
     * Autofill AI keeping the component's state up to date. When the policy
     * disables the feature, updates the UI to reflect the enforced state,
     * disabling the toggle. When the policy is lifted, it asynchronously fetches
     * the user's latest opt-in status to accurately restore the toggle's state
     * without blocking the UI.
     */
    async onEnterprisePolicyChanged_() {
        if (!this.profileEnabledPref_ || !this.autofillAiEnterprisePolicyPref_) {
            return;
        }
        const addressAutofillEnabled = this.profileEnabledPref_;
        const prefService = PrefService.getInstance();
        if (!this.autofillSettingsEnterprisePolicyEnabled_ &&
            addressAutofillEnabled.enforcement ===
                chrome.settingsPrivate.Enforcement.ENFORCED &&
            !addressAutofillEnabled.value) {
            prefService.setSyntheticPref({
                key: ENHANCED_AUTOFILL_OPTED_IN_PREF_KEY,
                type: chrome.settingsPrivate.PrefType.BOOLEAN,
                enforcement: addressAutofillEnabled.enforcement,
                controlledBy: addressAutofillEnabled.controlledBy,
                // We need to check addressAutofillEnabled.value here.
                // this.enhancedAutofillEligibleUser_ does consider
                // addressAutofillEnabled.value, but loadTimeData constants are
                // refreshed only after page reload.
                value: this.enhancedAutofillEligibleUser_ && addressAutofillEnabled.value,
            });
            return;
        }
        const autofillAiPolicyValue = this.autofillAiEnterprisePolicyPref_.value;
        if (autofillAiPolicyValue === ModelExecutionEnterprisePolicyValue.DISABLE) {
            prefService.setSyntheticPref({
                key: ENHANCED_AUTOFILL_OPTED_IN_PREF_KEY,
                type: chrome.settingsPrivate.PrefType.BOOLEAN,
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
                controlledBy: chrome.settingsPrivate.ControlledBy.USER_POLICY,
                value: false,
            });
        }
        else {
            const currentValue = prefService.getPref(ENHANCED_AUTOFILL_OPTED_IN_PREF_KEY)
                .value;
            prefService.setSyntheticPref({
                key: ENHANCED_AUTOFILL_OPTED_IN_PREF_KEY,
                type: chrome.settingsPrivate.PrefType.BOOLEAN,
                value: currentValue,
            });
            const enhancedAutofillOptedIn = await this.entityDataManager_.getOptInStatus();
            prefService.setPrefValue(ENHANCED_AUTOFILL_OPTED_IN_PREF_KEY, this.autofillSettingsEnterprisePolicyEnabled_ ?
                this.enhancedAutofillEligibleUser_ && enhancedAutofillOptedIn :
                this.enhancedAutofillEligibleUser_ && enhancedAutofillOptedIn &&
                    addressAutofillEnabled.value);
        }
    }
    showExtensionControlledIndicator_() {
        if (!this.profileEnabledPref_) {
            return false;
        }
        return !!this.profileEnabledPref_.extensionId &&
            !this.profileEnabledPref_.value;
    }
    optInToggleDisabled_() {
        if (!this.profileEnabledPref_) {
            return true;
        }
        const addressAutofillEnforcedFalse = this.profileEnabledPref_.enforcement ===
            chrome.settingsPrivate.Enforcement.ENFORCED &&
            !this.profileEnabledPref_.value;
        // We need to check this.profileEnabledPref_.value here.
        // this.enhancedAutofillEligibleUser_ does consider
        // this.profileEnabledPref_.value, but loadTimeData constants are refreshed
        // only after page reload.
        return !this.enhancedAutofillEligibleUser_ || addressAutofillEnforcedFalse;
    }
}
customElements.define(CollapsibleAutofillSettingsCardElement.is, CollapsibleAutofillSettingsCardElement);
