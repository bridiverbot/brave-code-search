// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-about-page' contains version and OS related
 * information.
 */
// 
import '../relaunch_confirmation_dialog.js';
// 
import '../settings_page/settings_section.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
// 
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { RelaunchMixinLit, RestartType } from '../relaunch_mixin_lit.js';
import { getCss } from './about_page.css.js';
import { getHtml } from './about_page.html.js';
import { AboutPageBrowserProxyImpl, UpdateStatus } from './about_page_browser_proxy.js';
const SettingsAboutPageElementBase = RelaunchMixinLit(PrefServiceObserverMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement))));
export class SettingsAboutPageElement extends SettingsAboutPageElementBase {
    static get is() {
        return 'settings-about-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            currentUpdateStatusEvent_: { type: Object },
            isManaged_: { type: Boolean },
            managedByIcon_: { type: String },
            // 
            // 
            obsoleteSystemInfo_: { type: Object },
            showUpdateStatus_: { type: Boolean },
            showButtonContainer_: { type: Boolean },
            showRelaunch_: { type: Boolean },
            // 
            feedbackAllowedPref_: { type: Object },
        };
    }
    #currentUpdateStatusEvent__accessor_storage = {
        message: '',
        progress: 0,
        status: UpdateStatus.DISABLED,
    };
    get currentUpdateStatusEvent_() { return this.#currentUpdateStatusEvent__accessor_storage; }
    set currentUpdateStatusEvent_(value) { this.#currentUpdateStatusEvent__accessor_storage = value; }
    #isManaged__accessor_storage = loadTimeData.getBoolean('isManaged');
    get isManaged_() { return this.#isManaged__accessor_storage; }
    set isManaged_(value) { this.#isManaged__accessor_storage = value; }
    #managedByIcon__accessor_storage = loadTimeData.getString('managedByIcon');
    get managedByIcon_() { return this.#managedByIcon__accessor_storage; }
    set managedByIcon_(value) { this.#managedByIcon__accessor_storage = value; }
    #obsoleteSystemInfo__accessor_storage = {
        obsolete: loadTimeData.getBoolean('aboutObsoleteNowOrSoon'),
        endOfLine: loadTimeData.getBoolean('aboutObsoleteEndOfTheLine'),
    };
    // 
    // 
    get obsoleteSystemInfo_() { return this.#obsoleteSystemInfo__accessor_storage; }
    set obsoleteSystemInfo_(value) { this.#obsoleteSystemInfo__accessor_storage = value; }
    #showUpdateStatus__accessor_storage = false;
    get showUpdateStatus_() { return this.#showUpdateStatus__accessor_storage; }
    set showUpdateStatus_(value) { this.#showUpdateStatus__accessor_storage = value; }
    #showButtonContainer__accessor_storage = false;
    get showButtonContainer_() { return this.#showButtonContainer__accessor_storage; }
    set showButtonContainer_(value) { this.#showButtonContainer__accessor_storage = value; }
    #showRelaunch__accessor_storage = false;
    get showRelaunch_() { return this.#showRelaunch__accessor_storage; }
    set showRelaunch_(value) { this.#showRelaunch__accessor_storage = value; }
    #feedbackAllowedPref__accessor_storage;
    // 
    get feedbackAllowedPref_() { return this.#feedbackAllowedPref__accessor_storage; }
    set feedbackAllowedPref_(value) { this.#feedbackAllowedPref__accessor_storage = value; }
    aboutBrowserProxy_ = AboutPageBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.aboutBrowserProxy_.pageReady();
        // 
        this.startListening_();
        // 
        // 
    }
    // 
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('obsoleteSystemInfo_') ||
            changedPrivateProperties.has('currentUpdateStatusEvent_')) {
            this.updateShowUpdateStatus_();
        }
        if (changedPrivateProperties.has('currentUpdateStatusEvent_')) {
            this.showRelaunch_ = this.checkStatus_(UpdateStatus.NEARLY_UPDATED);
        }
        if (changedPrivateProperties.has('showRelaunch_')) {
            // Hide the button container if all buttons are hidden, otherwise the
            // container displays an unwanted border (see separator class).
            this.showButtonContainer_ = this.showRelaunch_;
        }
    }
    // 
    getPromoteUpdaterClass_() {
        // 
        return '';
    }
    // 
    startListening_() {
        this.addWebUiListener('update-status-changed', this.onUpdateStatusChanged_.bind(this));
        // 
        this.aboutBrowserProxy_.refreshUpdateStatus();
    }
    onUpdateStatusChanged_(event) {
        this.currentUpdateStatusEvent_ = event;
    }
    // 
    // 
    onLearnMoreClick_(event) {
        // Stop the propagation of events, so that clicking on links inside
        // actionable items won't trigger action.
        event.stopPropagation();
    }
    onHelpClick_() {
        this.aboutBrowserProxy_.openHelpPage();
    }
    onRelaunchClick_() {
        this.performRestart(RestartType.RELAUNCH);
    }
    // 
    updateShowUpdateStatus_() {
        if (this.obsoleteSystemInfo_.endOfLine) {
            this.showUpdateStatus_ = false;
            return;
        }
        this.showUpdateStatus_ =
            this.currentUpdateStatusEvent_.status !== UpdateStatus.DISABLED;
    }
    shouldShowLearnMoreLink_() {
        return this.currentUpdateStatusEvent_.status === UpdateStatus.FAILED;
    }
    getUpdateStatusMessage_() {
        switch (this.currentUpdateStatusEvent_.status) {
            case UpdateStatus.CHECKING:
            case UpdateStatus.NEED_PERMISSION_TO_UPDATE:
                return this.i18nAdvanced('aboutUpgradeCheckStarted');
            case UpdateStatus.NEARLY_UPDATED:
                return this.i18nAdvanced('aboutUpgradeRelaunch');
            case UpdateStatus.UPDATED:
                return this.i18nAdvanced('aboutUpgradeUpToDate');
            case UpdateStatus.UPDATING:
                assert(typeof this.currentUpdateStatusEvent_.progress === 'number');
                const progressPercent = this.currentUpdateStatusEvent_.progress + '%';
                if (this.currentUpdateStatusEvent_.progress > 0) {
                    // NOTE(dbeam): some platforms (i.e. Mac) always send 0% while
                    // updating (they don't support incremental upgrade progress). Though
                    // it's certainly quite possible to validly end up here with 0% on
                    // platforms that support incremental progress, nobody really likes
                    // seeing that they're 0% done with something.
                    return this.i18nAdvanced('aboutUpgradeUpdatingPercent', {
                        substitutions: [progressPercent],
                    });
                }
                return this.i18nAdvanced('aboutUpgradeUpdating');
            default:
                let result = '';
                const message = this.currentUpdateStatusEvent_.message;
                if (message) {
                    result += message;
                }
                const connectMessage = this.currentUpdateStatusEvent_.connectionTypes;
                if (connectMessage) {
                    result += `<div>${connectMessage}</div>`;
                }
                return sanitizeInnerHtml(result, { tags: ['br', 'pre'] });
        }
    }
    getUpdateStatusIcon_() {
        // If this platform has reached the end of the line, display an error icon
        // and ignore UpdateStatus.
        if (this.obsoleteSystemInfo_.endOfLine) {
            return 'cr:error-filled';
        }
        switch (this.currentUpdateStatusEvent_.status) {
            case UpdateStatus.DISABLED_BY_ADMIN:
                return 'cr20:domain';
            case UpdateStatus.FAILED:
                return 'cr:error-filled';
            case UpdateStatus.UPDATED:
            case UpdateStatus.NEARLY_UPDATED:
                return 'cr:check-circle';
            default:
                return '';
        }
    }
    shouldShowThrobber_() {
        if (this.obsoleteSystemInfo_.endOfLine) {
            return false;
        }
        switch (this.currentUpdateStatusEvent_.status) {
            case UpdateStatus.CHECKING:
            case UpdateStatus.UPDATING:
                return true;
            default:
                return false;
        }
    }
    // 
    checkStatus_(status) {
        return this.currentUpdateStatusEvent_.status === status;
    }
    onManagementPageClick_() {
        window.location.href = loadTimeData.getString('managementPageUrl');
    }
    onProductLogoClick_() {
        this.$.productLogo.animate({
            transform: ['none', 'rotate(-10turn)'],
        }, {
            duration: 500,
            easing: 'cubic-bezier(1, 0, 0, 1)',
        });
    }
    // 
    // 
    shouldShowIcons_() {
        if (this.obsoleteSystemInfo_.endOfLine) {
            return true;
        }
        return this.showUpdateStatus_;
    }
    // 
    // SettingsPlugin implementation
    searchContents(query) {
        // settings-about-page is intentionally not included in search.
        return Promise.resolve({
            canceled: false,
            matchCount: 0,
            wasClearSearch: query === '',
        });
    }
}
customElements.define(SettingsAboutPageElement.is, SettingsAboutPageElement);
