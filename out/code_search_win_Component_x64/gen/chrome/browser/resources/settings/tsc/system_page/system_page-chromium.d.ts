/**
 * @fileoverview Settings that affect how Chrome interacts with the underlying
 * operating system (i.e. network, background processes, hardware).
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../controls/settings_toggle_button.js';
import '../relaunch_confirmation_dialog.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
interface ProxyOverrideRule {
    DestinationMatchers: string[];
    ProxyList: string[];
    ExcludeDestinationMatchers?: string[];
    Conditions?: Array<{
        DnsProbe: {
            Host: string;
            Result: string;
        };
    }>;
}
export interface SettingsSystemPageElement {
    $: {
        proxy: HTMLElement;
        proxyMultipleSources: HTMLElement;
        hardwareAcceleration: SettingsToggleButtonElement;
    };
}
declare const SettingsSystemPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("../relaunch_mixin_lit.js").RelaunchMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsSystemPageElement extends SettingsSystemPageElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isProxyEnforcedByPolicy_: {
            type: BooleanConstructor;
        };
        isProxyDefault_: {
            type: BooleanConstructor;
        };
        isProxyEnforcedByMultipleSources_: {
            type: BooleanConstructor;
        };
        showProcessIsolationSetting_: {
            type: BooleanConstructor;
        };
        proxyPref_: {
            type: ObjectConstructor;
        };
        proxyOverrideRulesPref_: {
            type: ObjectConstructor;
        };
        hardwareAccelerationModeEnabledPref_: {
            type: ObjectConstructor;
        };
        isolationStateEnabledPref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor isProxyEnforcedByPolicy_: boolean;
    protected accessor isProxyDefault_: boolean;
    protected accessor isProxyEnforcedByMultipleSources_: boolean;
    protected accessor showProcessIsolationSetting_: boolean;
    private processIsolationEnabledAtStartup_;
    protected accessor proxyPref_: chrome.settingsPrivate.PrefObject<unknown> | undefined;
    protected accessor proxyOverrideRulesPref_: chrome.settingsPrivate.PrefObject<ProxyOverrideRule[]> | undefined;
    protected accessor hardwareAccelerationModeEnabledPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor isolationStateEnabledPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private observeProxyPrefChanged_;
    protected onDisableExtensionClick_(): void;
    protected onProxyClick_(): void;
    protected onRestartClick_(e: Event): void;
    /**
     * @param enabled Whether hardware acceleration is currently enabled.
     */
    protected shouldShowRestart_(): boolean;
    protected shouldShowIsolationRestart_(): boolean;
    searchContents(query: string): Promise<import("../search_settings.js").SearchResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-system-page': SettingsSystemPageElement;
    }
}
export {};
