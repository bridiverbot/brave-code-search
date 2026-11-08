/**
 * @fileoverview
 * 'settings-safety-hub-page' is the settings page that presents the safety
 * state of Chrome.
 */
import '../relaunch_confirmation_dialog.js';
import '../settings_page/settings_subpage.js';
import './safety_hub_card.js';
import './safety_hub_module.js';
import './extensions_module.js';
import './unused_site_permissions_module.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
import type { CardInfo } from './safety_hub_browser_proxy.js';
import type { SettingsSafetyHubCardElement } from './safety_hub_card.js';
import type { SiteInfo } from './safety_hub_module.js';
export interface SettingsSafetyHubPageElement {
    $: {
        passwords: SettingsSafetyHubCardElement;
        safeBrowsing: SettingsSafetyHubCardElement;
        version: SettingsSafetyHubCardElement;
    };
}
declare const SettingsSafetyHubPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../relaunch_mixin_lit.js").RelaunchMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsSafetyHubPageElement extends SettingsSafetyHubPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        passwordCardData_: {
            type: ObjectConstructor;
        };
        versionCardData_: {
            type: ObjectConstructor;
        };
        safeBrowsingCardData_: {
            type: ObjectConstructor;
        };
        showUnusedSitePermissions_: {
            type: BooleanConstructor;
        };
        showExtensions_: {
            type: BooleanConstructor;
        };
        userEducationItemList_: {
            type: ArrayConstructor;
        };
        hasDataForUnusedPermissions_: {
            type: BooleanConstructor;
        };
        hasDataForExtensions_: {
            type: BooleanConstructor;
        };
        safeBrowsingPref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor passwordCardData_: CardInfo;
    protected accessor versionCardData_: CardInfo;
    protected accessor safeBrowsingCardData_: CardInfo;
    protected accessor showUnusedSitePermissions_: boolean;
    private accessor hasDataForUnusedPermissions_;
    protected accessor showExtensions_: boolean;
    private accessor hasDataForExtensions_;
    private shouldRecordMetric_;
    protected accessor userEducationItemList_: SiteInfo[];
    private accessor safeBrowsingPref_;
    private browserProxy_;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    private initializeCards_;
    private initializeModules_;
    private initializeUserEducation_;
    protected onPasswordsClick_(): void;
    protected onPasswordsKeydown_(e: KeyboardEvent): void;
    protected onVersionClick_(): void;
    protected onShModuleItemLinkClick_(event: CustomEvent<HTMLAnchorElement>): void;
    protected onVersionKeydown_(e: KeyboardEvent): void;
    private onSafeBrowsingPrefChanged_;
    protected onSafeBrowsingClick_(): void;
    protected onSafeBrowsingKeydown_(e: KeyboardEvent): void;
    private onUnusedSitePermissionListChanged_;
    protected shouldShowNoRecommendationsState_(): boolean;
    private onExtensionsChanged_;
    protected computeVersionCardRole_(): string;
    protected computeVersionCardAriaDescription_(): string;
    private isEnterOrSpaceClicked_;
    private onAllModulesLoaded_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-safety-hub-page': SettingsSafetyHubPageElement;
    }
}
export {};
