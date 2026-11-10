/**
 * @fileoverview
 * 'settings-site-settings-page' is the settings page containing privacy and
 * security site settings.
 */
import '../br/config.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../controls/settings_toggle_button.js';
import '../privacy_icons.html.js';
import '../safety_hub/safety_hub_module.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import './recent_site_permissions.js';
import './site_settings_list.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { FocusConfig } from '../focus_config.js';
import type { Route } from '../router.js';
import type { SettingsRecentSitePermissionsElement } from './recent_site_permissions.js';
import type { CategoryListItem } from './site_settings_list.js';
export interface SettingsSiteSettingsPageElement {
    $: {
        advancedContentList: HTMLElement;
        recentSitePermissions: SettingsRecentSitePermissionsElement;
    };
}
declare const SettingsSiteSettingsPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsSiteSettingsPageElement extends SettingsSiteSettingsPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        lists_: {
            type: ObjectConstructor;
            value: () => {
                permissionsBasic: CategoryListItem[];
                permissionsAdvanced: CategoryListItem[];
                contentBasic: CategoryListItem[];
                contentAdvanced: CategoryListItem[];
            };
        };
        permissionsExpanded_: BooleanConstructor;
        contentExpanded_: BooleanConstructor;
        noRecentSitePermissions_: BooleanConstructor;
        showUnusedSitePermissions_: {
            type: BooleanConstructor;
            value: boolean;
        };
        unusedSitePermissionsHeader_: StringConstructor;
        unusedSitePermissionsSubheader_: StringConstructor;
    };
    connectedCallback(): void;
    private permissionsExpanded_;
    private contentExpanded_;
    private noRecentSitePermissions_;
    private showUnusedSitePermissions_;
    private unusedSitePermissionsHeader_;
    private unusedSitePermissionsSubheader_;
    private safetyHubBrowserProxy_;
    private metricsBrowserProxy_;
    private lists_;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    private onSiteSettingsAllClick_;
    private onUnusedSitePermissionListChanged_;
    /** @return Class for the all site settings link */
    private getClassForSiteSettingsAllLink_;
    private onSafetyHubButtonClick_;
    getFocusConfig(): FocusConfig;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-site-settings-page': SettingsSiteSettingsPageElement;
    }
}
export {};
