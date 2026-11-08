// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import '../safety_hub/safety_hub_entry_point.js';
import '../settings_page/settings_section.js';
import '../settings_shared.css.js';
import './privacy_guide/privacy_guide_promo.js';
import './privacy_page.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { beforeNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { pageVisibility } from '../page_visibility.js';
import { routes } from '../route.js';
import { RouteObserverMixin } from '../router.js';
import { SearchableViewContainerMixin } from '../settings_page/searchable_view_container_mixin.js';
import { PrivacyGuideAvailabilityMixin } from './privacy_guide/privacy_guide_availability_mixin.js';
import { MAX_PRIVACY_GUIDE_PROMO_IMPRESSION, PrivacyGuideBrowserProxyImpl } from './privacy_guide/privacy_guide_browser_proxy.js';
import { getTemplate } from './privacy_page_index.html.js';
const SettingsPrivacyPageIndexElementBase = SearchableViewContainerMixin(PrivacyGuideAvailabilityMixin(PrefServiceObserverMixin(RouteObserverMixin(PolymerElement))));
export class SettingsPrivacyPageIndexElement extends SettingsPrivacyPageIndexElementBase {
    static get is() {
        return 'settings-privacy-page-index';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            privacyGuideViewedPref_: Object,
            pageVisibility_: {
                type: Object,
                value: () => {
                    return pageVisibility || {};
                },
            },
            routes_: {
                type: Object,
                value: () => routes,
            },
            showPrivacyGuidePromo_: {
                type: Boolean,
                value: false,
            },
            enableCapturedSurfaceControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableCapturedSurfaceControl'),
            },
            enableFederatedIdentityApiContentSetting_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('enableFederatedIdentityApiContentSetting');
                },
            },
            enableExperimentalWebPlatformFeatures_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('enableExperimentalWebPlatformFeatures');
                },
            },
            enableHandTrackingContentSetting_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('enableHandTrackingContentSetting');
                },
            },
            enablePaymentHandlerContentSetting_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('enablePaymentHandlerContentSetting');
                },
            },
            enablePersistentPermissions_: {
                type: Boolean,
                readOnly: true,
                value: () => loadTimeData.getBoolean('enablePersistentPermissions'),
            },
            enableSecurityKeysSubpage_: {
                type: Boolean,
                readOnly: true,
                value: () => loadTimeData.getBoolean('enableSecurityKeysSubpage'),
            },
            // 
            enableSafeBrowsingSubresourceFilter_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('enableSafeBrowsingSubresourceFilter');
                },
            },
            enableKeyboardLockPrompt_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableKeyboardLockPrompt'),
            },
            enableLocalNetworkAccessSetting_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableLocalNetworkAccessSetting'),
            },
            enableWebAppInstallation_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableWebAppInstallation'),
            },
            enableWebBluetoothNewPermissionsBackend_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableWebBluetoothNewPermissionsBackend'),
            },
        };
    }
    static get observers() {
        return [
            'updatePrivacyGuidePromoVisibility_(isPrivacyGuideAvailable, privacyGuideViewedPref_)',
        ];
    }
    pendingViewSwitching_ = new PromiseResolver();
    privacyGuidePromoWasShown_;
    privacyGuideBrowserProxy_ = PrivacyGuideBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('privacy_guide.viewed', 'privacyGuideViewedPref_');
    }
    beforeNextRenderPromise_() {
        return new Promise(res => {
            beforeNextRender(this, res);
        });
    }
    getDefaultViews_() {
        const defaultViews = ['privacy'];
        if (this.isPrivacyGuideAvailable) {
            defaultViews.push('privacyGuidePromo');
        }
        if (this.showPage_(this.pageVisibility_.safetyHub)) {
            defaultViews.push('safetyHubEntryPoint');
        }
        return defaultViews;
    }
    isRouteHostedWithinPrivacyView_(route) {
        const nestedRoutes = [routes.CLEAR_BROWSER_DATA];
        if (loadTimeData.getBoolean('showPrivacyGuide')) {
            nestedRoutes.push(routes.PRIVACY_GUIDE);
        }
        return nestedRoutes.includes(route);
    }
    // Return the list of view IDs to be displayed, or null if a view should
    // exist but was not found. Caller is responsible for re-querying the DOM
    // after any conditional elements have been stamped.
    getViewIdsForRoute_(route) {
        switch (route) {
            case routes.PRIVACY:
                return this.getDefaultViews_();
            case routes.BASIC:
                // 
                // Display the default views if in search mode, since they could be part
                // of search results.
                return this.inSearchMode ? this.getDefaultViews_() : [];
            default: {
                // Handle case of routes whose UIs are still hosted within
                // settings-privacy-page.
                if (this.isRouteHostedWithinPrivacyView_(route)) {
                    return ['privacy'];
                }
                // Handle case of a Privacy child route.
                if (routes.PRIVACY.contains(route)) {
                    const view = this.$.viewManager.querySelector(`[slot='view'][route-path='${route.path}']`);
                    return view ? [view.id] : null;
                }
                // Nothing to do. Other parent elements are responsible for updating
                // the displayed contents.
                return [];
            }
        }
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        if (newRoute === routes.PRIVACY) {
            this.updatePrivacyGuidePromoVisibility_();
        }
        this.pendingViewSwitching_ = new PromiseResolver();
        // Need to wait for currentRouteChanged observers on child views to run
        // first, before switching views.
        queueMicrotask(async () => {
            let viewIds = this.getViewIdsForRoute_(newRoute);
            if (viewIds !== null && viewIds.length === 0) {
                // Nothing to do. Other parent elements are responsible for updating
                // the displayed contents.
                this.pendingViewSwitching_.resolve();
                return;
            }
            const allViewsExist = viewIds !== null &&
                this.$.viewManager.querySelectorAll(viewIds.join(',')).length ===
                    viewIds.length;
            if (!allViewsExist) {
                // Wait once for any lazy render <dom-if>s to render.
                await this.beforeNextRenderPromise_();
                if (this.currentRoute !== newRoute || !this.isConnected) {
                    // A newer currentRouteChanged call happened while awaiting or no
                    // longer connected (both can happen in tests). Do nothing.
                    this.pendingViewSwitching_.resolve();
                    return;
                }
                // Re-query for the elements to be displayed, as they must exist.
                viewIds = this.getViewIdsForRoute_(newRoute);
            }
            assert(viewIds !== null, `No views found for route ${newRoute.path}`);
            await this.$.viewManager.switchViews(viewIds, 'no-animation', 'no-animation');
            this.pendingViewSwitching_.resolve();
        });
    }
    // Exposed for tests, to allow making visibility assertions about
    // cr-view-manager views without flaking. Should be called after
    // currentRouteChanged is called.
    whenViewSwitchingDone() {
        return this.pendingViewSwitching_.promise;
    }
    showPage_(visibility) {
        return visibility !== false;
    }
    renderView_(route) {
        return this.inSearchMode ||
            (!!this.currentRoute && this.currentRoute === route);
    }
    renderPrivacyView_() {
        // 
        return this.inSearchMode ||
            (!!this.currentRoute &&
                (this.currentRoute === routes.PRIVACY ||
                    this.isRouteHostedWithinPrivacyView_(this.currentRoute)));
    }
    updatePrivacyGuidePromoVisibility_() {
        if (!this.isPrivacyGuideAvailable ||
            this.privacyGuideViewedPref_ === undefined ||
            this.privacyGuideViewedPref_.value ||
            this.privacyGuideBrowserProxy_.getPromoImpressionCount() >=
                MAX_PRIVACY_GUIDE_PROMO_IMPRESSION ||
            this.currentRoute !== routes.PRIVACY) {
            this.showPrivacyGuidePromo_ = false;
            return;
        }
        this.showPrivacyGuidePromo_ = true;
        if (!this.privacyGuidePromoWasShown_) {
            this.privacyGuideBrowserProxy_.incrementPromoImpressionCount();
            this.privacyGuidePromoWasShown_ = true;
        }
    }
}
customElements.define(SettingsPrivacyPageIndexElement.is, SettingsPrivacyPageIndexElement);
