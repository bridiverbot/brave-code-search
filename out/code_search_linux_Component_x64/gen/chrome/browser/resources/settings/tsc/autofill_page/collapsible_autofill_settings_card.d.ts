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
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ModelExecutionEnterprisePolicyValue } from '../ai_page/constants.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
export interface CollapsibleAutofillSettingsCardElement {
    $: {
        optInToggle: SettingsToggleButtonElement;
    };
}
declare const CollapsibleAutofillSettingsCardElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class CollapsibleAutofillSettingsCardElement extends CollapsibleAutofillSettingsCardElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Controls the expanded/collapsed state of the details.
         */
        expanded_: {
            type: BooleanConstructor;
        };
        /**
           Indicates if a user is eligible to change Enhanced Autofill data.
           If a user is not eligible for Enhanced Autofill (Autofill with Ai),
           but they have data saved, the code allows them only to edit and delete
           their data. They are not allowed to add new data, or to opt in or
           opt-out of Enhanced Autofill using the corresponding toggle in this
           component. If a user is not eligible for Enhanced Autofill and they
           also have no data saved, then they cannot access this page at all.
         */
        enhancedAutofillEligibleUser_: {
            type: BooleanConstructor;
        };
        /**
         * Indicates whether the feature `kAutofillAiReauthRequired` is enabled.
         */
        isUserEligibleForWalletablePassDetection_: {
            type: BooleanConstructor;
        };
        /**
         * If true, Autofill AI does not depend on whether Autofill for addresses
         * is enabled.
         */
        autofillSettingsEnterprisePolicyEnabled_: {
            type: BooleanConstructor;
        };
        profileEnabledPref_: {
            type: ObjectConstructor;
        };
        autofillAiEnterprisePolicyPref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor expanded_: boolean;
    protected accessor enhancedAutofillEligibleUser_: boolean;
    protected accessor isUserEligibleForWalletablePassDetection_: boolean;
    protected accessor autofillSettingsEnterprisePolicyEnabled_: boolean;
    protected accessor profileEnabledPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor autofillAiEnterprisePolicyPref_: chrome.settingsPrivate.PrefObject<ModelExecutionEnterprisePolicyValue> | undefined;
    private entityInstancesChangedListener_;
    private entityDataManager_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onOptInToggleSettingsBooleanControlChange_(): Promise<void>;
    /**
     * Whether an info bullet regarding logging is shown. Enhanced Autofill only
     * shows logging behaviour information for enterprise clients who have either
     * the feature disabled or just logging disabled.
     */
    protected showLoggingInfoBullet_(): boolean;
    /**
     * Observes changes to the enterprise policies for Address autofill and
     * Autofill AI keeping the component's state up to date. When the policy
     * disables the feature, updates the UI to reflect the enforced state,
     * disabling the toggle. When the policy is lifted, it asynchronously fetches
     * the user's latest opt-in status to accurately restore the toggle's state
     * without blocking the UI.
     */
    private onEnterprisePolicyChanged_;
    protected showExtensionControlledIndicator_(): boolean;
    protected optInToggleDisabled_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'collapsible-autofill-settings-card': CollapsibleAutofillSettingsCardElement;
    }
}
export {};
