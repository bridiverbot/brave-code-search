// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { htmlEscape } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ManageProfilesBrowserProxyImpl } from './manage_profiles_browser_proxy.js';
import { getCss } from './profile_card_menu.css.js';
import { getHtml } from './profile_card_menu.html.js';
import { createDummyProfileState } from './profile_picker_util.js';
/**
 * Profile statistics data types.
 */
var ProfileStatistics;
(function (ProfileStatistics) {
    ProfileStatistics["BROWSING_HISTORY"] = "BrowsingHistory";
    ProfileStatistics["PASSWORDS"] = "Passwords";
    ProfileStatistics["BOOKMARKS"] = "Bookmarks";
    ProfileStatistics["AUTOFILL"] = "Autofill";
})(ProfileStatistics || (ProfileStatistics = {}));
const ProfileCardMenuElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class ProfileCardMenuElement extends ProfileCardMenuElementBase {
    static get is() {
        return 'profile-card-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            profileState: { type: Object },
            /**
             * Results of profile statistics, keyed by the suffix of the corresponding
             * data type, as reported by the C++ side.
             */
            statistics_: { type: Object },
            /**
             * List of selected data types.
             */
            profileStatistics_: { type: Array },
            moreActionsButtonAriaLabel_: { type: String },
            removeWarningText_: { type: String },
            removeWarningTitle_: { type: String },
        };
    }
    #profileState_accessor_storage = createDummyProfileState();
    get profileState() { return this.#profileState_accessor_storage; }
    set profileState(value) { this.#profileState_accessor_storage = value; }
    #statistics__accessor_storage = {
        BrowsingHistory: 0,
        Passwords: 0,
        Bookmarks: 0,
        Autofill: 0,
    };
    get statistics_() { return this.#statistics__accessor_storage; }
    set statistics_(value) { this.#statistics__accessor_storage = value; }
    #moreActionsButtonAriaLabel__accessor_storage = '';
    get moreActionsButtonAriaLabel_() { return this.#moreActionsButtonAriaLabel__accessor_storage; }
    set moreActionsButtonAriaLabel_(value) { this.#moreActionsButtonAriaLabel__accessor_storage = value; }
    #profileStatistics__accessor_storage = [
        ProfileStatistics.BROWSING_HISTORY,
        ProfileStatistics.PASSWORDS,
        ProfileStatistics.BOOKMARKS,
        ProfileStatistics.AUTOFILL,
    ];
    get profileStatistics_() { return this.#profileStatistics__accessor_storage; }
    set profileStatistics_(value) { this.#profileStatistics__accessor_storage = value; }
    #removeWarningText__accessor_storage = '';
    get removeWarningText_() { return this.#removeWarningText__accessor_storage; }
    set removeWarningText_(value) { this.#removeWarningText__accessor_storage = value; }
    #removeWarningTitle__accessor_storage = '';
    get removeWarningTitle_() { return this.#removeWarningTitle__accessor_storage; }
    set removeWarningTitle_(value) { this.#removeWarningTitle__accessor_storage = value; }
    manageProfilesBrowserProxy_ = ManageProfilesBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('profiles-list-changed', () => this.handleProfilesUpdated_());
        this.addWebUiListener('profile-removed', this.handleProfileRemoved_.bind(this));
        this.addWebUiListener('profile-statistics-received', this.handleProfileStatsReceived_.bind(this));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('profileState')) {
            this.moreActionsButtonAriaLabel_ =
                this.computeMoreActionsButtonAriaLabel_();
            this.removeWarningTitle_ = this.computeRemoveWarningTitle_();
            this.removeWarningText_ = this.computeRemoveWarningText_();
        }
    }
    computeMoreActionsButtonAriaLabel_() {
        // `localProfileName` has to be escaped because it's user-provided and may
        // contain HTML tags, which makes `i18n()` unhappy. See
        // https://crbug.com/400338974.
        return this.i18n('profileMenuAriaLabel', htmlEscape(this.profileState.localProfileName));
    }
    computeRemoveWarningText_() {
        return this.i18n(this.profileState.isSyncing ? 'removeWarningSignedInProfile' :
            'removeWarningLocalProfile');
    }
    computeRemoveWarningTitle_() {
        return this.i18n(this.profileState.isSyncing ? 'removeWarningSignedInProfileTitle' :
            'removeWarningLocalProfileTitle');
    }
    onMoreActionsButtonClick_(e) {
        e.stopPropagation();
        e.preventDefault();
        this.$.actionMenu.showAt(this.$.moreActionsButton);
        chrome.metricsPrivate.recordUserAction('ProfilePicker_ThreeDottedMenuClicked');
    }
    onRemoveButtonClick_(e) {
        e.stopPropagation();
        e.preventDefault();
        this.manageProfilesBrowserProxy_.getProfileStatistics(this.profileState.profilePath);
        this.$.actionMenu.close();
        this.$.removeConfirmationDialog.showModal();
        chrome.metricsPrivate.recordUserAction('ProfilePicker_RemoveOptionClicked');
    }
    handleProfileStatsReceived_(result) {
        if (result.profilePath !== this.profileState.profilePath) {
            return;
        }
        this.statistics_ = result.statistics;
    }
    getProfileStatisticText_(dataType) {
        switch (dataType) {
            case ProfileStatistics.BROWSING_HISTORY:
                return this.i18n('removeWarningHistory');
            case ProfileStatistics.PASSWORDS:
                return this.i18n('removeWarningPasswords');
            case ProfileStatistics.BOOKMARKS:
                return this.i18n('removeWarningBookmarks');
            case ProfileStatistics.AUTOFILL:
                return this.i18n('removeWarningAutofill');
            default:
                assertNotReached();
        }
    }
    getProfileStatisticCount_(dataType) {
        const count = this.statistics_[dataType];
        return (count === undefined) ? this.i18n('removeWarningCalculating') :
            count.toString();
    }
    onRemoveConfirmationClick_(e) {
        e.stopPropagation();
        e.preventDefault();
        this.manageProfilesBrowserProxy_.removeProfile(this.profileState.profilePath);
    }
    onRemoveCancelClick_() {
        this.$.removeConfirmationDialog.cancel();
        this.manageProfilesBrowserProxy_.closeProfileStatistics();
    }
    /**
     * Ensure any menu is closed on profile list updated.
     */
    handleProfilesUpdated_() {
        this.$.actionMenu.close();
    }
    /**
     * Closes the remove confirmation dialog when the profile is removed.
     */
    handleProfileRemoved_(profilePath) {
        this.handleProfilesUpdated_();
        if (this.profileState.profilePath === profilePath) {
            this.$.removeConfirmationDialog.close();
        }
    }
    onCustomizeButtonClick_() {
        this.manageProfilesBrowserProxy_.openManageProfileSettingsSubPage(this.profileState.profilePath);
        this.$.actionMenu.close();
    }
}
customElements.define(ProfileCardMenuElement.is, ProfileCardMenuElement);
