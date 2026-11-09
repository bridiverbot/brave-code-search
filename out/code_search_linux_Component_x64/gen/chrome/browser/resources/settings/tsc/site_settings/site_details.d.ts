/**
 * @fileoverview
 * 'site-details' show the details (permissions and usage) for a given origin
 * under Site Settings.
 */
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import './action_link.css.js';
import './all_sites_icons.html.js';
import './clear_storage_dialog_shared.css.js';
import './site_details_permission.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from '../router.js';
import { ChooserType, ContentSettingsTypes } from './constants.js';
export interface SiteDetailsElement {
    $: {
        confirmClearStorage: CrDialogElement;
        confirmResetSettings: CrDialogElement;
        rwsMembership: HTMLElement;
        noStorage: HTMLElement;
        storage: HTMLElement;
        usage: HTMLElement;
    };
}
declare const SiteDetailsElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface) & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SiteDetailsElement extends SiteDetailsElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Whether unified autoplay blocking is enabled.
         */
        blockAutoplayEnabled_: BooleanConstructor;
        /**
         * Use the string representing the origin or extension name as the page
         * title of the settings-subpage parent.
         */
        pageTitle_: {
            type: StringConstructor;
            notify: boolean;
        };
        /**
         * The origin that this widget is showing details for.
         */
        origin_: StringConstructor;
        /**
         * The amount of data stored for the origin.
         */
        storedData_: {
            type: StringConstructor;
            value: string;
        };
        /**
         * The number of cookies stored for the origin.
         */
        numCookies_: {
            type: StringConstructor;
            value: string;
        };
        /**
         * The related website set info for a site including owner and members
         * count.
         */
        rwsMembership_: {
            type: StringConstructor;
            value: string;
        };
        /**
         * Mock preference used to power managed policy icon for related website
         * sets.
         */
        rwsEnterprisePref_: ObjectConstructor;
        enableExperimentalWebPlatformFeatures_: {
            type: BooleanConstructor;
            value(): boolean;
        };
        enableWebBluetoothNewPermissionsBackend_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableHandTrackingContentSetting_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableCapturedSurfaceControl_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
        chooserTypeEnum_: {
            type: ObjectConstructor;
            value: typeof ChooserType;
        };
        enableKeyboardLockPrompt_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableWebAppInstallation_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableLocalNetworkAccessSetting_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        /**
         * Whether the "Block if site is unfamiliar" label should be used for the
         * default javascript-optimizer content setting.
         */
        useBlockIfUnfamiliarLabelForV8OptimizerDefault_: {
            type: BooleanConstructor;
            value: boolean;
        };
        /**
         * When the app at url is an isolated web app or an isolated sub app,
         * this returns a string explaining that sub apps share permissions
         * with the parent app that installed them.
         */
        subAppsPermissionExplanation_: {
            type: StringConstructor;
            value: string;
        };
    };
    private blockAutoplayEnabled_;
    private pageTitle_;
    private origin_;
    private storedData_;
    private numCookies_;
    private rwsMembership_;
    private rwsEnterprisePref_;
    private enableExperimentalWebPlatformFeatures_;
    private enableWebBluetoothNewPermissionsBackend_;
    private enableCapturedSurfaceControl_;
    private enableHandTrackingContentSetting_;
    private enableWebAppInstallation_;
    private websiteUsageProxy_;
    private enableKeyboardLockPrompt_;
    private enableLocalNetworkAccessSetting_;
    private useBlockIfUnfamiliarLabelForV8OptimizerDefault_;
    private subAppsPermissionExplanation_;
    private parentAppOrigin_;
    connectedCallback(): void;
    /**
     * RouteObserverMixin
     */
    currentRouteChanged(route: Route, oldRoute?: Route): void;
    /**
     * Called when a site within a category has been changed.
     * @param category The category that changed.
     * @param origin The origin of the site that changed.
     */
    private onPermissionChanged_;
    /**
     * Callback for when the usage total is known.
     * @param origin The origin that the usage was fetched for.
     * @param usage The string showing how much data the given host is using.
     * @param cookies The string showing how many cookies the given host is using.
     * @param rwsMembership The string showing related website set membership
     *     details.
     * @param rwsPolicy Whether a policy is applied to this RWS member.
     */
    private onUsageTotalChanged_;
    /**
     * Retrieves the permissions listed in |categoryList| from the backend for
     * |this.origin_|.
     * @param categoryList The list of categories to update permissions for.
     * @param hideOthers If true, permissions for categories not in
     *     |categoryList| will be hidden.
     */
    private updatePermissions_;
    private onCloseDialog_;
    /**
     * Confirms the resetting of all content settings for an origin.
     */
    private onConfirmClearSettings_;
    /**
     * Confirms the clearing of storage for an origin.
     */
    private onConfirmClearStorage_;
    /**
     * Resets all permissions for the current origin.
     */
    private onResetSettings_;
    /**
     * Clears all data stored, except cookies, for the current origin.
     */
    private onClearStorage_;
    /**
     * Checks whether this site has any usage information to show.
     * @return Whether there is any usage information to show (e.g. disk or
     *     battery).
     */
    private hasUsage_;
    /**
     * Checks whether this site has both storage and cookies information to show.
     * @return Whether there are both storage and cookies information to show.
     */
    private hasDataAndCookies_;
    private onResetSettingsDialogClosed_;
    private onClearStorageDialogClosed_;
    private onBlockAutoplayStatusChanged_;
    focusBackButton(): void;
    private onSubAppPermissionExplanationLinkClicked_;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-details': SiteDetailsElement;
    }
}
export {};
