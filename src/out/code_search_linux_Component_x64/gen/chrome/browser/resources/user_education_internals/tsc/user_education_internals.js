// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_components/help_bubble/help_bubble.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/icons.html.js';
import './user_education_internals_card.js';
import './user_education_whats_new_internals_card.js';
// 
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { TrackedElementManager } from 'chrome://resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory as userEducationProxyFactory, FeaturePromoFeatureUsedAction } from 'chrome://resources/mojo/components/user_education/webui/user_education.mojom-webui.js';
import { getCss } from './user_education_internals.css.js';
import { getHtml } from './user_education_internals.html.js';
import { UserEducationInternalsPageHandler } from './user_education_internals.mojom-webui.js';
const CLEAR_PROMO_DATA_WARNING = 'Clear all data associated with this promo?\n' +
    'Note: because of session tracking and event constraints, ' +
    'Feature Engagement may still disallow some promos.';
const CLEAR_NEW_BADGE_DATA_WARNING = 'Clear all data associated with this "New" Badge?';
const CLEAR_NTP_PROMO_WARNING = 'Clear all data associated with this NTP promo?';
var PromoActions;
(function (PromoActions) {
    PromoActions[PromoActions["LAUNCH_PROMO"] = 0] = "LAUNCH_PROMO";
    PromoActions[PromoActions["LAUNCH_TUTORIAL"] = 1] = "LAUNCH_TUTORIAL";
    PromoActions[PromoActions["TEST_NEW_BADGE"] = 2] = "TEST_NEW_BADGE";
    PromoActions[PromoActions["NOTIFY_PROMO_FEATURE_USED"] = 3] = "NOTIFY_PROMO_FEATURE_USED";
    PromoActions[PromoActions["CLEAR_FEATURE_PROMO_DATA"] = 4] = "CLEAR_FEATURE_PROMO_DATA";
    PromoActions[PromoActions["NOTIFY_NEW_BADGE_FEATURE_USED"] = 5] = "NOTIFY_NEW_BADGE_FEATURE_USED";
    PromoActions[PromoActions["CLEAR_NEW_BADGE_DATA"] = 6] = "CLEAR_NEW_BADGE_DATA";
    PromoActions[PromoActions["CLEAR_NON_IPH_PROMO_DATA"] = 7] = "CLEAR_NON_IPH_PROMO_DATA";
    PromoActions[PromoActions["CLEAR_NTP_PROMO_DATA"] = 8] = "CLEAR_NTP_PROMO_DATA";
})(PromoActions || (PromoActions = {}));
const PROMO_ACTIONS = [
    {
        caption: 'Launch',
        isLaunch: true,
        key: PromoActions.LAUNCH_PROMO,
    },
    {
        caption: 'Notify Feature Used',
        isLaunch: false,
        key: PromoActions.NOTIFY_PROMO_FEATURE_USED,
    },
    {
        caption: 'Clear Promo Data',
        isLaunch: false,
        key: PromoActions.CLEAR_FEATURE_PROMO_DATA,
        warning: CLEAR_PROMO_DATA_WARNING,
    },
];
const TUTORIAL_ACTIONS = [{
        caption: 'Launch',
        isLaunch: true,
        key: PromoActions.LAUNCH_TUTORIAL,
    }];
const NON_IPH_PROMO_ACTIONS = [{
        caption: 'Clear Promo Data',
        isLaunch: false,
        key: PromoActions.CLEAR_NON_IPH_PROMO_DATA,
        warning: CLEAR_PROMO_DATA_WARNING,
    }];
const NTP_PROMO_ACTIONS = [{
        caption: 'Clear Promo Data',
        isLaunch: false,
        key: PromoActions.CLEAR_NTP_PROMO_DATA,
        warning: CLEAR_NTP_PROMO_WARNING,
    }];
