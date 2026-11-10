// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-hub-page' is the settings page that presents the safety
 * state of Chrome.
 */
// 
import '../relaunch_confirmation_dialog.js';
// 
import '../settings_page/settings_subpage.js';
import './safety_hub_card.js';
import './safety_hub_module.js';
import './extensions_module.js';
import './unused_site_permissions_module.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PasswordManagerImpl, PasswordManagerPage } from '../autofill_page/passwords/password_manager_proxy.js';
import { MetricsBrowserProxyImpl, SafetyHubModuleType, SafetyHubSurfaces } from '../metrics_browser_proxy.js';
import { RelaunchMixinLit, RestartType } from '../relaunch_mixin_lit.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { CardState, SafetyHubBrowserProxyImpl, SafetyHubEvent } from './safety_hub_browser_proxy.js';
import { getCss } from './safety_hub_page.css.js';
import { getHtml } from './safety_hub_page.html.js';
const SettingsSafetyHubPageElementBase = SettingsViewMixinLit(RelaunchMixinLit(PrefServiceObserverMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement)))));
export class SettingsSafetyHubPageElement extends SettingsSafetyHubPageElementBase {
    static get is() {
        return 'settings-safety-hub-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // The object that holds data of Password Check card.
            passwordCardData_: { type: Object },
            // The object that holds data of Version Check card.
            versionCardData_: { type: Object },
            // The object that holds data of Safe Browsing card.
            safeBrowsingCardData_: { type: Object },
            // Whether Unused Site Permissions module should be visible.
            showUnusedSitePermissions_: { type: Boolean },
            // Whether Extensions module should be visible.
            showExtensions_: { type: Boolean },
            userEducationItemList_: { type: Array },
            // Whether the data for unused site permissions is ready.
            hasDataForUnusedPermissions_: { type: Boolean },
            // Whether the data for extensions is ready.
            hasDataForExtensions_: { type: Boolean },
            safeBrowsingPref_: { type: Object },
        };
    }
    #passwordCardData__accessor_storage = {
        header: '',
        subheader: '',
        state: CardState.INFO,
    };
    get passwordCardData_() { return this.#passwordCardData__accessor_storage; }
    set passwordCardData_(value) { this.#passwordCardData__accessor_storage = value; }
    #versionCardData__accessor_storage = {
        header: '',
        subheader: '',
        state: CardState.INFO,
    };
    get versionCardData_() { return this.#versionCardData__accessor_storage; }
    set versionCardData_(value) { this.#versionCardData__accessor_storage = value; }
    #safeBrowsingCardData__accessor_storage = {
        header: '',
        subheader: '',
        state: CardState.INFO,
    };
    get safeBrowsingCardData_() { return this.#safeBrowsingCardData__accessor_storage; }
    set safeBrowsingCardData_(value) { this.#safeBrowsingCardData__accessor_storage = value; }
    #showUnusedSitePermissions__accessor_storage = false;
    get showUnusedSitePermissions_() { return this.#showUnusedSitePermissions__accessor_storage; }
    set showUnusedSitePermissions_(value) { this.#showUnusedSitePermissions__accessor_storage = value; }
    #hasDataForUnusedPermissions__accessor_storage = false;
    get hasDataForUnusedPermissions_() { return this.#hasDataForUnusedPermissions__accessor_storage; }
    set hasDataForUnusedPermissions_(value) { this.#hasDataForUnusedPermissions__accessor_storage = value; }
    #showExtensions__accessor_storage = false;
    get showExtensions_() { return this.#showExtensions__accessor_storage; }
    set showExtensions_(value) { this.#showExtensions__accessor_storage = value; }
    #hasDataForExtensions__accessor_storage = false;
    get hasDataForExtensions_() { return this.#hasDataForExtensions__accessor_storage; }
    set hasDataForExtensions_(value) { this.#hasDataForExtensions__accessor_storage = value; }
    shouldRecordMetric_ = false;
    #userEducationItemList__accessor_storage = [];
    get userEducationItemList_() { return this.#userEducationItemList__accessor_storage; }
    set userEducationItemList_(value) { this.#userEducationItemList__accessor_storage = value; }
    #safeBrowsingPref__accessor_storage = undefined;
    get safeBrowsingPref_() { return this.#safeBrowsingPref__accessor_storage; }
    set safeBrowsingPref_(value) { this.#safeBrowsingPref__accessor_storage = value; }
    browserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        this.initializeCards_();
        this.initializeModules_();
        this.initializeUserEducation_();
        super.connectedCallback();
        this.mirrorPrefs({
            'generated.safe_browsing': 'safeBrowsingPref_',
        });
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('passwordCardData_') ||
            changedPrivateProperties.has('versionCardData_') ||
            changedPrivateProperties.has('safeBrowsingCardData_') ||
            changedPrivateProperties.has('hasDataForUnusedPermissions_') ||
            changedPrivateProperties.has('hasDataForExtensions_')) {
            this.onAllModulesLoaded_();
        }
        if (changedPrivateProperties.has('safeBrowsingPref_')) {
            const oldPref = changedPrivateProperties.get('safeBrowsingPref_');
            if (oldPref?.value !== this.safeBrowsingPref_?.value) {
                this.onSafeBrowsingPrefChanged_();
            }
        }
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        if (Router.getInstance().getCurrentRoute() !== routes.SAFETY_HUB) {
            return;
        }
        // When the user navigates to the Safety Hub page, any active menu
        // notification is dismissed.
        this.browserProxy_.dismissActiveMenuNotification();
        // Record a visit to Safety Hub page if the user is still on the SH page
        // after 20 seconds.
        setTimeout(() => {
            if (Router.getInstance().getCurrentRoute() === routes.SAFETY_HUB) {
                this.browserProxy_.recordSafetyHubPageVisit();
            }
        }, 20000);
        this.metricsBrowserProxy_.recordSafetyHubImpression(SafetyHubSurfaces.SAFETY_HUB_PAGE);
        this.metricsBrowserProxy_.recordSafetyHubInteraction(SafetyHubSurfaces.SAFETY_HUB_PAGE);
        // Only record the metrics when the user navigates to the Safety Hub page.
        this.shouldRecordMetric_ = true;
        this.onAllModulesLoaded_();
    }
    initializeCards_() {
        // TODO(crbug.com/40267370): Add listeners for Password and Version cards.
        this.browserProxy_.getPasswordCardData().then((data) => {
            this.passwordCardData_ = data;
        });
        this.browserProxy_.getSafeBrowsingCardData().then((data) => {
            this.safeBrowsingCardData_ = data;
        });
        this.browserProxy_.getVersionCardData().then((data) => {
            this.versionCardData_ = data;
        });
    }
    initializeModules_() {
        this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED, (sites) => this.onUnusedSitePermissionListChanged_(sites));
        this.addWebUiListener(SafetyHubEvent.EXTENSIONS_CHANGED, (num) => this.onExtensionsChanged_(num));
        this.browserProxy_.getRevokedUnusedSitePermissionsList().then((sites) => this.onUnusedSitePermissionListChanged_(sites));
        this.browserProxy_.getNumberOfExtensionsThatNeedReview().then((num) => this.onExtensionsChanged_(num));
    }
    initializeUserEducation_() {
        this.userEducationItemList_ = [
            {
                origin: this.i18n('safetyHubUserEduDataHeader'),
                detail: this.i18nAdvanced('safetyHubUserEduDataSubheader'),
                icon: 'settings20:chrome-product',
            },
            {
                origin: this.i18n('safetyHubUserEduIncognitoHeader'),
                detail: this.i18nAdvanced('safetyHubUserEduIncognitoSubheader'),
                icon: 'settings20:incognito',
            },
            {
                origin: this.i18n('safetyHubUserEduSafeBrowsingHeader'),
                detail: this.i18nAdvanced('safetyHubUserEduSafeBrowsingSubheader'),
                icon: 'cr:security',
            },
        ];
    }
    onPasswordsClick_() {
        this.metricsBrowserProxy_.recordSafetyHubCardStateClicked('Settings.SafetyHub.PasswordsCard.StatusOnClick', this.passwordCardData_.state);
        this.browserProxy_.recordSafetyHubInteraction();
        PasswordManagerImpl.getInstance().showPasswordManager(PasswordManagerPage.CHECKUP);
    }
    onPasswordsKeydown_(e) {
        e.stopPropagation();
        if (this.isEnterOrSpaceClicked_(e)) {
            this.onPasswordsClick_();
        }
    }
    onVersionClick_() {
        this.metricsBrowserProxy_.recordSafetyHubCardStateClicked('Settings.SafetyHub.VersionCard.StatusOnClick', this.versionCardData_.state);
        this.browserProxy_.recordSafetyHubInteraction();
        if (this.versionCardData_.state === CardState.WARNING) {
            // Optional parameter alwaysShowDialog is set to true to always show the
            // confirmation dialog regardless of the incognito windows open.
            this.performRestart(RestartType.RELAUNCH, true);
        }
        else {
            Router.getInstance().navigateTo(routes.ABOUT, /* dynamicParams= */ undefined, 
            /* removeSearch= */ true);
        }
    }
    onShModuleItemLinkClick_(event) {
        this.browserProxy_.recordSafetyHubInteraction();
        const headerString = event.detail.querySelector('.site-representation').textContent;
        switch (headerString) {
            case this.i18n('safetyHubUserEduDataHeader'):
                this.metricsBrowserProxy_.recordAction('Settings.SafetyHub.SafetyToolsLinkClicked');
                break;
            case this.i18n('safetyHubUserEduIncognitoHeader'):
                this.metricsBrowserProxy_.recordAction('Settings.SafetyHub.IncognitoLinkClicked');
                break;
            case this.i18n('safetyHubUserEduSafeBrowsingHeader'):
                this.metricsBrowserProxy_.recordAction('Settings.SafetyHub.SafeBrowsingLinkClicked');
                break;
            default:
                assertNotReached();
        }
    }
    onVersionKeydown_(e) {
        e.stopPropagation();
        if (this.isEnterOrSpaceClicked_(e)) {
            this.onVersionClick_();
        }
    }
    onSafeBrowsingPrefChanged_() {
        if (this.safeBrowsingPref_ === undefined) {
            return;
        }
        this.browserProxy_.getSafeBrowsingCardData().then((data) => {
            this.safeBrowsingCardData_ = data;
        });
    }
    onSafeBrowsingClick_() {
        this.metricsBrowserProxy_.recordSafetyHubCardStateClicked('Settings.SafetyHub.SafeBrowsingCard.StatusOnClick', this.safeBrowsingCardData_.state);
        this.browserProxy_.recordSafetyHubInteraction();
        Router.getInstance().navigateTo(routes.SECURITY, /* dynamicParams= */ undefined, 
        /* removeSearch= */ true);
    }
    onSafeBrowsingKeydown_(e) {
        e.stopPropagation();
        if (this.isEnterOrSpaceClicked_(e)) {
            this.onSafeBrowsingClick_();
        }
    }
    onUnusedSitePermissionListChanged_(permissions) {
        // The module should be visible if there is any item on the list, or if
        // there is no item on the list but the list was shown before.
        this.showUnusedSitePermissions_ =
            permissions.length > 0 || this.showUnusedSitePermissions_;
        this.hasDataForUnusedPermissions_ = true;
    }
    shouldShowNoRecommendationsState_() {
        return !(this.showUnusedSitePermissions_ || this.showExtensions_);
    }
    onExtensionsChanged_(numberOfExtensions) {
        this.showExtensions_ = !!numberOfExtensions;
        this.hasDataForExtensions_ = true;
    }
    computeVersionCardRole_() {
        return this.versionCardData_.state === CardState.WARNING ? 'button' :
            'link';
    }
    computeVersionCardAriaDescription_() {
        return this.versionCardData_.state === CardState.WARNING ?
            this.i18n('safetyHubVersionRelaunchAriaLabel') :
            this.i18n('safetyHubVersionNavigationAriaLabel');
    }
    isEnterOrSpaceClicked_(e) {
        return e.key === 'Enter' || e.key === ' ';
    }
    onAllModulesLoaded_() {
        // If the metrics are recorded already, don't record again.
        if (!this.shouldRecordMetric_) {
            return;
        }
        // Wait till the data of the cards be ready.
        if (!this.passwordCardData_ || !this.safeBrowsingCardData_ ||
            !this.versionCardData_) {
            return;
        }
        // Wait till the data of the modules be ready.
        if (!this.hasDataForUnusedPermissions_ || !this.hasDataForExtensions_) {
            return;
        }
        this.shouldRecordMetric_ = false;
        let hasAnyWarning = false;
        // TODO(crbug.com/40267370): Iterate over the cards/modules with for loop.
        if (this.passwordCardData_.state !== CardState.SAFE) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.PASSWORDS);
            hasAnyWarning = true;
        }
        if (this.safeBrowsingCardData_.state !== CardState.SAFE) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.SAFE_BROWSING);
            hasAnyWarning = true;
        }
        if (this.versionCardData_.state !== CardState.SAFE) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.VERSION);
            hasAnyWarning = true;
        }
        if (this.showUnusedSitePermissions_) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.PERMISSIONS);
            hasAnyWarning = true;
        }
        if (this.showExtensions_) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.EXTENSIONS);
            hasAnyWarning = true;
        }
        this.metricsBrowserProxy_.recordSafetyHubDashboardAnyWarning(hasAnyWarning);
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsSafetyHubPageElement.is, SettingsSafetyHubPageElement);
