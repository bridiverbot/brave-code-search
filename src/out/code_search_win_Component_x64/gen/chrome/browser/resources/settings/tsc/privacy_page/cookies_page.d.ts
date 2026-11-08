/**
 * @fileoverview
 * 'settings-cookies-page' is the settings page containing cookies
 * settings.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/collapse_radio_button.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import '../site_settings/site_list.js';
import './do_not_track_toggle.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
declare const SettingsCookiesPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export type CookiesPageElement = SettingsCookiesPageElement;
export declare class SettingsCookiesPageElement extends SettingsCookiesPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Current search term.
         */
        searchTerm: {
            type: StringConstructor;
            notify: boolean;
        };
        showUniversalOptOutSettings_: {
            type: BooleanConstructor;
        };
        pageTitle_: {
            type: StringConstructor;
        };
        isSettingsRefresh2026_: {
            type: BooleanConstructor;
        };
    };
    accessor searchTerm: string;
    protected accessor pageTitle_: string;
    protected accessor showUniversalOptOutSettings_: boolean;
    protected accessor isSettingsRefresh2026_: boolean;
    private metricsBrowserProxy_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onSearchTermChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSiteDataClick_(): void;
    protected onThirdPartyCookieBlockingSettingGroupChange_(): void;
    protected onUniversalOptOutToggleSettingsBooleanControlChange_(event: Event): void;
    private computePageTitle_;
    currentRouteChanged(currentRoute: Route, oldRoute?: Route): void;
    getFocusConfig(): Map<string, string>;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-cookies-page': SettingsCookiesPageElement;
    }
}
export {};
