// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-shopping-page', is a subpage of the "Your saved info"
 * section. It manages the user's autofill data for shopping. Users can view and
 * hide their saved orders and shipments as well as opt out of the autofill
 * functionality entirely.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../../controls/settings_toggle_button.js';
import '../../settings_page/settings_subpage.js';
import '../autofill_ai_entries_list.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AiEnterpriseFeaturePrefName } from '../../ai_page/constants.js';
import { EntityTypeName } from '../../autofill_ai_enums.mojom-webui.js';
import { loadTimeData } from '../../i18n_setup.js';
import { MetricsBrowserProxyImpl, SuggestionsFromGeminiEntryPoint } from '../../metrics_browser_proxy.js';
import { routes } from '../../route.js';
import { Router } from '../../router.js';
import { SettingsViewMixinLit } from '../../settings_page/settings_view_mixin_lit.js';
import { AutofillPolicyDataCategory, checkAutofillPoliciesAndModifyPrefIfNecessary } from '../policy_utils.js';
import { getCss } from './shopping_page.css.js';
import { getHtml } from './shopping_page.html.js';
const SHOPPING_OPTED_IN_PREF_KEY = 'synthetic.settings.autofill.shopping_opted_in';
const SettingsShoppingPageElementBase = SettingsViewMixinLit(PrefServiceObserverMixinLit(CrLitElement));
export class SettingsShoppingPageElement extends SettingsShoppingPageElementBase {
    static get is() {
        return 'settings-shopping-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            allowedEntityTypes_: { type: Object },
            /**
             * If true, Autofill AI does not depend on whether Autofill for addresses
             * is enabled.
             */
            autofillSettingsEnterprisePolicyEnabled_: { type: Boolean },
            canEnableOrDisableAutofillAi_: { type: Boolean },
            metricEntityTypes_: { type: Object },
            profileEnabledPref_: { type: Object },
            /**
             * Fake preference used by `this.$.optInToggle`. Shows value of
             * `autofill.autofill_ai.shopping_entities_enabled` preference if toggle
             * is enabled (clickable). If toggle is disabled then the value is
             * overridden to be shown as false even if the preference is true.
             */
            shoppingOptedInPref_: { type: Object },
            showSuggestionsFromGeminiSettings_: { type: Boolean },
        };
    }
    #allowedEntityTypes__accessor_storage = new Set([
        EntityTypeName.kOrder,
        EntityTypeName.kShipment,
    ]);
    get allowedEntityTypes_() { return this.#allowedEntityTypes__accessor_storage; }
    set allowedEntityTypes_(value) { this.#allowedEntityTypes__accessor_storage = value; }
    #metricEntityTypes__accessor_storage = {
        [EntityTypeName.kOrder]: 'Order',
        [EntityTypeName.kShipment]: 'Shipment',
    };
    get metricEntityTypes_() { return this.#metricEntityTypes__accessor_storage; }
    set metricEntityTypes_(value) { this.#metricEntityTypes__accessor_storage = value; }
    #canEnableOrDisableAutofillAi__accessor_storage = loadTimeData.getBoolean('canEnableOrDisableAutofillAi');
    get canEnableOrDisableAutofillAi_() { return this.#canEnableOrDisableAutofillAi__accessor_storage; }
    set canEnableOrDisableAutofillAi_(value) { this.#canEnableOrDisableAutofillAi__accessor_storage = value; }
    #shoppingOptedInPref__accessor_storage;
    get shoppingOptedInPref_() { return this.#shoppingOptedInPref__accessor_storage; }
    set shoppingOptedInPref_(value) { this.#shoppingOptedInPref__accessor_storage = value; }
    #autofillSettingsEnterprisePolicyEnabled__accessor_storage = loadTimeData.getBoolean('AutofillSettingsEnterprisePolicyEnabled');
    get autofillSettingsEnterprisePolicyEnabled_() { return this.#autofillSettingsEnterprisePolicyEnabled__accessor_storage; }
    set autofillSettingsEnterprisePolicyEnabled_(value) { this.#autofillSettingsEnterprisePolicyEnabled__accessor_storage = value; }
    #profileEnabledPref__accessor_storage = null;
    get profileEnabledPref_() { return this.#profileEnabledPref__accessor_storage; }
    set profileEnabledPref_(value) { this.#profileEnabledPref__accessor_storage = value; }
    #showSuggestionsFromGeminiSettings__accessor_storage = loadTimeData.getBoolean('showSuggestionsFromGeminiSettings');
    get showSuggestionsFromGeminiSettings_() { return this.#showSuggestionsFromGeminiSettings__accessor_storage; }
    set showSuggestionsFromGeminiSettings_(value) { this.#showSuggestionsFromGeminiSettings__accessor_storage = value; }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'autofill.profile_enabled': 'profileEnabledPref_',
            [SHOPPING_OPTED_IN_PREF_KEY]: 'shoppingOptedInPref_',
        });
        const updateOptedIn = () => this.updateShoppingOptedIn_();
        this.addPrefObserver('autofill.autofill_ai.shopping_entities_enabled', updateOptedIn);
        this.addPrefObserver('autofill.profile_enabled', updateOptedIn);
        this.addPrefObserver(AiEnterpriseFeaturePrefName.AUTOFILL_AI, updateOptedIn);
        this.addPrefObserver('autofill.types_blocked', updateOptedIn);
    }
    optInToggleDisabled_() {
        if (!this.profileEnabledPref_) {
            return true;
        }
        const addressAutofillOptInStatus = this.profileEnabledPref_.value;
        const ignoreAddressAutofill = this.autofillSettingsEnterprisePolicyEnabled_;
        return !this.canEnableOrDisableAutofillAi_ ||
            (!ignoreAddressAutofill && !addressAutofillOptInStatus);
    }
    updateShoppingOptedIn_() {
        const prefService = PrefService.getInstance();
        const fakePref = {
            ...prefService.getPref(SHOPPING_OPTED_IN_PREF_KEY),
            value: prefService
                .getPref('autofill.autofill_ai.shopping_entities_enabled')
                .value,
        };
        if (this.optInToggleDisabled_()) {
            fakePref.value = false;
        }
        assert(this.profileEnabledPref_);
        const autofillAiPolicy = prefService.getPref(AiEnterpriseFeaturePrefName.AUTOFILL_AI);
        checkAutofillPoliciesAndModifyPrefIfNecessary(fakePref, this.profileEnabledPref_, autofillAiPolicy, prefService.getPref('autofill.types_blocked'), AutofillPolicyDataCategory.SHOPPING);
        prefService.setSyntheticPref(fakePref);
    }
    onOptInToggleSettingsBooleanControlChange_() {
        // If the preference is enforced by enterprise policy, do not allow the user
        // to toggle or mutate the underlying preference value.
        if (this.shoppingOptedInPref_?.enforcement ===
            chrome.settingsPrivate.Enforcement.ENFORCED) {
            return;
        }
        PrefService.getInstance().setPrefValue('autofill.autofill_ai.shopping_entities_enabled', this.$.optInToggle.checked);
    }
    extensionControlledIndicatorIsVisible_() {
        if (!this.profileEnabledPref_) {
            return false;
        }
        return !!this.profileEnabledPref_.extensionId &&
            !this.profileEnabledPref_.value;
    }
    onSuggestionsFromGeminiClick_() {
        this.metricsBrowserProxy_.recordSuggestionsFromGeminiEntryPointClick(SuggestionsFromGeminiEntryPoint.SHOPPING);
        Router.getInstance().navigateTo(routes.SUGGESTIONS_FROM_GEMINI);
    }
    // SettingsViewMixin implementation.
    getFocusConfig() {
        const map = new Map();
        if (routes.SUGGESTIONS_FROM_GEMINI) {
            map.set(routes.SUGGESTIONS_FROM_GEMINI.path, '#suggestionsFromGeminiLinkRow');
        }
        return map;
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsShoppingPageElement.is, SettingsShoppingPageElement);
