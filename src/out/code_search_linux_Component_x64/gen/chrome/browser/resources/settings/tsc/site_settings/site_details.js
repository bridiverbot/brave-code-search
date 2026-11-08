// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { MetricsBrowserProxyImpl, PrivacyElementInteractions } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixin, Router } from '../router.js';
import { SettingsViewMixin } from '../settings_page/settings_view_mixin.js';
import { ChooserType, ContentSetting, ContentSettingsTypes, JavascriptOptimizerSetting } from './constants.js';
import { getTemplate } from './site_details.html.js';
import { SiteSettingsMixin } from './site_settings_mixin.js';
import { WebsiteUsageBrowserProxyImpl } from './website_usage_browser_proxy.js';
const SiteDetailsElementBase = RouteObserverMixin(SiteSettingsMixin(SettingsViewMixin(WebUiListenerMixin(PrefServiceObserverMixin(I18nMixin(PolymerElement))))));
export class SiteDetailsElement extends SiteDetailsElementBase {
    static get is() {
        return 'site-details';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Whether unified autoplay blocking is enabled.
             */
            blockAutoplayEnabled_: Boolean,
            /**
             * Use the string representing the origin or extension name as the page
             * title of the settings-subpage parent.
             */
            pageTitle_: {
                type: String,
                notify: true,
            },
            /**
             * The origin that this widget is showing details for.
             */
            origin_: String,
            /**
             * The amount of data stored for the origin.
             */
            storedData_: {
                type: String,
                value: '',
            },
            /**
             * The number of cookies stored for the origin.
             */
            numCookies_: {
                type: String,
                value: '',
            },
            /**
             * The related website set info for a site including owner and members
             * count.
             */
            rwsMembership_: {
                type: String,
                value: '',
            },
            /**
             * Mock preference used to power managed policy icon for related website
             * sets.
             */
            rwsEnterprisePref_: Object,
            enableExperimentalWebPlatformFeatures_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableExperimentalWebPlatformFeatures');
                },
            },
            enableWebBluetoothNewPermissionsBackend_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableWebBluetoothNewPermissionsBackend'),
            },
            // 
            enableHandTrackingContentSetting_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableHandTrackingContentSetting'),
            },
            enableCapturedSurfaceControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableCapturedSurfaceControl'),
            },
            contentSettingsTypesEnum_: {
                type: Object,
                value: ContentSettingsTypes,
            },
            chooserTypeEnum_: {
                type: Object,
                value: ChooserType,
            },
            enableKeyboardLockPrompt_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableKeyboardLockPrompt'),
            },
            enableWebAppInstallation_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableWebAppInstallation'),
            },
            enableLocalNetworkAccessSetting_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableLocalNetworkAccessSetting'),
            },
            /**
             * Whether the "Block if site is unfamiliar" label should be used for the
             * default javascript-optimizer content setting.
             */
            useBlockIfUnfamiliarLabelForV8OptimizerDefault_: {
                type: Boolean,
                value: false,
            },
            /**
             * When the app at url is an isolated web app or an isolated sub app,
             * this returns a string explaining that sub apps share permissions
             * with the parent app that installed them.
             */
            subAppsPermissionExplanation_: {
                type: String,
                value: '',
            },
        };
    }
    websiteUsageProxy_ = WebsiteUsageBrowserProxyImpl.getInstance();
    parentAppOrigin_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.addPrefObserver('generated.javascript_optimizer', pref => {
            this.useBlockIfUnfamiliarLabelForV8OptimizerDefault_ = pref.value ===
                JavascriptOptimizerSetting.BLOCKED_FOR_UNFAMILIAR_SITES;
        });
        this.addWebUiListener('usage-total-changed', (host, data, cookies, rws, rwsPolicy) => {
            this.onUsageTotalChanged_(host, data, cookies, rws, rwsPolicy);
        });
        this.addWebUiListener('contentSettingSitePermissionChanged', (category, origin) => this.onPermissionChanged_(category, origin));
        this.addWebUiListener('onBlockAutoplayStatusChanged', (status) => this.onBlockAutoplayStatusChanged_(status));
        // Refresh block autoplay status from the backend.
        this.browserProxy.fetchBlockAutoplayStatus();
    }
    /**
     * RouteObserverMixin
     */
    currentRouteChanged(route, oldRoute) {
        super.currentRouteChanged(route, oldRoute);
        if (route !== routes.SITE_SETTINGS_SITE_DETAILS) {
            return;
        }
        const site = Router.getInstance().getQueryParameters().get('site') ?? '';
        this.origin_ = site;
        this.browserProxy.isOriginValid(this.origin_).then((valid) => {
            if (!valid) {
                Router.getInstance().navigateToPreviousRoute();
            }
            else {
                this.storedData_ = '';
                this.websiteUsageProxy_.fetchUsageTotal(this.origin_);
                this.browserProxy.getCategoryList(this.origin_).then((categoryList) => {
                    this.updatePermissions_(categoryList, /*hideOthers=*/ true);
                });
                this.browserProxy.getSubAppsPermissionExplanation(this.origin_)
                    .then((info) => {
                    if (info.isSubApp && info.appName && info.parentAppName &&
                        info.parentAppOrigin) {
                        this.parentAppOrigin_ = info.parentAppOrigin;
                        this.subAppsPermissionExplanation_ = this.i18n('siteSettingsSubAppPermissionExplanation', info.appName, info.parentAppName);
                    }
                    else if (info.hasSubApps && info.appName) {
                        this.parentAppOrigin_ = null;
                        this.subAppsPermissionExplanation_ = this.i18n('siteSettingsParentAppPermissionExplanation', info.appName);
                    }
                    else {
                        this.parentAppOrigin_ = null;
                        this.subAppsPermissionExplanation_ = '';
                    }
                });
            }
        });
    }
    /**
     * Called when a site within a category has been changed.
     * @param category The category that changed.
     * @param origin The origin of the site that changed.
     */
    onPermissionChanged_(category, origin) {
        if (this.origin_ === undefined || this.origin_ === '' ||
            origin === undefined || origin === '') {
            return;
        }
        this.browserProxy.getCategoryList(this.origin_).then((categoryList) => {
            if (categoryList.includes(category)) {
                this.updatePermissions_([category], /*hideOthers=*/ false);
            }
        });
    }
    /**
     * Callback for when the usage total is known.
     * @param origin The origin that the usage was fetched for.
     * @param usage The string showing how much data the given host is using.
     * @param cookies The string showing how many cookies the given host is using.
     * @param rwsMembership The string showing related website set membership
     *     details.
     * @param rwsPolicy Whether a policy is applied to this RWS member.
     */
    onUsageTotalChanged_(origin, usage, cookies, rwsMembership, rwsPolicy) {
        if (this.origin_ === origin) {
            this.storedData_ = usage;
            this.numCookies_ = cookies;
            this.rwsMembership_ = rwsMembership;
            this.rwsEnterprisePref_ = rwsPolicy ? Object.assign({
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
                controlledBy: chrome.settingsPrivate.ControlledBy.DEVICE_POLICY,
            }) :
                undefined;
        }
    }
    /**
     * Retrieves the permissions listed in |categoryList| from the backend for
     * |this.origin_|.
     * @param categoryList The list of categories to update permissions for.
     * @param hideOthers If true, permissions for categories not in
     *     |categoryList| will be hidden.
     */
    updatePermissions_(categoryList, hideOthers) {
        const permissionsMap = Array.prototype.reduce.call(this.shadowRoot.querySelectorAll('site-details-permission'), (map, element) => {
            if (categoryList.includes(element.category)) {
                map[element.category] = element;
            }
            else if (hideOthers) {
                // This will hide any permission not in the category list.
                element.site = null;
            }
            return map;
        }, {});
        this.browserProxy.getOriginPermissions(this.origin_, categoryList)
            .then((exceptionList) => {
            exceptionList.forEach((exception, i) => {
                // |exceptionList| should be in the same order as
                // |categoryList|.
                if (permissionsMap[categoryList[i]]) {
                    permissionsMap[categoryList[i]].site = exception;
                }
            });
            // The displayName won't change, so just use the first
            // exception.
            assert(exceptionList.length > 0);
            this.pageTitle_ = exceptionList[0].displayName;
        });
    }
    onCloseDialog_(e) {
        e.target.closest('cr-dialog').close();
    }
    /**
     * Confirms the resetting of all content settings for an origin.
     */
    onConfirmClearSettings_(e) {
        e.preventDefault();
        this.$.confirmResetSettings.showModal();
    }
    /**
     * Confirms the clearing of storage for an origin.
     */
    onConfirmClearStorage_(e) {
        e.preventDefault();
        this.$.confirmClearStorage.showModal();
    }
    /**
     * Resets all permissions for the current origin.
     */
    onResetSettings_(e) {
        this.browserProxy.setOriginPermissions(this.origin_, null, ContentSetting.DEFAULT);
        this.onCloseDialog_(e);
    }
    /**
     * Clears all data stored, except cookies, for the current origin.
     */
    onClearStorage_(e) {
        MetricsBrowserProxyImpl.getInstance().recordSettingsPageHistogram(PrivacyElementInteractions.SITE_DETAILS_CLEAR_DATA);
        if (this.hasUsage_(this.storedData_, this.numCookies_)) {
            this.websiteUsageProxy_.clearUsage(this.toUrl(this.origin_).href);
            this.storedData_ = '';
            this.numCookies_ = '';
        }
        this.onCloseDialog_(e);
        const toFocus = this.shadowRoot.querySelector('#resetSettingsButton');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    /**
     * Checks whether this site has any usage information to show.
     * @return Whether there is any usage information to show (e.g. disk or
     *     battery).
     */
    hasUsage_(storage, cookies) {
        return storage !== '' || cookies !== '';
    }
    /**
     * Checks whether this site has both storage and cookies information to show.
     * @return Whether there are both storage and cookies information to show.
     */
    hasDataAndCookies_(storage, cookies) {
        return storage !== '' && cookies !== '';
    }
    onResetSettingsDialogClosed_() {
        const toFocus = this.shadowRoot.querySelector('#resetSettingsButton');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    onClearStorageDialogClosed_() {
        const toFocus = this.shadowRoot.querySelector('#clearStorage');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    // Called when the block autoplay status changes.
    onBlockAutoplayStatusChanged_(autoplayStatus) {
        this.blockAutoplayEnabled_ = autoplayStatus.pref.value;
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
    onSubAppPermissionExplanationLinkClicked_() {
        if (this.parentAppOrigin_) {
            Router.getInstance().navigateTo(routes.SITE_SETTINGS_SITE_DETAILS, new URLSearchParams('site=' + this.parentAppOrigin_));
        }
    }
}
customElements.define(SiteDetailsElement.is, SiteDetailsElement);
