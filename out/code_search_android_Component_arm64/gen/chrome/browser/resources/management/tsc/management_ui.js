// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// 
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import './promotion_banner.js';
import '/strings.m.js';
// 
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
// 
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ManagementBrowserProxyImpl, ReportingType } from './management_browser_proxy.js';
// 
import { getCss } from './management_ui.css.js';
import { getHtml } from './management_ui.html.js';
const ManagementUiElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class ManagementUiElement extends ManagementUiElementBase {
    static get is() {
        return 'management-ui';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * List of messages related to application reporting.
             */
            applications_: { type: Array },
            /**
             * Title of subsection for application reporting.
             */
            applicationReportingSubtitle_: { type: String },
            /**
             * List of messages related to browser reporting.
             */
            browserReportingInfo_: { type: Array },
            /**
             * List of messages related to profile reporting.
             */
            profileReportingInfo_: { type: Array },
            /**
             * List of messages related to extension reporting.
             */
            extensions_: { type: Array },
            /**
             * Title of subsection for extension reporting.
             */
            extensionReportingSubtitle_: { type: String },
            /**
             * List of messages related to managed websites reporting.
             */
            managedWebsites_: { type: Array },
            managedWebsitesSubtitle_: { type: String },
            /**
             * Whether the promotion banner should be shown.
             */
            shouldShowPromotion_: { type: Boolean },
            // 
            subtitle_: { type: String },
            // 
            managementNoticeHtml_: { type: String },
            // 
            managed_: { type: Boolean },
            threatProtectionInfo_: { type: Object },
        };
    }
    #applications__accessor_storage = null;
    get applications_() { return this.#applications__accessor_storage; }
    set applications_(value) { this.#applications__accessor_storage = value; }
    #browserReportingInfo__accessor_storage = null;
    get browserReportingInfo_() { return this.#browserReportingInfo__accessor_storage; }
    set browserReportingInfo_(value) { this.#browserReportingInfo__accessor_storage = value; }
    #profileReportingInfo__accessor_storage = null;
    get profileReportingInfo_() { return this.#profileReportingInfo__accessor_storage; }
    set profileReportingInfo_(value) { this.#profileReportingInfo__accessor_storage = value; }
    #extensions__accessor_storage = null;
    get extensions_() { return this.#extensions__accessor_storage; }
    set extensions_(value) { this.#extensions__accessor_storage = value; }
    #managedWebsites__accessor_storage = null;
    get managedWebsites_() { return this.#managedWebsites__accessor_storage; }
    set managedWebsites_(value) { this.#managedWebsites__accessor_storage = value; }
    #managedWebsitesSubtitle__accessor_storage = '';
    get managedWebsitesSubtitle_() { return this.#managedWebsitesSubtitle__accessor_storage; }
    set managedWebsitesSubtitle_(value) { this.#managedWebsitesSubtitle__accessor_storage = value; }
    #shouldShowPromotion__accessor_storage = false;
    get shouldShowPromotion_() { return this.#shouldShowPromotion__accessor_storage; }
    set shouldShowPromotion_(value) { this.#shouldShowPromotion__accessor_storage = value; }
    #subtitle__accessor_storage = '';
    // 
    get subtitle_() { return this.#subtitle__accessor_storage; }
    set subtitle_(value) { this.#subtitle__accessor_storage = value; }
    #managementNoticeHtml__accessor_storage = window.trustedTypes.emptyHTML;
    // 
    get managementNoticeHtml_() { return this.#managementNoticeHtml__accessor_storage; }
    set managementNoticeHtml_(value) { this.#managementNoticeHtml__accessor_storage = value; }
    #managed__accessor_storage = false;
    // 
    get managed_() { return this.#managed__accessor_storage; }
    set managed_(value) { this.#managed__accessor_storage = value; }
    #applicationReportingSubtitle__accessor_storage = '';
    get applicationReportingSubtitle_() { return this.#applicationReportingSubtitle__accessor_storage; }
    set applicationReportingSubtitle_(value) { this.#applicationReportingSubtitle__accessor_storage = value; }
    #extensionReportingSubtitle__accessor_storage = '';
    get extensionReportingSubtitle_() { return this.#extensionReportingSubtitle__accessor_storage; }
    set extensionReportingSubtitle_(value) { this.#extensionReportingSubtitle__accessor_storage = value; }
    #threatProtectionInfo__accessor_storage = null;
    get threatProtectionInfo_() { return this.#threatProtectionInfo__accessor_storage; }
    set threatProtectionInfo_(value) { this.#threatProtectionInfo__accessor_storage = value; }
    browserProxy_ = ManagementBrowserProxyImpl.getInstance();
    /** @override */
    connectedCallback() {
        super.connectedCallback();
        document.documentElement.classList.remove('loading');
        this.updateManagedFields_();
        this.initReportingInfo_();
        this.getThreatProtectionInfo_();
        // 
        this.addWebUiListener('browser-reporting-info-updated', (reportingInfo) => this.onBrowserReportingInfoReceived_(reportingInfo));
        this.addWebUiListener('profile-reporting-info-updated', (reportingInfo) => this.onProfileReportingInfoReceived_(reportingInfo));
        this.addWebUiListener('managed_data_changed', () => {
            this.updateManagedFields_();
        });
        this.addWebUiListener('threat-protection-info-updated', (info) => this.threatProtectionInfo_ = info);
        this.getExtensions_();
        this.getManagedWebsites_();
        this.getApplications_();
        // Assign the promise result directly to the property
        this.browserProxy_.shouldShowPromotion().then(shouldShowPromotion => {
            this.shouldShowPromotion_ = shouldShowPromotion;
        });
        // 
    }
    initReportingInfo_() {
        this.browserProxy_.initBrowserReportingInfo().then(reportingInfo => this.onBrowserReportingInfoReceived_(reportingInfo));
        this.browserProxy_.initProfileReportingInfo().then(reportingInfo => this.onProfileReportingInfoReceived_(reportingInfo));
    }
    onBrowserReportingInfoReceived_(reportingInfo) {
        const reportingInfoMap = reportingInfo.reduce((info, response) => {
            info[response.reportingType] = info[response.reportingType] || {
                icon: this.getIconForReportingType_(response.reportingType),
                messageIds: [],
            };
            info[response.reportingType].messageIds.push(response.messageId);
            return info;
        }, {});
        const reportingTypeOrder = {
            [ReportingType.URL]: 1,
            [ReportingType.SECURITY]: 2,
            [ReportingType.EXTENSIONS]: 3,
            [ReportingType.USER]: 4,
            [ReportingType.USER_ACTIVITY]: 5,
            [ReportingType.DEVICE]: 6,
            [ReportingType.LEGACY_TECH]: 7,
        };
        this.browserReportingInfo_ =
            Object.keys(reportingInfoMap)
                .sort((a, b) => reportingTypeOrder[a] - reportingTypeOrder[b])
                .map(reportingType => reportingInfoMap[reportingType]);
    }
    onProfileReportingInfoReceived_(reportingInfo) {
        this.profileReportingInfo_ =
            reportingInfo.map((info) => ({
                messageIds: [info.messageId],
            }));
    }
    getExtensions_() {
        this.browserProxy_.getExtensions().then(extensions => {
            this.extensions_ = extensions;
        });
    }
    getManagedWebsites_() {
        this.browserProxy_.getManagedWebsites().then(managedWebsites => {
            this.managedWebsites_ = managedWebsites;
        });
    }
    getApplications_() {
        this.browserProxy_.getApplications().then(applications => {
            this.applications_ = applications;
        });
    }
    getThreatProtectionInfo_() {
        this.browserProxy_.getThreatProtectionInfo().then(info => {
            this.threatProtectionInfo_ = info;
        });
    }
    /**
     * @return Whether there is threat protection info to show.
     */
    showThreatProtectionInfo_() {
        return !!this.threatProtectionInfo_ &&
            (this.threatProtectionInfo_.info.length > 0 ||
                !!this.threatProtectionInfo_.showSecureGatewayDisclosure);
    }
    // 
    /**
     * @return Whether there are browser reporting info to show.
     */
    showBrowserReportingInfo_() {
        return !!this.browserReportingInfo_ &&
            this.browserReportingInfo_.length > 0;
    }
    /**
     * @return Whether there are profile reporting info to show with new format.
     */
    showProfileReportingInfo_() {
        return !!this.profileReportingInfo_ &&
            this.profileReportingInfo_.length > 0;
    }
    /**
     * @return Whether there are extension reporting info to show.
     */
    showExtensionReportingInfo_() {
        return !!this.extensions_ && this.extensions_.length > 0;
    }
    /**
     * @return Whether there are application reporting info to show.
     */
    showApplicationReportingInfo_() {
        return !!this.applications_ && this.applications_.length > 0;
    }
    /**
     * @return Whether there is managed websites info to show.
     */
    showManagedWebsitesInfo_() {
        return !!this.managedWebsites_ && this.managedWebsites_.length > 0;
    }
    /**
     * @return The associated icon.
     */
    getIconForReportingType_(reportingType) {
        switch (reportingType) {
            case ReportingType.SECURITY:
                return 'cr:security';
            case ReportingType.DEVICE:
                return 'cr:computer';
            case ReportingType.EXTENSIONS:
                return 'cr:chrome-extension-filled';
            case ReportingType.USER:
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'management:account-circle-filled' :
                    'management:account-circle-old';
            case ReportingType.USER_ACTIVITY:
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'management:public' :
                    'management:public-old';
            case ReportingType.LEGACY_TECH:
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'management:language' :
                    'management:legacy-tech-old';
            case ReportingType.URL:
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'management:link' :
                    'management:link-old';
            default:
                return 'cr:security';
        }
    }
    // 
    onPromotionDismissed_() {
        this.shouldShowPromotion_ = false;
    }
    updateManagedFields_() {
        this.browserProxy_.getContextualManagedData().then(data => {
            this.managed_ = data.managed;
            this.extensionReportingSubtitle_ = data.extensionReportingSubtitle;
            this.managedWebsitesSubtitle_ = data.managedWebsitesSubtitle;
            this.applicationReportingSubtitle_ = data.applicationReportingSubtitle;
            this.subtitle_ = data.pageSubtitle;
            // 
            // 
            this.managementNoticeHtml_ = sanitizeInnerHtml(data.browserManagementNotice, { attrs: ['aria-label'] });
            // 
        });
    }
}
customElements.define(ManagementUiElement.is, ManagementUiElement);