const NEW_BADGE_ACTIONS = [
    {
        caption: 'Test',
        isLaunch: true,
        key: PromoActions.TEST_NEW_BADGE,
    },
    {
        caption: 'Notify Feature Used',
        isLaunch: false,
        key: PromoActions.NOTIFY_NEW_BADGE_FEATURE_USED,
    },
    {
        caption: 'Clear New Badge Data',
        isLaunch: false,
        key: PromoActions.CLEAR_NEW_BADGE_DATA,
        warning: CLEAR_NEW_BADGE_DATA_WARNING,
    },
];
const UserEducationInternalsElementBase = HelpBubbleMixinLit(CrLitElement);
export class UserEducationInternalsElement extends UserEducationInternalsElementBase {
    static get is() {
        return 'user-education-internals';
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
             * Substring filter that (when set) shows only entries containing
             * `filter`.
             */
            filter: { type: String },
            /**
             * Index of the selected "tab" determining which data to show. -1 means
             * show all.
             */
            selectedTabIndex: { type: Number },
            /**
             * List of tutorials and feature_promos that can be started.
             * Each tutorial has a string identifier.
             */
            tutorials_: { type: Array },
            featurePromos_: { type: Array },
            featurePromoErrorMessage_: { type: String },
            narrow_: { type: Boolean },
            newBadges_: { type: Array },
            nonIphPromos_: { type: Array },
            /**
             * Indicates if the information about session data is expanded or
             * collapsed.
             */
            sessionExpanded_: {
                type: Boolean,
                value: false,
            },
            ntpPromoPreferencesExpanded_: {
                type: Boolean,
                value: false,
            },
            /**
             * The current version used to request the What's New page.
             */
            whatsNewVersionToRequest_: {
                type: Number,
            },
            whatsNewModules_: { type: Array },
            whatsNewEditions_: { type: Array },
            ntpPromos_: { type: Array },
            ntpPromoPreferences_: { type: Array },
            sessionData_: { type: Array },
            currentChromeVersion_: { type: Number },
            initialized_: { type: Boolean },
        };
    }
    #filter_accessor_storage = '';
    get filter() { return this.#filter_accessor_storage; }
    set filter(value) { this.#filter_accessor_storage = value; }
    #selectedTabIndex_accessor_storage = -1;
    get selectedTabIndex() { return this.#selectedTabIndex_accessor_storage; }
    set selectedTabIndex(value) { this.#selectedTabIndex_accessor_storage = value; }
    #tutorials__accessor_storage = [];
    get tutorials_() { return this.#tutorials__accessor_storage; }
    set tutorials_(value) { this.#tutorials__accessor_storage = value; }
    #featurePromos__accessor_storage = [];
    get featurePromos_() { return this.#featurePromos__accessor_storage; }
    set featurePromos_(value) { this.#featurePromos__accessor_storage = value; }
    #newBadges__accessor_storage = [];
    get newBadges_() { return this.#newBadges__accessor_storage; }
    set newBadges_(value) { this.#newBadges__accessor_storage = value; }
    #nonIphPromos__accessor_storage = [];
    get nonIphPromos_() { return this.#nonIphPromos__accessor_storage; }
    set nonIphPromos_(value) { this.#nonIphPromos__accessor_storage = value; }
    #whatsNewModules__accessor_storage = [];
    get whatsNewModules_() { return this.#whatsNewModules__accessor_storage; }
    set whatsNewModules_(value) { this.#whatsNewModules__accessor_storage = value; }
    #whatsNewEditions__accessor_storage = [];
    get whatsNewEditions_() { return this.#whatsNewEditions__accessor_storage; }
    set whatsNewEditions_(value) { this.#whatsNewEditions__accessor_storage = value; }
    #ntpPromos__accessor_storage = [];
    get ntpPromos_() { return this.#ntpPromos__accessor_storage; }
    set ntpPromos_(value) { this.#ntpPromos__accessor_storage = value; }
    #ntpPromoPreferences__accessor_storage = [];
    get ntpPromoPreferences_() { return this.#ntpPromoPreferences__accessor_storage; }
    set ntpPromoPreferences_(value) { this.#ntpPromoPreferences__accessor_storage = value; }
    #ntpPromoPreferencesExpanded__accessor_storage = false;
    get ntpPromoPreferencesExpanded_() { return this.#ntpPromoPreferencesExpanded__accessor_storage; }
    set ntpPromoPreferencesExpanded_(value) { this.#ntpPromoPreferencesExpanded__accessor_storage = value; }
    #featurePromoErrorMessage__accessor_storage = '';
    get featurePromoErrorMessage_() { return this.#featurePromoErrorMessage__accessor_storage; }
    set featurePromoErrorMessage_(value) { this.#featurePromoErrorMessage__accessor_storage = value; }
    #narrow__accessor_storage = false;
    get narrow_() { return this.#narrow__accessor_storage; }
    set narrow_(value) { this.#narrow__accessor_storage = value; }
    #sessionExpanded__accessor_storage = false;
    get sessionExpanded_() { return this.#sessionExpanded__accessor_storage; }
    set sessionExpanded_(value) { this.#sessionExpanded__accessor_storage = value; }
    #sessionData__accessor_storage = [];
    get sessionData_() { return this.#sessionData__accessor_storage; }
    set sessionData_(value) { this.#sessionData__accessor_storage = value; }
    #whatsNewVersionToRequest__accessor_storage = loadTimeData.getInteger('whatsNewVersionToRequest');
    get whatsNewVersionToRequest_() { return this.#whatsNewVersionToRequest__accessor_storage; }
    set whatsNewVersionToRequest_(value) { this.#whatsNewVersionToRequest__accessor_storage = value; }
    #currentChromeVersion__accessor_storage = loadTimeData.getInteger('currentChromeVersion');
    get currentChromeVersion_() { return this.#currentChromeVersion__accessor_storage; }
    set currentChromeVersion_(value) { this.#currentChromeVersion__accessor_storage = value; }
    #initialized__accessor_storage = false;
    get initialized_() { return this.#initialized__accessor_storage; }
    set initialized_(value) { this.#initialized__accessor_storage = value; }
    handler_;
    userEducation_;
    constructor() {
        super();
        this.handler_ = UserEducationInternalsPageHandler.getRemote();
        this.userEducation_ = userEducationProxyFactory.getInstance().handler;
    }
    firstUpdated() {
        ColorChangeUpdater.forDocument().start();
        this.checkInitializedAndReadAllData_();
        // These are used in tests of the TrackedElementManager and its handler.
        const manager = TrackedElementManager.getInstance();
        manager.startTracking(this.$.toolbar, 'UserEducationInternalsUI::kToolbarElementId');
        manager.startTracking(this.$.menu, 'UserEducationInternalsUI::kMenuElementId');
        for (const child of this.$.menu.children) {
            if (child instanceof HTMLElement && child.getAttribute('index')) {
                manager.startTracking(child, 'UserEducationInternalsUI::kMenuItemElementId', { secondaryId: 'index:' + child.getAttribute('index') });
            }
        }
    }
    // If data is read from the backend before the Feature Engagement system is
    // initialized, certain information will be missing (including all Non-IPH
    // Promos). This method polls the backend until initialization is complete and
    // then loads the data.
    checkInitializedAndReadAllData_() {
        this.handler_.isFeatureEngagementInitialized().then(({ isInitialized }) => {
            if (isInitialized) {
                this.initialized_ = true;
                this.readAllData_();
            }
            else {
                setTimeout(() => {
                    this.checkInitializedAndReadAllData_();
                }, 1000);
            }
        });
    }
    readAllData_() {
        this.handler_.getTutorials().then(({ tutorialInfos }) => {
            this.tutorials_ = tutorialInfos;
        });
        this.handler_.getSessionData().then(({ sessionData }) => {
            this.sessionData_ = sessionData;
        });
        this.handler_.getFeaturePromos().then(({ featurePromos }) => {
            this.featurePromos_ = featurePromos;
        });
        this.handler_.getNewBadges().then(({ newBadges }) => {
            this.newBadges_ = newBadges;
        });
        this.handler_.getNonIphPromos().then(({ nonIphPromos }) => {
            this.nonIphPromos_ = nonIphPromos;
        });
        this.handler_.getWhatsNewModules().then(({ whatsNewModules }) => {
            this.whatsNewModules_ = whatsNewModules;
        });
        this.handler_.getWhatsNewEditions().then(({ whatsNewEditions }) => {
            this.whatsNewEditions_ = whatsNewEditions;
        });
        this.handler_.getNtpPromos().then(({ ntpPromos }) => {
            this.ntpPromos_ = ntpPromos;
        });
        this.handler_.getNtpPromoPreferences().then(({ ntpPromoPreferences }) => {
            this.ntpPromoPreferences_ = ntpPromoPreferences;
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // There is a self-referential demo IPH for showing a help bubble in a
        // WebUI (specifically, this WebUI). Because of that, the target anchor for
        // the help bubble needs to be registered.
        //
        // However, because we want to attach the help bubble to an element
        // dynamically created, we have to wait until after the element is
        // populated to register the anchor element.
        if (changedProperties.has('featurePromos_')) {
            if (this.shadowRoot.querySelector('#IPH_WebUiHelpBubbleTest')) {
                this.registerHelpBubble('kWebUIIPHDemoElementIdentifier', ['#IPH_WebUiHelpBubbleTest', '#launch']);
            }
        }
    }
    getPromoActions_() {
        return PROMO_ACTIONS;
    }
    getTutorialActions_() {
        return TUTORIAL_ACTIONS;
    }
    getNonIphPromoActions_() {
        return NON_IPH_PROMO_ACTIONS;
    }
    getNtpPromoActions_() {
        return NTP_PROMO_ACTIONS;
    }
    getNewBadgeActions_() {
        return NEW_BADGE_ACTIONS;
    }
    onSearchChanged_(e) {
        this.filter = e.detail.toLowerCase();
    }
    onPromoAction_(e) {
        switch (e.detail.key) {
            case PromoActions.LAUNCH_PROMO:
                this.onFeaturePromoLaunch_(e.detail.promo);
                break;
            case PromoActions.NOTIFY_PROMO_FEATURE_USED:
                this.onNotifyFeaturePromoFeatureUsed_(e.detail.promo);
                break;
            case PromoActions.CLEAR_FEATURE_PROMO_DATA:
                this.onFeaturePromoClearPromoData_(e.detail.promo);
                break;
            case PromoActions.LAUNCH_TUTORIAL:
                this.onTutorialLaunch_(e.detail.promo);
                break;
            case PromoActions.CLEAR_NON_IPH_PROMO_DATA:
                this.onNonIphClearPromoData_(e.detail.promo);
                break;
            case PromoActions.TEST_NEW_BADGE:
                this.onTestNewBadge_(e.detail.promo);
                break;
            case PromoActions.NOTIFY_NEW_BADGE_FEATURE_USED:
                this.onNotifyNewBadgeFeatureUsed_(e.detail.promo);
                break;
            case PromoActions.CLEAR_NEW_BADGE_DATA:
                this.onNewBadgeClearPromoData_(e.detail.promo);
                break;
            case PromoActions.CLEAR_NTP_PROMO_DATA:
                this.onNtpPromoClearPromoData_(e.detail.promo);
                break;
            default:
                assertNotReached('Unexpected enum value: ' + e.detail.key);
        }
    }
    onTutorialLaunch_(id) {
        this.featurePromoErrorMessage_ = '';
        this.handler_.startTutorial(id).then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
        });
    }
    onFeaturePromoLaunch_(id) {
        this.featurePromoErrorMessage_ = '';
        // Promos may go into a queue, so notify the user that the promo is waiting
        // to show. If an error occurs, the toast will be updated with the error
        // message.
        this.featurePromoErrorMessage_ = 'Waiting to show promo...';
        this.$.errorMessageToast.show();
        this.handler_.showFeaturePromo(id).then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
        });
    }
    onNotifyFeaturePromoFeatureUsed_(id) {
        this.userEducation_.notifyFeaturePromoFeatureUsed(id, FeaturePromoFeatureUsedAction.kClosePromoIfPresent);
        this.handler_.getFeaturePromos().then(({ featurePromos }) => {
            this.featurePromos_ = featurePromos;
        });
    }
    onClearSessionDataClick_() {
        if (!confirm('This will reset the browser to a "fresh profile" state,' +
            ' which may trigger multiple grace periods. Proceed?')) {
            return;
        }
        this.handler_.clearSessionData().then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getSessionData().then(({ sessionData }) => {
                    this.sessionData_ = sessionData;
                    this.requestUpdate();
                });
            }
        });
    }
    onForceNewSessionClick_() {
        this.handler_.forceNewSession().then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getSessionData().then(({ sessionData }) => {
                    this.sessionData_ = sessionData;
                    this.requestUpdate();
                });
            }
        });
    }
    onRemoveGracePeriodsClick_() {
        this.handler_.removeGracePeriods().then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getSessionData().then(({ sessionData }) => {
                    this.sessionData_ = sessionData;
                    this.requestUpdate();
                });
            }
        });
    }
    onFeaturePromoClearPromoData_(id) {
        this.featurePromoErrorMessage_ = '';
        this.handler_.clearFeaturePromoData(id).then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getFeaturePromos().then(({ featurePromos }) => {
                    this.featurePromos_ = featurePromos;
                    this.requestUpdate();
                });
            }
        });
    }
    onTestNewBadge_(id) {
        this.featurePromoErrorMessage_ = '';
        this.userEducation_.maybeShowNewBadgeFor(id).then(({ shouldShow }) => {
            this.featurePromoErrorMessage_ =
                shouldShow ? 'Badge would show!' : 'Badge would NOT show.';
            this.$.errorMessageToast.show();
            this.handler_.getNewBadges().then(({ newBadges }) => {
                this.newBadges_ = newBadges;
            });
        });
    }
    onNotifyNewBadgeFeatureUsed_(id) {
        this.userEducation_.notifyNewBadgeFeatureUsed(id);
        this.handler_.getNewBadges().then(({ newBadges }) => {
            this.newBadges_ = newBadges;
        });
    }
    onNewBadgeClearPromoData_(id) {
        this.featurePromoErrorMessage_ = '';
        this.handler_.clearNewBadgeData(id).then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getNewBadges().then(({ newBadges }) => {
                    this.newBadges_ = newBadges;
                    this.requestUpdate();
                });
            }
        });
    }
    onNonIphClearPromoData_(id) {
        this.featurePromoErrorMessage_ = '';
        this.handler_.clearNonIphPromoData(id).then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getNonIphPromos().then(({ nonIphPromos }) => {
                    this.nonIphPromos_ = nonIphPromos;
                    this.requestUpdate();
                });
            }
        });
    }
    onNtpPromoClearPromoData_(id) {
        this.featurePromoErrorMessage_ = '';
        this.handler_.clearNtpPromoData(id).then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getNtpPromos().then(({ ntpPromos }) => {
                    this.ntpPromos_ = ntpPromos;
                    this.requestUpdate();
                });
            }
        });
    }
    onClearWhatsNewData_() {
        this.featurePromoErrorMessage_ = '';
        this.handler_.clearWhatsNewData().then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getWhatsNewModules().then(({ whatsNewModules }) => {
                    this.whatsNewModules_ = whatsNewModules;
                });
                this.handler_.getWhatsNewEditions().then(({ whatsNewEditions }) => {
                    this.whatsNewEditions_ = whatsNewEditions;
                });
            }
        });
    }
    onModuleClearWhatsNewData_(e) {
        this.featurePromoErrorMessage_ = '';
        this.handler_.clearWhatsNewModuleData(e.detail).then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getWhatsNewModules().then(({ whatsNewModules }) => {
                    this.whatsNewModules_ = whatsNewModules;
                });
            }
        });
    }
    onEditionClearWhatsNewData_(e) {
        this.featurePromoErrorMessage_ = '';
        this.handler_.clearWhatsNewEditionData(e.detail).then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getWhatsNewEditions().then(({ whatsNewEditions }) => {
                    this.whatsNewEditions_ = whatsNewEditions;
                });
            }
        });
    }
    onClearNtpPromoPreferencesClick_() {
        this.handler_.clearNtpPromoPreferences().then(({ errorMessage }) => {
            this.featurePromoErrorMessage_ = errorMessage;
            if (errorMessage !== '') {
                this.$.errorMessageToast.show();
            }
            else {
                this.handler_.getNtpPromoPreferences().then(({ ntpPromoPreferences }) => {
                    this.ntpPromoPreferences_ = ntpPromoPreferences;
                    this.requestUpdate();
                });
            }
        });
    }
    promoFilter_(promo) {
        return this.filter === '' ||
            promo.displayTitle.toLowerCase().includes(this.filter) ||
            promo.displayDescription.toLowerCase().includes(this.filter) ||
            promo.instructions.find((instruction) => instruction.toLowerCase().includes(this.filter)) ||
            promo.supportedPlatforms.find((platform) => platform.toLowerCase().includes(this.filter));
    }
    whatsNewFilter_(item) {
        return this.filter === '' ||
            item.displayTitle.toLowerCase().includes(this.filter);
    }
    /**
     * Prevent clicks on sidebar items from navigating.
     */
    onLinkClick_(event) {
        event.preventDefault();
    }
    onSelectorIronActivate_(event) {
        this.$.menu.selected = event.detail.selected;
        const index = Number(event.detail.selected);
        if (index >= 0) {
            this.$.selector.removeAttribute('show-all');
            this.selectedTabIndex = index;
        }
        else {
            this.$.selector.setAttribute('show-all', 'true');
        }
    }
    onNarrowChanged_(e) {
        this.narrow_ = e.detail.value;
    }
    onSessionExpandedChanged_(e) {
        this.sessionExpanded_ = e.detail.value;
    }
    onNtpPromoPreferencesExpandedChanged_(e) {
        this.ntpPromoPreferencesExpanded_ = e.detail.value;
    }
    // 
    onClearWhatsNewDataClick_() {
        if (!confirm('Clear all What\'s New data?\n' +
            'This affects module order, edition use, and version history' +
            ' data.')) {
            return;
        }
        this.onClearWhatsNewData_();
    }
    onLaunchWhatsNewStagingClick_() {
        this.handler_.launchWhatsNewStaging();
    }
    onWhatsNewVersionOverrideClick_() {
        if (!this.$.whatsNewVersionOverride.validate()) {
            return;
        }
        const versionOverride = Number.parseInt(this.$.whatsNewVersionOverride.value);
        if (Number.isNaN(versionOverride)) {
            return;
        }
        this.handler_.updateWhatsNewVersionOverride(versionOverride);
        this.whatsNewVersionToRequest_ = versionOverride;
    }
}
customElements.define(UserEducationInternalsElement.is, UserEducationInternalsElement);
