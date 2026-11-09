import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../icons.html.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { FocusConfig } from '../focus_config.js';
import type { Route } from '../router.js';
import { ContentSettingsTypes } from '../site_settings/constants.js';
export interface CategoryListItem {
    route: Route;
    id: ContentSettingsTypes;
    label: string;
    icon?: string;
    enabledLabel?: string;
    disabledLabel?: string;
    askLabel?: string;
    otherLabel?: string;
    shouldShow?: () => boolean;
}
export declare function defaultSettingLabel(setting: string, enabled: string, disabled: string, ask?: string, other?: string): string;
declare const SettingsSiteSettingsListElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("../base_mixin.js").BaseMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface);
declare class SettingsSiteSettingsListElement extends SettingsSiteSettingsListElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        categoryList: ArrayConstructor;
        categoryMap_: {
            type: MapConstructor;
            computed: string;
        };
    };
    categoryList: CategoryListItem[];
    private categoryMap_;
    private browserProxy_;
    getFocusConfig(): FocusConfig;
    private computeCategoryMap;
    connectedCallback(): void;
    ready(): void;
    /**
     * @param category The category to refresh (fetch current value + update UI)
     * @return A promise firing after the label has been updated.
     */
    private refreshDefaultValueLabel_;
    /**
     * Updates the DOM for the given |category| to display a label that
     * corresponds to the given |setting|.
     */
    private updateDefaultValueLabel_;
    /**
     * Updates the icon for the given |category| that corresponds to the given
     * |setting|.
     */
    private updateDefaultValueIcon_;
    /**
     * Update the cookies link row label when the cookies setting description
     * changes.
     */
    private updateCookiesLabel_;
    /**
     * Update the geolocation link row label when the geolocation setting
     * description changes.
     */
    private onGeneratedGeolocationChanged_;
    /**
     * Update the notifications link row label when the notifications setting
     * description changes.
     */
    private onGeneratedNotificationChanged_;
    /**
     * Update the site data link row label when the default cookies content
     * setting changes.
     */
    private onGeneratedCookieDefaultContentSettingChanged_;
    /**
     * Update the third-party cookies link row label when the pref changes.
     */
    private onProfileCookieControlsModeChanged_;
    private onComposeProactiveNudgeEnabledChanged_;
    private onClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-site-settings-list': SettingsSiteSettingsListElement;
    }
}
export {};
