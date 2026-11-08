/**
 * @fileoverview
 * 'settings-on-startup-page' is a settings page.
 */
import '../controls/controlled_radio_button.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../controls/settings_radio_group.js';
import '../i18n_setup.js';
import '../settings_page/settings_section.js';
import './startup_urls_page.js';
import '../controls/settings_toggle_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
import type { NtpExtension } from './on_startup_browser_proxy.js';
/** Enum values for the 'session.restore_on_startup' preference. */
export declare enum PrefValues {
    CONTINUE = 1,
    OPEN_NEW_TAB = 5,
    OPEN_SPECIFIC = 4,
    CONTINUE_AND_OPEN_SPECIFIC = 6
}
declare const SettingsOnStartupPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsOnStartupPageElement extends SettingsOnStartupPageElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        restoreOnStartupPref_: {
            type: ObjectConstructor;
        };
        isForegroundLaunchFeatureEnabled_: {
            type: BooleanConstructor;
        };
        ntpExtension_: {
            type: ObjectConstructor;
        };
    };
    protected accessor restoreOnStartupPref_: chrome.settingsPrivate.PrefObject<PrefValues> | undefined;
    protected accessor isForegroundLaunchFeatureEnabled_: boolean;
    protected accessor ntpExtension_: NtpExtension | null;
    connectedCallback(): void;
    /**
     * Determine whether to show the user defined startup pages.
     * @return Whether the "open specific pages" or "continue and open specific
     *     pages" is selected.
     */
    protected showStartupUrls_(): boolean;
    /**
     * Determine whether to show "continue and open specific pages" option.
     * @return Whether the restoreOnStartup pref is recommended or enforced by
     *     policy.
     */
    protected showContinueAndOpenSpecific_(): boolean;
    searchContents(query: string): Promise<import("../search_settings.js").SearchResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-on-startup-page': SettingsOnStartupPageElement;
    }
}
export {};
