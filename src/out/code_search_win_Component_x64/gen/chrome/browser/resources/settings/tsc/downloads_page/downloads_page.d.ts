/**
 * @fileoverview
 * 'settings-downloads-page' is the settings page containing downloads
 * settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../controls/controlled_button.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
declare const SettingsDownloadsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsDownloadsPageElement extends SettingsDownloadsPageElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        autoOpenDownloads_: {
            type: BooleanConstructor;
        };
        downloadDefaultDirectoryPref_: {
            type: ObjectConstructor;
        };
        /**
         * Whether the user can toggle the option to display downloads when
         * they're done.
         */
        downloadBubblePartialViewControlledByPref_: {
            type: BooleanConstructor;
        };
    };
    protected accessor autoOpenDownloads_: boolean;
    protected accessor downloadDefaultDirectoryPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor downloadBubblePartialViewControlledByPref_: boolean;
    private browserProxy_;
    connectedCallback(): void;
    firstUpdated(): void;
    protected onChangeDownloadsPathClick_(): void;
    protected onClearAutoOpenFileTypesClick_(): void;
    searchContents(query: string): Promise<import("../search_settings.js").SearchResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-downloads-page': SettingsDownloadsPageElement;
    }
}
export {};
