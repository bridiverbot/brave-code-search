/**
 * @fileoverview 'settings-secure-dns' is a setting that allows the secure DNS
 * mode and secure DNS resolvers to be configured.
 *
 * The underlying secure DNS prefs are not read directly since the setting is
 * meant to represent the current state of the host resolver, which depends not
 * only on the prefs but also a few other factors (e.g. whether we've detected a
 * managed environment, whether we've detected parental controls, etc). Instead,
 * the setting listens for secure-dns-setting-changed events, which are sent
 * by PrivacyPageBrowserProxy and describe the new host resolver configuration.
 */
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import '../../controls/settings_toggle_button.js';
import './secure_dns_input.js';
import type { ResolverOption } from '/shared/settings/security_page/security_page_browser_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../../controls/settings_toggle_button.js';
import type { SecureDnsInputElement } from './secure_dns_input.js';
export interface SettingsSecureDnsElement {
    $: {
        privacyPolicy: HTMLElement;
        secureDnsInput: SecureDnsInputElement;
        secureDnsInputContainer: HTMLElement;
        secureDnsToggle: SettingsToggleButtonElement;
        resolverSelect: HTMLSelectElement;
    };
}
declare const SettingsSecureDnsElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
/**
 * Enum for the categories of options in the secure DNS resolver select
 * menu.
 */
export declare enum SecureDnsResolverType {
    AUTOMATIC = "automatic",
    BUILT_IN = "built-in",
    CUSTOM = "custom"
}
export type SecureDnsElement = SettingsSecureDnsElement;
export declare class SettingsSecureDnsElement extends SettingsSecureDnsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        secureDnsDescription_: {
            type: StringConstructor;
        };
        showSecureDnsOptions_: {
            type: BooleanConstructor;
        };
        resolverOptions_: {
            type: ArrayConstructor;
        };
        privacyPolicyString_: {
            type: StringConstructor;
        };
        secureDnsInputValue_: {
            type: StringConstructor;
        };
    };
    protected accessor secureDnsDescription_: string;
    protected accessor showSecureDnsOptions_: boolean;
    protected accessor resolverOptions_: ResolverOption[];
    protected accessor privacyPolicyString_: TrustedHTML;
    protected accessor secureDnsInputValue_: string;
    private browserProxy_;
    connectedCallback(): void;
    /**
     * Update the UI representation to match the underlying host resolver
     * configuration.
     */
    private onSecureDnsPrefsChanged_;
    /**
     * Updates the underlying secure DNS mode pref based on the new toggle
     * selection (and the underlying select menu if the toggle has just been
     * turned on).
     */
    protected onToggleChange_(): Promise<void>;
    /**
     * Helper method for updating the underlying secure DNS prefs based on the
     * provided mode and templates (if the latter is specified). The templates
     * param should only be specified when the underlying prefs are being updated
     * after a custom entry has been validated.
     */
    private updateDnsPrefs_;
    /**
     * Updates the underlying secure DNS templates pref based on the selected
     * resolver and displays the corresponding privacy policy.
     */
    protected onDropdownSelectionChange_(): void;
    /**
     * Updates the setting to communicate the type of management, if any. The
     * setting is always collapsed if there is any management.
     */
    private updateManagementView_;
    /**
     * Updates the UI to match the provided configuration parameters.
     */
    private updateConfigRepresentation_;
    /**
     * Displays the privacy policy string if the policy URL is specified,
     * otherwise hides it.
     * @param policy The privacy policy URL.
     */
    private updatePrivacyPolicyLine_;
    /**
     * Updates the underlying prefs if a custom entry was determined to be valid.
     */
    protected onSecureDnsInputValueUpdate_(event: CustomEvent<{
        text: string;
        isValid: boolean;
    }>): void;
    /**
     * Returns the ResolverOption details if the currently selected secure DNS
     * resolver is a built-in one.
     */
    private builtInResolver_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-secure-dns': SettingsSecureDnsElement;
    }
}
export {};
