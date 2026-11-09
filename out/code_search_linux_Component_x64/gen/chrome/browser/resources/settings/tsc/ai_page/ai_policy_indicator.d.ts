/**
 * @fileoverview
 * 'settings-ai-policy-indicator' is an indicator that informs the user if the
 * feature is controlled by policy.
 */
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare function isFeatureDisabledByPolicy(enterprisePref: chrome.settingsPrivate.PrefObject | undefined): boolean;
declare const SettingsAiPolicyIndicatorElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_key_observer_mixin_lit.js").PrefKeyObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsAiPolicyIndicatorElement extends SettingsAiPolicyIndicatorElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected isFeatureDisabledByPolicy_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ai-policy-indicator': SettingsAiPolicyIndicatorElement;
    }
}
export {};
