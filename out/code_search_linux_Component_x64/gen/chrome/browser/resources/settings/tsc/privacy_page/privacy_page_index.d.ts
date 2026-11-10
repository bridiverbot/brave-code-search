import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import '../safety_hub/safety_hub_entry_point.js';
import '../settings_page/settings_section.js';
import '../settings_shared.css.js';
import './privacy_guide/privacy_guide_promo.js';
import './privacy_page.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { PageVisibility } from '../page_visibility.js';
import type { Route, SettingsRoutes } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
export interface SettingsPrivacyPageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsPrivacyPageIndexElementBase: typeof PolymerElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface) & (new (...args: any[]) => import("./privacy_guide/privacy_guide_availability_mixin.js").PrivacyGuideAvailabilityMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin.js").SearchableViewContainerMixinInterface);
export declare class SettingsPrivacyPageIndexElement extends SettingsPrivacyPageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        privacyGuideViewedPref_: ObjectConstructor;
        pageVisibility_: {
            type: ObjectConstructor;
            value: () => PageVisibility;
        };
        routes_: {
            type: ObjectConstructor;
            value: () => SettingsRoutes;
        };
        showPrivacyGuidePromo_: {
            type: BooleanConstructor;
            value: boolean;
        };
        enableCapturedSurfaceControl_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableFederatedIdentityApiContentSetting_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableExperimentalWebPlatformFeatures_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableHandTrackingContentSetting_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enablePaymentHandlerContentSetting_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enablePersistentPermissions_: {
            type: BooleanConstructor;
            readOnly: boolean;
            value: () => boolean;
        };
        enableSecurityKeysSubpage_: {
            type: BooleanConstructor;
            readOnly: boolean;
            value: () => boolean;
        };
        enableSafeBrowsingSubresourceFilter_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableKeyboardLockPrompt_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableLocalNetworkAccessSetting_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableWebAppInstallation_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableWebBluetoothNewPermissionsBackend_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
    };
    static get observers(): string[];
    private privacyGuideViewedPref_;
    private pageVisibility_;
    private routes_;
    private showPrivacyGuidePromo_;
    private enableCapturedSurfaceControl_;
    private enableFederatedIdentityApiContentSetting_;
    private enableExperimentalWebPlatformFeatures_;
    private enableHandTrackingContentSetting_;
    private enableSafeBrowsingSubresourceFilter_;
    private enableKeyboardLockPrompt_;
    private enableLocalNetworkAccessSetting_;
    private enablePaymentHandlerContentSetting_;
    private enablePersistentPermissions_;
    private enableSecurityKeysSubpage_;
    private enableWebAppInstallation_;
    private enableWebBluetoothNewPermissionsBackend_;
    private pendingViewSwitching_;
    private privacyGuidePromoWasShown_;
    private privacyGuideBrowserProxy_;
    connectedCallback(): void;
    private beforeNextRenderPromise_;
    private getDefaultViews_;
    private isRouteHostedWithinPrivacyView_;
    private getViewIdsForRoute_;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    whenViewSwitchingDone(): Promise<void>;
    private showPage_;
    private renderView_;
    private renderPrivacyView_;
    private updatePrivacyGuidePromoVisibility_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-privacy-page-index': SettingsPrivacyPageIndexElement;
    }
}
export {};
