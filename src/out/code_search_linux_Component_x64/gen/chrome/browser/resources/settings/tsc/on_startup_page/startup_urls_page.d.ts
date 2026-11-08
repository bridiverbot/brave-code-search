/**
 * @fileoverview 'settings-startup-urls-page' is the settings page
 * containing the urls that will be opened when chrome is started.
 */
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/action_link_lit.css.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import './startup_url_dialog.js';
import './startup_url_entry.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { StartupPageInfo } from './startup_urls_page_browser_proxy.js';
export interface SettingsStartupUrlsPageElement {
    $: {
        container: HTMLElement;
        list: HTMLElement;
    };
}
declare const SettingsStartupUrlsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsStartupUrlsPageElement extends SettingsStartupUrlsPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        startupUrlsPref_: {
            type: ObjectConstructor;
        };
        startupPages_: {
            type: ArrayConstructor;
        };
        showStartupUrlDialog_: {
            type: BooleanConstructor;
        };
        startupUrlDialogModel_: {
            type: ObjectConstructor;
        };
    };
    protected accessor startupUrlsPref_: chrome.settingsPrivate.PrefObject<string[]> | undefined;
    protected accessor startupPages_: StartupPageInfo[];
    protected accessor showStartupUrlDialog_: boolean;
    protected accessor startupUrlDialogModel_: StartupPageInfo | null;
    private browserProxy_;
    private startupUrlDialogAnchor_;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onAddPageClick_(e: Event): void;
    protected onDialogClose_(): void;
    protected onUseCurrentPagesClick_(): void;
    /**
     * @return Whether "Add new page" and "Use current pages" are allowed.
     */
    protected shouldAllowUrlsEdit_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-startup-urls-page': SettingsStartupUrlsPageElement;
    }
}
export {};
